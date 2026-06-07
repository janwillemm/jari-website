#!/usr/bin/env node
/**
 * Sync jari-website/ from the monorepo to janwillemm/jari-website and push.
 * GitHub Pages deploys from that separate repository.
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const WEBSITE_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MONO_ROOT = join(WEBSITE_ROOT, "..");
const REMOTE_URL =
  process.env.JARI_WEBSITE_REMOTE ?? "git@github.com:janwillemm/jari-website.git";
const CHECKOUT_DIR = join(WEBSITE_ROOT, ".deploy", "checkout");
const REMOTE_BRANCH = process.env.JARI_WEBSITE_BRANCH ?? "main";

const RSYNC_EXCLUDES = [
  ".git",
  ".deploy",
  ".jekyll-cache",
  "_site",
  "node_modules",
  ".tmp",
  ".cursor",
  "home",
  "package.json",
  "package-lock.json",
];

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const noPush = args.includes("--no-push");
const messageIndex = args.indexOf("-m");
const commitMessage =
  messageIndex >= 0
    ? args.slice(messageIndex + 1).join(" ").trim()
    : defaultCommitMessage();

function run(command, commandArgs, options = {}) {
  const result = spawnSync(command, commandArgs, {
    stdio: "inherit",
    cwd: options.cwd,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
  return result;
}

function runCapture(command, commandArgs, options = {}) {
  const result = spawnSync(command, commandArgs, {
    stdio: ["ignore", "pipe", "inherit"],
    cwd: options.cwd,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
  return result.stdout.trim();
}

function defaultCommitMessage() {
  try {
    const subject = runCapture("git", ["log", "-1", "--format=%s", "--", "jari-website/"], {
      cwd: MONO_ROOT,
    });
    if (subject) return subject;
  } catch {
    // fall through
  }
  return "Update website from monorepo";
}

function ensureCheckout() {
  mkdirSync(dirname(CHECKOUT_DIR), { recursive: true });
  if (!existsSync(join(CHECKOUT_DIR, ".git"))) {
    console.log(`Cloning ${REMOTE_URL} → ${CHECKOUT_DIR}`);
    run("git", ["clone", "--branch", REMOTE_BRANCH, REMOTE_URL, CHECKOUT_DIR]);
    return;
  }

  run("git", ["fetch", "origin", REMOTE_BRANCH], { cwd: CHECKOUT_DIR });
  run("git", ["checkout", REMOTE_BRANCH], { cwd: CHECKOUT_DIR });
  run("git", ["pull", "--ff-only", "origin", REMOTE_BRANCH], { cwd: CHECKOUT_DIR });
}

function syncFiles() {
  const rsyncArgs = ["-av", ...RSYNC_EXCLUDES.flatMap((item) => ["--exclude", item])];
  if (dryRun) rsyncArgs.unshift("--dry-run");
  rsyncArgs.push(`${WEBSITE_ROOT}/`, `${CHECKOUT_DIR}/`);
  console.log("Syncing website files…");
  run("rsync", rsyncArgs);
}

function hasChanges() {
  const status = runCapture("git", ["status", "--porcelain"], { cwd: CHECKOUT_DIR });
  return status.length > 0;
}

function main() {
  if (!commitMessage) {
    console.error("Commit message required: use -m \"your message\"");
    process.exit(1);
  }

  ensureCheckout();
  syncFiles();

  if (dryRun) {
    console.log("Dry run complete (no commit or push).");
    return;
  }

  if (!hasChanges()) {
    console.log("No changes to deploy.");
    return;
  }

  run("git", ["add", "-A"], { cwd: CHECKOUT_DIR });
  run("git", ["commit", "-m", commitMessage], { cwd: CHECKOUT_DIR });

  if (noPush) {
    console.log(`Committed locally in ${CHECKOUT_DIR} (--no-push).`);
    return;
  }

  run("git", ["push", "origin", REMOTE_BRANCH], { cwd: CHECKOUT_DIR });
  console.log("Pushed to GitHub Pages repository.");
}

main();

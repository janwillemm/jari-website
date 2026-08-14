---
layout: default
title: Toolpagina preview
sitemap: false
---

<style>
  .page-switcher {
    position: fixed;
    top: 5.25rem;
    right: 1rem;
    z-index: 50;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem;
    background: #ffffff;
    border: 2px solid #1e4246;
    border-radius: 0.75rem;
    box-shadow: 4px 4px 0 rgba(28, 43, 48, 0.15);
    font-family: "DM Sans", system-ui, sans-serif;
    min-width: 11.5rem;
    max-height: calc(100vh - 6.5rem);
    overflow-y: auto;
  }
  .page-switcher__label {
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #48a898;
  }
  .page-switcher__group {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }
  .page-switcher__group + .page-switcher__group {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid #dde4e6;
  }
  .page-switcher__btn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.125rem;
    padding: 0.5rem 0.625rem;
    border: 1.5px solid #dde4e6;
    border-radius: 0.5rem;
    background: #faf8f5;
    color: #1c2b30;
    text-align: left;
    cursor: pointer;
    font: inherit;
    transition: border-color 0.15s, background 0.15s;
  }
  .page-switcher__btn:hover,
  .page-switcher__btn:focus-visible {
    border-color: #48a898;
    background: #ffffff;
    outline: none;
  }
  .page-switcher__btn[aria-pressed="true"] {
    border-color: #1e4246;
    background: #1e4246;
    color: #ffffff;
  }
  .page-switcher__btn[aria-pressed="true"] .page-switcher__btn-sub {
    color: #c5e4ea;
  }
  .page-switcher__btn-title {
    font-weight: 700;
    font-size: 0.8125rem;
  }
  .page-switcher__btn-sub {
    font-size: 0.6875rem;
    color: #6b7f85;
  }
  @media (max-width: 47.99rem) {
    .page-switcher {
      top: auto;
      bottom: 1rem;
      right: 1rem;
      left: 1rem;
      max-height: 40vh;
      min-width: 0;
    }
  }

  .page-variant { display: none; margin: 0; }
  .page-variant.is-active { display: block; }

  /* Ruimte & flow: echte toolpagina-look */
  .page-variant .tool-detail__header {
    padding-block: 2.75rem 3rem;
  }
  .page-variant .tool-detail__body {
    padding-block: 2.75rem 4rem;
  }
  .page-variant .tool-detail__lead {
    margin-top: 0.75rem;
  }
  .page-variant .tool-detail__cta {
    margin-top: 1.75rem;
  }
  .page-variant .tool-detail__content > * {
    margin-bottom: 0;
  }
  .page-variant .tool-detail__content > * + * {
    margin-top: 2.5rem;
  }
  .page-variant .tool-detail__content > .section__header {
    margin-top: 3.25rem;
    margin-bottom: 0;
    padding-top: 2.25rem;
    border-top: 1px solid #dde4e6;
  }
  .page-variant .tool-detail__content > .section__header + * {
    margin-top: 1.25rem;
  }
  .page-variant .tool-detail__content > .pv-cta {
    margin-top: 3.5rem;
  }
  .page-variant .tool-detail__content > :first-child.section__header {
    border-top: 0;
    padding-top: 0;
    margin-top: 0;
  }
  .page-variant > .page-variant__analysis {
    margin-top: 1rem;
    margin-bottom: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  /* Zachte achtergrondvlakken voor grotere blokken */
  .page-variant .tool-detail__content > .pv-faq,
  .page-variant .tool-detail__content > .pv-related,
  .page-variant .tool-detail__content > .pv-pillars,
  .page-variant .tool-detail__content > .pv-makers,
  .page-variant .tool-detail__content > .pv-compare {
    padding: 1.5rem 1.35rem;
    background: #f6f7f5;
    border-radius: 0.75rem;
  }
  .page-variant .tool-detail__content > .pv-scenarios {
    padding: 0.25rem 0;
  }
  .page-variant .tool-detail__content > .highlight-box.tool-detail__uses {
    margin: 0;
    padding: 1.75rem 1.5rem;
  }
  .page-variant .tool-detail__content > .pv-prose {
    max-width: 40rem;
  }
  .page-variant .tool-detail__content > .pv-prose p + p {
    margin-top: 1rem;
  }

  .page-variant__analysis {
    max-width: 48rem;
    margin: 0 auto 3rem;
    padding: 1.25rem 1.5rem;
    background: #fff8ef;
    border: 1px solid #f0d9b5;
    border-radius: 0.75rem;
    font-size: 0.875rem;
    color: #4a5e63;
    line-height: 1.65;
  }
  .page-variant__analysis strong { color: #1e4246; }
  .page-variant__analysis h3 {
    margin: 0 0 0.65rem;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1rem;
    color: #1e4246;
  }
  .page-variant__analysis p + p { margin-top: 0.65rem; }
  .page-variant__analysis ul {
    margin: 0.65rem 0 0;
    padding-left: 1.15rem;
  }
  .page-variant__analysis li + li { margin-top: 0.4rem; }

  .pv-answer {
    max-width: 42rem;
    margin: 0;
    padding: 1.35rem 1.5rem;
    background: #ffffff;
    border: 2px solid #1e4246;
    border-radius: 0.75rem;
    box-shadow: 4px 4px 0 rgba(28, 43, 48, 0.1);
    font-size: 1.0625rem;
    line-height: 1.6;
    color: #1c2b30;
  }

  .pv-facts {
    display: grid;
    gap: 1rem;
    margin: 0;
    list-style: none;
    padding: 0;
  }
  @media (min-width: 48rem) {
    .pv-facts { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  }
  .pv-facts__item {
    padding: 1rem 1.1rem;
    background: #ffffff;
    border: 1.5px solid #dde4e6;
    border-top: 4px solid #48a898;
    border-radius: 0.5rem;
  }
  .pv-facts__label {
    display: block;
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #6b7f85;
    margin-bottom: 0.125rem;
  }
  .pv-facts__value {
    font-family: "Fraunces", Georgia, serif;
    font-weight: 600;
    color: #1e4246;
    font-size: 0.9375rem;
    line-height: 1.35;
  }

  .pv-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0;
    font-size: 0.9375rem;
  }
  .pv-table th,
  .pv-table td {
    padding: 0.85rem 1rem;
    border: 1px solid #dde4e6;
    text-align: left;
    vertical-align: top;
  }
  .pv-table th {
    background: #f4f6f4;
    color: #1e4246;
    font-weight: 700;
    width: 30%;
  }
  .pv-table td { color: #4a5e63; }

  .pv-compare {
    display: grid;
    gap: 1rem;
    margin: 0;
  }
  @media (min-width: 48rem) {
    .pv-compare { grid-template-columns: 1fr 1fr; }
  }
  .pv-compare__card {
    padding: 1.25rem 1.35rem;
    background: #faf8f5;
    border-radius: 0.5rem;
    border: 1.5px solid #dde4e6;
  }
  .pv-compare__card h3 {
    margin: 0 0 0.5rem;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1.0625rem;
    color: #1e4246;
  }
  .pv-compare__card ul {
    margin: 0;
    padding-left: 1.1rem;
    color: #4a5e63;
    font-size: 0.875rem;
    line-height: 1.55;
  }

  .pv-steps {
    display: grid;
    gap: 1.25rem;
    margin: 0;
    list-style: none;
    padding: 0;
    counter-reset: step;
  }
  @media (min-width: 48rem) {
    .pv-steps { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  .pv-steps__step {
    position: relative;
    padding: 1.5rem 1.35rem 1.5rem 3.25rem;
    background: #ffffff;
    border: 2px solid #1e4246;
    border-radius: 0.75rem;
    box-shadow: 4px 4px 0 rgba(28, 43, 48, 0.12);
    counter-increment: step;
  }
  .pv-steps__step::before {
    content: counter(step);
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    display: grid;
    place-items: center;
    background: #48a898;
    color: #ffffff;
    font-family: "Fraunces", Georgia, serif;
    font-weight: 700;
    border-radius: 50%;
    font-size: 0.875rem;
  }
  .pv-steps__title {
    margin: 0 0 0.375rem;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1.0625rem;
    font-weight: 600;
    color: #1e4246;
  }
  .pv-steps__text {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.6;
    color: #4a5e63;
  }

  .pv-scenarios {
    display: grid;
    gap: 1rem;
    margin: 0;
    list-style: none;
    padding: 0;
  }
  @media (min-width: 48rem) {
    .pv-scenarios { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  .pv-scenarios__item {
    padding: 1.25rem 1.35rem;
    background: #f2efe8;
    border-radius: 0.5rem;
    border-left: 4px solid #f1b062;
  }
  .pv-scenarios__tag {
    display: block;
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #b87a2a;
    margin-bottom: 0.25rem;
  }
  .pv-scenarios__title {
    margin: 0 0 0.25rem;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1rem;
    font-weight: 600;
    color: #1e4246;
  }
  .pv-scenarios__text {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.55;
    color: #4a5e63;
  }

  .pv-distinctions {
    display: grid;
    gap: 1rem;
    margin: 0;
    list-style: none;
    padding: 0;
  }
  @media (min-width: 48rem) {
    .pv-distinctions { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  .pv-distinctions__item {
    padding: 1.15rem 1.25rem;
    background: #faf8f5;
    border-radius: 0.5rem;
  }
  .pv-distinctions__item strong {
    display: block;
    color: #1e4246;
    font-size: 0.9375rem;
    margin-bottom: 0.25rem;
  }
  .pv-distinctions__item span {
    color: #4a5e63;
    font-size: 0.875rem;
    line-height: 1.55;
  }

  .pv-outcome {
    display: grid;
    gap: 1.5rem;
    margin: 0;
  }
  @media (min-width: 48rem) {
    .pv-outcome {
      grid-template-columns: 1.35fr 1fr;
      align-items: center;
    }
  }
  .pv-outcome__media {
    border: 2px solid #1e4246;
    border-radius: 0.75rem;
    overflow: hidden;
    background: #c5e4ea;
    aspect-ratio: 16 / 9;
  }
  .pv-outcome__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .pv-outcome__caption {
    font-size: 0.8125rem;
    color: #6b7f85;
    margin: 0.375rem 0 0;
  }

  .pv-legend {
    display: grid;
    gap: 1rem;
    margin: 0;
    list-style: none;
    padding: 0;
  }
  @media (min-width: 48rem) {
    .pv-legend { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  .pv-legend__item {
    padding: 1.1rem 1.15rem;
    background: #faf8f5;
    border-radius: 0.5rem;
    border-top: 4px solid;
  }
  .pv-legend__item--bloom { border-top-color: #48a898; }
  .pv-legend__item--grow { border-top-color: #f1b062; }
  .pv-legend__item--space { border-top-color: #8da785; }
  .pv-legend__title {
    margin: 0 0 0.25rem;
    font-family: "Fraunces", Georgia, serif;
    font-weight: 600;
    color: #1e4246;
    font-size: 0.9375rem;
  }
  .pv-legend__text {
    margin: 0;
    font-size: 0.8125rem;
    line-height: 1.55;
    color: #4a5e63;
  }

  .pv-makers {
    display: grid;
    gap: 1.25rem;
    margin: 0;
  }
  @media (min-width: 48rem) {
    .pv-makers { grid-template-columns: 1fr 1fr; }
  }
  .pv-maker {
    display: grid;
    grid-template-columns: 4.5rem 1fr;
    gap: 0.875rem;
    padding: 1rem;
    background: #ffffff;
    border: 1.5px solid #dde4e6;
    border-radius: 0.75rem;
    align-items: start;
  }
  .pv-maker img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #1e4246;
  }
  .pv-maker h3 {
    margin: 0 0 0.15rem;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1rem;
    color: #1e4246;
  }
  .pv-maker__role {
    margin: 0 0 0.35rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: #48a898;
  }
  .pv-maker p {
    margin: 0;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: #4a5e63;
  }
  .pv-makers--compact {
    grid-template-columns: 1fr;
  }
  @media (min-width: 48rem) {
    .pv-makers--compact { grid-template-columns: 1fr 1fr; }
  }
  .pv-makers--compact .pv-maker {
    grid-template-columns: 3.25rem 1fr;
    gap: 0.75rem;
    padding: 0.75rem;
  }
  .pv-makers--compact .pv-maker img {
    width: 3.25rem;
    height: 3.25rem;
  }
  .pv-makers--compact .pv-maker p { display: none; }
  .pv-byline {
    margin: 0;
    font-size: 0.8125rem;
    color: #6b7f85;
    line-height: 1.5;
  }
  .pv-byline strong { color: #1e4246; }

  .pv-trust {
    margin: 0;
    padding: 1.25rem 1.5rem;
    background: #d4ede8;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.55;
    color: #1e4246;
  }
  .pv-trust p { margin: 0 0 0.5rem; }
  .pv-trust p:last-child { margin-bottom: 0; }
  .pv-meta {
    font-size: 0.75rem;
    color: #6b7f85;
    margin: 0.75rem 0 0;
  }

  .pv-breadcrumb {
    margin: 0 0 0.75rem;
    font-size: 0.8125rem;
    color: #6b7f85;
  }
  .pv-breadcrumb a { color: #48a898; }

  .pv-related {
    display: grid;
    gap: 1rem;
    margin: 0;
    list-style: none;
    padding: 0;
  }
  @media (min-width: 48rem) {
    .pv-related { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }
  .pv-related a {
    display: block;
    padding: 1.15rem 1.25rem;
    background: #faf8f5;
    border: 1.5px solid #dde4e6;
    border-radius: 0.5rem;
    text-decoration: none;
    color: inherit;
  }
  .pv-related a:hover { border-color: #48a898; }
  .pv-related strong {
    display: block;
    color: #1e4246;
    font-size: 0.9375rem;
    margin-bottom: 0.2rem;
  }
  .pv-related span {
    font-size: 0.8125rem;
    color: #6b7f85;
    line-height: 1.45;
  }

  .pv-pillars {
    display: grid;
    gap: 0.75rem;
    margin: 0;
    list-style: none;
    padding: 0;
  }
  @media (min-width: 48rem) {
    .pv-pillars { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  .pv-pillars li {
    padding: 0.9rem 1rem;
    background: #ffffff;
    border: 1px solid #dde4e6;
    border-radius: 0.4rem;
    font-size: 0.875rem;
    color: #4a5e63;
  }
  .pv-pillars strong { color: #1e4246; }

  .pv-prose {
    max-width: 42rem;
    margin: 0;
    font-size: 1rem;
    line-height: 1.65;
    color: #4a5e63;
  }
  .pv-prose p { margin: 0 0 0.85rem; }
  .pv-prose p:last-child { margin-bottom: 0; }

  .pv-faq { margin: 0; }
  .pv-faq article {
    padding: 1.15rem 0;
    border-bottom: 1px solid #dde4e6;
  }
  .pv-faq article:first-child { border-top: 1px solid #dde4e6; }
  .pv-faq h3,
  .pv-faq .pv-faq__q {
    margin: 0 0 0.35rem;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1rem;
    font-weight: 600;
    color: #1e4246;
  }
  .pv-faq p {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.55;
    color: #4a5e63;
  }

  .pv-cta {
    margin-top: 0;
    padding: 1.75rem 1.75rem;
    background: #1e4246;
    color: #ffffff;
    border-radius: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.25rem;
    align-items: center;
    justify-content: space-between;
  }
  .pv-cta p { margin: 0; font-size: 0.9375rem; }
  .pv-cta__btns { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .pv-cta__btn {
    padding: 0.5rem 1rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.875rem;
    border: 2px solid #c5e4ea;
    background: #c5e4ea;
    color: #1e4246;
    cursor: pointer;
  }
  .pv-cta__btn--ghost {
    background: transparent;
    color: #c5e4ea;
  }

  .pv-visual-path {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 0;
  }
  .pv-visual-path__step {
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    gap: 1rem;
    align-items: start;
  }
  .pv-visual-path__rail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pv-visual-path__dot {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #48a898;
    color: #fff;
    display: grid;
    place-items: center;
    font-family: "Fraunces", Georgia, serif;
    font-weight: 700;
    font-size: 0.875rem;
    flex-shrink: 0;
  }
  .pv-visual-path__line {
    width: 3px;
    flex: 1;
    min-height: 1.5rem;
    background: #c5e4ea;
  }
  .pv-visual-path__body {
    padding-bottom: 2rem;
  }
  .pv-visual-path__body h3 {
    margin: 0.15rem 0 0.35rem;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1.125rem;
    color: #1e4246;
  }
  .pv-visual-path__body p {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 1.55;
    color: #4a5e63;
  }

  .section__header { margin: 0; }
  .section__header h2 {
    margin: 0;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1.25rem;
    color: #1e4246;
  }
  .section__header p {
    margin: 0.35rem 0 0;
    font-size: 0.875rem;
    color: #6b7f85;
  }

  /* (flow/spacing handled above) */
  .page-variant .tool-detail__content > .pv-trust {
    background: #d4ede8;
  }
  @media (min-width: 48rem) {
    .page-variant .page-variant__analysis {
      margin-left: auto;
      margin-right: auto;
      max-width: 52rem;
    }
  }


  .pv-header-media {
    border: 2px solid #1e4246;
    border-radius: 0.75rem;
    overflow: hidden;
    background: #c5e4ea;
    aspect-ratio: 16 / 9;
    box-shadow: 4px 4px 0 rgba(28, 43, 48, 0.1);
  }
  .pv-header-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .page-variant .tool-detail__header-main .tool-detail__lead {
    max-width: 36rem;
  }
  .page-variant .tool-detail__header-main .pv-byline {
    margin-top: 0.75rem;
  }

</style>

<nav class="page-switcher" aria-label="Variantkiezer">
  <span class="page-switcher__label">Fase 1 · Één principe</span>
  <div class="page-switcher__group">
    <button type="button" class="page-switcher__btn" data-variant="1" aria-pressed="true">
      <span class="page-switcher__btn-title">1 · AEO</span>
      <span class="page-switcher__btn-sub">Antwoord &amp; citatie</span>
    </button>
    <button type="button" class="page-switcher__btn" data-variant="2" aria-pressed="false">
      <span class="page-switcher__btn-title">2 · SEO</span>
      <span class="page-switcher__btn-sub">Structuur &amp; links</span>
    </button>
    <button type="button" class="page-switcher__btn" data-variant="3" aria-pressed="false">
      <span class="page-switcher__btn-title">3 · Kort</span>
      <span class="page-switcher__btn-sub">Minimale pagina</span>
    </button>
    <button type="button" class="page-switcher__btn" data-variant="4" aria-pressed="false">
      <span class="page-switcher__btn-title">4 · Visueel</span>
      <span class="page-switcher__btn-sub">Flow &amp; beeld</span>
    </button>
    <button type="button" class="page-switcher__btn" data-variant="5" aria-pressed="false">
      <span class="page-switcher__btn-title">5 · EEAT</span>
      <span class="page-switcher__btn-sub">Vertrouwen</span>
    </button>
    <button type="button" class="page-switcher__btn" data-variant="6" aria-pressed="false">
      <span class="page-switcher__btn-title">6 · Taakgericht</span>
      <span class="page-switcher__btn-sub">Stappen &amp; situaties</span>
    </button>
  </div>
  <span class="page-switcher__label">Fase 2 · Combinaties</span>
  <div class="page-switcher__group">
    <button type="button" class="page-switcher__btn" data-variant="a" aria-pressed="false">
      <span class="page-switcher__btn-title">A · Citatie-klaar</span>
      <span class="page-switcher__btn-sub">AEO + kort + EEAT</span>
    </button>
    <button type="button" class="page-switcher__btn" data-variant="b" aria-pressed="false">
      <span class="page-switcher__btn-title">B · Scanbaar pad</span>
      <span class="page-switcher__btn-sub">AEO + visueel + taak</span>
    </button>
    <button type="button" class="page-switcher__btn" data-variant="c" aria-pressed="false">
      <span class="page-switcher__btn-title">C · Volledige IA</span>
      <span class="page-switcher__btn-sub">AEO + SEO + EEAT</span>
    </button>
  </div>
</nav>

<!-- ========== 1 AEO ========== -->
<section class="page-variant is-active" data-variant="1">
  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <a class="tool-detail__back" href="/tools/"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom ACT Profiel Jeugd</h1>
            <p class="tool-detail__lead">
              Bloom ACT Profiel Jeugd van InteractGGZ is een digitaal hulpmiddel waarmee kinderen en
              jongeren (10+) in 5–10 minuten (36 vragen) een visueel ACT-profiel krijgen als persoonlijke
              Bloom-tuin. Het is geen diagnostische test. Orthopedagoog-generalist Rianne Manenschijn
              en serious game designer Jan-Willem Manenschijn ontwikkelden het als gespreksstarter
              voor behandelaar, kind en ouders.
            </p>
          </div>
          <figure class="tool-detail__preview">
            <div class="pv-header-media">
              <img src="{{ '/assets/images/tools/bloom.png' | relative_url }}" alt="Screenshot van de Bloom-tuin met zes ACT-thema's" loading="eager" width="960" height="540">
            </div>
            <figcaption>Voorbeeld van een persoonlijke Bloom-tuin</figcaption>
          </figure>
        </div>
      </div>
    </header>
    <div class="container tool-detail__body">
      <div class="tool-detail__content">

        <table class="pv-table">
          <tbody>
            <tr><th>Voor wie</th><td>Kinderen en jongeren vanaf ongeveer 10 jaar; GGZ-behandelaren</td></tr>
            <tr><th>Duur</th><td>5–10 minuten · 36 korte vragen</td></tr>
            <tr><th>Wat krijg je</th><td>Visueel ACT-profiel (zes pijlers) als Bloom-tuin</td></tr>
            <tr><th>Wat het niet is</th><td>Geen diagnostische test; vervangt geen klinisch oordeel</td></tr>
            <tr><th>Prijs</th><td>€7,99 per jaar</td></tr>
            <tr><th>Makers</th><td>InteractGGZ — Rianne Manenschijn &amp; Jan-Willem Manenschijn</td></tr>
          </tbody>
        </table>

        <div class="section__header">
          <h2>Hoe werkt Bloom ACT Profiel Jeugd?</h2>
        </div>
        <ol class="pv-steps">
          <li class="pv-steps__step">
            <h3 class="pv-steps__title">Invullen</h3>
            <p class="pv-steps__text">Het kind beantwoordt 36 korte, concrete vragen over gedachten, gevoelens, aandacht, waarden en handelen.</p>
          </li>
          <li class="pv-steps__step">
            <h3 class="pv-steps__title">Tuin groeit</h3>
            <p class="pv-steps__text">Onderaan het scherm groeit een persoonlijke tuin die de zes ACT-processen zichtbaar maakt.</p>
          </li>
          <li class="pv-steps__step">
            <h3 class="pv-steps__title">Bespreken</h3>
            <p class="pv-steps__text">Behandelaar, kind en ouders gebruiken de tuin als gezamenlijke taal voor behandelrichting.</p>
          </li>
        </ol>

        <div class="section__header">
          <h2>Hoe verschilt Bloom van de FIT-60?</h2>
        </div>
        <div class="pv-compare">
          <div class="pv-compare__card">
            <h3>FIT-60</h3>
            <ul>
              <li>Voor volwassenen</li>
              <li>Klassieke vragenlijst</li>
              <li>Meet psychologische flexibiliteit</li>
            </ul>
          </div>
          <div class="pv-compare__card">
            <h3>Bloom ACT Profiel Jeugd</h3>
            <ul>
              <li>Voor jeugd vanaf ~10 jaar</li>
              <li>Visuele tuinervaring</li>
              <li>Zelfde zes ACT-processen, speels en laagdrempelig</li>
            </ul>
          </div>
        </div>

        <div class="section__header">
          <h2>Is Bloom een diagnostische test?</h2>
        </div>
        <div class="pv-faq">
          <article>
            <h3>Is Bloom een diagnostische test?</h3>
            <p>Nee. Bloom is geen diagnostisch instrument en vervangt geen klinische beoordeling. De uitkomst is een gespreksstarter en hulpmiddel bij behandelrichting, ontwikkeld door InteractGGZ voor de jeugd-ggz.</p>
          </article>
          <article>
            <h3>Vanaf welke leeftijd is Bloom geschikt?</h3>
            <p>Vanaf ongeveer 10 jaar. De vragen zijn kort en concreet. Bij jongere kinderen of moeite met lezen kan de behandelaar samen invullen.</p>
          </article>
          <article>
            <h3>Hoe lang duurt het invullen van Bloom?</h3>
            <p>36 korte vragen. De meeste kinderen en jongeren zijn in 5 tot 10 minuten klaar.</p>
          </article>
          <article>
            <h3>Wat meet Bloom precies?</h3>
            <p>Zes ACT-processen: acceptatie, defusie, hier-en-nu, zelf-als-context, waarden en toegewijd handelen — samen een globale indruk van psychologische flexibiliteit.</p>
          </article>
          <article>
            <h3>Moet een behandelaar ACT-ervaring hebben?</h3>
            <p>Basiskennis van ACT is aan te raden. De betekenis van het Bloom-profiel ontstaat vooral in het gesprek met kind, ouders en behandelaar.</p>
          </article>
          <article>
            <h3>Kan Bloom voortgang meten?</h3>
            <p>Ja, op meerdere momenten opnieuw invullen. Bedoeld voor reflectie en behandelrichting, niet als harde effectmeting.</p>
          </article>
        </div>

        <div class="pv-cta">
          <p>Probeer Bloom vrijblijvend uit of schaf de tool aan (€7,99/jaar).</p>
          <span class="pv-cta__btns">
            <button type="button" class="pv-cta__btn">Probeer uit</button>
            <button type="button" class="pv-cta__btn pv-cta__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>

  <aside class="page-variant__analysis">
    <h3>Analyse — AEO</h3>
    <p><strong>Wint:</strong> extracteerbaar antwoord, feiten, vraag-H2’s, entities (InteractGGZ, ACT, FIT-60, Rianne/Jan-Willem), zichtbare FAQ met ja/nee-eerst.</p>
    <p><strong>Breekt:</strong> droog/technisch; weinig beeld; geen makersfoto’s; geen sfeer; kan “AI-tekst” aanvoelen.</p>
    <p><strong>Verbeteringen binnen AEO:</strong></p>
    <ul>
      <li>Eén productbeeld naast of onder het antwoordblok (zonder accordion).</li>
      <li>FAQ-antwoorden strak houden op 40–80 woorden; dubbele H2/vraag vermijden.</li>
      <li>One-liner “wat het niet is” vroeger in het antwoordblok, niet alleen in de tabel.</li>
    </ul>
  </aside>
</section>

<!-- ========== 2 SEO ========== -->
<section class="page-variant" data-variant="2">
  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <nav class="pv-breadcrumb" aria-label="Broodkruimel">
          <a href="/">Home</a> → <a href="/tools/">Tools</a> → Bloom ACT Profiel Jeugd
        </nav>
        <a class="tool-detail__back" href="/tools/"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom ACT Profiel Jeugd — visueel ACT-profiel voor kinderen vanaf 10 jaar</h1>
            <p class="tool-detail__lead">
              Digitale ACT-tool voor de jeugd-ggz: 36 vragen, 5–10 minuten, uitslag als Bloom-tuin.
              Ontwikkeld door InteractGGZ.
            </p>
          </div>
          <figure class="tool-detail__preview">
            <div class="pv-header-media">
              <img src="{{ '/assets/images/tools/bloom.png' | relative_url }}" alt="Screenshot van de Bloom-tuin met zes ACT-thema's" loading="eager" width="960" height="540">
            </div>
            <figcaption>Voorbeeld van een persoonlijke Bloom-tuin</figcaption>
          </figure>
        </div>
        <div class="btn-group tool-detail__cta">
          <button type="button" class="pv-cta__btn">Probeer uit</button>
          <button type="button" class="pv-cta__btn pv-cta__btn--ghost" style="border-color:#1e4246;color:#1e4246;">Koop · €7,99/jaar</button>
        </div>
      </div>
    </header>
    <div class="container tool-detail__body">
      <div class="tool-detail__content">
        <div class="section__header">
          <h2>Wat is Bloom ACT Profiel Jeugd?</h2>
        </div>
        <div class="pv-prose">
          <p>
            Bloom ACT Profiel Jeugd is een digitale tool voor Acceptance and Commitment Therapy (ACT)
            bij kinderen en jongeren. De tool helpt behandelaars in de jeugd-ggz om psychologische
            flexibiliteit bespreekbaar te maken via een persoonlijke Bloom-tuin.
          </p>
          <p>
            Voor volwassenen bestaat de FIT-60 als ACT-vragenlijst. Voor jeugd misten we een
            laagdrempelige, visuele variant. Daarom ontwikkelde InteractGGZ Bloom.
            Zie ook <a href="/over-ons/">Over ons</a> en de <a href="/ontdekker/">Ontdekker</a>
            voor alle tools.
          </p>
        </div>

        <div class="section__header">
          <h2>Voor wie is deze ACT-tool bedoeld?</h2>
        </div>
        <div class="pv-prose">
          <p>
            Bloom is bedoeld voor kinderen en jongeren vanaf ongeveer 10 jaar, en voor
            GGZ-professionals die met ACT werken of ACT willen introduceren in behandeling,
            groepen of trainingen.
          </p>
        </div>

        <div class="section__header">
          <h2>Welke ACT-pijlers brengt Bloom in beeld?</h2>
        </div>
        <ul class="pv-pillars">
          <li><strong>Acceptatie</strong> — ruimte maken voor lastige gevoelens</li>
          <li><strong>Defusie</strong> — afstand nemen tot gedachten</li>
          <li><strong>Hier-en-nu</strong> — aandacht in het moment</li>
          <li><strong>Zelf-als-context</strong> — perspectief op jezelf</li>
          <li><strong>Waarden</strong> — wat belangrijk is</li>
          <li><strong>Toegewijd handelen</strong> — stappen zetten</li>
        </ul>

        <div class="section__header">
          <h2>Wat kun je met Bloom in de behandeling?</h2>
        </div>
        <div class="highlight-box tool-detail__uses">
          <h3 class="highlight-box__title">Gebruikssituaties</h3>
          <ul>
            <li>Inzicht in de zes ACT-pijlers bij jeugd</li>
            <li>Startpunt voor een ACT-behandeling</li>
            <li>Richting geven aan behandelkeuzes</li>
            <li>Gesprek met kind, jongere of ouders</li>
            <li>Monitoring tijdens behandeling</li>
            <li>Trainingen, groepen of lessen</li>
          </ul>
        </div>

        <div class="section__header">
          <h2>Veelgestelde vragen over Bloom</h2>
        </div>
        <div class="pv-faq">
          <article>
            <h3>Is Bloom een diagnostische test?</h3>
            <p>Nee. Bloom vervangt geen klinische beoordeling. De uitslag is een gespreksstarter.</p>
          </article>
          <article>
            <h3>Hoe lang duurt Bloom?</h3>
            <p>5–10 minuten, 36 vragen.</p>
          </article>
          <article>
            <h3>Wat kost Bloom?</h3>
            <p>€7,99 per jaar. Via de <a href="/ontdekker/">Ontdekker</a> krijg je toegang tot alle tools.</p>
          </article>
        </div>

        <div class="section__header">
          <h2>Gerelateerde tools van InteractGGZ</h2>
        </div>
        <ul class="pv-related">
          <li>
            <a href="/tools/act-avontuur/">
              <strong>ACT Avontuur</strong>
              <span>Defusie-spel voor jeugd · ~5 min</span>
            </a>
          </li>
          <li>
            <a href="/tools/emdr/">
              <strong>EMDR Toolkit</strong>
              <span>Digitale EMDR-lamp met taken</span>
            </a>
          </li>
          <li>
            <a href="/tools/context-driehoek/">
              <strong>Driehoekmodel</strong>
              <span>Casusordening kind–gezin–omgeving</span>
            </a>
          </li>
        </ul>

        <div class="pv-cta">
          <p>Probeer Bloom ACT Profiel Jeugd uit in het portal.</p>
          <span class="pv-cta__btns">
            <button type="button" class="pv-cta__btn">Probeer uit</button>
            <button type="button" class="pv-cta__btn pv-cta__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>

  <aside class="page-variant__analysis">
    <h3>Analyse — SEO</h3>
    <p><strong>Wint:</strong> duidelijke hiërarchie, interne links, topical coverage (ACT-pijlers), related tools, breadcrumb.</p>
    <p><strong>Breekt:</strong> lang en herhalend; weinig scannable feiten; geen sterk antwoordblok; keyword-H1 is zwaar.</p>
    <p><strong>Verbeteringen binnen SEO:</strong></p>
    <ul>
      <li>H1 inkorten tot één primaire frase; rest naar title/description.</li>
      <li>Kernfeiten als definitielijst toevoegen (helpt ook featured snippets).</li>
      <li>FAQ iets langer maken (40–60 woorden) zonder keyword-stuffing.</li>
    </ul>
  </aside>
</section>

<!-- ========== 3 Kort ========== -->
<section class="page-variant" data-variant="3">
  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <a class="tool-detail__back" href="/tools/"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom ACT Profiel Jeugd</h1>
            <p class="tool-detail__lead">
              In 5–10 minuten een visueel ACT-profiel voor kinderen en jongeren (10+) —
              als persoonlijke tuin, geen diagnostische test.
            </p>
          </div>
          <figure class="tool-detail__preview">
            <div class="pv-header-media">
              <img src="{{ '/assets/images/tools/bloom.png' | relative_url }}" alt="Screenshot van de Bloom-tuin met zes ACT-thema's" loading="eager" width="960" height="540">
            </div>
            <figcaption>Voorbeeld van een persoonlijke Bloom-tuin</figcaption>
          </figure>
        </div>
        <div class="btn-group tool-detail__cta">
          <button type="button" class="pv-cta__btn">Probeer uit</button>
          <button type="button" class="pv-cta__btn pv-cta__btn--ghost" style="border-color:#1e4246;color:#1e4246;">Koop · €7,99/jaar</button>
        </div>
      </div>
    </header>
    <div class="container tool-detail__body">
      <div class="tool-detail__content">
        <ul class="pv-facts">
          <li class="pv-facts__item">
            <span class="pv-facts__label">Voor wie</span>
            <span class="pv-facts__value">Kind &amp; jongeren 10+</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Tijd</span>
            <span class="pv-facts__value">5–10 min · 36 vragen</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Uitkomst</span>
            <span class="pv-facts__value">ACT-profiel als tuin</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Niet</span>
            <span class="pv-facts__value">Geen diagnostische test</span>
          </li>
        </ul>

        <ul class="pv-distinctions">
          <li class="pv-distinctions__item">
            <strong>Visueel, niet klassiek</strong>
            <span>Tijdens het invullen groeit een tuin — speels en laagdrempelig.</span>
          </li>
          <li class="pv-distinctions__item">
            <strong>Speciaal voor jeugd</strong>
            <span>Korte, concrete vragen vanaf ongeveer 10 jaar.</span>
          </li>
          <li class="pv-distinctions__item">
            <strong>Direct bruikbaar</strong>
            <span>Gezamenlijke taal voor behandelaar, kind en ouders.</span>
          </li>
        </ul>

        <div class="section__header">
          <h2>Veelgestelde vragen</h2>
        </div>
        <div class="pv-faq">
          <article>
            <h3>Is Bloom een diagnostische test?</h3>
            <p>Nee. De uitslag is een gespreksstarter, geen klinische diagnose.</p>
          </article>
          <article>
            <h3>Hoe lang duurt het?</h3>
            <p>36 vragen, meestal 5–10 minuten.</p>
          </article>
          <article>
            <h3>Moet ik ACT kennen?</h3>
            <p>Basiskennis helpt. De betekenis ontstaat in het gesprek.</p>
          </article>
        </div>

        <div class="pv-cta">
          <p>Klaar om te proberen?</p>
          <span class="pv-cta__btns">
            <button type="button" class="pv-cta__btn">Probeer uit</button>
            <button type="button" class="pv-cta__btn pv-cta__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>

  <aside class="page-variant__analysis">
    <h3>Analyse — Kort</h3>
    <p><strong>Wint:</strong> scannbaar in seconden; geen herhaling; duidelijke CTA; past bij “geen onzin”.</p>
    <p><strong>Breekt:</strong> te weinig voor AEO/EEAT; FAQ te kort voor citatie; geen “zo werkt het”; geen makers/vertrouwen.</p>
    <p><strong>Verbeteringen binnen kort:</strong></p>
    <ul>
      <li>Eén zin meer in het lead-antwoord (entity + InteractGGZ) zonder extra secties.</li>
      <li>FAQ-antwoorden 1–2 zinnen langer (nog steeds kort).</li>
      <li>Optioneel: mini-screenshot thumbnail naast feiten — zonder flow uit te rekken.</li>
    </ul>
  </aside>
</section>

<!-- ========== 4 Visueel ========== -->
<section class="page-variant" data-variant="4">
  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <a class="tool-detail__back" href="/tools/"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom ACT Profiel Jeugd</h1>
            <p class="tool-detail__lead">Een persoonlijke tuin als ACT-profiel — voor jeugd vanaf 10 jaar.</p>
          </div>
          <figure class="tool-detail__preview">
            <div class="pv-header-media">
              <img src="{{ '/assets/images/tools/bloom.png' | relative_url }}" alt="Screenshot van de Bloom-tuin met zes ACT-thema's" loading="eager" width="960" height="540">
            </div>
            <figcaption>Voorbeeld van een persoonlijke Bloom-tuin</figcaption>
          </figure>
        </div>
      </div>
    </header>
    <div class="container tool-detail__body">
      <div class="tool-detail__content">
        <p class="pv-prose">
          Kind vult korte vragen in. Onderaan groeit een tuin. Jij bespreekt wat bloeit
          en waar nog ruimte is — met kind en ouders.
        </p>

        <div class="section__header">
          <h2>Van vraag tot gesprek</h2>
        </div>
        <div class="pv-visual-path">
          <div class="pv-visual-path__step">
            <div class="pv-visual-path__rail">
              <span class="pv-visual-path__dot">1</span>
              <span class="pv-visual-path__line" aria-hidden="true"></span>
            </div>
            <div class="pv-visual-path__body">
              <h3>Invullen</h3>
              <p>36 korte vragen. Meestal 5–10 minuten.</p>
            </div>
          </div>
          <div class="pv-visual-path__step">
            <div class="pv-visual-path__rail">
              <span class="pv-visual-path__dot">2</span>
              <span class="pv-visual-path__line" aria-hidden="true"></span>
            </div>
            <div class="pv-visual-path__body">
              <h3>Tuin groeit</h3>
              <p>Zes ACT-pijlers worden zichtbaar als delen van de tuin.</p>
            </div>
          </div>
          <div class="pv-visual-path__step">
            <div class="pv-visual-path__rail">
              <span class="pv-visual-path__dot">3</span>
            </div>
            <div class="pv-visual-path__body">
              <h3>Bespreken</h3>
              <p>Gezamenlijke taal voor behandelrichting — geen oordeel.</p>
            </div>
          </div>
        </div>

        <div class="section__header">
          <h2>Wat zie je in de tuin?</h2>
        </div>
        <ul class="pv-legend">
          <li class="pv-legend__item pv-legend__item--bloom">
            <h3 class="pv-legend__title">In volle bloei</h3>
            <p class="pv-legend__text">Waar al veel kracht zit.</p>
          </li>
          <li class="pv-legend__item pv-legend__item--grow">
            <h3 class="pv-legend__title">In ontwikkeling</h3>
            <p class="pv-legend__text">Groeit met aandacht en oefening.</p>
          </li>
          <li class="pv-legend__item pv-legend__item--space">
            <h3 class="pv-legend__title">Groeiruimte</h3>
            <p class="pv-legend__text">Aanknopingspunt voor oefendoelen.</p>
          </li>
        </ul>

        <div class="pv-cta">
          <p>Zie de tuin zelf — probeer Bloom uit.</p>
          <span class="pv-cta__btns">
            <button type="button" class="pv-cta__btn">Probeer uit</button>
            <button type="button" class="pv-cta__btn pv-cta__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>

  <aside class="page-variant__analysis">
    <h3>Analyse — Visueel</h3>
    <p><strong>Wint:</strong> heldere flow; show-don’t-tell; rust; product is meteen begrijpelijk.</p>
    <p><strong>Breekt:</strong> te weinig tekst voor AEO; geen FAQ; geen EEAT; “geen diagnostische test” is subtiel.</p>
    <p><strong>Verbeteringen binnen visueel:</strong></p>
    <ul>
      <li>Vier feitchips onder de hero (voor wie / tijd / uitkomst / niet-diagnostisch).</li>
      <li>Drie korte FAQ’s onder de legenda, nog steeds open en scannbaar.</li>
      <li>Antwoordzin van ~50 woorden naast de screenshot, niet onderaan.</li>
    </ul>
  </aside>
</section>

<!-- ========== 5 EEAT ========== -->
<section class="page-variant" data-variant="5">
  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <a class="tool-detail__back" href="/tools/"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom ACT Profiel Jeugd</h1>
            <p class="tool-detail__lead">
              Hulpmiddel voor de jeugd-ggz. Ontwikkeld door InteractGGZ. Geen diagnostische test.
            </p>
            <p class="pv-meta">Laatst bijgewerkt: augustus 2026 · InteractGGZ (merk van Creatieve M(a)an B.V.)</p>
          </div>
          <figure class="tool-detail__preview">
            <div class="pv-header-media">
              <img src="{{ '/assets/images/tools/bloom.png' | relative_url }}" alt="Screenshot van de Bloom-tuin met zes ACT-thema's" loading="eager" width="960" height="540">
            </div>
            <figcaption>Voorbeeld van een persoonlijke Bloom-tuin</figcaption>
          </figure>
        </div>
      </div>
    </header>
    <div class="container tool-detail__body">
      <div class="tool-detail__content">
        <div class="pv-trust">
          <p><strong>Grenzen.</strong> Bloom is geen diagnostisch instrument en vervangt geen klinische beoordeling of professioneel oordeel. De tool ondersteunt gesprekken en behandelrichting.</p>
          <p>We doen geen uitspraken over specifieke behandelresultaten. Hoe en wanneer je Bloom inzet, blijft jouw professionele afweging.</p>
        </div>

        <div class="section__header">
          <h2>Wie maakte Bloom?</h2>
        </div>
        <div class="pv-makers">
          <article class="pv-maker">
            <img src="{{ '/assets/images/team/rianne-manenschijn.jpg' | relative_url }}" alt="Rianne Manenschijn" width="72" height="72">
            <div>
              <h3>Rianne Manenschijn</h3>
              <p class="pv-maker__role">Orthopedagoog-generalist</p>
              <p>Behandelaar, docent aan de universiteit, redactielid van de Pedagoog (NVO). Inhoudelijke vertaling van ACT naar jeugd.</p>
            </div>
          </article>
          <article class="pv-maker">
            <img src="{{ '/assets/images/team/jan-willem-manenschijn.jpg' | relative_url }}" alt="Jan-Willem Manenschijn" width="72" height="72">
            <div>
              <h3>Jan-Willem Manenschijn</h3>
              <p class="pv-maker__role">Serious game designer · Informatica (TU Delft)</p>
              <p>Vertaalt behandelideeën naar werkende, ervaringsgerichte digitale tools.</p>
            </div>
          </article>
        </div>

        <div class="section__header">
          <h2>Waarom wij Bloom maakten</h2>
        </div>
        <div class="pv-prose">
          <p>
            Voor volwassenen bestaan ACT-vragenlijsten zoals de FIT-60. Voor kinderen en jongeren
            misten wij in de praktijk een laagdrempelige, visuele manier om dezelfde zes
            ACT-processen bespreekbaar te maken. Bloom komt voort uit die ervaring in de
            behandelkamer — niet uit een softwarebureau zonder zorgcontext.
          </p>
        </div>

        <div class="section__header">
          <h2>Methodiek</h2>
        </div>
        <div class="pv-prose">
          <p>
            Bloom brengt zes ACT-processen in beeld: acceptatie, defusie, hier-en-nu,
            zelf-als-context, waarden en toegewijd handelen. De uitslag is een persoonlijke
            tuin — bedoeld voor reflectie, niet als harde effectmeting. Basiskennis van ACT
            bij de behandelaar is aan te raden.
          </p>
        </div>

        <div class="section__header">
          <h2>Wat is Bloom in het kort?</h2>
        </div>
        <ul class="pv-facts">
          <li class="pv-facts__item">
            <span class="pv-facts__label">Voor wie</span>
            <span class="pv-facts__value">Jeugd 10+</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Vorm</span>
            <span class="pv-facts__value">36 vragen · tuin</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Duur</span>
            <span class="pv-facts__value">5–10 minuten</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Rol</span>
            <span class="pv-facts__value">Gespreksstarter</span>
          </li>
        </ul>

        <p class="pv-prose">
          Meer over onze werkwijze: <a href="/over-ons/">Over ons</a>.
          Contact: <a href="mailto:info@interactggz.nl">info@interactggz.nl</a>.
        </p>

        <div class="pv-cta">
          <p>Probeer Bloom vrijblijvend uit.</p>
          <span class="pv-cta__btns">
            <button type="button" class="pv-cta__btn">Probeer uit</button>
            <button type="button" class="pv-cta__btn pv-cta__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>

  <aside class="page-variant__analysis">
    <h3>Analyse — EEAT</h3>
    <p><strong>Wint:</strong> zichtbare expertise, experience, grenzen, organisatie, update-datum — sterk voor YMYL-licht.</p>
    <p><strong>Breekt:</strong> zwaar op vertrouwen, licht op “wat krijg ik”; FAQ ontbreekt; weinig productbeeld; conversion lager.</p>
    <p><strong>Verbeteringen binnen EEAT:</strong></p>
    <ul>
      <li>Antwoordblok + screenshot vóór de makers (vertrouwen blijft, begrip eerst).</li>
      <li>Drie FAQ’s over diagnose, leeftijd, ACT-ervaring — trust via openheid.</li>
      <li>“Laatst bijgewerkt” koppelen aan echte content-reviews, niet alleen een label.</li>
    </ul>
  </aside>
</section>

<!-- ========== 6 Taakgericht ========== -->
<section class="page-variant" data-variant="6">
  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <a class="tool-detail__back" href="/tools/"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom ACT Profiel Jeugd</h1>
            <p class="tool-detail__lead">
              Visueel ACT-profiel voor kinderen en jongeren (10+) — speels om in te vullen,
              bruikbaar in het gesprek.
            </p>
          </div>
          <figure class="tool-detail__preview">
            <div class="pv-header-media">
              <img src="{{ '/assets/images/tools/bloom.png' | relative_url }}" alt="Screenshot van de Bloom-tuin met zes ACT-thema's" loading="eager" width="960" height="540">
            </div>
            <figcaption>Voorbeeld van een persoonlijke Bloom-tuin</figcaption>
          </figure>
        </div>
        <div class="btn-group tool-detail__cta">
          <button type="button" class="pv-cta__btn">Probeer uit</button>
          <button type="button" class="pv-cta__btn pv-cta__btn--ghost" style="border-color:#1e4246;color:#1e4246;">Koop · €7,99/jaar</button>
        </div>
      </div>
    </header>
    <div class="container tool-detail__body">
      <div class="tool-detail__content">
        <div class="section__header">
          <h2>Zo werkt het</h2>
        </div>
        <ol class="pv-steps">
          <li class="pv-steps__step">
            <h3 class="pv-steps__title">Invullen</h3>
            <p class="pv-steps__text">Het kind beantwoordt 36 korte vragen. Meestal 5–10 minuten klaar.</p>
          </li>
          <li class="pv-steps__step">
            <h3 class="pv-steps__title">Tuin groeit</h3>
            <p class="pv-steps__text">Per ACT-pijler zie je wat bloeit, wat groeit en waar ruimte is.</p>
          </li>
          <li class="pv-steps__step">
            <h3 class="pv-steps__title">Bespreken</h3>
            <p class="pv-steps__text">Samen met kind en ouders: wat herken je, wat verdient aandacht?</p>
          </li>
        </ol>

        <div class="section__header">
          <h2>In welke situaties past Bloom?</h2>
        </div>
        <ul class="pv-scenarios">
          <li class="pv-scenarios__item">
            <span class="pv-scenarios__tag">Start van behandeling</span>
            <h3 class="pv-scenarios__title">Snel een beeld van de ACT-pijlers</h3>
            <p class="pv-scenarios__text">Laagdrempelig startpunt: waar zit kracht, waar loopt iemand vast?</p>
          </li>
          <li class="pv-scenarios__item">
            <span class="pv-scenarios__tag">Richting bepalen</span>
            <h3 class="pv-scenarios__title">Behandelkeuzes onderbouwen</h3>
            <p class="pv-scenarios__text">Welke ACT-vaardigheden verdienen extra aandacht in de komende fase?</p>
          </li>
          <li class="pv-scenarios__item">
            <span class="pv-scenarios__tag">Monitoring</span>
            <h3 class="pv-scenarios__title">Voortgang zichtbaar maken</h3>
            <p class="pv-scenarios__text">Opnieuw invullen en bespreken wat veranderd is — reflectie, geen harde meting.</p>
          </li>
          <li class="pv-scenarios__item">
            <span class="pv-scenarios__tag">Groep &amp; training</span>
            <h3 class="pv-scenarios__title">Inzet in lessen en groepen</h3>
            <p class="pv-scenarios__text">Bruikbaar bij trainingen of lessen over emotieregulatie en flexibiliteit.</p>
          </li>
        </ul>

        <div class="section__header">
          <h2>Belangrijk om te weten</h2>
        </div>
        <div class="pv-faq">
          <article>
            <h3>Is Bloom een diagnostische test?</h3>
            <p>Nee. Gespreksstarter en hulpmiddel bij richting — geen klinische diagnose.</p>
          </article>
          <article>
            <h3>Vanaf welke leeftijd?</h3>
            <p>Vanaf ongeveer 10 jaar. Samen invullen kan bij lees- of reflectiemoeilijkheden.</p>
          </article>
        </div>

        <div class="pv-cta">
          <p>Past dit bij jouw volgende sessie? Probeer Bloom uit.</p>
          <span class="pv-cta__btns">
            <button type="button" class="pv-cta__btn">Probeer uit</button>
            <button type="button" class="pv-cta__btn pv-cta__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>

  <aside class="page-variant__analysis">
    <h3>Analyse — Taakgericht</h3>
    <p><strong>Wint:</strong> herkenbaar voor behandelaars; concreet “wanneer”; goede flow; mist op live-pagina.</p>
    <p><strong>Breekt:</strong> zwakke AEO-opening; weinig entities/makers; geen productbeeld; SEO dun.</p>
    <p><strong>Verbeteringen binnen taakgericht:</strong></p>
    <ul>
      <li>40–60 woorden antwoord vóór de stappen (wat/voor wie/niet-diagnostisch).</li>
      <li>Screenshot van de tuin bij stap 2.</li>
      <li>Eén korte makersregel onderaan (“InteractGGZ · orthopedagoog + game designer”).</li>
    </ul>
  </aside>
</section>

<!-- ========== A Citatie-klaar ========== -->
<section class="page-variant" data-variant="a">
  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <a class="tool-detail__back" href="/tools/"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom ACT Profiel Jeugd</h1>
            <p class="tool-detail__lead">Visueel ACT-profiel voor jeugd vanaf 10 jaar · InteractGGZ</p>
            <p class="pv-byline">
              Door <strong>Rianne Manenschijn</strong> (orthopedagoog-generalist) en
              <strong>Jan-Willem Manenschijn</strong> (serious game designer).
              Laatst bijgewerkt: augustus 2026.
            </p>
          </div>
          <figure class="tool-detail__preview">
            <div class="pv-header-media">
              <img src="{{ '/assets/images/tools/bloom.png' | relative_url }}" alt="Screenshot van de Bloom-tuin met zes ACT-thema's" loading="eager" width="960" height="540">
            </div>
            <figcaption>Voorbeeld van een persoonlijke Bloom-tuin</figcaption>
          </figure>
        </div>
      </div>
    </header>
    <div class="container tool-detail__body">
      <div class="tool-detail__content">
        <p class="pv-prose">
          Bloom ACT Profiel Jeugd is een digitaal hulpmiddel van InteractGGZ: kinderen en
          jongeren (10+) beantwoorden 36 korte vragen (5–10 min) en krijgen een visueel
          ACT-profiel als Bloom-tuin. Geen diagnostische test — wel een gespreksstarter
          voor behandelaar, kind en ouders over de zes ACT-processen.
        </p>

        <ul class="pv-facts">
          <li class="pv-facts__item">
            <span class="pv-facts__label">Voor wie</span>
            <span class="pv-facts__value">Kind &amp; jongeren 10+</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Tijd</span>
            <span class="pv-facts__value">5–10 min · 36 vragen</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Uitkomst</span>
            <span class="pv-facts__value">ACT-profiel als tuin</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Niet</span>
            <span class="pv-facts__value">Geen diagnostische test</span>
          </li>
        </ul>

        <div class="pv-trust">
          <p><strong>Grenzen.</strong> Bloom vervangt geen klinische beoordeling. Hoe en wanneer je de tool inzet, blijft jouw professionele afweging. We doen geen effectclaims.</p>
        </div>

        <div class="section__header">
          <h2>Is Bloom een diagnostische test?</h2>
        </div>
        <div class="pv-faq">
          <article>
            <h3>Is Bloom een diagnostische test?</h3>
            <p>Nee. Bloom is geen diagnostisch instrument. De uitslag is een gespreksstarter en hulpmiddel bij behandelrichting — geen vervanging van klinisch oordeel.</p>
          </article>
          <article>
            <h3>Vanaf welke leeftijd is Bloom geschikt?</h3>
            <p>Vanaf ongeveer 10 jaar. Bij jongere kinderen of moeite met lezen kan de behandelaar samen invullen.</p>
          </article>
          <article>
            <h3>Hoe lang duurt het invullen?</h3>
            <p>36 korte vragen. De meeste kinderen en jongeren zijn in 5 tot 10 minuten klaar.</p>
          </article>
          <article>
            <h3>Wat meet Bloom?</h3>
            <p>Zes ACT-processen: acceptatie, defusie, hier-en-nu, zelf-als-context, waarden en toegewijd handelen — een globale indruk van psychologische flexibiliteit.</p>
          </article>
          <article>
            <h3>Moet ik ACT-ervaring hebben?</h3>
            <p>Basiskennis is aan te raden. De betekenis van het Bloom-profiel ontstaat vooral in het gesprek met kind, ouders en behandelaar.</p>
          </article>
        </div>

        <div class="section__header">
          <h2>Wie maakte Bloom?</h2>
        </div>
        <div class="pv-makers pv-makers--compact">
          <article class="pv-maker">
            <img src="{{ '/assets/images/team/rianne-manenschijn.jpg' | relative_url }}" alt="" width="52" height="52">
            <div>
              <h3>Rianne Manenschijn</h3>
              <p class="pv-maker__role">Orthopedagoog-generalist</p>
            </div>
          </article>
          <article class="pv-maker">
            <img src="{{ '/assets/images/team/jan-willem-manenschijn.jpg' | relative_url }}" alt="" width="52" height="52">
            <div>
              <h3>Jan-Willem Manenschijn</h3>
              <p class="pv-maker__role">Serious game designer · TU Delft</p>
            </div>
          </article>
        </div>

        <div class="pv-cta">
          <p>Probeer Bloom vrijblijvend uit · €7,99/jaar</p>
          <span class="pv-cta__btns">
            <button type="button" class="pv-cta__btn">Probeer uit</button>
            <button type="button" class="pv-cta__btn pv-cta__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>

  <aside class="page-variant__analysis">
    <h3>Analyse — Combinatie A</h3>
    <p><strong>Sterk voor:</strong> AI-citatie, trust, scannen in seconden, YMYL-grenzen.</p>
    <p><strong>Zwakker:</strong> geen “wanneer inzetten”; geen related tools; minder storytelling.</p>
    <p><strong>Kies A als:</strong> je AEO + vertrouwen wilt zonder de pagina langer te maken.</p>
  </aside>
</section>

<!-- ========== B Scanbaar pad ========== -->
<section class="page-variant" data-variant="b">
  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <a class="tool-detail__back" href="/tools/"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom ACT Profiel Jeugd</h1>
            <p class="tool-detail__lead">Van korte vragen naar een bespreekbare Bloom-tuin — voor jeugd vanaf 10 jaar.</p>
          </div>
          <figure class="tool-detail__preview">
            <div class="pv-header-media">
              <img src="{{ '/assets/images/tools/bloom.png' | relative_url }}" alt="Screenshot van de Bloom-tuin met zes ACT-thema's" loading="eager" width="960" height="540">
            </div>
            <figcaption>Voorbeeld van een persoonlijke Bloom-tuin</figcaption>
          </figure>
        </div>
      </div>
    </header>
    <div class="container tool-detail__body">
      <div class="tool-detail__content">
        <p class="pv-prose">
          Bloom van InteractGGZ helpt kinderen en jongeren (10+) in 5–10 minuten (36 vragen)
          een visueel ACT-profiel te maken. De uitkomst is een tuin — geen diagnostische test —
          als startpunt voor het gesprek met behandelaar en ouders.
        </p>

        <ul class="pv-facts">
          <li class="pv-facts__item">
            <span class="pv-facts__label">Voor wie</span>
            <span class="pv-facts__value">Jeugd 10+</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Tijd</span>
            <span class="pv-facts__value">5–10 minuten</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Uitkomst</span>
            <span class="pv-facts__value">Tuin = ACT-profiel</span>
          </li>
          <li class="pv-facts__item">
            <span class="pv-facts__label">Niet</span>
            <span class="pv-facts__value">Geen diagnose</span>
          </li>
        </ul>

        <div class="section__header">
          <h2>Hoe werkt Bloom?</h2>
        </div>
        <div class="pv-visual-path">
          <div class="pv-visual-path__step">
            <div class="pv-visual-path__rail">
              <span class="pv-visual-path__dot">1</span>
              <span class="pv-visual-path__line" aria-hidden="true"></span>
            </div>
            <div class="pv-visual-path__body">
              <h3>Invullen</h3>
              <p>36 korte, concrete vragen over gedachten, gevoelens, aandacht, waarden en handelen.</p>
            </div>
          </div>
          <div class="pv-visual-path__step">
            <div class="pv-visual-path__rail">
              <span class="pv-visual-path__dot">2</span>
              <span class="pv-visual-path__line" aria-hidden="true"></span>
            </div>
            <div class="pv-visual-path__body">
              <h3>Tuin groeit</h3>
              <p>Zes ACT-pijlers worden zichtbaar: wat bloeit, wat groeit, waar ruimte is.</p>
            </div>
          </div>
          <div class="pv-visual-path__step">
            <div class="pv-visual-path__rail">
              <span class="pv-visual-path__dot">3</span>
            </div>
            <div class="pv-visual-path__body">
              <h3>Bespreken</h3>
              <p>Gezamenlijke taal voor behandelaar, kind en ouders — mild, geen oordeel.</p>
            </div>
          </div>
        </div>

        <div class="section__header">
          <h2>In welke situaties past Bloom?</h2>
        </div>
        <ul class="pv-scenarios">
          <li class="pv-scenarios__item">
            <span class="pv-scenarios__tag">Start behandeling</span>
            <h3 class="pv-scenarios__title">Snel beeld van de ACT-pijlers</h3>
            <p class="pv-scenarios__text">Laagdrempelig startpunt met kind en ouders.</p>
          </li>
          <li class="pv-scenarios__item">
            <span class="pv-scenarios__tag">Richting</span>
            <h3 class="pv-scenarios__title">Behandelkeuzes onderbouwen</h3>
            <p class="pv-scenarios__text">Welke vaardigheden verdienen extra aandacht?</p>
          </li>
          <li class="pv-scenarios__item">
            <span class="pv-scenarios__tag">Monitoring</span>
            <h3 class="pv-scenarios__title">Voortgang bespreken</h3>
            <p class="pv-scenarios__text">Opnieuw invullen — reflectie, geen harde meting.</p>
          </li>
          <li class="pv-scenarios__item">
            <span class="pv-scenarios__tag">Groep</span>
            <h3 class="pv-scenarios__title">Trainingen en lessen</h3>
            <p class="pv-scenarios__text">Inzetbaar in groepen of lessen over veerkracht.</p>
          </li>
        </ul>

        <div class="section__header">
          <h2>Veelgestelde vragen</h2>
        </div>
        <div class="pv-faq">
          <article>
            <h3>Is Bloom een diagnostische test?</h3>
            <p>Nee. Gespreksstarter en hulpmiddel bij richting — vervangt geen klinische beoordeling.</p>
          </article>
          <article>
            <h3>Vanaf welke leeftijd?</h3>
            <p>Vanaf ongeveer 10 jaar. Samen invullen kan bij lees- of reflectiemoeilijkheden.</p>
          </article>
          <article>
            <h3>Moet ik ACT kennen?</h3>
            <p>Basiskennis helpt. De betekenis ontstaat vooral in het gesprek.</p>
          </article>
          <article>
            <h3>Wat kost Bloom?</h3>
            <p>€7,99 per jaar. Probeer eerst vrijblijvend uit in het portal.</p>
          </article>
        </div>

        <p class="pv-byline">
          InteractGGZ · <strong>Rianne Manenschijn</strong> (orthopedagoog-generalist) &amp;
          <strong>Jan-Willem Manenschijn</strong> (serious game designer).
          <a href="/over-ons/">Over ons</a>
        </p>

        <div class="pv-cta">
          <p>Past dit bij jouw volgende sessie?</p>
          <span class="pv-cta__btns">
            <button type="button" class="pv-cta__btn">Probeer uit</button>
            <button type="button" class="pv-cta__btn pv-cta__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>

  <aside class="page-variant__analysis">
    <h3>Analyse — Combinatie B</h3>
    <p><strong>Sterk voor:</strong> begrip + herkenning + flow; behandelaar ziet meteen of het past.</p>
    <p><strong>Zwakker:</strong> langer dan A; EEAT lichter (alleen byline); minder interne SEO-links.</p>
    <p><strong>Kies B als:</strong> je overzichtelijkheid en “wanneer gebruik ik dit?” belangrijker vindt dan maximale citatie-dichtheid.</p>
  </aside>
</section>

<!-- ========== C Volledige IA ========== -->
<section class="page-variant" data-variant="c">
  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <nav class="pv-breadcrumb" aria-label="Broodkruimel">
          <a href="/">Home</a> → <a href="/tools/">Tools</a> → Bloom ACT Profiel Jeugd
        </nav>
        <a class="tool-detail__back" href="/tools/"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom ACT Profiel Jeugd</h1>
            <p class="tool-detail__lead">Visueel ACT-profiel voor kinderen en jongeren vanaf 10 jaar</p>
            <p class="pv-byline">
              Door <strong>Rianne Manenschijn</strong> (orthopedagoog-generalist) en
              <strong>Jan-Willem Manenschijn</strong> (serious game designer, TU Delft).
              InteractGGZ · bijgewerkt augustus 2026.
            </p>
          </div>
          <figure class="tool-detail__preview">
            <div class="pv-header-media">
              <img src="{{ '/assets/images/tools/bloom.png' | relative_url }}" alt="Screenshot van de Bloom-tuin met zes ACT-thema's" loading="eager" width="960" height="540">
            </div>
            <figcaption>Voorbeeld van een persoonlijke Bloom-tuin</figcaption>
          </figure>
        </div>
        <div class="btn-group tool-detail__cta">
          <button type="button" class="pv-cta__btn">Probeer uit</button>
          <button type="button" class="pv-cta__btn pv-cta__btn--ghost" style="border-color:#1e4246;color:#1e4246;">Koop · €7,99/jaar</button>
        </div>
      </div>
    </header>
    <div class="container tool-detail__body">
      <div class="tool-detail__content">
        <p class="pv-answer">
          Bloom ACT Profiel Jeugd van InteractGGZ is een digitaal hulpmiddel waarmee kinderen en
          jongeren (10+) in 5–10 minuten (36 vragen) een visueel ACT-profiel krijgen als
          persoonlijke Bloom-tuin. Geen diagnostische test — wel een gespreksstarter over de
          zes ACT-processen voor behandelaar, kind en ouders.
        </p>

        <table class="pv-table">
          <tbody>
            <tr><th>Voor wie</th><td>Kinderen en jongeren vanaf ~10 jaar; GGZ-behandelaren</td></tr>
            <tr><th>Duur</th><td>5–10 minuten · 36 korte vragen</td></tr>
            <tr><th>Uitkomst</th><td>Visueel ACT-profiel (zes pijlers) als tuin</td></tr>
            <tr><th>Wat het niet is</th><td>Geen diagnostische test; geen effectclaims</td></tr>
            <tr><th>Prijs</th><td>€7,99 per jaar</td></tr>
          </tbody>
        </table>

        <div class="pv-trust">
          <p><strong>Grenzen.</strong> Bloom vervangt geen klinische beoordeling. Inzet blijft jouw professionele afweging.</p>
        </div>

        <div class="section__header">
          <h2>Hoe werkt Bloom?</h2>
        </div>
        <ol class="pv-steps">
          <li class="pv-steps__step">
            <h3 class="pv-steps__title">Invullen</h3>
            <p class="pv-steps__text">36 korte vragen over gedachten, gevoelens, aandacht, waarden en handelen.</p>
          </li>
          <li class="pv-steps__step">
            <h3 class="pv-steps__title">Tuin groeit</h3>
            <p class="pv-steps__text">De zes ACT-processen worden zichtbaar in een persoonlijke tuin.</p>
          </li>
          <li class="pv-steps__step">
            <h3 class="pv-steps__title">Bespreken</h3>
            <p class="pv-steps__text">Gezamenlijke taal voor behandelrichting met kind en ouders.</p>
          </li>
        </ol>

        <div class="section__header">
          <h2>Welke ACT-processen brengt Bloom in beeld?</h2>
        </div>
        <ul class="pv-pillars">
          <li><strong>Acceptatie</strong> — ruimte voor lastige gevoelens</li>
          <li><strong>Defusie</strong> — afstand tot gedachten</li>
          <li><strong>Hier-en-nu</strong> — aandacht in het moment</li>
          <li><strong>Zelf-als-context</strong> — perspectief op jezelf</li>
          <li><strong>Waarden</strong> — wat belangrijk is</li>
          <li><strong>Toegewijd handelen</strong> — stappen zetten</li>
        </ul>

        <div class="section__header">
          <h2>Hoe verschilt Bloom van de FIT-60?</h2>
        </div>
        <div class="pv-compare">
          <div class="pv-compare__card">
            <h3>FIT-60</h3>
            <ul>
              <li>Voor volwassenen</li>
              <li>Klassieke vragenlijst</li>
            </ul>
          </div>
          <div class="pv-compare__card">
            <h3>Bloom</h3>
            <ul>
              <li>Voor jeugd vanaf ~10 jaar</li>
              <li>Visuele tuin; zelfde zes ACT-processen</li>
            </ul>
          </div>
        </div>

        <div class="section__header">
          <h2>Wie maakte Bloom?</h2>
        </div>
        <div class="pv-makers pv-makers--compact">
          <article class="pv-maker">
            <img src="{{ '/assets/images/team/rianne-manenschijn.jpg' | relative_url }}" alt="" width="52" height="52">
            <div>
              <h3>Rianne Manenschijn</h3>
              <p class="pv-maker__role">Orthopedagoog-generalist · NVO</p>
            </div>
          </article>
          <article class="pv-maker">
            <img src="{{ '/assets/images/team/jan-willem-manenschijn.jpg' | relative_url }}" alt="" width="52" height="52">
            <div>
              <h3>Jan-Willem Manenschijn</h3>
              <p class="pv-maker__role">Serious game designer · TU Delft</p>
            </div>
          </article>
        </div>
        <p class="pv-prose">
          Bloom kwam voort uit de behandelkamer: voor volwassenen bestaat de FIT-60, voor jeugd
          misten we een laagdrempelige visuele variant. Meer: <a href="/over-ons/">Over ons</a>.
        </p>

        <div class="section__header">
          <h2>Veelgestelde vragen</h2>
        </div>
        <div class="pv-faq">
          <article>
            <h3>Is Bloom een diagnostische test?</h3>
            <p>Nee. Bloom is geen diagnostisch instrument en vervangt geen klinische beoordeling. De uitkomst is een gespreksstarter voor behandelrichting.</p>
          </article>
          <article>
            <h3>Vanaf welke leeftijd is Bloom geschikt?</h3>
            <p>Vanaf ongeveer 10 jaar. Bij jongere kinderen of moeite met lezen kan de behandelaar samen invullen.</p>
          </article>
          <article>
            <h3>Hoe lang duurt het invullen van Bloom?</h3>
            <p>36 korte vragen; meestal 5 tot 10 minuten.</p>
          </article>
          <article>
            <h3>Kan Bloom voortgang meten?</h3>
            <p>Op meerdere momenten opnieuw invullen kan. Bedoeld voor reflectie, niet als harde effectmeting.</p>
          </article>
          <article>
            <h3>Wat kost Bloom?</h3>
            <p>€7,99 per jaar. Via de <a href="/ontdekker/">Ontdekker</a> krijg je toegang tot alle InteractGGZ-tools.</p>
          </article>
        </div>

        <div class="section__header">
          <h2>Gerelateerde tools</h2>
        </div>
        <ul class="pv-related">
          <li>
            <a href="/tools/act-avontuur/">
              <strong>ACT Avontuur</strong>
              <span>Defusie-spel voor jeugd · ~5 min</span>
            </a>
          </li>
          <li>
            <a href="/tools/emdr/">
              <strong>EMDR Toolkit</strong>
              <span>Digitale EMDR-lamp met taken</span>
            </a>
          </li>
          <li>
            <a href="/tools/context-driehoek/">
              <strong>Driehoekmodel</strong>
              <span>Casusordening kind–gezin–omgeving</span>
            </a>
          </li>
        </ul>

        <div class="pv-cta">
          <p>Probeer Bloom ACT Profiel Jeugd uit in het portal.</p>
          <span class="pv-cta__btns">
            <button type="button" class="pv-cta__btn">Probeer uit</button>
            <button type="button" class="pv-cta__btn pv-cta__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>

  <aside class="page-variant__analysis">
    <h3>Analyse — Combinatie C</h3>
    <p><strong>Sterk voor:</strong> volledige IA, interne links, topical depth, EEAT + AEO samen.</p>
    <p><strong>Zwakker:</strong> langste van de drie; risico op “weer te veel” t.o.v. je “kort en krachtig”-eis.</p>
    <p><strong>Kies C als:</strong> je één template wilt die ook SEO/entity-graph meeneemt, en bereid bent iets meer scroll te accepteren.</p>
  </aside>
</section>

<script>
  (function () {
    var buttons = document.querySelectorAll(".page-switcher__btn");
    var variants = document.querySelectorAll(".page-variant");
    function show(key) {
      variants.forEach(function (v) {
        v.classList.toggle("is-active", v.getAttribute("data-variant") === key);
      });
      buttons.forEach(function (b) {
        b.setAttribute(
          "aria-pressed",
          b.getAttribute("data-variant") === key ? "true" : "false"
        );
      });
      if (window.location.hash !== "#" + key) {
        history.replaceState(null, "", "#" + key);
      }
    }
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        show(b.getAttribute("data-variant"));
      });
    });
    var initial = window.location.hash.replace("#", "");
    if (initial && document.querySelector('.page-variant[data-variant="' + initial + '"]')) {
      show(initial);
    }
  })();
</script>

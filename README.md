# Interact-GGZ

Website voor [interact-ggz.nl](https://interact-ggz.nl), gebouwd met [Jekyll](https://jekyllrb.com/) en gedeployed via GitHub Pages.

## Pagina's

- **Home** — introductie en overzicht
- **Over ons** — Jan-Willem Manenschijn & Rianne Manenschijn
- **Aan de slag** — beschikbare tools
- **Visie** — kernwaarden in de GGZ

## Lokaal draaien

Vereist Ruby 3.3+ (zie `.ruby-version`). Installeer bijvoorbeeld via [rbenv](https://github.com/rbenv/rbenv) of Homebrew.

```bash
bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000).

## Deployen naar GitHub Pages

1. Push deze repository naar GitHub
2. Ga naar **Settings → Pages**
3. Onder **Build and deployment**, kies **GitHub Actions** als source
4. Bij push naar `main` wordt de site automatisch gebouwd en gepubliceerd

### Custom domain

Het bestand `CNAME` wijst naar `interact-ggz.nl`. Configureer bij je DNS-provider:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | `<jouw-github-username>.github.io` |

Vervolgens in GitHub **Settings → Pages → Custom domain** invullen: `interact-ggz.nl`.

**Let op:** zolang je de site via `janwillemm.github.io/jari-website/` bekijkt, gebruikt de build automatisch het juiste pad (`/jari-website`) voor CSS en links. Zodra `interact-ggz.nl` actief is als custom domain, pas de workflow aan: verwijder `--baseurl "${{ steps.pages.outputs.base_path }}"` uit de build-stap zodat assets op het domein root werken.

## Structuur

```
├── _config.yml          # Site-instellingen
├── _includes/           # Header, footer, head
├── _layouts/            # Pagina-templates
├── _sass/               # Stylesheets (SCSS)
├── assets/css/          # Hoofd-stylesheet
├── .github/workflows/   # GitHub Actions deploy
└── *.md                 # Pagina-inhoud
```

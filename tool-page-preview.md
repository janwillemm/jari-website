---
layout: page
heading: Toolpagina — drie alternatieven
subtitle: Interne preview
intro: >-
  Drie alternatieve ontwerpen voor de tool-specifieke pagina (Bloom als voorbeeld),
  gebaseerd op leidende principes voor communicatie, overtuiging en
  informatie-overdracht in de GGZ — waar behandelaars weinig tijd hebben.
  Gebruik de schakelaar rechtsboven om tussen de varianten te bladeren.
no_cta: true
sitemap: false
---

<style>
  /* --- Schakelaar rechtsboven ------------------------------------------- */
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
    min-width: 11rem;
  }
  .page-switcher__label {
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #48a898;
  }
  .page-switcher__buttons {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
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
    font-size: 0.875rem;
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
      min-width: 9rem;
    }
  }

  /* --- Variant wrappers ------------------------------------------------- */
  .page-variant {
    display: none;
    margin-top: 1.5rem;
  }
  .page-variant.is-active {
    display: block;
  }

  .page-variant__intro {
    margin: 0 0 1.5rem;
    padding: 1rem 1.25rem;
    background: #f4f6f4;
    border-left: 4px solid #48a898;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #4a5e63;
    line-height: 1.6;
  }
  .page-variant__intro strong {
    color: #1e4246;
  }

  /* --- Variant A: Antwoord eerst ---------------------------------------- */
  .answer-first__facts {
    display: grid;
    gap: 0.75rem;
    margin: 0 0 1.5rem;
  }
  @media (min-width: 48rem) {
    .answer-first__facts {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .answer-first__fact {
    padding: 0.75rem 0.875rem;
    background: #ffffff;
    border: 1.5px solid #dde4e6;
    border-top: 4px solid #48a898;
    border-radius: 0.5rem;
  }
  .answer-first__fact-label {
    display: block;
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #6b7f85;
    margin-bottom: 0.125rem;
  }
  .answer-first__fact-value {
    font-family: "Fraunces", Georgia, serif;
    font-weight: 600;
    color: #1e4246;
    font-size: 0.9375rem;
    line-height: 1.35;
  }
  .answer-first__distinctions {
    display: grid;
    gap: 0.75rem;
    margin: 0 0 2rem;
    list-style: none;
    padding: 0;
  }
  @media (min-width: 48rem) {
    .answer-first__distinctions {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .answer-first__distinction {
    display: grid;
    grid-template-columns: 1.75rem 1fr;
    gap: 0.5rem;
    padding: 0.75rem 0.875rem;
    background: #faf8f5;
    border-radius: 0.5rem;
  }
  .answer-first__distinction-num {
    font-family: "Fraunces", Georgia, serif;
    font-weight: 700;
    color: #48a898;
    font-size: 1.125rem;
    line-height: 1.4;
  }
  .answer-first__distinction strong {
    display: block;
    color: #1e4246;
    font-size: 0.9375rem;
    margin-bottom: 0.125rem;
  }
  .answer-first__distinction span {
    color: #4a5e63;
    font-size: 0.875rem;
    line-height: 1.55;
  }
  .answer-first__lede {
    max-width: 42rem;
    margin: 0 0 1.5rem;
    font-size: 1.0625rem;
    line-height: 1.6;
    color: #1c2b30;
  }

  /* --- Variant B: In drie stappen --------------------------------------- */
  .steps-flow {
    display: grid;
    gap: 1rem;
    margin: 0 0 2rem;
    list-style: none;
    padding: 0;
    counter-reset: step;
  }
  @media (min-width: 48rem) {
    .steps-flow {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .steps-flow__step {
    position: relative;
    padding: 1.25rem 1.25rem 1.25rem 3rem;
    background: #ffffff;
    border: 2px solid #1e4246;
    border-radius: 0.75rem;
    box-shadow: 4px 4px 0 rgba(28, 43, 48, 0.12);
    counter-increment: step;
  }
  .steps-flow__step::before {
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
  .steps-flow__title {
    margin: 0 0 0.375rem;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1.0625rem;
    font-weight: 600;
    color: #1e4246;
  }
  .steps-flow__text {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.6;
    color: #4a5e63;
  }
  .scenario-cards {
    display: grid;
    gap: 0.75rem;
    margin: 0 0 2rem;
    list-style: none;
    padding: 0;
  }
  @media (min-width: 48rem) {
    .scenario-cards {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .scenario-cards__item {
    padding: 1rem 1.125rem;
    background: #f2efe8;
    border-radius: 0.5rem;
    border-left: 4px solid #f1b062;
  }
  .scenario-cards__tag {
    display: block;
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #b87a2a;
    margin-bottom: 0.25rem;
  }
  .scenario-cards__title {
    margin: 0 0 0.25rem;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1rem;
    font-weight: 600;
    color: #1e4246;
  }
  .scenario-cards__text {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.55;
    color: #4a5e63;
  }

  /* --- Variant C: Toon het resultaat ------------------------------------ */
  .outcome-hero {
    display: grid;
    gap: 1rem;
    margin: 0 0 1.5rem;
  }
  @media (min-width: 48rem) {
    .outcome-hero {
      grid-template-columns: 1.4fr 1fr;
      align-items: center;
    }
  }
  .outcome-hero__media {
    border: 2px solid #1e4246;
    border-radius: 0.75rem;
    overflow: hidden;
    background: #c5e4ea;
    aspect-ratio: 16 / 9;
  }
  .outcome-hero__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .outcome-hero__caption {
    font-size: 0.8125rem;
    color: #6b7f85;
    margin-top: 0.375rem;
  }
  .outcome-credibility {
    display: grid;
    gap: 0.75rem;
    margin: 0 0 1.75rem;
    list-style: none;
    padding: 0;
  }
  @media (min-width: 48rem) {
    .outcome-credibility {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .outcome-credibility__item {
    padding: 0.875rem 0.875rem 0.875rem 2.25rem;
    background: #ffffff;
    border: 1.5px solid #dde4e6;
    border-radius: 0.5rem;
    position: relative;
  }
  .outcome-credibility__item::before {
    content: "✓";
    position: absolute;
    left: 0.75rem;
    top: 0.875rem;
    width: 1.125rem;
    height: 1.125rem;
    display: grid;
    place-items: center;
    background: #d4ede8;
    color: #1e4246;
    border-radius: 50%;
    font-size: 0.6875rem;
    font-weight: 700;
  }
  .outcome-credibility__value {
    display: block;
    font-family: "Fraunces", Georgia, serif;
    font-weight: 600;
    color: #1e4246;
    font-size: 1rem;
    line-height: 1.3;
  }
  .outcome-credibility__label {
    display: block;
    font-size: 0.75rem;
    color: #6b7f85;
  }
  .outcome-legend {
    display: grid;
    gap: 0.625rem;
    margin: 0 0 1.75rem;
    list-style: none;
    padding: 0;
  }
  @media (min-width: 48rem) {
    .outcome-legend {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .outcome-legend__item {
    padding: 0.75rem 0.875rem;
    background: #faf8f5;
    border-radius: 0.5rem;
    border-top: 4px solid;
  }
  .outcome-legend__item--bloom { border-top-color: #48a898; }
  .outcome-legend__item--grow { border-top-color: #f1b062; }
  .outcome-legend__item--space { border-top-color: #8da785; }
  .outcome-legend__title {
    margin: 0 0 0.25rem;
    font-family: "Fraunces", Georgia, serif;
    font-weight: 600;
    color: #1e4246;
    font-size: 0.9375rem;
  }
  .outcome-legend__text {
    margin: 0;
    font-size: 0.8125rem;
    line-height: 1.55;
    color: #4a5e63;
  }

  /* --- Gedeelde CTA-preview -------------------------------------------- */
  .page-cta-preview {
    margin-top: 2rem;
    padding: 1.25rem 1.5rem;
    background: #1e4246;
    color: #ffffff;
    border-radius: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.25rem;
    align-items: center;
    justify-content: space-between;
  }
  .page-cta-preview p {
    margin: 0;
    font-size: 0.9375rem;
  }
  .page-cta-preview__btns {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .page-cta-preview__btn {
    padding: 0.5rem 1rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.875rem;
    border: 2px solid #c5e4ea;
    background: #c5e4ea;
    color: #1e4246;
    cursor: pointer;
  }
  .page-cta-preview__btn--ghost {
    background: transparent;
    color: #c5e4ea;
  }
</style>

<nav class="page-switcher" aria-label="Variantkiezer">
  <span class="page-switcher__label">Bekijk variant</span>
  <div class="page-switcher__buttons">
    <button type="button" class="page-switcher__btn" data-variant="a" aria-pressed="true">
      <span class="page-switcher__btn-title">A · Antwoord eerst</span>
      <span class="page-switcher__btn-sub">Bottom Line Up Front</span>
    </button>
    <button type="button" class="page-switcher__btn" data-variant="b" aria-pressed="false">
      <span class="page-switcher__btn-title">B · In drie stappen</span>
      <span class="page-switcher__btn-sub">Taakgericht &amp; scenariogedreven</span>
    </button>
    <button type="button" class="page-switcher__btn" data-variant="c" aria-pressed="false">
      <span class="page-switcher__btn-title">C · Toon het resultaat</span>
      <span class="page-switcher__btn-sub">Outcome-first + credibility</span>
    </button>
  </div>
</nav>

<!-- ==================================================================== -->
<!-- Variant A — Antwoord eerst (Bottom Line Up Front)                     -->
<!-- ==================================================================== -->
<section class="page-variant is-active" data-variant="a">
  <p class="page-variant__intro">
    <strong>Principe — Antwoord eerst (BLUF / omgekeerde piramide).</strong>
    Behandelaars scannen in seconden. Het belangrijkste antwoord staat direct bovenaan:
    wat is dit, voor wie, hoe lang, wat levert het op? Details volgen op afnemend
    belang — geen accordions die aandacht vragen, wel korte scannable blokken.
    Paste bij een doelgroep die snel wil weten of een tool relevant is.
  </p>

  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <a class="tool-detail__back" href="#"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid" style="grid-template-columns: 1fr;">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom — ACT Profiel Jeugd</h1>
            <span class="tool-detail__badge tool-detail__badge--coming">Binnenkort beschikbaar</span>
            <p class="tool-detail__lead">
              In 5–10 minuten een visueel ACT-profiel voor kinderen en jongeren (10+) —
              een persoonlijke tuin als gespreksstarter voor behandelaar, kind en ouders.
            </p>
          </div>
        </div>
      </div>
    </header>

    <div class="container tool-detail__body">
      <div class="tool-detail__content">

        <div class="answer-first__facts" role="list">
          <div class="answer-first__fact" role="listitem">
            <span class="answer-first__fact-label">Voor wie</span>
            <span class="answer-first__fact-value">Kinder &amp; jongeren 10+</span>
          </div>
          <div class="answer-first__fact" role="listitem">
            <span class="answer-first__fact-label">Tijdsinvestering</span>
            <span class="answer-first__fact-value">5–10 minuten · 36 vragen</span>
          </div>
          <div class="answer-first__fact" role="listitem">
            <span class="answer-first__fact-label">Wat krijg je</span>
            <span class="answer-first__fact-value">Visueel ACT-profiel als tuin</span>
          </div>
          <div class="answer-first__fact" role="listitem">
            <span class="answer-first__fact-label">Niet</span>
            <span class="answer-first__fact-value">Geen diagnostische test</span>
          </div>
        </div>

        <p class="answer-first__lede">
          Bloom brengt de zes ACT-pijlers in beeld via korte, herkenbare vragen.
          Onderaan het scherm groeit ondertussen een persoonlijke tuin: wat al
          in volle bloei staat, wat in ontwikkeling is en waar nog groeiruimte ligt.
          Zo krijgt de behandelaar een laagdrempelig startpunt voor het gesprek met
          kind en ouders.
        </p>

        <div class="highlight-box tool-detail__uses">
          <h2 class="highlight-box__title">Waarvoor kun je Bloom gebruiken?</h2>
          <ul>
            <li>Inzicht in de zes ACT-pijlers</li>
            <li>Startpunt voor een ACT-behandeling</li>
            <li>Richting geven aan behandelkeuzes</li>
            <li>Gesprek met kind, jongere of ouders</li>
            <li>Monitoring tijdens behandeling</li>
            <li>Trainingen, groepen of lessen</li>
          </ul>
        </div>

        <div class="section__header">
          <h2>Wat onderscheidt Bloom?</h2>
        </div>
        <ol class="answer-first__distinctions">
          <li class="answer-first__distinction">
            <span class="answer-first__distinction-num">1</span>
            <span>
              <strong>Geen test, een ervaring</strong>
              <span>Terwijl het kind korte vragen beantwoordt, groeit onderaan een tuin — speels en laagdrempelig.</span>
            </span>
          </li>
          <li class="answer-first__distinction">
            <span class="answer-first__distinction-num">2</span>
            <span>
              <strong>Speciaal voor jeugd</strong>
              <span>Concreet en herkenbaar geformuleerd voor kinderen en jongeren vanaf ongeveer 10 jaar.</span>
            </span>
          </li>
          <li class="answer-first__distinction">
            <span class="answer-first__distinction-num">3</span>
            <span>
              <strong>Een profiel, geen oordeel</strong>
              <span>De uitslag laat kracht, ontwikkeling en groeiruimte zien — mild en nieuwsgierig, niet beoordelend.</span>
            </span>
          </li>
          <li class="answer-first__distinction">
            <span class="answer-first__distinction-num">4</span>
            <span>
              <strong>Direct bruikbaar in de behandeling</strong>
              <span>De tuin geeft behandelaar, kind en ouders een gezamenlijke taal om verder te praten.</span>
            </span>
          </li>
        </ol>

        <div class="section__header">
          <h2>Vragen die behandelaars stellen</h2>
        </div>
        <div class="tool-faq-open">
          <article class="tool-faq-open__item">
            <h3 class="tool-faq-open__question">Is Bloom een diagnostische test?</h3>
            <p class="tool-faq-open__answer">
              Nee. Bloom vervangt geen klinische beoordeling. De uitslag is een
              gespreksstarter en hulpmiddel bij behandelrichting.
            </p>
          </article>
          <article class="tool-faq-open__item">
            <h3 class="tool-faq-open__question">Hoe lang duurt het invullen?</h3>
            <p class="tool-faq-open__answer">
              36 korte vragen, 5–10 minuten voor de meeste kinderen en jongeren.
            </p>
          </article>
          <article class="tool-faq-open__item">
            <h3 class="tool-faq-open__question">Wat meet Bloom precies?</h3>
            <p class="tool-faq-open__answer">
              De zes ACT-processen: acceptatie, defusie, hier-en-nu, zelf-als-context,
              waarden en toegewijd handelen — samen een globale indruk van
              psychologische flexibiliteit.
            </p>
          </article>
          <article class="tool-faq-open__item">
            <h3 class="tool-faq-open__question">Moet ik ACT-ervaring hebben?</h3>
            <p class="tool-faq-open__answer">
              Basiskennis van ACT is aan te raden. De betekenis van het profiel
              ontstaat vooral in het gesprek met kind, ouders en behandelaar.
            </p>
          </article>
        </div>

        <div class="page-cta-preview">
          <p>Probeer Bloom vrijblijvend uit of schaf de tool aan.</p>
          <span class="page-cta-preview__btns">
            <button type="button" class="page-cta-preview__btn">Probeer uit</button>
            <button type="button" class="page-cta-preview__btn page-cta-preview__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>
</section>

<!-- ==================================================================== -->
<!-- Variant B — In drie stappen (Taakgericht & scenariogedreven)          -->
<!-- ==================================================================== -->
<section class="page-variant" data-variant="b">
  <p class="page-variant__intro">
    <strong>Principe — Taakgericht &amp; scenariogedreven.</strong>
   GGZ-professionals denken in situaties en volgende stappen, niet in features.
    Deze variant maakt direct concreet: zo werkt het (3 stappen) en zo past het
    in jouw situatie (scenario's). Overtuiging komt niet uit claims, maar uit
    herkenbaarheid van de eigen werkcasen.
  </p>

  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <a class="tool-detail__back" href="#"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid" style="grid-template-columns: 1fr;">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom — ACT Profiel Jeugd</h1>
            <span class="tool-detail__badge tool-detail__badge--coming">Binnenkort beschikbaar</span>
            <p class="tool-detail__lead">
              Een visueel ACT-profiel voor kinderen en jongeren (10+) als
              persoonlijke tuin — speels om in te vullen, bruikbaar in het gesprek.
            </p>
          </div>
        </div>
      </div>
    </header>

    <div class="container tool-detail__body">
      <div class="tool-detail__content">

        <div class="section__header">
          <h2>Zo werkt het</h2>
        </div>
        <ol class="steps-flow">
          <li class="steps-flow__step">
            <h3 class="steps-flow__title">Invullen</h3>
            <p class="steps-flow__text">
              Het kind beantwoordt 36 korte, concreet geformuleerde vragen. De meeste
              kinderen en jongeren zijn in 5–10 minuten klaar.
            </p>
          </li>
          <li class="steps-flow__step">
            <h3 class="steps-flow__title">Tuin groeit</h3>
            <p class="steps-flow__text">
              Onderaan het scherm groeit ondertussen een persoonlijke tuin — per
              ACT-pijler zie je wat al bloeit, wat in ontwikkeling is en waar
              groeiruimte ligt.
            </p>
          </li>
          <li class="steps-flow__step">
            <h3 class="steps-flow__title">Bespreken</h3>
            <p class="steps-flow__text">
              De tuin geeft behandelaar, kind en ouders een gezamenlijke taal om te
              praten over klachten, waarden en oefendoelen.
            </p>
          </li>
        </ol>

        <div class="section__header">
          <h2>In welke situaties past Bloom?</h2>
        </div>
        <ul class="scenario-cards">
          <li class="scenario-cards__item">
            <span class="scenario-cards__tag">Start van behandeling</span>
            <h3 class="scenario-cards__title">Snel een beeld van de ACT-pijlers</h3>
            <p class="scenario-cards__text">
              Een laagdrempelig startpunt om samen met kind en ouders te verkennen
              waar kracht zit en waar iemand vastloopt.
            </p>
          </li>
          <li class="scenario-cards__item">
            <span class="scenario-cards__tag">Richting bepalen</span>
            <h3 class="scenario-cards__title">Behandelkeuzes onderbouwen</h3>
            <p class="scenario-cards__text">
              Het profiel helpt kiezen welke ACT-vaardigheden extra aandacht
              verdienen in de komende fase.
            </p>
          </li>
          <li class="scenario-cards__item">
            <span class="scenario-cards__tag">Monitoring</span>
            <h3 class="scenario-cards__title">Voortgang zichtbaar maken</h3>
            <p class="scenario-cards__text">
              Vul Bloom op meerdere momenten opnieuw in en bespreek wat er
              veranderd is — reflectie, geen harde effectmeting.
            </p>
          </li>
          <li class="scenario-cards__item">
            <span class="scenario-cards__tag">Groep &amp; training</span>
            <h3 class="scenario-cards__title">Inzet in lessen en groepen</h3>
            <p class="scenario-cards__text">
              Bruikbaar in trainingen, groepsbijeenkomsten of lessen over
              emotieregulatie en psychologische flexibiliteit.
            </p>
          </li>
        </ul>

        <div class="section__header">
          <h2>Wat onderscheidt Bloom?</h2>
        </div>
        <div class="tool-accordion tool-accordion--band">
          <details class="tool-accordion__item" open>
            <summary class="tool-accordion__summary">
              <span class="tool-accordion__summary-inner">
                <span class="tool-accordion__number" aria-hidden="true">1</span>
                <span class="tool-accordion__title">Geen klassieke test, maar een visuele ervaring</span>
              </span>
              <span class="tool-accordion__chevron" aria-hidden="true"></span>
            </summary>
            <div class="tool-accordion__body">
              <p>Terwijl het kind vragen beantwoordt, groeit onderaan een tuin. Dat maakt Bloom speels en laagdrempelig.</p>
            </div>
          </details>
          <details class="tool-accordion__item">
            <summary class="tool-accordion__summary">
              <span class="tool-accordion__summary-inner">
                <span class="tool-accordion__number" aria-hidden="true">2</span>
                <span class="tool-accordion__title">Speciaal ontwikkeld voor jeugd</span>
              </span>
              <span class="tool-accordion__chevron" aria-hidden="true"></span>
            </summary>
            <div class="tool-accordion__body">
              <p>De vragen zijn concreet en herkenbaar voor kinderen en jongeren vanaf ongeveer 10 jaar.</p>
            </div>
          </details>
          <details class="tool-accordion__item">
            <summary class="tool-accordion__summary">
              <span class="tool-accordion__summary-inner">
                <span class="tool-accordion__number" aria-hidden="true">3</span>
                <span class="tool-accordion__title">Een profiel, geen oordeel</span>
              </span>
              <span class="tool-accordion__chevron" aria-hidden="true"></span>
            </summary>
            <div class="tool-accordion__body">
              <p>De uitslag laat kracht, ontwikkeling en groeiruimte zien — mild en nieuwsgierig, niet beoordelend.</p>
            </div>
          </details>
          <details class="tool-accordion__item">
            <summary class="tool-accordion__summary">
              <span class="tool-accordion__summary-inner">
                <span class="tool-accordion__number" aria-hidden="true">4</span>
                <span class="tool-accordion__title">Gebaseerd op de zes ACT-pijlers</span>
              </span>
              <span class="tool-accordion__chevron" aria-hidden="true"></span>
            </summary>
            <div class="tool-accordion__body">
              <p>Acceptatie, defusie, hier-en-nu, zelf-als-context, waarden en toegewijd handelen — toegankelijk in beeld.</p>
            </div>
          </details>
        </div>

        <div class="section__header">
          <h2>Veelgestelde vragen</h2>
        </div>
        <div class="tool-faq-cards">
          <article class="tool-faq-cards__item">
            <h3 class="tool-faq-cards__question">Is Bloom een diagnostische test?</h3>
            <p class="tool-faq-cards__answer">Nee. Bloom vervangt geen klinische beoordeling. De uitslag is een gespreksstarter en hulpmiddel bij behandelrichting.</p>
          </article>
          <article class="tool-faq-cards__item">
            <h3 class="tool-faq-cards__question">Vanaf welke leeftijd?</h3>
            <p class="tool-faq-cards__answer">Vanaf ongeveer 10 jaar. Bij jongere kinderen of moeite met lezen kan de behandelaar samen invullen.</p>
          </article>
          <article class="tool-faq-cards__item">
            <h3 class="tool-faq-cards__question">Hoe lang duurt het invullen?</h3>
            <p class="tool-faq-cards__answer">36 korte vragen, 5–10 minuten voor de meeste kinderen en jongeren.</p>
          </article>
          <article class="tool-faq-cards__item">
            <h3 class="tool-faq-cards__question">Kan Bloom voortgang meten?</h3>
            <p class="tool-faq-cards__answer">Op meerdere momenten opnieuw in te vullen. Bedoeld voor reflectie en behandelrichting, niet als harde effectmeting.</p>
          </article>
          <article class="tool-faq-cards__item">
            <h3 class="tool-faq-cards__question">Moet ik ACT-ervaring hebben?</h3>
            <p class="tool-faq-cards__answer">Basiskennis van ACT is aan te raden. De betekenis ontstaat vooral in het gesprek met kind, ouders en behandelaar.</p>
          </article>
          <article class="tool-faq-cards__item">
            <h3 class="tool-faq-cards__question">Voor wie is de uitslag?</h3>
            <p class="tool-faq-cards__answer">Voor alle drie: het kind krijgt een begrijpelijk profiel, ouders begrijpen hun kind beter, de behandelaar krijgt aanknopingspunten.</p>
          </article>
        </div>

        <div class="page-cta-preview">
          <p>Probeer Bloom vrijblijvend uit of schaf de tool aan.</p>
          <span class="page-cta-preview__btns">
            <button type="button" class="page-cta-preview__btn">Probeer uit</button>
            <button type="button" class="page-cta-preview__btn page-cta-preview__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>
</section>

<!-- ==================================================================== -->
<!-- Variant C — Toon het resultaat (Outcome-first + credibility)          -->
<!-- ==================================================================== -->
<section class="page-variant" data-variant="c">
  <p class="page-variant__intro">
    <strong>Principe — Show-don't-tell + credibility markers.</strong>
    Het resultaat overtuigt meer dan een beschrijving. Deze variant leidt met de
    visuele uitkomst (de Bloom-tuin) en ondersteunt die met korte, feitelijke
    credibility-markers (36 vragen · 5–10 min · 6 ACT-pijlers · niet-diagnostisch).
    FAQ als dialoog om twijfels weg te nemen. Minimale tekst, maximaal beeld.
  </p>

  <article class="tool-detail">
    <header class="tool-detail__header">
      <div class="container">
        <a class="tool-detail__back" href="#"><span aria-hidden="true">←</span> Alle tools</a>
        <div class="tool-detail__header-grid" style="grid-template-columns: 1fr;">
          <div class="tool-detail__header-main">
            <h1 class="tool-detail__title">Bloom — ACT Profiel Jeugd</h1>
            <span class="tool-detail__badge tool-detail__badge--coming">Binnenkort beschikbaar</span>
            <p class="tool-detail__lead">
              Een persoonlijke tuin als visueel ACT-profiel — voor kinderen en
              jongeren (10+), in 5–10 minuten gemaakt.
            </p>
          </div>
        </div>
      </div>
    </header>

    <div class="container tool-detail__body">
      <div class="tool-detail__content">

        <div class="outcome-hero">
          <figure style="margin:0;">
            <div class="outcome-hero__media">
              <img src="/assets/images/tools/bloom.png" alt="Screenshot van de Bloom-tuin met zes thema's op niveau 3" loading="eager" width="960" height="540">
            </div>
            <p class="outcome-hero__caption">Voorbeeld van een persoonlijke Bloom-tuin in volle bloei.</p>
          </figure>
          <div>
            <p class="answer-first__lede" style="margin:0;">
              Bloom laat kinderen en jongeren op een speelse manier ontdekken hoe ze
              omgaan met de zes ACT-pijlers. De uitkomst is geen rapport, maar een
              tuin die je samen kunt bespreken.
            </p>
          </div>
        </div>

        <ul class="outcome-credibility">
          <li class="outcome-credibility__item">
            <span class="outcome-credibility__value">36 vragen</span>
            <span class="outcome-credibility__label">korte, concreet geformuleerd</span>
          </li>
          <li class="outcome-credibility__item">
            <span class="outcome-credibility__value">5–10 min</span>
            <span class="outcome-credibility__label">invultijd voor de meesten</span>
          </li>
          <li class="outcome-credibility__item">
            <span class="outcome-credibility__value">6 ACT-pijlers</span>
            <span class="outcome-credibility__label">als visueel profiel</span>
          </li>
          <li class="outcome-credibility__item">
            <span class="outcome-credibility__value">Niet-diagnostisch</span>
            <span class="outcome-credibility__label">gespreksstarter, geen oordeel</span>
          </li>
        </ul>

        <div class="section__header">
          <h2>Wat zie je in de tuin?</h2>
        </div>
        <ul class="outcome-legend">
          <li class="outcome-legend__item outcome-legend__item--bloom">
            <h3 class="outcome-legend__title">In volle bloei</h3>
            <p class="outcome-legend__text">Waar al veel kracht zit. Het kind of de jongere kan dit al goed toepassen.</p>
          </li>
          <li class="outcome-legend__item outcome-legend__item--grow">
            <h3 class="outcome-legend__title">In ontwikkeling</h3>
            <p class="outcome-legend__text">Wat in groei is — aandacht en oefening helpen hierbij verder.</p>
          </li>
          <li class="outcome-legend__item outcome-legend__item--space">
            <h3 class="outcome-legend__title">Groeiruimte</h3>
            <p class="outcome-legend__text">Waar nog weinig staat. Aanknopingspunt voor behandelkeuzes en oefendoelen.</p>
          </li>
        </ul>

        <div class="highlight-box tool-detail__uses">
          <h2 class="highlight-box__title">Waarvoor kun je Bloom gebruiken?</h2>
          <ul>
            <li>Inzicht in de zes ACT-pijlers</li>
            <li>Startpunt voor een ACT-behandeling</li>
            <li>Richting geven aan behandelkeuzes</li>
            <li>Gesprek met kind, jongere of ouders</li>
            <li>Monitoring tijdens behandeling</li>
            <li>Trainingen, groepen of lessen</li>
          </ul>
        </div>

        <div class="section__header">
          <h2>Twijfels weggenomen</h2>
        </div>
        <div class="tool-faq-dialog">
          <article class="tool-faq-dialog__item">
            <p class="tool-faq-dialog__question">Is Bloom een diagnostische test?</p>
            <p class="tool-faq-dialog__answer">Nee. Bloom vervangt geen klinische beoordeling. De uitslag is een gespreksstarter en hulpmiddel bij behandelrichting.</p>
          </article>
          <article class="tool-faq-dialog__item">
            <p class="tool-faq-dialog__question">Vanaf welke leeftijd is Bloom geschikt?</p>
            <p class="tool-faq-dialog__answer">Vanaf ongeveer 10 jaar. Bij jongere kinderen of moeite met lezen kan de behandelaar samen invullen.</p>
          </article>
          <article class="tool-faq-dialog__item">
            <p class="tool-faq-dialog__question">Hoe lang duurt het invullen?</p>
            <p class="tool-faq-dialog__answer">36 korte vragen, 5–10 minuten voor de meeste kinderen en jongeren.</p>
          </article>
          <article class="tool-faq-dialog__item">
            <p class="tool-faq-dialog__question">Waarom een tuinmetafoor?</p>
            <p class="tool-faq-dialog__answer">Een tuin past bij ACT en ontwikkeling: sommige delen bloeien al, andere vragen nog aandacht. Dat maakt de uitslag mild en uitnodigend in plaats van beoordelend.</p>
          </article>
          <article class="tool-faq-dialog__item">
            <p class="tool-faq-dialog__question">Moet een behandelaar ACT-ervaring hebben?</p>
            <p class="tool-faq-dialog__answer">Basiskennis van ACT is aan te raden. De betekenis van het profiel ontstaat vooral in het gesprek met kind, ouders en behandelaar.</p>
          </article>
        </div>

        <div class="page-cta-preview">
          <p>Probeer Bloom vrijblijvend uit of schaf de tool aan.</p>
          <span class="page-cta-preview__btns">
            <button type="button" class="page-cta-preview__btn">Probeer uit</button>
            <button type="button" class="page-cta-preview__btn page-cta-preview__btn--ghost">Koop</button>
          </span>
        </div>
      </div>
    </div>
  </article>
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


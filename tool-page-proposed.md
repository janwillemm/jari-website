---
layout: default
title: Bloom — voorgestelde toolpagina
sitemap: false
---

<style>
  .preview-chip {
    position: fixed;
    top: 5.25rem;
    right: 1rem;
    z-index: 50;
    padding: 0.5rem 0.75rem;
    background: #1e4246;
    color: #ffffff;
    border-radius: 0.5rem;
    font-family: "DM Sans", system-ui, sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    box-shadow: 4px 4px 0 rgba(28, 43, 48, 0.15);
  }
  @media (max-width: 47.99rem) {
    .preview-chip {
      top: auto;
      bottom: 1rem;
    }
  }

  /* Ruimte & leesbreedte — measure komt uit site-CSS ($content-measure) */
  .tool-detail__body {
    padding-block: 2.75rem 4rem;
  }
  .tool-detail__hero-text p + p {
    margin-top: 1rem;
  }
  .tool-detail__prose > .section__header {
    margin-top: 3.25rem;
    margin-bottom: 1.25rem;
    padding-top: 2.25rem;
    border-top: 1px solid #dde4e6;
  }
  .tool-detail__content > .section__header {
    margin-top: 3.5rem;
    margin-bottom: 1.25rem;
    padding-top: 2.25rem;
  }
  .tool-accordion.tool-accordion--band {
    margin-top: 0.5rem;
  }

  /* FAQ = preview 1 (pv-faq); breedte via site $content-measure */
  .pv-faq {
    margin: 0;
    max-width: 42rem; /* = $content-measure */
    padding: 1.5rem 1.35rem;
    background: #f6f7f5;
    border-radius: 0.75rem;
  }
  .pv-faq article {
    padding: 1.15rem 0;
    border-bottom: 1px solid #dde4e6;
  }
  .pv-faq article:first-child {
    border-top: 1px solid #dde4e6;
  }
  .pv-faq article:last-child {
    border-bottom: 0;
    padding-bottom: 0.25rem;
  }
  .pv-faq h3 {
    margin: 0 0 0.35rem;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1rem;
    font-weight: 600;
    color: #1e4246;
  }
  .pv-faq p,
  .pv-faq .pv-faq__body {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.55;
    color: #4a5e63;
  }
  .pv-faq ul {
    margin: 0.5rem 0 0;
    padding-left: 1.15rem;
  }
  .pv-faq li + li {
    margin-top: 0.25rem;
  }

  .tool-grenzen {
    margin: 3rem 0 0;
    padding: 1.35rem 1.5rem;
    background: #d4ede8;
    border-radius: 0.75rem;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #1e4246;
  }
  .tool-grenzen p {
    margin: 0 0 0.75rem;
  }
  .tool-grenzen p:last-child {
    margin-bottom: 0;
  }

  .tool-makers {
    margin: 3.25rem 0 0;
    padding-top: 2.25rem;
    border-top: 1px solid #dde4e6;
  }
  .tool-makers__header {
    margin: 0 0 1.35rem;
  }
  .tool-makers__header h2 {
    margin: 0;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1.25rem;
    color: #1e4246;
  }
  .tool-makers__grid {
    display: grid;
    gap: 1.25rem;
  }
  @media (min-width: 48rem) {
    .tool-makers__grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  .tool-maker {
    display: grid;
    grid-template-columns: 4.5rem 1fr;
    gap: 0.875rem;
    padding: 1.15rem;
    background: #ffffff;
    border: 1.5px solid #dde4e6;
    border-radius: 0.75rem;
    align-items: start;
  }
  .tool-maker img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #1e4246;
  }
  .tool-maker h3 {
    margin: 0 0 0.15rem;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1rem;
    color: #1e4246;
  }
  .tool-maker__role {
    margin: 0 0 0.35rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: #48a898;
  }
  .tool-maker p {
    margin: 0;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: #4a5e63;
  }

  .pv-cta {
    margin-top: 3.5rem;
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
  .pv-cta p {
    margin: 0;
    font-size: 0.9375rem;
    color: #ffffff;
    font-family: inherit;
  }
  .pv-cta .btn-group {
    margin-top: 0;
  }
  .pv-cta .btn--primary {
    background: #c5e4ea;
    border-color: #c5e4ea;
    color: #1e4246;
  }
  .pv-cta .btn--secondary {
    background: transparent;
    border-color: #c5e4ea;
    color: #c5e4ea;
  }
</style>

<p class="preview-chip" aria-label="Interne preview">Preview</p>

<article class="tool-detail">
  <header class="tool-detail__header">
    <div class="container">
      <a class="tool-detail__back" href="{{ '/tools/' | relative_url }}">
        <span aria-hidden="true">←</span> Alle tools
      </a>
      <div class="tool-detail__header-grid">
        <div class="tool-detail__header-main">
          <h1 class="tool-detail__title">Bloom ACT Profiel Jeugd</h1>
          <p class="tool-detail__lead">Helpt kinderen en jongeren (10+) op een speelse manier ontdekken hoe ze omgaan met de zes ACT-pijlers. De uitkomst verschijnt als een persoonlijke Bloom-tuin.</p>
        </div>
        <figure class="tool-detail__preview">
          <button type="button"
                  class="tool-detail__thumb"
                  data-lightbox-src="{{ '/assets/images/tools/bloom.png' | relative_url }}"
                  data-lightbox-caption="Voorbeeld van een persoonlijke Bloom-tuin in volle bloei"
                  aria-label="Screenshot Bloom ACT Profiel Jeugd vergroten">
            {% include browser-frame.html slug="bloom" image="/assets/images/tools/bloom.png" alt="Screenshot van de Bloom-tuin met zes thema's op niveau 3" loading="eager" width=960 height=540 variant="elevated" %}
            <span class="tool-detail__expand" aria-hidden="true">Vergroten</span>
          </button>
          <figcaption>Voorbeeld van een persoonlijke Bloom-tuin in volle bloei</figcaption>
        </figure>
      </div>
      <div class="btn-group tool-detail__cta">
        {% include portal-cta.html variant="primary" action="probeer" slug="bloom" label="Probeer gratis uit" %}
        {% include portal-cta.html variant="secondary" action="kopen" slug="bloom" label="Koop" price=site.tool_yearly_price %}
      </div>
      <p class="tool-price-note">Introductieprijs zolang we in de startfase zitten.</p>
    </div>
  </header>

  <div class="container tool-detail__body">
    <div class="tool-detail__content">
      <div class="tool-detail__prose">
          <div class="tool-detail__hero-text">
            <p>Bloom ACT Profiel Jeugd helpt kinderen en jongeren op een visuele en speelse manier ontdekken hoe zij omgaan met gedachten, gevoelens, aandacht, zichzelf, waarden en stappen zetten. Aan de hand van korte vragen ontstaat een persoonlijk ACT-profiel op basis van de zes pijlers van ACT.</p>
            <p>De uitkomst wordt weergegeven als een persoonlijke Bloom-tuin. In die tuin zie je waar al veel kracht zit en waar nog ruimte is om te groeien. Zo krijgen kind, ouders en behandelaar op een laagdrempelige manier inzicht in mogelijke aanknopingspunten voor behandeling.</p>
            <p>Bloom is geen diagnostische test, maar een praktisch hulpmiddel om samen te onderzoeken: wat helpt al, waar loopt iemand vast en welke ACT-vaardigheden verdienen extra aandacht?</p>
            <p>Voor volwassenen bestaan er ACT-vragenlijsten, zoals de FIT-60, die inzicht geven in psychologische flexibiliteit en de zes ACT-processen. Voor kinderen en jongeren misten wij een laagdrempelige, visuele manier om diezelfde processen zichtbaar en bespreekbaar te maken. Daarom ontwikkelden we Bloom ACT Profiel Jeugd.</p>
          </div>

        <div class="section__header">
          <h2>Wat onderscheidt Bloom?</h2>
        </div>

        <div class="tool-accordion tool-accordion--band">
          <details class="tool-accordion__item">
            <summary class="tool-accordion__summary">
              <span class="tool-accordion__summary-inner">
                <span class="tool-accordion__number" aria-hidden="true">1</span>
                <span class="tool-accordion__title">Geen klassieke test, maar een visuele ervaring</span>
              </span>
              <span class="tool-accordion__chevron" aria-hidden="true"></span>
            </summary>
            <div class="tool-accordion__body">
              <p>Kinderen en jongeren beantwoorden korte vragen terwijl onderaan het scherm langzaam een tuin groeit. Dit maakt Bloom een speelse ervaring die nuttige inzichten geeft.</p>
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
              <p>De vragen zijn concreet, herkenbaar en afgestemd op kinderen en jongeren vanaf ongeveer 10 jaar.</p>
            </div>
          </details>
          <details class="tool-accordion__item">
            <summary class="tool-accordion__summary">
              <span class="tool-accordion__summary-inner">
                <span class="tool-accordion__number" aria-hidden="true">3</span>
                <span class="tool-accordion__title">Gebaseerd op de zes ACT-pijlers</span>
              </span>
              <span class="tool-accordion__chevron" aria-hidden="true"></span>
            </summary>
            <div class="tool-accordion__body">
              <p>Bloom brengt acceptatie, defusie, hier-en-nu, zelf-als-context, waarden en toegewijd handelen op een toegankelijke manier in beeld.</p>
            </div>
          </details>
          <details class="tool-accordion__item">
            <summary class="tool-accordion__summary">
              <span class="tool-accordion__summary-inner">
                <span class="tool-accordion__number" aria-hidden="true">4</span>
                <span class="tool-accordion__title">Een profiel, geen oordeel</span>
              </span>
              <span class="tool-accordion__chevron" aria-hidden="true"></span>
            </summary>
            <div class="tool-accordion__body">
              <p>De uitslag laat zien waar al veel kracht zit, wat in ontwikkeling is en waar nog groeiruimte ligt.</p>
            </div>
          </details>
          <details class="tool-accordion__item">
            <summary class="tool-accordion__summary">
              <span class="tool-accordion__summary-inner">
                <span class="tool-accordion__number" aria-hidden="true">5</span>
                <span class="tool-accordion__title">Direct bruikbaar in de behandeling</span>
              </span>
              <span class="tool-accordion__chevron" aria-hidden="true"></span>
            </summary>
            <div class="tool-accordion__body">
              <p>De persoonlijke Bloom-tuin geeft behandelaar, kind en ouders een gezamenlijke taal om verder te praten over klachten, patronen, waarden en oefendoelen.</p>
            </div>
          </details>
          <details class="tool-accordion__item">
            <summary class="tool-accordion__summary">
              <span class="tool-accordion__summary-inner">
                <span class="tool-accordion__number" aria-hidden="true">6</span>
                <span class="tool-accordion__title">Korte afname, duidelijke opbrengst</span>
              </span>
              <span class="tool-accordion__chevron" aria-hidden="true"></span>
            </summary>
            <div class="tool-accordion__body">
              <p>Met 36 vragen ontstaat in enkele minuten een bruikbaar ACT-profiel dat richting kan geven aan het vervolg van de behandeling.</p>
            </div>
          </details>
        </div>
      </div>

      <div class="section__header">
        <h2>Veelgestelde vragen</h2>
      </div>
      <div class="pv-faq">
        <article>
          <h3>Is Bloom een diagnostische test?</h3>
          <p>Nee. Bloom is geen diagnostisch instrument en vervangt geen klinische beoordeling. De tool geeft een indruk van hoe een kind of jongere omgaat met de zes ACT-processen. De uitkomst is bedoeld als gespreksstarter en als hulpmiddel om richting te geven aan behandeling.</p>
        </article>
        <article>
          <h3>Vanaf welke leeftijd is Bloom geschikt?</h3>
          <p>Bloom is bedoeld voor kinderen en jongeren vanaf ongeveer 10 jaar. De vragen zijn kort en concreet geformuleerd. Bij jongere kinderen of kinderen die moeite hebben met lezen of zelfreflectie kan het helpend zijn om de tool samen met een behandelaar in te vullen.</p>
        </article>
        <article>
          <h3>Hoe lang duurt het invullen?</h3>
          <p>De tool bestaat uit 36 korte vragen. De meeste kinderen en jongeren kunnen Bloom in ongeveer 5 tot 10 minuten invullen.</p>
        </article>
        <article>
          <h3>Wat meet Bloom precies?</h3>
          <p>Bloom brengt zes ACT-processen in beeld: acceptatie, defusie, hier-en-nu, zelf-als-context, waarden en toegewijd handelen. Samen geven deze onderdelen een globale indruk van psychologische flexibiliteit: hoe iemand omgaat met gedachten en gevoelens, aanwezig kan blijven in het moment en stappen kan zetten richting wat belangrijk is.</p>
        </article>
        <article>
          <h3>Kan Bloom gebruikt worden om voortgang te meten?</h3>
          <p>Bloom kan op verschillende momenten in de behandeling opnieuw worden ingevuld. Zo kun je samen bespreken wat er veranderd is en welke onderdelen nog aandacht vragen. De tool is vooral bedoeld voor reflectie en behandelrichting, niet als harde effectmeting.</p>
        </article>
        <article>
          <h3>Moet een behandelaar ACT-ervaring hebben om Bloom te gebruiken?</h3>
          <p>Basiskennis van ACT is aan te raden. Bloom geeft een visueel profiel, maar de betekenis daarvan ontstaat vooral in het gesprek met kind, ouders en behandelaar. De behandelaar kan de uitkomst koppelen aan ACT-oefeningen, behandelthema's en doelen.</p>
        </article>
        <article>
          <h3>Is de uitslag bedoeld voor het kind, ouders of behandelaar?</h3>
          <p>Voor alle drie. Het kind krijgt een begrijpelijk en visueel profiel. Ouders kunnen beter begrijpen waar hun kind in vastloopt en waar kracht zit. De behandelaar krijgt aanknopingspunten om de behandeling verder vorm te geven.</p>
        </article>
        <article>
          <h3>Waarom is gekozen voor een tuinmetafoor?</h3>
          <p>Een tuin past goed bij ACT en ontwikkeling. Het is in principe een bekende metafoor die vaker wordt gebruikt in ACT-behandelingen. Sommige delen van de tuin staan al in bloei, andere delen vragen nog aandacht, verzorging of oefening. Dat maakt de uitslag minder beoordelend en helpt kinderen en jongeren om mild en nieuwsgierig naar zichzelf te kijken. Het geeft ruimte om het gesprek aan te gaan hoe bepaalde onderdelen van de tuin meer aandacht zouden kunnen krijgen.</p>
        </article>
        <article>
          <h3>Wat kun je na de uitslag met Bloom doen?</h3>
          <p>Na de uitslag kun je samen bespreken welke onderdelen herkenbaar zijn, waar de meeste groeiruimte ligt en welke ACT-oefeningen daarbij passen. Denk bijvoorbeeld aan oefenen met meer afstand nemen tot je gedachten, gevoelens de ruimte geven, waarden onderzoeken of kleine stappen zetten richting wat belangrijk is.</p>
        </article>
        <article>
          <h3>Waarvoor kun je Bloom gebruiken?</h3>
          <div class="pv-faq__body">
            <ul>
              <li>Inzicht in de zes ACT-pijlers</li>
              <li>Startpunt voor een ACT-behandeling</li>
              <li>Richting geven aan behandelkeuzes</li>
              <li>Gesprek met kind, jongere of ouders</li>
              <li>Monitoring tijdens behandeling</li>
              <li>Trainingen, groepen of lessen</li>
            </ul>
          </div>
        </article>
      </div>

      <div class="tool-grenzen" role="note">
        <p><strong>Grenzen.</strong> Hulpmiddel ter ondersteuning van gesprekken en behandelrichting. Vervangt geen diagnostische beoordeling of klinisch oordeel.</p>
        <p>Onze tools worden zorgvuldig doorontwikkeld op basis van gebruikservaringen en vrijblijvende feedback. Als je de tool koopt heb je altijd toegang tot de nieuwste versie.</p>
      </div>

      <section class="tool-makers" aria-labelledby="makers-heading">
        <div class="tool-makers__header">
          <h2 id="makers-heading">Wie maakte Bloom?</h2>
        </div>
        <div class="tool-makers__grid">
          <article class="tool-maker">
            <img src="{{ '/assets/images/team/rianne-manenschijn.jpg' | relative_url }}" alt="Rianne Manenschijn" width="72" height="72">
            <div>
              <h3>Rianne Manenschijn</h3>
              <p class="tool-maker__role">Orthopedagoog-generalist</p>
              <p>Behandelaar, docent aan de universiteit, redactielid van de Pedagoog (NVO). Inhoudelijke vertaling van ACT naar jeugd.</p>
            </div>
          </article>
          <article class="tool-maker">
            <img src="{{ '/assets/images/team/jan-willem-manenschijn.jpg' | relative_url }}" alt="Jan-Willem Manenschijn" width="72" height="72">
            <div>
              <h3>Jan-Willem Manenschijn</h3>
              <p class="tool-maker__role">Serious game designer · Informatica (TU Delft)</p>
              <p>Vertaalt behandelideeën naar werkende, ervaringsgerichte digitale tools.</p>
            </div>
          </article>
        </div>
      </section>

      <div class="pv-cta">
        <p>Probeer Bloom ACT Profiel Jeugd uit in het portal.</p>
        <div class="btn-group">
          {% include portal-cta.html variant="primary" action="probeer" slug="bloom" label="Probeer gratis uit" %}
          {% include portal-cta.html variant="secondary" action="kopen" slug="bloom" label="Koop" %}
        </div>
      </div>
    </div>
  </div>
</article>

{% include image-lightbox.html %}

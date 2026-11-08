---
name: Filmpjes
title: Filmpjes — korte uitleg voor ouders, kinderen en jongeren
description: >-
  Korte animaties die uitleggen wat er in een behandeling in de jeugd-ggz gebeurt.
  Gratis te gebruiken, met ondertitels in zes talen. Een eigen filmpje laten maken kan vanaf €50.
order: 5
status: live
status_label: Gratis
summary: Korte animaties die uitleggen wat er in een behandeling gebeurt. Gratis te gebruiken, met ondertitels in zes talen
lead: Uitleg voor ouders, kinderen en jongeren
image: https://jari-media.s3.nl-ams.scw.cloud/filmpjes/systeemtherapie-v2.jpg
alt: Still uit het filmpje over systeemtherapie, een gezin van papier speelt samen in een orkest
available: false
portal_slug: filmpjes
films: true
makers_title: Wie maken de filmpjes?
hero_film: systeemtherapie
hero_film_caption: "Voorbeeld: Wat is systeemtherapie? Voor ouders, 3:37 minuten"
cta:
  label: Laat een filmpje maken
  url: /filmpje-laten-maken/
  secondary_label: Bekijk alle filmpjes
  secondary_url: "#onze-filmpjes"
  note: Een eigen filmpje laten maken kan vanaf €50.
  footer_text: Wil je een filmpje over jouw behandeling, werkvorm of praktijk? We maken het samen met jou, vanaf €50.
note: >-
  Hulpmiddel ter ondersteuning van uitleg en gesprekken. Vervangt geen gesprek met een
  behandelaar.
uses_title: Waarvoor kun je onze filmpjes gebruiken?
uses:
  - Meesturen met de uitnodiging voor een eerste gesprek
  - Samen bekijken tijdens een intake of gesprek
  - Op de website van je praktijk
  - In de wachtkamer, met ondertitels en zonder geluid
  - Bij ouders die liever in een andere taal lezen
  - Als psycho-educatie tussen twee afspraken door
faq:
  - question: Mag ik de filmpjes gebruiken in mijn praktijk?
    answer: >-
      Ja. Je mag ze gratis laten zien en de link delen met ouders, kinderen en jongeren. Wil je een filmpje op de website van je praktijk zetten? Gebruik dan de versie op ons YouTube-kanaal.
  - question: Kan ik de ondertitels uitzetten of een andere taal kiezen?
    answer: >-
      Ja. Onder elk filmpje kies je de taal of zet je de ondertitels uit. Er zijn ondertitels in het Nederlands, Engels, Pools, Turks, Arabisch en Marokkaans-Arabisch. Op YouTube doe je hetzelfde met de knop CC.
  - question: Kan ik een eigen filmpje laten maken?
    answer: >-
      Ja. Denk aan uitleg over een behandelvorm, een werkvorm die je vaak gebruikt of wat ouders kunnen verwachten bij jouw praktijk. Dat kan vanaf €50. Vul het formulier op de pagina Filmpje laten maken in en vertel wat je in gedachten hebt. Je hoort vooraf wat het kost.
  - question: Hoe gaat het maken van een filmpje?
    answer: >-
      Jij weet wat ouders, kinderen of jongeren moeten horen. Wij maken er beeld, stem en ondertitels bij. Je ziet tussendoor een versie en geeft aan wat anders moet. Feedback is welkom, maar nooit verplicht.
  - question: Komen er meer filmpjes bij?
    answer: >-
      Ja. We maken nieuwe filmpjes over onderwerpen die we in de praktijk vaak tegenkomen. Heb je een idee of mis je iets? Laat het ons weten!
---

<div class="tool-detail__hero-body">
<div class="tool-detail__hero-text" markdown="1">

## Intro

Hoe leg je ouders in een paar minuten uit wat systeemtherapie is? Of waarom je naar het hele gezin kijkt, terwijl ze voor hun kind komen? Dat lukt in een gesprek niet altijd. En wat je vertelt, is na afloop vaak alweer half vergeten.

Daarom maken we korte animaties over wat er in een behandeling gebeurt. Ouders, kinderen en jongeren kunnen ze bekijken wanneer het hen uitkomt: thuis, in de wachtkamer of samen met jou in de behandelkamer.

Elk filmpje heeft ondertitels die je aan- en uitzet, in zes talen. Zo kun je het ook delen met ouders die liever Engels, Pools, Turks of Arabisch lezen.

</div>
</div>

<div class="filmpjes-ontstaan" markdown="1">

## Hoe is dit filmpje ontstaan?

Ken je dat? Je legt in een gesprek met ouders of een kind iets uit en denkt: hier zou een goed filmpje zó handig zijn. Maar wat je zoekt, bestaat net niet.

Rianne werkt veel systemisch. Ze miste een toegankelijk filmpje dat ouders en jongeren uitlegt wat systeemtherapie is. En vooral waarom het helpend kan zijn om samen naar relaties en patronen in het gezin te kijken, ook als je kind degene is die vastloopt. Het liefst met een metafoor erin, want daar werkt ze graag mee.

Dus zijn we gaan experimenteren met animatiefilmpjes. Omdat er nog niets was, was alles mogelijk: de tekenstijl, de kleuren en het script. In korte tijd ontstond een filmpje dat heel dicht in de buurt komt van wat Rianne al langer zocht. Daar waren we zelf positief verrast over.

Zou jij dit filmpje gebruiken in gesprekken met ouders of jongeren? Wat vind je sterk, mis je iets of zie je dingen die beter kunnen? [Laat het ons weten](mailto:info@interactggz.nl?subject=Feedback%20filmpje%20systeemtherapie). Feedback is welkom, maar nooit verplicht. We zijn nog volop aan het ontdekken en verbeteren.

</div>

<section class="filmpjes-lijst" id="onze-filmpjes" aria-labelledby="onze-filmpjes-kop">
  <div class="section__header">
    <h2 id="onze-filmpjes-kop">Onze filmpjes</h2>
  </div>
  {% for f in site.data.filmpjes.filmpjes %}
  <article class="film" id="{{ f.slug }}">
    {% if f.slug == page.hero_film %}
      <div class="film__voorbeeld">
        <img src="{{ site.data.filmpjes.mediaBaseUrl }}/{{ f.poster }}" alt="" loading="lazy" width="640" height="360">
        <a class="btn btn--secondary btn--sm" href="#voorbeeld">Bekijk het filmpje bovenaan</a>
      </div>
    {% else %}
      {% include film-player.html film=f %}
    {% endif %}
    <div class="film__info">
      <p class="film__meta"><span class="film__kijker">Voor {{ f.kijker | downcase }}</span> {{ f.duur }} minuten</p>
      <h3>{{ f.titel }}</h3>
      {% for alinea in f.omschrijving %}<p>{{ alinea }}</p>{% endfor %}
      <h4>Waar kun je dit filmpje gebruiken?</h4>
      <ul>
        {% for g in f.gebruik %}<li>{{ g }}</li>{% endfor %}
      </ul>
    </div>
  </article>
  {% endfor %}
</section>

<div class="filmpjes-maken">
  <span class="highlight-box__tab">Op maat</span>
  <h2>Een eigen filmpje laten maken</h2>
  <p>Leg je steeds hetzelfde uit aan ouders, kinderen of jongeren? Bijvoorbeeld hoe een behandeling werkt, wat een werkvorm is of hoe het eerste gesprek bij jouw praktijk gaat? Dan maken we daar samen een filmpje van. Jij levert de inhoud, wij zorgen voor beeld, stem en ondertitels.</p>
  <p class="filmpjes-maken__prijs">Vanaf €50</p>
  <div class="btn-group">
    <a class="btn btn--primary" href="{{ '/filmpje-laten-maken/' | relative_url }}">Laat een filmpje maken</a>
    <a class="btn btn--secondary" href="{{ '/samen-ontwikkelen/' | relative_url }}">Hoe we samen ontwikkelen</a>
  </div>
</div>

<div class="section__header">
  <h2>Wat maakt onze filmpjes bijzonder?</h2>
</div>

<div class="tool-accordion tool-accordion--band">
  <details class="tool-accordion__item">
    <summary class="tool-accordion__summary">
      <span class="tool-accordion__summary-inner">
        <span class="tool-accordion__number" aria-hidden="true">1</span>
        <span class="tool-accordion__title">Gemaakt vanuit de behandelkamer</span>
      </span>
      <span class="tool-accordion__chevron" aria-hidden="true"></span>
    </summary>
    <div class="tool-accordion__body">
      <p>
        De tekst schrijven we samen met behandelaars. Zo gaat een filmpje over de vragen die ouders, kinderen en jongeren echt stellen, in woorden die ze begrijpen.
      </p>
    </div>
  </details>
  <details class="tool-accordion__item">
    <summary class="tool-accordion__summary">
      <span class="tool-accordion__summary-inner">
        <span class="tool-accordion__number" aria-hidden="true">2</span>
        <span class="tool-accordion__title">Ondertitels in zes talen</span>
      </span>
      <span class="tool-accordion__chevron" aria-hidden="true"></span>
    </summary>
    <div class="tool-accordion__body">
      <p>
        Nederlands, Engels, Pools, Turks, Arabisch en Marokkaans-Arabisch. De ondertitels staan los van het beeld. Je zet ze aan of uit en kiest zelf de taal, hier op de website en op YouTube.
      </p>
    </div>
  </details>
  <details class="tool-accordion__item">
    <summary class="tool-accordion__summary">
      <span class="tool-accordion__summary-inner">
        <span class="tool-accordion__number" aria-hidden="true">3</span>
        <span class="tool-accordion__title">Kort en rustig</span>
      </span>
      <span class="tool-accordion__chevron" aria-hidden="true"></span>
    </summary>
    <div class="tool-accordion__body">
      <p>
        Een filmpje duurt een paar minuten. Het beeld is rustig: papierknipsel in stop-motion, met één vergelijking die blijft hangen. Bij systeemtherapie is dat een gezin als orkest.
      </p>
    </div>
  </details>
  <details class="tool-accordion__item">
    <summary class="tool-accordion__summary">
      <span class="tool-accordion__summary-inner">
        <span class="tool-accordion__number" aria-hidden="true">4</span>
        <span class="tool-accordion__title">Niemand is de schuldige</span>
      </span>
      <span class="tool-accordion__chevron" aria-hidden="true"></span>
    </summary>
    <div class="tool-accordion__body">
      <p>
        We laten zien hoe patronen ontstaan, niet wie het fout doet. Zo kunnen ouders kijken zonder zich aangesproken te voelen.
      </p>
    </div>
  </details>
  <details class="tool-accordion__item">
    <summary class="tool-accordion__summary">
      <span class="tool-accordion__summary-inner">
        <span class="tool-accordion__number" aria-hidden="true">5</span>
        <span class="tool-accordion__title">Overal te bekijken</span>
      </span>
      <span class="tool-accordion__chevron" aria-hidden="true"></span>
    </summary>
    <div class="tool-accordion__body">
      <p>
        Op deze pagina, in het portaal en op ons YouTube-kanaal. Ouders hoeven niets te installeren en geen account aan te maken.
      </p>
    </div>
  </details>
</div>

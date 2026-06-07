---
layout: tools
permalink: /tools/
heading: Onze tools
intro: >-
  Hier vind je onze tools, wij noemen ze zelf graag interactieve interventies.
  Elke tool is gericht op directe toepasbaarheid, zonder ingewikkelde systemen,
  met aandacht voor wat in de praktijk werkt voor behandelaren én kinderen.
---

<section class="tools-section">
  <div class="container">
    <div class="section__header">
      <span class="section__eyebrow">Beschikbaar</span>
      <h2>Direct te gebruiken in de praktijk</h2>
    </div>

    <ul class="tool-card-grid">
      {% assign tools = site.tools | sort: "order" %}
      {% for tool in tools %}
        <li{% if tool.video %} class="tool-card-preview"{% endif %}>
          <a class="tool-card tool-card--{{ tool.status }}{% if tool.video %} tool-card--preview{% endif %}" href="{{ '/tools/' | append: tool.slug | append: '/' | relative_url }}">
            {% include tool-card-media.html tool=tool %}
            <span class="tool-card__body">
              <span class="tool-card__title">{{ tool.name }}</span>
              <span class="tool-card__summary">{{ tool.summary }}</span>
              <span class="tool-card__cta">Bekijk tool <span aria-hidden="true">→</span></span>
            </span>
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="tools-section tools-section--disclaimer">
  <div class="container">
    <div class="highlight-box tools-disclaimer" role="note" aria-label="Toelichting bij onze tools">
      <span class="highlight-box__tab">Toelichting</span>
      <p>
        Onze tools ontstaan op het snijvlak van wetenschappelijke kennis, praktijkervaring
        en creativiteit. Tegelijkertijd zijn onze tools zelf niet wetenschappelijk onderzocht
        en doen wij geen uitspraken over specifieke effecten of behandelresultaten. We zien
        ze als hulpmiddelen die professionals kunnen ondersteunen in hun werk, niet als
        vervanging van professionele expertise of klinisch oordeel.
      </p>
    </div>
  </div>
</section>

<section class="tools-section tools-section--surface" id="waar-we-op-dit-moment-aan-werken">
  <div class="container">
    <div class="section__header">
      <span class="section__eyebrow">In ontwikkeling</span>
      <h2>Waar we op dit moment aan werken</h2>
      <p class="section__lead">
        We werken aan meer tools op basis van wat professionals in de praktijk nodig hebben.
        Heb je een idee of wil je meedenken? Neem gerust contact op.
      </p>
    </div>

    <div class="pricing-cta">
      <a class="btn btn--secondary" href="mailto:{{ site.contact.email }}">Neem contact op</a>
    </div>
  </div>
</section>

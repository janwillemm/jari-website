---
layout: tools
permalink: /tools/
title: Tools voor de jeugd-ggz
heading: Onze tools
description: >-
  Interactieve interventies voor behandelaars: EMDR Toolkit, Bloom ACT Profiel
  Jeugd, Driehoekmodel en ACT Avontuur. Direct te gebruiken, vanaf €7,99 per jaar.
intro: >-
  Hier vind je onze tools, wij noemen ze zelf graag interactieve interventies.
  Elke tool is gericht op directe toepasbaarheid, zonder ingewikkelde systemen,
  met aandacht voor wat in de praktijk werkt voor behandelaren én kinderen.
---

<section class="tools-section">
  <div class="container">
    <div class="section__header">
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
              {% if tool.summary %}
                <span class="tool-card__summary">{{ tool.summary }}</span>
              {% endif %}
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

<section class="tools-section">
  <div class="container">
    <div class="pricing-overview__notes">
      <p>
        <strong><a href="mailto:info@interactggz.nl">Praktijklicentie:</a></strong> wil je met
        meerdere collega’s of een hele praktijk gebruikmaken van de tools? Mail ons via
        <a href="mailto:info@interactggz.nl">info@interactggz.nl</a>, dan kijken we samen wat passend is.
      </p>
      <p>
        <strong><a href="{{ '/samen-ontwikkelen/' | relative_url }}">Maatwerk:</a></strong> heb je
        een idee voor een interactieve werkvorm, spel of hulpmiddel voor de jeugd-GGZ? Op de pagina
        Samen ontwikkelen lees je hoe we zo’n idee zorgvuldig kunnen verkennen.
      </p>
    </div>
  </div>
</section>

<section class="tools-section tools-section--surface" id="waar-we-op-dit-moment-aan-werken">
  <div class="container">
    <div class="section__header">
      <h2>Waar we op dit moment aan werken</h2>
    </div>

    {% include tools-in-progress.html %}

    <div class="pricing-cta">
      <a class="btn btn--secondary" href="mailto:{{ site.contact.email }}">Neem contact op</a>
    </div>
  </div>
</section>

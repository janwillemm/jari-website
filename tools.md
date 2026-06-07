---
layout: page
heading: Onze tools
intro: >-
  Hier vind je onze tools, wij noemen ze zelf graag interactieve interventies.
  Elke tool is gericht op directe toepasbaarheid, zonder ingewikkelde systemen,
  met aandacht voor wat in de praktijk werkt voor behandelaren én kinderen.
---

<aside class="tools-notice" aria-label="Toelichting bij onze tools">
  <p>
    Onze tools ontstaan op het snijvlak van wetenschappelijke kennis, praktijkervaring
    en creativiteit. Tegelijkertijd zijn onze tools zelf niet wetenschappelijk onderzocht
    en doen wij geen uitspraken over specifieke effecten of behandelresultaten. We zien
    ze als hulpmiddelen die professionals kunnen ondersteunen in hun werk, niet als
    vervanging van professionele expertise of klinisch oordeel.
  </p>
</aside>

<ul class="tool-card-grid">
  {% assign tools = site.tools | sort: "order" %}
  {% for tool in tools %}
    <li>
      <a class="tool-card tool-card--{{ tool.status }}" href="{{ tool.url | relative_url }}">
        <span class="tool-card__media">
          <img src="{{ tool.image | relative_url }}"
               alt="{{ tool.alt }}"
               loading="lazy"
               width="480"
               height="270">
          <span class="tool-card__badge tool-card__badge--{{ tool.status }}">{{ tool.status_label }}</span>
        </span>
        <span class="tool-card__body">
          <span class="tool-card__title">{{ tool.name }}</span>
          <span class="tool-card__summary">{{ tool.summary }}</span>
          <span class="tool-card__cta">Bekijk tool <span aria-hidden="true">→</span></span>
        </span>
      </a>
    </li>
  {% endfor %}
</ul>

## Waar we op dit moment aan werken

We werken aan meer tools op basis van wat professionals in de praktijk nodig hebben.
Heb je vragen? Neem gerust contact op via
[{{ site.contact.email }}](mailto:{{ site.contact.email }}).

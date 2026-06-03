---
layout: default
title: Home
---

<section class="hero">
  <div class="container hero__inner">
    <div class="hero__content">
      <span class="hero__eyebrow">{{ site.tagline }}</span>
      <h1 class="hero__title">Interactieve interventies voor de jeugd-GGZ</h1>
      <p class="hero__lead">
        {{ site.mission }}
        <strong class="hero__mission-tagline">{{ site.mission_tagline }}</strong>
      </p>
      <div class="btn-group">
        <a class="btn btn--primary" href="{{ '/aan-de-slag/' | relative_url }}">Aan de slag</a>
        <a class="btn btn--secondary" href="{{ '/visie/' | relative_url }}">Onze visie</a>
      </div>
    </div>

    <div class="hero__visual">
      <span class="hero__visual-label">Waar we aan werken</span>

      <div class="tool-slider" data-tool-slider tabindex="0" aria-roledescription="carousel" aria-label="Onze tools">
        <div class="tool-slider__viewport">
          <div class="tool-slider__track" data-slider-track>
            {% for tool in site.tools %}
              <article class="tool-slider__slide{% if forloop.first %} is-active{% endif %}"
                       role="group"
                       aria-roledescription="slide"
                       aria-label="{{ forloop.index }} van {{ site.tools.size }}: {{ tool.name }}"
                       {% unless forloop.first %}hidden{% endunless %}>
                <div class="tool-slider__media">
                  <img src="{{ tool.image | relative_url }}"
                       alt="{{ tool.alt }}"
                       loading="{% if forloop.first %}eager{% else %}lazy{% endif %}"
                       width="480"
                       height="270">
                </div>
                <div class="tool-slider__body">
                  <span class="tool-slider__badge tool-slider__badge--{{ tool.status }}">{{ tool.status_label }}</span>
                  <h3 class="tool-slider__title">{{ tool.name }}</h3>
                  <p class="tool-slider__summary">{{ tool.summary }}</p>
                  <a class="tool-slider__link" href="{{ '/aan-de-slag/' | relative_url }}">Meer over deze tool</a>
                </div>
              </article>
            {% endfor %}
          </div>
        </div>

        <div class="tool-slider__nav">
          <button type="button" class="tool-slider__arrow" data-slider-prev aria-label="Vorige tool">
            <span aria-hidden="true">‹</span>
          </button>
          <div class="tool-slider__dots" role="tablist" aria-label="Kies een tool">
            {% for tool in site.tools %}
              <button type="button"
                      class="tool-slider__dot{% if forloop.first %} is-active{% endif %}"
                      role="tab"
                      data-slider-dot="{{ forloop.index0 }}"
                      aria-label="{{ tool.name }}"
                      aria-selected="{% if forloop.first %}true{% else %}false{% endif %}"></button>
            {% endfor %}
          </div>
          <button type="button" class="tool-slider__arrow" data-slider-next aria-label="Volgende tool">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section__header">
      <p class="section__eyebrow">Wat we doen</p>
      <h2>Tools die behandelaren én kinderen gebruiken</h2>
      <p class="section__lead">
        Behandelinhoud, pedagogiek, technologie, serious gaming en AI komen bij ons samen
        in interactieve interventies — ontworpen om écht ingezet te worden in de praktijk.
      </p>
    </div>

    <div class="card-grid">
      <article class="card">
        <div class="card__icon" aria-hidden="true">📋</div>
        <h3 class="card__title">Overzichtelijk werken</h3>
        <p class="card__text">
          Tools die structuur bieden zonder de menselijke maat te verliezen.
          Helder, rustig en direct toepasbaar in de praktijk.
        </p>
        <a class="card__link" href="{{ '/aan-de-slag/' | relative_url }}">Bekijk de tools</a>
      </article>

      <article class="card">
        <div class="card__icon" aria-hidden="true">🤝</div>
        <h3 class="card__title">Samen ontwikkeld</h3>
        <p class="card__text">
          We bouwen vanuit de praktijk, in gesprek met zorgverleners.
          Wat werkt in het veld, vindt zijn weg naar onze tools.
        </p>
        <a class="card__link" href="{{ '/over-ons/' | relative_url }}">Leer ons kennen</a>
      </article>

      <article class="card">
        <div class="card__icon" aria-hidden="true">💚</div>
        <h3 class="card__title">Met zorg ontworpen</h3>
        <p class="card__text">
          Onze visie op goede GGZ vertaalt zich in elke keuze die we maken —
          van ontwerp tot functionaliteit.
        </p>
        <a class="card__link" href="{{ '/visie/' | relative_url }}">Lees onze visie</a>
      </article>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section__header">
      <p class="section__eyebrow">Over ons</p>
      <h2>Jan-Willem &amp; Rianne</h2>
      <p class="section__lead">
        Creatieve techneut en creatieve orthopedagoog-generalist — samen vormen zij
        de innovatiestudio achter GGZ Tools.
      </p>
    </div>

    <div class="team-grid">
      <div class="team-card">
        <img class="team-card__photo"
             src="{{ '/assets/images/team/jan-willem-manenschijn.jpg' | relative_url }}"
             alt="Jan-Willem Manenschijn"
             loading="lazy"
             width="72"
             height="72">
        <div>
          <p class="team-card__role">Jan-Willem Manenschijn</p>
          <p class="team-card__bio">
            Creatieve techneut. Vertaalt complexe vraagstukken naar heldere,
            werkende tools — met AI, prototypes en veel enthousiasme.
          </p>
        </div>
      </div>

      <div class="team-card">
        <img class="team-card__photo"
             src="{{ '/assets/images/team/rianne-manenschijn.jpg' | relative_url }}"
             alt="Rianne Manenschijn"
             loading="lazy"
             width="72"
             height="72">
        <div>
          <p class="team-card__role">Rianne Manenschijn</p>
          <p class="team-card__bio">
            Creatieve orthopedagoog-generalist. Brengt ideeën vanuit de
            praktijk en zorgt dat elke tool aansluit bij het echte werk.
          </p>
        </div>
      </div>
    </div>

    <div class="btn-group">
      <a class="btn btn--secondary" href="{{ '/over-ons/' | relative_url }}">Meer over ons</a>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <h2>Klaar om aan de slag te gaan?</h2>
    <p>
      Ontdek onze interactieve interventies en hoe je ze kunt inzetten
      in je werk met kinderen en jongeren.
    </p>
    <a class="btn btn--secondary" href="{{ '/aan-de-slag/' | relative_url }}">Naar Aan de slag</a>
  </div>
</section>

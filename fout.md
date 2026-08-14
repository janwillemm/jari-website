---
layout: page
title: Er ging iets mis
heading: Er ging iets mis
subtitle: Bericht niet verstuurd
intro: >-
  Je bericht kon niet worden verstuurd. Controleer of alle verplichte velden zijn
  ingevuld en probeer het opnieuw.
sitemap: false
---

<p id="fout-reden" class="contact-form__intro"></p>

<script>
  (function () {
    var params = new URLSearchParams(window.location.search);
    var reden = params.get("reden");
    var el = document.getElementById("fout-reden");
    if (!el) return;

    if (reden === "rate") {
      el.textContent = "Je hebt te vaak geprobeerd te versturen. Wacht even en probeer het later opnieuw.";
    } else if (reden === "origin") {
      el.textContent = "Het formulier kon niet worden gekoppeld aan deze website. Mail ons rechtstreeks.";
    } else if (reden === "invalid") {
      el.textContent = "Niet alle velden zijn correct ingevuld. Controleer je invoer en probeer het opnieuw.";
    } else {
      el.textContent = "Er is een technische fout opgetreden. Probeer het later opnieuw of mail ons rechtstreeks.";
    }
  })();
</script>

Mail ons op [{{ site.contact.email }}](mailto:{{ site.contact.email }}) of
[{{ site.contact.tools_email }}](mailto:{{ site.contact.tools_email }}).

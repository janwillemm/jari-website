// Filmpjespagina: ondertiteltaal kiezen.
(function () {
  document.querySelectorAll(".film-player").forEach(function (film) {
    var video = film.querySelector("[data-film]");
    var keuze = film.querySelector("[data-film-taal]");

    if (video && keuze) {
      var zet = function () {
        Array.prototype.forEach.call(video.textTracks, function (t) {
          t.mode = t.language === keuze.value ? "showing" : "disabled";
        });
      };
      keuze.addEventListener("change", zet);
      video.textTracks.addEventListener("addtrack", zet);
      // Kiest iemand een taal via de knop in de speler zelf, dan volgt de keuzelijst.
      video.textTracks.addEventListener("change", function () {
        var aan = Array.prototype.find.call(video.textTracks, function (t) { return t.mode === "showing"; });
        keuze.value = aan ? aan.language : "uit";
      });
      zet();
    }
  });
})();

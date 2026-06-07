(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('[data-tool-media]').forEach(function (media) {
    var video = media.querySelector('video');
    var card = media.closest('.tool-card');
    var host = media.closest('.tool-card-preview') || card;
    if (!video || !card || !host) return;

    var active = false;

    function playPreview() {
      if (active) return;
      active = true;
      media.classList.add('is-playing');
      video.currentTime = 0;
      video.play().catch(function () {
        active = false;
        media.classList.remove('is-playing');
      });
    }

    function stopPreview() {
      if (!active) return;
      active = false;
      video.pause();
      video.currentTime = 0;
      media.classList.remove('is-playing');
    }

    host.addEventListener('pointerenter', playPreview);
    host.addEventListener('pointerleave', stopPreview);
    card.addEventListener('focusin', playPreview);
    card.addEventListener('focusout', function (event) {
      if (!card.contains(event.relatedTarget)) stopPreview();
    });
  });
})();

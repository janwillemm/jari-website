(function () {
  document.querySelectorAll("[data-tool-slider]").forEach(function (slider) {
    var slides = slider.querySelectorAll(".tool-slider__slide");
    var dots = slider.querySelectorAll("[data-slider-dot]");
    var prev = slider.querySelector("[data-slider-prev]");
    var next = slider.querySelector("[data-slider-next]");
    var current = 0;

    if (!slides.length) return;

    function goTo(index) {
      current = (index + slides.length) % slides.length;

      slides.forEach(function (slide, i) {
        var active = i === current;
        slide.classList.toggle("is-active", active);
        slide.hidden = !active;
      });

      dots.forEach(function (dot, i) {
        var active = i === current;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", active ? "true" : "false");
      });
    }

    if (prev) {
      prev.addEventListener("click", function () {
        goTo(current - 1);
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        goTo(current + 1);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        goTo(Number(dot.getAttribute("data-slider-dot")));
      });
    });

    slider.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(current - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(current + 1);
      }
    });
  });
})();

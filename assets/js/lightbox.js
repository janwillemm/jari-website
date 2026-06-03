(function () {
  var dialog = document.getElementById("image-lightbox");
  if (!dialog) return;

  var img = dialog.querySelector(".image-lightbox__img");
  var caption = dialog.querySelector(".image-lightbox__caption");

  document.querySelectorAll("[data-lightbox-src]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var preview = trigger.querySelector("img");
      img.src = trigger.getAttribute("data-lightbox-src");
      img.alt = preview ? preview.alt : "";
      caption.textContent = trigger.getAttribute("data-lightbox-caption") || "";
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });
})();

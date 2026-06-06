(function () {
  document.querySelectorAll("[data-values-tabs]").forEach(function (root) {
    var tabs = root.querySelectorAll('[role="tab"]');
    var panels = root.querySelectorAll('[role="tabpanel"]');

    function activateTab(tab) {
      var panelId = tab.getAttribute("aria-controls");

      tabs.forEach(function (item) {
        var active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", active ? "true" : "false");
        item.tabIndex = active ? 0 : -1;
      });

      panels.forEach(function (panel) {
        var active = panel.id === panelId;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        activateTab(tab);
      });

      tab.addEventListener("keydown", function (event) {
        var index = Array.prototype.indexOf.call(tabs, tab);
        var nextIndex = null;

        if (event.key === "ArrowRight") {
          nextIndex = (index + 1) % tabs.length;
        } else if (event.key === "ArrowLeft") {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        }

        if (nextIndex === null) return;

        event.preventDefault();
        activateTab(tabs[nextIndex]);
        tabs[nextIndex].focus();
      });
    });
  });
})();

(function () {
  var path = location.pathname;
  var isHome = /(?:^|\/)(?:index\.html)?$/.test(path);
  if (isHome) {
    var map = {
      "#about": "about.html",
      "#programs": "programs.html",
      "#book": "book.html",
      "#contact": "book.html"
    };
    if (map[location.hash]) {
      location.replace(map[location.hash]);
      return;
    }
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });
})();

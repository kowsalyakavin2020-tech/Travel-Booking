(function () {
  "use strict";

  const page = document.querySelector(".nf");
  const backButton = document.getElementById("goBack");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function goHome() {
    window.location.href = "../index.html";
  }

  backButton?.addEventListener("click", () => {
    if (window.history.length > 1 && document.referrer) {
      window.history.back();
      return;
    }
    goHome();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") goHome();
  });

  // SMIL animations (plane + orbit) ignore the CSS reduced-motion rule
  if (reduceMotion) {
    document.querySelectorAll("svg").forEach((svg) => svg.pauseAnimations && svg.pauseAnimations());
    return;
  }

  if (!page || !window.matchMedia("(pointer: fine)").matches) return;

  let frame = 0;
  page.addEventListener("pointermove", (event) => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      page.style.setProperty("--px", x.toFixed(3));
      page.style.setProperty("--py", y.toFixed(3));
      frame = 0;
    });
  });
})();

/**
 * main.js
 * Entry point — runs after all scripts are loaded.
 */
(function main() {
  "use strict";

  // 1. Theme
  ThemeToggle.init();

  // 2. Resolve which profile to show
  const { mode, data } = Router.resolve();

  if (!data) {
    console.error("[Portfolio] No data found for mode:", mode);
    return;
  }

  // 3. Initial render
  Renderer.renderAll(data);

  // 4. Re-render on hash/popstate changes
  Router.listen(({ mode: newMode, data: newData }) => {
    if (!newData) return;
    console.log("[Portfolio] Switched to mode:", newMode);
    Renderer.renderAll(newData);
    // Scroll to top on profile switch
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 5. Sticky nav shadow on scroll
  const nav = document.getElementById("main-nav");
  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 30px rgba(0,0,0,0.15)";
      } else {
        nav.style.boxShadow = "none";
      }
    }, { passive: true });
  }

  console.log("[Portfolio] Loaded. Mode:", mode);
  console.log("[Portfolio] Switch profiles:");
  console.log("  → Full Stack:     add #fs to the URL");
  console.log("  → Data Analytics: add #da to the URL");

})();

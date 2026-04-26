/**
 * header.js
 * Renders the hero section: large profile image, name, role,
 * CSS-powered typewriter, social links, and profile mode switcher.
 */
const HeaderComponent = (() => {

  /**
   * Render the hero section.
   * @param {Object} profile — profile data from the active data set.
   * @returns {HTMLElement}
   */
  function render(profile) {
    const section = document.createElement("section");
    section.className = "hero-section";
    section.id = "about";

    const content = document.createElement("div");
    content.className = "hero-content animate-in";

    /* --- Profile Image with gradient ring --- */
    const imageContainer = document.createElement("div");
    imageContainer.className = "hero-image-container";

    const ring = document.createElement("div");
    ring.className = "hero-image-ring";

    const img = document.createElement("img");
    img.className = "hero-image";
    img.src = profile.image;
    img.alt = profile.name;
    img.loading = "eager";

    ring.appendChild(img);

    /* Online status indicator */
    const status = document.createElement("div");
    status.className = "hero-status";

    imageContainer.appendChild(ring);
    imageContainer.appendChild(status);

    /* --- Info Block --- */
    const info = document.createElement("div");
    info.className = "hero-info";

    /* Greeting */
    const greeting = document.createElement("div");
    greeting.className = "hero-greeting";
    greeting.innerHTML = `<span class="hero-wave">👋</span> Hey, I'm`;

    /* Name */
    const name = document.createElement("h1");
    name.className = "hero-name";
    name.innerHTML = `${profile.name.split(" ")[0]} <span class="hero-name-gradient">${profile.name.split(" ").slice(1).join(" ")}</span>`;

    /* Role */
    const role = document.createElement("div");
    role.className = "hero-role";
    role.textContent = profile.role;

    /* Typewriter */
    const typewriter = document.createElement("div");
    typewriter.className = "hero-typewriter";
    typewriter.innerHTML = `<span class="tw-text"></span>`;

    /* Social icons */
    const socials = document.createElement("div");
    socials.className = "hero-socials";
    profile.socials.forEach(s => {
      const a = document.createElement("a");
      a.className = "hero-social-link";
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", s.platform);
      a.innerHTML = `<i class="${s.icon}"></i>`;
      socials.appendChild(a);
    });

    /* Profile mode switcher */
    const switcher = document.createElement("div");
    switcher.className = "hero-mode-switcher";

    const currentHash = window.location.hash.replace("#", "").toLowerCase();

    const fsPill = document.createElement("a");
    fsPill.className = "mode-pill" + (currentHash !== "da" ? " active" : "");
    fsPill.href = "#fs";
    fsPill.textContent = "Full Stack";

    const daPill = document.createElement("a");
    daPill.className = "mode-pill" + (currentHash === "da" ? " active" : "");
    daPill.href = "#da";
    daPill.textContent = "Data Analytics";

    switcher.appendChild(fsPill);
    switcher.appendChild(daPill);

    info.appendChild(greeting);
    info.appendChild(name);
    info.appendChild(role);
    info.appendChild(typewriter);
    info.appendChild(socials);
    info.appendChild(switcher);

    content.appendChild(imageContainer);
    content.appendChild(info);

    /* Scroll indicator */
    const scrollIndicator = document.createElement("div");
    scrollIndicator.className = "hero-scroll-indicator";
    scrollIndicator.innerHTML = `<div class="scroll-arrow"></div><span>Scroll</span>`;

    section.appendChild(content);
    section.appendChild(scrollIndicator);

    /* Start typewriter after render */
    requestAnimationFrame(() => {
      _typewriter(typewriter.querySelector(".tw-text"), profile.intro);
    });

    return section;
  }

  /**
   * Simple typewriter effect cycling through phrases.
   */
  function _typewriter(el, phrases, phraseIdx = 0, charIdx = 0, deleting = false) {
    if (!el) return;
    const current = phrases[phraseIdx];
    const speed = deleting ? 25 : 50;

    if (!deleting && charIdx <= current.length) {
      el.textContent = current.substring(0, charIdx);
      charIdx++;
      setTimeout(() => _typewriter(el, phrases, phraseIdx, charIdx, false), speed);
    } else if (!deleting && charIdx > current.length) {
      setTimeout(() => _typewriter(el, phrases, phraseIdx, charIdx, true), 2000);
    } else if (deleting && charIdx >= 0) {
      el.textContent = current.substring(0, charIdx);
      charIdx--;
      setTimeout(() => _typewriter(el, phrases, phraseIdx, charIdx, true), speed);
    } else {
      const next = (phraseIdx + 1) % phrases.length;
      setTimeout(() => _typewriter(el, phrases, next, 0, false), 500);
    }
  }

  return { render };
})();

/**
 * render.js
 * Orchestrates rendering all components into the #app container.
 * Completely clears and rebuilds the DOM from the provided data object.
 */
const Renderer = (() => {

  /**
   * Render the entire portfolio from a data object.
   * @param {Object} data — the resolved data (FULLSTACK_DATA or ANALYTICS_DATA).
   */
  function renderAll(data) {
    const app = document.getElementById("app");
    if (!app || !data) return;

    /* Clear existing content */
    app.innerHTML = "";

    /* 1. Hero / Profile Header */
    const header = HeaderComponent.render(data.profile);
    app.appendChild(header);

    /* 2. Tech Stack */
    const tech = TechStackComponent.render(data.techStack);
    app.appendChild(tech);

    /* 3. Projects */
    const projects = ProjectsComponent.render(data.projects);
    app.appendChild(projects);

    /* 4. Experience */
    const experience = ExperienceComponent.render(data.experience);
    app.appendChild(experience);

    /* 5. Achievements */
    const achievements = AchievementsComponent.render(data.achievements);
    app.appendChild(achievements);

    /* 6. Education */
    const education = EducationComponent.render(data.education);
    app.appendChild(education);

    /* 7. Footer */
    _renderFooter(data.profile);

    /* Update page title */
    document.title = `${data.profile.name} — ${data.profile.role}`;

    /* Update nav logo initials */
    const navLogo = document.getElementById("nav-logo");
    if (navLogo) {
      const parts = data.profile.name.split(" ");
      navLogo.textContent = parts.map(p => p[0]).join("");
    }

    /* Scroll-triggered animations */
    _initScrollAnimations();
  }

  function _renderFooter(profile) {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    footer.innerHTML = `
      <p class="footer-text">
        Crafted with <span class="heart">♥</span> by ${profile.name}
      </p>
      <div class="footer-links">
        ${profile.socials.map(s =>
          `<a href="${s.url}" class="footer-link" target="_blank" rel="noopener noreferrer">${s.platform}</a>`
        ).join("")}
      </div>
    `;
  }

  function _initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".animate-in").forEach(el => {
      el.style.animationPlayState = "paused";
      observer.observe(el);
    });
  }

  return { renderAll };
})();

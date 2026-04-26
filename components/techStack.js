/**
 * techStack.js
 * Renders tech stack icons in a grid with hover tooltips.
 */
const TechStackComponent = (() => {

  /**
   * @param {Array} stack — array of { name, icon } objects.
   * @returns {HTMLElement}
   */
  function render(stack) {
    const section = document.createElement("section");
    section.className = "portfolio-section animate-in";

    const header = document.createElement("div");
    header.className = "section-header";

    const label = document.createElement("div");
    label.className = "section-label";
    label.textContent = "Technologies";

    const heading = document.createElement("h2");
    heading.className = "section-heading";
    heading.textContent = "Tech Stack";

    const subtitle = document.createElement("p");
    subtitle.className = "section-subtitle";
    subtitle.textContent = "Tools and technologies I work with daily.";

    header.appendChild(label);
    header.appendChild(heading);
    header.appendChild(subtitle);

    const grid = document.createElement("div");
    grid.className = "techstack-grid";

    stack.forEach(tech => {
      const wrap = document.createElement("div");
      wrap.className = "tech-icon-wrap";

      const icon = document.createElement("i");
      icon.className = tech.icon;

      const tooltip = document.createElement("span");
      tooltip.className = "tech-tooltip";
      tooltip.textContent = tech.name;

      wrap.appendChild(icon);
      wrap.appendChild(tooltip);
      grid.appendChild(wrap);
    });

    section.appendChild(header);
    section.appendChild(grid);
    return section;
  }

  return { render };
})();

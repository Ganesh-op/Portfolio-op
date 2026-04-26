/**
 * achievements.js
 * Renders achievement badges with icon containers.
 */
const AchievementsComponent = (() => {

  /**
   * @param {Array} achievements — array of { text, icon }.
   * @returns {HTMLElement}
   */
  function render(achievements) {
    const section = document.createElement("section");
    section.className = "portfolio-section animate-in";

    const header = document.createElement("div");
    header.className = "section-header";

    const label = document.createElement("div");
    label.className = "section-label";
    label.textContent = "Recognition";

    const heading = document.createElement("h2");
    heading.className = "section-heading";
    heading.textContent = "Achievements";

    header.appendChild(label);
    header.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "achievements-grid";

    achievements.forEach(a => {
      const item = document.createElement("div");
      item.className = "achievement-item";

      const icon = document.createElement("span");
      icon.className = "achievement-icon";
      icon.textContent = a.icon;

      const text = document.createElement("span");
      text.className = "achievement-text";
      text.textContent = a.text;

      item.appendChild(icon);
      item.appendChild(text);
      grid.appendChild(item);
    });

    section.appendChild(header);
    section.appendChild(grid);
    return section;
  }

  return { render };
})();

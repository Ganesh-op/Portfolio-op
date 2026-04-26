/**
 * experience.js
 * Renders timeline-style experience cards with hover-reveal details.
 */
const ExperienceComponent = (() => {

  /**
   * @param {Array} experiences — array of experience objects.
   * @returns {HTMLElement}
   */
  function render(experiences) {
    const section = document.createElement("section");
    section.className = "portfolio-section animate-in";
    section.id = "experience";

    const header = document.createElement("div");
    header.className = "section-header";

    const label = document.createElement("div");
    label.className = "section-label";
    label.textContent = "Career";

    const heading = document.createElement("h2");
    heading.className = "section-heading";
    heading.textContent = "Experience";

    const subtitle = document.createElement("p");
    subtitle.className = "section-subtitle";
    subtitle.textContent = "Where I've worked and what I've accomplished.";

    header.appendChild(label);
    header.appendChild(heading);
    header.appendChild(subtitle);

    const list = document.createElement("div");
    list.className = "experience-list";

    experiences.forEach(exp => {
      const card = document.createElement("div");
      card.className = "exp-card";

      /* Timeline dot */
      const dot = document.createElement("div");
      dot.className = "exp-dot";

      const top = document.createElement("div");
      top.className = "exp-top";

      const role = document.createElement("span");
      role.className = "exp-role";
      role.textContent = exp.role;

      const period = document.createElement("span");
      period.className = "exp-period";
      period.textContent = exp.period;

      top.appendChild(role);
      top.appendChild(period);

      const company = document.createElement("div");
      company.className = "exp-company";
      company.textContent = exp.company;

      const brief = document.createElement("div");
      brief.className = "exp-brief";
      brief.textContent = exp.brief;

      /* Hover details */
      const details = document.createElement("div");
      details.className = "exp-details";
      const ul = document.createElement("ul");
      exp.details.forEach(d => {
        const li = document.createElement("li");
        li.textContent = d;
        ul.appendChild(li);
      });
      details.appendChild(ul);

      card.appendChild(dot);
      card.appendChild(top);
      card.appendChild(company);
      card.appendChild(brief);
      card.appendChild(details);
      list.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(list);
    return section;
  }

  return { render };
})();

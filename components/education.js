/**
 * education.js
 * Renders education entries with accent border cards.
 */
const EducationComponent = (() => {

  /**
   * @param {Array} education — array of education objects.
   * @returns {HTMLElement}
   */
  function render(education) {
    const section = document.createElement("section");
    section.className = "portfolio-section animate-in";
    section.id = "education";

    const header = document.createElement("div");
    header.className = "section-header";

    const label = document.createElement("div");
    label.className = "section-label";
    label.textContent = "Academic";

    const heading = document.createElement("h2");
    heading.className = "section-heading";
    heading.textContent = "Education";

    header.appendChild(label);
    header.appendChild(heading);

    const list = document.createElement("div");
    list.className = "education-list";

    education.forEach(edu => {
      const card = document.createElement("div");
      card.className = "edu-card";

      const left = document.createElement("div");
      left.className = "edu-left";

      const degree = document.createElement("div");
      degree.className = "edu-degree";
      degree.textContent = edu.degree;

      const institution = document.createElement("div");
      institution.className = "edu-institution";
      institution.textContent = edu.institution;

      left.appendChild(degree);
      left.appendChild(institution);

      const right = document.createElement("div");
      right.className = "edu-right";

      const period = document.createElement("div");
      period.className = "edu-period";
      period.textContent = edu.period;

      const score = document.createElement("div");
      score.className = "edu-score";
      score.textContent = edu.score;

      right.appendChild(period);
      right.appendChild(score);

      card.appendChild(left);
      card.appendChild(right);
      list.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(list);
    return section;
  }

  return { render };
})();

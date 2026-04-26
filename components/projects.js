/**
 * projects.js
 * Renders project cards as square image cards.
 * Hover shows description overlay, click opens modal dialog.
 */
const ProjectsComponent = (() => {

  /* Placeholder project images from picsum */
  const PROJECT_IMAGES = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=600&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=600&fit=crop&auto=format",
  ];

  /**
   * @param {Array} projects — array of project objects.
   * @returns {HTMLElement}
   */
  function render(projects) {
    const section = document.createElement("section");
    section.className = "portfolio-section animate-in";
    section.id = "projects";

    const header = document.createElement("div");
    header.className = "section-header";

    const label = document.createElement("div");
    label.className = "section-label";
    label.textContent = "Portfolio";

    const heading = document.createElement("h2");
    heading.className = "section-heading";
    heading.textContent = "Featured Projects";

    const subtitle = document.createElement("p");
    subtitle.className = "section-subtitle";
    subtitle.textContent = "A selection of projects I've built. Click any card for more details.";

    header.appendChild(label);
    header.appendChild(heading);
    header.appendChild(subtitle);

    const grid = document.createElement("div");
    grid.className = "projects-grid";

    projects.forEach((proj, idx) => {
      const card = document.createElement("div");
      card.className = "project-card";

      /* Project image */
      const img = document.createElement("img");
      img.className = "project-image";
      img.src = proj.image || PROJECT_IMAGES[idx % PROJECT_IMAGES.length];
      img.alt = proj.title;
      img.loading = "lazy";

      /* Bottom label (title + tags, visible by default) */
      const labelEl = document.createElement("div");
      labelEl.className = "project-label";

      const titleEl = document.createElement("div");
      titleEl.className = "project-title";
      titleEl.textContent = proj.title;

      const tags = document.createElement("div");
      tags.className = "project-tags";
      proj.tags.forEach(t => {
        const tag = document.createElement("span");
        tag.className = "project-tag";
        tag.textContent = t;
        tags.appendChild(tag);
      });

      labelEl.appendChild(titleEl);
      labelEl.appendChild(tags);

      /* Hover overlay */
      const overlay = document.createElement("div");
      overlay.className = "project-overlay";

      const overlayTitle = document.createElement("div");
      overlayTitle.className = "project-overlay-title";
      overlayTitle.textContent = proj.title;

      const overlayText = document.createElement("div");
      overlayText.className = "project-overlay-text";
      overlayText.textContent = proj.brief;

      const overlayTags = document.createElement("div");
      overlayTags.className = "project-overlay-tags";
      proj.tags.forEach(t => {
        const tag = document.createElement("span");
        tag.className = "project-overlay-tag";
        tag.textContent = t;
        overlayTags.appendChild(tag);
      });

      const clickHint = document.createElement("div");
      clickHint.className = "project-click-hint";
      clickHint.innerHTML = `View Details <span class="arrow">→</span>`;

      overlay.appendChild(overlayTitle);
      overlay.appendChild(overlayText);
      overlay.appendChild(overlayTags);
      overlay.appendChild(clickHint);

      card.appendChild(img);
      card.appendChild(labelEl);
      card.appendChild(overlay);

      /* Click → open modal */
      card.addEventListener("click", () => {
        ModalComponent.open(proj, PROJECT_IMAGES[idx % PROJECT_IMAGES.length]);
      });

      grid.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(grid);
    return section;
  }

  return { render };
})();

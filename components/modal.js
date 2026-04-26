/**
 * modal.js
 * Premium modal dialog for project detail views.
 * Features: project image, full description, action buttons.
 * Closes on backdrop click, X button, or Escape key.
 */
const ModalComponent = (() => {

  let backdrop = null;

  /**
   * Open modal with full project data.
   * @param {Object} project
   * @param {string} fallbackImage — fallback image URL
   */
  function open(project, fallbackImage) {
    const root = document.getElementById("modal-root");
    if (!root) return;

    /* Create backdrop */
    backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";

    /* Modal content */
    const content = document.createElement("div");
    content.className = "modal-content";

    /* Close button */
    const closeBtn = document.createElement("button");
    closeBtn.className = "modal-close";
    closeBtn.innerHTML = "✕";
    closeBtn.setAttribute("aria-label", "Close modal");
    closeBtn.addEventListener("click", close);

    /* Project image */
    const imgSrc = project.image || fallbackImage || "";
    if (imgSrc) {
      const img = document.createElement("img");
      img.className = "modal-project-image";
      img.src = imgSrc;
      img.alt = project.title;
      content.appendChild(img);
    }

    /* Title */
    const title = document.createElement("h3");
    title.className = "modal-title";
    title.textContent = project.title;

    /* Tags */
    const tags = document.createElement("div");
    tags.className = "modal-tags";
    project.tags.forEach(t => {
      const tag = document.createElement("span");
      tag.className = "modal-tag";
      tag.textContent = t;
      tags.appendChild(tag);
    });

    /* Description */
    const desc = document.createElement("div");
    desc.className = "modal-description";
    desc.textContent = project.description;

    /* Actions */
    const actions = document.createElement("div");
    actions.className = "modal-actions";

    if (project.code) {
      const codeBtn = document.createElement("a");
      codeBtn.className = "modal-btn secondary";
      codeBtn.href = project.code;
      codeBtn.target = "_blank";
      codeBtn.rel = "noopener noreferrer";
      codeBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg> View Code`;
      actions.appendChild(codeBtn);
    }

    if (project.demo) {
      const demoBtn = document.createElement("a");
      demoBtn.className = "modal-btn";
      demoBtn.href = project.demo;
      demoBtn.target = "_blank";
      demoBtn.rel = "noopener noreferrer";
      demoBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> Live Demo`;
      actions.appendChild(demoBtn);
    }

    if (!project.code && !project.demo) {
      const noLink = document.createElement("span");
      noLink.className = "modal-btn disabled";
      noLink.textContent = "No links available";
      actions.appendChild(noLink);
    }

    content.appendChild(closeBtn);
    content.appendChild(title);
    content.appendChild(tags);
    content.appendChild(desc);
    content.appendChild(actions);
    backdrop.appendChild(content);
    root.appendChild(backdrop);

    /* Backdrop click to close */
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close();
    });

    /* Escape key to close */
    document.addEventListener("keydown", _escHandler);

    /* Animate in */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        backdrop.classList.add("active");
      });
    });
  }

  /**
   * Close and remove the modal.
   */
  function close() {
    if (!backdrop) return;
    backdrop.classList.remove("active");
    document.removeEventListener("keydown", _escHandler);
    setTimeout(() => {
      if (backdrop && backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
      backdrop = null;
    }, 350);
  }

  function _escHandler(e) {
    if (e.key === "Escape") close();
  }

  return { open, close };
})();

/**
 * portfolio.js
 * Dynamic Portfolio Controller for Ganesh Gharte
 * Manages mode switching (fs vs da), client-side routing,
 * dynamic sidebar populating, and content rendering (Experience, Education, Projects, Tech Stack, Modal, Achievements).
 */

const PortfolioManager = (() => {
  "use strict";

  const STORAGE_KEY = "ganesh-portfolio-mode";

  // Data mapping
  const PROFILE_DATA = {
    fs: () => (typeof FULLSTACK_DATA !== "undefined" ? FULLSTACK_DATA : null),
    da: () => (typeof ANALYTICS_DATA !== "undefined" ? ANALYTICS_DATA : null),
  };

  // Helper: Get services data based on mode
  function getServices(mode) {
    if (mode === "fs") {
      return [
        {
          title: "Web Development",
          text: "Developing robust full-stack web applications using React.js, Node.js, Express, and MongoDB.",
          icon: "./assets/images/icon-dev.svg"
        },
        {
          title: "Web Applications",
          text: "Building responsive, modern, and high-performance web-based application systems.",
          icon: "./assets/images/icon-app.svg"
        },
        {
          title: "UI/UX Design",
          text: "Designing clean, intuitive user interfaces and layouts with Tailwind CSS and responsive frameworks.",
          icon: "./assets/images/icon-design.svg"
        },
        {
          title: "Backend & APIs",
          text: "Engineering scalable RESTful APIs, databases (PostgreSQL/SQL), and secure authentication architectures.",
          icon: "./assets/images/icon-photo.svg"
        }
      ];
    } else {
      return [
        {
          title: "Data Analysis",
          text: "Extracting actionable business insights from complex datasets using Python, Pandas, and SQL.",
          icon: "./assets/images/icon-dev.svg"
        },
        {
          title: "Business Intelligence",
          text: "Designing interactive, metric-focused dashboards in Tableau and Microsoft Power BI.",
          icon: "./assets/images/icon-app.svg"
        },
        {
          title: "Machine Learning",
          text: "Building and testing predictive machine learning models for pattern recognition and classification.",
          icon: "./assets/images/icon-design.svg"
        },
        {
          title: "Data Wrangling & ETL",
          text: "Cleaning, preprocessing, and transforming large-scale structured and unstructured datasets.",
          icon: "./assets/images/icon-photo.svg"
        }
      ];
    }
  }

  // Helper: Get project fallbacks
  function getFallbackProjectImage(idx) {
    const fallbacks = [
      "./assets/images/project-1.jpg",
      "./assets/images/project-2.png",
      "./assets/images/project-3.jpg",
      "./assets/images/project-4.png",
      "./assets/images/project-5.png",
      "./assets/images/project-6.png",
      "./assets/images/project-7.png",
      "./assets/images/project-8.jpg",
      "./assets/images/project-9.png"
    ];
    return fallbacks[idx % fallbacks.length];
  }

  // Helper: Parse markdown bold text (**text** -> <strong>text</strong>)
  function parseMarkdown(text) {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  }

  /* ────────────────────────────────────────────────────────
   * RENDER FUNCTIONS
   * ──────────────────────────────────────────────────────── */

  function renderSidebar(data, activeMode) {
    const profile = data.profile;
    const contacts = profile.contacts;

    // Avatar, Name, Role
    const avatar = document.getElementById("profile-avatar");
    if (avatar) {
      avatar.src = profile.image;
      avatar.alt = profile.name;
    }
    const nameEl = document.getElementById("profile-name");
    if (nameEl) {
      nameEl.textContent = profile.name;
      nameEl.title = profile.name;
    }
    const roleEl = document.getElementById("profile-role");
    if (roleEl) {
      roleEl.textContent = profile.role;
    }

    // Contacts
    const emailEl = document.getElementById("contact-email");
    if (emailEl) {
      emailEl.textContent = contacts.email;
      emailEl.href = `mailto:${contacts.email}`;
    }
    const phoneEl = document.getElementById("contact-phone");
    if (phoneEl) {
      phoneEl.textContent = contacts.phone;
      phoneEl.href = `tel:${contacts.phone.replace(/\s+/g, "")}`;
    }
    const birthdayEl = document.getElementById("contact-birthday");
    if (birthdayEl) {
      birthdayEl.textContent = contacts.birthday;
      birthdayEl.setAttribute("datetime", "2003-10-15");
    }
    const locationEl = document.getElementById("contact-location");
    if (locationEl) {
      locationEl.textContent = contacts.location;
    }

    // Social Links
    const socialsList = document.getElementById("profile-socials");
    if (socialsList) {
      socialsList.innerHTML = profile.socials.map(s => `
        <li class="social-item">
          <a href="${s.url}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${s.platform}">
            <i class="${s.icon}"></i>
          </a>
        </li>
      `).join("");
    }
  }

  function renderAbout(data, mode) {
    // 1. Intro text paragraph injection
    const textContainer = document.getElementById("about-text-container");
    if (textContainer) {
      textContainer.innerHTML = data.profile.intro.map(paragraph => `<p>${parseMarkdown(paragraph)}</p>`).join("");
    }

    // 2. What I'm doing - services
    const servicesList = document.getElementById("services-list");
    if (servicesList) {
      const services = getServices(mode);
      servicesList.innerHTML = services.map(srv => `
        <li class="service-item">
          <div class="service-icon-box">
            <img src="${srv.icon}" alt="${srv.title} icon" width="40">
          </div>
          <div class="service-content-box">
            <h4 class="h4 service-item-title">${srv.title}</h4>
            <p class="service-item-text">${srv.text}</p>
          </div>
        </li>
      `).join("");
    }

    // 3. Categorized Skills Container Populating
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
      skillsContainer.innerHTML = data.techStack.map(cat => `
        <div class="skills-category-block" style="margin-top: 25px;">
          <h4 class="h5 skills-category-title" style="color: var(--white-2); font-size: var(--fs-6); font-weight: var(--fw-500); margin-bottom: 15px; border-left: 3px solid var(--orange-yellow-crayola); padding-left: 10px;">${cat.category}</h4>
          <ul class="techstack-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 15px;">
            ${cat.skills.map(tech => {
              const iconHtml = tech.icon.startsWith("ion-")
                ? `<ion-icon name="${tech.icon.replace('ion-', '')}" style="font-size: 28px; color: var(--orange-yellow-crayola);"></ion-icon>`
                : `<i class="${tech.icon}" style="font-size: 28px;"></i>`;
              return `
                <li class="tech-card" style="padding: 15px 10px; border-radius: 12px; height: 100px;">
                  ${iconHtml}
                  <span style="font-size: var(--fs-8); margin-top: 5px;">${tech.name}</span>
                </li>
              `;
            }).join("")}
          </ul>
        </div>
      `).join("");
    }
  }

  function renderExperiencePage(data) {
    // 1. Timeline: Experience
    const experienceList = document.getElementById("experience-timeline");
    if (experienceList) {
      experienceList.innerHTML = data.experience.map(exp => `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${exp.role} — <em>${exp.company}</em></h4>
          <span>${exp.period}</span>
          <p class="timeline-text" style="font-weight: 400; margin-bottom: 5px; color: var(--white-2);">${parseMarkdown(exp.brief)}</p>
          <ul style="list-style-type: disc; margin-left: 20px; margin-top: 8px; color: var(--light-gray); font-size: var(--fs-6); font-weight: var(--fw-300); line-height: 1.6;">
            ${exp.details.map(detail => `<li>${parseMarkdown(detail)}</li>`).join("")}
          </ul>
        </li>
      `).join("");
    }

    // 2. Timeline: Education
    const educationList = document.getElementById("education-timeline");
    if (educationList) {
      educationList.innerHTML = data.education.map(edu => `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${edu.degree}</h4>
          <span>${edu.period}</span>
          <p class="timeline-text">${edu.institution}</p>
          <p class="timeline-text" style="color: var(--vegas-gold); font-size: var(--fs-7); margin-top: 4px;">${parseMarkdown(edu.score)}</p>
        </li>
      `).join("");
    }

    // 3. Clickable Achievements List
    const achievementsList = document.getElementById("achievements-list");
    if (achievementsList) {
      achievementsList.innerHTML = data.achievements.map(ach => `
        <li class="achievement-item" style="display: flex; align-items: center; gap: 10px; color: var(--light-gray); font-size: var(--fs-6); font-weight: var(--fw-300);">
          <ion-icon name="${ach.icon}" style="font-size: 18px; color: var(--orange-yellow-crayola); flex-shrink: 0;"></ion-icon>
          ${ach.url ? `<a href="${ach.url}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; transition: var(--transition-1); display: inline-flex; align-items: center; gap: 4px;" onmouseover="this.style.color='var(--orange-yellow-crayola)'" onmouseout="this.style.color='inherit'">` : ''}
          <span>${parseMarkdown(ach.text)}</span>
          ${ach.url ? `<ion-icon name="open-outline" style="font-size: 12px; margin-left: 2px;"></ion-icon></a>` : ''}
        </li>
      `).join("");
    }
  }

  function renderPortfolio(data) {
    // 1. Filter dropdown/pills
    const categories = ["all", ...new Set(data.projects.map(p => p.category))];

    const filterList = document.getElementById("project-filter-list");
    if (filterList) {
      filterList.innerHTML = categories.map((cat, idx) => `
        <li class="filter-item">
          <button class="${idx === 0 ? 'active' : ''}" data-filter-btn>${cat}</button>
        </li>
      `).join("");
    }

    const selectList = document.getElementById("project-filter-select-list");
    if (selectList) {
      selectList.innerHTML = categories.map(cat => `
        <li class="select-item">
          <button data-select-item>${cat}</button>
        </li>
      `).join("");
    }

    const selectValue = document.querySelector("[data-selecct-value]");
    if (selectValue) {
      selectValue.textContent = "Select category";
    }

    // 2. Project List Items
    const projectList = document.getElementById("project-list");
    if (projectList) {
      projectList.innerHTML = data.projects.map((proj, idx) => `
        <li class="project-item active" data-filter-item data-category="${proj.category}" data-project-index="${idx}">
          <a href="javascript:void(0)">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <img src="${proj.image || getFallbackProjectImage(idx)}" alt="${proj.title}" loading="lazy">
            </figure>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-category">${proj.category}</p>
          </a>
        </li>
      `).join("");
    }

    // 3. Filter Interactive Binding
    bindFilters();

    // 4. Modal Click Binding
    const projectCards = projectList ? projectList.querySelectorAll(".project-item") : [];
    projectCards.forEach(card => {
      card.onclick = function(e) {
        e.preventDefault();
        const index = parseInt(this.dataset.projectIndex);
        openModal(data.projects[index], index);
      };
    });
  }

  function bindFilters() {
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");
    const filterItems = document.querySelectorAll("[data-filter-item]");

    // select dropdown toggle event
    if (select) {
      select.onclick = function() {
        this.classList.toggle("active");
      };
    }

    function filterFunc(selectedValue) {
      filterItems.forEach(item => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }

    // add event to all select items
    selectItems.forEach(item => {
      item.onclick = function(e) {
        e.stopPropagation();
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        if (select) select.classList.remove("active");
        filterFunc(selectedValue);
      };
    });

    // add event in all filter button items (large screen)
    let lastClickedBtn = filterBtn[0];
    filterBtn.forEach(btn => {
      btn.onclick = function() {
        const selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        if (lastClickedBtn) lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      };
    });
  }

  /* ────────────────────────────────────────────────────────
   * PROJECT MODAL CONTROLLER
   * ──────────────────────────────────────────────────────── */

  function openModal(project, idx) {
    const modalContainer = document.querySelector("[data-project-modal-container]");
    const overlay = document.querySelector("[data-project-overlay]");
    if (!modalContainer || !overlay) return;

    // Populate Modal Content
    const modalImg = document.querySelector("[data-project-modal-img]");
    if (modalImg) {
      modalImg.src = project.image || getFallbackProjectImage(idx);
      modalImg.alt = project.title;
    }
    const modalTitle = document.querySelector("[data-project-modal-title]");
    if (modalTitle) {
      modalTitle.textContent = project.title;
    }
    const modalTags = document.getElementById("project-modal-tags");
    if (modalTags) {
      modalTags.innerHTML = project.tags.map(t => `<span class="project-tag-badge">${t}</span>`).join("");
    }
    const modalText = document.querySelector("[data-project-modal-text]");
    if (modalText) {
      modalText.innerHTML = `<p>${parseMarkdown(project.description)}</p>`;
    }

    // Link Buttons
    const codeLink = document.getElementById("project-modal-code-link");
    if (codeLink) {
      if (project.code) {
        codeLink.href = project.code;
        codeLink.style.display = "inline-flex";
      } else {
        codeLink.style.display = "none";
      }
    }
    const demoLink = document.getElementById("project-modal-demo-link");
    if (demoLink) {
      const demoUrl = project.demo || project.live;
      if (demoUrl) {
        demoUrl.startsWith("http") ? demoLink.href = demoUrl : demoLink.href = `https://${demoUrl}`;
        demoLink.style.display = "inline-flex";
      } else {
        demoLink.style.display = "none";
      }
    }

    // Show
    modalContainer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent body scrolling

    // Add ESC listener
    document.addEventListener("keydown", escKeyHandler);
  }

  function closeModal() {
    const modalContainer = document.querySelector("[data-project-modal-container]");
    const overlay = document.querySelector("[data-project-overlay]");
    if (modalContainer && overlay) {
      modalContainer.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
    document.removeEventListener("keydown", escKeyHandler);
  }

  function escKeyHandler(e) {
    if (e.key === "Escape") closeModal();
  }

  /* ────────────────────────────────────────────────────────
   * CORE RESOLUTION AND EVENT HANDLERS
   * ──────────────────────────────────────────────────────── */

  function resolveMode() {
    let mode = null;

    // 1. Check Hash
    const hash = window.location.hash.replace(/[#/\s]/g, "").toLowerCase();
    if (hash === "da" || hash === "fs") {
      mode = hash;
      try { localStorage.setItem(STORAGE_KEY, mode); } catch (_) {}
    }

    // 2. Check localStorage
    if (!mode) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "da" || stored === "fs") {
          mode = stored;
        }
      } catch (_) {}
    }

    // 3. Default
    if (!mode) {
      mode = "fs";
    }

    return mode;
  }

  function renderAll() {
    const mode = resolveMode();
    const dataGetter = PROFILE_DATA[mode];
    const data = dataGetter ? dataGetter() : null;

    if (!data) {
      console.error("[Portfolio] Data not loaded for mode:", mode);
      return;
    }

    renderSidebar(data, mode);
    renderAbout(data, mode);
    renderExperiencePage(data);
    renderPortfolio(data);

    console.log("[Portfolio] Rendered profile for:", mode);
  }

  function init() {
    // Initial render
    renderAll();

    // Hash & popstate listeners to re-render (URL switching ONLY)
    window.addEventListener("hashchange", () => {
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("popstate", () => {
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Close Modal Button handlers
    const modalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
    const overlay = document.querySelector("[data-project-overlay]");
    if (modalCloseBtn) modalCloseBtn.onclick = closeModal;
    if (overlay) overlay.onclick = closeModal;
  }

  return { init, renderAll, openModal, closeModal };
})();

// Initialize when window has loaded
window.addEventListener("DOMContentLoaded", PortfolioManager.init);

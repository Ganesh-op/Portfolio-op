/**
 * router.js
 * Client-side routing — works with Live Server, GitHub Pages,
 * any static host, or a proper web server.
 *
 * Priority order:
 *   1. Hash in current URL  (#da or #fs)
 *   2. Path in current URL  (/da or /fs)  — for proper servers
 *   3. localStorage         (persisted preference)
 *   4. Default → "fs"       (Full Stack)
 */
const Router = (() => {
  "use strict";

  const STORAGE_KEY = "portfolio-mode";

  const DATA_MAP = {
    fs: () => (typeof FULLSTACK_DATA !== "undefined" ? FULLSTACK_DATA : null),
    da: () => (typeof ANALYTICS_DATA !== "undefined" ? ANALYTICS_DATA : null),
  };

  /* ── helpers ─────────────────────────────────────────── */

  function _normalise(str) {
    return (str || "").replace(/[#/\s]/g, "").toLowerCase();
  }

  function _save(mode) {
    try { localStorage.setItem(STORAGE_KEY, mode); } catch (_) {}
  }

  function _load() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (_) { return null; }
  }

  function _getData(mode) {
    const getter = DATA_MAP[mode];
    return getter ? getter() : null;
  }

  /* ── core resolve ────────────────────────────────────── */

  /**
   * Resolve which profile to show right now.
   * @returns {{ mode: string, data: Object }}
   */
  function resolve() {
    let mode = null;

    // 1. Hash  →  highest priority (works on Live Server / file://)
    const hash = _normalise(window.location.hash);
    if (hash === "da" || hash === "fs") {
      mode = hash;
      _save(mode);
    }

    // 2. Path  →  works on proper servers (nginx, node, etc.)
    if (!mode) {
      const path = _normalise(window.location.pathname);
      if (path === "da" || path === "fs") {
        mode = path;
        _save(mode);
      }
    }

    // 3. localStorage  →  persisted preference
    if (!mode) {
      const stored = _load();
      if (stored === "da" || stored === "fs") {
        mode = stored;
      }
    }

    // 4. Default
    if (!mode) mode = "fs";

    const data = _getData(mode);

    // Safety net — if data somehow missing, fall back to fs
    if (!data) {
      mode = "fs";
    }

    return { mode, data: _getData(mode) };
  }

  /* ── event listeners ─────────────────────────────────── */

  /**
   * Call this once in main.js.
   * Re-renders whenever the hash changes (user navigates).
   * @param {Function} callback  — receives { mode, data }
   */
  function listen(callback) {
    window.addEventListener("hashchange", () => {
      const result = resolve();
      if (typeof callback === "function") callback(result);
    });

    // Also handle browser back/forward (popstate)
    window.addEventListener("popstate", () => {
      const result = resolve();
      if (typeof callback === "function") callback(result);
    });
  }

  return { resolve, listen };
})();

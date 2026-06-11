/**
 * CADO — global settings (UI, learning, CORA)
 */
const CadetosSettings = (function () {
  "use strict";
  const KEY = "cado_settings";
  const DEFAULTS = {
    theme: "system",
    fontSize: "medium",
    coraTypingMs: 28,
    coraStyle: "balanced",
    mcqDifficulty: "medium",
    examMode: false,
    flashcardReviewMode: "standard",
    mcqTargetPerTopic: 40,
    aiTone: "balanced",
    aiSources: "both",
    showThinking: true,
    quizTimerMinutes: 0
  };

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "{}");
      const bio = localStorage.getItem("cado_bio5090_settings") || localStorage.getItem("cadetos_bio5090_settings");
      if (bio) {
        try {
          return Object.assign({}, DEFAULTS, JSON.parse(bio), raw);
        } catch { /* ignore */ }
      }
      return Object.assign({}, DEFAULTS, raw);
    } catch {
      return Object.assign({}, DEFAULTS);
    }
  }

  function save(partial) {
    const next = Object.assign(load(), partial);
    localStorage.setItem(KEY, JSON.stringify(next));
    localStorage.setItem("cado_bio5090_settings", JSON.stringify({
      theme: next.theme,
      aiTone: next.aiTone,
      aiSources: next.aiSources,
      showThinking: next.showThinking,
      mcqTargetPerTopic: next.mcqTargetPerTopic,
      quizTimerMinutes: next.quizTimerMinutes
    }));
    applyAll(next);
    return next;
  }

  function applyTheme(mode) {
    if (mode === "light") document.documentElement.setAttribute("data-theme", "light");
    else if (mode === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else {
      const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    }
    if (mode !== "system") localStorage.setItem("cado_theme", mode);
    else localStorage.removeItem("cado_theme");
  }

  function applyFontSize(size) {
    document.documentElement.setAttribute("data-font-size", size || "medium");
  }

  function applyAll(s) {
    applyTheme(s.theme);
    applyFontSize(s.fontSize);
    document.documentElement.style.setProperty("--cora-typing-ms", String(s.coraTypingMs || 28) + "ms");
  }

  function coraSpeedLabel(ms) {
    if (ms <= 18) return "Fast";
    if (ms >= 45) return "Detailed";
    return "Balanced";
  }

  function styleToTypingMs(style) {
    if (style === "fast") return 16;
    if (style === "detailed") return 48;
    return 28;
  }

  function init() {
    applyAll(load());
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
      if (load().theme === "system") applyTheme("system");
    });
  }

  return {
    load: load,
    save: save,
    applyTheme: applyTheme,
    applyAll: applyAll,
    coraSpeedLabel: coraSpeedLabel,
    styleToTypingMs: styleToTypingMs,
    DEFAULTS: DEFAULTS,
    init: init
  };
})();

if (typeof BiologySettings !== "undefined") {
  BiologySettings.load = function () { return CadetosSettings.load(); };
  BiologySettings.save = function (p) { return CadetosSettings.save(p); };
  BiologySettings.applyTheme = function (m) { return CadetosSettings.applyTheme(m); };
}

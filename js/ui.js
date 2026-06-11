/**
 * CADO Buddy — UI interactions, animations, gamification HUD
 */
const CadoUI = (function () {
  "use strict";

  function $(sel) { return document.querySelector(sel); }

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function renderHud() {
    if (typeof CadoStorage === "undefined") return;
    const streakEl = $("#buddyStreak");
    const xpEl = $("#buddyXp");
    const nameEl = $("#buddyUserName");
    const s = CadoStorage.load();
    if (streakEl) streakEl.textContent = String(s.streak || 0);
    if (xpEl) xpEl.textContent = String(s.xp || 0);
    const streakPanel = $("#buddyStreakPanel");
    const xpPanel = $("#buddyXpPanel");
    if (streakPanel) streakPanel.textContent = String(s.streak || 0);
    if (xpPanel) xpPanel.textContent = String(s.xp || 0);
    if (nameEl) {
      nameEl.textContent = s.userName || "Student";
      nameEl.classList.toggle("buddy-hud-name--guest", !s.userName);
    }
    renderBadgeStrip();
  }

  function renderBadgeStrip() {
    const strip = $("#buddyBadgeStrip");
    if (!strip || typeof CadoStorage === "undefined") return;
    const earned = CadoStorage.getBadges();
    if (!earned.length) {
      strip.innerHTML = '<span class="buddy-badge-empty">Earn badges as you study</span>';
      return;
    }
    strip.innerHTML = earned.slice(-6).map(function (b) {
      return '<span class="buddy-badge" title="' + escapeHtml(b.name + " — " + b.desc) + '">' +
        b.icon + "</span>";
    }).join("");
  }

  function showXpToast(amount, reason) {
    let toast = $("#buddyXpToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "buddyXpToast";
      toast.className = "buddy-xp-toast";
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    const labels = {
      mcq_correct: "MCQ correct",
      flashcard_known: "Flashcard mastered",
      cora_message: "CORA chat",
      subject_open: "Subject opened",
      quiz_complete: "Quiz complete",
      daily_visit: "Daily bonus"
    };
    toast.textContent = "+" + amount + " XP · " + (labels[reason] || "Nice work!");
    toast.classList.add("is-visible");
    clearTimeout(showXpToast._timer);
    showXpToast._timer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2200);
  }

  function showBadgeToast(badge) {
    let toast = $("#buddyBadgeToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "buddyBadgeToast";
      toast.className = "buddy-badge-toast";
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.innerHTML = '<span class="buddy-badge-toast-icon">' + badge.icon + '</span>' +
      '<span><strong>Badge unlocked!</strong><br>' + escapeHtml(badge.name) + "</span>";
    toast.classList.add("is-visible");
    clearTimeout(showBadgeToast._timer);
    showBadgeToast._timer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 3200);
    renderHud();
  }

  function bindHudEvents() {
    $("#buddyHudToggle")?.addEventListener("click", function () {
      const panel = $("#buddyHudPanel");
      const open = !panel?.classList.contains("is-open");
      panel?.classList.toggle("is-open", open);
      $("#buddyHudToggle")?.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) renderHudPanelBadges();
    });
    $("#buddyHudPanelClose")?.addEventListener("click", function () {
      $("#buddyHudPanel")?.classList.remove("is-open");
      $("#buddyHudToggle")?.setAttribute("aria-expanded", "false");
    });
    document.addEventListener("click", function (e) {
      const panel = $("#buddyHudPanel");
      const toggle = $("#buddyHudToggle");
      if (!panel || !panel.classList.contains("is-open")) return;
      if (e.target.closest("#buddyHudPanel") || e.target.closest("#buddyHudToggle")) return;
      panel.classList.remove("is-open");
    });
  }

  function renderWelcomeModal() {
    if (typeof CadoStorage === "undefined") return;
    if (CadoStorage.getUserName()) return;
    const modal = $("#buddyWelcomeModal");
    if (!modal) return;
    modal.classList.remove("hidden");
    const input = $("#buddyNameInput");
    input?.focus();
  }

  function closeWelcomeModal() {
    $("#buddyWelcomeModal")?.classList.add("hidden");
  }

  function saveWelcomeName() {
    const input = $("#buddyNameInput");
    const name = input?.value?.trim();
    if (!name || typeof CadoStorage === "undefined") return;
    CadoStorage.setUserName(name);
    closeWelcomeModal();
    renderHud();
    if (typeof CoraUI !== "undefined" && CoraUI.refreshWelcome) CoraUI.refreshWelcome();
  }

  function bindWelcomeModal() {
    $("#buddyWelcomeForm")?.addEventListener("submit", function (e) {
      e.preventDefault();
      saveWelcomeName();
    });
    $("#buddyWelcomeSkip")?.addEventListener("click", function () {
      closeWelcomeModal();
    });
    $("#buddyWelcomeBackdrop")?.addEventListener("click", closeWelcomeModal);
  }

  function enhanceButtons() {
    document.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn, .subject-card, .feature-card, .nav-dropdown-item, .cora-chip");
      if (!btn || btn.disabled) return;
      btn.classList.add("btn-pressed");
      setTimeout(function () { btn.classList.remove("btn-pressed"); }, 180);
    }, { passive: true });
  }

  function wrapViewTransitions() {
    const views = document.querySelectorAll(".view");
    views.forEach(function (view) {
      view.addEventListener("transitionend", function (e) {
        if (e.propertyName === "opacity") view.classList.remove("view-entering");
      });
    });
  }

  function onViewChange(name) {
    const el = document.getElementById("view-" + name) || document.querySelector('[data-view="' + name + '"]');
    if (!el) return;
    el.classList.add("view-entering");
    requestAnimationFrame(function () {
      el.classList.remove("view-entering");
    });
  }

  function bindProfileEvents() {
    window.addEventListener("cado-xp-earned", function (e) {
      renderHud();
      if (e.detail && e.detail.amount) showXpToast(e.detail.amount, e.detail.reason);
    });
    window.addEventListener("cado-badge-earned", function (e) {
      if (e.detail) showBadgeToast(e.detail);
    });
    window.addEventListener("cado-profile-updated", renderHud);
  }

  function renderHudPanelBadges() {
    const list = $("#buddyBadgeList");
    if (!list || typeof CadoStorage === "undefined") return;
    const earned = CadoStorage.getBadges();
    const all = CadoStorage.getBadgeDefs();
    list.innerHTML = all.map(function (def) {
      const has = earned.some(function (b) { return b.id === def.id; });
      return '<div class="buddy-badge-card' + (has ? " is-earned" : "") + '">' +
        '<span class="buddy-badge-card-icon">' + def.icon + "</span>" +
        "<strong>" + escapeHtml(def.name) + "</strong>" +
        "<small>" + escapeHtml(def.desc) + "</small></div>";
    }).join("");
  }

  function init() {
    if (typeof CadoStorage !== "undefined") {
      CadoStorage.migrateLegacy();
      CadoStorage.recordDailyVisit();
    }
    renderHud();
    renderHudPanelBadges();
    bindHudEvents();
    bindWelcomeModal();
    bindProfileEvents();
    enhanceButtons();
    wrapViewTransitions();
    setTimeout(renderWelcomeModal, 600);
  }

  return {
    init: init,
    renderHud: renderHud,
    onViewChange: onViewChange,
    showXpToast: showXpToast,
    showBadgeToast: showBadgeToast
  };
})();

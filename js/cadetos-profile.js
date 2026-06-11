/**
 * CADO — local profile account & progress across all subjects
 */
const CadetosProfile = (function () {
  "use strict";

  const ACCOUNT_KEY = "cado_account";

  function loadAccount() {
    try {
      return JSON.parse(localStorage.getItem(ACCOUNT_KEY) || "null");
    } catch {
      return null;
    }
  }

  function saveAccount(data) {
    const next = Object.assign(
      { displayName: "", email: "", createdAt: new Date().toISOString() },
      loadAccount() || {},
      data
    );
    localStorage.setItem(ACCOUNT_KEY, JSON.stringify(next));
    return next;
  }

  function signOut() {
    localStorage.removeItem(ACCOUNT_KEY);
  }

  function isSignedIn() {
    const a = loadAccount();
    return !!(a && a.displayName);
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem("cado_progress") || localStorage.getItem("cadetos_progress") || "{}");
    } catch {
      return {};
    }
  }

  function markSubjectOpened(subjectId) {
    try {
      const all = loadProgress();
      if (!all[subjectId]) all[subjectId] = {};
      all[subjectId].lastOpened = Date.now();
      localStorage.setItem("cado_progress", JSON.stringify(all));
    } catch { /* ignore */ }
  }

  function subjectProgress(subjectId) {
    if (subjectId === "biology" && typeof BiologyProgress !== "undefined") {
      return BiologyProgress.overallProgress();
    }
    if (subjectId === "chemistry" && typeof ChemistryProgress !== "undefined") {
      return ChemistryProgress.overallProgress();
    }
    const all = loadProgress();
    const p = all[subjectId] || {};
    const cards = (typeof CADETOS_FLASHCARDS !== "undefined" && CADETOS_FLASHCARDS[subjectId]) || [];
    const cardTotal = cards.length || 1;
    const known = (p.flashKnown || []).length;
    const bestPct =
      (all.mcqBest && all.mcqBest[subjectId]) ||
      (typeof p.mcqBest === "number" ? p.mcqBest : 0) ||
      0;
    let pct = 0;
    pct += Math.min(35, Math.round((known / cardTotal) * 35));
    if (bestPct) pct += Math.min(45, Math.round(Number(bestPct) * 0.45));
    if (p.lastOpened) pct += 20;
    return Math.min(100, Math.round(pct));
  }

  function overallProgress() {
    if (typeof CADETOS_SUBJECTS === "undefined") return 0;
    let sum = 0;
    CADETOS_SUBJECTS.forEach(function (s) {
      sum += subjectProgress(s.id);
    });
    return Math.round(sum / CADETOS_SUBJECTS.length);
  }

  function syncProfileHub() {
    if (typeof ProfileEngine !== "undefined") ProfileEngine.syncAll();
  }

  return {
    loadAccount: loadAccount,
    saveAccount: saveAccount,
    signOut: signOut,
    isSignedIn: isSignedIn,
    subjectProgress: subjectProgress,
    overallProgress: overallProgress,
    markSubjectOpened: markSubjectOpened,
    syncProfileHub: syncProfileHub
  };
})();

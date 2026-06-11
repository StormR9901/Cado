/**
 * Chemistry 5070 — XP, levels, streaks, badges
 */
const ChemistryGamification = (function () {
  "use strict";

  const KEY = "cado_chem5070_gamification";
  const MISTAKES_KEY = "cado_chem5070_mistakes";

  const LEVELS = [
    { id: "beginner", name: "Beginner", minXp: 0, icon: "🌱" },
    { id: "learner", name: "Learner", minXp: 100, icon: "📗" },
    { id: "intermediate", name: "Intermediate", minXp: 300, icon: "⚗️" },
    { id: "advanced", name: "Advanced", minXp: 600, icon: "🔬" },
    { id: "exam_ready", name: "Exam Ready", minXp: 1000, icon: "🏆" }
  ];

  const BADGE_DEFS = [
    { id: "first_mcq", name: "First Reaction", desc: "Answer your first MCQ", icon: "✨", check: function (s) { return s.totalMcqCorrect >= 1; } },
    { id: "streak_3", name: "On Fire", desc: "3-day study streak", icon: "🔥", check: function (s) { return s.streak >= 3; } },
    { id: "streak_7", name: "Week Warrior", desc: "7-day study streak", icon: "💪", check: function (s) { return s.streak >= 7; } },
    { id: "acids_master", name: "Acids Master", desc: "Score 80%+ on Acids, Bases & Salts MCQs", icon: "🧪", topicId: "acids-bases-salts", check: function (s, prog) { return topicMcqPct(prog, "acids-bases-salts") >= 80; } },
    { id: "periodic_pro", name: "Periodic Table Pro", desc: "Score 80%+ on Periodic Table MCQs", icon: "⚛️", topicId: "periodic-table", check: function (s, prog) { return topicMcqPct(prog, "periodic-table") >= 80; } },
    { id: "organic_starter", name: "Organic Chemistry Starter", desc: "Complete Organic Chemistry MCQ run", icon: "🛢️", topicId: "organic-chemistry", check: function (s, prog) { return topicAttempts(prog, "organic-chemistry") >= 1; } },
    { id: "lab_legend", name: "Lab Legend", desc: "Score 80%+ on Experimental Techniques", icon: "🔍", topicId: "experimental-techniques", check: function (s, prog) { return topicMcqPct(prog, "experimental-techniques") >= 80; } },
    { id: "xp_500", name: "Half Grand", desc: "Earn 500 XP", icon: "⭐", check: function (s) { return s.xp >= 500; } },
    { id: "chapter_6", name: "Halfway Hero", desc: "Complete 6 chapters", icon: "📚", check: function (s, prog) { return chaptersComplete(prog) >= 6; } },
    { id: "perfect_run", name: "Flawless Flask", desc: "Score 100% on any chapter MCQ", icon: "💎", check: function (s) { return s.perfectRuns >= 1; } }
  ];

  function defaultState() {
    return {
      xp: 0,
      streak: 0,
      lastStudyDate: null,
      totalMcqCorrect: 0,
      totalMcqAnswered: 0,
      perfectRuns: 0,
      badges: [],
      gamesPlayed: 0,
      flashSessions: 0
    };
  }

  function load() {
    try {
      return Object.assign(defaultState(), JSON.parse(localStorage.getItem(KEY) || "{}"));
    } catch {
      return defaultState();
    }
  }

  function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
    return state;
  }

  function topicMcqPct(prog, topicId) {
    if (!prog || !prog.getTopic) return 0;
    return prog.getTopic(topicId).mcqBest || 0;
  }

  function topicAttempts(prog, topicId) {
    if (!prog || !prog.getTopic) return 0;
    return prog.getTopic(topicId).mcqAttempts || 0;
  }

  function chaptersComplete(prog) {
    if (!prog || !prog.load) return 0;
    const all = prog.load();
    return Object.keys(all).filter(function (k) { return all[k].complete; }).length;
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function recordDailyVisit() {
    const s = load();
    const today = todayStr();
    if (s.lastStudyDate === today) return s;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().slice(0, 10);
    if (s.lastStudyDate === yStr) s.streak = (s.streak || 0) + 1;
    else s.streak = 1;
    s.lastStudyDate = today;
    addXp(s, 10, false);
    return save(s);
  }

  function addXp(stateOrAmount, amount, persist) {
    let s = typeof stateOrAmount === "object" ? stateOrAmount : load();
    const xp = typeof stateOrAmount === "number" ? stateOrAmount : amount;
    if (!xp) return s;
    s.xp = (s.xp || 0) + xp;
    if (persist !== false) save(s);
    return s;
  }

  function getLevel(xp) {
    const x = xp || 0;
    let level = LEVELS[0];
    LEVELS.forEach(function (l) {
      if (x >= l.minXp) level = l;
    });
    const next = LEVELS[LEVELS.indexOf(level) + 1];
    const progress = next
      ? Math.round(((x - level.minXp) / (next.minXp - level.minXp)) * 100)
      : 100;
    return { current: level, next: next, progress: progress, xp: x };
  }

  function awardMcqCorrect(topicId) {
    const s = load();
    s.totalMcqCorrect = (s.totalMcqCorrect || 0) + 1;
    s.totalMcqAnswered = (s.totalMcqAnswered || 0) + 1;
    addXp(s, 10, false);
    checkBadges(s);
    return save(s);
  }

  function awardMcqWrong() {
    const s = load();
    s.totalMcqAnswered = (s.totalMcqAnswered || 0) + 1;
    return save(s);
  }

  function awardMcqComplete(score, total, topicId) {
    const s = load();
    const pct = total ? Math.round((score / total) * 100) : 0;
    const bonus = Math.round(pct * 0.5);
    addXp(s, bonus + 20, false);
    if (pct === 100) s.perfectRuns = (s.perfectRuns || 0) + 1;
    checkBadges(s);
    return { state: save(s), bonus: bonus + 20, pct: pct };
  }

  function awardGameComplete() {
    const s = load();
    s.gamesPlayed = (s.gamesPlayed || 0) + 1;
    addXp(s, 15, false);
    checkBadges(s);
    return save(s);
  }

  function awardFlashSession() {
    const s = load();
    s.flashSessions = (s.flashSessions || 0) + 1;
    addXp(s, 5, false);
    return save(s);
  }

  function checkBadges(state) {
    const prog = typeof ChemistryProgress !== "undefined" ? ChemistryProgress : null;
    BADGE_DEFS.forEach(function (b) {
      if (state.badges.indexOf(b.id) >= 0) return;
      if (b.check(state, prog)) state.badges.push(b.id);
    });
    return state;
  }

  function getBadges() {
    const s = load();
    return BADGE_DEFS.map(function (b) {
      return Object.assign({}, b, { earned: s.badges.indexOf(b.id) >= 0 });
    });
  }

  function recordMistake(topicId, question) {
    try {
      const all = JSON.parse(localStorage.getItem(MISTAKES_KEY) || "{}");
      if (!all[topicId]) all[topicId] = [];
      const key = question.q;
      if (!all[topicId].some(function (m) { return m.q === key; })) {
        all[topicId].push({ q: question.q, options: question.options, answer: question.answer, explain: question.explain });
      }
      localStorage.setItem(MISTAKES_KEY, JSON.stringify(all));
    } catch { /* ignore */ }
  }

  function getMistakes(topicId) {
    try {
      const all = JSON.parse(localStorage.getItem(MISTAKES_KEY) || "{}");
      return topicId ? (all[topicId] || []) : all;
    } catch {
      return topicId ? [] : {};
    }
  }

  function clearMistakes(topicId) {
    if (!topicId) localStorage.removeItem(MISTAKES_KEY);
    else {
      const all = getMistakes();
      delete all[topicId];
      localStorage.setItem(MISTAKES_KEY, JSON.stringify(all));
    }
  }

  return {
    load, save, recordDailyVisit, addXp, getLevel, getBadges, checkBadges,
    awardMcqCorrect, awardMcqWrong, awardMcqComplete, awardGameComplete, awardFlashSession,
    recordMistake, getMistakes, clearMistakes, LEVELS, BADGE_DEFS
  };
})();

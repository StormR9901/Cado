/**
 * CADO Buddy — unified localStorage (profile, memory, gamification)
 */
const CadoStorage = (function () {
  "use strict";

  const KEY = "cado_buddy_profile";

  const BADGE_DEFS = [
    { id: "first_visit", name: "First Steps", desc: "Welcome to CADO Buddy", icon: "👋", check: function (s) { return s.stats.visits >= 1; } },
    { id: "bio_starter", name: "Bio Starter", desc: "Open Biology", icon: "🧬", check: function (s) { return s.subjectsOpened.indexOf("biology") >= 0; } },
    { id: "chem_explorer", name: "Chem Explorer", desc: "Open Chemistry", icon: "⚗️", check: function (s) { return s.subjectsOpened.indexOf("chemistry") >= 0; } },
    { id: "physics_pioneer", name: "Physics Pioneer", desc: "Open Physics", icon: "⚡", check: function (s) { return s.subjectsOpened.indexOf("physics") >= 0; } },
    { id: "cora_chatter", name: "CORA Chatter", desc: "Send 5 messages to CORA", icon: "💬", check: function (s) { return s.stats.messagesSent >= 5; } },
    { id: "quiz_hero", name: "Quiz Hero", desc: "Answer 10 MCQs correctly", icon: "✅", check: function (s) { return s.stats.mcqCorrect >= 10; } },
    { id: "streak_3", name: "On Fire", desc: "3-day study streak", icon: "🔥", check: function (s) { return s.streak >= 3; } },
    { id: "streak_7", name: "Week Warrior", desc: "7-day study streak", icon: "💪", check: function (s) { return s.streak >= 7; } },
    { id: "xp_100", name: "Century Club", desc: "Earn 100 XP", icon: "⭐", check: function (s) { return s.xp >= 100; } },
    { id: "xp_500", name: "Scholar", desc: "Earn 500 XP", icon: "🏆", check: function (s) { return s.xp >= 500; } }
  ];

  const XP_REWARDS = {
    mcq_correct: 10,
    flashcard_known: 5,
    cora_message: 8,
    subject_open: 15,
    quiz_complete: 25,
    daily_visit: 20
  };

  function defaultState() {
    return {
      userName: "",
      lastTopic: "",
      lastSubjectId: "",
      xp: 0,
      streak: 0,
      lastStudyDate: null,
      badges: [],
      subjectsOpened: [],
      stats: {
        visits: 0,
        messagesSent: 0,
        mcqCorrect: 0,
        flashcardsKnown: 0,
        chatsStarted: 0
      }
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
    window.dispatchEvent(new CustomEvent("cado-profile-updated", { detail: state }));
    return state;
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function yesterdayStr() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
  }

  function recordDailyVisit() {
    const s = load();
    const today = todayStr();
    if (s.lastStudyDate === today) {
      s.stats.visits += 1;
      return save(s);
    }
    if (s.lastStudyDate === yesterdayStr()) {
      s.streak += 1;
    } else if (s.lastStudyDate !== today) {
      s.streak = s.lastStudyDate ? 1 : 1;
    }
    s.lastStudyDate = today;
    s.stats.visits += 1;
    save(s);
    syncBadges(s);
    return addXp(XP_REWARDS.daily_visit, "daily_visit");
  }

  function setUserName(name) {
    const s = load();
    s.userName = (name || "").trim().slice(0, 32);
    save(s);
    return s.userName;
  }

  function getUserName() {
    return load().userName;
  }

  function setLastTopic(topic, subjectId) {
    const s = load();
    if (topic) s.lastTopic = String(topic).slice(0, 120);
    if (subjectId) s.lastSubjectId = subjectId;
    save(s);
  }

  function getLastTopic() {
    const s = load();
    return { topic: s.lastTopic, subjectId: s.lastSubjectId };
  }

  function markSubjectOpened(subjectId) {
    if (!subjectId) return;
    const s = load();
    const isNew = s.subjectsOpened.indexOf(subjectId) < 0;
    if (isNew) {
      s.subjectsOpened.push(subjectId);
      save(s);
      syncBadges(s);
      addXp(XP_REWARDS.subject_open, "subject_open");
    }
    setLastTopic(null, subjectId);
    return s;
  }

  function incrementStat(key, amount) {
    const s = load();
    if (!s.stats[key]) s.stats[key] = 0;
    s.stats[key] += amount || 1;
    save(s);
    syncBadges(s);
    return s.stats[key];
  }

  function addXp(amount, reason) {
    const s = load();
    const before = s.xp;
    s.xp += amount || 0;
    save(s);
    syncBadges(s);
    window.dispatchEvent(new CustomEvent("cado-xp-earned", {
      detail: { amount: amount, total: s.xp, reason: reason, delta: s.xp - before }
    }));
    return s.xp;
  }

  function syncBadges(state) {
    state = state || load();
    let changed = false;
    BADGE_DEFS.forEach(function (def) {
      if (state.badges.indexOf(def.id) >= 0) return;
      if (def.check(state)) {
        state.badges.push(def.id);
        changed = true;
        window.dispatchEvent(new CustomEvent("cado-badge-earned", { detail: def }));
      }
    });
    if (changed) save(state);
    return state.badges;
  }

  function getBadges() {
    const s = load();
    return BADGE_DEFS.filter(function (b) { return s.badges.indexOf(b.id) >= 0; });
  }

  function getBadgeDefs() {
    return BADGE_DEFS.slice();
  }

  function getXp() {
    return load().xp;
  }

  function getStreak() {
    return load().streak;
  }

  function getGreetingContext() {
    const s = load();
    return {
      userName: s.userName,
      lastTopic: s.lastTopic,
      lastSubjectId: s.lastSubjectId,
      streak: s.streak,
      xp: s.xp
    };
  }

  function migrateLegacy() {
    try {
      const legacyName = localStorage.getItem("cado_account");
      if (legacyName) {
        const parsed = JSON.parse(legacyName);
        if (parsed && parsed.displayName && !load().userName) {
          setUserName(parsed.displayName);
        }
      }
      const lastSub = localStorage.getItem("cado_last_subject");
      if (lastSub && !load().lastSubjectId) {
        setLastTopic("", lastSub);
      }
    } catch { /* ignore */ }
  }

  return {
    load: load,
    save: save,
    recordDailyVisit: recordDailyVisit,
    setUserName: setUserName,
    getUserName: getUserName,
    setLastTopic: setLastTopic,
    getLastTopic: getLastTopic,
    markSubjectOpened: markSubjectOpened,
    incrementStat: incrementStat,
    addXp: addXp,
    syncBadges: syncBadges,
    getBadges: getBadges,
    getBadgeDefs: getBadgeDefs,
    getXp: getXp,
    getStreak: getStreak,
    getGreetingContext: getGreetingContext,
    migrateLegacy: migrateLegacy,
    XP_REWARDS: XP_REWARDS
  };
})();

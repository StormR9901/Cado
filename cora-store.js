/**
 * CORA — persisted sessions, mistakes, weak topics, toggles
 */
const CoraStore = (function () {
  "use strict";

  const KEY = "cado_cora_v2";

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "null") || defaultState();
    } catch {
      return defaultState();
    }
  }

  function defaultState() {
    return {
      sessions: [],
      activeSessionId: null,
      mistakes: [],
      weakTopics: [],
      toggles: {
        explainSimply: true,
        examMode: false,
        hintMode: false,
        stepByStep: true
      },
      mode: "teacher",
      quizState: null
    };
  }

  function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
    return state;
  }

  function uid() {
    return "cora_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
  }

  function getActiveSession() {
    const s = load();
    if (!s.activeSessionId) return null;
    return s.sessions.find(function (x) { return x.id === s.activeSessionId; }) || null;
  }

  function createSession(subjectId, title) {
    const s = load();
    const session = {
      id: uid(),
      title: title || "New chat",
      subjectId: subjectId || "",
      updatedAt: new Date().toISOString(),
      messages: []
    };
    s.sessions.unshift(session);
    if (s.sessions.length > 40) s.sessions = s.sessions.slice(0, 40);
    s.activeSessionId = session.id;
    save(s);
    return session;
  }

  function ensureSession(subjectId) {
    const active = getActiveSession();
    if (active) return active;
    return createSession(subjectId, "New chat");
  }

  function appendMessage(role, content, meta) {
    const s = load();
    const session = ensureSession(meta && meta.subjectId);
    session.messages.push({
      role: role,
      content: content,
      structured: meta && meta.structured || null,
      at: new Date().toISOString()
    });
    if (role === "user" && session.title === "New chat") {
      session.title = content.slice(0, 42) + (content.length > 42 ? "…" : "");
    }
    session.updatedAt = new Date().toISOString();
    if (meta && meta.subjectId) session.subjectId = meta.subjectId;
    const idx = s.sessions.findIndex(function (x) { return x.id === session.id; });
    if (idx >= 0) s.sessions[idx] = session;
    save(s);
    return session;
  }

  function setActiveSession(id) {
    const s = load();
    s.activeSessionId = id;
    save(s);
  }

  function deleteSession(id) {
    const s = load();
    s.sessions = s.sessions.filter(function (x) { return x.id !== id; });
    if (s.activeSessionId === id) {
      s.activeSessionId = s.sessions[0] ? s.sessions[0].id : null;
    }
    save(s);
  }

  function clearActiveSession() {
    const s = load();
    const session = getActiveSession();
    if (session) {
      session.messages = [];
      session.title = "New chat";
      session.updatedAt = new Date().toISOString();
      const idx = s.sessions.findIndex(function (x) { return x.id === session.id; });
      if (idx >= 0) s.sessions[idx] = session;
    }
    save(s);
  }

  function setToggles(toggles) {
    const s = load();
    s.toggles = Object.assign({}, s.toggles, toggles);
    if (s.toggles.hintMode) s.mode = "hint";
    else if (s.toggles.examMode) s.mode = "exam";
    else if (s.mode === "hint" || s.mode === "exam") s.mode = "teacher";
    save(s);
  }

  function setMode(mode) {
    const s = load();
    s.mode = mode;
    if (mode === "exam") s.toggles.examMode = true;
    if (mode === "hint") s.toggles.hintMode = true;
    if (mode === "teacher") {
      s.toggles.examMode = false;
      s.toggles.hintMode = false;
    }
    save(s);
  }

  function addMistake(entry) {
    const s = load();
    s.mistakes.unshift(Object.assign({
      id: uid(),
      at: new Date().toISOString(),
      subjectId: "",
      topic: "General",
      question: "",
      userAnswer: "",
      score: 0,
      maxScore: 5,
      feedback: ""
    }, entry));
    if (s.mistakes.length > 50) s.mistakes = s.mistakes.slice(0, 50);
    save(s);
    recordWeakTopic(entry.subjectId, entry.topic);
  }

  function recordWeakTopic(subjectId, topic) {
    if (!topic) return;
    const s = load();
    const key = (subjectId || "general") + "::" + topic;
    let found = s.weakTopics.find(function (w) { return w.key === key; });
    if (!found) {
      found = { key: key, subjectId: subjectId || "", topic: topic, count: 0 };
      s.weakTopics.push(found);
    }
    found.count += 1;
    found.lastAt = new Date().toISOString();
    s.weakTopics.sort(function (a, b) { return b.count - a.count; });
    save(s);
  }

  function getMistakes() {
    return load().mistakes;
  }

  function getWeakTopics() {
    return load().weakTopics.slice(0, 12);
  }

  function getToggles() {
    return load().toggles;
  }

  function getMode() {
    return load().mode;
  }

  function setQuizState(state) {
    const s = load();
    s.quizState = state;
    save(s);
  }

  function getQuizState() {
    return load().quizState;
  }

  return {
    load, save, getActiveSession, createSession, ensureSession, appendMessage,
    setActiveSession, deleteSession, clearActiveSession, setToggles, setMode,
    addMistake, recordWeakTopic, getMistakes, getWeakTopics, getToggles, getMode,
    setQuizState, getQuizState
  };
})();

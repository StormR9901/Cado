/**
 * CORA Brain — AI logic, responses, and personalized memory
 */
const CoraBrain = (function () {
  "use strict";

  const histories = { global: [], biology: [], subject: [] };
  var liveAI = false;
  var apiBase = "";

  function loadSettings() {
    if (typeof CadetosSettings !== "undefined") return CadetosSettings.load();
    if (typeof BiologySettings !== "undefined") return BiologySettings.load();
    return { coraTypingMs: 28, coraStyle: "balanced", aiTone: "balanced" };
  }

  function typingDelay() {
    const s = loadSettings();
    if (s.coraTypingMs) return s.coraTypingMs;
    if (s.coraStyle === "fast") return 16;
    if (s.coraStyle === "detailed") return 48;
    return 28;
  }

  function getHistory(channel) {
    if (!histories[channel]) histories[channel] = [];
    return histories[channel];
  }

  function pushHistory(channel, role, content) {
    const h = getHistory(channel);
    h.push({ role: role, content: content });
    if (h.length > 24) histories[channel] = h.slice(-24);
  }

  function clearHistory(channel) {
    histories[channel] = [];
  }

  function enrichContext(ctx) {
    const next = Object.assign({}, ctx || {});
    if (typeof CoraStore !== "undefined") {
      if (!next.toggles) next.toggles = CoraStore.getToggles();
      if (!next.mode) next.mode = CoraStore.getMode();
      if (!next.weakTopics) next.weakTopics = CoraStore.getWeakTopics();
    }
    if (typeof CadoStorage !== "undefined") {
      const mem = CadoStorage.getGreetingContext();
      next.userName = mem.userName;
      next.lastTopic = mem.lastTopic;
      next.lastSubjectId = mem.lastSubjectId;
    }
    return next;
  }

  function getPersonalizedGreeting() {
    if (typeof CadoStorage === "undefined") {
      return "Hey! I'm **CORA** — your exam coach. What topic should we tackle?";
    }
    const mem = CadoStorage.getGreetingContext();
    const parts = [];
    if (mem.userName) {
      parts.push("Hey **" + mem.userName + "**!");
    } else {
      parts.push("Hey!");
    }
    if (mem.streak >= 3) {
      parts.push("🔥 " + mem.streak + "-day streak — keep it up!");
    }
    if (mem.lastTopic) {
      parts.push("Last time you studied **" + mem.lastTopic + "** — want to continue or try something new?");
    } else {
      parts.push("What would you like to revise today?");
    }
    return parts.join(" ");
  }

  function localConversational(msg) {
    const lower = msg.toLowerCase().trim();
    if (/^(hi|hello|hey|yo|salam|good morning|good afternoon|good evening)/i.test(lower)) {
      return getPersonalizedGreeting();
    }
    if (typeof CoraPrompt !== "undefined" && CoraPrompt.isSmallTalk(msg)) {
      return CoraPrompt.smallTalkReply(msg);
    }
    return null;
  }

  function studyReply(message, ctx) {
    if (ctx.mode === "quiz" && typeof CoraCoach !== "undefined") {
      return CoraCoach.generateQuizQuestion(ctx);
    }
    if (typeof CoraEngine !== "undefined") {
      const engine = CoraEngine.respond(message, ctx);
      if (engine) return engine;
    }
    if (ctx.subjectId === "biology" && typeof BiologyAI !== "undefined") {
      const study = BiologyAI.respond(message);
      if (study && study.length > 20) return study;
    }
    if (typeof window.cadoGenerateAiReply === "function") {
      return window.cadoGenerateAiReply(message, ctx.subjectId || null);
    }
    return "I'm **CORA**, your exam coach. Ask about any O-Level topic — I'll break it into exam-ready sections.";
  }

  function rememberTopicFromMessage(message, ctx) {
    if (typeof CadoStorage === "undefined" || !message) return;
    const trimmed = message.trim();
    if (trimmed.length < 4 || /^(hi|hello|hey|thanks|bye)/i.test(trimmed)) return;
    const topic = trimmed.length > 80 ? trimmed.slice(0, 77) + "…" : trimmed;
    CadoStorage.setLastTopic(topic, ctx && ctx.subjectId);
  }

  async function askLive(message, ctx) {
    const history = getHistory(ctx.channel || "global").slice(-10).map(function (m) {
      return { role: m.role, content: m.content };
    });
    const fullCtx = enrichContext(ctx);
    const systemPrompt = typeof CoraPrompt !== "undefined"
      ? CoraPrompt.build(fullCtx)
      : (typeof CoraCoach !== "undefined" ? CoraCoach.buildSystemPrompt(fullCtx) : "You are CORA, an O Level exam coach.");
    const r = await fetch((apiBase || "") + "/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message, systemPrompt: systemPrompt, history: history })
    });
    if (!r.ok) throw new Error("API error");
    const j = await r.json();
    return j.reply || "";
  }

  async function ask(message, ctx) {
    ctx = enrichContext(ctx || {});
    const channel = ctx.channel || "global";
    const conversational = localConversational(message);
    if (conversational) {
      pushHistory(channel, "user", message);
      pushHistory(channel, "assistant", conversational);
      return conversational;
    }
    let reply;
    if (liveAI) {
      try { reply = await askLive(message, ctx); } catch { reply = studyReply(message, ctx); }
    } else {
      reply = studyReply(message, ctx);
    }
    pushHistory(channel, "user", message);
    pushHistory(channel, "assistant", reply);
    rememberTopicFromMessage(message, ctx);
    if (typeof CadoStorage !== "undefined") {
      CadoStorage.incrementStat("messagesSent");
      CadoStorage.addXp(CadoStorage.XP_REWARDS.cora_message, "cora_message");
    }
    return reply;
  }

  async function detectLiveAI() {
    try {
      const base = apiBase || "";
      const r = await fetch(base + "/api/health", { method: "GET" });
      if (!r.ok) return false;
      const j = await r.json();
      liveAI = !!(j.ok && j.keyConfigured);
      window.dispatchEvent(new CustomEvent("cora-status-changed"));
      return liveAI;
    } catch {
      liveAI = false;
      return false;
    }
  }

  function hasLiveAI() {
    return liveAI;
  }

  function statusLabel() {
    if (liveAI) return '● <span class="cora-text">CORA</span> AI live';
    return '● <span class="cora-text">CORA</span> coach online';
  }

  return {
    ask: ask,
    askLive: askLive,
    studyReply: studyReply,
    localConversational: localConversational,
    enrichContext: enrichContext,
    getPersonalizedGreeting: getPersonalizedGreeting,
    getHistory: getHistory,
    pushHistory: pushHistory,
    clearHistory: clearHistory,
    detectLiveAI: detectLiveAI,
    hasLiveAI: hasLiveAI,
    statusLabel: statusLabel,
    typingDelay: typingDelay,
    loadSettings: loadSettings
  };
})();

/**
 * CORA — CADO exam coach with structured 3-section replies
 */
const CORA = (function () {
  "use strict";

  const histories = { global: [], biology: [], subject: [] };
  const CORA_AVATAR =
    '<img src="assets/cora-logo.png?v=5" alt="CORA" class="cora-logo-img cora-logo-img--icon cora-logo-img--icon-avatar">';
  const CORA_GRADIENT = '<span class="cora-text">CORA</span>';
  const CORA_GRADIENT_AI =
    '<span class="cora-ai-brand-text"><span class="cora-text">CORA</span><span class="cora-ai-suffix"> AI</span></span>';

  var liveAI = false;
  var apiBase = "";

  function formatInlineCora(str) {
    var safe = escapeHtml(str);
    safe = safe.replace(/\*\*CORA\*\*/gi, CORA_GRADIENT);
    safe = safe.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    safe = safe.replace(/\bCORA\b/g, CORA_GRADIENT);
    return safe;
  }

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

  function hasLiveAI() {
    return liveAI;
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

  function statusLabel() {
    if (liveAI) return '● <span class="cora-text">CORA</span> AI live';
    return '● <span class="cora-text">CORA</span> coach online';
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

  function localConversational(msg) {
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

  function enrichContext(ctx) {
    const next = Object.assign({}, ctx || {});
    if (typeof CoraStore !== "undefined") {
      if (!next.toggles) next.toggles = CoraStore.getToggles();
      if (!next.mode) next.mode = CoraStore.getMode();
      if (!next.weakTopics) next.weakTopics = CoraStore.getWeakTopics();
    }
    return next;
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
    ctx = ctx || {};
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
    return reply;
  }

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function formatHtml(text) {
    return text.split(/\n\n+/).map(function (p) {
      if (p.trim().indexOf("- ") === 0 || p.indexOf("\n- ") >= 0) {
        return "<ul>" + p.split("\n").filter(Boolean).map(function (l) {
          const t = l.replace(/^[-•]\s*/, "");
          return "<li>" + formatInlineCora(t) + "</li>";
        }).join("") + "</ul>";
      }
      return "<p>" + formatInlineCora(p).replace(/\n/g, "<br>") + "</p>";
    }).join("");
  }

  function appendUserMessage(container, text) {
    const div = document.createElement("div");
    div.className = "message message-user";
    div.innerHTML = '<div class="message-avatar">You</div><div class="message-bubble"><p>' + escapeHtml(text) + "</p></div>";
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function appendThinking(container) {
    const div = document.createElement("div");
    div.className = "message message-bot message-thinking";
    div.innerHTML = '<div class="message-avatar cora-avatar">' + CORA_AVATAR + '</div><div class="message-bubble cora-thinking-bubble">' +
      '<span class="cora-typing-indicator"><span></span><span></span><span></span></span> ' + CORA_GRADIENT + ' is thinking…</div>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
  }

  function appendBotBubble(container) {
    const div = document.createElement("div");
    div.className = "message message-bot cora-stream-message";
    div.innerHTML = '<div class="message-avatar cora-avatar">' + CORA_AVATAR + '</div><div class="message-bubble cora-stream-bubble"></div>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return { bubble: div.querySelector(".cora-stream-bubble"), root: div };
  }

  function delay(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  async function streamHtml(bubbleEl, html) {
    bubbleEl.classList.add("is-streaming");
    bubbleEl.innerHTML = html;
    bubbleEl.classList.remove("is-streaming");
    const parent = bubbleEl.closest(".chat-messages, .cora-chat-messages");
    if (parent) parent.scrollTop = parent.scrollHeight;
  }

  async function streamText(bubbleEl, text) {
    const html = formatHtml(text);
    const tokens = text.match(/\S+\s*|\n/g) || [text];
    let shown = "";
    const ms = typingDelay();
    bubbleEl.classList.add("is-streaming");
    for (let i = 0; i < tokens.length; i++) {
      shown += tokens[i];
      bubbleEl.innerHTML = formatHtml(shown);
      const parent = bubbleEl.closest(".chat-messages, .cora-chat-messages");
      if (parent) parent.scrollTop = parent.scrollHeight;
      await delay(ms);
    }
    bubbleEl.classList.remove("is-streaming");
    bubbleEl.innerHTML = html;
  }

  async function chatInContainer(container, message, ctx) {
    ctx = ctx || {};
    if (typeof CoraStore !== "undefined") {
      CoraStore.appendMessage("user", message, { subjectId: ctx.subjectId });
    }
    appendUserMessage(container, message);
    const thinking = appendThinking(container);
    await delay(350 + Math.random() * 200);
    thinking.remove();
    const bot = appendBotBubble(container);
    const bubble = bot.bubble;
    try {
      const reply = await ask(message, ctx);
      let structured = null;
      if (ctx.useStructured !== false && typeof CoraCoach !== "undefined") {
        const qType = CoraCoach.detectQuestionType(message);
        structured = CoraCoach.structureResponse(reply, ctx, qType);
        const html = CoraCoach.renderStructuredHtml(structured, ctx);
        await streamHtml(bubble, html);
        if (typeof CoraStore !== "undefined") {
          CoraStore.appendMessage("assistant", reply, { subjectId: ctx.subjectId, structured: structured });
        }
        if (typeof CoraUI !== "undefined") CoraUI.bindFlashcardButtons(bot.root);
      } else {
        await streamText(bubble, reply);
        if (typeof CoraStore !== "undefined") {
          const qType = typeof CoraCoach !== "undefined" ? CoraCoach.detectQuestionType(message) : "general";
          const structured = typeof CoraCoach !== "undefined" ? CoraCoach.structureResponse(reply, ctx, qType) : null;
          CoraStore.appendMessage("assistant", reply, { subjectId: ctx.subjectId, structured: structured });
        }
      }
    } catch (e) {
      bubble.innerHTML = "<p>Sorry, something went wrong. Try again.</p>";
    }
    container.scrollTop = container.scrollHeight;
  }

  function init() {
    detectLiveAI();
    window.dispatchEvent(new CustomEvent("cora-status-changed"));
    return true;
  }

  return {
    ask: ask,
    chatInContainer: chatInContainer,
    loadSettings: loadSettings,
    hasLiveAI: hasLiveAI,
    detectLiveAI: detectLiveAI,
    statusLabel: statusLabel,
    init: init,
    clearHistory: clearHistory,
    formatHtml: formatHtml,
    formatInlineCora: formatInlineCora,
    appendUserMessage: appendUserMessage,
    CORA_GRADIENT: CORA_GRADIENT,
    CORA_GRADIENT_AI: CORA_GRADIENT_AI
  };
})();

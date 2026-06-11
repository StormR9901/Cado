/**
 * CORA — CADO exam coach (UI layer; brain in coraBrain.js)
 */
const CORA = (function () {
  "use strict";

  const CORA_AVATAR =
    '<img src="assets/cora-logo.png?v=5" alt="CORA" class="cora-logo-img cora-logo-img--icon cora-logo-img--icon-avatar">';
  const CORA_GRADIENT = '<span class="cora-text">CORA</span>';
  const CORA_GRADIENT_AI =
    '<span class="cora-ai-brand-text"><span class="cora-text">CORA</span><span class="cora-ai-suffix"> AI</span></span>';

  function brain() {
    return typeof CoraBrain !== "undefined" ? CoraBrain : null;
  }

  function formatInlineCora(str) {
    var safe = escapeHtml(str);
    safe = safe.replace(/\*\*CORA\*\*/gi, CORA_GRADIENT);
    safe = safe.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    safe = safe.replace(/\bCORA\b/g, CORA_GRADIENT);
    return safe;
  }

  function loadSettings() {
    const b = brain();
    return b ? b.loadSettings() : { coraTypingMs: 28 };
  }

  function typingDelay() {
    const b = brain();
    return b ? b.typingDelay() : 28;
  }

  function hasLiveAI() {
    const b = brain();
    return b ? b.hasLiveAI() : false;
  }

  async function detectLiveAI() {
    const b = brain();
    return b ? b.detectLiveAI() : false;
  }

  function statusLabel() {
    const b = brain();
    return b ? b.statusLabel() : '● <span class="cora-text">CORA</span> coach online';
  }

  function clearHistory(channel) {
    const b = brain();
    if (b) b.clearHistory(channel);
  }

  async function ask(message, ctx) {
    const b = brain();
    if (b) return b.ask(message, ctx);
    return "I'm **CORA**, your exam coach.";
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
    div.className = "message message-user message-enter";
    div.innerHTML = '<div class="message-avatar">You</div><div class="message-bubble"><p>' + escapeHtml(text) + "</p></div>";
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function appendThinking(container) {
    const div = document.createElement("div");
    div.className = "message message-bot message-thinking message-enter";
    div.innerHTML = '<div class="message-avatar cora-avatar">' + CORA_AVATAR + '</div><div class="message-bubble cora-thinking-bubble">' +
      '<span class="cora-typing-indicator"><span></span><span></span><span></span></span> ' +
      '<span class="cora-thinking-label"><span class="cora-text">CORA</span> is thinking<span class="cora-thinking-dots"></span></span></div>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
  }

  function appendBotBubble(container) {
    const div = document.createElement("div");
    div.className = "message message-bot cora-stream-message message-enter";
    div.innerHTML = '<div class="message-avatar cora-avatar">' + CORA_AVATAR + '</div><div class="message-bubble cora-stream-bubble"></div>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return { bubble: div.querySelector(".cora-stream-bubble"), root: div };
  }

  function delay(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  function scrollParent(bubbleEl) {
    const parent = bubbleEl.closest(".chat-messages, .cora-chat-messages, .cora-simple-messages");
    if (parent) parent.scrollTop = parent.scrollHeight;
  }

  async function streamHtml(bubbleEl, html) {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    const plain = temp.textContent || "";
    const tokens = plain.match(/\S+\s*|\n/g) || [plain];
    let shown = "";
    const ms = typingDelay();
    bubbleEl.classList.add("is-streaming");
    for (let i = 0; i < tokens.length; i++) {
      shown += tokens[i];
      bubbleEl.textContent = shown;
      scrollParent(bubbleEl);
      await delay(ms);
    }
    bubbleEl.classList.remove("is-streaming");
    bubbleEl.innerHTML = html;
    scrollParent(bubbleEl);
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
      scrollParent(bubbleEl);
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
    await delay(400 + Math.random() * 250);
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
          structured = typeof CoraCoach !== "undefined" ? CoraCoach.structureResponse(reply, ctx, qType) : null;
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

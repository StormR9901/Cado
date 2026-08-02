/**
 * CORA — simple chat-first UI
 */
const CoraUI = (function () {
  "use strict";

  function $(sel) { return document.querySelector(sel); }

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function getSubject(id) {
    if (typeof CADETOS_SUBJECTS === "undefined" || !id) return null;
    return CADETOS_SUBJECTS.find(function (s) { return s.id === id; }) || null;
  }

  function getContext() {
    const subjectId = $("#coraSubjectSelect")?.value || $("#aiSubjectSelect")?.value || "";
    const sub = getSubject(subjectId);
    const mode = typeof CoraStore !== "undefined" ? CoraStore.getMode() : "teacher";
    const toggles = typeof CoraStore !== "undefined" ? CoraStore.getToggles() : { explainSimply: true, stepByStep: true };
    return {
      channel: "global",
      subjectId: subjectId || null,
      subjectName: sub?.name,
      subjectCode: sub?.code,
      toggles: toggles,
      mode: mode,
      useStructured: false
    };
  }

  function renderSubjects() {
    const sel = $("#coraSubjectSelect");
    const legacy = $("#aiSubjectSelect");
    if (!sel || typeof CADETOS_SUBJECTS === "undefined") return;
    sel.innerHTML = '<option value="">All subjects</option>' +
      CADETOS_SUBJECTS.map(function (s) {
        return '<option value="' + s.id + '">' + s.icon + " " + escapeHtml(s.name) + " (" + s.code + ")</option>";
      }).join("");
    if (legacy) {
      legacy.innerHTML = sel.innerHTML;
    }
    sel.addEventListener("change", function () {
      if (legacy) legacy.value = sel.value;
    });
  }

  function buildWelcomeHtml() {
    var greeting = "Hi — I'm <span class=\"cora-text\">CORA</span>";
    var memoryBlock = "";
    if (typeof CoraBrain !== "undefined") {
      greeting = CoraBrain.getPersonalizedGreeting().replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    } else if (typeof CadoStorage !== "undefined" && CadoStorage.getUserName()) {
      greeting = "Hey <strong>" + escapeHtml(CadoStorage.getUserName()) + "</strong> — I'm <span class=\"cora-text\">CORA</span>";
    }
    if (typeof CadoStorage !== "undefined") {
      var mem = CadoStorage.getLastTopic();
      if (mem.topic) {
        memoryBlock = '<p class="cora-welcome-memory">📚 Last studied: <strong>' + escapeHtml(mem.topic) + "</strong></p>";
      }
    }
    return '<div class="message message-bot cora-welcome-msg message-enter">' +
      '<div class="message-avatar cora-avatar"><img src="assets/cora-logo.png?v=5" alt="CORA" class="cora-logo-img cora-logo-img--icon cora-logo-img--icon-avatar"></div>' +
      '<div class="message-bubble cora-welcome-bubble">' +
      '<div class="cora-welcome-card">' +
      '<h2 class="cora-welcome-title cora-welcome-greeting">' + greeting + "</h2>" +
      memoryBlock +
      '<p class="cora-welcome-lead">Your exam coach. Ask me anything and I\'ll explain it clearly.</p>' +
      '<ol class="cora-welcome-steps">' +
      '<li><span>1</span> Pick your subject above (optional)</li>' +
      '<li><span>2</span> Type a question below</li>' +
      '<li><span>3</span> Hit Send</li>' +
      '</ol>' +
      '<div class="cora-welcome-chips">' +
      '<button type="button" class="cora-chip" data-prompt="Explain photosynthesis step by step">Explain photosynthesis</button>' +
      '<button type="button" class="cora-chip" data-prompt="What is osmosis?">What is osmosis?</button>' +
      '<button type="button" class="cora-chip" data-prompt="Quiz me on acids and bases">Quiz me</button>' +
      '</div></div></div></div>';
  }

  function renderWelcome() {
    const box = $("#chatMessages");
    if (!box) return;
    box.innerHTML = buildWelcomeHtml();
    box.querySelectorAll(".cora-chip").forEach(function (chip) {
      chip.addEventListener("click", function () { sendMessage(chip.dataset.prompt); });
    });
  }

  function refreshWelcome() {
    const box = $("#chatMessages");
    if (!box || !box.querySelector(".cora-welcome-msg")) return;
    renderWelcome();
  }

  function loadSessionIntoChat() {
    const box = $("#chatMessages");
    if (!box || typeof CoraStore === "undefined") return;
    const session = CoraStore.getActiveSession();
    if (!session || !session.messages.length) {
      renderWelcome();
      return;
    }
    box.innerHTML = "";
    session.messages.forEach(function (m) {
      if (m.role === "user") {
        if (typeof CORA !== "undefined" && CORA.appendUserMessage) CORA.appendUserMessage(box, m.content);
        else appendUserFallback(box, m.content);
      } else {
        appendBotFromStored(box, m.content, m.structured);
      }
    });
    box.scrollTop = box.scrollHeight;
  }

  function appendUserFallback(container, text) {
    const div = document.createElement("div");
    div.className = "message message-user";
    div.innerHTML = '<div class="message-avatar">You</div><div class="message-bubble"><p>' + escapeHtml(text) + "</p></div>";
    container.appendChild(div);
  }

  function appendBotFromStored(container, text, structured) {
    const div = document.createElement("div");
    div.className = "message message-bot";
    let body = "";
    if (structured && typeof CoraCoach !== "undefined") {
      // Legacy structured messages saved before this update still render fine.
      body = CoraCoach.renderStructuredHtml(structured, getContext());
    } else if (typeof CORA !== "undefined" && CORA.formatHtml) {
      body = CORA.formatHtml(text);
    } else {
      body = "<p>" + escapeHtml(text) + "</p>";
    }
    div.innerHTML = '<div class="message-avatar cora-avatar"><img src="assets/cora-logo.png?v=5" alt="CORA" class="cora-logo-img cora-logo-img--icon cora-logo-img--icon-avatar"></div>' +
      '<div class="message-bubble">' + body + "</div>";
    container.appendChild(div);
  }

  async function sendMessage(text) {
    const input = $("#chatInput");
    const msg = (text || input?.value || "").trim();
    if (!msg) return;
    if (input) input.value = "";
    const container = $("#chatMessages");
    const welcome = container?.querySelector(".cora-welcome-msg");
    if (welcome) welcome.remove();

    const ctx = getContext();

    if (typeof CORA !== "undefined" && CORA.chatInContainer) {
      await CORA.chatInContainer(container, msg, ctx);
    }
  }

  function bindEvents() {
    $("#chatForm")?.addEventListener("submit", function (e) {
      e.preventDefault();
      sendMessage();
    });

    $("#coraSubjectSelect")?.addEventListener("change", function () {
      const legacy = $("#aiSubjectSelect");
      if (legacy) legacy.value = $("#coraSubjectSelect").value;
    });
  }

  function init() {
    if (!$("#coraV2Root")) return;
    renderSubjects();
    if (typeof CoraStore !== "undefined") {
      CoraStore.ensureSession("");
      const session = CoraStore.getActiveSession();
      if (session && session.messages.length) loadSessionIntoChat();
      else renderWelcome();
    } else {
      renderWelcome();
    }
    bindEvents();
  }

  return {
    init: init,
    sendMessage: sendMessage,
    getContext: getContext,
    refreshTools: function () {}, // no-op, kept so script.js's optional call doesn't error
    refreshWelcome: refreshWelcome,
    bindFlashcardButtons: function () {} // no-op, kept so cora-ai.js's optional call doesn't error
  };
})();
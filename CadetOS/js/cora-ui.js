/**
 * CORA — simple chat-first UI
 */
const CoraUI = (function () {
  "use strict";

  var examTimer = null;
  var examSecondsLeft = 0;

  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.from(document.querySelectorAll(sel)); }

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
    const mode = $("#coraModeSelect")?.value || (typeof CoraStore !== "undefined" ? CoraStore.getMode() : "teacher");
    const toggles = typeof CoraStore !== "undefined" ? CoraStore.getToggles() : { explainSimply: true, stepByStep: true };
    return {
      channel: "global",
      subjectId: subjectId || null,
      subjectName: sub?.name,
      subjectCode: sub?.code,
      toggles: toggles,
      mode: mode,
      useStructured: true
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

  function syncModeSelect() {
    const sel = $("#coraModeSelect");
    if (!sel || typeof CoraStore === "undefined") return;
    sel.value = CoraStore.getMode() || "teacher";
  }

  function applyModeFromSelect() {
    const mode = $("#coraModeSelect")?.value || "teacher";
    if (typeof CoraStore !== "undefined") {
      CoraStore.setMode(mode);
      if (mode === "exam") CoraStore.setToggles({ examMode: true, hintMode: false });
      else if (mode === "hint") CoraStore.setToggles({ hintMode: true, examMode: false });
      else if (mode === "teacher") CoraStore.setToggles({ examMode: false, hintMode: false });
    }
  }

  function renderHistory() {
    const list = $("#coraHistoryList");
    if (!list || typeof CoraStore === "undefined") return;
    const state = CoraStore.load();
    if (!state.sessions.length) {
      list.innerHTML = '<p class="cora-v2-empty">No past chats yet.</p>';
      return;
    }
    list.innerHTML = state.sessions.map(function (s) {
      const active = s.id === state.activeSessionId ? " is-active" : "";
      const sub = getSubject(s.subjectId);
      return '<button type="button" class="cora-v2-history-item' + active + '" data-session="' + s.id + '">' +
        '<strong>' + escapeHtml(s.title) + '</strong>' +
        '<small>' + (sub ? sub.name : 'General') + ' - ' + s.messages.length + ' msgs</small></button>';
    }).join("");
    list.querySelectorAll(".cora-v2-history-item").forEach(function (btn) {
      btn.addEventListener("click", function () {
        CoraStore.setActiveSession(btn.dataset.session);
        loadSessionIntoChat();
        renderHistory();
        closeToolsSheet();
      });
    });
  }

  function renderWelcome() {
    const box = $("#chatMessages");
    if (!box) return;
    box.innerHTML = '<div class="message message-bot cora-welcome-msg">' +
      '<div class="message-avatar cora-avatar"><img src="assets/cora-logo.png?v=5" alt="CORA" class="cora-logo-img cora-logo-img--icon cora-logo-img--icon-avatar"></div>' +
      '<div class="message-bubble cora-welcome-bubble">' +
      '<div class="cora-welcome-card">' +
      '<h2 class="cora-welcome-title">Hi — I\'m <span class="cora-text">CORA</span></h2>' +
      '<p class="cora-welcome-lead">Your exam coach. Ask anything and I\'ll break it into <strong>quick answer</strong>, <strong>explanation</strong>, and <strong>exam bullets</strong>.</p>' +
      '<ol class="cora-welcome-steps">' +
      '<li><span>1</span> Pick your subject above</li>' +
      '<li><span>2</span> Type a question below</li>' +
      '<li><span>3</span> Hit Send</li>' +
      '</ol>' +
      '<div class="cora-welcome-chips">' +
      '<button type="button" class="cora-chip" data-prompt="Explain photosynthesis step by step">Explain photosynthesis</button>' +
      '<button type="button" class="cora-chip" data-prompt="What is osmosis?">What is osmosis?</button>' +
      '<button type="button" class="cora-chip" data-prompt="Quiz me on acids and bases">Quiz me</button>' +
      '</div></div></div></div>';
    box.querySelectorAll(".cora-chip").forEach(function (chip) {
      chip.addEventListener("click", function () { sendMessage(chip.dataset.prompt); });
    });
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
      body = CoraCoach.renderStructuredHtml(structured, getContext());
    } else if (typeof CORA !== "undefined" && CORA.formatHtml) {
      body = CORA.formatHtml(text);
    } else {
      body = "<p>" + escapeHtml(text) + "</p>";
    }
    div.innerHTML = '<div class="message-avatar cora-avatar"><img src="assets/cora-logo.png?v=5" alt="CORA" class="cora-logo-img cora-logo-img--icon cora-logo-img--icon-avatar"></div>' +
      '<div class="message-bubble">' + body + "</div>";
    container.appendChild(div);
    bindFlashcardButtons(div);
  }

  function bindFlashcardButtons(root) {
    root.querySelectorAll(".cora-action-flash").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const bubble = btn.closest(".message-bubble");
        const structured = extractStructuredFromBubble(bubble);
        if (structured) showFlashcardModal(structured);
      });
    });
  }

  function extractStructuredFromBubble(bubble) {
    if (!bubble) return null;
    const answer = bubble.querySelector(".cora-block--answer .cora-block-body")?.textContent?.trim();
    const explain = bubble.querySelector(".cora-block--explain .cora-block-body")?.textContent?.trim();
    const exam = Array.from(bubble.querySelectorAll(".cora-exam-list li")).map(function (li) { return li.textContent.trim(); });
    if (!answer) return null;
    return { answer: answer, explanation: explain || "", examAnswer: exam, questionType: "general" };
  }

  function showFlashcardModal(structured) {
    const cards = CoraCoach.flashcardsFromStructured(structured);
    const overlay = $("#coraFlashModal");
    const list = $("#coraFlashList");
    if (!overlay || !list) return;
    list.innerHTML = cards.map(function (c, i) {
      return '<div class="cora-flash-card"><span class="cora-flash-num">' + (i + 1) + '</span><strong>' +
        escapeHtml(c.q) + '</strong><p>' + escapeHtml(c.a) + "</p></div>";
    }).join("");
    overlay.classList.remove("hidden");
    closeToolsSheet();
  }

  function openToolsSheet() {
    const sheet = $("#coraToolsSheet");
    const btn = $("#btnCoraTools");
    if (!sheet) return;
    sheet.classList.remove("hidden");
    if (btn) btn.setAttribute("aria-expanded", "true");
    renderHistory();
  }

  function closeToolsSheet() {
    const sheet = $("#coraToolsSheet");
    const btn = $("#btnCoraTools");
    if (!sheet) return;
    sheet.classList.add("hidden");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function refreshTools() {
    renderHistory();
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

    if (/^mark my answer/i.test(msg)) {
      openToolsSheet();
      if ($("#coraMarkAnswer")) $("#coraMarkAnswer").value = msg.replace(/^mark my answer[:\s]*/i, "");
      return;
    }

    if (typeof CORA !== "undefined" && CORA.chatInContainer) {
      await CORA.chatInContainer(container, msg, ctx);
      renderHistory();
    }
  }

  function handleMarkFlow(msg, ctx) {
    ctx = ctx || getContext();
    const question = $("#coraMarkQuestion")?.value?.trim() || "Explain the topic from your last question.";
    const userAns = $("#coraMarkAnswer")?.value?.trim() || msg;
    if (!userAns) return;
    const container = $("#chatMessages");
    container?.querySelector(".cora-welcome-msg")?.remove();
    if (typeof CORA !== "undefined") CORA.appendUserMessage(container, "Grade my answer: " + userAns);
    const model = "Structured O Level response with syllabus keywords.";
    const result = CoraCoach.markAnswer(userAns, question, model);
    const structured = {
      answer: result.score + "/" + result.maxScore + " — " + result.feedback,
      explanation: "Missing points: " + (result.missing.join(", ") || "none detected") + ".",
      examAnswer: [result.corrected, "Use bullet points in exams", "Include keywords for each mark"],
      questionType: "marking"
    };
    const div = document.createElement("div");
    div.className = "message message-bot";
    div.innerHTML = '<div class="message-avatar cora-avatar"><img src="assets/cora-logo.png?v=5" alt="CORA" class="cora-logo-img cora-logo-img--icon cora-logo-img--icon-avatar"></div>' +
      '<div class="message-bubble">' + CoraCoach.renderStructuredHtml(structured, ctx) + "</div>";
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    CoraStore.appendMessage("user", userAns, { subjectId: ctx.subjectId });
    CoraStore.appendMessage("assistant", structured.answer, { subjectId: ctx.subjectId, structured: structured });
    CoraStore.addMistake({
      subjectId: ctx.subjectId,
      topic: question.slice(0, 40),
      question: question,
      userAnswer: userAns,
      score: result.score,
      maxScore: result.maxScore,
      feedback: result.feedback
    });
    closeToolsSheet();
    renderHistory();
  }

  function startExamSession() {
    const root = $("#coraV2Root");
    if (!root) return;
    root.classList.add("cora-exam-active");
    examSecondsLeft = 45 * 60;
    updateExamTimer();
    $("#btnCoraEndExam")?.classList.remove("hidden");
    clearInterval(examTimer);
    examTimer = setInterval(function () {
      examSecondsLeft--;
      updateExamTimer();
      if (examSecondsLeft <= 0) endExamSession();
    }, 1000);
    if ($("#coraModeSelect")) $("#coraModeSelect").value = "exam";
    applyModeFromSelect();
    closeToolsSheet();
    sendMessage("Give me one exam-style practice question for my subject.");
  }

  function endExamSession() {
    clearInterval(examTimer);
    $("#coraV2Root")?.classList.remove("cora-exam-active");
    $("#coraExamTimer")?.classList.add("hidden");
    $("#btnCoraEndExam")?.classList.add("hidden");
    if ($("#coraModeSelect")) $("#coraModeSelect").value = "teacher";
    applyModeFromSelect();
  }

  function updateExamTimer() {
    const el = $("#coraExamTimer");
    if (!el) return;
    el.classList.remove("hidden");
    const m = Math.floor(examSecondsLeft / 60);
    const s = examSecondsLeft % 60;
    el.textContent = m + ":" + String(s).padStart(2, "0");
  }

  function bindEvents() {
    $("#chatForm")?.addEventListener("submit", function (e) {
      e.preventDefault();
      sendMessage();
    });

    $("#coraModeSelect")?.addEventListener("change", function () {
      applyModeFromSelect();
      if ($("#coraModeSelect").value !== "exam") endExamSession();
    });

    $("#coraSubjectSelect")?.addEventListener("change", function () {
      const legacy = $("#aiSubjectSelect");
      if (legacy) legacy.value = $("#coraSubjectSelect").value;
    });

    $("#btnCoraNewChat")?.addEventListener("click", function () {
      if (typeof CoraStore !== "undefined") {
        CoraStore.createSession(getContext().subjectId, "New chat");
      }
      if (typeof CORA !== "undefined") CORA.clearHistory("global");
      renderWelcome();
      renderHistory();
    });

    $("#btnCoraClearGlobal")?.addEventListener("click", function () {
      if (typeof CoraStore !== "undefined") CoraStore.clearActiveSession();
      if (typeof CORA !== "undefined") CORA.clearHistory("global");
      renderWelcome();
      renderHistory();
      closeToolsSheet();
    });

    $("#btnCoraTools")?.addEventListener("click", function () {
      const sheet = $("#coraToolsSheet");
      if (sheet?.classList.contains("hidden")) openToolsSheet();
      else closeToolsSheet();
    });
    $("#btnCoraToolsClose")?.addEventListener("click", closeToolsSheet);
    $("#coraToolsBackdrop")?.addEventListener("click", closeToolsSheet);

    $("#btnCoraExamSession")?.addEventListener("click", startExamSession);
    $("#btnCoraEndExam")?.addEventListener("click", endExamSession);
    $("#btnCoraFlashGen")?.addEventListener("click", function () {
      const last = $("#chatMessages")?.querySelector(".cora-structured");
      if (last) {
        const bubble = last.closest(".message-bubble");
        const structured = extractStructuredFromBubble(bubble);
        if (structured) showFlashcardModal(structured);
      } else {
        alert("Ask CORA a question first — then convert the answer to flashcards.");
      }
    });

    $("#btnCoraMarkSubmit")?.addEventListener("click", function () {
      handleMarkFlow($("#coraMarkAnswer")?.value, getContext());
    });

    $("#coraFlashClose")?.addEventListener("click", function () {
      $("#coraFlashModal")?.classList.add("hidden");
    });
    $("#coraFlashBackdrop")?.addEventListener("click", function () {
      $("#coraFlashModal")?.classList.add("hidden");
    });
  }

  function init() {
    if (!$("#coraV2Root")) return;
    renderSubjects();
    syncModeSelect();
    renderHistory();
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

  return { init: init, sendMessage: sendMessage, getContext: getContext, refreshTools: refreshTools, bindFlashcardButtons: bindFlashcardButtons };
})();

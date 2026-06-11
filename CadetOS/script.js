/**
 * CADO — O-Level Study Buddy
 * Notes, flashcards, MCQs, theory & AI tutor
 */
(function () {
  "use strict";

  const STORAGE_KEY = "cado_progress";

  function migrateCadoStorage() {
    const pairs = [
      ["cadetos_progress", "cado_progress"],
      ["cado_theme", "cado_theme"],
      ["cadetos_settings", "cado_settings"],
      ["cadetos_account", "cado_account"],
      ["cado_last_subject", "cado_last_subject"],
      ["cadetos_bio5090_progress", "cado_bio5090_progress"],
      ["cadetos_bio5090_settings", "cado_bio5090_settings"]
    ];
    pairs.forEach(function (p) {
      try {
        const old = localStorage.getItem(p[0]);
        if (old != null && localStorage.getItem(p[1]) == null) localStorage.setItem(p[1], old);
      } catch { /* ignore */ }
    });
    const sessionPairs = [
      ["cado_pending_tab", "cado_pending_tab"],
      ["cado_bio_pending_tab", "cado_bio_pending_tab"]
    ];
    sessionPairs.forEach(function (p) {
      try {
        const old = sessionStorage.getItem(p[0]);
        if (old != null && sessionStorage.getItem(p[1]) == null) sessionStorage.setItem(p[1], old);
      } catch { /* ignore */ }
    });
  }

  let currentSubject = null;
  let flashIndex = 0;
  let flashDeck = [];
  let flashFlipped = false;
  let mcqIndex = 0;
  let mcqScore = 0;
  let mcqAnswered = false;

  const FEATURE_TAB_LABELS = {
    notes: "Notes",
    flashcards: "Flashcards",
    mcq: "MCQs",
    theory: "Theory"
  };

  const CORA_AVATAR_HTML =
    '<img src="assets/cora-logo.png?v=5" alt="CORA" class="cora-logo-img cora-logo-img--icon cora-logo-img--icon-avatar">';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function getSubject(id) {
    return CADETOS_SUBJECTS.find((s) => s.id === id);
  }

  /* ——— Navigation ——— */
  function showView(name) {
    $$(".view").forEach((v) => v.classList.remove("view-active"));
    const el = $(`#view-${name}`) || $(`[data-view="${name}"]`);
    if (el) el.classList.add("view-active");
    $$(".nav-link, .nav-dashboard").forEach((n) => {
      const nav = n.dataset.nav;
      if (!nav) return;
      n.classList.toggle(
        "active",
        nav === name ||
          (name === "subject" && nav === "subjects") ||
          (typeof cadoIsHubSubject === "function" && cadoIsHubSubject(name) && nav === "subjects") ||
          (name === "profile" && nav === "profile")
      );
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (name === "ai" && typeof CoraUI !== "undefined" && CoraUI.refreshTools) CoraUI.refreshTools();
    $("#mobileNav")?.setAttribute("hidden", "");
    $("#menuToggle")?.setAttribute("aria-expanded", "false");
  }

  function setPendingTab(tab) {
    if (tab) sessionStorage.setItem("cado_pending_tab", tab);
    else sessionStorage.removeItem("cado_pending_tab");
  }

  function consumePendingTab() {
    const tab = sessionStorage.getItem("cado_pending_tab");
    sessionStorage.removeItem("cado_pending_tab");
    return tab || null;
  }

  function updatePendingTabBanner(tab) {
    const el = $("#subjectsPendingHint");
    if (!el) return;
    if (tab && FEATURE_TAB_LABELS[tab]) {
      el.textContent =
        "Pick a subject below. For Biology, Chemistry and Physics you'll choose a chapter, then we'll open " +
        FEATURE_TAB_LABELS[tab] +
        ".";
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
      el.textContent = "";
    }
  }

  function closeChapterPicker() {
    const modal = $("#chapterPickerModal");
    if (!modal) return;
    modal.classList.add("hidden");
    delete modal.dataset.subjectId;
    delete modal.dataset.tab;
  }

  function showChapterPicker(subjectId, tab) {
    const cfg = typeof cadoGetSubjectHub === "function" ? cadoGetSubjectHub(subjectId) : null;
    const sub = getSubject(subjectId);
    const syllabus = cfg && cfg.getSyllabus ? cfg.getSyllabus() : null;
    const topics = syllabus && syllabus.topics ? syllabus.topics : [];
    const modal = $("#chapterPickerModal");
    const list = $("#chapterPickerList");
    const title = $("#chapterPickerTitle");
    const subEl = $("#chapterPickerSub");
    if (!modal || !list || !topics.length) {
      openSubjectHub(subjectId, topics[0] && topics[0].id, tab);
      return;
    }

    const tabLabel = FEATURE_TAB_LABELS[tab] || tab || "Notes";
    if (title) title.textContent = "Choose a chapter";
    if (subEl) {
      subEl.textContent =
        (sub ? sub.name + " (" + sub.code + ")" : "Chapter hub") +
        " — pick a chapter to open " +
        tabLabel +
        ".";
    }

    list.innerHTML = topics
      .map(function (t) {
        return (
          '<li><button type="button" class="chapter-picker-item" data-chapter-id="' +
          escapeHtml(t.id) +
          '"><span class="chapter-picker-num">' +
          (t.number || "") +
          '</span><span class="chapter-picker-name">' +
          escapeHtml(t.name) +
          "</span></button></li>"
        );
      })
      .join("");

    modal.dataset.subjectId = subjectId;
    modal.dataset.tab = tab || "notes";
    modal.classList.remove("hidden");

    list.querySelectorAll("[data-chapter-id]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const sid = modal.dataset.subjectId;
        const studyTab = modal.dataset.tab;
        const chapterId = btn.dataset.chapterId;
        closeChapterPicker();
        if (sid && chapterId) openSubjectHub(sid, chapterId, studyTab);
      });
    });
  }

  function hubStudyTab(tab) {
    const map = { notes: "notes", flashcards: "flashcards", mcq: "mcq", theory: "theory", ai: "ai", topics: "notes" };
    return map[tab] || "notes";
  }

  function openSubjectHub(subjectId, scrollTopicId, tab) {
    const cfg = typeof cadoGetSubjectHub === "function" ? cadoGetSubjectHub(subjectId) : null;
    if (!cfg) return;
    const hub = cfg.hub();
    const root = $("#" + cfg.rootId);
    if (root && hub) {
      if (!root.dataset.rendered) {
        hub.render(root);
        root.dataset.rendered = "1";
      }
    }
    showView(cfg.viewId);
    const pending = sessionStorage.getItem(cfg.pendingKey);
    const studyTab = tab ? hubStudyTab(tab) : pending ? hubStudyTab(pending) : null;
    if (pending) sessionStorage.removeItem(cfg.pendingKey);
    setTimeout(function () {
      if (!hub || !scrollTopicId) return;
      if (typeof ProfileEngine !== "undefined") ProfileEngine.setLastVisited(subjectId, scrollTopicId);
      hub.openStudy(scrollTopicId, studyTab || "notes");
    }, 80);
  }

  function openBiologyHub(scrollTopicId, tab) {
    openSubjectHub("biology", scrollTopicId, tab);
  }

  function openFeatureTarget(nav, tab) {
    if (nav === "ai") {
      setPendingTab(null);
      updatePendingTabBanner(null);
      showView("ai");
      return;
    }
    if (nav === "profile") {
      setPendingTab(null);
      updatePendingTabBanner(null);
      renderProfile();
      showView("profile");
      return;
    }
    if (tab) setPendingTab(tab);
    else setPendingTab(null);
    updatePendingTabBanner(tab || null);
    showView("subjects");
  }

  function renderProfile() {
    const root = $("#profileRoot");
    if (!root) return;
    if (typeof ProfilePage !== "undefined") {
      ProfilePage.render(root, {
        escapeHtml: escapeHtml,
        onOpenSubject: openSubject,
        onOpenTopic: function (subjectId, topicId) {
          if (typeof cadoIsHubSubject === "function" && cadoIsHubSubject(subjectId)) {
            openSubjectHub(subjectId, topicId, "notes");
          } else {
            openSubject(subjectId, "notes");
          }
        }
      });
      return;
    }
    if (typeof CadetosProfile === "undefined") return;
    root.innerHTML = '<p class="profile-note">Profile hub loading…</p>';
  }

  window.cadoNavigate = showView;
  window.cadetOSNavigate = showView;
  window.cadoOpenBiologyTool = function (tool) {
    openBiologyHub(null, tool === "topics" ? "notes" : tool);
  };
  window.cadetOSOpenBiologyTool = window.cadoOpenBiologyTool;

  function openSubject(id, tab) {
    const pendingTab = tab || consumePendingTab();
    updatePendingTabBanner(null);

    try {
      localStorage.setItem("cado_last_subject", id);
    } catch { /* ignore */ }

    if (typeof cadoIsHubSubject === "function" && cadoIsHubSubject(id)) {
      if (typeof CadetosProfile !== "undefined") CadetosProfile.markSubjectOpened(id);
      if (pendingTab) {
        showChapterPicker(id, pendingTab);
        return;
      }
      openSubjectHub(id);
      return;
    }

    currentSubject = id;
    const sub = getSubject(id);
    if (!sub) return;
    if (typeof CadetosProfile !== "undefined") CadetosProfile.markSubjectOpened(id);

    const banner = $("#subjectHubBanner");
    if (banner) {
      banner.classList.toggle("hidden", !sub.hasTopicHub);
      if (sub.hasTopicHub) {
        const p = banner.querySelector("p");
        const btn = $("#btnOpenSubjectHub");
        if (p) {
          p.textContent =
            "Full chapter hub for " +
            sub.name +
            " (" +
            sub.code +
            ") — other subjects use topic tabs while we expand deeper hubs.";
        }
        if (btn) btn.textContent = "Open " + sub.name + " hub";
      }
    }

    $("#subjectIcon").textContent = sub.icon;
    $("#subjectTitle").textContent = sub.name;
    $("#subjectCode").textContent = `Cambridge O-Level · Syllabus ${sub.code}`;
    $("#subjectHeader").style.borderLeftColor = sub.color;
    $("#aiSubjectName").textContent = sub.name;

    renderNotes(id);
    initFlashcards(id);
    initMcq(id);
    renderTheory(id);
    initSubjectChat(id);

    activateTab(pendingTab && FEATURE_TAB_LABELS[pendingTab] ? pendingTab : "notes");
    showView("subject");
  }

  /* ——— Subject cards ——— */
  function renderKeywordChips(words, accent) {
    return (words || [])
      .slice(0, 3)
      .map(function (w) {
        return (
          '<span class="keyword-chip"' +
          (accent ? ' style="--chip-accent:' + accent + '"' : "") +
          ">" +
          escapeHtml(w) +
          "</span>"
        );
      })
      .join("");
  }

  function renderSubjectCard(sub) {
    const desc = sub.hasTopicHub
      ? "Open the chapter hub for structured notes and exam practice."
      : "Open notes, flashcards, and MCQs for this syllabus.";
    const keywords = (sub.keywords || []).slice(0, 3);
    const hubTag = sub.hasTopicHub ? '<span class="subject-card-status">Hub live</span>' : "";
    return `
      <button type="button" class="subject-card" data-subject="${sub.id}" style="--card-accent: ${sub.color}">
        <div class="subject-card-top">
          <span class="subject-card-icon-wrap" aria-hidden="true">${sub.icon}</span>
          <div class="subject-card-meta">
            <span class="subject-card-code" style="--code-color: ${sub.color}">${sub.code}</span>
            ${hubTag}
          </div>
        </div>
        <h3>${sub.name}</h3>
        <p class="subject-card-desc">${desc}</p>
        <div class="subject-card-keywords">${renderKeywordChips(keywords, sub.color)}</div>
      </button>`;
  }

  function renderSubjectsIntro() {
    const plat = $("#platformKeywords");
    if (plat && typeof CADETOS_PLATFORM_KEYWORDS !== "undefined") {
      plat.innerHTML = renderKeywordChips(CADETOS_PLATFORM_KEYWORDS);
    }
    const bio = $("#biologyKeywords");
    const bioSub = CADETOS_SUBJECTS.find(function (s) { return s.id === "biology"; });
    if (bio && bioSub) bio.innerHTML = renderKeywordChips(bioSub.keywords);
    const pills = $("#subjectsCodePills");
    if (pills) {
      pills.innerHTML = CADETOS_SUBJECTS.map(function (s) {
        return (
          '<span class="syllabus-pill" style="--pill-color:' +
          s.color +
          '">' +
          escapeHtml(s.code) +
          "</span>"
        );
      }).join("");
    }
  }

  function renderSubjectGrids() {
    const html = CADETOS_SUBJECTS.map(renderSubjectCard).join("");
    $("#homeSubjectGrid").innerHTML = html;
    $("#subjectsGrid").innerHTML = html;
    renderSubjectsIntro();
    $$(".subject-card").forEach((card) => {
      card.addEventListener("click", () => openSubject(card.dataset.subject));
    });

    if (typeof CADO_SUBJECT_HUBS !== "undefined") {
      Object.keys(CADO_SUBJECT_HUBS).forEach(function (sid) {
        const cfg = CADO_SUBJECT_HUBS[sid];
        const hubRoot = $("#" + cfg.rootId);
        const hub = cfg.hub();
        if (hubRoot && hub && !hubRoot.dataset.rendered) {
          hub.render(hubRoot);
          hubRoot.dataset.rendered = "1";
        }
      });
    }
  }

  /* ——— Tabs ——— */
  function activateTab(tabId) {
    $$(".tab").forEach((t) => {
      const on = t.dataset.tab === tabId;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on);
    });
    const panels = {
      notes: "#panel-notes",
      flashcards: "#panel-flashcards",
      mcq: "#panel-mcq",
      theory: "#panel-theory",
      ai: "#panel-ai-subject"
    };
    Object.entries(panels).forEach(([key, sel]) => {
      const panel = $(sel);
      if (!panel) return;
      const on = key === tabId;
      panel.classList.toggle("active", on);
      panel.hidden = !on;
    });
  }

  /* ——— Notes ——— */
  function renderNotes(id) {
    const notes = CADETOS_NOTES[id] || [];
    const sub = getSubject(id);
    $("#notesList").innerHTML = notes
      .map(
        (n) => `
      <article class="note-card" style="border-left-color: ${sub?.color || "var(--primary)"}">
        <div class="note-topic">${escapeHtml(n.topic)}</div>
        <h3>${escapeHtml(n.title)}</h3>
        <p>${escapeHtml(n.body)}</p>
      </article>`
      )
      .join("");
  }

  /* ——— Flashcards ——— */
  function initFlashcards(id) {
    const cards = [...(CADETOS_FLASHCARDS[id] || [])];
    const progress = loadProgress();
    const known = progress.flashKnown?.[id] || [];
    flashDeck = cards.filter((_, i) => !known.includes(i));
    if (flashDeck.length === 0) flashDeck = cards;
    flashIndex = 0;
    flashFlipped = false;
    updateFlashcard();
  }

  function updateFlashcard() {
    const card = flashcardEl();
    card?.classList.remove("flipped");
    flashFlipped = false;
    if (flashDeck.length === 0) {
      $("#flashQuestion").textContent = "No cards yet.";
      $("#flashAnswer").textContent = "—";
      return;
    }
    const c = flashDeck[flashIndex];
    $("#flashQuestion").textContent = c.q;
    $("#flashAnswer").textContent = c.a;
    $("#flashProgress").textContent = `Card ${flashIndex + 1} of ${flashDeck.length}`;
  }

  function flashcardEl() {
    return $("#flashcard");
  }

  function flipCard() {
    flashFlipped = !flashFlipped;
    flashcardEl()?.classList.toggle("flipped", flashFlipped);
  }

  function nextFlash(dir) {
    if (flashDeck.length === 0) return;
    flashIndex = (flashIndex + dir + flashDeck.length) % flashDeck.length;
    updateFlashcard();
  }

  function shuffleFlash() {
    for (let i = flashDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [flashDeck[i], flashDeck[j]] = [flashDeck[j], flashDeck[i]];
    }
    flashIndex = 0;
    updateFlashcard();
  }

  function markKnown() {
    if (!currentSubject || flashDeck.length === 0) return;
    const progress = loadProgress();
    if (!progress.flashKnown) progress.flashKnown = {};
    if (!progress.flashKnown[currentSubject]) progress.flashKnown[currentSubject] = [];
    const original = CADETOS_FLASHCARDS[currentSubject] || [];
    const current = flashDeck[flashIndex];
    const origIdx = original.findIndex((c) => c.q === current.q);
    if (origIdx >= 0 && !progress.flashKnown[currentSubject].includes(origIdx)) {
      progress.flashKnown[currentSubject].push(origIdx);
    }
    saveProgress(progress);
    flashDeck.splice(flashIndex, 1);
    if (flashIndex >= flashDeck.length) flashIndex = 0;
    if (flashDeck.length === 0) {
      $("#flashQuestion").textContent = "All done! 🎉";
      $("#flashAnswer").textContent = "Reset progress in browser storage or shuffle to review again.";
      flashDeck = [...original];
      flashIndex = 0;
    }
    updateFlashcard();
  }

  /* ——— MCQ ——— */
  function initMcq(id) {
    mcqIndex = 0;
    mcqScore = 0;
    mcqAnswered = false;
    renderMcqQuestion(id);
    $("#mcqScore").classList.add("hidden");
    $("#mcqNext").classList.add("hidden");
  }

  function renderMcqQuestion(id) {
    const questions = CADETOS_MCQS[id] || [];
    mcqAnswered = false;
    $("#mcqFeedback").classList.add("hidden");
    $("#mcqNext").classList.add("hidden");

    if (mcqIndex >= questions.length) {
      showMcqResults(questions.length);
      return;
    }

    const q = questions[mcqIndex];
    $("#mcqMeta").textContent = `Question ${mcqIndex + 1} of ${questions.length}`;
    $("#mcqQuestion").textContent = q.q;
    $("#mcqOptions").innerHTML = q.options
      .map(
        (opt, i) =>
          `<button type="button" class="quiz-option" data-idx="${i}">${escapeHtml(opt)}</button>`
      )
      .join("");

    $$(".quiz-option", $("#mcqOptions")).forEach((btn) => {
      btn.addEventListener("click", () => selectMcq(btn, q, id));
    });
  }

  function selectMcq(btn, q, subjectId) {
    if (mcqAnswered) return;
    mcqAnswered = true;
    const idx = parseInt(btn.dataset.idx, 10);
    const correct = idx === q.answer;
    if (correct) mcqScore++;

    $$(".quiz-option", $("#mcqOptions")).forEach((b) => {
      b.disabled = true;
      const i = parseInt(b.dataset.idx, 10);
      if (i === q.answer) b.classList.add("correct");
      else if (i === idx && !correct) b.classList.add("wrong");
    });

    const fb = $("#mcqFeedback");
    fb.classList.remove("hidden", "correct-fb", "wrong-fb");
    fb.classList.add(correct ? "correct-fb" : "wrong-fb");
    fb.innerHTML = correct
      ? `✓ Correct! ${escapeHtml(q.explain || "")}`
      : `✗ Not quite. The answer is <strong>${escapeHtml(q.options[q.answer])}</strong>. ${escapeHtml(q.explain || "")}`;

    $("#mcqNext").classList.remove("hidden");
    saveMcqProgress(subjectId);
  }

  function saveMcqProgress(id) {
    const progress = loadProgress();
    if (!progress.mcqBest) progress.mcqBest = {};
    const total = (CADETOS_MCQS[id] || []).length;
    const pct = Math.round((mcqScore / total) * 100);
    if (!progress.mcqBest[id] || progress.mcqBest[id] < pct) {
      progress.mcqBest[id] = pct;
      saveProgress(progress);
    }
  }

  function showMcqResults(total) {
    $("#mcqMeta").textContent = "Quiz complete";
    $("#mcqQuestion").textContent = `You scored ${mcqScore} out of ${total}`;
    $("#mcqOptions").innerHTML = "";
    $("#mcqFeedback").classList.add("hidden");
    $("#mcqNext").classList.add("hidden");
    const scoreEl = $("#mcqScore");
    scoreEl.classList.remove("hidden");
    const pct = Math.round((mcqScore / total) * 100);
    scoreEl.textContent =
      pct >= 80 ? "Excellent work! Keep revising past papers." : pct >= 50 ? "Good effort — review the explanations and try again." : "Keep practising — use Notes and Flashcards first.";
  }

  function nextMcq() {
    mcqIndex++;
    renderMcqQuestion(currentSubject);
  }

  /* ——— Theory ——— */
  function renderTheory(id) {
    const items = CADETOS_THEORY[id] || [];
    $("#theoryList").innerHTML = items
      .map(
        (t, i) => `
      <div class="theory-card">
        <button type="button" class="theory-toggle" aria-expanded="false" data-theory="${i}">
          <span>${escapeHtml(t.q)}</span>
          <span class="theory-marks">${t.marks} marks</span>
        </button>
        <div class="theory-answer" id="theory-ans-${i}" hidden>
          <h4>Mark scheme points</h4>
          <ul>${t.points.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
        </div>
      </div>`
      )
      .join("");

    $$(".theory-toggle", $("#theoryList")).forEach((btn) => {
      btn.addEventListener("click", () => {
        const ans = $(`#theory-ans-${btn.dataset.theory}`);
        const open = ans.hidden;
        ans.hidden = !open;
        btn.setAttribute("aria-expanded", open);
      });
    });
  }

  /* ——— CORA AI ——— */

  function initCoraSettings() {
    if (typeof CORA === "undefined") return;
    updateCoraStatusBadge();
    window.addEventListener("cora-status-changed", updateCoraStatusBadge);
    if (!$("#coraV2Root")) {
      $("#btnCoraClearGlobal")?.addEventListener("click", () => {
        CORA.clearHistory("global");
        const box = $("#chatMessages");
        if (box) {
          box.innerHTML = `<div class="message message-bot"><div class="message-avatar cora-avatar">${CORA_AVATAR_HTML}</div><div class="message-bubble"><p>Chat cleared. Hi — I'm <span class="cora-text">CORA</span>. How can I help you study today?</p></div></div>`;
        }
      });
    }
  }

  function updateCoraStatusBadge() {
    const badge = $("#coraStatusBadge");
    if (!badge || typeof CORA === "undefined") return;
    badge.textContent = CORA.hasLiveAI() ? "AI live" : "Online";
    badge.className = "cora-simple-status cora-live";
  }

  function initAiSelect() {
    const sel = $("#aiSubjectSelect");
    CADETOS_SUBJECTS.forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = `${s.name} (${s.code})`;
      sel.appendChild(opt);
    });
  }

  function initSubjectChat(id) {
    const sub = getSubject(id);
    $("#subjectChatMessages").innerHTML = `
      <div class="message message-bot">
        <div class="message-avatar cora-avatar">${CORA_AVATAR_HTML}</div>
        <div class="message-bubble"><p>Hi! I'm <span class="cora-text">CORA</span>. Ask me anything about <strong>${escapeHtml(sub?.name || "your subject")}</strong> (${sub?.code || ""}) — or just say hello.</p></div>
      </div>`;
  }

  function appendMessage(container, text, isUser) {
    const div = document.createElement("div");
    div.className = `message ${isUser ? "message-user" : "message-bot"}`;
    div.innerHTML = isUser
      ? `<div class="message-avatar">You</div><div class="message-bubble"><p>${escapeHtml(text)}</p></div>`
      : `<div class="message-avatar cora-avatar">${CORA_AVATAR_HTML}</div><div class="message-bubble">${formatBotReply(text)}</div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function formatBotReply(text) {
    const parts = text.split(/\n\n+/);
    return parts.map((p) => {
      if (p.trim().startsWith("- ") || p.includes("\n- ")) {
        const lines = p.split("\n").filter(Boolean);
        const items = lines.map((l) => `<li>${inlineFormat(l.replace(/^-\s*/, ""))}</li>`).join("");
        return `<ul>${items}</ul>`;
      }
      return `<p>${inlineFormat(p).replace(/\n/g, "<br>")}</p>`;
    }).join("");
  }

  function inlineFormat(str) {
    if (typeof CORA !== "undefined" && CORA.formatInlineCora) {
      return CORA.formatInlineCora(str);
    }
    const safe = escapeHtml(str);
    return safe.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  async function sendGlobalChat(text) {
    if (typeof CoraUI !== "undefined" && CoraUI.sendMessage) {
      await CoraUI.sendMessage(text);
      return;
    }
    const input = $("#chatInput");
    if (text && typeof text === "string") input.value = text;
    const msg = input.value.trim();
    if (!msg) return;
    const subjectId = $("#aiSubjectSelect").value;
    const container = $("#chatMessages");
    input.value = "";
    const sub = subjectId ? getSubject(subjectId) : null;
    if (typeof CORA !== "undefined") {
      await CORA.chatInContainer(container, msg, {
        channel: "global",
        subjectId: subjectId || null,
        subjectName: sub?.name,
        subjectCode: sub?.code
      });
      return;
    }
    appendMessage(container, msg, true);
    appendMessage(container, generateAiReply(msg, subjectId || null), false);
  }

  async function sendSubjectChat(text) {
    const input = $("#subjectChatInput");
    if (text && typeof text === "string") input.value = text;
    const msg = input.value.trim();
    if (!msg) return;
    const container = $("#subjectChatMessages");
    input.value = "";
    const sub = getSubject(currentSubject);
    if (typeof CORA !== "undefined") {
      await CORA.chatInContainer(container, msg, {
        channel: "subject",
        subjectId: currentSubject,
        subjectName: sub?.name,
        subjectCode: sub?.code
      });
      return;
    }
    appendMessage(container, msg, true);
    appendMessage(container, generateAiReply(msg, currentSubject), false);
  }

  function generateAiReply(message, subjectId) {
    const lower = message.toLowerCase();
    const sub = subjectId ? getSubject(subjectId) : null;
    const subName = sub?.name || "O-Level";
    const notes = subjectId ? CADETOS_NOTES[subjectId] : null;
    const tips = subjectId ? AI_STUDY_TIPS[subjectId] : null;

    if (/plan|schedule|week|revision/i.test(lower)) {
      return sub
        ? `Here's a focused revision plan for ${subName} (${sub.code}):\n\n- **Days 1–2:** Read all CADO notes; highlight command words (explain, describe, evaluate).\n- **Days 3–4:** Flashcards — 20 minutes daily until you know most cards.\n- **Day 5:** MCQ quiz on CADO, then mark wrong answers in your notebook.\n- **Days 6–7:** Theory questions — plan answers in bullet points, then check mark schemes here.\n- **Daily:** One past paper question timed (Papa Cambridge / Save My Exams style).\n\n${tips || "Balance content revision with exam technique."}`
        : `For all 8 subjects, rotate 2 subjects per day:\n\n- **Morning (45 min):** Notes + flashcards for Subject A\n- **Afternoon (45 min):** MCQs + one theory question for Subject B\n- **Evening (30 min):** Review mistakes notebook\n\nPrioritise weaker subjects twice a week. Use CADO subject pages for syllabus-specific content.`;
    }

    if (/stress|anxious|nervous|worried/i.test(lower)) {
      return "Exam stress is normal. Try these:\n\n- Break study into 25-minute blocks with 5-minute breaks (Pomodoro).\n- Sleep 7–8 hours — memory consolidates during sleep.\n- Exercise or walk between study sessions.\n- Focus on preparation, not perfection.\n- Talk to teachers, parents, or friends if pressure feels too high.\n\nYou've got this — consistent small steps beat last-minute cramming.";
    }

    if (/past paper|exam paper|papers/i.test(lower)) {
      return `Past papers are essential for ${subName}:\n\n- Do papers **under timed conditions** after you know the content.\n- Mark strictly using the mark scheme — note every lost mark.\n- Keep an "error log" of recurring mistakes.\n- For sciences: practise data analysis and graph questions.\n- For English: practise summary word limits and directed writing formats.\n\nSources: Papa Cambridge, Save My Exams, Cognito (videos), and your school resources.`;
    }

    if (/6.?mark|theory|structured|marks/i.test(lower)) {
      return "For 6-mark structured questions:\n\n- **Read** the command word: explain = why/how; describe = what happens; compare = similarities AND differences.\n- **Plan** 6 bullet points before writing (one mark per valid point often).\n- **Use** correct terminology from the syllabus.\n- **Link** steps in logical order for processes.\n- **Draw** labelled diagrams where they earn marks (Biology, Physics).\n- **Check** time — don't write an essay; be precise.\n\nUse the Theory tab on CADO to practise with mark scheme points.";
    }

    if (/focus|concentrat|distract/i.test(lower)) {
      return "Staying focused:\n\n- Phone in another room or use app blockers during study.\n- One subject per session — multitasking reduces retention.\n- Active recall (flashcards, closed book) beats passive re-reading.\n- Study at the same time daily to build habit.\n- Reward yourself after completing a quiz or past paper section.";
    }

    if (/mistake|common error|lose marks/i.test(lower) && tips) {
      return `Common ${subName} pitfalls:\n\n${tips}\n\nAlso: not reading the question fully, missing units in calculations, and leaving blanks (no negative marking on most O-Level MCQs — always guess logically).`;
    }

    if (/explain|what is|define|describe|how does|why/i.test(lower)) {
      const bioMatch = subjectId === "biology" ? findBiologyTopicNote(lower) : null;
      if (bioMatch) {
        return `**${bioMatch.title}** — ${bioMatch.topic}\n\n${bioMatch.body}\n\nOpen the **Biology 5090 topic hub** for full notes, Save My Exams links, and past paper questions on this topic.`;
      }
      if (notes) {
        const match = findRelevantNote(lower, notes);
        if (match) {
          return `**${match.title}** (${match.topic})\n\n${match.body}\n\nWant more detail? Check the Notes tab for ${subName}, or ask about a specific topic like "${match.topic}".`;
        }
      }
    }

    if (subjectId === "biology" && /topic|syllabus|5090|hub/i.test(lower)) {
      return "Biology 5090 has **19 topics** on CADO: Cells, Classification, Movement into/out of cells, Biological molecules, Enzymes, Plant nutrition, Transport in plants, Human nutrition, Gas exchange, Respiration, Transport in humans, Disease & immunity, Excretion, Coordination (human & plants), Development, Inheritance, Biotechnology, and Ecology.\n\nOpen **Biology** from Subjects to see every topic with notes, revision resources, and past paper links.";
    }

    if (/flashcard|remember|memor/i.test(lower)) {
      return "Flashcard tips:\n\n- Say the answer aloud before flipping.\n- Space repetition: review unknown cards daily, known cards weekly.\n- Link facts to diagrams or real examples.\n- Use CADO 'I know this' to hide mastered cards.\n- Group cards by topic (e.g. all enzyme cards together).";
    }

    if (/mcq|multiple choice/i.test(lower)) {
      return "MCQ strategy:\n\n- Eliminate obviously wrong options first.\n- Watch for \"always\", \"never\", \"only\" — often false.\n- In calculations, estimate before calculating.\n- If stuck, flag and return — don't lose time.\n- Practise on CADO MCQs, then past paper Paper 1.";
    }

    if (tips && (subjectId && /tip|help|study|revise/i.test(lower))) {
      const hubHint = subjectId === "biology" ? "\n\nUse the **Biology 5090 topic hub** (19 topics) for syllabus notes and external revision links." : "\n\nUse Notes → Flashcards → MCQs → Theory on CADO in that order for each topic.";
      return `**${subName} study tips:**\n\n${tips}${hubHint}`;
    }

    if (sub && subjectId) {
      const topics = sub.topics.join(", ");
      return `I'm your CADO buddy for **${subName} (${sub.code})**.\n\nKey syllabus areas: ${topics}.\n\n${tips || ""}\n\nTry asking:\n- "Explain [topic] in simple terms"\n- "Give me a revision plan"\n- "Common mistakes in ${subName}"\n\nOr use the quick prompts below!`;
    }

    return `Thanks for your question! CADO covers Biology 5090, Chemistry 5070, Physics 5054, Maths 4024, English 1123, Pakistan Studies 2059, Islamiat 2058, and Global Perspectives 2069.\n\nSelect a **subject** (from the dropdown or Subjects page) for detailed help, or ask about:\n- Revision planning\n- Past papers\n- Theory question technique\n- Flashcards and memory\n\nI'll give syllabus-focused guidance based on your O-Level needs.`;
  }

  function findBiologyTopicNote(query) {
    if (typeof BIOLOGY_5090 === "undefined") return null;
    const words = query.split(/\W+/).filter((w) => w.length > 3);
    let best = null;
    let bestScore = 0;
    for (const topic of BIOLOGY_5090.topics) {
      const blob = `${topic.name} ${topic.description} ${topic.notes.map((n) => n.title + " " + n.body).join(" ")}`.toLowerCase();
      let score = 0;
      for (const w of words) {
        if (blob.includes(w.toLowerCase())) score++;
      }
      if (topic.name.toLowerCase().includes(query.trim().toLowerCase())) score += 3;
      if (score > bestScore && topic.notes.length) {
        bestScore = score;
        best = { topic: topic.name, title: topic.notes[0].title, body: topic.notes.map((n) => n.title + ": " + n.body).join("\n\n") };
      }
    }
    return bestScore > 0 ? best : null;
  }

  function findRelevantNote(query, notes) {
    const words = query.split(/\W+/).filter((w) => w.length > 3);
    let best = null;
    let bestScore = 0;
    for (const note of notes) {
      let score = 0;
      const blob = `${note.topic} ${note.title} ${note.body}`.toLowerCase();
      for (const w of words) {
        if (blob.includes(w.toLowerCase())) score++;
      }
      if (score > bestScore) {
        bestScore = score;
        best = note;
      }
    }
    return bestScore > 0 ? best : notes[0];
  }

  /* ——— Stats (live totals from all subject + Biology chapter banks) ——— */
  function hubTopicHasNotes(topic) {
    return !!(
      (topic.chapterSections && topic.chapterSections.length) ||
      (topic.learningObjectives && topic.learningObjectives.length) ||
      (topic.summary && topic.summary.length) ||
      (topic.definitions && topic.definitions.length) ||
      topic.detailedNotes ||
      topic.quickRecap
    );
  }

  function countPlatformContent() {
    let notes = 0,
      cards = 0,
      mcqs = 0,
      theory = 0;

    CADETOS_SUBJECTS.forEach((s) => {
      notes += (CADETOS_NOTES[s.id] || []).length;
      cards += (CADETOS_FLASHCARDS[s.id] || []).length;
      mcqs += (CADETOS_MCQS[s.id] || []).length;
      theory += (CADETOS_THEORY[s.id] || []).length;
    });

    if (typeof CADO_SUBJECT_HUBS !== "undefined") {
      Object.keys(CADO_SUBJECT_HUBS).forEach(function (sid) {
        const syllabus = CADO_SUBJECT_HUBS[sid].getSyllabus();
        if (!syllabus || !syllabus.topics) return;
        syllabus.topics.forEach(function (t) {
          if (hubTopicHasNotes(t)) notes += 1;
          cards += (t.flashcards || []).length;
          mcqs += (t.mcqs || []).length;
          theory += (t.theory || []).length;
        });
      });
    }

    return {
      notes,
      cards,
      mcqs,
      theory,
      subjects: CADETOS_SUBJECTS.length
    };
  }

  function formatStatNum(n) {
    return Number(n).toLocaleString();
  }

  function updateStats() {
    const totals = countPlatformContent();
    const notesEl = $("#statNotes");
    const cardsEl = $("#statCards");
    const mcqEl = $("#statMcq");
    const theoryEl = $("#statTheory");
    const subjEl = $("#statSubjects");
    if (notesEl) notesEl.textContent = formatStatNum(totals.notes);
    if (cardsEl) cardsEl.textContent = formatStatNum(totals.cards);
    if (mcqEl) mcqEl.textContent = formatStatNum(totals.mcqs);
    if (theoryEl) theoryEl.textContent = formatStatNum(totals.theory);
    if (subjEl) subjEl.textContent = formatStatNum(totals.subjects);
  }

  /* ——— Theme & settings ——— */
  function applyThemeMode(mode) {
    if (typeof CadetosSettings !== "undefined") {
      CadetosSettings.save({ theme: mode });
      return;
    }
    if (typeof BiologySettings !== "undefined") {
      BiologySettings.applyTheme(mode);
      BiologySettings.save({ theme: mode });
      return;
    }
    if (mode === "light") document.documentElement.setAttribute("data-theme", "light");
    else if (mode === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else {
      const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    }
    if (mode !== "system") localStorage.setItem("cado_theme", mode);
    else localStorage.removeItem("cado_theme");
  }

  function initTheme() {
    if (typeof CadetosSettings !== "undefined") {
      CadetosSettings.init();
      return;
    }
    let mode = "system";
    const saved = localStorage.getItem("cado_theme");
    if (saved === "light" || saved === "dark") mode = saved;
    applyThemeMode(mode);
  }

  function populateSettingsForm() {
    const s = typeof CadetosSettings !== "undefined" ? CadetosSettings.load() : {};
    const set = (id, val) => { const el = $(id); if (el && val != null) el.value = val; };
    const setChk = (id, val) => { const el = $(id); if (el) el.checked = !!val; };
    set("#settingsTheme", s.theme || "system");
    set("#settingsFontSize", s.fontSize || "medium");
    set("#settingsCoraStyle", s.coraStyle || "balanced");
    set("#settingsMcqDifficulty", s.mcqDifficulty || "medium");
    set("#settingsFlashMode", s.flashcardReviewMode || "standard");
    setChk("#settingsExamMode", s.examMode);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    applyThemeMode(next);
    const sel = $("#settingsTheme");
    if (sel) sel.value = next;
  }

  function openSettingsModal() {
    const modal = $("#settingsModal");
    if (!modal) return;
    populateSettingsForm();
    modal.classList.remove("hidden");
  }

  function bindSettingsForm() {
    $("#settingsTheme")?.addEventListener("change", (e) => applyThemeMode(e.target.value));
    $("#settingsFontSize")?.addEventListener("change", (e) => {
      if (typeof CadetosSettings !== "undefined") CadetosSettings.save({ fontSize: e.target.value });
    });
    $("#settingsCoraStyle")?.addEventListener("change", (e) => {
      if (typeof CadetosSettings !== "undefined") {
        CadetosSettings.save({
          coraStyle: e.target.value,
          coraTypingMs: CadetosSettings.styleToTypingMs(e.target.value)
        });
      }
    });
    $("#settingsMcqDifficulty")?.addEventListener("change", (e) => {
      if (typeof CadetosSettings !== "undefined") CadetosSettings.save({ mcqDifficulty: e.target.value });
    });
    $("#settingsExamMode")?.addEventListener("change", (e) => {
      if (typeof CadetosSettings !== "undefined") CadetosSettings.save({ examMode: e.target.checked });
    });
    $("#settingsFlashMode")?.addEventListener("change", (e) => {
      if (typeof CadetosSettings !== "undefined") CadetosSettings.save({ flashcardReviewMode: e.target.value });
    });
  }

  function closeSettingsModal() {
    $("#settingsModal")?.classList.add("hidden");
  }

  /* ——— Utils ——— */
  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function escapeAttr(str) {
    return str.replace(/"/g, "&quot;").replace(/</g, "&lt;");
  }

  function closeNavDropdowns() {
    $$(".nav-dropdown.is-open").forEach((d) => {
      d.classList.remove("is-open");
      const btn = d.querySelector(".nav-menu-btn");
      const panel = d.querySelector(".nav-dropdown-panel");
      if (btn) btn.setAttribute("aria-expanded", "false");
      if (panel) panel.hidden = true;
    });
    const sr = $("#navSearchResults");
    if (sr) sr.hidden = true;
  }

  function toggleNavDropdown(dropdownEl) {
    const isOpen = dropdownEl.classList.contains("is-open");
    closeNavDropdowns();
    if (!isOpen) {
      dropdownEl.classList.add("is-open");
      const btn = dropdownEl.querySelector(".nav-menu-btn");
      const panel = dropdownEl.querySelector(".nav-dropdown-panel");
      if (btn) btn.setAttribute("aria-expanded", "true");
      if (panel) panel.hidden = false;
    }
  }

  function populateNavSubjects() {
    const wrap = $("#navDropdownSubjects");
    if (!wrap) return;
    wrap.innerHTML = CADETOS_SUBJECTS.map(function (s) {
      return (
        '<button type="button" class="nav-dropdown-item nav-dropdown-subject" data-open-subject="' +
        s.id +
        '" style="--sub-color:' +
        s.color +
        '"><span>' +
        s.icon +
        " " +
        escapeHtml(s.name) +
        '</span><code>' +
        escapeHtml(s.code) +
        "</code></button>"
      );
    }).join("");
    wrap.querySelectorAll("[data-open-subject]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        closeNavDropdowns();
        openSubject(btn.dataset.openSubject);
      });
    });
  }

  function filterSubjects(query) {
    const q = query.toLowerCase().trim();
    if (!q) return CADETOS_SUBJECTS.slice();
    return CADETOS_SUBJECTS.filter(function (s) {
      const keywordMatch = (s.keywords || []).some(function (k) {
        return k.toLowerCase().includes(q);
      });
      return (
        s.name.toLowerCase().includes(q) ||
        s.code.includes(q) ||
        s.id.toLowerCase().includes(q) ||
        keywordMatch
      );
    });
  }

  function hideSearchResults() {
    $$(".header-search-results").forEach(function (list) {
      list.hidden = true;
      list.classList.remove("hidden");
    });
    $("#navSubjectSearch")?.setAttribute("aria-expanded", "false");
    $("#navSubjectSearchMobile")?.setAttribute("aria-expanded", "false");
  }

  function searchResultsHtml(matches, query) {
    const hint =
      '<li class="header-search-hint" aria-hidden="true">' +
      (query.trim() ? "Matching subjects" : "All subjects") +
      "</li>";
    return (
      hint +
      matches
        .map(function (s) {
          return (
            "<li><button type=\"button\" data-open-subject=\"" +
            s.id +
            '"><span class="sr-label"><span class="sr-icon" aria-hidden="true">' +
            (s.icon || "📘") +
            '</span><span class="sr-name">' +
            escapeHtml(s.name) +
            '</span></span><span class="sr-code">' +
            escapeHtml(s.code) +
            "</span></button></li>"
          );
        })
        .join("")
    );
  }

  function bindSearchResultClicks(list) {
    if (!list) return;
    list.querySelectorAll("[data-open-subject]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        $("#navSubjectSearch") && ($("#navSubjectSearch").value = "");
        $("#navSubjectSearchMobile") && ($("#navSubjectSearchMobile").value = "");
        hideSearchResults();
        $("#mobileNav")?.setAttribute("hidden", "");
        openSubject(btn.dataset.openSubject);
      });
    });
  }

  function renderSearchResults(query) {
    const activeInput =
      document.activeElement?.id === "navSubjectSearchMobile"
        ? $("#navSubjectSearchMobile")
        : $("#navSubjectSearch") || $("#navSubjectSearchMobile");
    const matches = filterSubjects(query).slice(0, 8);
    const lists = $$(".header-search-results");
    if (matches.length === 0) {
      if (query.trim() && activeInput) {
        const emptyHtml =
          '<li class="header-search-hint" aria-hidden="true">No matches</li>' +
          '<li class="header-search-empty">Try Biology, Chemistry, 5090, or MCQs</li>';
        lists.forEach(function (list) {
          const isMobileList = list.id === "navSearchResultsMobile";
          if (isMobileList && activeInput.id !== "navSubjectSearchMobile") return;
          if (!isMobileList && activeInput.id === "navSubjectSearchMobile") return;
          list.innerHTML = emptyHtml;
          list.hidden = false;
          list.classList.remove("hidden");
        });
        activeInput.setAttribute("aria-expanded", "true");
      } else {
        hideSearchResults();
      }
      return;
    }

    const html = searchResultsHtml(matches, query);
    lists.forEach(function (list) {
      const isMobileList = list.id === "navSearchResultsMobile";
      if (isMobileList && activeInput?.id !== "navSubjectSearchMobile") return;
      if (!isMobileList && activeInput?.id === "navSubjectSearchMobile") return;
      list.innerHTML = html;
      list.hidden = false;
      list.classList.remove("hidden");
      bindSearchResultClicks(list);
    });
    activeInput?.setAttribute("aria-expanded", "true");
  }

  function runNavSearch() {
    const input =
      document.activeElement?.id === "navSubjectSearchMobile"
        ? $("#navSubjectSearchMobile")
        : $("#navSubjectSearch") || $("#navSubjectSearchMobile");
    if (!input) return;
    const matches = filterSubjects(input.value);
    if (matches.length === 1) {
      openSubject(matches[0].id);
      input.value = "";
      hideSearchResults();
      return;
    }
    if (matches.length > 0) {
      renderSearchResults(input.value);
      input.focus();
    }
  }

  function initNavbar() {
    populateNavSubjects();

    $("#btnNavStudy")?.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleNavDropdown($("#navDropdownStudy"));
    });
    $("#btnNavCora")?.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleNavDropdown($("#navDropdownCora"));
    });

    const searchInput = $("#navSubjectSearch");
    const searchMobile = $("#navSubjectSearchMobile");
    [searchInput, searchMobile].forEach(function (input) {
      if (!input) return;
      input.addEventListener("focus", function () {
        renderSearchResults(input.value);
      });
      input.addEventListener("input", function () {
        renderSearchResults(input.value);
      });
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          runNavSearch();
        }
        if (e.key === "Escape") {
          hideSearchResults();
          input.blur();
        }
      });
    });

    $("#navSearchBtn")?.addEventListener("click", runNavSearch);

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav-dropdown")) closeNavDropdowns();
      if (!e.target.closest(".header-search") && !e.target.closest(".mobile-search-wrap")) {
        hideSearchResults();
      }
    });
  }

  /* ——— Event bindings ——— */
  function bindEvents() {
    initNavbar();

    $$("[data-nav]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const nav = el.dataset.nav;
        if (nav === "subject") return;
        if (nav === "subjects") updatePendingTabBanner(sessionStorage.getItem("cado_pending_tab"));
        else {
          setPendingTab(null);
          updatePendingTabBanner(null);
        }
        if (nav === "papers") {
          const ppRoot = $("#pastPaperRoot");
          if (ppRoot && typeof PastPaperGenerator !== "undefined" && !ppRoot.dataset.rendered) {
            PastPaperGenerator.render(ppRoot);
            ppRoot.dataset.rendered = "1";
          }
        }
        closeNavDropdowns();
        if (nav === "profile") renderProfile();
        showView(nav);
      });
    });

    $$(".feature-card[data-feature-nav]").forEach((card) => {
      card.addEventListener("click", () => {
        openFeatureTarget(card.dataset.featureNav, card.dataset.featureTab || null);
      });
    });

    $("#btnSettings")?.addEventListener("click", openSettingsModal);
    $("#settingsClose")?.addEventListener("click", closeSettingsModal);
    $("#settingsBackdrop")?.addEventListener("click", closeSettingsModal);
    bindSettingsForm();

    $("#chapterPickerBackdrop")?.addEventListener("click", closeChapterPicker);
    $("#chapterPickerCancel")?.addEventListener("click", closeChapterPicker);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !$("#chapterPickerModal")?.classList.contains("hidden")) closeChapterPicker();
    });

    $("#btnBackSubject")?.addEventListener("click", () => {
      const pending = sessionStorage.getItem("cado_pending_tab");
      updatePendingTabBanner(pending);
      showView("subjects");
    });

    $("#btnOpenSubjectHub")?.addEventListener("click", () => {
      if (typeof cadoIsHubSubject === "function" && cadoIsHubSubject(currentSubject)) openSubjectHub(currentSubject);
    });

    $$(".tab").forEach((tab) => {
      tab.addEventListener("click", () => activateTab(tab.dataset.tab));
    });

    $("#flashcard")?.addEventListener("click", flipCard);
    $("#prevCard")?.addEventListener("click", () => nextFlash(-1));
    $("#nextCard")?.addEventListener("click", () => nextFlash(1));
    $("#knowCard")?.addEventListener("click", markKnown);
    $("#shuffleCards")?.addEventListener("click", shuffleFlash);

    $("#mcqNext")?.addEventListener("click", nextMcq);
    $("#mcqRestart")?.addEventListener("click", () => currentSubject && initMcq(currentSubject));

    $("#chatForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      sendGlobalChat();
    });

    $("#subjectChatForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      sendSubjectChat();
    });

    $("#menuToggle")?.addEventListener("click", () => {
      const nav = $("#mobileNav");
      const open = nav.hasAttribute("hidden");
      if (open) nav.removeAttribute("hidden");
      else nav.setAttribute("hidden", "");
      $("#menuToggle").setAttribute("aria-expanded", open);
    });

    document.addEventListener("keydown", (e) => {
      if (!$("#view-subject").classList.contains("view-active")) return;
      const panel = $(".tab-panel.active");
      if (panel?.id === "panel-flashcards") {
        if (e.key === "ArrowRight") nextFlash(1);
        if (e.key === "ArrowLeft") nextFlash(-1);
        if (e.key === " ") {
          e.preventDefault();
          flipCard();
        }
      }
    });
  }

  /* ——— Init ——— */
  function init() {
    migrateCadoStorage();
    if (typeof CadetosSettings !== "undefined") CadetosSettings.init();
    else initTheme();
    renderSubjectGrids();
    updateStats();
    initAiSelect();
    initCoraSettings();
    if (typeof CORA !== "undefined") CORA.init();
    if (typeof CoraUI !== "undefined") CoraUI.init();
    bindEvents();
    window.cadoGenerateAiReply = generateAiReply;
    window.cadetOSGenerateAiReply = generateAiReply;
    window.cadoBiologyAiReply = function (msg) {
      if (typeof CORA !== "undefined") {
        return CORA.ask(msg, { channel: "biology", subjectId: "biology", subjectName: "Biology", subjectCode: "5090" });
      }
      if (typeof BiologyAI !== "undefined") return BiologyAI.respond(msg);
      return generateAiReply(msg, "biology");
    };
    window.cadetOSBiologyAiReply = window.cadoBiologyAiReply;
    showView("home");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

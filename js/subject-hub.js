/**
 * CADO — Generic subject chapter hub factory
 */
const SubjectHub = (function () {
  "use strict";

  function create(cfg) {
  function getData() { return cfg.getData(); }
  const PROG = cfg.progress;
  const POOL = cfg.mcqPool;
  const IDS = cfg.ids;
  const APP_ROOT_ID = cfg.appRootId;
  const BACK_BTN_ID = cfg.backBtnId;
  const PENDING_KEY = cfg.pendingKey;
  let container = null;
  let activeTopicId = null;
  let studyTab = "notes";
  let flashIndex = 0;
  let flashDeck = [];
  let flashFlipped = false;
  let mcqIndex = 0;
  let mcqScore = 0;
  let mcqDeck = [];
  let mcqAnswered = false;
  let mcqTimer = null;
  let mcqTimeLeft = 0;

  const BASE_STUDY_TABS = ["notes", "flashcards", "mcq", "theory", "ai"];
  function getStudyTabs() {
    const extra = (cfg.lms && cfg.lms.extraTabs) || [];
    const ids = BASE_STUDY_TABS.slice();
    extra.forEach(function (t) {
      if (ids.indexOf(t.id) < 0) ids.splice(ids.length - 1, 0, t.id);
    });
    return ids;
  }
  const FLASH_PER_CHAPTER = 15;
  const MCQ_PER_CHAPTER = 40;
  const THEORY_PER_CHAPTER = 5;

  function syncProfileHub(topicId) {
    if (typeof ProfileEngine === "undefined") return;
    if (topicId) ProfileEngine.setLastVisited(cfg.subjectId, topicId);
    ProfileEngine.syncAll();
  }

  const TAB_LABELS = {
    notes: "Notes",
    flashcards: "Flashcards",
    mcq: "MCQs",
    theory: "Theory",
    ai: "CORA"
  };

  const CORA_GRADIENT_LABEL = '<span class="cora-text">CORA</span>';
  const CORA_TAB_ICON =
    '<img src="assets/cora-logo.png?v=5" alt="" class="cora-logo-img cora-logo-img--icon cora-logo-img--icon-tab">';

  function studyTabLabel(tab) {
    return tab === "ai" ? CORA_GRADIENT_LABEL : TAB_LABELS[tab];
  }

  function studyTabIcon(tab) {
    return tab === "ai" ? CORA_TAB_ICON : TAB_META[tab].icon;
  }

  const TAB_META = {
    notes: { icon: "📖", hint: "Understand the chapter", count: null },
    flashcards: { icon: "🃏", hint: "15 cards to memorise", count: 15 },
    mcq: { icon: "✅", hint: "40 exam-style questions", count: 40 },
    theory: { icon: "✍️", hint: "5 written questions", count: 5 },
    ai: { icon: "cora", hint: "Get help on this topic", count: null }
  };

  const STUDY_PATH = ["notes", "flashcards", "mcq", "theory"];

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function getTopic(id) {
    return getData().topics.find(function (t) { return t.id === id; });
  }

  function mcqTarget() {
    return (CadetosSettings ? CadetosSettings.load().mcqTargetPerTopic : MCQ_PER_CHAPTER) || MCQ_PER_CHAPTER;
  }

  function progressBarHtml() {
    const pct = PROG.overallProgress();
    const fillW = Math.max(pct, pct > 0 ? 3 : 0);
    return '<div class="bio-progress-wrap"><div class="bio-progress-label"><span>Progress</span><strong>' + pct + '%</strong></div>' +
      '<div class="bio-progress-bar" role="progressbar" aria-valuenow="' + pct + '"><div class="bio-progress-fill" style="width:' + fillW + '%"></div></div></div>';
  }

  function renderShell() {
    return '<div class="lms-bio lms-subject-hub" style="--subject-accent:' + cfg.color + '">' +
      '<div class="lms-bio-header">' +
      '<button type="button" class="btn-back" id="' + BACK_BTN_ID + '"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg> Subjects</button>' +
      '<div class="lms-bio-title"><span class="lms-bio-icon">' + getData().icon + '</span>' +
      '<div><h1>' + cfg.name + ' <span class="lms-code">' + getData().code + '</span></h1>' +
      '<p class="lms-bio-sub">' + getData().topics.length + ' chapters · Interactive notes · Games · XP · 15 flashcards · 40 MCQs per chapter</p></div></div>' +
      progressBarHtml() +
      (cfg.lms && cfg.lms.renderShellExtra ? cfg.lms.renderShellExtra() : "") +
      '</div><div id="' + APP_ROOT_ID + '"></div></div>';
  }

  function renderSidebar() {
    const items = getData().topics.map(function (t) {
      const active = activeTopicId === t.id;
      const pct = PROG.topicProgress(t.id);
      const subs = active && t.subtopics && t.subtopics.length
        ? '<ul class="bio-sidebar-subtopics" aria-label="Chapter subtopics">' +
          t.subtopics.map(function (st) {
            return '<li class="bio-sidebar-subtopic">' + escapeHtml(st) + "</li>";
          }).join("") +
          "</ul>"
        : "";
      return '<li class="bio-sidebar-chapter-item' + (active ? " is-active-chapter" : "") + '">' +
        '<button type="button" class="bio-chapter-link' + (active ? " is-active" : "") + '" data-chapter="' + t.id + '">' +
        '<span class="bio-chapter-num">' + t.number + "</span>" +
        '<span class="bio-chapter-name">' + escapeHtml(t.name) + "</span>" +
        '<span class="bio-chapter-pct">' + pct + "%</span>" +
        "</button>" + subs + "</li>";
    }).join("");

    return '<aside class="bio-sidebar-chapters" aria-label="Chapters">' +
      '<p class="bio-sidebar-title">Chapters</p>' +
      '<p class="bio-sidebar-hint">Select a chapter to study. Subtopic labels are for reference only.</p>' +
      '<ul class="bio-chapter-list">' + items + "</ul></aside>";
  }

  function renderEmptyMain() {
    return '<div class="bio-hub-empty">' +
      '<div class="bio-hub-empty-icon" aria-hidden="true">' + cfg.icon + '</div>' +
      '<h3>Pick a chapter to begin</h3>' +
      '<p class="lms-screen-hint">Each chapter has clear notes, 15 flashcards, 40 MCQs, and 5 theory questions — built for Cambridge ' + cfg.code + '.</p></div>';
  }

  function renderList(items, ordered) {
    if (!items || !items.length) return "";
    const tag = ordered ? "ol" : "ul";
    return "<" + tag + ' class="bio-content-list">' + items.map(function (i) {
      return "<li>" + escapeHtml(i) + "</li>";
    }).join("") + "</" + tag + ">";
  }

  function renderSubsections(subs) {
    if (!subs || !subs.length) return "";
    return subs.map(function (sub) {
      var html = '<div class="bio-chapter-subsection"><h5>' + escapeHtml(sub.title) + "</h5>";
      if (sub.paragraphs) sub.paragraphs.forEach(function (p) { html += "<p>" + escapeHtml(p) + "</p>"; });
      if (sub.bulletList) html += renderList(sub.bulletList, false);
      return html + "</div>";
    }).join("");
  }

  function renderChapterSections(topic) {
    if (!topic.chapterSections || !topic.chapterSections.length) return "";
    return topic.chapterSections.map(function (sec, idx) {
      var html = '<article class="bio-note-card bio-note-card--section">' +
        '<div class="bio-note-card-head"><span class="bio-note-card-icon">' + (idx + 1) + "</span>" +
        "<h4>" + escapeHtml(sec.title) + "</h4></div><div class=\"bio-note-card-body\">";
      if (sec.paragraphs) {
        sec.paragraphs.forEach(function (p) {
          html += '<p class="bio-note-lead">' + escapeHtml(p) + "</p>";
        });
      }
      if (sec.numberedList) html += renderList(sec.numberedList, true);
      if (sec.bulletList) html += renderList(sec.bulletList, false);
      if (sec.subsections) html += renderSubsections(sec.subsections);
      return html + "</div></article>";
    }).join("");
  }

  function splitRecapLines(text) {
    if (!text) return [];
    return text.split(/\n+/).map(function (s) { return s.replace(/^[•\-]\s*/, "").trim(); }).filter(Boolean);
  }

  function renderHighlightBox(topic) {
    var lines = topic.summary && topic.summary.length
      ? topic.summary
      : splitRecapLines(topic.quickRecap);
    if (!lines.length) return "";
    return '<section class="bio-big-idea">' +
      '<div class="bio-big-idea-label"><span aria-hidden="true">✨</span> Start here — the big picture</div>' +
      '<ul class="bio-big-idea-list">' +
      lines.map(function (line) {
        return '<li><span class="bio-big-idea-dot" aria-hidden="true"></span><span>' + escapeHtml(line) + "</span></li>";
      }).join("") +
      "</ul></section>";
  }

  function renderObjectives(topic) {
    if (!topic.learningObjectives || !topic.learningObjectives.length) return "";
    return '<section class="bio-notes-section">' +
      '<h3 class="bio-notes-section-title"><span class="bio-notes-section-icon">🎯</span> What you will master</h3>' +
      '<div class="bio-objective-grid">' +
      topic.learningObjectives.map(function (o, i) {
        return '<div class="bio-objective-card"><span class="bio-objective-num">' + (i + 1) + "</span><p>" + escapeHtml(o) + "</p></div>";
      }).join("") +
      "</div></section>";
  }

  function renderDefinitions(topic) {
    if (!topic.definitions || !topic.definitions.length) return "";
    return '<section class="bio-notes-section">' +
      '<h3 class="bio-notes-section-title"><span class="bio-notes-section-icon">📚</span> Key definitions</h3>' +
      '<div class="bio-term-grid">' +
      topic.definitions.map(function (d) {
        return '<div class="bio-term-card"><span class="bio-term-name">' + escapeHtml(d.term) + "</span><p>" + escapeHtml(d.definition) + "</p></div>";
      }).join("") +
      "</div></section>";
  }

  function renderExamples(topic) {
    if (!topic.examples || !topic.examples.length) return "";
    return '<section class="bio-notes-section">' +
      '<h3 class="bio-notes-section-title"><span class="bio-notes-section-icon">💡</span> Real examples</h3>' +
      '<div class="bio-example-grid">' +
      topic.examples.map(function (ex) {
        return '<div class="bio-example-card"><strong>' + escapeHtml(ex.title) + "</strong><p>" + escapeHtml(ex.text) + "</p></div>";
      }).join("") +
      "</div></section>";
  }

  function renderComparisonTable(topic) {
    var t = topic.comparisonTable;
    if (!t || !t.headers || !t.rows || !t.rows.length) return "";
    var head = "<tr>" + t.headers.map(function (h) {
      return "<th>" + escapeHtml(h) + "</th>";
    }).join("") + "</tr>";
    var body = t.rows.map(function (row) {
      return "<tr>" + row.map(function (cell) {
        return "<td>" + escapeHtml(String(cell)) + "</td>";
      }).join("") + "</tr>";
    }).join("");
    return '<section class="bio-notes-section">' +
      '<h3 class="bio-notes-section-title"><span class="bio-notes-section-icon">⚖️</span> Compare at a glance</h3>' +
      '<div class="bio-comparison-wrap"><table class="bio-comparison-table"><thead>' + head + "</thead><tbody>" + body + "</tbody></table></div></section>";
  }

  function renderNotesPanel(topic) {
    var html = renderHighlightBox(topic);
    html += renderObjectives(topic);
    if (topic.chapterSections && topic.chapterSections.length) {
      html += '<section class="bio-notes-section">' +
        '<h3 class="bio-notes-section-title"><span class="bio-notes-section-icon">' + cfg.notesIcon + '</span> Chapter breakdown</h3>' +
        '<div class="bio-note-cards">' + renderChapterSections(topic) + "</div></section>";
    } else if (topic.detailedNotes) {
      html += '<section class="bio-notes-section">' +
        '<h3 class="bio-notes-section-title"><span class="bio-notes-section-icon">' + cfg.notesIcon + '</span> Chapter notes</h3>' +
        '<div class="bio-note-card bio-note-card--section"><div class="bio-note-card-body bio-detailed-body">' +
        escapeHtml(topic.detailedNotes).replace(/\n\n/g, "</p><p>").replace(/^/, "<p>").replace(/$/, "</p>") +
        "</div></div></section>";
    }
    html += renderComparisonTable(topic);
    html += renderDefinitions(topic);
    html += renderExamples(topic);
    if (topic.examTips) {
      html += '<section class="bio-exam-callout">' +
        '<div class="bio-exam-callout-head"><span aria-hidden="true">🏆</span> Examiner tips</div>' +
        "<p>" + escapeHtml(topic.examTips) + "</p></section>";
    }
    if (!html) {
      html = '<div class="bio-panel-empty"><p>Notes for this chapter are on the way. Try flashcards or MCQs meanwhile.</p></div>';
    } else {
      html += '<div class="bio-notes-cta">' +
        '<p>Ready to test yourself?</p>' +
        '<button type="button" class="btn btn-primary" data-study-tab="flashcards">Start flashcards →</button></div>';
    }
    return html;
  }

  function renderChapterHero(topic) {
    var pct = PROG.topicProgress(topic.id);
    var desc = topic.description || "Master this syllabus chapter with notes, practice, and exam-style questions.";
    var tags = (topic.subtopics || []).map(function (st) {
      return '<span class="bio-hero-tag">' + escapeHtml(st) + "</span>";
    }).join("");
    return '<div class="bio-chapter-hero">' +
      '<div class="bio-chapter-hero-inner">' +
      '<div class="bio-chapter-hero-top">' +
      '<span class="bio-chapter-hero-badge">Chapter ' + topic.number + "</span>" +
      '<span class="bio-chapter-hero-pct">' + pct + "% complete</span></div>" +
      "<h2 class=\"bio-chapter-hero-title\">" + escapeHtml(topic.name) + "</h2>" +
      '<p class="bio-chapter-hero-desc">' + escapeHtml(desc) + "</p>" +
      (tags ? '<div class="bio-chapter-hero-tags">' + tags + "</div>" : "") +
      '<div class="bio-chapter-hero-bar"><div class="bio-chapter-hero-bar-fill" style="width:' + pct + '%"></div></div>' +
      "</div></div>";
  }

  function renderStudyJourney() {
    var steps = STUDY_PATH.map(function (tab, i) {
      var m = TAB_META[tab];
      var active = studyTab === tab;
      var done = STUDY_PATH.indexOf(studyTab) > i;
      return '<button type="button" class="bio-journey-step' + (active ? " is-active" : "") + (done ? " is-done" : "") + '" data-study-tab="' + tab + '">' +
        '<span class="bio-journey-step-num">' + (done ? "✓" : i + 1) + "</span>" +
        '<span class="bio-journey-step-icon" aria-hidden="true">' + studyTabIcon(tab) + "</span>" +
        '<span class="bio-journey-step-text"><strong>' + studyTabLabel(tab) + "</strong><small>" + m.hint + "</small></span></button>";
    }).join("");
    return '<div class="bio-study-journey"><p class="bio-study-journey-label">Your revision path</p><div class="bio-study-journey-steps">' + steps + "</div></div>";
  }

  function getTabMeta(tab) {
    if (TAB_META[tab]) return TAB_META[tab];
    const extra = (cfg.lms && cfg.lms.extraTabs) || [];
    const found = extra.find(function (t) { return t.id === tab; });
    return found ? { icon: found.icon || "🎮", hint: found.hint || "", count: null } : { icon: "📌", hint: "", count: null };
  }

  function renderStudyTabs() {
    return getStudyTabs().map(function (tab) {
      var m = getTabMeta(tab);
      var count = tab === "flashcards" ? FLASH_PER_CHAPTER : tab === "mcq" ? MCQ_PER_CHAPTER : tab === "theory" ? THEORY_PER_CHAPTER : m.count;
      var extraTab = ((cfg.lms && cfg.lms.extraTabs) || []).find(function (t) { return t.id === tab; });
      var label = tab === "ai" ? studyTabLabel(tab) : (TAB_LABELS[tab] || (extraTab && extraTab.label) || tab);
      return '<button type="button" class="lms-study-tab' + (studyTab === tab ? " active" : "") + '" data-study-tab="' + tab + '">' +
        '<span class="lms-study-tab-icon" aria-hidden="true">' + (tab === "ai" ? studyTabIcon(tab) : m.icon) + "</span>" +
        "<span class=\"lms-study-tab-label\">" + (tab === "ai" ? label : label) + (count ? ' <em class="lms-study-tab-count">' + count + "</em>" : "") + "</span></button>";
    }).join("");
  }

  function renderPanelIntro(tab) {
    var intros = {
      flashcards: { title: "Flashcard sprint", desc: "Flip, recall, repeat — 15 cards built for this chapter. Train your memory like a game.", emoji: "🃏" },
      mcq: { title: "MCQ challenge", desc: "40 multiple-choice questions with instant feedback — same style as Paper 1.", emoji: "✅" },
      theory: { title: "Theory practice", desc: "5 written questions with mark schemes. Practise explaining clearly for Paper 2.", emoji: "✍️" },
      ai: { title: 'Ask <span class="cora-text">CORA</span>', desc: "Stuck on a concept? Ask for hints, diagrams in words, or a simpler explanation.", emoji: "cora" },
      games: { title: "Mini-games", desc: "Play quick chemistry games and earn XP while you learn.", emoji: "🎮" }
    };
    var info = intros[tab];
    if (!info) return "";
    var introIcon = info.emoji === "cora" ? CORA_TAB_ICON : info.emoji;
    return '<div class="bio-panel-intro"><span class="bio-panel-intro-emoji" aria-hidden="true">' + introIcon + '</span><div><h3>' + info.title + "</h3><p>" + info.desc + "</p></div></div>";
  }

  function renderFlashPanel(topic) {
    const cards = (topic.flashcards || []).slice(0, FLASH_PER_CHAPTER);
    return renderPanelIntro("flashcards") +
      '<div class="lms-study-toolbar"><span id="' + IDS.flashProgress + '" class="flash-progress"></span>' +
      '<button type="button" class="btn btn-sm" id="' + IDS.shuffleFlash + '">Shuffle</button></div>' +
      '<div class="flashcard-stage flashcard-stage-wide"><button type="button" class="flashcard" id="' + IDS.flashcard + '">' +
      '<div class="flashcard-inner"><div class="flashcard-face flashcard-front"><span class="flash-label">Question</span><p id="' + IDS.flashQ + '"></p></div>' +
      '<div class="flashcard-face flashcard-back"><span class="flash-label">Answer</span><p id="' + IDS.flashA + '"></p></div></div></button>' +
      '<p class="flash-hint">Tap to flip · ' + FLASH_PER_CHAPTER + " cards per chapter</p></div>" +
      '<div class="flashcard-nav"><button type="button" class="btn btn-secondary" id="' + IDS.prevFlash + '">Previous</button>' +
      '<button type="button" class="btn btn-primary" id="' + IDS.nextFlash + '">Next</button></div>' +
      (cards.length ? "" : "<p class='bio-empty'>No flashcards loaded.</p>");
  }

  function renderMcqPanel() {
    const toolbarExtra = cfg.lms && cfg.lms.renderStudyToolbarExtra ? cfg.lms.renderStudyToolbarExtra() : "";
    const examHint = cfg.lms && cfg.lms.examMode && cfg.lms.examMode() ? '<span class="chem-exam-badge">Exam mode</span>' : "";
    return renderPanelIntro("mcq") + toolbarExtra +
      '<div class="lms-study-toolbar"><span id="' + IDS.mcqMeta + '" class="quiz-meta"></span>' + examHint +
      '<span id="' + IDS.mcqMeta + 'Timer" class="chem-mcq-timer hidden"></span>' +
      '<button type="button" class="btn btn-sm btn-secondary" id="' + IDS.mcqRestart + '">Restart</button></div>' +
      '<div class="quiz-card"><h3 class="quiz-question" id="' + IDS.mcqQ + '"></h3>' +
      '<div class="quiz-options" id="' + IDS.mcqOpts + '"></div>' +
      '<div class="quiz-feedback hidden" id="' + IDS.mcqFb + '"></div>' +
      '<div class="quiz-actions"><button type="button" class="btn btn-primary hidden" id="' + IDS.mcqNext + '">Next</button></div>' +
      '<div class="quiz-score hidden" id="' + IDS.mcqScore + '"></div></div>';
  }

  function renderTheoryPanel(topic) {
    const items = (topic.theory || []).slice(0, THEORY_PER_CHAPTER);
    return renderPanelIntro("theory") + items.map(function (t, i) {
      return '<div class="theory-card"><button type="button" class="theory-toggle" data-th="th-' + topic.id + "-" + i + '" aria-expanded="false">' +
        '<span>' + escapeHtml(t.q) + '</span><span class="theory-marks">' + (t.marks || "?") + " marks</span></button>" +
        '<div class="theory-answer" id="th-' + topic.id + "-" + i + '" hidden><h4>Mark scheme</h4><ul>' +
        (t.points || []).map(function (p) { return "<li>" + escapeHtml(p) + "</li>"; }).join("") + "</ul></div></div>";
    }).join("") || "<p>No theory questions for this chapter.</p>";
  }

  function renderAiPanel() {
    return renderPanelIntro("ai") +
      '<div class="cora-chat-embed"><div class="chat-messages cora-chat-messages" id="' + IDS.chatMessages + '">' +
      '<div class="message message-bot"><div class="message-avatar cora-avatar"><img src="assets/cora-logo.png?v=5" alt="CORA" class="cora-logo-img cora-logo-img--icon cora-logo-img--icon-avatar"></div><div class="message-bubble"><p>Hi! I\'m ' + CORA_GRADIENT_LABEL + '. Ask about this chapter — or any of the 8 O-Level subjects on CADO.</p></div></div></div>' +
      '<form class="chat-form cora-chat-form" id="' + IDS.chatForm + '"><input type="text" class="chat-input" id="' + IDS.chatInput + '" placeholder="Message CORA…" autocomplete="off">' +
      '<button type="submit" class="btn btn-primary">Send</button></form></div>';
  }

  function renderStudyMain(topic) {
    let panel = "";
    if (studyTab === "notes") panel = renderNotesPanel(topic);
    else if (studyTab === "flashcards") panel = renderFlashPanel(topic);
    else if (studyTab === "mcq") panel = renderMcqPanel();
    else if (studyTab === "theory") panel = renderTheoryPanel(topic);
    else if (studyTab === "ai") panel = renderAiPanel();
    else if (cfg.lms && cfg.lms.renderExtraPanel) {
      var extraTabMatch = (cfg.lms.extraTabs || []).find(function (t) { return t.id === studyTab; });
      panel = (extraTabMatch ? renderPanelIntro(studyTab) : "") + (cfg.lms.renderExtraPanel(studyTab, topic) || "");
    }
    else panel = renderAiPanel();

    return '<div class="lms-study-screen bio-study-screen">' +
      renderChapterHero(topic) +
      '<div class="bio-study-toolbar-row">' +
      renderStudyJourney() +
      '<button type="button" class="btn btn-sm bio-mark-complete' + (PROG.getTopic(topic.id).complete ? " is-done" : "") + '" data-id="' + topic.id + '">' +
      (PROG.getTopic(topic.id).complete ? "✓ Chapter complete" : "Mark chapter complete") + "</button></div>" +
      '<div class="lms-study-tabs" role="tablist">' + renderStudyTabs() + "</div>" +
      '<div class="lms-study-panel bio-study-panel">' + panel + "</div></div>";
  }

  function renderHubLayout() {
    const topic = activeTopicId ? getTopic(activeTopicId) : null;
    const main = topic ? renderStudyMain(topic) : renderEmptyMain();
    return '<div class="bio-hub-layout">' + renderSidebar() +
      '<div class="bio-hub-main bio-layout-main">' + main + "</div></div>";
  }

  function renderScreen() {
    const root = document.getElementById(APP_ROOT_ID);
    if (!root) return;
    root.innerHTML = renderHubLayout();
    bindScreen();
    if (activeTopicId) {
      if (studyTab === "flashcards") initFlashForTopic(activeTopicId);
      if (studyTab === "mcq") initMcqForTopic(activeTopicId);
      if (studyTab === "ai") initHubAi();
    }
    if (cfg.lms && cfg.lms.onAfterRender) {
      cfg.lms.onAfterRender({
        hub: apiRef,
        topic: activeTopicId ? getTopic(activeTopicId) : null,
        tab: studyTab,
        topicId: activeTopicId
      });
    }
  }

  const apiRef = {};

  function openStudy(topicId, tab) {
    const pending = sessionStorage.getItem(PENDING_KEY);
    if (pending && !tab) {
      const map = { notes: "notes", flashcards: "flashcards", mcq: "mcq", theory: "theory", ai: "ai" };
      tab = map[pending] || "notes";
      sessionStorage.removeItem(PENDING_KEY);
    }
    activeTopicId = topicId;
    studyTab = tab || studyTab || "notes";
    syncProfileHub(topicId);
    renderScreen();
    var main = document.querySelector(".bio-hub-main");
    if (main) main.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function initFlashForTopic(topicId) {
    const t = getTopic(topicId);
    flashDeck = (t && t.flashcards) ? t.flashcards.slice(0, FLASH_PER_CHAPTER) : [];
    if (typeof POOL !== "undefined") flashDeck = POOL.shuffle(flashDeck);
    flashIndex = 0;
    updateFlash(t);
  }

  function updateFlash(topic) {
    document.getElementById(IDS.flashcard)?.classList.remove("flipped");
    const qEl = document.getElementById(IDS.flashQ);
    const aEl = document.getElementById(IDS.flashA);
    const prog = document.getElementById(IDS.flashProgress);
    if (!flashDeck.length) {
      if (qEl) qEl.textContent = "No flashcards.";
      return;
    }
    const c = flashDeck[flashIndex];
    if (qEl) qEl.textContent = c.q;
    if (aEl) aEl.textContent = c.a;
    if (prog) prog.textContent = "Card " + (flashIndex + 1) + " / " + flashDeck.length + (topic ? " · Ch " + topic.number : "");
  }

  function clearMcqTimer() {
    if (mcqTimer) { clearInterval(mcqTimer); mcqTimer = null; }
  }

  function initMcqForTopic(topicId) {
    clearMcqTimer();
    mcqDeck = typeof POOL !== "undefined"
      ? POOL.getMcqs(topicId, mcqTarget())
      : (getTopic(topicId).mcqs || []).slice(0, MCQ_PER_CHAPTER);
    if (typeof POOL !== "undefined") mcqDeck = POOL.shuffle(mcqDeck);
    if (cfg.lms && cfg.lms.getMcqDeck) mcqDeck = cfg.lms.getMcqDeck(topicId, mcqDeck);
    mcqIndex = 0;
    mcqScore = 0;
    mcqAnswered = false;
    const secs = cfg.lms && cfg.lms.mcqTimerSeconds ? cfg.lms.mcqTimerSeconds() : 0;
    if (secs > 0) {
      mcqTimeLeft = secs;
      mcqTimer = setInterval(function () {
        mcqTimeLeft--;
        const tEl = document.getElementById(IDS.mcqMeta + "Timer");
        if (tEl) { tEl.classList.remove("hidden"); tEl.textContent = mcqTimeLeft + "s"; }
        if (mcqTimeLeft <= 0) { clearMcqTimer(); mcqIndex = mcqDeck.length; renderMcqRun(); }
      }, 1000);
    }
    renderMcqRun();
  }

  function renderMcqRun() {
    const meta = document.getElementById(IDS.mcqMeta);
    const qEl = document.getElementById(IDS.mcqQ);
    const opts = document.getElementById(IDS.mcqOpts);
    const fb = document.getElementById(IDS.mcqFb);
    const next = document.getElementById(IDS.mcqNext);
    const scoreEl = document.getElementById(IDS.mcqScore);
    if (!qEl) return;
    fb?.classList.add("hidden");
    next?.classList.add("hidden");
    scoreEl?.classList.add("hidden");
    if (mcqIndex >= mcqDeck.length) {
      if (meta) meta.textContent = "Complete";
      qEl.textContent = "Score: " + mcqScore + " / " + mcqDeck.length;
      if (opts) opts.innerHTML = "";
      if (scoreEl) {
        scoreEl.classList.remove("hidden");
        scoreEl.textContent = mcqScore / mcqDeck.length >= 0.75 ? "Excellent!" : "Keep practising — read explanations.";
      }
      clearMcqTimer();
      PROG.recordMcq(activeTopicId, mcqScore, mcqDeck.length);
      syncProfileHub(activeTopicId);
      if (cfg.lms && cfg.lms.onMcqComplete) cfg.lms.onMcqComplete(mcqScore, mcqDeck.length, activeTopicId);
      return;
    }
    const m = mcqDeck[mcqIndex];
    mcqAnswered = false;
    if (meta) meta.textContent = "Question " + (mcqIndex + 1) + " / " + mcqDeck.length;
    qEl.textContent = m.q;
    const shuffled = typeof POOL !== "undefined"
      ? (function () {
          const order = m.options.map(function (o, i) { return { text: o, i: i }; });
          const s = POOL.shuffle(order);
          m._correctDisplay = s.findIndex(function (x) { return x.i === m.answer; });
          return s;
        })()
      : m.options.map(function (o, i) { return { text: o, i: i }; });
    if (!m._correctDisplay && m._correctDisplay !== 0) m._correctDisplay = m.answer;
    opts.innerHTML = shuffled.map(function (item, di) {
      return '<button type="button" class="quiz-option" data-i="' + di + '">' + escapeHtml(item.text) + "</button>";
    }).join("");
    opts.querySelectorAll(".quiz-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (mcqAnswered) return;
        mcqAnswered = true;
        const idx = parseInt(btn.dataset.i, 10);
        const ok = idx === m._correctDisplay;
        if (ok) mcqScore++;
        opts.querySelectorAll(".quiz-option").forEach(function (b) {
          b.disabled = true;
          const i = parseInt(b.dataset.i, 10);
          if (i === m._correctDisplay) b.classList.add("correct");
          else if (i === idx && !ok) b.classList.add("wrong");
        });
        const examMode = cfg.lms && cfg.lms.examMode && cfg.lms.examMode();
        if (cfg.lms && cfg.lms.enhanceMcqFeedback) {
          cfg.lms.enhanceMcqFeedback(fb, ok, m.explain || "", examMode);
        } else {
          fb.classList.remove("hidden", "correct-fb", "wrong-fb");
          fb.classList.add(ok ? "correct-fb" : "wrong-fb");
          fb.innerHTML = ok ? "✓ " + escapeHtml(m.explain || "") : "✗ " + escapeHtml(m.explain || "");
        }
        if (cfg.lms && cfg.lms.onMcqAnswer) cfg.lms.onMcqAnswer(ok, m, activeTopicId);
        next.classList.remove("hidden");
      });
    });
  }

  function initHubAi() {
    const form = document.getElementById(IDS.chatForm);
    if (!form || form.dataset.bound) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = document.getElementById(IDS.chatInput);
      const msg = input.value.trim();
      if (!msg) return;
      input.value = "";
      const box = document.getElementById(IDS.chatMessages);
      if (typeof CORA !== "undefined") {
        CORA.chatInContainer(box, msg, { channel: cfg.subjectId, subjectId: cfg.subjectId, subjectName: cfg.name, subjectCode: cfg.code, useStructured: false });
      }
    });
    form.dataset.bound = "1";
  }

  function bindScreen() {
    const root = document.getElementById(APP_ROOT_ID);
    if (!root) return;

    root.querySelectorAll("[data-chapter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openStudy(btn.dataset.chapter, studyTab);
      });
    });

    root.querySelectorAll("[data-study-tab]").forEach(function (tab) {
      tab.addEventListener("click", function () {
        studyTab = tab.dataset.studyTab;
        renderScreen();
      });
    });

    root.querySelectorAll(".bio-mark-complete").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        if (!id) return;
        const p = PROG.getTopic(id);
        PROG.markComplete(id, !p.complete);
        syncProfileHub(id);
        renderScreen();
      });
    });

    document.getElementById(IDS.flashcard)?.addEventListener("click", function () {
      document.getElementById(IDS.flashcard).classList.toggle("flipped");
    });
    document.getElementById(IDS.prevFlash)?.addEventListener("click", function () {
      if (!flashDeck.length) return;
      flashIndex = (flashIndex - 1 + flashDeck.length) % flashDeck.length;
      updateFlash(getTopic(activeTopicId));
    });
    document.getElementById(IDS.nextFlash)?.addEventListener("click", function () {
      if (!flashDeck.length) return;
      flashIndex = (flashIndex + 1) % flashDeck.length;
      updateFlash(getTopic(activeTopicId));
    });
    document.getElementById(IDS.shuffleFlash)?.addEventListener("click", function () {
      if (typeof POOL !== "undefined") flashDeck = POOL.shuffle(flashDeck);
      flashIndex = 0;
      updateFlash(getTopic(activeTopicId));
    });
    document.getElementById(IDS.mcqNext)?.addEventListener("click", function () {
      mcqIndex++;
      renderMcqRun();
    });
    document.getElementById(IDS.mcqRestart)?.addEventListener("click", function () {
      initMcqForTopic(activeTopicId);
    });

    root.querySelectorAll(".theory-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const ans = document.getElementById(btn.dataset.th);
        if (!ans) return;
        ans.hidden = !ans.hidden;
        btn.setAttribute("aria-expanded", !ans.hidden);
        if (!ans.hidden && activeTopicId) PROG.recordTheoryView(activeTopicId);
      });
    });
  }

  function switchMode(mode) {
    const map = { topics: "notes", flashcards: "flashcards", mcq: "mcq", theory: "theory", ai: "ai", games: "games", papers: "papers", syllabus: "notes", settings: "notes" };
    if (mode === "papers" && typeof window.cadoNavigate === "function") {
      window.cadoNavigate("papers");
      return;
    }
    const tab = map[mode] || "notes";
    if (activeTopicId) {
      openStudy(activeTopicId, tab);
    } else {
      const first = getData().topics[0];
      if (first) openStudy(first.id, tab);
    }
  }

  function scrollToTopic(id) {
    openStudy(id, "notes");
  }

  function render(el) {
    container = el;
    if (!el || !cfg.getData() || !cfg.getData().topics) {
      if (el) el.innerHTML = "<p>" + cfg.name + " content failed to load.</p>";
      return;
    }
    if (typeof CadetosSettings !== "undefined") CadetosSettings.applyAll(CadetosSettings.load());
    sessionStorage.removeItem(PENDING_KEY);
    activeTopicId = null;
    studyTab = "notes";
    el.innerHTML = renderShell();
    document.getElementById(BACK_BTN_ID)?.addEventListener("click", function () {
      if (typeof window.cadoNavigate === "function") window.cadoNavigate("subjects");
    });
    renderScreen();
  }

  apiRef.render = render;
  apiRef.switchMode = switchMode;
  apiRef.scrollToTopic = scrollToTopic;
  apiRef.openStudy = openStudy;
  apiRef.getActiveTopicId = function () { return activeTopicId; };
  return apiRef;
  }

  return { create: create };
})();
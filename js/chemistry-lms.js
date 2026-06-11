/**
 * Chemistry 5070 — Interactive LMS layer (dashboard, study modes, visuals)
 */
const ChemistryLMS = (function () {
  "use strict";

  const HUB_VIEWS = ["topics", "dashboard", "games", "revision"];
  let hubView = "topics";
  let studyMode = "learn";

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function highlightKeywords(text) {
    const patterns = [
      { re: /\b(exothermic|endothermic)\b/gi, cls: "chem-kw--energy" },
      { re: /\b(acid|alkali|base|neutralisation|pH)\b/gi, cls: "chem-kw--acid" },
      { re: /\b(hydrogen|oxygen|carbon dioxide|ammonia|chlorine)\b/gi, cls: "chem-kw--gas" },
      { re: /\b(alkane|alkene|hydrocarbon|polymer)\b/gi, cls: "chem-kw--organic" },
      { re: /\b(metal|non-metal|reactivity|rusting)\b/gi, cls: "chem-kw--metal" },
      { re: /\b(filtration|distillation|chromatography|crystallisation)\b/gi, cls: "chem-kw--lab" }
    ];
    let out = escapeHtml(text);
    patterns.forEach(function (p) {
      out = out.replace(p.re, function (m) { return '<mark class="chem-kw ' + p.cls + '">' + m + '</mark>'; });
    });
    return out;
  }

  function renderHubNav(active) {
    const labels = { topics: "📖 Topics", dashboard: "📊 Dashboard", games: "🎮 Games", revision: "⚡ Revision" };
    return '<nav class="chem-hub-nav" aria-label="Chemistry learning">' +
      HUB_VIEWS.map(function (v) {
        return '<button type="button" class="chem-hub-nav-btn' + (active === v ? " is-active" : "") + '" data-chem-view="' + v + '">' + labels[v] + '</button>';
      }).join("") + '</nav>';
  }

  function renderStudyModeBar() {
    const modes = [
      { id: "learn", label: "Learn", icon: "📗", hint: "Hints & explanations" },
      { id: "exam", label: "Exam", icon: "⏱️", hint: "No hints, timed" },
      { id: "revision", label: "Quick Rev", icon: "🃏", hint: "Flashcards focus" },
      { id: "mistakes", label: "Mistakes", icon: "🔄", hint: "Review wrong answers" }
    ];
    return '<div class="chem-study-modes" role="group" aria-label="Study mode">' +
      modes.map(function (m) {
        return '<button type="button" class="chem-mode-btn' + (studyMode === m.id ? " is-active" : "") + '" data-chem-mode="' + m.id + '" title="' + m.hint + '">' +
          '<span>' + m.icon + '</span> ' + m.label + '</button>';
      }).join("") + '</div>';
  }

  function renderXpBar() {
    if (typeof ChemistryGamification === "undefined") return "";
    const s = ChemistryGamification.load();
    const lvl = ChemistryGamification.getLevel(s.xp);
    const badges = ChemistryGamification.getBadges().filter(function (b) { return b.earned; });
    const nextLabel = lvl.next ? lvl.next.minXp + " XP" : "Max";
    const fillPct = Math.max(lvl.progress, s.xp > 0 ? 4 : 0);
    return '<div class="chem-xp-bar">' +
      '<div class="chem-xp-level"><span class="chem-xp-icon">' + lvl.current.icon + '</span>' +
      '<div><strong class="chem-xp-name">' + lvl.current.name + '</strong>' +
      '<span class="chem-xp-points">' + s.xp + ' XP' + (lvl.next ? ' · next: ' + nextLabel : '') + '</span></div></div>' +
      '<div class="chem-xp-track" role="progressbar" aria-valuenow="' + fillPct + '" aria-valuemin="0" aria-valuemax="100">' +
      '<div class="chem-xp-fill" style="width:' + fillPct + '%"></div></div>' +
      '<div class="chem-xp-meta"><span class="chem-streak" title="Daily streak">🔥 ' + (s.streak || 0) + '</span>' +
      (badges.length ? '<span class="chem-badge-count" title="Badges earned">🏅 ' + badges.length + '</span>' : '') +
      '</div></div>';
  }

  function renderDashboard() {
    const topics = CHEMISTRY_5070.topics;
    const prog = ChemistryProgress;
    const gam = ChemistryGamification.load();
    const lvl = ChemistryGamification.getLevel(gam.xp);
    const badges = ChemistryGamification.getBadges();

    const overall = prog.overallProgress();
    const chapterRows = topics.map(function (t) {
      const p = prog.topicProgress(t.id);
      const tp = prog.getTopic(t.id);
      const fillW = Math.max(p, p > 0 ? 3 : 0);
      return '<div class="chem-dash-chapter">' +
        '<div class="chem-dash-ch-head"><span class="chem-dash-ch-num">Ch ' + t.number + '</span><strong>' + escapeHtml(t.name) + '</strong><em>' + p + '%</em></div>' +
        '<div class="chem-dash-ch-bar" role="progressbar" aria-valuenow="' + p + '"><div class="chem-dash-ch-fill" style="width:' + fillW + '%"></div></div>' +
        '<div class="chem-dash-ch-stats">MCQ best: ' + (tp.mcqBest || 0) + '% · Attempts: ' + (tp.mcqAttempts || 0) + (tp.complete ? " · ✓ Complete" : "") + '</div></div>';
    }).join("");

    const badgeHtml = badges.map(function (b) {
      return '<div class="chem-badge' + (b.earned ? " is-earned" : "") + '" title="' + escapeHtml(b.desc) + '">' +
        '<span class="chem-badge-icon">' + b.icon + '</span><span class="chem-badge-name">' + escapeHtml(b.name) + '</span></div>';
    }).join("");

    const overallFill = Math.max(overall, overall > 0 ? 3 : 0);
    return '<div class="chem-dashboard">' +
      '<div class="chem-dash-overall">' +
      '<div class="chem-dash-overall-head"><span>Syllabus mastery</span><strong>' + overall + '%</strong></div>' +
      '<div class="chem-dash-overall-bar" role="progressbar" aria-valuenow="' + overall + '"><div class="chem-dash-overall-fill" style="width:' + overallFill + '%"></div></div>' +
      '</div>' +
      '<div class="chem-dash-hero">' +
      '<div class="chem-dash-hero-stat"><span class="chem-dash-big">' + lvl.current.icon + ' ' + lvl.current.name + '</span><small>' + gam.xp + ' XP total</small></div>' +
      '<div class="chem-dash-hero-stat"><span class="chem-dash-big">🔥 ' + (gam.streak || 0) + '</span><small>day streak</small></div>' +
      '<div class="chem-dash-hero-stat"><span class="chem-dash-big">' + gam.totalMcqCorrect + '</span><small>MCQs correct</small></div>' +
      '</div>' +
      '<section class="chem-dash-section"><h3>Chapter progress</h3><div class="chem-dash-chapters">' + chapterRows + '</div></section>' +
      '<section class="chem-dash-section"><h3>Badges</h3><div class="chem-badge-grid">' + badgeHtml + '</div></section></div>';
  }

  function renderRevisionHub() {
    const topics = CHEMISTRY_5070.topics;
    return '<div class="chem-revision-hub">' +
      '<h3>⚡ Quick Revision</h3>' +
      '<p>Jump straight into flashcards or a 10-question speed quiz for any chapter.</p>' +
      '<div class="chem-rev-grid">' +
      topics.map(function (t) {
        return '<div class="chem-rev-card">' +
          '<strong>Ch ' + t.number + ': ' + escapeHtml(t.name) + '</strong>' +
          '<div class="chem-rev-actions">' +
          '<button type="button" class="btn btn-sm btn-primary" data-chem-rev="flash" data-topic="' + t.id + '">Flashcards</button>' +
          '<button type="button" class="btn btn-sm btn-secondary" data-chem-rev="speed" data-topic="' + t.id + '">Speed quiz</button>' +
          '</div></div>';
      }).join("") +
      '</div></div>';
  }

  function renderGamesHub() {
    return '<div class="chem-games-page" id="chemGamesPage">' +
      '<p class="chem-games-pick">Pick a chapter first, then open the <strong>Games</strong> tab inside any chapter — or play global games below.</p>' +
      '<div id="chemGlobalGames"></div></div>';
  }

  const PT_GROUP_LABELS = ["I", "II", "III", "IV", "V", "VI", "VII", "0"];

  function ptGroupLabel(g) {
    return PT_GROUP_LABELS[g - 1] || String(g);
  }

  function renderPeriodicTableWidget() {
    const cells = [
      { s: "H", g: 1, p: 1 }, { s: "He", g: 8, p: 1 },
      { s: "Li", g: 1, p: 2 }, { s: "Be", g: 2, p: 2 }, { s: "B", g: 3, p: 2 }, { s: "C", g: 4, p: 2 },
      { s: "N", g: 5, p: 2 }, { s: "O", g: 6, p: 2 }, { s: "F", g: 7, p: 2 }, { s: "Ne", g: 8, p: 2 },
      { s: "Na", g: 1, p: 3 }, { s: "Mg", g: 2, p: 3 }, { s: "Al", g: 3, p: 3 }, { s: "Si", g: 4, p: 3 },
      { s: "P", g: 5, p: 3 }, { s: "S", g: 6, p: 3 }, { s: "Cl", g: 7, p: 3 }, { s: "Ar", g: 8, p: 3 },
      { s: "K", g: 1, p: 4 }, { s: "Ca", g: 2, p: 4 }, { s: "Br", g: 7, p: 4 }
    ];
    return '<div class="chem-ptable-wrap">' +
      '<h4 class="chem-diagram-title">O-Level Periodic Table (8 groups)</h4>' +
      '<div class="chem-ptable" id="chemPtable">' +
      cells.map(function (c) {
        return '<button type="button" class="chem-pt-cell" data-symbol="' + c.s + '" data-group="' + c.g + '" data-period="' + c.p + '" style="--g:' + c.g + ';--p:' + c.p + '">' + c.s + '</button>';
      }).join("") +
      '</div><p class="chem-pt-info" id="chemPtInfo">Hover an element — groups I–VII and 0 (noble gases).</p></div>';
  }

  function renderLabDiagram(type) {
    const diagrams = {
      filtration: '<svg class="chem-lab-svg" viewBox="0 0 200 120" aria-label="Filtration setup">' +
        '<rect x="70" y="10" width="60" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>' +
        '<polygon points="85,50 115,50 100,75" fill="none" stroke="currentColor" stroke-width="2"/>' +
        '<line x1="75" y1="25" x2="125" y2="25" stroke="currentColor" stroke-dasharray="4"/>' +
        '<text x="100" y="95" text-anchor="middle" font-size="10">Filtrate</text>' +
        '<text x="100" y="30" text-anchor="middle" font-size="9">Residue</text></svg>',
      distillation: '<svg class="chem-lab-svg" viewBox="0 0 220 130" aria-label="Distillation setup">' +
        '<ellipse cx="60" cy="95" rx="35" ry="15" fill="none" stroke="currentColor" stroke-width="2"/>' +
        '<path d="M60 60 L60 80" stroke="currentColor" stroke-width="2"/>' +
        '<path d="M60 60 L120 40 L160 55" fill="none" stroke="currentColor" stroke-width="2"/>' +
        '<path d="M160 55 L160 85 L140 95" fill="none" stroke="currentColor" stroke-width="2"/>' +
        '<ellipse cx="130" cy="100" rx="25" ry="12" fill="none" stroke="currentColor" stroke-width="2"/>' +
        '<text x="60" y="115" text-anchor="middle" font-size="9">Heat</text>' +
        '<text x="130" y="115" text-anchor="middle" font-size="9">Condensate</text></svg>',
      chromatography: '<svg class="chem-lab-svg" viewBox="0 0 120 140" aria-label="Chromatography">' +
        '<rect x="45" y="15" width="30" height="100" fill="none" stroke="currentColor" stroke-width="2"/>' +
        '<line x1="50" y1="35" x2="70" y2="55" stroke="#e74c3c" stroke-width="3"/>' +
        '<line x1="50" y1="35" x2="65" y2="75" stroke="#3498db" stroke-width="3"/>' +
        '<line x1="50" y1="35" x2="68" y2="95" stroke="#2ecc71" stroke-width="3"/>' +
        '<text x="60" y="130" text-anchor="middle" font-size="9">Solvent front ↑</text></svg>'
    };
    return '<div class="chem-lab-diagram"><h4 class="chem-diagram-title">Lab setup: ' + type + '</h4>' + (diagrams[type] || "") + '</div>';
  }

  function renderReactionFlow() {
    return '<div class="chem-flow-diagram">' +
      '<h4 class="chem-diagram-title">Reaction flow</h4>' +
      '<div class="chem-flow-steps">' +
      '<div class="chem-flow-step"><span>Reactants</span><small>Bonds break ↗ energy in</small></div>' +
      '<div class="chem-flow-arrow">→</div>' +
      '<div class="chem-flow-step chem-flow-step--peak"><span>Activation</span><small>Energy barrier</small></div>' +
      '<div class="chem-flow-arrow">→</div>' +
      '<div class="chem-flow-step"><span>Products</span><small>Bonds form ↘ energy out</small></div>' +
      '</div></div>';
  }

  function makeCollapsibleSections(root) {
    root.querySelectorAll(".bio-note-card--section").forEach(function (card, i) {
      const head = card.querySelector(".bio-note-card-head");
      const body = card.querySelector(".bio-note-card-body");
      if (!head || !body || card.dataset.chemCollapse) return;
      card.dataset.chemCollapse = "1";
      card.classList.add("chem-collapsible");
      if (i > 0) body.classList.add("chem-collapse-hidden");
      head.style.cursor = "pointer";
      head.setAttribute("role", "button");
      head.setAttribute("aria-expanded", i === 0 ? "true" : "false");
      head.addEventListener("click", function () {
        const open = body.classList.toggle("chem-collapse-hidden");
        head.setAttribute("aria-expanded", !open);
        card.classList.toggle("is-open", !open);
      });
      if (i === 0) card.classList.add("is-open");
      const quizBtn = document.createElement("button");
      quizBtn.type = "button";
      quizBtn.className = "btn btn-sm chem-section-quiz";
      quizBtn.textContent = "Quick quiz →";
      quizBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        const hubRoot = document.getElementById("chemAppRoot");
        if (!hubRoot) return;
        const topicId = document.querySelector(".bio-mark-complete")?.dataset.id;
        document.querySelector('[data-study-tab="mcq"]')?.click();
        if (typeof ChemistryGamification !== "undefined") showXpToast(5, "Section quiz started!");
      });
      head.appendChild(quizBtn);
    });
  }

  function injectTopicVisuals(topic, panel) {
    if (!panel) return;
    let extra = "";
    if (topic.id === "periodic-table") extra += renderPeriodicTableWidget();
    if (topic.id === "chemical-energetics") extra += renderReactionFlow();
    if (topic.id === "experimental-techniques") {
      extra += renderLabDiagram("filtration") + renderLabDiagram("distillation") + renderLabDiagram("chromatography");
    }
    if (extra) {
      const wrap = document.createElement("section");
      wrap.className = "chem-visual-section";
      wrap.innerHTML = extra;
      panel.insertBefore(wrap, panel.firstChild);
      bindPeriodicTable(wrap);
    }
  }

  function bindPeriodicTable(wrap) {
    const info = wrap.querySelector("#chemPtInfo");
    wrap.querySelectorAll(".chem-pt-cell").forEach(function (cell) {
      cell.addEventListener("mouseenter", function () {
        if (info) {
          const grp = ptGroupLabel(parseInt(cell.dataset.group, 10));
          info.textContent = cell.dataset.symbol + " — Group " + grp + ", Period " + cell.dataset.period;
        }
        cell.classList.add("is-hovered");
      });
      cell.addEventListener("mouseleave", function () { cell.classList.remove("is-hovered"); });
    });
  }

  function refreshDashboardIfVisible() {
    if (hubView !== "dashboard") return;
    const root = document.getElementById("chemAppRoot");
    if (!root) return;
    root.innerHTML = '<div class="chem-alt-view">' + renderDashboard() + "</div>";
  }

  function onGameComplete() {
    showXpToast(15, "Game round complete!");
    refreshProgressBars();
    refreshDashboardIfVisible();
  }

  function refreshProgressBars() {
    if (typeof ChemistryProgress === "undefined") return;
    const overall = ChemistryProgress.overallProgress();
    const fill = document.querySelector(".bio-progress-fill");
    const label = document.querySelector(".bio-progress-label strong");
    const fillW = Math.max(overall, overall > 0 ? 3 : 0);
    if (fill) fill.style.width = fillW + "%";
    if (label) label.textContent = overall + "%";
    const xpBar = document.querySelector(".chem-xp-bar");
    if (xpBar && typeof ChemistryGamification !== "undefined") {
      const parent = xpBar.parentNode;
      if (parent) {
        const fresh = document.createElement("div");
        fresh.innerHTML = renderXpBar();
        const newBar = fresh.firstChild;
        if (newBar) parent.replaceChild(newBar, xpBar);
      }
    }
    const heroPct = document.querySelector(".bio-chapter-hero-pct");
    const heroFill = document.querySelector(".bio-chapter-hero-bar-fill");
    const topicId = document.querySelector(".bio-mark-complete")?.dataset.id;
    if (topicId && heroPct && heroFill) {
      const p = ChemistryProgress.topicProgress(topicId);
      heroPct.textContent = p + "% complete";
      heroFill.style.width = Math.max(p, p > 0 ? 2 : 0) + "%";
    }
    document.querySelectorAll(".bio-chapter-pct").forEach(function (el) {
      const btn = el.closest(".bio-chapter-link");
      if (btn && btn.dataset.chapter) {
        el.textContent = ChemistryProgress.topicProgress(btn.dataset.chapter) + "%";
      }
    });
  }

  function showXpToast(amount, message) {
    const existing = document.querySelector(".chem-xp-toast");
    if (existing) existing.remove();
    const toast = document.createElement("div");
    toast.className = "chem-xp-toast";
    toast.innerHTML = '<span class="chem-xp-toast-xp">+' + amount + ' XP</span><span>' + (message || "Nice work!") + '</span>';
    document.body.appendChild(toast);
    requestAnimationFrame(function () { toast.classList.add("is-visible"); });
    setTimeout(function () { toast.classList.remove("is-visible"); setTimeout(function () { toast.remove(); }, 300); }, 2200);
  }

  function showMcqPopup(ok, explain) {
    const popup = document.createElement("div");
    popup.className = "chem-mcq-popup" + (ok ? " chem-mcq-popup--ok" : " chem-mcq-popup--bad");
    popup.innerHTML = '<div class="chem-mcq-popup-inner">' +
      '<span class="chem-mcq-popup-icon">' + (ok ? "✓" : "✗") + '</span>' +
      '<p>' + escapeHtml(explain || (ok ? "Correct!" : "Try again next time.")) + '</p>' +
      '<button type="button" class="chem-mcq-popup-close">Got it</button></div>';
    document.body.appendChild(popup);
    requestAnimationFrame(function () { popup.classList.add("is-visible"); });
    function close() { popup.classList.remove("is-visible"); setTimeout(function () { popup.remove(); }, 200); }
    popup.querySelector(".chem-mcq-popup-close").addEventListener("click", close);
    setTimeout(close, 4000);
  }

  function enhanceMcqFeedback(fbEl, ok, explain, examMode) {
    if (!fbEl) return;
    if (examMode) {
      fbEl.classList.remove("hidden");
      fbEl.classList.add(ok ? "correct-fb" : "wrong-fb");
      fbEl.innerHTML = ok ? "✓ Correct" : "✗ Incorrect";
      return;
    }
    fbEl.classList.remove("hidden", "correct-fb", "wrong-fb");
    fbEl.classList.add(ok ? "correct-fb" : "wrong-fb");
    fbEl.innerHTML = (ok ? "✓ " : "✗ ") + escapeHtml(explain || "");
    showMcqPopup(ok, explain);
  }

  function bindHubNav(hub) {
    const nav = document.querySelector(".chem-hub-nav");
    if (!nav || nav.dataset.chemBound) return;
    nav.dataset.chemBound = "1";
    nav.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-chem-view]");
      if (!btn) return;
      hubView = btn.dataset.chemView;
      if (hubView === "topics") {
        hub.render(document.getElementById("chemistryHubRoot"));
      } else {
        const root = document.getElementById("chemAppRoot");
        if (!root) return;
        let html = "";
        if (hubView === "dashboard") {
          html = renderDashboard();
          requestAnimationFrame(refreshProgressBars);
        } else if (hubView === "revision") html = renderRevisionHub();
        else if (hubView === "games") html = renderGamesHub();
        root.innerHTML = '<div class="chem-alt-view">' + html + "</div>";
        bindAltView(hub);
        nav.querySelectorAll("[data-chem-view]").forEach(function (b) {
          b.classList.toggle("is-active", b.dataset.chemView === hubView);
        });
      }
    });
  }

  function bindAltView(hub) {
    document.querySelectorAll("[data-chem-rev]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const topicId = btn.dataset.topic;
        const mode = btn.dataset.chemRev;
        hubView = "topics";
        document.querySelectorAll("[data-chem-view]").forEach(function (b) {
          b.classList.toggle("is-active", b.dataset.chemView === "topics");
        });
        if (mode === "flash") hub.openStudy(topicId, "flashcards");
        else {
          hub.openStudy(topicId, "games");
          setTimeout(function () {
            const stage = document.getElementById("chemGameStage");
            const topic = CHEMISTRY_5070.topics.find(function (t) { return t.id === topicId; });
            if (stage && topic && typeof ChemistryGames !== "undefined") {
              ChemistryGames.renderSpeedMcq(stage, topic, ChemistryMcqPool);
            }
          }, 100);
        }
      });
    });
    const global = document.getElementById("chemGlobalGames");
    if (global && typeof ChemistryGames !== "undefined") {
      const dummyTopic = CHEMISTRY_5070.topics[0];
      ChemistryGames.renderGameHub(global, dummyTopic, ChemistryMcqPool);
    }
  }

  function bindStudyModes(hub) {
    const bar = document.querySelector(".chem-study-modes");
    if (!bar || bar.dataset.chemBound) return;
    bar.dataset.chemBound = "1";
    bar.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-chem-mode]");
      if (!btn) return;
      studyMode = btn.dataset.chemMode;
      bar.querySelectorAll("[data-chem-mode]").forEach(function (b) {
        b.classList.toggle("is-active", b.dataset.chemMode === studyMode);
      });
      const topicId = hub.getActiveTopicId ? hub.getActiveTopicId() : null;
      if (!topicId) return;
      if (studyMode === "revision") hub.openStudy(topicId, "flashcards");
      else if (studyMode === "mistakes" || studyMode === "exam") hub.openStudy(topicId, "mcq");
    });
  }

  function getLmsConfig() {
    return {
      collapsibleNotes: true,
      extraTabs: [
        { id: "games", label: "Games", icon: "🎮", hint: "Mini-games for this chapter" }
      ],
      renderShellExtra: function () {
        ChemistryGamification.recordDailyVisit();
        return renderHubNav(hubView) + renderXpBar();
      },
      renderStudyToolbarExtra: function () {
        return renderStudyModeBar();
      },
      renderExtraPanel: function (tab, topic) {
        if (tab !== "games") return "";
        return '<div id="chemGameStage" class="chem-game-stage-wrap"></div>';
      },
      onAfterRender: function (ctx) {
        const panel = document.querySelector(".bio-study-panel, .lms-study-panel");
        if (panel && ctx.topic) {
          makeCollapsibleSections(panel);
          injectTopicVisuals(ctx.topic, panel);
          panel.querySelectorAll(".bio-note-lead, .bio-term-card p, .bio-example-card p").forEach(function (el) {
            if (!el.dataset.chemHl) {
              el.dataset.chemHl = "1";
              el.innerHTML = highlightKeywords(el.textContent);
            }
          });
        }
        if (ctx.tab === "games" && ctx.topic) {
          const stage = document.getElementById("chemGameStage");
          if (stage) ChemistryGames.renderGameHub(stage, ctx.topic, ChemistryMcqPool);
        }
        bindHubNav(ctx.hub);
        bindStudyModes(ctx.hub);
        refreshProgressBars();
      },
      onMcqAnswer: function (ok, question, topicId) {
        if (ok) {
          ChemistryGamification.awardMcqCorrect(topicId);
          showXpToast(10, "Correct answer!");
        } else {
          ChemistryGamification.awardMcqWrong();
          ChemistryGamification.recordMistake(topicId, question);
        }
        refreshProgressBars();
      },
      onMcqComplete: function (score, total, topicId) {
        const r = ChemistryGamification.awardMcqComplete(score, total, topicId);
        showXpToast(r.bonus, "Chapter quiz complete! (" + r.pct + "%)");
        refreshProgressBars();
      },
      getMcqDeck: function (topicId, defaultDeck) {
        if (studyMode === "mistakes") {
          const mistakes = ChemistryGamification.getMistakes(topicId);
          if (mistakes.length) return ChemistryMcqPool.shuffle(mistakes);
        }
        return defaultDeck;
      },
      examMode: function () { return studyMode === "exam"; },
      enhanceMcqFeedback: enhanceMcqFeedback,
      mcqTimerSeconds: function () { return studyMode === "exam" ? 90 : 0; }
    };
  }

  function init() {
    hubView = "topics";
    if (typeof ChemistryGamification !== "undefined") ChemistryGamification.recordDailyVisit();
  }

  return {
    init, getLmsConfig, renderDashboard, renderHubNav, renderXpBar, showXpToast, onGameComplete,
    refreshProgressBars, studyMode: function () { return studyMode; }
  };
})();

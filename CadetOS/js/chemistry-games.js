/**
 * Chemistry 5070 — lightweight mini-games (vanilla JS)
 */
const ChemistryGames = (function () {
  "use strict";

  var lastMatchIdx = -1;
  var lastGasIdx = -1;
  var lastElementIdx = -1;

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickRandom(pool, lastIdx) {
    if (pool.length <= 1) return { item: pool[0], idx: 0 };
    let idx;
    do { idx = Math.floor(Math.random() * pool.length); } while (idx === lastIdx && pool.length > 1);
    return { item: pool[idx], idx: idx };
  }

  const GROUP_LABELS = ["I", "II", "III", "IV", "V", "VI", "VII", "0"];
  const GROUP_COUNT = 8;
  const PERIOD_COUNT = 4;

  function groupDisplayName(g) {
    return GROUP_LABELS[g - 1] || String(g);
  }

  function gameActionsHtml() {
    return '<div class="chem-game-actions hidden">' +
      '<button type="button" class="btn btn-sm btn-secondary chem-game-retry">Try again</button>' +
      '<button type="button" class="btn btn-sm btn-primary chem-game-next">Next question →</button></div>';
  }

  function revealGameActions(container) {
    const actions = container.querySelector(".chem-game-actions");
    if (actions) actions.classList.remove("hidden");
  }

  function bindGameActions(container, onRetry, onNext) {
    container.querySelector(".chem-game-retry")?.addEventListener("click", onRetry);
    container.querySelector(".chem-game-next")?.addEventListener("click", onNext);
  }

  function afterGameWin() {
    if (typeof ChemistryGamification !== "undefined") ChemistryGamification.awardGameComplete();
    if (typeof ChemistryLMS !== "undefined" && ChemistryLMS.onGameComplete) ChemistryLMS.onGameComplete();
  }

  const REACTION_PAIRS = [
    { reactants: ["Mg", "O₂"], product: "MgO", label: "Magnesium + Oxygen", equation: "2Mg + O₂ → 2MgO" },
    { reactants: ["Zn", "HCl"], product: "ZnCl₂ + H₂", label: "Zinc + Hydrochloric acid", equation: "Zn + 2HCl → ZnCl₂ + H₂" },
    { reactants: ["HCl", "NaOH"], product: "NaCl + H₂O", label: "Neutralisation", equation: "HCl + NaOH → NaCl + H₂O" },
    { reactants: ["CaCO₃", "HCl"], product: "CaCl₂ + H₂O + CO₂", label: "Acid + Carbonate", equation: "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂" },
    { reactants: ["CH₄", "O₂"], product: "CO₂ + H₂O", label: "Methane combustion", equation: "CH₄ + 2O₂ → CO₂ + 2H₂O" },
    { reactants: ["CuO", "H₂SO₄"], product: "CuSO₄ + H₂O", label: "Acid + Copper oxide", equation: "CuO + H₂SO₄ → CuSO₄ + H₂O" },
    { reactants: ["Na", "H₂O"], product: "NaOH + H₂", label: "Sodium + Water", equation: "2Na + 2H₂O → 2NaOH + H₂" },
    { reactants: ["Fe", "O₂"], product: "Fe₂O₃", label: "Iron + Oxygen (rusting)", equation: "4Fe + 3O₂ → 2Fe₂O₃" },
    { reactants: ["H₂", "O₂"], product: "H₂O", label: "Hydrogen combustion", equation: "2H₂ + O₂ → 2H₂O" },
    { reactants: ["AgNO₃", "NaCl"], product: "AgCl + NaNO₃", label: "Precipitation", equation: "AgNO₃ + NaCl → AgCl + NaNO₃" },
    { reactants: ["NH₃", "HCl"], product: "NH₄Cl", label: "Ammonia + Acid", equation: "NH₃ + HCl → NH₄Cl" },
    { reactants: ["C₂H₄", "Br₂"], product: "C₂H₄Br₂", label: "Ethene + Bromine", equation: "C₂H₄ + Br₂ → C₂H₄Br₂" },
    { reactants: ["CaCO₃"], product: "CaO + CO₂", label: "Thermal decomposition", equation: "CaCO₃ → CaO + CO₂" },
    { reactants: ["Zn", "CuSO₄"], product: "ZnSO₄ + Cu", label: "Displacement", equation: "Zn + CuSO₄ → ZnSO₄ + Cu" },
    { reactants: ["H₂SO₄", "NaOH"], product: "Na₂SO₄ + H₂O", label: "Acid + Alkali", equation: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O" },
    { reactants: ["C₆H₁₂O₆", "O₂"], product: "CO₂ + H₂O", label: "Respiration", equation: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O" },
    { reactants: ["Na₂CO₃", "HCl"], product: "NaCl + H₂O + CO₂", label: "Sodium carbonate + acid", equation: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂" },
    { reactants: ["Mg", "HCl"], product: "MgCl₂ + H₂", label: "Magnesium + acid", equation: "Mg + 2HCl → MgCl₂ + H₂" },
    { reactants: ["Fe", "CuSO₄"], product: "FeSO₄ + Cu", label: "Iron displacement", equation: "Fe + CuSO₄ → FeSO₄ + Cu" },
    { reactants: ["NH₄Cl", "NaOH"], product: "NaCl + NH₃ + H₂O", label: "Ammonium salt + alkali", equation: "NH₄Cl + NaOH → NaCl + NH₃ + H₂O" },
    { reactants: ["C₂H₅OH", "O₂"], product: "CO₂ + H₂O", label: "Ethanol combustion", equation: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O" }
  ];

  const GAS_CLUES = [
    { gas: "Hydrogen", clue: "A burning splint gives a loud pop sound.", options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Ammonia"] },
    { gas: "Oxygen", clue: "A glowing splint relights and burns brightly.", options: ["Nitrogen", "Oxygen", "Chlorine", "Helium"] },
    { gas: "Carbon dioxide", clue: "Bubble through limewater — it turns milky/cloudy.", options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Ammonia"] },
    { gas: "Ammonia", clue: "Damp red litmus paper turns blue.", options: ["Chlorine", "Ammonia", "Hydrogen", "Argon"] },
    { gas: "Chlorine", clue: "Bleaches damp litmus paper white; choking smell.", options: ["Oxygen", "Chlorine", "Carbon dioxide", "Nitrogen"] },
    { gas: "Hydrogen", clue: "Produced when zinc reacts with dilute acid.", options: ["Hydrogen", "Oxygen", "Chlorine", "Nitrogen"] },
    { gas: "Carbon dioxide", clue: "Released when an acid reacts with a carbonate.", options: ["Hydrogen", "Carbon dioxide", "Ammonia", "Oxygen"] },
    { gas: "Ammonia", clue: "Released when ammonium ions react with NaOH and heat.", options: ["Ammonia", "Hydrogen", "Oxygen", "Chlorine"] },
    { gas: "Oxygen", clue: "Needed for combustion; relights a glowing splint.", options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Methane"] },
    { gas: "Chlorine", clue: "Green-yellow gas; used to disinfect water.", options: ["Chlorine", "Helium", "Hydrogen", "Argon"] },
    { gas: "Carbon dioxide", clue: "Produced during complete combustion of fuels.", options: ["Nitrogen", "Carbon dioxide", "Hydrogen", "Ammonia"] },
    { gas: "Hydrogen", clue: "Lightest gas; used in fuel cells.", options: ["Hydrogen", "Oxygen", "Argon", "CO₂"] },
    { gas: "Nitrogen", clue: "About 78% of air; unreactive; no effect on litmus.", options: ["Nitrogen", "Oxygen", "Ammonia", "Chlorine"] },
    { gas: "Oxygen", clue: "Collected by downward displacement of water in the lab.", options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Ammonia"] },
    { gas: "Carbon dioxide", clue: "Heavier than air; puts out a burning splint.", options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Ammonia"] },
    { gas: "Ammonia", clue: "Alkaline gas; turns damp red litmus blue.", options: ["Ammonia", "Chlorine", "Hydrogen", "Nitrogen"] },
    { gas: "Chlorine", clue: "Test with damp blue litmus — bleaches white.", options: ["Chlorine", "Oxygen", "Carbon dioxide", "Helium"] }
  ];

  const ELEMENTS = [
    { symbol: "H", name: "Hydrogen", group: 1, period: 1 },
    { symbol: "He", name: "Helium", group: 8, period: 1 },
    { symbol: "Li", name: "Lithium", group: 1, period: 2 },
    { symbol: "Be", name: "Beryllium", group: 2, period: 2 },
    { symbol: "B", name: "Boron", group: 3, period: 2 },
    { symbol: "C", name: "Carbon", group: 4, period: 2 },
    { symbol: "N", name: "Nitrogen", group: 5, period: 2 },
    { symbol: "O", name: "Oxygen", group: 6, period: 2 },
    { symbol: "F", name: "Fluorine", group: 7, period: 2 },
    { symbol: "Ne", name: "Neon", group: 8, period: 2 },
    { symbol: "Na", name: "Sodium", group: 1, period: 3 },
    { symbol: "Mg", name: "Magnesium", group: 2, period: 3 },
    { symbol: "Al", name: "Aluminium", group: 3, period: 3 },
    { symbol: "Si", name: "Silicon", group: 4, period: 3 },
    { symbol: "P", name: "Phosphorus", group: 5, period: 3 },
    { symbol: "S", name: "Sulphur", group: 6, period: 3 },
    { symbol: "Cl", name: "Chlorine", group: 7, period: 3 },
    { symbol: "Ar", name: "Argon", group: 8, period: 3 },
    { symbol: "K", name: "Potassium", group: 1, period: 4 },
    { symbol: "Ca", name: "Calcium", group: 2, period: 4 },
    { symbol: "Br", name: "Bromine", group: 7, period: 4 }
  ];

  function renderMatchReaction(container, onComplete, replayPair) {
    const pick = replayPair ? { item: replayPair, idx: lastMatchIdx } : pickRandom(REACTION_PAIRS, lastMatchIdx);
    if (!replayPair) lastMatchIdx = pick.idx;
    const pair = pick.item;
    const wrongProducts = shuffle(REACTION_PAIRS.filter(function (p) { return p.product !== pair.product; })
      .map(function (p) { return p.product; })).slice(0, 3);
    const targets = shuffle([pair.product].concat(wrongProducts));
    const reactantsLabel = pair.reactants.join(" + ");

    container.innerHTML =
      '<div class="chem-game chem-game--match">' +
      '<h4 class="chem-game-title">⚡ Match the Reaction</h4>' +
      '<p class="chem-game-desc">Drag the <strong>combined reactants</strong> onto the box with the correct products. <span class="chem-game-round">' + REACTION_PAIRS.length + ' reactions in the pool</span></p>' +
      '<div class="chem-match-board">' +
      '<div class="chem-match-reactants" id="chemMatchReactants">' +
      '<p class="chem-match-drag-label">Reactants (drag together as one)</p>' +
      '<span class="chem-drag-item chem-drag-item--combined" id="chemMatchDrag" draggable="true" data-answer="' + escapeHtml(pair.product) + '">' +
      escapeHtml(reactantsLabel) + ' <span class="chem-match-arrow-inline">→</span> <span class="chem-match-q">?</span></span>' +
      '</div>' +
      '<div class="chem-match-targets">' +
      targets.map(function (t) {
        return '<div class="chem-drop-zone" data-answer="' + escapeHtml(t) + '">' +
          '<span class="chem-drop-product">' + escapeHtml(t) + '</span>' +
          '<span class="chem-drop-hint">↓ Drop reactants here</span></div>';
      }).join("") +
      '</div></div>' +
      '<div class="chem-game-feedback hidden" id="chemMatchFb"></div>' +
      gameActionsHtml() + '</div>';

    var answered = false;
    const dragEl = container.querySelector("#chemMatchDrag");

    if (dragEl) {
      dragEl.addEventListener("dragstart", function (e) {
        if (answered) return;
        e.dataTransfer.setData("text/plain", pair.product);
        dragEl.classList.add("is-dragging");
      });
      dragEl.addEventListener("dragend", function () { dragEl.classList.remove("is-dragging"); });
    }

    container.querySelectorAll(".chem-drop-zone").forEach(function (zone) {
      zone.addEventListener("dragover", function (e) { e.preventDefault(); if (!answered) zone.classList.add("is-over"); });
      zone.addEventListener("dragleave", function () { zone.classList.remove("is-over"); });
      zone.addEventListener("drop", function (e) {
        e.preventDefault();
        if (answered) return;
        zone.classList.remove("is-over");
        const fb = container.querySelector("#chemMatchFb");
        const ok = zone.dataset.answer === pair.product;
        fb.classList.remove("hidden", "chem-game-fb--ok", "chem-game-fb--bad");
        answered = true;
        if (dragEl) {
          dragEl.draggable = false;
          dragEl.classList.add("is-placed");
        }
        container.querySelectorAll(".chem-drop-zone").forEach(function (z) {
          if (z.dataset.answer === pair.product) z.classList.add("is-correct");
          else z.classList.add("is-wrong-zone");
        });
        if (ok) {
          fb.classList.add("chem-game-fb--ok");
          fb.innerHTML = "<strong>Correct!</strong> " + escapeHtml(pair.equation);
          afterGameWin();
          if (onComplete) onComplete(true);
        } else {
          fb.classList.add("chem-game-fb--bad");
          fb.innerHTML = "<strong>Not quite.</strong> Answer: " + escapeHtml(pair.equation);
          if (onComplete) onComplete(false);
        }
        revealGameActions(container);
      });
    });

    bindGameActions(container,
      function () { renderMatchReaction(container, onComplete, pair); },
      function () { renderMatchReaction(container, onComplete); }
    );
  }

  function renderIdentifyGas(container, onComplete, replayItem) {
    const pick = replayItem ? { item: replayItem, idx: lastGasIdx } : pickRandom(GAS_CLUES, lastGasIdx);
    if (!replayItem) lastGasIdx = pick.idx;
    const item = pick.item;
    const opts = shuffle(item.options);

    container.innerHTML =
      '<div class="chem-game chem-game--gas">' +
      '<h4 class="chem-game-title">🧪 Identify the Gas</h4>' +
      '<p class="chem-game-desc">Read the test result and pick the gas. <span class="chem-game-round">' + GAS_CLUES.length + ' clues available</span></p>' +
      '<div class="chem-gas-clue"><span class="chem-gas-clue-icon">🔬</span><p>' + escapeHtml(item.clue) + '</p></div>' +
      '<div class="chem-gas-options">' +
      opts.map(function (o) {
        return '<button type="button" class="chem-gas-btn" data-gas="' + escapeHtml(o) + '">' + escapeHtml(o) + '</button>';
      }).join("") +
      '</div><div class="chem-game-feedback hidden" id="chemGasFb"></div>' +
      gameActionsHtml() + '</div>';

    container.querySelectorAll(".chem-gas-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const fb = container.querySelector("#chemGasFb");
        const ok = btn.dataset.gas === item.gas;
        fb.classList.remove("hidden", "chem-game-fb--ok", "chem-game-fb--bad");
        container.querySelectorAll(".chem-gas-btn").forEach(function (b) { b.disabled = true; });
        if (ok) {
          btn.classList.add("is-correct");
          fb.classList.add("chem-game-fb--ok");
          fb.innerHTML = "<strong>Correct!</strong> It's " + escapeHtml(item.gas) + ".";
          afterGameWin();
          if (onComplete) onComplete(true);
        } else {
          btn.classList.add("is-wrong");
          container.querySelectorAll(".chem-gas-btn").forEach(function (b) {
            if (b.dataset.gas === item.gas) b.classList.add("is-correct");
          });
          fb.classList.add("chem-game-fb--bad");
          fb.innerHTML = "<strong>Answer:</strong> " + escapeHtml(item.gas) + ".";
          if (onComplete) onComplete(false);
        }
        revealGameActions(container);
      });
    });

    bindGameActions(container,
      function () { renderIdentifyGas(container, onComplete, item); },
      function () { renderIdentifyGas(container, onComplete); }
    );
  }

  function renderElementBuilder(container, onComplete, replayEl) {
    const pick = replayEl ? { item: replayEl, idx: lastElementIdx } : pickRandom(ELEMENTS, lastElementIdx);
    if (!replayEl) lastElementIdx = pick.idx;
    const el = pick.item;

    var gridCells = "";
    var colLabels = '<span class="chem-eb-col-l chem-eb-col-l--corner"></span>';
    var g, p;
    for (g = 1; g <= GROUP_COUNT; g++) {
      colLabels += '<span class="chem-eb-col-l" style="grid-column:' + (g + 1) + '">' + groupDisplayName(g) + '</span>';
    }
    for (p = 1; p <= PERIOD_COUNT; p++) {
      gridCells += '<span class="chem-eb-row-l" style="grid-column:1;grid-row:' + p + '">P' + p + '</span>';
      for (g = 1; g <= GROUP_COUNT; g++) {
        gridCells += '<button type="button" class="chem-eb-cell" data-g="' + g + '" data-p="' + p + '" style="grid-column:' + (g + 1) + ';grid-row:' + p + '" title="Group ' + groupDisplayName(g) + ', Period ' + p + '"><span class="chem-eb-cell-dot"></span></button>';
      }
    }

    container.innerHTML =
      '<div class="chem-game chem-game--element">' +
      '<h4 class="chem-game-title">⚛️ Element Builder</h4>' +
      '<p class="chem-game-desc">O-Level table has <strong>8 groups</strong> (I–VII and 0). Tap where <strong class="chem-eb-target">' + escapeHtml(el.name) + ' (' + escapeHtml(el.symbol) + ')</strong> belongs.</p>' +
      '<div class="chem-eb-legend"><span>Groups I → VII, then 0</span><span>Periods 1–4 ↓</span></div>' +
      '<div class="chem-eb-grid-wrap">' +
      '<div class="chem-eb-col-labels">' + colLabels + '</div>' +
      '<div class="chem-eb-grid" id="chemEbGrid">' + gridCells + '</div></div>' +
      '<p class="chem-eb-hint" id="chemEbHint">Tap the correct group and period.</p>' +
      '<div class="chem-game-feedback hidden" id="chemElementFb"></div>' +
      gameActionsHtml() + '</div>';

    var answered = false;
    container.querySelectorAll(".chem-eb-cell").forEach(function (cell) {
      cell.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        const g = parseInt(cell.dataset.g, 10);
        const p = parseInt(cell.dataset.p, 10);
        const ok = g === el.group && p === el.period;
        const fb = container.querySelector("#chemElementFb");
        fb.classList.remove("hidden", "chem-game-fb--ok", "chem-game-fb--bad");
        cell.classList.add(ok ? "is-correct" : "is-wrong");
        if (!ok) {
          container.querySelectorAll(".chem-eb-cell").forEach(function (c) {
            if (parseInt(c.dataset.g, 10) === el.group && parseInt(c.dataset.p, 10) === el.period) c.classList.add("is-answer");
          });
        }
        const grp = groupDisplayName(el.group);
        if (ok) {
          fb.classList.add("chem-game-fb--ok");
          fb.innerHTML = "<strong>Perfect!</strong> " + escapeHtml(el.name) + " is Group " + grp + ", Period " + el.period + ".";
          afterGameWin();
          if (onComplete) onComplete(true);
        } else {
          fb.classList.add("chem-game-fb--bad");
          fb.innerHTML = "<strong>Close!</strong> " + escapeHtml(el.name) + " is Group " + grp + ", Period " + el.period + ".";
          if (onComplete) onComplete(false);
        }
        revealGameActions(container);
      });
    });

    bindGameActions(container,
      function () { renderElementBuilder(container, onComplete, el); },
      function () { renderElementBuilder(container, onComplete); }
    );
  }

  function renderSpeedMcq(container, topic, pool, onComplete) {
    const questions = shuffle(pool.getMcqs(topic.id, 15)).slice(0, 10);
    let idx = 0;
    let score = 0;
    let timeLeft = 60;
    let timer = null;

    function renderQ() {
      if (idx >= questions.length || timeLeft <= 0) {
        clearInterval(timer);
        container.innerHTML =
          '<div class="chem-game chem-game--speed">' +
          '<h4 class="chem-game-title">🧠 Speed MCQ Challenge</h4>' +
          '<div class="chem-speed-result"><span class="chem-speed-score">' + score + '/' + idx + '</span>' +
          '<p>Time\'s up! Great sprint.</p>' +
          '<button type="button" class="btn btn-primary" id="chemSpeedRetry">Play again</button></div></div>';
        if (score >= 5) afterGameWin();
        container.querySelector("#chemSpeedRetry")?.addEventListener("click", function () {
          renderSpeedMcq(container, topic, pool, onComplete);
        });
        if (onComplete) onComplete(score, idx);
        return;
      }
      const m = questions[idx];
      const shuffled = pool.shuffle(m.options.map(function (o, i) { return { text: o, i: i }; }));
      const correct = shuffled.findIndex(function (x) { return x.i === m.answer; });

      container.innerHTML =
        '<div class="chem-game chem-game--speed">' +
        '<div class="chem-speed-header"><h4 class="chem-game-title">🧠 Speed MCQ</h4>' +
        '<span class="chem-speed-timer" id="chemSpeedTimer">' + timeLeft + 's</span>' +
        '<span class="chem-speed-meta">Q' + (idx + 1) + '/' + questions.length + ' · Score ' + score + '</span></div>' +
        '<p class="chem-speed-q">' + escapeHtml(m.q) + '</p>' +
        '<div class="chem-speed-opts">' +
        shuffled.map(function (item, di) {
          return '<button type="button" class="chem-speed-opt" data-i="' + di + '">' + escapeHtml(item.text) + '</button>';
        }).join("") +
        '</div>' +
        '<div class="chem-game-actions hidden" id="chemSpeedNextWrap">' +
        '<button type="button" class="btn btn-sm btn-primary chem-speed-next">Next question →</button></div></div>';

      var qAnswered = false;
      container.querySelectorAll(".chem-speed-opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (qAnswered) return;
          qAnswered = true;
          if (parseInt(btn.dataset.i, 10) === correct) {
            score++;
            btn.classList.add("is-correct");
          } else {
            btn.classList.add("is-wrong");
            container.querySelectorAll(".chem-speed-opt").forEach(function (b) {
              if (parseInt(b.dataset.i, 10) === correct) b.classList.add("is-correct");
            });
          }
          container.querySelectorAll(".chem-speed-opt").forEach(function (b) { b.disabled = true; });
          const nextWrap = container.querySelector("#chemSpeedNextWrap");
          if (nextWrap) nextWrap.classList.remove("hidden");
        });
      });
      container.querySelector(".chem-speed-next")?.addEventListener("click", function () {
        idx++;
        renderQ();
      });
    }

    timer = setInterval(function () {
      timeLeft--;
      const t = container.querySelector("#chemSpeedTimer");
      if (t) t.textContent = timeLeft + "s";
      if (timeLeft <= 0) renderQ();
    }, 1000);
    renderQ();
  }

  function renderGameHub(container, topic, pool) {
    container.innerHTML =
      '<div class="chem-games-hub">' +
      '<h3 class="chem-games-hub-title">🎮 Chemistry Mini-Games</h3>' +
      '<p class="chem-games-hub-desc">Learn by playing — each correct round earns XP!</p>' +
      '<div class="chem-games-grid">' +
      '<button type="button" class="chem-game-card" data-game="match"><span class="chem-game-card-icon">⚡</span><strong>Match the Reaction</strong><small>' + REACTION_PAIRS.length + ' reactions · drag & drop</small></button>' +
      '<button type="button" class="chem-game-card" data-game="gas"><span class="chem-game-card-icon">🧪</span><strong>Identify the Gas</strong><small>' + GAS_CLUES.length + ' test clues</small></button>' +
      '<button type="button" class="chem-game-card" data-game="element"><span class="chem-game-card-icon">⚛️</span><strong>Element Builder</strong><small>8 groups · ' + ELEMENTS.length + ' elements</small></button>' +
      '<button type="button" class="chem-game-card" data-game="speed"><span class="chem-game-card-icon">🧠</span><strong>Speed MCQ</strong><small>60-second challenge</small></button>' +
      '</div><div class="chem-game-stage" id="chemGameStage"></div>' +
      '<button type="button" class="btn btn-sm btn-secondary hidden" id="chemGameBack">← All games</button></div>';

    const stage = container.querySelector("#chemGameStage");
    const back = container.querySelector("#chemGameBack");

    container.querySelectorAll(".chem-game-card").forEach(function (card) {
      card.addEventListener("click", function () {
        back.classList.remove("hidden");
        container.querySelector(".chem-games-grid").classList.add("hidden");
        const game = card.dataset.game;
        if (game === "match") renderMatchReaction(stage);
        else if (game === "gas") renderIdentifyGas(stage);
        else if (game === "element") renderElementBuilder(stage);
        else if (game === "speed") renderSpeedMcq(stage, topic, pool);
      });
    });
    back.addEventListener("click", function () {
      back.classList.add("hidden");
      stage.innerHTML = "";
      container.querySelector(".chem-games-grid")?.classList.remove("hidden");
      renderGameHub(container, topic, pool);
    });
  }

  return {
    renderGameHub, renderMatchReaction, renderIdentifyGas, renderElementBuilder, renderSpeedMcq
  };
})();

/**
 * CADO — Mock past paper generator (book-style UI)
 */
const PastPaperGenerator = (function () {
  "use strict";

  let paperDeck = [];
  let paperIndex = 0;
  let paperScore = 0;
  let paperAnswered = false;
  let timerId = null;
  let secondsLeft = 0;

  const PAPER_SUBJECTS = [
    { id: "biology", label: "Biology 5090", available: true },
    { id: "chemistry", label: "Chemistry 5070", available: true },
    { id: "physics", label: "Physics 5054", available: true },
    { id: "maths", label: "Mathematics 4024", available: false },
    { id: "english", label: "English 1123", available: false }
  ];

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

  function collectBiologyMcqs(difficulty) {
    if (typeof BIOLOGY_5090 === "undefined" || typeof BiologyMcqPool === "undefined") return [];
    const all = [];
    BIOLOGY_5090.topics.forEach(function (t) {
      BiologyMcqPool.getMcqs(t.id, 40).forEach(function (m) {
        all.push(Object.assign({}, m, { topicName: t.name, topicNum: t.number }));
      });
    });
    return filterDifficulty(all, difficulty);
  }

  function collectSubjectMcqs(subjectId, difficulty) {
    if (typeof CADETOS_MCQS === "undefined" || !CADETOS_MCQS[subjectId]) return [];
    const all = (CADETOS_MCQS[subjectId] || []).map(function (m, i) {
      return Object.assign({}, m, { topicName: "Topic " + (Math.floor(i / 3) + 1), topicNum: Math.floor(i / 3) + 1 });
    });
    return filterDifficulty(all, difficulty);
  }

  function filterDifficulty(all, difficulty) {
    let filtered = all;
    if (difficulty === "easy") {
      filtered = all.filter(function (_, i) { return i % 3 !== 2; });
    } else if (difficulty === "hard") {
      filtered = all.filter(function (m) { return (m.q || "").length > 55; });
    }
    if (filtered.length < 8) filtered = all;
    return shuffle(filtered);
  }

  function collectMcqs(subjectId, difficulty) {
    if (subjectId === "biology") return collectBiologyMcqs(difficulty);
    return collectSubjectMcqs(subjectId, difficulty);
  }

  function stopTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
  }

  function startTimer(minutes) {
    stopTimer();
    if (!minutes) return;
    secondsLeft = minutes * 60;
    const el = document.getElementById("ppTimer");
    if (!el) return;
    el.classList.remove("hidden");
    function tick() {
      const m = Math.floor(secondsLeft / 60);
      const s = secondsLeft % 60;
      el.textContent = "Time: " + m + ":" + (s < 10 ? "0" : "") + s;
      if (secondsLeft <= 0) {
        stopTimer();
        el.textContent = "Time's up!";
        submitPaper(true);
        return;
      }
      secondsLeft--;
    }
    tick();
    timerId = setInterval(tick, 1000);
  }

  function renderSetup() {
    const years = (typeof PAST_PAPERS_5090 !== "undefined" && PAST_PAPERS_5090.years)
      ? PAST_PAPERS_5090.years
      : [2018, 2019, 2020, 2021, 2022, 2023, 2024];
    const subjectOpts = PAPER_SUBJECTS.map(function (s) {
      const dis = s.available ? "" : " disabled";
      const note = s.available ? "" : " (soon)";
      return '<option value="' + s.id + '"' + (s.id === "biology" ? " selected" : "") + dis + ">" + escapeHtml(s.label) + note + "</option>";
    }).join("");

    return (
      '<div class="pp-book">' +
      '<p class="pp-book-label">CADO · Mock examination paper</p>' +
      '<h2 class="pp-setup-title">Past papers</h2>' +
      '<p class="pp-setup-desc">Generate a timed MCQ paper in exam-book style. Biology, Chemistry, and Physics are available now. More subjects are on the way.</p>' +
      '<div class="pp-setup-grid">' +
      '<label class="pp-field"><span>Subject</span><select id="ppSubject" class="select">' +
      subjectOpts +
      "</select></label>" +
      '<label class="pp-field"><span>Year from</span><select id="ppYearFrom" class="select">' +
      years.map(function (y) { return '<option value="' + y + '">' + y + "</option>"; }).join("") +
      "</select></label>" +
      '<label class="pp-field"><span>Year to</span><select id="ppYearTo" class="select">' +
      years.map(function (y) {
        return '<option value="' + y + '"' + (y === years[years.length - 1] ? " selected" : "") + ">" + y + "</option>";
      }).join("") +
      "</select></label>" +
      '<label class="pp-field"><span>Difficulty</span><select id="ppDifficulty" class="select">' +
      '<option value="easy">Easy</option><option value="medium" selected>Medium</option><option value="hard">Hard</option>' +
      "</select></label>" +
      '<label class="pp-field"><span>Time limit</span><select id="ppTimeLimit" class="select">' +
      '<option value="0">No limit</option>' +
      '<option value="20">20 minutes</option>' +
      '<option value="30">30 minutes</option>' +
      '<option value="40">40 minutes</option>' +
      '<option value="60" selected>60 minutes</option>' +
      '<option value="90">90 minutes</option>' +
      "</select></label>" +
      '<label class="pp-field"><span>Questions</span><select id="ppQuestionCount" class="select">' +
      '<option value="20">20</option><option value="30">30</option><option value="40" selected>40</option>' +
      "</select></label></div>" +
      '<p class="pp-subject-note" id="ppSubjectNote">Biology pulls from all 19 chapter banks. Chemistry and Physics use syllabus MCQs on CADO.</p>' +
      '<button type="button" class="btn btn-primary" id="ppStartBtn">Begin paper</button></div>'
    );
  }

  function renderExam() {
    return (
      '<div class="pp-exam hidden" id="ppExam">' +
      '<div class="pp-exam-toolbar">' +
      '<span class="pp-exam-meta" id="ppExamMeta">Question 1</span>' +
      '<span class="pp-timer hidden" id="ppTimer"></span>' +
      '<button type="button" class="btn btn-sm btn-secondary" id="ppQuitBtn">Exit</button></div>' +
      '<div class="quiz-card pp-quiz-card">' +
      '<h3 class="quiz-question" id="ppQuestion"></h3>' +
      '<p class="pp-topic-tag" id="ppTopicTag"></p>' +
      '<div class="quiz-options" id="ppOptions"></div>' +
      '<div class="quiz-feedback hidden" id="ppFeedback"></div>' +
      '<div class="quiz-actions">' +
      '<button type="button" class="btn btn-primary hidden" id="ppNextBtn">Next</button>' +
      '<button type="button" class="btn btn-secondary hidden" id="ppSubmitBtn">Submit paper</button></div>' +
      '<div class="pp-results hidden" id="ppResults"></div></div></div>'
    );
  }

  function renderQuestion() {
    paperAnswered = false;
    const fb = document.getElementById("ppFeedback");
    const next = document.getElementById("ppNextBtn");
    const submit = document.getElementById("ppSubmitBtn");
    const results = document.getElementById("ppResults");
    fb.classList.add("hidden");
    next.classList.add("hidden");
    submit.classList.add("hidden");
    results.classList.add("hidden");

    if (paperIndex >= paperDeck.length) {
      showResults();
      return;
    }
    const q = paperDeck[paperIndex];
    document.getElementById("ppExamMeta").textContent = "Question " + (paperIndex + 1) + " of " + paperDeck.length;
    document.getElementById("ppQuestion").textContent = q.q;
    document.getElementById("ppTopicTag").textContent = q.topicNum ? "Ch " + q.topicNum + ": " + q.topicName : q.topicName || "";
    const opts = document.getElementById("ppOptions");
    const order = shuffle(q.options.map(function (o, i) { return { text: o, i: i }; }));
    const correctOrig = q.answer;
    opts.innerHTML = order
      .map(function (item, displayIdx) {
        return (
          '<button type="button" class="quiz-option" data-display="' +
          displayIdx +
          '" data-orig="' +
          item.i +
          '">' +
          escapeHtml(item.text) +
          "</button>"
        );
      })
      .join("");
    q._shuffledCorrect = order.findIndex(function (x) { return x.i === correctOrig; });
    opts.querySelectorAll(".quiz-option").forEach(function (btn) {
      btn.addEventListener("click", function () { selectAnswer(btn, q); });
    });
    if (paperIndex === paperDeck.length - 1) submit.classList.remove("hidden");
    else next.classList.remove("hidden");
  }

  function selectAnswer(btn, q) {
    if (paperAnswered) return;
    paperAnswered = true;
    const idx = parseInt(btn.dataset.display, 10);
    const ok = idx === q._shuffledCorrect;
    if (ok) paperScore++;
    q._userCorrect = ok;
    document.querySelectorAll("#ppOptions .quiz-option").forEach(function (b) {
      b.disabled = true;
      const d = parseInt(b.dataset.display, 10);
      if (d === q._shuffledCorrect) b.classList.add("correct");
      else if (d === idx && !ok) b.classList.add("wrong");
    });
    const fb = document.getElementById("ppFeedback");
    fb.classList.remove("hidden", "correct-fb", "wrong-fb");
    fb.classList.add(ok ? "correct-fb" : "wrong-fb");
    fb.innerHTML = ok ? "✓ " + escapeHtml(q.explain || "") : "✗ " + escapeHtml(q.explain || "");
  }

  function showResults() {
    stopTimer();
    const pct = paperDeck.length ? Math.round((paperScore / paperDeck.length) * 100) : 0;
    const el = document.getElementById("ppResults");
    el.classList.remove("hidden");
    el.innerHTML =
      "<h3>Paper complete</h3><p class=\"pp-score-line\"><strong>" +
      paperScore +
      "</strong> / " +
      paperDeck.length +
      " correct (" +
      pct +
      "%)</p><p>" +
      (pct >= 75 ? "Strong work — keep practising under timed conditions." : "Review weak topics and try another paper.") +
      '</p><button type="button" class="btn btn-primary" id="ppRetryBtn">New paper</button>';
    document.getElementById("ppQuestion").textContent = "";
    document.getElementById("ppOptions").innerHTML = "";
    document.getElementById("ppNextBtn").classList.add("hidden");
    document.getElementById("ppSubmitBtn").classList.add("hidden");
    document.getElementById("ppRetryBtn").addEventListener("click", function () {
      document.getElementById("ppExam").classList.add("hidden");
      document.querySelector(".pp-setup-wrap").classList.remove("hidden");
    });
  }

  function submitPaper(force) {
    if (!force && paperIndex < paperDeck.length - 1) {
      paperIndex++;
      renderQuestion();
      return;
    }
    paperIndex = paperDeck.length;
    showResults();
  }

  function updateSubjectNote() {
    const sel = document.getElementById("ppSubject");
    const note = document.getElementById("ppSubjectNote");
    if (!sel || !note) return;
    const id = sel.value;
    if (id === "biology") note.textContent = "Biology pulls from all 19 chapter banks.";
    else if (id === "chemistry") note.textContent = "Chemistry uses syllabus MCQs on CADO.";
    else if (id === "physics") note.textContent = "Physics uses syllabus MCQs on CADO.";
    else note.textContent = "This subject will be added soon.";
  }

  function startPaper() {
    const subjectId = document.getElementById("ppSubject").value;
    const sub = PAPER_SUBJECTS.find(function (s) { return s.id === subjectId; });
    if (!sub || !sub.available) {
      alert("That subject is not available yet. Try Biology, Chemistry, or Physics.");
      return;
    }
    const count = parseInt(document.getElementById("ppQuestionCount").value, 10) || 40;
    const diff = document.getElementById("ppDifficulty").value;
    const mins = parseInt(document.getElementById("ppTimeLimit").value, 10);
    paperDeck = collectMcqs(subjectId, diff).slice(0, count);
    if (!paperDeck.length) {
      alert("No questions available for this subject yet.");
      return;
    }
    paperIndex = 0;
    paperScore = 0;
    document.querySelector(".pp-setup-wrap").classList.add("hidden");
    document.getElementById("ppExam").classList.remove("hidden");
    startTimer(mins);
    renderQuestion();
  }

  function bind() {
    document.getElementById("ppStartBtn")?.addEventListener("click", startPaper);
    document.getElementById("ppSubject")?.addEventListener("change", updateSubjectNote);
    document.getElementById("ppNextBtn")?.addEventListener("click", function () {
      if (!paperAnswered) return;
      paperIndex++;
      renderQuestion();
    });
    document.getElementById("ppSubmitBtn")?.addEventListener("click", function () { submitPaper(true); });
    document.getElementById("ppQuitBtn")?.addEventListener("click", function () {
      stopTimer();
      document.getElementById("ppExam").classList.add("hidden");
      document.querySelector(".pp-setup-wrap").classList.remove("hidden");
    });
  }

  function render(el) {
    if (!el) return;
    el.innerHTML = '<div class="pp-page"><div class="pp-setup-wrap">' + renderSetup() + "</div>" + renderExam() + "</div>";
    bind();
    updateSubjectNote();
  }

  return { render: render };
})();

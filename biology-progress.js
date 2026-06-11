/** CADO Biology 5090 — progress, settings, MCQ generation, search */
const BiologyProgress = (function () {
  "use strict";
  const KEY = "cado_bio5090_progress";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function getTopic(id) {
    const all = load();
    if (!all[id]) all[id] = { complete: false, mcqBest: 0, mcqAttempts: 0, theoryViewed: 0, lastStudied: null };
    return all[id];
  }

  function markComplete(id, complete) {
    const all = load();
    all[id] = getTopic(id);
    all[id].complete = complete !== false;
    all[id].lastStudied = new Date().toISOString();
    save(all);
    return all[id];
  }

  function recordMcq(id, score, total) {
    const all = load();
    all[id] = getTopic(id);
    const pct = total ? Math.round((score / total) * 100) : 0;
    all[id].mcqAttempts = (all[id].mcqAttempts || 0) + 1;
    if (pct > (all[id].mcqBest || 0)) all[id].mcqBest = pct;
    all[id].lastStudied = new Date().toISOString();
    save(all);
  }

  function overallProgress() {
    const topics = BIOLOGY_5090.topics;
    const all = load();
    let sum = 0;
    topics.forEach(function (t) {
      const p = all[t.id] || {};
      let topicPct = 0;
      if (p.complete) topicPct += 40;
      topicPct += Math.min(30, (p.mcqBest || 0) * 0.3);
      topicPct += Math.min(30, ((p.theoryViewed || 0) / Math.max(1, (t.theory || []).length)) * 30);
      sum += topicPct;
    });
    return Math.round(sum / topics.length);
  }

  function topicProgress(id) {
    const t = BIOLOGY_5090.topics.find(function (x) { return x.id === id; });
    const p = getTopic(id);
    let pct = 0;
    if (p.complete) pct += 40;
    pct += Math.min(30, (p.mcqBest || 0) * 0.3);
    pct += Math.min(30, ((p.theoryViewed || 0) / Math.max(1, (t && t.theory || []).length)) * 30);
    return Math.round(pct);
  }

  function recordTheoryView(id) {
    const all = load();
    all[id] = getTopic(id);
    all[id].theoryViewed = (all[id].theoryViewed || 0) + 1;
    save(all);
  }

  return { load, markComplete, recordMcq, overallProgress, topicProgress, getTopic, recordTheoryView };
})();

const BiologySettings = (function () {
  "use strict";
  const KEY = "cado_bio5090_settings";
  const DEFAULTS = {
    theme: "system",
    aiTone: "balanced",
    aiSources: "both",
    showThinking: true,
    mcqTargetPerTopic: 40,
    quizTimerMinutes: 0
  };

  function load() {
    try { return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch { return Object.assign({}, DEFAULTS); }
  }

  function save(partial) {
    const next = Object.assign(load(), partial);
    localStorage.setItem(KEY, JSON.stringify(next));
    applyTheme(next.theme);
    return next;
  }

  function applyTheme(mode) {
    if (mode === "light") document.documentElement.setAttribute("data-theme", "light");
    else if (mode === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else {
      const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    }
    if (mode !== "system") localStorage.setItem("cado_theme", mode);
  }

  return { load, save, applyTheme, DEFAULTS };
})();

const BiologyMcqPool = (function () {
  "use strict";

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function generateFromDefinitions(topic, targetCount) {
    const defs = topic.definitions || [];
    const staticMcqs = topic.mcqs || [];
    const generated = staticMcqs.slice();
    const allDefs = [];
    BIOLOGY_5090.topics.forEach(function (t) {
      (t.definitions || []).forEach(function (d) { allDefs.push(d); });
    });

    defs.forEach(function (d) {
      if (generated.length >= targetCount) return;
      const wrong = shuffle(allDefs.filter(function (x) { return x.term !== d.term; }))
        .slice(0, 3).map(function (x) { return x.definition.length > 90 ? x.definition.slice(0, 87) + "…" : x.definition; });
      while (wrong.length < 3) wrong.push("None of these");
      const options = shuffle([d.definition, wrong[0], wrong[1], wrong[2]]);
      const answer = options.indexOf(d.definition);
      generated.push({
        q: "Which statement correctly defines \"" + d.term + "\"?",
        options: options,
        answer: answer >= 0 ? answer : 0,
        explain: d.term + ": " + d.definition,
        generated: true
      });
    });

    let n = 0;
    while (generated.length < targetCount && n < staticMcqs.length * 3) {
      const m = staticMcqs[n % staticMcqs.length];
      generated.push(Object.assign({}, m, { q: m.q + " (Set " + (Math.floor(n / staticMcqs.length) + 2) + ")" }));
      n++;
    }

    return shuffle(generated).slice(0, targetCount);
  }

  function getMcqs(topicId, targetCount) {
    const topic = BIOLOGY_5090.topics.find(function (t) { return t.id === topicId; });
    if (!topic) return [];
    return generateFromDefinitions(topic, targetCount || BiologySettings.load().mcqTargetPerTopic || 40);
  }

  function getAllMcqs(filter, targetPerTopic) {
    const out = [];
    const per = targetPerTopic || BiologySettings.load().mcqTargetPerTopic || 40;
    BIOLOGY_5090.topics.forEach(function (t) {
      if (filter && filter !== "all" && t.id !== filter) return;
      getMcqs(t.id, per).forEach(function (m) {
        out.push(Object.assign({}, m, { topicId: t.id, topicName: t.name }));
      });
    });
    return shuffle(out);
  }

  return { getMcqs, getAllMcqs, shuffle };
})();

const BiologySearch = (function () {
  "use strict";

  function search(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const results = [];
    BIOLOGY_5090.topics.forEach(function (t) {
      const push = function (type, title, snippet, anchor) {
        const blob = (title + " " + snippet).toLowerCase();
        if (blob.includes(q)) results.push({
          topicId: t.id, topicNum: t.number, topicName: t.name,
          type: type, title: title, snippet: snippet.slice(0, 180), anchor: anchor
        });
      };
      if (t.quickRecap) push("Recap", "Quick recap", t.quickRecap, "topic-" + t.id);
      if (t.detailedNotes) push("Notes", "Detailed notes", t.detailedNotes, "topic-" + t.id);
      (t.definitions || []).forEach(function (d) { push("Definition", d.term, d.definition, "topic-" + t.id); });
      (t.syllabusPoints || []).forEach(function (p) { push("Syllabus " + p.code, p.title, p.content, "topic-" + t.id); });
      (t.pastPaperExamples || []).forEach(function (p) { push("Past paper", p.paper, p.q, "topic-" + t.id); });
      (t.flashcards || []).forEach(function (c) { push("Flashcard", c.q, c.a, "flashcards"); });
      (t.mcqs || []).forEach(function (m) { push("MCQ", m.q, m.options[m.answer] || "", "mcq"); });
      (t.theory || []).forEach(function (th) { push("Theory", th.q, (th.points || []).join(" "), "theory-ch-" + t.id); });
    });
    return results.slice(0, 50);
  }

  return { search };
})();

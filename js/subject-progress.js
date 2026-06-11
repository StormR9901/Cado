/** CADO — per-subject chapter progress + MCQ pool factories */
const SubjectProgress = (function () {
  "use strict";

  function create(storageKey, getTopics) {
    function load() {
      try { return JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch { return {}; }
    }

    function save(data) {
      localStorage.setItem(storageKey, JSON.stringify(data));
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

    function topicProgress(id) {
      const topics = getTopics();
      const t = topics.find(function (x) { return x.id === id; });
      const p = getTopic(id);
      let pct = 0;
      if (p.complete) pct += 40;
      pct += Math.min(30, (p.mcqBest || 0) * 0.3);
      pct += Math.min(30, ((p.theoryViewed || 0) / Math.max(1, (t && t.theory || []).length)) * 30);
      return Math.round(pct);
    }

    function overallProgress() {
      const topics = getTopics();
      if (!topics.length) return 0;
      let sum = 0;
      topics.forEach(function (t) {
        sum += topicProgress(t.id);
      });
      return Math.round(sum / topics.length);
    }

    function recordTheoryView(id) {
      const all = load();
      all[id] = getTopic(id);
      all[id].theoryViewed = (all[id].theoryViewed || 0) + 1;
      save(all);
    }

    return { load, markComplete, recordMcq, overallProgress, topicProgress, getTopic, recordTheoryView };
  }

  return { create };
})();

const SubjectMcqPool = (function () {
  "use strict";

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function create(getSyllabus, defaultTarget) {
    function generateFromDefinitions(topic, targetCount) {
      const defs = topic.definitions || [];
      const staticMcqs = topic.mcqs || [];
      const generated = staticMcqs.slice();
      const allDefs = [];
      getSyllabus().topics.forEach(function (t) {
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
      while (generated.length < targetCount && staticMcqs.length && n < staticMcqs.length * 3) {
        const m = staticMcqs[n % staticMcqs.length];
        generated.push(Object.assign({}, m, { q: m.q + " (Set " + (Math.floor(n / staticMcqs.length) + 2) + ")" }));
        n++;
      }

      return shuffle(generated).slice(0, targetCount);
    }

    function getMcqs(topicId, targetCount) {
      const topic = getSyllabus().topics.find(function (t) { return t.id === topicId; });
      if (!topic) return [];
      const per = targetCount || defaultTarget || 40;
      return generateFromDefinitions(topic, per);
    }

    function getAllMcqs(filter, targetPerTopic) {
      const out = [];
      const per = targetPerTopic || defaultTarget || 40;
      getSyllabus().topics.forEach(function (t) {
        if (filter && filter !== "all" && t.id !== filter) return;
        getMcqs(t.id, per).forEach(function (m) {
          out.push(Object.assign({}, m, { topicId: t.id, topicName: t.name }));
        });
      });
      return shuffle(out);
    }

    return { getMcqs, getAllMcqs, shuffle };
  }

  return { create, shuffle };
})();

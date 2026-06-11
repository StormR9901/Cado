/**
 * CORA learning engine — chapter packs, topic detection, offline content
 */
const CoraEngine = (function () {
  "use strict";

  const HUB_SUBJECTS = ["biology", "chemistry", "physics"];
  const SYLLABUS = typeof CoraPrompt !== "undefined" ? CoraPrompt.SYLLABUS_CODES : {
    biology: "5090", chemistry: "5070", physics: "5054",
    maths: "4024", english: "1123", pakstudies: "2059", islamiat: "2058", global: "2069"
  };

  const CHAPTER_ALIASES = {
    inheritance: ["inheritance", "genetics", "genes", "alleles", "punnett", "chapter 17", "ch 17", "ch17"],
    development: ["development", "reproduction", "meiosis", "chapter 16", "ch 16"],
    cells: ["cells", "cell structure", "chapter 1", "ch 1"]
  };

  const LEARNING_TRIGGERS = /full chapter|learning mode|teach (me )?chapter|5090 notes|structured notes|^(teach|learn|revise|notes on|chapter)\b|\b(notes|flashcards|mcqs|exam questions)\b.*\b(biology|5090|inheritance|chapter)/i;
  const CHAPTER_REQUEST = /teach|chapter|revise|notes on/i;

  function getHubSyllabus(subjectId) {
    if (typeof cadoGetSubjectHub === "function") {
      const cfg = cadoGetSubjectHub(subjectId);
      if (cfg && cfg.getSyllabus) return cfg.getSyllabus();
    }
    if (subjectId === "biology" && typeof BIOLOGY_5090 !== "undefined") return BIOLOGY_5090;
    if (subjectId === "chemistry" && typeof CHEMISTRY_5070 !== "undefined") return CHEMISTRY_5070;
    if (subjectId === "physics" && typeof PHYSICS_5054 !== "undefined") return PHYSICS_5054;
    return null;
  }

  function isLearningModeRequest(message) {
    return LEARNING_TRIGGERS.test(message);
  }

  function isChatOnly(message) {
    if (typeof CoraPrompt !== "undefined") return CoraPrompt.isSmallTalk(message);
    return /^(hi|hello|hey|thanks|bye|how are you)/i.test(message.trim()) && !isLearningModeRequest(message);
  }

  function detectTopicId(message, subjectId) {
    const lower = message.toLowerCase();
    const syllabus = getHubSyllabus(subjectId);
    if (!syllabus || !syllabus.topics) return null;
    for (const t of syllabus.topics) {
      if (lower.includes(t.id.replace(/-/g, " ")) || lower.includes(t.name.toLowerCase())) return t.id;
      if (t.number && (lower.includes("chapter " + t.number) || lower.includes("ch " + t.number) || lower.includes("ch" + t.number))) return t.id;
    }
    if (subjectId === "biology") {
      for (const id in CHAPTER_ALIASES) {
        if (CHAPTER_ALIASES[id].some(function (k) { return lower.includes(k); })) return id;
      }
    }
    return null;
  }

  function detectBiologyTopicId(message) {
    return detectTopicId(message, "biology");
  }

  function inferHubSubjectFromMessage(message) {
    const lower = message.toLowerCase();
    if (/\b(chemistry|5070|stoichiometry|periodic table|organic chemistry)\b/i.test(lower)) return "chemistry";
    if (/\b(physics|5054|electricity|waves|momentum|radioactivity)\b/i.test(lower)) return "physics";
    if (/\b(biology|5090|cells|inheritance|ecology)\b/i.test(lower)) return "biology";
    for (let i = 0; i < HUB_SUBJECTS.length; i++) {
      if (detectTopicId(message, HUB_SUBJECTS[i])) return HUB_SUBJECTS[i];
    }
    return null;
  }

  function getChapterPack(topicId, subjectId) {
    subjectId = subjectId || "biology";
    if (subjectId === "biology" && typeof BIOLOGY_5090_NOTES !== "undefined" && BIOLOGY_5090_NOTES[topicId]) {
      return BIOLOGY_5090_NOTES[topicId];
    }
    const syllabus = getHubSyllabus(subjectId);
    if (syllabus) {
      const t = syllabus.topics.find(function (x) { return x.id === topicId; });
      if (t) return t;
    }
    return null;
  }

  function bulletList(items, prefix) {
    return (items || []).map(function (item) { return (prefix || "- ") + item + "\n"; }).join("");
  }

  function formatSection(title, body) {
    return "## " + title + "\n\n" + body + "\n\n";
  }

  function formatNotes(pack, title) {
    let body = "";
    if (pack.learningObjectives && pack.learningObjectives.length) {
      body += "### Learning objectives\n" + bulletList(pack.learningObjectives);
    }
    if (pack.chapterSections && pack.chapterSections.length) {
      pack.chapterSections.forEach(function (sec) {
        body += "### " + sec.title + "\n";
        if (sec.paragraphs) sec.paragraphs.forEach(function (p) { body += p + "\n\n"; });
        if (sec.bulletList) body += bulletList(sec.bulletList);
        if (sec.subsections) {
          sec.subsections.forEach(function (sub) {
            body += "#### " + sub.title + "\n";
            if (sub.bulletList) body += bulletList(sub.bulletList);
          });
        }
        body += "\n";
      });
    } else if (pack.syllabusPoints && pack.syllabusPoints.length) {
      pack.syllabusPoints.forEach(function (sp) {
        body += "### " + sp.code + " " + sp.title + "\n" + sp.content + "\n\n";
      });
    }
    if (pack.definitions && pack.definitions.length) {
      body += "### Key definitions\n";
      pack.definitions.forEach(function (d) { body += "**" + d.term + ":** " + d.definition + "\n"; });
      body += "\n";
    }
    if (pack.examTips) body += "### Exam points\n" + pack.examTips + "\n\n";
    return formatSection("📖 Notes — " + title, body);
  }

  function formatFlashcards(pack) {
    const cards = (pack.flashcards || []).slice(0, 15);
    let body = "";
    cards.forEach(function (c, i) {
      body += (i + 1) + ". **Q:** " + c.q + "\n   **A:** " + c.a + "\n\n";
    });
    return formatSection("🧠 Flashcards (15)", body);
  }

  function formatMcqs(pack) {
    const letters = ["A", "B", "C", "D"];
    let body = "";
    (pack.mcqs || []).slice(0, 40).forEach(function (m, i) {
      body += "### " + (i + 1) + ". " + m.q + "\n";
      m.options.forEach(function (opt, j) { body += letters[j] + ". " + opt + "\n"; });
      body += "**Correct Answer:** " + (letters[m.answer] || "?") + "\n";
      body += "**Explanation:** " + (m.explain || "") + "\n\n";
    });
    return formatSection("📝 MCQs (40)", body);
  }

  function formatTheory(pack) {
    let body = "";
    (pack.theory || []).slice(0, 5).forEach(function (t, i) {
      body += "### " + (i + 1) + ". " + t.q + " [" + (t.marks || "?") + " marks]\n**Mark scheme points:**\n";
      body += bulletList(t.points || []);
      body += "\n";
    });
    return formatSection("✍️ Theory questions (5)", body);
  }

  function formatSummary(pack) {
    const bullets = pack.summary || (pack.quickRecap ? pack.quickRecap.split("\n") : []);
    const body = Array.isArray(bullets)
      ? bulletList(bullets.map(function (b) { return String(b).replace(/^[-•]\s*/, ""); }))
      : bullets + "\n";
    return formatSection("📌 Summary", body);
  }

  function buildLearningPack(topicId, subjectId) {
    subjectId = subjectId || "biology";
    const pack = getChapterPack(topicId, subjectId);
    if (!pack) return null;
    const syllabus = getHubSyllabus(subjectId);
    const topic = syllabus ? syllabus.topics.find(function (t) { return t.id === topicId; }) : null;
    const title = topic ? topic.name : topicId;
    const code = SYLLABUS[subjectId] || (syllabus && syllabus.code) || "";
    const subName = syllabus ? syllabus.name : subjectId;
    const header = "**CORA · " + subName + (code ? " " + code : "") + " · Chapter: " + title + "**\n\n";
    return header + formatNotes(pack, title) + formatFlashcards(pack) + formatMcqs(pack) + formatTheory(pack) + formatSummary(pack);
  }

  function fallbackReply(message) {
    const lower = message.toLowerCase();
    const redirects = [
      { keys: ["sport", "football", "cricket"], text: "I'm **CORA**, your O-Level tutor. For sport, try **biology in exercise** (respiration, muscles) if relevant." },
      { keys: ["joke", "funny"], text: "Why did the cell break up with the mitochondrion? It needed more **space** — ask me any 5090 topic and I'll help you revise." }
    ];
    const hit = redirects.find(function (r) { return r.keys.some(function (k) { return lower.includes(k); }); });
    if (hit) return hit.text;
    return "I'm **CORA**, your Cambridge O-Level coach for **all 8 syllabi** on CADO. Ask *teach inheritance* (Biology), *teach stoichiometry* (Chemistry), or pick a subject from the sidebar.";
  }

  function respond(message, ctx) {
    ctx = ctx || {};
    const subjectId = ctx.subjectId || "biology";
    if (isChatOnly(message)) return null;

    const hubSubject = HUB_SUBJECTS.indexOf(subjectId) >= 0 ? subjectId : inferHubSubjectFromMessage(message);
    const activeHub = hubSubject || (subjectId === "biology" || !ctx.subjectId ? "biology" : null);

    if (activeHub) {
      const topicId = detectTopicId(message, activeHub);
      if (topicId && (isLearningModeRequest(message) || CHAPTER_REQUEST.test(message))) {
        const pack = buildLearningPack(topicId, activeHub);
        if (pack) return pack;
      }
      if (isLearningModeRequest(message)) {
        const syl = getHubSyllabus(activeHub);
        const example = syl && syl.topics[0] ? syl.topics[0].name : "chapter 1";
        return "Tell me which **" + (syl ? syl.name : activeHub) + " chapter** to teach (e.g. \"" + example + "\"). Format: Notes → 15 flashcards → 40 MCQs → 5 theory → Summary.";
      }
    }

    if (/what can you do|help me study|syllabus/i.test(message.toLowerCase())) {
      return "**CORA learning mode**\n\nAsk: *teach inheritance* (Biology), *teach stoichiometry* (Chemistry), or *teach waves* (Physics).\n\nHub subjects: Biology **5090**, Chemistry **5070**, Physics **5054**.\n\nI stay within your selected chapter unless you ask otherwise.";
    }

    return fallbackReply(message);
  }

  return {
    SYLLABUS: SYLLABUS,
    isLearningModeRequest: isLearningModeRequest,
    detectBiologyTopicId: detectBiologyTopicId,
    detectTopicId: detectTopicId,
    getHubSyllabus: getHubSyllabus,
    buildLearningPack: buildLearningPack,
    respond: respond
  };
})();

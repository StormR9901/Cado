/**
 * CORA system prompt — modular, concise instruction blocks
 */
const CoraPrompt = (function () {
  "use strict";

  const SYLLABUS_CODES = {
    biology: "5090",
    chemistry: "5070",
    physics: "5054",
    maths: "4024",
    english: "1123",
    pakstudies: "2059",
    islamiat: "2058",
    global: "2069"
  };

  const MODE_RULES = {
    teacher: "Teach step-by-step with worked examples.",
    exam: "Mark-scheme style — short, keyword-heavy, no filler.",
    hint: "Hints only — never give the full answer.",
    quiz: "Ask one question; wait for the student's answer before continuing."
  };

  const TOGGLE_RULES = {
    explainSimply: "Use plain English; avoid unnecessary jargon.",
    stepByStep: "Number each step in the Explanation section.",
    examMode: MODE_RULES.exam,
    hintMode: MODE_RULES.hint
  };

  const BLOCKS = {
    role: [
      "You are CORA — Cambridge O Level exam coach on CADO.",
      "You teach, test, and mark like a tutor + examiner. Not a casual chatbot."
    ],
    subjects: [
      "Stay within the active Cambridge syllabus (Biology 5090, Chemistry 5070, Physics 5054, Maths 4024, English 1123, Pakistan Studies 2059, Islamiat 2058, Global Perspectives 2069).",
      "Do not mix subjects or go off-syllabus unless the student asks."
    ],
    output: [
      "Structure every reply in three sections:",
      "🟦 Quick Answer — 1–2 lines",
      "🟨 Explanation — clear steps, simple language",
      "🟩 Exam Answer — bullet points with syllabus keywords"
    ],
    teaching: [
      "Be clear, structured, and exam-focused.",
      "Match command words: define = precise term; explain = why/how; describe = what happens.",
      "Use correct units, syllabus terms, and mark-scheme phrasing."
    ],
    engagement: [
      "When useful: offer a quiz question, quick revision, or flashcard recap.",
      "For 'mark my answer': score against keywords and list missing mark points."
    ]
  };

  function subjectLine(ctx) {
    if (!ctx.subjectName) return null;
    const code = ctx.subjectCode || SYLLABUS_CODES[ctx.subjectId] || "";
    return "Active subject: " + ctx.subjectName + (code ? " (" + code + ")" : "") + ".";
  }

  function contextLines(ctx) {
    const lines = [];
    const sub = subjectLine(ctx);
    if (sub) lines.push(sub);
    if (ctx.weakTopics && ctx.weakTopics.length) {
      lines.push("Simplify for weak areas: " + ctx.weakTopics.slice(0, 3).map(function (w) {
        return w.topic || w;
      }).join(", ") + ".");
    }
    return lines;
  }

  function modeLines(ctx) {
    const mode = ctx.mode || "teacher";
    const lines = ["Mode (" + mode + "): " + (MODE_RULES[mode] || MODE_RULES.teacher)];
    const toggles = ctx.toggles || {};
    if (toggles.explainSimply) lines.push(TOGGLE_RULES.explainSimply);
    if (toggles.stepByStep) lines.push(TOGGLE_RULES.stepByStep);
    if (toggles.examMode && mode !== "exam") lines.push(TOGGLE_RULES.examMode);
    if (toggles.hintMode && mode !== "hint") lines.push(TOGGLE_RULES.hintMode);
    return lines;
  }

  function build(ctx) {
    ctx = ctx || {};
    const sections = [
      ["ROLE", BLOCKS.role],
      ["SUBJECTS", BLOCKS.subjects],
      ["OUTPUT FORMAT", BLOCKS.output],
      ["TEACHING", BLOCKS.teaching],
      ["ENGAGEMENT", BLOCKS.engagement],
      ["MODE", modeLines(ctx)]
    ];
    const ctxExtra = contextLines(ctx);
    if (ctxExtra.length) sections.push(["STUDENT CONTEXT", ctxExtra]);

    return sections.map(function (pair) {
      return "=== " + pair[0] + " ===\n" + pair[1].join("\n");
    }).join("\n\n");
  }

  function isStudyIntent(message) {
    return /explain|describe|what is|how does|why|define|calculate|revise|quiz|syllabus|exam|paper|mcq|theory|chapter|mark/i.test(message);
  }

  function isSmallTalk(message) {
    if (isStudyIntent(message)) return false;
    return /^(hi|hello|hey|yo|salam|thanks|thank you|thx|bye|who are you|what are you|how are you|help me|what can you do)/i.test(message.trim());
  }

  function smallTalkReply(message) {
    const lower = message.toLowerCase().trim();
    if (/thank|thx/i.test(lower)) return "You're welcome — ask another question when ready.";
    if (/bye|goodbye|later/i.test(lower)) return "See you later. Good luck with your exams.";
    if (/who are you|what are you/i.test(lower)) {
      return "I'm **CORA** — your O Level exam coach on CADO. I teach, mark, and train you for Cambridge-style answers.";
    }
    if (/help|what can you do/i.test(lower)) {
      return "Every reply has **Quick Answer**, **Explanation**, and **Exam Answer**. Use Exam, Hint, or Quiz mode, or **Mark My Answer** to practice.";
    }
    const greetings = [
      "Hey! I'm CORA — your exam coach. What topic should we tackle?",
      "Hi! Pick a subject and ask anything — I'll structure it for exams.",
      "Hello! Ready to revise? I'll give you Quick Answer, Explanation, and Exam Answer every time."
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  return {
    build: build,
    buildSystemPrompt: build,
    isStudyIntent: isStudyIntent,
    isSmallTalk: isSmallTalk,
    smallTalkReply: smallTalkReply,
    SYLLABUS_CODES: SYLLABUS_CODES,
    MODE_RULES: MODE_RULES
  };
})();

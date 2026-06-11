/**
 * CORA Exam Coach — response structuring, modes, marking, flashcards
 */
const CoraCoach = (function () {
  "use strict";

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function formatInline(str) {
    if (typeof CORA !== "undefined" && CORA.formatInlineCora) return CORA.formatInlineCora(str);
    return escapeHtml(str).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function firstSentence(text) {
    const t = text.replace(/\n+/g, " ").trim();
    const match = t.match(/^(.{1,180}?)(?:\.|$)/);
    return match ? match[1].trim() + (match[1].endsWith(".") ? "" : ".") : t.slice(0, 160);
  }

  function toBullets(text) {
    const lines = text.split(/\n+/).map(function (l) { return l.replace(/^[-•*]\s*/, "").trim(); }).filter(Boolean);
    if (lines.length >= 2) return lines.slice(0, 8);
    return text.split(/(?<=[.!?])\s+/).filter(function (s) { return s.length > 8; }).slice(0, 6)
      .map(function (s) { return s.replace(/\.$/, ""); });
  }

  function splitParagraphs(text) {
    return text.split(/\n\n+/).map(function (p) { return p.trim(); }).filter(Boolean);
  }

  const QUESTION_TYPES = [
    { id: "marking", test: /mark my answer|grade my answer|check my answer/i },
    { id: "definition", test: /^(what is|define|definition of|meaning of)/i },
    { id: "calculation", test: /calculate|find the|work out|how much|mass of|volume of|mol/i },
    { id: "revision", test: /revise|revision|summary|recap|quick review/i },
    { id: "pastpaper", test: /past paper|mark scheme|examiner/i },
    { id: "explanation", test: /explain|describe|how does|why does|account for/i },
    { id: "quiz", test: /quiz me|test me|ask me/i }
  ];

  function detectQuestionType(message) {
    const hit = QUESTION_TYPES.find(function (q) { return q.test.test(message); });
    return hit ? hit.id : "general";
  }

  function parseEmojiSections(raw) {
    if (raw.indexOf("🟦") < 0) return null;
    const a = raw.match(/🟦[^\n]*\n([\s\S]*?)(?=🟨|🟩|$)/);
    const e = raw.match(/🟨[^\n]*\n([\s\S]*?)(?=🟩|$)/);
    const x = raw.match(/🟩[^\n]*\n([\s\S]*?)$/);
    if (!a && !e && !x) return null;
    return {
      answer: a ? a[1].trim() : "",
      explanation: e ? e[1].trim() : "",
      examAnswer: x ? toBullets(x[1]) : []
    };
  }

  function applyQuestionType(type, raw, base) {
    const paras = splitParagraphs(raw);
    const bullets = toBullets(raw);
    if (type === "definition") {
      base.answer = firstSentence(raw);
      base.explanation = "Key idea: " + base.answer + "\n\n" + (paras[1] || paras[0] || "");
      base.examAnswer = ["State the term clearly", bullets[0] || base.answer, "Include one distinguishing feature or example"];
    } else if (type === "calculation") {
      const finalLine = raw.split("\n").filter(function (l) { return /=|answer|∴|therefore/i.test(l); }).pop();
      base.answer = finalLine || firstSentence(raw);
      base.explanation = raw;
      base.examAnswer = bullets.length ? bullets : ["Show formula", "Substitute values", "State final answer with units"];
    } else if (type === "revision") {
      base.answer = "Quick revision summary ready.";
      base.explanation = raw;
      base.examAnswer = bullets.slice(0, 5);
    }
    return base;
  }

  function simplifyLanguage(text) {
    return text.replace(/\b(utilise|demonstrate|facilitate)\b/gi, function (w) {
      return ({ utilise: "use", demonstrate: "show", facilitate: "help" })[w.toLowerCase()] || w;
    });
  }

  function buildHints(questionType) {
    const hints = [
      "Think about what the question is really asking — underline the command word.",
      "Recall the key definition or formula from your notes first.",
      "List 2–3 keywords an examiner would expect in a good answer."
    ];
    if (questionType === "calculation") {
      hints.push("Write the formula before plugging in numbers.", "Check units — marks are often lost here.");
    } else if (questionType === "explanation") {
      hints.push("Use: cause → process → result.");
    }
    return hints.map(function (h, i) { return "Hint " + (i + 1) + ": " + h; }).join("\n");
  }

  function applyMode(mode, toggles, base, raw, questionType) {
    if (mode === "hint" || toggles.hintMode) {
      base.answer = "Hint mode — I'll guide you, not give the full answer.";
      base.explanation = buildHints(questionType);
      base.examAnswer = ["Write your attempt first", "Ask for the next hint if stuck"];
      return base;
    }
    if (mode === "quiz" || questionType === "quiz") {
      base.answer = "Quiz mode active.";
      base.explanation = "I'll ask you questions — type your answer after each one.";
      base.examAnswer = ["Answer in short points", "I'll mark like an examiner"];
      return base;
    }
    if (toggles.explainSimply || mode === "teacher") {
      base.explanation = simplifyLanguage(base.explanation);
    }
    if (toggles.stepByStep && questionType !== "definition") {
      const steps = toBullets(base.explanation);
      if (steps.length >= 2) {
        base.explanation = steps.map(function (s, i) { return "Step " + (i + 1) + ": " + s; }).join("\n");
      }
    }
    if (mode === "exam" || toggles.examMode) {
      base.explanation = base.explanation.split("\n").slice(0, 3).join("\n");
      if (base.examAnswer.length < 3) {
        base.examAnswer = base.examAnswer.concat(["Use syllabus keywords", "Be concise — marks for points"]);
      }
    }
    return base;
  }

  function structureResponse(raw, ctx, questionType) {
    ctx = ctx || {};
    const mode = ctx.mode || "teacher";
    const toggles = ctx.toggles || {};
    const parsed = parseEmojiSections(raw);
    const paras = splitParagraphs(raw);

    let base = parsed || {
      answer: firstSentence(raw),
      explanation: paras.length > 1 ? paras.slice(1).join("\n\n") : raw,
      examAnswer: toBullets(raw)
    };

    base = applyQuestionType(questionType, raw, base);
    base = applyMode(mode, toggles, base, raw, questionType);
    base.questionType = questionType;
    return base;
  }

  function renderStructuredHtml(structured, ctx) {
    const mode = (ctx && ctx.mode) || "teacher";
    const toggles = (ctx && ctx.toggles) || {};
    const examDominant = mode === "exam" || toggles.examMode;
    const hintOnly = mode === "hint" || toggles.hintMode;
    const examList = structured.examAnswer.map(function (b) {
      return "<li>" + formatInline(b) + "</li>";
    }).join("");
    const explainHtml = formatInline(structured.explanation).replace(/\n/g, "<br>");

    return '<div class="cora-structured" data-cora-structured="1">' +
      '<details class="cora-block cora-block--answer" open>' +
      '<summary class="cora-block-summary"><span class="cora-block-icon">🟦</span> Quick Answer</summary>' +
      '<div class="cora-block-body"><p>' + formatInline(structured.answer) + "</p></div></details>" +
      '<details class="cora-block cora-block--explain"' + (!examDominant && !hintOnly ? " open" : "") + ">" +
      '<summary class="cora-block-summary"><span class="cora-block-icon">🟨</span> Explanation</summary>' +
      '<div class="cora-block-body"><p>' + explainHtml + "</p></div></details>" +
      '<details class="cora-block cora-block--exam" open>' +
      '<summary class="cora-block-summary"><span class="cora-block-icon">🟩</span> Exam Answer</summary>' +
      '<div class="cora-block-body"><ul class="cora-exam-list">' + examList + "</ul></div></details>" +
      '<div class="cora-response-actions">' +
      '<button type="button" class="btn btn-sm btn-secondary cora-action-flash" data-cora-flash="1">🃏 Convert to Flashcards</button>' +
      "</div></div>";
  }

  function flashcardsFromStructured(structured) {
    const cards = [
      { q: "Quick answer recap", a: structured.answer },
      { q: "Exam points — " + (structured.questionType || "topic"), a: structured.examAnswer.join("; ") }
    ];
    structured.explanation.split(/\n/).filter(Boolean).slice(0, 3).forEach(function (s, i) {
      cards.push({ q: "Step " + (i + 1) + "?", a: s.replace(/^Step \d+:\s*/i, "") });
    });
    return cards;
  }

  function markAnswer(userAnswer, question, modelAnswer) {
    const user = userAnswer.toLowerCase();
    const model = (modelAnswer || "").toLowerCase();
    const keywords = model.split(/[\s,;]+/).filter(function (w) { return w.length > 4; }).slice(0, 12);
    let hits = 0;
    const missing = [];
    keywords.forEach(function (kw) {
      if (user.indexOf(kw) >= 0) hits++;
      else missing.push(kw);
    });
    const maxScore = 5;
    const score = Math.min(maxScore, Math.max(1, Math.round((hits / Math.max(keywords.length, 1)) * maxScore)));
    return {
      score: score,
      maxScore: maxScore,
      missing: missing.slice(0, 5),
      corrected: modelAnswer || "See CORA's exam answer section for a model response.",
      feedback: score >= 4 ? "Strong attempt — minor polish needed." : score >= 2 ? "Partial credit — add missing keywords." : "Rebuild your answer using the bullet structure."
    };
  }

  function buildSystemPrompt(ctx) {
    if (typeof CoraPrompt !== "undefined") {
      const enriched = Object.assign({}, ctx || {});
      if (typeof CoraStore !== "undefined" && !enriched.weakTopics) {
        enriched.weakTopics = CoraStore.getWeakTopics();
      }
      return CoraPrompt.build(enriched);
    }
    return "You are CORA, a Cambridge O Level exam coach. Use Quick Answer, Explanation, and Exam Answer sections.";
  }

  function generateQuizQuestion(ctx) {
    const subject = ctx.subjectName || "O Level";
    const prompts = [
      "Define osmosis and state one example in living organisms.",
      "State two differences between plant and animal cells.",
      "What is the test for carbon dioxide gas?",
      "State Newton's second law and write the equation.",
      "Name the products of photosynthesis."
    ];
    return "**Quiz question (" + subject + "):** " + prompts[Math.floor(Math.random() * prompts.length)];
  }

  return {
    detectQuestionType: detectQuestionType,
    structureResponse: structureResponse,
    renderStructuredHtml: renderStructuredHtml,
    flashcardsFromStructured: flashcardsFromStructured,
    markAnswer: markAnswer,
    buildSystemPrompt: buildSystemPrompt,
    generateQuizQuestion: generateQuizQuestion,
    toBullets: toBullets
  };
})();

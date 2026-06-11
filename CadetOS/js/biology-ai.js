/** CADO Biology AI — tone, thinking step, CADO + general help */
const BiologyAI = (function () {
  "use strict";

  const TONES = {
    formal: { prefix: "", style: "Use formal academic language suitable for Cambridge O Level." },
    balanced: { prefix: "", style: "Be clear, encouraging, and exam-focused." },
    friendly: { prefix: "Hey! ", style: "Warm and supportive, like a helpful senior student." },
    genz: { prefix: "Okay so — ", style: "Casual Gen-Z tone: use light slang (no cringe), emojis sparingly, still accurate. Say 'lowkey', 'basically', 'that's the move for exams' occasionally. Stay syllabus-correct." }
  };

  function settings() {
    return typeof BiologySettings !== "undefined" ? BiologySettings.load() : { aiTone: "balanced", aiSources: "both", showThinking: true };
  }

  function thinkingLine(msg) {
    const s = settings();
    if (!s.showThinking) return "";
    const lower = msg.toLowerCase();
    if (/osmosis|diffusion|active transport/i.test(lower)) return "Let me break down movement across membranes…\n\n";
    if (/heart|blood|circulat/i.test(lower)) return "Thinking about transport in humans…\n\n";
    if (/punnett|inherit|gene/i.test(lower)) return "Working through genetics step by step…\n\n";
    if (/photosynth/i.test(lower)) return "Linking this to plant nutrition and limiting factors…\n\n";
    return "Checking your 5090 syllabus notes first…\n\n";
  }

  function findTopicContent(msg) {
    const lower = msg.toLowerCase();
    let best = null;
    let bestScore = 0;
    BIOLOGY_5090.topics.forEach(function (t) {
      let score = 0;
      const blob = (t.name + " " + (t.quickRecap || "") + " " + (t.detailedNotes || "") + " " +
        (t.definitions || []).map(function (d) { return d.term; }).join(" ")).toLowerCase();
      (t.subtopics || []).forEach(function (st) { if (lower.includes(st.toLowerCase().slice(0, 8))) score += 2; });
      if (blob.includes(lower.split(" ")[0]) && lower.length > 3) score += 1;
      (t.definitions || []).forEach(function (d) {
        if (lower.includes(d.term.toLowerCase())) score += 4;
      });
      if (score > bestScore) { bestScore = score; best = t; }
    });
    return bestScore > 0 ? best : null;
  }

  function replyFromCADO(topic, msg) {
    const parts = [];
    if (topic.quickRecap) parts.push("**Quick recap**\n" + topic.quickRecap);
    const matchDef = (topic.definitions || []).find(function (d) {
      return msg.toLowerCase().includes(d.term.toLowerCase());
    });
    if (matchDef) parts.push("**Definition — " + matchDef.term + "**\n" + matchDef.definition);
    const sp = (topic.syllabusPoints || [])[0];
    if (sp && !matchDef) parts.push("**" + sp.code + " " + sp.title + "**\n" + sp.content);
    if (topic.examTips) parts.push("**A* tip**\n" + topic.examTips);
    const pp = (topic.pastPaperExamples || [])[0];
    if (pp) parts.push("**Past paper style (" + pp.paper + ")**\nQ: " + pp.q + "\nModel: " + pp.answer);
    return parts.join("\n\n");
  }

  function generalHelp(msg) {
    const lower = msg.toLowerCase();
    if (/a\*|grade|exam technique/i.test(lower)) {
      return "**General O Level Biology (A*)**\n- Learn command words (describe, explain, suggest)\n- Paper 1: eliminate wrong MCQs, watch units\n- Paper 2: bullet points, labelled diagrams\n- Paper 4: practise variables, fair test, safety\n- Do May/June AND Oct/Nov past papers under time";
    }
    if (/paper 1|mcq/i.test(lower)) return "**Paper 1 MCQ**\n40 questions, 1 hour. Revise all 19 chapters. CADO MCQ tab gives up to 40 questions per topic with timer.";
    if (/paper 2|theory/i.test(lower)) return "**Paper 2 Theory**\n80 marks, 1h 45m. Use Theory tab mark schemes. Always explain *why*, not just what.";
    if (/paper 4|practical/i.test(lower)) return "**Paper 4**\nAlternative to practical — variables, apparatus, conclusions from data tables.";
    if (/may|june|oct|nov|past paper/i.test(lower)) return "**Past papers**\n5090 runs May/June (papers 11, 12, 14) and Oct/Nov (21, 22, 24). Use CADO Past Papers tab for on-site practice questions.";
    return null;
  }

  function respond(msg) {
    const s = settings();
    const tone = TONES[s.aiTone] || TONES.balanced;
    let out = s.showThinking ? thinkingLine(msg) : "";
    out += tone.prefix;

    const topic = findTopicContent(msg);
    const cadetBlock = topic && s.aiSources !== "general" ? replyFromCADO(topic, msg) : null;
    const generalBlock = s.aiSources !== "cadetos" ? (generalHelp(msg) || (topic ? null : "Ask about any of the **19 chapters**, papers, or say a topic like *osmosis* or *heart*.")) : null;

    if (cadetBlock && generalBlock) out += cadetBlock + "\n\n---\n\n" + generalBlock;
    else if (cadetBlock) out += cadetBlock;
    else if (generalBlock) out += generalBlock;
    else if (topic) out += replyFromCADO(topic, msg);
    else out += "I cover all **5090 Biology** chapters. Try: \"explain osmosis\", \"heart structure\", or \"MCQ tips for Paper 1\".";

    if (s.aiTone === "genz") out += "\n\n_you've got this — lock in revision on CADO_ 🔬";
    return out;
  }

  return { respond, TONES };
})();

/**
 * Biology 5090 - Chapter 10 Respiration (full study content)
 */
const RESPIRATION_CHAPTER_5090 = {
  learningObjectives: [
    "Define respiration and distinguish it from breathing.",
    "Describe aerobic respiration and its word equation.",
    "Explain anaerobic respiration in humans and yeast.",
    "Compare aerobic and anaerobic respiration.",
    "Understand the importance of respiration in living organisms.",
    "Describe how energy released is used in cells.",
    "Interpret simple experiments related to respiration."
  ],
  summary: [
    "Respiration is the chemical release of energy from glucose in cells — not the same as breathing.",
    "Aerobic respiration uses oxygen and releases much energy; products are carbon dioxide and water.",
    "Anaerobic respiration in muscles produces lactic acid; in yeast produces ethanol and carbon dioxide.",
    "Aerobic respiration occurs mainly in mitochondria.",
    "Oxygen debt is extra oxygen needed after exercise to oxidise lactic acid.",
    "Energy is used for movement, active transport, growth, nerve impulses and heat."
  ],
  examples: [
    { title: "Example 1", text: "Running increases aerobic and anaerobic respiration to supply more energy." },
    { title: "Example 2", text: "Yeast releases carbon dioxide in bread making, making dough rise." },
    { title: "Example 3", text: "Sprinting can build up lactic acid and cause muscle fatigue." }
  ],
  comparisonTable: {
    headers: ["Feature", "Aerobic respiration", "Anaerobic respiration"],
    rows: [
      ["Oxygen", "Required", "Not required"],
      ["Location", "Mitochondria (mainly)", "Cytoplasm"],
      ["Energy released", "Large amount", "Small amount"],
      ["Products (human muscle)", "CO₂ and water", "Lactic acid"],
      ["Products (yeast)", "CO₂ and water (if aerobic)", "Ethanol and CO₂"]
    ]
  },
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "Living organisms need energy for movement, growth, active transport and other processes. Energy is released by respiration — a chemical process in cells."
      ]
    },
    {
      title: "What is respiration?",
      paragraphs: [
        "Respiration is the chemical process by which cells release energy from glucose (and sometimes other substrates).",
        "Breathing (ventilation) is the physical movement of air in and out of the lungs — it is not the same as respiration."
      ]
    },
    {
      title: "Aerobic respiration",
      paragraphs: [
        "Aerobic respiration is the breakdown of glucose using oxygen to release energy.",
        "Word equation: glucose + oxygen → carbon dioxide + water + energy.",
        "Occurs mainly in mitochondria. Releases a large amount of energy compared with anaerobic respiration."
      ]
    },
    {
      title: "Anaerobic respiration",
      subsections: [
        {
          title: "In humans (muscles)",
          paragraphs: [
            "When oxygen supply is limited during intense exercise: glucose → lactic acid + energy (less energy than aerobic).",
            "Lactic acid causes muscle fatigue. Oxygen debt: extra oxygen needed after exercise to oxidise lactic acid."
          ]
        },
        {
          title: "In yeast (fermentation)",
          paragraphs: [
            "Glucose → ethanol + carbon dioxide + energy.",
            "Used in brewing and baking — CO₂ makes bread rise."
          ]
        }
      ]
    },
    {
      title: "Energy uses in the body",
      bulletList: [
        "Muscle contraction",
        "Active transport",
        "Protein synthesis and cell division",
        "Nerve impulse transmission",
        "Maintaining body temperature in mammals"
      ]
    },
    {
      title: "Respiration in cells",
      paragraphs: [
        "Controlled by enzymes; occurs continuously in living cells.",
        "Energy is often transferred to ATP for cellular work."
      ]
    }
  ],
  definitions: [
    { term: "Respiration", definition: "Chemical process releasing energy from glucose in cells." },
    { term: "Aerobic respiration", definition: "Breakdown of glucose using oxygen, producing CO₂, water and much energy." },
    { term: "Anaerobic respiration", definition: "Glucose breakdown without oxygen — less energy released." },
    { term: "Oxygen debt", definition: "Extra oxygen required after exercise to oxidise accumulated lactic acid." },
    { term: "Lactic acid", definition: "Product of anaerobic respiration in muscles; causes fatigue." },
    { term: "Fermentation", definition: "Anaerobic respiration in yeast producing ethanol and CO₂." },
    { term: "Mitochondrion", definition: "Organelle where aerobic respiration occurs." },
    { term: "ATP", definition: "Molecule that stores and transfers energy for cell reactions." },
    { term: "Breathing", definition: "Ventilation — movement of air into and out of the lungs." },
    { term: "Glucose", definition: "Main respiratory substrate broken down to release energy." }
  ],
  syllabusPoints: [
    { code: "10.1", title: "Aerobic respiration", content: "Glucose + oxygen → carbon dioxide + water + energy in mitochondria. More energy per glucose than anaerobic." },
    { code: "10.2", title: "Uses of energy", content: "Muscle contraction, active transport, cell division, protein synthesis, nerve impulses, heat." },
    { code: "10.3", title: "Anaerobic respiration in muscles", content: "Lactic acid and fatigue; oxygen debt after vigorous exercise." },
    { code: "10.4", title: "Fermentation in yeast", content: "Ethanol and CO₂; brewing and bread-making." },
    { code: "10.5", title: "Comparison", content: "Aerobic: O₂, mitochondria, CO₂ + H₂O, much ATP. Anaerobic: no O₂, cytoplasm, lactic acid or ethanol + CO₂, less energy." }
  ],
  quickRecap: "Respiration ≠ breathing.\nAerobic: glucose + O₂ → CO₂ + H₂O + energy (mitochondria).\nMuscle anaerobic: lactic acid.\nYeast: ethanol + CO₂.\nOxygen debt after exercise.\nEnergy for movement, active transport, growth, heat.",
  examTips: "Write aerobic word equation correctly. Never call breathing respiration. Explain oxygen debt as oxidising lactic acid. Use a table to compare aerobic and anaerobic.",
  flashcards: [
    { q: "What is respiration?", a: "Chemical release of energy from glucose in cells." },
    { q: "Where does aerobic respiration mainly occur?", a: "In mitochondria." },
    { q: "What is aerobic respiration?", a: "Respiration using oxygen to break down glucose." },
    { q: "What is anaerobic respiration?", a: "Respiration without oxygen — less energy." },
    { q: "Products of aerobic respiration?", a: "Carbon dioxide, water and energy." },
    { q: "Main substrate for respiration?", a: "Glucose." },
    { q: "What is oxygen debt?", a: "Extra oxygen needed after exercise to break down lactic acid." },
    { q: "Anaerobic product in human muscles?", a: "Lactic acid." },
    { q: "Anaerobic products in yeast?", a: "Ethanol and carbon dioxide." },
    { q: "Why does breathing rate increase during exercise?", a: "To supply more oxygen for aerobic respiration." },
    { q: "Is respiration the same as breathing?", a: "No — respiration is chemical; breathing is ventilation." },
    { q: "Does anaerobic respiration release energy?", a: "Yes, but less than aerobic." },
    { q: "What builds up in muscles during vigorous anaerobic respiration?", a: "Lactic acid." },
    { q: "Why does bread rise when yeast is used?", a: "CO₂ from fermentation forms bubbles in dough." },
    { q: "Name one use of energy from respiration.", a: "Muscle contraction (or active transport, growth, heat)." }
  ],
  mcqs: [
    { q: "Respiration in biology is best defined as:", options: ["The movement of air in and out of the lungs", "The chemical release of energy from glucose in cells", "The digestion of starch in the mouth only", "Photosynthesis in chloroplasts"], answer: 1, explain: "Respiration is a cellular chemical process, not ventilation." },
    { q: "Aerobic respiration requires:", options: ["Carbon dioxide only", "Oxygen", "Nitrogen gas", "Ethanol"], answer: 1, explain: "Oxygen is the final electron acceptor in aerobic respiration." },
    { q: "Anaerobic respiration takes place when:", options: ["Oxygen is plentiful in mitochondria", "Oxygen supply is limited or absent", "No glucose is available anywhere", "Only plants are photosynthesising"], answer: 1, explain: "Without enough O₂, cells may respire anaerobically." },
    { q: "The main substrate broken down in respiration is usually:", options: ["Vitamin C", "Glucose", "Fibre", "Iodine"], answer: 1, explain: "Glucose from digested carbohydrates is the usual fuel." },
    { q: "Aerobic respiration in animal cells occurs mainly in the:", options: ["Nucleus", "Mitochondria", "Cell wall", "Ribosomes only"], answer: 1, explain: "Mitochondria contain enzymes for the later stages of aerobic respiration." },
    { q: "The products of aerobic respiration include:", options: ["Lactic acid only", "Carbon dioxide and water", "Ethanol and oxygen", "Starch and chlorophyll"], answer: 1, explain: "Glucose is fully oxidised to CO₂ and H₂O with energy released." },
    { q: "Anaerobic respiration in human muscle cells produces:", options: ["Ethanol and carbon dioxide", "Lactic acid and a small amount of energy", "Oxygen and glucose", "Only water with no energy"], answer: 1, explain: "Lactic acid accumulates during vigorous exercise when O₂ is limited." },
    { q: "Anaerobic respiration in yeast (fermentation) produces:", options: ["Lactic acid only", "Ethanol and carbon dioxide", "Oxygen and starch", "Protein and bile"], answer: 1, explain: "Yeast ferments glucose when oxygen is absent." },
    { q: "Oxygen debt after vigorous exercise refers to:", options: ["Extra food needed for digestion", "Extra oxygen needed to oxidise accumulated lactic acid", "Oxygen stored in the trachea only", "Carbon dioxide in inspired air"], answer: 1, explain: "Heavy breathing continues until lactic acid is broken down." },
    { q: "Respiration is essential for living cells because it:", options: ["Produces oxygen for the atmosphere", "Releases energy for life processes", "Stores water in vacuoles only", "Replaces photosynthesis in all animals"], answer: 1, explain: "Without respiration, cells lack ATP for work." },
    { q: "Energy released by respiration is used directly or indirectly for:", options: ["Only digestion in the stomach", "Muscle contraction and other cell activities", "Ventilation without any cellular work", "Making chlorophyll in animal cells"], answer: 1, explain: "Examples include active transport and protein synthesis." },
    { q: "Glucose is broken down during:", options: ["Photosynthesis in animals", "Respiration in cells", "Transpiration in xylem only", "Gas exchange in the trachea only"], answer: 1, explain: "Respiration oxidises glucose to release energy." },
    { q: "Compared with anaerobic respiration, aerobic respiration releases:", options: ["Less energy per glucose molecule", "More energy per glucose molecule", "No energy at all", "Only oxygen gas"], answer: 1, explain: "Complete oxidation in aerobic respiration yields more ATP." },
    { q: "Anaerobic respiration releases:", options: ["More energy than aerobic per glucose", "Less energy than aerobic per glucose", "Exactly the same energy as photosynthesis", "No usable energy"], answer: 1, explain: "Partial breakdown of glucose yields fewer ATP molecules." },
    { q: "Build-up of lactic acid in muscles can cause:", options: ["Muscle fatigue and cramp", "Faster permanent growth of bones only", "Increased photosynthesis in skin", "Digestion of fibre in the ileum"], answer: 0, explain: "Lactic acid lowers pH in muscle cells, contributing to fatigue." },
    { q: "Respiration is described as a chemical process because it:", options: ["Involves enzyme-controlled reactions that release energy from food", "Only moves the rib cage during breathing", "Traps light in chloroplasts", "Filters air in the nose"], answer: 0, explain: "Substrates are broken down with energy transferred to ATP." },
    { q: "In aerobic respiration, oxygen is needed mainly to:", options: ["Allow complete breakdown of glucose and maximum energy release", "Produce lactic acid in yeast", "Digest protein in the stomach", "Close stomata in leaves"], answer: 0, explain: "Oxygen accepts electrons at the end of the respiratory chain." },
    { q: "Carbon dioxide produced during aerobic respiration is:", options: ["A waste product exhaled from the lungs", "The main energy store in muscles", "Required for fermentation in mitochondria", "Absorbed by root hairs as food"], answer: 0, explain: "CO₂ diffuses from blood into alveoli and is breathed out." },
    { q: "Energy for cell activities comes from the breakdown of:", options: ["Glucose and other respiratory substrates", "Only water with no food molecules", "Cartilage in the trachea", "Mucus in the bronchi"], answer: 0, explain: "Glucose from digested food is the main fuel." },
    { q: "Yeast is used in bread making partly because it:", options: ["Produces carbon dioxide that makes dough rise", "Absorbs oxygen into haemoglobin", "Digests starch with pepsin", "Transports sucrose in phloem"], answer: 0, explain: "Fermentation releases CO₂ gas trapped in dough." },
    { q: "Respiration in living cells is generally:", options: ["A continuous process while cells are alive", "Only during inhalation once per day", "The same as chewing food", "Only in dead xylem vessels"], answer: 0, explain: "Cells respire constantly to supply energy." },
    { q: "During exercise, the rate of respiration in muscle cells usually:", options: ["Increases to meet higher energy demand", "Stops completely", "Replaces the need for any oxygen", "Only occurs in the lungs not in muscles"], answer: 0, explain: "More ATP is needed for contraction and repair." },
    { q: "Oxygen from the lungs helps aerobic respiration by:", options: ["Allowing more energy to be released from glucose", "Preventing all carbon dioxide formation", "Storing glycogen in the liver only", "Emulsifying fats in bile"], answer: 0, explain: "O₂ enables efficient ATP production in mitochondria." },
    { q: "Anaerobic respiration is less efficient than aerobic because:", options: ["Glucose is not fully oxidised", "More ATP is produced per glucose", "Oxygen is always present in large amounts", "No enzymes are involved"], answer: 0, explain: "Partial pathways leave energy in products like lactic acid or ethanol." },
    { q: "Breathing is not the same as respiration because breathing:", options: ["Is ventilation of the lungs, not energy release in cells", "Occurs only in mitochondria", "Produces lactic acid in yeast", "Breaks down glucose to CO₂ and water"], answer: 0, explain: "Breathing supplies O₂ for respiration but is a separate process." },
    { q: "Active transport across cell membranes requires energy from:", options: ["Respiration (ATP)", "Photosynthesis in animals", "Transpiration pull only", "Diffusion of oxygen in alveoli only"], answer: 0, explain: "Carrier proteins use ATP from respiration." },
    { q: "Protein synthesis in cells uses energy released by:", options: ["Respiration", "Ventilation only", "Transpiration in plants only", "Iodine testing for starch"], answer: 0, explain: "Building polypeptides requires ATP." },
    { q: "In mammals, respiration helps maintain body temperature because:", options: ["Some energy is released as heat", "It stops all muscle contraction", "It removes water from cells", "It produces only ethanol"], answer: 0, explain: "Not all energy from respiration is captured as ATP; some is lost as heat." },
    { q: "Glucose is often called the fuel for respiration because it:", options: ["Is oxidised to release energy for cells", "Is only stored in the trachea", "Never enters the blood", "Is produced by breathing out"], answer: 0, explain: "Carbohydrates are digested to glucose for respiration." },
    { q: "After aerobic respiration, carbon dioxide is removed from the body mainly by:", options: ["Exhalation from the lungs", "Absorption in the small intestine", "Storage in bones", "Photosynthesis in skin"], answer: 0, explain: "CO₂ is transported in blood to the lungs and breathed out." },
    { q: "Water formed in aerobic respiration:", options: ["Is a product of oxidation of glucose with oxygen", "Is the same as bile from the liver", "Only collects in the large intestine as faeces", "Is inhaled through the nose as main fuel"], answer: 0, explain: "H₂O is formed when hydrogen combines with oxygen in respiration." },
    { q: "Respiration occurs in:", options: ["Living cells that need energy", "Only dead plant cell walls", "Only the air spaces of the trachea", "Rocks and soil with no cells"], answer: 0, explain: "All living organisms respire to release energy." },
    { q: "After hard exercise, heavy breathing continues partly to repay:", options: ["Oxygen debt by oxidising lactic acid", "Carbon dioxide debt in the liver only", "Starch debt in muscles", "Water debt in xylem"], answer: 0, explain: "Extra O₂ oxidises lactic acid to CO₂ and water." },
    { q: "Lactic acid produced during anaerobic respiration in muscles is later:", options: ["Oxidised when oxygen is available again", "Stored permanently as starch in lungs", "Converted to ethanol in the stomach", "Exhaled unchanged as nitrogen"], answer: 0, explain: "In the liver and muscles, lactic acid can be oxidised after exercise." },
    { q: "Yeast fermentation is used in brewing because it produces:", options: ["Ethanol (alcohol)", "Lactic acid for muscle growth", "Oxygen for gas exchange", "Haemoglobin in blood"], answer: 0, explain: "Ethanol is the alcohol in fermented drinks." },
    { q: "Without respiration, organisms could not:", options: ["Obtain enough energy for essential life processes", "Ever absorb water by osmosis", "Have a nucleus in cells", "Contain any cytoplasm"], answer: 0, explain: "Growth, movement and repair depend on energy from respiration." },
    { q: "The word equation for aerobic respiration is:", options: ["Glucose + oxygen → carbon dioxide + water + energy", "Carbon dioxide + water → glucose + oxygen", "Glucose → lactic acid + energy only", "Ethanol + oxygen → glucose"], answer: 0, explain: "This summarises aerobic oxidation of glucose." },
    { q: "Anaerobic respiration in yeast differs from muscle anaerobic respiration because yeast produces:", options: ["Ethanol and carbon dioxide instead of lactic acid", "Only oxygen and starch", "Lactic acid and haemoglobin", "Bile and mucus"], answer: 0, explain: "Different pathways and enzymes operate in yeast fermentation." },
    { q: "Mitochondria are described as the powerhouse of the cell because they:", options: ["Release large amounts of energy from glucose using oxygen", "Store genetic material as chromosomes", "Photosynthesise in animals", "Produce mucus in the trachea"], answer: 0, explain: "Most ATP from aerobic respiration is produced in mitochondria." },
    { q: "During sprinting, muscles may respire anaerobically because:", options: ["Oxygen delivery cannot meet the sudden high demand", "No glucose is available in the blood", "Mitochondria stop working permanently", "Lactic acid is needed for photosynthesis"], answer: 0, explain: "Aerobic pathways cannot supply ATP fast enough alone." }
  ],
  theory: [
    {
      q: "Define respiration and distinguish it from breathing.",
      marks: 4,
      points: [
        "Respiration: chemical release of energy from glucose in cells",
        "Breathing: movement of air in and out of lungs (ventilation)",
        "Breathing supplies O₂ for aerobic respiration",
        "They are different processes"
      ]
    },
    {
      q: "Describe aerobic respiration with a word equation.",
      marks: 5,
      points: [
        "Uses oxygen to break down glucose",
        "Word equation: glucose + oxygen → carbon dioxide + water + energy",
        "Occurs in mitochondria",
        "Releases large amount of energy (ATP)",
        "CO₂ exhaled; important for all active organisms"
      ]
    },
    {
      q: "Explain anaerobic respiration in humans and yeast.",
      marks: 6,
      points: [
        "When O₂ limited or absent",
        "Muscles: glucose → lactic acid + energy; fatigue",
        "Yeast: glucose → ethanol + CO₂ + energy",
        "Less energy than aerobic",
        "Yeast used in brewing and baking",
        "Oxygen debt in humans after exercise"
      ]
    },
    {
      q: "Compare aerobic and anaerobic respiration.",
      marks: 6,
      points: [
        "Oxygen: required vs not required",
        "Location: mitochondria vs cytoplasm",
        "Products: CO₂ and water vs lactic acid or ethanol + CO₂",
        "Energy yield: high vs low",
        "Efficiency: complete vs partial breakdown of glucose"
      ]
    },
    {
      q: "Explain oxygen debt after exercise.",
      marks: 4,
      points: [
        "Vigorous exercise causes anaerobic respiration in muscles",
        "Lactic acid accumulates",
        "Extra oxygen needed after exercise to oxidise lactic acid",
        "Heavy breathing continues until debt repaid"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "State three uses of energy released during respiration. [3]",
      marks: 3,
      answer: "Muscle contraction.\nActive transport.\nCell division / protein synthesis / nerve impulses / maintaining body temperature."
    },
    {
      q: "Explain why a person breathes heavily after vigorous exercise. [3]",
      marks: 3,
      answer: "Anaerobic respiration produces lactic acid.\nExtra oxygen is needed to oxidise lactic acid (oxygen debt).\nHeavy breathing supplies the additional oxygen."
    }
  ]
};

(function mergeRespirationChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES.respiration || {};
  BIOLOGY_5090_NOTES.respiration = Object.assign({}, base, RESPIRATION_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ.respiration = {
      flashcards: RESPIRATION_CHAPTER_5090.flashcards,
      mcqs: RESPIRATION_CHAPTER_5090.mcqs,
      theory: RESPIRATION_CHAPTER_5090.theory
    };
  }
})();

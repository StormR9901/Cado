/**
 * Chemistry 5070 — Chapter 7 Acids, bases and salts (full study content)
 */
const ACIDS_BASES_SALTS_CHAPTER_5070 = {
  learningObjectives: [
    "Define acids, bases, alkalis and salts.",
    "Describe the properties of acids and alkalis.",
    "Use indicators to identify acidic, alkaline and neutral substances.",
    "Explain the pH scale.",
    "Describe reactions of acids with metals, bases, alkalis and carbonates.",
    "Explain how salts are prepared.",
    "Write word equations for common acid reactions.",
    "Understand neutralisation and its applications.",
    "Identify soluble and insoluble salts.",
    "Apply knowledge of acids, bases and salts to examination questions."
  ],
  summary: [
    "Acids produce H⁺ ions and have pH below 7.",
    "Alkalis are soluble bases that produce OH⁻ ions and have pH above 7.",
    "Indicators help identify acids and alkalis.",
    "Neutralisation: Acid + Base → Salt + Water.",
    "Acids react with metals to produce hydrogen gas.",
    "Acids react with carbonates to produce carbon dioxide.",
    "Hydrochloric acid forms chlorides; nitric acid forms nitrates; sulfuric acid forms sulfates.",
    "Soluble salts can be prepared using metals, bases, carbonates or titration.",
    "All nitrates and all sodium, potassium and ammonium salts are soluble."
  ],
  definitions: [
    { term: "Acid", definition: "A substance that produces hydrogen ions (H⁺) when dissolved in water." },
    { term: "Base", definition: "A substance that reacts with an acid to form a salt and water." },
    { term: "Alkali", definition: "A soluble base that produces hydroxide ions (OH⁻) in water." },
    { term: "Neutralisation", definition: "The reaction between an acid and a base to produce salt and water only." },
    { term: "Salt", definition: "A compound formed when the hydrogen ion of an acid is replaced by a metal ion or ammonium ion." }
  ],
  comparisonTable: {
    headers: ["Feature", "Acids", "Alkalis"],
    rows: [
      ["pH", "Less than 7", "Greater than 7"],
      ["Ions in water", "H⁺ (hydrogen ions)", "OH⁻ (hydroxide ions)"],
      ["Litmus", "Turn blue litmus red", "Turn red litmus blue"],
      ["Examples", "HCl, H₂SO₄, HNO₃", "NaOH, KOH, NH₃(aq)"],
      ["Reaction with metals", "Salt + hydrogen gas", "Do not react in same way"]
    ]
  },
  examples: [
    { title: "Acid + metal", text: "Magnesium + Hydrochloric acid → Magnesium chloride + Hydrogen" },
    { title: "Acid + base", text: "Copper(II) oxide + Sulfuric acid → Copper(II) sulfate + Water" },
    { title: "Acid + alkali", text: "Sodium hydroxide + Nitric acid → Sodium nitrate + Water" },
    { title: "Acid + carbonate", text: "Calcium carbonate + Hydrochloric acid → Calcium chloride + Water + Carbon dioxide" },
    { title: "Neutralisation", text: "Hydrochloric acid + Sodium hydroxide → Sodium chloride + Water" }
  ],
  chapterSections: [
    {
      title: "Introduction to acids and bases",
      paragraphs: [
        "Chemistry classifies many substances as acids or bases according to their properties and reactions.",
        "Common acids: hydrochloric acid (HCl), sulfuric acid (H₂SO₄), nitric acid (HNO₃).",
        "Common bases: copper(II) oxide, magnesium oxide, zinc oxide.",
        "Common alkalis: sodium hydroxide, potassium hydroxide, aqueous ammonia."
      ]
    },
    {
      title: "Properties of acids",
      bulletList: [
        "Have pH less than 7",
        "Turn blue litmus paper red",
        "Conduct electricity in solution (electrolytes)",
        "React with metals → salt + hydrogen",
        "React with carbonates → salt + water + carbon dioxide",
        "Neutralise bases and alkalis"
      ]
    },
    {
      title: "Properties of bases and alkalis",
      bulletList: [
        "Bases neutralise acids; usually metal oxides or hydroxides",
        "Alkalis have pH greater than 7",
        "Turn red litmus paper blue",
        "Contain OH⁻ ions in solution",
        "Examples: NaOH, KOH, NH₃(aq)"
      ]
    },
    {
      title: "Indicators and the pH scale",
      bulletList: [
        "Litmus: acid = red, neutral = purple, alkali = blue",
        "Universal indicator: red (pH 1–3), orange/yellow (4–6), green (7), blue (8–10), purple (11–14)",
        "pH 0–6 acidic, 7 neutral, 8–14 alkaline",
        "Examples: lemon juice pH 2, pure water pH 7, sodium hydroxide pH 14"
      ]
    },
    {
      title: "Reactions of acids",
      numberedList: [
        "Acid + metal → salt + hydrogen (e.g. Mg + HCl → MgCl₂ + H₂)",
        "Acid + base → salt + water (e.g. CuO + H₂SO₄ → CuSO₄ + H₂O)",
        "Acid + alkali → salt + water (e.g. NaOH + HNO₃ → NaNO₃ + H₂O)",
        "Acid + carbonate → salt + water + carbon dioxide (e.g. CaCO₃ + HCl → CaCl₂ + H₂O + CO₂)"
      ]
    },
    {
      title: "Neutralisation and its uses",
      bulletList: [
        "Acid + base → salt + water",
        "Treating indigestion (antacids neutralise stomach acid)",
        "Neutralising acidic soil with lime",
        "Treating industrial waste",
        "Correcting pH in swimming pools"
      ]
    },
    {
      title: "Making salts",
      numberedList: [
        "Acid + metal — e.g. Zn + H₂SO₄ → ZnSO₄ + H₂ (filter, evaporate, crystallise)",
        "Acid + insoluble base — warm acid, add excess base, filter, evaporate, crystallise",
        "Acid + carbonate — e.g. CaCO₃ + HNO₃ → Ca(NO₃)₂ + H₂O + CO₂",
        "Acid + alkali (titration) — add indicator, titrate, repeat without indicator, evaporate and crystallise"
      ]
    },
    {
      title: "Solubility rules",
      bulletList: [
        "All nitrates are soluble",
        "All sodium, potassium and ammonium salts are soluble",
        "Most chlorides soluble except silver chloride and lead(II) chloride",
        "Most sulfates soluble except barium sulfate and lead(II) sulfate",
        "Most carbonates insoluble except sodium, potassium and ammonium carbonates"
      ]
    },
    {
      title: "Salt names from acids",
      bulletList: [
        "Hydrochloric acid → chlorides (e.g. sodium chloride)",
        "Nitric acid → nitrates (e.g. potassium nitrate)",
        "Sulfuric acid → sulfates (e.g. copper sulfate)"
      ]
    }
  ],
  examTips: "Remember: acid + metal → H₂; acid + carbonate → CO₂ (test with limewater). HCl → chlorides, HNO₃ → nitrates, H₂SO₄ → sulfates. Alkali = soluble base with OH⁻. For salt prep from insoluble base: excess base, then filter. For acid + alkali use titration. All nitrates soluble; barium sulfate and silver chloride are key insoluble examples.",
  quickRecap: "Acid → H⁺, pH < 7, blue litmus → red.\nAlkali → OH⁻, pH > 7, red litmus → blue.\nNeutralisation: acid + base → salt + water.\nAcid + metal → salt + H₂.\nAcid + carbonate → salt + H₂O + CO₂.\nHCl → chlorides; HNO₃ → nitrates; H₂SO₄ → sulfates.\nAll nitrates soluble.",
  flashcards: [
    { q: "What is an acid?", a: "A substance that produces H⁺ ions in water." },
    { q: "What is an alkali?", a: "A soluble base that produces OH⁻ ions." },
    { q: "What colour does blue litmus turn in acid?", a: "Red." },
    { q: "What colour does red litmus turn in alkali?", a: "Blue." },
    { q: "What is the pH of a neutral solution?", a: "7." },
    { q: "What gas forms when acids react with metals?", a: "Hydrogen." },
    { q: "What gas forms when acids react with carbonates?", a: "Carbon dioxide." },
    { q: "What are salts from hydrochloric acid called?", a: "Chlorides." },
    { q: "What are salts from nitric acid called?", a: "Nitrates." },
    { q: "What are salts from sulfuric acid called?", a: "Sulfates." },
    { q: "Define neutralisation.", a: "Acid + Base → Salt + Water." },
    { q: "Name a strong alkali.", a: "Sodium hydroxide." },
    { q: "Which indicator shows many colours?", a: "Universal indicator." },
    { q: "Which salts are always soluble?", a: "Nitrates." },
    { q: "Which acid forms sulfate salts?", a: "Sulfuric acid." }
  ],
  mcqs: [
    { q: "Which substance is an acid?", options: ["Sodium hydroxide", "Hydrochloric acid", "Copper oxide", "Calcium carbonate"], answer: 1, explain: "Hydrochloric acid releases H⁺ ions in water." },
    { q: "Which ion is produced by acids in water?", options: ["Na⁺", "OH⁻", "H⁺", "Cl⁻"], answer: 2, explain: "Acids produce hydrogen ions." },
    { q: "What is the pH of a neutral solution?", options: ["3", "5", "7", "10"], answer: 2, explain: "Neutral solutions have pH 7." },
    { q: "Which colour does blue litmus turn in an acid?", options: ["Green", "Purple", "Red", "Yellow"], answer: 2, explain: "Acids turn blue litmus red." },
    { q: "Which colour does red litmus turn in an alkali?", options: ["Blue", "Red", "Green", "Orange"], answer: 0, explain: "Alkalis turn red litmus blue." },
    { q: "Which is a soluble base?", options: ["Copper oxide", "Magnesium oxide", "Sodium hydroxide", "Iron oxide"], answer: 2, explain: "Sodium hydroxide is an alkali." },
    { q: "What is produced when an acid reacts with a metal?", options: ["Salt and oxygen", "Salt and hydrogen", "Water and oxygen", "Water and carbon dioxide"], answer: 1, explain: "Acids react with metals to release hydrogen gas." },
    { q: "Which gas is formed when magnesium reacts with hydrochloric acid?", options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"], answer: 2, explain: "Hydrogen is produced." },
    { q: "What is produced when an acid reacts with a carbonate?", options: ["Salt only", "Salt and hydrogen", "Salt and oxygen", "Salt, water and carbon dioxide"], answer: 3, explain: "Carbonates release carbon dioxide with acids." },
    { q: "Which acid forms nitrate salts?", options: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Ethanoic acid"], answer: 2, explain: "Nitric acid produces nitrates." },
    { q: "What is the name of the salt formed from hydrochloric acid?", options: ["Sulfate", "Nitrate", "Chloride", "Carbonate"], answer: 2, explain: "Hydrochloric acid forms chlorides." },
    { q: "What is the name of the salt formed from sulfuric acid?", options: ["Chloride", "Sulfate", "Nitrate", "Oxide"], answer: 1, explain: "Sulfuric acid forms sulfates." },
    { q: "Which substance has a pH greater than 7?", options: ["Hydrochloric acid", "Lemon juice", "Sodium hydroxide", "Vinegar"], answer: 2, explain: "Alkalis have pH above 7." },
    { q: "Which indicator gives a range of colours?", options: ["Litmus", "Universal indicator", "Methyl orange", "Phenolphthalein"], answer: 1, explain: "Universal indicator shows many colours across the pH scale." },
    { q: "Which solution is neutral?", options: ["Sodium hydroxide", "Hydrochloric acid", "Pure water", "Vinegar"], answer: 2, explain: "Pure water has pH 7." },
    { q: "Which gas turns limewater milky?", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"], answer: 2, explain: "Carbon dioxide forms a white precipitate with limewater." },
    { q: "What is neutralisation?", options: ["Acid + Metal", "Acid + Carbonate", "Acid + Base", "Metal + Water"], answer: 2, explain: "Neutralisation produces salt and water." },
    { q: "Which is a base?", options: ["Copper oxide", "Hydrochloric acid", "Nitric acid", "Sulfuric acid"], answer: 0, explain: "Metal oxides are bases." },
    { q: "Which salt is always soluble?", options: ["Nitrate", "Carbonate", "Sulfide", "Oxide"], answer: 0, explain: "All nitrates are soluble." },
    { q: "Which alkali contains potassium ions?", options: ["Sodium hydroxide", "Potassium hydroxide", "Calcium hydroxide", "Ammonia"], answer: 1, explain: "Potassium hydroxide contains K⁺ ions." },
    { q: "Which acid forms chloride salts?", options: ["Nitric acid", "Sulfuric acid", "Hydrochloric acid", "Carbonic acid"], answer: 2, explain: "Hydrochloric acid forms chlorides." },
    { q: "Which salt is produced when nitric acid reacts with sodium hydroxide?", options: ["Sodium sulfate", "Sodium chloride", "Sodium nitrate", "Sodium carbonate"], answer: 2, explain: "Nitric acid forms nitrate salts." },
    { q: "What is the formula of sulfuric acid?", options: ["HCl", "HNO₃", "H₂SO₄", "NaOH"], answer: 2, explain: "Sulfuric acid is H₂SO₄." },
    { q: "Which substance is alkaline?", options: ["Vinegar", "Lemon juice", "Sodium hydroxide solution", "Hydrochloric acid"], answer: 2, explain: "Sodium hydroxide is an alkali." },
    { q: "Which pH value represents a strong acid?", options: ["1", "7", "10", "13"], answer: 0, explain: "Lower pH means stronger acidity." },
    { q: "What colour is universal indicator at pH 7?", options: ["Red", "Green", "Blue", "Purple"], answer: 1, explain: "Neutral solutions appear green." },
    { q: "Which gas is released when zinc reacts with sulfuric acid?", options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Chlorine"], answer: 2, explain: "Metal + acid produces hydrogen." },
    { q: "Which substance can neutralise an acid?", options: ["Base", "Metal", "Oxygen", "Hydrogen"], answer: 0, explain: "Bases neutralise acids." },
    { q: "Which salt is formed from sulfuric acid and copper oxide?", options: ["Copper chloride", "Copper nitrate", "Copper sulfate", "Copper carbonate"], answer: 2, explain: "Sulfuric acid forms sulfate salts." },
    { q: "Which substance is not a carbonate?", options: ["Calcium carbonate", "Sodium carbonate", "Potassium carbonate", "Sodium chloride"], answer: 3, explain: "Sodium chloride is a chloride salt." },
    { q: "Which ion is present in alkalis?", options: ["H⁺", "OH⁻", "Cl⁻", "SO₄²⁻"], answer: 1, explain: "Alkalis produce hydroxide ions." },
    { q: "Which process is used to prepare a soluble salt from an acid and alkali?", options: ["Filtration", "Distillation", "Titration", "Chromatography"], answer: 2, explain: "Titration is used when both reactants are soluble." },
    { q: "Which carbonate is soluble?", options: ["Calcium carbonate", "Copper carbonate", "Sodium carbonate", "Zinc carbonate"], answer: 2, explain: "Sodium carbonate is soluble." },
    { q: "Which sulfate is insoluble?", options: ["Sodium sulfate", "Potassium sulfate", "Barium sulfate", "Ammonium sulfate"], answer: 2, explain: "Barium sulfate is insoluble." },
    { q: "What is formed during neutralisation?", options: ["Salt and water", "Salt and oxygen", "Water and hydrogen", "Hydrogen only"], answer: 0, explain: "Neutralisation forms salt and water." },
    { q: "Which substance has pH 14?", options: ["Water", "Vinegar", "Sodium hydroxide solution", "Lemon juice"], answer: 2, explain: "Strong alkalis have very high pH values." },
    { q: "Which reagent is added in excess when preparing a soluble salt from an insoluble base?", options: ["Acid", "Base", "Indicator", "Water"], answer: 1, explain: "Excess base ensures all acid reacts." },
    { q: "Which acid is commonly found in laboratory experiments involving chlorides?", options: ["Hydrochloric acid", "Nitric acid", "Sulfuric acid", "Ethanoic acid"], answer: 0, explain: "Hydrochloric acid forms chloride salts." },
    { q: "What is the formula of sodium hydroxide?", options: ["NaCl", "NaOH", "Na₂CO₃", "NaNO₃"], answer: 1, explain: "Sodium hydroxide is NaOH." },
    { q: "Why is universal indicator more useful than litmus?", options: ["It is cheaper", "It measures exact mass", "It shows approximate pH values", "It reacts faster"], answer: 2, explain: "Universal indicator provides information about pH, not just whether a substance is acidic or alkaline." }
  ],
  theory: [
    {
      q: "Define: a) Acid b) Alkali c) Salt",
      marks: 4,
      points: [
        "Acid: substance that produces H⁺ ions when dissolved in water",
        "Alkali: soluble base that produces OH⁻ ions in water",
        "Salt: compound formed when H⁺ of an acid is replaced by a metal ion or NH₄⁺",
        "Clear definitions with correct ions named"
      ]
    },
    {
      q: "Describe the colour changes of: blue litmus in acid, red litmus in alkali, and universal indicator at pH 7.",
      marks: 4,
      points: [
        "Blue litmus turns red in acid",
        "Red litmus turns blue in alkali",
        "Universal indicator is green at pH 7 (neutral)",
        "Link each colour to acidic, alkaline or neutral conditions"
      ]
    },
    {
      q: "Write word equations for: a) Magnesium + Hydrochloric acid b) Calcium carbonate + Nitric acid c) Sodium hydroxide + Sulfuric acid",
      marks: 5,
      points: [
        "a) Magnesium + hydrochloric acid → magnesium chloride + hydrogen",
        "b) Calcium carbonate + nitric acid → calcium nitrate + water + carbon dioxide",
        "c) Sodium hydroxide + sulfuric acid → sodium sulfate + water",
        "Correct products for each reaction type",
        "Correct salt names from the acids used"
      ]
    },
    {
      q: "Explain how copper sulfate crystals can be prepared from copper(II) oxide and sulfuric acid.",
      marks: 5,
      points: [
        "Warm sulfuric acid in a beaker",
        "Add excess copper(II) oxide until no more reacts (acid used up)",
        "Filter to remove excess copper(II) oxide",
        "Evaporate filtrate to concentrate the solution",
        "Leave to cool and crystallise copper sulfate"
      ]
    },
    {
      q: "A student adds hydrochloric acid to calcium carbonate. a) Name the gas produced. b) Describe a test for this gas. c) Write the word equation.",
      marks: 5,
      points: [
        "a) Carbon dioxide",
        "b) Bubble gas through limewater — turns milky/cloudy white",
        "c) Calcium carbonate + hydrochloric acid → calcium chloride + water + carbon dioxide",
        "Effervescence observed as gas is released",
        "Acid + carbonate always produces salt, water and CO₂"
      ]
    }
  ]
};

(function mergeAcidsBasesSaltsChapter5070() {
  if (typeof CHEMISTRY_5070 === "undefined") return;
  var topic = CHEMISTRY_5070.topics.find(function (t) { return t.id === "acids-bases-salts"; });
  if (!topic) return;
  Object.assign(topic, ACIDS_BASES_SALTS_CHAPTER_5070);
})();

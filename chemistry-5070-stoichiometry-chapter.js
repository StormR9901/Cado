/**
 * Chemistry 5070 — Chapter 3 Stoichiometry (full study content)
 */
const STOICHIOMETRY_CHAPTER_5070 = {
  learningObjectives: [
    "Understand the concept of relative atomic mass (Ar).",
    "Understand the concept of relative molecular mass (Mr).",
    "Calculate formula masses from chemical formulae.",
    "Understand and use the mole concept.",
    "Perform mole calculations involving mass and number of particles.",
    "Use balanced chemical equations in stoichiometric calculations.",
    "Determine empirical and molecular formulae.",
    "Calculate reacting masses in chemical reactions.",
    "Apply stoichiometry to practical chemistry problems."
  ],
  summary: [
    "Stoichiometry is the study of quantitative relationships in chemical reactions.",
    "Relative atomic mass (Ar) compares atomic masses to carbon-12.",
    "Relative molecular mass (Mr) is the sum of atomic masses in a molecule.",
    "One mole contains 6.02 × 10²³ particles (Avogadro constant).",
    "Moles = mass ÷ Mr; mass = moles × Mr.",
    "Balanced equations provide mole ratios for calculations.",
    "Empirical formulae show the simplest ratio of atoms.",
    "Molecular formulae show the actual number of atoms.",
    "Stoichiometry predicts amounts of reactants and products."
  ],
  definitions: [
    { term: "Relative atomic mass (Ar)", definition: "The weighted average mass of an atom of an element compared with 1/12 of the mass of a carbon-12 atom." },
    { term: "Relative molecular mass (Mr)", definition: "The sum of the relative atomic masses of all atoms in a molecule." },
    { term: "Formula mass", definition: "The total relative mass of all atoms shown in a formula (used for ionic compounds)." },
    { term: "Mole", definition: "The amount of substance containing 6.02 × 10²³ particles." },
    { term: "Avogadro constant", definition: "The number of particles in one mole of a substance, equal to 6.02 × 10²³." },
    { term: "Empirical formula", definition: "The simplest whole-number ratio of atoms in a compound." },
    { term: "Molecular formula", definition: "The actual number of atoms of each element in a molecule." },
    { term: "Stoichiometry", definition: "The quantitative relationship between reactants and products in chemical reactions." }
  ],
  comparisonTable: {
    headers: ["Feature", "Empirical formula", "Molecular formula"],
    rows: [
      ["Shows", "Simplest ratio of atoms", "Actual numbers of atoms"],
      ["Example (ethene)", "CH₂", "C₂H₄"],
      ["Example (glucose)", "CH₂O", "C₆H₁₂O₆"],
      ["Example (hydrogen peroxide)", "HO", "H₂O₂"],
      ["Related to Mr", "Empirical formula mass × n = Mr", "n = Mr ÷ empirical formula mass"]
    ]
  },
  examples: [
    { title: "Mr of water", text: "H₂O: Mr = (2 × 1) + 16 = 18." },
    { title: "1 mole of water", text: "18 g of water = 1 mol = 6.02 × 10²³ molecules." },
    { title: "Reacting masses", text: "24 g Mg + 16 g O → 40 g MgO." },
    { title: "Empirical formula", text: "24 g C and 4 g H → 2 mol C and 4 mol H → ratio 1:2 → CH₂." },
    { title: "Molecular formula", text: "Empirical CH₂, Mr = 28 → multiplier 2 → molecular formula C₂H₄." }
  ],
  chapterSections: [
    {
      title: "Introduction to stoichiometry",
      paragraphs: [
        "Stoichiometry is the branch of chemistry concerned with calculating quantities of substances involved in chemical reactions.",
        "Chemists use it to determine how much reactant is needed, how much product will form, and the ratios between substances.",
        "Balanced chemical equations are essential because they show these ratios.",
        "Example: 2H₂ + O₂ → 2H₂O means 2 molecules of hydrogen react with 1 molecule of oxygen to produce 2 molecules of water — the same ratio applies to moles."
      ]
    },
    {
      title: "Relative atomic mass (Ar)",
      paragraphs: [
        "Atoms are extremely small, so their masses are compared using a relative scale based on carbon-12."
      ],
      bulletList: [
        "H = 1, C = 12, N = 14, O = 16",
        "Na = 23, Mg = 24, S = 32, Cl = 35.5"
      ]
    },
    {
      title: "Relative molecular mass (Mr) and formula mass",
      bulletList: [
        "H₂O: Mr = (2 × 1) + 16 = 18",
        "CO₂: Mr = 12 + (2 × 16) = 44",
        "CH₄: Mr = 12 + (4 × 1) = 16",
        "NaCl (formula mass): 23 + 35.5 = 58.5",
        "MgO: 24 + 16 = 40",
        "CaCO₃: 40 + 12 + (3 × 16) = 100"
      ]
    },
    {
      title: "The mole concept",
      paragraphs: [
        "The mole allows chemists to count particles by weighing substances.",
        "1 mole contains 6.02 × 10²³ particles — Avogadro's constant.",
        "Instead of counting individual particles, chemists use moles to measure huge numbers of particles practically."
      ]
    },
    {
      title: "Mole calculations",
      numberedList: [
        "moles = mass ÷ Mr",
        "mass = moles × Mr",
        "particles = moles × 6.02 × 10²³",
        "Example: 18 g water (Mr 18) → 1 mol",
        "Example: 44 g CO₂ (Mr 44) → 1 mol",
        "Example: 2 mol water → mass = 2 × 18 = 36 g",
        "Example: 2 mol O₂ → 2 × 6.02 × 10²³ = 1.204 × 10²⁴ molecules"
      ]
    },
    {
      title: "Balanced equations and mole ratios",
      paragraphs: [
        "A balanced equation has equal numbers of each type of atom on both sides.",
        "Example: 2Mg + O₂ → 2MgO — 2 Mg and 2 O atoms on each side.",
        "N₂ + 3H₂ → 2NH₃ gives mole ratio N₂ : H₂ : NH₃ = 1 : 3 : 2.",
        "1 mole nitrogen reacts with 3 moles hydrogen to produce 2 moles ammonia."
      ]
    },
    {
      title: "Reacting mass calculations",
      paragraphs: [
        "From Mg + O → MgO: Ar Mg = 24, O = 16, MgO = 40.",
        "24 g magnesium reacts with 16 g oxygen to produce 40 g magnesium oxide."
      ]
    },
    {
      title: "Empirical and molecular formulae",
      numberedList: [
        "Empirical formula: simplest ratio (H₂O₂ → HO, C₂H₄ → CH₂, C₆H₁₂O₆ → CH₂O)",
        "To find empirical formula: convert masses to moles, divide by smallest mole value",
        "Example: 24 g C (2 mol) + 4 g H (4 mol) → ratio 1:2 → CH₂",
        "Molecular formula = whole-number multiple of empirical formula",
        "Multiplier n = Mr ÷ empirical formula mass (e.g. CH₂ mass 14, Mr 28 → n = 2 → C₂H₄)"
      ]
    },
    {
      title: "Applications of stoichiometry",
      bulletList: [
        "Manufacturing fertilisers",
        "Producing medicines",
        "Industrial chemical production",
        "Fuel combustion calculations",
        "Environmental monitoring"
      ]
    }
  ],
  examTips: "Always show working: Mr calculation → moles = mass ÷ Mr → use mole ratio from balanced equation. Check equations are balanced before using coefficients. For empirical formulae, divide moles by the smallest value and round to simple whole numbers. Remember O₂ and H₂ are diatomic when calculating Mr.",
  quickRecap: "Ar: relative to C-12.\nMr: sum of Ar values in formula.\nmoles = mass ÷ Mr\nmass = moles × Mr\n1 mol = 6.02 × 10²³ particles.\nBalanced equations give mole ratios.\nEmpirical = simplest ratio; molecular = actual atoms.\nn = Mr ÷ empirical formula mass.",
  flashcards: [
    { q: "What does Ar stand for?", a: "Relative atomic mass." },
    { q: "What does Mr stand for?", a: "Relative molecular mass." },
    { q: "What is a mole?", a: "6.02 × 10²³ particles." },
    { q: "What is Avogadro's constant?", a: "6.02 × 10²³ particles per mole." },
    { q: "Formula for moles?", a: "mass ÷ Mr." },
    { q: "Formula for mass?", a: "moles × Mr." },
    { q: "Mr of H₂O?", a: "18." },
    { q: "Mr of CO₂?", a: "44." },
    { q: "Ar of oxygen?", a: "16." },
    { q: "Ar of carbon?", a: "12." },
    { q: "What is an empirical formula?", a: "Simplest whole-number ratio of atoms." },
    { q: "What is a molecular formula?", a: "Actual numbers of atoms in a molecule." },
    { q: "Why balance equations?", a: "To conserve atoms and show mole ratios." },
    { q: "Mole ratio from equation?", a: "Ratio of coefficients in balanced equation." },
    { q: "Formula mass of NaCl?", a: "58.5." }
  ],
  mcqs: [
    { q: "What does the term stoichiometry refer to?", options: ["Study of atomic structure", "Quantitative relationships in chemical reactions", "Study of metals", "Study of acids only"], answer: 1, explain: "Stoichiometry deals with calculating amounts of reactants and products." },
    { q: "What is the relative atomic mass of oxygen?", options: ["8", "12", "16", "32"], answer: 2, explain: "The Ar of oxygen is 16." },
    { q: "What is the Mr of water, H₂O?", options: ["16", "17", "18", "20"], answer: 2, explain: "Mr = (2 × 1) + 16 = 18." },
    { q: "How many moles are present in 18 g of water?", options: ["0.5", "1", "2", "18"], answer: 1, explain: "Moles = 18 ÷ 18 = 1 mol." },
    { q: "What is Avogadro's Constant?", options: ["6.02 × 10²³", "3.01 × 10²³", "12", "44"], answer: 0, explain: "One mole contains 6.02 × 10²³ particles." },
    { q: "Which formula is used to calculate moles?", options: ["moles = Mr ÷ mass", "moles = mass ÷ Mr", "moles = mass × Mr", "moles = Ar × mass"], answer: 1, explain: "Moles = mass ÷ relative formula mass." },
    { q: "What is the Mr of carbon dioxide, CO₂?", options: ["28", "32", "40", "44"], answer: 3, explain: "12 + (2 × 16) = 44." },
    { q: "How many moles are present in 44 g of carbon dioxide?", options: ["0.5", "1", "2", "44"], answer: 1, explain: "44 ÷ 44 = 1 mole." },
    { q: "What is the formula mass of sodium chloride?", options: ["23", "35.5", "58.5", "70"], answer: 2, explain: "23 + 35.5 = 58.5." },
    { q: "Which is the empirical formula of C₂H₄?", options: ["CH", "CH₂", "C₂H₂", "H₂"], answer: 1, explain: "Divide both subscripts by 2." },
    { q: "What is the Mr of methane, CH₄?", options: ["12", "14", "16", "18"], answer: 2, explain: "Mr = 12 + (4 × 1) = 16." },
    { q: "How many moles are present in 24 g of magnesium?", options: ["0.5", "1", "2", "24"], answer: 1, explain: "Moles = 24 ÷ 24 = 1 mol." },
    { q: "Which quantity contains 6.02 × 10²³ particles?", options: ["One atom", "One molecule", "One mole", "One gram"], answer: 2, explain: "One mole contains Avogadro's number of particles." },
    { q: "What is the empirical formula of H₂O₂?", options: ["H₂O₂", "H₂O", "HO", "HO₂"], answer: 2, explain: "Divide both subscripts by 2 to get HO." },
    { q: "Which balanced equation correctly represents the formation of water?", options: ["H₂ + O₂ → H₂O", "2H₂ + O₂ → 2H₂O", "H₂ + O → H₂O", "H₂ + 2O₂ → H₂O"], answer: 1, explain: "Atom numbers must be equal on both sides." },
    { q: "What is the mass of 2 moles of carbon dioxide?", options: ["22 g", "44 g", "66 g", "88 g"], answer: 3, explain: "Mass = 2 × 44 = 88 g." },
    { q: "What is the Ar of sulfur?", options: ["16", "24", "32", "35.5"], answer: 2, explain: "Sulfur has Ar = 32." },
    { q: "Which formula is used to calculate mass?", options: ["mass = moles × Mr", "mass = Mr ÷ moles", "mass = Ar × moles²", "mass = particles ÷ Avogadro's Constant"], answer: 0, explain: "Mass = moles × Mr." },
    { q: "How many moles are present in 88 g of carbon dioxide?", options: ["1", "2", "3", "4"], answer: 1, explain: "88 ÷ 44 = 2 mol." },
    { q: "What is the formula mass of MgO?", options: ["24", "16", "40", "48"], answer: 2, explain: "24 + 16 = 40." },
    { q: "In N₂ + 3H₂ → 2NH₃, what is the mole ratio of hydrogen to ammonia?", options: ["1:2", "2:3", "3:2", "3:1"], answer: 2, explain: "Coefficients show 3 moles H₂ to 2 moles NH₃." },
    { q: "What is the Mr of ammonia, NH₃?", options: ["14", "15", "16", "17"], answer: 3, explain: "14 + (3 × 1) = 17." },
    { q: "Which statement about empirical formulae is correct?", options: ["They show actual atom numbers", "They show the simplest ratio of atoms", "They show molecular mass", "They only apply to gases"], answer: 1, explain: "Empirical formulae give the simplest whole-number ratio." },
    { q: "What is the empirical formula of C₆H₁₂O₆?", options: ["CH₂O", "C₂H₄O₂", "CHO", "C₆H₁₂O₆"], answer: 0, explain: "Divide all subscripts by 6." },
    { q: "What is the Mr of oxygen gas, O₂?", options: ["16", "18", "24", "32"], answer: 3, explain: "2 × 16 = 32." },
    { q: "How many moles are present in 32 g of oxygen gas?", options: ["0.5", "1", "2", "4"], answer: 1, explain: "32 ÷ 32 = 1 mol." },
    { q: "Which value represents the Ar of chlorine?", options: ["16", "23", "35.5", "40"], answer: 2, explain: "Chlorine has Ar = 35.5." },
    { q: "What is the mass of 0.5 moles of water?", options: ["9 g", "18 g", "27 g", "36 g"], answer: 0, explain: "0.5 × 18 = 9 g." },
    { q: "Which quantity is conserved in a balanced chemical equation?", options: ["Colour", "Volume", "Number of atoms", "Temperature"], answer: 2, explain: "Balanced equations conserve atoms." },
    { q: "What is the formula mass of CaCO₃?", options: ["60", "80", "100", "120"], answer: 2, explain: "40 + 12 + (3 × 16) = 100." },
    { q: "How many molecules are present in one mole of water?", options: ["6.02 × 10²³", "3.01 × 10²³", "12 × 10²³", "1 × 10²³"], answer: 0, explain: "One mole contains Avogadro's number of particles." },
    { q: "What is the mass of 3 moles of methane?", options: ["16 g", "32 g", "48 g", "64 g"], answer: 2, explain: "3 × 16 = 48 g." },
    { q: "Molecular formula if empirical is CH₂ and Mr is 28?", options: ["CH₂", "C₂H₂", "C₂H₄", "C₄H₈"], answer: 2, explain: "Empirical mass = 14; 28 ÷ 14 = 2 → C₂H₄." },
    { q: "Why are balanced equations important in stoichiometry?", options: ["They show colours", "They show temperatures", "They provide mole ratios", "They show reaction speed"], answer: 2, explain: "Stoichiometric calculations depend on mole ratios." },
    { q: "What is the Mr of sulfur dioxide, SO₂?", options: ["32", "48", "64", "80"], answer: 2, explain: "32 + (2 × 16) = 64." },
    { q: "Which formula converts moles into particles?", options: ["particles = moles × 6.02 × 10²³", "particles = mass ÷ Mr", "particles = Mr × Ar", "particles = moles ÷ 6.02 × 10²³"], answer: 0, explain: "Multiply moles by Avogadro's constant." },
    { q: "How many moles are present in 100 g of calcium carbonate?", options: ["0.5", "1", "2", "4"], answer: 1, explain: "Mr(CaCO₃) = 100; 100 ÷ 100 = 1 mol." },
    { q: "Which term describes the actual number of atoms in a molecule?", options: ["Empirical formula", "Relative formula mass", "Molecular formula", "Mole ratio"], answer: 2, explain: "Molecular formulae show actual atom numbers." },
    { q: "What is the empirical formula of C₂H₆?", options: ["CH₃", "CH₂", "C₂H₆", "CH"], answer: 0, explain: "Divide both subscripts by 2." },
    { q: "Which statement best describes stoichiometry?", options: ["Study of atomic structure", "Study of chemical bonding only", "Quantitative relationships between reactants and products", "Study of periodic trends"], answer: 2, explain: "Stoichiometry calculates amounts in chemical reactions." }
  ],
  theory: [
    {
      q: "Calculate the relative molecular mass (Mr) of: a) H₂SO₄, b) NH₃, c) CaCO₃.",
      marks: 6,
      points: [
        "H₂SO₄: (2 × 1) + 32 + (4 × 16) = 98",
        "NH₃: 14 + (3 × 1) = 17",
        "CaCO₃: 40 + 12 + (3 × 16) = 100",
        "Show addition of Ar values with correct subscripts"
      ]
    },
    {
      q: "Calculate the number of moles present in: a) 36 g of water, b) 88 g of carbon dioxide, c) 48 g of magnesium.",
      marks: 6,
      points: [
        "Water: 36 ÷ 18 = 2 mol",
        "CO₂: 88 ÷ 44 = 2 mol",
        "Mg: 48 ÷ 24 = 2 mol",
        "Use moles = mass ÷ Mr for each"
      ]
    },
    {
      q: "For 2Mg + O₂ → 2MgO: a) State the mole ratio of Mg to O₂. b) Calculate the mass of MgO produced when 48 g of magnesium reacts completely.",
      marks: 5,
      points: [
        "Mole ratio Mg : O₂ = 2 : 1",
        "48 g Mg = 2 mol Mg",
        "2 mol Mg produces 2 mol MgO",
        "Mass MgO = 2 × 40 = 80 g"
      ]
    },
    {
      q: "A compound contains 12 g of carbon and 4 g of hydrogen. Determine its empirical formula.",
      marks: 4,
      points: [
        "C: 12 ÷ 12 = 1 mol; H: 4 ÷ 1 = 4 mol",
        "Divide by smallest (1): C = 1, H = 4",
        "Empirical formula = CH₄"
      ]
    },
    {
      q: "A compound has empirical formula CH₂ and molecular mass 56. Calculate its molecular formula.",
      marks: 4,
      points: [
        "Empirical formula mass = 12 + (2 × 1) = 14",
        "Multiplier n = 56 ÷ 14 = 4",
        "Molecular formula = C₄H₈",
        "Molecular formula = n × empirical formula"
      ]
    }
  ]
};

(function mergeStoichiometryChapter5070() {
  if (typeof CHEMISTRY_5070 === "undefined") return;
  var topic = CHEMISTRY_5070.topics.find(function (t) { return t.id === "stoichiometry"; });
  if (!topic) return;
  Object.assign(topic, STOICHIOMETRY_CHAPTER_5070);
})();

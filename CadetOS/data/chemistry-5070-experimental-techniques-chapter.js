/**
 * Chemistry 5070 — Chapter 12 Experimental techniques and chemical analysis (full study content)
 */
const EXPERIMENTAL_TECHNIQUES_CHAPTER_5070 = {
  learningObjectives: [
    "Understand common laboratory separation techniques.",
    "Describe filtration, crystallisation, evaporation, distillation and chromatography.",
    "Explain how pure substances are obtained from mixtures.",
    "Interpret chromatograms (basic level).",
    "Understand qualitative analysis (tests for gases and ions).",
    "Describe tests for common gases.",
    "Identify cations and anions using chemical tests.",
    "Understand accuracy, precision, and sources of error in experiments.",
    "Apply chemical analysis methods to unknown substances."
  ],
  summary: [
    "Experimental techniques separate mixtures.",
    "Filtration, distillation, crystallisation, and chromatography are key methods.",
    "Chemical tests identify gases and ions.",
    "Pure substances have fixed melting and boiling points.",
    "Accuracy and precision are important in experiments.",
    "Chemical analysis helps identify unknown substances."
  ],
  definitions: [
    { term: "Mixture", definition: "Two or more substances physically combined, not chemically bonded." },
    { term: "Pure substance", definition: "A material made of only one type of particle." },
    { term: "Filtrate", definition: "Liquid that passes through filter paper." },
    { term: "Residue", definition: "Solid left behind during filtration." },
    { term: "Solvent", definition: "Liquid that dissolves a solute." },
    { term: "Solute", definition: "Substance that dissolves in a solvent." }
  ],
  comparisonTable: {
    headers: ["Technique", "Used for", "Example"],
    rows: [
      ["Filtration", "Insoluble solid from liquid", "Sand from water"],
      ["Crystallisation", "Pure crystals from solution", "Copper sulfate crystals"],
      ["Evaporation", "Solid from solution (remove solvent)", "Salt from saltwater"],
      ["Simple distillation", "Solvent from solution", "Pure water from saltwater"],
      ["Fractional distillation", "Liquids with different boiling points", "Crude oil fractions"],
      ["Chromatography", "Dissolved substances in a mixture", "Separating ink dyes"]
    ]
  },
  examples: [
    { title: "Salt and sand", text: "Add water to dissolve salt → filter sand (residue) → evaporate filtrate to obtain salt." },
    { title: "Acid + carbonate gas test", text: "Add acid to carbonate → CO₂ produced → turns limewater milky." },
    { title: "Sulfate ion test", text: "Add acidified barium chloride → white precipitate of barium sulfate." },
    { title: "Chromatography", text: "Ink spots on paper; solvent rises; dyes separate by different solubilities." }
  ],
  chapterSections: [
    {
      title: "Introduction to experimental techniques",
      paragraphs: [
        "Chemistry often involves separating mixtures and identifying substances using physical and chemical methods.",
        "A mixture contains two or more substances that are not chemically combined."
      ]
    },
    {
      title: "Filtration",
      bulletList: [
        "Separates insoluble solid from liquid",
        "Residue: solid left on filter paper",
        "Filtrate: liquid that passes through",
        "Example: sand + water → sand (residue), water (filtrate)"
      ]
    },
    {
      title: "Crystallisation and evaporation",
      bulletList: [
        "Crystallisation: heat solution to concentrate, cool, crystals form, dry — e.g. copper sulfate crystals",
        "Evaporation: remove solvent to obtain solid — e.g. salt from saltwater",
        "Evaporation limitation: may lose some product or decompose solute on strong heating"
      ]
    },
    {
      title: "Distillation",
      bulletList: [
        "Simple distillation: separates solvent from solution — heat, vaporise, condense, collect",
        "Fractional distillation: separates liquids with different boiling points — e.g. crude oil",
        "Involves evaporation and condensation"
      ]
    },
    {
      title: "Chromatography",
      bulletList: [
        "Separates mixtures of dissolved substances — e.g. ink dyes on chromatography paper",
        "Uses paper and solvent; substances move different distances based on solubility",
        "Rf value = distance moved by substance ÷ distance moved by solvent"
      ]
    },
    {
      title: "Purity",
      bulletList: [
        "Pure substances have sharp, fixed melting and boiling points",
        "Impure substances melt over a range of temperatures"
      ]
    },
    {
      title: "Tests for gases",
      bulletList: [
        "Oxygen — relights a glowing splint",
        "Hydrogen — 'pop' sound with burning splint",
        "Carbon dioxide — turns limewater milky",
        "Ammonia — turns damp red litmus paper blue"
      ]
    },
    {
      title: "Tests for ions",
      bulletList: [
        "Ammonium NH₄⁺ — add NaOH and heat → ammonia gas",
        "Carbonate CO₃²⁻ — add acid → CO₂ gas (test with limewater)",
        "Sulfate SO₄²⁻ — add acidified barium chloride → white BaSO₄ precipitate",
        "Chloride Cl⁻ — add silver nitrate → white AgCl precipitate"
      ]
    },
    {
      title: "Flame tests",
      bulletList: [
        "Sodium — yellow flame",
        "Potassium — lilac flame",
        "Calcium — brick red flame",
        "Copper — green flame"
      ]
    },
    {
      title: "Accuracy, precision and safe practice",
      bulletList: [
        "Accuracy: how close a result is to the true value",
        "Precision: how close repeated results are to each other",
        "Errors: human (parallax), equipment (zero error)",
        "Safety: goggles, careful acid handling, tongs for hot objects, do not inhale gases directly"
      ]
    }
  ],
  examTips: "Filtration = insoluble solid. Crystallisation = pure crystals on cooling. Simple distillation = solvent from solution. Fractional distillation = liquids by boiling point. H₂ = pop; O₂ = glowing splint relights; CO₂ = limewater milky; NH₃ = damp red litmus blue. SO₄²⁻ + BaCl₂ (acidified) → white ppt. Cl⁻ + AgNO₃ → white ppt. CO₃²⁻ + acid → CO₂. NH₄⁺ + NaOH + heat → NH₃. Pure = sharp melting point.",
  quickRecap: "Mixture = physical combination.\nFiltration: residue (solid), filtrate (liquid).\nCrystallisation: crystals from solution.\nEvaporation: remove solvent.\nDistillation: boil and condense.\nChromatography: separate by solubility; Rf = distance ratio.\nH₂ pop, O₂ relights splint, CO₂ milky limewater.\nSO₄²⁻ → BaSO₄ white; Cl⁻ → AgCl white.\nAccuracy = true value; precision = repeatability.",
  flashcards: [
    { q: "What is a mixture?", a: "Two or more substances not chemically bonded." },
    { q: "What is filtration used for?", a: "Separating insoluble solids from liquids." },
    { q: "What is crystallisation?", a: "Formation of solid crystals from solution." },
    { q: "What is distillation used for?", a: "Separating liquids based on boiling point." },
    { q: "What is chromatography used for?", a: "Separating dissolved substances." },
    { q: "What is residue?", a: "Solid left after filtration." },
    { q: "What is filtrate?", a: "Liquid that passes through filter." },
    { q: "Test for hydrogen?", a: "Pop sound with flame." },
    { q: "Test for oxygen?", a: "Relights glowing splint." },
    { q: "Test for CO₂?", a: "Turns limewater milky." },
    { q: "Test for ammonium?", a: "Ammonia gas released with NaOH and heat." },
    { q: "What is a pure substance?", a: "One type of particle only." },
    { q: "What is Rf value?", a: "Distance ratio in chromatography." },
    { q: "What is accuracy?", a: "Closeness to true value." },
    { q: "What is precision?", a: "Closeness of repeated results." }
  ],
  mcqs: [
    { q: "What is a mixture?", options: ["Chemically bonded substances", "One pure substance", "Two or more substances not chemically bonded", "Only gases"], answer: 2, explain: "Mixtures are physical combinations." },
    { q: "Which method separates insoluble solid from liquid?", options: ["Distillation", "Filtration", "Chromatography", "Crystallisation"], answer: 1, explain: "Filtration removes insoluble solids." },
    { q: "What is residue?", options: ["Liquid passed through filter", "Solid left on filter paper", "Gas formed", "Solvent"], answer: 1, explain: "Residue stays on the filter paper." },
    { q: "What is filtrate?", options: ["Solid", "Gas", "Liquid that passes through filter", "Precipitate"], answer: 2, explain: "Filtrate is the liquid collected." },
    { q: "Crystallisation is used to:", options: ["Destroy substances", "Form crystals from solution", "Burn compounds", "Mix gases"], answer: 1, explain: "It produces pure solid crystals." },
    { q: "Evaporation is used to:", options: ["Separate gases", "Remove solvent", "Increase solubility", "Melt solids"], answer: 1, explain: "The solvent is removed leaving the solute." },
    { q: "Simple distillation separates:", options: ["Two solids", "Solid from liquid", "Solvent from solution", "Two solids only"], answer: 2, explain: "It separates and collects the pure solvent." },
    { q: "Fractional distillation is used for:", options: ["Solids", "Liquids with different boiling points", "Gases only", "Metals"], answer: 1, explain: "Liquids separate according to boiling point." },
    { q: "Chromatography separates substances based on:", options: ["Density", "Solubility", "Colour", "Mass"], answer: 1, explain: "Different solubilities in the solvent cause separation." },
    { q: "Rf value is:", options: ["Time ratio", "Distance ratio", "Mass ratio", "Temperature ratio"], answer: 1, explain: "Rf compares distances moved by substance and solvent." },
    { q: "Pure substances have:", options: ["Range of melting points", "Sharp melting point", "No melting point", "Random melting"], answer: 1, explain: "Pure substances melt at one fixed temperature." },
    { q: "Hydrogen test gives:", options: ["Blue flame", "Pop sound", "Green flame", "No change"], answer: 1, explain: "Hydrogen ignites with a characteristic pop." },
    { q: "Oxygen test:", options: ["Pop sound", "Turns limewater milky", "Relights glowing splint", "Turns red litmus blue"], answer: 2, explain: "Oxygen supports combustion and relights a glowing splint." },
    { q: "CO₂ test is:", options: ["Relights splint", "Turns limewater milky", "Smell test", "Flame test"], answer: 1, explain: "CO₂ reacts with limewater to form a white precipitate." },
    { q: "Ammonia turns red litmus:", options: ["Red", "Blue", "Yellow", "Black"], answer: 1, explain: "Ammonia is alkaline and turns red litmus blue." },
    { q: "Test for carbonate:", options: ["Add acid → CO₂ produced", "Add water", "Heat only", "Add base"], answer: 0, explain: "Carbonates release CO₂ when acid is added." },
    { q: "Sulfate test uses:", options: ["NaOH", "Acidified BaCl₂", "Water", "Heat"], answer: 1, explain: "Acidified barium chloride gives a white BaSO₄ precipitate." },
    { q: "Chloride test uses:", options: ["Silver nitrate", "Sodium chloride", "Limewater", "Oxygen"], answer: 0, explain: "Silver nitrate forms a white silver chloride precipitate." },
    { q: "Flame test for sodium:", options: ["Red", "Yellow", "Blue", "Green"], answer: 1, explain: "Sodium produces a yellow flame." },
    { q: "Flame test for potassium:", options: ["Lilac", "Green", "Yellow", "Red"], answer: 0, explain: "Potassium produces a lilac flame." },
    { q: "Accuracy means:", options: ["Same results", "Close to true value", "Random results", "Fast results"], answer: 1, explain: "Accuracy measures how correct a result is." },
    { q: "Precision means:", options: ["Close repeated results", "Correct value", "Large error", "Random value"], answer: 0, explain: "Precision measures consistency of repeated results." },
    { q: "Human error includes:", options: ["Perfect reading", "Parallax error", "Zero error", "Chemical reaction"], answer: 1, explain: "Parallax error occurs when reading scales at wrong angle." },
    { q: "Solvent is:", options: ["Solid", "Liquid that dissolves substance", "Gas", "Residue"], answer: 1, explain: "The solvent dissolves the solute." },
    { q: "Solute is:", options: ["Dissolving liquid", "Substance that dissolves", "Gas", "Filter paper"], answer: 1, explain: "The solute dissolves in the solvent." },
    { q: "Chromatography uses:", options: ["Water only", "Paper and solvent", "Metal rods", "Electricity"], answer: 1, explain: "Paper chromatography uses a solvent on chromatography paper." },
    { q: "Distillation involves:", options: ["Filtration only", "Evaporation and condensation", "Freezing", "Burning"], answer: 1, explain: "Liquid vaporises then condenses back to liquid." },
    { q: "Which is a physical method?", options: ["Burning", "Filtration", "Rusting", "Reaction"], answer: 1, explain: "Filtration involves no chemical change." },
    { q: "Gas formed from ammonium + NaOH:", options: ["Oxygen", "Ammonia", "Hydrogen", "CO₂"], answer: 1, explain: "Ammonia gas is released when ammonium ions react with NaOH." },
    { q: "White precipitate in sulfate test is:", options: ["BaSO₄", "NaCl", "CO₂", "H₂O"], answer: 0, explain: "Barium sulfate is the white precipitate formed." },
    { q: "Which is a separation technique?", options: ["Burning", "Chromatography", "Neutralisation", "Oxidation"], answer: 1, explain: "Chromatography separates components of a mixture." },
    { q: "Filtration separates:", options: ["Gases", "Solids from liquids", "Liquids only", "Metals"], answer: 1, explain: "Insoluble solids are removed from liquids." },
    { q: "Crystals form during:", options: ["Evaporation", "Filtration", "Heating only", "Distillation"], answer: 0, explain: "Crystals form when a saturated solution cools or solvent evaporates." },
    { q: "Which gas turns limewater milky?", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"], answer: 2, explain: "CO₂ forms insoluble calcium carbonate in limewater." },
    { q: "Which is not a separation method?", options: ["Filtration", "Chromatography", "Combustion", "Distillation"], answer: 2, explain: "Combustion is a chemical reaction, not separation." },
    { q: "Evaporation leaves behind:", options: ["Gas", "Solid", "Liquid", "Plasma"], answer: 1, explain: "The solute remains as a solid when solvent evaporates." },
    { q: "Chromatography shows:", options: ["Mass", "Composition", "Temperature", "Pressure"], answer: 1, explain: "It reveals the components present in a mixture." },
    { q: "A pure substance has:", options: ["Variable melting point", "No melting point", "Fixed melting point", "Random melting"], answer: 2, explain: "Pure substances melt at a sharp, fixed temperature." },
    { q: "Which is used in water purification?", options: ["Sodium", "Chlorine", "Oxygen", "Carbon"], answer: 1, explain: "Chlorine kills harmful bacteria in treated water." },
    { q: "Why is chemical analysis important?", options: ["Decoration", "Identifying substances", "Making noise", "Cooling liquids"], answer: 1, explain: "Analysis identifies unknown chemicals and ions." }
  ],
  theory: [
    {
      q: "Describe filtration and crystallisation.",
      marks: 5,
      points: [
        "Filtration separates insoluble solid from liquid using filter paper",
        "Residue stays on paper; filtrate passes through",
        "Crystallisation obtains pure crystals from a solution",
        "Heat solution to concentrate, allow to cool, crystals form",
        "Filter and dry crystals — e.g. copper sulfate from solution"
      ]
    },
    {
      q: "Explain how to test for hydrogen and oxygen.",
      marks: 4,
      points: [
        "Hydrogen: hold a burning splint at mouth of test tube — pop sound heard",
        "Oxygen: place a glowing splint in gas — splint relights",
        "Both tests must be done safely with small quantities of gas",
        "Results are characteristic and used to identify gases produced in reactions"
      ]
    },
    {
      q: "Describe chromatography and its use.",
      marks: 4,
      points: [
        "Used to separate dissolved substances in a mixture",
        "Spot placed on chromatography paper; solvent rises up paper",
        "Substances move different distances depending on solubility",
        "Rf value = distance moved by substance ÷ distance moved by solvent; compares components"
      ]
    },
    {
      q: "Explain tests for sulfate and chloride ions.",
      marks: 5,
      points: [
        "Sulfate SO₄²⁻: add dilute acid then barium chloride (or acidified BaCl₂)",
        "White precipitate of barium sulfate forms if sulfate present",
        "Chloride Cl⁻: add silver nitrate solution",
        "White precipitate of silver chloride forms if chloride present",
        "Both are confirmatory precipitation tests for anions"
      ]
    },
    {
      q: "Explain accuracy and precision with examples.",
      marks: 4,
      points: [
        "Accuracy: how close a measurement is to the true value",
        "Example: a balance reading 100.0 g for a 100.0 g mass is accurate",
        "Precision: how close repeated measurements are to each other",
        "Example: readings 99.8, 99.9, 99.8 g are precise but may not be accurate if true mass differs"
      ]
    }
  ]
};

(function mergeExperimentalTechniquesChapter5070() {
  if (typeof CHEMISTRY_5070 === "undefined") return;
  var topic = CHEMISTRY_5070.topics.find(function (t) { return t.id === "experimental-techniques"; });
  if (!topic) return;
  Object.assign(topic, EXPERIMENTAL_TECHNIQUES_CHAPTER_5070);
})();

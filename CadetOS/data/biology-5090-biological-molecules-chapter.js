/**
 * Biology 5090 - Chapter 4 Biological Molecules (full study content)
 */
const BIOLOGICAL_MOLECULES_CHAPTER_5090 = {
  learningObjectives: [
    "Identify the main biological molecules in living organisms.",
    "Describe the structure and function of carbohydrates, proteins, and lipids.",
    "Explain the role of enzymes in biological reactions.",
    "Describe the tests used to detect biological molecules.",
    "Understand the importance of water in living organisms.",
    "Apply knowledge to biological systems such as nutrition and energy storage."
  ],
  summary: [
    "Biological molecules include carbohydrates, proteins, lipids and water.",
    "Carbohydrates provide energy and structure.",
    "Proteins are made of amino acids and form enzymes and tissues.",
    "Lipids store energy and provide insulation.",
    "Enzymes are proteins that speed up reactions.",
    "Food tests identify different biological molecules.",
    "Water is essential for transport and chemical reactions."
  ],
  examples: [
    { title: "Example 1", text: "Glucose provides quick energy during respiration." },
    { title: "Example 2", text: "Starch stores energy in potato cells." },
    { title: "Example 3", text: "Proteins form muscle tissue; lipids store energy in seeds." }
  ],
  comparisonTable: {
    headers: ["Molecule", "Building blocks", "Main roles"],
    rows: [
      ["Carbohydrates", "Monosaccharides (e.g. glucose)", "Energy, storage (starch, glycogen), structure (cellulose)"],
      ["Proteins", "Amino acids", "Growth, repair, enzymes, hormones"],
      ["Lipids", "Glycerol and fatty acids", "Energy storage, insulation, protection"],
      ["Water", "—", "Solvent, transport, reactions, cell structure"]
    ]
  },
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "Living organisms are made up of important chemical substances called biological molecules. These molecules are essential for growth, energy, structure, and life processes.",
        "The main biological molecules are carbohydrates, proteins, lipids (fats and oils), and water."
      ]
    },
    {
      title: "Carbohydrates",
      paragraphs: [
        "Carbohydrates are made from simple sugar units called monosaccharides (e.g. glucose, fructose).",
        "They provide energy and store energy as starch in plants and glycogen in animals."
      ],
      subsections: [
        {
          title: "Types",
          bulletList: [
            "Monosaccharides: single sugar units (e.g. glucose)",
            "Disaccharides: two sugar units (e.g. sucrose)",
            "Polysaccharides: long chains (e.g. starch, glycogen, cellulose)"
          ]
        }
      ]
    },
    {
      title: "Proteins",
      paragraphs: [
        "Proteins are made from amino acids linked in long chains.",
        "Functions include growth and repair, enzymes, and hormones.",
        "Examples: amylase (enzyme), haemoglobin (oxygen transport)."
      ]
    },
    {
      title: "Lipids",
      paragraphs: [
        "Lipids are made from glycerol and fatty acids.",
        "They provide long-term energy storage, insulation, and protection of organs.",
        "They do not dissolve in water and have high energy content."
      ]
    },
    {
      title: "Water",
      bulletList: [
        "Acts as a solvent",
        "Helps transport of substances",
        "Participates in chemical reactions",
        "Maintains cell structure"
      ]
    },
    {
      title: "Enzymes",
      paragraphs: [
        "Enzymes are biological catalysts that speed up chemical reactions without being used up.",
        "They are proteins, specific to their substrate, and affected by temperature and pH.",
        "The lock-and-key model: the enzyme active site fits only one substrate shape."
      ],
      subsections: [
        {
          title: "Factors affecting enzyme activity",
          bulletList: [
            "Temperature: rate increases to optimum; high temperature denatures enzyme",
            "pH: each enzyme has an optimum pH",
            "Substrate concentration: higher concentration increases rate until active sites are saturated"
          ]
        }
      ]
    },
    {
      title: "Food tests",
      subsections: [
        {
          title: "Starch",
          paragraphs: ["Add iodine solution. Blue-black = positive."]
        },
        {
          title: "Reducing sugars",
          paragraphs: ["Add Benedict's solution and heat. Green, yellow, orange or red = positive."]
        },
        {
          title: "Protein",
          paragraphs: ["Add Biuret reagent (or sodium hydroxide then copper sulfate). Purple or lilac = positive."]
        },
        {
          title: "Lipids",
          paragraphs: ["Ethanol emulsion test: mix with ethanol, pour into water. Milky white emulsion = positive."]
        }
      ]
    },
    {
      title: "DNA (syllabus extension)",
      paragraphs: [
        "DNA is made of nucleotides (sugar, phosphate, base A, T, C, G) in a double helix.",
        "Genes are sections of DNA that code for specific proteins."
      ]
    }
  ],
  definitions: [
    { term: "Biological molecules", definition: "Chemicals that make up living organisms." },
    { term: "Carbohydrates", definition: "Molecules used for energy and structure, built from sugar units." },
    { term: "Protein", definition: "Molecule made of amino acids; used for growth, enzymes and hormones." },
    { term: "Lipids", definition: "Energy-rich molecules made of fatty acids and glycerol." },
    { term: "Enzyme", definition: "Biological catalyst that speeds up reactions without being used up." },
    { term: "Substrate", definition: "Molecule on which an enzyme acts." },
    { term: "Denaturation", definition: "Change in enzyme shape causing loss of function." },
    { term: "Monosaccharide", definition: "Single sugar unit, e.g. glucose." },
    { term: "Polysaccharide", definition: "Long chain of many sugar molecules, e.g. starch." },
    { term: "Reducing sugar", definition: "Sugar that gives a positive Benedict's test when heated." }
  ],
  syllabusPoints: [
    { code: "4.1", title: "Tests for starch and reducing sugars", content: "Iodine turns blue-black with starch. Benedict's solution is heated for reducing sugars; colour change to green, yellow, orange or brick-red is positive. Non-reducing sugars need acid hydrolysis first." },
    { code: "4.2", title: "Tests for protein and fats", content: "Biuret test: NaOH and copper sulfate give purple/lilac for protein. Ethanol emulsion test: ethanol then water gives cloudy white for lipids." },
    { code: "4.3", title: "Structure of carbohydrates", content: "Monosaccharides such as glucose; polysaccharides starch and glycogen for storage; cellulose for plant cell walls." },
    { code: "4.4", title: "Structure of proteins and lipids", content: "Proteins: amino acid chains linked by peptide bonds. Lipids: glycerol plus fatty acids; energy store, insulation, membranes." },
    { code: "4.5", title: "DNA structure", content: "DNA nucleotides (sugar, phosphate, base) form a double helix. Genes code for proteins." }
  ],
  quickRecap: "Starch: iodine → blue-black.\nReducing sugar: Benedict's + heat → brick red.\nProtein: Biuret → purple.\nLipid: ethanol emulsion → milky white.\nGlucose → starch/glycogen storage.\nProteins = amino acids; lipids = glycerol + fatty acids.\nEnzymes: protein catalysts; denatured by extreme heat/pH.",
  examTips: "State exact reagents, conditions and colours for food tests. Benedict's must be heated. Name building blocks for each macromolecule. Link enzyme shape to active site and denaturation.",
  flashcards: [
    { q: "What are biological molecules?", a: "Chemicals that make up living organisms." },
    { q: "Name a monosaccharide.", a: "Glucose (or fructose)." },
    { q: "What is starch used for?", a: "Energy storage in plants." },
    { q: "What are proteins made of?", a: "Amino acids." },
    { q: "What are lipids made of?", a: "Fatty acids and glycerol." },
    { q: "What is the function of enzymes?", a: "Speed up chemical reactions (as catalysts)." },
    { q: "What is a substrate?", a: "The molecule an enzyme acts on." },
    { q: "What happens to enzymes at high temperature?", a: "They denature and lose activity." },
    { q: "What test detects starch?", a: "Iodine test (blue-black positive)." },
    { q: "What colour indicates protein in the Biuret test?", a: "Purple or lilac." },
    { q: "What do lipids provide?", a: "Long-term energy storage (also insulation and protection)." },
    { q: "What is glycogen?", a: "Energy storage polysaccharide in animals." },
    { q: "What is cellulose used for?", a: "Plant cell walls (structural)." },
    { q: "What is the role of water?", a: "Solvent and transport medium; takes part in reactions." },
    { q: "What is denaturation?", a: "Loss of enzyme shape and function." }
  ],
  mcqs: [
    { q: "What is glucose mainly used for in living organisms?", options: ["Structural support in cell walls", "As a source of energy in respiration", "Hormone production only", "Insulation under the skin"], answer: 1, explain: "Glucose is a monosaccharide oxidised in respiration to release energy." },
    { q: "Starch is classified as a:", options: ["Protein", "Lipid", "Polysaccharide", "Single amino acid"], answer: 2, explain: "Starch is a long chain of glucose units used for storage in plants." },
    { q: "Proteins are built from subunits called:", options: ["Fatty acids", "Amino acids", "Glucose molecules only", "Nucleotides only"], answer: 1, explain: "Amino acids join by peptide bonds to form polypeptides and proteins." },
    { q: "Lipids such as triglycerides are formed from:", options: ["Amino acids and glucose", "Fatty acids and glycerol", "Starch and cellulose only", "Enzymes and water only"], answer: 1, explain: "One glycerol and three fatty acids form a typical lipid." },
    { q: "Which molecule is especially suited to long-term energy storage?", options: ["Glucose in the blood", "Soluble protein", "Lipid", "Iodine solution"], answer: 2, explain: "Lipids store more energy per gram and are insoluble in water." },
    { q: "Which test is used to detect starch in a food sample?", options: ["Benedict's test", "Biuret test", "Iodine test", "Ethanol emulsion test only"], answer: 2, explain: "Iodine solution turns blue-black in the presence of starch." },
    { q: "A positive iodine test for starch produces which colour?", options: ["Brick red", "Blue-black", "Green only", "Purple"], answer: 1, explain: "Blue-black is the standard positive result for starch with iodine." },
    { q: "Benedict's solution is used to test for:", options: ["Lipids", "Reducing sugars", "Protein", "Starch"], answer: 1, explain: "Heated Benedict's reagent detects reducing sugars such as glucose." },
    { q: "The Biuret test is used to detect:", options: ["Lipids", "Proteins", "Starch", "DNA only"], answer: 1, explain: "Biuret reagent turns purple or lilac when peptide bonds are present." },
    { q: "Lipids in a sample are commonly identified using:", options: ["Heating with Benedict's solution only", "The ethanol emulsion test", "Iodine solution", "Cooling in a freezer"], answer: 1, explain: "Ethanol dissolves lipid; adding water forms a cloudy white emulsion." },
    { q: "Enzymes are best described as:", options: ["Carbohydrates that store energy", "Biological catalysts", "Lipids in cell membranes only", "Simple sugars"], answer: 1, explain: "Enzymes speed up reactions without being permanently used up." },
    { q: "Most digestive and metabolic enzymes are made of:", options: ["Lipids", "Protein", "Starch", "Cellulose"], answer: 1, explain: "Enzymes are proteins with a specific three-dimensional shape." },
    { q: "What usually happens to an enzyme when temperature is far above its optimum?", options: ["It works faster forever", "It denatures and loses activity", "It becomes a lipid", "It multiplies in the cell"], answer: 1, explain: "High temperature changes the shape of the active site (denaturation)." },
    { q: "The substrate of an enzyme is:", options: ["The enzyme itself", "The product only", "The molecule the enzyme acts on", "Water in all reactions"], answer: 2, explain: "The substrate binds at the active site before products form." },
    { q: "Water is important in living organisms because it:", options: ["Is completely insoluble", "Acts as a solvent and transport medium", "Stores energy like glycogen", "Forms starch in animals"], answer: 1, explain: "Many reactions and transports occur in aqueous solution." },
    { q: "Glycogen is stored mainly in:", options: ["Plant cell walls", "Animal liver and muscles", "Chloroplasts only", "Soil bacteria only"], answer: 1, explain: "Glycogen is the animal storage polysaccharide of glucose." },
    { q: "Cellulose in plants is used primarily for:", options: ["Quick energy in respiration", "Structural cell walls", "Hormone signalling", "Enzyme active sites"], answer: 1, explain: "Cellulose fibres strengthen plant cell walls." },
    { q: "Lipids are described as hydrophobic because they:", options: ["Dissolve easily in water", "Do not dissolve in water", "Are always gases", "Are the same as enzymes"], answer: 1, explain: "Lipids are insoluble in water but soluble in organic solvents such as ethanol." },
    { q: "Which of the following is a monosaccharide?", options: ["Starch", "Glucose", "Cellulose", "Haemoglobin"], answer: 1, explain: "Glucose is a single sugar unit; starch and cellulose are polysaccharides." },
    { q: "Enzyme activity is most directly affected by:", options: ["Temperature and pH", "Gravity and sound", "Magnetic fields only", "Cell wall thickness only"], answer: 0, explain: "Temperature and pH change the rate and can denature enzymes." },
    { q: "Long chains of amino acids form:", options: ["Starch", "Proteins", "Glucose only", "Iodine"], answer: 1, explain: "Proteins are polymers of amino acids." },
    { q: "A major function of lipids in animals includes:", options: ["Catalysing all DNA replication", "Energy storage and insulation", "Forming cell walls in plants", "Replacing water as a solvent"], answer: 1, explain: "Fat under the skin insulates and adipose tissue stores energy." },
    { q: "Adding iodine solution to a cracker that contains starch will turn the solution:", options: ["Purple", "Blue-black", "Colourless only", "Brick red without heating"], answer: 1, explain: "Starch gives a blue-black colour with iodine." },
    { q: "The Benedict's test for reducing sugars requires:", options: ["Heating the mixture", "Freezing the sample", "Adding iodine first", "No liquid sample"], answer: 0, explain: "Benedict's solution must be heated (e.g. in a water bath) for the colour change." },
    { q: "Enzymes are specific because:", options: ["Each enzyme's active site fits only certain substrates", "All enzymes digest starch only", "Enzymes are made of DNA", "Substrates denature enzymes randomly"], answer: 0, explain: "The lock-and-key (or induced fit) model explains specificity." },
    { q: "Denaturation of an enzyme means:", options: ["The enzyme is used up completely", "The shape of the active site is lost so it no longer works", "The substrate becomes starch", "The reaction needs no substrate"], answer: 1, explain: "Denatured enzymes cannot bind substrate properly." },
    { q: "Polysaccharides such as starch and glycogen are:", options: ["Single sugar units", "Long chains of monosaccharides", "Made only of fatty acids", "Always enzymes"], answer: 1, explain: "Many glucose units are linked to form storage polysaccharides." },
    { q: "Water helps transport substances in organisms because:", options: ["It is a good solvent", "It cannot move in xylem", "It replaces all proteins", "It denatures all enzymes"], answer: 0, explain: "Dissolved ions and small molecules move in blood and cell sap." },
    { q: "Proteins are important for growth and repair because they:", options: ["Store energy like oil", "Form structural and functional molecules in tissues", "Turn blue-black with iodine", "Are only found in plants"], answer: 1, explain: "Muscle, skin and many cell components are made of protein." },
    { q: "After a reaction, an enzyme:", options: ["Is always destroyed", "Can be used again", "Becomes glucose", "Turns into starch"], answer: 1, explain: "Catalysts are not used up; the enzyme is free to catalyse again." },
    { q: "A positive ethanol emulsion test for lipids appears as:", options: ["Blue-black precipitate", "Milky white cloudy layer", "Purple solution only", "Green without heating"], answer: 1, explain: "Lipid reduces clarity of water, giving a milky emulsion." },
    { q: "Starch as an energy store is found mainly in:", options: ["Animal muscle as glycogen only", "Plant storage tissues such as potato", "Red blood cells", "The nucleus of all cells"], answer: 1, explain: "Plants store glucose as starch; animals use glycogen." },
    { q: "The building blocks of lipids include:", options: ["Glycerol and fatty acids", "Only amino acids", "Only glucose", "Iodine and Benedict's reagent"], answer: 0, explain: "Triglycerides contain glycerol and three fatty acids." },
    { q: "Enzymes speed up reactions by:", options: ["Increasing activation energy", "Lowering the activation energy needed", "Removing all substrates", "Stopping metabolism"], answer: 1, explain: "Catalysts provide an alternative pathway with lower activation energy." },
    { q: "In the lock-and-key model, the substrate:", options: ["Fits the active site of the enzyme", "Is always starch", "Denatures the enzyme before binding", "Is the same as the enzyme"], answer: 0, explain: "Only a complementary substrate shape binds at the active site." },
    { q: "Each enzyme works best at a particular:", options: ["Temperature and pH", "Wavelength of light only", "Air pressure only", "Concentration of starch only"], answer: 0, explain: "Optimum conditions give maximum rate without denaturation." },
    { q: "Biological molecules are essential for life because they:", options: ["Block all chemical reactions", "Provide structure, energy and catalysis for processes", "Only exist in non-living things", "Prevent water from entering cells"], answer: 1, explain: "Carbohydrates, proteins, lipids and water support growth, metabolism and transport." },
    { q: "Which element is found in proteins but not in carbohydrates?", options: ["Carbon", "Hydrogen", "Nitrogen", "Oxygen"], answer: 2, explain: "Amino acids contain nitrogen in their amino groups." },
    { q: "DNA is made of repeating subunits called:", options: ["Amino acids", "Monosaccharides", "Nucleotides", "Fatty acids only"], answer: 2, explain: "Each nucleotide has a sugar, phosphate and base (A, T, C, G)." },
    { q: "Amylase is an example of a:", options: ["Carbohydrate storage molecule", "Protein enzyme that digests starch", "Lipid in the cell membrane only", "Monosaccharide sugar"], answer: 1, explain: "Amylase is a protein enzyme that breaks starch into maltose." }
  ],
  theory: [
    {
      q: "Describe the structure and function of carbohydrates.",
      marks: 6,
      points: [
        "Built from monosaccharides such as glucose",
        "Disaccharides (e.g. sucrose) and polysaccharides (starch, glycogen, cellulose)",
        "Provide energy through respiration",
        "Starch stores energy in plants; glycogen in animals",
        "Cellulose provides strength in plant cell walls"
      ]
    },
    {
      q: "Explain how enzymes work and what affects their activity.",
      marks: 6,
      points: [
        "Biological catalysts made of protein",
        "Substrate binds at active site; products released; enzyme reused",
        "Lock-and-key or induced fit model",
        "Temperature: rate rises to optimum then denaturation",
        "pH: optimum pH for each enzyme",
        "Substrate concentration: rate increases until saturation"
      ]
    },
    {
      q: "Describe food tests for starch, reducing sugar, protein and lipids.",
      marks: 6,
      points: [
        "Starch: iodine → blue-black",
        "Reducing sugar: Benedict's + heat → colour change to brick red",
        "Protein: Biuret → purple/lilac",
        "Lipid: ethanol then water → milky emulsion",
        "State safety for heating Benedict's"
      ]
    },
    {
      q: "Compare proteins and lipids in structure and function.",
      marks: 5,
      points: [
        "Proteins: amino acids; lipids: glycerol + fatty acids",
        "Proteins: growth, repair, enzymes; lipids: energy store, insulation",
        "Proteins soluble in water (many); lipids insoluble",
        "Both contain C, H, O; proteins also contain nitrogen"
      ]
    },
    {
      q: "Explain the importance of water in living organisms.",
      marks: 4,
      points: [
        "Solvent for reactions and transport",
        "Cytoplasm and blood are mainly water",
        "Turgidity in plants; hydrolysis and other reactions use water",
        "Maintains shape and temperature stability"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "Describe how you would test a food sample for protein. [3]",
      marks: 3,
      answer: "Add sodium hydroxide to the sample.\nAdd copper sulfate solution (Biuret test).\nPurple or lilac colour indicates protein is present."
    },
    {
      q: "State the building blocks of proteins and lipids. [2]",
      marks: 2,
      answer: "Proteins are made of amino acids.\nLipids are made of fatty acids and glycerol."
    }
  ]
};

(function mergeBiologicalMoleculesChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES["biological-molecules"] || {};
  BIOLOGY_5090_NOTES["biological-molecules"] = Object.assign({}, base, BIOLOGICAL_MOLECULES_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ["biological-molecules"] = {
      flashcards: BIOLOGICAL_MOLECULES_CHAPTER_5090.flashcards,
      mcqs: BIOLOGICAL_MOLECULES_CHAPTER_5090.mcqs,
      theory: BIOLOGICAL_MOLECULES_CHAPTER_5090.theory
    };
  }
})();

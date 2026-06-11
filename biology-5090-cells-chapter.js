/**
 * Biology 5090 - Chapter 1 Cells (full study content)
 */
const CELLS_CHAPTER_5090 = {
  learningObjectives: [
    "Define a cell and explain the cell theory.",
    "Identify the structures found in plant and animal cells.",
    "Describe the functions of major cell organelles.",
    "Compare plant cells and animal cells.",
    "Distinguish between prokaryotic and eukaryotic cells.",
    "Explain the levels of organisation from cells to organ systems.",
    "Use biological terminology accurately in examinations."
  ],
  summary: [
    "Cells are the basic units of life.",
    "Plant cells contain a cell wall, chloroplasts and a large vacuole.",
    "Animal cells do not have a cell wall or chloroplasts.",
    "The nucleus controls cell activities.",
    "Mitochondria release energy through respiration.",
    "Ribosomes make proteins.",
    "Bacteria are prokaryotes, while plants and animals are eukaryotes.",
    "Cells form tissues, tissues form organs, and organs form organ systems."
  ],
  examples: [
    { title: "Example 1", text: "A leaf contains many plant cells with chloroplasts for photosynthesis." },
    { title: "Example 2", text: "Human muscle cells contain many mitochondria because they require energy." },
    { title: "Example 3", text: "Root hair cells have a large surface area to absorb water efficiently." }
  ],
  comparisonTable: {
    headers: ["Structure", "Plant cell", "Animal cell"],
    rows: [
      ["Cell membrane", "Yes", "Yes"],
      ["Cytoplasm", "Yes", "Yes"],
      ["Nucleus", "Yes", "Yes"],
      ["Mitochondria", "Yes", "Yes"],
      ["Ribosomes", "Yes", "Yes"],
      ["Cell wall", "Yes", "No"],
      ["Chloroplasts", "Yes", "No"],
      ["Large vacuole", "Yes", "No"]
    ]
  },
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "Cells are the basic units of life. Every living organism is made up of one or more cells. Some organisms consist of a single cell, while others contain trillions of cells working together."
      ]
    },
    {
      title: "Cell theory",
      numberedList: [
        "All living organisms are made of cells.",
        "The cell is the basic unit of life.",
        "New cells are produced from existing cells."
      ]
    },
    {
      title: "Types of organisms",
      subsections: [
        {
          title: "Unicellular organisms",
          paragraphs: ["Organisms made of a single cell."],
          bulletList: ["Amoeba", "Bacteria", "Yeast"]
        },
        {
          title: "Multicellular organisms",
          paragraphs: ["Organisms made of many cells."],
          bulletList: ["Humans", "Trees", "Fish"]
        }
      ]
    },
    {
      title: "Structure of animal cells",
      subsections: [
        { title: "Cell membrane", paragraphs: ["Controls the movement of substances into and out of the cell."] },
        { title: "Cytoplasm", paragraphs: ["Jelly-like substance where chemical reactions occur."] },
        { title: "Nucleus", paragraphs: ["Controls cell activities and contains genetic material (DNA)."] },
        { title: "Mitochondria", paragraphs: ["Site of aerobic respiration and energy release."] },
        { title: "Ribosomes", paragraphs: ["Site of protein synthesis."] }
      ]
    },
    {
      title: "Structure of plant cells",
      paragraphs: ["Plant cells contain all the structures found in animal cells plus:"],
      subsections: [
        { title: "Cell wall", paragraphs: ["Provides support and protection.", "Made of cellulose."] },
        { title: "Chloroplasts", paragraphs: ["Carry out photosynthesis.", "Contain chlorophyll."] },
        { title: "Permanent vacuole", paragraphs: ["Stores cell sap and helps maintain cell shape."] }
      ]
    },
    {
      title: "Prokaryotic and eukaryotic cells",
      subsections: [
        {
          title: "Prokaryotic cells",
          paragraphs: ["Simple cells without a nucleus.", "Example: bacteria."],
          bulletList: ["No true nucleus", "Smaller in size", "DNA free in cytoplasm", "Cell wall present"]
        },
        {
          title: "Eukaryotic cells",
          paragraphs: ["More complex cells with a nucleus.", "Examples: animals, plants, fungi."],
          bulletList: ["True nucleus present", "Membrane-bound organelles", "Larger than prokaryotes"]
        }
      ]
    },
    {
      title: "Specialised cells",
      paragraphs: ["Specialised cells are adapted to perform specific functions."],
      subsections: [
        {
          title: "Red blood cell",
          bulletList: ["Contains haemoglobin", "No nucleus", "Large surface area"],
          paragraphs: ["Function: transport oxygen."]
        },
        {
          title: "Root hair cell",
          bulletList: ["Long extension", "Large surface area"],
          paragraphs: ["Function: absorb water and minerals."]
        },
        {
          title: "Nerve cell",
          bulletList: ["Long fibre", "Branched ends"],
          paragraphs: ["Function: transmit impulses."]
        }
      ]
    },
    {
      title: "Levels of organisation",
      subsections: [
        { title: "Cell", paragraphs: ["Smallest unit of life.", "Example: muscle cell."] },
        { title: "Tissue", paragraphs: ["Group of similar cells performing a function.", "Example: muscle tissue."] },
        { title: "Organ", paragraphs: ["Group of tissues working together.", "Example: heart."] },
        { title: "Organ system", paragraphs: ["Group of organs working together.", "Example: circulatory system."] },
        { title: "Organism", paragraphs: ["A complete living thing.", "Example: human."] }
      ]
    }
  ],
  definitions: [
    { term: "Cell", definition: "Basic structural and functional unit of life." },
    { term: "Cell membrane", definition: "Selectively permeable boundary controlling movement of substances." },
    { term: "Cytoplasm", definition: "Jelly-like material where reactions occur." },
    { term: "Nucleus", definition: "Control centre containing genetic material." },
    { term: "Mitochondrion", definition: "Site of aerobic respiration." },
    { term: "Ribosome", definition: "Site of protein synthesis." },
    { term: "Cell wall", definition: "Rigid layer supporting plant cells (cellulose)." },
    { term: "Chloroplast", definition: "Organelle where photosynthesis occurs." },
    { term: "Vacuole", definition: "Fluid-filled storage sac." },
    { term: "Tissue", definition: "Group of similar cells working together." },
    { term: "Organ", definition: "Group of tissues performing a function." },
    { term: "Organ system", definition: "Group of organs working together." },
    { term: "Prokaryote", definition: "Organism without a nucleus (e.g. bacteria)." },
    { term: "Eukaryote", definition: "Organism with a nucleus and membrane-bound organelles." }
  ],
  syllabusPoints: [
    { code: "1.1", title: "Cell theory and the basic unit of life", content: "The cell theory states that all living organisms are made of cells, the cell is the basic unit of life, and new cells come from existing cells. Cells are the smallest units that carry out life processes." },
    { code: "1.2", title: "Unicellular and multicellular organisms", content: "Unicellular organisms (e.g. Amoeba, bacteria, yeast) consist of one cell. Multicellular organisms (e.g. humans, trees, fish) consist of many cells working together." },
    { code: "1.3", title: "Animal cell structure", content: "Animal cells have a cell membrane, cytoplasm, nucleus, mitochondria, and ribosomes. The nucleus controls activities; mitochondria release energy; ribosomes make proteins; the membrane controls entry and exit." },
    { code: "1.4", title: "Plant cell structure", content: "Plant cells have all animal cell structures plus a cellulose cell wall for support, chloroplasts with chlorophyll for photosynthesis, and a large permanent vacuole storing cell sap." },
    { code: "1.5", title: "Comparing plant and animal cells", content: "Both have membrane, cytoplasm, nucleus, mitochondria, and ribosomes. Only plant cells have a cell wall, chloroplasts, and a large permanent vacuole." },
    { code: "1.6", title: "Prokaryotic and eukaryotic cells", content: "Prokaryotes (bacteria) lack a true nucleus and membrane-bound organelles; DNA is free in the cytoplasm. Eukaryotes (plants, animals, fungi) have a nucleus and membrane-bound organelles." },
    { code: "1.7", title: "Specialised cells", content: "Cells adapt for specific jobs: red blood cells transport oxygen (haemoglobin, no nucleus); root hair cells absorb water (long extension, large surface area); nerve cells transmit impulses (long fibre, branched ends)." },
    { code: "1.8", title: "Levels of organisation", content: "Cells form tissues, tissues form organs, organs form organ systems, and organ systems form an organism. Example: muscle cell to muscle tissue to heart to circulatory system to human." },
    { code: "1.9", title: "Microscopy and magnification", content: "Magnification = image size divided by actual size (same units). Light microscopes use eyepiece and objective lenses. Resolution is the ability to distinguish two points; electron microscopes have higher resolution." }
  ],
  quickRecap: "Cells are the basic units of life.\nPlant cells: cell wall (cellulose), chloroplasts, large vacuole.\nAnimal cells: membrane, cytoplasm, nucleus, mitochondria, ribosomes.\nCell theory: all life is cellular; cells from cells.\nBacteria = prokaryotes (no nucleus). Plants/animals = eukaryotes.\nSpecialised cells: RBC, root hair, nerve.\nOrganisation: cell, tissue, organ, organ system, organism.",
  examTips: "Label diagrams clearly. State structures present in both plant and animal cells, then differences. Link structure to function for specialised cells. Use correct terms: selectively permeable membrane, cellulose cell wall, prokaryote vs eukaryote. For organisation questions, give one clear example at each level.",
  flashcards: [
    { q: "What is the basic unit of life?", a: "The cell." },
    { q: "Which organelle controls cell activities?", a: "The nucleus." },
    { q: "What is the function of mitochondria?", a: "Aerobic respiration and energy release." },
    { q: "Which organelle contains chlorophyll?", a: "Chloroplast." },
    { q: "What is the cell wall made of?", a: "Cellulose." },
    { q: "What is found in plant cells but not animal cells?", a: "Cell wall, chloroplasts, and a large permanent vacuole." },
    { q: "What is cytoplasm?", a: "Jelly-like material where chemical reactions occur." },
    { q: "Which cells lack a nucleus?", a: "Prokaryotic cells (e.g. bacteria)." },
    { q: "Give an example of a prokaryote.", a: "Bacteria." },
    { q: "What is a tissue?", a: "A group of similar cells working together." },
    { q: "What is an organ?", a: "A group of tissues working together." },
    { q: "What is the function of ribosomes?", a: "Protein synthesis." },
    { q: "What is the function of root hair cells?", a: "Absorb water and mineral ions from soil." },
    { q: "What is an organ system?", a: "A group of organs working together." },
    { q: "Give an example of an organ.", a: "The heart." }
  ],
  mcqs: [
    { q: "What is the basic unit of life?", options: ["Cell wall", "Cell", "Tissue", "Organ"], answer: 1, explain: "Cells are the smallest living units." },
    { q: "Which structure controls cell activities?", options: ["Cytoplasm", "Vacuole", "Nucleus", "Cell wall"], answer: 2, explain: "The nucleus contains DNA and controls the cell." },
    { q: "Which organelle releases energy?", options: ["Ribosome", "Mitochondrion", "Vacuole", "Cell wall"], answer: 1, explain: "Mitochondria carry out aerobic respiration." },
    { q: "Which structure is present in plant cells only?", options: ["Cell membrane", "Cytoplasm", "Cell wall", "Nucleus"], answer: 2, explain: "Plant cells have a cellulose cell wall." },
    { q: "What gives plants their green colour?", options: ["Vacuole", "Ribosome", "Chloroplast", "Nucleus"], answer: 2, explain: "Chloroplasts contain chlorophyll." },
    { q: "Which substance forms plant cell walls?", options: ["Starch", "Protein", "Cellulose", "Fat"], answer: 2, explain: "Plant cell walls are made of cellulose." },
    { q: "Where do most chemical reactions occur?", options: ["Nucleus", "Cytoplasm", "Cell wall", "Chloroplast"], answer: 1, explain: "Cytoplasm is where many reactions take place." },
    { q: "Which cells are prokaryotic?", options: ["Human cells", "Plant cells", "Bacteria", "Fungal cells"], answer: 2, explain: "Bacteria are prokaryotes." },
    { q: "Which structure contains DNA?", options: ["Nucleus", "Cell wall", "Vacuole", "Ribosome"], answer: 0, explain: "DNA is in the nucleus in eukaryotes." },
    { q: "Which organelle makes proteins?", options: ["Ribosome", "Vacuole", "Cell wall", "Chloroplast"], answer: 0, explain: "Ribosomes synthesise proteins." },
    { q: "A group of similar cells forms a:", options: ["Organ", "Tissue", "Organism", "System"], answer: 1, explain: "A tissue is a group of similar cells." },
    { q: "A group of tissues forms a:", options: ["Organ", "Cell", "Nucleus", "Cytoplasm"], answer: 0, explain: "An organ is made of tissues." },
    { q: "The heart is a:", options: ["Tissue", "Cell", "Organ", "Organelle"], answer: 2, explain: "The heart is an organ." },
    { q: "Which is an organ system?", options: ["Heart", "Muscle", "Circulatory system", "Nucleus"], answer: 2, explain: "The circulatory system is an organ system." },
    { q: "Plant cells contain:", options: ["Chloroplasts", "Haemoglobin", "Cilia", "Antibodies"], answer: 0, explain: "Chloroplasts are in plant cells." },
    { q: "Animal cells lack:", options: ["Cytoplasm", "Nucleus", "Cell membrane", "Cell wall"], answer: 3, explain: "Animal cells do not have a cell wall." },
    { q: "The vacuole mainly:", options: ["Produces proteins", "Stores cell sap", "Controls activities", "Releases energy"], answer: 1, explain: "The vacuole stores cell sap in plants." },
    { q: "Bacteria do not have:", options: ["Cytoplasm", "Cell membrane", "Nucleus", "DNA"], answer: 2, explain: "Bacteria have no true nucleus." },
    { q: "Which cell absorbs water from soil?", options: ["Red blood cell", "Root hair cell", "Nerve cell", "Muscle cell"], answer: 1, explain: "Root hair cells absorb water and minerals." },
    { q: "Which cell carries oxygen?", options: ["Nerve cell", "Root hair cell", "Red blood cell", "Skin cell"], answer: 2, explain: "Red blood cells transport oxygen." },
    { q: "The cell membrane mainly:", options: ["Controls movement of substances", "Stores chlorophyll", "Makes proteins", "Contains DNA"], answer: 0, explain: "The membrane controls entry and exit." },
    { q: "Mitochondria are the site of:", options: ["Photosynthesis", "Protein synthesis", "Aerobic respiration", "Cell division only"], answer: 2, explain: "Mitochondria release energy by respiration." },
    { q: "Chlorophyll is found in:", options: ["Mitochondria", "Chloroplasts", "Ribosomes", "Nucleus"], answer: 1, explain: "Chlorophyll is in chloroplasts." },
    { q: "Humans are:", options: ["Unicellular", "Prokaryotic", "Acellular", "Multicellular"], answer: 3, explain: "Humans are made of many cells." },
    { q: "Amoeba is an example of a:", options: ["Unicellular organism", "Organ system", "Tissue", "Organelle"], answer: 0, explain: "Amoeba is a single-celled organism." },
    { q: "According to cell theory, organisms are made of:", options: ["Organs only", "Tissues only", "Cells", "Chloroplasts"], answer: 2, explain: "All organisms are made of cells." },
    { q: "Ribosomes are responsible for:", options: ["Energy release", "Protein synthesis", "Photosynthesis", "Support"], answer: 1, explain: "Ribosomes make proteins." },
    { q: "A large permanent vacuole is typical of:", options: ["Animal cells", "Bacterial cells only", "Plant cells", "Viruses"], answer: 2, explain: "Plant cells have a large vacuole." },
    { q: "Muscle tissue is made of:", options: ["Muscle cells", "Chloroplasts", "Cell walls", "Plasmids"], answer: 0, explain: "Tissues are groups of similar cells." },
    { q: "DNA in eukaryotes is mainly in the:", options: ["Cell wall", "Vacuole", "Nucleus", "Ribosome"], answer: 2, explain: "The nucleus contains DNA." },
    { q: "The cell wall function in plants is mainly:", options: ["Protein synthesis", "Support and protection", "Energy release", "Absorption of light"], answer: 1, explain: "The wall supports the plant cell." },
    { q: "Leaf palisade cells contain many:", options: ["Chloroplasts", "Cilia", "Haemoglobin", "Flagella"], answer: 0, explain: "Palisade cells photosynthesise." },
    { q: "Root hair cells increase:", options: ["Surface area for absorption", "Cell wall thickness only", "Number of nuclei", "Chlorophyll content"], answer: 0, explain: "Long extensions increase surface area." },
    { q: "Nerve cells are adapted to:", options: ["Store starch", "Transmit impulses", "Carry oxygen", "Photosynthesise"], answer: 1, explain: "Nerve cells conduct impulses." },
    { q: "An organ system is:", options: ["One cell", "One tissue", "A group of organs", "A single organelle"], answer: 2, explain: "Organ systems contain organs." },
    { q: "Eukaryotic cells always have:", options: ["A true nucleus", "No cell membrane", "No cytoplasm", "No DNA"], answer: 0, explain: "Eukaryotes have a nucleus." },
    { q: "Bacteria are classified as:", options: ["Eukaryotes", "Prokaryotes", "Plants", "Fungi"], answer: 1, explain: "Bacteria lack a true nucleus." },
    { q: "Plant cell walls contain:", options: ["Chitin", "Cellulose", "Haemoglobin", "Starch only"], answer: 1, explain: "Walls are made of cellulose." },
    { q: "The heart belongs to the:", options: ["Digestive tissue", "Nervous cell", "Circulatory system", "Chloroplast"], answer: 2, explain: "Heart is in the circulatory system." },
    { q: "Cells are described as the:", options: ["Largest units of life", "Basic units of life", "Only parts of organs", "Non-living units"], answer: 1, explain: "Cells are the basic units of life." }
  ],
  theory: [
    {
      q: "Describe three differences between plant and animal cells.",
      marks: 6,
      points: [
        "Both have nucleus, cytoplasm, cell membrane, mitochondria, ribosomes",
        "Plant cells have cellulose cell wall; animal cells do not",
        "Plant cells have chloroplasts; animal cells do not",
        "Plant cells have a large permanent vacuole; animal cells do not (or only small vacuoles)"
      ]
    },
    {
      q: "Explain the functions of the nucleus, mitochondria and cell membrane.",
      marks: 6,
      points: [
        "Nucleus contains DNA and controls cell activities",
        "Mitochondria are the site of aerobic respiration and release energy (ATP)",
        "Cell membrane is selectively permeable and controls entry and exit of substances"
      ]
    },
    {
      q: "Describe the levels of organisation from cell to organism.",
      marks: 6,
      points: [
        "Cell is the smallest unit of life (e.g. muscle cell)",
        "Tissue is a group of similar cells (e.g. muscle tissue)",
        "Organ is a group of tissues (e.g. heart)",
        "Organ system is a group of organs (e.g. circulatory system)",
        "Organism is the complete living thing (e.g. human)"
      ]
    },
    {
      q: "Compare prokaryotic and eukaryotic cells.",
      marks: 6,
      points: [
        "Prokaryotes have no true nucleus; eukaryotes have a nucleus",
        "Prokaryotes are smaller; eukaryotes are larger",
        "Prokaryote DNA is free in cytoplasm; eukaryote DNA in nucleus",
        "Eukaryotes have membrane-bound organelles; prokaryotes do not",
        "Example prokaryote: bacteria; eukaryotes: plants and animals"
      ]
    },
    {
      q: "Explain how the structure of a root hair cell helps it perform its function.",
      marks: 5,
      points: [
        "Long extension increases surface area in contact with soil water",
        "Large surface area increases rate of absorption of water and minerals",
        "Thin cell wall gives short diffusion distance",
        "Function: absorption of water and mineral ions from soil"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "Describe three differences between plant and animal cells. [6]",
      marks: 6,
      answer: "Both have nucleus, cytoplasm, membrane, mitochondria, ribosomes.\nPlant cells have cellulose cell wall, chloroplasts, and large vacuole.\nAnimal cells lack cell wall, chloroplasts, and large permanent vacuole."
    },
    {
      q: "State the three parts of the cell theory. [3]",
      marks: 3,
      answer: "All living organisms are made of cells.\nThe cell is the basic unit of life.\nNew cells are produced from existing cells."
    }
  ]
};

(function mergeCellsChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES.cells || {};
  BIOLOGY_5090_NOTES.cells = Object.assign({}, base, CELLS_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    var qBase = BIOLOGY_5090_QUIZ.cells || {};
    BIOLOGY_5090_QUIZ.cells = {
      flashcards: CELLS_CHAPTER_5090.flashcards,
      mcqs: CELLS_CHAPTER_5090.mcqs,
      theory: CELLS_CHAPTER_5090.theory
    };
  }
})();

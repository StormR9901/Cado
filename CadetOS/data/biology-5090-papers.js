/** Cambridge O Level Biology 5090 — subtopics & past paper catalog (May/June + Oct/Nov) */
(function () {
  if (typeof BIOLOGY_5090 === "undefined") return;
  const SUBTOPICS = {
    cells: ["Plant and animal cells", "Specialized cells", "Tissues, organs, organ systems", "Cell organization"],
    classification: ["Characteristics of living organisms", "Classification systems", "Features of major groups", "Dichotomous keys"],
    movement: ["Diffusion", "Osmosis", "Active transport"],
    "biological-molecules": ["Carbohydrates", "Proteins", "Fats and oils", "Water", "Food tests"],
    enzymes: ["Enzyme action", "Effects of temperature", "Effects of pH"],
    "plant-nutrition": ["Photosynthesis", "Leaf structure", "Mineral nutrition"],
    "transport-plants": ["Xylem and phloem", "Water uptake", "Transpiration", "Translocation"],
    "human-nutrition": ["Diet", "Digestive system", "Mechanical and chemical digestion", "Absorption", "Assimilation"],
    "gas-exchange": ["Breathing", "Gas exchange surfaces", "Effects of smoking"],
    respiration: ["Aerobic respiration", "Anaerobic respiration", "Energy release"],
    "transport-humans": ["Circulatory system", "Heart structure", "Blood vessels", "Blood components"],
    "disease-immunity": ["Pathogens", "Transmission of disease", "Body defenses", "Vaccination", "HIV/AIDS", "Cholera", "Malaria"],
    excretion: ["Excretory products", "Kidney structure", "Dialysis", "Homeostasis"],
    "coordination-control": ["Nervous system", "Reflex actions", "Eye", "Hormones", "Diabetes"],
    "coordination-plants": ["Tropic responses", "Auxins", "Phototropism", "Gravitropism"],
    development: ["Asexual reproduction", "Sexual reproduction", "Human reproduction", "Menstrual cycle", "Pregnancy", "Plant reproduction"],
    inheritance: ["Chromosomes and genes", "Monohybrid inheritance", "Variation", "Natural selection"],
    biotechnology: ["Fermentation", "Genetic engineering", "Applications and risks"],
    ecology: ["Food chains", "Food webs", "Energy flow", "Carbon cycle", "Nitrogen cycle", "Conservation", "Human impact on ecosystems"]
  };

  BIOLOGY_5090.topics.forEach(function (t) {
    t.subtopics = SUBTOPICS[t.id] || [];
    t.targetGrade = "A*";
    t.papers = ["Paper 1 (MCQ)", "Paper 2 (Theory)", "Paper 4 (Alternative to Practical)"];
  });

  BIOLOGY_5090.examSessions = [
    {
      id: "mj",
      name: "May/June",
      short: "MJ",
      codes: ["11", "12", "14"],
      description: "Summer series. Component numbers end in 1, 2, and 4."
    },
    {
      id: "on",
      name: "October/November",
      short: "ON",
      codes: ["21", "22", "24"],
      description: "Winter series. Component numbers end in 1, 2, and 4."
    }
  ];
  BIOLOGY_5090.assessment = {
    paper1: { name: "Paper 1 - Multiple Choice", duration: "1 hour", marks: 40, weight: "30%" },
    paper2: { name: "Paper 2 - Theory", duration: "1 hour 45 min", marks: 80, weight: "50%" },
    paper4: { name: "Paper 4 - Alternative to Practical", duration: "1 hour", marks: 40, weight: "20%" }
  };
})();

const PAST_PAPERS_5090 = {
  sessions: ["May/June", "October/November"],
  papers: [
    { code: "11", type: "Paper 1 MCQ", session: "May/June" },
    { code: "12", type: "Paper 2 Theory", session: "May/June" },
    { code: "14", type: "Paper 4 Alt. Practical", session: "May/June" },
    { code: "21", type: "Paper 1 MCQ", session: "October/November" },
    { code: "22", type: "Paper 2 Theory", session: "October/November" },
    { code: "24", type: "Paper 4 Alt. Practical", session: "October/November" }
  ],
  years: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
  syllabusVersions: [
    { label: "2023-2025 syllabus", ref: "595450" },
    { label: "2026-2028 syllabus", ref: "697330" }
  ],
  onSitePractice: [
    { id: "p1-mj-2023", label: "5090/11 May/June 2023", subtitle: "Paper 1 style MCQs", code: "11", type: "mcq", session: "May/June", sessionId: "mj", year: 2023, paper: 1, topicIds: ["cells", "movement", "enzymes"] },
    { id: "p2-mj-2023", label: "5090/12 May/June 2023", subtitle: "Paper 2 style theory", code: "12", type: "theory", session: "May/June", sessionId: "mj", year: 2023, paper: 2, topicIds: ["transport-humans", "disease-immunity"] },
    { id: "p4-mj-2022", label: "5090/14 May/June 2022", subtitle: "Paper 4 alternative to practical", code: "14", type: "theory", session: "May/June", sessionId: "mj", year: 2022, paper: 4, topicIds: ["biological-molecules", "movement"] },
    { id: "p1-on-2022", label: "5090/21 Oct/Nov 2022", subtitle: "Paper 1 style MCQs", code: "21", type: "mcq", session: "October/November", sessionId: "on", year: 2022, paper: 1, topicIds: ["classification", "respiration", "ecology"] },
    { id: "p2-on-2023", label: "5090/22 Oct/Nov 2023", subtitle: "Paper 2 style theory", code: "22", type: "theory", session: "October/November", sessionId: "on", year: 2023, paper: 2, topicIds: ["inheritance", "biotechnology"] }
  ]
};

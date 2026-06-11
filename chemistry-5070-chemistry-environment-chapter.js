/**
 * Chemistry 5070 — Chapter 10 Chemistry of the environment (full study content)
 */
const CHEMISTRY_ENVIRONMENT_CHAPTER_5070 = {
  learningObjectives: [
    "Describe the composition of air and its importance.",
    "Explain the role of gases in the atmosphere.",
    "Understand pollution and its sources.",
    "Explain effects of pollutants on the environment.",
    "Describe the greenhouse effect and global warming.",
    "Explain formation and effects of acid rain.",
    "Understand methods of reducing air pollution.",
    "Describe water pollution and treatment of water.",
    "Explain carbon cycle and nitrogen cycle (basic level)."
  ],
  summary: [
    "Air is mainly nitrogen (78%) and oxygen (21%).",
    "Pollution comes from combustion and industries.",
    "CO is toxic; SO₂ and NOx cause acid rain.",
    "Greenhouse gases trap heat, leading to global warming.",
    "Carbon and nitrogen cycles maintain balance in nature.",
    "Water must be treated before use.",
    "Environmental chemistry explains human impact on nature."
  ],
  definitions: [
    { term: "Pollution", definition: "Introduction of harmful substances into the environment." },
    { term: "Greenhouse effect", definition: "Trapping of heat by gases in the atmosphere." },
    { term: "Acid rain", definition: "Rainwater made acidic by sulfur dioxide and nitrogen oxides." },
    { term: "Eutrophication", definition: "Excess nutrients causing excessive algae growth in water." },
    { term: "Combustion", definition: "Burning of a substance in oxygen." }
  ],
  comparisonTable: {
    headers: ["Type", "Complete combustion", "Incomplete combustion"],
    rows: [
      ["Oxygen supply", "Plenty of oxygen", "Limited oxygen"],
      ["Products", "Carbon dioxide and water", "Carbon monoxide and soot (carbon)"],
      ["Safety", "Generally safer products", "CO is poisonous"],
      ["Example", "Blue Bunsen flame", "Yellow/smoky flame"]
    ]
  },
  examples: [
    { title: "Carbon monoxide poisoning", text: "Car exhaust from incomplete combustion — CO prevents oxygen transport in blood." },
    { title: "Acid rain on buildings", text: "SO₂ and NOx form sulfuric and nitric acids — damages limestone and marble." },
    { title: "Water chlorination", text: "Chlorine added during treatment to kill harmful bacteria." },
    { title: "Fertilisers", text: "Nitrogen compounds increase crop yield but can cause eutrophication in rivers." }
  ],
  chapterSections: [
    {
      title: "Composition of air",
      bulletList: [
        "Nitrogen ~78%, oxygen ~21%, argon ~0.9%, carbon dioxide ~0.04%, traces of other gases",
        "Oxygen: respiration and combustion",
        "Nitrogen: used in fertilisers",
        "Carbon dioxide: photosynthesis",
        "Noble gases: lighting and industry"
      ]
    },
    {
      title: "Air pollution",
      bulletList: [
        "Harmful substances released into the atmosphere",
        "Main pollutants: CO, SO₂, NOx, particulate matter (smoke, dust)",
        "Sources: vehicles, factories, power stations, burning fossil fuels, forest fires"
      ]
    },
    {
      title: "Effects of air pollutants",
      bulletList: [
        "Carbon monoxide — incomplete combustion; poisonous; blocks oxygen in blood",
        "Sulfur dioxide — fossil fuels with sulfur; respiratory problems; acid rain",
        "Nitrogen oxides — car engines; acid rain and smog",
        "Particulates — lung disease; reduced visibility"
      ]
    },
    {
      title: "Acid rain",
      bulletList: [
        "SO₂ + oxygen + water → sulfuric acid; NOx + water → nitric acid",
        "Effects: damages buildings/statues, harms aquatic life, kills plants, acidifies soil and lakes",
        "Prevention: low-sulfur fuels, factory scrubbers, catalytic converters in cars"
      ]
    },
    {
      title: "Greenhouse effect and global warming",
      bulletList: [
        "Natural warming when greenhouse gases trap heat",
        "Greenhouse gases: CO₂, methane, water vapour",
        "Burning fossil fuels increases CO₂ → global warming",
        "Effects: rising sea levels, melting ice caps, extreme weather"
      ]
    },
    {
      title: "Oxygen and combustion",
      bulletList: [
        "Oxygen supports burning",
        "Complete combustion → CO₂ + water",
        "Incomplete combustion → CO + soot"
      ]
    },
    {
      title: "Carbon cycle",
      bulletList: [
        "Carbon moves through living organisms and the environment",
        "Photosynthesis removes CO₂",
        "Respiration, combustion and decomposition release CO₂"
      ]
    },
    {
      title: "Nitrogen cycle (basic)",
      bulletList: [
        "Nitrogen in air converted into useful compounds",
        "Nitrogen fixation (bacteria, lightning)",
        "Nitrification, denitrification, plant uptake"
      ]
    },
    {
      title: "Water pollution and treatment",
      bulletList: [
        "Causes: industrial waste, sewage, fertilisers, oil spills",
        "Effects: harm to aquatic life, disease spread, eutrophication",
        "Treatment: filtration (solids), sedimentation, chlorination (kills bacteria)"
      ]
    }
  ],
  examTips: "Air: N₂ 78%, O₂ 21%. CO = incomplete combustion, poisonous. Acid rain = SO₂ + NOx. Greenhouse gases trap heat — CO₂ main human contributor. Photosynthesis removes CO₂; respiration/combustion release it. Water treatment: filter → sediment → chlorinate. Eutrophication = excess fertiliser → algae bloom. Catalytic converters reduce car emissions.",
  quickRecap: "Air: 78% N₂, 21% O₂.\nPollutants: CO, SO₂, NOx, particulates.\nCO toxic (incomplete combustion).\nAcid rain: SO₂ + NOx → acids.\nGreenhouse: CO₂ traps heat → global warming.\nCarbon cycle: photosynthesis in, respiration/combustion out.\nWater: filter, sediment, chlorinate.",
  flashcards: [
    { q: "What is the main gas in air?", a: "Nitrogen." },
    { q: "What percentage of oxygen is in air?", a: "21%." },
    { q: "What is air pollution?", a: "Harmful substances in air." },
    { q: "What produces carbon monoxide?", a: "Incomplete combustion." },
    { q: "Why is carbon monoxide dangerous?", a: "It reduces oxygen transport in blood." },
    { q: "What causes acid rain?", a: "SO₂ and NOx." },
    { q: "Name a greenhouse gas.", a: "Carbon dioxide." },
    { q: "What is global warming?", a: "Increase in Earth's temperature." },
    { q: "What removes CO₂ from air?", a: "Photosynthesis." },
    { q: "What releases CO₂?", a: "Respiration and combustion." },
    { q: "What is eutrophication?", a: "Excess algae growth in water." },
    { q: "What kills bacteria in water treatment?", a: "Chlorination." },
    { q: "What is nitrogen fixation?", a: "Conversion of nitrogen into compounds." },
    { q: "What is a pollutant?", a: "Harmful substance in environment." },
    { q: "Name a source of sulfur dioxide.", a: "Fossil fuel burning." }
  ],
  mcqs: [
    { q: "What is the main gas in air?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], answer: 1, explain: "Nitrogen makes up 78% of air." },
    { q: "What percentage of oxygen is in air?", options: ["78%", "50%", "21%", "10%"], answer: 2, explain: "Oxygen is 21% of air." },
    { q: "Which gas is needed for combustion?", options: ["Nitrogen", "Oxygen", "Argon", "Carbon dioxide"], answer: 1, explain: "Oxygen supports burning." },
    { q: "What is air pollution?", options: ["Clean air", "Air movement", "Harmful substances in air", "Oxygen increase"], answer: 2, explain: "Pollution means harmful substances in the atmosphere." },
    { q: "Which gas is toxic in car exhaust?", options: ["Oxygen", "Nitrogen", "Carbon monoxide", "Helium"], answer: 2, explain: "CO prevents oxygen transport in blood." },
    { q: "Carbon monoxide is produced by:", options: ["Complete combustion", "Incomplete combustion", "Respiration", "Photosynthesis"], answer: 1, explain: "Lack of oxygen causes CO formation." },
    { q: "Which pollutant causes acid rain?", options: ["Oxygen", "Nitrogen", "Sulfur dioxide", "Argon"], answer: 2, explain: "SO₂ forms sulfuric acid in rainwater." },
    { q: "Acid rain damages:", options: ["Only air", "Buildings and plants", "Only water", "Only soil"], answer: 1, explain: "Acid rain affects buildings, plants, soil and aquatic ecosystems." },
    { q: "Greenhouse effect is caused by:", options: ["Oxygen increase", "Heat trapping gases", "Nitrogen decrease", "Water freezing"], answer: 1, explain: "Greenhouse gases such as CO₂ trap heat in the atmosphere." },
    { q: "Which is a greenhouse gas?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], answer: 2, explain: "CO₂ traps heat in the atmosphere." },
    { q: "Global warming leads to:", options: ["Cooling Earth", "Ice melting", "Less rain always", "No change"], answer: 1, explain: "Rising temperatures melt ice caps and glaciers." },
    { q: "Incomplete combustion produces:", options: ["Oxygen", "Carbon dioxide only", "Carbon monoxide", "Nitrogen"], answer: 2, explain: "CO and soot form when oxygen is limited." },
    { q: "Complete combustion produces:", options: ["CO only", "CO₂ and water", "Oxygen", "Nitrogen"], answer: 1, explain: "Full burning with enough oxygen gives CO₂ and water." },
    { q: "What is eutrophication?", options: ["Air pollution", "Water freezing", "Excess algae growth", "Oxygen increase"], answer: 2, explain: "Excess fertiliser nutrients cause algae blooms in water." },
    { q: "What causes water pollution?", options: ["Clean oxygen", "Sewage and waste", "Nitrogen only", "Helium"], answer: 1, explain: "Sewage and industrial waste contaminate water." },
    { q: "Which step removes solids from water?", options: ["Chlorination", "Filtration", "Heating", "Freezing"], answer: 1, explain: "Filtration removes suspended particles." },
    { q: "What kills bacteria in water?", options: ["Oxygen", "Chlorine", "Nitrogen", "Carbon dioxide"], answer: 1, explain: "Chlorination disinfects treated water." },
    { q: "Carbon cycle involves:", options: ["Only oxygen", "Movement of carbon compounds", "Only nitrogen", "Only water"], answer: 1, explain: "Carbon moves through air, living things and the environment." },
    { q: "Photosynthesis removes:", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], answer: 2, explain: "Plants absorb CO₂ during photosynthesis." },
    { q: "Respiration releases:", options: ["CO₂", "Oxygen", "Nitrogen", "Hydrogen"], answer: 0, explain: "Respiration produces carbon dioxide." },
    { q: "Which process adds nitrogen to soil?", options: ["Photosynthesis", "Nitrogen fixation", "Combustion", "Filtration"], answer: 1, explain: "Bacteria fix atmospheric nitrogen into usable compounds." },
    { q: "Nitrogen cycle involves:", options: ["Oxygen only", "Carbon only", "Conversion of nitrogen compounds", "Water only"], answer: 2, explain: "Nitrogen is converted and recycled in nature." },
    { q: "Which causes smog?", options: ["Oxygen", "Nitrogen oxides", "Helium", "Water"], answer: 1, explain: "NOx contributes to smog formation." },
    { q: "Which is a source of pollution?", options: ["Trees", "Factories", "Clean water", "Oxygen"], answer: 1, explain: "Factories release pollutants into the air." },
    { q: "Which gas percentage is highest in air?", options: ["Oxygen", "Nitrogen", "CO₂", "Argon"], answer: 1, explain: "Nitrogen dominates at about 78%." },
    { q: "Which gas is used in photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: 2, explain: "Plants use CO₂ to make glucose." },
    { q: "Which gas supports breathing?", options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"], answer: 1, explain: "Oxygen is essential for respiration." },
    { q: "Which is NOT a pollutant?", options: ["SO₂", "NOx", "Oxygen", "CO"], answer: 2, explain: "Oxygen is a natural component of clean air." },
    { q: "What is acid rain caused by?", options: ["Oxygen", "CO₂ only", "SO₂ and NOx", "Nitrogen only"], answer: 2, explain: "SO₂ and NOx dissolve in rainwater to form acids." },
    { q: "Which is an effect of acid rain?", options: ["Stronger buildings", "Soil neutralisation", "Damage to trees", "Clean water"], answer: 2, explain: "Acid rain damages plants and forests." },
    { q: "Which gas is inert?", options: ["Oxygen", "Nitrogen", "Argon", "Carbon dioxide"], answer: 2, explain: "Argon is a noble gas and unreactive." },
    { q: "What is combustion?", options: ["Freezing", "Burning in oxygen", "Melting", "Dissolving"], answer: 1, explain: "Combustion is burning a substance in oxygen." },
    { q: "Which gas increases global warming?", options: ["Oxygen", "Carbon dioxide", "Helium", "Nitrogen"], answer: 1, explain: "CO₂ is a major greenhouse gas." },
    { q: "Which reduces pollution?", options: ["More burning", "Catalytic converters", "More factories", "No oxygen"], answer: 1, explain: "Catalytic converters reduce harmful car emissions." },
    { q: "What is water pollution?", options: ["Clean water", "Harmful substances in water", "Oxygen increase", "Freezing water"], answer: 1, explain: "Contamination of water by harmful substances." },
    { q: "Which is the first step in water treatment?", options: ["Chlorination", "Filtration", "Freezing", "Evaporation"], answer: 1, explain: "Filtration removes solid particles first." },
    { q: "Which gas is part of air?", options: ["Uranium", "Neon", "Sodium", "Iron"], answer: 1, explain: "Neon is a trace noble gas in air." },
    { q: "Which gas causes poisoning in tunnels?", options: ["CO₂", "CO", "O₂", "N₂"], answer: 1, explain: "Carbon monoxide from vehicle exhaust is toxic." },
    { q: "Which process removes CO₂ naturally?", options: ["Respiration", "Photosynthesis", "Combustion", "Pollution"], answer: 1, explain: "Plants absorb CO₂ during photosynthesis." },
    { q: "Why is environmental chemistry important?", options: ["No reason", "Helps understand pollution and protection", "Only exams", "Only lab work"], answer: 1, explain: "It explains human impact on the environment and how to reduce it." }
  ],
  theory: [
    {
      q: "Describe the composition of air.",
      marks: 4,
      points: [
        "Air is a mixture of gases",
        "Nitrogen about 78%, oxygen about 21%",
        "Argon about 0.9%, carbon dioxide about 0.04%",
        "Small traces of other gases including noble gases"
      ]
    },
    {
      q: "Explain causes and effects of acid rain.",
      marks: 6,
      points: [
        "Caused by sulfur dioxide and nitrogen oxides from burning fossil fuels",
        "SO₂ reacts with oxygen and water to form sulfuric acid",
        "NOx react with water to form nitric acid",
        "Effects: damages buildings and statues (especially limestone)",
        "Harms plants, acidifies soil and lakes, damages aquatic life",
        "Prevention: low-sulfur fuels, scrubbers, catalytic converters"
      ]
    },
    {
      q: "Explain greenhouse effect and global warming.",
      marks: 5,
      points: [
        "Greenhouse gases (CO₂, methane, water vapour) trap heat in atmosphere",
        "Natural greenhouse effect keeps Earth warm enough for life",
        "Burning fossil fuels increases CO₂ concentration",
        "Enhanced greenhouse effect leads to global warming",
        "Effects: melting ice, rising sea levels, extreme weather"
      ]
    },
    {
      q: "Describe carbon cycle processes.",
      marks: 4,
      points: [
        "Carbon moves between air, living organisms and the environment",
        "Photosynthesis removes CO₂ from air and stores carbon in plants",
        "Respiration releases CO₂ back to air",
        "Combustion and decomposition also release CO₂"
      ]
    },
    {
      q: "Explain water treatment steps.",
      marks: 4,
      points: [
        "Filtration removes solid particles and debris",
        "Sedimentation allows fine particles to settle",
        "Chlorination kills harmful bacteria and microbes",
        "Treated water is safe for human use"
      ]
    }
  ]
};

(function mergeChemistryEnvironmentChapter5070() {
  if (typeof CHEMISTRY_5070 === "undefined") return;
  var topic = CHEMISTRY_5070.topics.find(function (t) { return t.id === "chemistry-environment"; });
  if (!topic) return;
  Object.assign(topic, CHEMISTRY_ENVIRONMENT_CHAPTER_5070);
})();

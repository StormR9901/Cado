/**
 * Biology 5090 - Chapter 11 Transport in Humans (full study content)
 */
const TRANSPORT_HUMANS_CHAPTER_5090 = {
  learningObjectives: [
    "Describe the structure and function of the human circulatory system.",
    "Explain the function of blood and its components.",
    "Identify arteries, veins, and capillaries and compare their structures.",
    "Understand the role of the heart in pumping blood.",
    "Explain double circulation in humans.",
    "Describe how oxygen and nutrients are transported.",
    "Understand the role of haemoglobin in oxygen transport."
  ],
  summary: [
    "The circulatory system includes the heart, blood and blood vessels.",
    "Double circulation: pulmonary (heart–lungs) and systemic (heart–body).",
    "Arteries carry blood away from the heart; veins return blood; capillaries exchange materials.",
    "Red blood cells with haemoglobin transport oxygen; plasma carries nutrients and waste.",
    "White blood cells fight infection; platelets help clotting.",
    "The left ventricle has the thickest wall; valves prevent backflow."
  ],
  examples: [
    { title: "Example 1", text: "During exercise, heart rate increases to deliver more oxygen to muscles." },
    { title: "Example 2", text: "Digested glucose and amino acids are carried in blood plasma to cells." },
    { title: "Example 3", text: "Capillaries in muscles allow exchange of oxygen and carbon dioxide." }
  ],
  comparisonTable: {
    headers: ["Vessel", "Direction", "Wall", "Pressure", "Other features"],
    rows: [
      ["Artery", "Away from heart", "Thick muscular/elastic", "High", "Usually oxygenated (except pulmonary artery)"],
      ["Vein", "Towards heart", "Thinner", "Low", "Valves prevent backflow"],
      ["Capillary", "Links artery to vein", "One cell thick", "Low", "Site of exchange with tissues"]
    ]
  },
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "The human transport system moves oxygen, nutrients, hormones and waste products. It consists of the heart, blood and blood vessels."
      ]
    },
    {
      title: "The heart",
      paragraphs: [
        "Muscular pump with four chambers: right atrium, right ventricle, left atrium, left ventricle.",
        "Right side pumps deoxygenated blood to the lungs; left side pumps oxygenated blood to the body.",
        "Valves prevent backflow and ensure one-way flow. Left ventricle wall is thickest (high pressure to body)."
      ]
    },
    {
      title: "Blood vessels",
      subsections: [
        { title: "Arteries", bulletList: ["Carry blood away from heart", "Thick muscular walls", "High pressure"] },
        { title: "Veins", bulletList: ["Carry blood to heart", "Thinner walls", "Valves", "Low pressure"] },
        { title: "Capillaries", bulletList: ["Walls one cell thick", "Site of exchange", "Connect arteries and veins"] }
      ]
    },
    {
      title: "Blood components",
      bulletList: [
        "Red blood cells: haemoglobin, transport oxygen, no nucleus",
        "White blood cells: defence against infection",
        "Platelets: blood clotting",
        "Plasma: liquid; transports nutrients, hormones, CO₂, urea, heat"
      ]
    },
    {
      title: "Haemoglobin and oxygen transport",
      paragraphs: [
        "Haemoglobin in red blood cells combines with oxygen to form oxyhaemoglobin in the lungs.",
        "Oxyhaemoglobin releases oxygen to respiring tissues where concentration is lower."
      ]
    },
    {
      title: "Double circulation",
      paragraphs: [
        "Pulmonary circulation: heart → lungs → heart (gas exchange).",
        "Systemic circulation: heart → body tissues → heart (delivery of O₂ and nutrients, removal of CO₂ and waste)."
      ]
    },
    {
      title: "Coronary arteries and clotting",
      paragraphs: [
        "Coronary arteries supply the heart muscle with oxygen. Blockage can cause a heart attack.",
        "Platelets help form a clot at an injury to reduce blood loss."
      ]
    }
  ],
  definitions: [
    { term: "Circulatory system", definition: "Heart, blood and blood vessels that transport materials around the body." },
    { term: "Artery", definition: "Blood vessel carrying blood away from the heart." },
    { term: "Vein", definition: "Blood vessel carrying blood towards the heart." },
    { term: "Capillary", definition: "Thin-walled vessel where exchange occurs between blood and tissues." },
    { term: "Haemoglobin", definition: "Red protein in red blood cells that carries oxygen." },
    { term: "Double circulation", definition: "Blood passes through the heart twice per complete circuit." },
    { term: "Oxyhaemoglobin", definition: "Compound formed when haemoglobin binds oxygen." },
    { term: "Plasma", definition: "Liquid part of blood transporting dissolved substances." },
    { term: "Platelet", definition: "Cell fragment involved in blood clotting." },
    { term: "Pulmonary circulation", definition: "Circulation between heart and lungs." }
  ],
  syllabusPoints: [
    { code: "11.1", title: "Double circulation", content: "Pulmonary and systemic circuits increase efficiency of oxygen delivery." },
    { code: "11.2", title: "Structure of the heart", content: "Four chambers, valves, thicker left ventricle wall." },
    { code: "11.3", title: "Blood vessels", content: "Arteries, veins and capillaries — structure linked to function." },
    { code: "11.4", title: "Blood components", content: "Plasma, red cells, white cells, platelets and their roles." },
    { code: "11.5", title: "Cardiac cycle", content: "Atria contract, then ventricles; diastole; pacemaker (SA node)." }
  ],
  quickRecap: "Heart: RA/RV (to lungs), LA/LV (to body); LV wall thickest.\nArteries away (thick); veins to heart (valves); capillaries exchange.\nHb + O₂ → oxyhaemoglobin in lungs; O₂ released in tissues.\nPlasma: nutrients, CO₂, urea, hormones.\nDouble circulation: pulmonary + systemic.",
  examTips: "Trace blood path: vena cava → RA → RV → pulmonary artery → lungs → pulmonary vein → LA → LV → aorta. Compare vessels with structure and pressure. Explain why red blood cells have no nucleus.",
  flashcards: [
    { q: "What does the circulatory system do?", a: "Transports materials such as oxygen, nutrients and waste around the body." },
    { q: "What pumps blood?", a: "The heart." },
    { q: "How many chambers does the heart have?", a: "Four." },
    { q: "What do arteries carry?", a: "Blood away from the heart." },
    { q: "What do veins carry?", a: "Blood towards the heart." },
    { q: "What is the function of capillaries?", a: "Exchange of substances between blood and tissues." },
    { q: "What carries most oxygen in the blood?", a: "Red blood cells (haemoglobin)." },
    { q: "What is haemoglobin?", a: "Oxygen-carrying protein in red blood cells." },
    { q: "What do white blood cells do?", a: "Defend against infection." },
    { q: "What do platelets do?", a: "Help blood clotting." },
    { q: "What is plasma?", a: "Liquid part of blood that transports dissolved substances." },
    { q: "What is double circulation?", a: "Blood passes through the heart twice per complete circuit." },
    { q: "Where does pulmonary circulation go?", a: "Between heart and lungs." },
    { q: "Where does systemic circulation go?", a: "Between heart and body tissues." },
    { q: "What prevents backflow of blood in the heart?", a: "Valves." }
  ],
  mcqs: [
    { q: "The human circulatory system consists of:", options: ["Lungs and kidneys only", "The heart, blood and blood vessels", "The brain and spinal cord only", "Skin and bones only"], answer: 1, explain: "These three components form the transport system." },
    { q: "The main function of the heart is to:", options: ["Digest starch in the ileum", "Pump blood around the body", "Produce bile for fat digestion", "Filter urea from blood in the nephron"], answer: 1, explain: "The heart is a muscular pump driving double circulation." },
    { q: "The human heart has how many chambers?", options: ["Two", "Three", "Four", "Five"], answer: 2, explain: "Right and left atria plus right and left ventricles." },
    { q: "Arteries are blood vessels that carry blood:", options: ["Towards the heart only", "Away from the heart", "Only within the lungs with no pump", "From capillaries to veins only"], answer: 1, explain: "Arteries carry blood from ventricles to organs (pulmonary artery is an exception carrying deoxygenated blood to lungs)." },
    { q: "Veins are blood vessels that carry blood:", options: ["Away from the heart", "Towards the heart", "Only in one direction with no return", "Without ever joining capillaries"], answer: 1, explain: "Veins return blood to the atria under low pressure." },
    { q: "Capillaries are best described as:", options: ["Thick-walled high-pressure vessels", "Thin-walled vessels for exchange of materials", "Muscular pumps like the heart", "Valves that prevent backflow"], answer: 1, explain: "Their thin walls allow diffusion between blood and tissue fluid." },
    { q: "Most oxygen is transported in the blood by:", options: ["Plasma proteins only", "Red blood cells containing haemoglobin", "White blood cells only", "Platelets at injury sites"], answer: 1, explain: "Haemoglobin binds oxygen in the lungs." },
    { q: "Haemoglobin is found mainly in:", options: ["Blood plasma", "White blood cells", "Red blood cells", "Platelets"], answer: 2, explain: "Red blood cells are packed with haemoglobin and lack a nucleus." },
    { q: "The main function of white blood cells is:", options: ["Carrying oxygen to muscles", "Defending the body against infection", "Digesting food in the stomach", "Producing bile in the liver"], answer: 1, explain: "Some engulf pathogens; lymphocytes produce antibodies." },
    { q: "Platelets in the blood help to:", options: ["Transport oxygen as oxyhaemoglobin", "Form clots to reduce bleeding at wounds", "Photosynthesise in the skin", "Pump blood from ventricles"], answer: 1, explain: "Platelets trigger clotting when vessels are damaged." },
    { q: "Blood plasma mainly transports:", options: ["Only oxygen with no other substances", "Dissolved nutrients, hormones, carbon dioxide and waste", "Only red blood cells with no liquid", "Chlorophyll for photosynthesis"], answer: 1, explain: "Plasma is the liquid matrix of blood." },
    { q: "Compared with veins, arteries typically have:", options: ["Thinner walls with no muscle", "Thicker muscular and elastic walls", "No connection to the heart", "Only one cell thick walls"], answer: 1, explain: "Thick walls withstand high pressure from the heart." },
    { q: "Veins often contain valves that:", options: ["Pump blood away from the heart", "Prevent backflow of blood towards the heart", "Digest proteins in the blood", "Produce haemoglobin"], answer: 1, explain: "Low pressure in veins needs valves to stop backflow." },
    { q: "Capillary walls are usually:", options: ["One cell thick for short diffusion distance", "Very thick like major arteries", "Made of cartilage rings", "Impermeable to all substances"], answer: 0, explain: "Thin walls speed exchange of oxygen, glucose and wastes." },
    { q: "Double circulation in humans means:", options: ["Blood passes through the heart once per circuit", "Blood passes through the heart twice per complete circuit", "Blood never reaches the lungs", "Only veins carry blood to tissues"], answer: 1, explain: "Pulmonary and systemic circuits each pass through the heart." },
    { q: "Pulmonary circulation carries blood between the:", options: ["Heart and lungs", "Heart and skin only", "Liver and small intestine only", "Kidneys and bladder only"], answer: 0, explain: "Blood is oxygenated in the lungs during pulmonary circulation." },
    { q: "Systemic circulation carries blood between the:", options: ["Heart and lungs only", "Heart and the rest of the body tissues", "Mouth and stomach only", "Root hairs and xylem"], answer: 1, explain: "Oxygenated blood is delivered to cells and deoxygenated blood returns." },
    { q: "The muscular wall of the left ventricle is thicker than the right because the left ventricle:", options: ["Pumps blood to the entire body at high pressure", "Only pumps blood to the lungs nearby", "Does not contain any cardiac muscle", "Stores bile for digestion"], answer: 0, explain: "Systemic circulation requires greater pressure than pulmonary." },
    { q: "Oxygen is carried in the blood largely as:", options: ["Dissolved nitrogen only", "Oxyhaemoglobin in red blood cells", "Starch granules in plasma", "Lactic acid in platelets"], answer: 1, explain: "Haemoglobin + O₂ ↔ oxyhaemoglobin in lungs and tissues." },
    { q: "In the lungs, haemoglobin combines with oxygen to form:", options: ["Oxyhaemoglobin", "Lactic acid", "Ethanol", "Bile"], answer: 0, explain: "High O₂ concentration in alveoli favours loading of oxygen." },
    { q: "In active tissues, oxyhaemoglobin releases oxygen because:", options: ["Oxygen concentration in tissues is lower than in the blood entering capillaries", "Carbon dioxide cannot diffuse", "Haemoglobin disappears in muscles", "Platelets block all capillaries"], answer: 0, explain: "Diffusion follows concentration gradients." },
    { q: "The heart is described as a muscular organ because it:", options: ["Contracts to pump blood", "Digests food with enzymes", "Absorbs light for photosynthesis", "Stores starch in vacuoles"], answer: 0, explain: "Cardiac muscle contracts rhythmically in the cardiac cycle." },
    { q: "The right side of the heart pumps blood to the:", options: ["Lungs via the pulmonary artery", "Body via the aorta directly", "Small intestine only", "Kidneys without returning"], answer: 0, explain: "Right ventricle sends deoxygenated blood to the lungs." },
    { q: "The left side of the heart pumps oxygenated blood to the:", options: ["Lungs only", "Body via the aorta", "Liver via bile ducts", "Soil via root hairs"], answer: 1, explain: "Left ventricle pumps into the aorta for systemic circulation." },
    { q: "A blood clot at a wound helps to:", options: ["Increase oxygen transport permanently", "Reduce blood loss and prevent entry of pathogens", "Digest starch in the mouth", "Speed up photosynthesis"], answer: 1, explain: "Clotting seals damaged vessels." },
    { q: "Coronary arteries supply:", options: ["The heart muscle itself with oxygen and nutrients", "Only the lungs with deoxygenated blood", "The brain with cerebrospinal fluid", "The skin with melanin"], answer: 0, explain: "Heart muscle needs its own blood supply to respire and contract." },
    { q: "Blockage of a coronary artery can cause:", options: ["A heart attack due to lack of oxygen to heart muscle", "Improved gas exchange in alveoli", "Extra haemoglobin in plasma", "Digestion to stop in the ileum"], answer: 0, explain: "Cardiac muscle cells may die if blood flow stops." },
    { q: "Digested glucose and amino acids are often transported in the blood in:", options: ["Plasma to body cells", "Only red blood cell nuclei", "The trachea as mucus", "Xylem vessels in plants"], answer: 0, explain: "Soluble products of digestion dissolve in plasma." },
    { q: "Hormones are transported in the blood mainly in:", options: ["Plasma to target organs", "Only platelets at clots", "The cell wall of arteries", "Stomach acid"], answer: 0, explain: "Hormones travel dissolved or bound to carriers in plasma." },
    { q: "Mature red blood cells in humans lack a nucleus so that:", options: ["More space is available for haemoglobin", "They can perform phagocytosis", "They produce many antibodies", "They pump blood like the heart"], answer: 0, explain: "Biconcave shape and no nucleus maximise oxygen carriage." },
    { q: "Blood is sometimes described as a tissue because it:", options: ["Contains living cells in a fluid matrix (plasma)", "Is only water with no cells", "Is found only outside the body", "Never carries carbon dioxide"], answer: 0, explain: "Blood is a connective tissue with several cell types." },
    { q: "The pulmonary artery is unusual because it carries:", options: ["Deoxygenated blood from the heart to the lungs", "Oxygenated blood to the body", "Only nutrients from the ileum", "Lymph from lacteals"], answer: 0, explain: "Most arteries carry oxygenated blood; pulmonary artery is an exception." },
    { q: "The pulmonary vein carries:", options: ["Oxygenated blood from the lungs to the left atrium", "Deoxygenated blood to the lungs", "Bile to the small intestine", "Water in xylem to leaves"], answer: 0, explain: "Oxygenated blood returns from lungs to the heart." },
    { q: "Exchange of oxygen and glucose with muscle cells occurs mainly in:", options: ["Capillaries in the muscles", "The aorta leaving the heart", "Large veins in the leg only", "The trachea during breathing"], answer: 0, explain: "Capillaries have a large total surface area in contact with tissues." },
    { q: "During exercise, heart rate often increases to:", options: ["Deliver more oxygen and glucose to working muscles faster", "Stop all blood flow to the lungs", "Remove haemoglobin from red cells", "Close all capillaries in the skin"], answer: 0, explain: "Faster circulation meets higher respiration demand." },
    { q: "Valves in the heart prevent:", options: ["Backflow of blood when chambers contract", "All oxygen binding to haemoglobin", "Plasma from carrying urea", "White cells from fighting infection"], answer: 0, explain: "Atrioventricular and semilunar valves ensure one-way flow." },
    { q: "Carbon dioxide produced by respiring tissues is often transported in the blood:", options: ["Dissolved in plasma and also as hydrogencarbonate ions", "Only inside platelets as clots", "Only in the nucleus of red cells", "As starch in arteries"], answer: 0, explain: "CO₂ is carried in several forms back to the lungs for exhalation." },
    { q: "The vena cava carries blood:", options: ["Into the right atrium from the body", "From the left ventricle to the lungs", "From the aorta to muscles only", "Into the small intestine for absorption"], answer: 0, explain: "Deoxygenated blood from systemic veins enters the right atrium." },
    { q: "The aorta is the main artery that:", options: ["Leaves the left ventricle carrying oxygenated blood to the body", "Carries blood from the right ventricle to the lungs", "Connects arteries directly to veins with no capillaries", "Stores glycogen in the liver"], answer: 0, explain: "The aorta branches to supply all body organs." },
    { q: "A complete circulatory system is vital for homeostasis because it:", options: ["Distributes oxygen, nutrients and removes waste from cells", "Replaces the need for gas exchange", "Stops all cellular respiration", "Prevents digestion of proteins"], answer: 0, explain: "Every active cell needs supply and waste removal via the blood." },
  ],
  theory: [
    {
      q: "Describe the structure of the human heart.",
      marks: 6,
      points: [
        "Four chambers: RA, RV, LA, LV",
        "Right side receives deoxygenated blood; left side oxygenated",
        "Valves prevent backflow",
        "Left ventricle wall thicker than right",
        "Septum separates left and right sides",
        "Coronary arteries supply heart muscle"
      ]
    },
    {
      q: "Compare arteries, veins and capillaries.",
      marks: 6,
      points: [
        "Arteries: away from heart, thick walls, high pressure",
        "Veins: to heart, thinner walls, valves, low pressure",
        "Capillaries: one cell thick, exchange, narrow lumen",
        "Link structure to function for each"
      ]
    },
    {
      q: "Explain double circulation in humans.",
      marks: 5,
      points: [
        "Blood passes heart twice per circuit",
        "Pulmonary: heart → lungs → heart (gas exchange)",
        "Systemic: heart → body → heart (supply and waste removal)",
        "Increases efficiency of oxygen delivery to tissues"
      ]
    },
    {
      q: "Describe the components of blood and their functions.",
      marks: 6,
      points: [
        "Plasma: transport dissolved substances, heat",
        "Red blood cells: haemoglobin, oxygen transport, no nucleus",
        "White blood cells: phagocytosis, antibodies",
        "Platelets: clotting"
      ]
    },
    {
      q: "Explain how oxygen is transported in the blood.",
      marks: 4,
      points: [
        "Haemoglobin in red blood cells",
        "In lungs: forms oxyhaemoglobin (high O₂)",
        "In tissues: oxygen released (lower O₂)",
        "Concentration gradient drives loading and unloading"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "Describe the path of blood through the heart and lungs. [5]",
      marks: 5,
      answer: "Deoxygenated blood → right atrium → right ventricle → pulmonary artery → lungs.\nOxygenated blood → pulmonary vein → left atrium → left ventricle → aorta → body."
    },
    {
      q: "Explain how capillaries are adapted for exchange. [3]",
      marks: 3,
      answer: "Walls one cell thick — short diffusion distance.\nNarrow lumen — slow flow allows exchange time.\nPermeable walls between blood and tissue fluid."
    }
  ]
};

(function mergeTransportHumansChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES["transport-humans"] || {};
  BIOLOGY_5090_NOTES["transport-humans"] = Object.assign({}, base, TRANSPORT_HUMANS_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ["transport-humans"] = {
      flashcards: TRANSPORT_HUMANS_CHAPTER_5090.flashcards,
      mcqs: TRANSPORT_HUMANS_CHAPTER_5090.mcqs,
      theory: TRANSPORT_HUMANS_CHAPTER_5090.theory
    };
  }
})();

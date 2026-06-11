/**
 * Biology 5090 - Chapter 3 Movement into and out of Cells (full study content)
 */
const MOVEMENT_CHAPTER_5090 = {
  learningObjectives: [
    "Define diffusion, osmosis and active transport.",
    "Explain how substances move into and out of cells.",
    "Describe the role of concentration gradients.",
    "Explain the importance of partially permeable membranes.",
    "Compare diffusion, osmosis and active transport.",
    "Apply knowledge of movement across membranes to plants and animals.",
    "Interpret simple experimental results involving osmosis and diffusion."
  ],
  summary: [
    "Diffusion is the movement of particles from high concentration to low concentration.",
    "Osmosis is the movement of water through a partially permeable membrane.",
    "Active transport moves substances against the concentration gradient using energy.",
    "Plant cells become turgid when water enters and flaccid when water leaves.",
    "Animal cells may burst in dilute solutions because they lack a cell wall.",
    "Root hair cells absorb mineral ions by active transport.",
    "Surface area to volume ratio affects the efficiency of substance exchange.",
    "These processes are essential for nutrition, respiration, excretion and maintaining life."
  ],
  examples: [
    { title: "Example 1", text: "Perfume smell spreading through a room is diffusion." },
    { title: "Example 2", text: "A lettuce leaf becoming crisp in water is due to osmosis." },
    { title: "Example 3", text: "Mineral ion uptake by root hair cells uses active transport." }
  ],
  comparisonTable: {
    headers: ["Feature", "Diffusion", "Osmosis", "Active transport"],
    rows: [
      ["Requires energy", "No", "No", "Yes"],
      ["Partially permeable membrane required", "No", "Yes", "Yes"],
      ["Substance moved", "Particles", "Water only", "Particles"],
      ["Direction", "High to low concentration", "High to low water potential", "Low to high concentration"]
    ]
  },
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "Cells constantly exchange substances with their surroundings. Oxygen, carbon dioxide, water, mineral ions, glucose and waste products must move into or out of cells for life processes to occur.",
        "The movement of substances across cell membranes occurs mainly through diffusion, osmosis and active transport."
      ]
    },
    {
      title: "Cell membranes",
      subsections: [
        {
          title: "Structure and control",
          paragraphs: ["The cell membrane surrounds the cell and controls the movement of substances."]
        },
        {
          title: "Partially permeable membrane",
          paragraphs: [
            "A partially permeable membrane allows some substances to pass through while preventing others from passing.",
            "It controls entry of useful substances, prevents harmful substances entering, and helps maintain stable internal conditions."
          ]
        }
      ]
    },
    {
      title: "Diffusion",
      paragraphs: [
        "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration down a concentration gradient.",
        "Particles move randomly. When there is a concentration difference, more particles move from high to low until they are evenly distributed."
      ],
      subsections: [
        {
          title: "Examples",
          bulletList: [
            "Oxygen diffuses from alveoli into blood; carbon dioxide diffuses from blood into alveoli",
            "Carbon dioxide diffuses into leaf cells for photosynthesis",
            "Oxygen diffuses into cells during respiration; carbon dioxide diffuses out"
          ]
        },
        {
          title: "Factors affecting diffusion rate",
          bulletList: [
            "Larger concentration gradient increases rate",
            "Higher temperature increases particle movement",
            "Larger surface area increases diffusion",
            "Shorter diffusion distance increases speed"
          ]
        }
      ]
    },
    {
      title: "Osmosis",
      paragraphs: [
        "Osmosis is the net movement of water molecules from a region of higher water potential to a region of lower water potential through a partially permeable membrane.",
        "Water moves from dilute solutions (high water potential) to more concentrated solutions (lower water potential)."
      ],
      subsections: [
        {
          title: "Osmosis in plant cells",
          bulletList: [
            "Turgid: water enters, vacuole expands, cytoplasm presses on cell wall, cell becomes firm",
            "Flaccid: water leaves, vacuole shrinks, cell less firm",
            "Plasmolysis: excessive water loss; cell membrane pulls away from cell wall"
          ]
        },
        {
          title: "Osmosis in animal cells",
          bulletList: [
            "In dilute solution: water enters; cell may swell and burst (lysis)",
            "In concentrated solution: water leaves; cell shrinks (crenation)",
            "Animal cells lack a cell wall, so they cannot become turgid like plant cells"
          ]
        },
        {
          title: "Importance of osmosis",
          bulletList: [
            "Plants: maintains support, helps water uptake, reduces wilting",
            "Animals: maintains water balance and normal cell function"
          ]
        }
      ]
    },
    {
      title: "Active transport",
      paragraphs: [
        "Active transport is the movement of particles from a region of lower concentration to a region of higher concentration using energy from respiration.",
        "It moves substances against the concentration gradient, requires energy, and uses membrane proteins (carrier proteins)."
      ],
      subsections: [
        {
          title: "Examples",
          bulletList: [
            "Root hair cells: mineral ions move from soil into cells when soil concentration is lower",
            "Small intestine: glucose absorbed into blood even when concentration is higher in blood"
          ]
        }
      ]
    },
    {
      title: "Surface area to volume ratio",
      paragraphs: [
        "Cells exchange materials through their surface. Smaller cells have a larger surface area compared with volume, so exchange is faster.",
        "Adaptations: root hair cells (large SA for absorption), alveoli (gas exchange), villi (nutrient absorption)."
      ]
    }
  ],
  definitions: [
    { term: "Diffusion", definition: "Net movement of particles from high concentration to low concentration." },
    { term: "Concentration gradient", definition: "Difference in concentration between two areas." },
    { term: "Osmosis", definition: "Movement of water through a partially permeable membrane." },
    { term: "Partially permeable membrane", definition: "Membrane allowing some substances through but not others." },
    { term: "Water potential", definition: "Measure of tendency of water molecules to move." },
    { term: "Turgid", definition: "Firm plant cell full of water." },
    { term: "Flaccid", definition: "Plant cell that has lost water and is less firm." },
    { term: "Plasmolysis", definition: "Cell membrane pulling away from cell wall after water loss." },
    { term: "Active transport", definition: "Movement against concentration gradient using energy." },
    { term: "Surface area to volume ratio", definition: "Relationship between cell surface area and volume affecting exchange rate." }
  ],
  syllabusPoints: [
    { code: "3.1", title: "Diffusion", content: "Diffusion is net movement from high to low concentration down a gradient. No energy is required. Examples include gas exchange in lungs and CO₂ entering leaves." },
    { code: "3.2", title: "Factors affecting diffusion", content: "Rate increases with greater concentration difference, higher temperature, larger surface area, and shorter diffusion distance. Explains thin alveolar walls and folded villi." },
    { code: "3.3", title: "Osmosis", content: "Water moves through a partially permeable membrane from higher to lower water potential. Plant cells become turgid, flaccid, or plasmolysed; animal cells may lyse or shrink." },
    { code: "3.4", title: "Active transport", content: "Movement from low to high concentration using energy from respiration and carrier proteins. Used for mineral ions in root hairs and glucose in the ileum." },
    { code: "3.5", title: "Practical investigations", content: "Osmosis in potato cylinders or Visking tubing; diffusion demonstrations. Explain results using water potential and membrane permeability." },
    { code: "3.6", title: "Surface area to volume ratio", content: "Exchange occurs at the surface. Large SA relative to volume speeds uptake. Root hairs, alveoli and villi increase effective surface area." }
  ],
  quickRecap: "Diffusion: high to low, no energy.\nOsmosis: water only, partially permeable membrane.\nActive transport: low to high, needs ATP.\nTurgid / flaccid / plasmolysed plant cells.\nLysis or crenation in animal cells.\nRoot hairs: large SA + active transport for ions.\nFaster diffusion: gradient, temperature, SA, short distance.",
  examTips: "Define diffusion, osmosis and active transport precisely; state if energy is needed. Use partially permeable membrane and concentration gradient correctly. Link plant cells to turgid, flaccid and plasmolysed. Explain practicals with water potential, not vague strong/weak solution labels.",
  flashcards: [
    { q: "What is diffusion?", a: "Movement from high concentration to low concentration." },
    { q: "What is osmosis?", a: "Movement of water through a partially permeable membrane." },
    { q: "What is active transport?", a: "Movement against concentration gradient using energy." },
    { q: "Does diffusion require energy?", a: "No." },
    { q: "Does active transport require energy?", a: "Yes." },
    { q: "What membrane is needed for osmosis?", a: "Partially permeable membrane." },
    { q: "What is a concentration gradient?", a: "Difference in concentration." },
    { q: "What happens to a turgid cell?", a: "It becomes firm." },
    { q: "What is plasmolysis?", a: "Cell membrane pulls away from cell wall." },
    { q: "What causes lysis?", a: "Too much water entering an animal cell." },
    { q: "Which process moves particles against a gradient?", a: "Active transport." },
    { q: "Example of active transport?", a: "Mineral ion uptake in root hair cells." },
    { q: "What increases diffusion rate?", a: "Higher temperature (also larger gradient, larger SA, shorter distance)." },
    { q: "Why are root hair cells adapted?", a: "Large surface area for absorption." },
    { q: "What does SA:V mean?", a: "Surface area to volume ratio." }
  ],
  mcqs: [
    { q: "Diffusion is the net movement of particles:", options: ["From low to high concentration", "From high to low concentration", "Only when concentrations are equal", "Against a concentration gradient using ATP"], answer: 1, explain: "Diffusion occurs down a concentration gradient without energy." },
    { q: "Which process requires energy from respiration?", options: ["Diffusion", "Osmosis", "Active transport", "Evaporation from leaves only"], answer: 2, explain: "Active transport uses ATP to move substances against a gradient." },
    { q: "Osmosis involves the movement of:", options: ["Oxygen molecules", "Carbon dioxide molecules", "Water molecules", "All solute particles"], answer: 2, explain: "Osmosis is specifically the movement of water through a partially permeable membrane." },
    { q: "Osmosis requires which structure?", options: ["A rigid cell wall only", "A chloroplast", "A partially permeable membrane", "A nucleus"], answer: 2, explain: "Water crosses a partially permeable membrane during osmosis." },
    { q: "A concentration gradient is:", options: ["Equal concentrations in two regions", "A difference in concentration between two regions", "A type of cell wall", "The same as active transport"], answer: 1, explain: "A gradient is the difference that drives net diffusion." },
    { q: "Diffusion of oxygen into the blood at the alveoli:", options: ["Requires carrier proteins and ATP", "Occurs without energy down a gradient", "Moves water only", "Always moves from blood to air"], answer: 1, explain: "Gas exchange at alveoli is passive diffusion." },
    { q: "Root hair cells absorb mineral ions from dilute soil water mainly by:", options: ["Diffusion down a gradient", "Osmosis of ions", "Active transport", "Transpiration pull"], answer: 2, explain: "Ion concentration in the cell is often higher than in soil, so active transport is needed." },
    { q: "Water enters a plant cell from pure water mainly by:", options: ["Active transport of water", "Osmosis", "Diffusion of solutes only", "Photosynthesis"], answer: 1, explain: "Water moves into the cell down a water potential gradient by osmosis." },
    { q: "A plant cell that is turgid is:", options: ["Shrunken with membrane away from the wall", "Firm because the vacuole is full of water", "Burst open with no cell wall", "Unable to absorb any water"], answer: 1, explain: "Water entry swells the vacuole and presses the cytoplasm against the cell wall." },
    { q: "A flaccid plant cell has:", options: ["Gained so much water that it bursts", "Lost water so the vacuole is smaller and the cell is less firm", "Active transport stopped completely", "No partially permeable membrane"], answer: 1, explain: "Flaccid cells have lost water and lack full turgor pressure." },
    { q: "Plasmolysis in a plant cell occurs when:", options: ["Too much water enters and the cell bursts", "Water leaves and the cell membrane pulls away from the cell wall", "Oxygen diffuses into chloroplasts", "Mineral ions diffuse out rapidly"], answer: 1, explain: "Excessive water loss causes the protoplast to shrink away from the wall." },
    { q: "Oxygen diffuses from the alveolar air into the blood because:", options: ["Oxygen concentration is higher in the blood", "Oxygen concentration is higher in the alveolar air", "Active transport pumps oxygen", "Osmosis moves oxygen"], answer: 1, explain: "Blood picks up oxygen down a concentration gradient from air to blood." },
    { q: "Carbon dioxide diffuses from respiring tissues into the blood when:", options: ["CO₂ concentration is higher in the blood than in tissues", "CO₂ concentration is higher in the tissues than in the blood", "Water potential is equal everywhere", "Only osmosis is occurring"], answer: 1, explain: "CO₂ moves from where it is produced (high concentration) to the blood (lower concentration)." },
    { q: "Active transport moves substances:", options: ["From high to low concentration only", "From low to high concentration", "Without using membrane proteins", "Only for water molecules"], answer: 1, explain: "Active transport works against the concentration gradient." },
    { q: "Energy for active transport is supplied mainly by:", options: ["Photosynthesis in the nucleus", "Respiration in mitochondria", "Diffusion of glucose", "Cell wall synthesis"], answer: 1, explain: "ATP from aerobic respiration powers carrier proteins." },
    { q: "Which statement about osmosis is correct?", options: ["It moves any solute through a membrane", "It involves only water through a partially permeable membrane", "It requires ATP for each water molecule", "It moves particles from low to high concentration"], answer: 1, explain: "Osmosis is the special case of water movement across a partially permeable membrane." },
    { q: "The cell membrane is important because it:", options: ["Stores genetic material only", "Controls movement of substances into and out of the cell", "Carries out photosynthesis in all cells", "Replaces the need for diffusion"], answer: 1, explain: "The membrane is selectively permeable and regulates exchange." },
    { q: "Alveoli are adapted for gas exchange partly because they:", options: ["Have very thick walls to store oxygen", "Provide a large surface area for diffusion", "Actively pump nitrogen into the blood", "Prevent any water movement"], answer: 1, explain: "Millions of alveoli give a huge surface area for rapid gas exchange." },
    { q: "Villi in the small intestine increase absorption by:", options: ["Decreasing surface area", "Increasing surface area and maintaining a gradient", "Stopping active transport", "Blocking osmosis"], answer: 1, explain: "Many villi with thin walls increase SA and keep a steep absorption gradient." },
    { q: "An increase in temperature generally increases the rate of diffusion because:", options: ["Particles move more slowly", "Particles have more kinetic energy and move faster", "Membranes become impermeable", "Concentration gradients disappear"], answer: 1, explain: "Higher temperature increases random motion of particles." },
    { q: "A larger surface area for exchange will:", options: ["Slow down diffusion", "Increase the rate of diffusion", "Stop osmosis", "Require more ATP for simple diffusion"], answer: 1, explain: "More area allows more particles to cross per unit time." },
    { q: "A shorter diffusion distance will:", options: ["Slow gas exchange", "Speed up diffusion", "Prevent osmosis", "Increase plasmolysis only"], answer: 1, explain: "Thin walls (e.g. alveoli, capillaries) reduce the distance for diffusion." },
    { q: "An animal cell placed in a very dilute solution may:", options: ["Become plasmolysed", "Swell and burst because it has no cell wall", "Photosynthesise faster", "Stop all respiration"], answer: 1, explain: "Water enters by osmosis; without a wall the cell may undergo lysis." },
    { q: "Mineral ions in soil are often absorbed by root hairs using:", options: ["Simple diffusion only", "Osmosis of minerals", "Active transport", "Transpiration"], answer: 2, explain: "Ions are taken up against a concentration gradient using carrier proteins." },
    { q: "Water potential is important in osmosis because:", options: ["It measures tendency of water to move", "It only applies to active transport", "It is the same as cell wall strength", "It prevents water from moving"], answer: 0, explain: "Water moves from higher to lower water potential across a membrane." },
    { q: "A plant cell in pure water does not usually burst because:", options: ["It has no membrane", "The cell wall prevents bursting and supports turgidity", "Osmosis does not occur in plants", "Water never enters plant cells"], answer: 1, explain: "The rigid cell wall withstands pressure when the cell becomes turgid." },
    { q: "Osmosis can occur only when:", options: ["There is no concentration difference", "Water crosses a partially permeable membrane", "ATP is available", "Only oxygen is present"], answer: 1, explain: "A partially permeable membrane separates two solutions with different water potentials." },
    { q: "Active transport is directly linked to respiration because:", options: ["Respiration produces oxygen for diffusion", "Respiration releases energy stored as ATP", "Respiration stops water movement", "Respiration builds cell walls"], answer: 1, explain: "ATP from respiration powers carrier proteins." },
    { q: "Diffusion is described as passive because:", options: ["It uses energy from sunlight only", "It does not require metabolic energy", "It moves substances against a gradient", "It only occurs in dead cells"], answer: 1, explain: "Passive processes do not need ATP from the cell." },
    { q: "Oxygen is used during aerobic respiration mainly to:", options: ["Make cell walls", "Release energy from glucose for processes such as active transport", "Cause plasmolysis", "Stop diffusion in the lungs"], answer: 1, explain: "Respiration transfers energy from glucose to ATP." },
    { q: "Glucose may be absorbed from the ileum into the blood by active transport when:", options: ["Glucose concentration is higher in the ileum than in the blood", "Glucose concentration is lower in the ileum than in the blood", "No membrane is present", "Only osmosis occurs"], answer: 1, explain: "Absorption against a gradient requires active transport and carrier proteins." },
    { q: "In osmosis, water molecules tend to move:", options: ["From lower water potential to higher water potential", "From higher water potential to lower water potential", "Only when solutes are absent", "Against a water potential gradient using ATP"], answer: 1, explain: "Water moves down the water potential gradient through the membrane." },
    { q: "Turgor pressure in plants helps to:", options: ["Burst the cell wall", "Support stems and leaves", "Stop all osmosis", "Replace active transport"], answer: 1, explain: "Turgid cells press against the cell wall and keep plants firm." },
    { q: "A plasmolysed plant cell has:", options: ["Gained water rapidly", "Lost water so the membrane pulls away from the cell wall", "Undergone lysis", "Equal water potential everywhere"], answer: 1, explain: "Plasmolysis follows water loss to a concentrated external solution." },
    { q: "Carrier proteins in the cell membrane are involved in:", options: ["Only passive diffusion of all gases", "Active transport (and some facilitated diffusion)", "Building cellulose walls in animals", "Photosynthesis only"], answer: 1, explain: "Carrier proteins bind and move specific substances, especially in active transport." },
    { q: "Surface area to volume ratio is important because:", options: ["Larger cells always exchange faster", "Exchange occurs at the surface; a high SA:V speeds uptake", "It stops osmosis in roots", "It replaces the need for a membrane"], answer: 1, explain: "Small cells or extensions like root hairs have favourable SA:V for exchange." },
    { q: "Smaller cells often exchange materials faster than very large cells because:", options: ["They have a larger surface area relative to volume", "They have no cell membrane", "They cannot use active transport", "They lack water"], answer: 0, explain: "A higher SA:V ratio allows quicker diffusion and osmosis per unit volume." },
    { q: "Root hair cells are adapted for absorption by having:", options: ["A small surface area and thick walls", "A long extension that increases surface area in contact with soil water", "No partially permeable membrane", "No vacuole"], answer: 1, explain: "The projection increases SA for water and ion uptake." },
    { q: "A lettuce leaf placed in fresh water becomes crisp mainly because:", options: ["Water leaves by active transport", "Water enters by osmosis and the cells become turgid", "Oxygen diffuses out of the leaf only", "The cell wall disappears"], answer: 1, explain: "Water enters leaf cells by osmosis, restoring turgor." },
    { q: "In a potato osmosis experiment, cylinders placed in concentrated sugar solution usually:", options: ["Gain mass because water enters", "Lose mass because water leaves by osmosis", "Show no change because membranes are impermeable", "Photosynthesise and gain starch only"], answer: 1, explain: "Water moves out of potato cells into the concentrated solution." }
  ],
  theory: [
    {
      q: "Define diffusion and explain two factors that affect its rate.",
      marks: 5,
      points: [
        "Diffusion: net movement from high to low concentration down a gradient",
        "No energy required; passive process",
        "Factor 1: concentration gradient (larger difference increases rate)",
        "Factor 2: temperature (higher temperature increases kinetic energy)",
        "Other valid factors: surface area, diffusion distance"
      ]
    },
    {
      q: "Describe how osmosis occurs in plant cells.",
      marks: 5,
      points: [
        "Water moves through partially permeable membrane",
        "From higher to lower water potential",
        "In pure water: water enters, vacuole swells, cell becomes turgid",
        "In concentrated solution: water leaves, cell flaccid",
        "Plasmolysis if membrane pulls away from cell wall"
      ]
    },
    {
      q: "Compare diffusion, osmosis and active transport.",
      marks: 6,
      points: [
        "Diffusion: particles, high to low, no energy, no membrane required for gases",
        "Osmosis: water only, partially permeable membrane, no energy",
        "Active transport: particles, low to high, needs energy and carrier proteins",
        "Examples: diffusion — O₂ into blood; osmosis — water into root hair; active transport — mineral ions"
      ]
    },
    {
      q: "Explain why root hair cells use active transport to absorb mineral ions.",
      marks: 4,
      points: [
        "Ion concentration inside cell is higher than in soil",
        "Movement is against concentration gradient",
        "Diffusion and osmosis cannot achieve this uptake",
        "Energy from respiration powers carrier proteins"
      ]
    },
    {
      q: "Describe the importance of surface area to volume ratio in living organisms.",
      marks: 4,
      points: [
        "Exchange occurs across surfaces",
        "High SA:V allows faster diffusion/osmosis per unit volume",
        "Adaptations: root hairs, alveoli, villi increase effective surface area",
        "Very large cells would exchange too slowly without adaptations"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "A plant cell is placed in a concentrated salt solution. Describe and explain what happens. [3]",
      marks: 3,
      answer: "Water leaves by osmosis through the partially permeable membrane.\nWater moves to the more concentrated solution outside.\nCell becomes flaccid; membrane may pull away (plasmolysis)."
    },
    {
      q: "State two ways alveoli are adapted for rapid gas exchange. [2]",
      marks: 2,
      answer: "Thin walls — short diffusion distance.\nLarge surface area / good blood supply maintains steep gradient."
    }
  ]
};

(function mergeMovementChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES.movement || {};
  BIOLOGY_5090_NOTES.movement = Object.assign({}, base, MOVEMENT_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ.movement = {
      flashcards: MOVEMENT_CHAPTER_5090.flashcards,
      mcqs: MOVEMENT_CHAPTER_5090.mcqs,
      theory: MOVEMENT_CHAPTER_5090.theory
    };
  }
})();

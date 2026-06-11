/**
 * Biology 5090 - Chapter 5 Enzymes (full study content)
 */
const ENZYMES_CHAPTER_5090 = {
  learningObjectives: [
    "Define enzymes and explain their role as biological catalysts.",
    "Describe how enzymes work using the lock and key model.",
    "Explain the effect of temperature, pH, and substrate concentration on enzyme activity.",
    "Understand the concept of denaturation.",
    "Apply knowledge of enzymes in digestion and metabolism.",
    "Interpret simple experiments involving enzyme activity."
  ],
  summary: [
    "Enzymes are biological catalysts made of protein.",
    "They work using the lock and key model at the active site.",
    "Enzymes are specific to their substrates.",
    "Temperature and pH affect enzyme activity; extremes cause denaturation.",
    "Substrate concentration increases rate until active sites are saturated.",
    "Amylase, protease and lipase digest carbohydrates, proteins and fats.",
    "Enzymes are used in industry, including biological washing powders."
  ],
  examples: [
    { title: "Example 1", text: "Amylase breaks starch in bread into sugars during digestion." },
    { title: "Example 2", text: "Pepsin digests proteins in the acidic stomach." },
    { title: "Example 3", text: "Biological washing powders use proteases and lipases to remove stains." }
  ],
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "Enzymes are essential for life because they control almost all chemical reactions in living organisms. Without enzymes, reactions would be too slow to sustain life."
      ]
    },
    {
      title: "What are enzymes?",
      paragraphs: [
        "Enzymes are biological catalysts that speed up chemical reactions without being used up.",
        "They are made of protein, highly specific, work best at optimum conditions, and are not consumed in reactions."
      ]
    },
    {
      title: "How enzymes work",
      paragraphs: [
        "The lock and key model: the enzyme has an active site with a specific shape. The substrate fits like a key in a lock.",
        "An enzyme-substrate complex forms, the reaction occurs, products are released, and the enzyme remains unchanged.",
        "Example: amylase breaks starch into maltose in digestion."
      ]
    },
    {
      title: "Factors affecting enzyme activity",
      subsections: [
        {
          title: "Temperature",
          bulletList: [
            "Low temperature: slow reaction",
            "Optimum temperature: fastest reaction",
            "High temperature: enzyme denatures (shape changes permanently; substrate no longer fits)"
          ]
        },
        {
          title: "pH",
          bulletList: [
            "Each enzyme has an optimum pH",
            "Pepsin works best in acidic conditions (stomach)",
            "Amylase works best in neutral or slightly alkaline conditions",
            "Extreme pH can denature enzymes"
          ]
        },
        {
          title: "Substrate and enzyme concentration",
          bulletList: [
            "Low substrate: slow reaction; increasing substrate increases rate until saturation",
            "When all active sites are occupied, adding more substrate has little effect",
            "More enzyme molecules increase rate if substrate is available"
          ]
        }
      ]
    },
    {
      title: "Enzymes in digestion",
      subsections: [
        {
          title: "Amylase",
          paragraphs: ["Breaks starch to maltose. Found in saliva and small intestine."]
        },
        {
          title: "Protease",
          paragraphs: ["Breaks proteins to amino acids. Found in stomach (e.g. pepsin) and pancreas/small intestine."]
        },
        {
          title: "Lipase",
          paragraphs: ["Breaks fats to fatty acids and glycerol. Found in small intestine."]
        }
      ]
    },
    {
      title: "Industrial uses",
      bulletList: [
        "Biological detergents (protease and lipase remove stains)",
        "Food production (cheese, brewing)",
        "Pectinase in fruit juice; proteases in baby food"
      ]
    }
  ],
  definitions: [
    { term: "Enzyme", definition: "Protein that speeds up reactions without being used up." },
    { term: "Catalyst", definition: "Substance that increases reaction rate without permanent change." },
    { term: "Active site", definition: "Region of enzyme where substrate binds." },
    { term: "Substrate", definition: "Molecule acted on by an enzyme." },
    { term: "Enzyme-substrate complex", definition: "Temporary structure formed when substrate binds to active site." },
    { term: "Denaturation", definition: "Permanent change in enzyme shape and loss of function." },
    { term: "Optimum temperature", definition: "Temperature at which enzyme activity is fastest." },
    { term: "Optimum pH", definition: "pH at which enzyme activity is greatest." },
    { term: "Amylase", definition: "Enzyme that breaks starch into maltose." },
    { term: "Pepsin", definition: "Protease that works best in acidic conditions in the stomach." }
  ],
  syllabusPoints: [
    { code: "5.1", title: "Enzymes as biological catalysts", content: "Protein catalysts with specific active sites. Lock-and-key model: enzyme-substrate complex, products released, enzyme reused." },
    { code: "5.2", title: "Effect of temperature", content: "Rate rises to optimum (about 37 °C in humans), then denaturation reduces rate sharply." },
    { code: "5.3", title: "Effect of pH", content: "Pepsin optimum pH ~2 in stomach; amylase optimum near neutral/alkaline in intestine. Extreme pH denatures enzymes." },
    { code: "5.4", title: "Substrate concentration", content: "Rate increases until active sites saturated; then substrate concentration is no longer limiting." },
    { code: "5.5", title: "Commercial uses", content: "Biological washing powders (protease, lipase), pectinase in juice, enzymes in food processing." }
  ],
  quickRecap: "Enzymes = protein catalysts; active site; lock and key.\nOptimum temperature and pH; denature when too hot or wrong pH.\nSubstrate concentration → rate until saturation.\nAmylase (starch), protease (protein), lipase (fat).\nWashing powders: protease + lipase at lower temperatures.",
  examTips: "Sketch rate vs temperature with optimum and drop after denaturation. Explain denaturation as permanent active site shape change. Link pepsin to stomach pH 2 and amylase to intestine. Use rate of reaction in extended answers.",
  flashcards: [
    { q: "What are enzymes?", a: "Biological catalysts that speed up reactions." },
    { q: "What are enzymes made of?", a: "Proteins." },
    { q: "What is the active site?", a: "Region where the substrate binds." },
    { q: "What is a substrate?", a: "Molecule acted on by an enzyme." },
    { q: "What happens at high temperature?", a: "The enzyme denatures." },
    { q: "What is denaturation?", a: "Permanent change in enzyme shape and loss of function." },
    { q: "What is optimum temperature?", a: "Temperature where the enzyme works fastest." },
    { q: "What is the lock and key model?", a: "Substrate shape fits the active site; explains specificity." },
    { q: "Name an enzyme in saliva.", a: "Amylase." },
    { q: "What does protease break down?", a: "Proteins into amino acids." },
    { q: "What does lipase break down?", a: "Fats into fatty acids and glycerol." },
    { q: "Do enzymes get used up?", a: "No — they are reused." },
    { q: "What affects enzyme activity?", a: "Temperature, pH, and substrate concentration (also enzyme concentration)." },
    { q: "What is an enzyme-substrate complex?", a: "Temporary binding of enzyme and substrate at the active site." },
    { q: "Where is pepsin found?", a: "Stomach (acidic conditions)." }
  ],
  mcqs: [
    { q: "What is an enzyme?", options: ["A carbohydrate that stores energy", "A biological catalyst", "A lipid in the cell membrane only", "A hormone made in the pancreas only"], answer: 1, explain: "Enzymes speed up chemical reactions without being permanently used up." },
    { q: "Enzymes are made of:", options: ["Lipids", "Proteins", "Starch", "Mineral salts only"], answer: 1, explain: "The three-dimensional protein shape forms the active site." },
    { q: "The main function of enzymes in cells is to:", options: ["Store long-term energy", "Speed up chemical reactions", "Carry oxygen in the blood", "Form the cell wall in animals"], answer: 1, explain: "Enzymes act as catalysts in metabolism and digestion." },
    { q: "The region on an enzyme where the substrate binds is called the:", options: ["Cell wall", "Active site", "Nucleus", "Ribosome"], answer: 1, explain: "The active site has a complementary shape to the substrate." },
    { q: "The substrate of an enzyme is:", options: ["The enzyme itself", "The product only", "The molecule the enzyme acts on", "Water in every reaction"], answer: 2, explain: "The substrate binds at the active site before products form." },
    { q: "At the optimum temperature, an enzyme-controlled reaction is:", options: ["Stopped completely", "Fastest under those conditions", "Always denatured", "Independent of collisions"], answer: 1, explain: "Maximum rate occurs at the optimum before denaturation." },
    { q: "At very high temperatures, most enzymes:", options: ["Multiply in number", "Denature and lose activity", "Work faster without limit", "Change into lipids"], answer: 1, explain: "Heat breaks bonds holding the enzyme's shape; the active site no longer fits the substrate." },
    { q: "Denaturation of an enzyme means:", options: ["The enzyme is activated permanently", "The shape is changed permanently and function is lost", "The reaction speed increases forever", "More enzyme is produced"], answer: 1, explain: "Denatured enzymes cannot form a working enzyme-substrate complex." },
    { q: "The lock and key model is used to explain:", options: ["Photosynthesis only", "Enzyme specificity for a substrate", "Blood circulation", "Osmosis in roots"], answer: 1, explain: "Only a substrate with a matching shape fits the active site." },
    { q: "Which enzyme breaks down starch into maltose?", options: ["Lipase", "Amylase", "Protease", "Catalase only for fats"], answer: 1, explain: "Amylase digests starch in the mouth and small intestine." },
    { q: "Protease enzymes break down:", options: ["Fats into fatty acids", "Proteins into amino acids", "Starch into glucose only", "DNA into nucleotides in the mouth"], answer: 1, explain: "Proteases hydrolyse peptide bonds in proteins." },
    { q: "Lipase breaks down:", options: ["Proteins", "Fats into fatty acids and glycerol", "Starch", "Only DNA"], answer: 1, explain: "Lipase acts on lipids in the small intestine." },
    { q: "Enzymes are not used up in a reaction because they:", options: ["Are destroyed each time", "Can be reused after products are released", "Become substrates", "Turn into starch"], answer: 1, explain: "Catalysts are released unchanged and can catalyse again." },
    { q: "As temperature rises toward the optimum, the rate of an enzyme reaction generally:", options: ["Decreases steadily", "Increases because particles move faster", "Stays zero until 100 °C", "Stops because enzymes are used up"], answer: 1, explain: "More kinetic energy leads to more frequent successful collisions." },
    { q: "Which factor does NOT normally affect enzyme activity?", options: ["Temperature", "pH", "Gravity", "Substrate concentration"], answer: 2, explain: "Temperature, pH and substrate concentration change enzyme rate." },
    { q: "Pepsin works best in:", options: ["Neutral pH in the mouth", "Acidic pH in the stomach", "Highly alkaline pH in bile only", "Any pH with no effect"], answer: 1, explain: "Hydrochloric acid in the stomach gives pH about 2, the optimum for pepsin." },
    { q: "Salivary and intestinal amylase work best in:", options: ["Strong acid pH 2", "Neutral or slightly alkaline conditions", "pH 14 only", "Conditions with no water"], answer: 1, explain: "Amylase in saliva and the small intestine has optimum near neutral pH." },
    { q: "Increasing substrate concentration usually increases reaction rate until:", options: ["The enzyme is always denatured", "All active sites are occupied (saturation)", "Temperature becomes zero", "pH disappears"], answer: 1, explain: "When saturated, adding more substrate has little effect on rate." },
    { q: "The enzyme-substrate complex is:", options: ["Permanent for the life of the cell", "A temporary structure during the reaction", "Made of DNA", "The same as a lipid droplet"], answer: 1, explain: "Substrate binds temporarily; products are then released." },
    { q: "Enzymes are classified as:", options: ["Catalysts", "Only end products", "Inert cell walls", "Simple sugars"], answer: 0, explain: "A catalyst increases rate without being permanently changed." },
    { q: "Enzymes are highly specific, meaning:", options: ["One enzyme may catalyse many unrelated reactions", "Each enzyme usually catalyses one type of reaction or substrate", "All enzymes digest starch", "Substrates can be any shape"], answer: 1, explain: "The active site shape limits which substrate can bind." },
    { q: "During enzyme action, the substrate binds at the:", options: ["Nucleus", "Active site", "Cell wall in plants only", "Stomata"], answer: 1, explain: "Binding at the active site forms the enzyme-substrate complex." },
    { q: "Very high pH (strongly alkaline) can reduce enzyme activity because:", options: ["It always increases active site size", "It can denature the enzyme by changing its shape", "It removes all substrate", "It converts enzyme to glucose"], answer: 1, explain: "Extreme pH breaks ionic bonds maintaining enzyme structure." },
    { q: "Amylase is found in saliva, which begins digestion of:", options: ["Proteins in the stomach", "Starch in the mouth", "Fats only in the liver", "Cellulose in all plants in humans"], answer: 1, explain: "Salivary amylase starts breaking starch into maltose." },
    { q: "Pepsin is produced and works mainly in the:", options: ["Mouth", "Stomach", "Skin surface", "Root hair cells"], answer: 1, explain: "Pepsin is a protease active in acidic gastric juice." },
    { q: "Lipase is most associated with digestion in the:", options: ["Stomach acid only", "Small intestine", "Nucleus", "Epidermis of leaves"], answer: 1, explain: "Lipase digests fats emulsified in the small intestine." },
    { q: "Enzymes speed up reactions mainly by:", options: ["Increasing the temperature of the Sun", "Lowering the activation energy needed", "Removing all products permanently", "Stopping metabolism"], answer: 1, explain: "Catalysts provide a pathway with lower activation energy." },
    { q: "A catalyst is a substance that:", options: ["Is always used up completely", "Speeds up a reaction without being permanently changed", "Only works once", "Must be made of starch"], answer: 1, explain: "Catalysts increase rate and can be reused." },
    { q: "In the lock and key model, the substrate fits the:", options: ["Nucleus", "Active site of the enzyme", "Cell wall", "Xylem vessel"], answer: 1, explain: "Complementary shapes allow binding at the active site." },
    { q: "After products are released from an enzyme-substrate complex, the enzyme:", options: ["Is destroyed", "Remains unchanged and can be used again", "Becomes the substrate", "Turns into pepsin only"], answer: 1, explain: "The enzyme is free to bind another substrate molecule." },
    { q: "The products of an enzyme-catalysed reaction:", options: ["Are always identical to the enzyme", "Are released from the active site", "Cannot form in the stomach", "Include only water in all cases"], answer: 1, explain: "Products leave the active site; e.g. maltose from starch by amylase." },
    { q: "Digestive enzymes in humans help to:", options: ["Photosynthesise in the gut", "Break large food molecules into smaller absorbable units", "Pump blood", "Replace the need for a small intestine"], answer: 1, explain: "Amylase, protease and lipase break down carbohydrates, proteins and fats." },
    { q: "Biological washing powders often contain:", options: ["Only hydrochloric acid", "Proteases and lipases to break down stains", "Starch to clean clothes", "No enzymes at all"], answer: 1, explain: "Enzymes digest protein and fat stains at lower washing temperatures." },
    { q: "An advantage of enzymes in biological detergents is that:", options: ["They require boiling water only", "Washing can be effective at lower temperatures", "They denature all fabric", "They replace water entirely"], answer: 1, explain: "Lower temperature saves energy while enzymes remain active." },
    { q: "At temperatures well above the optimum, the active site:", options: ["Always grows larger", "Changes shape so substrate cannot bind", "Binds more substrates at once", "Converts to DNA"], answer: 1, explain: "Denaturation alters the active site permanently." },
    { q: "Most enzymes in the human body work fastest near:", options: ["0 °C", "37 °C", "100 °C", "200 °C"], answer: 1, explain: "Body temperature is about 37 °C, the optimum for many human enzymes." },
    { q: "Increasing enzyme concentration (with plenty of substrate) usually:", options: ["Decreases rate to zero", "Increases rate because more active sites are available", "Denatures all substrate", "Stops digestion"], answer: 1, explain: "More enzyme molecules mean more sites for substrate binding." },
    { q: "In an experiment, if temperature is increased beyond the optimum, the rate of reaction will:", options: ["Keep rising forever", "Fall because enzymes denature", "Stay exactly constant", "Double every second"], answer: 1, explain: "Graphs show a peak at optimum then a sharp fall due to denaturation." },
    { q: "Catalase breaks down hydrogen peroxide into:", options: ["Starch and glucose", "Water and oxygen", "Protein only", "Fatty acids and glycerol"], answer: 1, explain: "Catalase removes toxic H₂O₂ produced in cells." },
    { q: "Pectinase is used in industry to:", options: ["Digest starch in bread only", "Break down plant cell walls and increase fruit juice yield", "Replace all proteases in the stomach", "Photosynthesise in factories"], answer: 1, explain: "Pectinase breaks down pectin in fruit cell walls." }
  ],
  theory: [
    {
      q: "Define enzymes and explain their function.",
      marks: 4,
      points: [
        "Biological catalysts made of protein",
        "Speed up chemical reactions",
        "Not permanently used up / reusable",
        "Lower activation energy; essential for metabolism"
      ]
    },
    {
      q: "Describe the lock and key model of enzyme action.",
      marks: 6,
      points: [
        "Active site has specific shape",
        "Substrate fits active site (complementary)",
        "Enzyme-substrate complex forms",
        "Reaction occurs; products released",
        "Enzyme unchanged and reused",
        "Explains specificity"
      ]
    },
    {
      q: "Explain how temperature affects enzyme activity.",
      marks: 6,
      points: [
        "Low temperature: slow molecular movement, slow rate",
        "Increasing temperature increases collisions to optimum",
        "Optimum temperature gives maximum rate",
        "Above optimum: denaturation",
        "Active site shape lost; rate falls sharply",
        "Human enzymes often optimum about 37 °C"
      ]
    },
    {
      q: "Compare the effects of pH on pepsin and amylase.",
      marks: 5,
      points: [
        "Pepsin: optimum acidic pH ~2 in stomach",
        "Amylase: optimum neutral/alkaline in mouth and small intestine",
        "Each enzyme has best activity at its optimum pH",
        "Extreme pH denatures both by changing shape",
        "Link location to conditions"
      ]
    },
    {
      q: "Describe the use of enzymes in digestion.",
      marks: 5,
      points: [
        "Amylase: starch to maltose (saliva, small intestine)",
        "Protease/pepsin: proteins to amino acids (stomach, intestine)",
        "Lipase: fats to fatty acids and glycerol (small intestine)",
        "Large insoluble molecules to small soluble units for absorption",
        "Enzymes are specific to substrate type"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "Explain why enzyme activity decreases at very high temperatures. [3]",
      marks: 3,
      answer: "High temperature causes denaturation.\nThe active site shape is permanently changed.\nSubstrate no longer fits, so reaction rate falls."
    },
    {
      q: "Describe how enzymes in biological washing powders work. [4]",
      marks: 4,
      answer: "Proteases break down protein stains (e.g. blood, egg).\nLipases break down grease and oil stains.\nEnzymes are specific to their substrates.\nEffective washing at lower temperatures saves energy."
    }
  ]
};

(function mergeEnzymesChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES.enzymes || {};
  BIOLOGY_5090_NOTES.enzymes = Object.assign({}, base, ENZYMES_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ.enzymes = {
      flashcards: ENZYMES_CHAPTER_5090.flashcards,
      mcqs: ENZYMES_CHAPTER_5090.mcqs,
      theory: ENZYMES_CHAPTER_5090.theory
    };
  }
})();

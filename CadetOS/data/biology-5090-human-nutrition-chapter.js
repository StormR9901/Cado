/**
 * Biology 5090 - Chapter 8 Human Nutrition (full study content)
 */
const HUMAN_NUTRITION_CHAPTER_5090 = {
  learningObjectives: [
    "Define nutrition and explain its importance in humans.",
    "Describe the components of a balanced diet.",
    "Explain the roles of carbohydrates, proteins, fats, vitamins, minerals, fibre and water.",
    "Describe the human digestive system and its functions.",
    "Explain mechanical and chemical digestion.",
    "Understand the role of enzymes in digestion.",
    "Describe absorption and assimilation of nutrients.",
    "Identify causes and effects of malnutrition."
  ],
  summary: [
    "Human nutrition is the intake and use of food for energy, growth and repair.",
    "A balanced diet includes carbohydrates, proteins, fats, vitamins, minerals, fibre and water.",
    "Digestion breaks large food molecules into small soluble ones using enzymes.",
    "Absorption occurs in the small intestine through villi into blood and lymph.",
    "Assimilation is the use of absorbed nutrients by body cells.",
    "The liver produces bile; amylase, protease and lipase digest major food groups.",
    "Malnutrition results from poor diet and causes deficiency diseases."
  ],
  examples: [
    { title: "Example 1", text: "Rice provides carbohydrates for energy." },
    { title: "Example 2", text: "Eggs provide protein for growth and repair." },
    { title: "Example 3", text: "Milk provides calcium for bones; fruits provide vitamin C." }
  ],
  comparisonTable: {
    headers: ["Enzyme", "Location", "Substrate", "Products"],
    rows: [
      ["Amylase", "Saliva / small intestine", "Starch", "Maltose"],
      ["Pepsin (protease)", "Stomach (acidic)", "Protein", "Peptides"],
      ["Lipase", "Small intestine", "Fats", "Fatty acids and glycerol"]
    ]
  },
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "Human nutrition is obtaining and using food for energy, growth, repair and health. A balanced diet contains all essential nutrients in correct amounts."
      ]
    },
    {
      title: "Components of a balanced diet",
      subsections: [
        { title: "Carbohydrates", bulletList: ["Main energy source", "Examples: bread, rice, potatoes"] },
        { title: "Proteins", bulletList: ["Growth and repair; enzymes and hormones", "Examples: meat, fish, eggs, beans"] },
        { title: "Fats (lipids)", bulletList: ["Long-term energy storage; insulation and protection", "Examples: oils, butter, nuts"] },
        {
          title: "Vitamins and minerals",
          bulletList: [
            "Vitamin A — vision; deficiency: night blindness",
            "Vitamin C — skin and gums; deficiency: scurvy",
            "Vitamin D — bones; deficiency: rickets",
            "Calcium — bones and teeth",
            "Iron — haemoglobin; deficiency: anaemia"
          ]
        },
        { title: "Fibre", bulletList: ["Aids movement of food; prevents constipation (roughage)"] },
        { title: "Water", bulletList: ["Solvent, transport, temperature regulation"] }
      ]
    },
    {
      title: "Human digestive system",
      paragraphs: [
        "Alimentary canal: mouth, oesophagus, stomach, small intestine, large intestine, rectum, anus.",
        "Accessory organs: salivary glands, liver, pancreas (and gall bladder stores bile).",
        "Peristalsis moves food along the gut by muscular contractions."
      ]
    },
    {
      title: "Digestion",
      subsections: [
        { title: "Mechanical digestion", paragraphs: ["Physical breakdown, e.g. chewing in the mouth and churning in the stomach."] },
        { title: "Chemical digestion", paragraphs: ["Enzymes break large insoluble molecules into small soluble ones."] }
      ]
    },
    {
      title: "Enzymes in digestion",
      bulletList: [
        "Amylase: starch → maltose (saliva, small intestine)",
        "Protease/pepsin: protein → amino acids/peptides (stomach, pancreas)",
        "Lipase: fats → fatty acids + glycerol (small intestine)",
        "Bile from liver emulsifies fats (not an enzyme)"
      ]
    },
    {
      title: "Absorption and assimilation",
      paragraphs: [
        "Absorption occurs mainly in the small intestine. Villi have large surface area, thin walls and rich blood supply.",
        "Glucose and amino acids enter blood capillaries; fatty acids and glycerol enter lacteals.",
        "Assimilation: nutrients used by cells — e.g. glucose in respiration, amino acids for growth."
      ]
    },
    {
      title: "Liver functions",
      bulletList: ["Produces bile", "Stores glycogen", "Detoxifies harmful substances", "Deaminates amino acids (urea formed)"]
    },
    {
      title: "Malnutrition",
      paragraphs: [
        "Caused by poor diet or lack of nutrients. Effects include weak immunity, poor growth and deficiency diseases (e.g. kwashiorkor from protein lack)."
      ]
    }
  ],
  definitions: [
    { term: "Nutrition", definition: "Intake and use of food for energy, growth and maintaining health." },
    { term: "Balanced diet", definition: "Diet containing all nutrients in correct proportions." },
    { term: "Digestion", definition: "Breakdown of food into small soluble molecules." },
    { term: "Absorption", definition: "Movement of digested nutrients into blood and lymph." },
    { term: "Assimilation", definition: "Use of absorbed nutrients by body cells." },
    { term: "Villus", definition: "Finger-like projection in small intestine increasing absorption area." },
    { term: "Bile", definition: "Alkaline fluid from liver that emulsifies fats." },
    { term: "Peristalsis", definition: "Wave of muscle contraction moving food through the gut." },
    { term: "Lacteal", definition: "Lymph vessel in a villus absorbing fat digestion products." },
    { term: "Malnutrition", definition: "Condition from inadequate or unbalanced diet." }
  ],
  syllabusPoints: [
    { code: "8.1", title: "Balanced diet", content: "Carbohydrates and fats for energy; proteins for growth; vitamins, minerals, fibre, water. Deficiency diseases: scurvy, rickets, kwashiorkor, anaemia." },
    { code: "8.2", title: "Alimentary canal", content: "Mouth to anus; accessory organs; peristalsis; stomach churns; small intestine digests and absorbs." },
    { code: "8.3", title: "Digestive enzymes", content: "Amylase, pepsin, lipase; bile emulsifies fats; pancreatic enzymes in small intestine; HCl in stomach." },
    { code: "8.4", title: "Absorption", content: "Villi and microvilli; thin walls; capillaries and lacteals; large surface area." },
    { code: "8.5", title: "Liver", content: "Bile production and storage in gall bladder; glycogen storage; detoxification." }
  ],
  quickRecap: "Balanced diet: CHO, protein, fat, vitamins, minerals, fibre, water.\nAmylase (starch), pepsin/protease (protein), lipase (fat).\nBile emulsifies fat — not an enzyme.\nAbsorption: small intestine villi → blood / lacteals.\nScurvy (C), rickets (D), anaemia (iron), kwashiorkor (protein).",
  examTips: "Know enzyme location, substrate and product. Bile emulsifies — it is not an enzyme. Link villi structure to absorption. State deficiency disease for each vitamin/mineral lack.",
  flashcards: [
    { q: "What is nutrition?", a: "The process of obtaining and using food." },
    { q: "Main function of carbohydrates?", a: "Energy source." },
    { q: "Function of proteins?", a: "Growth and repair of tissues." },
    { q: "Function of fats?", a: "Long-term energy storage, insulation and protection." },
    { q: "Which vitamin prevents scurvy?", a: "Vitamin C." },
    { q: "What deficiency causes rickets?", a: "Vitamin D (and lack of calcium)." },
    { q: "Where does digestion begin?", a: "The mouth." },
    { q: "Function of villi?", a: "Increase surface area for absorption." },
    { q: "What does amylase digest?", a: "Starch." },
    { q: "What does protease digest?", a: "Proteins." },
    { q: "What does lipase digest?", a: "Fats." },
    { q: "Where is bile produced?", a: "The liver." },
    { q: "Function of fibre?", a: "Helps move food and prevents constipation." },
    { q: "What is assimilation?", a: "Use of absorbed nutrients by body cells." },
    { q: "Where does most absorption occur?", a: "Small intestine." }
  ],
  mcqs: [
    { q: "Human nutrition is best defined as:", options: ["Only chewing food in the mouth", "The intake and use of food for energy, growth and health", "Movement of food by peristalsis only", "Storage of fat in the liver only"], answer: 1, explain: "Nutrition includes eating, digesting, absorbing and using nutrients." },
    { q: "The main source of energy in a balanced human diet is usually:", options: ["Vitamins", "Minerals only", "Carbohydrates", "Fibre"], answer: 2, explain: "Carbohydrates such as starch are broken down to glucose for respiration." },
    { q: "Proteins in the diet are especially needed for:", options: ["Only storing fat under the skin", "Growth and repair of body tissues", "Producing oxygen in the lungs", "Replacing water in the blood"], answer: 1, explain: "Amino acids from proteins build enzymes, hormones and structural proteins." },
    { q: "Dietary fats are mainly important for:", options: ["Instant energy only with no storage", "Long-term energy storage, insulation and protection", "Digesting starch in the mouth", "Carrying oxygen in red blood cells"], answer: 1, explain: "Lipids store energy and cushion organs." },
    { q: "A deficiency of vitamin C can cause:", options: ["Rickets", "Scurvy", "Night blindness only", "Kwashiorkor"], answer: 1, explain: "Lack of vitamin C leads to bleeding gums and poor wound healing (scurvy)." },
    { q: "Iron in the diet is needed mainly to form:", options: ["Bone calcium crystals", "Haemoglobin in red blood cells", "Bile in the liver", "Starch in the pancreas"], answer: 1, explain: "Iron is part of haemoglobin for oxygen transport." },
    { q: "Chemical digestion in humans generally begins in the:", options: ["Large intestine", "Mouth with saliva", "Rectum", "Liver only"], answer: 1, explain: "Salivary amylase starts starch digestion in the mouth." },
    { q: "Mechanical digestion includes:", options: ["Using enzymes to break starch into maltose", "Physically breaking food into smaller pieces, e.g. chewing", "Absorbing glucose into villi", "Assimilating amino acids in muscles"], answer: 1, explain: "Teeth and churning increase surface area for enzymes." },
    { q: "Chemical digestion of food depends on:", options: ["Hormones from the skin only", "Enzymes that catalyse breakdown of large molecules", "Diffusion of oxygen in the alveoli", "Transpiration in the gut"], answer: 1, explain: "Enzymes speed conversion to small soluble molecules." },
    { q: "Amylase digests:", options: ["Proteins into amino acids", "Starch into maltose", "Fats into fatty acids only", "Fibre into vitamins"], answer: 1, explain: "Amylase breaks glycosidic bonds in starch." },
    { q: "Protease enzymes in digestion break down:", options: ["Starch", "Proteins into smaller peptides or amino acids", "Lipids only", "Vitamin C"], answer: 1, explain: "Pepsin in the stomach and other proteases in the intestine digest protein." },
    { q: "Lipase breaks down:", options: ["Fats into fatty acids and glycerol", "Starch into glucose only", "Protein into haemoglobin", "Fibre into minerals"], answer: 0, explain: "Lipase acts on emulsified fats in the small intestine." },
    { q: "Most absorption of digested food occurs in the:", options: ["Stomach", "Mouth", "Small intestine", "Liver"], answer: 2, explain: "The lining has villi adapted for rapid uptake." },
    { q: "Villi in the small intestine increase absorption mainly by:", options: ["Decreasing surface area", "Increasing surface area and having thin walls", "Producing hydrochloric acid", "Storing glycogen"], answer: 1, explain: "Large surface area and short diffusion distance speed uptake." },
    { q: "Assimilation refers to:", options: ["Chewing food in the mouth", "The use of absorbed nutrients by body cells", "Production of bile in the liver", "Movement of food by peristalsis"], answer: 1, explain: "For example, glucose used in respiration and amino acids built into proteins." },
    { q: "Dietary fibre (roughage) helps to:", options: ["Provide vitamin D", "Move food through the large intestine and prevent constipation", "Digest starch with lipase", "Produce haemoglobin"], answer: 1, explain: "Fibre is largely indigestible but stimulates gut movement." },
    { q: "Water in the diet is important because it acts as:", options: ["A long-term fat store only", "A solvent and transport medium in the body", "An enzyme in the stomach", "A substitute for all minerals"], answer: 1, explain: "Water is needed for reactions, blood and temperature control." },
    { q: "A balanced diet is one that:", options: ["Contains only carbohydrates", "Provides all essential nutrients in suitable proportions", "Avoids all fats and proteins", "Includes vitamins but no minerals"], answer: 1, explain: "Each nutrient group has specific roles in health." },
    { q: "Calcium in the diet is mainly needed for:", options: ["Strong bones and teeth", "Digesting protein in the stomach", "Preventing scurvy", "Emulsifying fats"], answer: 0, explain: "Calcium strengthens skeleton and teeth; works with vitamin D." },
    { q: "Vitamin D deficiency in children can cause:", options: ["Scurvy", "Rickets (soft or weak bones)", "Night blindness only", "Excess haemoglobin"], answer: 1, explain: "Vitamin D helps calcium absorption for bone growth." },
    { q: "Bile is produced by the:", options: ["Pancreas", "Stomach", "Liver", "Salivary glands"], answer: 2, explain: "The liver makes bile; the gall bladder often stores it." },
    { q: "The main role of bile in fat digestion is to:", options: ["Chemically break fats into amino acids", "Emulsify fats into smaller droplets", "Neutralise all enzymes", "Absorb glucose into villi"], answer: 1, explain: "Emulsification increases surface area for lipase — bile is not an enzyme." },
    { q: "The small intestine is the main site for:", options: ["Only mechanical chewing", "Digestion and absorption of nutrients", "Producing hydrochloric acid for pepsin", "Forming faeces only"], answer: 1, explain: "Enzymes from pancreas and intestine finish digestion; villi absorb products." },
    { q: "Carbohydrates in food are important mainly to provide:", options: ["Energy for respiration and activity", "Only insulation under the skin", "Oxygen for gas exchange", "Bile for emulsification"], answer: 0, explain: "Digestion releases glucose as the main respiratory substrate." },
    { q: "The purpose of digestion is to:", options: ["Make large insoluble molecules small and soluble for absorption", "Remove all water from food", "Stop assimilation in cells", "Replace peristalsis with diffusion"], answer: 0, explain: "Small molecules can pass through the wall of the small intestine." },
    { q: "Villi are found in:", options: ["The trachea", "The lining of the small intestine", "The alveoli of the lungs", "Root hair cells"], answer: 1, explain: "Millions of villi project into the lumen of the small intestine." },
    { q: "Fats are digested into products that can include:", options: ["Only glucose and oxygen", "Fatty acids and glycerol", "Amino acids and starch", "Vitamin C and iron only"], answer: 1, explain: "Lipase hydrolyses triglycerides to fatty acids and glycerol." },
    { q: "Glucose absorbed from the gut is often assimilated by:", options: ["Being used in respiration to release energy", "Being stored only in the oesophagus", "Replacing bile in the liver", "Stopping peristalsis"], answer: 0, explain: "Cells oxidise glucose in aerobic respiration." },
    { q: "Fibre is described as indigestible because:", options: ["Humans lack enzymes to break it down", "It is digested only in the stomach by pepsin", "It becomes haemoglobin", "It is absorbed in the mouth"], answer: 0, explain: "Fibre passes largely unchanged to the large intestine." },
    { q: "Water helps regulate body temperature mainly by:", options: ["Acting as a coolant when sweat evaporates", "Producing bile", "Digesting starch in saliva", "Storing iron in bones"], answer: 0, explain: "Water has a high specific heat capacity and evaporative cooling in sweat." },
    { q: "Malnutrition often results from:", options: ["A poor or unbalanced diet lacking essential nutrients", "Too much exercise only", "Excess bile production only", "Absorption that is too fast"], answer: 0, explain: "Insufficient protein, vitamins or minerals cause deficiency diseases." },
    { q: "Vitamin A deficiency is associated with:", options: ["Poor vision and night blindness", "Scurvy and bleeding gums", "Soft bones in children only", "Excess haemoglobin production"], answer: 0, explain: "Vitamin A is needed for healthy retina and epithelia." },
    { q: "Iron deficiency can lead to:", options: ["Anaemia (tiredness, pale skin)", "Rickets", "Scurvy", "Kwashiorkor only"], answer: 0, explain: "Less haemoglobin reduces oxygen transport." },
    { q: "Digestive enzymes are generally made of:", options: ["Protein", "Starch", "Lipid only", "Fibre"], answer: 0, explain: "Amylase, pepsin and lipase are protein catalysts." },
    { q: "Efficient absorption in the small intestine requires villi and:", options: ["A rich blood supply to maintain a gradient", "Thick impermeable walls", "No capillaries near the surface", "Closure of all lacteals"], answer: 0, explain: "Blood flow carries absorbed nutrients away quickly." },
    { q: "Bile entering the small intestine helps neutralise stomach acid partly because bile is:", options: ["Strongly acidic like HCl", "Alkaline", "Made of starch", "Identical to pepsin"], answer: 1, explain: "Bile has an alkaline pH suitable for intestinal enzymes." },
    { q: "The stomach contributes to digestion by:", options: ["Churning food and secreting acid and pepsin", "Absorbing most glucose through villi", "Producing bile for emulsification", "Filtering blood like the kidney"], answer: 0, explain: "Mechanical churning and acidic protease digestion occur in the stomach." },
    { q: "After absorption, nutrients are transported in the blood to:", options: ["Body cells for use or storage (assimilation)", "Only the mouth for chewing", "The trachea for gas exchange", "Soil around root hairs"], answer: 0, explain: "Blood distributes glucose, amino acids and other nutrients to tissues." },
    { q: "Pepsin is a protease that works best in the:", options: ["Acidic conditions of the stomach", "Alkaline bile only", "Mouth with salivary amylase", "Large intestine absorbing water"], answer: 0, explain: "Hydrochloric acid in gastric juice gives a low pH for pepsin." },
    { q: "Kwashiorkor is a form of malnutrition caused mainly by lack of:", options: ["Protein in the diet", "Vitamin C only", "Iron only", "Fibre only"], answer: 0, explain: "Protein deficiency causes poor growth and swelling in children." }
  ],
  theory: [
    {
      q: "Describe a balanced diet and its components.",
      marks: 6,
      points: [
        "Carbohydrates and fats for energy",
        "Proteins for growth and repair",
        "Vitamins and minerals for metabolism and health",
        "Fibre for healthy gut movement",
        "Water for solvent and transport",
        "Correct proportions; deficiency diseases if missing"
      ]
    },
    {
      q: "Explain the process of digestion in humans.",
      marks: 6,
      points: [
        "Mechanical: chewing, churning in stomach",
        "Chemical: enzymes break large molecules to small soluble ones",
        "Mouth: amylase on starch",
        "Stomach: acid and pepsin on protein",
        "Small intestine: bile, pancreatic and intestinal enzymes on all food groups",
        "Ready for absorption in small intestine"
      ]
    },
    {
      q: "Describe the role of enzymes in digestion.",
      marks: 5,
      points: [
        "Amylase — starch to maltose (mouth/intestine)",
        "Pepsin/protease — protein to peptides/amino acids (stomach/intestine)",
        "Lipase — fats to fatty acids and glycerol (intestine)",
        "Enzymes are specific protein catalysts",
        "Optimum pH in each region"
      ]
    },
    {
      q: "Explain absorption and assimilation.",
      marks: 5,
      points: [
        "Absorption: small soluble molecules enter blood/lymph at villi",
        "Villi: large SA, thin walls, capillaries, lacteals",
        "Assimilation: cells use nutrients — glucose respiration, amino acids for protein",
        "Liver may store glycogen from excess glucose"
      ]
    },
    {
      q: "Describe functions of the liver and bile in digestion.",
      marks: 4,
      points: [
        "Liver produces bile stored in gall bladder",
        "Bile emulsifies fats — not an enzyme",
        "Increases surface area for lipase",
        "Bile alkaline — helps neutralise acid chyme"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "Describe how the small intestine is adapted for absorption. [4]",
      marks: 4,
      answer: "Villi and microvilli give a very large surface area.\nThin walls — short diffusion distance.\nRich blood supply maintains concentration gradient.\nLacteals absorb products of fat digestion."
    },
    {
      q: "State the role of bile in digestion. [2]",
      marks: 2,
      answer: "Bile emulsifies fats into small droplets.\nIncreases surface area for lipase action."
    }
  ]
};

(function mergeHumanNutritionChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES["human-nutrition"] || {};
  BIOLOGY_5090_NOTES["human-nutrition"] = Object.assign({}, base, HUMAN_NUTRITION_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ["human-nutrition"] = {
      flashcards: HUMAN_NUTRITION_CHAPTER_5090.flashcards,
      mcqs: HUMAN_NUTRITION_CHAPTER_5090.mcqs,
      theory: HUMAN_NUTRITION_CHAPTER_5090.theory
    };
  }
})();

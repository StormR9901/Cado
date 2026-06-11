/**
 * Biology 5090 - Chapter 12 Disease and Immunity (full study content)
 */
const DISEASE_IMMUNITY_CHAPTER_5090 = {
  learningObjectives: [
    "Define health, disease, pathogen, and immunity.",
    "Classify diseases as infectious and non-infectious.",
    "Describe causes and transmission of infectious diseases.",
    "Explain the body's natural defence mechanisms.",
    "Understand the role of white blood cells in immunity.",
    "Describe vaccination and how it provides immunity.",
    "Explain antibiotic use and resistance.",
    "Understand ways to prevent the spread of disease."
  ],
  summary: [
    "Infectious diseases are caused by pathogens; non-infectious diseases have other causes.",
    "Pathogens spread by air, water, food, contact and vectors.",
    "Skin, mucus, cilia and stomach acid are first-line defences.",
    "Phagocytes engulf pathogens; lymphocytes produce specific antibodies to antigens.",
    "Vaccination stimulates memory cells for long-term artificial active immunity.",
    "Antibiotics kill bacteria but not viruses; overuse causes resistance.",
    "Hygiene, clean water, vaccination and isolation help prevent spread."
  ],
  examples: [
    { title: "Example 1", text: "Malaria is spread by Anopheles mosquitoes carrying Plasmodium." },
    { title: "Example 2", text: "Influenza spreads through airborne droplets from coughing." },
    { title: "Example 3", text: "Antibiotics treat bacterial pneumonia but not the common cold (viral)." }
  ],
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "Disease affects normal body function. Infectious diseases are caused by pathogens; non-infectious diseases may be due to lifestyle, genetics or environment."
      ]
    },
    {
      title: "Types of diseases",
      subsections: [
        {
          title: "Infectious diseases",
          bulletList: [
            "Caused by pathogens: bacteria, viruses, fungi, protoctists",
            "Examples: cholera (bacteria), influenza (virus), malaria (protoctist), athlete's foot (fungus)"
          ]
        },
        {
          title: "Non-infectious diseases",
          bulletList: ["Not caused by pathogens", "Examples: diabetes, cancer, heart disease, deficiency diseases"]
        }
      ]
    },
    {
      title: "Pathogens and transmission",
      paragraphs: [
        "Pathogens are microorganisms that cause disease.",
        "Transmission: air (droplets), contaminated water and food, direct contact, vectors such as mosquitoes."
      ]
    },
    {
      title: "Human defence system",
      bulletList: [
        "Physical barriers: skin, mucus, cilia",
        "Chemical barriers: stomach acid, enzymes in tears and saliva"
      ]
    },
    {
      title: "White blood cells and immunity",
      paragraphs: [
        "Phagocytes engulf pathogens by phagocytosis.",
        "Lymphocytes produce antibodies that bind to antigens on pathogens.",
        "Immunity is resistance to infection — natural (after infection) or artificial (vaccination)."
      ]
    },
    {
      title: "Vaccination",
      numberedList: [
        "Weakened, dead or fragment antigens introduced",
        "Lymphocytes produce antibodies",
        "Memory cells formed",
        "Faster, stronger secondary response if pathogen returns"
      ]
    },
    {
      title: "Antibiotics and prevention",
      bulletList: [
        "Antibiotics kill bacteria or stop reproduction — not effective against viruses",
        "Overuse leads to antibiotic resistance",
        "Prevention: hand washing, safe water, vaccination, isolation, food hygiene"
      ]
    }
  ],
  definitions: [
    { term: "Disease", definition: "A condition that impairs normal body function." },
    { term: "Pathogen", definition: "Microorganism that causes disease." },
    { term: "Immunity", definition: "Ability of the body to resist infection." },
    { term: "Antibody", definition: "Protein made by lymphocytes that binds to a specific antigen." },
    { term: "Antigen", definition: "Molecule on a pathogen that triggers an immune response." },
    { term: "Vaccination", definition: "Introducing antigens to stimulate immunity without causing serious disease." },
    { term: "Antibiotic", definition: "Drug that kills bacteria or inhibits their growth." },
    { term: "Phagocyte", definition: "White blood cell that engulfs and digests pathogens." },
    { term: "Memory cell", definition: "Long-lived lymphocyte enabling rapid response on re-infection." },
    { term: "Vector", definition: "Organism that transfers a pathogen between hosts, e.g. mosquito." }
  ],
  syllabusPoints: [
    { code: "12.1", title: "Pathogens and transmission", content: "Bacteria, viruses, fungi, protoctists; routes and prevention (hygiene, water, vectors)." },
    { code: "12.2", title: "Immune response", content: "Phagocytes, lymphocytes, antibodies, antigens, memory cells, secondary response." },
    { code: "12.3", title: "Active and passive immunity", content: "Vaccination and natural infection; passive from breast milk or antiserum; herd immunity." },
    { code: "12.4", title: "Antibiotics", content: "Effective against bacteria only; resistance; antivirals difficult." },
    { code: "12.5", title: "HIV and malaria", content: "HIV virus attacks T cells; malaria Plasmodium via Anopheles mosquito." }
  ],
  quickRecap: "Pathogens: bacteria, virus, fungus, protoctist.\nPhagocytes engulf; lymphocytes → antibodies to antigens.\nVaccine → memory cells → fast secondary response.\nAntibiotics: bacteria only; resistance risk.\nPrevent: hygiene, water, vaccines, vectors control.",
  examTips: "Never say antibiotics work on viruses. Explain vaccination with memory cells. State pathogen type and transmission for malaria and HIV. Use antigen, antibody, phagocyte and lymphocyte correctly.",
  flashcards: [
    { q: "What is a disease?", a: "A condition affecting normal body function." },
    { q: "What is a pathogen?", a: "A microorganism that causes disease." },
    { q: "Name one infectious disease.", a: "Cholera (or flu, malaria, etc.)." },
    { q: "Name one non-infectious disease.", a: "Diabetes (or cancer, heart disease)." },
    { q: "What is immunity?", a: "Ability to resist infection." },
    { q: "What do phagocytes do?", a: "Engulf and digest pathogens (phagocytosis)." },
    { q: "What do lymphocytes produce?", a: "Antibodies." },
    { q: "What is an antigen?", a: "Molecule on a pathogen that triggers an immune response." },
    { q: "What does a vaccine contain?", a: "Weakened or dead pathogen or its antigens." },
    { q: "Do antibiotics work on viruses?", a: "No — only on bacteria." },
    { q: "What is antibiotic resistance?", a: "Bacteria survive treatment because antibiotics no longer kill them." },
    { q: "Name a vector for disease.", a: "Mosquito (e.g. for malaria)." },
    { q: "What type of barrier is the skin?", a: "A physical barrier." },
    { q: "What in the stomach kills many bacteria?", a: "Hydrochloric acid." },
    { q: "What is the role of memory cells?", a: "Enable a faster antibody response on re-infection." }
  ],
  mcqs: [
    { q: "A pathogen is best defined as:", options: ["A helpful nutrient in food", "A microorganism that causes disease", "An enzyme in the small intestine", "A type of red blood cell"], answer: 1, explain: "Pathogens include bacteria, viruses, fungi and some protoctists." },
    { q: "Infectious diseases are caused by:", options: ["Only genetic mutations in skin", "Pathogens such as bacteria and viruses", "Lack of exercise alone", "Photosynthesis in the lungs"], answer: 1, explain: "They can spread from person to person or via vectors." },
    { q: "Which of the following is a non-infectious disease?", options: ["Malaria", "Cholera", "Diabetes", "Influenza"], answer: 2, explain: "Diabetes is not caused by a transmissible pathogen." },
    { q: "Cholera is an example of a disease caused by:", options: ["A virus", "Bacteria", "A fungus only", "Lack of vitamin C"], answer: 1, explain: "Cholera is caused by the bacterium Vibrio cholerae, often in contaminated water." },
    { q: "Malaria is caused by a:", options: ["Virus in cough droplets", "Bacterium in soil only", "Protoctist (Plasmodium) transmitted by mosquitoes", "Fungus on the skin only"], answer: 2, explain: "Anopheles mosquitoes are vectors for Plasmodium." },
    { q: "Pathogens can spread from one host to another by:", options: ["Air, water, food and direct contact only separately", "Air, contaminated water, food, contact and vectors", "Only through red blood cells with no other route", "Photosynthesis in leaves"], answer: 1, explain: "Multiple transmission routes exist for different diseases." },
    { q: "Unbroken skin helps prevent disease because it acts as:", options: ["A chemical barrier only", "A physical barrier to pathogen entry", "A source of antibodies in the stomach", "A vector for mosquitoes"], answer: 1, explain: "The outer layer blocks many microorganisms." },
    { q: "Hydrochloric acid in the stomach helps defend the body by:", options: ["Killing many bacteria in swallowed food", "Producing antibodies against viruses", "Carrying oxygen as haemoglobin", "Filtering blood in the glomerulus"], answer: 0, explain: "Low pH destroys many pathogens before they reach the intestine." },
    { q: "Phagocytes defend the body by:", options: ["Producing specific antibodies only", "Engulfing and digesting pathogens by phagocytosis", "Transporting sucrose in phloem", "Releasing oxygen from haemoglobin"], answer: 1, explain: "Phagocytes are a type of white blood cell." },
    { q: "Lymphocytes are white blood cells that:", options: ["Engulf every pathogen without specificity", "Produce antibodies specific to antigens", "Carry oxygen as oxyhaemoglobin", "Pump blood from the left ventricle"], answer: 1, explain: "Each lymphocyte clone responds to a particular antigen." },
    { q: "Antigens are usually found on:", options: ["The surface of pathogens", "Only healthy muscle cells with no role in immunity", "Platelets that form clots only", "The waxy cuticle of leaves"], answer: 0, explain: "Antigens trigger the immune response when recognised as foreign." },
    { q: "Antibodies function mainly by:", options: ["Binding to specific antigens to help destroy pathogens", "Digesting starch in the mouth", "Pumping blood through arteries", "Storing glucose as glycogen in the liver"], answer: 0, explain: "Binding can cause agglutination and neutralisation of pathogens." },
    { q: "Immunity means the body can:", options: ["Always avoid all non-infectious disease", "Resist or fight infection more effectively", "Stop digesting protein in the stomach", "Replace gas exchange in the lungs"], answer: 1, explain: "Immunity involves antibodies, white blood cells and memory cells." },
    { q: "Vaccination usually provides:", options: ["Artificial active immunity", "No change in white blood cells", "Permanent passive immunity from breast milk only", "Resistance to all diseases including diabetes"], answer: 0, explain: "The body makes its own antibodies and memory cells after vaccination." },
    { q: "Vaccines often contain:", options: ["Live strong pathogens only with no safety", "Weakened or dead pathogens or purified antigens", "Only antibiotics to kill viruses", "Uncontaminated water with no immune effect"], answer: 1, explain: "Vaccines stimulate immunity without causing full disease." },
    { q: "Antibiotics are drugs that:", options: ["Kill or inhibit bacteria", "Destroy all viruses inside cells easily", "Replace vaccination for malaria", "Digest fibre in the large intestine"], answer: 0, explain: "They target bacterial structures or metabolism." },
    { q: "Antibiotics are generally NOT effective against viral infections because:", options: ["Viruses lack bacterial cell walls and reproduce inside host cells", "Viruses are larger than all bacteria", "Viruses are killed by stomach acid only", "Viruses produce antibiotics themselves"], answer: 0, explain: "Antibiotics cannot target viruses without harming human cells." },
    { q: "Antibiotic resistance develops when:", options: ["Bacteria that survive treatment reproduce, passing on resistance", "People eat too much vitamin C", "Viruses become bacteria", "White blood cells stop making antigens"], answer: 0, explain: "Overuse and incomplete courses select for resistant strains." },
    { q: "A mosquito that transmits malaria acts as a:", options: ["Pathogen", "Vector", "Phagocyte", "Antibody"], answer: 1, explain: "Vectors carry pathogens between hosts without necessarily being ill themselves." },
    { q: "Influenza (flu) often spreads through:", options: ["Airborne droplets from coughing and sneezing", "Only contaminated soil with no air route", "Photosynthesis in plant leaves", "Absorption in root hairs only"], answer: 0, explain: "Droplet infection is a common route for respiratory viruses." },
    { q: "Cholera is often spread by:", options: ["Contaminated water or food", "Only genetic inheritance with no environment", "Mosquito bites only", "Oxygen debt after exercise"], answer: 0, explain: "Safe water and sanitation reduce cholera outbreaks." },
    { q: "Good food hygiene helps prevent disease by:", options: ["Reducing pathogens on food before eating", "Increasing antibiotic resistance", "Stopping all white blood cell activity", "Removing haemoglobin from blood"], answer: 0, explain: "Cooking, refrigeration and clean hands reduce infection risk." },
    { q: "Isolating people with certain infectious diseases helps to:", options: ["Reduce spread to others while they are infectious", "Increase the number of pathogens in water", "Replace the need for any white blood cells", "Stop vaccination programmes"], answer: 0, explain: "Isolation limits contact during the infectious period." },
    { q: "White blood cells are important in defence because they:", options: ["Engulf pathogens and produce antibodies", "Only carry oxygen like red blood cells", "Digest food in the ileum", "Pump blood from the heart"], answer: 0, explain: "Phagocytes and lymphocytes are key immune cells." },
    { q: "Memory cells formed after infection or vaccination allow:", options: ["A faster and stronger secondary immune response on re-exposure", "No antibodies to be made ever again", "Pathogens to multiply faster", "Antibiotics to work on viruses"], answer: 0, explain: "Memory lymphocytes recognise the same antigen quickly." },
    { q: "A secondary immune response after re-infection is usually:", options: ["Faster and produces more antibody than the primary response", "Slower than the first time the antigen appeared", "Unable to use lymphocytes", "Identical to digestion in the stomach"], answer: 0, explain: "Memory cells explain long-term protection from vaccines." },
    { q: "During vaccination, antigens are introduced to:", options: ["Stimulate antibody production without causing serious disease", "Kill all bacteria in the blood immediately", "Replace the need for skin as a barrier", "Stop carbon dioxide from leaving the lungs"], answer: 0, explain: "The immune system learns to recognise the pathogen safely." },
    { q: "Antibodies are specific, meaning each antibody:", options: ["Fits one type of antigen shape", "Destroys all pathogens and food molecules", "Works only in the trachea", "Is the same as hydrochloric acid"], answer: 0, explain: "Specificity is like a lock-and-key fit with the antigen." },
    { q: "Pathogens can enter the human body through:", options: ["Broken skin, mouth, nose and other body openings", "Only the hair on the scalp with no other route", "Mitochondria during aerobic respiration only", "Xylem vessels in plants"], answer: 0, explain: "Barriers and hygiene reduce entry." },
    { q: "Coughing and sneezing can spread respiratory disease because:", options: ["Droplets containing pathogens enter the air", "They increase haemoglobin in red cells", "They close all stomata in the lungs", "They digest starch with amylase"], answer: 0, explain: "Others may inhale droplets or touch contaminated surfaces." },
    { q: "Personal hygiene such as hand washing reduces infection by:", options: ["Removing pathogens from hands before they reach mouth or nose", "Making bacteria resistant to antibiotics", "Stopping memory cells from forming", "Increasing malaria parasites in water"], answer: 0, explain: "Hand washing breaks chains of transmission." },
    { q: "Influenza is caused by:", options: ["A virus", "A bacterium only", "A mineral deficiency", "Lactic acid in muscles"], answer: 0, explain: "Flu is a viral respiratory infection." },
    { q: "Athlete's foot is an example of disease caused by:", options: ["A fungus", "A protoctist in mosquitoes", "Lack of iron only", "Carbon monoxide in smoke"], answer: 0, explain: "Fungal infections often affect skin on feet in warm moist conditions." },
    { q: "Mucus in the airways helps defence by:", options: ["Trapping pathogens so cilia can remove them", "Carrying oxygen to alveoli", "Producing ethanol in yeast", "Digesting lipids with bile"], answer: 0, explain: "Mucus and cilia form part of the respiratory defence." },
    { q: "Cilia in the trachea help protect against disease by:", options: ["Beating mucus and trapped microbes upward", "Producing antibiotics in the lungs", "Binding oxygen to haemoglobin", "Absorbing glucose in villi"], answer: 0, explain: "The mucociliary escalator clears inhaled particles." },
    { q: "A person in good health is generally someone who:", options: ["Is free from serious disease and infection", "Never has any white blood cells", "Cannot produce antibodies", "Only respires anaerobically"], answer: 0, explain: "Health is a state of physical and mental well-being, not merely absence of one symptom." },
    { q: "Active immunity differs from passive immunity because active immunity:", options: ["Results from the body making its own antibodies", "Always comes only from breast milk", "Never involves memory cells", "Lasts only a few seconds"], answer: 0, explain: "Vaccination and infection stimulate active immunity; passive immunity uses ready-made antibodies from another source." },
    { q: "Herd immunity occurs when:", options: ["Enough people are immune that spread of disease is reduced in the community", "All pathogens become viruses", "Antibiotics are given to everyone daily", "Skin is removed from the body"], answer: 0, explain: "Immune individuals protect those who cannot be vaccinated." },
    { q: "HIV weakens immunity mainly by attacking:", options: ["Helper T lymphocytes", "Red blood cell haemoglobin only", "Stomach acid production", "Root hair cells"], answer: 0, explain: "Loss of T cells reduces coordination of the immune response (AIDS)." },
    { q: "To prevent spread of many infectious diseases, public health measures include:", options: ["Clean water supply, vaccination and vector control", "Using antibiotics for viral colds only", "Stopping all white blood cell production", "Removing the diaphragm from the chest"], answer: 0, explain: "Combined measures reduce transmission in populations." }
  ],
  theory: [
    {
      q: "Define disease and pathogen.",
      marks: 3,
      points: [
        "Disease: condition impairing normal body function",
        "Pathogen: microorganism causing disease",
        "Examples of pathogen types"
      ]
    },
    {
      q: "Describe how infectious diseases spread.",
      marks: 5,
      points: [
        "Direct contact",
        "Contaminated food and water",
        "Droplet infection (air)",
        "Vectors e.g. mosquito for malaria",
        "Prevention: hygiene, safe water, isolation"
      ]
    },
    {
      q: "Explain how white blood cells defend the body.",
      marks: 6,
      points: [
        "Phagocytes engulf pathogens by phagocytosis",
        "Lymphocytes produce specific antibodies",
        "Antibodies bind to antigens",
        "Agglutination and neutralisation",
        "Memory cells for secondary response"
      ]
    },
    {
      q: "Describe vaccination and how it provides immunity.",
      marks: 5,
      points: [
        "Weakened/dead pathogen or antigens introduced",
        "Primary response: antibodies and memory cells",
        "Artificial active immunity",
        "Secondary response faster on re-infection",
        "Herd immunity when many vaccinated"
      ]
    },
    {
      q: "Explain antibiotic resistance.",
      marks: 4,
      points: [
        "Antibiotics kill susceptible bacteria",
        "Resistant mutants survive and reproduce",
        "Overuse and incomplete courses increase selection",
        "Harder to treat infections; need careful antibiotic use"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "Explain how vaccination provides long-term immunity. [4]",
      marks: 4,
      answer: "Vaccine contains weakened or dead pathogen or antigens.\nWhite blood cells produce antibodies and memory cells.\nOn re-infection, memory cells rapidly produce antibodies.\nSecondary response is faster and stronger."
    },
    {
      q: "Explain why antibiotics are not effective against viral infections. [2]",
      marks: 2,
      answer: "Antibiotics target bacterial cell walls or metabolism.\nViruses reproduce inside host cells and lack these targets."
    }
  ]
};

(function mergeDiseaseImmunityChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES["disease-immunity"] || {};
  BIOLOGY_5090_NOTES["disease-immunity"] = Object.assign({}, base, DISEASE_IMMUNITY_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ["disease-immunity"] = {
      flashcards: DISEASE_IMMUNITY_CHAPTER_5090.flashcards,
      mcqs: DISEASE_IMMUNITY_CHAPTER_5090.mcqs,
      theory: DISEASE_IMMUNITY_CHAPTER_5090.theory
    };
  }
})();

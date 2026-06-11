/* CADO — O-Level study content by syllabus */
const CADETOS_SUBJECTS = [
  { id: "biology", name: "Biology", code: "5090", icon: "🧬", color: "#5d8f7a", hasTopicHub: true, keywords: ["Chapters", "Flashcards", "MCQs"], topics: ["Cells", "Classification", "Movement into and out of cells", "Biological molecules", "Enzymes", "Plant nutrition", "Transport in flowering plants", "Human nutrition", "Human gas exchange", "Respiration", "Transport in humans", "Disease and immunity", "Excretion", "Coordination and control", "Coordination and response in plants", "Development of organisms", "Inheritance", "Biotechnology", "Ecology"] },
  { id: "chemistry", name: "Chemistry", code: "5070", icon: "⚗️", color: "#5c7fa3", hasTopicHub: true, keywords: ["Chapters", "Flashcards", "MCQs"], topics: ["States of matter", "Atoms, elements and compounds", "Stoichiometry", "Electrochemistry", "Chemical energetics", "Chemical reactions", "Acids, bases and salts", "The Periodic Table", "Metals", "Chemistry of the environment", "Organic chemistry", "Experimental techniques"] },
  { id: "physics", name: "Physics", code: "5054", icon: "⚡", color: "#7a75a0", hasTopicHub: true, keywords: ["Chapters", "Flashcards", "MCQs"], topics: ["Motion, forces and energy", "Thermal physics", "Waves", "Electricity and magnetism", "Nuclear physics", "Space physics"] },
  { id: "maths", name: "Mathematics", code: "4024", icon: "📐", color: "#9a8460", keywords: ["Notes", "Practice", "MCQs"], topics: ["Number", "Algebra", "Geometry", "Trigonometry", "Statistics", "Probability"] },
  { id: "english", name: "English", code: "1123", icon: "📚", color: "#946f82", keywords: ["Reading", "Writing", "Grammar"], topics: ["Reading comprehension", "Summary", "Directed writing", "Composition", "Grammar & vocabulary"] },
  { id: "pakstudies", name: "Pakistan Studies", code: "2059", icon: "🇵🇰", color: "#5f8f88", keywords: ["History", "Notes", "MCQs"], topics: ["History of Pakistan", "Culture", "Environment", "Resources", "Economy"] },
  { id: "islamiat", name: "Islamiat", code: "2058", icon: "☪️", color: "#6d9178", keywords: ["Qur'an", "Hadith", "MCQs"], topics: ["Qur'an & Hadith", "Prophets", "Pillars of Islam", "History", "Ethics & society"] },
  { id: "global", name: "Global Perspectives", code: "2069", icon: "🌍", color: "#6e71a0", keywords: ["Research", "Reflection", "Skills"], topics: ["Research skills", "Reflection", "Collaboration", "Communication", "Critical thinking"] }
];

const CADETOS_PLATFORM_KEYWORDS = ["Notes", "Practice", "Progress"];

const CADETOS_NOTES = {
  biology: [
    { topic: "Cell structure", title: "Plant & animal cells", body: "Plant cells have cell wall (cellulose), chloroplasts, and large permanent vacuole. Animal cells have centrioles (in many species). Both have nucleus, mitochondria, ribosomes, cell membrane, and cytoplasm. Magnification = image size ÷ actual size." },
    { topic: "Enzymes", title: "Lock-and-key model", body: "Enzymes are biological catalysts made of protein. Each enzyme has an active site specific to its substrate. Temperature and pH affect rate: optimum around 37°C for human enzymes. Denaturation destroys the active site shape permanently." },
    { topic: "Plant nutrition", title: "Photosynthesis", body: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in chloroplasts, needs light). Limiting factors: light intensity, CO₂ concentration, temperature. Starch is stored; glucose used for respiration and making cellulose, proteins, lipids." },
    { topic: "Human nutrition", title: "Balanced diet & digestion", body: "Carbohydrates → glucose; proteins → amino acids; fats → fatty acids + glycerol. Villi increase surface area for absorption. Peristalsis moves food; bile emulsifies fats (no enzymes in bile)." },
    { topic: "Transport", title: "Circulatory system", body: "Double circulation: heart → lungs → heart → body. Arteries thick walls, away from heart; veins valves, to heart; capillaries exchange. Red blood cells: haemoglobin + no nucleus. Plasma transports CO₂, urea, hormones." },
    { topic: "Disease & immunity", title: "Pathogens & defence", body: "Pathogens: bacteria, viruses, fungi, protozoa. Active immunity from vaccines (memory cells). Antibiotics kill bacteria only, not viruses. HIV attacks white blood cells; malaria spread by Anopheles mosquito." }
  ],
  chemistry: [
    { topic: "Atomic structure", title: "Atoms, ions & isotopes", body: "Proton number = atomic number. Mass number = protons + neutrons. Isotopes same protons, different neutrons. Electronic configuration: 2,8,8 for first 20 elements. Ions form to achieve noble gas stability." },
    { topic: "Bonding", title: "Ionic, covalent & metallic", body: "Ionic: metal + non-metal, giant lattice, high mp. Covalent: shared electrons; simple molecules (low mp) or giant (diamond, SiO₂). Metallic: sea of delocalised electrons → conductivity." },
    { topic: "Stoichiometry", title: "Moles & equations", body: "Mole (mol) = mass ÷ Mr. Avogadro constant 6.02×10²³. Balance equations; state symbols (s,l,g,aq). Limiting reagent determines product yield. Concentration mol/dm³ = moles ÷ volume (dm³)." },
    { topic: "Acids & bases", title: "pH & neutralisation", body: "Acids produce H⁺ in water; alkalis OH⁻. pH 0–14. Acid + base → salt + water. Reactive metals + acid → salt + hydrogen. Test gases: H₂ pops, CO₂ limewater cloudy, NH₃ damp red litmus blue." },
    { topic: "Electrochemistry", title: "Electrolysis", body: "Molten or aqueous electrolyte; cations → cathode, anions → anode. Products depend on reactivity series. Electroplating uses active cathode. Aluminium extracted by electrolysis of Al₂O₃ in cryolite." },
    { topic: "Organic chemistry", title: "Homologous series", body: "Alkanes CₙH₂ₙ₊₂ saturated. Alkenes CₙH₂ₙ with C=C (bromine water decolourises). Alcohols –OH; carboxylic acids –COOH. Polymers from addition (alkenes) or condensation (ester link, water out)." }
  ],
  physics: [
    { topic: "Motion", title: "Speed, velocity & graphs", body: "Speed = distance ÷ time. Velocity includes direction. Acceleration = change in velocity ÷ time. Distance-time gradient = speed. Velocity-time gradient = acceleration; area = distance." },
    { topic: "Forces", title: "Newton's laws", body: "1st: balanced forces → constant velocity. 2nd: F = ma. 3rd: equal and opposite pairs on different bodies. Weight = mg. Friction opposes motion; thinking distance + braking = stopping distance." },
    { topic: "Energy", title: "Work, power & efficiency", body: "Work = force × distance (joules). Power = energy ÷ time (watts). Efficiency = useful output ÷ total input × 100%. Energy conserved; transforms to heat often. Renewable: solar, wind, hydro." },
    { topic: "Waves", title: "Properties & EM spectrum", body: "v = fλ. Transverse: light, EM; longitudinal: sound. Reflection angle i = r. Refraction: light bends towards normal entering denser medium. Radio → gamma increasing frequency and hazard." },
    { topic: "Electricity", title: "Circuits & safety", body: "V = IR (Ohm's law). Series: same current; parallel: same p.d. across branches. P = IV = I²R. Fuses and earthing prevent shock. Resistance increases with temperature for metals." },
    { topic: "Magnetism", title: "Fields & motors", body: "Field lines north to south. Electromagnet: solenoid + iron core. Motor effect: F on current in field. Generator: induction — movement in field induces e.m.f." },
    { topic: "Radioactivity", title: "Types & half-life", body: "Alpha stopped by paper, beta thin Al, gamma thick lead. Half-life: time for half nuclei to decay. Background radiation always present. Nuclear fission: chain reaction in reactors." }
  ],
  maths: [
    { topic: "Number", title: "Fractions, indices & standard form", body: "Laws of indices: aᵐ × aⁿ = aᵐ⁺ⁿ. Standard form a × 10ⁿ, 1 ≤ a < 10. HCF/LCM. Surds simplify √ab = √a√b. Percentages, ratio, direct/inverse proportion." },
    { topic: "Algebra", title: "Equations & factorisation", body: "Solve linear equations; simultaneous by substitution/elimination. Factorise quadratics. Change subject of formula. Inequalities: flip sign when ×/÷ negative." },
    { topic: "Geometry", title: "Angles & shapes", body: "Angles on line = 180°; at point = 360°. Triangle sum 180°. Similar shapes: lengths ratio k, areas k². Circle: circumference 2πr, area πr². Pythagoras a²+b²=c²." },
    { topic: "Trigonometry", title: "SOHCAHTOA & sine rule", body: "sin θ = opp/hyp, cos = adj/hyp, tan = opp/adj. Sine rule a/sinA = b/sinB. Cosine rule a² = b²+c²−2bc cosA. Bearings measured clockwise from North." },
    { topic: "Statistics", title: "Mean, median & graphs", body: "Mean = sum ÷ n. Median middle value; mode most frequent. Histogram: frequency density = frequency ÷ class width. Cumulative frequency for median/quartiles." },
    { topic: "Probability", title: "Tree diagrams", body: "P(A and B) = P(A)×P(B) if independent. P(not A) = 1 − P(A). Expectation = probability × trials. Sample space lists all outcomes." }
  ],
  english: [
    { topic: "Reading comprehension", title: "Answering Paper 1", body: "Read questions first, then passage. Quote briefly — own words where asked. Infer meaning from context. Identify writer's tone (critical, nostalgic, persuasive)." },
    { topic: "Summary", title: "Concise summary skills", body: "List 10–15 points from both passages. Combine similar ideas. Stay under word limit. No opinions or examples unless in text. Use connectives: however, moreover, consequently." },
    { topic: "Directed writing", title: "Format & audience", body: "Match register: letter (formal/informal), speech, article. Opening and closing appropriate. Persuade: rhetorical questions, tripling, contrast. Report: headings, objective tone." },
    { topic: "Composition", title: "Narrative & descriptive", body: "Plan paragraph by paragraph. Show don't tell — sensory detail. Varied sentence lengths. Strong opening hook; resolved ending. Accurate spelling of common words." },
    { topic: "Grammar & vocabulary", title: "Accuracy marks", body: "Subject-verb agreement. Tense consistency. Punctuation: commas for clauses, apostrophe possession. Avoid repetition — use precise verbs and adjectives." }
  ],
  pakstudies: [
    { topic: "History of Pakistan", title: "1940–1971", body: "Lahore Resolution 1940 — separate Muslim state. Partition 1947: mass migration, Kashmir issue. 1956 first constitution; 1965 war; 1971 East Pakistan becomes Bangladesh. Key figures: Jinnah, Liaquat Ali Khan." },
    { topic: "Culture", title: "Provinces & heritage", body: "Four provinces: Punjab, Sindh, KPK, Balochistan. Urdu national language; regional languages. Islamic architecture (Badshahi Mosque). Festivals: Eid, Basant (historical), regional melas." },
    { topic: "Environment", title: "Climate & hazards", body: "Arid to monsoon climate. Deforestation, soil erosion, flooding. Indus river system vital for irrigation. Earthquakes in northern belt; drought in Thar." },
    { topic: "Resources", title: "Natural & human", body: "Natural gas, coal (Thar), hydropower (Tarbela, Mangla). Agriculture: cotton, wheat, rice. Human capital: literacy, health, migration to cities." },
    { topic: "Economy", title: "Sectors & trade", body: "Primary (agriculture), secondary (textiles, industry), tertiary (services). CPEC infrastructure. Remittances from overseas workers. Challenges: inflation, tax base, energy." }
  ],
  islamiat: [
    { topic: "Qur'an & Hadith", title: "Revelation & compilation", body: "First revelation at Cave Hira. Qur'an preserved orally and in writing under Caliphs. Hadith: sayings/actions of Prophet (SAW); Sunnah guides practice. Major collections: Bukhari, Muslim." },
    { topic: "Prophets", title: "Ulul Azm & finality", body: "Prophets as guides; belief in all revealed books and prophets. Finality of Prophethood — Muhammad (SAW) seal. Stories: Ibrahim, Musa, Isa (AS) — tawheed and patience." },
    { topic: "Pillars of Islam", title: "Five pillars", body: "Shahadah, Salah (times, wudu), Zakat (2.5% nisab), Sawm (Ramadan), Hajj (once if able). Salah congregation in mosque; Jummah obligation for men." },
    { topic: "History", title: "Khulafa Rashidun", body: "Abu Bakr: Ridda wars, compilation. Umar: expansion, administration. Uthman: standard Qur'an. Ali: civil strife. Shura and justice principles." },
    { topic: "Ethics & society", title: "Rights & responsibilities", body: "Rights of parents, neighbours, women, orphans. Prohibition of riba, gambling, alcohol. Halal earning; honesty in trade. Brotherhood (ummah) and equality." }
  ],
  global: [
    { topic: "Research skills", title: "Sources & reliability", body: "Primary vs secondary sources. Evaluate bias, date, author expertise. Harvard referencing: author, year, title. Triangulate facts across sources." },
    { topic: "Reflection", title: "Personal & global", body: "What did you learn? How did perspective change? Link local issue to global trend (e.g. water scarcity). Use 'I' thoughtfully in reflection." },
    { topic: "Collaboration", title: "Team projects", body: "Divide roles: researcher, writer, presenter. Document meetings and decisions. Respect diverse viewpoints. Team report needs clear individual contribution." },
    { topic: "Communication", title: "Presentations", body: "Clear thesis, evidence, counter-argument. Visuals support — don't read slides. Persuade with data and examples. Cambridge Individual Report structure." },
    { topic: "Critical thinking", title: "Analysis & evaluation", body: "Distinguish fact from opinion. Stakeholders: who gains/loses? Short-term vs long-term. Propose realistic solutions with trade-offs." }
  ]
};

const CADETOS_FLASHCARDS = {
  biology: [
    { q: "What is the function of mitochondria?", a: "Site of aerobic respiration / ATP production" },
    { q: "Define osmosis.", a: "Movement of water molecules through a partially permeable membrane from dilute to concentrated solution" },
    { q: "What enzyme digests starch in the mouth?", a: "Amylase" },
    { q: "Which blood vessels carry blood away from the heart?", a: "Arteries" },
    { q: "What is the role of white blood cells?", a: "Phagocytosis, antibody production, and immune response" },
    { q: "Name the green pigment in chloroplasts.", a: "Chlorophyll" }
  ],
  chemistry: [
    { q: "What is the relative charge of a neutron?", a: "Zero (neutral)" },
    { q: "Define electrolysis.", a: "Decomposition of a compound using electricity" },
    { q: "What gas is produced when zinc reacts with dilute hydrochloric acid?", a: "Hydrogen" },
    { q: "What is the pH of a neutral solution?", a: "7" },
    { q: "General formula of alkanes?", a: "CₙH₂ₙ₊₂" },
    { q: "Which ion is formed at the cathode during electrolysis of copper(II) sulfate?", a: "Copper metal (Cu deposited)" }
  ],
  physics: [
    { q: "State Newton's second law.", a: "Force = mass × acceleration (F = ma)" },
    { q: "What is the unit of power?", a: "Watt (W)" },
    { q: "Wave equation?", a: "v = f × λ (speed = frequency × wavelength)" },
    { q: "What colour wire is live in UK plugs?", a: "Brown" },
    { q: "Which radiation is most penetrating?", a: "Gamma (γ)" },
    { q: "Define acceleration.", a: "Rate of change of velocity per unit time" }
  ],
  maths: [
    { q: "Area of circle?", a: "πr²" },
    { q: "Sum of angles in triangle?", a: "180°" },
    { q: "If y is inversely proportional to x, equation form?", a: "y = k/x" },
    { q: "Probability of certain event?", a: "1" },
    { q: "Expand (a+b)²", a: "a² + 2ab + b²" },
    { q: "What is sin 30°?", a: "0.5 (or 1/2)" }
  ],
  english: [
    { q: "What is 'register' in writing?", a: "Level of formality suited to audience and purpose" },
    { q: "Define 'inference' in comprehension.", a: "Reading meaning not directly stated using evidence from text" },
    { q: "Purpose of a topic sentence?", a: "Introduces main idea of a paragraph" },
    { q: "What is alliteration?", a: "Repetition of same consonant sound at start of nearby words" },
    { q: "Active vs passive voice?", a: "Active: subject does action; Passive: subject receives action" }
  ],
  pakstudies: [
    { q: "When was the Lahore Resolution passed?", a: "23 March 1940" },
    { q: "First Governor-General of Pakistan?", a: "Muhammad Ali Jinnah" },
    { q: "Longest river in Pakistan?", a: "River Indus" },
    { q: "When did Bangladesh become independent?", a: "1971" },
    { q: "Capital of Pakistan?", a: "Islamabad" }
  ],
  islamiat: [
    { q: "First pillar of Islam?", a: "Shahadah (declaration of faith)" },
    { q: "How many times is Salah obligatory daily?", a: "Five" },
    { q: "Who compiled the Qur'an into one book under Abu Bakr?", a: "Zaid ibn Thabit (committee)" },
    { q: "Night journey of the Prophet is called?", a: "Al-Isra wa Al-Miraj" },
    { q: "Zakat percentage on eligible wealth?", a: "2.5%" }
  ],
  global: [
    { q: "What is a stakeholder?", a: "Person or group affected by or affecting an issue" },
    { q: "Define bias in a source.", a: "One-sided presentation favouring a particular view" },
    { q: "What is triangulation in research?", a: "Cross-checking information using multiple sources or methods" },
    { q: "Local vs global issue example?", a: "Local: school plastic use; Global: ocean plastic pollution" },
    { q: "Purpose of a thesis statement?", a: "States main argument or position of your essay/report" }
  ]
};

const CADETOS_MCQS = {
  biology: [
    { q: "Which organelle is found in plant cells but NOT in animal cells?", options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"], answer: 1, explain: "Chloroplasts carry out photosynthesis in plant cells." },
    { q: "Enzymes are made of:", options: ["Lipids", "Proteins", "Carbohydrates", "DNA"], answer: 1, explain: "Enzymes are biological catalysts made of protein." },
    { q: "The product of photosynthesis that is stored is:", options: ["Glucose only", "Starch", "Oxygen", "Carbon dioxide"], answer: 1, explain: "Glucose is often converted to starch for storage." },
    { q: "Which blood component carries oxygen?", options: ["Plasma", "Platelets", "Red blood cells", "White blood cells"], answer: 2, explain: "Haemoglobin in red blood cells binds oxygen." },
    { q: "Vaccination gives:", options: ["Passive immunity only", "Active immunity with memory cells", "No immunity", "Antibiotics"], answer: 1, explain: "Vaccines stimulate antibody production and memory cells." }
  ],
  chemistry: [
    { q: "Number of electrons in a neutral atom equals:", options: ["Mass number", "Proton number", "Neutrons", "Nucleons"], answer: 1, explain: "Electrons = protons in a neutral atom." },
    { q: "Ionic bonding typically occurs between:", options: ["Two non-metals", "Metal and non-metal", "Two noble gases", "Hydrogen only"], answer: 1, explain: "Electrons transfer from metal to non-metal." },
    { q: "At RTP, which gas turns limewater milky?", options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Ammonia"], answer: 2, explain: "CO₂ forms insoluble calcium carbonate." },
    { q: "pH of dilute hydrochloric acid is approximately:", options: ["7", "14", "1", "0 only always"], answer: 2, explain: "Acids have pH below 7; HCl is a strong acid (~1–2)." },
    { q: "Bromine water tests for:", options: ["Alkanes", "Alkenes", "Alcohols", "Acids"], answer: 1, explain: "Alkenes decolourise bromine water (addition reaction)." }
  ],
  physics: [
    { q: "A car travels 100 m in 20 s. Average speed is:", options: ["2 m/s", "5 m/s", "20 m/s", "2000 m/s"], answer: 1, explain: "Speed = 100÷20 = 5 m/s." },
    { q: "Weight is calculated using:", options: ["W = m/v", "W = mg", "W = Fd", "W = ma²"], answer: 1, explain: "Weight = mass × gravitational field strength." },
    { q: "Efficiency can never exceed:", options: ["50%", "75%", "100%", "200%"], answer: 2, explain: "Some energy is always wasted as heat/sound." },
    { q: "Sound waves are:", options: ["Transverse", "Longitudinal", "Electromagnetic", "Vacuum only"], answer: 1, explain: "Sound is vibrations parallel to direction of travel." },
    { q: "In a series circuit, current is:", options: ["Different in each component", "Same everywhere", "Zero always", "Infinite"], answer: 1, explain: "Series circuit has one path — same current." }
  ],
  maths: [
    { q: "Simplify 2³ × 2⁴", options: ["2¹²", "2⁷", "4⁷", "6⁷"], answer: 1, explain: "Add indices: 2^(3+4) = 2⁷." },
    { q: "Angles on a straight line sum to:", options: ["90°", "180°", "360°", "270°"], answer: 1, explain: "Supplementary angles on a line = 180°." },
    { q: "sin 90° =", options: ["0", "0.5", "1", "undefined only"], answer: 2, explain: "sin 90° = 1." },
    { q: "Mean of 4, 6, 10 is:", options: ["6", "7", "8", "20"], answer: 0, explain: "(4+6+10)/3 = 20/3 ≈ 6.67 — closest 7? Actually 20/3 = 6.67, option 6 is wrong. Fix: 4,5,6 mean = 5. Let me use 3,6,9 mean = 6.", },
    { q: "Probability of rolling 6 on fair die:", options: ["1/6", "1/3", "6", "1/36"], answer: 0, explain: "One favourable outcome out of six." }
  ],
  english: [
    { q: "A formal letter should NOT include:", options: ["Dear Sir/Madam", "Slang and text speak", "Yours faithfully", "Clear paragraphs"], answer: 1, explain: "Formal register avoids slang." },
    { q: "Inference means:", options: ["Copying the text", "Drawing conclusions from evidence", "Ignoring the passage", "Listing quotations only"], answer: 1, explain: "Inference uses clues from the text." },
    { q: "Which is a narrative device?", options: ["Hook opening", "Chemical equation", "Index", "Bibliography only"], answer: 0, explain: "Hooks engage the reader at the start." },
    { q: "Passive voice example:", options: ["The dog bit the man", "The man was bitten by the dog", "I run fast", "She runs"], answer: 1, explain: "Subject receives the action in passive." },
    { q: "Summary writing should be:", options: ["In your own words where possible", "Full of personal opinions", "Longer than original", "Only quotations"], answer: 0, explain: "Concise, accurate, own words unless quoting." }
  ],
  pakstudies: [
    { q: "Pakistan Resolution was passed in:", options: ["1947", "1940", "1956", "1971"], answer: 1, explain: "23 March 1940 at Lahore." },
    { q: "First capital of Pakistan was:", options: ["Islamabad", "Karachi", "Lahore", "Rawalpindi"], answer: 1, explain: "Karachi was capital until Islamabad built." },
    { q: "Indus Waters Treaty involved:", options: ["India and Pakistan", "China only", "USA only", "Afghanistan"], answer: 0, explain: "1960 treaty on sharing Indus waters." },
    { q: "East Pakistan is now:", options: ["Bangladesh", "Nepal", "Sri Lanka", "Kashmir"], answer: 0, explain: "Independent Bangladesh since 1971." },
    { q: "Major export crop historically:", options: ["Cotton", "Coffee only", "Tea only UK", "Rubber"], answer: 0, explain: "Cotton/textiles key to economy." }
  ],
  islamiat: [
    { q: "Number of pillars of Islam:", options: ["3", "4", "5", "6"], answer: 2, explain: "Five pillars." },
    { q: "First revelation was in:", options: ["Madinah", "Cave Hira, Makkah", "Jerusalem", "Taif"], answer: 1, explain: "Surah Al-Alaq at Cave Hira." },
    { q: "Zakat is:", options: ["Optional always", "Obligatory worship if wealth above nisab", "Only in Ramadan", "Hajj substitute"], answer: 1, explain: "Third pillar — purifies wealth." },
    { q: "Seal of Prophets refers to:", options: ["Isa (AS)", "Muhammad (SAW)", "Musa (AS)", "Ibrahim (AS) only"], answer: 1, explain: "Final prophet — no prophet after." },
    { q: "Longest surah in Qur'an:", options: ["Al-Baqarah", "Al-Ikhlas", "Al-Kawthar", "An-Nas"], answer: 0, explain: "Surah Al-Baqarah (The Cow)." }
  ],
  global: [
    { q: "A primary source is:", options: ["Textbook chapter", "Original interview or diary", "Wikipedia only", "Dictionary"], answer: 1, explain: "First-hand evidence from the time/event." },
    { q: "Stakeholder analysis identifies:", options: ["Only governments", "All parties affected", "Chemical formulas", "Grammar rules"], answer: 1, explain: "Who is involved and their interests." },
    { q: "Bias in media means:", options: ["Neutral facts only", "Favouring one viewpoint", "No information", "Math error"], answer: 1, explain: "Slanted presentation." },
    { q: "Global perspective encourages:", options: ["Ignoring other cultures", "Linking local and international issues", "One country only", "No research"], answer: 1, explain: "Connect personal experience to wider world." },
    { q: "Harvard referencing includes:", options: ["Author and year in citation", "No author needed ever", "Page numbers forbidden", "URLs only"], answer: 0, explain: "Author-date system (in-text)." }
  ]
};

// Fix maths MCQ with wrong mean question
CADETOS_MCQS.maths[3] = { q: "Mean of 3, 6, 9 is:", options: ["4", "6", "9", "18"], answer: 1, explain: "(3+6+9)/3 = 6." };

const CADETOS_THEORY = {
  biology: [
    { q: "Describe how enzymes work and factors affecting their activity.", marks: 6, points: ["Active site and substrate fit", "Lock-and-key / induced fit", "Temperature effect and optimum", "pH effect", "Denaturation at high temperature", "Rate increases then decreases"] },
    { q: "Explain photosynthesis and its importance to life.", marks: 6, points: ["Word/chlorophyll equation", "Chloroplast role", "Glucose and starch", "Oxygen released", "Food chain energy source", "Limiting factors"] },
    { q: "Compare arteries, veins and capillaries.", marks: 5, points: ["Wall thickness", "Direction of blood", "Valves in veins", "Capillary exchange", "Size / lumen"] }
  ],
  chemistry: [
    { q: "Explain ionic and covalent bonding with examples.", marks: 6, points: ["Electron transfer vs sharing", "Metal + non-metal example", "Simple covalent molecule", "Giant structures mention", "Properties linked to structure", "Diagram of NaCl optional"] },
    { q: "Describe the test for common gases.", marks: 5, points: ["Hydrogen pop with lighted splint", "Oxygen relights splint", "CO₂ limewater", "Ammonia damp litmus", "Chlorine bleaching"] },
    { q: "What is electrolysis? Explain products at electrodes.", marks: 6, points: ["Definition", "Cathode cations reduced", "Anode anions oxidised", "Reactive series for metals", "Example CuSO₄ or brine", "Uses e.g. electroplating"] }
  ],
  physics: [
    { q: "Describe Newton's three laws with examples.", marks: 6, points: ["First: inertia / balanced forces", "Second: F=ma example", "Third: action-reaction pairs", "Different objects for third law", "Units", "Everyday example e.g. rocket"] },
    { q: "Explain generation and properties of waves.", marks: 5, points: ["v=fλ", "Transverse vs longitudinal", "Reflection and refraction", "EM spectrum order", "Applications of types"] },
    { q: "How is electricity used safely in the home?", marks: 5, points: ["Fuse rating", "Earthing", "Insulation", "Circuit breaker", "Don't overload sockets"] }
  ],
  maths: [
    { q: "Solve simultaneous equations: 2x + y = 7 and x − y = 2.", marks: 4, points: ["Add or substitute", "x = 3", "y = 1", "Check in both equations"] },
    { q: "A triangle has sides 5 cm, 12 cm, 13 cm. Show it is right-angled.", marks: 3, points: ["5²+12²=25+144=169", "13²=169", "Pythagoras holds", "Conclusion right angle"] },
    { q: "Describe mean, median and mode with when each is useful.", marks: 5, points: ["Definitions", "Calculation steps", "Median for skewed data", "Mode for categorical", "Example"] }
  ],
  english: [
    { q: "How would you plan a directed writing task?", marks: 5, points: ["Identify format and audience", "Bullet main points", "Opening and closing", "Paragraph order", "Tone and vocabulary"] },
    { q: "What makes a good summary?", marks: 4, points: ["Own words", "Key points only", "Word limit", "No irrelevant detail"] },
    { q: "Analyse how a writer creates tension in a narrative.", marks: 6, points: ["Short sentences", "Sensory detail", "Cliffhanger", "Word choice", "Pacing", "Quote example"] }
  ],
  pakstudies: [
    { q: "Outline causes leading to the creation of Pakistan.", marks: 6, points: ["Muslim minority concerns", "Hindu-Muslim relations", "Lahore Resolution", "WW2 context", "Cabinet Mission", "Partition 1947"] },
    { q: "Describe problems Pakistan faced after independence.", marks: 5, points: ["Refugees", "Kashmir", "Administrative setup", "Economic challenges", "Constitution delay"] },
    { q: "Explain importance of the Indus river system.", marks: 4, points: ["Irrigation", "Agriculture", "Hydroelectricity", "Settlement patterns"] }
  ],
  islamiat: [
    { q: "Explain the importance of Salah in Islam.", marks: 5, points: ["Second pillar", "Direct link with Allah", "Discipline", "Community in mosque", "References from Qur'an/Hadith"] },
    { q: "Describe the compilation of the Qur'an.", marks: 6, points: ["Revelation to Prophet", "Written and memorised", "Abu Bakr after Yamama", "Uthman standard copy", "Preservation"] },
    { q: "Rights of women in early Islamic society.", marks: 5, points: ["Inheritance", "Marriage consent", "Education", "Property ownership", "Contrast with pre-Islamic Arabia"] }
  ],
  global: [
    { q: "How do you evaluate reliability of a website source?", marks: 5, points: ["Author credentials", "Date updated", "Bias / purpose", "Cross-reference", "Domain type (.edu/.gov)"] },
    { q: "Explain local vs global dimension of climate change.", marks: 6, points: ["Local example floods/heat", "Global greenhouse gases", "Stakeholders", "Interdependence", "Possible actions"] },
    { q: "What is reflection in Global Perspectives?", marks: 4, points: ["Personal learning", "Changed perspective", "Skills developed", "Future application"] }
  ]
};

const AI_STUDY_TIPS = {
  biology: "Focus on labelled diagrams (heart, leaf, kidney), define processes (osmosis, diffusion, active transport), and practise past-paper data questions on enzymes and photosynthesis.",
  chemistry: "Memorise tests for gases and ions, practise balancing equations and mole calculations, and learn the reactivity series — it predicts displacement and electrolysis products.",
  physics: "Draw clear graphs, show working with units, and learn definitions precisely. Practise numericals on speed, electricity (V=IR), and energy transfers.",
  maths: "Show all working for method marks. Revise factorisation, simultaneous equations, trigonometry, and circle theorems. Check answers with estimation.",
  english: "Read the question type first. For summary, stick to the passages. For composition, plan 5 paragraphs and vary sentence structure.",
  pakstudies: "Use dates and named events accurately. Structure essays: introduction, chronological body, conclusion. Link geography topics to map skills.",
  islamiat: "Quote Qur'an/Hadith where relevant with reference. Explain beliefs clearly and give examples from Seerah of the Prophet (SAW).",
  global: "Use stakeholders, causes, consequences, and solutions framework. Support arguments with evidence and consider counter-views."
};

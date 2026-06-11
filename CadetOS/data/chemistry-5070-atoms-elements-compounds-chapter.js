/**
 * Chemistry 5070 — Chapter 2 Atoms, elements and compounds (full study content)
 */
const ATOMS_ELEMENTS_COMPOUNDS_CHAPTER_5070 = {
  learningObjectives: [
    "Describe the structure of atoms in terms of protons, neutrons, and electrons.",
    "Define and distinguish between atoms, elements, molecules, and compounds.",
    "Explain the difference between mixtures and compounds.",
    "Understand the arrangement of particles in atoms and molecules.",
    "Interpret chemical symbols and formulae.",
    "Describe how elements combine to form compounds.",
    "Classify substances as elements, compounds, or mixtures.",
    "Explain the differences between physical and chemical changes."
  ],
  summary: [
    "All matter is made of tiny particles called atoms.",
    "Atoms contain protons, neutrons, and electrons.",
    "An element contains only one type of atom.",
    "A compound forms when different elements chemically combine in fixed proportions.",
    "A mixture consists of substances physically combined and can be separated physically.",
    "Molecules are groups of atoms chemically bonded together.",
    "Chemical formulae show the types and numbers of atoms in a substance.",
    "Compounds have properties different from the elements that form them.",
    "Physical changes do not produce new substances; chemical changes do."
  ],
  definitions: [
    { term: "Atom", definition: "The smallest particle of an element that can take part in a chemical reaction." },
    { term: "Element", definition: "A pure substance made up of only one type of atom." },
    { term: "Molecule", definition: "A group of two or more atoms chemically bonded together." },
    { term: "Compound", definition: "A substance formed when two or more different elements chemically combine in fixed proportions." },
    { term: "Mixture", definition: "A combination of two or more substances that are not chemically combined." },
    { term: "Proton", definition: "A positively charged particle found in the nucleus of an atom." },
    { term: "Neutron", definition: "A particle with no charge found in the nucleus." },
    { term: "Electron", definition: "A negatively charged particle that moves around the nucleus." },
    { term: "Chemical bond", definition: "The force that holds atoms together in a molecule or compound." },
    { term: "Chemical formula", definition: "A representation showing the types and numbers of atoms in a substance." }
  ],
  comparisonTable: {
    headers: ["Feature", "Compound", "Mixture"],
    rows: [
      ["Combination", "Chemical", "Physical"],
      ["Composition", "Fixed", "Variable"],
      ["Properties", "New properties", "Original properties retained"],
      ["Separation", "Chemical methods", "Physical methods"],
      ["Formula", "Has formula", "No fixed formula"]
    ]
  },
  examples: [
    { title: "Water vs its elements", text: "Hydrogen is flammable and oxygen supports combustion, but water extinguishes many fires — a compound has new properties." },
    { title: "Air as a mixture", text: "Air contains nitrogen, oxygen, carbon dioxide and noble gases in variable proportions — not chemically bonded." },
    { title: "Hydrogen atom", text: "1 proton and 1 electron in a neutral hydrogen atom." },
    { title: "Oxygen atom", text: "8 protons and 8 electrons in a neutral oxygen atom." },
    { title: "Brass", text: "An alloy — a mixture of copper and zinc, not a compound." }
  ],
  chapterSections: [
    {
      title: "Introduction to atoms",
      paragraphs: [
        "Everything around us is made of matter, and all matter is made up of tiny particles called atoms.",
        "Atoms are extremely small and cannot usually be seen with the naked eye. They are the basic building blocks of all substances.",
        "Examples: a gold ring is made of gold atoms; water is made of hydrogen and oxygen atoms; air contains atoms of nitrogen, oxygen and other gases."
      ]
    },
    {
      title: "Structure of the atom",
      paragraphs: [
        "An atom consists of three main subatomic particles: protons (+1 charge, relative mass 1, in nucleus), neutrons (no charge, relative mass 1, in nucleus), and electrons (−1 charge, very small mass, outside nucleus).",
        "The nucleus at the centre contains protons and neutrons and holds most of the atom's mass.",
        "Electrons move around the nucleus in energy levels or shells.",
        "In a neutral atom: number of protons = number of electrons."
      ]
    },
    {
      title: "Elements",
      paragraphs: [
        "An element contains only one type of atom and cannot be broken down into simpler substances by ordinary chemical means.",
        "Each element has a unique symbol (e.g. H, O, C, N, S, Fe, Cu, Na). The first letter is always capital; a second letter, if present, is lowercase (Na, Fe, Ca — not NA, FE, CA)."
      ],
      subsections: [
        {
          title: "Metals",
          bulletList: [
            "Good conductors of heat and electricity",
            "Shiny, strong, malleable",
            "Examples: iron, copper, aluminium"
          ]
        },
        {
          title: "Non-metals",
          bulletList: [
            "Poor conductors of electricity",
            "Usually dull; brittle if solid",
            "Examples: oxygen, sulfur, carbon"
          ]
        }
      ]
    },
    {
      title: "Molecules",
      paragraphs: [
        "A molecule consists of two or more atoms chemically joined together."
      ],
      bulletList: [
        "Molecular elements — same element: H₂, O₂, N₂, Cl₂",
        "Compounds — different elements: H₂O (water), CO₂ (carbon dioxide), CH₄ (methane)"
      ]
    },
    {
      title: "Compounds",
      bulletList: [
        "Formed when atoms of different elements chemically combine",
        "Fixed composition and new properties",
        "Cannot be separated by physical methods alone",
        "Examples: H₂O, CO₂, NaCl, MgO",
        "Properties differ from constituent elements (e.g. water vs hydrogen and oxygen)"
      ]
    },
    {
      title: "Mixtures",
      bulletList: [
        "Two or more substances physically combined — no chemical reaction",
        "Variable composition; components keep their own properties",
        "Can be separated by physical methods: filtration, distillation, evaporation, chromatography",
        "Examples: air, salt and sand, soil, seawater, brass (alloy)"
      ]
    },
    {
      title: "Chemical formulae",
      paragraphs: [
        "Chemical formulae show which elements are present and how many atoms of each element are present."
      ],
      bulletList: [
        "H₂O — 2 hydrogen atoms, 1 oxygen atom",
        "CO₂ — 1 carbon atom, 2 oxygen atoms",
        "NH₃ — 1 nitrogen atom, 3 hydrogen atoms",
        "CH₄ — 1 carbon atom, 4 hydrogen atoms"
      ]
    },
    {
      title: "Physical and chemical changes",
      subsections: [
        {
          title: "Physical change",
          bulletList: [
            "No new substance forms",
            "Examples: melting ice, boiling water, dissolving sugar",
            "Usually reversible"
          ]
        },
        {
          title: "Chemical change",
          bulletList: [
            "New substances form",
            "Examples: rusting, burning, cooking an egg",
            "Often difficult to reverse"
          ]
        }
      ]
    },
    {
      title: "Classifying substances",
      bulletList: [
        "Element: oxygen, iron, sulfur",
        "Compound: water, carbon dioxide",
        "Mixture: air, salt water, brass"
      ]
    }
  ],
  examTips: "Always state whether bonding is chemical (compound) or physical (mixture). Use subscripts correctly when interpreting formulae — in CO₂ the 2 applies to oxygen only. Capitalise symbols correctly: Na not NA. For neutral atoms, protons = electrons.",
  quickRecap: "Atom: smallest particle of an element.\nElement: one type of atom.\nMolecule: bonded atoms.\nCompound: different elements, fixed ratio, new properties.\nMixture: physical blend, variable composition.\nProton +1 in nucleus; neutron 0 in nucleus; electron −1 in shells.\nPhysical change: no new substance. Chemical change: new substance.",
  flashcards: [
    { q: "What is an atom?", a: "Smallest particle of an element that can take part in a reaction." },
    { q: "What is an element?", a: "Substance containing one type of atom." },
    { q: "What is a compound?", a: "Substance made from chemically combined elements." },
    { q: "What is a mixture?", a: "Two or more substances physically combined." },
    { q: "What charge does a proton have?", a: "Positive (+1)." },
    { q: "What charge does a neutron have?", a: "Neutral (no charge)." },
    { q: "What charge does an electron have?", a: "Negative (−1)." },
    { q: "Where are protons found?", a: "In the nucleus." },
    { q: "Where are neutrons found?", a: "In the nucleus." },
    { q: "Where are electrons found?", a: "Around the nucleus in shells." },
    { q: "What does H₂O represent?", a: "Water." },
    { q: "What does CO₂ represent?", a: "Carbon dioxide." },
    { q: "Can compounds be separated physically?", a: "No — chemical methods needed." },
    { q: "Can mixtures be separated physically?", a: "Yes." },
    { q: "What is the symbol for sodium?", a: "Na." }
  ],
  mcqs: [
    { q: "What is an atom?", options: ["A group of molecules", "The smallest particle of an element that can take part in a chemical reaction", "A mixture of substances", "A charged particle only"], answer: 1, explain: "An atom is the smallest particle of an element that retains its chemical properties." },
    { q: "Which particle has a positive charge?", options: ["Electron", "Neutron", "Proton", "Molecule"], answer: 2, explain: "Protons have a positive charge of +1." },
    { q: "Which particle has no charge?", options: ["Electron", "Proton", "Neutron", "Ion"], answer: 2, explain: "Neutrons are electrically neutral." },
    { q: "Where are protons found in an atom?", options: ["Electron shells", "Nucleus", "Molecules", "Orbit"], answer: 1, explain: "Protons are located inside the nucleus." },
    { q: "Which statement describes an element?", options: ["Contains different kinds of atoms chemically joined", "Contains only one type of atom", "Contains substances physically mixed", "Contains ions only"], answer: 1, explain: "An element consists of only one type of atom." },
    { q: "Which of the following is an element?", options: ["Water", "Carbon dioxide", "Oxygen", "Sodium chloride"], answer: 2, explain: "Oxygen contains only oxygen atoms." },
    { q: "What is the symbol for sodium?", options: ["So", "S", "Na", "N"], answer: 2, explain: "Sodium's chemical symbol is Na." },
    { q: "Which substance is a compound?", options: ["Oxygen", "Nitrogen", "Water", "Sulfur"], answer: 2, explain: "Water contains hydrogen and oxygen chemically combined." },
    { q: "What is a molecule?", options: ["A mixture of substances", "Two or more atoms chemically bonded together", "A single proton", "An electron shell"], answer: 1, explain: "Molecules consist of atoms joined by chemical bonds." },
    { q: "Which formula represents oxygen gas?", options: ["O", "O₂", "O₃", "H₂O"], answer: 1, explain: "Oxygen exists naturally as diatomic molecules." },
    { q: "Which formula represents water?", options: ["CO₂", "CH₄", "H₂O", "NH₃"], answer: 2, explain: "Water contains two hydrogen atoms and one oxygen atom." },
    { q: "Which statement about compounds is correct?", options: ["They have variable composition", "They are physically combined substances", "They contain chemically bonded elements", "They can always be separated by filtration"], answer: 2, explain: "Compounds are formed by chemical bonding." },
    { q: "Which of the following is a mixture?", options: ["Water", "Air", "Carbon dioxide", "Magnesium oxide"], answer: 1, explain: "Air contains several gases physically mixed together." },
    { q: "Which method can separate substances in a mixture?", options: ["Filtration", "Nuclear reaction", "Fusion", "Ionization"], answer: 0, explain: "Mixtures can often be separated using physical methods such as filtration." },
    { q: "Which particle has the smallest mass?", options: ["Proton", "Neutron", "Electron", "Nucleus"], answer: 2, explain: "Electrons have a much smaller mass than protons and neutrons." },
    { q: "Which statement about a mixture is correct?", options: ["Components are chemically combined", "Components retain their properties", "Fixed composition is required", "It has a chemical formula"], answer: 1, explain: "The substances in a mixture keep their original properties." },
    { q: "Which of the following contains only one type of atom?", options: ["Compound", "Mixture", "Element", "Solution"], answer: 2, explain: "Elements consist of only one kind of atom." },
    { q: "What does the formula CO₂ represent?", options: ["One carbon atom and one oxygen atom", "Two carbon atoms and one oxygen atom", "One carbon atom and two oxygen atoms", "Two carbon atoms and two oxygen atoms"], answer: 2, explain: "The subscript 2 applies to oxygen only." },
    { q: "Which statement is true for a chemical change?", options: ["No new substance forms", "It is always reversible", "New substances are produced", "Only physical properties change"], answer: 2, explain: "Chemical changes produce new substances." },
    { q: "Which of the following is an example of a physical change?", options: ["Burning wood", "Rusting iron", "Melting ice", "Cooking an egg"], answer: 2, explain: "Melting only changes the state of water and does not create a new substance." },
    { q: "Which substance is made up of molecules containing only one type of atom?", options: ["Water", "Carbon dioxide", "Oxygen", "Sodium chloride"], answer: 2, explain: "Oxygen exists as O₂ molecules containing only oxygen atoms." },
    { q: "Which statement about electrons is correct?", options: ["They are positively charged", "They are found in the nucleus", "They have a negative charge", "They have no charge"], answer: 2, explain: "Electrons carry a negative charge and move around the nucleus." },
    { q: "What is the chemical symbol for iron?", options: ["Ir", "Fe", "In", "Fi"], answer: 1, explain: "The symbol Fe comes from the Latin name ferrum." },
    { q: "Which of the following is NOT a compound?", options: ["Water", "Carbon dioxide", "Oxygen", "Magnesium oxide"], answer: 2, explain: "Oxygen is an element because it contains only oxygen atoms." },
    { q: "A compound differs from a mixture because a compound:", options: ["Has variable composition", "Can be separated physically", "Contains chemically bonded elements", "Retains the properties of its components"], answer: 2, explain: "Elements in a compound are chemically joined together." },
    { q: "Which of the following is a mixture?", options: ["Sodium chloride", "Carbon dioxide", "Air", "Water"], answer: 2, explain: "Air is a mixture of several gases." },
    { q: "Which particle contributes to the positive charge of an atom?", options: ["Electron", "Proton", "Neutron", "Molecule"], answer: 1, explain: "Protons have a positive charge." },
    { q: "Which formula represents methane?", options: ["NH₃", "CO₂", "CH₄", "H₂O"], answer: 2, explain: "Methane contains one carbon atom and four hydrogen atoms." },
    { q: "Which statement about neutrons is correct?", options: ["They are negatively charged", "They orbit the nucleus", "They have no charge", "They are positively charged"], answer: 2, explain: "Neutrons are neutral particles found in the nucleus." },
    { q: "Which substance contains different elements chemically combined?", options: ["Nitrogen gas", "Oxygen gas", "Carbon dioxide", "Iron"], answer: 2, explain: "Carbon dioxide contains carbon and oxygen atoms chemically bonded." },
    { q: "What does the formula NH₃ indicate?", options: ["One nitrogen atom and three hydrogen atoms", "Three nitrogen atoms and one hydrogen atom", "One nitrogen atom and one hydrogen atom", "Three nitrogen atoms and three hydrogen atoms"], answer: 0, explain: "The subscript 3 shows three hydrogen atoms." },
    { q: "Which statement is true about elements?", options: ["They are made of different types of atoms", "They can always be broken down chemically", "They contain only one type of atom", "They are always gases"], answer: 2, explain: "Elements consist of only one kind of atom." },
    { q: "Which substance can be separated by physical methods?", options: ["Water", "Carbon dioxide", "Air", "Magnesium oxide"], answer: 2, explain: "Air is a mixture and can be separated physically." },
    { q: "Which of the following is an example of a chemical change?", options: ["Melting ice", "Boiling water", "Rusting iron", "Dissolving sugar"], answer: 2, explain: "Rusting produces a new substance, iron oxide." },
    { q: "In a neutral atom, the number of electrons is equal to the number of:", options: ["Neutrons", "Molecules", "Protons", "Compounds"], answer: 2, explain: "Neutral atoms have equal numbers of protons and electrons." },
    { q: "Which of the following is a molecular element?", options: ["Water", "Carbon dioxide", "Oxygen", "Sodium chloride"], answer: 2, explain: "Oxygen exists naturally as O₂ molecules." },
    { q: "Which correctly represents a compound?", options: ["It contains atoms of only one element", "It has a fixed composition", "It can be separated by filtration", "It does not have a chemical formula"], answer: 1, explain: "Compounds always contain elements in fixed proportions." },
    { q: "Which substance contains two hydrogen atoms and one oxygen atom per molecule?", options: ["CO₂", "O₂", "H₂O", "NH₃"], answer: 2, explain: "H₂O is the formula for water." },
    { q: "Why do compounds have properties different from their constituent elements?", options: ["The elements disappear completely", "Chemical bonding creates a new substance with new properties", "Compounds are always mixtures", "Elements lose all particles"], answer: 1, explain: "Chemical reactions produce substances with different properties." },
    { q: "Which statement best describes a mixture?", options: ["It contains chemically bonded elements in fixed ratios", "It contains substances physically combined in any proportion", "It contains only one type of atom", "It cannot be separated physically"], answer: 1, explain: "Mixtures contain substances that are not chemically bonded and may be present in varying amounts." }
  ],
  theory: [
    {
      q: "Define the following terms: a) atom, b) element, c) compound.",
      marks: 4,
      points: [
        "Atom: smallest particle of an element that can take part in a chemical reaction",
        "Element: substance made of only one type of atom",
        "Compound: substance formed when different elements chemically combine in fixed proportions"
      ]
    },
    {
      q: "State three differences between a compound and a mixture.",
      marks: 4,
      points: [
        "Compound: chemical combination; mixture: physical combination",
        "Compound: fixed composition; mixture: variable composition",
        "Compound: new properties; mixture: components keep original properties",
        "Compound: separated by chemical methods; mixture: separated by physical methods"
      ]
    },
    {
      q: "An atom contains 11 protons, 12 neutrons, and 11 electrons. a) Which particles are in the nucleus? b) What is the charge of the atom? c) Explain your answer.",
      marks: 5,
      points: [
        "Nucleus contains protons and neutrons (11 protons, 12 neutrons)",
        "Atom is neutral / has no overall charge",
        "11 positive protons balanced by 11 negative electrons",
        "Neutrons have no charge so do not affect overall charge"
      ]
    },
    {
      q: "Water has the formula H₂O. a) Name the elements present. b) State the number of atoms of each element in one molecule. c) Explain why water is a compound.",
      marks: 5,
      points: [
        "Hydrogen and oxygen",
        "2 hydrogen atoms and 1 oxygen atom per molecule",
        "Different elements chemically combined",
        "Fixed ratio of 2:1; properties differ from hydrogen and oxygen alone"
      ]
    },
    {
      q: "Classify each as element, compound, or mixture: a) air, b) oxygen, c) carbon dioxide, d) brass, e) iron.",
      marks: 5,
      points: [
        "Air — mixture (gases physically combined)",
        "Oxygen — element",
        "Carbon dioxide — compound",
        "Brass — mixture (alloy of copper and zinc)",
        "Iron — element"
      ]
    }
  ]
};

(function mergeAtomsElementsCompoundsChapter5070() {
  if (typeof CHEMISTRY_5070 === "undefined") return;
  var topic = CHEMISTRY_5070.topics.find(function (t) { return t.id === "atoms-elements-compounds"; });
  if (!topic) return;
  Object.assign(topic, ATOMS_ELEMENTS_COMPOUNDS_CHAPTER_5070);
})();

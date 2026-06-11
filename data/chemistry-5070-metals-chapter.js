/**
 * Chemistry 5070 — Chapter 9 Metals (full study content)
 */
const METALS_CHAPTER_5070 = {
  learningObjectives: [
    "Describe the general properties of metals.",
    "Explain metallic bonding at a basic level.",
    "Compare metals and non-metals.",
    "Describe reactivity trends of metals.",
    "Understand reactions of metals with water, acids, and oxygen.",
    "Explain the reactivity series.",
    "Describe extraction methods of metals.",
    "Understand corrosion and rusting.",
    "Explain ways of preventing rusting."
  ],
  summary: [
    "Metals form positive ions and conduct electricity due to delocalised electrons.",
    "They are malleable, ductile, and strong.",
    "Reactivity varies and is shown in the reactivity series.",
    "Metals react with oxygen, water, and acids to form different products.",
    "Iron rusts in the presence of oxygen and water.",
    "Rusting can be prevented using coatings like paint, oil, zinc, or alloying.",
    "Extraction depends on metal reactivity: uncombined (gold), carbon reduction (iron), electrolysis (aluminium)."
  ],
  definitions: [
    { term: "Metal", definition: "An element that forms positive ions and conducts heat and electricity." },
    { term: "Metallic bonding", definition: "The attraction between positive metal ions and a sea of delocalised electrons." },
    { term: "Reactivity series", definition: "A list of metals arranged in order of decreasing reactivity." },
    { term: "Corrosion", definition: "The gradual destruction of metals due to reaction with the environment." },
    { term: "Rusting", definition: "The corrosion of iron in the presence of oxygen and water." }
  ],
  comparisonTable: {
    headers: ["Feature", "Metals", "Non-metals"],
    rows: [
      ["Conductivity", "Good conductors", "Poor conductors"],
      ["Malleability", "Malleable and ductile", "Brittle when solid"],
      ["Appearance", "Shiny (lustrous)", "Dull"],
      ["Ions formed", "Positive ions (lose electrons)", "Negative ions (gain electrons)"],
      ["Reaction with acids", "Salt + hydrogen (above H in series)", "Generally do not react in same way"]
    ]
  },
  examples: [
    { title: "Metal + oxygen", text: "Magnesium + Oxygen → Magnesium oxide — bright white flame observed." },
    { title: "Metal + water", text: "Sodium + Water → Sodium hydroxide + Hydrogen — violent reaction." },
    { title: "Metal + acid", text: "Zinc + Hydrochloric acid → Zinc chloride + Hydrogen." },
    { title: "Displacement", text: "Iron + Copper sulfate → Iron sulfate + Copper — brown copper deposits." },
    { title: "Rusting", text: "Iron + Oxygen + Water → Hydrated iron(III) oxide (rust)." }
  ],
  chapterSections: [
    {
      title: "Introduction to metals",
      paragraphs: [
        "Metals are elements that typically form positive ions and show metallic behaviour such as conductivity, strength, and malleability.",
        "Examples: iron, copper, aluminium, zinc, sodium. Metals make up most of the Periodic Table (left and middle sections)."
      ]
    },
    {
      title: "Physical properties of metals",
      bulletList: [
        "Conduct electricity and heat",
        "Malleable (hammered into shape) and ductile (drawn into wires)",
        "High melting and boiling points",
        "Shiny surface (lustrous)",
        "Uses: copper (wiring), aluminium (aircraft — low density), iron (construction)"
      ]
    },
    {
      title: "Metallic bonding (basic)",
      bulletList: [
        "Positive metal ions in a lattice",
        "Sea of delocalised electrons moving freely",
        "Enables electrical and heat conductivity",
        "Gives strength and flexibility"
      ]
    },
    {
      title: "Chemical properties of metals",
      numberedList: [
        "Metal + oxygen → metal oxide (e.g. Mg + O₂ → MgO)",
        "Metal + water → metal hydroxide + hydrogen (reactive metals; iron reacts slowly)",
        "Metal + acid → salt + hydrogen (e.g. Zn + HCl → ZnCl₂ + H₂)"
      ]
    },
    {
      title: "Reactivity series",
      paragraphs: [
        "Potassium > Sodium > Calcium > Magnesium > Aluminium > Zinc > Iron > Copper > Silver > Gold",
        "More reactive metals lose electrons more easily. Less reactive metals are more stable.",
        "Displacement: a more reactive metal displaces a less reactive metal from its compound."
      ]
    },
    {
      title: "Extraction of metals",
      bulletList: [
        "Low reactivity (gold, silver) — found uncombined; simple physical extraction",
        "Medium reactivity (iron, zinc) — carbon reduction in blast furnace",
        "High reactivity (aluminium, sodium) — electrolysis; energy expensive"
      ]
    },
    {
      title: "Corrosion and rusting",
      bulletList: [
        "Rusting: iron + oxygen + water → hydrated iron(III) oxide",
        "Both oxygen and water required; salt speeds up rusting",
        "Corrosion is gradual destruction of metals by reaction with the environment"
      ]
    },
    {
      title: "Prevention of rusting",
      bulletList: [
        "Painting — blocks air and water",
        "Oiling/greasing — protective layer",
        "Galvanising — coating iron with zinc",
        "Alloying — e.g. stainless steel (iron + chromium + nickel)"
      ]
    },
    {
      title: "Alloys",
      bulletList: [
        "Mixtures of metals (or metal + non-metal)",
        "Stronger than pure metals — different sized atoms distort layers",
        "Less malleable than pure metals",
        "Examples: steel (iron + carbon), brass (copper + zinc), bronze (copper + tin)"
      ]
    }
  ],
  examTips: "Reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Cu > Ag > Au. Metal + acid → salt + H₂. Metal + water → hydroxide + H₂ (reactive metals). Rust needs O₂ AND water. Galvanising = zinc coating. Low reactivity = uncombined; medium = blast furnace + carbon; high = electrolysis. Alloys stronger because layers cannot slide easily.",
  quickRecap: "Metals: + ions, conduct (delocalised e⁻), malleable, ductile.\nMetal + O₂ → oxide. Metal + acid → salt + H₂.\nReactivity series: K most reactive, Au least.\nDisplacement: more reactive displaces less reactive.\nRust = hydrated iron(III) oxide; needs O₂ + water.\nPrevent: paint, oil, galvanise, alloy.\nExtract: gold (physical), iron (carbon), Al (electrolysis).",
  flashcards: [
    { q: "What is a metal?", a: "An element that forms positive ions and conducts electricity." },
    { q: "What is metallic bonding?", a: "Attraction between metal ions and delocalised electrons." },
    { q: "What is malleability?", a: "Ability to be hammered into shape." },
    { q: "What is ductility?", a: "Ability to be drawn into wires." },
    { q: "What gas is produced when metals react with acids?", a: "Hydrogen." },
    { q: "What is rust?", a: "Hydrated iron(III) oxide." },
    { q: "What are alloys?", a: "Mixtures of metals." },
    { q: "Name a very reactive metal.", a: "Potassium." },
    { q: "Name a less reactive metal.", a: "Gold." },
    { q: "What is displacement?", a: "A more reactive metal replacing a less reactive one." },
    { q: "What is galvanising?", a: "Coating iron with zinc." },
    { q: "What is the reactivity series?", a: "Order of metals by reactivity." },
    { q: "What is produced when metals burn in oxygen?", a: "Metal oxide." },
    { q: "Why are metals good conductors?", a: "Due to delocalised electrons." },
    { q: "What is steel?", a: "Alloy of iron and carbon." }
  ],
  mcqs: [
    { q: "What is a metal?", options: ["A non-conducting element", "An element forming negative ions", "An element forming positive ions and conducting electricity", "A compound"], answer: 2, explain: "Metals form positive ions and conduct electricity." },
    { q: "Which property is typical of metals?", options: ["Brittle", "Poor conductor", "Malleable", "Dull"], answer: 2, explain: "Metals can be shaped easily." },
    { q: "What is metallic bonding?", options: ["Sharing of electrons between atoms", "Attraction between ions and delocalised electrons", "Covalent bonding only", "Ionic bonding only"], answer: 1, explain: "Metals have a sea of delocalised electrons." },
    { q: "Why do metals conduct electricity?", options: ["Free ions move", "Delocalised electrons move", "Protons move", "Neutrons move"], answer: 1, explain: "Delocalised electrons carry charge." },
    { q: "Which metal is most reactive?", options: ["Gold", "Iron", "Sodium", "Copper"], answer: 2, explain: "Sodium is highly reactive." },
    { q: "Which metal is least reactive?", options: ["Potassium", "Gold", "Zinc", "Magnesium"], answer: 1, explain: "Gold is very unreactive." },
    { q: "What is produced when magnesium reacts with oxygen?", options: ["Magnesium chloride", "Magnesium oxide", "Magnesium sulfate", "Magnesium hydroxide"], answer: 1, explain: "Metal + oxygen forms metal oxide." },
    { q: "What gas is released when metals react with acids?", options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Chlorine"], answer: 2, explain: "Metals produce hydrogen gas." },
    { q: "Which metal reacts violently with water?", options: ["Iron", "Sodium", "Copper", "Gold"], answer: 1, explain: "Sodium reacts vigorously with water." },
    { q: "What is rust?", options: ["Iron chloride", "Iron sulfate", "Hydrated iron oxide", "Iron carbonate"], answer: 2, explain: "Rust is hydrated iron(III) oxide." },
    { q: "What is needed for rusting?", options: ["Carbon dioxide", "Oxygen and water", "Hydrogen", "Salt only"], answer: 1, explain: "Both oxygen and water are required." },
    { q: "Which method prevents rusting?", options: ["Heating", "Freezing", "Painting", "Crushing"], answer: 2, explain: "Paint blocks air and water." },
    { q: "What is galvanising?", options: ["Painting iron", "Coating iron with zinc", "Mixing iron with carbon", "Heating iron"], answer: 1, explain: "Zinc protects iron from rusting." },
    { q: "Which is an alloy?", options: ["Iron", "Copper", "Steel", "Oxygen"], answer: 2, explain: "Steel is iron + carbon." },
    { q: "Why are alloys stronger?", options: ["More oxygen", "Different sized atoms distort layers", "More electrons", "More protons"], answer: 1, explain: "Layers cannot slide easily past each other." },
    { q: "What is a displacement reaction?", options: ["Two metals combine", "Less reactive metal replaces more reactive one", "More reactive metal replaces less reactive one", "No reaction"], answer: 2, explain: "More reactive metals displace less reactive ones." },
    { q: "Iron + copper sulfate produces:", options: ["Iron chloride", "Copper nitrate", "Iron sulfate and copper", "Iron oxide"], answer: 2, explain: "Iron displaces copper from the solution." },
    { q: "Which is used to extract highly reactive metals?", options: ["Heating", "Electrolysis", "Filtration", "Evaporation"], answer: 1, explain: "Electrolysis is required for highly reactive metals." },
    { q: "Which metal is extracted using carbon reduction?", options: ["Aluminium", "Iron", "Sodium", "Potassium"], answer: 1, explain: "Iron is extracted in a blast furnace using carbon." },
    { q: "Which metal is found uncombined?", options: ["Iron", "Sodium", "Gold", "Aluminium"], answer: 2, explain: "Gold is very unreactive and found native." },
    { q: "Which is a property of metals?", options: ["Brittle", "Poor conductor", "Ductile", "Dull"], answer: 2, explain: "Metals can be drawn into wires." },
    { q: "Which is NOT a metal property?", options: ["Conducts electricity", "Shiny", "Brittle", "Malleable"], answer: 2, explain: "Metals are not brittle." },
    { q: "What forms when sodium reacts with water?", options: ["Sodium oxide", "Sodium chloride", "Sodium hydroxide", "Sodium carbonate"], answer: 2, explain: "Metal + water → metal hydroxide + hydrogen." },
    { q: "Which metal is used in wires?", options: ["Copper", "Zinc", "Iron", "Lead"], answer: 0, explain: "Copper is an excellent conductor." },
    { q: "Which metal is used in aircraft?", options: ["Aluminium", "Iron", "Gold", "Silver"], answer: 0, explain: "Aluminium is lightweight and strong." },
    { q: "What is the reactivity series?", options: ["List of gases", "Order of metals by reactivity", "Periodic table", "List of compounds"], answer: 1, explain: "Metals arranged from most to least reactive." },
    { q: "Which metal is most reactive in the alkali group?", options: ["Lithium", "Sodium", "Potassium", "Calcium"], answer: 2, explain: "Reactivity increases down Group I." },
    { q: "Which prevents rust best?", options: ["Water", "Oxygen", "Zinc coating", "Salt"], answer: 2, explain: "Zinc galvanising protects iron." },
    { q: "Which is a transition metal?", options: ["Sodium", "Iron", "Chlorine", "Neon"], answer: 1, explain: "Iron is a transition metal." },
    { q: "Transition metals are usually:", options: ["Highly reactive", "Poor conductors", "Catalysts", "Gases"], answer: 2, explain: "They commonly act as catalysts." },
    { q: "Which metal reacts slowly with water?", options: ["Sodium", "Iron", "Potassium", "Calcium"], answer: 1, explain: "Iron reacts very slowly with water." },
    { q: "What is alloy composition?", options: ["Pure metal", "Metal + oxygen", "Mixture of metals", "Gas mixture"], answer: 2, explain: "Alloys are mixtures of metals." },
    { q: "What is steel made of?", options: ["Iron + oxygen", "Iron + carbon", "Copper + zinc", "Iron + sulfur"], answer: 1, explain: "Steel is iron alloyed with carbon." },
    { q: "Which is a use of copper?", options: ["Fuel", "Wiring", "Food", "Plastic"], answer: 1, explain: "Copper conducts electricity well." },
    { q: "Which gas is produced in a metal + acid reaction?", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"], answer: 1, explain: "Hydrogen gas is released." },
    { q: "Which metal is soft and reactive?", options: ["Sodium", "Iron", "Copper", "Gold"], answer: 0, explain: "Sodium is a soft alkali metal." },
    { q: "Which is correct about non-metals?", options: ["Conduct electricity well", "Malleable", "Brittle", "Shiny"], answer: 2, explain: "Non-metals are brittle when solid." },
    { q: "Which increases rusting rate?", options: ["Dry air", "Salt water", "Oil", "Paint"], answer: 1, explain: "Salt accelerates rusting." },
    { q: "Which is a protective coating?", options: ["Oxygen", "Zinc", "Hydrogen", "Nitrogen"], answer: 1, explain: "Zinc galvanising protects iron." },
    { q: "Why are metals useful?", options: ["Poor conductors", "Weak and brittle", "Strong and conductive", "Non-reactive always"], answer: 2, explain: "Metals have useful physical properties." }
  ],
  theory: [
    {
      q: "Explain: a) Metallic bonding b) Reactivity series",
      marks: 5,
      points: [
        "Metallic bonding: positive metal ions in a lattice surrounded by delocalised electrons",
        "Electrons move freely — explains conductivity and strength",
        "Reactivity series: metals listed in order of decreasing reactivity",
        "More reactive metals lose electrons more easily",
        "Used to predict displacement reactions and extraction methods"
      ]
    },
    {
      q: "Describe how rusting occurs and the conditions required.",
      marks: 4,
      points: [
        "Iron reacts with oxygen and water to form hydrated iron(III) oxide (rust)",
        "Both oxygen and water must be present",
        "Salt in the environment speeds up the rate of rusting",
        "Rusting is a form of corrosion specific to iron"
      ]
    },
    {
      q: "Compare metals and non-metals in terms of physical properties.",
      marks: 5,
      points: [
        "Metals conduct electricity and heat; non-metals are poor conductors",
        "Metals are malleable and ductile; non-metals are brittle",
        "Metals are shiny (lustrous); non-metals are dull",
        "Metals generally have higher melting points",
        "Metals on left of Periodic Table; non-metals on right"
      ]
    },
    {
      q: "Explain how iron is extracted from its ore.",
      marks: 5,
      points: [
        "Iron ore (iron oxide) is heated with coke (carbon) in a blast furnace",
        "Carbon reduces iron oxide to iron",
        "Iron oxide + carbon → iron + carbon monoxide",
        "Iron has medium reactivity — carbon reduction is sufficient",
        "Molten iron is tapped off from the bottom of the furnace"
      ]
    },
    {
      q: "Describe methods used to prevent rusting of iron.",
      marks: 5,
      points: [
        "Painting — creates barrier against oxygen and water",
        "Oiling or greasing — waterproof protective layer",
        "Galvanising — coating with zinc; zinc corrodes instead of iron",
        "Alloying — stainless steel resists rust (chromium forms protective layer)",
        "All methods prevent or reduce contact with oxygen and/or water"
      ]
    }
  ]
};

(function mergeMetalsChapter5070() {
  if (typeof CHEMISTRY_5070 === "undefined") return;
  var topic = CHEMISTRY_5070.topics.find(function (t) { return t.id === "metals"; });
  if (!topic) return;
  Object.assign(topic, METALS_CHAPTER_5070);
})();

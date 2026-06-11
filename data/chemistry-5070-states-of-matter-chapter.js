/**
 * Chemistry 5070 — Chapter 1 States of matter (full study content)
 */
const STATES_OF_MATTER_CHAPTER_5070 = {
  learningObjectives: [
    "Describe solids, liquids, and gases using the kinetic particle model.",
    "Explain the arrangement, movement, and forces between particles.",
    "Describe changes of state using particle theory.",
    "Explain diffusion in liquids and gases.",
    "Interpret heating and cooling processes.",
    "Relate particle behaviour to physical properties of matter."
  ],
  summary: [
    "Matter exists as solids, liquids, and gases.",
    "Particle arrangement and movement determine properties.",
    "Solids have fixed shape and volume; liquids have fixed volume only; gases have neither.",
    "Changes of state occur when energy is gained or lost.",
    "Diffusion is caused by continuous particle motion.",
    "Higher temperatures increase particle kinetic energy and diffusion rate."
  ],
  definitions: [
    { term: "Matter", definition: "Anything that has mass and occupies space." },
    { term: "Particle theory", definition: "A model stating that all matter is made of tiny particles in constant motion." },
    { term: "Solid", definition: "A state of matter with fixed shape and fixed volume." },
    { term: "Liquid", definition: "A state of matter with fixed volume but no fixed shape." },
    { term: "Gas", definition: "A state of matter with neither fixed shape nor fixed volume." },
    { term: "Diffusion", definition: "The net movement of particles from a region of higher concentration to a region of lower concentration." },
    { term: "Melting", definition: "Change of state from solid to liquid." },
    { term: "Freezing", definition: "Change of state from liquid to solid." },
    { term: "Boiling", definition: "Rapid conversion of a liquid into a gas throughout the liquid." },
    { term: "Evaporation", definition: "Slow conversion of a liquid into a gas from its surface." },
    { term: "Condensation", definition: "Change of state from gas to liquid." },
    { term: "Sublimation", definition: "Direct change between solid and gas without becoming liquid." }
  ],
  comparisonTable: {
    headers: ["Property", "Solid", "Liquid", "Gas"],
    rows: [
      ["Shape", "Fixed", "Takes container shape", "Fills container"],
      ["Volume", "Fixed", "Fixed", "Not fixed"],
      ["Compressibility", "Very low", "Low", "High"],
      ["Density", "High", "Medium", "Low"],
      ["Particle movement", "Vibrate", "Slide", "Random rapid motion"]
    ]
  },
  examples: [
    { title: "Ice melting", text: "Ice cubes melting in a drink — solid to liquid as particles gain energy." },
    { title: "Steam on glass", text: "Water vapour condensing on a cold window — gas to liquid." },
    { title: "Perfume spreading", text: "Perfume particles diffuse through air in a room." },
    { title: "Drying clothes", text: "Water evaporates from fabric surfaces at any temperature." },
    { title: "Dry ice", text: "Solid carbon dioxide sublimes directly to gas." }
  ],
  chapterSections: [
    {
      title: "The kinetic particle theory",
      paragraphs: [
        "The kinetic particle theory explains the properties of matter by considering particle arrangement, particle movement, and forces between particles.",
        "All particles possess kinetic energy and are constantly moving."
      ]
    },
    {
      title: "Solids",
      bulletList: [
        "Particles closely packed in a regular arrangement",
        "Particles vibrate about fixed positions",
        "Strong attractive forces between particles",
        "Fixed shape and fixed volume; difficult to compress; high density",
        "Examples: iron, ice, sodium chloride"
      ]
    },
    {
      title: "Liquids",
      bulletList: [
        "Particles close together in an irregular arrangement",
        "Particles slide past one another",
        "Forces weaker than in solids but stronger than in gases",
        "Fixed volume but no fixed shape; flow easily; almost incompressible",
        "Examples: water, ethanol, mercury"
      ]
    },
    {
      title: "Gases",
      bulletList: [
        "Particles far apart with very weak attractions",
        "Particles move rapidly and randomly",
        "No fixed shape or volume; easily compressed; low density",
        "Examples: oxygen, nitrogen, carbon dioxide"
      ]
    },
    {
      title: "Changes of state",
      numberedList: [
        "Melting: solid → liquid — particles gain energy and move further apart (e.g. ice → water)",
        "Freezing: liquid → solid — particles lose energy and become fixed (e.g. water → ice)",
        "Boiling: liquid → gas throughout the liquid at a fixed temperature (e.g. water → steam)",
        "Evaporation: liquid → gas at the surface only; can occur below boiling point",
        "Condensation: gas → liquid — particles lose energy and move closer (e.g. steam → droplets)",
        "Sublimation: solid ↔ gas directly (e.g. iodine, dry ice)"
      ]
    },
    {
      title: "Diffusion",
      paragraphs: [
        "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration.",
        "Diffusion is fastest in gases because particles move rapidly and are far apart. Example: perfume spreading through a room.",
        "Diffusion in liquids is slower because particles are closer together. Example: food colouring spreading in water.",
        "Diffusion rate increases with temperature and is faster for lighter particles. Gas > liquid > solid."
      ]
    },
    {
      title: "Heating and cooling",
      paragraphs: [
        "When matter is heated, particles gain kinetic energy, movement increases, and state changes may occur.",
        "When matter is cooled, particles lose kinetic energy, movement decreases, and matter may change state."
      ]
    }
  ],
  examTips: "Use the particle model for every explanation — arrangement, movement, and energy. Distinguish boiling (throughout liquid, fixed temperature) from evaporation (surface only, any temperature). State that gases compress easily because of large spaces between particles.",
  quickRecap: "Solid: fixed shape & volume, particles vibrate.\nLiquid: fixed volume only, particles slide.\nGas: no fixed shape/volume, particles move randomly.\nMelting, boiling, evaporation need energy; freezing & condensation release energy.\nDiffusion: high → low concentration; fastest in gases.",
  flashcards: [
    { q: "What is matter?", a: "Anything with mass and volume." },
    { q: "What is diffusion?", a: "Movement from high to low concentration." },
    { q: "State with fixed shape?", a: "Solid." },
    { q: "State with fixed volume but no fixed shape?", a: "Liquid." },
    { q: "Most compressible state?", a: "Gas." },
    { q: "Solid to liquid?", a: "Melting." },
    { q: "Liquid to gas?", a: "Boiling." },
    { q: "Gas to liquid?", a: "Condensation." },
    { q: "Liquid to solid?", a: "Freezing." },
    { q: "Solid directly to gas?", a: "Sublimation." },
    { q: "Why do gases diffuse quickly?", a: "Rapid particle movement." },
    { q: "Particle arrangement in solids?", a: "Closely packed." },
    { q: "Particle movement in liquids?", a: "Sliding past each other." },
    { q: "What happens during heating?", a: "Particles gain energy." },
    { q: "Example of sublimation?", a: "Iodine." }
  ],
  mcqs: [
    { q: "Which state of matter has a fixed shape and fixed volume?", options: ["Gas", "Liquid", "Solid", "Plasma"], answer: 2, explain: "Solids have fixed shape and volume." },
    { q: "Which state of matter is easiest to compress?", options: ["Solid", "Liquid", "Gas", "Ice"], answer: 2, explain: "Gas particles are far apart." },
    { q: "In a solid, particles mainly:", options: ["Move randomly", "Vibrate about fixed positions", "Flow freely", "Escape"], answer: 1, explain: "Solid particles vibrate in fixed positions." },
    { q: "Which process changes a liquid into a gas?", options: ["Freezing", "Condensation", "Boiling", "Melting"], answer: 2, explain: "Boiling forms gas from liquid." },
    { q: "Diffusion is fastest in:", options: ["Solids", "Liquids", "Gases", "Ice"], answer: 2, explain: "Gas particles move fastest." },
    { q: "Which process changes gas to liquid?", options: ["Condensation", "Melting", "Sublimation", "Freezing"], answer: 0, explain: "Condensation forms liquid from gas." },
    { q: "Which state has no fixed volume?", options: ["Solid", "Liquid", "Gas", "Ice"], answer: 2, explain: "Gases expand to fill containers." },
    { q: "During melting, particles:", options: ["Lose energy", "Gain energy", "Stop moving", "Become smaller"], answer: 1, explain: "Energy is absorbed." },
    { q: "Which has the strongest forces of attraction?", options: ["Gas", "Liquid", "Solid", "Vapor"], answer: 2, explain: "Solid particles are strongly attracted." },
    { q: "Evaporation occurs:", options: ["Only at boiling point", "Throughout liquid", "At the surface", "In solids"], answer: 2, explain: "Evaporation is a surface process." },
    { q: "Which is an example of sublimation?", options: ["Ice to water", "Water to steam", "Iodine to vapor", "Steam to water"], answer: 2, explain: "Iodine sublimes." },
    { q: "Liquids have:", options: ["Fixed shape only", "Fixed volume only", "No shape and no volume", "Fixed shape and volume"], answer: 1, explain: "Liquids keep volume but not shape." },
    { q: "Gas particles are:", options: ["Closely packed", "Fixed in place", "Far apart", "Layered"], answer: 2, explain: "Gas particles have large spaces." },
    { q: "Freezing changes:", options: ["Solid to liquid", "Liquid to gas", "Liquid to solid", "Gas to liquid"], answer: 2, explain: "Freezing forms a solid." },
    { q: "Which statement about gases is correct?", options: ["Fixed shape", "Fixed volume", "Easily compressed", "Closely packed particles"], answer: 2, explain: "Gases compress easily." },
    { q: "The smell of perfume spreading is:", options: ["Melting", "Condensation", "Diffusion", "Freezing"], answer: 2, explain: "Perfume particles diffuse." },
    { q: "Heating generally causes particles to:", options: ["Move slower", "Stop moving", "Move faster", "Shrink"], answer: 2, explain: "Kinetic energy increases." },
    { q: "Which state flows but has fixed volume?", options: ["Gas", "Solid", "Liquid", "Ice"], answer: 2, explain: "Liquids flow." },
    { q: "Which state has the highest density?", options: ["Gas", "Solid", "Vapor", "Steam"], answer: 1, explain: "Particles are closely packed." },
    { q: "Boiling occurs:", options: ["Only at surface", "Throughout liquid", "Only in solids", "Only in gases"], answer: 1, explain: "Boiling occurs throughout the liquid." },
    { q: "Which process requires energy input?", options: ["Freezing", "Condensation", "Melting", "Cooling"], answer: 2, explain: "Melting absorbs heat." },
    { q: "Particles in liquids:", options: ["Are fixed", "Slide past one another", "Are extremely far apart", "Do not move"], answer: 1, explain: "Liquids flow due to particle movement." },
    { q: "A gas fills a container because:", options: ["Particles are fixed", "Particles move randomly", "Particles are large", "Particles sink"], answer: 1, explain: "Random motion fills available space." },
    { q: "Which state diffuses slowest?", options: ["Gas", "Liquid", "Solid", "Vapor"], answer: 2, explain: "Solid particles have little freedom." },
    { q: "Water vapor changing into droplets is:", options: ["Freezing", "Condensation", "Melting", "Sublimation"], answer: 1, explain: "Gas becomes liquid." },
    { q: "Ice changing to water is:", options: ["Freezing", "Melting", "Condensation", "Boiling"], answer: 1, explain: "Solid becomes liquid." },
    { q: "Which state has particles arranged regularly?", options: ["Gas", "Liquid", "Solid", "Vapor"], answer: 2, explain: "Solids have ordered structures." },
    { q: "Diffusion occurs because particles:", options: ["Are stationary", "Move constantly", "Are magnetic", "Expand"], answer: 1, explain: "Continuous motion causes diffusion." },
    { q: "Which factor increases diffusion rate?", options: ["Lower temperature", "Higher temperature", "Greater density only", "Freezing"], answer: 1, explain: "Faster particle movement increases diffusion." },
    { q: "Which has the weakest attractions?", options: ["Solid", "Liquid", "Gas", "Ice"], answer: 2, explain: "Gas particles have weak attractions." },
    { q: "Steam is an example of:", options: ["Solid", "Liquid", "Gas", "Crystal"], answer: 2, explain: "Steam is water vapor." },
    { q: "Which change releases energy?", options: ["Melting", "Boiling", "Condensation", "Evaporation"], answer: 2, explain: "Particles lose energy." },
    { q: "The particle model explains:", options: ["Only solids", "Only gases", "Properties of matter", "Only liquids"], answer: 2, explain: "It explains all states." },
    { q: "Which process can occur below boiling point?", options: ["Evaporation", "Boiling only", "Melting only", "Freezing only"], answer: 0, explain: "Evaporation occurs at any temperature." },
    { q: "Dry ice changes directly into:", options: ["Liquid CO₂", "Gas CO₂", "Water", "Ice"], answer: 1, explain: "Dry ice sublimes." },
    { q: "Gas particles have:", options: ["Fixed positions", "Strong forces only", "Rapid random motion", "No movement"], answer: 2, explain: "This is characteristic of gases." },
    { q: "Which property is common to liquids and solids?", options: ["Fixed shape", "Fixed volume", "High compressibility", "Fill container"], answer: 1, explain: "Both generally have fixed volume." },
    { q: "Cooling a gas may cause:", options: ["Boiling", "Melting", "Condensation", "Diffusion"], answer: 2, explain: "Gas can become liquid." },
    { q: "Which state has particles furthest apart?", options: ["Solid", "Liquid", "Gas", "Ice"], answer: 2, explain: "Gas particles are widely spaced." },
    { q: "The best explanation for compression of gases is:", options: ["Strong forces", "Fixed positions", "Large empty spaces between particles", "Large particle size"], answer: 2, explain: "Empty space allows compression." }
  ],
  theory: [
    {
      q: "Describe the arrangement and movement of particles in a solid, liquid, and gas.",
      marks: 6,
      points: [
        "Solid: closely packed, regular arrangement; vibrate about fixed positions",
        "Liquid: close together, irregular arrangement; slide past one another",
        "Gas: far apart; move rapidly and randomly",
        "Link arrangement to fixed shape/volume for each state",
        "Mention forces: strong in solids, weaker in liquids, very weak in gases"
      ]
    },
    {
      q: "Explain why diffusion occurs faster in gases than in liquids.",
      marks: 4,
      points: [
        "Gas particles are far apart with more space to move",
        "Gas particles move rapidly and randomly",
        "Liquid particles are closer together so movement is restricted",
        "Net movement from high to low concentration is therefore faster in gases"
      ]
    },
    {
      q: "State the differences between evaporation and boiling.",
      marks: 4,
      points: [
        "Evaporation occurs at the surface only; boiling occurs throughout the liquid",
        "Evaporation can happen at any temperature; boiling at a fixed boiling point",
        "Evaporation is slower; boiling is rapid",
        "Both change liquid to gas but differ in where and when they occur"
      ]
    },
    {
      q: "Describe what happens to particles when ice melts and then boils.",
      marks: 5,
      points: [
        "Melting: ice gains energy; particles vibrate more and break free from fixed positions",
        "Liquid formed: particles close but can slide past each other",
        "Boiling: more energy supplied; particles move faster and overcome attractions",
        "Gas formed: particles far apart with rapid random motion",
        "Energy absorbed during both melting and boiling"
      ]
    },
    {
      q: "A student places a crystal of potassium manganate(VII) into water. Explain what is observed and why.",
      marks: 4,
      points: [
        "Purple colour spreads slowly through the water",
        "Potassium manganate particles move from high concentration to low concentration",
        "This is diffusion in a liquid",
        "Particle movement is continuous but slower than in gases because particles are closer"
      ]
    }
  ]
};

(function mergeStatesOfMatterChapter5070() {
  if (typeof CHEMISTRY_5070 === "undefined") return;
  var topic = CHEMISTRY_5070.topics.find(function (t) { return t.id === "states-of-matter"; });
  if (!topic) return;
  Object.assign(topic, STATES_OF_MATTER_CHAPTER_5070);
})();

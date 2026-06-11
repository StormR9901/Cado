/**
 * Biology 5090 - Chapter 19 Ecology (Relationships of Organisms with the Environment) — full study content
 */
const ECOLOGY_CHAPTER_5090 = {
  learningObjectives: [
    "Define ecosystem, habitat, population, and community.",
    "Explain how organisms depend on each other and their environment.",
    "Describe food chains, food webs, and trophic levels.",
    "Understand energy flow in ecosystems.",
    "Explain carbon and nitrogen cycles at a basic level.",
    "Describe predation, competition, and symbiosis.",
    "Understand the impact of human activities on ecosystems.",
    "Describe conservation and environmental protection."
  ],
  summary: [
    "An ecosystem includes living organisms and their abiotic environment interacting.",
    "Population = one species in an area; community = all species in an area.",
    "Food chains show one-way energy flow; food webs link many chains.",
    "Energy is lost as heat at each trophic level — only ~10% passes on.",
    "Carbon cycle: photosynthesis removes CO₂; respiration, decomposition and combustion return it.",
    "Nitrogen cycle: fixation, nitrification, plant uptake, decomposition, denitrification.",
    "Human impacts: deforestation, pollution, climate change; conservation protects biodiversity."
  ],
  examples: [
    { title: "Example 1", text: "Grass → grasshopper → frog → snake shows a simple food chain." },
    { title: "Example 2", text: "Bees pollinating flowers is mutualism — both species benefit." },
    { title: "Example 3", text: "Fertiliser runoff can cause eutrophication and fish deaths in rivers." }
  ],
  comparisonTable: {
    headers: ["Relationship", "Effect on species", "Example"],
    rows: [
      ["Predation", "Predator benefits; prey killed", "Lion and zebra"],
      ["Competition", "Both may get less of a resource", "Plants competing for light"],
      ["Mutualism", "Both benefit", "Bees and flowering plants"],
      ["Parasitism", "Parasite benefits; host harmed", "Tapeworm in human intestine"],
      ["Commensalism", "One benefits; other unaffected", "Remora fish on shark"]
    ]
  },
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "Organisms interact with each other and with non-living factors such as water, light and temperature. These interactions form ecosystems."
      ]
    },
    {
      title: "Key ecological terms",
      bulletList: [
        "Ecosystem: living community plus abiotic environment",
        "Habitat: place where an organism lives",
        "Population: all organisms of one species in an area at one time",
        "Community: all populations of different species in the same area"
      ]
    },
    {
      title: "Interactions between organisms",
      subsections: [
        {
          title: "Predation",
          bulletList: ["Predator kills and eats prey", "Example: lion and zebra"]
        },
        {
          title: "Competition",
          bulletList: ["Organisms struggle for resources such as food, water, light and space", "Within a species (intraspecific) or between species (interspecific)"]
        },
        {
          title: "Symbiosis",
          bulletList: [
            "Mutualism: both benefit (e.g. bees and flowers)",
            "Parasitism: one benefits, one harmed (e.g. tapeworm)",
            "Commensalism: one benefits, other little affected"
          ]
        }
      ]
    },
    {
      title: "Food chains, webs and trophic levels",
      bulletList: [
        "Food chain: linear sequence of who eats whom — arrows show energy flow to consumer",
        "Food web: interconnected food chains",
        "Producers (usually plants) → primary consumers (herbivores) → secondary → tertiary consumers",
        "Decomposers break down dead material and recycle nutrients"
      ]
    },
    {
      title: "Energy flow",
      bulletList: [
        "Energy enters as light captured by producers in photosynthesis",
        "Flows one way through trophic levels",
        "Lost as heat in respiration, movement and waste — ~10% transferred to next level",
        "Explains why chains rarely exceed four or five levels"
      ]
    },
    {
      title: "Carbon cycle",
      bulletList: [
        "CO₂ removed from air by photosynthesis",
        "Returned by respiration in plants and animals",
        "Decomposition and combustion of fuels also release CO₂",
        "Deforestation and fossil fuels increase atmospheric CO₂ (greenhouse effect)"
      ]
    },
    {
      title: "Nitrogen cycle (basic)",
      bulletList: [
        "Nitrogen fixation: N₂ → usable compounds (bacteria in root nodules or lightning)",
        "Nitrification: ammonia → nitrates (nitrifying bacteria)",
        "Plants absorb nitrates to make proteins",
        "Decomposers release ammonia from dead matter",
        "Denitrification returns nitrogen gas to the atmosphere"
      ]
    },
    {
      title: "Human impact and conservation",
      bulletList: [
        "Deforestation: habitat loss, less CO₂ uptake, biodiversity loss",
        "Pollution: air, water, soil — eutrophication from fertiliser runoff",
        "Climate change: more greenhouse gases, higher temperatures",
        "Conservation: protected areas, laws, reforestation, recycling, education"
      ]
    }
  ],
  definitions: [
    { term: "Ecosystem", definition: "Community of organisms and the abiotic environment interacting as a system." },
    { term: "Habitat", definition: "The place where an organism lives." },
    { term: "Population", definition: "All organisms of one species in an area at one time." },
    { term: "Community", definition: "All populations of different species living in the same area." },
    { term: "Food chain", definition: "Linear sequence showing transfer of energy from one trophic level to the next." },
    { term: "Food web", definition: "Network of interconnected food chains." },
    { term: "Trophic level", definition: "Position in a food chain, e.g. producer or primary consumer." },
    { term: "Decomposer", definition: "Organism that breaks down dead organic matter." },
    { term: "Nitrogen fixation", definition: "Conversion of atmospheric nitrogen into usable nitrogen compounds." },
    { term: "Conservation", definition: "Protection of species and habitats from decline or extinction." }
  ],
  syllabusPoints: [
    { code: "19.1", title: "Food chains and webs", content: "Producers to consumers; arrows show energy flow; food webs are interconnected chains." },
    { code: "19.2", title: "Energy flow", content: "Energy lost at each level; ~10% transfer; pyramids taper upward." },
    { code: "19.3", title: "Carbon cycle", content: "Photosynthesis, respiration, decomposition, combustion; link to climate change." },
    { code: "19.4", title: "Nitrogen cycle", content: "Fixation, nitrification, uptake, deamination, denitrification." },
    { code: "19.5", title: "Human impact and conservation", content: "Deforestation, pollution, eutrophication, conservation methods." }
  ],
  quickRecap: "Ecosystem = community + environment.\nFood chain arrows → energy to consumer.\n~10% energy to next level; rest lost as heat.\nCO₂: photosynthesis in, respiration/decomposition/combustion out.\nN₂ → fixation → nitrates → plants → decomposers → denitrification.\nHumans: deforestation, pollution; conserve habitats.",
  examTips: "Draw arrows from food to feeder. Explain energy loss for short chains. Name processes in carbon and nitrogen cycles. Link fertiliser runoff to eutrophication step by step. Give balanced conservation examples.",
  flashcards: [
    { q: "What is an ecosystem?", a: "Living organisms interacting with each other and with their abiotic environment." },
    { q: "What is a habitat?", a: "The natural place where an organism lives." },
    { q: "What is a population?", a: "All organisms of the same species in an area at one time." },
    { q: "What is a community?", a: "All populations of different species living in the same area." },
    { q: "What is predation?", a: "One organism (predator) kills and eats another (prey)." },
    { q: "What is competition?", a: "Organisms struggle for the same limited resources." },
    { q: "What is mutualism?", a: "Both organisms benefit from the relationship." },
    { q: "What is parasitism?", a: "One organism benefits while the host is harmed." },
    { q: "What does a food chain show?", a: "A sequence of energy transfer from one trophic level to the next." },
    { q: "What is a food web?", a: "Interconnected food chains in an ecosystem." },
    { q: "Who are the producers in most food chains?", a: "Green plants that photosynthesise." },
    { q: "Who are consumers?", a: "Animals that feed on plants or other animals." },
    { q: "In which direction does energy flow in ecosystems?", a: "One way — from producers up through consumers." },
    { q: "How is carbon dioxide removed from the atmosphere in the carbon cycle?", a: "Photosynthesis by green plants." },
    { q: "What is conservation?", a: "Protection of species and habitats to maintain biodiversity." }
  ],
  mcqs: [
    { q: "An ecosystem is best described as:", options: ["A single animal living alone", "Living organisms interacting with each other and their environment", "Only the non-living parts of a pond", "Only green plants in a field"], answer: 1, explain: "Ecosystems include biotic and abiotic components." },
    { q: "A habitat is:", options: ["A diagram of energy transfer", "The place where an organism normally lives", "A group of different species", "The top predator in a food web"], answer: 1, explain: "Habitat provides food, shelter and conditions for life." },
    { q: "A population consists of:", options: ["All species in a forest", "All organisms of one species in a given area", "Only decomposers in soil", "The abiotic factors in a desert"], answer: 1, explain: "Population is same species, same area, same time." },
    { q: "A community includes:", options: ["One individual organism", "All populations of different species in an area", "Only producers", "Only carbon dioxide in the air"], answer: 1, explain: "Community is the living part of an ecosystem at species level." },
    { q: "Predation is a relationship in which:", options: ["Both organisms always die", "One organism kills and eats another", "Two species share sunlight only", "Plants absorb nitrates"], answer: 1, explain: "Predator benefits; prey is killed." },
    { q: "Competition occurs when organisms:", options: ["Always help each other survive", "Struggle for the same limited resources", "Only carry out photosynthesis", "Never need water"], answer: 1, explain: "Resources include food, space, light and mates." },
    { q: "Mutualism is symbiosis where:", options: ["Only one species benefits", "Both organisms benefit", "Both organisms are always killed", "Neither organism interacts"], answer: 1, explain: "Example: pollination — bee gets food, plant gets pollination." },
    { q: "In parasitism:", options: ["Both organisms benefit equally", "One organism benefits and the host is harmed", "Neither organism is affected", "Both organisms are producers"], answer: 1, explain: "Parasite lives on or in host at host's expense." },
    { q: "A food chain mainly shows:", options: ["Movement of nitrogen gas only", "Transfer of energy from one organism to another", "How plants absorb water by osmosis", "The structure of a cell wall"], answer: 1, explain: "Each step is a trophic level." },
    { q: "In most terrestrial food chains the producers are:", options: ["Green plants", "Large carnivores", "Fungi only", "Humans only"], answer: 0, explain: "Plants trap light energy by photosynthesis." },
    { q: "Consumers in a food chain are typically:", options: ["Green plants", "Animals that feed on plants or other animals", "Rocks and soil", "Sunlight"], answer: 1, explain: "Herbivores, carnivores and omnivores are consumers." },
    { q: "Energy flow in ecosystems is:", options: ["Circular with no loss", "One-way with less energy at higher trophic levels", "Random in all directions", "From carnivores to plants only"], answer: 1, explain: "Energy is not recycled like nutrients." },
    { q: "Much energy is lost between trophic levels as:", options: ["Heat from respiration and movement", "Permanent storage in rocks", "Oxygen in the atmosphere only", "Chlorophyll in roots"], answer: 0, explain: "Respiration releases heat; not all biomass is eaten." },
    { q: "A food web differs from a food chain because it:", options: ["Shows only one path of feeding", "Links many interconnected feeding relationships", "Shows only the water cycle", "Has no trophic levels"], answer: 1, explain: "Most organisms feed at more than one level." },
    { q: "The carbon cycle involves movement of:", options: ["Carbon dioxide and carbon in organic compounds", "Only nitrogen gas", "Only water vapour", "Only oxygen in blood"], answer: 0, explain: "Carbon cycles between air, living things and fossil fuels." },
    { q: "Carbon dioxide is removed from the atmosphere mainly by:", options: ["Photosynthesis in green plants", "Respiration in animals only", "Denitrification in soil", "Predation in food webs"], answer: 0, explain: "Plants convert CO₂ to glucose." },
    { q: "Carbon dioxide is returned to the atmosphere by:", options: ["Only photosynthesis", "Respiration, decomposition and combustion", "Only nitrogen fixation", "Only absorption of water in roots"], answer: 1, explain: "Living organisms and burning fuels release CO₂." },
    { q: "Decomposers are important in nutrient cycles because they:", options: ["Break down dead material and recycle nutrients", "Only photosynthesise in leaves", "Are always top predators", "Remove all oxygen from the air"], answer: 0, explain: "They release minerals and CO₂ from dead organic matter." },
    { q: "Nitrogen fixation is carried out by:", options: ["Some bacteria converting atmospheric nitrogen to usable compounds", "Plants releasing oxygen only", "Lions hunting zebras", "Fish absorbing carbon dioxide"], answer: 0, explain: "Rhizobium in root nodules is a common example." },
    { q: "Deforestation can harm ecosystems by:", options: ["Increasing habitat loss and reducing biodiversity", "Increasing photosynthesis in all oceans instantly", "Stopping all competition between plants", "Removing the need for conservation"], answer: 0, explain: "Fewer trees mean fewer habitats and less CO₂ uptake." },
    { q: "Water pollution from excess fertiliser can cause eutrophication, which:", options: ["Leads to algal blooms and low oxygen, killing aquatic animals", "Increases only nitrogen gas in the air harmlessly", "Stops all predation in the sea", "Makes plants unable to photosynthesise anywhere"], answer: 0, explain: "Bacteria decompose dead algae using dissolved oxygen." },
    { q: "Increased greenhouse gases in the atmosphere are linked to:", options: ["Climate change and rising global temperatures", "More nitrogen fixation in legumes only", "Shorter food chains with more energy", "Loss of all decomposers"], answer: 0, explain: "CO₂ and methane trap heat." },
    { q: "Conservation aims to:", options: ["Protect species and habitats and maintain biodiversity", "Remove all predators from ecosystems", "Increase pollution of rivers", "Stop all nutrient cycles"], answer: 0, explain: "Methods include reserves, laws and education." },
    { q: "A herbivore is an animal that:", options: ["Eats only plants", "Eats only other animals", "Produces glucose by photosynthesis", "Fixes nitrogen in the soil"], answer: 0, explain: "Herbivores are primary consumers." },
    { q: "A carnivore feeds mainly on:", options: ["Other animals", "Only carbon dioxide", "Sunlight directly", "Rocks and minerals"], answer: 0, explain: "Carnivores are secondary or tertiary consumers." },
    { q: "An omnivore eats:", options: ["Both plants and animals", "Only decomposers", "Only nitrates from soil", "Nothing — it photosynthesises"], answer: 0, explain: "Humans and bears are examples." },
    { q: "In the chain grass → rabbit → fox, grass is the:", options: ["Producer", "Tertiary consumer", "Decomposer", "Top carnivore only"], answer: 0, explain: "Grass traps light energy." },
    { q: "In the same chain, the frog would be a consumer if the chain were grass → insect → frog → hawk. The frog is a:", options: ["Secondary consumer (carnivore eating herbivore)", "Producer", "Decomposer only", "Abiotic factor"], answer: 0, explain: "It eats the primary consumer." },
    { q: "A snake eating a mouse is an example of:", options: ["Predation", "Mutualism", "Nitrogen fixation", "Photosynthesis"], answer: 0, explain: "Snake is predator; mouse is prey." },
    { q: "The organism that is hunted and eaten is called the:", options: ["Prey", "Producer", "Decomposer", "Habitat"], answer: 0, explain: "Prey provide energy for predators." },
    { q: "Biodiversity means:", options: ["The variety of living organisms in an area", "Only one species in an ecosystem", "The amount of carbon dioxide only", "Lack of any competition"], answer: 0, explain: "High biodiversity improves ecosystem stability." },
    { q: "Plants in a dense forest may compete for:", options: ["Light, water and minerals", "Only oxygen in the air", "Prey animals", "Carbon dioxide they produce themselves only"], answer: 0, explain: "Interspecific and intraspecific competition occur." },
    { q: "Animals may compete for:", options: ["Food, mates and territory", "Only sunlight used in photosynthesis", "Nitrates they cannot absorb", "Carbon fixed only in fossils"], answer: 0, explain: "Competition limits population size." },
    { q: "Symbiosis refers to:", options: ["Close, long-term interaction between different species", "Only predation in the ocean", "Movement of water in xylem", "Digestion in the stomach only"], answer: 0, explain: "Includes mutualism, parasitism and commensalism." },
    { q: "Energy available to a tertiary consumer is usually less than to a producer because:", options: ["Energy is lost at each lower trophic level", "Producers eat carnivores", "Heat is gained at every level", "Photosynthesis stores no energy"], answer: 0, explain: "Typically about 10% passes to the next level." },
    { q: "A trophic level indicates:", options: ["An organism's position in a food chain", "The habitat of a decomposer only", "The pH of soil", "The speed of nerve impulses"], answer: 0, explain: "Producer = level 1; primary consumer = level 2, etc." },
    { q: "In commensalism one organism benefits and the other:", options: ["Is neither helped nor harmed significantly", "Always dies immediately", "Must be a producer", "Fixes all atmospheric nitrogen"], answer: 0, explain: "Example: barnacles on a whale." },
    { q: "Approximately what percentage of energy is often transferred to the next trophic level?", options: ["About 10%", "About 90%", "100%", "0% — no energy ever transfers"], answer: 0, explain: "Most energy is lost as heat in respiration." },
    { q: "Nitrifying bacteria in the nitrogen cycle:", options: ["Convert ammonia to nitrates plants can absorb", "Remove all carbon from the atmosphere", "Eat only tertiary consumers", "Carry out photosynthesis in animals"], answer: 0, explain: "Part of converting nitrogen to usable forms." },
    { q: "Protected national parks are an example of:", options: ["Conservation of habitats and species", "Eutrophication", "Parasitism", "Combustion of fossil fuels"], answer: 0, explain: "Legal protection reduces human damage." }
  ],
  theory: [
    {
      q: "Define ecosystem, population, and community.",
      marks: 5,
      points: [
        "Ecosystem: community + abiotic environment interacting",
        "Population: one species in an area at one time",
        "Community: all species populations in same area",
        "Clear distinction between the three terms"
      ]
    },
    {
      q: "Describe food chains and food webs.",
      marks: 5,
      points: [
        "Food chain: linear energy transfer",
        "Trophic levels: producer, consumers",
        "Arrows show direction of energy flow",
        "Food web: many linked chains",
        "More realistic than single chain"
      ]
    },
    {
      q: "Explain types of symbiotic relationships.",
      marks: 6,
      points: [
        "Mutualism: both benefit — example",
        "Parasitism: one benefits, host harmed — example",
        "Commensalism: one benefits, other unaffected",
        "Contrast with predation and competition"
      ]
    },
    {
      q: "Describe the carbon cycle and its importance.",
      marks: 6,
      points: [
        "CO₂ removed by photosynthesis",
        "Returned by respiration and decomposition",
        "Combustion of fuels adds CO₂",
        "Carbon in food chains",
        "Link to climate change if CO₂ rises"
      ]
    },
    {
      q: "Explain human impacts on ecosystems and how conservation helps.",
      marks: 6,
      points: [
        "Deforestation, pollution, climate change",
        "Eutrophication from fertilisers",
        "Loss of biodiversity",
        "Conservation: protected areas, laws, education, recycling",
        "Balanced conclusion"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "Explain why a food chain rarely has more than five trophic levels. [3]",
      marks: 3,
      answer: "Energy lost at each level in respiration, movement and heat.\nOnly about 10% passes to the next level.\nNot enough energy left to support more levels."
    },
    {
      q: "Explain how fertiliser runoff can cause eutrophication. [5]",
      marks: 5,
      answer: "Excess nitrates/phosphates enter water.\nAlgae grow rapidly (algal bloom).\nLight blocked; plants below die.\nDecomposers use oxygen; fish die from lack of oxygen."
    }
  ]
};

(function mergeEcologyChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES["ecology"] || {};
  BIOLOGY_5090_NOTES["ecology"] = Object.assign({}, base, ECOLOGY_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ["ecology"] = {
      flashcards: ECOLOGY_CHAPTER_5090.flashcards,
      mcqs: ECOLOGY_CHAPTER_5090.mcqs,
      theory: ECOLOGY_CHAPTER_5090.theory
    };
  }
})();

/**
 * Biology 5090 - Chapter 2 Classification (full study content)
 */
const CLASSIFICATION_CHAPTER_5090 = {
  visualBlocks: [
    { type: "hierarchy" },
    { type: "cellType" },
    { type: "kingdomGrid" },
    { type: "vertebrateGrid" },
    { type: "dichotomousKey" }
  ],
  learningObjectives: [
    "Explain why organisms are classified.",
    "Define and use the terms species, classification, and binomial nomenclature.",
    "Describe the main features of the five kingdoms.",
    "Identify characteristics of vertebrate groups.",
    "Identify characteristics of major arthropod groups.",
    "Use classification keys to identify organisms.",
    "Compare different groups of living organisms."
  ],
  summary: [
    "Classification groups organisms according to similarities and differences.",
    "A species is a group capable of producing fertile offspring.",
    "Binomial nomenclature uses two names: genus and species.",
    "The five kingdoms are Prokaryotae, Protoctista, Fungi, Plantae, and Animalia.",
    "Vertebrates include fish, amphibians, reptiles, birds, and mammals.",
    "Arthropods include insects, arachnids, crustaceans, and myriapods.",
    "Classification keys help identify organisms accurately."
  ],
  examples: [
    { title: "Example 1", text: "Human scientific name: Homo sapiens (genus Homo, species sapiens)." },
    { title: "Example 2", text: "A frog belongs to the amphibian group because it lives both in water and on land." },
    { title: "Example 3", text: "A spider belongs to arachnids because it has eight legs and two body sections." }
  ],
  comparisonTable: {
    headers: ["Kingdom", "Cell type", "Nutrition / key feature"],
    rows: [
      ["Prokaryotae", "No true nucleus", "Bacteria; cell wall"],
      ["Protoctista", "Mostly unicellular eukaryotes", "Plant-like or animal-like"],
      ["Fungi", "Eukaryotic", "Chitin walls; saprotrophic"],
      ["Plantae", "Multicellular", "Cellulose walls; photosynthesis"],
      ["Animalia", "Multicellular", "No cell wall; ingest food"]
    ]
  },
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "There are millions of different organisms on Earth. Scientists classify organisms into groups to make them easier to study and identify. Classification helps us understand relationships between living things and allows scientists worldwide to communicate using a common system."
      ]
    },
    {
      title: "What is classification?",
      subsections: [
        {
          title: "Definition",
          paragraphs: ["Classification is the process of arranging organisms into groups based on their similarities and differences."],
          bulletList: [
            "Makes identification easier",
            "Shows relationships between organisms",
            "Helps scientists communicate effectively",
            "Prevents confusion caused by common names"
          ]
        },
        {
          title: "Example",
          paragraphs: ["The animal known as a cougar may also be called a mountain lion or puma. Scientific names avoid this confusion."]
        }
      ]
    },
    {
      title: "Species",
      paragraphs: [
        "A species is a group of organisms that can reproduce together and produce fertile offspring.",
        "Humans belong to one species; domestic cats belong to a different species.",
        "Different species usually cannot produce fertile offspring."
      ]
    },
    {
      title: "Binomial nomenclature",
      numberedList: [
        "First name = genus",
        "Second name = species",
        "Genus begins with a capital letter",
        "Species begins with a lowercase letter",
        "Names are written in italics when printed (underlined when handwritten)"
      ],
      subsections: [
        {
          title: "Example: Homo sapiens",
          paragraphs: ["Homo = genus", "sapiens = species"]
        }
      ]
    },
    {
      title: "The five kingdoms",
      subsections: [
        {
          title: "Kingdom Prokaryotae",
          bulletList: ["Single-celled", "No true nucleus", "DNA free in cytoplasm", "Cell wall present"],
          paragraphs: ["Examples: bacteria."]
        },
        {
          title: "Kingdom Protoctista",
          bulletList: ["Mostly single-celled", "Have a nucleus", "Some plant-like, some animal-like"],
          paragraphs: ["Examples: Amoeba, Paramecium."]
        },
        {
          title: "Kingdom Fungi",
          bulletList: ["Cell walls made of chitin", "Saprotrophic nutrition", "Do not photosynthesise"],
          paragraphs: ["Examples: mushrooms, yeast, moulds."]
        },
        {
          title: "Kingdom Plantae",
          bulletList: ["Multicellular", "Cell walls of cellulose", "Contain chloroplasts", "Photosynthesise"],
          paragraphs: ["Examples: grass, trees, ferns."]
        },
        {
          title: "Kingdom Animalia",
          bulletList: ["Multicellular", "No cell walls", "No chloroplasts", "Feed on other organisms"],
          paragraphs: ["Examples: humans, fish, birds."]
        }
      ]
    },
    {
      title: "Vertebrates",
      paragraphs: ["Vertebrates are animals with a backbone."],
      subsections: [
        { title: "Fish", bulletList: ["Live in water", "Have scales", "Breathe through gills", "Lay eggs"], paragraphs: ["Examples: salmon, tuna."] },
        { title: "Amphibians", bulletList: ["Live on land and in water", "Moist skin", "Lay eggs in water"], paragraphs: ["Examples: frogs, toads."] },
        { title: "Reptiles", bulletList: ["Dry scaly skin", "Lay leathery eggs", "Breathe through lungs"], paragraphs: ["Examples: snakes, lizards."] },
        { title: "Birds", bulletList: ["Feathers", "Wings", "Beak", "Lay hard-shelled eggs"], paragraphs: ["Examples: eagle, sparrow."] },
        { title: "Mammals", bulletList: ["Hair or fur", "Produce milk", "Most give birth to live young", "Warm-blooded"], paragraphs: ["Examples: humans, cats, whales."] }
      ]
    },
    {
      title: "Arthropods",
      paragraphs: ["Arthropods are invertebrates with jointed legs and an exoskeleton."],
      subsections: [
        { title: "Insects", bulletList: ["Three body sections", "Six legs", "Usually one pair of antennae"], paragraphs: ["Examples: butterfly, ant."] },
        { title: "Arachnids", bulletList: ["Eight legs", "Two body sections", "No antennae"], paragraphs: ["Examples: spider, scorpion."] },
        { title: "Crustaceans", bulletList: ["More than four pairs of legs", "Two pairs of antennae", "Mostly aquatic"], paragraphs: ["Examples: crab, lobster."] },
        { title: "Myriapods", bulletList: ["Many body segments", "Many legs"], paragraphs: ["Examples: centipede, millipede."] }
      ]
    },
    {
      title: "Classification keys",
      paragraphs: [
        "A classification key is a series of questions used to identify organisms.",
        "A dichotomous key gives two choices at each step until the organism is identified.",
        "Example path: Has wings? Yes -> step 2; No wings -> step 3."
      ]
    }
  ],
  definitions: [
    { term: "Classification", definition: "Grouping organisms according to similarities and differences." },
    { term: "Species", definition: "Organisms that can reproduce to produce fertile offspring." },
    { term: "Binomial nomenclature", definition: "Two-part scientific naming system (genus and species)." },
    { term: "Kingdom", definition: "A major classification group." },
    { term: "Vertebrate", definition: "Animal with a backbone." },
    { term: "Invertebrate", definition: "Animal without a backbone." },
    { term: "Arthropod", definition: "Invertebrate with jointed legs and an exoskeleton." },
    { term: "Dichotomous key", definition: "Identification key using two choices at each stage." },
    { term: "Genus", definition: "First part of a scientific name; capital letter." },
    { term: "Exoskeleton", definition: "Hard external covering on arthropods." },
    { term: "Saprotroph", definition: "Organism that feeds on dead organic matter." },
    { term: "Chitin", definition: "Material in fungal cell walls." }
  ],
  syllabusPoints: [
    { code: "2.1", title: "Why organisms are classified", content: "Classification arranges organisms into groups by similarities and differences. It makes identification easier, shows relationships, and gives a universal system so scientists avoid confusion from different common names." },
    { code: "2.2", title: "Species and binomial nomenclature", content: "A species can interbreed and produce fertile offspring. Binomial nomenclature uses genus (capital) and species (lowercase), e.g. Homo sapiens. Names are italicised when printed." },
    { code: "2.3", title: "The five kingdoms", content: "Prokaryotae (bacteria, no nucleus), Protoctista (mostly unicellular eukaryotes), Fungi (chitin walls, saprotrophs), Plantae (cellulose, photosynthesis), Animalia (multicellular, ingest food)." },
    { code: "2.4", title: "Vertebrate groups", content: "Fish (gills, scales), amphibians (moist skin, eggs in water), reptiles (dry scales, leathery eggs), birds (feathers, hard-shelled eggs), mammals (hair, milk, warm-blooded)." },
    { code: "2.5", title: "Arthropod groups", content: "Insects (6 legs, 3 body parts), arachnids (8 legs, 2 body parts), crustaceans (aquatic, 2 antennae pairs), myriapods (many segments and legs)." },
    { code: "2.6", title: "Dichotomous keys", content: "Keys use pairs of contrasting features at each step. The user chooses one alternative until the organism is identified. Based on observable features." },
    { code: "2.7", title: "Viruses", content: "Viruses are not in the five kingdoms. They need a host to reproduce and consist of a protein coat around DNA or RNA." }
  ],
  quickRecap: "Classification groups organisms by similarities and differences.\nSpecies: interbreed, fertile offspring.\nBinomial name: Genus species (Homo sapiens).\nFive kingdoms: Prokaryotae, Protoctista, Fungi, Plantae, Animalia.\nVertebrates: fish, amphibians, reptiles, birds, mammals.\nArthropods: insects (6 legs), arachnids (8 legs), crustaceans, myriapods.\nDichotomous keys: two choices per step.",
  examTips: "Write binomial names with genus capitalised and species lowercase. State two features per kingdom. For vertebrates and arthropods, give observable features and an example. Work dichotomous keys step by step in exams. Viruses are not a kingdom.",
  flashcards: [
    { q: "What is classification?", a: "Grouping organisms according to similarities and differences." },
    { q: "What is a species?", a: "A group capable of producing fertile offspring." },
    { q: "What is binomial nomenclature?", a: "Two-part scientific naming system (genus and species)." },
    { q: "Which kingdom contains bacteria?", a: "Prokaryotae." },
    { q: "Which kingdom contains mushrooms?", a: "Fungi." },
    { q: "Which kingdom contains humans?", a: "Animalia." },
    { q: "Which kingdom contains trees?", a: "Plantae." },
    { q: "What is a vertebrate?", a: "An animal with a backbone." },
    { q: "Name one amphibian.", a: "Frog (or toad)." },
    { q: "Name one reptile.", a: "Snake (or lizard)." },
    { q: "Name one mammal.", a: "Cat (or human, whale)." },
    { q: "How many legs do insects have?", a: "Six." },
    { q: "How many legs do arachnids have?", a: "Eight." },
    { q: "What is an exoskeleton?", a: "A hard external covering." },
    { q: "What is a dichotomous key?", a: "An identification key with two choices at each step." }
  ],
  mcqs: [
    { q: "Why do scientists classify organisms?", options: ["To make identification and study easier", "To increase population size", "To improve nutrition in ecosystems", "To increase growth rate of cells"], answer: 0, explain: "Classification organises living organisms for study, identification, and communication." },
    { q: "A species is a group of organisms that:", options: ["Look identical only", "Can reproduce and produce fertile offspring", "Always live in the same habitat", "Eat exactly the same food"], answer: 1, explain: "Members of a species can interbreed and their offspring are fertile." },
    { q: "Which kingdom contains bacteria?", options: ["Animalia", "Plantae", "Prokaryotae", "Fungi"], answer: 2, explain: "Bacteria are prokaryotes in Kingdom Prokaryotae." },
    { q: "Which kingdom contains mushrooms?", options: ["Fungi", "Plantae", "Animalia", "Protoctista"], answer: 0, explain: "Mushrooms are fungi with chitin cell walls." },
    { q: "The two-part scientific naming system is called:", options: ["Taxonomy only", "Classification only", "Binomial nomenclature", "Genetics"], answer: 2, explain: "Each organism has a genus and species name." },
    { q: "In binomial nomenclature, the first name is the:", options: ["Genus", "Species", "Kingdom", "Phylum"], answer: 0, explain: "The genus is written first with a capital letter." },
    { q: "Humans (Homo sapiens) belong to which kingdom?", options: ["Plantae", "Animalia", "Fungi", "Protoctista"], answer: 1, explain: "Humans are multicellular heterotrophs in Animalia." },
    { q: "Which feature is typical of plants in Kingdom Plantae?", options: ["Chitin cell walls", "Saprotrophic nutrition", "Chloroplasts and photosynthesis", "No nucleus"], answer: 2, explain: "Plants have cellulose walls and chloroplasts." },
    { q: "Fungal cell walls are made mainly of:", options: ["Cellulose", "Chitin", "Haemoglobin", "Starch only"], answer: 1, explain: "Fungi have chitin walls, not cellulose." },
    { q: "Amoeba is usually classified in:", options: ["Prokaryotae", "Protoctista", "Plantae", "Animalia only"], answer: 1, explain: "Amoeba is a unicellular eukaryote in Protoctista." },
    { q: "Which group of vertebrates breathes using gills?", options: ["Mammals", "Birds", "Fish", "Reptiles"], answer: 2, explain: "Fish use gills to exchange gases in water." },
    { q: "Amphibians are often identified by:", options: ["Feathers and beaks", "Moist skin and life in water and on land", "Dry scaly skin only", "Hair and milk production"], answer: 1, explain: "Amphibians have moist skin and breed in water." },
    { q: "Reptiles typically have:", options: ["Moist skin with no scales", "Dry scaly skin and leathery eggs", "Gills throughout life", "Six jointed legs"], answer: 1, explain: "Reptiles have dry scales and lay leathery eggs on land." },
    { q: "Which feature is characteristic of birds?", options: ["Milk production", "Feathers and wings", "Moist permeable skin", "Eight legs"], answer: 1, explain: "Birds have feathers, wings, and beaks." },
    { q: "Mammals are distinguished by features such as:", options: ["Scales and gills", "Hair or fur and milk production", "Exoskeleton and eight legs", "Chitin cell walls"], answer: 1, explain: "Mammals have hair/fur and feed young with milk." },
    { q: "A whale is classified as a:", options: ["Fish", "Reptile", "Mammal", "Amphibian"], answer: 2, explain: "Whales are warm-blooded mammals that breathe with lungs." },
    { q: "An eagle belongs to which vertebrate group?", options: ["Fish", "Amphibian", "Reptile", "Bird"], answer: 3, explain: "Eagles have feathers and lay hard-shelled eggs." },
    { q: "A frog is an example of a(n):", options: ["Amphibian", "Reptile", "Fish", "Arachnid"], answer: 0, explain: "Frogs live on land and in water with moist skin." },
    { q: "A snake is classified as a:", options: ["Amphibian", "Reptile", "Insect", "Crustacean"], answer: 1, explain: "Snakes have dry scales and lungs." },
    { q: "Salmon is an example of a:", options: ["Bird", "Fish", "Mammal", "Myriapod"], answer: 1, explain: "Salmon live in water and have gills and scales." },
    { q: "Arthropods are invertebrates with:", options: ["A backbone and hair", "Jointed legs and an exoskeleton", "Cellulose cell walls", "No cells"], answer: 1, explain: "Arthropods have jointed legs and a hard outer skeleton." },
    { q: "How many legs do adult insects have?", options: ["Six", "Eight", "Ten", "Four"], answer: 0, explain: "Insects have three pairs of legs (six legs)." },
    { q: "Spiders belong to which arthropod group?", options: ["Insects", "Arachnids", "Crustaceans", "Myriapods"], answer: 1, explain: "Spiders are arachnids with eight legs." },
    { q: "Crabs and lobsters are examples of:", options: ["Insects", "Arachnids", "Crustaceans", "Birds"], answer: 2, explain: "Crustaceans are mostly aquatic with two pairs of antennae." },
    { q: "Centipedes and millipedes are:", options: ["Insects", "Arachnids", "Crustaceans", "Myriapods"], answer: 3, explain: "Myriapods have many body segments and many legs." },
    { q: "A butterfly is classified as an:", options: ["Arachnid", "Insect", "Crustacean", "Fish"], answer: 1, explain: "Butterflies have six legs and three body sections." },
    { q: "A lobster is a:", options: ["Insect", "Myriapod", "Crustacean", "Reptile"], answer: 2, explain: "Lobsters are aquatic crustaceans." },
    { q: "Vertebrates are animals that possess:", options: ["An exoskeleton only", "A backbone", "Chloroplasts", "A cell wall of chitin"], answer: 1, explain: "Vertebrates have a vertebral column (backbone)." },
    { q: "Invertebrates are animals that:", options: ["Always live in water", "Lack a backbone", "Always photosynthesise", "Have no cells"], answer: 1, explain: "Invertebrates do not have a backbone." },
    { q: "A dichotomous classification key:", options: ["Uses only one choice per step", "Uses two choices at each step", "Names species in Latin only", "Measures temperature"], answer: 1, explain: "Each step offers two alternative features." },
    { q: "The word dichotomous means:", options: ["Many choices", "Two choices", "No choices", "Random choices"], answer: 1, explain: "Di- means two; each couplet has two options." },
    { q: "In Homo sapiens, the genus is written:", options: ["Homo with a capital H", "sapiens with a capital S", "In lowercase only", "As one word without capitals"], answer: 0, explain: "Genus starts with a capital letter; species is lowercase." },
    { q: "The species name in binomial nomenclature is:", options: ["Always capitalised", "Written in lowercase", "The first name only", "Optional"], answer: 1, explain: "The second name (species) uses a lowercase letter." },
    { q: "When printed, scientific names are usually:", options: ["Underlined only in exams", "Written in italics", "Written in bold capitals", "Written as numbers"], answer: 1, explain: "Italic type (or underline when handwriting) is standard." },
    { q: "A kingdom in classification is:", options: ["A small group of one cell", "A large major group of organisms", "The same as a species", "Only used for viruses"], answer: 1, explain: "Kingdom is one of the largest groups, e.g. Animalia." },
    { q: "An exoskeleton is:", options: ["A soft internal skeleton", "A hard external covering", "A type of chloroplast", "A scientific name"], answer: 1, explain: "Arthropods have a hard covering outside the body." },
    { q: "Classification helps scientists to:", options: ["Hide species names", "Show relationships between organisms", "Remove all bacteria", "Stop evolution"], answer: 1, explain: "Similar organisms are grouped to show relatedness." },
    { q: "Organisms are placed in groups mainly according to:", options: ["Their colour only", "Similarities and differences", "Their age in years", "Random selection"], answer: 1, explain: "Shared features are used to classify organisms." },
    { q: "Which organism is a saprotroph?", options: ["Grass", "Mushroom", "Human", "Amoeba in sunlight only"], answer: 1, explain: "Fungi such as mushrooms feed on dead organic matter by saprotrophic nutrition." },
    { q: "Viruses are difficult to place in the five kingdoms because they:", options: ["Are too large", "Cannot reproduce without a host cell", "Always have chloroplasts", "Have cellulose walls"], answer: 1, explain: "Viruses need host cells to reproduce and are not classified as a kingdom." }
  ],
  theory: [
    {
      q: "Define the term species and explain why scientific names are used.",
      marks: 5,
      points: [
        "Species: group of organisms that can reproduce together and produce fertile offspring",
        "Common names differ between countries and regions (e.g. cougar, puma)",
        "Binomial nomenclature gives a universal two-part Latin name",
        "Genus and species; genus capitalised, species lowercase",
        "Avoids confusion in scientific communication"
      ]
    },
    {
      q: "Describe the characteristics of Kingdom Plantae and Kingdom Animalia.",
      marks: 6,
      points: [
        "Plantae: multicellular, cellulose cell walls, chloroplasts, photosynthesise",
        "Plantae examples: trees, grass",
        "Animalia: multicellular, no cell wall, no chloroplasts",
        "Animalia ingest food (heterotrophic)",
        "Animalia examples: humans, insects, fish"
      ]
    },
    {
      q: "Compare the characteristics of fish, amphibians, reptiles, birds and mammals.",
      marks: 6,
      points: [
        "All vertebrates have a backbone",
        "Fish: gills, scales, lay eggs in water",
        "Amphibians: moist skin, eggs in water, live on land and in water",
        "Reptiles: dry scales, leathery eggs, lungs",
        "Birds: feathers, wings, hard-shelled eggs",
        "Mammals: hair/fur, milk, mostly live young, warm-blooded"
      ]
    },
    {
      q: "Explain how insects differ from arachnids and crustaceans.",
      marks: 5,
      points: [
        "All are arthropods with jointed legs and exoskeleton",
        "Insects: 6 legs, 3 body sections, usually 1 pair antennae",
        "Arachnids: 8 legs, 2 body sections, no antennae (e.g. spider)",
        "Crustaceans: often aquatic, 2 pairs antennae, more than 4 pairs legs (e.g. crab)"
      ]
    },
    {
      q: "Describe how a dichotomous key is used to identify organisms.",
      marks: 4,
      points: [
        "Series of steps with pairs of contrasting statements (couplets)",
        "At each step choose one of two alternatives",
        "Follow the path indicated until the organism is named",
        "Based on observable features (e.g. wings present or absent)"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "Explain why the binomial naming system is useful for scientists. [3]",
      marks: 3,
      answer: "Universal names understood worldwide.\nAvoids confusion from different common names.\nShows relatedness (same genus = closely related species)."
    },
    {
      q: "State two ways in which fungi differ from plants. [2]",
      marks: 2,
      answer: "Fungi have chitin cell walls; plants have cellulose.\nFungi do not photosynthesise; plants contain chlorophyll and photosynthesise."
    }
  ]
};

(function mergeClassificationChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES.classification || {};
  BIOLOGY_5090_NOTES.classification = Object.assign({}, base, CLASSIFICATION_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ.classification = {
      flashcards: CLASSIFICATION_CHAPTER_5090.flashcards,
      mcqs: CLASSIFICATION_CHAPTER_5090.mcqs,
      theory: CLASSIFICATION_CHAPTER_5090.theory
    };
  }
})();

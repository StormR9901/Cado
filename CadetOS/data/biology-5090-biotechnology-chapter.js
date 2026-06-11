/**
 * Biology 5090 - Chapter 18 Biotechnology and Genetic Modification (full study content)
 */
const BIOTECHNOLOGY_CHAPTER_5090 = {
  learningObjectives: [
    "Define biotechnology and genetic modification.",
    "Describe traditional and modern uses of biotechnology.",
    "Explain the process of genetic engineering at a basic level.",
    "Understand the role of enzymes in genetic modification.",
    "Describe applications of genetically modified organisms (GMOs).",
    "Evaluate advantages and disadvantages of GM crops and organisms.",
    "Understand fermentation and its uses in industry.",
    "Explain ethical and environmental concerns of biotechnology."
  ],
  summary: [
    "Biotechnology uses living organisms or their systems to make useful products.",
    "Traditional examples: yeast in bread, bacteria in yogurt and cheese.",
    "Genetic modification changes an organism's DNA to give new characteristics.",
    "Genetic engineering: isolate gene → cut vector with restriction enzyme → insert with ligase → transform host.",
    "GM bacteria produce human insulin; GM crops may resist pests or herbicides.",
    "Fermentation is microbial breakdown of sugars, often anaerobic (alcohol, CO₂ in bread).",
    "Tissue culture produces disease-free, identical plants in sterile conditions.",
    "GM technology brings benefits but raises ethical and environmental concerns."
  ],
  examples: [
    { title: "Example 1", text: "Genetically modified bacteria produce human insulin for diabetes treatment." },
    { title: "Example 2", text: "GM maize may produce Bt toxin to resist insect pests." },
    { title: "Example 3", text: "Yeast ferments sugar in bread dough, releasing CO₂ to make it rise." }
  ],
  comparisonTable: {
    headers: ["Aspect", "Advantages of GM crops", "Disadvantages / concerns"],
    rows: [
      ["Yield and farming", "Higher yield; less pesticide needed for some GM crops", "Cost to farmers; dependence on seed companies"],
      ["Environment", "Can reduce chemical sprays if pest-resistant", "Gene flow to wild relatives; impact on biodiversity"],
      ["Safety and ethics", "Improved nutrition possible in future varieties", "Long-term health effects debated; allergenicity concerns"],
      ["Ecology", "Disease-resistant varieties", "Resistant pests may evolve; ecosystem effects uncertain"]
    ]
  },
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "Biotechnology applies living organisms, cells or biological systems to create products. Genetic modification deliberately alters DNA so organisms gain useful new traits."
      ]
    },
    {
      title: "Biotechnology",
      bulletList: [
        "Definition: use of microorganisms, plants or animal cells to produce useful products",
        "Traditional: bread (yeast), yogurt and cheese (bacteria)",
        "Modern: genetic engineering, tissue culture, industrial insulin production"
      ]
    },
    {
      title: "Fermentation",
      bulletList: [
        "Breakdown of sugars by microorganisms — often anaerobic",
        "Products: ethanol (alcohol), carbon dioxide (bread rises), lactic acid (yogurt)",
        "Needs: suitable temperature, sugar substrate, sometimes anaerobic conditions",
        "Industrial fermenters control temperature, pH, oxygen, nutrients and sterility"
      ]
    },
    {
      title: "Genetic modification and engineering",
      paragraphs: ["Genetic modification changes DNA. Genetic engineering is a modern method to transfer genes between species."],
      numberedList: [
        "Identify and isolate the desired gene",
        "Cut open a vector (e.g. bacterial plasmid) using restriction enzymes",
        "Insert the gene into the vector using DNA ligase",
        "Transfer recombinant DNA into host cells (e.g. bacteria)",
        "Host expresses the new trait; product harvested (e.g. insulin)"
      ]
    },
    {
      title: "Enzymes in genetic engineering",
      bulletList: [
        "Restriction enzymes cut DNA at specific base sequences",
        "DNA ligase joins DNA fragments (gene into plasmid)",
        "Plasmid acts as a vector to carry the gene into the host"
      ]
    },
    {
      title: "Applications",
      bulletList: [
        "Human insulin from GM bacteria — treats diabetes",
        "Pest-resistant GM crops (e.g. Bt toxin in maize)",
        "Herbicide-resistant crops",
        "Disease-resistant plant varieties",
        "Penicillin from Penicillium in controlled fermenters"
      ]
    },
    {
      title: "Tissue culture",
      bulletList: [
        "Small pieces of plant tissue grown in sterile nutrient medium",
        "Produces many identical, disease-free plants quickly",
        "Used in conservation and commercial crop propagation"
      ]
    },
    {
      title: "Ethical and environmental issues",
      bulletList: [
        "Safety of GM foods and long-term health effects",
        "Gene transfer to wild plants or other organisms",
        "Biodiversity and resistant pest evolution",
        "Balanced evaluation needed in exam answers"
      ]
    }
  ],
  definitions: [
    { term: "Biotechnology", definition: "Use of living organisms or their systems to produce useful products." },
    { term: "Genetic modification", definition: "Altering the DNA of an organism to give new characteristics." },
    { term: "Genetic engineering", definition: "Transfer of genes from one organism to another using biotechnology techniques." },
    { term: "Fermentation", definition: "Breakdown of substances by microorganisms, often sugars without oxygen." },
    { term: "GMO", definition: "Genetically modified organism with altered DNA." },
    { term: "Restriction enzyme", definition: "Enzyme that cuts DNA at specific sequences." },
    { term: "DNA ligase", definition: "Enzyme that joins DNA fragments together." },
    { term: "Plasmid", definition: "Small circular DNA in bacteria used as a cloning vector." },
    { term: "Vector", definition: "Carrier DNA molecule used to introduce a gene into a host cell." },
    { term: "Tissue culture", definition: "Growing plants from small tissue samples in sterile conditions." }
  ],
  syllabusPoints: [
    { code: "18.1", title: "Genetic engineering steps", content: "Isolate gene; restriction enzyme cuts plasmid; ligase inserts gene; transform bacterium; select and grow transformants." },
    { code: "18.2", title: "Applications", content: "Insulin, GM crops, enzymes, improved food crops." },
    { code: "18.3", title: "Fermenters", content: "Controlled temperature, pH, aeration, nutrients, stirring, sterility." },
    { code: "18.4", title: "Penicillin production", content: "Penicillium in batch fermenters; extraction and purification; avoid contamination." },
    { code: "18.5", title: "Ethics", content: "Health, environment, gene flow, access to medicines — balanced arguments." }
  ],
  quickRecap: "Biotech = organisms make products.\nGM = changed DNA.\nSteps: gene → cut plasmid (restriction enzyme) → ligase → bacterium → product.\nFermentation = microbes + sugar (often anaerobic).\nGM crops: yield/pest resistance vs ethics/environment.",
  examTips: "Name restriction enzyme (cuts) and ligase (joins). Give insulin or Bt crop as examples. For fermenters state temperature, pH and sterility with reasons. Ethics answers must include both benefits and risks.",
  flashcards: [
    { q: "What is biotechnology?", a: "Use of living organisms or their systems to make useful products." },
    { q: "What is genetic modification?", a: "Changing the DNA of an organism to give new characteristics." },
    { q: "What is fermentation?", a: "Breakdown of sugars by microorganisms, often without oxygen." },
    { q: "What is a GMO?", a: "A genetically modified organism with altered DNA." },
    { q: "What do restriction enzymes do?", a: "Cut DNA at specific base sequences." },
    { q: "What does DNA ligase do?", a: "Joins DNA fragments together." },
    { q: "Give an example of a GM crop benefit.", a: "Pest resistance or higher yield with less pesticide." },
    { q: "How is human insulin produced commercially?", a: "By genetically modified bacteria containing the human insulin gene." },
    { q: "What is tissue culture?", a: "Growing many plants from small tissue samples in sterile conditions." },
    { q: "Name a traditional biotechnology example.", a: "Yeast in bread making or bacteria in yogurt production." },
    { q: "What gas does yeast produce in bread dough?", a: "Carbon dioxide, which makes the bread rise." },
    { q: "What is a plasmid used for?", a: "As a vector to carry a gene into a bacterial host." },
    { q: "One disadvantage of GM crops?", a: "Environmental risk, ethical concerns or possible gene flow." },
    { q: "Why must fermenters be kept sterile?", a: "To prevent contamination by unwanted microorganisms." },
    { q: "What main concern is raised about GM foods?", a: "Ethical issues, environmental impact and long-term safety debate." }
  ],
  mcqs: [
    { q: "Biotechnology is best defined as:", options: ["The study of rock formations only", "The use of living organisms or their systems to produce useful products", "The movement of animals in ecosystems", "Photosynthesis in green leaves only"], answer: 1, explain: "Biotechnology applies biology to make foods, medicines and other products." },
    { q: "Genetic modification involves:", options: ["Only changing proteins in the stomach", "Altering the DNA of an organism to give new characteristics", "Digestion of starch in the mouth", "Movement of water in xylem only"], answer: 1, explain: "GM changes the genetic instructions in an organism." },
    { q: "Fermentation by microorganisms often involves:", options: ["Breakdown of sugars, frequently in the absence of oxygen", "Only photosynthesis in chloroplasts", "Active transport in root hairs only", "Ultrafiltration in the kidney"], answer: 0, explain: "Many fermentations are anaerobic, e.g. alcohol or lactic acid production." },
    { q: "Yeast is used in bread making mainly because it:", options: ["Produces carbon dioxide that makes dough rise", "Fixes nitrogen from the air", "Photosynthesises inside the loaf", "Digests gluten with restriction enzymes"], answer: 0, explain: "Yeast ferments sugar and releases CO₂ gas." },
    { q: "Human insulin for treating diabetes is commonly produced using:", options: ["Unmodified wild plants only", "Genetically modified bacteria with the human insulin gene", "Only animal blood without bacteria", "Fungi that photosynthesise"], answer: 1, explain: "GM bacteria express human insulin, which is extracted and purified." },
    { q: "Restriction enzymes in genetic engineering:", options: ["Join two DNA fragments together", "Cut DNA at specific base sequences", "Copy RNA into protein directly", "Destroy all bacterial cell walls randomly"], answer: 1, explain: "They create 'sticky ends' so a gene can be inserted into a vector." },
    { q: "DNA ligase is used to:", options: ["Cut plasmids at random points", "Join DNA fragments such as a gene into a plasmid", "Digest food in the small intestine", "Produce oxygen in fermenters"], answer: 1, explain: "Ligase seals the gene into the vector DNA." },
    { q: "GM crops may be developed to:", options: ["Always grow more slowly than wild types", "Resist insect pests or herbicides", "Stop all photosynthesis", "Remove DNA from every cell"], answer: 1, explain: "Examples include Bt maize and herbicide-resistant varieties." },
    { q: "Plant tissue culture is used to:", options: ["Grow many identical, disease-free plants from small tissue samples", "Produce only animal hormones", "Create viruses in the laboratory", "Replace fermentation in yogurt"], answer: 0, explain: "Sterile conditions allow rapid cloning of desirable plants." },
    { q: "A common product of alcoholic fermentation is:", options: ["Oxygen gas for respiration", "Ethanol (alcohol)", "Starch stored in leaves", "Insulin protein only"], answer: 1, explain: "Yeast converts sugars to ethanol and CO₂ under anaerobic conditions." },
    { q: "A genetically modified organism (GMO) is one that:", options: ["Has never contained DNA", "Contains DNA that has been deliberately altered", "Can only reproduce asexually by law", "Is always harmful to humans"], answer: 1, explain: "GMOs have genes added, removed or changed." },
    { q: "One advantage of some GM crops is:", options: ["Guaranteed lower yield in all cases", "Higher yield or reduced need for some pesticides", "Complete removal of all genes", "No need for any water"], answer: 1, explain: "Pest-resistant crops may suffer less damage and need fewer sprays." },
    { q: "One disadvantage or concern about GM crops is:", options: ["They always increase biodiversity instantly", "Possible environmental risks and ethical debate", "They prevent all fermentation", "They remove the need for DNA in plants"], answer: 1, explain: "Gene flow and long-term effects are widely discussed." },
    { q: "Biotechnology makes use of:", options: ["Only non-living machines with no cells", "Living organisms such as bacteria, fungi or plant cells", "Rocks and minerals only", "Only human muscle tissue"], answer: 1, explain: "Microorganisms and cells are central to biotech processes." },
    { q: "Genetic engineering differs from traditional breeding because it:", options: ["Can transfer genes directly between species using laboratory techniques", "Never uses DNA", "Only works on rocks", "Removes all chromosomes from every organism"], answer: 0, explain: "Specific genes can be inserted using vectors and enzymes." },
    { q: "In bread making, yeast fermentation produces CO₂ which:", options: ["Makes the dough expand and rise", "Stops all enzyme activity permanently", "Produces glucose in the oven only", "Replaces the need for flour"], answer: 0, explain: "Bubbles of gas create the light texture of bread." },
    { q: "Industrial fermentation to make yogurt often involves:", options: ["Bacteria producing lactic acid from milk sugars", "Photosynthesis in plant roots", "Restriction enzymes cutting human DNA", "Only aerobic respiration in leaves"], answer: 0, explain: "Lactic acid bacteria ferment lactose in milk." },
    { q: "A GM crop designed to resist insect pests might:", options: ["Contain a gene for a toxin harmful to certain insects", "Have no DNA in its cells", "Be unable to photosynthesise", "Grow only without water"], answer: 0, explain: "Bt crops produce a protein toxic to specific pests." },
    { q: "The molecule that carries genetic instructions in genetic engineering is:", options: ["DNA", "Only water", "Oxygen gas", "Starch in chloroplasts only"], answer: 0, explain: "Genes are sections of DNA transferred in GM." },
    { q: "A human gene can be inserted into bacteria using:", options: ["A plasmid vector and enzymes such as restriction enzyme and ligase", "Only pollination from a flower", "Digestion in the stomach", "Transpiration in xylem vessels"], answer: 0, explain: "Recombinant plasmids are taken up by bacterial host cells." },
    { q: "Tissue culture allows rapid production of plants because:", options: ["Small explants grow into many clones in sterile medium", "It uses only animal cells", "It prevents all cell division", "It requires no nutrients"], answer: 0, explain: "Many plantlets form from one small piece of tissue." },
    { q: "After cutting DNA with a restriction enzyme, DNA ligase is needed to:", options: ["Join the gene to the vector DNA", "Cut the gene into amino acids", "Digest lipids in cell membranes", "Produce carbon dioxide in bread"], answer: 0, explain: "Ligase forms phosphodiester bonds between fragments." },
    { q: "Bacteria genetically engineered to make insulin are an example of:", options: ["Using GMOs to produce medicine", "Only traditional bread making", "Photosynthesis in roots", "Classification using dichotomous keys"], answer: 0, explain: "Transgenic bacteria express a human protein." },
    { q: "Ethical concerns about GM organisms include:", options: ["Safety of GM foods and environmental impact", "The colour of plant cell walls only", "Whether roots show hydrotropism", "The number of stomata on every leaf"], answer: 0, explain: "Society debates health, labelling and ecosystem effects." },
    { q: "Genes control traits in organisms because they:", options: ["Code for proteins that affect characteristics", "Store only water in the nucleus", "Prevent all cell division", "Replace chromosomes with lipids"], answer: 0, explain: "Changing a gene can change the phenotype." },
    { q: "Plants can be cloned quickly using:", options: ["Tissue culture in sterile conditions", "Only meiosis in animal gonads", "Pollination without any cells", "Fermentation of ethanol in humans"], answer: 0, explain: "Micropropagation produces many identical plantlets." },
    { q: "Tissue culture requires sterile conditions mainly to:", options: ["Prevent contamination by unwanted microorganisms", "Increase photosynthesis in animals", "Cut DNA with restriction enzymes", "Produce insulin in the human pancreas only"], answer: 0, explain: "Contaminants would outgrow or spoil the culture." },
    { q: "Some GM crops reduce pesticide use because they:", options: ["Are already resistant to certain pests", "Cannot grow at all", "Remove all insects from the ecosystem permanently", "Stop roots absorbing water"], answer: 0, explain: "Less crop damage can mean fewer insecticide sprays." },
    { q: "Fermentation in industry needs a source of:", options: ["Sugar or other nutrients for microorganisms", "Only light for photosynthesis in bacteria", "Human red blood cells", "Chlorophyll in animal cells"], answer: 0, explain: "Microbes need substrate and suitable conditions." },
    { q: "Yeast is classified as a:", options: ["Microorganism (fungus) used in fermentation", "Plant with chloroplasts for all products", "Virus that cuts DNA", "Large mammal"], answer: 0, explain: "Yeast is a single-celled fungus." },
    { q: "Insulin is important in medicine because it:", options: ["Helps control blood glucose in people with diabetes", "Digests starch in the mouth", "Carries oxygen in red blood cells", "Filters blood in the glomerulus"], answer: 0, explain: "GM insulin replaces missing or insufficient hormone." },
    { q: "Genetic modification is considered a modern biotechnology because it:", options: ["Directly changes DNA in the laboratory", "Only involves making cheese traditionally", "Does not use any cells", "Happens only by natural selection with no humans"], answer: 0, explain: "Engineering transfers specific genes between species." },
    { q: "DNA carries instructions for building:", options: ["Proteins that determine many traits", "Only cell walls in animals", "Carbon dioxide in the atmosphere", "Stomata on roots only"], answer: 0, explain: "Gene expression leads to particular proteins." },
    { q: "GMOs may affect ecosystems if:", options: ["Modified genes spread to wild relatives or food webs change", "They always increase every species equally", "They remove all DNA from soil", "They stop fermentation worldwide"], answer: 0, explain: "Gene flow and biodiversity are environmental concerns." },
    { q: "Biotechnology is useful in industry because it:", options: ["Produces medicines, food and other products using living systems", "Only studies fossils", "Prevents all microorganisms from growing", "Replaces DNA with water in every cell"], answer: 0, explain: "Examples include insulin, penicillin and fermented foods." },
    { q: "Enzymes are essential in genetic engineering because they:", options: ["Cut and join DNA during gene transfer", "Only digest food in the ileum", "Pump blood in the heart", "Filter urea in the Bowman's capsule"], answer: 0, explain: "Restriction enzymes and ligase manipulate DNA." },
    { q: "The safety of GM foods is debated because:", options: ["Long-term health and environmental effects are still evaluated", "They contain no genes", "They cannot be grown in soil", "They always remove all bacteria from the body"], answer: 0, explain: "Exams require balanced discussion of evidence and concerns." },
    { q: "A bacterial plasmid is often used in genetic engineering as:", options: ["A vector to carry a gene into host bacteria", "A type of plant hormone for tropisms", "An enzyme that digests starch", "A blood cell in mammals"], answer: 0, explain: "Plasmids are small circular DNA molecules in bacteria." },
    { q: "Penicillin is produced industrially using:", options: ["The fungus Penicillium in a controlled fermenter", "Genetically modified maize only", "Human red blood cells", "Yeast in bread dough only"], answer: 0, explain: "Fermentation conditions are controlled to maximise yield." },
    { q: "Conditions controlled in a commercial fermenter often include:", options: ["Temperature, pH and sterility", "Only light intensity for photosynthesis in roots", "Blood pressure in arteries", "Reflex action in the spinal cord"], answer: 0, explain: "Optimum conditions maximise growth and product formation." }
  ],
  theory: [
    {
      q: "Define biotechnology and genetic modification.",
      marks: 4,
      points: [
        "Biotechnology: use of living organisms/systems to make useful products",
        "Examples: fermentation, GM organisms",
        "Genetic modification: altering DNA for new characteristics",
        "GMO contains changed genetic material"
      ]
    },
    {
      q: "Describe fermentation and its uses.",
      marks: 5,
      points: [
        "Breakdown of sugars by microorganisms",
        "Often anaerobic",
        "Products: ethanol, CO₂, lactic acid",
        "Examples: bread, alcohol, yogurt",
        "Industrial control of temperature and nutrients in fermenters"
      ]
    },
    {
      q: "Explain the main steps in genetic engineering.",
      marks: 6,
      points: [
        "Isolate desired gene",
        "Cut vector (plasmid) with restriction enzyme",
        "Insert gene using DNA ligase",
        "Introduce into host bacterium",
        "Host reproduces and expresses trait",
        "Product extracted (e.g. insulin)"
      ]
    },
    {
      q: "Discuss advantages and disadvantages of GM crops.",
      marks: 6,
      points: [
        "Advantages: higher yield, pest/herbicide resistance, less pesticide",
        "Medical/industrial applications of GM",
        "Disadvantages: environmental risk, gene flow",
        "Ethical concerns and food safety debate",
        "Balanced conclusion"
      ]
    },
    {
      q: "Explain tissue culture and its applications.",
      marks: 4,
      points: [
        "Growing plant tissue in sterile nutrient medium",
        "Produces many identical plants",
        "Disease-free stock",
        "Rapid propagation and conservation of rare species"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "Describe the steps involved in producing bacteria that make human insulin. [5]",
      marks: 5,
      answer: "Identify and isolate human insulin gene.\nCut bacterial plasmid with restriction enzyme.\nInsert gene into plasmid using DNA ligase.\nInsert recombinant plasmid into bacterium.\nBacteria multiply and produce insulin; insulin extracted and purified."
    },
    {
      q: "State two conditions controlled in a fermenter and explain why. [4]",
      marks: 4,
      answer: "Temperature — kept at optimum for enzymes and growth.\npH — maintained for enzyme activity.\nSterility — prevents contamination.\nOxygen/aeration — for aerobic microbes if needed."
    }
  ]
};

(function mergeBiotechnologyChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES["biotechnology"] || {};
  BIOLOGY_5090_NOTES["biotechnology"] = Object.assign({}, base, BIOTECHNOLOGY_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ["biotechnology"] = {
      flashcards: BIOTECHNOLOGY_CHAPTER_5090.flashcards,
      mcqs: BIOTECHNOLOGY_CHAPTER_5090.mcqs,
      theory: BIOTECHNOLOGY_CHAPTER_5090.theory
    };
  }
})();

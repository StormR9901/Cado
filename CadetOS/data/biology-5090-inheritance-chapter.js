/**
 * Biology 5090 - Chapter 17 Inheritance (full study content)
 */
const INHERITANCE_CHAPTER_5090 = {
  learningObjectives: [
    "Define inheritance and understand how characteristics are passed from parents to offspring.",
    "Describe the role of genes, chromosomes, and DNA.",
    "Explain dominant and recessive alleles.",
    "Use simple genetic diagrams and Punnett squares.",
    "Understand genotype and phenotype.",
    "Describe variation in organisms.",
    "Explain sex determination in humans.",
    "Understand genetic disorders at a basic level."
  ],
  summary: [
    "Inheritance passes traits through genes on chromosomes.",
    "DNA carries genetic information; genes are sections of DNA that control characteristics.",
    "Alleles are alternative forms of a gene; dominant alleles mask recessive ones in heterozygotes.",
    "Genotype is genetic makeup; phenotype is observable traits.",
    "Punnett squares predict offspring genotypes and phenotype ratios.",
    "Variation may be genetic (inherited) or environmental (not inherited).",
    "Human sex is determined by XX (female) and XY (male) chromosomes.",
    "Mutations can cause inherited disorders such as sickle cell anaemia."
  ],
  examples: [
    { title: "Example 1", text: "Tall pea plants may inherit a dominant T allele from one or both parents." },
    { title: "Example 2", text: "A child inherits eye colour alleles from both parents." },
    { title: "Example 3", text: "Male offspring receive a Y chromosome from the father (XY)." },
    { title: "Example 4", text: "ABO blood group is genetically inherited and shows discontinuous variation." }
  ],
  chapterSections: [
    {
      title: "Introduction",
      paragraphs: [
        "Inheritance is the process by which genetic information is passed from parents to offspring. This explains why offspring resemble their parents but are not identical."
      ]
    },
    {
      title: "Key genetic terms",
      subsections: [
        {
          title: "DNA",
          bulletList: [
            "Deoxyribonucleic acid",
            "Carries genetic information in the sequence of bases"
          ]
        },
        {
          title: "Chromosomes",
          bulletList: [
            "Thread-like structures in the nucleus",
            "Made of DNA and protein",
            "Humans have 23 pairs (46 in body cells)"
          ]
        },
        {
          title: "Genes",
          bulletList: [
            "Sections of DNA at a fixed locus on a chromosome",
            "Control characteristics by coding for proteins"
          ]
        }
      ]
    },
    {
      title: "Alleles",
      paragraphs: ["Different forms of the same gene are called alleles."],
      bulletList: [
        "Dominant allele: expressed even if only one copy is present",
        "Recessive allele: expressed only when both alleles are recessive",
        "Homozygous: two identical alleles (e.g. TT or tt)",
        "Heterozygous: two different alleles (e.g. Tt)"
      ]
    },
    {
      title: "Genotype and phenotype",
      bulletList: [
        "Genotype: genetic makeup (e.g. TT, Tt, tt)",
        "Phenotype: observable characteristics (e.g. tall, short)"
      ]
    },
    {
      title: "Monohybrid inheritance",
      paragraphs: ["Example: height in pea plants — T = tall (dominant), t = short (recessive)."],
      bulletList: [
        "Cross Tt × Tt: offspring TT, Tt, tt → phenotype ratio 3 tall : 1 short",
        "Gametes carry one allele each after meiosis"
      ]
    },
    {
      title: "Variation",
      subsections: [
        {
          title: "Genetic variation",
          bulletList: ["Inherited", "Caused by different alleles, meiosis, mutation, random fertilisation"]
        },
        {
          title: "Environmental variation",
          bulletList: ["Caused by surroundings", "Not inherited — e.g. sun tan, scars"]
        },
        {
          title: "Continuous vs discontinuous",
          bulletList: [
            "Continuous: range of values — height, mass",
            "Discontinuous: distinct categories — blood group, sex"
          ]
        }
      ]
    },
    {
      title: "Sex determination in humans",
      bulletList: [
        "XX = female; XY = male",
        "Mother produces X eggs; father produces X or Y sperm",
        "Sex determined at fertilisation — approximately 1:1 male : female"
      ]
    },
    {
      title: "Inherited disorders",
      bulletList: [
        "Caused by mutations in genes",
        "Examples: sickle cell anaemia, colour blindness (often sex-linked)"
      ]
    }
  ],
  definitions: [
    { term: "Inheritance", definition: "Passing of characteristics from parents to offspring through genes." },
    { term: "Gene", definition: "Section of DNA controlling a trait." },
    { term: "Allele", definition: "Alternative form of a gene." },
    { term: "Dominant", definition: "Allele expressed even if one copy is present." },
    { term: "Recessive", definition: "Allele expressed only when both copies are recessive." },
    { term: "Genotype", definition: "Genetic makeup of an organism." },
    { term: "Phenotype", definition: "Observable characteristics of an organism." },
    { term: "Variation", definition: "Differences among individuals of a species." },
    { term: "Mutation", definition: "Change in the DNA base sequence." },
    { term: "Homozygous", definition: "Having two identical alleles for a gene." }
  ],
  syllabusPoints: [
    { code: "17.1", title: "Genes, alleles, and chromosomes", content: "DNA in chromosomes; genes control traits; dominant and recessive alleles." },
    { code: "17.2", title: "Monohybrid inheritance", content: "Punnett squares; genotype and phenotype; 3:1 ratio from heterozygote cross." },
    { code: "17.3", title: "Variation", content: "Genetic vs environmental variation; continuous and discontinuous examples." },
    { code: "17.4", title: "Sex determination", content: "XX and XY; role of father's sperm in determining sex." },
    { code: "17.5", title: "Inherited disorders", content: "Mutation as cause; examples linked to alleles." }
  ],
  quickRecap: "Inheritance = traits via genes on chromosomes.\nDNA → genes → alleles (dominant/recessive).\nGenotype = alleles; phenotype = appearance.\nPunnett square predicts ratios (e.g. Tt × Tt → 3:1).\nVariation: genetic (inherited) vs environmental.\nSex: XX female, XY male.\nContinuous variation (height) vs discontinuous (blood group).",
  examTips: "Always show parental genotypes, gametes, and Punnett square for genetics questions. Define genotype and phenotype clearly. State that recessive traits need two recessive alleles. For sex linkage, remember males have only one X. Distinguish genetic from environmental examples.",
  flashcards: [
    { q: "What is inheritance?", a: "Passing traits from parents to offspring through genes." },
    { q: "What is DNA?", a: "Genetic material that carries hereditary information." },
    { q: "What is a gene?", a: "A section of DNA that controls a characteristic." },
    { q: "What is an allele?", a: "An alternative form of a gene." },
    { q: "What is a dominant allele?", a: "An allele expressed even when only one copy is present." },
    { q: "What is a recessive allele?", a: "An allele expressed only when two copies are present." },
    { q: "What is genotype?", a: "The genetic makeup of an organism (e.g. Tt)." },
    { q: "What is phenotype?", a: "The observable characteristics of an organism." },
    { q: "Male sex chromosomes in humans?", a: "XY." },
    { q: "Female sex chromosomes in humans?", a: "XX." },
    { q: "What causes variation?", a: "Genes, meiosis, mutation, fertilisation, and the environment." },
    { q: "What is a mutation?", a: "A change in the DNA base sequence." },
    { q: "Example of continuous variation?", a: "Height or mass (range of values)." },
    { q: "Example of discontinuous variation?", a: "Blood group (distinct categories)." },
    { q: "What is a Punnett square used for?", a: "To predict offspring genotypes and phenotype ratios." }
  ],
  mcqs: [
    { q: "Inheritance is best defined as:", options: ["Growth of an organism only", "Passing traits to offspring through genes", "Digestion of food molecules", "Release of energy in respiration"], answer: 1, explain: "Inheritance is the transfer of genetic information from parents to offspring." },
    { q: "DNA is:", options: ["A type of protein enzyme", "The genetic material in chromosomes", "A fat stored in the cytoplasm", "A sugar used only in respiration"], answer: 1, explain: "DNA carries the genetic code for proteins and traits." },
    { q: "Genes are located on:", options: ["Ribosomes in the cytoplasm", "Chromosomes in the nucleus", "The cellulose cell wall", "Starch grains in chloroplasts only"], answer: 1, explain: "Each gene occupies a locus on a chromosome." },
    { q: "Alleles are:", options: ["Whole chromosomes", "Different forms of the same gene", "Types of hormones", "Cells produced by mitosis"], answer: 1, explain: "Alleles are alternative versions of one gene." },
    { q: "A dominant allele is:", options: ["Always hidden in the phenotype", "Expressed in the phenotype even if only one copy is present", "Never passed to offspring", "Found only on the Y chromosome"], answer: 1, explain: "One dominant allele is enough for the dominant trait to appear." },
    { q: "A recessive allele is expressed when:", options: ["One copy is present in a heterozygote", "Two recessive copies are present", "It is always on the X chromosome only", "The environment blocks all genes"], answer: 1, explain: "Recessive traits appear only in homozygous recessive individuals." },
    { q: "Genotype refers to:", options: ["Observable appearance only", "The alleles an organism possesses", "Temperature of the environment", "Number of mitochondria"], answer: 1, explain: "Genotype is the genetic makeup, e.g. Tt." },
    { q: "Phenotype refers to:", options: ["The alleles present", "Observable characteristics", "DNA base sequence only", "Number of chromosomes in gametes"], answer: 1, explain: "Phenotype is what you see or measure, e.g. tall or short." },
    { q: "A Punnett square is used to:", options: ["Measure the rate of photosynthesis", "Predict inheritance of alleles in offspring", "Calculate body mass index", "Show food chains in ecology"], answer: 1, explain: "It combines gametes to show possible genotypes and phenotypes." },
    { q: "Human sex is determined mainly by:", options: ["Blood group alleles", "Sex chromosomes X and Y", "Diet during pregnancy", "Number of autosomes only"], answer: 1, explain: "XX develops as female; XY develops as male." },
    { q: "Male sex chromosomes are:", options: ["XX", "XY", "YY", "XO only"], answer: 1, explain: "Males have one X and one Y chromosome." },
    { q: "Female sex chromosomes are:", options: ["XX", "XY", "YY", "YZ"], answer: 0, explain: "Females have two X chromosomes." },
    { q: "Variation means:", options: ["All individuals are identical", "Differences between individuals", "Only growth in size", "Movement of substances in cells"], answer: 1, explain: "Variation is differences in characteristics within a species." },
    { q: "Genetic variation is:", options: ["Inherited through genes and alleles", "Caused only by learning skills", "Always temporary with no DNA change", "The same as environmental variation"], answer: 0, explain: "Alleles passed from parents cause genetic variation." },
    { q: "Environmental variation is caused by:", options: ["Different alleles only", "Factors in the surroundings during life", "Meiosis in parents only", "Mutation in every cell always"], answer: 1, explain: "Examples include sun tan, scars, and language — not inherited." },
    { q: "Height in humans is an example of:", options: ["Discontinuous variation only", "Continuous variation", "No variation", "Variation caused only by one gene with two alleles always"], answer: 1, explain: "Height shows a range of values influenced by many genes and environment." },
    { q: "ABO blood group is an example of:", options: ["Continuous variation", "Environmental variation only", "Discontinuous variation", "Variation not linked to genes"], answer: 2, explain: "Blood groups fall into distinct categories (A, B, AB, O)." },
    { q: "A mutation is:", options: ["Movement of water into a cell", "A change in the DNA base sequence", "Fusion of gametes", "Growth of a seedling"], answer: 1, explain: "Mutations may alter proteins and cause genetic disorders." },
    { q: "Sickle cell anaemia is:", options: ["An inherited genetic disorder", "Caused only by diet", "A type of infectious disease", "Due to lack of oxygen in the air only"], answer: 0, explain: "It results from a mutation in the haemoglobin gene." },
    { q: "Colour blindness is often:", options: ["Caused only by pollution", "A genetically inherited condition (often sex-linked)", "Due to eating too much sugar", "Not related to DNA"], answer: 1, explain: "Alleles on sex chromosomes can cause colour blindness." },
    { q: "Chromosomes:", options: ["Are made only of protein", "Carry genes made of DNA", "Are found only in the cytoplasm", "Never duplicate before cell division"], answer: 1, explain: "Chromosomes contain DNA with many genes." },
    { q: "Genes:", options: ["Control characteristics by coding for proteins", "Store glucose in plants only", "Are the same as ribosomes", "Only exist in gametes, never in body cells"], answer: 0, explain: "Each gene codes for a specific protein or functional RNA." },
    { q: "Offspring usually resemble their parents because:", options: ["They inherit alleles from parents", "They never inherit DNA", "They share only environmental factors", "Chromosomes are absent in offspring"], answer: 0, explain: "Shared genes give similar phenotypes." },
    { q: "Offspring are not identical to parents mainly because:", options: ["Genetic recombination and new allele combinations", "They have no chromosomes", "DNA is destroyed at fertilisation", "Only the mother contributes genes"], answer: 0, explain: "Meiosis and random fertilisation create new combinations." },
    { q: "Most genetic information in a human body cell is in the:", options: ["Cell wall", "Nucleus", "Vacuole sap", "Chloroplast"], answer: 1, explain: "Chromosomes in the nucleus carry DNA." },
    { q: "Chromosomes are made of:", options: ["DNA and protein", "Only glucose", "Cellulose fibres only", "Lactic acid"], answer: 0, explain: "DNA is wrapped around proteins to form chromosomes." },
    { q: "Characteristics are passed to offspring through:", options: ["Genes on chromosomes", "Only water in the cytoplasm", "Carbon dioxide in the air", "Digestive enzymes in the stomach"], answer: 0, explain: "Alleles in gametes are inherited at fertilisation." },
    { q: "In a heterozygote (Tt), the dominant allele:", options: ["Is destroyed", "Masks the expression of the recessive allele in phenotype", "Cannot be inherited", "Always causes two recessive phenotypes"], answer: 1, explain: "The dominant trait appears even with one T allele." },
    { q: "A recessive allele in a heterozygote (Tt):", options: ["Is always visible in the phenotype", "Is hidden in the phenotype but can be passed to offspring", "Cannot be passed to gametes", "Always on the Y chromosome"], answer: 1, explain: "Recessive allele is present but not expressed in heterozygotes." },
    { q: "Homozygous means:", options: ["Two different alleles for a gene", "Two identical alleles for a gene", "No alleles present", "Three or more alleles always"], answer: 1, explain: "e.g. TT or tt are homozygous genotypes." },
    { q: "Heterozygous means:", options: ["Two different alleles for a gene", "Two identical alleles", "No DNA in the nucleus", "Only environmental effects"], answer: 0, explain: "e.g. Tt is heterozygous." },
    { q: "Genetic variation in a population can help:", options: ["Reduce survival always", "Survival when the environment changes", "Stop all reproduction", "Remove the need for genes"], answer: 1, explain: "Some individuals may have alleles suited to new conditions." },
    { q: "Genetic disorders such as sickle cell anaemia:", options: ["Can be passed to offspring if alleles are inherited", "Are never inherited", "Are caused only by exercise", "Only affect plants"], answer: 0, explain: "Mutant alleles can be passed through gametes." },
    { q: "Environmental factors can affect:", options: ["Only genotype", "Phenotype such as body mass or skin colour", "The number of chromosomes in gametes", "DNA sequence in every generation always"], answer: 1, explain: "Phenotype = genotype + environment interaction for many traits." },
    { q: "A Punnett square helps predict:", options: ["Genotype and phenotype ratios in offspring", "Rate of transpiration", "Blood pressure only", "Population of decomposers"], answer: 0, explain: "It shows all possible combinations of gametes." },
    { q: "During gamete formation, alleles:", options: ["Always pair up in the same cell", "Separate so each gamete carries one allele per gene", "Are lost from the species", "Double in number without division"], answer: 1, explain: "Meiosis separates alleles into haploid gametes." },
    { q: "At fertilisation:", options: ["Gametes fuse and combine alleles from both parents", "All chromosomes are destroyed", "Only environmental traits are inherited", "Meiosis occurs in the zygote first"], answer: 0, explain: "Fusion restores the diploid number with new allele combinations." },
    { q: "Offspring receive their genes:", options: ["Only from the mother", "From both parents through gametes", "From the environment only", "Without any DNA"], answer: 1, explain: "Sperm and egg each contribute half the chromosomes." },
    { q: "Variation within a species is important because:", options: ["It allows natural selection and adaptation", "It stops all evolution", "It removes genes from the population", "It prevents reproduction"], answer: 0, explain: "Variation is raw material for evolution." },
    { q: "Inheritance ensures:", options: ["Continuity of characteristics from one generation to the next", "No DNA in living organisms", "Identical clones of all parents always", "Only environmental change"], answer: 0, explain: "Genes pass traits through generations." }
  ],
  theory: [
    {
      q: "Define inheritance and explain the role of genes.",
      marks: 5,
      points: [
        "Inheritance: passing of characteristics from parents to offspring",
        "Genes are sections of DNA on chromosomes",
        "Genes code for proteins that affect traits",
        "Alleles are alternative forms of a gene",
        "Offspring receive alleles from both parents at fertilisation"
      ]
    },
    {
      q: "Explain genotype and phenotype with an example.",
      marks: 4,
      points: [
        "Genotype: alleles present (e.g. Tt)",
        "Phenotype: observable trait (e.g. tall)",
        "Same genotype can show different phenotype if environment affects trait (extension)",
        "Example from monohybrid cross"
      ]
    },
    {
      q: "Describe dominant and recessive alleles.",
      marks: 4,
      points: [
        "Dominant expressed with one or two copies",
        "Recessive expressed only when homozygous recessive",
        "Heterozygote shows dominant phenotype",
        "Recessive allele can be carried hidden in heterozygote"
      ]
    },
    {
      q: "Explain sex determination in humans.",
      marks: 4,
      points: [
        "Female XX produces X eggs",
        "Male XY produces X and Y sperm",
        "Fertilisation: XX → female, XY → male",
        "Approximately 1:1 ratio of males to females"
      ]
    },
    {
      q: "Describe variation and its types with examples.",
      marks: 6,
      points: [
        "Variation: differences between individuals",
        "Genetic variation inherited — e.g. blood group, eye colour alleles",
        "Environmental variation — e.g. sun tan, scars",
        "Continuous variation: range (height, mass)",
        "Discontinuous variation: distinct categories (blood group)",
        "Many traits affected by both genes and environment"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "In pea plants, tall (T) is dominant to short (t). Show a Punnett square for Tt × Tt and state phenotype ratio. [4]",
      marks: 4,
      answer: "Gametes: T and t from each parent.\nOffspring: TT, Tt, Tt, tt.\nGenotype ratio 1:2:1; phenotype ratio 3 tall : 1 short."
    },
    {
      q: "Distinguish genetic and environmental variation. [3]",
      marks: 3,
      answer: "Genetic: due to alleles, inherited.\nEnvironmental: due to conditions during life, not inherited.\nExample of each."
    }
  ]
};

(function mergeInheritanceChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES["inheritance"] || {};
  BIOLOGY_5090_NOTES["inheritance"] = Object.assign({}, base, INHERITANCE_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ["inheritance"] = {
      flashcards: INHERITANCE_CHAPTER_5090.flashcards,
      mcqs: INHERITANCE_CHAPTER_5090.mcqs,
      theory: INHERITANCE_CHAPTER_5090.theory
    };
  }
})();

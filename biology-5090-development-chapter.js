/**
 * Biology 5090 - Chapter 16 Development of Organisms and Continuity of Life (full study content)
 */
const DEVELOPMENT_CHAPTER_5090 = {
  learningObjectives: [
    "Define growth, development, and reproduction.",
    "Describe the stages of growth and development in organisms.",
    "Explain asexual and sexual reproduction.",
    "Understand the structure and function of male and female reproductive systems in humans.",
    "Describe fertilisation, implantation, and development of the embryo.",
    "Explain menstrual cycle basics.",
    "Understand flowering plant reproduction and seed formation.",
    "Describe germination and early growth stages.",
    "Explain the importance of continuity of life.",
    "Compare mitosis and meiosis and their roles in reproduction and growth."
  ],
  summary: [
    "Growth is an increase in size and dry mass; development is change in form and function as an organism matures.",
    "Reproduction produces new individuals and ensures continuity of life.",
    "Asexual reproduction: one parent, mitosis, genetically identical offspring (clones).",
    "Sexual reproduction: two parents, gametes, fertilisation, genetic variation.",
    "Human fertilisation occurs in the oviduct; the embryo develops in the uterus with placental exchange.",
    "Flowering plants: pollination, fertilisation in ovule, seed and fruit formation, germination needs water, oxygen and suitable temperature.",
    "Mitosis produces diploid identical cells; meiosis produces haploid gametes with variation."
  ],
  examples: [
    { title: "Example 1", text: "Humans reproduce sexually — sperm and egg fuse to form a zygote." },
    { title: "Example 2", text: "Bacteria reproduce asexually by binary fission." },
    { title: "Example 3", text: "A seed germinates when water, oxygen and warmth allow enzymes to activate growth." }
  ],
  comparisonTable: {
    headers: ["Feature", "Asexual reproduction", "Sexual reproduction"],
    rows: [
      ["Parents", "One", "Two"],
      ["Gametes", "Not involved", "Sperm and egg (or pollen and egg in plants)"],
      ["Offspring", "Genetically identical (clones)", "Genetically different (variation)"],
      ["Division", "Mitosis only", "Meiosis forms gametes; mitosis after fertilisation"],
      ["Examples", "Binary fission, runners, tubers", "Humans, flowering plants"]
    ]
  },
  chapterSections: [
    {
      title: "Introduction — continuity of life",
      paragraphs: [
        "Living organisms grow, develop and reproduce so their species continues. This is the continuity of life."
      ]
    },
    {
      title: "Growth and development",
      bulletList: [
        "Growth: increase in size and dry mass due to cell division and cell enlargement",
        "Development: changes in form and function as the organism matures"
      ]
    },
    {
      title: "Reproduction",
      paragraphs: ["Reproduction is the production of new individuals of the same species."],
      subsections: [
        {
          title: "Asexual reproduction",
          bulletList: [
            "One parent; no fusion of gametes",
            "Offspring genetically identical (clones)",
            "Examples: bacterial binary fission, potato tubers, strawberry runners, yeast budding"
          ]
        },
        {
          title: "Sexual reproduction",
          bulletList: [
            "Two parents; involves gametes and fertilisation",
            "Genetic variation in offspring",
            "Examples: humans, flowering plants"
          ]
        }
      ]
    },
    {
      title: "Mitosis and meiosis",
      bulletList: [
        "Mitosis: one division → two genetically identical diploid cells (growth, repair, asexual reproduction)",
        "Meiosis: two divisions → four haploid gametes with variation (crossing over, independent assortment)",
        "Fertilisation: n + n → diploid zygote (2n); zygote divides by mitosis to form embryo"
      ]
    },
    {
      title: "Human reproduction",
      subsections: [
        {
          title: "Male system",
          bulletList: [
            "Testes: produce sperm",
            "Scrotum: keeps testes cooler for sperm production",
            "Sperm duct: carries sperm",
            "Urethra: passage for sperm and urine"
          ]
        },
        {
          title: "Female system",
          bulletList: [
            "Ovaries: produce eggs (ova)",
            "Oviduct (Fallopian tube): usual site of fertilisation",
            "Uterus: embryo and fetus development",
            "Cervix: opening between vagina and uterus"
          ]
        },
        {
          title: "Fertilisation and embryo",
          bulletList: [
            "Fusion of sperm and egg nuclei in oviduct forms zygote",
            "Zygote divides by mitosis → embryo",
            "Implantation: embryo embeds in uterus lining",
            "Placenta: exchange of nutrients and oxygen, removal of waste, some protection"
          ]
        },
        {
          title: "Menstrual cycle (overview)",
          bulletList: [
            "Repeats about every 28 days in many women",
            "Ovulation: egg released from ovary",
            "Uterus lining thickens; shed if fertilisation does not occur"
          ]
        }
      ]
    },
    {
      title: "Flowering plant reproduction",
      bulletList: [
        "Stamen (anther + filament): male — produces pollen",
        "Carpel (stigma, style, ovary): female — contains ovules",
        "Pollination: pollen transferred from anther to stigma (same or different flower)",
        "Pollen tube grows; male nucleus fuses with egg in ovule",
        "Ovule becomes seed; ovary wall often becomes fruit"
      ]
    },
    {
      title: "Germination",
      bulletList: [
        "Conditions: water, oxygen, suitable temperature (light not always required)",
        "Seed absorbs water; enzymes activate; respiration increases",
        "Radicle (root) usually emerges first, then plumule (shoot)"
      ]
    }
  ],
  definitions: [
    { term: "Growth", definition: "Increase in size and dry mass of an organism." },
    { term: "Development", definition: "Series of changes in form and function as an organism matures." },
    { term: "Reproduction", definition: "Production of new individuals of the same species." },
    { term: "Fertilisation", definition: "Fusion of male and female gamete nuclei." },
    { term: "Zygote", definition: "Diploid cell formed at fertilisation." },
    { term: "Gamete", definition: "Haploid sex cell — sperm or egg." },
    { term: "Pollination", definition: "Transfer of pollen from anther to stigma." },
    { term: "Germination", definition: "Growth of a seed into a young plant." },
    { term: "Mitosis", definition: "Nuclear division producing two genetically identical diploid cells." },
    { term: "Meiosis", definition: "Division producing four haploid genetically different gametes." }
  ],
  syllabusPoints: [
    { code: "16.1", title: "Growth and mitosis", content: "Growth by cell division and enlargement; mitosis for growth, repair and asexual reproduction." },
    { code: "16.2", title: "Meiosis and gametes", content: "Meiosis halves chromosome number and increases variation; human gametes 23 chromosomes, body cells 46." },
    { code: "16.3", title: "Sexual and asexual reproduction", content: "Compare advantages; clones vs variation; named examples." },
    { code: "16.4", title: "Human reproduction", content: "Structures, fertilisation in oviduct, embryo in uterus, placenta, menstrual cycle outline." },
    { code: "16.5", title: "Plants, seeds and germination", content: "Flower structure, pollination, seed and fruit formation, germination requirements." }
  ],
  quickRecap: "Growth = size/mass ↑. Development = maturation.\nAsexual: 1 parent, clones. Sexual: gametes + fertilisation → variation.\nHuman: fertilisation in oviduct; embryo in uterus; placenta exchanges materials.\nPlant: pollination → fertilisation in ovule → seed + fruit.\nGermination: water, O₂, warmth. Mitosis 2n identical; meiosis n gametes.",
  examTips: "State fertilisation site (oviduct) and where embryo develops (uterus). Germination needs water, oxygen and temperature — not always light. Compare mitosis (2 diploid identical) vs meiosis (4 haploid different). Do not confuse pollination with fertilisation.",
  flashcards: [
    { q: "What is growth?", a: "Increase in size and dry mass, by cell division and enlargement." },
    { q: "What is development?", a: "Changes in form and function as the organism matures." },
    { q: "What is reproduction?", a: "Production of new individuals of the same species." },
    { q: "What is a zygote?", a: "The diploid cell formed when gametes fuse at fertilisation." },
    { q: "What is fertilisation?", a: "Fusion of male and female gamete nuclei." },
    { q: "What is the male gamete in humans?", a: "Sperm." },
    { q: "What is the female gamete in humans?", a: "Egg (ovum)." },
    { q: "Where does fertilisation usually occur in humans?", a: "In the oviduct (Fallopian tube)." },
    { q: "Which organ produces sperm?", a: "The testes." },
    { q: "Which organ produces eggs?", a: "The ovaries." },
    { q: "What is pollination?", a: "Transfer of pollen from anther to stigma." },
    { q: "What is germination?", a: "Growth of a seed into a young plant." },
    { q: "Name three conditions needed for germination.", a: "Water, oxygen and a suitable temperature." },
    { q: "What is a main function of the placenta?", a: "Exchange of nutrients and oxygen between mother and fetus; removal of waste." },
    { q: "What is continuity of life?", a: "Species survival through growth, development and reproduction." }
  ],
  mcqs: [
    { q: "Growth in organisms is best defined as:", options: ["Production of genetically different gametes", "Increase in size and dry mass", "Only movement from place to place", "Breakdown of glucose in respiration only"], answer: 1, explain: "Growth involves more cells and/or larger cells, increasing mass and size." },
    { q: "Development refers to:", options: ["Random cell death with no pattern", "Changes in form and function as the organism matures", "Only digestion in the stomach", "Transfer of pollen between flowers"], answer: 1, explain: "Development includes specialisation of tissues and organs through the life cycle." },
    { q: "Asexual reproduction typically involves:", options: ["Two parents and fusion of gametes", "One parent and offspring genetically identical to the parent", "Four haploid cells from meiosis only", "Pollination between two species"], answer: 1, explain: "Asexual reproduction produces clones, e.g. runners or binary fission." },
    { q: "Sexual reproduction in animals usually requires:", options: ["One parent and no gametes", "Two parents, gametes and fertilisation", "Only mitosis with no variation ever", "Pollen transfer to stigma only"], answer: 1, explain: "Male and female gametes fuse to form a zygote." },
    { q: "Gametes are:", options: ["Somatic body cells with full chromosome number only", "Haploid reproductive cells such as sperm and egg", "Red blood cells carrying oxygen", "Cells that only carry out photosynthesis"], answer: 1, explain: "Gametes fuse at fertilisation; they are not body cells." },
    { q: "Immediately after fertilisation in humans, the single cell formed is the:", options: ["Haploid sperm", "Diploid zygote", "Mature fruit", "Pollen grain"], answer: 1, explain: "Fusion of gamete nuclei restores the diploid number in the zygote." },
    { q: "In humans, fertilisation usually takes place in the:", options: ["Uterus lining before implantation", "Oviduct (Fallopian tube)", "Testes", "Placenta after birth"], answer: 1, explain: "Sperm meets the egg in the oviduct; the zygote then travels to the uterus." },
    { q: "The male gamete in human sexual reproduction is:", options: ["The ovum", "Sperm", "The zygote", "A pollen nucleus only"], answer: 1, explain: "Sperm is produced in the testes." },
    { q: "The female gamete in humans is:", options: ["Sperm", "The egg (ovum)", "A seed coat", "Lactic acid"], answer: 1, explain: "Eggs are produced in the ovaries and released at ovulation." },
    { q: "After implantation, the developing embryo grows mainly in the:", options: ["Ovary", "Uterus", "Testes", "Oviduct permanently without moving"], answer: 1, explain: "The uterus provides space and blood supply via the placenta." },
    { q: "A major function of the placenta during pregnancy is to:", options: ["Produce sperm", "Allow exchange of nutrients, oxygen and waste between mother and fetus", "Carry out photosynthesis", "Digest starch in the fetus stomach"], answer: 1, explain: "The placenta links maternal and fetal blood supplies for exchange." },
    { q: "Pollination in flowering plants is:", options: ["Fusion of gamete nuclei inside the ovule", "Transfer of pollen from anther to stigma", "Germination of the seed", "Binary fission in bacteria"], answer: 1, explain: "Pollination is not fertilisation; it brings pollen to the carpel." },
    { q: "Germination is the process by which:", options: ["A seed grows into a young plant", "An embryo implants in the uterus", "Meiosis forms four gametes", "The menstrual cycle ends permanently"], answer: 0, explain: "The seed absorbs water and the embryo resumes growth." },
    { q: "Which set of conditions is normally required for seed germination?", options: ["Only bright light with no water", "Water, oxygen and a suitable temperature", "Only fertiliser salts with no oxygen", "Only very low temperature with no water"], answer: 1, explain: "Water activates enzymes; oxygen for aerobic respiration; warmth for enzyme activity." },
    { q: "The zygote develops into an embryo mainly by repeated:", options: ["Meiosis halving chromosomes each division", "Mitosis producing more diploid cells", "Pollination", "Ultrafiltration in the kidney"], answer: 1, explain: "Mitosis increases cell number while maintaining the diploid chromosome number." },
    { q: "Sperm are produced in the:", options: ["Ovaries", "Testes", "Uterus", "Cervix only"], answer: 1, explain: "The testes contain seminiferous tubules where sperm form." },
    { q: "Eggs (ova) are produced in the:", options: ["Ovaries", "Sperm duct", "Urethra", "Anther"], answer: 0, explain: "Ovaries release eggs at ovulation during the menstrual cycle." },
    { q: "The sperm duct (vas deferens) functions to:", options: ["Produce eggs", "Carry sperm from the testes towards the urethra", "Thicken the uterus lining each month", "Transfer pollen to the stigma"], answer: 1, explain: "It transports sperm during ejaculation." },
    { q: "The uterus is important in reproduction because it:", options: ["Produces pollen", "Houses and nourishes the developing embryo/fetus", "Is the usual site where sperm and egg first fuse", "Stores urine only with no role in reproduction"], answer: 1, explain: "Implantation and fetal development occur here." },
    { q: "The cervix is:", options: ["The opening between the vagina and the uterus", "The male organ that produces sperm", "The part of the flower that makes pollen", "The first root to emerge in germination"], answer: 0, explain: "It allows passage of sperm and, later, birth of the baby." },
    { q: "After fertilisation in a flower, the ovary often develops into the:", options: ["Pollen grain", "Fruit", "Stamen", "Radicle only"], answer: 1, explain: "The ovary wall becomes the fruit; ovules become seeds." },
    { q: "After fertilisation in a plant, a fertilised ovule develops into a:", options: ["Seed", "Pollen tube only", "Stigma", "Sperm"], answer: 0, explain: "Each ovule can form a seed containing the embryo." },
    { q: "Continuity of life means that species:", options: ["Never reproduce", "Continue over generations through reproduction and development", "Only grow without any offspring", "Lose all genetic material each year"], answer: 1, explain: "Reproduction passes genes to the next generation." },
    { q: "One advantage of asexual reproduction is that it is often:", options: ["Slow and needs two parents", "Rapid and needs only one parent", "Impossible in plants", "Always produces maximum genetic variation"], answer: 1, explain: "Clones can be produced quickly when conditions are stable." },
    { q: "Sexual reproduction is important for populations because it:", options: ["Produces genetically identical clones only", "Introduces genetic variation among offspring", "Eliminates all genes", "Prevents meiosis"], answer: 1, explain: "Variation helps adaptation and survival in changing environments." },
    { q: "Mitosis differs from meiosis because mitosis produces:", options: ["Four haploid genetically different cells", "Two genetically identical diploid daughter cells", "Only pollen grains", "Only gametes with half the chromosome number"], answer: 1, explain: "Mitosis maintains chromosome number and identity for growth." },
    { q: "Human body (somatic) cells normally contain how many chromosomes?", options: ["23 haploid only", "46 (diploid)", "92 in every gamete", "12 pairs in all gametes"], answer: 1, explain: "2n = 46; gametes have n = 23." },
    { q: "Meiosis is essential in sexual reproduction because it:", options: ["Doubles chromosome number in every body cell each day", "Forms haploid gametes and increases genetic variation", "Produces identical clones for growth only", "Occurs only in the placenta"], answer: 1, explain: "Without meiosis, chromosome number would double each generation." },
    { q: "Bacteria reproduce asexually most commonly by:", options: ["Binary fission", "Pollination", "Implantation in the uterus", "Seed germination"], answer: 0, explain: "One cell divides into two genetically similar bacterial cells." },
    { q: "In a flower, the stamen is the:", options: ["Male reproductive part producing pollen", "Female part containing the ovary only", "Root emerging at germination", "Placenta of mammals"], answer: 0, explain: "Anther and filament make up the stamen." },
    { q: "The carpel of a flower includes:", options: ["Stigma, style and ovary with ovules", "Only the anther and filament", "The scrotum and testes", "Sperm duct and urethra"], answer: 0, explain: "The carpel is the female structure." },
    { q: "After pollination, fertilisation in plants occurs when:", options: ["The male nucleus fuses with the egg in the ovule via the pollen tube", "Pollen lands on the soil with no tube growth", "The ovary becomes pollen", "Roots absorb only nitrogen fertiliser"], answer: 0, explain: "The pollen tube grows down the style to the ovule." },
    { q: "During germination, which structure usually emerges from the seed first?", options: ["The radicle (young root)", "The flower petals", "The placenta", "Pollen from the anther"], answer: 0, explain: "The root anchors the seedling and absorbs water." },
    { q: "The human menstrual cycle typically lasts about:", options: ["28 days (average)", "One hour", "Ten years without repetition", "Only during pregnancy"], answer: 0, explain: "Cycle includes ovulation and uterus lining changes." },
    { q: "Implantation is when the embryo:", options: ["Embeds in the lining of the uterus", "Fuses with pollen on the stigma", "Divides by meiosis to form sperm", "Germinates from a seed coat"], answer: 0, explain: "Implantation follows travel of the early embryo down the oviduct." },
    { q: "The scrotum hangs outside the body in males mainly to:", options: ["Keep testes slightly cooler for sperm production", "Produce eggs", "Store pollen", "Increase photosynthesis"], answer: 0, explain: "Sperm production needs a temperature below core body temperature." },
    { q: "After fertilisation, the chromosome number of the zygote is:", options: ["Diploid (2n), same as body cells", "Haploid like each gamete", "Zero", "Always four times the gamete number"], answer: 0, explain: "n + n combines to restore 2n, e.g. 23 + 23 = 46 in humans." },
    { q: "One diploid cell undergoing meiosis produces:", options: ["Four haploid gametes", "Two identical diploid body cells only", "One zygote without division", "Pollen and fruit at once"], answer: 0, explain: "Two divisions reduce chromosome number and increase variation." },
    { q: "Gametes carry genes because they contain:", options: ["Half the chromosomes of the parent, including alleles", "No DNA at all", "Only cell walls from plants", "Only digestive enzymes"], answer: 0, explain: "Each gamete contributes genetic material at fertilisation." },
    { q: "Strawberry plants spreading by runners is an example of:", options: ["Asexual reproduction", "Sexual reproduction requiring two flowers only", "Human embryo implantation", "Meiosis forming four sperm"], answer: 0, explain: "Runners are extensions that form clone plants." }
  ],
  theory: [
    {
      q: "Define growth, development, and reproduction.",
      marks: 5,
      points: [
        "Growth: increase in size and dry mass",
        "Cell division and enlargement",
        "Development: changes in form and function during maturation",
        "Reproduction: production of new individuals of same species",
        "Ensures continuity of life"
      ]
    },
    {
      q: "Describe the human male and female reproductive systems.",
      marks: 6,
      points: [
        "Male: testes (sperm), scrotum (temperature), sperm duct, urethra",
        "Female: ovaries (eggs), oviduct, uterus, cervix",
        "Functions linked to gamete production and embryo development",
        "Fertilisation in oviduct",
        "Embryo in uterus"
      ]
    },
    {
      q: "Explain fertilisation and early embryo development in humans.",
      marks: 5,
      points: [
        "Fusion of sperm and egg nuclei in oviduct",
        "Forms diploid zygote",
        "Mitosis forms embryo",
        "Implantation in uterus",
        "Placenta for exchange and support"
      ]
    },
    {
      q: "Describe reproduction in a flowering plant from pollination to seed and fruit.",
      marks: 6,
      points: [
        "Stamen and carpel",
        "Pollination: pollen to stigma",
        "Pollen tube; fertilisation in ovule",
        "Ovule → seed; ovary → fruit",
        "Role in dispersal and next generation"
      ]
    },
    {
      q: "Explain the conditions needed for germination and why each is needed.",
      marks: 4,
      points: [
        "Water: swells seed, activates enzymes",
        "Oxygen: aerobic respiration for energy",
        "Suitable temperature: enzyme activity",
        "Radicle emerges first; continuity of plant life cycle"
      ]
    }
  ],
  practiceQuestions: [
    {
      q: "Compare mitosis and meiosis. [4]",
      marks: 4,
      answer: "Mitosis: one division, two diploid identical cells; growth, repair, asexual reproduction.\nMeiosis: two divisions, four haploid different gametes; variation; sexual reproduction."
    },
    {
      q: "Explain fertilisation in humans. [3]",
      marks: 3,
      answer: "Sperm meets egg in oviduct.\nNuclei fuse to form diploid zygote.\nZygote divides by mitosis to develop into embryo."
    },
    {
      q: "State conditions for germination and explain one. [3]",
      marks: 3,
      answer: "Water, oxygen, suitable temperature.\nWater activates enzymes and allows embryo to expand."
    }
  ]
};

(function mergeDevelopmentChapter5090() {
  if (typeof BIOLOGY_5090_NOTES === "undefined") return;
  var base = BIOLOGY_5090_NOTES["development"] || {};
  BIOLOGY_5090_NOTES["development"] = Object.assign({}, base, DEVELOPMENT_CHAPTER_5090);
  if (typeof BIOLOGY_5090_QUIZ !== "undefined") {
    BIOLOGY_5090_QUIZ["development"] = {
      flashcards: DEVELOPMENT_CHAPTER_5090.flashcards,
      mcqs: DEVELOPMENT_CHAPTER_5090.mcqs,
      theory: DEVELOPMENT_CHAPTER_5090.theory
    };
  }
})();

/**
 * Cambridge O Level Biology 5090 — detailed revision notes by topic
 * Syllabus point codes match chapter numbers (1.x = Cells, 19.x = Ecology)
 */
const BIOLOGY_5090_NOTES = {
  "cells": {
    quickRecap: "• Cells are the basic units of life; plant cells have cell wall, chloroplasts, and large vacuole\n• Animal cells: nucleus, cytoplasm, membrane, mitochondria, ribosomes\n• Specialised cells match structure to function (root hair, RBC, sperm)\n• Bacteria are prokaryotes — no true nucleus\n• Magnification = image size ÷ actual size (same units)",
    definitions: [
      { term: "Cell", definition: "The basic structural and functional unit of living organisms" },
      { term: "Nucleus", definition: "Contains DNA/chromosomes; controls cell activities" },
      { term: "Mitochondrion", definition: "Site of aerobic respiration; releases ATP" },
      { term: "Chloroplast", definition: "Contains chlorophyll; site of photosynthesis in plant cells" },
      { term: "Cell wall", definition: "Plant structure of cellulose giving support; fully permeable" },
      { term: "Cell membrane", definition: "Partially permeable barrier controlling entry and exit" },
      { term: "Magnification", definition: "How much larger the image is than the real object" },
      { term: "Resolution", definition: "Ability to distinguish two points as separate" },
      { term: "Prokaryote", definition: "Organism whose cells lack a membrane-bound nucleus" },
      { term: "Specialised cell", definition: "Cell adapted in structure to perform a particular function" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 May/June 2022 P1", q: "Which structure is found in plant cells but not animal cells?", answer: "Chloroplast (also accept cell wall or large permanent vacuole)", marks: 1 },
      { paper: "5090/21 Oct/Nov 2023 P2", q: "A photomicrograph shows a cell 48 mm long. Actual length 0.048 mm. Calculate magnification.", answer: "48 ÷ 0.048 = ×1000", marks: 2 }
    ],
    detailedNotes: "1.1 Living organisms show MRS GREN; most are multicellular. Unicellular examples include bacteria and many protoctists.\n\n1.2 Animal cells contain nucleus, cytoplasm, cell membrane, mitochondria, and ribosomes. Plant cells add cellulose cell wall, chloroplasts, and a large permanent vacuole with cell sap for support.\n\n1.3 Specialisation: root hair cells (long extension, large SA), red blood cells (biconcave, no nucleus, haemoglobin), sperm (tail, mitochondria), palisade (many chloroplasts), ciliated epithelium (cilia beat).\n\n1.4 Bacterial cells: cell wall and membrane, cytoplasm, circular DNA, plasmids possible; no mitochondria or nucleus.\n\n1.5 Microscopy: total magnification = eyepiece × objective. Convert units before calculating actual size. Electron microscopes have higher magnification and resolution than light microscopes.",
    syllabusPoints: [
      { code: "1.1", title: "Features of living organisms", content: "All living things show movement, respiration, sensitivity, growth, reproduction, excretion, and nutrition (MRS GREN). Cells are the basic units of life; most organisms are made of many cells, but some bacteria and protoctists are unicellular." },
      { code: "1.2", title: "Animal and plant cell structure", content: "Animal cells contain a nucleus, cytoplasm, cell membrane, mitochondria, and ribosomes. Plant cells additionally have a cellulose cell wall, chloroplasts for photosynthesis, and a large permanent vacuole containing cell sap that supports the cell. Both types share the same basic organelles for controlling activities and releasing energy." },
      { code: "1.3", title: "Specialised cells and their adaptations", content: "Cells become specialised by changing shape or organelle content to perform a specific function. Root hair cells have long extensions to increase surface area for water uptake; red blood cells lack a nucleus to carry more haemoglobin; sperm cells have a tail for swimming and many mitochondria for energy." },
      { code: "1.4", title: "Bacterial cells", content: "Bacterial cells are prokaryotes: they have a cell wall and cell membrane surrounding cytoplasm, but no nucleus. Their genetic material is a circular loop of DNA, and they may also contain plasmids. They are much smaller than plant and animal cells and lack membrane-bound organelles such as mitochondria." },
      { code: "1.5", title: "Microscopy and magnification", content: "Light microscopes use lenses to magnify specimens; total magnification equals eyepiece lens magnification multiplied by objective lens magnification. Resolution is the ability to distinguish two separate points; electron microscopes have higher resolution than light microscopes. Actual size = image size divided by magnification (ensure units match)." }
    ],
    examTips: "Draw and label cell diagrams clearly, distinguishing plant from animal cells. Always state which structures are present in both cell types and which are unique to plants or bacteria. For magnification questions, show your working with the formula and convert units (mm to µm) before calculating. Examiners reward accurate labels and linking structure to function for specialised cells.",
    practiceQuestions: [
      { q: "Compare the structure of a plant cell with that of an animal cell. [4]", marks: 4, answer: "• Both have nucleus, cytoplasm, cell membrane, mitochondria, and ribosomes\n• Plant cell has cellulose cell wall; animal cell does not\n• Plant cell has chloroplasts; animal cell does not\n• Plant cell has large permanent vacuole; animal cell has small or no vacuole" },
      { q: "A photomicrograph shows a cell with a length of 60 mm. The actual length of the cell is 0.06 mm. Calculate the magnification. [2]", marks: 2, answer: "• Magnification = image size ÷ actual size\n• = 60 ÷ 0.06 = ×1000" }
    ]
  },

  "classification": {
    quickRecap: "• Binomial name: genus (capital) + species (lowercase), e.g. Homo sapiens\n• Five kingdoms: Prokaryotae, Protoctista, Fungi, Plantae, Animalia\n• Dichotomous keys identify organisms using paired statements\n• Fungi: chitin walls, saprotrophic; Plants: cellulose, photosynthesis\n• Viruses are not in a kingdom — not true cells",
    definitions: [
      { term: "Binomial nomenclature", definition: "Two-part Latin name: genus and species" },
      { term: "Genus", definition: "First part of scientific name; group of closely related species" },
      { term: "Species", definition: "Group of organisms that can interbreed to produce fertile offspring" },
      { term: "Dichotomous key", definition: "Identification tool using pairs of contrasting features" },
      { term: "Saprotroph", definition: "Organism that feeds on dead organic matter externally digested" },
      { term: "Prokaryote", definition: "Kingdom of bacteria — cells without true nucleus" },
      { term: "Protoctist", definition: "Kingdom of mostly unicellular eukaryotes e.g. algae, Amoeba" },
      { term: "Virus", definition: "Non-cellular particle with protein coat and nucleic acid; needs host to reproduce" },
      { term: "Chitin", definition: "Material in fungal cell walls" },
      { term: "Autotroph", definition: "Organism that makes organic food from inorganic sources e.g. plants" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 Oct/Nov 2021 P1", q: "In the name Felis catus, which word is the species?", answer: "catus (second name, lowercase)", marks: 1 },
      { paper: "5090/22 May/June 2020 P2", q: "State two features of fungi that distinguish them from plants.", answer: "Chitin cell wall (not cellulose); no chlorophyll / saprotrophic nutrition (not photosynthetic)", marks: 2 }
    ],
    detailedNotes: "2.1 Binomial system gives universal names; genus capitalised, species lowercase. Avoids confusion from common names.\n\n2.2 Dichotomous keys use couplets — choose one of two paths until identification is reached.\n\n2.3 Five kingdoms group by cell type and nutrition. Prokaryotae lack nucleus; Protoctista mostly unicellular eukaryotes.\n\n2.4 Fungi: chitin walls, hyphae, saprotrophs. Plants: cellulose, chloroplasts. Animals: ingest food, no cell wall.\n\n2.5 Viruses: protein capsid, DNA or RNA, reproduce only in host cells — debate over living status.",
    syllabusPoints: [
      { code: "2.1", title: "The binomial naming system", content: "Organisms are named using two Latin names: the genus (capital letter) and the species (lower case), e.g. Homo sapiens. Names are written in italics when typed or underlined when handwritten. This universal system avoids confusion from common names in different languages." },
      { code: "2.2", title: "Using dichotomous keys", content: "A dichotomous key consists of pairs of contrasting statements (couplets) that lead step by step to the identification of an organism. At each stage the user chooses one of two alternatives until the species is identified. Keys are based on observable features such as leaf shape, number of legs, or presence of wings." },
      { code: "2.3", title: "The five kingdoms", content: "Living organisms are classified into five kingdoms: Prokaryotae (bacteria), Protoctista (e.g. algae, Amoeba), Fungi (e.g. mushrooms, yeast), Plantae (multicellular, photosynthetic), and Animalia (multicellular, heterotrophic). Classification groups organisms by shared features and evolutionary relationships." },
      { code: "2.4", title: "Features of each kingdom", content: "Prokaryotes lack a nucleus and membrane-bound organelles. Protoctists are mostly unicellular eukaryotes. Fungi have chitin cell walls and absorb nutrients by extracellular digestion. Plants have cellulose walls and chlorophyll. Animals ingest food and have no cell wall." },
      { code: "2.5", title: "Viruses", content: "Viruses are not classified as living cells because they cannot reproduce independently; they require a host cell. They consist of a protein coat surrounding genetic material (DNA or RNA). They are much smaller than bacteria and are considered on the boundary between living and non-living." }
    ],
    examTips: "When using a dichotomous key in an exam, work through each couplet systematically and write the path you follow. For classification questions, state the kingdom and give two distinguishing features. Remember viruses are not in the five kingdoms. Practice writing binomial names with correct capitalisation and formatting.",
    practiceQuestions: [
      { q: "Explain why the binomial naming system is useful for scientists. [3]", marks: 3, answer: "• Provides a universal name understood in all countries\n• Avoids confusion from different common names\n• Shows relationship between species (same genus = closely related)" },
      { q: "State two ways in which fungi differ from plants. [2]", marks: 2, answer: "• Fungi have chitin cell walls; plants have cellulose cell walls\n• Fungi do not contain chlorophyll / cannot photosynthesise; plants can photosynthesise\n• Fungi absorb digested nutrients; plants make their own food" }
    ]
  },

  "movement": {
    quickRecap: "• Diffusion: net movement down concentration gradient — no energy\n• Osmosis: water through partially permeable membrane\n• Active transport: against gradient, needs ATP and carrier proteins\n• Plant in pure water → turgid; in concentrated solution → plasmolysed\n• Rate of diffusion increases with temperature, SA, gradient, shorter distance",
    definitions: [
      { term: "Diffusion", definition: "Net movement of particles from high to low concentration down a gradient" },
      { term: "Osmosis", definition: "Diffusion of water through a partially permeable membrane" },
      { term: "Active transport", definition: "Movement of substances against a gradient using energy from respiration" },
      { term: "Partially permeable membrane", definition: "Allows some substances through but not others" },
      { term: "Concentration gradient", definition: "Difference in concentration between two regions" },
      { term: "Turgid", definition: "Plant cell swollen with water pressing on cell wall" },
      { term: "Plasmolysis", definition: "Plant cell membrane pulls away from cell wall after water loss" },
      { term: "Flaccid", definition: "Plant cell not fully inflated; lacks turgor pressure" },
      { term: "Crenation", definition: "Shrinking of animal cell when water leaves by osmosis" },
      { term: "Carrier protein", definition: "Membrane protein that moves specific substances by active transport or facilitated diffusion" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 May/June 2023 P1", q: "Root hair cells absorb nitrate ions from dilute soil water by which process?", answer: "Active transport", marks: 1 },
      { paper: "5090/21 Oct/Nov 2022 P2", q: "Describe and explain what happens to a plant cell placed in a concentrated salt solution.", answer: "Water leaves by osmosis; cytoplasm shrinks; cell becomes plasmolysed/flaccid", marks: 3 }
    ],
    detailedNotes: "3.1 Diffusion examples: O₂ into blood, CO₂ out of leaves. Passive — no energy.\n\n3.2 Faster diffusion with greater gradient, higher temperature, larger SA, thinner distance.\n\n3.3 Osmosis: water moves to region of lower water potential. Pure water → turgid plant cell.\n\n3.4 Active transport in root hairs for nitrate and magnesium when soil concentration is low.\n\n3.5 Practicals: potato cylinders in sugar solutions; Visking tubing; explain using water potential.",
    syllabusPoints: [
      { code: "3.1", title: "Diffusion", content: "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient. It does not require energy and occurs in gases and liquids. Examples include oxygen diffusing into blood at the alveoli and carbon dioxide diffusing out of leaves through stomata." },
      { code: "3.2", title: "Factors affecting diffusion rate", content: "The rate of diffusion increases with greater concentration difference, higher temperature (more kinetic energy), larger surface area, and shorter diffusion distance. These factors explain adaptations such as thin alveolar walls, rich blood supply, and folded membranes in the small intestine." },
      { code: "3.3", title: "Osmosis", content: "Osmosis is the diffusion of water molecules through a partially permeable membrane from a dilute solution (high water potential) to a concentrated solution (low water potential). In plant cells, water entering by osmosis makes them turgid; water leaving causes plasmolysis when the cell membrane pulls away from the cell wall." },
      { code: "3.4", title: "Active transport", content: "Active transport moves substances against a concentration gradient from low to high concentration. It requires energy from respiration and carrier proteins in the cell membrane. Root hair cells use active transport to absorb mineral ions such as nitrate and magnesium from soil water where concentrations are low." },
      { code: "3.5", title: "Practical investigations", content: "Osmosis can be investigated using potato cylinders in different sugar solutions or Visking tubing. Diffusion can be shown with potassium permanganate in water or ammonia and hydrochloric acid. Results should be recorded in tables and explained using water potential and membrane permeability." }
    ],
    examTips: "Always define diffusion, osmosis, and active transport precisely and state whether energy is required. Use the terms 'partially permeable membrane' and 'concentration gradient' correctly. For plant cell questions, link water movement to turgid, flaccid, and plasmolysed states. Explain practical results in terms of water potential differences, not just 'strong' or 'weak' solutions.",
    practiceQuestions: [
      { q: "Describe how a root hair cell absorbs nitrate ions from soil water. [4]", marks: 4, answer: "• Nitrate concentration is lower in the root hair than in the soil\n• Active transport is used because movement is against the concentration gradient\n• Energy from respiration is required\n• Carrier proteins in the cell membrane pump nitrate ions into the cell" },
      { q: "A plant cell is placed in a concentrated salt solution. Describe and explain what happens to the cell. [3]", marks: 3, answer: "• Water leaves the cell by osmosis through the partially permeable membrane\n• Water moves from dilute cell sap to concentrated salt solution\n• The cytoplasm shrinks and the cell becomes plasmolysed / flaccid" }
    ]
  },

  "biological-molecules": {
    quickRecap: "• Starch: iodine → blue-black; reducing sugar: Benedict's + heat → brick red\n• Protein: Biuret → purple; lipid: ethanol emulsion → cloudy white\n• Carbohydrates C,H,O; proteins add nitrogen; lipids mainly C and H\n• Starch and glycogen are glucose polymers; proteins are amino acid chains\n• DNA: nucleotides A,T,C,G in double helix",
    definitions: [
      { term: "Monosaccharide", definition: "Single sugar unit e.g. glucose" },
      { term: "Polysaccharide", definition: "Many monosaccharides joined e.g. starch, glycogen, cellulose" },
      { term: "Amino acid", definition: "Building block of proteins joined by peptide bonds" },
      { term: "Lipid", definition: "Glycerol plus three fatty acids; energy store and membrane component" },
      { term: "Nucleotide", definition: "Subunit of DNA: sugar, phosphate, base" },
      { term: "Gene", definition: "Section of DNA coding for a specific protein" },
      { term: "Reducing sugar", definition: "Sugar that reduces Benedict's reagent when heated" },
      { term: "Enzyme", definition: "Biological catalyst made of protein" },
      { term: "Cellulose", definition: "Structural polysaccharide in plant cell walls" },
      { term: "Peptide bond", definition: "Bond linking amino acids in proteins" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 Oct/Nov 2020 P1", q: "Which test shows a positive result of blue-black?", answer: "Iodine test for starch", marks: 1 },
      { paper: "5090/22 May/June 2021 P2", q: "Describe how you would test a sample for protein.", answer: "Add NaOH then copper sulfate (Biuret); purple/lilac = positive", marks: 3 }
    ],
    detailedNotes: "4.1 Iodine for starch; Benedict's heated for reducing sugars; non-reducing sugars need acid hydrolysis first.\n\n4.2 Biuret for protein; ethanol emulsion for lipids.\n\n4.3 Glucose monomers form starch (plants) and glycogen (animals) for storage.\n\n4.4 Proteins: amino acid chains; shape determines function. Lipids: energy and insulation.\n\n4.5 DNA double helix stores genetic code; genes code for proteins.",
    syllabusPoints: [
      { code: "4.1", title: "Tests for starch and reducing sugars", content: "Starch is detected using iodine solution, which turns blue-black in its presence. Reducing sugars are tested with Benedict's solution: the mixture is heated and a colour change from blue to green, yellow, orange, or brick-red precipitate indicates increasing sugar concentration. Non-reducing sugars must first be hydrolysed with dilute acid." },
      { code: "4.2", title: "Tests for protein and fats", content: "Protein is detected using the Biuret test: sodium hydroxide followed by copper sulfate produces a purple/lilac colour. Fats are tested using the ethanol emulsion test: the sample is mixed with ethanol, then poured into water; a cloudy white emulsion indicates lipid presence." },
      { code: "4.3", title: "Structure of carbohydrates", content: "Simple sugars (monosaccharides) such as glucose are single units. Starch and glycogen are polysaccharides made of many glucose units joined together and used for energy storage in plants and animals respectively. Cellulose forms plant cell walls and is also a polysaccharide." },
      { code: "4.4", title: "Structure of proteins and lipids", content: "Proteins are made of long chains of amino acids linked by peptide bonds; their shape determines function (e.g. enzymes, antibodies). Lipids consist of one glycerol molecule bonded to three fatty acids; they store energy, insulate, and form cell membranes." },
      { code: "4.5", title: "DNA structure", content: "DNA is a large molecule made of nucleotides, each containing a sugar, phosphate group, and nitrogenous base (A, T, C, G). The double helix structure carries genetic information. Genes are sections of DNA that code for specific proteins." }
    ],
    examTips: "Learn food tests with exact reagents, conditions, and positive results — examiners often ask for the complete method. State colours precisely (blue-black for starch, not just blue). When describing large molecules, name their building blocks and give a biological role. Safety: Benedict's test requires heating in a water bath.",
    practiceQuestions: [
      { q: "Describe how you would test a food sample for protein. [3]", marks: 3, answer: "• Add sodium hydroxide solution to the sample\n• Add a few drops of copper sulfate solution (Biuret test)\n• A purple or lilac colour indicates protein is present" },
      { q: "State the building blocks of proteins and lipids. [2]", marks: 2, answer: "• Proteins are made of amino acids\n• Lipids are made of fatty acids and glycerol" }
    ]
  },

  "enzymes": {
    quickRecap: "• Enzymes are protein catalysts — specific active site, reusable\n• Lock-and-key: substrate fits active site → products released\n• Optimum temperature and pH — denaturation above/below destroys shape\n• Substrate concentration limits rate when active sites saturated\n• Uses: biological washing powders, pectinase in fruit juice",
    definitions: [
      { term: "Enzyme", definition: "Protein biological catalyst that speeds reactions without permanent change" },
      { term: "Catalyst", definition: "Substance that increases reaction rate without being used up" },
      { term: "Active site", definition: "Region on enzyme where substrate binds" },
      { term: "Substrate", definition: "Molecule on which an enzyme acts" },
      { term: "Denaturation", definition: "Permanent loss of enzyme shape so active site no longer fits substrate" },
      { term: "Optimum temperature", definition: "Temperature giving maximum enzyme activity" },
      { term: "Optimum pH", definition: "pH giving maximum enzyme activity" },
      { term: "Enzyme-substrate complex", definition: "Temporary combination of enzyme and substrate during reaction" },
      { term: "Amylase", definition: "Enzyme breaking starch to maltose" },
      { term: "Pepsin", definition: "Protein-digesting enzyme in stomach at low pH" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 May/June 2020 P1", q: "Why does enzyme activity decrease at very high temperatures?", answer: "Enzyme denatures; active site shape changed permanently", marks: 2 },
      { paper: "5090/21 Oct/Nov 2021 P2", q: "Describe the lock-and-key mechanism of enzyme action.", answer: "Substrate fits active site; enzyme-substrate complex; products released; enzyme reused", marks: 4 }
    ],
    detailedNotes: "5.1 Enzymes lower activation energy; highly specific; reusable.\n\n5.2 Temperature: rate rises to optimum (~37 °C in humans), then denaturation.\n\n5.3 pH: pepsin pH ~2 in stomach; amylase alkaline in intestine.\n\n5.4 Substrate concentration increases rate until saturation.\n\n5.5 Industrial uses: washing powders (protease, lipase), pectinase, baby food pre-digestion.",
    syllabusPoints: [
      { code: "5.1", title: "Enzymes as biological catalysts", content: "Enzymes are proteins that speed up chemical reactions without being used up. Each enzyme has an active site with a specific shape that fits its substrate (lock-and-key model). The enzyme-substrate complex forms temporarily; products are released and the enzyme is free to catalyse again." },
      { code: "5.2", title: "Effect of temperature on enzyme activity", content: "As temperature rises, enzyme activity increases because molecules move faster and collide more often. At the optimum temperature, activity is maximum. Above the optimum, enzymes denature: the active site shape changes permanently and the enzyme no longer works. Most human enzymes have an optimum around 37 °C." },
      { code: "5.3", title: "Effect of pH on enzyme activity", content: "Each enzyme has an optimum pH at which its active site shape is correct. Pepsin works best in acidic conditions (pH 2) in the stomach; amylase works best in slightly alkaline conditions (pH 7–8) in the small intestine. Extreme pH values cause denaturation." },
      { code: "5.4", title: "Effect of substrate concentration", content: "Increasing substrate concentration increases the rate of reaction until all active sites are occupied (saturation). Beyond this point, adding more substrate has no effect on rate. Enzyme concentration also affects rate: more enzyme molecules mean more active sites available." },
      { code: "5.5", title: "Commercial uses of enzymes", content: "Biological washing powders contain proteases and lipases to digest protein and fat stains at lower temperatures. In the food industry, pectinase breaks down cell walls to increase juice yield, and proteases pre-digest proteins in baby food. Enzymes are specific, efficient, and work at moderate temperatures." }
    ],
    examTips: "Sketch rate graphs for temperature and pH showing optimum and denaturation on the high-temperature/high-pH side. Always explain denaturation as a permanent change to the active site shape. Link enzymes to their location and optimum conditions (pepsin/stomach, amylase/intestine). Use 'rate of reaction' not just 'activity' in extended answers.",
    practiceQuestions: [
      { q: "Explain why enzyme activity decreases at very high temperatures. [3]", marks: 3, answer: "• High temperature causes the enzyme to denature\n• The shape of the active site is permanently changed\n• Substrate no longer fits the active site, so reaction rate falls" },
      { q: "Describe how enzymes in biological washing powders work. [4]", marks: 4, answer: "• Proteases digest protein stains (e.g. blood, egg)\n• Lipases digest fat and oil stains\n• Enzymes are specific to their substrates\n• Washing can be done at lower temperatures, saving energy" }
    ]
  },

  "plant-nutrition": {
    quickRecap: "• Photosynthesis: CO₂ + water → glucose + O₂ (light, chlorophyll)\n• Limiting factors: light intensity, CO₂, temperature\n• Leaf: cuticle, palisade, spongy mesophyll, stomata, veins\n• Nitrates → proteins; magnesium → chlorophyll\n• Destarch plant before testing leaves for starch",
    definitions: [
      { term: "Photosynthesis", definition: "Process making glucose from CO₂ and water using light energy in chloroplasts" },
      { term: "Chlorophyll", definition: "Green pigment absorbing light for photosynthesis" },
      { term: "Limiting factor", definition: "Factor in shortest supply that limits rate of photosynthesis" },
      { term: "Stomata", definition: "Pores in leaf epidermis for gas exchange controlled by guard cells" },
      { term: "Palisade mesophyll", definition: "Layer of tightly packed cells with many chloroplasts near upper leaf surface" },
      { term: "Transpiration", definition: "Loss of water vapour from aerial parts of plant mainly through stomata" },
      { term: "Nitrate ion", definition: "Mineral ion absorbed for amino acids and proteins" },
      { term: "Magnesium ion", definition: "Mineral ion required for chlorophyll synthesis" },
      { term: "Guard cell", definition: "Cell that changes shape to open or close stoma" },
      { term: "Destarching", definition: "Leaving plant in dark to use up stored starch before experiments" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 Oct/Nov 2022 P1", q: "Which gas is taken in through stomata for photosynthesis?", answer: "Carbon dioxide", marks: 1 },
      { paper: "5090/22 May/June 2023 P2", q: "Explain how leaf structure is adapted for photosynthesis.", answer: "Broad flat shape; palisade chloroplasts; air spaces; stomata for CO₂; waxy cuticle reduces water loss", marks: 5 }
    ],
    detailedNotes: "6.1 Photosynthesis in chloroplasts; glucose used for respiration, starch storage, cellulose, proteins.\n\n6.2 Limiting factor graphs — identify which factor limits in each region.\n\n6.3 Leaf adaptations: cuticle, palisade, spongy air spaces, stomata, vascular tissue.\n\n6.4 Mineral ions from soil via root hairs; deficiency symptoms for N, Mg, P, K.\n\n6.5 Investigations: variegated leaves, destarching, starch test, bubble counting with aquatic plants.",
    syllabusPoints: [
      { code: "6.1", title: "Photosynthesis", content: "Photosynthesis occurs in chloroplasts using chlorophyll to trap light energy. Carbon dioxide and water are converted into glucose and oxygen: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Glucose is used for respiration, converted to starch for storage, or built into cellulose, proteins, and fats." },
      { code: "6.2", title: "Limiting factors", content: "The rate of photosynthesis is limited by the factor in shortest supply: light intensity, carbon dioxide concentration, or temperature. At low light, increasing light increases rate; at high light, another factor becomes limiting. Experiments with aquatic plants (e.g. Cabomba) or leaf discs can investigate these factors." },
      { code: "6.3", title: "Leaf structure and adaptations", content: "The waxy cuticle reduces water loss. Palisade mesophyll cells contain many chloroplasts and are packed tightly near the upper surface to absorb light. Spongy mesophyll has air spaces for gas exchange. Stomata in the lower epidermis allow CO₂ in and O₂ out; guard cells control their opening." },
      { code: "6.4", title: "Mineral requirements", content: "Plants absorb mineral ions from soil via root hairs. Nitrates are needed to make amino acids and proteins. Magnesium is needed for chlorophyll. Phosphates are needed for DNA, RNA, and ATP. Potassium is needed for enzyme activation and stomatal function. Deficiency causes specific symptoms such as yellowing or stunted growth." },
      { code: "6.5", title: "Investigating photosynthesis", content: "Starch tests on variegated leaves show chlorophyll is needed (only green areas test positive). Light is shown to be necessary by destarching a plant, covering part of a leaf, and testing for starch. Gas production can be measured using hydrogen carbonate indicator or counting bubbles from an aquatic plant." }
    ],
    examTips: "Write the photosynthesis word and symbol equation correctly. Explain limiting factors with reference to graphs — identify which factor is limiting in each section. Link leaf structure directly to function (palisade = light absorption, stomata = gas exchange). Know mineral deficiency symptoms and what each mineral is used for.",
    practiceQuestions: [
      { q: "Explain how the structure of a leaf is adapted for photosynthesis. [5]", marks: 5, answer: "• Broad, flat shape provides large surface area for light absorption\n• Palisade mesophyll has many chloroplasts near the upper surface\n• Air spaces in spongy mesophyll allow CO₂ to reach cells\n• Stomata allow CO₂ to enter and O₂ to leave\n• Waxy cuticle reduces water loss while being transparent to light" },
      { q: "State the function of nitrates and magnesium in plants. [2]", marks: 2, answer: "• Nitrates are used to make amino acids and proteins\n• Magnesium is used to make chlorophyll" }
    ]
  },

  "transport-plants": {
    quickRecap: "• Xylem: dead hollow vessels — water and minerals upward (transpiration pull)\n• Phloem: sieve tubes + companion cells — sucrose/amino acids (translocation)\n• Transpiration: evaporation from leaves; wind, heat, humidity affect rate\n• Source → sink translocation uses energy\n• Cohesion-tension pulls water column in xylem",
    definitions: [
      { term: "Xylem", definition: "Vascular tissue transporting water and mineral ions upward" },
      { term: "Phloem", definition: "Vascular tissue transporting organic solutes by translocation" },
      { term: "Transpiration", definition: "Loss of water vapour from plant surfaces mainly through stomata" },
      { term: "Translocation", definition: "Transport of sucrose and amino acids in phloem from source to sink" },
      { term: "Transpiration pull", definition: "Tension in xylem drawing water up when water evaporates from leaves" },
      { term: "Source", definition: "Region producing sugars e.g. photosynthesising leaf" },
      { term: "Sink", definition: "Region using or storing sugars e.g. root, fruit" },
      { term: "Lignin", definition: "Substance strengthening xylem vessel walls" },
      { term: "Companion cell", definition: "Cell providing energy for loading sucrose into sieve tubes" },
      { term: "Potometer", definition: "Apparatus measuring water uptake as estimate of transpiration rate" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 May/June 2021 P1", q: "Which tissue transports sucrose in a plant?", answer: "Phloem", marks: 1 },
      { paper: "5090/21 Oct/Nov 2020 P2", q: "Describe the pathway of water from soil to leaf.", answer: "Root hairs → cortex → xylem → transpiration stream → mesophyll → evaporation → stomata", marks: 4 }
    ],
    detailedNotes: "7.1 Xylem: lignified dead cells, continuous tubes from root to leaf.\n\n7.2 Transpiration stream driven by evaporation; cohesion and adhesion maintain water column.\n\n7.3 Environmental factors: temperature, humidity, wind, light (stomata).\n\n7.4 Phloem translocation bidirectional source to sink; requires ATP from companion cells.\n\n7.5 Compare xylem and phloem structure and function; potometer investigations.",
    syllabusPoints: [
      { code: "7.1", title: "Structure and function of xylem", content: "Xylem vessels are dead, hollow cells with lignified walls that provide strength and prevent collapse. They form continuous tubes from roots to leaves. Xylem transports water and dissolved mineral ions upward from roots to all parts of the plant. Lignin also waterproofs the walls so water does not leak out." },
      { code: "7.2", title: "Transpiration and the transpiration stream", content: "Transpiration is the loss of water vapour from aerial parts of a plant, mainly through stomata. Water evaporates from mesophyll cell walls into air spaces and diffuses out through stomata. This creates a transpiration pull that draws water up the xylem in a continuous stream from roots to leaves." },
      { code: "7.3", title: "Factors affecting transpiration rate", content: "Transpiration increases with higher temperature, increased air movement (wind), lower humidity, and brighter light (stomata open). A potometer can measure water uptake as an estimate of transpiration rate. Root pressure also pushes water upward, especially at night when transpiration is low." },
      { code: "7.4", title: "Structure and function of phloem", content: "Phloem consists of sieve tube elements (living cells with perforated end walls) and companion cells that provide energy for loading. Phloem transports sucrose and amino acids by translocation from source (where they are made, e.g. leaves) to sink (where they are used or stored, e.g. roots, fruits)." },
      { code: "7.5", title: "Comparison of xylem and phloem", content: "Xylem transports water and minerals upward only; phloem transports organic solutes in both directions. Xylem cells are dead at maturity; phloem sieve tubes are living. Xylem flow is driven by transpiration pull; phloem translocation requires energy from companion cells." }
    ],
    examTips: "Distinguish clearly between transpiration (water loss) and translocation (sugar transport). Draw xylem and phloem in cross-section of a stem if asked. Explain potometer results using environmental factors. Use the terms source and sink correctly for phloem transport.",
    practiceQuestions: [
      { q: "Explain how water moves from the roots to the leaves of a plant. [4]", marks: 4, answer: "• Water is absorbed by root hair cells and enters xylem vessels\n• Transpiration from leaves creates a transpiration pull\n• Water moves up xylem in a continuous transpiration stream\n• Cohesion between water molecules and adhesion to xylem walls help maintain the column" },
      { q: "State two environmental factors that increase the rate of transpiration. [2]", marks: 2, answer: "• Higher temperature\n• Increased wind / air movement\n• Lower humidity\n• Brighter light (stomata open wider)" }
    ]
  },

  "human-nutrition": {
    quickRecap: "• Balanced diet: carbohydrates, proteins, fats, vitamins, minerals, fibre, water\n• Amylase (mouth/small intestine), pepsin (stomach), lipase (small intestine)\n• Bile emulsifies fats — not an enzyme\n• Villi: large SA, thin walls, blood capillaries, lacteals\n• Peristalsis moves food along alimentary canal",
    definitions: [
      { term: "Digestion", definition: "Breakdown of large insoluble food molecules into small soluble molecules" },
      { term: "Absorption", definition: "Uptake of digested food into blood and lymph" },
      { term: "Enzyme", definition: "Biological catalyst in digestion e.g. amylase, pepsin, lipase" },
      { term: "Bile", definition: "Substance from liver that emulsifies fats" },
      { term: "Villus", definition: "Finger-like projection in small intestine increasing absorption area" },
      { term: "Lacteal", definition: "Lymph vessel in villus absorbing products of fat digestion" },
      { term: "Peristalsis", definition: "Wave of muscle contraction pushing food through gut" },
      { term: "Chyme", definition: "Partially digested food leaving stomach" },
      { term: "Kwashiorkor", definition: "Protein deficiency disease especially in children" },
      { term: "Scurvy", definition: "Disease caused by vitamin C deficiency" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 Oct/Nov 2023 P1", q: "Where does most absorption of digested food occur?", answer: "Small intestine", marks: 1 },
      { paper: "5090/22 May/June 2022 P2", q: "Explain how villi are adapted for absorption.", answer: "Large SA; thin walls; capillaries and lacteals; microvilli; good blood flow", marks: 4 }
    ],
    detailedNotes: "8.1 Nutrient groups and deficiency diseases: scurvy (C), rickets (D/calcium), kwashiorkor (protein).\n\n8.2 Alimentary canal and accessory organs: salivary glands, pancreas, liver, gall bladder.\n\n8.3 Enzyme locations and products; HCl in stomach for pepsin and killing bacteria.\n\n8.4 Villi and microvilli maximise absorption; liver roles include bile and glycogen storage.\n\n8.5 Peristalsis throughout gut; large intestine absorbs water, forms faeces.",
    syllabusPoints: [
      { code: "8.1", title: "Balanced diet and nutrient groups", content: "A balanced diet provides carbohydrates and fats for energy, proteins for growth and repair, vitamins and minerals for metabolic processes, fibre for healthy digestion, and water for transport and chemical reactions. Deficiency diseases include scurvy (vitamin C), rickets (vitamin D/calcium), and kwashiorkor (protein)." },
      { code: "8.2", title: "The alimentary canal", content: "The digestive system includes the mouth, oesophagus, stomach, small intestine, large intestine, rectum, and anus. Accessory organs include the salivary glands, pancreas, and liver. Peristalsis — rhythmic muscular contractions — moves food through the gut. The stomach churns food and the small intestine is the main site of digestion and absorption." },
      { code: "8.3", title: "Digestive enzymes and their actions", content: "Amylase (mouth and small intestine) digests starch to maltose. Pepsin in the stomach digests protein to peptides in acidic conditions. Lipase (small intestine) digests fats to fatty acids and glycerol. Bile from the liver emulsifies fats, increasing surface area for lipase action. Pancreatic enzymes enter the small intestine via the pancreatic duct." },
      { code: "8.4", title: "Absorption in the small intestine", content: "Villi and microvilli line the small intestine, providing a large surface area with thin walls and a rich blood supply for efficient absorption. Digested glucose and amino acids pass into the blood capillaries; fatty acids and glycerol enter the lacteals of the lymph system. Villi increase surface area for diffusion and active transport." },
      { code: "8.5", title: "Role of the liver", content: "The liver produces bile, which is stored in the gall bladder and released into the small intestine to emulsify fats. The liver also regulates blood glucose by storing excess as glycogen and converting glycogen back to glucose when needed. It deaminates excess amino acids and produces urea." }
    ],
    examTips: "Know the order of the alimentary canal and where each enzyme acts. Match enzymes to substrate, product, and location. For villi questions, always link structure (large surface area, thin walls, blood supply) to absorption efficiency. Include bile's emulsifying role — it is not an enzyme.",
    practiceQuestions: [
      { q: "Describe how the small intestine is adapted for the absorption of digested food. [4]", marks: 4, answer: "• Villi and microvilli provide a very large surface area\n• Thin walls (one cell thick) provide a short diffusion distance\n• Rich blood supply maintains a concentration gradient\n• Lacteals absorb fatty acids and glycerol into the lymph" },
      { q: "State the role of bile in digestion. [2]", marks: 2, answer: "• Bile emulsifies fats, breaking them into small droplets\n• This increases the surface area for lipase to digest fats" }
    ]
  },

  "gas-exchange": {
    quickRecap: "• Trachea → bronchi → bronchioles → alveoli; cartilage keeps airways open\n• Gas exchange by diffusion at alveoli — thin walls, large SA, moist, capillaries\n• Inspiration: diaphragm contracts, ribs up/out, volume up, pressure down\n• Expired air has more CO₂ and less O₂ than inspired air\n• Mucus + cilia protect lungs from pathogens and dust",
    definitions: [
      { term: "Alveolus", definition: "Tiny air sac where gas exchange occurs in lungs" },
      { term: "Trachea", definition: "Windpipe lined with ciliated epithelium and cartilage rings" },
      { term: "Bronchus", definition: "Airway branch from trachea into each lung" },
      { term: "Inspiration", definition: "Breathing in — diaphragm contracts, chest volume increases" },
      { term: "Expiration", definition: "Breathing out — muscles relax, elastic recoil reduces volume" },
      { term: "Cilia", definition: "Hair-like structures beating to move mucus upward" },
      { term: "Goblet cell", definition: "Cell secreting mucus in airways" },
      { term: "Cartilage ring", definition: "Structure preventing collapse of trachea and bronchi" },
      { term: "Ventilation", definition: "Movement of air into and out of lungs" },
      { term: "Intercostal muscle", definition: "Muscle between ribs involved in breathing movements" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 May/June 2020 P1", q: "Gas exchange in the lungs occurs by which process?", answer: "Diffusion", marks: 1 },
      { paper: "5090/21 May/June 2021 P2", q: "Describe the mechanism of inspiration.", answer: "External intercostals contract; ribs up/out; diaphragm contracts and flattens; volume increases; pressure falls; air enters", marks: 4 }
    ],
    detailedNotes: "9.1 Breathing system structure; nose warms, filters, moistens air.\n\n9.2 Alveolar adaptations for rapid diffusion of O₂ and CO₂.\n\n9.3 Mechanism of breathing — muscles, volume, pressure changes.\n\n9.4 Inspired vs expired air composition; limewater test for CO₂.\n\n9.5 Smoking: tar, damaged cilia, emphysema, lung cancer, bronchitis.",
    syllabusPoints: [
      { code: "9.1", title: "Structure of the breathing system", content: "Air enters through the nose (filtered, warmed, moistened) and passes through the trachea, bronchi, bronchioles, and into alveoli. Cartilage rings in the trachea and bronchi keep airways open. Ciliated epithelium with goblet cells produces mucus to trap pathogens; cilia beat mucus upward to be swallowed." },
      { code: "9.2", title: "Gas exchange in the alveoli", content: "Alveoli are adapted for efficient gas exchange: thin moist walls (one cell thick), large total surface area, and a rich capillary network maintain steep concentration gradients. Oxygen diffuses from inhaled air into the blood; carbon dioxide diffuses from the blood into the alveoli to be exhaled." },
      { code: "9.3", title: "Mechanism of breathing", content: "During inspiration, the diaphragm contracts and flattens, external intercostal muscles contract raising the ribs, thoracic volume increases, and pressure decreases so air enters. During expiration, the diaphragm and external intercostal muscles relax, volume decreases, pressure increases, and air is forced out." },
      { code: "9.4", title: "Composition of inspired and expired air", content: "Inspired air contains about 21% oxygen, 0.04% carbon dioxide, and varying water vapour. Expired air contains about 16% oxygen, 4% carbon dioxide, and saturated water vapour. A limewater test shows expired air turns limewater cloudy faster due to higher CO₂ concentration." },
      { code: "9.5", title: "Protection of the gas exchange system", content: "Mucus traps dust and microorganisms; cilia move mucus to the throat. White blood cells in the lungs engulf pathogens. Smoking damages cilia, increases mucus production, and increases risk of lung cancer and emphysema. Tar in cigarette smoke is carcinogenic." }
    ],
    examTips: "Label breathing system diagrams accurately and distinguish bronchi from bronchioles. For gas exchange, always mention diffusion, concentration gradients, and alveolar adaptations together. Describe inspiration and expiration in terms of muscle action, volume, and pressure changes — not just 'chest expands'.",
    practiceQuestions: [
      { q: "Describe how the alveoli are adapted for gas exchange. [4]", marks: 4, answer: "• Thin walls (one cell thick) provide a short diffusion distance\n• Large total surface area from millions of alveoli\n• Moist lining for gases to dissolve\n• Rich blood supply maintains steep oxygen and carbon dioxide concentration gradients" },
      { q: "Compare the percentage of carbon dioxide in inspired and expired air. [2]", marks: 2, answer: "• Inspired air contains about 0.04% carbon dioxide\n• Expired air contains about 4% carbon dioxide\n• Carbon dioxide increases because it is a waste product of respiration" }
    ]
  },

  "respiration": {
    quickRecap: "• Aerobic: glucose + O₂ → CO₂ + water + much ATP (mitochondria)\n• Anaerobic muscles: lactic acid; yeast: ethanol + CO₂\n• Respiration ≠ breathing; respiration releases energy in cells\n• Oxygen debt: extra O₂ to oxidise lactic acid after exercise\n• Energy uses: movement, active transport, growth, nerve impulses, heat",
    definitions: [
      { term: "Aerobic respiration", definition: "Breakdown of glucose using oxygen releasing much energy" },
      { term: "Anaerobic respiration", definition: "Glucose breakdown without oxygen — less energy released" },
      { term: "Fermentation", definition: "Anaerobic respiration in yeast producing ethanol and CO₂" },
      { term: "Lactic acid", definition: "Product of anaerobic respiration in muscles causing fatigue" },
      { term: "Oxygen debt", definition: "Extra oxygen needed after exercise to remove lactic acid" },
      { term: "ATP", definition: "Molecule storing and transferring energy for cell reactions" },
      { term: "Mitochondrion", definition: "Organelle where aerobic respiration occurs" },
      { term: "Glucose", definition: "Sugar substrate for respiration" },
      { term: "Respiration", definition: "Chemical process releasing energy from food in cells" },
      { term: "Breathing", definition: "Physical ventilation of lungs — not the same as respiration" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 Oct/Nov 2021 P1", q: "Where does aerobic respiration occur in the cell?", answer: "Mitochondria", marks: 1 },
      { paper: "5090/22 Oct/Nov 2022 P2", q: "Compare aerobic and anaerobic respiration in humans.", answer: "Aerobic uses O₂, complete breakdown, CO₂+water, mitochondria, more ATP; anaerobic → lactic acid, cytoplasm, less ATP", marks: 4 }
    ],
    detailedNotes: "10.1 Aerobic equation and role of mitochondria.\n\n10.2 Energy transfer to ATP for cellular work.\n\n10.3 Muscle anaerobic respiration during vigorous exercise; fatigue from lactic acid.\n\n10.4 Yeast fermentation in brewing and bread-making.\n\n10.5 Comparison table aerobic vs anaerobic; oxygen debt explanation.",
    syllabusPoints: [
      { code: "10.1", title: "Aerobic respiration", content: "Aerobic respiration releases energy from glucose using oxygen, producing carbon dioxide and water. It occurs in mitochondria: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. Energy is transferred to ATP for cellular processes. Aerobic respiration releases more energy per glucose molecule than anaerobic respiration." },
      { code: "10.2", title: "Uses of energy from respiration", content: "Energy from respiration powers active transport, muscle contraction, cell division, protein synthesis, nerve impulse transmission, and maintenance of body temperature in mammals. Without respiration, cells cannot carry out essential life processes." },
      { code: "10.3", title: "Anaerobic respiration in muscles", content: "During vigorous exercise, oxygen supply may be insufficient and muscles respire anaerobically. Glucose is converted to lactic acid with a small energy yield. Lactic acid causes muscle fatigue and must be oxidised after exercise (oxygen debt), which is why breathing rate remains high after exercise." },
      { code: "10.4", title: "Anaerobic respiration in yeast", content: "Yeast ferments glucose to ethanol and carbon dioxide when oxygen is absent: glucose → ethanol + CO₂ + energy. This is used in brewing and bread-making — CO₂ makes bread rise and ethanol forms alcoholic drinks. Fermentation releases less energy than aerobic respiration." },
      { code: "10.5", title: "Comparing aerobic and anaerobic respiration", content: "Aerobic respiration requires oxygen, occurs in mitochondria, produces CO₂ and water, and releases much more energy. Anaerobic respiration does not use oxygen, occurs in cytoplasm, produces lactic acid (muscles) or ethanol and CO₂ (yeast), and releases less energy." }
    ],
    examTips: "Write both word and symbol equations for aerobic respiration. Do not confuse respiration with breathing — respiration is a chemical process in cells. Explain oxygen debt as the extra oxygen needed to break down accumulated lactic acid. Compare aerobic and anaerobic respiration in a table format when asked.",
    practiceQuestions: [
      { q: "State three uses of energy released during respiration. [3]", marks: 3, answer: "• Muscle contraction\n• Active transport across cell membranes\n• Cell division / protein synthesis\n• Nerve impulse transmission\n• Maintaining body temperature" },
      { q: "Explain why a person continues to breathe heavily after vigorous exercise. [3]", marks: 3, answer: "• Anaerobic respiration in muscles produces lactic acid\n• Extra oxygen is needed to oxidise the lactic acid (oxygen debt)\n• Heavy breathing supplies the additional oxygen required" }
    ]
  },

  "transport-humans": {
    quickRecap: "• Double circulation: pulmonary (heart–lungs) and systemic (heart–body)\n• Heart: RA/RV (deoxygenated), LA/LV (oxygenated); LV wall thickest\n• Arteries away, veins to heart (valves); capillaries for exchange\n• Haemoglobin carries O₂; platelets clot; plasma transports dissolved substances\n• Cardiac cycle: atria then ventricles contract, then diastole",
    definitions: [
      { term: "Double circulation", definition: "Blood passes through heart twice per complete circuit" },
      { term: "Haemoglobin", definition: "Red pigment in red blood cells binding oxygen as oxyhaemoglobin" },
      { term: "Artery", definition: "Blood vessel carrying blood away from heart under high pressure" },
      { term: "Vein", definition: "Blood vessel returning blood to heart; often has valves" },
      { term: "Capillary", definition: "Narrow thin-walled vessel for exchange between blood and tissues" },
      { term: "Platelet", definition: "Cell fragment involved in blood clotting" },
      { term: "Plasma", definition: "Liquid part of blood transporting dissolved substances" },
      { term: "Pulmonary artery", definition: "Vessel carrying deoxygenated blood from heart to lungs" },
      { term: "Aorta", definition: "Main artery carrying oxygenated blood from left ventricle to body" },
      { term: "Pacemaker", definition: "Sinoatrial node initiating heartbeat" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 May/June 2022 P1", q: "Blood leaving the left ventricle goes to the:", answer: "Body (via aorta) — oxygenated blood", marks: 1 },
      { paper: "5090/21 Oct/Nov 2020 P2", q: "Describe the path of blood through the heart and lungs.", answer: "Vena cava → RA → RV → pulmonary artery → lungs → pulmonary vein → LA → LV → aorta", marks: 5 }
    ],
    detailedNotes: "11.1 Double circulation increases efficiency of oxygen delivery.\n\n11.2 Heart chambers, valves preventing backflow; left ventricle muscular wall.\n\n11.3 Blood vessel structure linked to pressure and exchange function.\n\n11.4 Blood components and roles; oxyhaemoglobin formation and dissociation.\n\n11.5 Cardiac cycle and pacemaker; exercise increases heart rate.",
    syllabusPoints: [
      { code: "11.1", title: "The circulatory system and double circulation", content: "Humans have a double circulatory system: blood passes through the heart twice for each complete circuit. The pulmonary circulation carries blood from the heart to the lungs and back for gas exchange. The systemic circulation carries blood from the heart to the body tissues and back." },
      { code: "11.2", title: "Structure of the heart", content: "The heart has four chambers: right atrium and ventricle receive deoxygenated blood; left atrium and ventricle receive oxygenated blood. Valves (bicuspid/tricuspid and semilunar) prevent backflow. The left ventricle has a thicker muscular wall because it pumps blood to the entire body at high pressure." },
      { code: "11.3", title: "Blood vessels", content: "Arteries carry blood away from the heart under high pressure; they have thick muscular and elastic walls. Veins carry blood to the heart under low pressure; they have thinner walls and valves to prevent backflow. Capillaries are one cell thick with narrow lumen for exchange of materials between blood and tissues." },
      { code: "11.4", title: "Components of blood", content: "Plasma is the liquid that transports CO₂, urea, hormones, heat, and dissolved nutrients. Red blood cells contain haemoglobin (no nucleus) and transport oxygen. White blood cells defend against pathogens by phagocytosis and antibody production. Platelets are cell fragments involved in blood clotting." },
      { code: "11.5", title: "The cardiac cycle", content: "The heart beats rhythmically: atria contract (atrial systole), then ventricles contract (ventricular systole), then all chambers relax (diastole). Blood flows atria → ventricles → arteries. The sinoatrial node (pacemaker) initiates each heartbeat." }
    ],
    examTips: "Trace the path of blood through the heart and lungs step by step. Explain why the left ventricle wall is thicker. For blood vessel comparisons, link structure to function and pressure. Know haemoglobin's role in oxygen transport and why red blood cells lack a nucleus.",
    practiceQuestions: [
      { q: "Describe the path of blood through the heart and lungs. [5]", marks: 5, answer: "• Deoxygenated blood enters the right atrium from the vena cava\n• Passes to the right ventricle and is pumped to the lungs via the pulmonary artery\n• Oxygenated blood returns to the left atrium via the pulmonary vein\n• Passes to the left ventricle and is pumped to the body via the aorta" },
      { q: "Explain how the structure of capillaries is adapted for their function. [3]", marks: 3, answer: "• Walls are one cell thick for a short diffusion distance\n• Narrow lumen slows blood flow, allowing time for exchange\n• Permeable walls allow substances to pass between blood and tissue fluid" }
    ]
  },

  "disease-immunity": {
    quickRecap: "• Pathogens: bacteria, viruses, fungi, protoctists — different transmission routes\n• Phagocytes engulf; lymphocytes produce specific antibodies to antigens\n• Vaccination → memory cells → faster secondary response; herd immunity\n• Antibiotics kill bacteria only — not viruses\n• HIV attacks T cells; malaria via Anopheles mosquito and Plasmodium",
    definitions: [
      { term: "Pathogen", definition: "Microorganism causing disease" },
      { term: "Antigen", definition: "Molecule triggering immune response, often on pathogen surface" },
      { term: "Antibody", definition: "Protein made by lymphocytes binding to specific antigen" },
      { term: "Phagocyte", definition: "White blood cell that engulfs and digests pathogens" },
      { term: "Lymphocyte", definition: "White blood cell producing antibodies" },
      { term: "Memory cell", definition: "Long-lived cell enabling rapid response on re-infection" },
      { term: "Vaccination", definition: "Introducing antigens to stimulate active immunity without disease" },
      { term: "Antibiotic", definition: "Drug killing bacteria or stopping their reproduction" },
      { term: "Herd immunity", definition: "Protection of community when enough people are immune" },
      { term: "Vector", definition: "Organism transferring pathogen between hosts e.g. mosquito" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 Oct/Nov 2020 P1", q: "Antibodies are:", answer: "Proteins that bind to specific antigens", marks: 1 },
      { paper: "5090/22 May/June 2023 P2", q: "Explain how vaccination provides long-term immunity.", answer: "Stimulates antibodies and memory cells; rapid secondary response on re-infection", marks: 4 }
    ],
    detailedNotes: "12.1 Transmission: contact, food, water, droplets, vectors. Hygiene and safe water prevent spread.\n\n12.2 Immune response: phagocytosis, antibody production, memory cells.\n\n12.3 Active vs passive immunity; vaccination schedules and herd immunity.\n\n12.4 Antibiotic resistance from overuse; antivirals difficult to develop.\n\n12.5 HIV/AIDS and malaria: pathogens, transmission, control strategies.",
    syllabusPoints: [
      { code: "12.1", title: "Pathogens and disease transmission", content: "Pathogens are microorganisms that cause disease: bacteria, viruses, fungi, and protoctists. Transmission routes include direct contact, contaminated food or water, droplet infection, and vectors such as the Anopheles mosquito transmitting malaria. Preventing transmission includes hygiene, safe water, and vector control." },
      { code: "12.2", title: "The immune response", content: "White blood cells defend the body: phagocytes engulf and digest pathogens; lymphocytes produce antibodies specific to antigens on pathogens. Antibodies cause agglutination and neutralisation. Memory cells remain after infection and enable a faster, stronger secondary response on re-exposure." },
      { code: "12.3", title: "Active and passive immunity", content: "Active immunity results from the body producing its own antibodies after infection or vaccination; memory cells provide long-term protection. Passive immunity is temporary protection from antibodies received from another source (e.g. breast milk, antiserum). Vaccination introduces weakened or dead pathogens to stimulate active immunity without causing disease." },
      { code: "12.4", title: "Antibiotics and antiviral drugs", content: "Antibiotics kill bacteria or prevent their reproduction; they are ineffective against viruses because viruses reproduce inside host cells. Overuse of antibiotics leads to resistant bacterial strains. Antiviral drugs are difficult to develop because they must target viruses without harming host cells." },
      { code: "12.5", title: "HIV/AIDS and malaria", content: "HIV is a virus that attacks helper T lymphocytes, weakening the immune system and leading to AIDS. It is transmitted through blood, sexual contact, and from mother to child. Malaria is caused by the protoctist Plasmodium, transmitted by Anopheles mosquitoes. Control includes insecticide-treated nets, removing breeding sites, and antimalarial drugs." }
    ],
    examTips: "Distinguish clearly between bacteria and viruses when discussing antibiotics. Explain vaccination in terms of memory cells and secondary response. For HIV and malaria, state the pathogen type, transmission method, and control measures. Use correct terminology: antigen, antibody, phagocyte, lymphocyte.",
    practiceQuestions: [
      { q: "Explain how vaccination provides long-term immunity against a disease. [4]", marks: 4, answer: "• Vaccine contains weakened or dead pathogen or its antigens\n• White blood cells produce antibodies and memory cells\n• On re-infection, memory cells rapidly produce antibodies\n• Secondary immune response is faster and stronger, preventing disease" },
      { q: "Explain why antibiotics are not effective against viral infections. [2]", marks: 2, answer: "• Antibiotics work by targeting bacterial cell walls or metabolism\n• Viruses reproduce inside host cells and lack bacterial structures\n• Antibiotics cannot destroy viruses without damaging host cells" }
    ]
  },

  "excretion": {
    quickRecap: "• Excretion removes metabolic wastes — CO₂ (lungs), urea (kidneys), sweat (skin)\n• Urea formed in liver by deamination of excess amino acids\n• Nephron: ultrafiltration in glomerulus → selective reabsorption in tubules\n• ADH increases water reabsorption when blood is concentrated\n• Dialysis filters blood when kidneys fail",
    definitions: [
      { term: "Excretion", definition: "Removal of toxic metabolic waste products from the body" },
      { term: "Egestion", definition: "Removal of undigested food as faeces — not excretion" },
      { term: "Urea", definition: "Nitrogenous waste made in liver from deamination" },
      { term: "Nephron", definition: "Functional unit of kidney where urine is formed" },
      { term: "Ultrafiltration", definition: "Filtering small molecules from blood in glomerulus under pressure" },
      { term: "Selective reabsorption", definition: "Useful substances returned from filtrate to blood in tubules" },
      { term: "ADH", definition: "Hormone increasing water reabsorption in kidney when blood is concentrated" },
      { term: "Osmoregulation", definition: "Control of water content of blood and cells" },
      { term: "Deamination", definition: "Removal of amino group from excess amino acids in liver forming urea" },
      { term: "Dialysis", definition: "Artificial filtering of blood in kidney failure" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 May/June 2023 P1", q: "Urea is removed from the body mainly by the:", answer: "Kidneys (in urine)", marks: 1 },
      { paper: "5090/21 May/June 2020 P2", q: "Describe processes in a nephron.", answer: "Ultrafiltration in glomerulus; glucose reabsorbed; water reabsorption controlled by ADH; urine to bladder", marks: 5 }
    ],
    detailedNotes: "13.1 Excretion vs egestion; organs of excretion.\n\n13.2 Kidney structure; nephron regions: glomerulus, tubules, collecting duct.\n\n13.3 Ultrafiltration then selective reabsorption — glucose never in normal urine.\n\n13.4 ADH and negative feedback in osmoregulation.\n\n13.5 Dialysis and kidney transplants; skin in temperature and salt excretion.",
    syllabusPoints: [
      { code: "13.1", title: "Excretion and its importance", content: "Excretion is the removal of toxic waste products of metabolism from the body. Carbon dioxide is excreted by the lungs during exhalation. Urea is excreted by the kidneys in urine. Excess water and salts are also removed by the kidneys and in sweat through the skin." },
      { code: "13.2", title: "Structure of the kidney and nephron", content: "Each kidney contains about one million nephrons — the functional units. Blood enters the glomerulus under pressure; small molecules (water, glucose, urea, salts) are filtered into the Bowman's capsule. The filtrate passes through convoluted tubules and the loop of Henle where selective reabsorption occurs." },
      { code: "13.3", title: "Ultrafiltration and selective reabsorption", content: "Ultrafiltration in the glomerulus produces filtrate containing water, glucose, urea, and ions. All glucose and most water and useful ions are reabsorbed into the blood by selective reabsorption. Urea, excess water, and excess salts pass into urine. The remaining fluid collects in the ureter and bladder." },
      { code: "13.4", title: "Role of ADH in osmoregulation", content: "Antidiuretic hormone (ADH) is released by the pituitary gland when blood is too concentrated. ADH makes the kidney tubules more permeable to water, so more water is reabsorbed and less urine is produced. When blood is dilute, ADH secretion decreases and more dilute urine is excreted." },
      { code: "13.5", title: "Dialysis and kidney failure", content: "Kidney failure means urea and excess water cannot be removed, leading to poisoning. Dialysis machines filter blood artificially through a partially permeable membrane, removing urea and balancing water and salts. Kidney transplants offer a permanent solution but require tissue matching and immunosuppressant drugs." }
    ],
    examTips: "Do not confuse excretion with egestion (removal of undigested food). Explain nephron function in order: ultrafiltration then selective reabsorption. Link ADH to blood concentration and urine volume. Know what is filtered, reabsorbed, and excreted — glucose should never appear in urine of a healthy person.",
    practiceQuestions: [
      { q: "Describe the processes occurring in a nephron. [5]", marks: 5, answer: "• Blood is ultrafiltered in the glomerulus into the Bowman's capsule\n• Filtrate contains water, glucose, urea, and salts\n• All glucose and most water are reabsorbed by selective reabsorption\n• Useful ions are reabsorbed; urea and excess water pass to urine\n• Urine collects in the bladder via the ureter" },
      { q: "Explain the role of ADH when the body is dehydrated. [3]", marks: 3, answer: "• Blood becomes concentrated when dehydrated\n• Pituitary gland releases more ADH\n• Kidney tubules become more permeable to water\n• More water is reabsorbed; smaller volume of concentrated urine is produced" }
    ]
  },

  "coordination-control": {
    quickRecap: "• CNS: brain and spinal cord; PNS connects to receptors and effectors\n• Reflex arc: receptor → sensory → relay → motor → effector (fast, automatic)\n• Synapse uses neurotransmitters — one-way chemical transmission\n• Insulin lowers glucose; glucagon raises it — negative feedback\n• Eye: accommodation by ciliary muscles and lens shape",
    definitions: [
      { term: "Neurone", definition: "Nerve cell transmitting electrical impulses" },
      { term: "Synapse", definition: "Gap between neurones where neurotransmitter crosses" },
      { term: "Reflex", definition: "Fast automatic response via reflex arc without conscious thought" },
      { term: "Receptor", definition: "Cell or organ detecting stimulus" },
      { term: "Effector", definition: "Muscle or gland responding to nervous or hormonal signal" },
      { term: "Homeostasis", definition: "Maintenance of stable internal environment" },
      { term: "Insulin", definition: "Hormone lowering blood glucose by converting glucose to glycogen" },
      { term: "Glucagon", definition: "Hormone raising blood glucose by breaking down glycogen" },
      { term: "Hormone", definition: "Chemical messenger in blood from endocrine gland" },
      { term: "Accommodation", definition: "Changing lens shape to focus near or distant objects" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 Oct/Nov 2022 P1", q: "When blood glucose is low the pancreas secretes:", answer: "Glucagon", marks: 1 },
      { paper: "5090/22 May/June 2021 P2", q: "Describe the pathway of a reflex action.", answer: "Receptor → sensory neurone → relay in CNS → motor neurone → effector contracts", marks: 4 }
    ],
    detailedNotes: "14.1 Nervous system organisation; types of neurones.\n\n14.2 Reflex arc protects body; spinal cord can coordinate without brain initially.\n\n14.3 Synapses and neurotransmitters; comparison with hormonal control.\n\n14.4 Eye structure; pupil reflex and accommodation mechanisms.\n\n14.5 Blood glucose control; adrenaline fight-or-flight responses.",
    syllabusPoints: [
      { code: "14.1", title: "The nervous system", content: "The central nervous system (CNS) consists of the brain and spinal cord. Peripheral nerves connect the CNS to receptors and effectors. Neurones transmit electrical impulses: sensory neurones carry signals from receptors to CNS; motor neurones carry signals from CNS to effectors; relay neurones connect them in the CNS." },
      { code: "14.2", title: "The reflex arc", content: "A reflex is a fast, automatic response to a stimulus that protects the body. The reflex arc pathway is: receptor → sensory neurone → relay neurone in spinal cord → motor neurone → effector (muscle or gland). Reflexes do not involve the brain initially, so the response is rapid." },
      { code: "14.3", title: "Synapses and neurotransmitters", content: "At a synapse, an impulse arrives at the end of a neurone and triggers release of neurotransmitter chemicals into the gap. These diffuse across the synapse and bind to receptors on the next neurone, generating a new impulse. Synapses ensure one-way transmission and allow the brain to process information." },
      { code: "14.4", title: "The eye and accommodation", content: "The cornea and lens refract light onto the retina where receptors detect the image. The iris controls pupil size to regulate light entry. Ciliary muscles adjust lens shape for accommodation: contracting for near objects (thicker lens) and relaxing for distant objects (thinner lens)." },
      { code: "14.5", title: "Hormones and homeostasis", content: "Hormones are chemical messengers secreted by endocrine glands into the blood. Insulin (pancreas) lowers blood glucose by promoting glycogen storage; glucagon raises it by converting glycogen to glucose. Adrenaline prepares the body for fight-or-flight: increased heart rate, breathing rate, and blood glucose." }
    ],
    examTips: "Draw and label reflex arc diagrams with correct neurone types. Compare nervous and hormonal coordination: speed, duration, and pathway. For eye questions, explain accommodation in terms of ciliary muscles and lens shape. Link insulin and glucagon to blood glucose control with negative feedback.",
    practiceQuestions: [
      { q: "Describe the pathway of a reflex action. [4]", marks: 4, answer: "• Stimulus detected by receptor\n• Impulse passes along sensory neurone to spinal cord\n• Relay neurone connects to motor neurone\n• Motor neurone carries impulse to effector (muscle contracts or gland secretes)" },
      { q: "Explain how insulin controls blood glucose concentration. [3]", marks: 3, answer: "• Released by the pancreas when blood glucose is high\n• Causes liver and muscles to convert glucose to glycogen for storage\n• Blood glucose concentration decreases back to normal (negative feedback)" }
    ]
  },

  "coordination-plants": {
    quickRecap: "• Tropisms: growth responses — phototropism (light), geotropism (gravity), hydrotropism (water)\n• Auxin from shoot/root tips promotes cell elongation\n• Shoot bends to light: auxin moves to shaded side\n• Commercial uses: rooting powder, selective weedkillers, ethene ripening\n• Plant responses slower than animal reflexes; no nervous system",
    definitions: [
      { term: "Tropism", definition: "Growth response of plant to directional stimulus" },
      { term: "Phototropism", definition: "Growth response to light — shoots positive, roots negative" },
      { term: "Geotropism", definition: "Growth response to gravity — roots positive, shoots negative" },
      { term: "Auxin", definition: "Plant hormone controlling cell elongation" },
      { term: "Positive tropism", definition: "Growth towards the stimulus" },
      { term: "Negative tropism", definition: "Growth away from the stimulus" },
      { term: "Ethene", definition: "Plant hormone stimulating fruit ripening" },
      { term: "Gibberellin", definition: "Hormone promoting stem elongation and seed germination" },
      { term: "Apical meristem", definition: "Growing tip producing auxin" },
      { term: "Selective weedkiller", definition: "Synthetic auxin disrupting growth of broad-leaved weeds" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 May/June 2020 P1", q: "Auxin moves to which side of a shoot in unilateral light?", answer: "Shaded side", marks: 1 },
      { paper: "5090/21 Oct/Nov 2021 P2", q: "Explain how a shoot bends towards light.", answer: "Auxin to shaded side; more elongation there; shoot bends towards light", marks: 4 }
    ],
    detailedNotes: "15.1 Types of tropisms and their adaptive significance.\n\n15.2 Auxin distribution in phototropism and geotropism; different root vs shoot sensitivity.\n\n15.3 Experiments: tip removal, opaque caps, agar blocks with auxin.\n\n15.4 Commercial applications of auxins, ethene, gibberellins.\n\n15.5 Comparison with animal coordination — speed and mechanism.",
    syllabusPoints: [
      { code: "15.1", title: "Tropisms in plants", content: "Tropisms are growth responses to directional stimuli. Phototropism is growth towards light; geotropism (gravitropism) is response to gravity (roots grow down, shoots grow up); hydrotropism is growth towards water. Positive tropism is growth towards the stimulus; negative is growth away from it." },
      { code: "15.2", title: "The role of auxin", content: "Auxin is a plant hormone made in shoot and root tips. It diffuses away from the tip and promotes cell elongation. In phototropism, auxin moves to the shaded side of the shoot, causing uneven growth so the shoot bends towards light. At high concentrations in roots, auxin inhibits growth." },
      { code: "15.3", title: "Investigating phototropism", content: "Seedlings can be grown with light from one side to show bending towards light. Removing the tip or placing an opaque cap prevents the response, showing the tip produces the stimulus chemical. Agar blocks containing auxin can restore bending when placed on decapitated shoots." },
      { code: "15.4", title: "Commercial uses of plant hormones", content: "Auxins in rooting powder stimulate root growth on cuttings. Selective weedkillers contain synthetic auxins that disrupt broad-leaved weed growth at low concentrations. Ethene (ethylene) ripens fruit and is used commercially to synchronise ripening. Gibberellins promote stem elongation and seed germination." },
      { code: "15.5", title: "Comparison with animal coordination", content: "Plant responses are slower, involve growth movements rather than rapid muscle action, and use hormones that diffuse locally rather than being transported in a circulatory system. Plants can respond to light, gravity, and touch (thigmotropism in climbing plants) without a nervous system." }
    ],
    examTips: "Explain phototropism using auxin redistribution — do not say 'auxin is attracted to light'. Know that auxin promotes shoot growth but inhibits root growth at high concentrations. Give specific commercial examples with the hormone used. Distinguish tropisms from nastic movements (non-directional).",
    practiceQuestions: [
      { q: "Explain how a shoot bends towards light. [4]", marks: 4, answer: "• Auxin produced in the shoot tip moves to the shaded side\n• Higher auxin concentration on the shaded side promotes cell elongation\n• Shaded side grows faster than the lit side\n• Shoot bends towards the light source" },
      { q: "State one commercial use of auxin and explain how it works. [2]", marks: 2, answer: "• Used in rooting powder to stimulate root development on cuttings\n• Auxin promotes cell division and elongation in root tissue\n• OR: selective weedkiller — synthetic auxins disrupt growth of broad-leaved weeds at low doses" }
    ]
  },

  "development": {
    quickRecap: "• Mitosis: one division → 2 identical diploid cells (growth, repair, asexual reproduction)\n• Meiosis: two divisions → 4 haploid gametes with variation\n• Fertilisation restores diploid number (n + n = 2n)\n• Sexual reproduction gives variation; asexual gives clones quickly\n• Examples: runners, budding, cuttings vs gametes and fertilisation",
    definitions: [
      { term: "Mitosis", definition: "Nuclear division producing two genetically identical diploid cells" },
      { term: "Meiosis", definition: "Division producing four haploid genetically different gametes" },
      { term: "Diploid", definition: "Cell with full chromosome number 2n" },
      { term: "Haploid", definition: "Cell with half chromosome number n" },
      { term: "Gamete", definition: "Haploid sex cell e.g. sperm or egg" },
      { term: "Fertilisation", definition: "Fusion of gamete nuclei forming diploid zygote" },
      { term: "Zygote", definition: "Diploid cell formed at fertilisation developing into organism" },
      { term: "Crossing over", definition: "Exchange of chromosome segments in meiosis increasing variation" },
      { term: "Asexual reproduction", definition: "Reproduction without gametes producing genetically identical offspring" },
      { term: "Chromatid", definition: "One of two identical copies of a chromosome after DNA replication" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 May/June 2021 P1", q: "Mitosis produces cells that are:", answer: "Genetically identical and diploid", marks: 1 },
      { paper: "5090/22 Oct/Nov 2023 P2", q: "Compare mitosis and meiosis.", answer: "Mitosis: 2 diploid identical; growth/repair. Meiosis: 4 haploid different gametes; variation", marks: 4 }
    ],
    detailedNotes: "16.1 Mitosis stages overview; role in growth, repair, cloning.\n\n16.2 Meiosis halves chromosome number; crossing over and independent assortment.\n\n16.3 Sexual vs asexual reproduction advantages and disadvantages.\n\n16.4 Human chromosome numbers: 46 in body cells, 23 in gametes.\n\n16.5 Examples of asexual reproduction in plants and microorganisms.",
    syllabusPoints: [
      { code: "16.1", title: "Mitosis and its role", content: "Mitosis is nuclear division producing two genetically identical diploid daughter cells. It occurs during growth, repair, and asexual reproduction. Before mitosis, DNA replicates so each chromosome consists of two chromatids. Stages include prophase, metaphase, anaphase, and telophase, followed by cytokinesis." },
      { code: "16.2", title: "Meiosis and gamete formation", content: "Meiosis produces four haploid gametes from one diploid cell through two divisions. It halves the chromosome number so fertilisation restores the diploid number. Crossing over and independent assortment during meiosis create genetic variation among gametes." },
      { code: "16.3", title: "Sexual and asexual reproduction", content: "Sexual reproduction involves fusion of male and female gametes (fertilisation), producing offspring with genetic variation. Asexual reproduction produces genetically identical clones by mitosis only — examples include runners in strawberries, budding in yeast, and vegetative propagation from cuttings." },
      { code: "16.4", title: "Advantages of each reproduction type", content: "Sexual reproduction produces variation, helping populations adapt to changing environments and reducing the effect of disease. Asexual reproduction is faster, requires only one parent, and preserves successful characteristics — useful in stable environments and commercial crop production." },
      { code: "16.5", title: "Chromosomes and fertilisation", content: "Body cells are diploid (2n); gametes are haploid (n). Human body cells have 46 chromosomes; gametes have 23. Fertilisation fuses two haploid nuclei to form a diploid zygote that divides by mitosis to develop into a new organism." }
    ],
    examTips: "State the number of cells produced and chromosome number for mitosis (2 diploid) vs meiosis (4 haploid). Explain why variation is important in sexual reproduction. Give named examples of asexual reproduction in plants and microorganisms. Do not confuse chromatids with chromosomes.",
    practiceQuestions: [
      { q: "Compare mitosis and meiosis. [4]", marks: 4, answer: "• Mitosis produces 2 cells; meiosis produces 4 cells\n• Mitosis produces diploid cells; meiosis produces haploid gametes\n• Mitosis produces identical cells; meiosis produces genetically different cells\n• Mitosis for growth and repair; meiosis for gamete formation" },
      { q: "State two advantages of sexual reproduction. [2]", marks: 2, answer: "• Produces genetic variation among offspring\n• Variation helps species adapt to environmental change\n• Reduces impact of disease on entire population" }
    ]
  },

  "inheritance": {
    quickRecap: "• Gene = DNA coding for protein; allele = alternative form; locus on chromosome\n• Dominant expressed with one copy; recessive needs two copies\n• Punnett squares predict genotype and phenotype ratios\n• Codominance: ABO blood groups IA, IB, i\n• Variation: meiosis, mutation, random fertilisation, environment",
    definitions: [
      { term: "Gene", definition: "Length of DNA coding for a specific protein" },
      { term: "Allele", definition: "Alternative form of a gene" },
      { term: "Dominant allele", definition: "Allele expressed in phenotype when present" },
      { term: "Recessive allele", definition: "Allele expressed only in homozygous form" },
      { term: "Genotype", definition: "Alleles an organism possesses" },
      { term: "Phenotype", definition: "Observable characteristics of organism" },
      { term: "Codominance", definition: "Both alleles expressed in heterozygote e.g. blood group AB" },
      { term: "Homozygous", definition: "Having two identical alleles for a gene" },
      { term: "Heterozygous", definition: "Having two different alleles for a gene" },
      { term: "Mutation", definition: "Change in DNA base sequence" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 Oct/Nov 2023 P1", q: "Aa × Aa offspring phenotype ratio:", answer: "3:1 (dominant : recessive)", marks: 1 },
      { paper: "5090/21 May/June 2022 P2", q: "Explain codominance using ABO blood groups.", answer: "IA and IB both expressed in AB; i recessive; O is ii", marks: 4 }
    ],
    detailedNotes: "17.1 Chromosomes, genes, alleles; haploid and diploid in humans.\n\n17.2 Monohybrid crosses and Punnett squares; expected ratios.\n\n17.3 Codominance and multiple alleles in ABO system.\n\n17.4 Sex determination XX/XY; 1:1 ratio of offspring.\n\n17.5 Continuous vs discontinuous variation; genetic and environmental causes.",
    syllabusPoints: [
      { code: "17.1", title: "Genes, alleles, and chromosomes", content: "A gene is a length of DNA coding for a specific protein, located at a fixed position (locus) on a chromosome. An allele is an alternative form of a gene. Dominant alleles are expressed if present; recessive alleles are only expressed in homozygous form. Humans have 23 pairs of chromosomes including XY (male) or XX (female)." },
      { code: "17.2", title: "Monohybrid inheritance and Punnett squares", content: "A monohybrid cross involves one gene. Gametes carry one allele each. Punnett squares predict offspring genotypes and phenotypes. A cross between two heterozygotes (Aa × Aa) gives a 3:1 phenotype ratio and 1:2:1 genotype ratio in the offspring." },
      { code: "17.3", title: "Codominance and multiple alleles", content: "In codominance, both alleles are expressed in the heterozygote — e.g. blood group AB where IA and IB are both expressed. The ABO blood group system has three alleles: IA, IB, and i (recessive). Blood group O is homozygous ii." },
      { code: "17.4", title: "Sex determination", content: "Sex is determined by X and Y chromosomes: XX produces female gametes (all X); XY produces male gametes (50% X, 50% Y). A Punnett square shows a 1:1 ratio of male to female offspring. The Y chromosome carries the SRY gene that triggers male development." },
      { code: "17.5", title: "Sources of variation", content: "Genetic variation arises from mutation, crossing over during meiosis, independent assortment of chromosomes, and random fertilisation. Environmental factors (diet, climate, lifestyle) also affect phenotype. Continuous variation shows a range (e.g. height); discontinuous variation shows distinct categories (e.g. blood group)." }
    ],
    examTips: "Use genetic diagrams with parental genotypes, gametes in circles, and offspring clearly shown. Define genotype and phenotype precisely. For blood groups, remember IA and IB are codominant and both dominant to i. Show working in ratio questions — do not just state 3:1 without a Punnett square.",
    practiceQuestions: [
      { q: "In pea plants, tall (T) is dominant to dwarf (t). A heterozygous tall plant is crossed with a dwarf plant. Give the expected genotype and phenotype ratios. [4]", marks: 4, answer: "• Parent genotypes: Tt × tt\n• Gametes: T, t and t, t\n• Offspring genotypes: Tt, Tt, tt, tt (1:1)\n• Phenotype ratio: 1 tall : 1 dwarf" },
      { q: "Explain how meiosis produces genetic variation. [3]", marks: 3, answer: "• Crossing over exchanges sections between homologous chromosomes\n• Independent assortment randomly separates maternal and paternal chromosomes\n• Random fertilisation combines gametes in many different combinations" }
    ]
  },

  "biotechnology": {
    quickRecap: "• Genetic engineering: isolate gene → cut plasmid → insert with ligase → host bacterium\n• GM bacteria produce human insulin safely at scale\n• Fermenters: control temperature, pH, oxygen, sterility, stirring\n• Penicillin from Penicillium in batch culture\n• Ethics: GM crops, gene flow, health and environmental concerns",
    definitions: [
      { term: "Genetic engineering", definition: "Transfer of genes from one organism to another using biotechnology" },
      { term: "Plasmid", definition: "Small circular DNA in bacteria used as cloning vector" },
      { term: "Restriction enzyme", definition: "Enzyme cutting DNA at specific base sequences" },
      { term: "DNA ligase", definition: "Enzyme joining DNA fragments" },
      { term: "Vector", definition: "Carrier DNA molecule taking gene into host cell" },
      { term: "Fermenter", definition: "Vessel for growing microorganisms on industrial scale" },
      { term: "Fermentation", definition: "Use of microorganisms to produce useful products" },
      { term: "Insulin", definition: "Hormone controlling blood glucose; produced by GM bacteria for medicine" },
      { term: "Contamination", definition: "Unwanted microorganisms in culture affecting product" },
      { term: "Transgenic organism", definition: "Organism containing genes transferred from another species" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 May/June 2022 P1", q: "A plasmid in genetic modification is used as a:", answer: "Vector to carry the gene into bacteria", marks: 1 },
      { paper: "5090/22 Oct/Nov 2021 P2", q: "Describe production of human insulin by bacteria.", answer: "Isolate insulin gene; cut plasmid; insert with ligase; transform bacterium; ferment and extract insulin", marks: 5 }
    ],
    detailedNotes: "18.1 Steps of genetic engineering with restriction enzymes and ligase.\n\n18.2 Applications: insulin, Bt crops, herbicide resistance, enzymes.\n\n18.3 Fermenter design and controlled conditions for penicillin and yoghurt.\n\n18.4 Penicillium batch fermentation and extraction.\n\n18.5 Ethical and social issues — balanced arguments for exams.",
    syllabusPoints: [
      { code: "18.1", title: "Genetic modification (genetic engineering)", content: "Genes can be transferred between organisms using genetic engineering. Steps include: identifying and isolating the desired gene, inserting it into a vector (e.g. bacterial plasmid) using restriction enzymes and ligase, introducing the recombinant plasmid into a host bacterium, and selecting successful transformants." },
      { code: "18.2", title: "Applications of genetic modification", content: "Bacteria are engineered to produce human insulin for treating diabetes — safer and more reliable than animal insulin. GM crops may be herbicide-resistant or produce their own insecticide (Bt toxin). GM organisms can produce medicines, enzymes, and improved food crops with enhanced nutrition." },
      { code: "18.3", title: "Fermenters and industrial fermentation", content: "Fermenters are vessels used to grow microorganisms on a large scale. Conditions are controlled: optimum temperature, pH, oxygen supply (aeration), and nutrients. Stirring maintains even distribution and temperature. Products include antibiotics (penicillin), yoghurt, and single-cell protein." },
      { code: "18.4", title: "Production of penicillin", content: "Penicillin is produced by the fungus Penicillium in batch fermenters. Nutrients and fungus are added; penicillin is produced during the secondary phase of growth. The product is extracted and purified. Strict sterile conditions prevent contamination by other microorganisms." },
      { code: "18.5", title: "Ethical and social issues", content: "GM food raises concerns about long-term health effects, allergenicity, and environmental impact (gene flow to wild species). Benefits include increased yield, reduced pesticide use, and medical treatments. Ethical debates also cover animal welfare in testing and access to expensive GM medicines." }
    ],
    examTips: "Know the steps of genetic engineering in order and name the enzymes involved (restriction enzyme cuts, ligase joins). Give specific examples: human insulin, Bt crops, herbicide resistance. For fermenters, explain why temperature, pH, and sterility are controlled. Present balanced arguments for ethics questions.",
    practiceQuestions: [
      { q: "Describe the steps involved in producing bacteria that make human insulin. [5]", marks: 5, answer: "• Human insulin gene is identified and isolated\n• A bacterial plasmid is cut open using a restriction enzyme\n• The insulin gene is inserted into the plasmid using DNA ligase\n• Recombinant plasmid is inserted into a bacterium\n• Bacteria reproduce and produce human insulin, which is extracted and purified" },
      { q: "State two conditions that must be controlled in a fermenter and explain why. [4]", marks: 4, answer: "• Temperature — kept at optimum for enzyme activity and growth of microorganisms\n• pH — maintained at optimum for enzyme function\n• Oxygen/aeration — supplied for aerobic respiration of microorganisms\n• Sterility — prevents contamination by unwanted microorganisms" }
    ]
  },

  "ecology": {
    quickRecap: "• Food chains show energy flow; ~10% passes to next trophic level\n• Carbon cycle: photosynthesis, respiration, decomposition, combustion\n• Nitrogen cycle: fixation, nitrification, absorption, deamination, denitrification\n• Eutrophication: fertiliser runoff → algal bloom → deoxygenation\n• Conservation and reducing pollution protect biodiversity",
    definitions: [
      { term: "Ecosystem", definition: "Community of organisms and abiotic environment interacting" },
      { term: "Population", definition: "All organisms of one species in an area at one time" },
      { term: "Community", definition: "All populations of different species in a habitat" },
      { term: "Food chain", definition: "Linear sequence showing energy transfer between trophic levels" },
      { term: "Trophic level", definition: "Position in food chain e.g. producer, primary consumer" },
      { term: "Decomposer", definition: "Organism breaking down dead organic matter" },
      { term: "Nitrogen fixation", definition: "Conversion of atmospheric nitrogen to usable nitrogen compounds" },
      { term: "Eutrophication", definition: "Excess nutrients causing algal bloom and oxygen depletion in water" },
      { term: "Deforestation", definition: "Clearing forests reducing biodiversity and increasing atmospheric CO₂" },
      { term: "Conservation", definition: "Protection of species and habitats from decline and extinction" }
    ],
    pastPaperExamples: [
      { paper: "5090/11 Oct/Nov 2021 P1", q: "Energy enters a food chain as:", answer: "Light absorbed by producers in photosynthesis", marks: 1 },
      { paper: "5090/21 May/June 2023 P2", q: "Explain how fertiliser runoff causes eutrophication.", answer: "Nutrients → algal bloom → light blocked → plants die → bacteria decompose using O₂ → fish die", marks: 5 }
    ],
    detailedNotes: "19.1 Food chains and webs; pyramids of numbers, biomass, and energy.\n\n19.2 Energy loss between trophic levels limits chain length.\n\n19.3 Carbon and nitrogen cycles with named bacterial roles.\n\n19.4 Human impact: deforestation, greenhouse effect, acid rain, plastic pollution.\n\n19.5 Conservation strategies and sustainable resource use.",
    syllabusPoints: [
      { code: "19.1", title: "Food chains and food webs", content: "A food chain shows the transfer of energy from producer to consumer: producer → primary consumer → secondary consumer → tertiary consumer. Food webs are interconnected food chains showing complex feeding relationships. Arrows indicate direction of energy flow (who eats whom)." },
      { code: "19.2", title: "Energy flow and pyramids", content: "Energy is lost at each trophic level through respiration, movement, and waste, so less energy is available to the next level — typically about 10% is transferred. Pyramids of numbers, biomass, and energy show decreasing amounts at higher trophic levels. Energy pyramids always taper because energy cannot be recycled." },
      { code: "19.3", title: "The carbon cycle", content: "Carbon dioxide is removed from the atmosphere by photosynthesis and returned by respiration, combustion of fossil fuels, and decomposition. Carbon in organic compounds passes through food chains. Deforestation and burning fossil fuels increase atmospheric CO₂, contributing to the greenhouse effect and climate change." },
      { code: "19.4", title: "The nitrogen cycle", content: "Nitrogen fixation converts atmospheric N₂ to nitrates (by lightning or nitrogen-fixing bacteria in root nodules). Nitrifying bacteria convert ammonia to nitrates. Plants absorb nitrates for protein synthesis. Denitrifying bacteria return nitrogen gas to the atmosphere. Decomposers release ammonia from dead organic matter." },
      { code: "19.5", title: "Population growth and conservation", content: "Populations grow with abundant resources but are limited by food, predation, disease, and competition (carrying capacity). Conservation protects endangered species through habitat protection, breeding programmes, legal protection, and education. Pollution (eutrophication, acid rain, plastic waste) damages ecosystems." },
      { code: "19.6", title: "Human impact on the environment", content: "Deforestation reduces biodiversity and increases CO₂ levels. Eutrophication occurs when fertiliser runoff causes algal blooms, depleting oxygen and killing aquatic life. Acid rain damages forests and lakes. Sustainable practices include recycling, renewable energy, and controlled fishing to maintain fish stocks." }
    ],
    examTips: "Draw food chains with arrows pointing in the direction of energy flow (from food to consumer). Explain why food chains rarely exceed five trophic levels using energy loss. Know all processes in carbon and nitrogen cycles with named organisms where required. Link pollution to specific effects (eutrophication → deoxygenation → fish death).",
    practiceQuestions: [
      { q: "Explain why a food chain rarely has more than five trophic levels. [3]", marks: 3, answer: "• Energy is lost at each trophic level through respiration, movement, and heat\n• Only about 10% of energy passes to the next level\n• Insufficient energy remains to support populations beyond four or five levels" },
      { q: "Describe the role of decomposers in the carbon cycle. [3]", marks: 3, answer: "• Decomposers break down dead organisms and waste products\n• They respire aerobically, releasing carbon dioxide into the atmosphere\n• They return carbon from organic compounds back to the environment" }
    ]
  }
};

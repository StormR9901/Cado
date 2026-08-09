/**
 * CADO Biology — hand-coded SVG diagrams, exam-style (labeled leader lines,
 * muted natural colours), not cartoon mascots. No external images: every
 * diagram is drawn with plain SVG shapes so it loads instantly.
 */
const BiologyVisuals = (function () {
  "use strict";

  var LINE = "#334155";
  var LABEL = "#334155";

  function leader(x1, y1, x2, y2, text, anchor, fontSize) {
    anchor = anchor || "start";
    fontSize = fontSize || 9;
    var tx = x2 + (anchor === "end" ? -4 : 4);
    return (
      '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + LINE + '" stroke-width="1"/>' +
      '<circle cx="' + x1 + '" cy="' + y1 + '" r="1.7" fill="' + LINE + '"/>' +
      '<text x="' + tx + '" y="' + (y2 + 3) + '" font-size="' + fontSize + '" fill="' + LABEL + '" text-anchor="' + anchor + '" font-family="inherit">' + text + '</text>'
    );
  }

  function frame(inner, vb, cls) {
    return '<svg viewBox="' + (vb || "0 0 250 150") + '" xmlns="http://www.w3.org/2000/svg" class="' + (cls || "bio-diagram-svg") + '" role="img" aria-hidden="true">' + inner + '</svg>';
  }

  // ---------------- Five Kingdoms ----------------
  var KINGDOM_DIAGRAMS = [
    {
      name: "Prokaryotae", trait: "Bacteria - no true nucleus",
      svg: frame(
        '<ellipse cx="65" cy="75" rx="40" ry="19" fill="#fbcfe8" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<path d="M28 82 Q10 92 4 105" stroke="' + LINE + '" stroke-width="1.4" fill="none" stroke-linecap="round"/>' +
        leader(88, 68, 145, 40, "No true nucleus") +
        leader(100, 78, 145, 70, "Cell wall") +
        leader(18, 92, 145, 100, "Flagellum")
      )
    },
    {
      name: "Protoctista", trait: "Simple, mostly single-celled",
      svg: frame(
        '<path d="M48 68 C38 48 68 38 82 53 C102 43 116 63 102 78 C112 93 92 103 78 93 C63 108 43 98 48 83 C33 88 28 73 48 68 Z" fill="#bae6fd" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<circle cx="74" cy="70" r="8" fill="#7dd3fc" stroke="' + LINE + '" stroke-width="1"/>' +
        leader(74, 70, 145, 40, "True nucleus") +
        leader(104, 78, 145, 70, "Pseudopodium") +
        leader(52, 93, 145, 100, "Cell membrane")
      )
    },
    {
      name: "Fungi", trait: "Chitin cell walls, feed by absorption",
      svg: frame(
        '<path d="M38 56 Q72 22 106 56 Q92 66 72 66 Q52 66 38 56 Z" fill="#fde68a" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<rect x="63" y="66" width="18" height="34" rx="4" fill="#fef9e7" stroke="' + LINE + '" stroke-width="1.5"/>' +
        leader(72, 40, 145, 30, "Cap") +
        leader(72, 64, 145, 62, "Gills (spores)") +
        leader(72, 86, 145, 94, "Chitin cell wall")
      )
    },
    {
      name: "Plantae", trait: "Cellulose walls, chlorophyll",
      svg: frame(
        '<path d="M72 118 V70" stroke="#166534" stroke-width="3"/>' +
        '<path d="M72 88 C52 83 42 63 52 46 C69 50 77 70 72 88 Z" fill="#86efac" stroke="#166534" stroke-width="1.5"/>' +
        '<circle cx="72" cy="53" r="11" fill="#fbcfe8" stroke="#166534" stroke-width="1.5"/>' +
        leader(52, 58, 145, 36, "Photosynthesis") +
        leader(72, 90, 145, 90, "Cellulose wall") +
        leader(72, 48, 145, 60, "Reproduction")
      )
    },
    {
      name: "Animalia", trait: "No cell wall, ingests food",
      svg: frame(
        '<ellipse cx="72" cy="80" rx="34" ry="20" fill="#fed7aa" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<circle cx="110" cy="64" r="12" fill="#fed7aa" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<path d="M48 95 L44 112 M64 99 L62 115 M84 99 L87 115 M100 94 L106 109" stroke="' + LINE + '" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
        leader(110, 58, 155, 36, "Sense organs") +
        leader(72, 62, 145, 54, "No cell wall") +
        leader(84, 106, 145, 112, "Locomotion")
      )
    }
  ];

  // ---------------- Vertebrate classes ----------------
  var VERTEBRATE_DIAGRAMS = [
    {
      name: "Fish", trait: "Gills, scales, lay eggs in water",
      svg: frame(
        '<path d="M18 68 Q56 42 102 58 Q56 84 18 68 Z" fill="#7dd3fc" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<path d="M98 58 L122 44 L122 76 Z" fill="#38bdf8" stroke="' + LINE + '" stroke-width="1.5"/>' +
        leader(50, 50, 150, 30, "Scales") +
        leader(30, 63, 150, 60, "Gills") +
        leader(112, 60, 150, 88, "Fins")
      )
    },
    {
      name: "Amphibians", trait: "Moist skin, water + land",
      svg: frame(
        '<ellipse cx="62" cy="80" rx="32" ry="20" fill="#86efac" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<circle cx="88" cy="62" r="13" fill="#86efac" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<path d="M40 94 L27 108 M52 98 L44 114" stroke="' + LINE + '" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
        leader(62, 64, 150, 38, "Moist skin") +
        leader(36, 102, 150, 106, "Webbed feet")
      )
    },
    {
      name: "Reptiles", trait: "Dry scaly skin, leathery eggs",
      svg: frame(
        '<ellipse cx="56" cy="76" rx="34" ry="14" fill="#bef264" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<circle cx="90" cy="68" r="9" fill="#bef264" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<path d="M22 78 Q10 83 4 92" stroke="' + LINE + '" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
        leader(56, 66, 150, 36, "Dry scaly skin") +
        leader(14, 86, 150, 66, "Long tail") +
        leader(36, 88, 150, 96, "Claws")
      )
    },
    {
      name: "Birds", trait: "Feathers, hard-shelled eggs",
      svg: frame(
        '<circle cx="64" cy="68" r="27" fill="#fda4af" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<path d="M88 66 L112 60 L88 76 Z" fill="#fbbf24" stroke="' + LINE + '" stroke-width="1.2"/>' +
        '<path d="M42 86 Q64 102 86 86" fill="none" stroke="' + LINE + '" stroke-width="1.5"/>' +
        leader(64, 52, 150, 30, "Feathers") +
        leader(106, 66, 150, 62, "Beak")
      )
    },
    {
      name: "Mammals", trait: "Fur, milk, warm-blooded",
      svg: frame(
        '<ellipse cx="66" cy="80" rx="33" ry="18" fill="#c4b5fd" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<circle cx="103" cy="64" r="12" fill="#c4b5fd" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<path d="M94 55 L89 43 M110 55 L117 43" stroke="' + LINE + '" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
        leader(66, 66, 150, 40, "Fur / hair") +
        leader(103, 58, 150, 56, "External ears")
      )
    }
  ];

  function cardHtml(item) {
    return '<div class="bio-diagram-card">' +
      '<div class="bio-diagram-figure">' + item.svg + '</div>' +
      '<strong>' + item.name + '</strong><span>' + item.trait + '</span></div>';
  }

  function kingdomDiagrams() {
    return '<div class="bio-diagram-grid">' + KINGDOM_DIAGRAMS.map(cardHtml).join("") + '</div>';
  }

  function vertebrateDiagrams() {
    return '<div class="bio-diagram-grid">' + VERTEBRATE_DIAGRAMS.map(cardHtml).join("") + '</div>';
  }

  // ---------------- Classification hierarchy (with worked example) ----------------
  function hierarchyDiagram() {
    var levels = ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"];
    var example = ["Animalia", "Chordata", "Mammalia", "Primates", "Hominidae", "Homo", "sapiens"];
    var n = levels.length;
    var rows = levels.map(function (lvl, i) {
      var widthPct = 100 - i * (66 / (n - 1));
      return '<div class="bio-pyramid-row" style="width:' + widthPct.toFixed(1) + '%"><span>' + lvl + '</span></div>';
    }).join("");
    var chain = levels.map(function (lvl, i) { return lvl + " " + example[i]; }).join(" -&gt; ");
    return '<div class="bio-pyramid" role="img" aria-label="Classification hierarchy from Kingdom down to Species, worked example: human">' +
      rows +
      '<p class="bio-pyramid-caption"><strong>Worked example (human):</strong> ' + chain + '.</p>' +
      '<p class="bio-pyramid-caption">Kingdom is the biggest, most general group - Species is the smallest and most specific.</p>' +
      '</div>';
  }

  // ---------------- Dichotomous key ----------------
  function box(x, y, w, h, text, fill) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="8" fill="' + (fill || "#eef2ff") + '" stroke="' + LINE + '" stroke-width="1.3"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 4) + '" font-size="10.5" text-anchor="middle" fill="' + LABEL + '" font-family="inherit">' + text + '</text>';
  }
  function arrow(x1, y1, x2, y2, label) {
    var mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + LINE + '" stroke-width="1.3" marker-end="url(#bioArrow)"/>' +
      (label ? '<rect x="' + (mx - 11) + '" y="' + (my - 9) + '" width="22" height="14" fill="#fff"/><text x="' + mx + '" y="' + (my + 2) + '" font-size="9.5" text-anchor="middle" fill="#0f172a" font-weight="700" font-family="inherit">' + label + '</text>' : "");
  }
  function dichotomousKeyDiagram() {
    var defs = '<defs><marker id="bioArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="' + LINE + '"/></marker></defs>';
    var inner = defs +
      box(190, 6, 150, 30, "Does it have legs?") +
      box(30, 66, 150, 30, "Has a shell?", "#fef3c7") +
      box(350, 66, 150, 30, "Has 8 legs?", "#fef3c7") +
      arrow(190, 21, 105, 66, "No") + arrow(340, 21, 425, 66, "Yes") +
      arrow(105, 96, 60, 130, "Yes") + arrow(105, 96, 150, 130, "No") +
      arrow(425, 96, 380, 130, "Yes") + arrow(425, 96, 470, 130, "No") +
      box(10, 130, 100, 30, "Snail", "#dcfce7") +
      box(120, 130, 100, 30, "Earthworm", "#dcfce7") +
      box(330, 130, 100, 30, "Spider", "#dcfce7") +
      box(440, 130, 100, 30, "Beetle", "#dcfce7");
    return '<div class="bio-diagram-single">' +
      frame(inner, "0 0 540 170", "bio-diagram-svg bio-diagram-svg--wide") +
      '<p class="bio-diagram-caption">A dichotomous key identifies an unknown organism through a series of paired (yes/no) questions, narrowing the options at each step until one organism remains.</p></div>';
  }

  // ---------------- Prokaryotic vs eukaryotic cell ----------------
  function cellTypeDiagram() {
    var inner =
      '<circle cx="100" cy="90" r="56" fill="#fbcfe8" stroke="' + LINE + '" stroke-width="1.6"/>' +
      '<path d="M75 82 Q100 68 122 86 Q104 100 80 96 Q70 90 75 82 Z" fill="#f472b6" opacity="0.55"/>' +
      leader(100, 34, 100, 16, "Cell wall", "middle") +
      leader(96, 88, 172, 100, "Nucleoid (no membrane)") +
      '<text x="100" y="158" font-size="11" font-weight="700" text-anchor="middle" fill="' + LABEL + '">Prokaryotic (Prokaryotae)</text>' +
      '<circle cx="345" cy="90" r="56" fill="#bae6fd" stroke="' + LINE + '" stroke-width="1.6"/>' +
      '<circle cx="345" cy="88" r="19" fill="#60a5fa" stroke="' + LINE + '" stroke-width="1.5"/>' +
      leader(345, 34, 345, 16, "Cell membrane", "middle") +
      leader(345, 88, 275, 108, "Nucleus (has membrane)", "end") +
      '<text x="345" y="158" font-size="11" font-weight="700" text-anchor="middle" fill="' + LABEL + '">Eukaryotic (other four kingdoms)</text>';
    return '<div class="bio-diagram-single">' +
      frame(inner, "0 0 450 172", "bio-diagram-svg bio-diagram-svg--wide") +
      '<p class="bio-diagram-caption">The key difference behind Prokaryotae vs. the other four kingdoms: whether the DNA is enclosed in a nuclear membrane.</p></div>';
  }

  return {
    kingdomDiagrams: kingdomDiagrams,
    vertebrateDiagrams: vertebrateDiagrams,
    hierarchyDiagram: hierarchyDiagram,
    dichotomousKeyDiagram: dichotomousKeyDiagram,
    cellTypeDiagram: cellTypeDiagram
  };
})();

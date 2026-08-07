/**
 * CADO Biology — hand-drawn SVG mascots and diagram layouts.
 * Every character here is coded as plain SVG shapes (no external images),
 * so it loads instantly, themes with CADO's colours, and can be reused
 * across any chapter by referencing a mascot key.
 *
 * Usage from a chapter/hub file:
 *   BiologyVisuals.mascot("fox")                 -> raw <svg> markup
 *   BiologyVisuals.kingdomGrid()                 -> five-kingdom mascot grid
 *   BiologyVisuals.groupGrid(BiologyVisuals.VERTEBRATE_GROUPS) -> icon grid
 *   BiologyVisuals.hierarchyPyramid()            -> classification pyramid
 */
const BiologyVisuals = (function () {
  "use strict";

  function face(cx, cy, s) {
    s = s || 1;
    return (
      '<circle cx="' + (cx - 8 * s) + '" cy="' + (cy - 2 * s) + '" r="' + (3 * s) + '" fill="#1f2937"/>' +
      '<circle cx="' + (cx + 8 * s) + '" cy="' + (cy - 2 * s) + '" r="' + (3 * s) + '" fill="#1f2937"/>' +
      '<circle cx="' + (cx - 8.6 * s) + '" cy="' + (cy - 3 * s) + '" r="' + (1 * s) + '" fill="#fff"/>' +
      '<circle cx="' + (cx + 7.4 * s) + '" cy="' + (cy - 3 * s) + '" r="' + (1 * s) + '" fill="#fff"/>' +
      '<path d="M ' + (cx - 6 * s) + ' ' + (cy + 7 * s) + ' Q ' + cx + ' ' + (cy + 12 * s) + ' ' + (cx + 6 * s) + ' ' + (cy + 7 * s) +
      '" stroke="#1f2937" stroke-width="' + (2 * s) + '" fill="none" stroke-linecap="round"/>'
    );
  }

  function cheeks(cx, cy, s, color) {
    s = s || 1;
    return (
      '<ellipse cx="' + (cx - 15 * s) + '" cy="' + (cy + 4 * s) + '" rx="' + (4 * s) + '" ry="' + (2.6 * s) + '" fill="' + color + '" opacity="0.5"/>' +
      '<ellipse cx="' + (cx + 15 * s) + '" cy="' + (cy + 4 * s) + '" rx="' + (4 * s) + '" ry="' + (2.6 * s) + '" fill="' + color + '" opacity="0.5"/>'
    );
  }

  function wrap(inner) {
    return '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="bio-mascot-svg" role="img" aria-hidden="true">' + inner + '</svg>';
  }

  var MASCOTS = {
    // ---- Five Kingdoms ----
    bacterium: wrap(
      '<path d="M60 34 Q94 34 94 68 Q94 100 60 100 Q26 100 26 68 Q26 34 60 34 Z" fill="#f472b6" stroke="#be185d" stroke-width="3"/>' +
      '<path d="M28 55 Q14 50 8 58" stroke="#be185d" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M92 55 Q106 50 112 58" stroke="#be185d" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M30 82 Q17 84 13 94" stroke="#be185d" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      cheeks(60, 66, 1, '#be185d') + face(60, 66, 1)
    ),
    amoeba: wrap(
      '<path d="M60 30 C80 26 100 40 98 58 C112 62 108 82 92 86 C90 102 68 108 58 96 C40 104 22 88 28 72 C14 66 20 42 38 42 C40 32 50 30 60 30 Z" fill="#22d3ee" stroke="#0e7490" stroke-width="3"/>' +
      '<circle cx="52" cy="58" r="6" fill="#0e7490" opacity="0.2"/>' +
      cheeks(58, 66, 1, '#0e7490') + face(58, 66, 1)
    ),
    mushroom: wrap(
      '<path d="M28 58 Q60 18 92 58 Q78 70 60 70 Q42 70 28 58 Z" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>' +
      '<circle cx="44" cy="42" r="3" fill="#fde68a"/><circle cx="66" cy="36" r="3.5" fill="#fde68a"/><circle cx="78" cy="48" r="2.5" fill="#fde68a"/>' +
      '<rect x="50" y="68" width="20" height="30" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>' +
      cheeks(60, 82, 0.9, '#b45309') + face(60, 82, 0.9)
    ),
    sprout: wrap(
      '<path d="M60 108 V64" stroke="#15803d" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      '<path d="M60 70 C40 66 30 48 38 30 C56 34 66 52 60 70 Z" fill="#4ade80" stroke="#15803d" stroke-width="3"/>' +
      '<path d="M60 78 C80 74 90 56 82 38 C64 42 54 60 60 78 Z" fill="#86efac" stroke="#15803d" stroke-width="3"/>' +
      '<ellipse cx="60" cy="102" rx="22" ry="7" fill="#a16207" opacity="0.3"/>' +
      cheeks(60, 90, 0.8, '#166534') + face(60, 90, 0.8)
    ),
    fox: wrap(
      '<path d="M34 40 L46 60 L26 62 Z" fill="#fb923c" stroke="#c2410c" stroke-width="3"/>' +
      '<path d="M86 40 L74 60 L94 62 Z" fill="#fb923c" stroke="#c2410c" stroke-width="3"/>' +
      '<circle cx="60" cy="68" r="34" fill="#fb923c" stroke="#c2410c" stroke-width="3"/>' +
      '<path d="M46 88 Q60 100 74 88 Q66 82 60 82 Q54 82 46 88 Z" fill="#fff7ed"/>' +
      '<circle cx="60" cy="78" r="3" fill="#7c2d12"/>' +
      cheeks(60, 70, 1, '#c2410c') + face(60, 68, 1)
    ),

    // ---- Vertebrate classes ----
    fish: wrap(
      '<ellipse cx="52" cy="64" rx="34" ry="22" fill="#38bdf8" stroke="#0369a1" stroke-width="3"/>' +
      '<path d="M86 64 L110 48 L110 80 Z" fill="#0ea5e9" stroke="#0369a1" stroke-width="3"/>' +
      '<path d="M48 44 L58 30 L64 46 Z" fill="#0ea5e9" stroke="#0369a1" stroke-width="2.5"/>' +
      cheeks(48, 66, 0.8, '#0369a1') + face(46, 64, 0.85)
    ),
    amphibian: wrap(
      '<ellipse cx="60" cy="76" rx="36" ry="24" fill="#4ade80" stroke="#166534" stroke-width="3"/>' +
      '<circle cx="40" cy="46" r="13" fill="#4ade80" stroke="#166534" stroke-width="3"/>' +
      '<circle cx="76" cy="46" r="13" fill="#4ade80" stroke="#166534" stroke-width="3"/>' +
      '<circle cx="40" cy="44" r="4" fill="#1f2937"/><circle cx="76" cy="44" r="4" fill="#1f2937"/>' +
      '<path d="M42 88 Q60 98 78 88" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round"/>'
    ),
    reptile: wrap(
      '<path d="M20 80 Q30 40 60 40 Q90 40 100 80 Q80 92 60 92 Q40 92 20 80 Z" fill="#a3e635" stroke="#3f6212" stroke-width="3"/>' +
      '<path d="M60 40 L54 26 L66 26 Z" fill="#a3e635" stroke="#3f6212" stroke-width="2.5"/>' +
      cheeks(60, 68, 0.85, '#3f6212') + face(60, 64, 0.85)
    ),
    bird: wrap(
      '<circle cx="60" cy="70" r="32" fill="#f472b6" stroke="#9d174d" stroke-width="3"/>' +
      '<path d="M60 40 L46 20 L74 20 Z" fill="#f472b6" stroke="#9d174d" stroke-width="2.5"/>' +
      '<path d="M56 72 L38 78 L56 82 Z" fill="#fbbf24" stroke="#9d174d" stroke-width="2"/>' +
      cheeks(64, 66, 0.85, '#9d174d') + face(66, 64, 0.85)
    ),
    mammal: wrap(
      '<circle cx="38" cy="36" r="12" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>' +
      '<circle cx="82" cy="36" r="12" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>' +
      '<circle cx="60" cy="66" r="34" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>' +
      cheeks(60, 68, 1, '#5b21b6') + face(60, 66, 1)
    ),

    // ---- Arthropod groups ----
    insect: wrap(
      '<ellipse cx="60" cy="52" rx="16" ry="14" fill="#facc15" stroke="#854d0e" stroke-width="3"/>' +
      '<ellipse cx="60" cy="80" rx="20" ry="24" fill="#fde047" stroke="#854d0e" stroke-width="3"/>' +
      '<path d="M42 90 L20 100 M42 82 L14 84 M42 74 L18 68" stroke="#854d0e" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M78 90 L100 100 M78 82 L106 84 M78 74 L102 68" stroke="#854d0e" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 40 L42 26 M70 40 L78 26" stroke="#854d0e" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      face(60, 52, 0.7)
    ),
    arachnid: wrap(
      '<ellipse cx="60" cy="64" rx="24" ry="22" fill="#94a3b8" stroke="#334155" stroke-width="3"/>' +
      '<path d="M42 50 L18 34 M40 60 L12 56 M40 72 L14 78 M42 84 L20 96" stroke="#334155" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M78 50 L102 34 M80 60 L108 56 M80 72 L106 78 M78 84 L100 96" stroke="#334155" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      face(60, 60, 0.8)
    ),
    crustacean: wrap(
      '<ellipse cx="60" cy="66" rx="30" ry="24" fill="#fb7185" stroke="#9f1239" stroke-width="3"/>' +
      '<path d="M36 46 Q22 30 14 34 Q18 46 30 52 Z" fill="#fb7185" stroke="#9f1239" stroke-width="2.5"/>' +
      '<path d="M84 46 Q98 30 106 34 Q102 46 90 52 Z" fill="#fb7185" stroke="#9f1239" stroke-width="2.5"/>' +
      '<path d="M40 32 L34 18 M80 32 L86 18" stroke="#9f1239" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
      cheeks(60, 68, 0.9, '#9f1239') + face(60, 66, 0.9)
    ),
    myriapod: wrap(
      '<path d="M18 66 Q60 40 102 66" stroke="#65a30d" stroke-width="16" fill="none" stroke-linecap="round"/>' +
      '<path d="M28 68 L22 80 M40 60 L34 74 M52 55 L48 70 M68 55 L72 70 M80 60 L86 74 M92 68 L98 80" stroke="#3f6212" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      face(24, 60, 0.6)
    )
  };

  function mascot(key) {
    return MASCOTS[key] || "";
  }

  var KINGDOM_GROUPS = [
    { key: "bacterium", name: "Prokaryotae", trait: "No nucleus — bacteria", color: "#f472b6" },
    { key: "amoeba", name: "Protoctista", trait: "Simple, mostly single-celled", color: "#22d3ee" },
    { key: "mushroom", name: "Fungi", trait: "Chitin walls, saprotrophic", color: "#f59e0b" },
    { key: "sprout", name: "Plantae", trait: "Cellulose walls, photosynthesis", color: "#22c55e" },
    { key: "fox", name: "Animalia", trait: "No cell wall, ingests food", color: "#fb923c" }
  ];

  var VERTEBRATE_GROUPS = [
    { key: "fish", name: "Fish", trait: "Gills, scales, eggs in water", color: "#0ea5e9" },
    { key: "amphibian", name: "Amphibians", trait: "Moist skin, water + land", color: "#22c55e" },
    { key: "reptile", name: "Reptiles", trait: "Dry scales, leathery eggs", color: "#65a30d" },
    { key: "bird", name: "Birds", trait: "Feathers, hard-shelled eggs", color: "#ec4899" },
    { key: "mammal", name: "Mammals", trait: "Fur, milk, warm-blooded", color: "#7c3aed" }
  ];

  var ARTHROPOD_GROUPS = [
    { key: "insect", name: "Insects", trait: "6 legs, 3 body parts", color: "#eab308" },
    { key: "arachnid", name: "Arachnids", trait: "8 legs, 2 body parts", color: "#475569" },
    { key: "crustacean", name: "Crustaceans", trait: "Aquatic, 2 antennae pairs", color: "#f43f5e" },
    { key: "myriapod", name: "Myriapods", trait: "Many segments, many legs", color: "#4d7c0f" }
  ];

  function cardHtml(item, small) {
    return '<div class="bio-mascot-card' + (small ? " bio-mascot-card--sm" : "") + '" style="--mascot-color:' + item.color + '">' +
      '<div class="bio-mascot-avatar">' + mascot(item.key) + '</div>' +
      '<strong>' + item.name + '</strong><span>' + item.trait + '</span></div>';
  }

  function kingdomGrid() {
    return '<div class="bio-mascot-grid">' + KINGDOM_GROUPS.map(function (k) { return cardHtml(k, false); }).join("") + '</div>';
  }

  function groupGrid(list) {
    return '<div class="bio-mascot-grid bio-mascot-grid--sm">' + list.map(function (g) { return cardHtml(g, true); }).join("") + '</div>';
  }

  function hierarchyPyramid() {
    var levels = ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"];
    var n = levels.length;
    var rows = levels.map(function (lvl, i) {
      var widthPct = 100 - i * (66 / (n - 1));
      return '<div class="bio-pyramid-row" style="width:' + widthPct.toFixed(1) + '%; --row-i:' + i + '">' +
        '<span>' + lvl + '</span></div>';
    }).join("");
    return '<div class="bio-pyramid" role="img" aria-label="Classification hierarchy from Kingdom, the largest group, down to Species, the smallest">' +
      rows +
      '<p class="bio-pyramid-caption"><strong>Kingdom</strong> is the biggest, most general group — <strong>Species</strong> is the smallest and most specific.</p>' +
      '</div>';
  }

  return {
    mascot: mascot,
    kingdomGrid: kingdomGrid,
    groupGrid: groupGrid,
    hierarchyPyramid: hierarchyPyramid,
    KINGDOM_GROUPS: KINGDOM_GROUPS,
    VERTEBRATE_GROUPS: VERTEBRATE_GROUPS,
    ARTHROPOD_GROUPS: ARTHROPOD_GROUPS
  };
})();

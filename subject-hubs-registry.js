/** CADO — subjects with full chapter hubs (Biology-style) */
const CADO_SUBJECT_HUBS = {
  biology: {
    subjectId: "biology",
    viewId: "biology",
    rootId: "biologyHubRoot",
    pendingKey: "cado_bio_pending_tab",
    hub: function () { return typeof BiologyHub !== "undefined" ? BiologyHub : null; },
    getSyllabus: function () { return typeof BIOLOGY_5090 !== "undefined" ? BIOLOGY_5090 : null; }
  },
  chemistry: {
    subjectId: "chemistry",
    viewId: "chemistry",
    rootId: "chemistryHubRoot",
    pendingKey: "cado_chem5070_pending_tab",
    hub: function () { return typeof ChemistryHub !== "undefined" ? ChemistryHub : null; },
    getSyllabus: function () { return typeof CHEMISTRY_5070 !== "undefined" ? CHEMISTRY_5070 : null; }
  },
  physics: {
    subjectId: "physics",
    viewId: "physics",
    rootId: "physicsHubRoot",
    pendingKey: "cado_phys5054_pending_tab",
    hub: function () { return typeof PhysicsHub !== "undefined" ? PhysicsHub : null; },
    getSyllabus: function () { return typeof PHYSICS_5054 !== "undefined" ? PHYSICS_5054 : null; }
  }
};

function cadoGetSubjectHub(subjectId) {
  return CADO_SUBJECT_HUBS[subjectId] || null;
}

function cadoIsHubSubject(subjectId) {
  return !!CADO_SUBJECT_HUBS[subjectId];
}

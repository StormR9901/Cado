/** CADO — Chemistry 5070 interactive chapter hub */
const ChemistryProgress = SubjectProgress.create("cado_chem5070_progress", function () {
  return CHEMISTRY_5070.topics;
});

const ChemistryMcqPool = SubjectMcqPool.create(function () { return CHEMISTRY_5070; }, 40);

if (typeof ChemistryLMS !== "undefined") ChemistryLMS.init();

const ChemistryHub = SubjectHub.create({
  subjectId: "chemistry",
  name: "Chemistry",
  code: "5070",
  icon: "⚗️",
  notesIcon: "⚗️",
  color: "#5c7fa3",
  pendingKey: "cado_chem5070_pending_tab",
  appRootId: "chemAppRoot",
  backBtnId: "btnBackChemistry",
  getData: function () { return CHEMISTRY_5070; },
  progress: ChemistryProgress,
  mcqPool: ChemistryMcqPool,
  lms: typeof ChemistryLMS !== "undefined" ? ChemistryLMS.getLmsConfig() : null,
  ids: {
    flashProgress: "chemFlashProgress",
    shuffleFlash: "chemShuffleFlash",
    flashcard: "chemFlashcard",
    flashQ: "chemFlashQ",
    flashA: "chemFlashA",
    prevFlash: "chemPrevFlash",
    nextFlash: "chemNextFlash",
    mcqMeta: "chemMcqMeta",
    mcqRestart: "chemMcqRestart",
    mcqQ: "chemMcqQ",
    mcqOpts: "chemMcqOpts",
    mcqFb: "chemMcqFb",
    mcqNext: "chemMcqNext",
    mcqScore: "chemMcqScore",
    chatMessages: "chemChatMessages",
    chatForm: "chemChatForm",
    chatInput: "chemChatInput"
  }
});

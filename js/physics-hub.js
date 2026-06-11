/** CADO — Physics 5054 chapter hub */
const PhysicsProgress = SubjectProgress.create("cado_phys5054_progress", function () {
  return PHYSICS_5054.topics;
});

const PhysicsMcqPool = SubjectMcqPool.create(function () { return PHYSICS_5054; }, 40);

const PhysicsHub = SubjectHub.create({
  subjectId: "physics",
  name: "Physics",
  code: "5054",
  icon: "⚡",
  notesIcon: "⚡",
  color: "#7a75a0",
  pendingKey: "cado_phys5054_pending_tab",
  appRootId: "physAppRoot",
  backBtnId: "btnBackPhysics",
  getData: function () { return PHYSICS_5054; },
  progress: PhysicsProgress,
  mcqPool: PhysicsMcqPool,
  ids: {
    flashProgress: "physFlashProgress",
    shuffleFlash: "physShuffleFlash",
    flashcard: "physFlashcard",
    flashQ: "physFlashQ",
    flashA: "physFlashA",
    prevFlash: "physPrevFlash",
    nextFlash: "physNextFlash",
    mcqMeta: "physMcqMeta",
    mcqRestart: "physMcqRestart",
    mcqQ: "physMcqQ",
    mcqOpts: "physMcqOpts",
    mcqFb: "physMcqFb",
    mcqNext: "physMcqNext",
    mcqScore: "physMcqScore",
    chatMessages: "physChatMessages",
    chatForm: "physChatForm",
    chatInput: "physChatInput"
  }
});

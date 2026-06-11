/**
 * CADO Profile Engine — topic mastery, spaced revision, exam readiness, activity
 */
const ProfileEngine = (function () {
  "use strict";

  const KEY = "cado_profile_hub";
  const ACCOUNT_KEY = "cado_account";

  const AVATARS = ["🎓", "📚", "🧬", "⚗️", "⚡", "🌟", "🔥", "💡", "🏆", "✨"];

  const BADGE_DEFS = [
    { id: "first_study", name: "First Steps", desc: "Study your first topic", icon: "👣", check: function (s) { return s.topicsStudied >= 1; } },
    { id: "streak_3", name: "On Fire", desc: "3-day study streak", icon: "🔥", check: function (s) { return s.streak.current >= 3; } },
    { id: "streak_7", name: "Week Warrior", desc: "7-day study streak", icon: "💪", check: function (s) { return s.streak.current >= 7; } },
    { id: "mastered_5", name: "Topic Tamer", desc: "Master 5 topics", icon: "🎯", check: function (s) { return s.topicsMastered >= 5; } },
    { id: "mastered_10", name: "Syllabus Slayer", desc: "Master 10 topics", icon: "⚔️", check: function (s) { return s.topicsMastered >= 10; } },
    { id: "revision_hero", name: "Revision Hero", desc: "Complete 10 revision sessions", icon: "🔄", check: function (s) { return s.revisionSessions >= 10; } },
    { id: "exam_ready_70", name: "Exam Bound", desc: "Reach 70% exam readiness in any subject", icon: "📋", check: function (s) { return s.maxExamReadiness >= 70; } },
    { id: "exam_ready_85", name: "Paper Proof", desc: "Reach 85% exam readiness in any subject", icon: "🏅", check: function (s) { return s.maxExamReadiness >= 85; } }
  ];

  function defaultHub() {
    return {
      version: 1,
      profile: {
        username: "",
        avatar: "🎓",
        grade: "O Level",
        targetExamYear: null,
        preferredSubjects: [],
        lastVisitedSubject: null,
        lastVisitedTopic: null
      },
      subjects: {},
      activity: [],
      streak: { current: 0, best: 0, lastStudyDate: null },
      revisionSessions: 0,
      badges: []
    };
  }

  function load() {
    try {
      return Object.assign(defaultHub(), JSON.parse(localStorage.getItem(KEY) || "{}"));
    } catch {
      return defaultHub();
    }
  }

  function save(hub) {
    localStorage.setItem(KEY, JSON.stringify(hub));
    return hub;
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function slugify(name) {
    return String(name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function dateOnly(iso) {
    if (!iso) return null;
    return String(iso).slice(0, 10);
  }

  function daysBetween(a, b) {
    const d1 = new Date(a + "T12:00:00");
    const d2 = new Date(b + "T12:00:00");
    return Math.round((d2 - d1) / 86400000);
  }

  function addDays(dateStr, days) {
    const d = new Date(dateStr + "T12:00:00");
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  }

  function getProgressAdapter(subjectId) {
    if (subjectId === "biology" && typeof BiologyProgress !== "undefined") return BiologyProgress;
    if (subjectId === "chemistry" && typeof ChemistryProgress !== "undefined") return ChemistryProgress;
    if (subjectId === "physics" && typeof PhysicsProgress !== "undefined") return PhysicsProgress;
    return null;
  }

  function getSubjectData(subjectId) {
    if (subjectId === "biology" && typeof BIOLOGY_5090 !== "undefined") return BIOLOGY_5090;
    if (subjectId === "chemistry" && typeof CHEMISTRY_5070 !== "undefined") return CHEMISTRY_5070;
    if (subjectId === "physics" && typeof PHYSICS_5054 !== "undefined") return PHYSICS_5054;
    if (typeof CADETOS_SUBJECTS === "undefined") return null;
    const sub = CADETOS_SUBJECTS.find(function (s) { return s.id === subjectId; });
    if (!sub) return null;
    return {
      code: sub.code,
      name: sub.name,
      icon: sub.icon,
      color: sub.color,
      topics: (sub.topics || []).map(function (name, i) {
        return { id: slugify(name), number: i + 1, name: name, theory: [] };
      })
    };
  }

  function deriveStatus(mastery, complete, lastStudied) {
    if (!lastStudied && mastery <= 0) return "not_started";
    if (mastery >= 85 || (complete && mastery >= 70)) return "mastered";
    if (mastery >= 40 || complete) return "revision";
    return "learning";
  }

  function revisionIntervalDays(status, mastery) {
    if (status === "learning" || mastery < 40) return 1;
    if (status === "revision" || mastery < 85) return 3;
    return mastery >= 95 ? 14 : 7;
  }

  function computeNextRevision(topic) {
    const base = topic.last_revision || topic.last_studied;
    if (!base || topic.status === "not_started") return null;
    const days = topic.revision_interval_days || revisionIntervalDays(topic.status, topic.mastery);
    return addDays(base, days);
  }

  function mergeAccount(hub) {
    try {
      const acc = JSON.parse(localStorage.getItem(ACCOUNT_KEY) || "null");
      if (acc && acc.displayName) {
        hub.profile.username = hub.profile.username || acc.displayName;
      }
    } catch { /* ignore */ }
    return hub;
  }

  function ensureSubject(hub, subjectId) {
    if (!hub.subjects[subjectId]) hub.subjects[subjectId] = { topics: {} };
    if (!hub.subjects[subjectId].topics) hub.subjects[subjectId].topics = {};
    return hub.subjects[subjectId];
  }

  function syncTopic(hub, subjectId, topicDef, stored) {
    const adapter = getProgressAdapter(subjectId);
    let mastery = 0;
    let quizAvg = 0;
    let lastStudied = null;
    let complete = false;

    if (adapter) {
      const p = adapter.getTopic(topicDef.id);
      mastery = adapter.topicProgress(topicDef.id);
      quizAvg = p.mcqBest || 0;
      lastStudied = dateOnly(p.lastStudied);
      complete = !!p.complete;
    } else if (typeof CadetosProfile !== "undefined") {
      const pct = CadetosProfile.subjectProgress(subjectId);
      mastery = Math.round(pct / Math.max(1, (getSubjectData(subjectId)?.topics || []).length));
      if (stored && stored.last_studied) lastStudied = stored.last_studied;
    }

    const status = deriveStatus(mastery, complete, lastStudied || (stored && stored.last_studied));
    const topic = Object.assign({}, stored || {}, {
      status: status,
      mastery: mastery,
      last_studied: lastStudied || (stored && stored.last_studied) || null,
      quiz_score_avg: quizAvg || (stored && stored.quiz_score_avg) || 0,
      revision_count: (stored && stored.revision_count) || 0,
      last_revision: (stored && stored.last_revision) || null
    });
    topic.revision_interval_days = revisionIntervalDays(topic.status, topic.mastery);
    topic.next_revision = computeNextRevision(topic);
    return topic;
  }

  function pushActivity(hub, entry) {
    hub.activity.unshift(entry);
    if (hub.activity.length > 80) hub.activity.length = 80;
    return hub;
  }

  function buildActivityFromSync(hub, subjectId, topicId, topicName, topic) {
    if (!topic.last_studied) return;
    const key = subjectId + ":" + topicId + ":study:" + topic.last_studied;
    const exists = hub.activity.some(function (a) { return a._key === key; });
    if (exists) return;
    pushActivity(hub, {
      _key: key,
      type: topic.status === "mastered" ? "milestone" : "study",
      subjectId: subjectId,
      topicId: topicId,
      label: "Studied " + topicName,
      meta: topic.mastery + "% mastery",
      ts: topic.last_studied + "T12:00:00"
    });
    if (topic.quiz_score_avg > 0) {
      const qkey = subjectId + ":" + topicId + ":quiz:" + topic.last_studied;
      if (!hub.activity.some(function (a) { return a._key === qkey; })) {
        pushActivity(hub, {
          _key: qkey,
          type: "quiz",
          subjectId: subjectId,
          topicId: topicId,
          label: "Quiz on " + topicName,
          meta: topic.quiz_score_avg + "% best score",
          ts: topic.last_studied + "T14:00:00"
        });
      }
    }
  }

  function updateStreak(hub) {
    const today = todayStr();
    let studiedToday = false;
    Object.keys(hub.subjects).forEach(function (sid) {
      const topics = hub.subjects[sid].topics || {};
      Object.keys(topics).forEach(function (tid) {
        if (topics[tid].last_studied === today) studiedToday = true;
      });
    });
    if (!studiedToday) return hub;

    const last = hub.streak.lastStudyDate;
    if (last === today) return hub;

    if (last && daysBetween(last, today) === 1) {
      hub.streak.current += 1;
    } else if (last !== today) {
      hub.streak.current = 1;
    }
    hub.streak.lastStudyDate = today;
    if (hub.streak.current > hub.streak.best) hub.streak.best = hub.streak.current;
    return hub;
  }

  function detectLastVisited(hub) {
    let best = null;
    let bestTs = 0;
    Object.keys(hub.subjects).forEach(function (sid) {
      Object.keys(hub.subjects[sid].topics || {}).forEach(function (tid) {
        const t = hub.subjects[sid].topics[tid];
        if (!t.last_studied) return;
        const ts = new Date(t.last_studied).getTime();
        if (ts > bestTs) {
          bestTs = ts;
          best = { subjectId: sid, topicId: tid };
        }
      });
    });
    if (best) {
      hub.profile.lastVisitedSubject = best.subjectId;
      hub.profile.lastVisitedTopic = best.topicId;
    }
    try {
      const legacy = localStorage.getItem("cado_last_subject");
      if (legacy && !hub.profile.lastVisitedSubject) hub.profile.lastVisitedSubject = legacy;
    } catch { /* ignore */ }
    return hub;
  }

  function syncAll() {
    let hub = mergeAccount(load());
    if (typeof CADETOS_SUBJECTS === "undefined") return hub;

    CADETOS_SUBJECTS.forEach(function (sub) {
      const data = getSubjectData(sub.id);
      if (!data || !data.topics) return;
      const bucket = ensureSubject(hub, sub.id);
      data.topics.forEach(function (t) {
        const stored = bucket.topics[t.id] || {};
        const synced = syncTopic(hub, sub.id, t, stored);
        bucket.topics[t.id] = synced;
        buildActivityFromSync(hub, sub.id, t.id, t.name, synced);
      });
    });

    hub = updateStreak(hub);
    hub = detectLastVisited(hub);
    hub = awardBadges(hub);
    save(hub);
    return hub;
  }

  function countTopics(hub, predicate) {
    let n = 0;
    Object.keys(hub.subjects).forEach(function (sid) {
      Object.keys(hub.subjects[sid].topics || {}).forEach(function (tid) {
        if (predicate(hub.subjects[sid].topics[tid], sid, tid)) n++;
      });
    });
    return n;
  }

  function statsSnapshot(hub) {
    const readiness = [];
    if (typeof CADETOS_SUBJECTS !== "undefined") {
      CADETOS_SUBJECTS.forEach(function (s) {
        readiness.push(examReadiness(s.id, hub));
      });
    }
    return {
      topicsStudied: countTopics(hub, function (t) { return t.status !== "not_started"; }),
      topicsMastered: countTopics(hub, function (t) { return t.status === "mastered"; }),
      streak: hub.streak,
      revisionSessions: hub.revisionSessions || 0,
      maxExamReadiness: readiness.length ? Math.max.apply(null, readiness) : 0
    };
  }

  function awardBadges(hub) {
    const snap = statsSnapshot(hub);
    BADGE_DEFS.forEach(function (b) {
      if (b.check(snap) && hub.badges.indexOf(b.id) < 0) {
        hub.badges.push(b.id);
        pushActivity(hub, {
          type: "badge",
          label: "Earned badge: " + b.name,
          meta: b.desc,
          ts: new Date().toISOString()
        });
      }
    });
    return hub;
  }

  function topicCounts(subjectId, hub) {
    hub = hub || load();
    const data = getSubjectData(subjectId);
    const topics = (data && data.topics) || [];
    const bucket = hub.subjects[subjectId] || { topics: {} };
    let completed = 0;
    let inProgress = 0;
    let notStarted = 0;
    let mastered = 0;

    topics.forEach(function (t) {
      const tp = bucket.topics[t.id] || { status: "not_started", mastery: 0 };
      if (tp.status === "mastered") { mastered++; completed++; }
      else if (tp.status === "not_started") notStarted++;
      else inProgress++;
    });

    const overall = topics.length
      ? Math.round(topics.reduce(function (s, t) {
          return s + ((bucket.topics[t.id] && bucket.topics[t.id].mastery) || 0);
        }, 0) / topics.length)
      : 0;

    return {
      total: topics.length,
      completed: completed,
      inProgress: inProgress,
      notStarted: notStarted,
      mastered: mastered,
      overall: overall
    };
  }

  function examReadiness(subjectId, hub) {
    hub = hub || load();
    const data = getSubjectData(subjectId);
    if (!data || !data.topics.length) return 0;
    const bucket = hub.subjects[subjectId] || { topics: {} };
    let masterySum = 0;
    let quizSum = 0;
    let quizN = 0;
    let revisionScore = 0;
    const today = todayStr();

    data.topics.forEach(function (t) {
      const tp = bucket.topics[t.id] || { mastery: 0, status: "not_started" };
      masterySum += tp.mastery || 0;
      if (tp.quiz_score_avg) { quizSum += tp.quiz_score_avg; quizN++; }
      if (tp.status !== "not_started" && tp.next_revision) {
        if (tp.next_revision >= today) revisionScore += 100;
        else revisionScore += Math.max(0, 100 - daysBetween(tp.next_revision, today) * 15);
      }
    });

    const n = data.topics.length;
    const masteryPart = (masterySum / n) * 0.5;
    const quizPart = quizN ? (quizSum / quizN) * 0.3 : masteryPart * 0.6;
    const revPart = (revisionScore / n) * 0.2;
    return Math.min(100, Math.round(masteryPart + quizPart + revPart));
  }

  function revisionQueue(hub) {
    hub = hub || load();
    const today = todayStr();
    const due = [];
    const overdue = [];
    const upcoming = [];

    if (typeof CADETOS_SUBJECTS === "undefined") return { due: due, overdue: overdue, upcoming: upcoming };

    CADETOS_SUBJECTS.forEach(function (sub) {
      const data = getSubjectData(sub.id);
      if (!data) return;
      const bucket = hub.subjects[sub.id] || { topics: {} };
      data.topics.forEach(function (t) {
        const tp = bucket.topics[t.id];
        if (!tp || tp.status === "not_started" || !tp.next_revision) return;
        const item = {
          subjectId: sub.id,
          subjectName: sub.name,
          subjectIcon: sub.icon,
          subjectColor: sub.color,
          topicId: t.id,
          topicName: t.name,
          mastery: tp.mastery,
          status: tp.status,
          next_revision: tp.next_revision,
          daysUntil: daysBetween(today, tp.next_revision)
        };
        if (tp.next_revision < today) overdue.push(item);
        else if (tp.next_revision === today) due.push(item);
        else if (daysBetween(today, tp.next_revision) <= 7) upcoming.push(item);
      });
    });

    function sortRev(a, b) { return a.next_revision.localeCompare(b.next_revision); }
    due.sort(sortRev);
    overdue.sort(sortRev);
    upcoming.sort(sortRev);
    return { due: due, overdue: overdue, upcoming: upcoming };
  }

  function weakTopics(limit, hub) {
    hub = hub || load();
    const weak = [];
    if (typeof CADETOS_SUBJECTS === "undefined") return weak;

    CADETOS_SUBJECTS.forEach(function (sub) {
      const data = getSubjectData(sub.id);
      if (!data) return;
      const bucket = hub.subjects[sub.id] || { topics: {} };
      data.topics.forEach(function (t) {
        const tp = bucket.topics[t.id];
        if (!tp || tp.status === "not_started") return;
        if (tp.mastery < 60 || (tp.quiz_score_avg && tp.quiz_score_avg < 65)) {
          weak.push({
            subjectId: sub.id,
            subjectName: sub.name,
            topicId: t.id,
            topicName: t.name,
            mastery: tp.mastery,
            quiz: tp.quiz_score_avg
          });
        }
      });
    });

    weak.sort(function (a, b) { return a.mastery - b.mastery; });
    return weak.slice(0, limit || 5);
  }

  function getProfile() {
    return mergeAccount(load()).profile;
  }

  function updateProfile(partial) {
    const hub = load();
    hub.profile = Object.assign({}, hub.profile, partial);
    save(hub);
    return hub.profile;
  }

  function setLastVisited(subjectId, topicId) {
    return updateProfile({ lastVisitedSubject: subjectId, lastVisitedTopic: topicId });
  }

  function recordRevision(subjectId, topicId) {
    const hub = syncAll();
    const bucket = ensureSubject(hub, subjectId);
    const topic = bucket.topics[topicId];
    if (!topic) return hub;
    const today = todayStr();
    topic.last_revision = today;
    topic.revision_count = (topic.revision_count || 0) + 1;
    topic.revision_interval_days = revisionIntervalDays(topic.status, topic.mastery);
    topic.next_revision = computeNextRevision(topic);
    hub.revisionSessions = (hub.revisionSessions || 0) + 1;
    const data = getSubjectData(subjectId);
    const tdef = data && data.topics.find(function (x) { return x.id === topicId; });
    pushActivity(hub, {
      type: "revision",
      subjectId: subjectId,
      topicId: topicId,
      label: "Revised " + (tdef ? tdef.name : topicId),
      meta: "Spaced revision session",
      ts: new Date().toISOString()
    });
    updateStreak(hub);
    awardBadges(hub);
    save(hub);
    return hub;
  }

  function getActivity(limit) {
    const hub = load();
    return (hub.activity || []).slice(0, limit || 20);
  }

  function getBadges() {
    const hub = load();
    return BADGE_DEFS.map(function (b) {
      return Object.assign({}, b, { earned: hub.badges.indexOf(b.id) >= 0 });
    });
  }

  function getSubjectMeta(subjectId) {
    if (typeof CADETOS_SUBJECTS === "undefined") return null;
    return CADETOS_SUBJECTS.find(function (s) { return s.id === subjectId; }) || null;
  }

  function getSubjectTopics(subjectId, hub) {
    hub = hub || load();
    const data = getSubjectData(subjectId);
    if (!data) return [];
    const bucket = hub.subjects[subjectId] || { topics: {} };
    return data.topics.map(function (t) {
      const tp = bucket.topics[t.id] || { status: "not_started", mastery: 0 };
      return Object.assign({ id: t.id, number: t.number, name: t.name }, tp);
    });
  }

  function timeAgo(iso) {
    if (!iso) return "";
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return mins + " min ago";
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return hrs + " hr ago";
    const days = Math.floor(hrs / 24);
    if (days === 1) return "Yesterday";
    if (days < 14) return days + " days ago";
    return dateOnly(iso);
  }

  function resumeTarget(hub) {
    hub = hub || load();
    const p = hub.profile;
    if (p.lastVisitedSubject && p.lastVisitedTopic) {
      const data = getSubjectData(p.lastVisitedSubject);
      const t = data && data.topics.find(function (x) { return x.id === p.lastVisitedTopic; });
      if (t) return { subjectId: p.lastVisitedSubject, topicId: p.lastVisitedTopic, topicName: t.name, mode: "learn" };
    }
    return null;
  }

  function revisionTarget(hub) {
    const q = revisionQueue(hub);
    const pick = q.overdue[0] || q.due[0] || q.upcoming[0];
    if (!pick) return null;
    return {
      subjectId: pick.subjectId,
      topicId: pick.topicId,
      topicName: pick.topicName,
      mode: "revision",
      overdue: pick.next_revision < todayStr()
    };
  }

  function chemistryGamificationStreak() {
    if (typeof ChemistryGamification !== "undefined") {
      const g = ChemistryGamification.load();
      return g.streak || 0;
    }
    return 0;
  }

  return {
    KEY: KEY,
    AVATARS: AVATARS,
    load: load,
    save: save,
    syncAll: syncAll,
    getProfile: getProfile,
    updateProfile: updateProfile,
    setLastVisited: setLastVisited,
    topicCounts: topicCounts,
    examReadiness: examReadiness,
    revisionQueue: revisionQueue,
    recordRevision: recordRevision,
    getActivity: getActivity,
    getBadges: getBadges,
    weakTopics: weakTopics,
    getSubjectMeta: getSubjectMeta,
    getSubjectTopics: getSubjectTopics,
    getSubjectData: getSubjectData,
    timeAgo: timeAgo,
    resumeTarget: resumeTarget,
    revisionTarget: revisionTarget,
    statsSnapshot: statsSnapshot,
    chemistryGamificationStreak: chemistryGamificationStreak,
    deriveStatus: deriveStatus
  };
})();

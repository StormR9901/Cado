/**
 * CADO Profile Page — learning hub UI (SubjectCard, TopicTracker, Revision, Timeline)
 */
const ProfilePage = (function () {
  "use strict";

  let callbacks = {};
  let activeSubject = null;

  function esc(str) {
    if (callbacks.escapeHtml) return callbacks.escapeHtml(str);
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function ringSvg(pct, color, size) {
    const s = size || 56;
    const r = (s - 8) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ - (pct / 100) * circ;
    return (
      '<svg class="ph-ring" width="' + s + '" height="' + s + '" viewBox="0 0 ' + s + " " + s + '">' +
      '<circle class="ph-ring-bg" cx="' + s / 2 + '" cy="' + s / 2 + '" r="' + r + '"/>' +
      '<circle class="ph-ring-fill" cx="' + s / 2 + '" cy="' + s / 2 + '" r="' + r + '"' +
      ' stroke="' + esc(color) + '" stroke-dasharray="' + circ + '" stroke-dashoffset="' + offset + '"/>' +
      '<text class="ph-ring-text" x="50%" y="50%" dominant-baseline="central" text-anchor="middle">' + pct + "%</text>" +
      "</svg>"
    );
  }

  function statusLabel(status) {
    const map = {
      not_started: "Not started",
      learning: "Learning",
      revision: "Revision",
      mastered: "Mastered"
    };
    return map[status] || status;
  }

  function renderHero(hub, account, signedIn) {
    const profile = hub.profile || ProfileEngine.getProfile();
    const streak = Math.max(hub.streak.current || 0, ProfileEngine.chemistryGamificationStreak());
    const snap = ProfileEngine.statsSnapshot(hub);
    const resume = ProfileEngine.resumeTarget(hub);
    const rev = ProfileEngine.revisionTarget(hub);
    const name = (account && account.displayName) || profile.username || "Student";

    let html = '<header class="ph-hero">';
    html += '<div class="ph-hero-left">';
    html += '<div class="ph-avatar-wrap"><span class="ph-avatar" id="phAvatarBtn" title="Change avatar">' + esc(profile.avatar || "🎓") + "</span></div>";
    html += '<div class="ph-hero-info">';
    html += '<h2 class="ph-hero-name">' + esc(name) + "</h2>";
    html += '<p class="ph-hero-meta">';
    html += esc(profile.grade || "O Level");
    if (profile.targetExamYear) html += " · Target " + esc(String(profile.targetExamYear));
    html += "</p>";
    if (!signedIn) {
      html += '<p class="ph-hero-hint">Create an account below to save your learning journey on this device.</p>';
    }
    html += "</div></div>";

    html += '<div class="ph-hero-stats">';
    html += '<div class="ph-stat"><span class="ph-stat-val">🔥 ' + streak + '</span><span class="ph-stat-lbl">Day streak</span></div>';
    html += '<div class="ph-stat"><span class="ph-stat-val">' + snap.topicsMastered + '</span><span class="ph-stat-lbl">Topics mastered</span></div>';
    html += '<div class="ph-stat"><span class="ph-stat-val">' + snap.maxExamReadiness + '%</span><span class="ph-stat-lbl">Best exam ready</span></div>';
    html += "</div>";

    html += '<div class="ph-hero-actions">';
    if (resume) {
      html += '<button type="button" class="btn btn-primary ph-btn-resume" data-subject="' + esc(resume.subjectId) + '" data-topic="' + esc(resume.topicId) + '">';
      html += "▶ Resume: " + esc(resume.topicName) + "</button>";
    }
    if (rev) {
      html += '<button type="button" class="btn btn-secondary ph-btn-revision' + (rev.overdue ? " ph-btn-revision--urgent" : "") + '" data-subject="' + esc(rev.subjectId) + '" data-topic="' + esc(rev.topicId) + '">';
      html += "🔄 Revise: " + esc(rev.topicName) + (rev.overdue ? " (overdue)" : "") + "</button>";
    }
    html += "</div></header>";
    return html;
  }

  function renderRevisionSection(queue) {
    const total = queue.due.length + queue.overdue.length;
    let html = '<section class="ph-section ph-revision-section">';
    html += '<div class="ph-section-head"><h3>Revision due</h3>';
    if (total) html += '<span class="ph-pill ph-pill--urgent">' + total + " today</span>";
    html += "</div>";

    if (!queue.due.length && !queue.overdue.length && !queue.upcoming.length) {
      html += '<p class="ph-empty">No revisions scheduled yet. Start studying topics to build your spaced revision plan.</p>';
      html += "</section>";
      return html;
    }

    if (queue.overdue.length) {
      html += '<div class="ph-rev-group"><h4 class="ph-rev-label ph-rev-label--overdue">Overdue</h4><ul class="ph-rev-list">';
      queue.overdue.slice(0, 6).forEach(function (item) {
        html += renderRevisionItem(item, true);
      });
      html += "</ul></div>";
    }

    if (queue.due.length) {
      html += '<div class="ph-rev-group"><h4 class="ph-rev-label">Due today</h4><ul class="ph-rev-list">';
      queue.due.slice(0, 6).forEach(function (item) {
        html += renderRevisionItem(item, false);
      });
      html += "</ul></div>";
    }

    if (queue.upcoming.length) {
      html += '<div class="ph-rev-group"><h4 class="ph-rev-label ph-rev-label--muted">Upcoming (7 days)</h4><ul class="ph-rev-list ph-rev-list--compact">';
      queue.upcoming.slice(0, 4).forEach(function (item) {
        html += renderRevisionItem(item, false, true);
      });
      html += "</ul></div>";
    }

    html += "</section>";
    return html;
  }

  function renderRevisionItem(item, isOverdue, compact) {
    const days = item.daysUntil;
    const when = isOverdue
      ? Math.abs(days) + "d overdue"
      : days === 0
        ? "Today"
        : "In " + days + "d";
    return (
      '<li class="ph-rev-item' + (compact ? " ph-rev-item--compact" : "") + '">' +
      '<span class="ph-rev-icon">' + esc(item.subjectIcon) + "</span>" +
      '<div class="ph-rev-body">' +
      '<span class="ph-rev-topic">' + esc(item.topicName) + "</span>" +
      '<span class="ph-rev-sub">' + esc(item.subjectName) + " · " + esc(when) + "</span>" +
      "</div>" +
      '<button type="button" class="btn btn-sm ' + (isOverdue ? "btn-primary" : "btn-secondary") + ' ph-rev-go" data-subject="' + esc(item.subjectId) + '" data-topic="' + esc(item.topicId) + '">Revise</button>' +
      "</li>"
    );
  }

  function renderWeakHint(weak) {
    if (!weak.length) return "";
    let html = '<section class="ph-section ph-hint-section"><div class="ph-hint-card">';
    html += '<span class="ph-hint-icon">💡</span><div>';
    html += "<strong>Focus areas</strong><p>";
    html += "You could strengthen ";
    html += weak.slice(0, 3).map(function (w) {
      return "<em>" + esc(w.topicName) + "</em> (" + esc(w.subjectName) + ", " + w.mastery + "%)";
    }).join(", ");
    html += ".</p></div></div></section>";
    return html;
  }

  function renderSubjectGrid(hub) {
    let html = '<section class="ph-section"><div class="ph-section-head"><h3>Subject dashboard</h3></div>';
    html += '<div class="ph-subject-grid">';

    if (typeof CADETOS_SUBJECTS === "undefined") {
      html += "</div></section>";
      return html;
    }

    CADETOS_SUBJECTS.forEach(function (sub) {
      const counts = ProfileEngine.topicCounts(sub.id, hub);
      const readiness = ProfileEngine.examReadiness(sub.id, hub);
      const isActive = activeSubject === sub.id;
      html += '<article class="ph-subject-card' + (isActive ? " is-active" : "") + '" style="--sub-color:' + esc(sub.color) + '" data-subject="' + esc(sub.id) + '">';
      html += '<div class="ph-subject-card-top">';
      html += '<span class="ph-subject-icon">' + sub.icon + "</span>";
      html += '<div class="ph-subject-titles"><h4>' + esc(sub.name) + '</h4><span class="ph-subject-code">' + esc(sub.code) + "</span></div>";
      html += ringSvg(counts.overall, sub.color, 52);
      html += "</div>";
      html += '<div class="ph-subject-metrics">';
      html += '<span><strong>' + counts.mastered + "</strong> mastered</span>";
      html += '<span><strong>' + counts.inProgress + "</strong> in progress</span>";
      html += '<span><strong>' + counts.notStarted + "</strong> not started</span>";
      html += "</div>";
      html += '<div class="ph-readiness"><span class="ph-readiness-label">Exam ready</span>';
      html += '<div class="ph-readiness-bar"><div class="ph-readiness-fill" style="width:' + readiness + "%;background:" + esc(sub.color) + '"></div></div>';
      html += '<span class="ph-readiness-pct">' + readiness + "%</span></div>";
      html += '<button type="button" class="btn btn-sm btn-secondary ph-subject-open" data-subject="' + esc(sub.id) + '">Open hub</button>';
      html += "</article>";
    });

    html += "</div></section>";
    return html;
  }

  function renderTopicPanel(hub) {
    if (!activeSubject) return '<div id="phTopicPanel" class="ph-topic-panel ph-topic-panel--empty"></div>';
    const meta = ProfileEngine.getSubjectMeta(activeSubject);
    const topics = ProfileEngine.getSubjectTopics(activeSubject, hub);
    const readiness = ProfileEngine.examReadiness(activeSubject, hub);
    const counts = ProfileEngine.topicCounts(activeSubject, hub);

    let html = '<section id="phTopicPanel" class="ph-section ph-topic-panel">';
    html += '<div class="ph-section-head">';
    html += "<h3>" + (meta ? meta.icon + " " + esc(meta.name) : "") + " — Topics</h3>";
    html += '<span class="ph-pill">' + readiness + "% exam ready</span>";
    html += '<button type="button" class="ph-close-panel" id="phClosePanel" aria-label="Close">×</button>';
    html += "</div>";
    html += '<p class="ph-topic-summary">' + counts.mastered + " mastered · " + counts.inProgress + " in progress · " + counts.total + " total</p>";
    html += '<ul class="ph-topic-list">';

    topics.forEach(function (t) {
      html += '<li class="ph-topic-row ph-topic-row--' + esc(t.status) + '">';
      html += '<span class="ph-topic-num">' + (t.number || "") + "</span>";
      html += '<div class="ph-topic-info">';
      html += '<span class="ph-topic-name">' + esc(t.name) + "</span>";
      html += '<span class="ph-topic-meta">' + esc(statusLabel(t.status));
      if (t.last_studied) html += " · " + esc(ProfileEngine.timeAgo(t.last_studied + "T12:00:00"));
      if (t.quiz_score_avg) html += " · Quiz " + t.quiz_score_avg + "%";
      html += "</span></div>";
      html += '<div class="ph-topic-mastery"><div class="ph-topic-bar"><div class="ph-topic-fill" style="width:' + (t.mastery || 0) + '%"></div></div><span>' + (t.mastery || 0) + "%</span></div>";
      html += '<div class="ph-topic-actions">';
      html += '<button type="button" class="btn btn-sm btn-secondary ph-topic-study" data-subject="' + esc(activeSubject) + '" data-topic="' + esc(t.id) + '">Study</button>';
      if (t.status !== "not_started") {
        html += '<button type="button" class="btn btn-sm btn-secondary ph-topic-revise" data-subject="' + esc(activeSubject) + '" data-topic="' + esc(t.id) + '">Revise</button>';
      }
      html += "</div></li>";
    });

    html += "</ul></section>";
    return html;
  }

  function renderTimeline(hub) {
    const items = ProfileEngine.getActivity(15);
    let html = '<section class="ph-section ph-timeline-section"><div class="ph-section-head"><h3>Learning journey</h3></div>';
    if (!items.length) {
      html += '<p class="ph-empty">Your study activity will appear here as you learn and revise.</p>';
    } else {
      html += '<ol class="ph-timeline">';
      items.forEach(function (a) {
        const icon = a.type === "quiz" ? "📝" : a.type === "revision" ? "🔄" : a.type === "badge" ? "🏅" : a.type === "milestone" ? "⭐" : "📖";
        html += '<li class="ph-timeline-item ph-timeline-item--' + esc(a.type) + '">';
        html += '<span class="ph-timeline-icon">' + icon + "</span>";
        html += '<div class="ph-timeline-body"><span class="ph-timeline-label">' + esc(a.label) + "</span>";
        if (a.meta) html += '<span class="ph-timeline-meta">' + esc(a.meta) + "</span>";
        html += '<time class="ph-timeline-time">' + esc(ProfileEngine.timeAgo(a.ts)) + "</time>";
        html += "</div></li>";
      });
      html += "</ol>";
    }
    html += "</section>";
    return html;
  }

  function renderBadges() {
    const badges = ProfileEngine.getBadges();
    const earned = badges.filter(function (b) { return b.earned; });
    let html = '<section class="ph-section ph-badges-section"><div class="ph-section-head"><h3>Achievements</h3>';
    html += '<span class="ph-pill">' + earned.length + "/" + badges.length + "</span></div>";
    html += '<div class="ph-badge-grid">';
    badges.forEach(function (b) {
      html += '<div class="ph-badge' + (b.earned ? " is-earned" : "") + '" title="' + esc(b.desc) + '">';
      html += '<span class="ph-badge-icon">' + b.icon + "</span>";
      html += '<span class="ph-badge-name">' + esc(b.name) + "</span>";
      html += "</div>";
    });
    html += "</div></section>";
    return html;
  }

  function renderSettings(hub, account, signedIn) {
    const p = hub.profile;
    let html = '<section class="ph-section ph-settings-section"><div class="ph-section-head"><h3>Study preferences</h3></div>';
    html += '<form class="ph-settings-form" id="phSettingsForm">';
    html += '<label class="ph-field"><span>Grade / level</span><select class="select" id="phGrade"><option value="O Level"' + (p.grade === "O Level" ? " selected" : "") + '>O Level</option><option value="IGCSE"' + (p.grade === "IGCSE" ? " selected" : "") + ">IGCSE</option></select></label>";
    html += '<label class="ph-field"><span>Target exam year</span><input type="number" class="input" id="phExamYear" min="2024" max="2035" placeholder="e.g. 2027" value="' + esc(p.targetExamYear ? String(p.targetExamYear) : "") + '"></label>';
    html += '<label class="ph-field"><span>Preferred subjects</span><div class="ph-pref-grid" id="phPrefSubjects">';
    if (typeof CADETOS_SUBJECTS !== "undefined") {
      CADETOS_SUBJECTS.forEach(function (s) {
        const checked = (p.preferredSubjects || []).indexOf(s.id) >= 0;
        html += '<label class="ph-pref-chip"><input type="checkbox" value="' + esc(s.id) + '"' + (checked ? " checked" : "") + "><span>" + s.icon + " " + esc(s.name) + "</span></label>";
      });
    }
    html += '</div></label><button type="submit" class="btn btn-sm btn-secondary">Save preferences</button></form>';

    html += '<div class="ph-account-block">';
    if (signedIn) {
      html += '<p class="ph-account-greeting">Signed in as <strong>' + esc(account.displayName) + "</strong></p>";
      if (account.email) html += '<p class="ph-account-email">' + esc(account.email) + "</p>";
      html += '<button type="button" class="btn btn-sm btn-secondary" id="phSignOut">Sign out</button>';
    } else {
      html += '<h4>Create account</h4><p class="ph-note">Save your name and track progress on this device.</p>';
      html += '<form id="phAuthForm" class="ph-auth-form">';
      html += '<label class="ph-field"><span>Display name</span><input type="text" class="input" id="phName" required placeholder="Your name"></label>';
      html += '<label class="ph-field"><span>Email (optional)</span><input type="email" class="input" id="phEmail" placeholder="you@email.com"></label>';
      html += '<button type="submit" class="btn btn-primary">Create account</button></form>';
    }
    html += "</div></section>";
    return html;
  }

  function renderAvatarPicker(current) {
    let html = '<div class="ph-avatar-picker" id="phAvatarPicker">';
    ProfileEngine.AVATARS.forEach(function (a) {
      html += '<button type="button" class="ph-avatar-opt' + (a === current ? " is-active" : "") + '" data-avatar="' + esc(a) + '">' + a + "</button>";
    });
    html += "</div>";
    return html;
  }

  function bindEvents(root) {
    root.querySelector("#phAvatarBtn")?.addEventListener("click", function () {
      const picker = root.querySelector("#phAvatarPicker");
      if (picker) { picker.remove(); return; }
      const profile = ProfileEngine.getProfile();
      const el = document.createElement("div");
      el.innerHTML = renderAvatarPicker(profile.avatar);
      root.querySelector(".ph-hero-left")?.appendChild(el.firstChild);
      root.querySelectorAll(".ph-avatar-opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          ProfileEngine.updateProfile({ avatar: btn.dataset.avatar });
          render(root);
        });
      });
    });

    root.querySelector("#phClosePanel")?.addEventListener("click", function () {
      activeSubject = null;
      render(root);
    });

    root.querySelectorAll(".ph-subject-card").forEach(function (card) {
      card.addEventListener("click", function (e) {
        if (e.target.closest(".ph-subject-open")) return;
        activeSubject = card.dataset.subject;
        render(root);
      });
    });

    root.querySelectorAll(".ph-subject-open").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (callbacks.onOpenSubject) callbacks.onOpenSubject(btn.dataset.subject);
      });
    });

    function openTopic(subjectId, topicId, doRevision) {
      if (doRevision) ProfileEngine.recordRevision(subjectId, topicId);
      ProfileEngine.setLastVisited(subjectId, topicId);
      if (callbacks.onOpenTopic) callbacks.onOpenTopic(subjectId, topicId);
    }

    root.querySelectorAll(".ph-btn-resume, .ph-topic-study").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openTopic(btn.dataset.subject, btn.dataset.topic, false);
      });
    });

    root.querySelectorAll(".ph-btn-revision, .ph-rev-go, .ph-topic-revise").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openTopic(btn.dataset.subject, btn.dataset.topic, true);
      });
    });

    root.querySelector("#phSettingsForm")?.addEventListener("submit", function (e) {
      e.preventDefault();
      const prefs = [];
      root.querySelectorAll("#phPrefSubjects input:checked").forEach(function (cb) {
        prefs.push(cb.value);
      });
      ProfileEngine.updateProfile({
        grade: root.querySelector("#phGrade")?.value || "O Level",
        targetExamYear: parseInt(root.querySelector("#phExamYear")?.value, 10) || null,
        preferredSubjects: prefs
      });
      render(root);
    });

    root.querySelector("#phAuthForm")?.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = root.querySelector("#phName")?.value?.trim();
      if (!name) return;
      if (typeof CadetosProfile !== "undefined") {
        CadetosProfile.saveAccount({
          displayName: name,
          email: root.querySelector("#phEmail")?.value?.trim() || ""
        });
        ProfileEngine.updateProfile({ username: name });
      }
      render(root);
    });

    root.querySelector("#phSignOut")?.addEventListener("click", function () {
      if (typeof CadetosProfile !== "undefined") CadetosProfile.signOut();
      render(root);
    });
  }

  function render(root, opts) {
    if (!root || typeof ProfileEngine === "undefined") return;
    callbacks = opts || callbacks;
    const hub = ProfileEngine.syncAll();
    const account = typeof CadetosProfile !== "undefined" ? CadetosProfile.loadAccount() : null;
    const signedIn = typeof CadetosProfile !== "undefined" && CadetosProfile.isSignedIn();
    const queue = ProfileEngine.revisionQueue(hub);
    const weak = ProfileEngine.weakTopics(5, hub);

    let html = '<div class="ph-hub">';
    html += renderHero(hub, account, signedIn);
    html += '<div class="ph-main-grid">';
    html += '<div class="ph-main-col">';
    html += renderRevisionSection(queue);
    html += renderWeakHint(weak);
    html += renderSubjectGrid(hub);
    html += renderTopicPanel(hub);
    html += "</div>";
    html += '<aside class="ph-side-col">';
    html += renderTimeline(hub);
    html += renderBadges();
    html += renderSettings(hub, account, signedIn);
    html += "</aside></div></div>";

    root.innerHTML = html;
    bindEvents(root);
  }

  return { render: render };
})();

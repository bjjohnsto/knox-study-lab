/* ==========================================================================
   Knox's 6th Grade Study Lab — app engine
   Nothing here needs editing when you add new material. Edit data.js instead.
   ========================================================================== */

(function () {
  "use strict";

  var app = document.getElementById("app");
  var tabbar = document.getElementById("tabbar");

  /* ---------- small helpers ---------------------------------------------- */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function sample(pool, n, exclude) {
    var out = [];
    var candidates = shuffle(pool.filter(function (x) { return x !== exclude; }));
    for (var i = 0; i < n && i < candidates.length; i++) out.push(candidates[i]);
    return out;
  }

  function fmtDate(iso) {
    if (!iso) return "";
    var p = iso.split("-");
    return (+p[1]) + "/" + (+p[2]) + "/" + p[0].slice(2);
  }

  /* Every date on this site is figured in Eastern time, not the time zone the
     phone or iPad happens to be set to. That way a quiz counts down the same
     way for everyone, wherever they open it. */
  var ZONE = "America/New_York";

  function todayInZone() {
    try {
      var parts = new Intl.DateTimeFormat("en-US", {
        timeZone: ZONE, year: "numeric", month: "2-digit", day: "2-digit"
      }).formatToParts(new Date());
      var got = {};
      parts.forEach(function (p) { got[p.type] = p.value; });
      if (got.year && got.month && got.day) {
        return [+got.year, +got.month, +got.day];
      }
    } catch (e) { /* very old browser: fall back to the device clock */ }
    var d = new Date();
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
  }

  function daysUntil(iso) {
    if (!iso) return null;
    var p = iso.split("-");
    var t = todayInZone();
    /* Compare calendar days as UTC midnights so daylight saving can't skew it. */
    var target = Date.UTC(+p[0], +p[1] - 1, +p[2]);
    var today = Date.UTC(t[0], t[1] - 1, t[2]);
    return Math.round((target - today) / 86400000);
  }

  function itemsFor(subjectId) {
    return STUDY_ITEMS.filter(function (i) { return i.subject === subjectId; });
  }

  /* Once a quiz date has gone by, that item disappears from the site on its
     own. Delete its block from data.js when you want it gone for good. */
  function isPast(item) {
    var d = daysUntil(item.quiz);
    return d !== null && d < 0;
  }
  function activeFor(subjectId) {
    return itemsFor(subjectId).filter(function (i) { return !isPast(i); });
  }

  function itemById(id) {
    return STUDY_ITEMS.filter(function (i) { return i.id === id; })[0];
  }

  function subjectById(id) {
    return SUBJECTS.filter(function (s) { return s.id === id; })[0];
  }

  function flatBooks(item) {
    return item.groups.reduce(function (acc, g) { return acc.concat(g.books); }, []);
  }

  /* ---------- drill catalogue -------------------------------------------- */

  var DRILLS = {
    vocab: [
      { id: "flash",   name: "Flashcards",         blurb: "Flip through the words. No score, no pressure." },
      { id: "meaning", name: "Match the meaning",  blurb: "See the definition, pick the word." },
      { id: "define",  name: "Pick the definition", blurb: "See the word, pick what it means." },
      { id: "blank",   name: "Fill the blank",     blurb: "Worksheet sentences, one at a time." }
    ],
    sequence: [
      { id: "chant",     name: "Say it in lines",      blurb: "Nine short lines. Read each one out loud until it has a beat." },
      { id: "recall",    name: "Cover and recall",     blurb: "First letters only. Say the line from memory, then check yourself." },
      { id: "bank",      name: "Word bank \u2014 like the test", blurb: "Every book in a bank, blank numbered lines. Exactly how the test works." },
      { id: "next",      name: "What comes next?",     blurb: "One book on screen. Pick the one that follows." },
      { id: "lineup",    name: "Line them up",         blurb: "Put a small group in order, six at a time." },
      { id: "dragorder", name: "Drag all {n} in order", blurb: "The whole list, shuffled. Drag until it's right, then check it." }
    ],
    categorize: [
      { id: "group1",   name: "Which group? — Part 1",  blurb: "Law, History, and Poetry & Wisdom only." },
      { id: "groupall", name: "Which group? — All 39",  blurb: "Everything, prophets included." }
    ],
    questions: [
      { id: "tfonly",   name: "True or false",        blurb: "Eight statements. Some are traps \u2014 read them carefully." },
      { id: "mconly",   name: "Multiple choice",      blurb: "Pick the one right answer out of four." },
      { id: "multionly",name: "Mark ALL that apply",  blurb: "More than one answer is right every time. Get every one." },
      { id: "mixed",    name: "Full practice test",   blurb: "All three sections together, like the real thing." }
    ],
    verse: [
      { id: "read",  name: "Read it out loud",  blurb: "The whole verse. Say it five times before you move on." },
      { id: "fade",  name: "Fade it out",       blurb: "Full words, then first letters, then nothing. Say it each time." },
      { id: "order", name: "Put it in order",   blurb: "Words scrambled. Tap them back into the right order." }
    ]
  };

  var EXTRAS_DRILL = { id: "extras", name: "Study guide questions",
    blurb: "The written questions. Answer out loud, then check yourself." };

  function drillsFor(item) {
    var list = (DRILLS[item.type] || []).slice();
    if (item.type === "vocab" && !hasSentences(item)) {
      list = list.filter(function (d) { return d.id !== "blank"; });
    }
    if (item.extras && item.extras.length) list.push(EXTRAS_DRILL);
    if (item.type === "sequence") {
      var count = flatBooks(item).length;
      list = list.map(function (dd) {
        return { id: dd.id, blurb: dd.blurb,
                 name: dd.name.replace("{n}", count) };
      });
    }
    return list;
  }

  function hasSentences(item) {
    return (item.words || []).some(function (w) { return !!w.sentence; });
  }

  function drillById(item, drillId) {
    return drillsFor(item).filter(function (d) { return d.id === drillId; })[0];
  }

  /* ---------- question builders ------------------------------------------ */

  var ROUND_LENGTH = 10;

  function buildQuestions(item, drillId) {
    if (item.type === "vocab") return buildVocab(item, drillId);
    if (item.type === "sequence") return buildSequence(item, drillId);
    if (item.type === "categorize") return buildCategorize(item, drillId);
    return [];
  }

  function buildVocab(item, drillId) {
    var words = item.words.map(function (w) { return w.word; });
    var meanings = item.words.map(function (w) { return w.meaning; });

    return shuffle(item.words).map(function (w) {
      var recall = w.word + " \u2014 " + w.meaning;

      if (drillId === "define") {
        return { kicker: "What does this word mean?", text: w.word, style: "plain",
                 options: shuffle(sample(meanings, 3, w.meaning).concat([w.meaning])),
                 answer: w.meaning, longOptions: true, recall: recall };
      }
      if (drillId === "blank") {
        return { kicker: "Fill in the blank", text: w.sentence, style: "sentence",
                 options: shuffle(sample(words, 3, w.word).concat([w.word])),
                 answer: w.word, recall: recall };
      }
      return { kicker: "What word means this?", text: w.meaning, style: "plain",
               options: shuffle(sample(words, 3, w.word).concat([w.word])),
               answer: w.word, recall: recall };
    });
  }

  function buildSequence(item, drillId) {
    var books = flatBooks(item);
    if (drillId === "lineup") return chunksOf(item);
    var qs = [];
    var picks = shuffle(books.slice(0, books.length - 1)).slice(0, ROUND_LENGTH);
    picks.forEach(function (b) {
      var i = books.indexOf(b);
      var right = books[i + 1];
      var pool = books.filter(function (x) { return x !== b; });
      qs.push({
        kicker: "Which book comes right after?",
        text: b, style: "plain",
        options: shuffle(sample(pool, 3, right).concat([right])),
        answer: right,
        recall: b + " \u2192 " + right
      });
    });
    return qs;
  }

  function chunksOf(item) {
    var chunks = [];
    item.groups.forEach(function (g) {
      var size = 6;
      for (var i = 0; i < g.books.length; i += size) {
        var slice = g.books.slice(i, i + size);
        var label = g.books.length > size
          ? g.name + " (" + (i + 1) + "\u2013" + (i + slice.length) + ")"
          : g.name;
        chunks.push({ kind: "order", kicker: label, answer: slice });
      }
    });
    return chunks;
  }

  function buildCategorize(item, drillId) {
    var groups = item.groups.filter(function (g) {
      return drillId === "groupall" ? true : g.partOne;
    });
    var names = groups.map(function (g) { return g.name; });
    var pairs = [];
    groups.forEach(function (g) {
      g.books.forEach(function (b) { pairs.push({ book: b, group: g.name }); });
    });
    return shuffle(pairs).slice(0, ROUND_LENGTH).map(function (p) {
      return {
        kicker: "Which section is this book in?",
        text: p.book, style: "plain",
        options: names.slice(),
        answer: p.group,
        recall: p.book + " \u2014 " + p.group
      };
    });
  }

  /* ---------- routing ----------------------------------------------------- */

  function parseHash() {
    var h = location.hash.replace(/^#\/?/, "");
    return h ? h.split("/") : [];
  }

  function route() {
    var p = parseHash();
    game = null;
    if (p[0] === "s" && p[1]) renderSubject(p[1]);
    else if (p[0] === "i" && p[1] && p[2] === "sheet") renderSheet(p[1]);
    else if (p[0] === "i" && p[1] && p[2]) startGame(p[1], p[2]);
    else if (p[0] === "i" && p[1]) renderItem(p[1]);
    else renderHome();
    renderTabs(p[0] === "s" ? p[1] : (p[0] === "i" ? (itemById(p[1]) || {}).subject : null));
    window.scrollTo(0, 0);
  }

  function renderTabs(activeSubject) {
    tabbar.innerHTML = SUBJECTS.map(function (s) {
      var cur = s.id === activeSubject ? ' aria-current="page"' : "";
      return '<a class="tab" href="#/s/' + s.id + '"' + cur + ">" + esc(s.name) + "</a>";
    }).join("");
  }

  /* ---------- screens ----------------------------------------------------- */

  function renderHome() {
    var cards = SUBJECTS.map(function (s) {
      var n = activeFor(s.id).length;
      var cls = n ? "jersey jersey--active" : "jersey jersey--empty";
      return '<a class="jersey-link" href="#/s/' + s.id + '">' +
        '<span class="' + cls + '">' +
          '<span class="jersey-num">' + n + "</span>" +
          '<span class="jersey-name">' + esc(s.name) + "</span>" +
          '<span class="jersey-sub">' + (n === 1 ? "1 drill set" : n + " drill sets") + "</span>" +
        "</span></a>";
    }).join("");

    var upcoming = STUDY_ITEMS
      .filter(function (i) { var d = daysUntil(i.quiz); return d !== null && d >= 0 && d <= 10; })
      .sort(function (a, b) { return daysUntil(a.quiz) - daysUntil(b.quiz); });

    var next = "";
    if (upcoming.length) {
      next = '<p class="eyebrow">Next up</p><div class="stack" style="margin-bottom:2rem">' +
        upcoming.map(itemCard).join("") + "</div>";
    }

    app.innerHTML =
      next +
      '<p class="eyebrow">Pick your class</p>' +
      '<h1 class="page-title">The squad</h1>' +
      '<p class="lede">The number on each shirt is how many things there are to study in that class right now.</p>' +
      '<div class="jersey-grid">' + cards + "</div>";
  }

  function itemCard(item) {
    var subj = subjectById(item.subject);
    var d = daysUntil(item.quiz);
    var pill = "";
    if (item.quiz) {
      var cls = d === null ? "pill" : d < 0 ? "pill pill--past" : d <= 3 ? "pill pill--soon" : "pill";
      var label = d === null ? "" : d < 0 ? "Quiz passed" : d === 0 ? "Quiz today" :
                  d === 1 ? "Quiz tomorrow" : "Quiz in " + d + " days";
      pill = '<span class="' + cls + '">' + label + "</span>";
    }
    return '<a class="card" href="#/i/' + item.id + '">' +
      '<h2 class="card-title">' + esc(item.title) + "</h2>" +
      '<div class="card-meta">' +
        "<span>" + esc(subj ? subj.name : item.subject) + "</span>" +
        "<span>Added " + fmtDate(item.added) + "</span>" +
        (item.quiz ? "<span>Quiz " + fmtDate(item.quiz) + "</span>" : "") +
        pill +
      "</div>" +
      (item.note ? '<p class="card-note">' + esc(item.note) + "</p>" : "") +
      "</a>";
  }

  function renderSubject(id) {
    var subj = subjectById(id);
    if (!subj) { location.hash = "#/"; return; }
    var items = activeFor(id);
    var body = items.length
      ? '<div class="stack">' + items.map(itemCard).join("") + "</div>"
      : '<div class="empty"><strong>Nothing coming up</strong>' +
        "When something gets added to " + esc(subj.name) + ", it shows up on this page.</div>";

    app.innerHTML =
      '<a class="backlink" href="#/">\u2190 All classes</a>' +
      '<p class="eyebrow">Class</p>' +
      '<h1 class="page-title">' + esc(subj.name) + "</h1>" +
      body;
  }

  function renderItem(id) {
    var item = itemById(id);
    if (!item || isPast(item)) { location.hash = "#/"; return; }
    var subj = subjectById(item.subject);

    var drills = drillsFor(item).map(function (d) {
      return '<a class="card" href="#/i/' + item.id + "/" + d.id + '">' +
        '<h2 class="card-title">' + esc(d.name) + "</h2>" +
        '<p class="card-note">' + esc(d.blurb) + "</p></a>";
    }).join("");

    app.innerHTML =
      '<a class="backlink" href="#/s/' + item.subject + '">\u2190 ' + esc(subj ? subj.name : "Back") + "</a>" +
      '<p class="eyebrow">' + (item.quiz ? "Quiz " + fmtDate(item.quiz) : "Study set") + "</p>" +
      '<h1 class="page-title">' + esc(item.title) + "</h1>" +
      (item.note ? '<p class="lede">' + esc(item.note) + "</p>" : "") +
      '<div class="stack">' + drills +
        '<a class="card" href="#/i/' + item.id + '/sheet">' +
          '<h2 class="card-title">Team sheet</h2>' +
          '<p class="card-note">Just the list. Read it over before you drill.</p></a>' +
      "</div>";
  }

  function renderSheet(id) {
    var item = itemById(id);
    if (!item) { location.hash = "#/"; return; }
    var body = "";

    if (item.type === "questions") {
      var byKind = { tf: "True or false", mc: "Multiple choice", multi: "Mark all that apply" };
      ["tf", "mc", "multi"].forEach(function (k) {
        var qs = item.questions.filter(function (q) { return q.kind === k; });
        if (!qs.length) return;
        body += '<div class="sheet"><h3>' + esc(byKind[k]) + " \u00b7 " + qs.length + "</h3>" +
          qs.map(function (q) {
            var ans = q.kind === "tf" ? (q.answer ? "True" : "False")
                    : q.kind === "multi" ? q.answers.join(", ")
                    : q.answer;
            return '<dl class="def"><dt style="font-size:.95rem">' + esc(q.prompt) + "</dt>" +
              "<dd><strong>" + esc(ans) + "</strong></dd>" +
              (q.why ? '<dd class="ex">' + esc(q.why) + "</dd>" : "") + "</dl>";
          }).join("") + "</div>";
      });
    } else if (item.type === "verse") {
      body = '<div class="sheet"><dl class="def"><dt>' + esc(verseRef(item)) + "</dt>" +
        "<dd>" + esc(item.text) + "</dd></dl></div>";
    } else if (item.type === "vocab") {
      body = '<div class="sheet">' + item.words.map(function (w) {
        return '<dl class="def"><dt>' + esc(w.word) + "</dt>" +
          "<dd>" + esc(w.meaning) + "</dd>" +
          (w.sentence ? '<dd class="ex">' + esc(w.sentence.replace("___", w.word)) + "</dd>" : "") +
          "</dl>";
      }).join("") + "</div>";
    } else {
      var n = 0;
      body = item.groups.map(function (g) {
        var lis = g.books.map(function (b) { n++; return "<li>" + esc(b) + "</li>"; }).join("");
        return '<div class="sheet"><h3>' + esc(g.name) + " \u00b7 " + g.books.length + " books</h3>" +
          '<ol start="' + (n - g.books.length + 1) + '">' + lis + "</ol></div>";
      }).join("");
    }

    app.innerHTML =
      '<a class="backlink" href="#/i/' + item.id + '">\u2190 ' + esc(item.title) + "</a>" +
      '<p class="eyebrow">Team sheet</p>' +
      '<h1 class="page-title">Read it over</h1>' + body +
      '<div class="btn-row"><a class="btn" href="#/i/' + item.id + '">Go drill it</a></div>';
  }

  /* ---------- the game ---------------------------------------------------- */

  var game = null;

  function startGame(itemId, drillId) {
    var item = itemById(itemId);
    if (!item) { location.hash = "#/"; return; }

    if (drillId === "flash") { renderFlash(item); return; }
    if (drillId === "dragorder") { renderDragOrder(item); return; }
    if (drillId === "chant") { renderChant(item); return; }
    if (drillId === "recall") { renderRecall(item, null); return; }
    if (drillId === "bank") { renderBankOrder(item); return; }
    if (drillId === "read") { renderVerseRead(item); return; }
    if (drillId === "fade") { renderVerseFade(item); return; }
    if (drillId === "order") { renderVerseOrder(item); return; }
    if (drillId === "extras") { renderSelfCheck(item, item.extras, "extras"); return; }
    if (item.type === "questions") { renderQuestionSet(item, drillId); return; }

    var drill = drillById(item, drillId);
    if (!drill) { location.hash = "#/i/" + itemId; return; }

    game = {
      item: item,
      drill: drill,
      questions: buildQuestions(item, drillId),
      idx: 0,
      goals: 0,
      misses: 0,
      results: [],
      missedRecall: []
    };
    renderQuestion();
  }

  function scoreboardHTML() {
    var dots = game.questions.map(function (q, i) {
      var cls = "dot";
      if (i < game.idx) cls += game.results[i] ? " dot--hit" : " dot--miss";
      else if (i === game.idx) cls += " dot--now";
      return '<span class="' + cls + '"></span>';
    }).join("");

    return '<div class="scoreboard">' +
      '<div class="score-side"><span class="score-label">Goals</span>' +
        '<span class="score-num">' + game.goals + "</span></div>" +
      '<div class="score-dots">' + dots + "</div>" +
      '<div class="score-side"><span class="score-label">Cards</span>' +
        '<span class="score-num score-num--miss">' + game.misses + "</span></div>" +
      "</div>";
  }

  function renderQuestion() {
    if (game.idx >= game.questions.length) { renderResult(); return; }
    var q = game.questions[game.idx];
    if (q.kind === "order") { renderOrder(q); return; }

    var text = q.style === "sentence"
      ? esc(q.text).replace("___", '<span class="blank"></span>')
      : esc(q.text);

    app.innerHTML =
      '<a class="backlink" href="#/i/' + game.item.id + '">\u2190 Leave the drill</a>' +
      scoreboardHTML() +
      '<div class="q"><p class="q-kicker">' + esc(q.kicker) + "</p>" +
        '<p class="q-text' + (q.style === "sentence" ? " q-text--sentence" : "") + '">' + text + "</p></div>" +
      '<div class="answers' + (q.longOptions ? " answers--long" : "") + '" id="answers">' +
        q.options.map(function (o, i) {
          return '<button class="answer" data-i="' + i + '">' + esc(o) + "</button>";
        }).join("") +
      "</div>" +
      '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>';

    document.getElementById("answers").addEventListener("click", function (e) {
      var btn = e.target.closest(".answer");
      if (btn) answer(btn, q);
    });
  }

  function answer(btn, q) {
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".answer"));
    buttons.forEach(function (b) { b.disabled = true; });

    var picked = btn.textContent;
    var right = picked === q.answer;
    game.results.push(right);
    if (right) { game.goals++; btn.classList.add("answer--right"); }
    else {
      game.misses++;
      btn.classList.add("answer--wrong");
      game.missedRecall.push(q.recall);
      buttons.forEach(function (b) {
        if (b.textContent === q.answer) b.classList.add("answer--right");
        else if (b !== btn) b.classList.add("answer--dim");
      });
    }

    var v = document.getElementById("verdict");
    v.className = "verdict " + (right ? "verdict--goal" : "verdict--card");
    v.innerHTML = right
      ? "Goal!"
      : "Yellow card<small>The answer was <strong>" + esc(q.answer) + "</strong></small>";

    game.idx++;
    var last = game.idx >= game.questions.length;
    var row = document.createElement("div");
    row.className = "btn-row";
    row.innerHTML = '<button class="btn" id="nextq">' + (last ? "See the result" : "Next \u2192") + "</button>";
    v.after(row);
    var nextBtn = document.getElementById("nextq");
    nextBtn.addEventListener("click", renderQuestion);
    nextBtn.focus();
  }

  /* ---------- line-up drill (put things in order) ------------------------- */

  function renderOrder(q) {
    var state = { placed: [], pool: shuffle(q.answer) };

    function paint() {
      var slots = q.answer.map(function (_, i) {
        var filled = state.placed[i];
        return '<span class="slot' + (filled ? " slot--filled" : "") + '">' +
          (filled ? esc(filled) : (i + 1)) + "</span>";
      }).join("");

      var chips = state.pool.map(function (b) {
        var done = state.placed.indexOf(b) > -1;
        return '<button class="chip' + (done ? " chip--placed" : "") + '"' +
          (done ? " disabled" : "") + ' data-b="' + esc(b) + '">' + esc(b) + "</button>";
      }).join("");

      app.innerHTML =
        '<a class="backlink" href="#/i/' + game.item.id + '">\u2190 Leave the drill</a>' +
        scoreboardHTML() +
        '<div class="q"><p class="q-kicker">Tap them in the right order</p>' +
          '<p class="q-text">' + esc(q.kicker) + "</p></div>" +
        '<div class="slots">' + slots + "</div>" +
        '<div class="lineup" id="pool">' + chips + "</div>" +
        '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>';

      document.getElementById("pool").addEventListener("click", function (e) {
        var chip = e.target.closest(".chip");
        if (chip && !chip.disabled) tap(chip.dataset.b, chip);
      });
    }

    function tap(book, chip) {
      var wanted = q.answer[state.placed.length];
      if (book === wanted) {
        state.placed.push(book);
        if (state.placed.length === q.answer.length) return finish(true);
        paint();
      } else {
        game.misses++;
        chip.classList.add("chip--shake");
        var v = document.getElementById("verdict");
        v.className = "verdict verdict--card";
        v.textContent = "Yellow card \u2014 try again";
        setTimeout(function () { chip.classList.remove("chip--shake"); }, 320);
      }
    }

    function finish(ok) {
      game.results.push(ok);
      if (ok) game.goals++;
      game.idx++;
      paint();
      var v = document.getElementById("verdict");
      v.className = "verdict verdict--goal";
      v.innerHTML = "Group complete!";
      var last = game.idx >= game.questions.length;
      var row = document.createElement("div");
      row.className = "btn-row";
      row.innerHTML = '<button class="btn" id="nextq">' + (last ? "See the result" : "Next group \u2192") + "</button>";
      v.after(row);
      var nextBtn = document.getElementById("nextq");
      nextBtn.addEventListener("click", renderQuestion);
      nextBtn.focus();
    }

    paint();
  }

  /* ---------- word bank into numbered lines (mirrors the paper test) ------- */

  function renderBankOrder(item) {
    var answer = flatBooks(item);
    var bank = shuffle(answer.map(function (b, i) { return { b: b, i: i }; }));
    var placed = [];   /* indexes into bank, in tap order */

    function paint(msg) {
      var slots = answer.map(function (_, n) {
        var got = placed[n] !== undefined ? bank[placed[n]].b : null;
        return '<li class="bankslot' + (got ? " bankslot--filled" : "") +
          (n === placed.length ? " bankslot--now" : "") + '">' +
          '<span class="bankslot-n">' + (n + 1) + "</span>" +
          '<span class="bankslot-b">' + (got ? esc(got) : "") + "</span></li>";
      }).join("");

      var chips = bank.map(function (x, n) {
        var used = placed.indexOf(n) > -1;
        return '<button class="chip' + (used ? " chip--placed" : "") + '"' +
          (used ? " disabled" : "") + ' data-n="' + n + '">' + esc(x.b) + "</button>";
      }).join("");

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<p class="eyebrow">Line ' + Math.min(placed.length + 1, answer.length) +
          " of " + answer.length + "</p>" +
        '<ol class="banklist">' + slots + "</ol>" +
        '<p class="chant-hint">Tap the book that goes on line ' +
          Math.min(placed.length + 1, answer.length) + ".</p>" +
        '<div class="lineup" id="bank">' + chips + "</div>" +
        '<div class="verdict" id="verdict" role="status" aria-live="polite">' + (msg || "") + "</div>" +
        '<div class="btn-row">' +
          (placed.length ? '<button class="btn btn--quiet" id="undo">Undo last</button>' : "") +
          '<button class="btn btn--quiet" id="restart">Start over</button>' +
        "</div>";

      document.getElementById("bank").addEventListener("click", function (e) {
        var chip = e.target.closest(".chip");
        if (chip && !chip.disabled) tap(+chip.dataset.n);
      });
      if (document.getElementById("undo"))
        document.getElementById("undo").addEventListener("click", function () {
          placed.pop(); paint("");
        });
      document.getElementById("restart").addEventListener("click", function () {
        renderBankOrder(item);
      });
    }

    function tap(n) {
      if (bank[n].b === answer[placed.length]) {
        placed.push(n);
        if (placed.length === answer.length) return win();
        paint("");
      } else {
        paint('<span class="verdict--card">Yellow card \u2014 that one comes later</span>');
      }
    }

    function win() {
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">Clean sheet</p>' +
          '<p class="result-score">' + answer.length + "/" + answer.length + "</p>" +
          '<p class="result-of">Word bank \u2014 like the test</p>' +
          '<p class="lede" style="margin:1rem auto 0">Every book on the right line. ' +
          "That is the test, start to finish.</p>" +
          '<div class="btn-row">' +
            '<button class="btn" id="again">Scramble and go again</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Other drills</a>' +
          "</div>" +
        "</div>";
      document.getElementById("again").addEventListener("click", function () {
        renderBankOrder(item);
      });
    }

    paint("");
  }

  /* ---------- mixed question sets (true/false, choice, mark-all) ----------- */

  function renderQuestionSet(item, drillId) {
    var pool = item.questions.filter(function (q) {
      if (drillId === "tfonly") return q.kind === "tf";
      if (drillId === "mconly") return q.kind === "mc";
      if (drillId === "multionly") return q.kind === "multi";
      return true;
    });

    /* Keep true/false and mark-all in book order so the wording stays varied;
       shuffle the multiple choice so it is not the same run every time. */
    var deck = drillId === "mconly" ? shuffle(pool).slice(0, 12)
             : drillId === "mixed"  ? pool
             : pool;

    var g = { deck: deck, idx: 0, goals: 0, misses: 0, results: [], missed: [] };

    function board() {
      var dots = g.deck.map(function (_, i) {
        var cls = "dot";
        if (i < g.idx) cls += g.results[i] ? " dot--hit" : " dot--miss";
        else if (i === g.idx) cls += " dot--now";
        return '<span class="' + cls + '"></span>';
      }).join("");
      return '<div class="scoreboard">' +
        '<div class="score-side"><span class="score-label">Right</span>' +
          '<span class="score-num">' + g.goals + "</span></div>" +
        '<div class="score-dots">' + dots + "</div>" +
        '<div class="score-side"><span class="score-label">Cards</span>' +
          '<span class="score-num score-num--miss">' + g.misses + "</span></div>" +
        "</div>";
    }

    function paint() {
      if (g.idx >= g.deck.length) return finish();
      var q = g.deck[g.idx];
      var kicker = q.kind === "tf" ? "True or false?"
                 : q.kind === "multi" ? "Mark EVERY right answer"
                 : "Pick the right answer";

      var body;
      if (q.kind === "tf") {
        body = '<div class="answers" id="answers">' +
          '<button class="answer" data-v="true">True</button>' +
          '<button class="answer" data-v="false">False</button></div>';
      } else if (q.kind === "mc") {
        body = '<div class="answers answers--long" id="answers">' +
          shuffle(q.options).map(function (o) {
            return '<button class="answer" data-v="' + esc(o) + '">' + esc(o) + "</button>";
          }).join("") + "</div>";
      } else {
        body = '<div class="answers answers--long" id="answers">' +
          shuffle(q.options).map(function (o) {
            return '<button class="answer answer--check" data-v="' + esc(o) + '">' +
              '<span class="tickbox"></span>' + esc(o) + "</button>";
          }).join("") + "</div>" +
          '<div class="btn-row"><button class="btn" id="submit">Lock in my answers</button></div>';
      }

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        board() +
        '<div class="q"><p class="q-kicker">' + kicker + "</p>" +
          '<p class="q-text q-text--sentence" style="text-align:center">' + esc(q.prompt) + "</p></div>" +
        body +
        '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>';

      if (q.kind === "multi") wireMulti(q); else wireSingle(q);
    }

    function wireSingle(q) {
      document.getElementById("answers").addEventListener("click", function (e) {
        var btn = e.target.closest(".answer");
        if (!btn || btn.disabled) return;
        var buttons = Array.prototype.slice.call(document.querySelectorAll(".answer"));
        buttons.forEach(function (b) { b.disabled = true; });

        var right = q.kind === "tf"
          ? (btn.dataset.v === "true") === (q.answer === true)
          : btn.dataset.v === q.answer;
        var correctVal = q.kind === "tf" ? String(q.answer) : q.answer;

        buttons.forEach(function (b) {
          if (b.dataset.v === correctVal) b.classList.add("answer--right");
          else if (b === btn) b.classList.add("answer--wrong");
          else b.classList.add("answer--dim");
        });
        score(right, q);
      });
    }

    function wireMulti(q) {
      var picked = {};
      document.getElementById("answers").addEventListener("click", function (e) {
        var btn = e.target.closest(".answer");
        if (!btn || btn.disabled) return;
        var v = btn.dataset.v;
        picked[v] = !picked[v];
        btn.classList.toggle("answer--picked", !!picked[v]);
      });

      document.getElementById("submit").addEventListener("click", function () {
        var buttons = Array.prototype.slice.call(document.querySelectorAll(".answer"));
        buttons.forEach(function (b) { b.disabled = true; });
        document.getElementById("submit").remove();

        var missedRight = 0, wrongPicked = 0;
        buttons.forEach(function (b) {
          var v = b.dataset.v;
          var shouldPick = q.answers.indexOf(v) > -1;
          if (shouldPick) {
            b.classList.add("answer--right");
            if (!picked[v]) { b.classList.add("answer--wasmissed"); missedRight++; }
          } else if (picked[v]) {
            b.classList.add("answer--wrong");
            wrongPicked++;
          } else {
            b.classList.add("answer--dim");
          }
        });

        var right = missedRight === 0 && wrongPicked === 0;
        var note = right ? ""
          : missedRight && !wrongPicked
            ? "You had the right ones but missed " + missedRight + ". This is the section you lost points on last time \u2014 keep going until you have them all."
            : wrongPicked && !missedRight
              ? "You picked " + wrongPicked + " that do not belong."
              : "You missed " + missedRight + " and picked " + wrongPicked + " that do not belong.";
        score(right, q, note);
      });
    }

    function score(right, q, note) {
      g.results.push(right);
      if (right) g.goals++; else { g.misses++; g.missed.push(q); }

      var v = document.getElementById("verdict");
      v.className = "verdict " + (right ? "verdict--goal" : "verdict--card");
      v.innerHTML = (right ? "Goal!" : "Yellow card") +
        "<small>" + (note ? esc(note) + " " : "") + esc(q.why || "") + "</small>";

      g.idx++;
      var last = g.idx >= g.deck.length;
      var row = document.createElement("div");
      row.className = "btn-row";
      row.innerHTML = '<button class="btn" id="nextq">' +
        (last ? "See the result" : "Next \u2192") + "</button>";
      v.after(row);
      var nb = document.getElementById("nextq");
      nb.addEventListener("click", paint);
      nb.focus();
    }

    function finish() {
      var total = g.deck.length;
      var pct = total ? g.goals / total : 0;
      var rating = g.misses === 0 ? "Clean sheet"
                 : pct >= 0.8 ? "Player of the match"
                 : pct >= 0.6 ? "Solid 90 minutes"
                 : "Back to training";

      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">' + rating + "</p>" +
          '<p class="result-score">' + g.goals + "/" + total + "</p>" +
          '<p class="result-of">' + esc((drillById(item, drillId) || {}).name || "") + "</p>" +
          (g.missed.length
            ? '<div class="result-missed"><h3>Go back over these</h3><ul>' +
              g.missed.map(function (q) { return "<li>" + esc(q.prompt) + "</li>"; }).join("") +
              "</ul></div>"
            : '<p class="lede" style="margin:1rem auto 0">Every one. Run it again tomorrow.</p>') +
          '<div class="btn-row">' +
            '<button class="btn" id="again">Play again</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Other drills</a>' +
          "</div>" +
        "</div>";
      document.getElementById("again").addEventListener("click", function () {
        renderQuestionSet(item, drillId);
      });
    }

    paint();
  }

  /* ---------- verses ------------------------------------------------------- */

  function verseWords(item) {
    return item.text.split(/\s+/).filter(Boolean);
  }

  function verseRef(item) {
    return item.reference + (item.version ? " \u00b7 " + item.version : "");
  }

  /* Turn "Already" into "A······", keeping trailing punctuation visible. */
  function wordSkeleton(word) {
    var m = word.match(/^([^A-Za-z0-9]*)([A-Za-z0-9'\u2019-]*)(.*)$/);
    var pre = m[1], core = m[2], post = m[3];
    if (!core) return esc(word);
    return esc(pre + core.charAt(0)) +
      '<span class="masked">' + new Array(core.length).join("\u00b7") + "</span>" +
      esc(post);
  }

  function renderVerseRead(item) {
    var reps = 0;

    function paint() {
      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<p class="eyebrow">' + esc(verseRef(item)) + "</p>" +
        '<div class="verse">' + esc(item.text) + "</div>" +
        '<p class="chant-hint">Say the whole verse out loud, then tap. ' +
        "Five times and it starts to stick.</p>" +
        '<div class="btn-row">' +
          '<button class="btn" id="rep">Said it (' + reps + " of 5)</button>" +
          (reps >= 5 ? '<a class="btn btn--quiet" href="#/i/' + item.id + '/fade">Now fade it out \u2192</a>' : "") +
        "</div>";

      document.getElementById("rep").addEventListener("click", function () {
        if (reps < 5) reps++;
        paint();
      });
    }
    paint();
  }

  function renderVerseFade(item) {
    var words = verseWords(item);
    var full = esc(item.text);
    var letters = words.map(wordSkeleton).join(" ");
    var blanks = words.map(function (w) {
      return '<span class="masked">' + new Array(Math.max(w.length, 2)).join("\u00b7") + "</span>";
    }).join(" ");

    var cards = [
      { prompt: full,    answer: item.text, label: "Every word in front of you" },
      { prompt: letters, answer: item.text, label: "First letters only" },
      { prompt: blanks,  answer: item.text, label: "Nothing but blanks" }
    ];
    renderSelfCheck(item, cards, "fade");
  }

  function renderVerseOrder(item) {
    var words = verseWords(item);
    var bank = shuffle(words.map(function (w, i) { return { w: w, i: i }; }));
    var placed = [];   /* indexes into bank, in tap order */

    function paint(msg) {
      var built = placed.map(function (b) { return esc(bank[b].w); }).join(" ");

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<p class="eyebrow">' + esc(verseRef(item)) + "</p>" +
        '<div class="verse verse--build">' +
          (built || '<span class="verse-empty">Tap the first word</span>') +
        "</div>" +
        '<div class="lineup" id="bank">' +
          bank.map(function (b, n) {
            var used = placed.indexOf(n) > -1;
            return '<button class="chip' + (used ? " chip--placed" : "") + '"' +
              (used ? " disabled" : "") + ' data-n="' + n + '">' + esc(b.w) + "</button>";
          }).join("") +
        "</div>" +
        '<div class="verdict" id="verdict" role="status" aria-live="polite">' + (msg || "") + "</div>" +
        '<div class="btn-row">' +
          (placed.length ? '<button class="btn btn--quiet" id="undo">Undo last word</button>' : "") +
          '<button class="btn btn--quiet" id="restart">Start over</button>' +
        "</div>";

      document.getElementById("bank").addEventListener("click", function (e) {
        var chip = e.target.closest(".chip");
        if (chip && !chip.disabled) tap(+chip.dataset.n);
      });
      if (document.getElementById("undo"))
        document.getElementById("undo").addEventListener("click", function () {
          placed.pop(); paint();
        });
      document.getElementById("restart").addEventListener("click", function () {
        renderVerseOrder(item);
      });
    }

    function tap(n) {
      /* Compare the word itself, so repeated words ("you") both work. */
      if (bank[n].w === words[placed.length]) {
        placed.push(n);
        if (placed.length === words.length) return win();
        paint();
      } else {
        paint('<span class="verdict--card">Yellow card \u2014 not that one yet</span>');
      }
    }

    function win() {
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">Clean sheet</p>' +
          '<div class="verse chant--open" style="margin:1rem 0">' + esc(item.text) + "</div>" +
          '<p class="result-of">' + esc(verseRef(item)) + "</p>" +
          '<p class="lede" style="margin:1rem auto 0">Word for word. Now say it once with your eyes shut.</p>' +
          '<div class="btn-row">' +
            '<button class="btn" id="again">Scramble it again</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '/fade">Fade it out</a>' +
          "</div>" +
        "</div>";
      document.getElementById("again").addEventListener("click", function () {
        renderVerseOrder(item);
      });
    }

    paint("");
  }

  /* ---------- generic say-it-then-check cards ------------------------------ */

  function renderSelfCheck(item, cards, drillId, subset) {
    var deck = subset && subset.length ? subset : cards;
    var i = 0, shown = false;
    var missed = [];

    function paint() {
      var c = deck[i];
      var front = c.prompt;
      var isVerse = drillId === "fade";

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<p class="eyebrow">' + esc(c.label || ("Question " + (i + 1) + " of " + deck.length)) + "</p>" +
        (isVerse ? "" : '<div class="prompt-card">' + esc(c.prompt) + "</div>") +
        (shown
          ? '<div class="verse chant--open">' + esc(c.answer) + "</div>"
          : isVerse ? '<div class="verse">' + front + "</div>" : "") +
        '<p class="chant-hint">' +
          (shown ? "Did you get it? Be honest \u2014 nobody's keeping score."
                 : isVerse ? "Say the whole verse out loud, then check."
                           : "Answer it out loud in a full sentence, then check.") +
        "</p>" +
        '<div class="btn-row">' +
          (shown
            ? '<button class="btn" id="got">I got it</button>' +
              '<button class="btn btn--quiet" id="miss">I missed it</button>'
            : '<button class="btn" id="show">Show me</button>') +
        "</div>" +
        '<p class="card-counter">' + (i + 1) + " of " + deck.length + "</p>";

      if (document.getElementById("show"))
        document.getElementById("show").addEventListener("click", function () { shown = true; paint(); });
      if (document.getElementById("got"))
        document.getElementById("got").addEventListener("click", function () { mark(true); });
      if (document.getElementById("miss"))
        document.getElementById("miss").addEventListener("click", function () { mark(false); });
    }

    function mark(ok) {
      if (!ok) missed.push(deck[i]);
      i++; shown = false;
      if (i >= deck.length) done(); else paint();
    }

    function done() {
      var got = deck.length - missed.length;
      var clean = missed.length === 0;
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">' + (clean ? "Clean sheet" : "Keep going") + "</p>" +
          '<p class="result-score">' + got + "/" + deck.length + "</p>" +
          '<p class="result-of">Answered from memory</p>' +
          '<p class="lede" style="margin:1rem auto 0">' +
            (clean ? "All of them, no peeking. Run it again tomorrow."
                   : "Run the ones you missed \u2014 that's where the work is.") +
          "</p>" +
          '<div class="btn-row">' +
            (missed.length ? '<button class="btn" id="redo">Run those ' + missed.length + ' again</button>' : "") +
            '<button class="btn' + (missed.length ? " btn--quiet" : "") + '" id="allagain">Start over</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Other drills</a>' +
          "</div>" +
        "</div>";

      if (document.getElementById("redo")) {
        var again = missed.slice();
        document.getElementById("redo").addEventListener("click", function () {
          renderSelfCheck(item, cards, drillId, again);
        });
      }
      document.getElementById("allagain").addEventListener("click", function () {
        renderSelfCheck(item, cards, drillId, null);
      });
    }

    paint();
  }

  /* ---------- say it in lines (the chant) ---------------------------------- */

  function linesFor(item) {
    if (item.lines && item.lines.length) return item.lines;
    return chunksOf(item).map(function (c) { return c.answer; });
  }

  function renderChant(item) {
    var lines = linesFor(item);
    var i = 0;

    function paint() {
      var L = lines[i];
      var prev = lines.slice(0, i).map(function (p) {
        return '<li>' + esc(p.join(" \u00b7 ")) + "</li>";
      }).join("");

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<p class="eyebrow">Line ' + (i + 1) + " of " + lines.length + "</p>" +
        '<div class="chant">' +
          L.map(function (b) { return '<span class="beat">' + esc(b) + "</span>"; }).join("") +
        "</div>" +
        '<p class="chant-hint">Say it out loud three times. Get a rhythm going, ' +
        "then move to the next line.</p>" +
        '<div class="btn-row">' +
          (i > 0 ? '<button class="btn btn--quiet" id="cprev">\u2190 Back</button>' : "") +
          (i < lines.length - 1
            ? '<button class="btn" id="cnext">Next line \u2192</button>'
            : '<a class="btn" href="#/i/' + item.id + '/recall">Now test yourself \u2192</a>') +
        "</div>" +
        (prev ? '<div class="chant-prev"><h3>Lines you\'ve done</h3><ol>' + prev + "</ol></div>" : "");

      if (document.getElementById("cprev"))
        document.getElementById("cprev").addEventListener("click", function () { i--; paint(); });
      if (document.getElementById("cnext"))
        document.getElementById("cnext").addEventListener("click", function () { i++; paint(); });
    }
    paint();
  }

  /* ---------- cover and recall -------------------------------------------- */

  function firstLetters(name) {
    var m = name.match(/^(\d+\s+)?(.*)$/);
    var lead = m[1] || "";
    var word = m[2];
    return esc(lead + word.charAt(0)) +
      '<span class="masked">' + new Array(word.length).join("\u00b7") + "</span>";
  }

  function renderRecall(item, subset) {
    var lines = subset && subset.length ? subset : linesFor(item);
    var i = 0, shown = false, hints = true;
    var missed = [];

    function paint() {
      var L = lines[i];
      var face = shown
        ? L.map(function (b) { return '<span class="beat">' + esc(b) + "</span>"; }).join("")
        : hints
          ? L.map(function (b) { return '<span class="beat beat--hint">' + firstLetters(b) + "</span>"; }).join("")
          : '<span class="beat beat--blind">' + L.length + " books</span>";

      var controls = shown
        ? '<button class="btn" id="got">I said them all right</button>' +
          '<button class="btn btn--quiet" id="miss">I missed some</button>'
        : '<button class="btn" id="show">Show me</button>';

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<p class="eyebrow">Card ' + (i + 1) + " of " + lines.length + "</p>" +
        '<div class="chant' + (shown ? " chant--open" : "") + '">' + face + "</div>" +
        '<p class="chant-hint">' +
          (shown ? "Did you get every one, in order?" : "Say this whole line out loud from memory, then check.") +
        "</p>" +
        '<div class="btn-row">' + controls + "</div>" +
        (shown ? "" : '<div class="btn-row"><button class="hint-toggle" id="ht">' +
          (hints ? "Hide the letters" : "Show the letters") + "</button></div>");

      if (document.getElementById("show"))
        document.getElementById("show").addEventListener("click", function () { shown = true; paint(); });
      if (document.getElementById("ht"))
        document.getElementById("ht").addEventListener("click", function () { hints = !hints; paint(); });
      if (document.getElementById("got"))
        document.getElementById("got").addEventListener("click", function () { mark(true); });
      if (document.getElementById("miss"))
        document.getElementById("miss").addEventListener("click", function () { mark(false); });
    }

    function mark(ok) {
      if (!ok) missed.push(lines[i]);
      i++; shown = false;
      if (i >= lines.length) done(); else paint();
    }

    function done() {
      var got = lines.length - missed.length;
      var clean = missed.length === 0;
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">' + (clean ? "Clean sheet" : "Keep going") + "</p>" +
          '<p class="result-score">' + got + "/" + lines.length + "</p>" +
          '<p class="result-of">Lines said from memory</p>' +
          '<p class="lede" style="margin:1rem auto 0">' +
            (clean
              ? "You said every line without looking. Run it once more tomorrow and it'll stick."
              : "Run just the lines you missed \u2014 that's where the work is.") +
          "</p>" +
          (missed.length
            ? '<div class="result-missed"><h3>Lines to run again</h3><ul>' +
              missed.map(function (L) { return "<li>" + esc(L.join(" \u00b7 ")) + "</li>"; }).join("") +
              "</ul></div>"
            : "") +
          '<div class="btn-row">' +
            (missed.length ? '<button class="btn" id="redo">Run those ' + missed.length + ' again</button>' : "") +
            '<button class="btn' + (missed.length ? " btn--quiet" : "") + '" id="allagain">All ' +
              linesFor(item).length + " lines again</button>" +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '/chant">Back to the lines</a>' +
          "</div>" +
        "</div>";

      if (document.getElementById("redo")) {
        var again = missed.slice();
        document.getElementById("redo").addEventListener("click", function () {
          renderRecall(item, again);
        });
      }
      document.getElementById("allagain").addEventListener("click", function () {
        renderRecall(item, null);
      });
    }

    paint();
  }

  /* ---------- drag the whole list into order ------------------------------ */

  var GRIP = '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">' +
    '<path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" fill="none"/></svg>';

  function renderDragOrder(item) {
    var answer = flatBooks(item);
    var start = shuffle(answer);
    var list, bar, drag = null, ph = null, offY = 0, lastY = 0, scroller = null;

    app.innerHTML =
      '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
      '<p class="eyebrow">Drag all ' + answer.length + ' in order</p>' +
      '<h1 class="page-title">Set the whole squad</h1>' +
      '<p class="lede">Drag by the grip on the left, or tap a grip and use the up and down ' +
      'arrow keys. Check it as often as you like.</p>' +
      '<ol class="droplist" id="droplist">' +
        start.map(function (b, i) {
          return '<li class="dragrow" data-b="' + esc(b) + '">' +
            '<button class="drag-handle" aria-label="Move ' + esc(b) + '">' + GRIP + '</button>' +
            '<span class="drag-num">' + (i + 1) + '</span>' +
            '<span class="drag-name">' + esc(b) + '</span></li>';
        }).join("") +
      "</ol>" +
      '<div class="checkbar" id="checkbar">' +
        '<span class="check-score" id="checkscore">' + answer.length + ' to place</span>' +
        '<button class="btn" id="checkbtn">Check my order</button>' +
        '<button class="btn btn--quiet" id="reshuffle">Shuffle</button>' +
      "</div>";

    list = document.getElementById("droplist");
    bar = document.getElementById("checkscore");

    function liveRows() {
      return Array.prototype.slice.call(list.querySelectorAll(".dragrow:not(.placeholder)"));
    }

    function renumber() {
      liveRows().forEach(function (r, i) {
        r.querySelector(".drag-num").textContent = i + 1;
      });
    }

    function clearMarks() {
      liveRows().forEach(function (r) { r.classList.remove("row--ok", "row--no"); });
    }

    /* --- pointer dragging --- */

    list.addEventListener("pointerdown", function (e) {
      var handle = e.target.closest(".drag-handle");
      if (!handle || e.button > 0) return;
      var row = handle.closest(".dragrow");
      var box = row.getBoundingClientRect();

      drag = row;
      offY = e.clientY - box.top;
      lastY = e.clientY;
      clearMarks();

      ph = document.createElement("li");
      ph.className = "dragrow placeholder";
      ph.style.height = box.height + "px";
      row.after(ph);

      row.classList.add("row--drag");
      row.style.width = box.width + "px";
      row.style.left = box.left + "px";
      row.style.top = box.top + "px";
      handle.setPointerCapture(e.pointerId);
      e.preventDefault();

      scroller = setInterval(function () {
        var h = window.innerHeight, step = 0;
        if (lastY < 90) step = -14;
        else if (lastY > h - 90) step = 14;
        if (step) { window.scrollBy(0, step); reposition(); }
      }, 16);
    });

    function reposition() {
      if (!drag) return;
      drag.style.top = (lastY - offY) + "px";
      var others = liveRows().filter(function (r) { return r !== drag; });
      var before = null;
      for (var i = 0; i < others.length; i++) {
        var b = others[i].getBoundingClientRect();
        if (lastY < b.top + b.height / 2) { before = others[i]; break; }
      }
      if (before) list.insertBefore(ph, before);
      else list.appendChild(ph);
    }

    list.addEventListener("pointermove", function (e) {
      if (!drag) return;
      lastY = e.clientY;
      reposition();
      e.preventDefault();
    });

    function endDrag() {
      if (!drag) return;
      clearInterval(scroller);
      drag.classList.remove("row--drag");
      drag.style.cssText = "";
      list.insertBefore(drag, ph);
      ph.remove();
      drag = null; ph = null;
      renumber();
      bar.textContent = answer.length + " to place";
      bar.className = "check-score";
    }

    list.addEventListener("pointerup", endDrag);
    list.addEventListener("pointercancel", endDrag);

    /* --- keyboard moving --- */

    list.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      var handle = e.target.closest(".drag-handle");
      if (!handle) return;
      var row = handle.closest(".dragrow");
      clearMarks();
      if (e.key === "ArrowUp" && row.previousElementSibling) {
        list.insertBefore(row, row.previousElementSibling);
      } else if (e.key === "ArrowDown" && row.nextElementSibling) {
        list.insertBefore(row.nextElementSibling, row);
      }
      renumber();
      handle.focus();
      row.scrollIntoView({ block: "nearest" });
      e.preventDefault();
    });

    /* --- checking --- */

    document.getElementById("checkbtn").addEventListener("click", function () {
      var rows = liveRows(), right = 0, firstWrong = null;
      rows.forEach(function (r, i) {
        var ok = r.dataset.b === answer[i];
        r.classList.remove("row--ok", "row--no");
        r.classList.add(ok ? "row--ok" : "row--no");
        if (ok) right++;
        else if (!firstWrong) firstWrong = r;
      });

      if (right === answer.length) {
        bar.textContent = "Clean sheet \u2014 all " + answer.length + " in the right order!";
        bar.className = "check-score check-score--win";
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        bar.textContent = right + " of " + answer.length + " in the right spot";
        bar.className = "check-score check-score--part";
        if (firstWrong) firstWrong.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    });

    document.getElementById("reshuffle").addEventListener("click", function () {
      renderDragOrder(item);
      window.scrollTo(0, 0);
    });
  }

  /* ---------- flashcards --------------------------------------------------- */

  function renderFlash(item) {
    var cards = shuffle(item.words);
    var i = 0, flipped = false;

    function paint() {
      var w = cards[i];
      var face = flipped
        ? '<span class="flash-meaning">' + esc(w.meaning) + "</span>" +
          (w.sentence ? '<span class="flash-ex">' + esc(w.sentence.replace("___", w.word)) + "</span>" : "")
        : '<span class="flash-word">' + esc(w.word) + "</span>" +
          '<span class="flash-hint">Tap to flip</span>';

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<button class="flashcard" id="fc">' + face + "</button>" +
        '<div class="flash-nav">' +
          '<button class="btn btn--quiet" id="prev">\u2190 Back</button>' +
          '<span class="counter">' + (i + 1) + " / " + cards.length + "</span>" +
          '<button class="btn" id="next">Next \u2192</button>' +
        "</div>";

      document.getElementById("fc").addEventListener("click", function () { flipped = !flipped; paint(); });
      document.getElementById("prev").addEventListener("click", function () {
        i = (i - 1 + cards.length) % cards.length; flipped = false; paint();
      });
      document.getElementById("next").addEventListener("click", function () {
        i = (i + 1) % cards.length; flipped = false; paint();
      });
    }
    paint();
  }

  /* ---------- result ------------------------------------------------------- */

  function renderResult() {
    var total = game.questions.length;
    var pct = total ? game.goals / total : 0;
    var rating = game.misses === 0 ? "Clean sheet"
               : pct >= 0.8 ? "Player of the match"
               : pct >= 0.6 ? "Solid 90 minutes"
               : "Back to training";
    var line = game.misses === 0 ? "Not a single one got past you."
             : pct >= 0.8 ? "Strong performance. Run it once more to lock it in."
             : pct >= 0.6 ? "Getting there. Read the team sheet, then go again."
             : "Read the team sheet first, then come back and try again.";

    var missed = game.missedRecall.length
      ? '<div class="result-missed"><h3>Work on these in training</h3><ul>' +
        game.missedRecall.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("") +
        "</ul></div>"
      : "";

    app.innerHTML =
      '<div class="result">' +
        '<p class="result-rating">' + rating + "</p>" +
        '<p class="result-score">' + game.goals + "/" + total + "</p>" +
        '<p class="result-of">' + esc(game.drill.name) + "</p>" +
        '<p class="lede" style="margin:1rem auto 0">' + line + "</p>" +
        missed +
        '<div class="btn-row">' +
          '<button class="btn" id="again">Play again</button>' +
          '<a class="btn btn--quiet" href="#/i/' + game.item.id + '/sheet">Team sheet</a>' +
          '<a class="btn btn--quiet" href="#/i/' + game.item.id + '">Other drills</a>' +
        "</div>" +
      "</div>";

    var itemId = game.item.id, drillId = game.drill.id;
    document.getElementById("again").addEventListener("click", function () {
      startGame(itemId, drillId);
    });
  }

  /* ---------- go ----------------------------------------------------------- */

  window.addEventListener("hashchange", route);
  route();
})();

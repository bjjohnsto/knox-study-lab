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

  function daysUntil(iso) {
    if (!iso) return null;
    var p = iso.split("-");
    var target = new Date(+p[0], +p[1] - 1, +p[2]);
    var now = new Date();
    now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((target - now) / 86400000);
  }

  function itemsFor(subjectId) {
    return STUDY_ITEMS.filter(function (i) { return i.subject === subjectId; });
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
      { id: "next",   name: "What comes next?", blurb: "One book on screen. Pick the one that follows." },
      { id: "lineup", name: "Line them up",     blurb: "Put a small group in order, six at a time." }
    ],
    categorize: [
      { id: "group1",   name: "Which group? — Part 1",  blurb: "Law, History, and Poetry & Wisdom only." },
      { id: "groupall", name: "Which group? — All 39",  blurb: "Everything, prophets included." }
    ]
  };

  function drillsFor(item) {
    var list = DRILLS[item.type] || [];
    if (item.type === "vocab" && !hasSentences(item)) {
      list = list.filter(function (d) { return d.id !== "blank"; });
    }
    return list;
  }

  function hasSentences(item) {
    return item.words.some(function (w) { return !!w.sentence; });
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
      var n = itemsFor(s.id).length;
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
    var items = itemsFor(id);
    var body = items.length
      ? '<div class="stack">' + items.map(itemCard).join("") + "</div>"
      : '<div class="empty"><strong>Nothing here yet</strong>' +
        "When something gets added to " + esc(subj.name) + ", it shows up on this page.</div>";

    app.innerHTML =
      '<a class="backlink" href="#/">\u2190 All classes</a>' +
      '<p class="eyebrow">Class</p>' +
      '<h1 class="page-title">' + esc(subj.name) + "</h1>" +
      body;
  }

  function renderItem(id) {
    var item = itemById(id);
    if (!item) { location.hash = "#/"; return; }
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

    if (item.type === "vocab") {
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

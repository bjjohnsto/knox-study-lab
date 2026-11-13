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

  /* Most of what she gets graded on is a TEST. A few things really are only a
     quiz — a weekly memory verse, a pop vocab check. Items say which with
     assess: "quiz"; everything else is called a test. */
  function assessWord(item, caps) {
    var w = item && item.assess === "quiz" ? "Quiz" : "Test";
    return caps ? w.toUpperCase() : w;
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

  /* Ordered material lives in orderGroups on a bundle, groups on a plain
     sequence item. Sortable material lives in sortGroups or groups. */
  function orderGroupsOf(item) { return item.orderGroups || item.groups || []; }
  function sortGroupsOf(item)  { return item.sortGroups  || item.groups || []; }

  function flatBooks(item) {
    return orderGroupsOf(item).reduce(function (acc, g) { return acc.concat(g.books); }, []);
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
      { id: "keyonly",  name: "Her 25 \u2014 most likely on the test", blurb: "Exactly the 25 cards from her Quizlet. Start here." },
      { id: "tfonly",   name: "True or false",        blurb: "Eight statements. Some are traps \u2014 read them carefully." },
      { id: "mconly",   name: "Multiple choice",      blurb: "Pick the one right answer out of four." },
      { id: "multionly",name: "Mark ALL that apply",  blurb: "More than one answer is right every time. Get every one." },
      { id: "corronly", name: "True, or fix the word",  blurb: "If the statement is false, pick the word that belongs instead." },
      { id: "mixed",    name: "Full practice test",   blurb: "Every section together, like the real thing." },
      { id: "match",    name: "Match Day",            blurb: "Play a match. Right answers earn you a shot on goal \u2014 but the keeper gets a say." }
    ],
    maps: [
      { id: "maplabel", name: "Name it on the map", blurb: "The real map sheet. One blank at a time \u2014 tap the name that belongs in it." },
      { id: "maptype",  name: "Write it on the map", blurb: "Same map, no word bank. Type the name yourself \u2014 close spelling still counts." }
    ],
    roots: [
      { id: "rootword", name: "Root, meaning, word", blurb: "Two steps, the way the test asks it. Pick what the root means, then type a word that uses it." }
    ],
    decision: [
      { id: "decide", name: "GCF or LCM, then solve", blurb: "A word problem. Pick which one it needs, then work out the answer \u2014 with the label." }
    ],
    divisibility: [
      { id: "divis", name: "Divisibility rules", blurb: "A number and the divisors 2, 3, 4, 5, 6, 9, 10. Tap every one that divides it \u2014 or None." }
    ],
    math: [
      { id: "numpad", name: "Work it out", blurb: "Problems made fresh every round. Tap the digits \u2014 no multiple choice to guess from." }
    ],
    spelling: [
      { id: "spell", name: "Look, cover, build it", blurb: "Study the word, then build it back from scrambled letters with it hidden." }
    ],
    algebra: [
      { id: "solvex", name: "Solve for x", blurb: "10 mixed equations. Pick the first step, then find x. Fractions included, cheat sheet one tap away." }
    ],
    exact: [
      { id: "exact", name: "Word for word", blurb: "See the question, type the answer from memory. Every word gets checked. A hint opens up only after a miss." }
    ],
    verse: [
      { id: "read",  name: "Read it out loud",  blurb: "The whole verse. Say it five times before you move on." },
      { id: "fade",  name: "Fade it out",       blurb: "Full words, then first letters, then nothing. Say it each time." },
      { id: "order", name: "Put it in order",   blurb: "Words scrambled. Tap them back into the right order." }
    ]
  };

  var EXTRAS_DRILL = { id: "extras", name: "Study guide questions",
    blurb: "The written questions. Type your answer, then check it against hers." };

  /* Which question kinds does this item actually contain? */
  function hasKind(item, k) {
    return (item.questions || []).some(function (q) { return q.kind === k; });
  }

  /* Material the teacher singled out herself gets its own short round. */
  function hasKeyMaterial(item) {
    return (item.words || []).some(function (w) { return w.key; }) ||
           (item.questions || []).some(function (q) { return q.key; });
  }

  /* Build that round: her flagged vocabulary as definition-to-term, followed
     by the flagged true/false and fill-in questions. */
  function keyDeck(item) {
    var words = (item.words || []).filter(function (w) { return w.key; });
    var pool = words.map(function (w) { return w.word; });
    var deck = shuffle(words).map(function (w) {
      return { kind: "mc", prompt: w.meaning, options: pool.slice(),
               answer: w.word, longOptions: false,
               why: "From her Quizlet." };
    });
    return deck.concat((item.questions || []).filter(function (q) { return q.key; }));
  }

  /* A "bundle" holds every kind of material for one test under one title.
     Its drill list is built from whichever fields are present, in the order
     Knox should work through them. */
  function bundleDrills(item) {
    var list = [];
    var pick = function (group, id) {
      return (DRILLS[group] || []).filter(function (d) { return d.id === id; })[0];
    };


    if ((item.words || []).length) {
      list.push(pick("vocab", "flash"), pick("vocab", "meaning"), pick("vocab", "define"));
      if (hasSentences(item)) list.push(pick("vocab", "blank"));
    }
    if (hasKeyMaterial(item)) list.unshift(pick("questions", "keyonly"));
    if (hasKind(item, "correct")) list.push(pick("questions", "corronly"));
    if (hasKind(item, "tf")) list.push(pick("questions", "tfonly"));
    if (hasKind(item, "mc")) list.push(pick("questions", "mconly"));
    if (hasKind(item, "multi")) list.push(pick("questions", "multionly"));
    if ((item.questions || []).length > 1) list.push(pick("questions", "mixed"));
    if ((item.sortGroups || []).length) list.push(pick("categorize", "groupall"));
    if ((item.orderGroups || []).length) list.push(pick("sequence", "bank"));
    if ((item.spellWords || []).length) list.unshift(pick("spelling", "spell"));
    if ((item.mathTopics || []).length) list.unshift(pick("math", "numpad"));
    if ((item.roots || []).length) list.unshift(pick("roots", "rootword"));
    if ((item.exact || []).length) list.unshift(pick("exact", "exact"));
    if (item.algebra) list.unshift(pick("algebra", "solvex"));
    if ((item.maps || []).length) { list.unshift(pick("maps", "maptype")); list.unshift(pick("maps", "maplabel")); }
    if ((item.decideProblems || []).length) list.unshift(pick("decision", "decide"));
    if ((item.divisors || []).length) list.unshift(pick("divisibility", "divis"));
    if ((item.extras || []).length) list.push(EXTRAS_DRILL);

    return list.filter(Boolean);
  }

  /* Every drill the app knows about, for resolving an item's own list. */
  function allDrills() {
    var all = [];
    ["vocab", "questions", "categorize", "sequence", "verse", "spelling", "math", "maps", "exact", "algebra", "roots", "decision", "divisibility"].forEach(function (grp) {
      all = all.concat(DRILLS[grp] || []);
    });
    all.push(EXTRAS_DRILL);
    return all;
  }

  function drillsFor(item) {
    /* An item of ANY type can name the handful of drills it wants, in order.
       Without this it offers everything its fields support, which gets
       overwhelming fast. */
    if (item.drills && item.drills.length) {
      var all = allDrills();
      return renameForItem(item, item.drills.map(function (id) {
        return all.filter(function (d) { return d.id === id; })[0];
      }).filter(Boolean));
    }
    if (item.type === "bundle") return renameForItem(item, bundleDrills(item));
    var list = (DRILLS[item.type] || []).slice();
    if (item.type === "vocab" && !hasSentences(item)) {
      list = list.filter(function (d) { return d.id !== "blank"; });
    }
    if (item.extras && item.extras.length) list.push(EXTRAS_DRILL);
    return renameForItem(item, list);
  }

  /* Fill in {n} and swap the two Old-Testament-specific labels for something
     that reads correctly whatever the material is. */
  function renameForItem(item, list) {
    var count = (item.orderGroups || item.groups) ? flatBooks(item).length : 0;
    return list.map(function (d) {
      var name = d.name.replace("{n}", count);
      var blurb = d.blurb;
      if (d.id === "groupall" && item.type === "bundle") {
        name = "Sort them into groups";
        blurb = "Every example, into the right category.";
      }
      if (d.id === "bank" && item.type === "bundle") {
        name = "Put them in order";
        blurb = "A word bank and blank numbered lines, exactly how a test asks it.";
      }
      return { id: d.id, name: name, blurb: blurb };
    });
  }

  function hasSentences(item) {
    return (item.words || []).some(function (w) { return !!w.sentence; });
  }

  function drillById(item, drillId) {
    return drillsFor(item).filter(function (d) { return d.id === drillId; })[0];
  }

  /* ---------- question builders ------------------------------------------ */

  var ROUND_LENGTH = 10;

  /* Route by which drill was picked, not by the item's type, so a bundle
     holding several kinds of material works the same as a single-type item. */
  function buildQuestions(item, drillId) {
    if (["meaning", "define", "blank"].indexOf(drillId) > -1) return buildVocab(item, drillId);
    if (["next", "lineup"].indexOf(drillId) > -1) return buildSequence(item, drillId);
    if (["group1", "groupall"].indexOf(drillId) > -1) return buildCategorize(item, drillId);
    return [];
  }

  function buildVocab(item, drillId) {
    var words = item.words.map(function (w) { return w.word; });
    var meanings = item.words.map(function (w) { return w.meaning; });
    var deck = drillId === "blank"
      ? item.words.filter(function (w) { return !!w.sentence; })
      : item.words;

    return shuffle(deck).map(function (w) {
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
    orderGroupsOf(item).forEach(function (g) {
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
    var groups = sortGroupsOf(item).filter(function (g) {
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
    if (p[0] === "hw") renderHomework(p[1]);
    else if (p[0] === "s" && p[1]) renderSubject(p[1]);
    else if (p[0] === "i" && p[1] && p[2] === "sheet") renderSheet(p[1]);
    else if (p[0] === "i" && p[1] && p[2]) startGame(p[1], p[2]);
    else if (p[0] === "i" && p[1]) renderItem(p[1]);
    else renderHome();
    renderTabs(p[0] === "hw" ? "hw"
               : p[0] === "s" ? p[1]
               : p[0] === "i" ? (itemById(p[1]) || {}).subject : null);
    window.scrollTo(0, 0);
  }

  function renderTabs(active) {
    var hw = (typeof HOMEWORK !== "undefined" && HOMEWORK)
      ? '<a class="tab" href="#/hw"' + (active === "hw" ? ' aria-current="page"' : "") + ">Homework</a>"
      : "";
    tabbar.innerHTML = hw + SUBJECTS.map(function (s) {
      var cur = s.id === active ? ' aria-current="page"' : "";
      return '<a class="tab" href="#/s/' + s.id + '"' + cur + ">" + esc(s.name) + "</a>";
    }).join("");
  }

  /* ---------- screens ----------------------------------------------------- */

  /* ---------- homework -----------------------------------------------------

     Beverly's sheet is a subject-by-day grid, which reads fine on paper and
     badly on a phone. The question Knox actually asks is "what do I have to do
     tonight", so the screen is day-first: one day at a time, today already
     selected, subjects listed under it. The grid is still there \u2014 it is just
     turned on its side. */

  var DAYNAME = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function hwDayLabel(iso) {
    var p = iso.split("-");
    var dow = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])).getUTCDay();
    return { short: DAYNAME[dow], date: (+p[1]) + "/" + (+p[2]) };
  }

  function renderHomework(which) {
    var hw = (typeof HOMEWORK !== "undefined") ? HOMEWORK : null;
    if (!hw || !hw.days || !hw.days.length) {
      app.innerHTML = '<p class="eyebrow">Homework</p>' +
        '<p class="lede">No homework sheet loaded yet this week.</p>';
      return;
    }

    /* Open on today when today is in the week; otherwise the first day. */
    var todayIso = (function () {
      var t = todayInZone();
      var m = t[1] < 10 ? "0" + t[1] : "" + t[1];
      var d = t[2] < 10 ? "0" + t[2] : "" + t[2];
      return t[0] + "-" + m + "-" + d;
    })();
    var idx = hw.days.map(function (d) { return d.date; }).indexOf(which);
    if (idx < 0) idx = hw.days.map(function (d) { return d.date; }).indexOf(todayIso);
    if (idx < 0) idx = 0;

    var stale = daysUntil(hw.days[hw.days.length - 1].date) < 0;

    function paint() {
      var day = hw.days[idx];
      var strip = hw.days.map(function (d, n) {
        var L = hwDayLabel(d.date);
        var past = daysUntil(d.date) < 0;
        var isToday = d.date === todayIso;
        var none = !(d.tasks || []).length;
        return '<button class="daykey' + (n === idx ? " daykey--on" : "") +
          (past && n !== idx ? " daykey--past" : "") + '" data-n="' + n + '">' +
          '<span class="daykey-d">' + L.short + (isToday ? " \u00b7 today" : "") + "</span>" +
          '<span class="daykey-n">' + L.date + "</span>" +
          (none ? '<span class="daykey-dot">\u2014</span>' : "") +
          "</button>";
      }).join("");

      var tests = (hw.tests || []).map(function (t) {
        var L = hwDayLabel(t.date);
        return '<li><b>' + esc(L.short) + " " + esc(L.date) + "</b> \u2014 " + esc(t.text) + "</li>";
      }).join("");

      var tasks = (day.tasks || []).length
        ? day.tasks.map(function (t) {
            var cls = "hwtask" + (t.test ? " hwtask--test" : "") + (t.optional ? " hwtask--opt" : "");
            return '<div class="hwrow">' +
              '<div class="hwclass">' + esc(t.cls) +
                (t.teacher ? ' <span class="hwwho">' + esc(t.teacher) + "</span>" : "") + "</div>" +
              '<div class="' + cls + '">' + esc(t.text) + "</div>" +
              (t.optional ? '<div class="hwtag">' + esc(t.tag || "only if it isn\'t finished in class") + "</div>" : "") +
              (t.subject && activeFor(t.subject).length
                ? '<a class="hwlink" href="#/s/' + t.subject + '">Study set \u2192</a>' : "") +
              "</div>";
          }).join("")
        : '<p class="lede" style="margin:1.2rem 0">Nothing written down for ' +
          esc(hwDayLabel(day.date).short) + ".</p>";

      var soon = (hw.soon || []).map(function (t) {
        var L = hwDayLabel(t.date);
        return '<li><b>' + esc(L.short) + " " + esc(L.date) + "</b> \u2014 " + esc(t.text) + "</li>";
      }).join("");

      /* When the sheet was copied off Beverly's PDF. If a teacher changes
         something midweek this line is what tells Knox the screen might be
         behind the paper. */
      var asOf = "";
      if (hw.asOf) {
        var L = hwDayLabel(hw.asOf), ago = -daysUntil(hw.asOf);
        asOf = '<p class="hwasof">Up to date as of ' + esc(L.short) + " " + esc(L.date) +
          (ago === 1 ? " \u00b7 yesterday"
             : ago > 1 ? " \u00b7 " + ago + " days ago"
             : ago === 0 ? " \u00b7 today" : "") +
          "</p>";
      }

      app.innerHTML =
        '<p class="eyebrow">Homework \u00b7 ' + esc(hw.label) + "</p>" +
        asOf +
        (stale ? '<p class="hwstale">This sheet has run out \u2014 ask for the new week.</p>' : "") +
        (tests ? '<div class="hwtests"><h2 class="hwtests-h">Tests this week</h2><ul>' +
                 tests + "</ul></div>" : "") +
        '<div class="daystrip" id="strip">' + strip + "</div>" +
        '<div class="hwday">' + tasks + "</div>" +
        (soon ? '<div class="hwsoon"><h2 class="hwtests-h">Coming up</h2><ul>' + soon + "</ul></div>" : "");

      document.getElementById("strip").addEventListener("click", function (e) {
        var b = e.target.closest(".daykey");
        if (!b) return;
        idx = +b.dataset.n;
        paint();
      });
    }
    paint();
  }


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

    /* Chronological is right for the day-to-day, but a big test a week out
       sinks to the bottom of the list and stops being on anyone's radar.
       An item with `pin: true` floats to the top and stays there until it
       retires like anything else. */
    var upcoming = STUDY_ITEMS
      .filter(function (i) { var d = daysUntil(i.quiz); return d !== null && d >= 0 && d <= 10; })
      .sort(function (a, b) {
        if (!a.pin !== !b.pin) return a.pin ? -1 : 1;
        return daysUntil(a.quiz) - daysUntil(b.quiz);
      });

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
      var A = assessWord(item);
      var label = d === null ? "" : d < 0 ? A + " passed" : d === 0 ? A + " today" :
                  d === 1 ? A + " tomorrow" : A + " in " + d + " days";
      pill = '<span class="' + cls + '">' + label + "</span>";
    }
    return '<a class="card" href="#/i/' + item.id + '">' +
      '<h2 class="card-title">' + esc(item.title) + "</h2>" +
      '<div class="card-meta">' +
        "<span>" + esc(subj ? subj.name : item.subject) + "</span>" +
        "<span>Added " + fmtDate(item.added) + "</span>" +
        (item.quiz ? "<span>" + assessWord(item) + " " + fmtDate(item.quiz) + "</span>" : "") +
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

    /* Quiz drills first. Anything that shows him the answer before asking
       goes underneath, under a "Study first" heading, so the top of the
       page is always a real test of what he knows. */
    var STUDY = ["flash", "spell", "read"];
    var card = function (d) {
      return '<a class="card" href="#/i/' + item.id + "/" + d.id + '">' +
        '<h2 class="card-title">' + esc(d.name) + "</h2>" +
        '<p class="card-note">' + esc(d.blurb) + "</p></a>";
    };
    var list = drillsFor(item);
    var drills = list.filter(function (d) { return STUDY.indexOf(d.id) < 0; }).map(card).join("");
    var study = list.filter(function (d) { return STUDY.indexOf(d.id) > -1; }).map(card).join("");

    app.innerHTML =
      '<a class="backlink" href="#/s/' + item.subject + '">\u2190 ' + esc(subj ? subj.name : "Back") + "</a>" +
      '<p class="eyebrow">' + (item.quiz ? assessWord(item) + " " + fmtDate(item.quiz) : "Study set") + "</p>" +
      '<h1 class="page-title">' + esc(item.title) + "</h1>" +
      (item.note ? '<p class="lede">' + esc(item.note) + "</p>" : "") +
      '<p class="eyebrow" style="margin-top:1.2rem">Quiz yourself</p>' +
      '<div class="stack">' + drills + "</div>" +
      (item.algebra && !study ? "" : '<p class="eyebrow" style="margin-top:1.6rem">Study first \u2014 these show you the answers</p>') +
      '<div class="stack">' + study +
        (item.algebra ? "" :
        '<a class="card" href="#/i/' + item.id + '/sheet">' +
          '<h2 class="card-title">Team sheet</h2>' +
          '<p class="card-note">Just the list. Read it over before you drill.</p></a>') +
      "</div>";
  }

  function questionSheet(item) {
    var byKind = { correct: "True, or fix the underlined word", tf: "True or false",
                   mc: "Multiple choice", multi: "Mark all that apply" };
    var out = "";
    ["correct", "tf", "mc", "multi"].forEach(function (k) {
      var qs = item.questions.filter(function (q) { return q.kind === k; });
      if (!qs.length) return;
      out += '<div class="sheet"><h3>' + esc(byKind[k]) + " \u00b7 " + qs.length + "</h3>" +
        qs.map(function (q) {
          var ans = q.kind === "tf" ? (q.answer ? "True" : "False")
                  : q.kind === "multi" ? q.answers.join(", ")
                  : q.kind === "correct"
                      ? (q.answer ? "True as written"
                                  : "False \u2014 \"" + q.underlined + "\" should be \"" + q.correction + "\"")
                  : q.answer;
          return '<dl class="def"><dt style="font-size:.95rem">' + esc(q.prompt) + "</dt>" +
            "<dd><strong>" + esc(ans) + "</strong></dd>" +
            (q.why ? '<dd class="ex">' + esc(q.why) + "</dd>" : "") + "</dl>";
        }).join("") + "</div>";
    });
    return out;
  }

  function renderSheet(id) {
    var item = itemById(id);
    if (!item) { location.hash = "#/"; return; }
    var body = "";

    if (item.type === "bundle") {
      if ((item.words || []).length) {
        body += '<div class="sheet"><h3>Vocabulary \u00b7 ' + item.words.length + "</h3>" +
          item.words.map(function (w) {
            return '<dl class="def"><dt>' + esc(w.word) + "</dt><dd>" + esc(w.meaning) + "</dd></dl>";
          }).join("") + "</div>";
      }
      if ((item.sortGroups || []).length) {
        body += item.sortGroups.map(function (g) {
          return '<div class="sheet"><h3>' + esc(g.name) + " \u00b7 " + g.books.length + "</h3><ul>" +
            g.books.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul></div>";
        }).join("");
      }
      if ((item.orderGroups || []).length) {
        var m = 0;
        body += item.orderGroups.map(function (g) {
          var lis = g.books.map(function (b) { m++; return "<li>" + esc(b) + "</li>"; }).join("");
          return '<div class="sheet"><h3>' + esc(g.name) + " \u00b7 " + g.books.length + "</h3>" +
            '<ol start="' + (m - g.books.length + 1) + '">' + lis + "</ol></div>";
        }).join("");
      }
      if ((item.extras || []).length) {
        body += '<div class="sheet"><h3>Written questions \u00b7 ' + item.extras.length + "</h3>" +
          item.extras.map(function (x) {
            return '<dl class="def"><dt style="font-size:.95rem">' + esc(x.prompt) + "</dt>" +
              "<dd>" + esc(x.answer) + "</dd></dl>";
          }).join("") + "</div>";
      }
      if ((item.spellWords || []).length) {
        body += '<div class="sheet"><h3>Spelling words \u00b7 ' + item.spellWords.length + "</h3>" +
          '<ul class="wordgrid">' + item.spellWords.map(function (x) {
            return "<li>" + esc(x) + "</li>";
          }).join("") + "</ul></div>";
      }
      if ((item.questions || []).length) body += questionSheet(item);
    } else if (item.type === "questions") {
      body += questionSheet(item);
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
    if (item.type === "questions" ||
        (item.type === "bundle" &&
         ["rootword", "maplabel", "maptype", "exact", "solvex", "decide", "divis", "numpad", "spell", "match", "keyonly", "tfonly", "mconly",
          "multionly", "corronly", "mixed"].indexOf(drillId) > -1)) {
      renderQuestionSet(item, drillId); return;
    }

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

  /* ---------- Divisibility rules, in her worksheet's own format ------------ */

  function digitSumOf(n) {
    var s = 0;
    String(n).split("").forEach(function (d) { s += +d; });
    return s;
  }

  /* Each rule carries the reason, so a wrong answer teaches the rule rather
     than just marking it wrong. Verified against plain division 1\u201320,000. */
  var DIVIS_RULES = {
    2:  { test: function (n) { return n % 2 === 0; },
          why: function (n) { return "ends in " + (n % 10) + ", which is " +
                ((n % 2 === 0) ? "even" : "odd"); } },
    3:  { test: function (n) { return digitSumOf(n) % 3 === 0; },
          why: function (n) { return "digits add to " + digitSumOf(n) + ", which is " +
                (digitSumOf(n) % 3 === 0 ? "" : "not ") + "a multiple of 3"; } },
    4:  { test: function (n) { return (n % 100) % 4 === 0; },
          why: function (n) { return "last two digits are " + (n % 100) + ", which is " +
                ((n % 100) % 4 === 0 ? "" : "not ") + "divisible by 4"; } },
    5:  { test: function (n) { return n % 5 === 0; },
          why: function (n) { return "ends in " + (n % 10) + " \u2014 needs a 0 or a 5"; } },
    6:  { test: function (n) { return n % 6 === 0; },
          why: function (n) { return "needs BOTH 2 and 3: it is " +
                (n % 2 === 0 ? "even" : "odd") + " and its digits add to " + digitSumOf(n); } },
    9:  { test: function (n) { return digitSumOf(n) % 9 === 0; },
          why: function (n) { return "digits add to " + digitSumOf(n) + ", which is " +
                (digitSumOf(n) % 9 === 0 ? "" : "not ") + "a multiple of 9"; } },
    10: { test: function (n) { return n % 10 === 0; },
          why: function (n) { return "ends in " + (n % 10) + " \u2014 needs a 0"; } }
  };

  /* ---------- GCF or LCM, then solve ------------------------------------- */

  /* Four of the eight Topic 7 questions make him CHOOSE the tool before doing
     any arithmetic, and that choice is where sixth graders go wrong. So the
     choice is graded on its own, then he still has to produce the number on a
     number pad \u2014 and the label is shown with it every time, because "Label"
     with \u22127 was the single biggest deduction of the term. A problem only
     counts clean if every stage was right. */
  function renderDecide(item) {
    var deck = shuffle((item.decideProblems || []).slice())
                 .slice(0, item.decideRound || 8);
    var g = { idx: 0, clean: 0 };

    function head(extra) {
      var dots = deck.map(function (_, i) {
        return '<span class="dot' + (i < g.idx ? " dot--hit" : i === g.idx ? " dot--now" : "") + '"></span>';
      }).join("");
      return '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<div class="scoreboard"><div class="score-side">' +
          '<span class="score-label">Clean</span><span class="score-num">' + g.clean + "</span></div>" +
          '<div class="score-dots">' + dots + "</div>" +
          '<div class="score-side"><span class="score-label">Of</span>' +
          '<span class="score-num">' + deck.length + "</span></div></div>" +
        '<p class="eyebrow">Problem ' + (g.idx + 1) + " of " + deck.length +
        (extra ? " \u00b7 " + extra : "") + "</p>";
    }

    function start() {
      if (g.idx >= deck.length) return done();
      decide(deck[g.idx], { clean: true });
    }

    /* Stage 1 \u2014 which tool does this problem want? */
    function decide(p, run) {
      var picked = null;

      function draw(locked) {
        app.innerHTML = head("which one?") +
          '<div class="q"><p class="q-text q-text--sentence">' + esc(p.prompt) + "</p></div>" +
          '<p class="chant-hint">Does this need the greatest common factor or the least common multiple?</p>' +
          '<div class="divgrid" id="picks" style="grid-template-columns:repeat(2,1fr);max-width:360px">' +
            ["GCF", "LCM"].map(function (k) {
              return '<button class="divkey' + (picked === k ? " divkey--on" : "") +
                     '" data-k="' + k + '">' + k + "</button>";
            }).join("") +
          "</div>" +
          '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>' +
          (locked ? "" : '<div class="btn-row"><button class="btn" id="check"' +
            (picked ? "" : " disabled") + ">Check it</button></div>");

        if (locked) return;
        document.getElementById("picks").addEventListener("click", function (e) {
          var b = e.target.closest(".divkey");
          if (!b) return;
          picked = b.dataset.k;
          draw(false);
        });
        document.getElementById("check").addEventListener("click", check);
      }

      function check() {
        var right = picked === p.use;
        if (!right) run.clean = false;
        draw(true);
        Array.prototype.slice.call(document.querySelectorAll(".divkey")).forEach(function (b) {
          b.disabled = true;
          if (b.dataset.k === p.use) b.classList.add("divkey--right");
          else if (b.dataset.k === picked) b.classList.add("divkey--wrong");
        });
        var v = document.getElementById("verdict");
        v.className = "verdict " + (right ? "verdict--goal" : "verdict--card");
        v.innerHTML = (right ? "Right tool" : "That's the other one") +
          "<small>" + esc(p.useWhy) + "</small>";
        var row = document.createElement("div");
        row.className = "btn-row";
        row.innerHTML = '<button class="btn" id="go">Now work it out \u2192</button>';
        v.after(row);
        var gb = document.getElementById("go");
        gb.addEventListener("click", function () { number(p, run, 0); });
        gb.focus();
      }

      draw(false);
    }

    /* Stage 2 (and 3, when a problem wants two numbers) \u2014 produce it. */
    function number(p, run, n) {
      var asks = [{ ask: p.ask, answer: p.answer, label: p.label }]
        .concat(p.also ? [p.also] : []);
      var spec = asks[n];
      var entry = "";

      function draw(state, locked) {
        app.innerHTML = head(p.use) +
          '<div class="q"><p class="q-text q-text--sentence">' + esc(spec.ask) + "</p></div>" +
          '<div class="numdisplay' + (state ? " numdisplay--" + state : "") + '" id="disp">' +
            (entry ? esc(Number(entry).toLocaleString()) + ' <span class="numwas">' + esc(spec.label) + "</span>"
                   : '<span class="numplaceholder">tap your answer</span>') + "</div>" +
          '<p class="chant-hint">The answer needs the word <strong>' + esc(spec.label) +
          "</strong> after it. She takes marks off for a bare number.</p>" +
          '<div class="numpad" id="pad">' +
            [1,2,3,4,5,6,7,8,9].map(function (k) {
              return '<button class="numkey" data-k="' + k + '">' + k + "</button>";
            }).join("") +
            '<button class="numkey numkey--wide" data-k="clear">Clear</button>' +
            '<button class="numkey" data-k="0">0</button>' +
            '<button class="numkey numkey--go" data-k="enter">Check</button>' +
          "</div>" +
          '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>';

        if (locked) {
          Array.prototype.slice.call(document.querySelectorAll(".numkey"))
            .forEach(function (b) { b.disabled = true; });
          return;
        }
        document.getElementById("pad").addEventListener("click", function (e) {
          var b = e.target.closest(".numkey");
          if (!b || b.disabled) return;
          var k = b.dataset.k;
          if (k === "clear") { entry = ""; draw(null, false); return; }
          if (k === "enter") { if (entry !== "") submit(); return; }
          if (entry.length < 7) { entry += k; draw(null, false); }
        });
      }

      function submit() {
        var right = parseInt(entry, 10) === spec.answer;
        if (!right) run.clean = false;
        var was = entry;
        draw(right ? "ok" : "no", true);
        var disp = document.getElementById("disp");
        disp.innerHTML = esc(Number(was).toLocaleString()) +
          (right ? ' <span class="numwas">' + esc(spec.label) + "</span>"
                 : ' <span class="numwas">\u2192 ' + spec.answer.toLocaleString() + " " + esc(spec.label) + "</span>");
        var v = document.getElementById("verdict");
        v.className = "verdict " + (right ? "verdict--goal" : "verdict--card");
        v.innerHTML = (right ? "Correct" : "Not quite") +
          "<small>Write it as <strong>" + spec.answer.toLocaleString() + " " + esc(spec.label) +
          "</strong>. " + esc(spec.why || p.why) + "</small>";

        var more = n + 1 < asks.length;
        var row = document.createElement("div");
        row.className = "btn-row";
        row.innerHTML = '<button class="btn" id="nx">' +
          (more ? "Second part \u2192"
                : g.idx + 1 >= deck.length ? "See the result" : "Next problem \u2192") + "</button>";
        v.after(row);
        var nb = document.getElementById("nx");
        nb.addEventListener("click", function () {
          if (more) return number(p, run, n + 1);
          if (run.clean) g.clean++;
          g.idx++;
          start();
        });
        nb.focus();
      }

      draw(null, false);
    }

    function done() {
      var rating = g.clean === deck.length ? "Clean sheet"
                 : g.clean >= deck.length * 0.7 ? "Nearly there"
                 : "Back to training";
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">' + rating + "</p>" +
          '<p class="result-score">' + g.clean + "/" + deck.length + "</p>" +
          '<p class="result-of">Right tool, right number, right label</p>' +
          '<p class="lede" style="margin:1rem auto 0">Half of her GCF and LCM questions ask you to ' +
          "say which one you need before you solve. Picking wrong costs the whole question, " +
          "however good the arithmetic is.</p>" +
          '<div class="btn-row">' +
            '<button class="btn" id="again">Go again</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Other drills</a>' +
          "</div>" +
        "</div>";
      document.getElementById("again").addEventListener("click", function () { renderDecide(item); });
    }

    start();
  }


  /* ---------- name it on the map -----------------------------------------

     The multiple-choice map questions taught him facts ABOUT the map but never
     made him put a name on a blank, which is what the test actually does. This
     drill shows the real sheet \u2014 the same scan, the same six boxes in the same
     places \u2014 lights up one blank at a time and makes him choose from the same
     word bank the sheet prints. The modern map works the same way with a pin
     on each country, and a right answer fills that country in its colour, so by
     the end he has the finished map in front of him. */

  /* Typed mode ("Write it on the map"): the test is a blank map he fills in
     himself, so a word bank is a crutch. He types the name instead. Spelling
     is forgiven within a few letters, as long as what he typed is closer to
     the right name than to any other name on the map; a near miss counts but
     shows the correct spelling. Two real misses and the name is shown so he
     can type it and move on. */
  function mapNorm(s) { return String(s || "").toLowerCase().replace(/[^a-z]/g, ""); }
  function mapDist(a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) { d[i] = [i]; }
    for (j = 0; j <= n; j++) { d[0][j] = j; }
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++) {
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1,
                         d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      /* swapped neighbours ("Indai") count as one slip, not two */
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1])
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
    return d[m][n];
  }
  function mapJudge(typed, target, bank) {
    var t = mapNorm(typed), goal = mapNorm(target);
    if (!t) return { kind: "empty" };
    if (t === goal) return { kind: "exact" };
    var best = null, bestD = 1e9;
    bank.forEach(function (name) {
      var dd = mapDist(t, mapNorm(name));
      if (dd < bestD) { bestD = dd; best = name; }
    });
    var dGoal = mapDist(t, goal);
    var allow = goal.length <= 5 ? 1 : goal.length <= 8 ? 2 : 3;
    if (dGoal <= allow && dGoal <= bestD) return { kind: "close" };
    if (best && best !== target && bestD <= (mapNorm(best).length <= 5 ? 1 : 2)) return { kind: "other", name: best };
    return { kind: "wrong" };
  }

  function renderMapLabel(item, typed) {
    var maps = (item.maps || []).filter(function (m) { return (m.blanks || []).length; });
    if (!maps.length) { app.innerHTML = '<p class="lede">No maps on this item.</p>'; return; }

    var g = { map: 0, pos: 0, clean: 0, total: 0, order: [], solved: {}, missed: false, tries: 0, shown: false };
    maps.forEach(function (m) { g.total += m.blanks.length; });

    function startMap() {
      g.order = shuffle(maps[g.map].blanks.map(function (_, i) { return i; }));
      g.pos = 0; g.solved = {}; g.missed = false; g.tries = 0; g.shown = false;
      paint();
    }

    function overlay(m, bi, b) {
      var done = g.solved[bi];
      var now  = !done && g.order[g.pos] === bi;
      if (b.pin) {
        /* Countries in the Levant sit very close together, so pins stay small
           and each one carries its own label offset to stop them colliding. */
        var r  = m.pinR || Math.max(8, Math.round(m.w / 44));
        var lw = b.labelW || 86;
        var lx = b.x + (typeof b.labelDx === "number" ? b.labelDx : r + 3);
        var ly = b.y + (typeof b.labelDy === "number" ? b.labelDy : 0);
        var fs = Math.round(r * 1.25);
        return '<g>' +
          (now ? '<circle cx="' + b.x + '" cy="' + b.y + '" r="' + (r + 7) +
                 '" fill="none" stroke="#E8641A" stroke-width="3.5" class="mappulse"/>' : "") +
          '<circle cx="' + b.x + '" cy="' + b.y + '" r="' + r + '" ' +
            'fill="' + (done ? (b.fill || "#CBEBD0") : now ? "#FFF1E4" : "#FFFFFF") + '" ' +
            'stroke="' + (now ? "#E8641A" : "#12241A") + '" stroke-width="' + (now ? 3 : 2) + '"/>' +
          (done
            ? '<rect x="' + lx + '" y="' + (ly - r) + '" width="' + lw +
              '" height="' + (2 * r) + '" rx="4" fill="#FFFFFF" stroke="#12241A" stroke-width="1.5"/>' +
              '<text x="' + (lx + lw / 2) + '" y="' + (ly + fs * 0.36) + '" text-anchor="middle" ' +
              'font-size="' + fs + '" font-family="Atkinson Hyperlegible, Arial, sans-serif" ' +
              'font-weight="700" fill="#12241A">' + esc(b.answer) + "</text>"
            : '<text x="' + b.x + '" y="' + (b.y + (now ? r * 0.75 : r * 0.42)) +
              '" text-anchor="middle" font-size="' + Math.round(r * (now ? 2.1 : 1.2)) +
              '" font-family="Arial, sans-serif" font-weight="700" fill="' +
              (now ? "#E8641A" : "#12241A") + '"' +
              (now ? ' stroke="#FFFFFF" stroke-width="4" paint-order="stroke"' : "") + ">?</text>") +
          "</g>";
      }
      var pad = 3;
      var txt = done ? b.answer : "";
      /* The Jordan River blank is tall and narrow, like the river. Horizontal
         text would be unreadably small in it, so that one reads downwards. */
      var tall = b.h > b.w * 2;
      var along = tall ? b.h : b.w;
      var across = tall ? b.w : b.h;
      var size = Math.min(across * 0.62, (along - 2 * pad) / Math.max(1, txt.length * 0.52));
      /* The blank he is being asked about has to be obvious at a glance on a
         phone, so it gets a pulsing ring around it, a tinted fill and a big
         question mark that is allowed to overflow the box. */
      var qs = Math.max(26, b.h * 1.3);
      return '<g>' +
        (now ? '<rect x="' + (b.x - 6) + '" y="' + (b.y - 6) + '" width="' + (b.w + 12) +
               '" height="' + (b.h + 12) + '" rx="7" fill="none" stroke="#E8641A" ' +
               'stroke-width="3.5" class="mappulse"/>' : "") +
        '<rect x="' + b.x + '" y="' + b.y + '" width="' + b.w + '" height="' + b.h + '" ' +
          'fill="' + (now ? "#FFF1E4" : "#FFFFFF") + '" stroke="' +
          (now ? "#E8641A" : done ? "#2E7D4F" : "#9AA6A0") + '" ' +
          'stroke-width="' + (now ? 3 : 2) + '"/>' +
        (done
          ? '<text x="' + (b.x + b.w / 2) + '" y="' + (b.y + b.h / 2 + size * 0.36) +
            '" text-anchor="middle" font-size="' + size.toFixed(1) +
            '" font-family="Atkinson Hyperlegible, Arial, sans-serif" font-weight="700" ' +
            'fill="#12241A"' +
            (tall ? ' transform="rotate(-90 ' + (b.x + b.w / 2) + " " + (b.y + b.h / 2) + ')"' : "") +
            ">" + esc(b.answer) + "</text>"
          : now
            ? '<text x="' + (b.x + b.w / 2) + '" y="' + (b.y + b.h / 2 + qs * 0.36) +
              '" text-anchor="middle" font-size="' + qs.toFixed(1) +
              '" font-family="Arial, sans-serif" font-weight="700" fill="#E8641A" ' +
              'stroke="#FFFFFF" stroke-width="4" paint-order="stroke">?</text>'
            : "") +
        "</g>";
    }

    function paint(msg, tone) {
      var m = maps[g.map];
      var b = m.blanks[g.order[g.pos]];
      var used = {};
      Object.keys(g.solved).forEach(function (i) { used[m.blanks[i].answer] = 1; });

      var dots = m.blanks.map(function (_, i) {
        return '<span class="dot' + (g.solved[i] ? " dot--hit" : g.order[g.pos] === i ? " dot--now" : "") + '"></span>';
      }).join("");

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<div class="scoreboard"><div class="score-side">' +
          '<span class="score-label">Clean</span><span class="score-num">' + g.clean + "</span></div>" +
          '<div class="score-dots">' + dots + "</div>" +
          '<div class="score-side"><span class="score-label">Of</span>' +
          '<span class="score-num">' + g.total + "</span></div></div>" +
        '<p class="eyebrow">' + esc(m.title) +
          (maps.length > 1 ? " \u00b7 map " + (g.map + 1) + " of " + maps.length : "") + "</p>" +
        '<div class="mapwrap"><svg class="mapsvg" viewBox="0 0 ' + m.w + " " + m.h + '" ' +
          'xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + esc(m.title) + '">' +
          '<image href="' + m.src + '" x="0" y="0" width="' + m.w + '" height="' + m.h + '"/>' +
          m.blanks.map(function (bb, i) { return overlay(m, i, bb); }).join("") +
          "</svg></div>" +
        '<p class="chant-hint">' + esc(typed ? (b.pin ? "Type the name of the country with the glowing pin."
                                                       : "Type the name that goes in the highlighted blank.")
                                             : (b.prompt || "Which name goes in the highlighted blank?")) + "</p>" +
        (typed
          ? finished ? "" : '<div class="btn-row"><input class="wordbox" id="box" type="text" autocomplete="off" ' +
              'autocapitalize="words" autocorrect="off" spellcheck="false" placeholder="type the name"></div>' +
            '<div class="btn-row"><button class="btn" id="check">Check it</button></div>'
          : '<div class="mapbank" id="bank">' +
          m.bank.map(function (name) {
            return '<button class="chip' + (used[name] ? " chip--placed" : "") + '"' +
              (used[name] ? " disabled" : "") + ' data-n="' + esc(name) + '">' + esc(name) + "</button>";
          }).join("") +
        "</div>") +
        '<div class="verdict' + (tone ? " " + tone : "") + '" id="verdict" role="status" aria-live="polite">' +
          (msg || "") + "</div>";

      if (typed) {
        if (finished) return;
        var box = document.getElementById("box");
        var go = function () { typedAnswer(box.value); };
        box.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
        document.getElementById("check").addEventListener("click", go);
        box.focus();
        return;
      }
      document.getElementById("bank").addEventListener("click", function (e) {
        var t = e.target.closest(".chip");
        if (!t || t.disabled) return;
        answer(t.dataset.n);
      });
    }

    var finished = false;
    function typedAnswer(text) {
      var m = maps[g.map];
      var b = m.blanks[g.order[g.pos]];
      if (finished) return;
      var j = mapJudge(text, b.answer, m.bank);
      if (j.kind === "empty") return;
      if (j.kind === "exact" || j.kind === "close") {
        return answer(b.answer, j.kind === "close" && !g.shown
          ? "Counts! Check the spelling: <strong>" + esc(b.answer) + "</strong>. " : "");
      }
      g.missed = true;
      g.tries++;
      if (g.tries >= 2) {
        g.shown = true;
        paint("It\u2019s <strong>" + esc(b.answer) + "</strong><small>Type it in to fill it on the map.</small>",
              "verdict--card");
        return;
      }
      paint(j.kind === "other"
        ? "That\u2019s " + esc(j.name) + "<small>" + esc(j.name) + " is somewhere else on this map. Look again at where the pin sits.</small>"
        : "Not that one<small>Look at where it sits and try once more.</small>", "verdict--card");
    }

    function answer(name, note) {
      note = note || "";
      var m = maps[g.map];
      var bi = g.order[g.pos];
      var b = m.blanks[bi];
      if (name !== b.answer) {
        g.missed = true;
        paint("Not that one<small>" + esc(name) + " goes somewhere else on this map. Look again at where the blank sits.</small>",
              "verdict--card");
        return;
      }
      g.solved[bi] = true;
      if (!g.missed) g.clean++;
      g.missed = false; g.tries = 0; g.shown = false;
      g.pos++;

      if (g.pos < g.order.length) {
        paint("<strong>" + esc(b.answer) + "</strong><small>" + note + esc(b.why || "") + "</small>", "verdict--goal");
        return;
      }
      /* map finished */
      g.pos = g.order.length - 1;
      finished = true;
      var more = g.map + 1 < maps.length;
      paint("<strong>" + esc(b.answer) + "</strong><small>" + note + esc(b.why || "") +
            " That is the whole map filled in.</small>", "verdict--goal");
      var row = document.createElement("div");
      row.className = "btn-row";
      row.innerHTML = '<button class="btn" id="on">' + (more ? "Next map \u2192" : "See the result") + "</button>";
      document.getElementById("verdict").after(row);
      var btn = document.getElementById("on");
      btn.addEventListener("click", function () {
        finished = false;
        if (more) { g.map++; startMap(); } else done();
      });
      btn.focus();
    }

    function done() {
      var rating = g.clean === g.total ? "Clean sheet"
                 : g.clean >= g.total * 0.7 ? "Nearly there" : "Back to the binder";
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">' + rating + "</p>" +
          '<p class="result-score">' + g.clean + "/" + g.total + "</p>" +
          '<p class="result-of">Named right first time</p>' +
          '<p class="lede" style="margin:1rem auto 0">The test sheet looks exactly like this, with the ' +
          "same blanks in the same places. Say where each one goes before you pick.</p>" +
          '<div class="btn-row">' +
            '<button class="btn" id="again">Go again</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Other drills</a>' +
          "</div>" +
        "</div>";
      document.getElementById("again").addEventListener("click", function () { renderMapLabel(item, typed); });
    }

    startMap();
  }




  /* ---------- solve for x (one-step equations) -----------------------------

     Knox can do x + 2 = 5 in his head. Where it falls apart is a mixed sheet,
     where he has to work out WHICH rule applies, and above all fractions:
     when to flip and when not to. So every problem has two parts. First he
     picks the first step (that is the rule-recognition part, graded on its
     own). Then he types x on a keypad that takes 3/2, 1.5 or 1 1/2.

     A round is 10 problems: all four operations mixed, about half whole
     numbers and half fractions. Misses are counted per operation AND per
     whole/fraction, so the end screen can tell "doesn't know the rule" apart
     from "only the fraction twist". Counts last while the page is open,
     which is what "Practice my weak spots" uses. Nothing is saved.

     Arithmetic is exact (numerator/denominator pairs, never floats), so a
     generated answer can't be off by a rounding error. */

  var SX_STATS = {};          /* "add-w": { seen, miss } for this visit */
  var SX_OPS = ["add", "sub", "mul", "div"];
  var SX_OPNAME = { add: "Addition", sub: "Subtraction", mul: "Multiplication", div: "Division" };

  function sxGcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a || 1; }
  function F(n, d) {
    d = d === undefined ? 1 : d;
    if (d < 0) { n = -n; d = -d; }
    var g = sxGcd(n, d);
    return { n: n / g, d: d / g };
  }
  function fAdd(a, b) { return F(a.n * b.d + b.n * a.d, a.d * b.d); }
  function fSub(a, b) { return F(a.n * b.d - b.n * a.d, a.d * b.d); }
  function fMul(a, b) { return F(a.n * b.n, a.d * b.d); }
  function fDiv(a, b) { return F(a.n * b.d, a.d * b.n); }
  function fEq(a, b) { return a.n === b.n && a.d === b.d; }
  function fRecip(a) { return F(a.d, a.n); }
  function fText(a) { return (a.n < 0 ? "\u2212" : "") + Math.abs(a.n) + (a.d === 1 ? "" : "/" + a.d); }
  function fMixed(a) {
    if (a.d === 1 || Math.abs(a.n) < a.d) return "";
    var w = Math.floor(Math.abs(a.n) / a.d), r = Math.abs(a.n) % a.d;
    return (a.n < 0 ? "\u2212" : "") + w + " " + r + "/" + a.d;
  }
  /* A fraction drawn stacked, the way it is on paper. */
  function fHtml(a) {
    if (a.d === 1) return (a.n < 0 ? "\u2212" : "") + Math.abs(a.n);
    return (a.n < 0 ? "\u2212" : "") +
      '<span class="sx-frac"><span>' + Math.abs(a.n) + "</span><span>" + a.d + "</span></span>";
  }
  /* A number written inside a sentence: "subtract 3/4 from both sides". */
  function fWord(a) { return fText(a); }

  function sxRand(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
  function sxPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function sxSign() { return Math.random() < 0.5 ? -1 : 1; }

  /* Parse what he typed: 3, -3, 3/2, -3/2, 1.5, 1 1/2, -1 1/2. Returns a
     fraction, or null if it isn't a number. A long decimal (3.33 for 10/3)
     is accepted if it rounds to the right value at two places. */
  function sxParse(s) {
    s = String(s || "").replace(/\u2212/g, "-").trim().replace(/\s+/g, " ");
    if (!s) return null;
    var neg = false;
    if (s.charAt(0) === "-") { neg = true; s = s.slice(1).trim(); }
    var m;
    if ((m = s.match(/^(\d+) (\d+)\/(\d+)$/))) {
      if (+m[3] === 0) return null;
      var v = F(+m[1] * +m[3] + +m[2], +m[3]);
      return neg ? F(-v.n, v.d) : v;
    }
    if ((m = s.match(/^(\d+)\/(\d+)$/))) {
      if (+m[2] === 0) return null;
      return F((neg ? -1 : 1) * +m[1], +m[2]);
    }
    if ((m = s.match(/^(\d*)\.(\d+)$/)) || (m = s.match(/^(\d+)\.?$/))) {
      var whole = m[1] || "0", dec = m[2] || "";
      var den = Math.pow(10, dec.length);
      return { n: (neg ? -1 : 1) * (+whole * den + (+dec || 0)), d: den, decimal: dec.length > 0 };
    }
    return null;
  }
  function sxMatches(typed, ans) {
    var p = sxParse(typed);
    if (!p) return null;
    if (p.decimal) {
      var exact = F(p.n, p.d);
      if (fEq(exact, ans)) return true;
      /* 10/3 typed as 3.33: right if it agrees to two decimal places */
      return Math.abs(p.n / p.d - ans.n / ans.d) < 0.006 && String(p.d).length >= 3;
    }
    return fEq(F(p.n, p.d), ans);
  }

  /* ---- problem generators: one per operation, whole or fraction, by level */

  var SX_PROPER = { 2: [1], 3: [1, 2], 4: [1, 3], 5: [1, 2, 3, 4], 6: [1, 5], 8: [1, 3, 5, 7] };
  var SX_PAIRS = [[2, 4], [4, 2], [3, 6], [6, 3], [2, 3], [3, 2], [4, 8], [8, 4], [2, 6], [5, 10], [2, 5], [3, 4]];
  function sxProper(d) { return F(sxPick(SX_PROPER[d] || [1]), d); }

  function sxGen(op, frac, level) {
    var x, a, b;                       /* x = answer, a = the number with x, b = right side */
    var L = level === "easy" ? 0 : level === "hard" ? 2 : 1;
    if (!frac) {
      if (op === "add" || op === "sub") {
        var hiA = [9, 15, 25][L], hiX = [10, 20, 20][L];
        a = F(sxRand(L ? 3 : 1, hiA));
        x = L === 2 ? F(sxRand(-12, 18) || 4) : F(sxRand(1, hiX));
        if (op === "sub" && L < 2 && x.n <= a.n) x = F(a.n + sxRand(1, 10));
      } else if (op === "mul") {
        a = F([sxRand(2, 5), sxRand(2, 9), sxSign() * sxRand(2, 12)][L]);
        x = F([sxRand(1, 10), sxRand(2, 12), sxSign() * sxRand(2, 12)][L]);
      } else {
        a = F([sxRand(2, 5), sxRand(2, 9), sxRand(2, 12)][L]);
        x = fMul(a, F([sxRand(1, 10), sxRand(2, 12), sxSign() * sxRand(2, 12)][L]));
      }
    } else {
      if (op === "add" || op === "sub") {
        if (L === 0) {
          var d0 = sxPick([2, 3, 4, 5, 8]);
          a = sxProper(d0);
          x = F(sxRand(1, d0 + 2), d0);
          if (op === "sub") x = fAdd(a, F(sxRand(1, d0), d0));
        } else {
          var pr = sxPick(SX_PAIRS);
          a = sxProper(pr[0]);
          x = L === 1 ? sxProper(pr[1]) : fMul(sxProper(pr[1]), F(sxPick([-1, 3, 5, -3])));
          if (op === "sub" && L === 1) x = fAdd(a, sxProper(pr[1]));
        }
      } else if (op === "mul") {
        if (L === 0) { a = F(1, sxPick([2, 3, 4, 5])); x = fMul(F(a.d), F(sxRand(1, 6))); }
        else if (L === 1) {
          a = sxPick([F(2, 3), F(3, 4), F(2, 5), F(3, 5), F(4, 5), F(5, 6), F(3, 2), F(5, 4)]);
          x = fMul(F(a.d), F(sxRand(1, 5)));
        } else {
          a = sxPick([F(2, 3), F(3, 4), F(2, 5), F(4, 5), F(5, 6), F(3, 2)]);
          x = sxPick([F(1, 2), F(2, 3), F(3, 4), F(5, 2), F(4, 3), F(-3, 2), F(-1, 2)]);
          if (fEq(x, fRecip(a))) x = F(5, 2);
        }
      } else {
        if (L === 0) { a = F(1, sxPick([2, 3, 4])); x = F(sxRand(1, 6)); }
        else if (L === 1) { a = sxPick([F(2, 3), F(3, 4), F(2, 5), F(3, 2)]); x = fMul(F(a.n), F(sxRand(1, 5))); }
        else { a = sxPick([F(2, 3), F(3, 4), F(1, 2), F(4, 5)]); x = sxPick([F(1, 2), F(2, 3), F(3, 4), F(-1, 3), F(5, 2)]); }
      }
    }
    b = op === "add" ? fAdd(x, a) : op === "sub" ? fSub(x, a) : op === "mul" ? fMul(a, x) : fDiv(x, a);
    return sxBuild(op, frac, a, b, x);
  }

  function sxBuild(op, frac, a, b, x) {
    var neg = a.n < 0;
    var aT = fWord(a), aAbs = fWord(F(Math.abs(a.n), a.d));
    var lhs;
    if (op === "add") lhs = "x + " + fHtml(a);
    else if (op === "sub") lhs = "x \u2212 " + fHtml(a);
    else if (op === "mul") lhs = (a.d === 1 ? fHtml(a) : "(" + fHtml(a) + ")") + "x";
    else lhs = '<span class="sx-frac sx-frac--big"><span>x</span><span>' + fHtml(a) + "</span></span>";
    var eq = lhs + " = " + fHtml(b);
    var eqText = (op === "add" ? "x + " + aT : op === "sub" ? "x \u2212 " + aT
                : op === "mul" ? (a.d === 1 ? aT : "(" + aT + ")") + "x" : "x/" + (a.d === 1 ? aT : "(" + aT + ")")) + " = " + fText(b);

    /* The right first step, plus wrong ones built from the mistakes he
       actually makes: the wrong opposite, not flipping, flipping when he
       shouldn't, dividing instead of multiplying. None of the wrong ones is
       secretly also right (dividing by 2/3 = multiplying by 3/2, so that
       one is never offered as a "wrong" answer). */
    var right, wrong;
    var rec = fWord(fRecip(a));
    if (op === "add") {
      right = "Subtract " + aT + " from both sides";
      wrong = ["Add " + aT + " to both sides", "Divide both sides by " + aT, "Multiply both sides by " + aT];
    } else if (op === "sub") {
      right = "Add " + aT + " to both sides";
      wrong = ["Subtract " + aT + " from both sides", "Multiply both sides by " + aT, "Divide both sides by " + aT];
    } else if (op === "mul" && a.d === 1) {
      right = "Divide both sides by " + aT;
      wrong = ["Multiply both sides by " + aT, "Subtract " + aT + " from both sides",
               neg ? "Divide both sides by " + aAbs : "Add " + aT + " to both sides"];
    } else if (op === "mul") {
      right = "Multiply both sides by " + rec + " (flip it)";
      wrong = ["Multiply both sides by " + aT, "Divide both sides by " + rec, "Subtract " + aT + " from both sides"];
    } else if (a.d === 1) {
      right = "Multiply both sides by " + aT;
      wrong = ["Divide both sides by " + aT, "Subtract " + aT + " from both sides", "Add " + aT + " to both sides"];
    } else {
      right = "Multiply both sides by " + aT + " (no flip)";
      wrong = ["Multiply both sides by " + rec, "Divide both sides by " + aT, "Subtract " + aT + " from both sides"];
    }

    /* Plain-words rule plus the worked steps. Always shown on a miss, even
       on an easy one, because the point is the rule, not the arithmetic. */
    var rule, steps;
    var bT = fText(b), xT = fText(x);
    if (op === "add") {
      rule = "x + " + aT + " means " + aT + " was ADDED to x. Subtraction undoes addition, so subtract " + aT +
             " from both sides." + (frac ? " With fractions, make the bottoms match first." : "");
      steps = ["x + " + aT + " \u2212 " + aT + " = " + bT + " \u2212 " + aT, "x = " + xT];
    } else if (op === "sub") {
      rule = "x \u2212 " + aT + " means " + aT + " was SUBTRACTED from x. Addition undoes subtraction, so add " + aT +
             " to both sides." + (frac ? " With fractions, make the bottoms match first." : "");
      steps = ["x \u2212 " + aT + " + " + aT + " = " + bT + " + " + aT, "x = " + xT];
    } else if (op === "mul" && a.d === 1) {
      rule = aT + "x means x was MULTIPLIED by " + aT + ". Division undoes multiplication, so divide both sides by " + aT + "." +
             (neg ? " Keep the negative sign: divide by " + aT + ", not " + aAbs + "." : "");
      steps = [aT + "x \u00F7 " + aT + " = " + bT + " \u00F7 " + aT, "x = " + xT];
    } else if (op === "mul") {
      rule = "(" + aT + ")x means x was MULTIPLIED by the fraction " + aT +
             ". To undo multiplying by a fraction, multiply both sides by its reciprocal \u2014 flip it to " + rec +
             ". Flip when x is MULTIPLIED by a fraction.";
      steps = ["(" + rec + ")(" + aT + ")x = " + bT + " \u00D7 " + rec, "1x = " + fText(fMul(b, fRecip(a))), "x = " + xT];
    } else if (a.d === 1) {
      rule = "x/" + aT + " means x was DIVIDED by " + aT + ". Multiplication undoes division, so multiply both sides by " + aT + ".";
      steps = ["x/" + aT + " \u00D7 " + aT + " = " + bT + " \u00D7 " + aT, "x = " + xT];
    } else {
      rule = "x/(" + aT + ") means x was DIVIDED by " + aT + ". Multiplication undoes division, so multiply both sides by " + aT +
             " \u2014 the same fraction, NO flip. Only flip when x is multiplied by a fraction.";
      steps = ["x/(" + aT + ") \u00D7 " + aT + " = " + bT + " \u00D7 " + aT, "x = " + xT];
    }
    return { op: op, frac: frac, a: a, b: b, x: x, eq: eq, eqText: eqText,
             right: right, options: shuffle([right].concat(wrong)), rule: rule, steps: steps };
  }

  /* 10 problems: every operation at least twice, about half fractions. */
  function sxRound(level, focus) {
    var slots = [];
    if (focus && focus.length) {
      /* Weak-spot round: 7 from the missed categories (most-missed weighted),
         and whenever a fraction category is weak, its whole-number twin goes
         in too, so the basic rule is reinforced alongside the twist. */
      var bag = [];
      focus.forEach(function (f) { for (var k = 0; k < f.miss; k++) bag.push(f.key); });
      for (var i = 0; i < 7; i++) slots.push(sxPick(bag));
      focus.forEach(function (f) {
        if (/-f$/.test(f.key) && slots.length < 10) slots.push(f.key.replace("-f", "-w"));
      });
      while (slots.length < 10) slots.push(sxPick(SX_OPS) + (Math.random() < 0.5 ? "-w" : "-f"));
    } else {
      var ops = shuffle(SX_OPS.concat(SX_OPS, [sxPick(SX_OPS), sxPick(SX_OPS)]));
      var nFrac = sxRand(4, 6);
      var fr = shuffle(ops.map(function (_, k) { return k < nFrac; }));
      slots = ops.map(function (o, k) { return o + (fr[k] ? "-f" : "-w"); });
    }
    var seen = {};
    return shuffle(slots).map(function (key) {
      var p, tries = 0;
      do { p = sxGen(key.split("-")[0], key.slice(-1) === "f", level); tries++; }
      while (seen[p.eqText] && tries < 20);
      seen[p.eqText] = true;
      return p;
    });
  }

  function sxCheatSheet() {
    var ex = function (eq, step, ans) {
      return '<div class="sx-ex"><span class="sx-ex-eq">' + eq + '</span><span class="sx-ex-step">' + step +
             '</span><span class="sx-ex-ans">' + ans + "</span></div>";
    };
    return '<div class="sx-cheat" id="sxcheat" hidden>' +
      '<p class="eyebrow">Rule cheat sheet</p>' +
      "<h3>Whole numbers first</h3>" +
      "<p><strong>1. Use the opposite operation to get x alone.</strong> Addition and subtraction undo each other. Multiplication and division undo each other.</p>" +
      ex("x + 4 = 9", "+4 \u2192 subtract 4", "x = 5") +
      ex("x \u2212 3 = 7", "\u22123 \u2192 add 3", "x = 10") +
      ex("5x = 20", "\u00D75 \u2192 divide by 5", "x = 4") +
      ex("x/3 = 4", "\u00F73 \u2192 multiply by 3", "x = 12") +
      "<p><strong>2. Whatever you do to one side, do to the other.</strong> A number that is added on one side gets subtracted on the other. Positive on one side becomes negative when it moves across, and negative becomes positive.</p>" +
      ex("x + 6 = 2", "subtract 6 from BOTH sides", "x = \u22124") +
      "<h3>Then fractions</h3>" +
      "<p><strong>3. Adding or subtracting a fraction:</strong> same rule, just make the bottoms match.</p>" +
      ex("x + 1/4 = 3/4", "subtract 1/4", "x = 2/4 = 1/2") +
      "<p><strong>4. x DIVIDED by a number or fraction:</strong> multiply both sides by that same number. No flip.</p>" +
      ex("x/(1/2) = 6", "multiply by 1/2", "x = 3") +
      "<p><strong>5. x MULTIPLIED by a fraction:</strong> multiply both sides by the reciprocal \u2014 flip the fraction.</p>" +
      ex("(2/3)x = 6", "multiply by 3/2", "x = 9") +
      '<p class="sx-tip">How to remember: <strong>flip only when x is multiplied by the fraction.</strong> If x is divided by it, just multiply by it.</p>' +
      "</div>";
  }

  function sxStyles() {
    if (document.getElementById("sx-css")) return;
    var st = document.createElement("style");
    st.id = "sx-css";
    st.textContent =
      ".sx-eq{font-size:clamp(2rem,9vw,3rem);font-weight:800;text-align:center;margin:.6rem 0 1rem;line-height:1.2}" +
      ".sx-frac{display:inline-flex;flex-direction:column;vertical-align:middle;text-align:center;font-size:.72em;line-height:1.05;margin:0 .08em}" +
      ".sx-frac>span:first-child{border-bottom:.08em solid currentColor;padding:0 .12em}" +
      ".sx-frac>span:last-child{padding:0 .12em}" +
      ".sx-frac--big{font-size:1em}.sx-frac--big .sx-frac{font-size:.7em}" +
      ".sx-top{display:flex;justify-content:space-between;align-items:center;gap:.5rem;flex-wrap:wrap}" +
      ".sx-bar{height:12px;border-radius:99px;background:rgba(0,0,0,.08);overflow:hidden;margin:.5rem 0 .2rem}" +
      ".sx-bar>span{display:block;height:100%;background:var(--turf,#2E8B57);transition:width .3s}" +
      ".sx-stats{display:flex;justify-content:space-between;font-weight:700;font-size:.95rem}" +
      ".sx-step{text-align:center;font-weight:700;margin:.2rem 0 .6rem;opacity:.85}" +
      ".sx-display{font-size:2rem;font-weight:800;text-align:center;min-height:3.2rem;border:2px solid var(--ink,#222);" +
        "border-radius:var(--radius,12px);background:var(--chalk,#fff);padding:.4rem;margin:0 auto .6rem;max-width:320px}" +
      ".sx-pad{display:grid;grid-template-columns:repeat(4,1fr);gap:.5rem;max-width:360px;margin:0 auto}" +
      ".sx-pad button{min-height:58px;font-size:1.5rem;font-weight:800;border-radius:12px;border:2px solid var(--ink,#222);" +
        "background:var(--chalk,#fff);color:var(--ink,#222);cursor:pointer;touch-action:manipulation}" +
      ".sx-pad button:active{transform:scale(.96)}" +
      ".sx-pad .sx-wide{grid-column:span 2;font-size:1.1rem}" +
      ".sx-pad .sx-go{background:var(--turf,#2E8B57);color:#fff;border-color:var(--turf,#2E8B57)}" +
      ".sx-cheat{border:2px solid var(--ink,#222);border-radius:var(--radius,12px);background:var(--chalk,#fff);padding:1rem;margin:.6rem 0 1rem;text-align:left}" +
      ".sx-cheat h3{margin:.8rem 0 .3rem}.sx-cheat p{margin:.4rem 0}" +
      ".sx-ex{display:grid;grid-template-columns:1fr 1.4fr .8fr;gap:.4rem;padding:.35rem .5rem;border-radius:8px;background:rgba(0,0,0,.04);margin:.25rem 0;font-weight:600}" +
      ".sx-ex-ans{text-align:right}.sx-tip{background:#FFF4D6;padding:.6rem;border-radius:8px}" +
      ".sx-work{text-align:left;margin:.6rem 0 0;padding-left:1.2rem}.sx-work li{margin:.15rem 0;font-family:inherit}" +
      ".sx-table{width:100%;border-collapse:collapse;margin:.6rem 0;font-weight:600}" +
      ".sx-table th,.sx-table td{border-bottom:1px solid rgba(0,0,0,.12);padding:.45rem;text-align:center}" +
      ".sx-table td:first-child,.sx-table th:first-child{text-align:left}" +
      ".sx-bad{color:#C2410C;font-weight:800}.sx-ok{color:var(--turf,#2E8B57)}" +
      ".sx-levels{display:flex;gap:.5rem;justify-content:center;flex-wrap:wrap;margin:.6rem 0}" +
      ".sx-levels .btn[aria-pressed=true]{outline:4px solid var(--flag,#F2B705);outline-offset:2px}";
    document.head.appendChild(st);
  }

  function renderSolveX(item, opts) {
    sxStyles();
    opts = opts || {};
    var level = opts.level || "medium";
    var g = null;

    function top(extra) {
      return '<div class="sx-top"><a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<button class="btn btn--quiet" id="sxcheatbtn" type="button">Rule cheat sheet</button></div>' +
        sxCheatSheet() + (extra || "");
    }
    function wireCheat() {
      var b = document.getElementById("sxcheatbtn"), c = document.getElementById("sxcheat");
      b.addEventListener("click", function () {
        c.hidden = !c.hidden;
        b.textContent = c.hidden ? "Rule cheat sheet" : "Hide cheat sheet";
      });
    }

    function startScreen() {
      app.innerHTML = top() +
        '<div class="q"><p class="q-kicker">Solve for x</p>' +
          '<p class="q-text">10 mixed problems. First pick the first step, then find x.</p></div>' +
        '<p class="lede" style="text-align:center">Plus, minus, times, divide \u2014 whole numbers and fractions all mixed together, like the test.</p>' +
        '<div class="sx-levels">' + ["easy", "medium", "hard"].map(function (l) {
          return '<button class="btn btn--quiet" data-l="' + l + '" aria-pressed="' + (l === level) + '">' +
            l.charAt(0).toUpperCase() + l.slice(1) + "</button>";
        }).join("") + "</div>" +
        '<div class="btn-row"><button class="btn" id="sxgo">Start the round</button></div>' +
        (weakSpots().length ? '<div class="btn-row"><button class="btn btn--quiet" id="sxweak">Practice my weak spots</button></div>' : "");
      wireCheat();
      Array.prototype.forEach.call(document.querySelectorAll(".sx-levels .btn"), function (b) {
        b.addEventListener("click", function () { level = b.dataset.l; startScreen(); });
      });
      document.getElementById("sxgo").addEventListener("click", function () { begin(); });
      if (document.getElementById("sxweak"))
        document.getElementById("sxweak").addEventListener("click", function () { begin(weakSpots()); });
    }

    function begin(focus) {
      g = { deck: sxRound(level, focus), idx: 0, clean: 0, points: 0, streak: 0, best: 0,
            miss: {}, seen: {}, focus: !!(focus && focus.length), stepOK: false, typed: "" };
      ask();
    }

    function status() {
      var pct = Math.round(g.idx / g.deck.length * 100);
      return '<div class="sx-bar" aria-hidden="true"><span style="width:' + pct + '%"></span></div>' +
        '<div class="sx-stats"><span>Problem ' + (g.idx + 1) + " of " + g.deck.length + "</span>" +
        "<span>\u2B50 " + g.points + "</span>" +
        "<span>" + (g.streak >= 2 ? "\uD83D\uDD25 " + g.streak + " in a row" : "Streak " + g.streak) + "</span></div>";
    }

    /* Part 1: pick the first step. */
    function ask() {
      if (g.idx >= g.deck.length) return finish();
      var p = g.deck[g.idx];
      app.innerHTML = top(status()) +
        '<p class="q-kicker" style="text-align:center;margin-top:1rem">' + (p.frac ? "Fraction" : "Whole number") + " \u00b7 Step 1</p>" +
        '<div class="sx-eq">' + p.eq + "</div>" +
        '<p class="q-text" style="text-align:center">What\u2019s the first step to get x alone?</p>' +
        '<div class="answers answers--long" id="answers">' +
          p.options.map(function (o) { return '<button class="answer" data-v="' + esc(o) + '">' + esc(o) + "</button>"; }).join("") +
        "</div>" +
        '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>';
      wireCheat();
      document.getElementById("answers").addEventListener("click", function (e) {
        var btn = e.target.closest(".answer");
        if (!btn || btn.disabled) return;
        var all = Array.prototype.slice.call(document.querySelectorAll(".answer"));
        all.forEach(function (b) {
          b.disabled = true;
          if (b.dataset.v === p.right) b.classList.add("answer--right");
          else b.classList.add(b === btn ? "answer--wrong" : "answer--dim");
        });
        g.stepOK = btn.dataset.v === p.right;
        if (g.stepOK) g.points += 5;
        var v = document.getElementById("verdict");
        v.className = "verdict " + (g.stepOK ? "verdict--goal" : "verdict--card");
        v.innerHTML = (g.stepOK ? "Right rule!" : "Not that one \u2014 here\u2019s the rule") +
          "<small>" + esc(p.rule) + "</small>";
        var row = document.createElement("div");
        row.className = "btn-row";
        row.innerHTML = '<button class="btn" id="go">Now find x \u2192</button>';
        v.after(row);
        document.getElementById("go").addEventListener("click", solve);
        document.getElementById("go").focus();
      });
    }

    /* Part 2: type x on a keypad that has a fraction bar and a minus key. */
    function solve() {
      var p = g.deck[g.idx];
      g.typed = "";
      var keys = ["7", "8", "9", "\u232B", "4", "5", "6", "/", "1", "2", "3", "\u2212", "0", ".", "space"];
      app.innerHTML = top(status()) +
        '<p class="q-kicker" style="text-align:center;margin-top:1rem">Step 2 \u00b7 find x</p>' +
        '<div class="sx-eq">' + p.eq + "</div>" +
        '<p class="sx-step">First step: ' + esc(p.right) + "</p>" +
        '<div class="sx-display" id="sxdisp" aria-live="polite">x = <span id="sxval"></span></div>' +
        '<div class="sx-pad" id="sxpad">' +
          keys.map(function (k) {
            return k === "space" ? '<button data-k=" " aria-label="space for a mixed number">space</button>'
                 : '<button data-k="' + k + '">' + k + "</button>";
          }).join("") +
          '<button class="sx-go sx-wide" data-k="go" style="grid-column:span 4">Check x</button>' +
        "</div>" +
        '<p class="chant-hint" style="text-align:center">Fractions like 3/2, mixed numbers like 1 1/2, or decimals like 1.5 all work.</p>' +
        '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>';
      wireCheat();
      var val = document.getElementById("sxval");
      function press(k) {
        if (k === "go") return check();
        if (k === "\u232B") g.typed = g.typed.slice(0, -1);
        else if (g.typed.length < 12) g.typed += k === "\u2212" ? "\u2212" : k;
        val.textContent = g.typed;
      }
      document.getElementById("sxpad").addEventListener("click", function (e) {
        var b = e.target.closest("button");
        if (b && !b.disabled) press(b.dataset.k);
      });
      document.onkeydown = function (e) {
        if (!document.getElementById("sxpad")) { document.onkeydown = null; return; }
        if (/^[0-9\/. ]$/.test(e.key)) press(e.key);
        else if (e.key === "-") press("\u2212");
        else if (e.key === "Backspace") press("\u232B");
        else if (e.key === "Enter") press("go");
        else return;
        e.preventDefault();
      };
    }

    function check() {
      var p = g.deck[g.idx];
      var ok = sxMatches(g.typed, p.x);
      var v = document.getElementById("verdict");
      if (ok === null) {
        v.className = "verdict verdict--card";
        v.innerHTML = "That\u2019s not a number yet<small>Type something like 4, \u22122, 3/2, 1 1/2 or 1.5.</small>";
        return;
      }
      document.onkeydown = null;
      Array.prototype.forEach.call(document.querySelectorAll("#sxpad button"), function (b) { b.disabled = true; });
      var key = p.op + (p.frac ? "-f" : "-w");
      g.seen[key] = (g.seen[key] || 0) + 1;
      SX_STATS[key] = SX_STATS[key] || { seen: 0, miss: 0 };
      SX_STATS[key].seen++;
      var clean = ok && g.stepOK;
      if (ok) g.points += 10;
      if (clean) {
        g.clean++; g.streak++; if (g.streak > g.best) g.best = g.streak;
        if (g.streak >= 3) g.points += 5;
      } else {
        g.streak = 0;
        g.miss[key] = (g.miss[key] || 0) + 1;
        SX_STATS[key].miss++;
      }
      var mixed = fMixed(p.x);
      var shown = fText(p.x) + (mixed ? " (or " + mixed + ")" : "");
      v.className = "verdict " + (ok ? "verdict--goal" : "verdict--card");
      v.innerHTML = ok
        ? (clean ? (g.streak >= 3 ? "\uD83D\uDD25 " + g.streak + " in a row! x = " + shown : "Correct! x = " + shown)
                 : "x = " + shown + " \u2014 right answer! Watch the first step next time.") +
          (clean ? "" : "<small>" + esc(p.rule) + "</small>")
        : "Not quite. x = " + shown +
          "<small>" + esc(p.rule) + "</small>" +
          '<ol class="sx-work"><li>' + esc(p.eqText) + "</li>" +
          p.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>";
      var row = document.createElement("div");
      row.className = "btn-row";
      row.innerHTML = '<button class="btn" id="go">' + (g.idx + 1 < g.deck.length ? "Next problem \u2192" : "See my score") + "</button>";
      v.after(row);
      document.getElementById("go").addEventListener("click", function () { g.idx++; ask(); });
      document.getElementById("go").focus();
    }

    /* Categories he has missed this visit, most-missed first. */
    function weakSpots() {
      return Object.keys(SX_STATS).filter(function (k) { return SX_STATS[k].miss > 0; })
        .map(function (k) { return { key: k, miss: SX_STATS[k].miss }; })
        .sort(function (a, b) { return b.miss - a.miss; }).slice(0, 3);
    }

    function finish() {
      document.onkeydown = null;
      var cell = function (k) {
        var s = g.seen[k] || 0, m = g.miss[k] || 0;
        if (!s) return '<td style="opacity:.4">\u2014</td>';
        return "<td>" + (m ? '<span class="sx-bad">' + m + " missed</span>" : '<span class="sx-ok">\u2713</span>') +
          ' <span style="opacity:.6">of ' + s + "</span></td>";
      };
      /* Plain-words diagnosis: basic rule vs only the fraction twist. */
      var notes = [];
      SX_OPS.forEach(function (op) {
        var w = g.miss[op + "-w"] || 0, f = g.miss[op + "-f"] || 0;
        if (w) notes.push(SX_OPNAME[op] + ": missed with whole numbers too \u2014 that\u2019s the basic rule. Check the cheat sheet, rule 1.");
        else if (f) notes.push(SX_OPNAME[op] + ": fine with whole numbers, only the fraction version \u2014 " +
          (op === "mul" ? "remember to FLIP when x is multiplied by a fraction." :
           op === "div" ? "when x is divided by a fraction, multiply by that SAME fraction, no flip." :
           "same rule as whole numbers, just match the bottoms."));
      });
      var rating = g.clean >= 9 ? "Ready for the test" : g.clean >= 7 ? "Nearly there" : g.clean >= 5 ? "Getting it" : "Keep practicing";
      var weak = weakSpots();
      app.innerHTML =
        '<div class="result">' +
          '<p class="eyebrow">' + (g.focus ? "Weak-spot round" : "Round") + " complete \u00b7 " + level + "</p>" +
          '<p class="result-rating">' + rating + "</p>" +
          '<p class="result-score">' + g.clean + "/" + g.deck.length + "</p>" +
          '<p class="result-of">first step AND x right \u00b7 \u2B50 ' + g.points + " points \u00b7 best streak " + g.best + "</p>" +
          '<table class="sx-table"><thead><tr><th></th><th>Whole numbers</th><th>Fractions</th></tr></thead><tbody>' +
            SX_OPS.map(function (op) {
              return "<tr><td>" + SX_OPNAME[op] + "</td>" + cell(op + "-w") + cell(op + "-f") + "</tr>";
            }).join("") +
          "</tbody></table>" +
          (notes.length ? '<div style="text-align:left">' + notes.map(function (n) { return "<p>" + esc(n) + "</p>"; }).join("") + "</div>"
                        : '<p class="lede">No misses this round. Try a harder level.</p>') +
          '<div class="btn-row">' +
            (weak.length ? '<button class="btn" id="sxweak">Practice my weak spots</button>' : "") +
            '<button class="btn' + (weak.length ? " btn--quiet" : "") + '" id="sxagain">New round</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Back to drills</a>' +
          "</div></div>";
      if (document.getElementById("sxweak"))
        document.getElementById("sxweak").addEventListener("click", function () { begin(weakSpots()); });
      document.getElementById("sxagain").addEventListener("click", function () { startScreen(); });
    }

    startScreen();
  }

  /* ---------- word for word -------------------------------------------------

     Mrs. Vowels wants study-guide answers word for word, and picking from a
     list never makes him produce the words. He sees the question, types the
     answer, and gets it back word by word: green for right, orange for a word
     he left out, struck through for a word that isn't in her answer. A small
     typo inside a long word is forgiven (that's spelling, not memory), but a
     wrong or missing word is not. Hints go first letters, then the whole
     answer, so he is never stuck. */

  function exactTokens(s) {
    return String(s || "").toLowerCase().replace(/&/g, " and ").replace(/['\u2019-]/g, "")
      .replace(/[\/\u2013\u2014]/g, " ").replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  }
  function exactSame(a, b) {
    if (a === b) return true;
    if (a.length < 5 || b.length < 5) return false;
    return mapDist(a, b) <= 1;
  }
  function exactDiff(typed, target) {
    var t = exactTokens(typed), g = String(target).replace(/\//g, " / ").split(/\s+/).filter(Boolean);
    var gn = g.map(function (w) { return exactTokens(w).join(""); });
    var n = t.length, m = g.length, i, j, L = [];
    for (i = 0; i <= n; i++) { L[i] = []; for (j = 0; j <= m; j++) L[i][j] = 0; }
    for (i = n - 1; i >= 0; i--) for (j = m - 1; j >= 0; j--)
      L[i][j] = gn[j] && exactSame(t[i], gn[j]) ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    var out = [], ok = true; i = 0; j = 0;
    while (i < n || j < m) {
      if (j < m && !gn[j]) { out.push({ k: "ok", w: g[j] }); j++; continue; }
      if (i < n && j < m && exactSame(t[i], gn[j])) { out.push({ k: "ok", w: g[j] }); i++; j++; }
      else if (j < m && (i >= n || L[i][j + 1] >= L[i + 1][j])) { out.push({ k: "miss", w: g[j] }); ok = false; j++; }
      else { out.push({ k: "extra", w: t[i] }); ok = false; i++; }
    }
    return { ok: ok, parts: out };
  }

  function renderExact(item, subset) {
    var all = item.exact || [];
    var deck = subset && subset.length ? subset : all;
    var at = 0, hint = 0, misses = [], tries = 0;

    function paint(result, typedText) {
      var e = deck[at];
      var words = String(e.answer).replace(/\//g, " / ").split(/\s+/).filter(Boolean);
      var hintHtml = hint === 1 ? words.map(wordSkeleton).join(" ")
                   : hint >= 2 ? esc(e.answer) : "";
      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<p class="eyebrow">' + esc(e.section || "") + " \u00b7 " + (at + 1) + " of " + deck.length + "</p>" +
        '<div class="prompt-card">' + esc(e.cue) + "</div>" +
        (hintHtml ? '<div class="verse"><span class="verse-line">' + hintHtml + "</span></div>" : "") +
        (result
          ? '<div class="verse' + (result.ok ? " chant--open" : "") + '"><span class="verse-line">' +
              result.parts.map(function (p) {
                return p.k === "ok" ? esc(p.w)
                     : p.k === "miss" ? '<strong style="color:#C2410C;text-decoration:underline">' + esc(p.w) + "</strong>"
                     : '<s style="color:#8A8F8C">' + esc(p.w) + "</s>";
              }).join(" ") + "</span></div>" +
            '<p class="chant-hint">' + (result.ok
              ? "Word for word. That\u2019s exactly her answer."
              : "Orange underlined = a word you left out or changed. Crossed out = not in her answer.") + "</p>" +
            '<div class="btn-row">' +
              (result.ok ? '<button class="btn" id="next">' + (at + 1 < deck.length ? "Next \u2192" : "See the result") + "</button>"
                         : '<button class="btn" id="retry">Try it again</button>' +
                           '<button class="btn btn--quiet" id="next">Move on</button>') +
            "</div>"
          : '<textarea class="wordbox" id="box" rows="3" style="width:min(100%,560px);text-align:left;font-size:1.1rem" ' +
              'autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" ' +
              'placeholder="Type her answer, word for word">' + esc(typedText || "") + "</textarea>" +
            '<div class="btn-row"><button class="btn" id="check">Check it</button>' +
              (tries > 0 && hint === 0 ? '<button class="btn btn--quiet" id="hint">First letters</button>' : "") +
            "</div>" +
            (tries === 0 ? '<p class="chant-hint">From memory first. A hint opens up after one try.</p>' : "")) +
        '<p class="card-counter">' + (at + 1) + " of " + deck.length + "</p>";

      if (result) {
        document.getElementById("next").addEventListener("click", function () {
          if (!result.ok || tries > 1 || hint > 0) { if (misses.indexOf(e) < 0) misses.push(e); }
          at++; hint = 0; tries = 0;
          if (at >= deck.length) done(); else paint();
        });
        if (document.getElementById("retry"))
          document.getElementById("retry").addEventListener("click", function () { paint(null, ""); });
        document.getElementById("next").focus();
        return;
      }
      var box = document.getElementById("box");
      box.focus();
      box.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" && !ev.shiftKey) { ev.preventDefault(); check(); }
      });
      document.getElementById("check").addEventListener("click", check);
      if (document.getElementById("hint"))
        document.getElementById("hint").addEventListener("click", function () { hint++; paint(null, box.value); });
      function check() {
        if (!box.value.trim()) return;
        tries++;
        paint(exactDiff(box.value, e.answer));
      }
    }

    function done() {
      var got = deck.length - misses.length;
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">' + (misses.length ? "Keep going" : "Clean sheet") + "</p>" +
          '<p class="result-score">' + got + "/" + deck.length + "</p>" +
          '<p class="result-of">Word for word, first try, no hints</p>' +
          '<p class="lede" style="margin:1rem auto 0">' + (misses.length
            ? "Run the ones that tripped you up. Those are the ones she\u2019ll catch."
            : "Every answer exactly the way she wrote it. Run it again tomorrow.") + "</p>" +
          '<div class="btn-row">' +
            (misses.length ? '<button class="btn" id="redo">Run those ' + misses.length + " again</button>" : "") +
            '<button class="btn' + (misses.length ? " btn--quiet" : "") + '" id="allagain">Start over</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Other drills</a>' +
          "</div></div>";
      var again = misses.slice();
      if (document.getElementById("redo"))
        document.getElementById("redo").addEventListener("click", function () { renderExact(item, again); });
      document.getElementById("allagain").addEventListener("click", function () { renderExact(item); });
    }

    paint();
  }

  /* ---------- root, meaning, word ----------------------------------------

     Mrs. Servizzi's study guide says it plainly: know each root's definition
     AND one example word. So this runs in two stages, in that order. Stage one
     is a choice of meanings. Stage two makes him PRODUCE a word rather than
     recognise one, because recognition alone has never stuck for him. Any
     genuine word using the root counts, not only the one he wrote on the
     sheet, so a right answer is never marked wrong. */

  function renderRootWord(item) {
    var all = (item.roots || []).slice();
    if (!all.length) { app.innerHTML = '<p class="lede">No roots on this item.</p>'; return; }
    var deck = shuffle(all.slice()).slice(0, item.rootRound || 8);
    var g = { idx: 0, clean: 0 };

    function head(extra) {
      var dots = deck.map(function (_, i) {
        return '<span class="dot' + (i < g.idx ? " dot--hit" : i === g.idx ? " dot--now" : "") + '"></span>';
      }).join("");
      return '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<div class="scoreboard"><div class="score-side">' +
          '<span class="score-label">Clean</span><span class="score-num">' + g.clean + "</span></div>" +
          '<div class="score-dots">' + dots + "</div>" +
          '<div class="score-side"><span class="score-label">Of</span>' +
          '<span class="score-num">' + deck.length + "</span></div></div>" +
        '<p class="eyebrow">Root ' + (g.idx + 1) + " of " + deck.length +
        (extra ? " \u00b7 " + extra : "") + "</p>";
    }

    function rootCard(r) {
      return '<div class="q"><p class="q-text" style="font-size:2rem;letter-spacing:.04em">' +
             esc(r.root) + "</p></div>";
    }

    function start() {
      if (g.idx >= deck.length) return done();
      stageMeaning(deck[g.idx], { clean: true });
    }

    /* Stage one \u2014 what does the root mean? */
    function stageMeaning(r, run) {
      var wrong = shuffle(all.filter(function (x) { return x.root !== r.root; }))
                    .slice(0, 3).map(function (x) { return x.meaning; });
      var opts = shuffle([r.meaning].concat(wrong));
      var picked = null;

      function draw(locked) {
        app.innerHTML = head("what does it mean?") + rootCard(r) +
          '<p class="chant-hint">What does this root mean?</p>' +
          '<div class="answers answers--long" id="picks">' +
            opts.map(function (t) {
              return '<button class="answer' + (picked === t ? " answer--picked" : "") +
                     '" data-t="' + esc(t) + '">' + esc(t) + "</button>";
            }).join("") +
          "</div>" +
          '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>' +
          (locked ? "" : '<div class="btn-row"><button class="btn" id="check"' +
            (picked ? "" : " disabled") + ">Check it</button></div>");
        if (locked) return;
        document.getElementById("picks").addEventListener("click", function (e) {
          var b = e.target.closest(".answer");
          if (!b) return;
          picked = b.dataset.t;
          draw(false);
        });
        document.getElementById("check").addEventListener("click", check);
      }

      function check() {
        var right = picked === r.meaning;
        if (!right) run.clean = false;
        draw(true);
        Array.prototype.slice.call(document.querySelectorAll(".answer")).forEach(function (b) {
          b.disabled = true;
          if (b.dataset.t === r.meaning) b.classList.add("answer--right");
          else if (b.dataset.t === picked) b.classList.add("answer--wrong");
          else b.classList.add("answer--dim");
        });
        var v = document.getElementById("verdict");
        v.className = "verdict " + (right ? "verdict--goal" : "verdict--card");
        v.innerHTML = right
          ? "<strong>" + esc(r.root) + " means " + esc(r.meaning) + "</strong>"
          : "<strong>" + esc(r.root) + " means " + esc(r.meaning) + "</strong><small>Say it again before you move on.</small>";
        var row = document.createElement("div");
        row.className = "btn-row";
        row.innerHTML = '<button class="btn" id="on">Now the word \u2192</button>';
        v.after(row);
        var btn = document.getElementById("on");
        btn.addEventListener("click", function () { stageWord(r, run); });
        btn.focus();
      }
      draw(false);
    }

    /* Stage two \u2014 now give a word that uses it. */
    function stageWord(r, run) {
      var norm = function (t) { return String(t || "").toLowerCase().replace(/[^a-z]/g, ""); };
      var root = norm(r.root);
      var ok = (r.accept || []).map(norm);

      function draw(locked, verdict, tone, typed) {
        app.innerHTML = head("now a word") + rootCard(r) +
          '<p class="chant-hint">' + esc(r.meaning) + '<br>Type a word that uses <strong>' +
            esc(r.root) + "</strong>.</p>" +
          '<div class="btn-row"><input class="wordbox" id="box" type="text" ' +
            'autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" ' +
            'inputmode="text" placeholder="your word" value="' + esc(typed || "") + '"' +
            (locked ? " disabled" : "") + "></div>" +
          '<div class="verdict' + (tone ? " " + tone : "") + '" id="verdict" role="status" aria-live="polite">' +
            (verdict || "") + "</div>" +
          (locked ? "" : '<div class="btn-row"><button class="btn" id="check">Check it</button></div>');
        if (locked) return;
        var box = document.getElementById("box");
        box.focus();
        box.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
        document.getElementById("check").addEventListener("click", check);
      }

      function check() {
        var typed = document.getElementById("box").value;
        var n = norm(typed);
        if (!n) return;
        var listed = ok.indexOf(n) >= 0;
        /* A word he thought of that is not on my list still counts, as long as
           it really contains the root. Short roots must start the word, or
           "in" would match almost anything. */
        var carries = root.length >= 3 ? n.indexOf(root) >= 0 : n.indexOf(root) === 0;
        var right = listed || (carries && n.length > root.length + 1);

        if (!right) { run.clean = false; }
        else if (run.clean) { g.clean++; }

        var others = (r.accept || []).filter(function (w) { return norm(w) !== n; }).slice(0, 4);
        var msg = right
          ? "<strong>" + esc(typed.trim()) + "</strong><small>" +
            (listed ? "" : "Not the one on your sheet, but it uses " + esc(r.root) + ", so it counts. ") +
            esc(r.root) + " = " + esc(r.meaning) + ". Others: " + others.map(esc).join(", ") + ".</small>"
          : "<strong>Not quite</strong><small>" + esc(typed.trim()) + " does not use <strong>" +
            esc(r.root) + "</strong>. Try one of these: " + (r.accept || []).slice(0, 4).map(esc).join(", ") + ".</small>";

        draw(true, msg, right ? "verdict--goal" : "verdict--card", typed);
        g.idx++;
        var row = document.createElement("div");
        row.className = "btn-row";
        row.innerHTML = '<button class="btn" id="on">' +
          (g.idx >= deck.length ? "See the result" : "Next root \u2192") + "</button>";
        document.getElementById("verdict").after(row);
        var btn = document.getElementById("on");
        btn.addEventListener("click", start);
        btn.focus();
      }
      draw(false);
    }

    function done() {
      var rating = g.clean === deck.length ? "Clean sheet"
                 : g.clean >= deck.length * 0.7 ? "Nearly there" : "Back to the study guide";
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">' + rating + "</p>" +
          '<p class="result-score">' + g.clean + "/" + deck.length + "</p>" +
          '<p class="result-of">Meaning AND a word, both right first time</p>' +
          '<p class="lede" style="margin:1rem auto 0">The test wants both halves for every root. ' +
          "Getting the meaning but not a word is still half a mark.</p>" +
          '<div class="btn-row">' +
            '<button class="btn" id="again">Go again</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Other drills</a>' +
          "</div>" +
        "</div>";
      document.getElementById("again").addEventListener("click", function () { renderRootWord(item); });
    }

    start();
  }

  function renderDivisibility(item) {
    var divisors = (item.divisors || [2, 3, 4, 5, 6, 9, 10]).slice();
    var rounds = item.divisRound || 8;
    var deck = [];
    while (deck.length < rounds) {
      var n = randInt(102, 9999);
      if (deck.indexOf(n) < 0) deck.push(n);
    }
    var g = { idx: 0, clean: 0 };

    function paint() {
      if (g.idx >= deck.length) return done();
      var n = deck[g.idx];
      var picked = {};
      var noneOn = false;

      function draw(locked, msg) {
        var dots = deck.map(function (_, i) {
          return '<span class="dot' + (i < g.idx ? " dot--hit" : i === g.idx ? " dot--now" : "") + '"></span>';
        }).join("");

        app.innerHTML =
          '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
          '<div class="scoreboard"><div class="score-side">' +
            '<span class="score-label">Clean</span><span class="score-num">' + g.clean + "</span></div>" +
            '<div class="score-dots">' + dots + "</div>" +
            '<div class="score-side"><span class="score-label">Of</span>' +
            '<span class="score-num">' + deck.length + "</span></div></div>" +
          '<p class="eyebrow">Number ' + (g.idx + 1) + " of " + deck.length + "</p>" +
          '<div class="spellword">' + n.toLocaleString() + "</div>" +
          '<p class="chant-hint">Tap every number below that divides it evenly.</p>' +
          '<div class="divgrid" id="divs">' +
            divisors.map(function (d) {
              return '<button class="divkey" data-d="' + d + '">' + d + "</button>";
            }).join("") +
            '<button class="divkey divkey--none" data-d="none">None</button>' +
          "</div>" +
          '<div class="verdict" id="verdict" role="status" aria-live="polite">' + (msg || "") + "</div>" +
          (locked ? "" : '<div class="btn-row"><button class="btn" id="check">Check it</button></div>');

        if (!locked) {
          document.getElementById("divs").addEventListener("click", function (e) {
            var b = e.target.closest(".divkey");
            if (!b) return;
            if (b.dataset.d === "none") {
              noneOn = !noneOn;
              if (noneOn) picked = {};
            } else {
              picked[b.dataset.d] = !picked[b.dataset.d];
              if (picked[b.dataset.d]) noneOn = false;
            }
            draw(false, "");
          });
          document.getElementById("check").addEventListener("click", check);
          /* keep selections visible after the redraw */
          Array.prototype.slice.call(document.querySelectorAll(".divkey")).forEach(function (b) {
            if (b.dataset.d === "none" ? noneOn : picked[b.dataset.d]) b.classList.add("divkey--on");
          });
        }
      }

      function check() {
        var truth = divisors.filter(function (d) { return DIVIS_RULES[d].test(n); });
        var chose = divisors.filter(function (d) { return picked[d]; });
        var right = noneOn
          ? truth.length === 0
          : (truth.length === chose.length && truth.every(function (d) { return chose.indexOf(d) > -1; }));
        if (right) g.clean++;

        draw(true, "");
        var buttons = Array.prototype.slice.call(document.querySelectorAll(".divkey"));
        buttons.forEach(function (b) {
          b.disabled = true;
          var d = b.dataset.d;
          if (d === "none") {
            if (truth.length === 0) b.classList.add("divkey--right");
            else if (noneOn) b.classList.add("divkey--wrong");
            return;
          }
          var should = truth.indexOf(+d) > -1;
          if (should) {
            b.classList.add("divkey--right");
            if (!picked[d]) b.classList.add("divkey--missed");
          } else if (picked[d]) {
            b.classList.add("divkey--wrong");
          }
        });

        var lines = divisors.map(function (d) {
          var yes = DIVIS_RULES[d].test(n);
          return "<li><strong>" + d + "</strong> " + (yes ? "yes" : "no") +
                 " \u2014 " + esc(DIVIS_RULES[d].why(n)) + "</li>";
        }).join("");

        var v = document.getElementById("verdict");
        v.className = "verdict " + (right ? "verdict--goal" : "verdict--card");
        v.innerHTML = (right ? "All of them, none missed" : "Not the full set") +
          "<small>" + (truth.length ? "Divides by " + truth.join(", ") + "." : "None of them divide it.") + "</small>";

        var box = document.createElement("div");
        box.className = "sheet divwhy";
        box.innerHTML = "<h3>Why, rule by rule</h3><ul>" + lines + "</ul>";
        v.after(box);

        var row = document.createElement("div");
        row.className = "btn-row";
        row.innerHTML = '<button class="btn" id="nextn">' +
          (g.idx + 1 >= deck.length ? "See the result" : "Next number \u2192") + "</button>";
        box.after(row);
        g.idx++;
        var nb = document.getElementById("nextn");
        nb.addEventListener("click", paint);
        nb.focus();
      }

      draw(false, "");
    }

    function done() {
      var rating = g.clean === deck.length ? "Clean sheet"
                 : g.clean >= deck.length * 0.7 ? "Nearly there"
                 : "Back to training";
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">' + rating + "</p>" +
          '<p class="result-score">' + g.clean + "/" + deck.length + "</p>" +
          '<p class="result-of">Complete sets, nothing missed</p>' +
          '<p class="lede" style="margin:1rem auto 0">Her worksheet wants every divisor that works, ' +
          "so getting four of five still costs the mark. New numbers every round.</p>" +
          '<div class="btn-row">' +
            '<button class="btn" id="again">New numbers</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Other drills</a>' +
          "</div>" +
        "</div>";
      document.getElementById("again").addEventListener("click", function () { renderDivisibility(item); });
    }

    paint();
  }

  /* ---------- Maths: problems generated and marked by the site itself ------ */

  function gcdOf(a, b) { while (b) { var t = b; b = a % b; a = t; } return a; }
  function factorsOf(n) {
    var f = [];
    for (var i = 1; i <= n; i++) if (n % i === 0) f.push(i);
    return f;
  }
  function isPrimeNum(n) {
    if (n < 2) return false;
    for (var i = 2; i * i <= n; i++) if (n % i === 0) return false;
    return true;
  }
  function primeFactorsOf(n) {
    var out = [], dd = 2;
    while (n > 1) { while (n % dd === 0) { out.push(dd); n /= dd; } dd++; }
    return out;
  }
  function randInt(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }

  function placeName(power) {
    return { 1: "ones", 10: "tens", 100: "hundreds", 1000: "thousands",
             10000: "ten thousands", 100000: "hundred thousands",
             1000000: "millions" }[power] || String(power);
  }

  var MATH_TOPICS = {
    gcf: function () {
      var a, b;
      do { a = randInt(8, 60); b = randInt(8, 60); }
      while (a === b || gcdOf(a, b) === 1);
      return { prompt: "What is the greatest common factor of " + a + " and " + b + "?",
               answer: gcdOf(a, b),
               why: a + " = " + primeFactorsOf(a).join(" \u00d7 ") + " and " +
                    b + " = " + primeFactorsOf(b).join(" \u00d7 ") +
                    ". The largest factor they share is " + gcdOf(a, b) + "." };
    },
    lcm: function () {
      var a, b;
      do { a = randInt(3, 14); b = randInt(3, 14); } while (a === b);
      var l = a * b / gcdOf(a, b);
      return { prompt: "What is the least common multiple of " + a + " and " + b + "?",
               answer: l,
               why: "Count up in " + a + "s and in " + b + "s. " + l +
                    " is the first number both reach (" + a + " \u00d7 " + (l / a) + " and " +
                    b + " \u00d7 " + (l / b) + ")." };
    },
    factorcount: function () {
      var n = randInt(12, 60);
      var f = factorsOf(n);
      return { prompt: "How many factors does " + n + " have?",
               answer: f.length,
               why: "They are " + f.join(", ") + " \u2014 that is " + f.length + "." };
    },
    largestprime: function () {
      var n;
      do { n = randInt(20, 99); } while (isPrimeNum(n));
      var pf = primeFactorsOf(n);
      return { prompt: "What is the largest prime factor of " + n + "?",
               answer: Math.max.apply(null, pf),
               why: n + " = " + pf.join(" \u00d7 ") + ", so the largest prime factor is " +
                    Math.max.apply(null, pf) + "." };
    },
    primefactorcount: function () {
      var n;
      do { n = randInt(16, 96); } while (isPrimeNum(n));
      var pf = primeFactorsOf(n);
      return { prompt: "Counting repeats, how many prime factors does " + n + " have?",
               answer: pf.length,
               why: n + " = " + pf.join(" \u00d7 ") + ", which is " + pf.length + " prime factors." };
    },
    rounding: function () {
      var places = [[10, "ten"], [100, "hundred"], [1000, "thousand"], [10000, "ten thousand"]];
      var p = places[randInt(0, places.length - 1)];
      var n = randInt(p[0] * 3, p[0] * 900);
      return { prompt: "Round " + n.toLocaleString() + " to the nearest " + p[1] + ".",
               answer: Math.round(n / p[0]) * p[0],
               why: "Look at the digit to the right of the " + p[1] +
                    " place. Five or more rounds up, less than five stays." };
    },
    placevalue: function () {
      var n = randInt(10000, 999999);
      var s = String(n);
      var i = randInt(0, s.length - 1);
      var digit = +s[i];
      var power = Math.pow(10, s.length - 1 - i);
      return { prompt: "In " + n.toLocaleString() + ", what is the VALUE of the " + digit +
                       (s.split(digit).length > 2 ? " in the " + placeName(power) + " place" : "") + "?",
               answer: digit * power,
               why: "That " + digit + " sits in the " + placeName(power) + " place, so its value is " +
                    digit + " \u00d7 " + power.toLocaleString() + " = " + (digit * power).toLocaleString() + "." };
    },
    exponent: function () {
      var base = randInt(2, 9), exp = randInt(2, 4);
      return { prompt: "What is the value of " + base + "^" + exp + "?",
               answer: Math.pow(base, exp),
               why: base + " multiplied by itself " + exp + " times: " +
                    new Array(exp + 1).join(base + " \u00d7 ").slice(0, -3) + " = " + Math.pow(base, exp) + "." };
    },
    squareroot: function () {
      var r = randInt(4, 20);
      return { prompt: "What number squared equals " + (r * r) + "?",
               answer: r,
               why: r + " \u00d7 " + r + " = " + (r * r) + ", so " + (r * r) + " is a perfect square." };
    },
    orderops: function () {
      var a = randInt(2, 9), b = randInt(2, 6), c = randInt(2, 9);
      var val = a + (b * b - c);
      if (val < 0) { c = 1; val = a + (b * b - c); }
      return { prompt: "Simplify:  " + a + " + (" + b + "^2 \u2212 " + c + ")",
               answer: val,
               why: "Brackets first, and inside them the exponent before the subtraction: " +
                    b + "^2 = " + (b * b) + ", then " + (b * b) + " \u2212 " + c + " = " + (b * b - c) +
                    ", then " + a + " + " + (b * b - c) + " = " + val + "." };
    },
    nextprime: function () {
      var n = randInt(8, 50), p = n + 1;
      while (!isPrimeNum(p)) p++;
      return { prompt: "What is the smallest prime number greater than " + n + "?",
               answer: p,
               why: p + " has no factors except 1 and itself." };
    },
    /* A fraction bar groups the top and the bottom. Both have to be simplified
       BEFORE dividing \u2014 the step he skipped on Homework 7. Shapes match study
       guide #43 and #44. Answers are always whole numbers; verified against an
       independent evaluator over 200,000 rounds. */
    orderopsfrac: function () {
      var a, b, c, d, e, num, den, top, bot, steps;
      do {
        if (randInt(0, 1)) {
          c = randInt(2, 9); b = c * randInt(2, 9); a = randInt(b / c + 2, 40);
          d = randInt(3, 12); e = randInt(1, d - 2);
          num = a - b / c; den = d - e;
          top = a + " \u2212 " + b + "\u00f7" + c;
          bot = d + " \u2212 " + e;
          steps = a + " \u2212 " + (b / c) + " = " + num;
        } else {
          a = randInt(5, 13); b = randInt(2, 12); c = randInt(2, 9);
          d = randInt(2, 8); e = randInt(1, 12);
          num = a * a + b * c; den = d * d + e;
          top = a + "^2 + " + b + "\u00b7" + c;
          bot = d + "^2 + " + e;
          steps = (a * a) + " + " + (b * c) + " = " + num;
        }
      } while (den <= 1 || num % den !== 0 || num / den < 2 || num / den > 40);
      return { prompt: "Simplify:  (" + top + ") \u00f7 (" + bot + ")",
               answer: num / den,
               why: "Simplify the top and the bottom BEFORE dividing. Top: " + steps +
                    ". Bottom: " + bot + " = " + den + ". Then " + num + " \u00f7 " + den +
                    " = " + (num / den) + "." };
    },

    /* --- Unit 3: multiplying and dividing decimals -------------------------
       Built off his graded work, not off the chapter's table of contents.
       Forty powers-of-ten problems across two worksheets came back essentially
       perfect, so those get the light touch. All four marks he lost were on
       decimal x decimal, and in three of the four the decimal point was in the
       RIGHT place \u2014 it was the plain multi-digit multiplication underneath
       that broke. And six of the eight long-division boxes were left blank, so
       that half has never really been tested. Every answer here is built from
       integer arithmetic and then scaled, so no floating-point dust. */

    /* Hop right, slide left. Kept easy on purpose \u2014 this is revision. */
    decpow: function () {
      var digits = randInt(11, 9999);
      var dp = randInt(1, 3);                       /* places in the start value */
      var up = randInt(0, 1);
      /* Sliding left stacks places on, so cap the answer at 4 decimal places —
         her worksheets never go past three. */
      var k = up ? randInt(1, 3) : randInt(1, Math.max(1, Math.min(3, 4 - dp)));
      var e = up ? dp - k : dp + k;                 /* places in the answer */
      var answer = e <= 0 ? digits * Math.pow(10, -e) : digits / Math.pow(10, e);
      var start  = digits / Math.pow(10, dp);
      var pow    = Math.pow(10, k);
      return {
        prompt: dec(start, dp) + (up ? " \u00d7 " : " \u00f7 ") + pow.toLocaleString(),
        answer: answer, dec: true,
        why: up
          ? "Multiplying makes it BIGGER \u2014 hop the point " + k + " place" +
            (k > 1 ? "s" : "") + " right."
          : "Dividing makes it SMALLER \u2014 slide the point " + k + " place" +
            (k > 1 ? "s" : "") + " left."
      };
    },

    /* Decimal x decimal. Two digits by two digits, which is exactly the shape
       of 0.67 x 61 and 23.4 x 3.2 \u2014 the two he actually missed. */
    decmul: function () {
      var a = randInt(12, 99), b = randInt(12, 99);
      var pa = randInt(0, 2), pb = randInt(0, 2);
      if (pa + pb === 0) pa = 1;
      if (pa + pb > 3) pb = 3 - pa;
      var raw = a * b;
      var places = pa + pb;
      return {
        prompt: dec(a / Math.pow(10, pa), pa) + " \u00d7 " + dec(b / Math.pow(10, pb), pb),
        answer: raw / Math.pow(10, places), dec: true,
        why: "Ignore the points and work out " + a + " \u00d7 " + b + " = " + raw +
             ". There are " + pa + " + " + pb + " = " + places +
             " decimal places, so count " + places + " back from the right."
      };
    },

    /* Decimal divided by a whole number \u2014 the half of the test he left blank.
       Built backwards from a clean quotient so it always comes out exactly. */
    /* Divide a decimal BY a decimal — item 3 on her study guide, and the one
       method the textbook pages never covered. Move the point in the divisor
       until it is a whole number, then move it the same number of places in the
       dividend. Built backwards from a clean quotient so it always comes out. */
    decdivdec: function () {
      var dv = randInt(2, 95);                      /* divisor digits */
      var p  = randInt(1, 2);                       /* places in the divisor */
      var qd = randInt(11, 999);                    /* quotient digits */
      var qp = randInt(0, 1);                       /* places in the quotient */
      var divisor  = dv / Math.pow(10, p);
      var quotient = qd / Math.pow(10, qp);
      var dividend = (qd * dv) / Math.pow(10, qp + p);
      return {
        prompt: dec(dividend, qp + p) + " \u00f7 " + dec(divisor, p),
        answer: quotient, dec: true,
        why: "Move the point in " + dec(divisor, p) + " " + p + " place" +
             (p > 1 ? "s" : "") + " right to make it " + dv + ", then move it " +
             p + " place" + (p > 1 ? "s" : "") + " in " + dec(dividend, qp + p) +
             " too. That turns it into " + dec(qd * dv / Math.pow(10, qp), qp) +
             " \u00f7 " + dv + " = " + dec(quotient, qp) + "."
      };
    },

    decdiv: function () {
      var d = randInt(2, 24);
      var qd = randInt(101, 999);                   /* quotient digits */
      var qp = randInt(1, 2);                       /* places in the quotient */
      var quotient = qd / Math.pow(10, qp);
      var dividend = (qd * d) / Math.pow(10, qp);
      return {
        prompt: dec(dividend, qp) + " \u00f7 " + d,
        answer: quotient, dec: true,
        why: "Put the decimal point straight up into the quotient first, then " +
             "divide as normal. " + d + " \u00d7 " + dec(quotient, qp) + " = " +
             dec(dividend, qp) + ", so it checks out."
      };
    }
  };

  /* Print a scaled integer as a decimal with a fixed number of places, with no
     floating-point tail. */
  function dec(n, places) {
    return places > 0 ? n.toFixed(places) : String(Math.round(n));
  }

  function renderNumpad(item) {
    var topics = (item.mathTopics || []).filter(function (t) { return MATH_TOPICS[t]; });
    var rounds = item.mathRound || 10;
    var deck = [];
    for (var i = 0; i < rounds; i++) {
      var t = topics[Math.floor(Math.random() * topics.length)];
      deck.push(MATH_TOPICS[t]());
    }
    var g = { deck: deck, idx: 0, right: 0, entry: "" };
    /* Whole-number topics keep the old ten-key pad. A decimal topic anywhere in
       the round adds a point key, because "5.07" cannot be typed without one. */
    var useDot = deck.some(function (p) { return p.dec; });

    /* Show what he actually typed. Number().toLocaleString() would turn a
       half-typed "5." into "5" and "0.50" into "0.5". */
    function fmtEntry(t) {
      if (t.indexOf(".") < 0) return Number(t).toLocaleString();
      var bits = t.split(".");
      return (bits[0] === "" ? "0" : Number(bits[0]).toLocaleString()) + "." + bits[1];
    }
    function fmtAnswer(n) {
      return Number(n.toFixed(6)).toLocaleString(undefined, { maximumFractionDigits: 6 });
    }

    function paint(state) {
      if (g.idx >= g.deck.length) return done();
      var p = g.deck[g.idx];
      var dots = g.deck.map(function (_, n) {
        var cls = "dot";
        if (n < g.idx) cls += " dot--hit";
        else if (n === g.idx) cls += " dot--now";
        return '<span class="' + cls + '"></span>';
      }).join("");

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<div class="scoreboard"><div class="score-side">' +
          '<span class="score-label">Right</span><span class="score-num">' + g.right + "</span></div>" +
          '<div class="score-dots">' + dots + "</div>" +
          '<div class="score-side"><span class="score-label">Of</span>' +
          '<span class="score-num">' + g.deck.length + "</span></div></div>" +
        '<div class="q"><p class="q-kicker">Problem ' + (g.idx + 1) + " of " + g.deck.length + "</p>" +
          '<p class="q-text q-text--sentence" style="text-align:center">' + esc(p.prompt) + "</p></div>" +
        '<div class="numdisplay' + (state ? " numdisplay--" + state : "") + '" id="disp">' +
          (g.entry ? esc(fmtEntry(g.entry))
                   : '<span class="numplaceholder">tap your answer</span>') + "</div>" +
        '<div class="numpad" id="pad">' +
          [1,2,3,4,5,6,7,8,9].map(function (n) {
            return '<button class="numkey" data-k="' + n + '">' + n + "</button>";
          }).join("") +
          (useDot
            ? '<button class="numkey" data-k=".">.</button>' +
              '<button class="numkey" data-k="0">0</button>' +
              '<button class="numkey numkey--wide" data-k="clear">Clear</button>' +
              '<button class="numkey numkey--go numkey--span" data-k="enter">Check</button>'
            : '<button class="numkey numkey--wide" data-k="clear">Clear</button>' +
              '<button class="numkey" data-k="0">0</button>' +
              '<button class="numkey numkey--go" data-k="enter">Check</button>') +
        "</div>" +
        '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>';

      document.getElementById("pad").addEventListener("click", function (e) {
        var b = e.target.closest(".numkey");
        if (!b || b.disabled) return;
        var k = b.dataset.k;
        if (k === "clear") { g.entry = ""; paint(); return; }
        if (k === "enter") { if (g.entry !== "" && g.entry !== ".") submit(p); return; }
        if (k === ".") {
          if (g.entry.indexOf(".") < 0) { g.entry += g.entry === "" ? "0." : "."; paint(); }
          return;
        }
        /* Rounding and place-value answers can run to eight digits, so the
           cap is sized to the longest answer this drill can ask for. */
        if (g.entry.length < 9) { g.entry += k; paint(); }
      });
    }

    function submit(p) {
      /* Compare to six decimal places so 0.920 and 0.92 both count. */
      var right = Math.round(parseFloat(g.entry) * 1e6) === Math.round(p.answer * 1e6);
      if (right) g.right++;
      var wasEntry = g.entry;
      g.entry = "";

      var pad = document.getElementById("pad");
      Array.prototype.slice.call(pad.querySelectorAll(".numkey"))
        .forEach(function (b) { b.disabled = true; });
      var disp = document.getElementById("disp");
      disp.className = "numdisplay numdisplay--" + (right ? "ok" : "no");
      disp.innerHTML = esc(fmtEntry(wasEntry)) +
        (right ? "" : ' <span class="numwas">\u2192 ' + esc(fmtAnswer(p.answer)) + "</span>");

      var v = document.getElementById("verdict");
      v.className = "verdict " + (right ? "verdict--goal" : "verdict--card");
      v.innerHTML = (right ? "Correct" : "Not quite") + "<small>" + esc(p.why) + "</small>";

      g.idx++;
      var row = document.createElement("div");
      row.className = "btn-row";
      row.innerHTML = '<button class="btn" id="nextp">' +
        (g.idx >= g.deck.length ? "See the result" : "Next problem \u2192") + "</button>";
      v.after(row);
      var nb = document.getElementById("nextp");
      nb.addEventListener("click", function () { paint(); });
      nb.focus();
    }

    function done() {
      var pct = g.right / g.deck.length;
      var rating = g.right === g.deck.length ? "Clean sheet"
                 : pct >= 0.8 ? "Player of the match"
                 : pct >= 0.6 ? "Solid 90 minutes"
                 : "Back to training";
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">' + rating + "</p>" +
          '<p class="result-score">' + g.right + "/" + g.deck.length + "</p>" +
          '<p class="result-of">Worked out, not guessed</p>' +
          '<p class="lede" style="margin:1rem auto 0">Every round is a brand new set of ' +
          "problems, so playing again is never the same twice.</p>" +
          '<div class="btn-row">' +
            '<button class="btn" id="again">New problems</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Other drills</a>' +
          "</div>" +
        "</div>";
      document.getElementById("again").addEventListener("click", function () { renderNumpad(item); });
    }

    paint();
  }

  /* ---------- Look, cover, build it: spelling without a keyboard ----------- */

  function renderSpell(item) {
    var deck = shuffle(item.spellWords || []).slice(0, item.spellRound || 10);
    var g = { idx: 0, clean: 0, misses: 0 };

    function study() {
      if (g.idx >= deck.length) return done();
      var word = deck[g.idx];
      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<p class="eyebrow">Word ' + (g.idx + 1) + " of " + deck.length + "</p>" +
        '<div class="spellword">' + esc(word) + "</div>" +
        '<p class="chant-hint">Look at it carefully. Say the letters out loud. ' +
        "When you tap below it disappears and you build it back.</p>" +
        '<div class="btn-row"><button class="btn" id="ready">Cover it up</button></div>';
      document.getElementById("ready").addEventListener("click", function () { build(word); });
    }

    function build(word) {
      var letters = word.split("");
      /* Track tiles by index so repeated letters each stay tappable. */
      var bank = shuffle(letters.map(function (ch, i) { return { ch: ch, i: i }; }));
      var placed = [];
      var wrong = 0;

      function paint(msg) {
        var slots = letters.map(function (_, n) {
          var got = placed[n] !== undefined ? bank[placed[n]].ch : null;
          return '<span class="lslot' + (got ? " lslot--filled" : "") +
            (n === placed.length ? " lslot--now" : "") + '">' + (got ? esc(got) : "") + "</span>";
        }).join("");

        app.innerHTML =
          '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
          '<p class="eyebrow">Word ' + (g.idx + 1) + " of " + deck.length + "</p>" +
          '<div class="lslots">' + slots + "</div>" +
          '<div class="ltiles" id="tiles">' +
            bank.map(function (b, n) {
              var used = placed.indexOf(n) > -1;
              return '<button class="ltile' + (used ? " ltile--used" : "") + '"' +
                (used ? " disabled" : "") + ' data-n="' + n + '">' + esc(b.ch) + "</button>";
            }).join("") +
          "</div>" +
          '<div class="verdict" id="verdict" role="status" aria-live="polite">' + (msg || "") + "</div>" +
          '<div class="btn-row">' +
            (placed.length ? '<button class="btn btn--quiet" id="undo">Undo</button>' : "") +
            '<button class="btn btn--quiet" id="peek">Show me the word</button>' +
          "</div>";

        document.getElementById("tiles").addEventListener("click", function (e) {
          var t = e.target.closest(".ltile");
          if (t && !t.disabled) tap(+t.dataset.n);
        });
        if (document.getElementById("undo"))
          document.getElementById("undo").addEventListener("click", function () {
            placed.pop(); paint("");
          });
        document.getElementById("peek").addEventListener("click", function () {
          wrong++; g.misses++;
          paint('<span class="verdict--card">It is <strong>' + esc(word) + "</strong></span>");
        });
      }

      function tap(n) {
        if (bank[n].ch === letters[placed.length]) {
          placed.push(n);
          if (placed.length === letters.length) return won();
          paint("");
        } else {
          wrong++; g.misses++;
          paint('<span class="verdict--card">Not that letter next</span>');
        }
      }

      function won() {
        if (wrong === 0) g.clean++;
        app.innerHTML =
          '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
          '<p class="eyebrow">Word ' + (g.idx + 1) + " of " + deck.length + "</p>" +
          '<div class="spellword spellword--done">' + esc(word) + "</div>" +
          '<div class="verdict verdict--goal">' +
            (wrong === 0 ? "Spelled it first time" : "Got there \u2014 run this one again later") +
          "</div>" +
          '<div class="btn-row"><button class="btn" id="next">' +
            (g.idx + 1 >= deck.length ? "See the result" : "Next word \u2192") + "</button></div>";
        g.idx++;
        var b = document.getElementById("next");
        b.addEventListener("click", study);
        b.focus();
      }

      paint("");
    }

    function done() {
      var rating = g.clean === deck.length ? "Clean sheet"
                 : g.clean >= deck.length * 0.7 ? "Nearly there"
                 : "Back to training";
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">' + rating + "</p>" +
          '<p class="result-score">' + g.clean + "/" + deck.length + "</p>" +
          '<p class="result-of">Spelled right first time</p>' +
          '<p class="lede" style="margin:1rem auto 0">' +
            (g.clean === deck.length
              ? "Every one first time. Play again for a different ten."
              : "Play again \u2014 it deals a different ten from the list of " +
                (item.spellWords || []).length + ".") + "</p>" +
          '<div class="btn-row">' +
            '<button class="btn" id="again">Play again</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Other drills</a>' +
          "</div>" +
        "</div>";
      document.getElementById("again").addEventListener("click", function () { renderSpell(item); });
    }

    study();
  }

  /* ---------- Match Day: a game layered over the same questions ------------ */

  /* Fast single-tap questions only \u2014 the game needs momentum, so the
     two-stage and mark-all formats sit this one out. */
  function gamePool(item) {
    /* When the teacher has flagged her own material, the game plays only that.
       Otherwise it draws on everything the item holds. */
    var keyed = hasKeyMaterial(item);
    var words = (item.words || []).filter(function (w) { return keyed ? w.key : true; });
    var qs = (item.questions || []).filter(function (q) {
      return (q.kind === "tf" || q.kind === "mc" || q.kind === "multi") && (keyed ? q.key : true);
    });

    var pool = qs.map(function (q) {
      return { kind: q.kind, prompt: q.prompt, options: q.options,
               answer: q.answer, answers: q.answers, why: q.why, longOptions: q.longOptions };
    });

    if (words.length > 3) {
      var names = words.map(function (w) { return w.word; });
      pool = pool.concat(words.map(function (w) {
        return { kind: "mc", prompt: w.meaning,
                 options: shuffle(sample(names, 3, w.word).concat([w.word])),
                 answer: w.word, why: "" };
      }));
    }
    return shuffle(pool).slice(0, item.matchLength || 10);
  }


  /* Mystery-box prizes. Jerseys are plain shirts in a player's usual national
     team colours with his name and number; no crests or logos. */
  var MATCH_JERSEYS = [
    { name: "MESSI", num: 10, team: "Argentina", body: "#75AADB", trim: "#FFFFFF", ink: "#1B2A4A", stripes: true },
    { name: "RONALDO", num: 7, team: "Portugal", body: "#C8102E", trim: "#046A38", ink: "#FFFFFF" },
    { name: "MBAPP\u00C9", num: 10, team: "France", body: "#1E2A78", trim: "#ED2939", ink: "#FFFFFF" },
    { name: "HAALAND", num: 9, team: "Norway", body: "#BA0C2F", trim: "#00205B", ink: "#FFFFFF" },
    { name: "KANE", num: 9, team: "England", body: "#FFFFFF", trim: "#1D2B5E", ink: "#1D2B5E" },
    { name: "PULISIC", num: 10, team: "USA", body: "#FFFFFF", trim: "#B22234", ink: "#0A3161" },
    { name: "SALAH", num: 10, team: "Egypt", body: "#CE1126", trim: "#000000", ink: "#FFFFFF" },
    { name: "YAMAL", num: 19, team: "Spain", body: "#AA151B", trim: "#F1BF00", ink: "#F1BF00" },
    { name: "VIN\u00CDCIUS JR", num: 7, team: "Brazil", body: "#FEDD00", trim: "#009C3B", ink: "#002776" },
    { name: "BELLINGHAM", num: 10, team: "England", body: "#FFFFFF", trim: "#1D2B5E", ink: "#1D2B5E" }
  ];

  var MATCH_JOKES = [
    ["Why did the soccer ball quit the team?", "It was tired of being kicked around."],
    ["Why can\u2019t Cinderella play soccer?", "She always runs away from the ball."],
    ["What do you call a pig who plays soccer?", "A ball hog."],
    ["Why did the goalie bring string to the game?", "To tie up the score."],
    ["What\u2019s a goalie\u2019s favourite snack?", "Butter fingers. (Hopefully not during the game.)"],
    ["Why are soccer players good at math?", "They know how to use their heads."],
    ["What did the soccer ball say to the player?", "I get a kick out of you."],
    ["Where do soccer players dance?", "At a foot-ball."]
  ];

  function jerseySvg(j, size) {
    var stripes = j.stripes
      ? '<rect x="42" y="18" width="10" height="82" fill="#FFFFFF"/><rect x="68" y="18" width="10" height="82" fill="#FFFFFF"/>' : "";
    var nm = j.name.length > 8 ? 9 : 12;
    return '<svg viewBox="0 0 120 110" width="' + size + '" height="' + Math.round(size * 110 / 120) + '" aria-hidden="true">' +
      '<path d="M38 8 L22 14 L4 34 L18 48 L28 40 L28 104 L92 104 L92 40 L102 48 L116 34 L98 14 L82 8 Q60 22 38 8 Z" ' +
        'fill="' + j.body + '" stroke="' + j.trim + '" stroke-width="4" stroke-linejoin="round"/>' + stripes +
      '<path d="M38 8 Q60 22 82 8" fill="none" stroke="' + j.trim + '" stroke-width="5"/>' +
      '<text x="60" y="52" text-anchor="middle" font-size="' + nm + '" font-weight="800" fill="' + j.ink + '" font-family="inherit">' + j.name + "</text>" +
      '<text x="60" y="92" text-anchor="middle" font-size="36" font-weight="900" fill="' + j.ink + '" font-family="inherit">' + j.num + "</text>" +
      "</svg>";
  }

  (function addBoxStyles() {
    if (document.getElementById("mbox-css")) return;
    var st = document.createElement("style");
    st.id = "mbox-css";
    st.textContent =
      "@keyframes mboxWiggle{0%,100%{transform:rotate(0)}20%{transform:rotate(-6deg)}40%{transform:rotate(6deg)}60%{transform:rotate(-3deg)}80%{transform:rotate(0)}}" +
      "@keyframes mboxParty{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-14px) scale(1.12)}}" +
      "@media (prefers-reduced-motion: reduce){.mbox{animation:none!important}}";
    document.head.appendChild(st);
  })();

  var GOAL_SPOTS = [
    { id: "left",   label: "Bottom left" },
    { id: "middle", label: "Down the middle" },
    { id: "right",  label: "Top right" }
  ];

  function renderMatch(item) {
    var rival = item.rival || "The Rivals";
    var g = { deck: gamePool(item), idx: 0, us: 0, them: 0, streak: 0, best: 0, jerseys: [] };

    function board(extra) {
      var minute = Math.min(90, Math.round((g.idx / Math.max(g.deck.length, 1)) * 90));
      return '<div class="scoreboard match-board">' +
        '<div class="score-side"><span class="score-label">Knox FC</span>' +
          '<span class="score-num">' + g.us + "</span></div>" +
        '<div class="match-clock"><span class="match-min">' + minute + "\u2032</span>" +
          (g.streak > 1 ? '<span class="streak">' + g.streak + " in a row</span>" : "") + "</div>" +
        '<div class="score-side"><span class="score-label">' + esc(rival) + "</span>" +
          '<span class="score-num score-num--miss">' + g.them + "</span></div>" +
        "</div>" + (extra || "");
    }

    function kickoff() {
      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the match</a>' +
        '<div class="result">' +
          '<p class="eyebrow">Match Day</p>' +
          '<p class="result-rating">Knox FC<br>v<br>' + esc(rival) + "</p>" +
          '<p class="lede" style="margin:1rem auto">' + g.deck.length + " questions. Get one right and you " +
          "get a shot on goal. A crosshair sweeps the goal \u2014 stop it where you want " +
          "the ball. The corners beat the keeper, but the posts don't. " +
          "Three right in a row and he dives early.</p>" +
          '<div class="btn-row"><button class="btn" id="ko">Kick off</button></div>' +
        "</div>";
      document.getElementById("ko").addEventListener("click", question);
    }

    function question() {
      if (g.idx >= g.deck.length) return fullTime();
      var q = g.deck[g.idx];
      var opts = q.kind === "tf"
        ? [{ v: "true", t: "True" }, { v: "false", t: "False" }]
        : shuffle(q.options).map(function (o) { return { v: o, t: o }; });

      var isMulti = q.kind === "multi";
      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the match</a>' +
        board() +
        '<div class="q"><p class="q-kicker">Question ' + (g.idx + 1) + " of " + g.deck.length +
          (isMulti ? " \u00b7 pick " + q.answers.length : "") + "</p>" +
          '<p class="q-text q-text--sentence" style="text-align:center">' + esc(q.prompt) + "</p></div>" +
        '<div class="answers' + (q.kind !== "tf" ? " answers--long" : "") + '" id="answers">' +
          opts.map(function (o) {
            return '<button class="answer" data-v="' + esc(o.v) + '"' +
              (isMulti ? ' aria-pressed="false"' : "") + ">" + esc(o.t) + "</button>";
          }).join("") + "</div>" +
        (isMulti ? '<div class="btn-row"><button class="btn" id="lock" disabled>Lock it in</button></div>' : "") +
        '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>';

      /* Pick-several questions: he toggles choices, then locks them in. It
         only counts if the set is exactly right, same as on her tests. */
      if (isMulti) {
        var chosen = {};
        var lock = document.getElementById("lock");
        document.getElementById("answers").addEventListener("click", function (e) {
          var btn = e.target.closest(".answer");
          if (!btn || btn.disabled) return;
          var v = btn.dataset.v;
          if (chosen[v]) delete chosen[v]; else chosen[v] = true;
          btn.setAttribute("aria-pressed", chosen[v] ? "true" : "false");
          btn.style.outline = chosen[v] ? "4px solid var(--flag)" : "";
          lock.disabled = !Object.keys(chosen).length;
        });
        lock.addEventListener("click", function () {
          var buttons = Array.prototype.slice.call(document.querySelectorAll(".answer"));
          buttons.forEach(function (b) { b.disabled = true; b.style.outline = ""; });
          lock.parentNode.remove();
          var picks = Object.keys(chosen);
          var right = picks.length === q.answers.length &&
                      picks.every(function (p) { return q.answers.indexOf(p) > -1; });
          buttons.forEach(function (b) {
            var good = q.answers.indexOf(b.dataset.v) > -1;
            b.classList.add(good ? "answer--right" : chosen[b.dataset.v] ? "answer--wrong" : "answer--dim");
          });
          if (right) {
            g.streak++;
            if (g.streak > g.best) g.best = g.streak;
            setVerdict("verdict--goal", "Through on goal!", q.why);
            nextButton(g.streak >= 3 ? "Take the power shot" : "Take your shot", shoot);
          } else {
            g.streak = 0;
            setVerdict("verdict--card", "Lost the ball", "You need all " + q.answers.length + ". " + (q.why || ""));
            nextButton(esc(rival) + " break away \u2192", defend);
          }
        });
        return;
      }

      document.getElementById("answers").addEventListener("click", function (e) {
        var btn = e.target.closest(".answer");
        if (!btn || btn.disabled) return;
        var buttons = Array.prototype.slice.call(document.querySelectorAll(".answer"));
        buttons.forEach(function (b) { b.disabled = true; });

        var want = q.kind === "tf" ? String(q.answer) : q.answer;
        var right = btn.dataset.v === want;
        buttons.forEach(function (b) {
          if (b.dataset.v === want) b.classList.add("answer--right");
          else b.classList.add(b === btn ? "answer--wrong" : "answer--dim");
        });

        if (right) {
          g.streak++;
          if (g.streak > g.best) g.best = g.streak;
          setVerdict("verdict--goal", "Through on goal!", q.why);
          nextButton(g.streak >= 3 ? "Take the power shot" : "Take your shot", shoot);
        } else {
          g.streak = 0;
          setVerdict("verdict--card", "Lost the ball", q.why);
          nextButton(esc(rival) + " break away \u2192", defend);
        }
      });
    }

    /* The scoreboard is drawn once per screen, so it has to be refreshed
       explicitly when a goal goes in mid-screen. */
    function syncBoard() {
      var el = document.querySelector(".match-board");
      if (el) el.outerHTML = board();
    }

    function setVerdict(cls, head, why) {
      var v = document.getElementById("verdict");
      v.className = "verdict " + cls;
      v.innerHTML = head + (why ? "<small>" + esc(why) + "</small>" : "");
    }

    function nextButton(label, fn) {
      var row = document.createElement("div");
      row.className = "btn-row";
      row.innerHTML = '<button class="btn" id="go">' + label + "</button>";
      document.getElementById("verdict").after(row);
      var b = document.getElementById("go");
      b.addEventListener("click", fn);
      b.focus();
    }

    /* A shot he can actually miss.

       The old version was three buttons and a coin flip, which is exactly the
       thing he said was lame. Now a crosshair sweeps across the goal and he
       stops it where he wants the ball. Near the posts the keeper cannot reach
       \u2014 but too near and it comes back off the woodwork, so aiming is a real
       decision. The keeper dives late and short on a power shot rather than
       being removed from the game. Nothing about this is guaranteed to go in. */
    var GOAL_L = 56, GOAL_R = 284, GOAL_MID = 170, AIM_Y = 96, BALL_Y = 190;

    function shoot() {
      var power = g.streak >= 3;
      var aimX = GOAL_MID, dir = 1, running = true, fired = false;
      var speed = power ? 132 : 168;          /* px per second */

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the match</a>' +
        board() +
        '<div class="q"><p class="q-kicker">' +
          (power ? "Three in a row \u2014 the keeper is going early" : "Shot on goal") + "</p>" +
          '<p class="q-text">Stop the crosshair where you want it.</p></div>' +
        '<div class="shootwrap">' + goalSvg() + "</div>" +
        '<p class="shoot-hint" id="hint">Corners beat the keeper \u00b7 <b>the posts don\'t</b></p>' +
        '<div class="btn-row"><button class="btn" id="fire">Shoot</button></div>' +
        '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>';

      var svg    = document.getElementById("shootsvg");
      var aimG   = document.getElementById("aim");
      var ballG  = document.getElementById("ball");
      var keepG  = document.getElementById("keeper");
      var fireBtn = document.getElementById("fire");

      var last = null;
      function sweep(ts) {
        if (!running || !document.body.contains(svg)) return;
        if (last !== null) {
          aimX += dir * speed * (ts - last) / 1000;
          if (aimX >= GOAL_R) { aimX = GOAL_R; dir = -1; }
          if (aimX <= GOAL_L) { aimX = GOAL_L; dir = 1; }
          aimG.setAttribute("transform", "translate(" + (aimX - GOAL_MID) + ",0)");
        }
        last = ts;
        requestAnimationFrame(sweep);
      }
      requestAnimationFrame(sweep);

      fireBtn.addEventListener("click", function () {
        if (fired) return;
        fired = true; running = false;
        fireBtn.disabled = true;
        aimG.style.opacity = ".35";
        document.getElementById("hint").textContent = "";

        /* Keeper picks a side. Triangular spread, so the middle is the most
           likely guess and the corners are genuinely the better bet. */
        var keeperX = GOAL_MID + (Math.random() + Math.random() - 1) * 116;
        var reach   = power ? 26 : 42;
        var post    = aimX < GOAL_L + 7 || aimX > GOAL_R - 7;
        var saved   = !post && Math.abs(aimX - keeperX) < reach;

        var t0 = null, DUR = 430;
        function fly(ts) {
          if (t0 === null) t0 = ts;
          var p = Math.min(1, (ts - t0) / DUR);
          var e = 1 - Math.pow(1 - p, 2);
          ballG.setAttribute("transform",
            "translate(" + (GOAL_MID + (aimX - GOAL_MID) * e) + "," +
                           (BALL_Y + (AIM_Y - BALL_Y) * e) + ") scale(" + (1 - .25 * e) + ")");
          keepG.setAttribute("transform",
            "translate(" + ((keeperX - GOAL_MID) * Math.min(1, e * 1.15)) + ",0)");
          if (p < 1) return requestAnimationFrame(fly);
          land();
        }
        requestAnimationFrame(fly);

        function land() {
          if (post) {
            ballG.setAttribute("transform",
              "translate(" + (aimX < GOAL_MID ? GOAL_L + 26 : GOAL_R - 26) + "," +
                             (AIM_Y + 34) + ") scale(.85)");
          }
          if (!post && !saved) { g.us++; syncBoard(); }
          setVerdict(
            (!post && !saved) ? "verdict--goal" : "verdict--card",
            post  ? "Off the post!"
                  : saved ? "Saved \u2014 he got a hand to it"
                          : (power ? "GOAL \u2014 he went early and you went the other way!" : "GOAL!"),
            post  ? "Nearly. A few inches further in and the keeper had no chance."
                  : saved ? "He guessed your side. Try further into the corner next time."
                          : "Right into the corner. He was never getting there.");
          g.idx++;
          nextButton(g.idx >= g.deck.length ? "Full time" : boxDue() ? "Mystery box! \u2192" : "Play on \u2192", playOn);
        }
      });
    }

    /* Goal, net, keeper, ball, crosshair \u2014 all one inline SVG. */
    function goalSvg() {
      var net = "";
      for (var x = 62; x < GOAL_R; x += 13)
        net += '<line x1="' + x + '" y1="40" x2="' + x + '" y2="150" stroke="#fff" stroke-opacity=".3" stroke-width="1"/>';
      for (var y = 51; y < 150; y += 13)
        net += '<line x1="50" y1="' + y + '" x2="290" y2="' + y + '" stroke="#fff" stroke-opacity=".3" stroke-width="1"/>';
      return '<svg class="shootsvg" id="shootsvg" viewBox="0 0 340 210" ' +
        'xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Goal, keeper and ball">' +
        '<rect x="50" y="40" width="240" height="110" fill="#12241A" fill-opacity=".14"/>' + net +
        /* frame */
        '<path d="M50 152 V38 H290 V152" fill="none" stroke="#fff" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>' +
        /* six-yard box + spot */
        '<path d="M18 186 H322" stroke="#fff" stroke-opacity=".5" stroke-width="3"/>' +
        /* keeper */
        '<g id="keeper">' +
          '<rect x="' + (GOAL_MID - 15) + '" y="112" width="30" height="40" rx="6" fill="#F4A22B" stroke="#12241A" stroke-width="2.5"/>' +
          '<circle cx="' + GOAL_MID + '" cy="104" r="9" fill="#F4D7B0" stroke="#12241A" stroke-width="2.5"/>' +
          '<path d="M' + (GOAL_MID - 15) + ' 120 l-13 -9 M' + (GOAL_MID + 15) + ' 120 l13 -9" ' +
            'stroke="#12241A" stroke-width="4" stroke-linecap="round"/>' +
        "</g>" +
        /* crosshair */
        '<g id="aim">' +
          '<line x1="' + GOAL_MID + '" y1="44" x2="' + GOAL_MID + '" y2="148" stroke="#E8641A" stroke-width="2" stroke-dasharray="5 4"/>' +
          '<circle cx="' + GOAL_MID + '" cy="' + AIM_Y + '" r="11" fill="none" stroke="#E8641A" stroke-width="3"/>' +
          '<circle cx="' + GOAL_MID + '" cy="' + AIM_Y + '" r="2.5" fill="#E8641A"/>' +
        "</g>" +
        /* ball */
        '<g id="ball" transform="translate(' + GOAL_MID + "," + BALL_Y + ')">' +
          '<circle r="9" fill="#fff" stroke="#12241A" stroke-width="2.5"/>' +
          '<path d="M0 -5 l4.8 3.5 -1.8 5.6 h-6 l-1.8 -5.6 Z" fill="#12241A"/>' +
        "</g>" +
        "</svg>";
    }

    function defend() {
      var conceded = Math.random() < 0.45;
      if (conceded) g.them++;
      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the match</a>' +
        board() +
        '<div class="q"><p class="q-kicker">' + esc(rival) + " on the counter</p>" +
          '<p class="q-text">' + (conceded ? "They score." : "Off the post! You get away with it.") + "</p></div>" +
        '<div class="verdict verdict--' + (conceded ? "card" : "goal") + '" id="verdict">' +
          (conceded ? "1\u20130 to them from that move" : "Let off the hook") +
        "</div>";
      g.idx++;
      nextButton(g.idx >= g.deck.length ? "Full time" : boxDue() ? "Mystery box! \u2192" : "Play on \u2192", playOn);
    }


    /* ---- Mystery box: every third question he picks one of three boxes.
       Prizes are mostly for fun: a top player's jersey for his locker, a
       bonus goal, a joke, or a goal celebration. Jerseys only last for this
       match (nothing is saved), and the locker shows at full time. */
    function boxDue() { return g.idx > 0 && g.idx < g.deck.length && g.idx % 3 === 0 && g.boxAt !== g.idx; }
    function playOn() { if (boxDue()) mysteryBox(); else question(); }

    function prizeDeck() {
      var left = MATCH_JERSEYS.filter(function (j) {
        return !g.jerseys.some(function (h) { return h.name === j.name; });
      });
      var bag = [];
      for (var k = 0; k < 3; k++) {
        var r = Math.random();
        if (r < 0.45 && left.length) {
          var j = left.splice(Math.floor(Math.random() * left.length), 1)[0];
          bag.push({ kind: "jersey", jersey: j });
        } else if (r < 0.65) bag.push({ kind: "goal" });
        else if (r < 0.85) bag.push({ kind: "joke", joke: MATCH_JOKES[Math.floor(Math.random() * MATCH_JOKES.length)] });
        else bag.push({ kind: "party" });
      }
      return bag;
    }

    function prizeHtml(p, big) {
      if (p.kind === "jersey") return jerseySvg(p.jersey, big ? 150 : 70) +
        '<div style="font-weight:800;font-size:' + (big ? "1.3rem" : ".85rem") + '">' + esc(p.jersey.name) + " #" + p.jersey.num + "</div>" +
        (big ? '<div style="opacity:.75">' + esc(p.jersey.team) + "</div>" : "");
      if (p.kind === "goal") return '<div style="font-size:' + (big ? "3.2rem" : "1.8rem") + '">\u26BD</div>' +
        '<div style="font-weight:800;font-size:' + (big ? "1.3rem" : ".85rem") + '">Bonus goal!</div>';
      if (p.kind === "joke") return '<div style="font-size:' + (big ? "3.2rem" : "1.8rem") + '">\uD83D\uDE02</div>' +
        (big ? '<div style="font-weight:700;font-size:1.15rem;max-width:30ch;margin:0 auto">' + esc(p.joke[0]) +
               '</div><div style="margin-top:.6rem;font-size:1.15rem">' + esc(p.joke[1]) + "</div>"
             : '<div style="font-weight:800;font-size:.85rem">A joke</div>');
      return '<div style="font-size:' + (big ? "3.2rem" : "1.8rem") + '">\uD83C\uDF89</div>' +
        '<div style="font-weight:800;font-size:' + (big ? "1.3rem" : ".85rem") + '">' + (big ? "Knee slide celebration!" : "Celebration") + "</div>";
    }

    function mysteryBox() {
      g.boxAt = g.idx;            /* one box per stop, however he gets here */
      var bag = prizeDeck();
      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the match</a>' + board() +
        '<div class="q"><p class="q-kicker">Mystery box</p>' +
          '<p class="q-text">Pick a box. Any box.</p></div>' +
        '<div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin:1rem 0" id="boxes">' +
          [0, 1, 2].map(function (k) {
            return '<button class="answer mbox" data-k="' + k + '" style="width:110px;height:120px;font-size:3rem;' +
              'display:flex;flex-direction:column;align-items:center;justify-content:center;transition:transform .15s">' +
              '\uD83C\uDF81<span style="font-size:1rem;font-weight:800">?</span></button>';
          }).join("") + "</div>" +
        '<div id="prize" role="status" aria-live="polite"></div>';
      Array.prototype.forEach.call(document.querySelectorAll(".mbox"), function (b, k) {
        b.style.animation = "mboxWiggle 1.4s ease-in-out " + (k * 0.2) + "s infinite";
      });
      document.getElementById("boxes").addEventListener("click", function (e) {
        var b = e.target.closest(".mbox");
        if (!b || b.disabled) return;
        var k = +b.dataset.k, p = bag[k];
        Array.prototype.forEach.call(document.querySelectorAll(".mbox"), function (x, i) {
          x.disabled = true; x.style.animation = "none";
          x.innerHTML = '<div style="transform:scale(.9)">' + prizeHtml(bag[i], false) + "</div>";
          if (i !== k) x.classList.add("answer--dim"); else x.classList.add("answer--right");
          x.style.fontSize = "1rem";
        });
        var head = p.kind === "jersey" ? "Jersey unlocked!" : p.kind === "goal" ? "Free goal for Knox FC!"
                 : p.kind === "joke" ? "Halftime joke" : "GOOOAL celebration!";
        if (p.kind === "jersey") g.jerseys.push(p.jersey);
        if (p.kind === "goal") { g.us++; syncBoard(); }
        document.getElementById("prize").innerHTML =
          '<div class="verdict verdict--goal" id="verdict" style="text-align:center">' + head +
            '<div style="margin-top:.8rem' + (p.kind === "party" ? ";animation:mboxParty .6s ease-in-out 4" : "") + '">' +
            prizeHtml(p, true) + "</div>" +
            (p.kind === "party" ? '<div aria-hidden="true" style="font-size:2rem;letter-spacing:.4rem;animation:mboxParty .5s ease-in-out 6">\u26BD\uD83C\uDF89\u26BD\uD83C\uDF89\u26BD</div>' : "") +
          "</div>";
        nextButton("Back to the match \u2192", question);
      });
    }

    function fullTime() {
      var result = g.us > g.them ? "Win" : g.us === g.them ? "Draw" : "Loss";
      var line = g.us > g.them
        ? "Three points. Run it back and try to keep a clean sheet."
        : g.us === g.them
          ? "A point on the road. Answer two more right next time and it is a win."
          : "Rough one. The questions you missed are the goals they got.";
      app.innerHTML =
        '<div class="result">' +
          '<p class="eyebrow">Full time</p>' +
          '<p class="result-rating">' + result + "</p>" +
          '<p class="result-score">' + g.us + " \u2013 " + g.them + "</p>" +
          '<p class="result-of">Knox FC v ' + esc(rival) + "</p>" +
          '<p class="lede" style="margin:1rem auto 0">Best streak: ' + g.best + ". " + line + "</p>" +
          (g.jerseys.length
            ? '<p class="eyebrow" style="margin-top:1.4rem">Jersey locker · ' + g.jerseys.length + " collected</p>" +
              '<div style="display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">' +
                g.jerseys.map(function (j) {
                  return '<div style="text-align:center">' + jerseySvg(j, 64) +
                    '<div style="font-size:.8rem;font-weight:800">' + esc(j.name) + "</div></div>";
                }).join("") + "</div>"
            : "") +
          '<div class="btn-row">' +
            '<button class="btn" id="again">Play again</button>' +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '">Back to drills</a>' +
          "</div>" +
        "</div>";
      document.getElementById("again").addEventListener("click", function () {
        renderMatch(item);
      });
    }

    kickoff();
  }

  /* ---------- mixed question sets (true/false, choice, mark-all) ----------- */

  function renderQuestionSet(item, drillId) {
    if (drillId === "rootword") return renderRootWord(item);
    if (drillId === "maplabel") return renderMapLabel(item);
    if (drillId === "maptype") return renderMapLabel(item, true);
    if (drillId === "exact") return renderExact(item);
    if (drillId === "solvex") return renderSolveX(item);
    if (drillId === "decide") return renderDecide(item);
    if (drillId === "divis") return renderDivisibility(item);
    if (drillId === "numpad") return renderNumpad(item);
    if (drillId === "spell") return renderSpell(item);
    if (drillId === "match") return renderMatch(item);
    if (drillId === "keyonly") return runDeck(item, drillId, keyDeck(item));
    var pool = item.questions.filter(function (q) {
      if (drillId === "tfonly") return q.kind === "tf";
      if (drillId === "mconly") return q.kind === "mc";
      if (drillId === "multionly") return q.kind === "multi";
      if (drillId === "corronly") return q.kind === "correct";
      return true;
    });

    /* Keep true/false and mark-all in book order so the wording stays varied;
       shuffle the multiple choice so it is not the same run every time. */
    var deck = drillId === "mconly" ? shuffle(pool).slice(0, 12)
             : drillId === "mixed"  ? pool
             : pool;
    return runDeck(item, drillId, deck);
  }

  function runDeck(item, drillId, deck) {
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
                 : q.kind === "correct" ? "True? Or does the underlined word need fixing?"
                 : "Pick the right answer";

      var body;
      if (q.kind === "correct") {
        body = '<div class="answers" id="answers">' +
          '<button class="answer" data-v="true">True</button>' +
          '<button class="answer" data-v="false">False \u2014 needs fixing</button></div>';
      } else if (q.kind === "tf") {
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
          '<p class="q-text q-text--sentence" style="text-align:center">' +
            (q.kind === "correct" ? underlineWord(q.prompt, q.underlined) : esc(q.prompt)) +
          "</p></div>" +
        body +
        '<div class="verdict" id="verdict" role="status" aria-live="polite"></div>';

      if (q.kind === "multi") wireMulti(q);
      else if (q.kind === "correct") wireCorrect(q);
      else wireSingle(q);
    }

    /* Underline just the word being tested, leaving the rest escaped. */
    function underlineWord(text, word) {
      var i = word ? text.indexOf(word) : -1;
      if (i < 0) return esc(text);
      return esc(text.slice(0, i)) +
        '<span class="ul">' + esc(word) + "</span>" +
        esc(text.slice(i + word.length));
    }

    function wireCorrect(q) {
      document.getElementById("answers").addEventListener("click", function (e) {
        var btn = e.target.closest(".answer");
        if (!btn || btn.disabled) return;
        var buttons = Array.prototype.slice.call(document.querySelectorAll(".answer"));
        buttons.forEach(function (b) { b.disabled = true; });

        var saidTrue = btn.dataset.v === "true";
        var stageOneRight = saidTrue === (q.answer === true);
        var correctVal = String(q.answer);
        buttons.forEach(function (b) {
          if (b.dataset.v === correctVal) b.classList.add("answer--right");
          else b.classList.add(b === btn ? "answer--wrong" : "answer--dim");
        });

        /* A true statement is finished here. A false one still needs the fix. */
        if (q.answer === true || !stageOneRight) {
          var note = q.answer === true ? "" : "It was false. The word should be ";
          var v0 = document.getElementById("verdict");
          v0.className = "verdict " + (stageOneRight ? "verdict--goal" : "verdict--card");
          v0.innerHTML = (stageOneRight ? "Goal!" : "Yellow card") +
            "<small>" + (note ? esc(note) + "<strong>" + esc(q.correction) + "</strong>. " : "") +
            esc(q.why || "") + "</small>";
          finishOne(stageOneRight, q);
          return;
        }

        /* He spotted the false one. Now make him supply the correction. */
        var opts = shuffle(q.options.slice());
        var box = document.createElement("div");
        box.innerHTML =
          '<p class="chant-hint">Right \u2014 it is false. Now pick the word that belongs.</p>' +
          '<div class="answers answers--long" id="fixes">' +
            opts.map(function (o) {
              return '<button class="answer" data-v="' + esc(o) + '">' + esc(o) + "</button>";
            }).join("") + "</div>";
        document.getElementById("answers").after(box);

        document.getElementById("fixes").addEventListener("click", function (ev) {
          var fb = ev.target.closest(".answer");
          if (!fb || fb.disabled) return;
          var fixes = Array.prototype.slice.call(document.querySelectorAll("#fixes .answer"));
          fixes.forEach(function (b) { b.disabled = true; });
          var ok = fb.dataset.v === q.correction;
          fixes.forEach(function (b) {
            if (b.dataset.v === q.correction) b.classList.add("answer--right");
            else b.classList.add(b === fb ? "answer--wrong" : "answer--dim");
          });
          var v = document.getElementById("verdict");
          v.className = "verdict " + (ok ? "verdict--goal" : "verdict--card");
          v.innerHTML = (ok ? "Goal! Both halves right." : "Half credit \u2014 you spotted it but the fix was wrong") +
            "<small>The word should be <strong>" + esc(q.correction) + "</strong>. " + esc(q.why || "") + "</small>";
          finishOne(ok, q);
        });
      });
    }

    /* Shared tail: record the result and draw the Next button. */
    function finishOne(right, q) {
      g.results.push(right);
      if (right) g.goals++; else { g.misses++; g.missed.push(q); }
      g.idx++;
      var last = g.idx >= g.deck.length;
      var row = document.createElement("div");
      row.className = "btn-row";
      row.innerHTML = '<button class="btn" id="nextq">' +
        (last ? "See the result" : "Next \u2192") + "</button>";
      document.getElementById("verdict").after(row);
      var nb = document.getElementById("nextq");
      nb.addEventListener("click", paint);
      nb.focus();
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

  /* A single memory verse fits in one box. A passage does not — 123 words of
     John 15 as one bank of scrambled chips is unusable, and 123 blanks in a row
     teaches nothing. An optional `lines` list splits a passage into verse-sized
     pieces, and the fade and order drills work through them one at a time. */
  function verseChunks(item) {
    return (item.lines && item.lines.length) ? item.lines.slice() : [item.text];
  }

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
    /* One verse: say the whole thing five times. A passage: three times through
       each piece, then three times through the lot. Saying 123 words five times
       before you have any of it is how a kid gives up. */
    var chunks = verseChunks(item);
    var many = chunks.length > 1;
    var stages = many
      ? chunks.map(function (c, n) {
          return { text: c, need: 3, label: "Part " + (n + 1) + " of " + chunks.length };
        }).concat([{ text: item.text, need: 3, label: "All of it together", whole: true }])
      : [{ text: item.text, need: 5, label: "" }];
    var at = 0, reps = 0;

    function paint() {
      var st = stages[at];
      var big = st.text.split(/\s+/).length > 45;
      var done = reps >= st.need;
      var last = at + 1 >= stages.length;

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<p class="eyebrow">' + esc(verseRef(item)) +
          (st.label ? " \u00b7 " + esc(st.label) : "") + "</p>" +
        '<div class="verse"' +
          (big ? ' style="font-size:1.02rem;line-height:1.55;text-align:left;padding:1.1rem"' : "") +
          '><span class="verse-line">' + esc(st.text) + "</span></div>" +
        '<p class="chant-hint">' +
          (st.whole ? "Now the whole passage, out loud, start to finish."
                    : many ? "Say this part out loud, then tap."
                           : "Say the whole verse out loud, then tap. Five times and it starts to stick.") +
        "</p>" +
        '<div class="btn-row">' +
          '<button class="btn" id="rep"' + (done ? " disabled" : "") + '>Said it (' +
            reps + " of " + st.need + ")</button>" +
          (done && !last ? '<button class="btn" id="on">Next part \u2192</button>' : "") +
          (done && last ? '<a class="btn btn--quiet" href="#/i/' + item.id +
            '/fade">Now fade it out \u2192</a>' : "") +
        "</div>";

      document.getElementById("rep").addEventListener("click", function () {
        if (reps < st.need) reps++;
        paint();
      });
      if (document.getElementById("on"))
        document.getElementById("on").addEventListener("click", function () {
          at++; reps = 0; paint();
        });
    }
    paint();
  }

  function renderVerseFade(item) {
    var chunks = verseChunks(item);
    var cards = [];
    chunks.forEach(function (chunk, n) {
      var words = chunk.split(/\s+/).filter(Boolean);
      var tag = chunks.length > 1 ? " \u00b7 " + (n + 1) + " of " + chunks.length : "";
      var blanks = words.map(function (w) {
        return '<span class="masked">' + new Array(Math.max(w.length, 2)).join("\u00b7") + "</span>";
      }).join(" ");
      cards.push({ prompt: esc(chunk), answer: chunk, label: "Every word in front of you" + tag });
      cards.push({ prompt: words.map(wordSkeleton).join(" "), answer: chunk, label: "First letters only" + tag });
      cards.push({ prompt: blanks, answer: chunk, label: "Nothing but blanks" + tag });
    });
    renderSelfCheck(item, cards, "fade");
  }

  function renderVerseOrder(item, part) {
    var chunks = verseChunks(item);
    var at = part || 0;
    var chunk = chunks[at];
    var words = chunk.split(/\s+/).filter(Boolean);
    var bank = shuffle(words.map(function (w, i) { return { w: w, i: i }; }));
    var placed = [];   /* indexes into bank, in tap order */

    function paint(msg) {
      var built = placed.map(function (b) { return esc(bank[b].w); }).join(" ");

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<p class="eyebrow">' + esc(verseRef(item)) +
          (chunks.length > 1 ? " \u00b7 part " + (at + 1) + " of " + chunks.length : "") + "</p>" +
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
        renderVerseOrder(item, at);
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
      var more = at + 1 < chunks.length;
      app.innerHTML =
        '<div class="result">' +
          '<p class="result-rating">' + (more ? "Part " + (at + 1) + " down" : "Clean sheet") + "</p>" +
          '<div class="verse chant--open" style="margin:1rem 0"><span class="verse-line">' +
            esc(more ? chunk : item.text) + "</span></div>" +
          '<p class="result-of">' + esc(verseRef(item)) + "</p>" +
          '<p class="lede" style="margin:1rem auto 0">' +
            (more ? "Word for word. Say it once with your eyes shut, then take the next part."
                  : "The whole passage, word for word. Now say it with your eyes shut.") + "</p>" +
          '<div class="btn-row">' +
            (more ? '<button class="btn" id="next">Next part \u2192</button>' : "") +
            '<button class="btn' + (more ? " btn--quiet" : "") + '" id="again">' +
              (more ? "Do this part again" : "Scramble it again") + "</button>" +
            '<a class="btn btn--quiet" href="#/i/' + item.id + '/fade">Fade it out</a>' +
          "</div>" +
        "</div>";
      if (more)
        document.getElementById("next").addEventListener("click", function () {
          renderVerseOrder(item, at + 1);
        });
      document.getElementById("again").addEventListener("click", function () {
        renderVerseOrder(item, at);
      });
    }

    paint("");
  }

  /* ---------- generic say-it-then-check cards ------------------------------ */

  function renderSelfCheck(item, cards, drillId, subset) {
    var deck = subset && subset.length ? subset : cards;
    var i = 0, shown = false;
    var missed = [];
    /* Study-guide questions used to be "say it out loud, then peek", which
       made peeking free. Now he types his answer first; hers only appears
       once he has committed to something, and his sits right above it so
       the comparison is honest. Verse fades still work out loud. */
    var typedMode = drillId === "extras";
    var mine = "";

    function paint() {
      var c = deck[i];
      var front = c.prompt;
      var isVerse = drillId === "fade";

      app.innerHTML =
        '<a class="backlink" href="#/i/' + item.id + '">\u2190 Leave the drill</a>' +
        '<p class="eyebrow">' + esc(c.label || ("Question " + (i + 1) + " of " + deck.length)) + "</p>" +
        (isVerse ? "" : '<div class="prompt-card">' + esc(c.prompt) + "</div>") +
        (shown && typedMode
          ? '<p class="eyebrow" style="margin-top:1rem">Your answer</p>' +
            '<div class="verse" style="text-align:left">' + esc(mine) + "</div>" +
            '<p class="eyebrow">Her answer</p>' : "") +
        (shown
          ? '<div class="verse chant--open">' + esc(c.answer) + "</div>"
          : isVerse ? '<div class="verse"><span class="verse-line">' + front + "</span></div>"
          : typedMode ? '<textarea class="wordbox" id="mine" rows="3" style="width:min(100%,560px);text-align:left;font-size:1.1rem" ' +
              'autocomplete="off" spellcheck="false" placeholder="Type your answer first">' + esc(mine) + "</textarea>" : "") +
        '<p class="chant-hint">' +
          (shown ? (typedMode ? "Does yours say the same thing? Be honest \u2014 nobody's keeping score."
                              : "Did you get it? Be honest \u2014 nobody's keeping score.")
                 : isVerse ? "Say the whole verse out loud, then check."
                 : typedMode ? "Type your answer, then check it against hers."
                           : "Answer it out loud in a full sentence, then check.") +
        "</p>" +
        '<div class="btn-row">' +
          (shown
            ? '<button class="btn" id="got">I got it</button>' +
              '<button class="btn btn--quiet" id="miss">I missed it</button>'
            : '<button class="btn" id="show">Show me</button>') +
        "</div>" +
        '<p class="card-counter">' + (i + 1) + " of " + deck.length + "</p>";

      if (typedMode && !shown) {
        var mb = document.getElementById("mine");
        var sb = document.getElementById("show");
        sb.textContent = "Check it";
        sb.disabled = mb.value.trim().length < 2;
        mb.addEventListener("input", function () { mine = mb.value; sb.disabled = mb.value.trim().length < 2; });
        mb.focus();
      }
      if (document.getElementById("show"))
        document.getElementById("show").addEventListener("click", function () {
          if (typedMode) { mine = document.getElementById("mine").value; if (mine.trim().length < 2) return; }
          shown = true; paint();
        });
      if (document.getElementById("got"))
        document.getElementById("got").addEventListener("click", function () { mark(true); });
      if (document.getElementById("miss"))
        document.getElementById("miss").addEventListener("click", function () { mark(false); });
    }

    function mark(ok) {
      if (!ok) missed.push(deck[i]);
      i++; shown = false; mine = "";
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
    /* A word-for-word item keeps its full question list in "exact"; flashcards
       should cover every one of those, not just the short terms. */
    var cards = shuffle((item.exact || []).length
      ? item.exact.map(function (e) { return { word: e.cue, meaning: e.answer }; })
      : item.words);
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

  /* Footer stamp: lets you confirm an upload actually took effect. */
  var foot = document.querySelector(".foot .wrap");
  if (foot) {
    var stamp = document.createElement("p");
    stamp.className = "buildstamp";
    stamp.textContent = (typeof BUILD === "string" ? BUILD + " \u00b7 " : "") +
      STUDY_ITEMS.length + " study sets loaded";
    foot.appendChild(stamp);
  }

  window.addEventListener("hashchange", route);
  route();
})();

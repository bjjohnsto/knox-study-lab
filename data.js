/* ==========================================================================
   KNOX'S 6TH GRADE STUDY LAB  —  STUDY CONTENT

   THIS IS THE ONLY FILE YOU EVER NEED TO EDIT.
   To add new material, paste a new block into the STUDY_ITEMS list below.
   Everything else (index.html, style.css, app.js) can be left alone.

   Three kinds of study item are supported:
     type: "vocab"      -> words, meanings, fill-in-the-blank sentences
     type: "sequence"   -> a list that must be memorized IN ORDER
     type: "categorize" -> things that must be sorted INTO GROUPS
   ========================================================================== */


/* --- The seven class tabs. You probably never need to change these. ------ */
const SUBJECTS = [
  { id: "bible",      name: "Bible" },
  { id: "literature", name: "Literature" },
  { id: "ela",        name: "ELA" },
  { id: "science",    name: "Science" },
  { id: "history",    name: "History" },
  { id: "grammar",    name: "Grammar" },
  { id: "math",       name: "Math" }
];


/* --- Old Testament groupings, written once and used by two study items. -- */
const OT_GROUPS = [
  { name: "Books of the Law", partOne: true,
    books: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"] },

  { name: "Books of History", partOne: true,
    books: ["Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings",
            "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah",
            "Esther"] },

  { name: "Books of Poetry and Wisdom", partOne: true,
    books: ["Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon"] },

  { name: "Major Prophets", partOne: false,
    books: ["Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel"] },

  { name: "Minor Prophets", partOne: false,
    books: ["Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum",
            "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"] }
];


/* ==========================================================================
   STUDY ITEMS  —  add new material at the BOTTOM of this list.
   ========================================================================== */
const STUDY_ITEMS = [

  /* ------------------------------------------------------------------ */
  {
    id: "lit-furthest-back-vocab",
    subject: "literature",
    title: "My Furthest-Back Person Vocab",
    added: "2026-08-29",
    quiz:  "2026-09-02",
    note:  "Lesson 2 word list, Unit 1 Workshop One. Definitions from the teacher.",
    type:  "vocab",
    words: [
      { word: "acutely",
        meaning: "Sharply, intensely, or severely." },
      { word: "cacophony",
        meaning: "A harsh, loud, or discordant mixture of sounds." },
      { word: "compulsion",
        meaning: "A strong, irresistible impulse or urge to act." },
      { word: "cumulative",
        meaning: "Increasing or growing by successive additions over time." },
      { word: "exotic",
        meaning: "Strikingly unusual, colorful, or originating from a distant foreign land." },
      { word: "hybrid",
        meaning: "Combining two different species, origins, or elements." },
      { word: "predominantly",
        meaning: "Mainly, mostly, or for the most part." },
      { word: "projected",
        meaning: "Planned, estimated, or proposed for the future." },
      { word: "revered",
        meaning: "Deeply respected, honored, or admired." },
      { word: "staccato",
        meaning: "Short, sharp, clear, and detached (referring to sounds or speech)." },
      { word: "wizened",
        meaning: "Wrinkled, shriveled, or withered from age." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "bible-ot-order",
    subject: "bible",
    title: "Old Testament Books — In Order",
    added: "2026-08-29",
    quiz:  "2026-08-31",
    note:  "All 39 books, front to back.",
    type:  "sequence",
    groups: OT_GROUPS,

    /* Short rhythmic lines for the chant and recall drills. This is the
       traditional way the books get memorized — say each line out loud
       until it has a beat, then chain the lines together. */
    lines: [
      ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"],
      ["Joshua", "Judges", "Ruth"],
      ["1 Samuel", "2 Samuel", "1 Kings", "2 Kings"],
      ["1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther"],
      ["Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon"],
      ["Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel"],
      ["Hosea", "Joel", "Amos", "Obadiah", "Jonah"],
      ["Micah", "Nahum", "Habakkuk", "Zephaniah"],
      ["Haggai", "Zechariah", "Malachi"]
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "bible-ot-groups",
    subject: "bible",
    title: "Old Testament Books — By Section",
    added: "2026-08-29",
    quiz:  "2026-08-31",
    note:  "Part 1 is Law, History, and Poetry & Wisdom (22 books).",
    type:  "categorize",
    groups: OT_GROUPS
  },

  /* ------------------------------------------------------------------ */
  {
    id: "hist-mesopotamia-ch2",
    subject: "history",
    title: "Ancient Mesopotamia Chapter 2 Vocab",
    added: "2026-08-31",
    quiz:  "2026-09-04",
    note:  "Chapter test Friday.",
    type:  "vocab",
    words: [
      { word: "Silt",
        meaning: "The fertile soil left behind by rivers after they flood." },
      { word: "Irrigation",
        meaning: "A system that brings water to crops using canals, ditches, or other methods." },
      { word: "Mesopotamia",
        meaning: "The region between the Tigris and Euphrates Rivers, often called the 'land between the rivers.'" },
      { word: "Sumer",
        meaning: "An ancient civilization in southern Mesopotamia known for developing some of the world's earliest cities." },
      { word: "Surplus",
        meaning: "More of something than is needed; extra food or goods that can be stored or traded." },
      { word: "City-State",
        meaning: "A type of government in which a city and the surrounding land form an independent country." },
      { word: "Ur",
        meaning: "A city in ancient Mesopotamia that became an important center of trade and religion." },
      { word: "Social Class",
        meaning: "A group of people in a society who have a similar level of wealth, power, or status." },
      { word: "Barter",
        meaning: "The process of exchanging goods or services without using money." },
      { word: "Scribes",
        meaning: "People in ancient societies who were trained to read and write and kept records." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "bible-john-15-3",
    subject: "bible",
    title: "John 15:3 verse quiz",
    added: "2026-08-31",
    quiz:  "2026-09-04",
    note:  "Word for word, ESV. Test Friday.",
    type:  "verse",
    reference: "John 15:3",
    version:   "ESV",
    text: "Already you are clean because of the word that I have spoken to you."
  },

  /* ------------------------------------------------------------------ */
  {
    id: "bible-unit-1",
    subject: "bible",
    title: "Bible Unit 1",
    added: "2026-08-31",
    quiz:  "2026-09-03",
    note:  "Worldview definitions and the worldview diagram. Test Thursday.",
    type:  "vocab",
    words: [
      { word: "Basic Beliefs",
        meaning: "Ideas people believe." },
      { word: "Assumptions",
        meaning: "Ideas people believe without analyzing them and without proof." },
      { word: "Creation",
        meaning: "The act of God to make the heavens and the earth in six days." },
      { word: "Big Story",
        meaning: "Where the world came from, why the world is the way it is, and where the world is going." },
      { word: "Dualism",
        meaning: "Believing there are two gods to be worshiped." },
      { word: "Redemption",
        meaning: "God restores sinners to Himself." }
    ],

    /* Study-guide questions he has to answer in his own words.
       These become the "Study guide questions" drill. */
    extras: [
      { prompt: "Name the three parts of a worldview, in order from the center out.",
        answer: "1. Big Story   2. Basic Beliefs   3. Actions" },
      { prompt: "What three questions does the Big Story answer?",
        answer: "Where the world came from, why the world is the way it is, and where the world is going." },
      { prompt: "Explain how the three parts of a worldview produce each other.",
        answer: "The Big Story explains God's authority and why man was created. Out of the Big Story come our basic beliefs. Out of our beliefs come our actions \u2014 what we believe becomes what we do." }
    ]
  }

  /* ------------------------------------------------------------------
     PASTE NEW STUDY ITEMS HERE.
     Remember to put a comma after the closing brace of the item above.
     ------------------------------------------------------------------ */

];

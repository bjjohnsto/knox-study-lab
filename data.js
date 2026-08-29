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
    groups: OT_GROUPS
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
  }

  /* ------------------------------------------------------------------
     PASTE NEW STUDY ITEMS HERE.
     Remember to put a comma after the closing brace of the item above.
     ------------------------------------------------------------------ */

];

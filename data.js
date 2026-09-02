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


/* Bump this whenever you change this file. It shows in the footer of the site,
   so you can tell at a glance whether your upload actually went live. */
const BUILD = "Sept 1 \u2014 build 6";


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
  },

  /* ------------------------------------------------------------------ */
  {
    id: "bible-ot-prophets-order",
    subject: "bible",
    title: "Old Testament Books \u2014 Isaiah to Malachi",
    added: "2026-09-01",
    quiz:  "2026-09-08",
    note:  "17 books, in order. The test gives a word bank and blank lines, so all that matters is the order.",
    type:  "sequence",
    groups: [
      { name: "Major Prophets", partOne: true,
        books: ["Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel"] },
      { name: "Minor Prophets", partOne: true,
        books: ["Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum",
                "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi"] }
    ],
    lines: [
      ["Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel"],
      ["Hosea", "Joel", "Amos", "Obadiah", "Jonah"],
      ["Micah", "Nahum", "Habakkuk", "Zephaniah"],
      ["Haggai", "Zechariah", "Malachi"]
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sci-ch2-vocab",
    subject: "science",
    title: "Science Chapter 2 Test \u2014 Level 1: Vocabulary",
    added: "2026-09-01",
    quiz:  "2026-09-08",
    note:  "The 19 study guide terms. Start here.",
    type:  "vocab",
    words: [
      { word: "Rock cycle",
        meaning: "The process of rocks changing from one type into another." },
      { word: "Mass movement",
        meaning: "Erosion caused by gravity, such as soil creep, mudflow, rockslide, or avalanche." },
      { word: "Weathering",
        meaning: "The process of breaking down rocks." },
      { word: "Glacier",
        meaning: "Unmelted snow that has been compacted into ice, heavy enough to slide downhill." },
      { word: "Gravity",
        meaning: "The primary force behind erosion." },
      { word: "Abrasion",
        meaning: "Mechanical weathering that happens when rocks rub against each other, caused by water or wind." },
      { word: "Mechanical weathering",
        meaning: "Breaking rocks into smaller pieces, changing only their size and shape." },
      { word: "Chemical weathering",
        meaning: "Weathering that changes rock into a different substance." },
      { word: "Soil horizons",
        meaning: "The layers soil is made of: O, A (topsoil), B (subsoil), C, and R (bedrock)." },
      { word: "Humus",
        meaning: "Decayed organic material in soil." },
      { word: "Sand",
        meaning: "The largest kind of soil particle, 0.06 mm to 2 mm, rough and quick-draining." },
      { word: "Sediment",
        meaning: "The small particles of rock and mineral that weathering produces." },
      { word: "Texture",
        meaning: "The amount of each kind of particle \u2014 sand, silt, and clay \u2014 in a soil sample." },
      { word: "Delta",
        meaning: "An area of sediment deposited at the mouth of a river." },
      { word: "Deflation",
        meaning: "When wind blows, picks up loose sediment, and carries it away." },
      { word: "Deposition",
        meaning: "When wind, water, or ice drops sediment and rocks in a new location." },
      { word: "Load",
        meaning: "The sediment that a stream carries." },
      { word: "Moraine",
        meaning: "A pile of soil and rock that a glacier deposits as it melts." },
      { word: "Erosion",
        meaning: "When weathered material moves from one location to another." }
    ],
    extras: [
      { prompt: "What is the difference between weathering and erosion?",
        answer: "Weathering breaks rocks down. Erosion moves the broken-down material from one place to another. They often happen together but are not the same." },
      { prompt: "What is the difference between mechanical and chemical weathering?",
        answer: "Mechanical weathering changes only the size and shape of a rock. Chemical weathering changes the rock into a different substance." },
      { prompt: "Name the types of mechanical weathering.",
        answer: "Frost wedging, frost heaving, pressure release, exfoliation, abrasion, plants and animals, and catastrophic events like fires and floods." },
      { prompt: "Name the examples of chemical weathering.",
        answer: "Oxidation (rust), carbonic acid dissolving limestone, acid rain, and lichens and mosses secreting mild acids." },
      { prompt: "List the three soil particles from largest to smallest.",
        answer: "Sand, then silt, then clay. It takes about 100,000 clay particles to equal one sand particle." },
      { prompt: "What are the three types of rock, and how does each form?",
        answer: "Sedimentary forms when sediment and the remains of tiny living things settle and harden. Igneous forms when magma cools, below or above the surface. Metamorphic forms below the crust from great heat and pressure." },
      { prompt: "What causes acid rain?",
        answer: "Burning fossil fuels releases sulfur dioxide, which combines with water in the atmosphere to make sulfuric acid. That falls as acid rain and weathers rock much faster than carbonic acid alone." },
      { prompt: "How do speleothems form?",
        answer: "Acidic water seeps into limestone and dissolves calcite. As the water drips, the dissolved calcite is deposited, building stalactites, stalagmites, columns, and drip curtains." },
      { prompt: "What is a moraine and what causes it?",
        answer: "A pile of soil and rock, sometimes hundreds of meters deep. A glacier picks up material as it slides downhill, then deposits it in piles as it melts." },
      { prompt: "What are the advantages and disadvantages of sediment deposition?",
        answer: "Advantage: deposited sediment makes farmland rich, like floodplains and deltas. Disadvantage: it fills stream channels and shipping lanes, and floods can deposit sediment in homes and buildings." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sci-ch2-practice",
    subject: "science",
    title: "Science Chapter 2 Test \u2014 Level 2: Practice Test",
    added: "2026-09-01",
    quiz:  "2026-09-08",
    note:  "True/false, multiple choice, and mark-all-that-apply \u2014 the same sections her tests use.",
    type:  "questions",
    questions: [
      /* --- true or false --- */
      { kind: "tf", prompt: "Weathering breaks down rocks, and erosion moves the broken pieces.",
        answer: true,
        why: "That is exactly the difference between the two." },
      { kind: "tf", prompt: "Chemical weathering changes only the size and shape of a rock.",
        answer: false,
        why: "That describes mechanical weathering. Chemical weathering turns the rock into a different substance." },
      { kind: "tf", prompt: "Stalactites grow upward from the floor of a cavern.",
        answer: false,
        why: "Stalactites hang from the ceiling like stone icicles. Stalagmites grow up from the floor." },
      { kind: "tf", prompt: "Clay is the smallest of the three kinds of soil particle.",
        answer: true,
        why: "It takes about 100,000 clay particles to make one sand particle." },
      { kind: "tf", prompt: "Gravity is the primary force behind erosion.",
        answer: true,
        why: "Water, wind, and ice are agents of erosion, but gravity is the force behind it." },
      { kind: "tf", prompt: "Sand particles are smaller than silt particles.",
        answer: false,
        why: "Sand is the largest particle, then silt, then clay." },
      { kind: "tf", prompt: "Loam is an especially fertile soil.",
        answer: true,
        why: "Equal parts sand and silt with about half as much clay. All three sets of properties combine." },
      { kind: "tf", prompt: "A glacier that melts faster than new snow falls is called a receding glacier.",
        answer: true,
        why: "One that melts completely often leaves a U-shaped valley behind." },

      /* --- multiple choice --- */
      { kind: "mc", prompt: "Mechanical weathering that happens when rocks rub against each other is called ___.",
        options: ["abrasion", "plucking", "deflation", "exfoliation"],
        answer: "abrasion",
        why: "Caused by water rolling rocks along a streambed, or by wind carrying sand against them." },
      { kind: "mc", prompt: "Water freezing in a crack and forcing the rock apart is called ___.",
        options: ["frost wedging", "frost heaving", "pressure release", "oxidation"],
        answer: "frost wedging",
        why: "Water expands as it freezes and acts like a wedge. Frost heaving is when it pushes a rock up out of the ground." },
      { kind: "mc", prompt: "Sheets of rock peeling away like the layers of an onion is called ___.",
        options: ["exfoliation", "abrasion", "plucking", "deposition"],
        answer: "exfoliation",
        why: "It results from pressure release cracking the rock." },
      { kind: "mc", prompt: "When oxygen in the air combines with iron, ___ forms.",
        options: ["iron oxide", "carbonic acid", "sulfuric acid", "humus"],
        answer: "iron oxide",
        why: "Iron oxide is rust. This is the most familiar example of oxidation." },
      { kind: "mc", prompt: "The weak acid that forms when carbon dioxide dissolves in water is ___.",
        options: ["carbonic acid", "sulfuric acid", "iron oxide", "acid rain"],
        answer: "carbonic acid",
        why: "Over long periods it dissolves limestone \u2014 that is what wears away old gravestones and carves caverns." },
      { kind: "mc", prompt: "Scientists who study soil are called ___.",
        options: ["pedologists", "geologists", "spelunkers", "seismologists"],
        answer: "pedologists",
        why: "Spelunkers explore caves. Geologists study rocks generally." },
      { kind: "mc", prompt: "The top layer of soil, made of leaf litter and humus, is the ___.",
        options: ["O horizon", "A horizon", "B horizon", "R horizon"],
        answer: "O horizon",
        why: "Then A (topsoil), B (subsoil), C, and R (bedrock) underneath." },
      { kind: "mc", prompt: "Rock that a glacier has ground into fine powder is called ___.",
        options: ["rock flour", "moraine", "silt", "regolith"],
        answer: "rock flour",
        why: "Moraines are often made of rock flour plus huge unbroken rocks." },
      { kind: "mc", prompt: "When a glacier pulls a piece of bedrock loose and carries it along, the process is ___.",
        options: ["plucking", "abrasion", "deflation", "deposition"],
        answer: "plucking",
        why: "It happens where there are weaknesses in the bedrock." },
      { kind: "mc", prompt: "Wind picking up loose sediment and carrying it away is called ___.",
        options: ["deflation", "deposition", "abrasion", "exfoliation"],
        answer: "deflation",
        why: "Wind cannot move large particles the way water can, but a strong wind can carry tons of sediment." },
      { kind: "mc", prompt: "An area of sediment at the mouth of a river is a ___.",
        options: ["delta", "floodplain", "moraine", "sandbar"],
        answer: "delta",
        why: "Named for the triangular Greek letter. A floodplain is an area that commonly floods." },
      { kind: "mc", prompt: "Sediment that a stream carries but does not dissolve is its ___.",
        options: ["suspended load", "dissolved load", "moraine", "texture"],
        answer: "suspended load",
        why: "Minerals that do dissolve are the dissolved load. Together they make up the stream's load." },
      { kind: "mc", prompt: "The slow downhill movement of soil that makes fences and trees lean is ___.",
        options: ["soil creep", "mudflow", "rockslide", "avalanche"],
        answer: "soil creep",
        why: "It is one of the slowest mass movements. A mudflow is one of the fastest." },
      { kind: "mc", prompt: "A stone icicle hanging from a cave ceiling is a ___.",
        options: ["stalactite", "stalagmite", "column", "drip curtain"],
        answer: "stalactite",
        why: "Stalactites hold tight to the ceiling. Stalagmites might reach the ceiling one day." },
      { kind: "mc", prompt: "When a stalactite and a stalagmite grow together they form a ___.",
        options: ["column", "drip curtain", "speleothem", "moraine"],
        answer: "column",
        why: "All cave formations are speleothems; a column is that specific one." },
      { kind: "mc", prompt: "Soil that is equal parts sand and silt with about half as much clay is called ___.",
        options: ["loam", "humus", "silt loam", "regolith"],
        answer: "loam",
        why: "The properties of all three particles combine, making it especially fertile." },

      /* --- mark all that apply --- */
      { kind: "multi", prompt: "Which of these are types of MECHANICAL weathering?",
        options: ["Frost wedging", "Abrasion", "Oxidation", "Exfoliation", "Acid rain", "Frost heaving"],
        answers: ["Frost wedging", "Abrasion", "Exfoliation", "Frost heaving"],
        why: "Oxidation and acid rain change the rock into a new substance, so they are chemical." },
      { kind: "multi", prompt: "Which of these are agents of erosion?",
        options: ["Water", "Wind", "Ice", "Sunlight"],
        answers: ["Water", "Wind", "Ice"],
        why: "Gravity is the force behind erosion; water, wind, and ice are the agents that carry material." },
      { kind: "multi", prompt: "Which of these are mass movements?",
        options: ["Soil creep", "Mudflow", "Deflation", "Rockslide", "Avalanche", "Earth flow"],
        answers: ["Soil creep", "Mudflow", "Rockslide", "Avalanche", "Earth flow"],
        why: "Deflation is wind erosion, not gravity. Every other one here is gravity pulling material downhill." },
      { kind: "multi", prompt: "Which of these are examples of CHEMICAL weathering?",
        options: ["Oxidation", "Carbonic acid dissolving limestone", "Frost heaving", "Acid rain", "Lichens secreting acids"],
        answers: ["Oxidation", "Carbonic acid dissolving limestone", "Acid rain", "Lichens secreting acids"],
        why: "Frost heaving just lifts and cracks the rock, so it is mechanical." },
      { kind: "multi", prompt: "Which of these are kinds of soil particle?",
        options: ["Sand", "Silt", "Clay", "Humus"],
        answers: ["Sand", "Silt", "Clay"],
        why: "Humus is decayed organic material, not a particle size." },
      { kind: "multi", prompt: "Which of these can form caves?",
        options: ["Crashing waves", "Wind", "Running water", "Chemical weathering of limestone"],
        answers: ["Crashing waves", "Wind", "Running water", "Chemical weathering of limestone"],
        why: "All four. Waves, wind, and water form caves mechanically; limestone caverns form chemically." },
      { kind: "multi", prompt: "Which of these are true about deposition?",
        options: ["The heaviest sediment drops first", "Deposits often look layered", "It builds deltas and floodplains", "It only happens in water"],
        answers: ["The heaviest sediment drops first", "Deposits often look layered", "It builds deltas and floodplains"],
        why: "Wind and ice deposit sediment too \u2014 sand dunes and moraines are both deposits." }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sci-ch2-weathering-sort",
    subject: "science",
    title: "Science Chapter 2 Test \u2014 Level 3: Mechanical or Chemical?",
    added: "2026-09-01",
    quiz:  "2026-09-08",
    note:  "Sort every example into the right kind of weathering.",
    type:  "categorize",
    groups: [
      { name: "Mechanical weathering", partOne: true,
        books: ["Frost wedging", "Frost heaving", "Pressure release", "Exfoliation",
                "Abrasion", "Tree roots splitting a rock", "Burrowing animals",
                "Wind blasting sand against rock", "A rockslide breaking rock apart"] },
      { name: "Chemical weathering", partOne: true,
        books: ["Oxidation", "Rust forming on iron", "Carbonic acid dissolving limestone",
                "Acid rain", "Lichens and mosses secreting acids",
                "Rainwater wearing away a limestone gravestone"] }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    id: "sci-ch2-soil-horizons",
    subject: "science",
    title: "Science Chapter 2 Test \u2014 Level 4: Label the Soil Horizons",
    added: "2026-09-01",
    quiz:  "2026-09-08",
    note:  "Top of the ground down to bedrock. Her Chapter 1 test had a label-the-diagram section.",
    type:  "sequence",
    groups: [
      { name: "Soil horizons, top to bottom", partOne: true,
        books: ["O horizon \u2014 leaf litter and humus",
                "A horizon \u2014 topsoil",
                "B horizon \u2014 subsoil",
                "C horizon \u2014 weathered bedrock fragments",
                "R horizon \u2014 bedrock"] }
    ],
    lines: [
      ["O horizon \u2014 leaf litter and humus",
       "A horizon \u2014 topsoil",
       "B horizon \u2014 subsoil",
       "C horizon \u2014 weathered bedrock fragments",
       "R horizon \u2014 bedrock"]
    ]
  }

  /* ------------------------------------------------------------------
     PASTE NEW STUDY ITEMS HERE.
     Remember to put a comma after the closing brace of the item above.
     ------------------------------------------------------------------ */

];

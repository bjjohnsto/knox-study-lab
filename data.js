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
const BUILD = "Oct 6 \u2014 build 38";


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
/* ---------- This week's homework sheet -------------------------------------
   Replace this whole block each week. Subject rows become one entry per day;
   "optional" is the gray-italic only-if-not-finished-in-class kind, "test" is
   the red kind. ----------------------------------------------------------- */
const HOMEWORK = {
  "asOf": "2026-10-06",
  "label": "Week of Oct 5 – Oct 9",
  "tests": [
    {
      "date": "2026-10-07",
      "text": "Science Quiz: label the plant cell"
    },
    {
      "date": "2026-10-08",
      "text": "History Map Test: Israel — filled-in maps are in his history binder"
    },
    {
      "date": "2026-10-08",
      "text": "Spelling Test: List 4"
    },
    {
      "date": "2026-10-09",
      "text": "History Vocab Test: Ancient Israel"
    },
    {
      "date": "2026-10-09",
      "text": "Bible Quiz: John 15:6, word for word"
    }
  ],
  "soon": [
    {
      "date": "2026-10-09",
      "text": "Science Cell Project due"
    },
    {
      "date": "2026-10-09",
      "text": "Math IXL K.3, K.5, K.6 — 80%+ on each"
    },
    {
      "date": "2026-10-15",
      "text": "ELA Green Energy Speech due"
    }
  ],
  "days": [
    {
      "date": "2026-10-05",
      "tasks": [
        {
          "cls": "Bible",
          "teacher": "Mrs. Vowels · C206",
          "subject": "bible",
          "text": "Study John 15:6"
        },
        {
          "cls": "Literature",
          "teacher": "Mrs. Vowels · C206",
          "subject": "literature",
          "text": "Ch. 15–18 Observations"
        },
        {
          "cls": "ELA / Grammar",
          "teacher": "Mrs. Servizzi · C208",
          "text": "New: Green Energy Speech — due Thu 10/15"
        },
        {
          "cls": "Spelling",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "ela",
          "text": "Study List 4 — test Thursday"
        },
        {
          "cls": "Science",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "science",
          "text": "pp. 71–72"
        },
        {
          "cls": "History",
          "teacher": "Mrs. Martinez",
          "subject": "history",
          "text": "Study Israel maps + vocab"
        },
        {
          "cls": "Math",
          "teacher": "Mrs. George · C205",
          "subject": "math",
          "text": "IXL K.3, K.5, K.6 — 80%+ on each, due Friday"
        }
      ]
    },
    {
      "date": "2026-10-06",
      "tasks": [
        {
          "cls": "Bible",
          "teacher": "Mrs. Vowels · C206",
          "subject": "bible",
          "text": "Study John 15:6"
        },
        {
          "cls": "Bible",
          "teacher": "Mrs. Vowels · C206",
          "subject": "bible",
          "text": "Thinking it Through for 3.7"
        },
        {
          "cls": "Literature",
          "teacher": "Mrs. Vowels · C206",
          "subject": "literature",
          "text": "Ch. 15–18 Observations"
        },
        {
          "cls": "Spelling",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "ela",
          "text": "Study List 4 — test Thursday"
        },
        {
          "cls": "Science",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "science",
          "text": "pp. 73–74"
        },
        {
          "cls": "History",
          "teacher": "Mrs. Martinez",
          "subject": "history",
          "text": "Study Israel maps + vocab"
        },
        {
          "cls": "Math",
          "teacher": "Mrs. George · C205",
          "subject": "math",
          "text": "Finish pp. 140 & 142 selected exercises — due Wednesday",
          "optional": true
        },
        {
          "cls": "Science",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "science",
          "text": "Study the plant cell diagram for tomorrow’s quiz"
        }
      ]
    },
    {
      "date": "2026-10-07",
      "tasks": [
        {
          "cls": "Science",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "science",
          "text": "QUIZ: label the plant cell",
          "test": true
        },
        {
          "cls": "Bible",
          "teacher": "Mrs. Vowels · C206",
          "subject": "bible",
          "text": "Study John 15:6"
        },
        {
          "cls": "Literature",
          "teacher": "Mrs. Vowels · C206",
          "subject": "literature",
          "text": "Finish Ch. 15–18 Observations — due Thursday",
          "optional": true
        },
        {
          "cls": "Spelling",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "ela",
          "text": "Study List 4 for Thursday test"
        },
        {
          "cls": "Science",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "science",
          "text": "pp. 75–76"
        },
        {
          "cls": "History",
          "teacher": "Mrs. Martinez",
          "subject": "history",
          "text": "Study Israel maps for Thursday test"
        },
        {
          "cls": "Math",
          "teacher": "Mrs. George · C205",
          "subject": "math",
          "text": "No homework"
        }
      ]
    },
    {
      "date": "2026-10-08",
      "tasks": [
        {
          "cls": "History",
          "teacher": "Mrs. Martinez",
          "subject": "history",
          "text": "MAP TEST: Israel",
          "test": true
        },
        {
          "cls": "Spelling",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "ela",
          "text": "TEST: Spelling List 4",
          "test": true
        },
        {
          "cls": "Bible",
          "teacher": "Mrs. Vowels · C206",
          "subject": "bible",
          "text": "Study John 15:6 for Friday quiz"
        },
        {
          "cls": "Bible",
          "teacher": "Mrs. Vowels · C206",
          "subject": "bible",
          "text": "“Love According to God”"
        },
        {
          "cls": "Literature",
          "teacher": "Mrs. Vowels · C206",
          "subject": "literature",
          "text": "Due: Ch. 15–18 Observations"
        },
        {
          "cls": "History",
          "teacher": "Mrs. Martinez",
          "subject": "history",
          "text": "Study vocab for Friday test"
        },
        {
          "cls": "Science",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "science",
          "text": "pp. 77–78"
        },
        {
          "cls": "Science",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "science",
          "text": "Finish Cell Project — due Friday",
          "optional": true
        },
        {
          "cls": "Math",
          "teacher": "Mrs. George · C205",
          "subject": "math",
          "text": "Multiplying fractions & mixed numbers worksheet — due Friday"
        },
        {
          "cls": "Math",
          "teacher": "Mrs. George · C205",
          "subject": "math",
          "text": "Finish IXL skills — due Friday",
          "optional": true
        }
      ]
    },
    {
      "date": "2026-10-09",
      "tasks": [
        {
          "cls": "History",
          "teacher": "Mrs. Martinez",
          "subject": "history",
          "text": "VOCAB TEST: Ancient Israel",
          "test": true
        },
        {
          "cls": "Bible",
          "teacher": "Mrs. Vowels · C206",
          "subject": "bible",
          "text": "QUIZ: John 15:6",
          "test": true
        },
        {
          "cls": "Science",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "science",
          "text": "DUE: Cell Project",
          "test": true
        },
        {
          "cls": "Science",
          "teacher": "Mrs. Servizzi · C208",
          "subject": "science",
          "text": "pp. 79–80"
        },
        {
          "cls": "ELA / Grammar",
          "teacher": "Mrs. Servizzi · C208",
          "text": "Weekend: work on Green Energy Speech"
        }
      ]
    }
  ]
};

const STUDY_ITEMS = [
  {
    "id": "lit-furthest-back-vocab",
    "subject": "literature",
    "title": "My Furthest-Back Person Vocab",
    "added": "2026-08-29",
    "quiz": "2026-09-02",
    "note": "Lesson 2 word list, Unit 1 Workshop One. Definitions from the teacher.",
    "type": "vocab",
    "words": [
      {
        "word": "acutely",
        "meaning": "Sharply, intensely, or severely."
      },
      {
        "word": "cacophony",
        "meaning": "A harsh, loud, or discordant mixture of sounds."
      },
      {
        "word": "compulsion",
        "meaning": "A strong, irresistible impulse or urge to act."
      },
      {
        "word": "cumulative",
        "meaning": "Increasing or growing by successive additions over time."
      },
      {
        "word": "exotic",
        "meaning": "Strikingly unusual, colorful, or originating from a distant foreign land."
      },
      {
        "word": "hybrid",
        "meaning": "Combining two different species, origins, or elements."
      },
      {
        "word": "predominantly",
        "meaning": "Mainly, mostly, or for the most part."
      },
      {
        "word": "projected",
        "meaning": "Planned, estimated, or proposed for the future."
      },
      {
        "word": "revered",
        "meaning": "Deeply respected, honored, or admired."
      },
      {
        "word": "staccato",
        "meaning": "Short, sharp, clear, and detached (referring to sounds or speech)."
      },
      {
        "word": "wizened",
        "meaning": "Wrinkled, shriveled, or withered from age."
      }
    ]
  },
  {
    "id": "bible-john-15-3",
    "subject": "bible",
    "title": "John 15:3 verse quiz",
    "added": "2026-08-31",
    "quiz": "2026-09-04",
    "note": "Word for word, ESV. Test Friday.",
    "type": "verse",
    "reference": "John 15:3",
    "version": "ESV",
    "text": "Already you are clean because of the word that I have spoken to you.",
    "assess": "quiz"
  },
  {
    "id": "bible-unit-1",
    "subject": "bible",
    "title": "Bible Unit 1",
    "added": "2026-08-31",
    "quiz": "2026-09-03",
    "note": "Worldview definitions and the worldview diagram. Test Thursday.",
    "type": "vocab",
    "words": [
      {
        "word": "Basic Beliefs",
        "meaning": "Ideas people believe."
      },
      {
        "word": "Assumptions",
        "meaning": "Ideas people believe without analyzing them and without proof."
      },
      {
        "word": "Creation",
        "meaning": "The act of God to make the heavens and the earth in six days."
      },
      {
        "word": "Big Story",
        "meaning": "Where the world came from, why the world is the way it is, and where the world is going."
      },
      {
        "word": "Dualism",
        "meaning": "Believing there are two gods to be worshiped."
      },
      {
        "word": "Redemption",
        "meaning": "God restores sinners to Himself."
      }
    ],
    "extras": [
      {
        "prompt": "Name the three parts of a worldview, in order from the center out.",
        "answer": "1. Big Story   2. Basic Beliefs   3. Actions"
      },
      {
        "prompt": "What three questions does the Big Story answer?",
        "answer": "Where the world came from, why the world is the way it is, and where the world is going."
      },
      {
        "prompt": "Explain how the three parts of a worldview produce each other.",
        "answer": "The Big Story explains God's authority and why man was created. Out of the Big Story come our basic beliefs. Out of our beliefs come our actions — what we believe becomes what we do."
      }
    ]
  },
  {
    "id": "bible-ot-prophets-order",
    "subject": "bible",
    "title": "Old Testament Books — Isaiah to Malachi",
    "added": "2026-09-01",
    "quiz": "2026-09-08",
    "note": "17 books, in order. The test gives a word bank and blank lines, so all that matters is the order.",
    "type": "sequence",
    "groups": [
      {
        "name": "Major Prophets",
        "partOne": true,
        "books": [
          "Isaiah",
          "Jeremiah",
          "Lamentations",
          "Ezekiel",
          "Daniel"
        ]
      },
      {
        "name": "Minor Prophets",
        "partOne": true,
        "books": [
          "Hosea",
          "Joel",
          "Amos",
          "Obadiah",
          "Jonah",
          "Micah",
          "Nahum",
          "Habakkuk",
          "Zephaniah",
          "Haggai",
          "Zechariah",
          "Malachi"
        ]
      }
    ],
    "lines": [
      [
        "Isaiah",
        "Jeremiah",
        "Lamentations",
        "Ezekiel",
        "Daniel"
      ],
      [
        "Hosea",
        "Joel",
        "Amos",
        "Obadiah",
        "Jonah"
      ],
      [
        "Micah",
        "Nahum",
        "Habakkuk",
        "Zephaniah"
      ],
      [
        "Haggai",
        "Zechariah",
        "Malachi"
      ]
    ],
    "assess": "quiz"
  },
  {
    "id": "hist-ch2-test",
    "subject": "history",
    "title": "Chapter 2 History Test",
    "added": "2026-09-03",
    "quiz": "2026-09-04",
    "note": "Short on time? Match Day, then Her 25. That is about seven minutes.",
    "type": "bundle",
    "words": [
      {
        "word": "Silt",
        "meaning": "The fertile soil left behind by rivers after they flood."
      },
      {
        "word": "Irrigation",
        "meaning": "A way of supplying water to land or crops.",
        "key": true
      },
      {
        "word": "Mesopotamia",
        "meaning": "The region between the Tigris and Euphrates Rivers, often called the 'land between the rivers.'"
      },
      {
        "word": "Sumer",
        "meaning": "An ancient civilization in southern Mesopotamia known for developing some of the world's earliest cities."
      },
      {
        "word": "Surplus",
        "meaning": "More of something than is needed; extra food or goods that can be stored or traded."
      },
      {
        "word": "City-State",
        "meaning": "A city and the surrounding land and villages that it controlled.",
        "key": true
      },
      {
        "word": "Ur",
        "meaning": "A city in ancient Mesopotamia that became an important center of trade and religion."
      },
      {
        "word": "Social Class",
        "meaning": "A group of people in a society who have a similar level of wealth, power, or status."
      },
      {
        "word": "Barter",
        "meaning": "The process of exchanging goods or services without using money."
      },
      {
        "word": "Scribes",
        "meaning": "People in ancient societies who were trained to read and write and kept records."
      },
      {
        "word": "astrology",
        "meaning": "Studying the movements and position of the sun, moon, stars, and planets in the belief that they influence people's lives."
      },
      {
        "word": "twelve-month calendar",
        "meaning": "Developed by using the cycles of the moon."
      },
      {
        "word": "seeder plow",
        "meaning": "Allowed farmers to drop seeds down a funnel on the center of the plow."
      },
      {
        "word": "cylinder seal",
        "meaning": "Used to sign documents and record information."
      },
      {
        "word": "Astronomy",
        "meaning": "The study of stars, planets, and other objects in space."
      },
      {
        "word": "60-minute hour",
        "meaning": "Came from the development of a number system based on a certain number."
      },
      {
        "word": "Cuneiform",
        "meaning": "Improved record keeping that made literature possible — the wedge-shaped writing the Sumerians developed on clay tablets.",
        "key": true
      },
      {
        "word": "zero",
        "meaning": "The Mesopotamians were the first people to recognize the concept of this numeral."
      },
      {
        "word": "barley-corn",
        "meaning": "The smallest unit of weight."
      },
      {
        "word": "wheel",
        "meaning": "Invention that improved transportation and pottery making.",
        "key": true
      },
      {
        "word": "Epic",
        "meaning": "A long poem that tells the story of a hero.",
        "key": true
      },
      {
        "word": "Phalanx",
        "meaning": "A military formation in which soldiers stood close together in rows, usually holding shields and spears."
      },
      {
        "word": "Empire",
        "meaning": "A large group of lands and peoples ruled by one government or leader."
      },
      {
        "word": "Sargon I",
        "meaning": "Emperor of the Akkadian Empire; the first ruler to unite the city-states of Mesopotamia into one empire.",
        "key": true
      },
      {
        "word": "Babylon",
        "meaning": "An important ancient city in Mesopotamia that became the center of the Babylonian Empire."
      },
      {
        "word": "Hammurabi",
        "meaning": "King of the Amorites and a military leader; collected and organized 282 laws.",
        "key": true
      },
      {
        "word": "Nebuchadnezzar II",
        "meaning": "Received God's judgment and became like a beast of the field. He also threw Shadrach, Meshach, and Abednego into the fiery furnace.",
        "key": true
      },
      {
        "word": "artisan",
        "meaning": "Skilled craftsman.",
        "key": true
      },
      {
        "word": "polytheism",
        "meaning": "The worship of many gods.",
        "key": true
      },
      {
        "word": "Akkadian Empire",
        "meaning": "The first empire; led by Sargon I.",
        "key": true
      },
      {
        "word": "Assyrian Empire",
        "meaning": "Turned away from evil ways after Jonah preached repentance, and received God's mercy.",
        "key": true
      },
      {
        "word": "Babylonian Empire",
        "meaning": "Amorite civilization with Babylon as its capital, a city established by Nimrod, Noah's great-grandson.",
        "key": true
      }
    ],
    "extras": [
      {
        "prompt": "Why did the Sumerians build levees?",
        "answer": "To help control the destruction of floods."
      },
      {
        "prompt": "What did the people rely on the priests for?",
        "answer": "To gain the favor of the gods."
      },
      {
        "prompt": "Why were scribes important?",
        "answer": "They kept records for merchants, the temple, and the government."
      },
      {
        "prompt": "List 3 differences between Mesopotamian religious beliefs and Biblical truth.",
        "answer": "1. Mesopotamians practiced polytheism; the Bible teaches there is only one God. 2. Mesopotamians had statues of their gods; the Bible says not to make any idols. 3. Mesopotamians felt priests connected them to their gods; the Bible tells us Jesus is the one true way to God."
      },
      {
        "prompt": "What is the difference between astrology and astronomy?",
        "answer": "Astronomy is the scientific study of the stars and heavenly objects. Astrology is studying the sun, moon, stars, and planets in the belief that they influence people's lives. One is science, one is superstition."
      },
      {
        "prompt": "Which Mesopotamian number system gave us the 60-minute hour?",
        "answer": "A number system based on sixty. That is also where the 60-second minute and the 360-degree circle come from."
      },
      {
        "prompt": "What were epics written about?",
        "answer": "Sumerian gods and military victories. The Epic of Gilgamesh is the best known."
      },
      {
        "prompt": "Who is Utnapishtim and why does he matter?",
        "answer": "In the Epic of Gilgamesh he tells how he built a ship and gathered his family aboard. It is a flood account, but the historically accurate account of the Flood was revealed by God to Moses."
      }
    ],
    "questions": [
      {
        "kind": "tf",
        "prompt": "Sumerian schools were called tablet houses and were attached to the temple.",
        "answer": true,
        "why": "Students were usually boys from wealthy families, training to become scribes."
      },
      {
        "kind": "tf",
        "prompt": "Only men were ever allowed to learn to read and write in Mesopotamia.",
        "answer": false,
        "why": "Women born of royalty were allowed to learn to read and write. Some held administrative positions, conducted business, and owned property."
      },
      {
        "kind": "tf",
        "prompt": "Mesopotamian religion rejected the one true God and practiced polytheism.",
        "answer": true,
        "why": "They worshiped thousands of gods."
      },
      {
        "kind": "tf",
        "prompt": "The temple was the center of religion but had nothing to do with government.",
        "answer": false,
        "why": "The temple was both the center of religion and the seat of the Sumerian government."
      },
      {
        "kind": "tf",
        "prompt": "Each Sumerian king served as the chief lawmaker and judge.",
        "answer": true,
        "why": "He also directed the building of new canals, temples, and roads."
      },
      {
        "kind": "tf",
        "prompt": "Astrology is the scientific study of stars and heavenly bodies.",
        "answer": false,
        "why": "That is astronomy. Astrology is interpreting human events by the position of the stars — and the stars do not determine what happens. God does."
      },
      {
        "kind": "tf",
        "prompt": "The Mesopotamians divided the year into four seasons.",
        "answer": false,
        "why": "Two seasons: summer and winter. Their twelve-month calendar came from the cycles of the moon."
      },
      {
        "kind": "tf",
        "prompt": "Cuneiform comes from the Latin words for \"wedge-shaped.\"",
        "answer": true,
        "why": "Early writing used picture symbols, which were gradually replaced by wedge-shaped characters."
      },
      {
        "kind": "tf",
        "prompt": "A cylinder seal was rolled across a clay tablet and its envelope for security.",
        "answer": true,
        "why": "It meant the information inside could not be changed. The dried tablet was then stored in the temple."
      },
      {
        "kind": "tf",
        "prompt": "The Sumerians were the first people to recognize the concept of zero.",
        "answer": true,
        "why": "They were also first to give a number a place value."
      },
      {
        "kind": "mc",
        "prompt": "The temple that stood in the center of Ur was called a ___.",
        "options": [
          "ziggurat",
          "phalanx",
          "cylinder seal",
          "tablet house"
        ],
        "answer": "ziggurat",
        "why": "It was originally built by a king named Ur-Nammu, to honor the moon god."
      },
      {
        "kind": "mc",
        "prompt": "The moon god worshiped at Ur was named ___.",
        "options": [
          "Nanna",
          "Enlil",
          "Inanna",
          "Marduk"
        ],
        "answer": "Nanna",
        "why": "Ur-Nammu built the ziggurat at Ur to honor him."
      },
      {
        "kind": "mc",
        "prompt": "The Mesopotamian number system was based on the number ___.",
        "options": [
          "60",
          "10",
          "12",
          "100"
        ],
        "answer": "60",
        "why": "That is where our 60-minute hour, 60-second minute, and 360-degree circle come from."
      },
      {
        "kind": "mc",
        "prompt": "Sumerians made their clothing from wool or ___.",
        "options": [
          "flax",
          "cotton",
          "silk",
          "leather"
        ],
        "answer": "flax",
        "why": "Men wore skirt-like garments or robes. Both men and women wore jewelry — bracelets, necklaces, and earrings."
      },
      {
        "kind": "mc",
        "prompt": "People were taught that only ___ could intercede directly with the gods.",
        "options": [
          "priests",
          "kings",
          "scribes",
          "soldiers"
        ],
        "answer": "priests",
        "why": "That belief is what made priests so powerful in Mesopotamia."
      },
      {
        "kind": "mc",
        "prompt": "At first, who chose a military leader to defend the city-state?",
        "options": [
          "the priest",
          "the king",
          "the scribes",
          "the people"
        ],
        "answer": "the priest",
        "why": "When the fighting ended the leader was expected to return to normal life. Some held on to power and became rulers instead."
      },
      {
        "kind": "mc",
        "prompt": "Sumerians believed that a ___ selected the king.",
        "options": [
          "god",
          "priest",
          "council",
          "army"
        ],
        "answer": "god",
        "why": "The priest then acknowledged the king as the god's choice to rule the city-state."
      },
      {
        "kind": "mc",
        "prompt": "In Ur, a lawbreaker often had to pay ___ as punishment.",
        "options": [
          "fines",
          "taxes",
          "labor",
          "livestock"
        ],
        "answer": "fines",
        "why": "If a man cut off another man's foot or nose, he paid the injured man a certain amount of silver."
      },
      {
        "kind": "mc",
        "prompt": "Archaeologists often identify an ancient building by reading its ___.",
        "options": [
          "stamped bricks",
          "cylinder seals",
          "clay envelopes",
          "wall paintings"
        ],
        "answer": "stamped bricks",
        "why": "A brick can tell the type of building, the name of the city, which god was worshiped, and who was king."
      },
      {
        "kind": "mc",
        "prompt": "Which of these did the Sumerians NOT develop?",
        "options": [
          "the compass",
          "the plow",
          "the potter's wheel",
          "the sail"
        ],
        "answer": "the compass",
        "why": "Their advances included the plow, the wheel, irrigation, the potter's wheel, and the sail."
      },
      {
        "kind": "mc",
        "prompt": "The Sumerian word for barley was ___, and its symbol could stand for that sound in any word.",
        "options": [
          "she",
          "er",
          "ku",
          "ur"
        ],
        "answer": "she",
        "why": "In she-er-ku, the word for fig cake, the barley symbol represented the first syllable."
      },
      {
        "kind": "mc",
        "prompt": "Besides Sumerian, cuneiform was used to write Akkadian, Hittite, and ___.",
        "options": [
          "Urartian",
          "Egyptian",
          "Hebrew",
          "Greek"
        ],
        "answer": "Urartian",
        "why": "Different peoples all used the cuneiform script to record information."
      },
      {
        "kind": "mc",
        "prompt": "Mesopotamian advances in medicine included making a list of symptoms with ___.",
        "options": [
          "a diagnosis for each",
          "a prayer for each",
          "a fine for each",
          "a god for each"
        ],
        "answer": "a diagnosis for each",
        "why": "One of several sciences they studied, alongside astronomy and mathematics."
      },
      {
        "kind": "mc",
        "prompt": "Legal records were required for business transactions, contracts, marriages, adoptions, and ___.",
        "options": [
          "wills",
          "festivals",
          "harvests",
          "battles"
        ],
        "answer": "wills",
        "why": "Archaeologists have found many of Sumer's records still in their clay envelopes, filed in the temples."
      },
      {
        "kind": "multi",
        "prompt": "Which of these were Sumerian advances or inventions?",
        "options": [
          "The plow",
          "The wheel",
          "Irrigation",
          "The potter's wheel",
          "The sail",
          "Gunpowder"
        ],
        "answers": [
          "The plow",
          "The wheel",
          "Irrigation",
          "The potter's wheel",
          "The sail"
        ],
        "why": "Everything but gunpowder. All five shaped daily life in Sumer."
      },
      {
        "kind": "multi",
        "prompt": "What can a stamped brick tell archaeologists?",
        "options": [
          "The type of building",
          "The name of the city",
          "Which god was worshiped",
          "Who was king",
          "How many people lived there"
        ],
        "answers": [
          "The type of building",
          "The name of the city",
          "Which god was worshiped",
          "Who was king"
        ],
        "why": "Ur-Nammu's brick named his lady Inanna, himself as king of Ur, and the temple he built."
      },
      {
        "kind": "multi",
        "prompt": "Which were true of Mesopotamian women?",
        "options": [
          "Those born of royalty could learn to read and write",
          "Some held administrative positions",
          "They conducted business",
          "They owned property",
          "They were forbidden to wear jewelry"
        ],
        "answers": [
          "Those born of royalty could learn to read and write",
          "Some held administrative positions",
          "They conducted business",
          "They owned property"
        ],
        "why": "Both men and women wore jewelry — bracelets, necklaces, and earrings."
      },
      {
        "kind": "multi",
        "prompt": "What did scribes keep records for?",
        "options": [
          "Merchants",
          "The temple",
          "The government",
          "The army only"
        ],
        "answers": [
          "Merchants",
          "The temple",
          "The government"
        ],
        "why": "From those careful records we have learned much about Sumerian life."
      },
      {
        "kind": "multi",
        "prompt": "Which numbers or measures did the Mesopotamian base-60 system give us?",
        "options": [
          "The 60-minute hour",
          "The 60-second minute",
          "The 360-degree circle",
          "The 100-year century"
        ],
        "answers": [
          "The 60-minute hour",
          "The 60-second minute",
          "The 360-degree circle"
        ],
        "why": "They also used geometry to measure fields and build temples."
      },
      {
        "kind": "correct",
        "prompt": "Music was unimportant to religious rituals and daily work.",
        "underlined": "unimportant",
        "answer": false,
        "correction": "important",
        "options": [
          "important",
          "forbidden",
          "rare",
          "optional"
        ],
        "why": "Page 40: music WAS important to religious rituals and daily work. People sang to the gods and to the kings."
      },
      {
        "kind": "correct",
        "prompt": "Utnapishtim tells how he built a ship and gathered aboard his family in the Epic of Gilgamesh.",
        "underlined": "Gilgamesh",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "He also gathered the craftsmen who helped him and the animals of the field."
      },
      {
        "kind": "correct",
        "prompt": "The historically accurate account of the Flood was revealed to Moses by God.",
        "underlined": "Moses",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "God ensured the Flood was recorded accurately in Genesis 6–8, which Moses wrote."
      },
      {
        "kind": "correct",
        "prompt": "Mesopotamians made beautiful things with the stone they had.",
        "underlined": "stone",
        "answer": false,
        "correction": "materials",
        "options": [
          "materials",
          "gold",
          "clay",
          "bricks"
        ],
        "why": "Page 41: they did NOT have the natural resource of stone, so no large stone sculptures. They made beautiful things with the materials they DID have — gold, lapis lazuli, painted clay."
      },
      {
        "kind": "correct",
        "prompt": "Buildings were constructed of wood.",
        "underlined": "wood",
        "answer": false,
        "correction": "bricks made of mud",
        "options": [
          "bricks made of mud",
          "stone blocks",
          "reeds",
          "limestone"
        ],
        "why": "Page 41: wood was in short supply and stone was not available, so they built with mud bricks."
      },
      {
        "kind": "correct",
        "prompt": "Mesopotamians developed the arch and column.",
        "underlined": "column",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "They were also some of the first people to use domes. Found in temples and wealthy homes."
      },
      {
        "kind": "correct",
        "prompt": "If an enemy attacked, everyone moved inside the turrets.",
        "underlined": "turrets",
        "answer": false,
        "correction": "walls",
        "options": [
          "walls",
          "temples",
          "palaces",
          "gates"
        ],
        "why": "Page 41: the thick city WALLS had turrets and gates. When an enemy attacked everyone moved inside the walls for protection."
      },
      {
        "kind": "correct",
        "prompt": "Houses varied according to the social status of the owner.",
        "underlined": "social status",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Kings lived in palaces, wealthy families in two-story houses with courtyards, middle-class families in smaller one-story houses."
      },
      {
        "kind": "correct",
        "prompt": "Men wore skirt-like garments or robes pinned at the left shoulder.",
        "underlined": "left",
        "answer": false,
        "correction": "right",
        "options": [
          "right",
          "left",
          "either",
          "both"
        ],
        "why": "Page 44: MEN pinned at the right shoulder, WOMEN at the left. Easy to flip — worth memorizing."
      },
      {
        "kind": "correct",
        "prompt": "Parents in Sumer taught their children obedience and respect.",
        "underlined": "obedience and respect",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "They believed in strong discipline. A child who disobeyed might be disowned or sold into slavery."
      },
      {
        "kind": "tf",
        "prompt": "Sargon I established the world's first empire.",
        "answer": true,
        "why": "Around 2270 BC he came to power in the city-state of Kish, built Akkad as his capital, and united the city-states."
      },
      {
        "kind": "tf",
        "prompt": "Hammurabi created all the laws in his famous code himself.",
        "answer": false,
        "why": "He did NOT create them. He gathered, organized, and simplified laws that already existed — 282 of them."
      },
      {
        "kind": "tf",
        "prompt": "The Assyrians created the largest empire the world had seen up to that point.",
        "answer": true,
        "why": "By around 750 BC it included the Fertile Crescent, Egypt, and part of Asia Minor."
      },
      {
        "kind": "tf",
        "prompt": "Under Hammurabi's Code, everyone received the same penalty for the same crime.",
        "answer": false,
        "why": "The penalty varied by the social class of the offender. A wealthy man who broke a commoner's bone only paid a fine."
      },
      {
        "kind": "tf",
        "prompt": "The Hittites excelled at producing iron and made the strongest weapons of their time.",
        "answer": true,
        "why": "The Assyrians later learned iron weapon-making from them."
      },
      {
        "kind": "tf",
        "prompt": "The Chaldean Empire lasted more than three hundred years.",
        "answer": false,
        "why": "It did not last even one hundred years. Under Belshazzar the Medes and Persians conquered the Chaldeans."
      },
      {
        "kind": "mc",
        "prompt": "A group of warriors standing close together in a square was called a ___.",
        "options": [
          "phalanx",
          "cavalry",
          "province",
          "citadel"
        ],
        "answer": "phalanx",
        "why": "Sumerian soldiers wore copper helmets and carried rectangular shields."
      },
      {
        "kind": "mc",
        "prompt": "Sargon I made ___ the capital of his empire.",
        "options": [
          "Akkad",
          "Kish",
          "Babylon",
          "Nineveh"
        ],
        "answer": "Akkad",
        "why": "He came to power in Kish, then built Akkad as his capital."
      },
      {
        "kind": "mc",
        "prompt": "Ur is mentioned in Genesis 11:31 as the birthplace of ___.",
        "options": [
          "Abraham",
          "Noah",
          "Nimrod",
          "Moses"
        ],
        "answer": "Abraham",
        "why": "God revealed Himself to Abraham around 2100 BC and called him to leave Ur — and a whole way of life."
      },
      {
        "kind": "mc",
        "prompt": "The Amorites established the Babylonian Empire with its capital at ___.",
        "options": [
          "Babylon",
          "Akkad",
          "Nineveh",
          "Ur"
        ],
        "answer": "Babylon",
        "why": "On the Euphrates River near modern-day Baghdad, Iraq."
      },
      {
        "kind": "mc",
        "prompt": "The Tower of Babel was probably built in or near ___.",
        "options": [
          "Babylon",
          "Nineveh",
          "Ur",
          "Kish"
        ],
        "answer": "Babylon",
        "why": "Nimrod, the great-grandson of Noah, established a kingdom that included Babylon (Gen. 10:10)."
      },
      {
        "kind": "mc",
        "prompt": "Hammurabi had his code engraved on ___ placed throughout the kingdom.",
        "options": [
          "stone pillars",
          "clay tablets",
          "city gates",
          "temple walls"
        ],
        "answer": "stone pillars",
        "why": "So that everyone would know the law."
      },
      {
        "kind": "mc",
        "prompt": "The Hittites were descendants of Heth, the grandson of ___.",
        "options": [
          "Ham",
          "Shem",
          "Japheth",
          "Noah"
        ],
        "answer": "Ham",
        "why": "Heth was the grandson of Ham and great-grandson of Noah (Gen. 10:15)."
      },
      {
        "kind": "mc",
        "prompt": "The peninsula between the Black Sea and the Mediterranean, now Turkey, is ___.",
        "options": [
          "Asia Minor",
          "the Fertile Crescent",
          "Mesopotamia",
          "Media"
        ],
        "answer": "Asia Minor",
        "why": "The Hittites began settling there about 2000 BC."
      },
      {
        "kind": "mc",
        "prompt": "The capital of the Assyrian Empire, built earlier by Nimrod, was ___.",
        "options": [
          "Nineveh",
          "Babylon",
          "Akkad",
          "Ur"
        ],
        "answer": "Nineveh",
        "why": "One of the first libraries was there. God sent Jonah to Nineveh to preach repentance."
      },
      {
        "kind": "mc",
        "prompt": "In 612 BC, who destroyed Nineveh and ended the Assyrian Empire?",
        "options": [
          "The Chaldeans and Medes",
          "The Hittites",
          "The Amorites",
          "The Persians"
        ],
        "answer": "The Chaldeans and Medes",
        "why": "Babylon then became the capital of the Chaldean Empire, also called the New Babylonian Empire."
      },
      {
        "kind": "mc",
        "prompt": "The Hanging Gardens of Babylon were probably built by Nebuchadnezzar for ___.",
        "options": [
          "his wife",
          "his father",
          "the god Merodach",
          "Daniel"
        ],
        "answer": "his wife",
        "why": "She missed the plants of her mountain homeland. The gardens were one of the wonders of the ancient world."
      },
      {
        "kind": "mc",
        "prompt": "BC stands for \"before Christ\" and is written ___ the year.",
        "options": [
          "after",
          "before",
          "above",
          "either way"
        ],
        "answer": "after",
        "why": "AD stands for anno Domini, \"in the year of the Lord,\" and goes BEFORE the year."
      },
      {
        "kind": "mc",
        "prompt": "Circa, abbreviated ca. or c., is Latin for ___.",
        "options": [
          "around",
          "before",
          "after",
          "century"
        ],
        "answer": "around",
        "why": "It goes before a date when the exact year is not known with certainty."
      },
      {
        "kind": "mc",
        "prompt": "Modern-day ___ contains much of what was ancient Mesopotamia.",
        "options": [
          "Iraq",
          "Iran",
          "Turkey",
          "Syria"
        ],
        "answer": "Iraq",
        "why": "It sits in the Middle East at the head of the Persian Gulf."
      },
      {
        "kind": "multi",
        "prompt": "Which did the Akkadians borrow from the Sumerians?",
        "options": [
          "Cuneiform writing",
          "Farming techniques",
          "Religion",
          "Iron weapons"
        ],
        "answers": [
          "Cuneiform writing",
          "Farming techniques",
          "Religion"
        ],
        "why": "Iron came later, from the Hittites."
      },
      {
        "kind": "multi",
        "prompt": "Which were true of the Assyrian military?",
        "options": [
          "Foot soldiers",
          "Spearmen",
          "Archers",
          "A cavalry",
          "War chariots"
        ],
        "answers": [
          "Foot soldiers",
          "Spearmen",
          "Archers",
          "A cavalry",
          "War chariots"
        ],
        "why": "All five. They also tunneled under city walls and used battering rams on gates."
      },
      {
        "kind": "multi",
        "prompt": "How is Hammurabi's Code DIFFERENT from the Mosaic law?",
        "options": [
          "The Mosaic law has large sections on how to worship God",
          "The Mosaic law forbids special treatment for the wealthy",
          "The Mosaic law is God-centered",
          "Hammurabi's Code was longer"
        ],
        "answers": [
          "The Mosaic law has large sections on how to worship God",
          "The Mosaic law forbids special treatment for the wealthy",
          "The Mosaic law is God-centered"
        ],
        "why": "In the Mosaic law, crime is a sin against God, not just a wrong to another person. That concern with the heart sets God's law apart."
      },
      {
        "kind": "tf",
        "key": true,
        "prompt": "The Sumerian farmers produced a food surplus, which made job specialization possible.",
        "answer": true,
        "why": "A surplus meant not everyone had to farm, so people could specialize in other trades."
      },
      {
        "kind": "tf",
        "key": true,
        "prompt": "The ziggurat was a type of altar in a Sumerian house.",
        "answer": false,
        "why": "The ziggurat was the TEMPLE. It stood in the center of the city."
      },
      {
        "kind": "tf",
        "key": true,
        "prompt": "The Bible tells us that civilizations existed before the Flood.",
        "answer": true,
        "why": "Her answer key says True."
      },
      {
        "kind": "tf",
        "key": true,
        "prompt": "According to Hammurabi's Code, a crime is a sin against God.",
        "answer": false,
        "why": "There are no religious sections in Hammurabi's Code. That is the Mosaic law — crime as sin against God."
      },
      {
        "kind": "mc",
        "key": true,
        "prompt": "The Fertile Crescent was a curved area from the Mediterranean Sea to the ___ Gulf.",
        "options": [
          "Persian",
          "Arabian",
          "Red",
          "Black"
        ],
        "answer": "Persian",
        "why": "Fill-in-the-blank on the test — he has to write it."
      },
      {
        "kind": "mc",
        "key": true,
        "prompt": "The Tigris and the Euphrates provided fertile ___ for farming.",
        "options": [
          "soil",
          "silt",
          "clay",
          "sand"
        ],
        "answer": "soil",
        "why": "Her answer is \"soil.\" Fill-in-the-blank on the test."
      },
      {
        "kind": "mc",
        "key": true,
        "prompt": "Three of the Sumerian architectural features were domes, columns, and ___.",
        "options": [
          "arches",
          "turrets",
          "pillars",
          "gates"
        ],
        "answer": "arches",
        "why": "Domes, columns, and arches."
      },
      {
        "kind": "mc",
        "key": true,
        "prompt": "Asia Minor is a peninsula between the Mediterranean Sea and the ___ Sea.",
        "options": [
          "Black",
          "Red",
          "Caspian",
          "Aegean"
        ],
        "answer": "Black",
        "why": "That peninsula is modern-day Turkey."
      }
    ],
    "drills": [
      "match",
      "keyonly",
      "corronly",
      "extras"
    ],
    "rival": "Sumer City",
    "matchLength": 8
  },
  {
    "id": "sci-ch2-test",
    "subject": "science",
    "title": "Science Chapter 2 Test",
    "added": "2026-09-01",
    "quiz": "2026-09-09",
    "note": "Test Wednesday. Mark ALL that apply is the section he lost both points on last chapter.",
    "type": "bundle",
    "words": [
      {
        "word": "Rock cycle",
        "meaning": "The process of rocks changing from one type into another."
      },
      {
        "word": "Mass movement",
        "meaning": "Erosion caused by gravity, such as soil creep, mudflow, rockslide, or avalanche."
      },
      {
        "word": "Weathering",
        "meaning": "The process of breaking down rocks."
      },
      {
        "word": "Glacier",
        "meaning": "Unmelted snow that has been compacted into ice, heavy enough to slide downhill."
      },
      {
        "word": "Gravity",
        "meaning": "The primary force behind erosion."
      },
      {
        "word": "Abrasion",
        "meaning": "Mechanical weathering that happens when rocks rub against each other, caused by water or wind."
      },
      {
        "word": "Mechanical weathering",
        "meaning": "Breaking rocks into smaller pieces, changing only their size and shape."
      },
      {
        "word": "Chemical weathering",
        "meaning": "Weathering that changes rock into a different substance."
      },
      {
        "word": "Soil horizons",
        "meaning": "The layers soil is made of: O, A (topsoil), B (subsoil), C, and R (bedrock)."
      },
      {
        "word": "Humus",
        "meaning": "Decayed organic material in soil."
      },
      {
        "word": "Sand",
        "meaning": "The largest kind of soil particle, 0.06 mm to 2 mm, rough and quick-draining."
      },
      {
        "word": "Sediment",
        "meaning": "The small particles of rock and mineral that weathering produces."
      },
      {
        "word": "Texture",
        "meaning": "The amount of each kind of particle — sand, silt, and clay — in a soil sample."
      },
      {
        "word": "Delta",
        "meaning": "An area of sediment deposited at the mouth of a river."
      },
      {
        "word": "Deflation",
        "meaning": "When wind blows, picks up loose sediment, and carries it away."
      },
      {
        "word": "Deposition",
        "meaning": "When wind, water, or ice drops sediment and rocks in a new location."
      },
      {
        "word": "Load",
        "meaning": "The sediment that a stream carries."
      },
      {
        "word": "Moraine",
        "meaning": "A pile of soil and rock that a glacier deposits as it melts."
      },
      {
        "word": "Erosion",
        "meaning": "When weathered material moves from one location to another."
      }
    ],
    "extras": [
      {
        "prompt": "What is the difference between weathering and erosion?",
        "answer": "Weathering breaks rocks down. Erosion moves the broken-down material from one place to another. They often happen together but are not the same."
      },
      {
        "prompt": "What is the difference between mechanical and chemical weathering?",
        "answer": "Mechanical weathering changes only the size and shape of a rock. Chemical weathering changes the rock into a different substance."
      },
      {
        "prompt": "Name the types of mechanical weathering.",
        "answer": "Frost wedging, frost heaving, pressure release, exfoliation, abrasion, plants and animals, and catastrophic events like fires and floods."
      },
      {
        "prompt": "Name the examples of chemical weathering.",
        "answer": "Oxidation (rust), carbonic acid dissolving limestone, acid rain, and lichens and mosses secreting mild acids."
      },
      {
        "prompt": "List the three soil particles from largest to smallest.",
        "answer": "Sand, then silt, then clay. It takes about 100,000 clay particles to equal one sand particle."
      },
      {
        "prompt": "What are the three types of rock, and how does each form?",
        "answer": "Sedimentary forms when sediment and the remains of tiny living things settle and harden. Igneous forms when magma cools, below or above the surface. Metamorphic forms below the crust from great heat and pressure."
      },
      {
        "prompt": "What causes acid rain?",
        "answer": "Burning fossil fuels releases sulfur dioxide, which combines with water in the atmosphere to make sulfuric acid. That falls as acid rain and weathers rock much faster than carbonic acid alone."
      },
      {
        "prompt": "How do speleothems form?",
        "answer": "Acidic water seeps into limestone and dissolves calcite. As the water drips, the dissolved calcite is deposited, building stalactites, stalagmites, columns, and drip curtains."
      },
      {
        "prompt": "What is a moraine and what causes it?",
        "answer": "A pile of soil and rock, sometimes hundreds of meters deep. A glacier picks up material as it slides downhill, then deposits it in piles as it melts."
      },
      {
        "prompt": "What are the advantages and disadvantages of sediment deposition?",
        "answer": "Advantage: deposited sediment makes farmland rich, like floodplains and deltas. Disadvantage: it fills stream channels and shipping lanes, and floods can deposit sediment in homes and buildings."
      }
    ],
    "questions": [
      {
        "kind": "tf",
        "prompt": "Weathering breaks down rocks, and erosion moves the broken pieces.",
        "answer": true,
        "why": "That is exactly the difference between the two."
      },
      {
        "kind": "tf",
        "prompt": "Chemical weathering changes only the size and shape of a rock.",
        "answer": false,
        "why": "That describes mechanical weathering. Chemical weathering turns the rock into a different substance."
      },
      {
        "kind": "tf",
        "prompt": "Stalactites grow upward from the floor of a cavern.",
        "answer": false,
        "why": "Stalactites hang from the ceiling like stone icicles. Stalagmites grow up from the floor."
      },
      {
        "kind": "tf",
        "prompt": "Clay is the smallest of the three kinds of soil particle.",
        "answer": true,
        "why": "It takes about 100,000 clay particles to make one sand particle."
      },
      {
        "kind": "tf",
        "prompt": "Gravity is the primary force behind erosion.",
        "answer": true,
        "why": "Water, wind, and ice are agents of erosion, but gravity is the force behind it."
      },
      {
        "kind": "tf",
        "prompt": "Sand particles are smaller than silt particles.",
        "answer": false,
        "why": "Sand is the largest particle, then silt, then clay."
      },
      {
        "kind": "tf",
        "prompt": "Loam is an especially fertile soil.",
        "answer": true,
        "why": "Equal parts sand and silt with about half as much clay. All three sets of properties combine."
      },
      {
        "kind": "tf",
        "prompt": "A glacier that melts faster than new snow falls is called a receding glacier.",
        "answer": true,
        "why": "One that melts completely often leaves a U-shaped valley behind."
      },
      {
        "kind": "mc",
        "prompt": "Mechanical weathering that happens when rocks rub against each other is called ___.",
        "options": [
          "abrasion",
          "plucking",
          "deflation",
          "exfoliation"
        ],
        "answer": "abrasion",
        "why": "Caused by water rolling rocks along a streambed, or by wind carrying sand against them."
      },
      {
        "kind": "mc",
        "prompt": "Water freezing in a crack and forcing the rock apart is called ___.",
        "options": [
          "frost wedging",
          "frost heaving",
          "pressure release",
          "oxidation"
        ],
        "answer": "frost wedging",
        "why": "Water expands as it freezes and acts like a wedge. Frost heaving is when it pushes a rock up out of the ground."
      },
      {
        "kind": "mc",
        "prompt": "Sheets of rock peeling away like the layers of an onion is called ___.",
        "options": [
          "exfoliation",
          "abrasion",
          "plucking",
          "deposition"
        ],
        "answer": "exfoliation",
        "why": "It results from pressure release cracking the rock."
      },
      {
        "kind": "mc",
        "prompt": "When oxygen in the air combines with iron, ___ forms.",
        "options": [
          "iron oxide",
          "carbonic acid",
          "sulfuric acid",
          "humus"
        ],
        "answer": "iron oxide",
        "why": "Iron oxide is rust. This is the most familiar example of oxidation."
      },
      {
        "kind": "mc",
        "prompt": "The weak acid that forms when carbon dioxide dissolves in water is ___.",
        "options": [
          "carbonic acid",
          "sulfuric acid",
          "iron oxide",
          "acid rain"
        ],
        "answer": "carbonic acid",
        "why": "Over long periods it dissolves limestone — that is what wears away old gravestones and carves caverns."
      },
      {
        "kind": "mc",
        "prompt": "Scientists who study soil are called ___.",
        "options": [
          "pedologists",
          "geologists",
          "spelunkers",
          "seismologists"
        ],
        "answer": "pedologists",
        "why": "Spelunkers explore caves. Geologists study rocks generally."
      },
      {
        "kind": "mc",
        "prompt": "The top layer of soil, made of leaf litter and humus, is the ___.",
        "options": [
          "O horizon",
          "A horizon",
          "B horizon",
          "R horizon"
        ],
        "answer": "O horizon",
        "why": "Then A (topsoil), B (subsoil), C, and R (bedrock) underneath."
      },
      {
        "kind": "mc",
        "prompt": "Rock that a glacier has ground into fine powder is called ___.",
        "options": [
          "rock flour",
          "moraine",
          "silt",
          "regolith"
        ],
        "answer": "rock flour",
        "why": "Moraines are often made of rock flour plus huge unbroken rocks."
      },
      {
        "kind": "mc",
        "prompt": "When a glacier pulls a piece of bedrock loose and carries it along, the process is ___.",
        "options": [
          "plucking",
          "abrasion",
          "deflation",
          "deposition"
        ],
        "answer": "plucking",
        "why": "It happens where there are weaknesses in the bedrock."
      },
      {
        "kind": "mc",
        "prompt": "Wind picking up loose sediment and carrying it away is called ___.",
        "options": [
          "deflation",
          "deposition",
          "abrasion",
          "exfoliation"
        ],
        "answer": "deflation",
        "why": "Wind cannot move large particles the way water can, but a strong wind can carry tons of sediment."
      },
      {
        "kind": "mc",
        "prompt": "An area of sediment at the mouth of a river is a ___.",
        "options": [
          "delta",
          "floodplain",
          "moraine",
          "sandbar"
        ],
        "answer": "delta",
        "why": "Named for the triangular Greek letter. A floodplain is an area that commonly floods."
      },
      {
        "kind": "mc",
        "prompt": "Sediment that a stream carries but does not dissolve is its ___.",
        "options": [
          "suspended load",
          "dissolved load",
          "moraine",
          "texture"
        ],
        "answer": "suspended load",
        "why": "Minerals that do dissolve are the dissolved load. Together they make up the stream's load."
      },
      {
        "kind": "mc",
        "prompt": "The slow downhill movement of soil that makes fences and trees lean is ___.",
        "options": [
          "soil creep",
          "mudflow",
          "rockslide",
          "avalanche"
        ],
        "answer": "soil creep",
        "why": "It is one of the slowest mass movements. A mudflow is one of the fastest."
      },
      {
        "kind": "mc",
        "prompt": "A stone icicle hanging from a cave ceiling is a ___.",
        "options": [
          "stalactite",
          "stalagmite",
          "column",
          "drip curtain"
        ],
        "answer": "stalactite",
        "why": "Stalactites hold tight to the ceiling. Stalagmites might reach the ceiling one day."
      },
      {
        "kind": "mc",
        "prompt": "When a stalactite and a stalagmite grow together they form a ___.",
        "options": [
          "column",
          "drip curtain",
          "speleothem",
          "moraine"
        ],
        "answer": "column",
        "why": "All cave formations are speleothems; a column is that specific one."
      },
      {
        "kind": "mc",
        "prompt": "Soil that is equal parts sand and silt with about half as much clay is called ___.",
        "options": [
          "loam",
          "humus",
          "silt loam",
          "regolith"
        ],
        "answer": "loam",
        "why": "The properties of all three particles combine, making it especially fertile."
      },
      {
        "kind": "multi",
        "prompt": "Which of these are types of MECHANICAL weathering?",
        "options": [
          "Frost wedging",
          "Abrasion",
          "Oxidation",
          "Exfoliation",
          "Acid rain",
          "Frost heaving"
        ],
        "answers": [
          "Frost wedging",
          "Abrasion",
          "Exfoliation",
          "Frost heaving"
        ],
        "why": "Oxidation and acid rain change the rock into a new substance, so they are chemical."
      },
      {
        "kind": "multi",
        "prompt": "Which of these are agents of erosion?",
        "options": [
          "Water",
          "Wind",
          "Ice",
          "Sunlight"
        ],
        "answers": [
          "Water",
          "Wind",
          "Ice"
        ],
        "why": "Gravity is the force behind erosion; water, wind, and ice are the agents that carry material."
      },
      {
        "kind": "multi",
        "prompt": "Which of these are mass movements?",
        "options": [
          "Soil creep",
          "Mudflow",
          "Deflation",
          "Rockslide",
          "Avalanche",
          "Earth flow"
        ],
        "answers": [
          "Soil creep",
          "Mudflow",
          "Rockslide",
          "Avalanche",
          "Earth flow"
        ],
        "why": "Deflation is wind erosion, not gravity. Every other one here is gravity pulling material downhill."
      },
      {
        "kind": "multi",
        "prompt": "Which of these are examples of CHEMICAL weathering?",
        "options": [
          "Oxidation",
          "Carbonic acid dissolving limestone",
          "Frost heaving",
          "Acid rain",
          "Lichens secreting acids"
        ],
        "answers": [
          "Oxidation",
          "Carbonic acid dissolving limestone",
          "Acid rain",
          "Lichens secreting acids"
        ],
        "why": "Frost heaving just lifts and cracks the rock, so it is mechanical."
      },
      {
        "kind": "multi",
        "prompt": "Which of these are kinds of soil particle?",
        "options": [
          "Sand",
          "Silt",
          "Clay",
          "Humus"
        ],
        "answers": [
          "Sand",
          "Silt",
          "Clay"
        ],
        "why": "Humus is decayed organic material, not a particle size."
      },
      {
        "kind": "multi",
        "prompt": "Which of these can form caves?",
        "options": [
          "Crashing waves",
          "Wind",
          "Running water",
          "Chemical weathering of limestone"
        ],
        "answers": [
          "Crashing waves",
          "Wind",
          "Running water",
          "Chemical weathering of limestone"
        ],
        "why": "All four. Waves, wind, and water form caves mechanically; limestone caverns form chemically."
      },
      {
        "kind": "multi",
        "prompt": "Which of these are true about deposition?",
        "options": [
          "The heaviest sediment drops first",
          "Deposits often look layered",
          "It builds deltas and floodplains",
          "It only happens in water"
        ],
        "answers": [
          "The heaviest sediment drops first",
          "Deposits often look layered",
          "It builds deltas and floodplains"
        ],
        "why": "Wind and ice deposit sediment too — sand dunes and moraines are both deposits."
      },
      {
        "kind": "mc",
        "prompt": "Which soil layer is made of leaf litter and humus?",
        "options": [
          "O horizon",
          "A horizon",
          "B horizon",
          "C horizon"
        ],
        "answer": "O horizon",
        "why": "The very top layer. Then A (topsoil), B (subsoil), C, and R (bedrock)."
      },
      {
        "kind": "mc",
        "prompt": "Topsoil, where most plants germinate and grow roots, is the ___.",
        "options": [
          "A horizon",
          "O horizon",
          "B horizon",
          "R horizon"
        ],
        "answer": "A horizon",
        "why": "It has a high proportion of humus along with minerals from weathered rock."
      },
      {
        "kind": "mc",
        "prompt": "Subsoil, made mostly of weathered minerals from bedrock, is the ___.",
        "options": [
          "B horizon",
          "A horizon",
          "C horizon",
          "O horizon"
        ],
        "answer": "B horizon",
        "why": "It holds a few nutrients washed down from the humus above."
      },
      {
        "kind": "mc",
        "prompt": "Unweathered parent rock underneath all the horizons is the ___.",
        "options": [
          "R horizon",
          "C horizon",
          "B horizon",
          "O horizon"
        ],
        "answer": "R horizon",
        "why": "Also called bedrock, or regolith. It shapes the texture of all the soil above it."
      },
      {
        "kind": "mc",
        "prompt": "From the surface downward, the soil horizons run in what order?",
        "options": [
          "O, A, B, C, R",
          "A, O, B, R, C",
          "R, C, B, A, O",
          "O, B, A, C, R"
        ],
        "answer": "O, A, B, C, R",
        "why": "Leaf litter, topsoil, subsoil, weathered bedrock fragments, then bedrock. Her Chapter 1 test had a label-the-diagram section — expect this one."
      },
      {
        "kind": "multi",
        "prompt": "Which of these belong to MECHANICAL weathering?",
        "options": [
          "Pressure release",
          "Exfoliation",
          "Tree roots splitting a rock",
          "Rust forming on iron",
          "Acid rain"
        ],
        "answers": [
          "Pressure release",
          "Exfoliation",
          "Tree roots splitting a rock"
        ],
        "why": "Rust is oxidation and acid rain is chemical — both change the rock into a new substance."
      }
    ],
    "sortGroups": [
      {
        "name": "Mechanical weathering",
        "partOne": true,
        "books": [
          "Frost wedging",
          "Frost heaving",
          "Pressure release",
          "Exfoliation",
          "Abrasion",
          "Tree roots splitting a rock",
          "Burrowing animals",
          "Wind blasting sand against rock",
          "A rockslide breaking rock apart"
        ]
      },
      {
        "name": "Chemical weathering",
        "partOne": true,
        "books": [
          "Oxidation",
          "Rust forming on iron",
          "Carbonic acid dissolving limestone",
          "Acid rain",
          "Lichens and mosses secreting acids",
          "Rainwater wearing away a limestone gravestone"
        ]
      }
    ],
    "orderGroups": [
      {
        "name": "Soil horizons, top to bottom",
        "partOne": true,
        "books": [
          "O horizon — leaf litter and humus",
          "A horizon — topsoil",
          "B horizon — subsoil",
          "C horizon — weathered bedrock fragments",
          "R horizon — bedrock"
        ]
      }
    ],
    "lines": [
      [
        "O horizon — leaf litter and humus",
        "A horizon — topsoil",
        "B horizon — subsoil",
        "C horizon — weathered bedrock fragments",
        "R horizon — bedrock"
      ]
    ],
    "drills": [
      "match",
      "meaning",
      "multionly",
      "mixed"
    ],
    "rival": "Granite Rovers"
  },
  {
    "id": "bible-john-15-4",
    "subject": "bible",
    "title": "John 15:4 verse quiz",
    "added": "2026-09-04",
    "quiz": "2026-09-11",
    "note": "Word for word, ESV. Quiz Friday. Study a little every day.",
    "type": "verse",
    "reference": "John 15:4",
    "version": "ESV",
    "text": "Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me.",
    "assess": "quiz"
  },
  {
    "id": "bible-nt-books",
    "subject": "bible",
    "title": "New Testament Books — In Order",
    "added": "2026-09-04",
    "quiz": "2026-09-14",
    "note": "All 27 books. Expect a word bank and blank lines, like the Old Testament quizzes.",
    "type": "sequence",
    "drills": [
      "chant",
      "recall",
      "bank"
    ],
    "groups": [
      {
        "name": "The Gospels",
        "partOne": true,
        "books": [
          "Matthew",
          "Mark",
          "Luke",
          "John"
        ]
      },
      {
        "name": "History",
        "partOne": true,
        "books": [
          "Acts"
        ]
      },
      {
        "name": "Paul's Letters",
        "partOne": true,
        "books": [
          "Romans",
          "1 Corinthians",
          "2 Corinthians",
          "Galatians",
          "Ephesians",
          "Philippians",
          "Colossians",
          "1 Thessalonians",
          "2 Thessalonians",
          "1 Timothy",
          "2 Timothy",
          "Titus",
          "Philemon"
        ]
      },
      {
        "name": "General Letters",
        "partOne": true,
        "books": [
          "Hebrews",
          "James",
          "1 Peter",
          "2 Peter",
          "1 John",
          "2 John",
          "3 John",
          "Jude"
        ]
      },
      {
        "name": "Prophecy",
        "partOne": true,
        "books": [
          "Revelation"
        ]
      }
    ],
    "lines": [
      [
        "Matthew",
        "Mark",
        "Luke",
        "John",
        "Acts"
      ],
      [
        "Romans",
        "1 Corinthians",
        "2 Corinthians",
        "Galatians"
      ],
      [
        "Ephesians",
        "Philippians",
        "Colossians"
      ],
      [
        "1 Thessalonians",
        "2 Thessalonians",
        "1 Timothy",
        "2 Timothy"
      ],
      [
        "Titus",
        "Philemon",
        "Hebrews",
        "James"
      ],
      [
        "1 Peter",
        "2 Peter",
        "1 John",
        "2 John",
        "3 John"
      ],
      [
        "Jude",
        "Revelation"
      ]
    ],
    "assess": "quiz"
  },
  {
    "id": "ela-spelling-2",
    "subject": "ela",
    "title": "Spelling List 2",
    "added": "2026-09-05",
    "quiz": "2026-09-10",
    "note": "Twenty words, test Thursday. Build it from letters, then spot the right spelling.",
    "type": "bundle",
    "spellWords": [
      "automobile",
      "automotive",
      "circumstances",
      "multilingual",
      "paralegal",
      "paramount",
      "photographer",
      "paramedic",
      "semifinal",
      "televised",
      "television",
      "finalists",
      "tiebreaker",
      "dominating",
      "irretrievable",
      "reverberate",
      "corporate",
      "corporation",
      "expel",
      "repel"
    ],
    "questions": [
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "automobile",
          "automobil",
          "autamobile",
          "automoble"
        ],
        "answer": "automobile",
        "why": "\"automobile\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "automotive",
          "automotiv",
          "autamotive",
          "automotave"
        ],
        "answer": "automotive",
        "why": "\"automotive\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "circumstances",
          "circumstanses",
          "circomstances",
          "circumstansces"
        ],
        "answer": "circumstances",
        "why": "\"circumstances\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "multilingual",
          "multilingal",
          "multilinguel",
          "multalingual"
        ],
        "answer": "multilingual",
        "why": "\"multilingual\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "paralegal",
          "parelegal",
          "paralagal",
          "parralegal"
        ],
        "answer": "paralegal",
        "why": "\"paralegal\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "paramount",
          "paramont",
          "paramaunt",
          "parramount"
        ],
        "answer": "paramount",
        "why": "\"paramount\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "photographer",
          "photographor",
          "fotographer",
          "photografer"
        ],
        "answer": "photographer",
        "why": "\"photographer\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "paramedic",
          "paremedic",
          "paramedec",
          "parramedic"
        ],
        "answer": "paramedic",
        "why": "\"paramedic\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "semifinal",
          "semifinel",
          "semmifinal",
          "semifinial"
        ],
        "answer": "semifinal",
        "why": "\"semifinal\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "televised",
          "televized",
          "telivised",
          "televiced"
        ],
        "answer": "televised",
        "why": "\"televised\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "television",
          "televison",
          "telivision",
          "televission"
        ],
        "answer": "television",
        "why": "\"television\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "finalists",
          "finalests",
          "finilists",
          "finalistes"
        ],
        "answer": "finalists",
        "why": "\"finalists\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "tiebreaker",
          "tiebraker",
          "tybreaker",
          "tiebreacker"
        ],
        "answer": "tiebreaker",
        "why": "\"tiebreaker\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "dominating",
          "dominateing",
          "domanating",
          "dominatting"
        ],
        "answer": "dominating",
        "why": "\"dominating\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "irretrievable",
          "irretreivable",
          "iretrievable",
          "irretrievible"
        ],
        "answer": "irretrievable",
        "why": "\"irretrievable\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "reverberate",
          "reverbarate",
          "revervberate",
          "reverberrate"
        ],
        "answer": "reverberate",
        "why": "\"reverberate\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "corporate",
          "corperate",
          "corporet",
          "coporate"
        ],
        "answer": "corporate",
        "why": "\"corporate\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "corporation",
          "corperation",
          "coporation",
          "corporashion"
        ],
        "answer": "corporation",
        "why": "\"corporation\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "expel",
          "expell",
          "exspel",
          "ecspel"
        ],
        "answer": "expel",
        "why": "\"expel\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "repel",
          "repell",
          "rapel",
          "repelle"
        ],
        "answer": "repel",
        "why": "\"repel\" is the one on her list."
      }
    ],
    "drills": [
      "spell",
      "mconly"
    ]
  },
  {
    "id": "math-unit-1",
    "subject": "math",
    "title": "Math Unit 1 Test",
    "added": "2026-09-05",
    "note": "TEST TOMORROW. Properties, GCF and LCM first — those are the ones costing marks. Then the paper practice test.",
    "type": "bundle",
    "mathTopics": [
      "gcf",
      "lcm",
      "factorcount",
      "largestprime",
      "primefactorcount",
      "nextprime",
      "rounding",
      "placevalue",
      "exponent",
      "squareroot",
      "orderops",
      "orderopsfrac"
    ],
    "mathRound": 10,
    "drills": [
      "mconly",
      "decide",
      "multionly",
      "numpad"
    ],
    "words": [
      {
        "word": "Factor",
        "meaning": "A number that divides into another number evenly, with nothing left over. The factors of 12 are 1, 2, 3, 4, 6, and 12."
      },
      {
        "word": "Multiple",
        "meaning": "The result of multiplying a number by a whole number. Multiples of 4 are 4, 8, 12, 16, and so on — they get bigger, while factors stay small."
      },
      {
        "word": "Prime number",
        "meaning": "A number greater than 1 whose only factors are 1 and itself. 2, 3, 5, 7, 11, 13."
      },
      {
        "word": "Composite number",
        "meaning": "A number greater than 1 that has more than two factors. 4, 6, 8, 9, 10."
      },
      {
        "word": "Greatest common factor (GCF)",
        "meaning": "The largest factor that two numbers share. The GCF of 18 and 24 is 6."
      },
      {
        "word": "Least common multiple (LCM)",
        "meaning": "The smallest multiple that two numbers share. The LCM of 6 and 8 is 24."
      },
      {
        "word": "Prime factorization",
        "meaning": "Writing a number as a multiplication of only prime numbers. 60 = 2 × 2 × 3 × 5."
      },
      {
        "word": "Commutative property",
        "meaning": "Changing the ORDER of the numbers does not change the sum or product. 5 + 4 = 4 + 5."
      },
      {
        "word": "Associative property",
        "meaning": "Changing the GROUPING of the numbers does not change the sum or product. (1 + 9) + 6 = 1 + (9 + 6)."
      },
      {
        "word": "Distributive property",
        "meaning": "Multiply across a sum: 8 × 23 = 8(20) + 8(3). Used to break a hard product into easy ones."
      },
      {
        "word": "Standard form",
        "meaning": "A number written the normal way, with digits: 1,423,715."
      },
      {
        "word": "Expanded form",
        "meaning": "A number written as the sum of each digit's value: 1,000,000 + 400,000 + 20,000 + 3,000 + 700 + 10 + 5."
      },
      {
        "word": "Perfect square",
        "meaning": "A number you get by multiplying a whole number by itself. 1, 4, 9, 16, 25, 36, 49, 64, 81, 100."
      },
      {
        "word": "Exponent",
        "meaning": "Tells how many times to multiply the base by itself. In 2^5, the 5 is the exponent and the value is 32."
      }
    ],
    "quiz": "2026-09-16",
    "questions": [
      {
        "kind": "mc",
        "prompt": "Name the property:   17(4 + 5) = 17(4) + 17(5)",
        "options": [
          "Commutative",
          "Associative",
          "Distributive",
          "Invalid"
        ],
        "answer": "Distributive",
        "why": "Multiplying across the sum inside the brackets."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   (18 · 3) · 7 = 18 · (3 · 7)",
        "options": [
          "Commutative",
          "Associative",
          "Distributive",
          "Invalid"
        ],
        "answer": "Associative",
        "why": "The GROUPING moved. Same numbers, same order."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   (10 − 4) − 1 = 1 − (10 − 4)",
        "options": [
          "Commutative",
          "Associative",
          "Distributive",
          "Invalid"
        ],
        "answer": "Invalid",
        "why": "Subtraction is not commutative. 5 does not equal −5."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   36 ÷ (7 + 2) = 36 ÷ (2 + 7)",
        "options": [
          "Commutative",
          "Associative",
          "Distributive",
          "Invalid"
        ],
        "answer": "Commutative",
        "why": "The ORDER inside the brackets swapped."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   (5 + 14) · 2 = 2 · (5 + 14)",
        "options": [
          "Commutative",
          "Associative",
          "Distributive",
          "Invalid"
        ],
        "answer": "Commutative",
        "why": "The order of the two factors swapped."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   8 · 23 = 8(20) + 8(3)",
        "options": [
          "Commutative",
          "Associative",
          "Distributive",
          "Invalid"
        ],
        "answer": "Distributive",
        "why": "23 was split into 20 + 3 and 8 multiplied across."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   2 + (13 + 6) = (2 + 13) + 6",
        "options": [
          "Commutative",
          "Associative",
          "Distributive",
          "Invalid"
        ],
        "answer": "Associative",
        "why": "The grouping moved; the order did not."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   4(7 + 3) = (4 + 7) · (4 + 3)",
        "options": [
          "Commutative",
          "Associative",
          "Distributive",
          "Invalid"
        ],
        "answer": "Invalid",
        "why": "You cannot distribute like that. 40 does not equal 77."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   6(20) + 6(3) = 6(23)",
        "options": [
          "Commutative",
          "Associative",
          "Distributive",
          "Invalid"
        ],
        "answer": "Distributive",
        "why": "The distributive property run backwards, pulling the 6 out."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   8(5 · 4) = 8(4 · 5)",
        "options": [
          "Commutative",
          "Associative",
          "Distributive",
          "Invalid"
        ],
        "answer": "Commutative",
        "why": "The order of 5 and 4 swapped inside the brackets."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   13 + (3 + 1) = (13 + 3) + 1",
        "options": [
          "Associative Property of Addition",
          "Associative Property of Multiplication",
          "Commutative Property of Addition",
          "Distributive Property"
        ],
        "answer": "Associative Property of Addition",
        "why": "The GROUPING moved and it is addition. Mrs. George writes the full name on her key — say which operation, not just 'associative'."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   (11 + 6) · 8 = 8 · (11 + 6)",
        "options": [
          "Commutative Property of Multiplication",
          "Commutative Property of Addition",
          "Associative Property of Multiplication",
          "Distributive Property"
        ],
        "answer": "Commutative Property of Multiplication",
        "why": "The two factors swapped ORDER. The bracket is just one of the factors — nothing was distributed."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   8(5 + 1) = 8(1 + 5)",
        "options": [
          "Distributive Property",
          "Commutative Property of Addition",
          "Associative Property of Addition",
          "Commutative Property of Multiplication"
        ],
        "answer": "Commutative Property of Addition",
        "why": "Only the 5 and 1 INSIDE the brackets swapped, and they are being added. The 8 never multiplied across, so it is not distributive."
      },
      {
        "kind": "mc",
        "prompt": "Name the property:   (2⁴ · 5) · 9 = 2⁴ · (5 · 9)",
        "options": [
          "Commutative Property of Multiplication",
          "Associative Property of Multiplication",
          "Distributive Property",
          "Invalid"
        ],
        "answer": "Associative Property of Multiplication",
        "why": "Same order, brackets moved, all multiplication."
      },
      {
        "kind": "mc",
        "prompt": "Which is an example of the commutative property of multiplication?",
        "options": [
          "6(11 + 3) = (11 + 3)6",
          "5(9 + 2) = 5(9) + 5(2)",
          "(4 · 3) + 8 = 8 + (4 · 3)",
          "(7 · 5) · 2 = 7 · (5 · 2)"
        ],
        "answer": "6(11 + 3) = (11 + 3)6",
        "why": "Two things being MULTIPLIED swapped order. The third choice also swaps order, but those two things are being added — that one is commutative of addition."
      },
      {
        "kind": "mc",
        "prompt": "Which is an example of the associative property of addition?",
        "options": [
          "3 + 12 = 12 + 3",
          "(2 + 7) + 5 = 2 + (7 + 5)",
          "(6 · 2) · 4 = 6 · (2 · 4)",
          "9(4 + 1) = 9(4) + 9(1)"
        ],
        "answer": "(2 + 7) + 5 = 2 + (7 + 5)",
        "why": "Brackets moved, order unchanged, addition. The third choice does the same thing but with multiplication."
      },
      {
        "kind": "mc",
        "prompt": "Which is an example of the commutative property of addition?",
        "options": [
          "8(3 + 4) = 8(3) + 8(4)",
          "(5 + 9) + 1 = 5 + (9 + 1)",
          "14 + 6 = 6 + 14",
          "(2 · 8) · 3 = 2 · (8 · 3)"
        ],
        "answer": "14 + 6 = 6 + 14",
        "why": "Order swapped, addition. Nothing regrouped and nothing distributed."
      },
      {
        "kind": "mc",
        "prompt": "Which is an example of the associative property of multiplication?",
        "options": [
          "7 · 12 = 12 · 7",
          "6(10 + 2) = 6(10) + 6(2)",
          "(9 + 3) + 2 = 9 + (3 + 2)",
          "(4 · 5) · 6 = 4 · (5 · 6)"
        ],
        "answer": "(4 · 5) · 6 = 4 · (5 · 6)",
        "why": "Brackets moved, order unchanged, multiplication. The third choice is the addition version."
      },
      {
        "kind": "mc",
        "prompt": "Which is an example of the distributive property?",
        "options": [
          "4(6 + 5) = 4(5 + 6)",
          "4 + (6 + 5) = (4 + 6) + 5",
          "4(6 + 5) = 4(6) + 4(5)",
          "4(6 + 5) = (6 + 5)4"
        ],
        "answer": "4(6 + 5) = 4(6) + 4(5)",
        "why": "The 4 multiplied across BOTH numbers in the sum. The others only move or reorder things."
      },
      {
        "kind": "mc",
        "prompt": "Which list contains the common factors of 12 and 18?",
        "options": [
          "1, 2, 3, and 6",
          "1 and 6",
          "36 and 72",
          "2, 3, and 4"
        ],
        "answer": "1, 2, 3, and 6",
        "why": "It asks for the common FACTORS, all of them — not just the greatest one. 6 alone would be the GCF."
      },
      {
        "kind": "mc",
        "prompt": "Lana is simplifying   45 − 10 + 18 ÷ 3².   What should she do FIRST?",
        "options": [
          "subtract 10 from 45",
          "add 18 to 10",
          "divide 18 by 3",
          "square the 3"
        ],
        "answer": "square the 3",
        "why": "Exponents come before multiply/divide and before add/subtract. Left-to-right only breaks ties within the same level."
      },
      {
        "kind": "multi",
        "prompt": "Which values is 4,050 divisible by? Check ALL that apply.",
        "options": [
          "2",
          "3",
          "4",
          "5",
          "6",
          "9",
          "10"
        ],
        "answers": [
          "2",
          "3",
          "5",
          "6",
          "9",
          "10"
        ],
        "why": "Even so 2. Digits add to 9, so 3 AND 9. Ends in 0, so 5 and 10. Even plus digit-sum-of-3 gives 6. Last two digits are 50, which is not divisible by 4."
      },
      {
        "kind": "multi",
        "prompt": "Which values is 1,176 divisible by? Check ALL that apply.",
        "options": [
          "2",
          "3",
          "4",
          "5",
          "6",
          "9",
          "10"
        ],
        "answers": [
          "2",
          "3",
          "4",
          "6"
        ],
        "why": "Even so 2. Digits add to 15 — a multiple of 3 but NOT of 9. Last two digits 76 divide by 4. Even and divisible by 3 gives 6. Ends in 6, so no 5 and no 10."
      },
      {
        "kind": "multi",
        "prompt": "Which values are composite numbers? Check ALL that apply.",
        "options": [
          "57",
          "83",
          "91",
          "101",
          "119"
        ],
        "answers": [
          "57",
          "91",
          "119"
        ],
        "why": "57 = 3 × 19, 91 = 7 × 13, 119 = 7 × 17. 83 and 101 are prime. Check the sevens and thirteens — they hide well."
      }
    ],
    "decideProblems": [
      {
        "prompt": "Scott is buying snacks for a baseball team. Drink boxes come in packs of 24 and fruit snacks come in packs of 15. He wants an equal number of drink boxes and fruit snacks. How many packages of each will he need to purchase?",
        "use": "LCM",
        "useWhy": "Two things repeating until they line up at the same total — that is a least common multiple.",
        "ask": "How many PACKS OF DRINK BOXES does he need?",
        "answer": 5,
        "label": "packs",
        "why": "LCM(24, 15) = 120, so he needs 120 of each. 120 ÷ 24 = 5 packs of drink boxes.",
        "also": {
          "ask": "And how many PACKS OF FRUIT SNACKS?",
          "answer": 8,
          "label": "packs",
          "why": "120 ÷ 15 = 8. The question says 'of each', so both numbers are part of the answer."
        }
      },
      {
        "prompt": "Nora baked cut-out cookies shaped like hearts and stars to put on plates for children to decorate. She has 108 hearts and 189 stars, and wants each child to get the same combination of hearts and stars. What is the greatest number of plates she will need?",
        "use": "GCF",
        "useWhy": "Splitting two piles into identical shares with nothing left over — that is a greatest common factor.",
        "ask": "What is the greatest number of plates?",
        "answer": 27,
        "label": "plates",
        "why": "108 = 2² × 3³ and 189 = 3³ × 7. The largest factor they share is 27, so 27 plates — 4 hearts and 7 stars on each."
      },
      {
        "prompt": "Plastic eggs are being filled with quarters, dimes, and nickels for an egg hunt. There are 54 quarters, 90 dimes, and 72 nickels, and each coin will be equally distributed to each egg. What is the largest number of eggs that can be filled if there are no leftover coins?",
        "use": "GCF",
        "useWhy": "Equal shares out of three piles, nothing left over. Largest number of groups means GCF.",
        "ask": "What is the largest number of eggs?",
        "answer": 18,
        "label": "eggs",
        "why": "The GCF of 54, 90 and 72 is 18. Each egg gets 3 quarters, 5 dimes and 4 nickels."
      },
      {
        "prompt": "The red-line train arrives every 48 minutes and the blue-line train arrives every 30 minutes. Both arrive at 11:30 am. When is the next time both trains arrive at the station simultaneously?",
        "use": "LCM",
        "useWhy": "'When will both happen again' is always a least common multiple.",
        "ask": "How many MINUTES until they next arrive together?",
        "answer": 240,
        "label": "minutes",
        "why": "LCM(48, 30) = 240 minutes, which is 4 hours. Careful — the question asks WHEN, so the answer she wants is 3:30 pm, not 240."
      },
      {
        "prompt": "Marla gets paid every 8 days at one job and every 28 days at her other job. If both jobs pay her on the same day, how many days until she gets paid by both jobs on the same day again?",
        "use": "LCM",
        "useWhy": "Two cycles lining up again — least common multiple.",
        "ask": "How many days?",
        "answer": 56,
        "label": "days",
        "why": "8 = 2³ and 28 = 2² × 7, so the LCM is 2³ × 7 = 56 days."
      },
      {
        "prompt": "Pencils come in packs of 6, markers come in packs of 9, and erasers come in packs of 18. You want an equal number of each. How many packages should you buy of each?",
        "use": "LCM",
        "useWhy": "Different pack sizes reaching the same total — least common multiple.",
        "ask": "What is the smallest number you can have of each item?",
        "answer": 18,
        "label": "of each",
        "why": "LCM(6, 9, 18) = 18.",
        "also": {
          "ask": "How many PACKS OF PENCILS is that?",
          "answer": 3,
          "label": "packs",
          "why": "18 ÷ 6 = 3 packs of pencils. Markers take 2 packs and erasers just 1."
        }
      },
      {
        "prompt": "A teacher has 40 pencils and 112 erasers. She wants to make identical supply kits using all of them, with nothing left over. What is the greatest number of kits she can make?",
        "use": "GCF",
        "useWhy": "Identical kits, nothing left over, greatest number of them — GCF.",
        "ask": "What is the greatest number of kits?",
        "answer": 8,
        "label": "kits",
        "why": "40 = 2³ × 5 and 112 = 2⁴ × 7. The largest factor they share is 8, so 8 kits — 5 pencils and 14 erasers in each."
      },
      {
        "prompt": "One machine finishes a cycle every 16 seconds and another finishes every 72 seconds. They both start a cycle at the same moment. How many seconds until they start a cycle together again?",
        "use": "LCM",
        "useWhy": "Two repeating cycles meeting again — least common multiple.",
        "ask": "How many seconds?",
        "answer": 144,
        "label": "seconds",
        "why": "16 = 2⁴ and 72 = 2³ × 3², so the LCM is 2⁴ × 3² = 144 seconds."
      },
      {
        "prompt": "A florist has 72 roses and 252 daisies. She wants to make identical bouquets using every flower. What is the greatest number of bouquets she can make?",
        "use": "GCF",
        "useWhy": "Identical bouquets using everything up — greatest common factor.",
        "ask": "What is the greatest number of bouquets?",
        "answer": 36,
        "label": "bouquets",
        "why": "GCF(72, 252) = 36. Each bouquet gets 2 roses and 7 daisies."
      },
      {
        "prompt": "Maya is packing gift bags with 84 stickers and 126 pencils. She wants the same combination of stickers and pencils in every bag, using all of them. What is the maximum number of bags she can make?",
        "use": "GCF",
        "useWhy": "Same combination in each bag, everything used up, maximum number of bags — greatest common factor.",
        "ask": "What is the maximum number of bags?",
        "answer": 42,
        "label": "bags",
        "why": "84 = 2² × 3 × 7 and 126 = 2 × 3² × 7. The shared factors are 2 × 3 × 7 = 42, so 42 bags — 2 stickers and 3 pencils in each."
      },
      {
        "prompt": "Bus A leaves the station every 24 minutes and Bus B leaves every 36 minutes. Both leave together at 2:15 pm. When is the next time both buses leave together?",
        "use": "LCM",
        "useWhy": "Two schedules lining up again — least common multiple.",
        "ask": "How many MINUTES until they leave together again?",
        "answer": 72,
        "label": "minutes",
        "why": "24 = 2³ × 3 and 36 = 2² × 3², so the LCM is 2³ × 3² = 72 minutes. Careful — it asks WHEN, so the answer she wants is 3:27 pm, not 72."
      },
      {
        "prompt": "Carrie is packing baskets with 150 blueberries and 180 raspberries. She wants the same combination of blueberries and raspberries in each basket. What is the maximum number of baskets she will need?",
        "use": "GCF",
        "useWhy": "Same combination in every basket, largest number of them — greatest common factor.",
        "ask": "What is the maximum number of baskets?",
        "answer": 30,
        "label": "baskets",
        "why": "150 = 2 × 3 × 5² and 180 = 2² × 3² × 5. Shared: 2 × 3 × 5 = 30 baskets — 5 blueberries and 6 raspberries each."
      },
      {
        "prompt": "Radio Station A plays a certain commercial every 18 minutes. Radio Station B plays the same commercial every 33 minutes. Both played it at 4:00 pm. When is the next time both commercials play at the same time?",
        "use": "LCM",
        "useWhy": "Two repeating schedules meeting again — least common multiple.",
        "ask": "How many MINUTES until they play together again?",
        "answer": 198,
        "label": "minutes",
        "why": "18 = 2 × 3² and 33 = 3 × 11, so the LCM is 2 × 3² × 11 = 198 minutes = 3 hours 18 minutes. That makes the answer 7:18 pm — the question asks WHEN."
      }
    ],
    "decideRound": 8,
    "extras": [
      {
        "prompt": "Use the distributive property to find 4(97). Say every step out loud, including the middle line.",
        "answer": "4(97) = 4(100 − 3) = 400 − 12 = 388. The middle line is the part she marks — the standard algorithm gets no credit here."
      },
      {
        "prompt": "Use the distributive property to find 9(53) + 7(28).",
        "answer": "9(53) = 9(50 + 3) = 450 + 27 = 477. 7(28) = 7(30 − 2) = 210 − 14 = 196. Then 477 + 196 = 673."
      },
      {
        "prompt": "On Homework 8 you wrote 5(62) = 5(60 + 2) and then jumped straight to 310. Say the line she wanted in between.",
        "answer": "5(62) = 5(60 + 2) = 5 · 60 + 5 · 2 = 300 + 10 = 310. That missing line cost a point four separate times."
      },
      {
        "prompt": "Write the prime factorization of 96 — then multiply your factors back together to check it.",
        "answer": "96 = 2⁵ × 3. Check: 2 × 2 × 2 × 2 × 2 = 32, and 32 × 3 = 96. On the homework you had 2·2·2·3, which multiplies back to only 24 — the check would have caught it."
      },
      {
        "prompt": "Write the prime factorization of 378 — then multiply back to check.",
        "answer": "378 = 2 × 3³ × 7. Check: 2 × 27 = 54, and 54 × 7 = 378. On the homework you had 2²·5·13, which is 260."
      },
      {
        "prompt": "Write 1,423,715 in word form.",
        "answer": "one million, four hundred twenty-three thousand, seven hundred fifteen. Hyphen in twenty-three, and no 'and' anywhere in a whole number."
      },
      {
        "prompt": "A stadium seats 62,005. There were 58,319 people at the game. How many seats were empty? Give the answer the way she wants it written.",
        "answer": "62,005 − 58,319 = 3,686 empty seats. The word 'seats' is the label — a bare 3,686 loses the mark."
      }
    ],
    "pin": true
  },
  {
    "id": "math-divisibility",
    "subject": "math",
    "title": "Divisibility Rules",
    "added": "2026-09-09",
    "quiz": "2026-09-16",
    "note": "The seven rules on her worksheet. Learn the rules, then run the drill.",
    "type": "bundle",
    "divisors": [
      2,
      3,
      4,
      5,
      6,
      9,
      10
    ],
    "divisRound": 8,
    "drills": [
      "divis",
      "meaning",
      "define"
    ],
    "words": [
      {
        "word": "Divisible by 2",
        "meaning": "The last digit is even — 0, 2, 4, 6, or 8."
      },
      {
        "word": "Divisible by 3",
        "meaning": "Add up all the digits. If that sum is a multiple of 3, so is the number."
      },
      {
        "word": "Divisible by 4",
        "meaning": "Look at the last two digits only. If that two-digit number divides by 4, so does the whole thing."
      },
      {
        "word": "Divisible by 5",
        "meaning": "The last digit is 0 or 5."
      },
      {
        "word": "Divisible by 6",
        "meaning": "It must pass BOTH the 2 rule and the 3 rule. Even, and its digits add to a multiple of 3."
      },
      {
        "word": "Divisible by 9",
        "meaning": "Add up all the digits. If that sum is a multiple of 9, so is the number."
      },
      {
        "word": "Divisible by 10",
        "meaning": "The last digit is 0."
      }
    ]
  },
  {
    "id": "bible-john-15-5",
    "subject": "bible",
    "title": "John 15:5 verse quiz",
    "added": "2026-09-15",
    "quiz": "2026-09-18",
    "note": "Word for word, ESV. Quiz Friday. Same vine passage as 15:3 and 15:4 — the rhythm carries over.",
    "type": "verse",
    "reference": "John 15:5",
    "version": "ESV",
    "text": "I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.",
    "assess": "quiz"
  },
  {
    "id": "ela-spelling-3",
    "subject": "ela",
    "title": "Spelling List 3",
    "added": "2026-09-15",
    "quiz": "2026-09-24",
    "note": "Twenty words, test Thursday 9/24. Build it from letters, then spot the right spelling.",
    "type": "bundle",
    "spellWords": [
      "insist",
      "difficult",
      "contact",
      "method",
      "attitude",
      "progress",
      "anticipate",
      "physical",
      "dangerous",
      "equipment",
      "basis",
      "cooperate",
      "medium",
      "rotation",
      "designed",
      "diameter",
      "deflect",
      "reflective",
      "daydream",
      "reasons"
    ],
    "questions": [
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "insist",
          "insest",
          "insisst",
          "incist"
        ],
        "answer": "insist",
        "why": "\"insist\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "difficultt",
          "difficult",
          "dificult",
          "diffacult"
        ],
        "answer": "difficult",
        "why": "\"difficult\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "comtact",
          "contacte",
          "contact",
          "contect"
        ],
        "answer": "contact",
        "why": "\"contact\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "methid",
          "mehtod",
          "methud",
          "method"
        ],
        "answer": "method",
        "why": "\"method\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "attitude",
          "atitude",
          "attitide",
          "attatude"
        ],
        "answer": "attitude",
        "why": "\"attitude\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "progresss",
          "progress",
          "progres",
          "prograss"
        ],
        "answer": "progress",
        "why": "\"progress\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "antisipate",
          "anticipait",
          "anticipate",
          "anticapate"
        ],
        "answer": "anticipate",
        "why": "\"anticipate\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "fysical",
          "physicle",
          "phisical",
          "physical"
        ],
        "answer": "physical",
        "why": "\"physical\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "dangerous",
          "dangerus",
          "dangeros",
          "daingerous"
        ],
        "answer": "dangerous",
        "why": "\"dangerous\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "equipement",
          "equipment",
          "equipmant",
          "equiptment"
        ],
        "answer": "equipment",
        "why": "\"equipment\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "bassis",
          "baseis",
          "basis",
          "basus"
        ],
        "answer": "basis",
        "why": "\"basis\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "coperate",
          "cooparate",
          "cooperait",
          "cooperate"
        ],
        "answer": "cooperate",
        "why": "\"cooperate\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "medium",
          "medum",
          "meduim",
          "mediem"
        ],
        "answer": "medium",
        "why": "\"medium\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "rotatoin",
          "rotation",
          "rotashion",
          "rottation"
        ],
        "answer": "rotation",
        "why": "\"rotation\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "desighned",
          "desinged",
          "designed",
          "desined"
        ],
        "answer": "designed",
        "why": "\"designed\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "diamiter",
          "diamater",
          "dimeter",
          "diameter"
        ],
        "answer": "diameter",
        "why": "\"diameter\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "deflect",
          "deflekt",
          "defelct",
          "difflect"
        ],
        "answer": "deflect",
        "why": "\"deflect\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "reflecitve",
          "reflective",
          "reflectiv",
          "refelctive"
        ],
        "answer": "reflective",
        "why": "\"reflective\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "daidream",
          "daydreme",
          "daydream",
          "daydreem"
        ],
        "answer": "daydream",
        "why": "\"daydream\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "reesons",
          "resons",
          "reasens",
          "reasons"
        ],
        "answer": "reasons",
        "why": "\"reasons\" is the one on her list."
      }
    ],
    "drills": [
      "spell",
      "mconly"
    ]
  },
  {
    "id": "hist-egypt-kush-test",
    "subject": "history",
    "title": "History Chapter 3 Egypt Test",
    "added": "2026-09-15",
    "quiz": "2026-09-22",
    "note": "Test Tuesday 9/22. Mrs. Martinez: matching, true/false with the underlined word corrected, and short written answers.",
    "type": "bundle",
    "words": [
      {
        "word": "Delta",
        "meaning": "The fan-shaped area where the Nile splits and empties into the Mediterranean Sea, named for the Greek letter."
      },
      {
        "word": "Silt",
        "meaning": "The rich, fertile soil the Nile left behind after the yearly flood."
      },
      {
        "word": "Cataract",
        "meaning": "One of six stretches of shallow, rocky rapids along the Nile that slowed river traffic and blocked invaders from the south."
      },
      {
        "word": "Shadoof",
        "meaning": "A long pole with a bucket on one end and a weight on the other, used to lift water from the Nile for irrigation."
      },
      {
        "word": "Nilometer",
        "meaning": "A device used to measure how high the Nile rose; the government used it to set taxes."
      },
      {
        "word": "Hapi",
        "meaning": "The Egyptians' nickname for the Nile, meaning “well fed” or “fat.” They worshiped the Nile as a god by this name."
      },
      {
        "word": "Mizraim",
        "meaning": "A son of Ham and grandson of Noah. In the Bible the land of Egypt is called by his name."
      },
      {
        "word": "Dynasty",
        "meaning": "A line of kings or rulers who all belong to the same family."
      },
      {
        "word": "Menes",
        "meaning": "The ruler who united Upper and Lower Egypt around 3000 BC and began the first dynasty."
      },
      {
        "word": "Pharaoh",
        "meaning": "The title for a ruler of Egypt. Egyptians began to believe that the pharaohs were gods."
      },
      {
        "word": "Pyramid",
        "meaning": "A large tomb built for a pharaoh that showed the power and wealth he had gained during his reign."
      },
      {
        "word": "Great Pyramid",
        "meaning": "The largest pyramid at Giza, built for the pharaoh Khufu during the Fourth Dynasty. It covers thirteen acres."
      },
      {
        "word": "Sarcophagus",
        "meaning": "The outer stone, metal, or wood coffin that held a mummy's inner coffins."
      },
      {
        "word": "Mummy",
        "meaning": "A dead body that has been preserved from decaying."
      },
      {
        "word": "Embalmer",
        "meaning": "The person a family paid to preserve a body after death. He dressed in the jackal-headed costume of Anubis."
      },
      {
        "word": "Natron",
        "meaning": "The salt solution a body was soaked in for seventy days during the embalming process."
      },
      {
        "word": "Canopic jars",
        "meaning": "The four special containers that held the liver, stomach, lungs, and intestines."
      },
      {
        "word": "Anubis",
        "meaning": "The jackal-headed Egyptian god of embalming."
      },
      {
        "word": "Osiris",
        "meaning": "The god of the underworld, who presided over the Hall of Judgment where the dead person's heart was weighed."
      },
      {
        "word": "Polytheistic",
        "meaning": "Believing in and worshiping many gods. The Egyptians had hundreds of them."
      },
      {
        "word": "Amulet",
        "meaning": "An ornament Egyptians believed protected its wearer from evil spirits."
      },
      {
        "word": "Kohl",
        "meaning": "The black cosmetic powder both men and women wore to protect their eyes from the glare of the sun."
      },
      {
        "word": "Hieroglyphics",
        "meaning": "Egyptian picture writing, used from about 3000 BC to AD 1100 — longer than any other form of writing."
      },
      {
        "word": "Rosetta stone",
        "meaning": "The stele found in 1799 that became the key to unlocking the Egyptian language."
      },
      {
        "word": "Stele",
        "meaning": "An upright stone monument with writing engraved on it."
      },
      {
        "word": "Jean-François Champollion",
        "meaning": "The Frenchman who successfully translated Egyptian hieroglyphics in 1822."
      },
      {
        "word": "Papyrus",
        "meaning": "A plant growing along the Nile that was made into a light writing material. Our word “paper” comes from it."
      },
      {
        "word": "Cartouche",
        "meaning": "The oval shape drawn around a pharaoh's name in hieroglyphics. French soldiers named it after their gun cartridges."
      },
      {
        "word": "Shenu",
        "meaning": "The Egyptian word for “encircle” — the original name for the oval around a pharaoh's name."
      },
      {
        "word": "Hyksos",
        "meaning": "The “foreign rulers” who swept into Egypt and ruled for about 150 years. They brought bronze and iron weapons and the horse-drawn chariot."
      },
      {
        "word": "Ahmose",
        "meaning": "The Egyptian prince who eventually drove the Hyksos invaders out of Egypt."
      },
      {
        "word": "Queen Hatshepsut",
        "meaning": "The first woman to be a ruler in Egypt. She ruled with her husband, then for her young nephew, then made herself pharaoh."
      },
      {
        "word": "Thutmose III",
        "meaning": "The greatest Egyptian warrior king. He stretched the empire to the Euphrates River in the northeast."
      },
      {
        "word": "Tutankhamen",
        "meaning": "King Tut. He became pharaoh at about nine years old and died at nineteen. Howard Carter found his tomb in 1922."
      },
      {
        "word": "Rameses II",
        "meaning": "Rameses the Great, one of the last great pharaohs. He defeated the Hittites and later signed a lasting peace treaty with them."
      },
      {
        "word": "Social pyramid",
        "meaning": "The triangle-shaped diagram of Egypt's social classes — farmers and slaves at the bottom, the pharaoh at the top."
      },
      {
        "word": "Vizier",
        "meaning": "The highest-ranking official serving under the pharaoh."
      },
      {
        "word": "Kush",
        "meaning": "The land along the Nile south of Egypt, in what is now Sudan."
      },
      {
        "word": "Meroitic",
        "meaning": "The written language the Kushites developed, named after their city of Meroë."
      },
      {
        "word": "Aswan High Dam",
        "meaning": "The dam completed in 1970 that formed Lake Nasser and ended the Nile's annual flooding."
      }
    ],
    "questions": [
      {
        "kind": "correct",
        "prompt": "The Nile River flows from south to north.",
        "underlined": "south to north",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "It begins in central Africa and runs about four thousand miles north to the Mediterranean."
      },
      {
        "kind": "correct",
        "prompt": "Egypt has been called “the Gift of the Sahara.”",
        "underlined": "Sahara",
        "answer": false,
        "correction": "Nile",
        "options": [
          "Nile",
          "Sahara",
          "Mediterranean",
          "Red Sea"
        ],
        "why": "Without the Nile River, Egypt as we know it would not have existed."
      },
      {
        "kind": "correct",
        "prompt": "There are six cataracts along the Nile.",
        "underlined": "six",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "They are shallow, rocky stretches that slowed river traffic — and slowed invaders too."
      },
      {
        "kind": "correct",
        "prompt": "Upper Egypt was the area in the north, around the delta.",
        "underlined": "north",
        "answer": false,
        "correction": "south",
        "options": [
          "south",
          "north",
          "east",
          "west"
        ],
        "why": "The delta plain in the north was LOWER Egypt. Upper Egypt was upriver, to the south."
      },
      {
        "kind": "correct",
        "prompt": "Menes united Upper and Lower Egypt around 3000 BC.",
        "underlined": "Menes",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "He began the first dynasty — a line of kings from the same family."
      },
      {
        "kind": "correct",
        "prompt": "The Old Kingdom is also known as “the Age of Pyramids.”",
        "underlined": "Pyramids",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Most of the at least eighty pyramids archaeologists have found were built during the Old Kingdom."
      },
      {
        "kind": "correct",
        "prompt": "The Great Pyramid was built for the pharaoh Khufu.",
        "underlined": "Khufu",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "He ruled during the Fourth Dynasty. The pyramid covers thirteen acres."
      },
      {
        "kind": "correct",
        "prompt": "During embalming the body was soaked in natron for thirty days.",
        "underlined": "thirty",
        "answer": false,
        "correction": "seventy",
        "options": [
          "seventy",
          "thirty",
          "seven",
          "one hundred"
        ],
        "why": "Seventy days in the salt solution, then it was washed and wrapped in linen strips."
      },
      {
        "kind": "correct",
        "prompt": "Canopic jars held the heart, stomach, lungs, and intestines.",
        "underlined": "heart",
        "answer": false,
        "correction": "liver",
        "options": [
          "liver",
          "heart",
          "brain",
          "kidneys"
        ],
        "why": "Liver, stomach, lungs, and intestines. The brain was pulled out through the skull and discarded."
      },
      {
        "kind": "correct",
        "prompt": "The Rosetta stone was found in 1799.",
        "underlined": "1799",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "It turned up near the town of Rosetta and was written in hieroglyphics, common Egyptian, and Greek."
      },
      {
        "kind": "correct",
        "prompt": "Champollion successfully translated Egyptian hieroglyphics in 1822.",
        "underlined": "Champollion",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Since Greek was a known language, it worked as the key to the Egyptian symbols."
      },
      {
        "kind": "correct",
        "prompt": "The Hyksos ruled Egypt for about fifty years.",
        "underlined": "fifty",
        "answer": false,
        "correction": "150",
        "options": [
          "150",
          "fifty",
          "five hundred",
          "fifteen"
        ],
        "why": "About 150 years, until an Egyptian prince named Ahmose drove them out."
      },
      {
        "kind": "correct",
        "prompt": "Queen Hatshepsut was the first woman to be a ruler in Egypt.",
        "underlined": "Hatshepsut",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "She ruled with her husband, then for her young nephew, then made herself pharaoh."
      },
      {
        "kind": "correct",
        "prompt": "Howard Carter discovered King Tut's tomb in 1922.",
        "underlined": "1922",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "It took him over eight years to catalogue everything inside."
      },
      {
        "kind": "correct",
        "prompt": "At the bottom of Egypt's social pyramid were the priests.",
        "underlined": "priests",
        "answer": false,
        "correction": "farmers",
        "options": [
          "farmers",
          "priests",
          "viziers",
          "nobles"
        ],
        "why": "Farmers, merchants, servants, and slaves were the bottom — and the largest class. Priests were a level up."
      },
      {
        "kind": "correct",
        "prompt": "The ancient Egyptians were monotheistic.",
        "underlined": "monotheistic",
        "answer": false,
        "correction": "polytheistic",
        "options": [
          "polytheistic",
          "monotheistic",
          "atheistic",
          "Christian"
        ],
        "why": "They had hundreds of gods and refused to believe in the one true God."
      },
      {
        "kind": "correct",
        "prompt": "The Egyptian calendar had three seasons.",
        "underlined": "three",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Flood (Akhet), Planting (Peret), and Harvest (Shemu)."
      },
      {
        "kind": "correct",
        "prompt": "The biblical account of Joseph took place during the New Kingdom.",
        "underlined": "New",
        "answer": false,
        "correction": "Middle",
        "options": [
          "Middle",
          "New",
          "Old",
          "Kushite"
        ],
        "why": "Joseph belongs to the Middle Kingdom. Moses is the one who belongs to the New Kingdom."
      },
      {
        "kind": "correct",
        "prompt": "The kingdom of Kush was located south of Egypt.",
        "underlined": "south",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "It stretched from the first cataract to Khartoum in present-day Sudan."
      },
      {
        "kind": "correct",
        "prompt": "Kush's first capital was Meroë.",
        "underlined": "Meroë",
        "answer": false,
        "correction": "Kerma",
        "options": [
          "Kerma",
          "Meroë",
          "Napata",
          "Thebes"
        ],
        "why": "Kerma came first, around 2500 BC. Kush moved the capital to Meroë much later, around 500 BC."
      },
      {
        "kind": "correct",
        "prompt": "Aksum conquered Kush in AD 330.",
        "underlined": "Aksum",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "The Kushite kingdom had lasted more than one thousand years."
      },
      {
        "kind": "correct",
        "prompt": "Our word “paper” comes from papyrus.",
        "underlined": "papyrus",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "The writing material was made from the pith at the centre of the papyrus plant's stem."
      },
      {
        "kind": "correct",
        "prompt": "The Aswan High Dam was completed in 1970.",
        "underlined": "1970",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "It formed Lake Nasser and ended the Nile's annual flooding."
      },
      {
        "kind": "correct",
        "prompt": "The Hyksos brought the horse-drawn chariot to Egypt.",
        "underlined": "horse-drawn chariot",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Egyptians also learned to use bronze and iron weapons from them."
      },
      {
        "kind": "mc",
        "prompt": "What body of water does the Nile flow into?",
        "options": [
          "The Mediterranean Sea",
          "The Red Sea",
          "The Dead Sea",
          "The Persian Gulf"
        ],
        "answer": "The Mediterranean Sea",
        "why": "It runs about four thousand miles north from central Africa."
      },
      {
        "kind": "mc",
        "prompt": "Which kingdom is known as “the Age of Pyramids”?",
        "options": [
          "The Old Kingdom",
          "The Middle Kingdom",
          "The New Kingdom",
          "The Kushite Kingdom"
        ],
        "answer": "The Old Kingdom",
        "why": "ca. 2700–2200 BC. Most of the eighty-plus pyramids date from it."
      },
      {
        "kind": "mc",
        "prompt": "Who was the highest-ranking official serving under the pharaoh?",
        "options": [
          "The scribe",
          "The embalmer",
          "The vizier",
          "The artisan"
        ],
        "answer": "The vizier",
        "why": "Viziers sat on the social pyramid level with the nobles and generals."
      },
      {
        "kind": "mc",
        "prompt": "What did Egyptians wear to protect themselves from evil spirits?",
        "options": [
          "Kohl",
          "Amulets",
          "Wigs",
          "Linen"
        ],
        "answer": "Amulets",
        "why": "Ornaments of gold and beads. Kohl was the black eye powder — that was for sun glare."
      },
      {
        "kind": "multi",
        "prompt": "Which were Egypt's natural boundaries? Check ALL that apply.",
        "options": [
          "The Sahara Desert",
          "The cataracts",
          "The Mediterranean Sea",
          "The Ural Mountains",
          "The Atlantic Ocean"
        ],
        "answers": [
          "The Sahara Desert",
          "The cataracts",
          "The Mediterranean Sea"
        ],
        "why": "Desert east and west, cataracts to the south, Mediterranean to the north. Three of them — don't stop at one."
      },
      {
        "kind": "multi",
        "prompt": "Which organs were placed in canopic jars? Check ALL that apply.",
        "options": [
          "Liver",
          "Stomach",
          "Lungs",
          "Intestines",
          "Heart",
          "Brain"
        ],
        "answers": [
          "Liver",
          "Stomach",
          "Lungs",
          "Intestines"
        ],
        "why": "Four organs. The heart stayed in the body and the brain was thrown away."
      },
      {
        "kind": "multi",
        "prompt": "Which were the three seasons of the Egyptian calendar? Check ALL that apply.",
        "options": [
          "Flood",
          "Planting",
          "Harvest",
          "Winter",
          "Drought"
        ],
        "answers": [
          "Flood",
          "Planting",
          "Harvest"
        ],
        "why": "Akhet, Peret, and Shemu — all three, all built around the Nile."
      }
    ],
    "extras": [
      {
        "prompt": "Why has Egypt been called “the Gift of the Nile”?",
        "answer": "Without the Nile, Egypt would have been desert. The river gave water, food, fertile silt from the yearly flood, and a highway for travel and trade."
      },
      {
        "prompt": "What are Egypt's natural boundaries?",
        "answer": "The Sahara Desert to the east and west, the cataracts to the south, and the Mediterranean Sea to the north."
      },
      {
        "prompt": "Of what benefit were the cataracts?",
        "answer": "They slowed river traffic, but they also made it hard for invaders to attack Egypt from the south."
      },
      {
        "prompt": "What were some of the tools early Egyptians used for irrigation?",
        "answer": "Irrigation canals, the shadoof (a pole with a bucket on one end and a weight on the other), and the water wheel."
      },
      {
        "prompt": "How many seasons did Egypt have, and what were they?",
        "answer": "Three — Flood (Akhet), Planting (Peret), and Harvest (Shemu)."
      },
      {
        "prompt": "Why did Egyptians make mummies?",
        "answer": "They believed in an afterlife and thought that without a body a person could not exist in the next world, so they preserved the body."
      },
      {
        "prompt": "What was the significance of the way the embalmer dressed?",
        "answer": "He wore the jackal-headed costume of Anubis, the Egyptian god of embalming."
      },
      {
        "prompt": "How did the construction of pyramids differ between the Old Kingdom and the Middle Kingdom?",
        "answer": "Old Kingdom pyramids were large and built of stone. Middle Kingdom pyramids were smaller and less grand, built of mud bricks instead, so not many of them survived."
      },
      {
        "prompt": "Why are there more artifacts in Egypt than in other civilizations?",
        "answer": "Egyptians were very careful to preserve objects for the afterlife, and Egypt's hot, dry climate preserved them well."
      },
      {
        "prompt": "Who was the first female ruler in Egypt?",
        "answer": "Queen Hatshepsut, during the New Kingdom."
      },
      {
        "prompt": "What was the social structure of Egypt shaped like? Name the levels from bottom to top.",
        "answer": "A triangle called a social pyramid. Bottom and largest: farmers, merchants, servants, and slaves. Then priests, soldiers, scribes, and artisans. Then nobles, generals, and viziers. Top and smallest: the pharaoh and the royal family."
      },
      {
        "prompt": "What did Egyptians wear to protect themselves from evil spirits?",
        "answer": "Amulets — ornaments of gold and beads that they believed protected the wearer."
      },
      {
        "prompt": "What was the role of women in the Kushite civilization?",
        "answer": "Women held a variety of roles. Some were queens and priestesses and some were warriors, but women were still the primary caregivers of the children and maintained the households."
      },
      {
        "prompt": "How long did the Kushite kingdom exist?",
        "answer": "More than one thousand years, until Aksum destroyed Meroë and took over the land of Kush in AD 330."
      }
    ],
    "drills": [
      "match",
      "corronly",
      "meaning",
      "extras"
    ],
    "rival": "Kush United",
    "matchLength": 8
  },
  {
    "id": "bible-unit-2",
    "subject": "bible",
    "title": "Bible Unit 2 Test",
    "added": "2026-09-20",
    "quiz": "2026-09-24",
    "note": "Test Thursday 9/24. Mrs. Vowels — five definitions, then the short answers. Say the definitions out loud; she wants both halves of each one.",
    "type": "bundle",
    "words": [
      {
        "word": "Covenant",
        "meaning": "An agreement between two or more people, with certain requirements and promises."
      },
      {
        "word": "Image of God",
        "meaning": "Being created similarly to God — a smaller resemblance of Him."
      },
      {
        "word": "Structure",
        "meaning": "The way God created things to be."
      },
      {
        "word": "Direction",
        "meaning": "The two ways anything with structure can be tugged or pulled — fallen or redemptive."
      },
      {
        "word": "Eternal",
        "meaning": "Forever in both directions, past and future — in all directions. Exists outside of time."
      }
    ],
    "questions": [
      {
        "kind": "mc",
        "prompt": "A covenant is —",
        "options": [
          "An agreement between two or more people, with requirements and promises",
          "A promise God makes that people have no part in",
          "A law written down by Moses",
          "A sacrifice offered at the temple"
        ],
        "answer": "An agreement between two or more people, with requirements and promises",
        "why": "Two sides, and both requirements AND promises. Say both halves."
      },
      {
        "kind": "mc",
        "prompt": "Being made in the image of God means —",
        "options": [
          "Looking physically identical to God",
          "Being created similarly to God, a smaller resemblance of Him",
          "Being sinless from birth",
          "Being able to create something out of nothing"
        ],
        "answer": "Being created similarly to God, a smaller resemblance of Him",
        "why": "Similar to, not the same as — a smaller resemblance."
      },
      {
        "kind": "mc",
        "prompt": "Which word means “the way God created things to be”?",
        "options": [
          "Direction",
          "Covenant",
          "Structure",
          "Eternal"
        ],
        "answer": "Structure",
        "why": "Structure is how it was made. Direction is which way it is being pulled."
      },
      {
        "kind": "mc",
        "prompt": "Which word means the two ways anything with structure can be tugged or pulled?",
        "options": [
          "Structure",
          "Direction",
          "Dominion",
          "Mandate"
        ],
        "answer": "Direction",
        "why": "The two directions are fallen and redemptive."
      },
      {
        "kind": "mc",
        "prompt": "The two directions anything with structure can be pulled are —",
        "options": [
          "Fallen and redemptive",
          "Good and evil",
          "Past and future",
          "Earthly and heavenly"
        ],
        "answer": "Fallen and redemptive",
        "why": "Fallen and redemptive. Past and future belongs to the definition of eternal instead."
      },
      {
        "kind": "mc",
        "prompt": "Eternal means —",
        "options": [
          "Lasting a very long time",
          "Forever in both directions, past and future — existing outside of time",
          "Beginning at Creation and never ending",
          "Never changing"
        ],
        "answer": "Forever in both directions, past and future — existing outside of time",
        "why": "Both directions. Not just no end — no beginning either."
      },
      {
        "kind": "mc",
        "prompt": "What passage of Scripture describes the fall?",
        "options": [
          "Genesis 1",
          "Genesis 2",
          "Genesis 3",
          "Exodus 3"
        ],
        "answer": "Genesis 3",
        "why": "Genesis 3. Genesis 1 and 2 are Creation."
      },
      {
        "kind": "mc",
        "prompt": "What are the three major points of the true big story of the Bible?",
        "options": [
          "Creation, Fall, Redemption",
          "Creation, Covenant, Curse",
          "Law, Fall, Grace",
          "Creation, Flood, Redemption"
        ],
        "answer": "Creation, Fall, Redemption",
        "why": "Creation, Fall, Redemption — in that order."
      },
      {
        "kind": "mc",
        "prompt": "Which blessing-command became more difficult when God cursed the WOMAN after the fall?",
        "options": [
          "Childbirth — be fruitful and multiply",
          "Subduing the earth and having dominion",
          "Keeping the Sabbath",
          "Naming the animals"
        ],
        "answer": "Childbirth — be fruitful and multiply",
        "why": "The woman's curse touched be fruitful and multiply, so childbirth."
      },
      {
        "kind": "mc",
        "prompt": "Which blessing-command became more difficult when God cursed the MAN after the fall?",
        "options": [
          "Childbirth — be fruitful and multiply",
          "Subduing the earth and having dominion",
          "Offering sacrifices",
          "Walking with God in the garden"
        ],
        "answer": "Subduing the earth and having dominion",
        "why": "The ground was cursed, so working it became hard. Man = the ground, woman = childbirth."
      },
      {
        "kind": "mc",
        "prompt": "Was work present before the fall?",
        "options": [
          "Yes — having dominion was given before the fall",
          "No, work began as part of the curse",
          "Only for the animals",
          "The Bible does not say"
        ],
        "answer": "Yes — having dominion was given before the fall",
        "why": "Work came first. The curse only made it harder; it did not invent it."
      },
      {
        "kind": "multi",
        "prompt": "What TWO descriptions does the Bible use for how Scripture came to us? Check ALL that apply.",
        "options": [
          "Inspired by God, or God-breathed",
          "Men carried along by the Holy Spirit",
          "Written down by angels",
          "Dictated word for word to scribes",
          "Copied from older religions"
        ],
        "answers": [
          "Inspired by God, or God-breathed",
          "Men carried along by the Holy Spirit"
        ],
        "why": "Two of them. God-breathed AND carried along by the Holy Spirit — the question asks for both."
      },
      {
        "kind": "multi",
        "prompt": "What are the TWO parts of the Creation Mandate? Check ALL that apply.",
        "options": [
          "Be fruitful and multiply",
          "Subdue the earth and have dominion",
          "Keep the Sabbath holy",
          "Offer the firstfruits",
          "Name the animals"
        ],
        "answers": [
          "Be fruitful and multiply",
          "Subdue the earth and have dominion"
        ],
        "why": "Both halves. Leaving one off is half an answer."
      },
      {
        "kind": "multi",
        "prompt": "Which are the three major points of the true big story of the Bible? Check ALL that apply.",
        "options": [
          "Creation",
          "Fall",
          "Redemption",
          "Flood",
          "Exile"
        ],
        "answers": [
          "Creation",
          "Fall",
          "Redemption"
        ],
        "why": "Three of them — Creation, Fall, Redemption."
      },
      {
        "kind": "tf",
        "prompt": "Work was present before the fall.",
        "answer": true,
        "why": "Yes — having dominion was given before the fall."
      },
      {
        "kind": "tf",
        "prompt": "The fall is described in Genesis 2.",
        "answer": false,
        "why": "Genesis 3. Genesis 2 is still Creation."
      },
      {
        "kind": "tf",
        "prompt": "Eternal means something that has no end but did have a beginning.",
        "answer": false,
        "why": "Eternal runs forever in BOTH directions — no beginning and no end, outside of time."
      },
      {
        "kind": "tf",
        "prompt": "Structure is the way God created things to be, and direction is which way they are being pulled.",
        "answer": true,
        "why": "That is the pair. Structure = how it was made. Direction = fallen or redemptive."
      },
      {
        "kind": "tf",
        "prompt": "A covenant only involves promises, not requirements.",
        "answer": false,
        "why": "It has both — certain requirements AND promises."
      }
    ],
    "extras": [
      {
        "prompt": "Define covenant.",
        "answer": "An agreement between two or more people, with certain requirements and promises."
      },
      {
        "prompt": "Define image of God.",
        "answer": "Being created similarly to God — a smaller resemblance of Him."
      },
      {
        "prompt": "Define structure.",
        "answer": "The way God created things to be."
      },
      {
        "prompt": "Define direction.",
        "answer": "The two directions, or ways, in which anything with structure can be tugged or pulled — fallen and redemptive."
      },
      {
        "prompt": "Define eternal.",
        "answer": "Forever in both directions, past and future — in all directions. It exists outside of time."
      },
      {
        "prompt": "What two descriptions does the Bible use to describe how Scripture came to us?",
        "answer": "Inspired by God — God-breathed — and men carried along by the Holy Spirit. Both parts."
      },
      {
        "prompt": "What are the three major points of the true big story of the Bible?",
        "answer": "Creation, Fall, Redemption."
      },
      {
        "prompt": "What passage in the Scripture describes the fall?",
        "answer": "Genesis 3."
      },
      {
        "prompt": "What are the two parts of the Creation Mandate?",
        "answer": "Be fruitful and multiply; and subdue the earth and have dominion. Both parts."
      },
      {
        "prompt": "Which blessing-command became more difficult when God cursed the WOMAN after the fall?",
        "answer": "Childbirth — be fruitful and multiply."
      },
      {
        "prompt": "Which blessing-command became more difficult when God cursed the MAN after the fall?",
        "answer": "The ground — subduing the earth and having dominion."
      },
      {
        "prompt": "Was work present before the fall?",
        "answer": "Yes — have dominion. Work was there before the fall; the curse only made it harder."
      }
    ],
    "drills": [
      "match",
      "meaning",
      "mconly",
      "extras"
    ],
    "rival": "Unit One Rovers",
    "matchLength": 8
  },
  {
    "id": "bible-john-15-1-5",
    "subject": "bible",
    "title": "John 15:1–5 passage",
    "added": "2026-09-20",
    "quiz": "2026-10-02",
    "note": "Quiz Friday 10/2. Five verses, word for word, ESV. Learn them one at a time — he already knows verse 5 from the weekly quizzes.",
    "type": "verse",
    "reference": "John 15:1–5",
    "version": "ESV",
    "text": "I am the true vine, and my Father is the vinedresser. Every branch in me that does not bear fruit he takes away, and every branch that does bear fruit he prunes, that it may bear more fruit. Already you are clean because of the word that I have spoken to you. Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me. I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.",
    "lines": [
      "I am the true vine, and my Father is the vinedresser.",
      "Every branch in me that does not bear fruit he takes away, and every branch that does bear fruit he prunes, that it may bear more fruit.",
      "Already you are clean because of the word that I have spoken to you.",
      "Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me.",
      "I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing."
    ],
    "assess": "quiz"
  },
  {
    "id": "math-decimals-test",
    "subject": "math",
    "title": "Multiply & Divide Decimals Test",
    "added": "2026-09-27",
    "quiz": "2026-10-02",
    "pin": true,
    "note": "Test Friday 10/2. Her study guide lists five things — all five are in here. Work it out covers the arithmetic; the study guide questions cover the word problems and the four you missed.",
    "type": "bundle",
    "mathTopics": [
      "decmul",
      "decdiv",
      "decpow",
      "decdivdec"
    ],
    "mathRound": 10,
    "questions": [
      {
        "kind": "mc",
        "prompt": "3.54 × 2.7 — how many decimal places will the answer have?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": "3",
        "why": "2 places in 3.54 plus 1 in 2.7 = 3. Count them BEFORE you multiply, then you know where the point goes."
      },
      {
        "kind": "mc",
        "prompt": "0.049 × 58 — how many decimal places will the answer have?",
        "options": [
          "1",
          "2",
          "3",
          "5"
        ],
        "answer": "3",
        "why": "3 places in 0.049 plus 0 in 58 = 3. A whole number contributes none."
      },
      {
        "kind": "mc",
        "prompt": "The digits of 0.67 × 61 work out to 4087. Where does the point go?",
        "options": [
          "4.087",
          "40.87",
          "408.7",
          "4087"
        ],
        "answer": "40.87",
        "why": "2 decimal places, so count 2 back from the right: 40.87. Check it against an estimate — 0.67 is about ⅔, and ⅔ of 61 is around 40."
      },
      {
        "kind": "mc",
        "prompt": "The digits of 23.4 × 3.2 work out to 7488. Where does the point go?",
        "options": [
          "7.488",
          "74.88",
          "748.8",
          "7488"
        ],
        "answer": "74.88",
        "why": "1 place plus 1 place = 2. Estimate to check: 23 × 3 is about 70."
      },
      {
        "kind": "mc",
        "prompt": "Which is the best estimate for 7.05 × 1.56?",
        "options": [
          "About 1.1",
          "About 11",
          "About 29",
          "About 110"
        ],
        "answer": "About 11",
        "why": "7 × 1.5 is about 11. Estimating first catches an answer like 29 before you write it down."
      },
      {
        "kind": "mc",
        "prompt": "12.34 ÷ 100 =",
        "options": [
          "1234",
          "1.234",
          "0.1234",
          "0.01234"
        ],
        "answer": "0.1234",
        "why": "Dividing makes it SMALLER — slide the point 2 places left."
      },
      {
        "kind": "mc",
        "prompt": "1.234 × 1,000 =",
        "options": [
          "0.001234",
          "12.34",
          "123.4",
          "1,234"
        ],
        "answer": "1,234",
        "why": "Multiplying makes it BIGGER — hop the point 3 places right."
      },
      {
        "kind": "mc",
        "prompt": "5 ÷ 10 = ?",
        "options": [
          "0.5",
          "50",
          "5.0",
          ".5 with nothing in front"
        ],
        "answer": "0.5",
        "why": "Slide left past the 5 and you have run out of digits, so put a 0 in front: 0.5. Never leave a bare point."
      },
      {
        "kind": "mc",
        "prompt": "3.6 × 100 = ?",
        "options": [
          "3.600",
          "36",
          "360",
          "0.036"
        ],
        "answer": "360",
        "why": "Hop 2 places right. You run out of digits after one hop, so annex a zero: 360."
      },
      {
        "kind": "mc",
        "prompt": "In 60.84 ÷ 12, where does the decimal point go in the quotient?",
        "options": [
          "Straight up above the point in 60.84",
          "At the end of the answer",
          "You move it 2 places right first",
          "There isn't one"
        ],
        "answer": "Straight up above the point in 60.84",
        "why": "Place it straight up first, then divide as normal. 60.84 ÷ 12 = 5.07."
      },
      {
        "kind": "mc",
        "prompt": "When you multiply two decimals, when do you line up the decimal points?",
        "options": [
          "Always, like adding",
          "Never — line the digits up from the right",
          "Only if both have the same number of places",
          "Only when one is a whole number"
        ],
        "answer": "Never — line the digits up from the right",
        "why": "Lining up the points is an ADDING rule. For multiplying, line up from the right, multiply as if there were no points, then count places."
      },
      {
        "kind": "tf",
        "prompt": "Multiplying a number by 10 always makes it bigger.",
        "answer": true,
        "why": "Hop right. Dividing by 10 slides left and makes it smaller."
      },
      {
        "kind": "tf",
        "prompt": "When dividing a decimal by a whole number, you can end up with a remainder.",
        "answer": false,
        "why": "Keep annexing zeros and bring them down — the decimal quotient carries on instead of leaving a remainder."
      },
      {
        "kind": "tf",
        "prompt": "0.023 × 40 = 0.920",
        "answer": true,
        "why": "23 × 4 = 92, and 3 decimal places gives 0.920. You got this one right on the graded sheet."
      },
      {
        "kind": "multi",
        "prompt": "Which of these make a number SMALLER? Check ALL that apply.",
        "options": [
          "÷ 10",
          "× 100",
          "÷ 1,000",
          "× 0.5",
          "× 10"
        ],
        "answers": [
          "÷ 10",
          "÷ 1,000",
          "× 0.5"
        ],
        "why": "Dividing by a power of ten slides left. Multiplying by a decimal less than 1 also shrinks it — that one catches people out."
      },
      {
        "kind": "multi",
        "prompt": "Which steps belong to MULTIPLYING decimals? Check ALL that apply.",
        "options": [
          "Line the digits up from the right",
          "Count the decimal places in both factors",
          "Line the decimal points up under each other",
          "Multiply as if there were no decimal points",
          "Put the point straight up into the answer"
        ],
        "answers": [
          "Line the digits up from the right",
          "Count the decimal places in both factors",
          "Multiply as if there were no decimal points"
        ],
        "why": "Lining up the points and bringing the point straight up are the ADDING and DIVIDING rules. Three steps here, not one."
      },
      {
        "kind": "mc",
        "prompt": "Sunflower seeds cost $3.69 per pound. How much do 2 lb cost?",
        "options": [
          "$1.85",
          "$5.69",
          "$7.38",
          "$7.38 — but with no label"
        ],
        "answer": "$7.38",
        "why": "Cost per pound × number of pounds. 3.69 × 2 = 7.38. Money answers need the dollar sign."
      },
      {
        "kind": "mc",
        "prompt": "Micah paid $7.12 for 8 lb of jellybeans. What is the price per pound?",
        "options": [
          "$56.96",
          "$0.89",
          "$0.65",
          "$8.90"
        ],
        "answer": "$0.89",
        "why": "“Per pound” from a total means DIVIDE. 7.12 ÷ 8 = 0.89. If the answer came out bigger than the total, you multiplied by mistake."
      },
      {
        "kind": "mc",
        "prompt": "Which operation does this need?  “Ribbon costs $1.25 a yard. How much for 3.5 yards?”",
        "options": [
          "Multiply",
          "Divide",
          "Add",
          "Subtract"
        ],
        "answer": "Multiply",
        "why": "A price for ONE thing, and you want MANY — multiply. $4.375, which rounds to $4.38."
      },
      {
        "kind": "mc",
        "prompt": "Which operation does this need?  “A 4.5 lb bag of apples costs $8.10. What does one pound cost?”",
        "options": [
          "Multiply",
          "Divide",
          "Add",
          "Subtract"
        ],
        "answer": "Divide",
        "why": "A total, and you want ONE — divide. 8.10 ÷ 4.5 = $1.80. This one is a decimal ÷ decimal, so move both points first."
      },
      {
        "kind": "mc",
        "prompt": "A runner covers 2.4 miles each day. How far in 7 days?",
        "options": [
          "0.34 miles",
          "9.4 miles",
          "16.8 miles",
          "16.8 — no label needed"
        ],
        "answer": "16.8 miles",
        "why": "2.4 × 7 = 16.8. The word “miles” is part of the answer."
      },
      {
        "kind": "mc",
        "prompt": "A 14.4 ft rope is cut into 1.8 ft pieces. How many pieces?",
        "options": [
          "8 pieces",
          "25.92 pieces",
          "0.125 pieces",
          "12.6 pieces"
        ],
        "answer": "8 pieces",
        "why": "How many small lengths fit into a big one — divide. Move both points: 144 ÷ 18 = 8. A count of pieces is a whole number, which is a good sign you did it right."
      },
      {
        "kind": "mc",
        "prompt": "Mrs. Ray bought 3 shirts at $24.95 each and had a $10.00 coupon. What did she pay?",
        "options": [
          "$74.85",
          "$64.85",
          "$14.95",
          "$44.85"
        ],
        "answer": "$64.85",
        "why": "TWO steps. 24.95 × 3 = 74.85, then subtract the coupon: 74.85 − 10.00 = 64.85. Re-read the question to check you did every step."
      },
      {
        "kind": "mc",
        "prompt": "Your answer to a money problem comes out as 7.4. How should you write it?",
        "options": [
          "7.4",
          "$7.4",
          "$7.40",
          "7.40"
        ],
        "answer": "$7.40",
        "why": "Money gets a dollar sign AND two decimal places. $7.4 is not a way of writing money."
      },
      {
        "kind": "multi",
        "prompt": "Which of these word problems need DIVISION? Check ALL that apply.",
        "options": [
          "Price per pound from a total cost",
          "Cost of 6 items at $2.35 each",
          "How many 0.5 L bottles fill a 4.5 L jug",
          "Total distance for 5 days at 3.2 miles a day",
          "Average score from a total"
        ],
        "answers": [
          "Price per pound from a total cost",
          "How many 0.5 L bottles fill a 4.5 L jug",
          "Average score from a total"
        ],
        "why": "THREE. Going from a total down to ONE, or finding how many small amounts fit in a big one, is division. The other two build a total up, so they multiply."
      },
      {
        "kind": "multi",
        "prompt": "A finished word-problem answer should have which of these? Check ALL that apply.",
        "options": [
          "The number",
          "A label — the unit word",
          "The working shown",
          "A dollar sign if it is money",
          "The question copied out again"
        ],
        "answers": [
          "The number",
          "A label — the unit word",
          "The working shown",
          "A dollar sign if it is money"
        ],
        "why": "FOUR. The label is the one that has cost you the most marks this term."
      },
      {
        "kind": "tf",
        "prompt": "If a word problem asks for a price per item and your answer is bigger than the total, you have made a mistake.",
        "answer": true,
        "why": "One item cannot cost more than all of them. That check catches a multiply-instead-of-divide error straight away."
      },
      {
        "kind": "tf",
        "prompt": "A word-problem answer of “16.8” is complete.",
        "answer": false,
        "why": "16.8 WHAT? Miles, pounds, dollars. The label is part of the answer."
      }
    ],
    "extras": [
      {
        "prompt": "Work out 0.67 × 61. Say the whole-number multiplication out loud first.",
        "answer": "67 × 61 = 4,087. Two decimal places, so 40.87. On the graded sheet you wrote 4.69, which is 67 × 7 — the second partial product was never added in."
      },
      {
        "prompt": "Work out 0.049 × 58.",
        "answer": "49 × 58 = 2,842. Three decimal places, so 2.842. You had 3.242, so the slip was in the carrying, not the point."
      },
      {
        "prompt": "Work out 23.4 × 3.2. Estimate first.",
        "answer": "Estimate: 23 × 3 is about 70. Then 234 × 32 = 7,488, and 1 + 1 = 2 places gives 74.88. You wrote 70.20 — close to the estimate, which is why estimating alone won't catch it. Redo the multiplication."
      },
      {
        "prompt": "Work out 7.05 × 1.56. Estimate first.",
        "answer": "Estimate: 7 × 1.5 is about 11. Then 705 × 156 = 109,980, and 2 + 2 = 4 places gives 10.9980, or 10.998. You wrote 29.780, which the estimate would have caught straight away."
      },
      {
        "prompt": "Say the four steps for multiplying decimals.",
        "answer": "1. Line the numbers up from the RIGHT. 2. Count how many digits are behind the decimal points. 3. Multiply as normal, ignoring the points. 4. Put the point back into the product, counting that many places from the right. No lining up of points — that is for adding."
      },
      {
        "prompt": "Say the three steps for dividing a decimal by a whole number.",
        "answer": "1. Set up the equation. 2. Put the decimal point STRAIGHT UP into the quotient. 3. Divide as normal. Example: 60.84 ÷ 12 = 5.07."
      },
      {
        "prompt": "Divide 50.301 by 3. This one was starred on your worksheet and left blank.",
        "answer": "16.767. Point straight up, then 3 into 5 is 1 remainder 2, 3 into 20 is 6 remainder 2, 3 into 23 is 7 remainder 2, 3 into 20 is 6 remainder 2, 3 into 21 is 7. Check: 16.767 × 3 = 50.301."
      },
      {
        "prompt": "Divide 61.44 by 60.",
        "answer": "1.024. 60 goes into 61 once with 1.44 left, then 60 into 144 is 2 remainder 24, then 60 into 240 is 4. Check: 1.024 × 60 = 61.44."
      },
      {
        "prompt": "Divide 0.059 by 59.",
        "answer": "0.001. Point straight up, 59 will not go into 0, 0 or 5, and goes into 59 once. Check: 0.001 × 59 = 0.059."
      },
      {
        "prompt": "What does 5 ÷ 10 equal, and what do you have to remember to write?",
        "answer": "0.5. Sliding left runs you past all the digits, so put a 0 in FRONT. A bare .5 loses the mark."
      },
      {
        "prompt": "Before you work out ANY word problem, what three things do you write down?",
        "answer": "What am I finding? Which operation and why? Then the answer with its label. The planner takes ten seconds and it is where the marks are."
      },
      {
        "prompt": "How do you tell a multiplying word problem from a dividing one?",
        "answer": "If you know what ONE costs or weighs and you want MANY, multiply. If you know the TOTAL and you want ONE — or you want to know how many small amounts fit in a big one — divide."
      },
      {
        "prompt": "A 4.5 lb bag of apples costs $8.10. What does one pound cost? Show the move-the-point step.",
        "answer": "Divide: 8.10 ÷ 4.5. Move the point one place in 4.5 to make it 45, so move it one place in 8.10 too — 81.0 ÷ 45 = 1.8. Answer: $1.80 per pound. Check: 1.80 × 4.5 = 8.10."
      },
      {
        "prompt": "A 14.4 ft rope is cut into 1.8 ft pieces. How many pieces?",
        "answer": "Divide: 14.4 ÷ 1.8. Move both points one place: 144 ÷ 18 = 8. Answer: 8 pieces. A count comes out whole, which is a good sign."
      },
      {
        "prompt": "Gas costs $3.89 a gallon. William bought 12.7 gallons. How much did he pay?",
        "answer": "Multiply: 3.89 × 12.7. 389 × 127 = 49,403, and 2 + 1 = 3 decimal places gives 49.403. Money rounds to the nearest cent: $49.40."
      },
      {
        "prompt": "Mrs. Ray bought a shirt for her husband and one for each of her 2 sons at $24.95 each, with $10.00 off. What was the cost?",
        "answer": "Three shirts, so 24.95 × 3 = 74.85, then 74.85 − 10.00 = $64.85. Two steps — re-read the question before you stop."
      },
      {
        "prompt": "Why is it worth estimating a word-problem answer before you work it out?",
        "answer": "It catches an answer that is wildly wrong. 7.05 × 1.56 should be about 11 — you wrote 29.78, and the estimate would have caught it on the spot."
      }
    ],
    "drills": [
      "numpad",
      "mconly",
      "extras",
      "multionly"
    ],
    "rival": "Decimal Point FC",
    "matchLength": 8
  },
  {
    "id": "grammar-prepositions",
    "subject": "grammar",
    "title": "Prepositional Phrases Test",
    "added": "2026-09-27",
    "quiz": "2026-10-02",
    "pin": true,
    "note": "Test Friday 10/2 — AG Ch. 3. Find the preposition, then the whole phrase. Mark-ALL is the section to watch.",
    "type": "bundle",
    "questions": [
      {
        "kind": "mc",
        "prompt": "Which word is the preposition?  “The ball rolled under the bench.”",
        "options": [
          "ball",
          "rolled",
          "under",
          "bench"
        ],
        "answer": "under",
        "why": "“under the bench” is the phrase. The preposition starts it; “bench” is the object."
      },
      {
        "kind": "mc",
        "prompt": "Which word is the preposition?  “Knox put his cleats inside the locker.”",
        "options": [
          "put",
          "cleats",
          "inside",
          "locker"
        ],
        "answer": "inside",
        "why": "inside the locker. Ask “inside what?” — the locker."
      },
      {
        "kind": "mc",
        "prompt": "Which word is the preposition?  “We ate lunch before practice.”",
        "options": [
          "ate",
          "lunch",
          "before",
          "practice"
        ],
        "answer": "before",
        "why": "before practice. Prepositions can show time as well as place."
      },
      {
        "kind": "mc",
        "prompt": "Which word is the preposition?  “The dog ran toward the fence.”",
        "options": [
          "dog",
          "ran",
          "toward",
          "fence"
        ],
        "answer": "toward",
        "why": "toward the fence."
      },
      {
        "kind": "mc",
        "prompt": "Which word is the preposition?  “She sat beside her brother.”",
        "options": [
          "sat",
          "beside",
          "her",
          "brother"
        ],
        "answer": "beside",
        "why": "beside her brother. “her” describes the object; it is not the preposition."
      },
      {
        "kind": "mc",
        "prompt": "Which word is the preposition?  “The kite flew above the trees.”",
        "options": [
          "kite",
          "flew",
          "above",
          "trees"
        ],
        "answer": "above",
        "why": "above the trees."
      },
      {
        "kind": "mc",
        "prompt": "Which word is the preposition?  “He finished his work during study hall.”",
        "options": [
          "finished",
          "work",
          "during",
          "hall"
        ],
        "answer": "during",
        "why": "during study hall."
      },
      {
        "kind": "mc",
        "prompt": "Which word is the preposition?  “Everyone came except Jonathan.”",
        "options": [
          "Everyone",
          "came",
          "except",
          "Jonathan"
        ],
        "answer": "except",
        "why": "except Jonathan. “except” is on her list and it catches people out."
      },
      {
        "kind": "mc",
        "prompt": "Which word is the preposition?  “They walked along the river.”",
        "options": [
          "They",
          "walked",
          "along",
          "river"
        ],
        "answer": "along",
        "why": "along the river."
      },
      {
        "kind": "mc",
        "prompt": "Which word is the preposition?  “We drove past the school.”",
        "options": [
          "We",
          "drove",
          "past",
          "school"
        ],
        "answer": "past",
        "why": "past the school. Here “past” is a preposition, not a noun meaning long ago."
      },
      {
        "kind": "mc",
        "prompt": "What is the OBJECT of the preposition?  “The keys are on the kitchen counter.”",
        "options": [
          "keys",
          "on",
          "kitchen",
          "counter"
        ],
        "answer": "counter",
        "why": "on WHAT? The counter. “kitchen” only describes the counter — the object is the last noun in the phrase."
      },
      {
        "kind": "mc",
        "prompt": "What is the OBJECT of the preposition?  “He ran toward the finish line.”",
        "options": [
          "He",
          "toward",
          "finish",
          "line"
        ],
        "answer": "line",
        "why": "toward WHAT? The line."
      },
      {
        "kind": "mc",
        "prompt": "What is the OBJECT of the preposition?  “The gift came from my grandmother.”",
        "options": [
          "gift",
          "came",
          "my",
          "grandmother"
        ],
        "answer": "grandmother",
        "why": "from WHOM? My grandmother. An object can be a person."
      },
      {
        "kind": "mc",
        "prompt": "What is the OBJECT of the preposition?  “The trail goes through the tall pines.”",
        "options": [
          "trail",
          "goes",
          "tall",
          "pines"
        ],
        "answer": "pines",
        "why": "through WHAT? The pines. “tall” is only a describing word inside the phrase."
      },
      {
        "kind": "mc",
        "prompt": "In “The plane flew over,” the word OVER is —",
        "options": [
          "a preposition",
          "an adverb",
          "a noun",
          "a verb"
        ],
        "answer": "an adverb",
        "why": "Nothing follows it, so there is no object. A preposition MUST have an object; with nothing after it, the word is an adverb."
      },
      {
        "kind": "mc",
        "prompt": "In “The plane flew over the lake,” the word OVER is —",
        "options": [
          "a preposition",
          "an adverb",
          "a conjunction",
          "an adjective"
        ],
        "answer": "a preposition",
        "why": "Now it has an object — the lake — so it is a preposition and “over the lake” is the phrase. Same word, different job."
      },
      {
        "kind": "mc",
        "prompt": "Which one of these is a preposition?",
        "options": [
          "slowly",
          "beneath",
          "because",
          "although"
        ],
        "answer": "beneath",
        "why": "beneath is on her list. because and although join clauses — they are conjunctions. slowly is an adverb."
      },
      {
        "kind": "mc",
        "prompt": "Which one of these is a preposition?",
        "options": [
          "however",
          "versus",
          "therefore",
          "instead"
        ],
        "answer": "versus",
        "why": "versus is on her list. The other three are all connecting or transition words, not prepositions."
      },
      {
        "kind": "mc",
        "prompt": "Which one of these is a preposition?",
        "options": [
          "nevertheless",
          "meanwhile",
          "despite",
          "otherwise"
        ],
        "answer": "despite",
        "why": "despite is on her list — despite the rain."
      },
      {
        "kind": "multi",
        "prompt": "Mark ALL the prepositional phrases.  “After the game, we ate pizza at the park.”",
        "options": [
          "After the game",
          "we ate pizza",
          "ate pizza at",
          "at the park"
        ],
        "answers": [
          "After the game",
          "at the park"
        ],
        "why": "TWO of them. A sentence can hold more than one phrase — keep reading to the end."
      },
      {
        "kind": "multi",
        "prompt": "Mark ALL the prepositional phrases.  “The cat under the porch ran across the yard.”",
        "options": [
          "The cat under",
          "under the porch",
          "ran across",
          "across the yard"
        ],
        "answers": [
          "under the porch",
          "across the yard"
        ],
        "why": "TWO. A phrase starts at the preposition and ends at its object — it never swallows the word in front of it."
      },
      {
        "kind": "multi",
        "prompt": "Mark ALL the prepositional phrases.  “During the storm, branches fell onto the roof of the shed.”",
        "options": [
          "During the storm",
          "branches fell",
          "onto the roof",
          "fell onto",
          "of the shed"
        ],
        "answers": [
          "During the storm",
          "onto the roof",
          "of the shed"
        ],
        "why": "THREE. Phrases can sit right next to each other — “of the shed” is its own phrase describing the roof."
      },
      {
        "kind": "multi",
        "prompt": "Mark ALL the prepositional phrases.  “Without a word, she walked through the door and into the hall.”",
        "options": [
          "Without a word",
          "she walked",
          "through the door",
          "and into",
          "into the hall"
        ],
        "answers": [
          "Without a word",
          "through the door",
          "into the hall"
        ],
        "why": "THREE. “and” joins the last two phrases but is not part of either one."
      },
      {
        "kind": "multi",
        "prompt": "Which of these are on the preposition list? Check ALL that apply.",
        "options": [
          "amid",
          "almost",
          "among",
          "always",
          "aboard"
        ],
        "answers": [
          "amid",
          "among",
          "aboard"
        ],
        "why": "THREE. almost and always are adverbs — they look similar but never take an object."
      },
      {
        "kind": "tf",
        "prompt": "Every prepositional phrase ends with a noun or a pronoun.",
        "answer": true,
        "why": "That last noun or pronoun is the object of the preposition."
      },
      {
        "kind": "tf",
        "prompt": "A preposition can stand alone with nothing after it.",
        "answer": false,
        "why": "With nothing after it, it has no object — and then it is working as an adverb, not a preposition."
      },
      {
        "kind": "tf",
        "prompt": "The subject of a sentence is never inside a prepositional phrase.",
        "answer": true,
        "why": "That is why crossing out the phrases first makes the subject and verb easy to find."
      },
      {
        "kind": "tf",
        "prompt": "A prepositional phrase can contain describing words between the preposition and its object.",
        "answer": true,
        "why": "“on the kitchen counter” — the and kitchen both sit inside the phrase."
      }
    ],
    "extras": [
      {
        "prompt": "What two parts must every prepositional phrase have?",
        "answer": "A preposition to start it, and an object — a noun or pronoun — to end it. Describing words can sit in between: on the kitchen counter."
      },
      {
        "prompt": "How do you tell a preposition from an adverb?",
        "answer": "Say the word and then ask “what?” or “whom?” If a noun or pronoun answers, it is a preposition. If nothing answers, it is an adverb. “The plane flew over.” — over what? Nothing. Adverb. “The plane flew over the lake.” — over what? The lake. Preposition."
      },
      {
        "prompt": "Name ten prepositions without looking at the list.",
        "answer": "Any ten from her sheet — for example: aboard, about, above, across, after, against, along, among, around, at. The list runs alphabetically from aboard to without."
      },
      {
        "prompt": "Find EVERY prepositional phrase: “In the morning, the team from Brownsburg practiced on the field behind the school.”",
        "answer": "Four of them: in the morning, from Brownsburg, on the field, behind the school."
      },
      {
        "prompt": "Why does crossing out the prepositional phrases help you find the subject and the verb?",
        "answer": "Because the subject is never inside a prepositional phrase. Cross them out and whatever is left is the skeleton of the sentence. “The team (from Brownsburg) practiced” — team practiced."
      },
      {
        "prompt": "Some words can be prepositions OR something else. Name a few and say how you tell.",
        "answer": "but, as, since, than, for, like, past. If the word takes an object right after it, it is a preposition (“everyone but Jonathan”). If it joins two whole ideas instead, it is a conjunction (“I ran but I was late”)."
      },
      {
        "prompt": "What is the object of the preposition in “She waited outside the crowded gym”?",
        "answer": "gym. “outside the crowded gym” is the phrase; “crowded” only describes the object."
      }
    ],
    "drills": [
      "mconly",
      "multionly",
      "extras",
      "match"
    ],
    "rival": "Adverb Athletic",
    "matchLength": 8
  },
  {
    "id": "ela-spelling-4",
    "subject": "ela",
    "title": "Spelling List 4",
    "added": "2026-09-27",
    "quiz": "2026-10-08",
    "note": "Test Thursday 10/8. Nine of the twenty are i-before-e words — that is what the list is really testing.",
    "type": "bundle",
    "spellWords": [
      "seize",
      "weird",
      "grief",
      "receipt",
      "disbelief",
      "received",
      "believers",
      "sovereign",
      "foreigner",
      "traction",
      "competitive",
      "inquire",
      "couple",
      "sought",
      "though",
      "thoroughly",
      "throughout",
      "announcements",
      "extraordinary",
      "selection"
    ],
    "questions": [
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "seize",
          "sieze",
          "seiz",
          "seaze"
        ],
        "answer": "seize",
        "why": "\"seize\" is the one on her list. Breaks the rule — EI with no C in front. One of the ones you just have to know."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "weard",
          "weird",
          "wierd",
          "werid"
        ],
        "answer": "weird",
        "why": "\"weird\" is the one on her list. Breaks the rule — WE-IRD, EI with no C. 'We are weird' keeps the E before the I."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "greef",
          "griefe",
          "grief",
          "greif"
        ],
        "answer": "grief",
        "why": "\"grief\" is the one on her list. Follows the rule — I before E."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "reciept",
          "receit",
          "recipt",
          "receipt"
        ],
        "answer": "receipt",
        "why": "\"receipt\" is the one on her list. I before E EXCEPT after C — so CEI. And it keeps a silent P."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "disbelief",
          "disbeleif",
          "disbelef",
          "disbeleaf"
        ],
        "answer": "disbelief",
        "why": "\"disbelief\" is the one on her list. Follows the rule — I before E, same as 'belief'."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "receved",
          "received",
          "recieved",
          "receieved"
        ],
        "answer": "received",
        "why": "\"received\" is the one on her list. Except after C — CEI, same as 'receipt'."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "belivers",
          "believors",
          "believers",
          "beleivers"
        ],
        "answer": "believers",
        "why": "\"believers\" is the one on her list. Follows the rule — I before E."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "soveriegn",
          "sovreign",
          "soverign",
          "sovereign"
        ],
        "answer": "sovereign",
        "why": "\"sovereign\" is the one on her list. Breaks the rule — EI, no C. Think SOVER-EIGN."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "foreigner",
          "foriegner",
          "foreginer",
          "forigner"
        ],
        "answer": "foreigner",
        "why": "\"foreigner\" is the one on her list. Breaks the rule — EI, no C. Think FOR-EIGN-ER."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "trackion",
          "traction",
          "tracktion",
          "tractoin"
        ],
        "answer": "traction",
        "why": "\"traction\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "compeditive",
          "competitve",
          "competitive",
          "competative"
        ],
        "answer": "competitive",
        "why": "\"competitive\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "inquier",
          "inqure",
          "inquyre",
          "inquire"
        ],
        "answer": "inquire",
        "why": "\"inquire\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "couple",
          "cuople",
          "cupple",
          "coople"
        ],
        "answer": "couple",
        "why": "\"couple\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "soght",
          "sought",
          "sougt",
          "saught"
        ],
        "answer": "sought",
        "why": "\"sought\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "thouh",
          "thouge",
          "though",
          "thogh"
        ],
        "answer": "though",
        "why": "\"though\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "thouroughly",
          "thorougly",
          "thoroughley",
          "thoroughly"
        ],
        "answer": "thoroughly",
        "why": "\"thoroughly\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "throughout",
          "throuhout",
          "throughtout",
          "thruoghout"
        ],
        "answer": "throughout",
        "why": "\"throughout\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "annoucements",
          "announcements",
          "anouncements",
          "announcments"
        ],
        "answer": "announcements",
        "why": "\"announcements\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "extraordinery",
          "exraordinary",
          "extraordinary",
          "extrordinary"
        ],
        "answer": "extraordinary",
        "why": "\"extraordinary\" is the one on her list."
      },
      {
        "kind": "mc",
        "prompt": "Which spelling is correct?",
        "options": [
          "selction",
          "seleciton",
          "selecton",
          "selection"
        ],
        "answer": "selection",
        "why": "\"selection\" is the one on her list."
      },
      {
        "kind": "multi",
        "prompt": "Which of these list words BREAK the “i before e except after c” rule? Check ALL that apply.",
        "options": [
          "seize",
          "grief",
          "weird",
          "believers",
          "sovereign",
          "foreigner"
        ],
        "answers": [
          "seize",
          "weird",
          "sovereign",
          "foreigner"
        ],
        "why": "Four of them. seize, weird, sovereign and foreigner all put E before I with no C in front. grief and believers follow the rule."
      },
      {
        "kind": "multi",
        "prompt": "Which list words follow “except after C” — the C-E-I spelling? Check ALL that apply.",
        "options": [
          "receipt",
          "received",
          "grief",
          "disbelief",
          "seize"
        ],
        "answers": [
          "receipt",
          "received"
        ],
        "why": "Both come after a C, so CEI. grief and disbelief have no C, so I comes first. seize just breaks the rule."
      }
    ],
    "drills": [
      "spell",
      "mconly",
      "multionly"
    ]
  },
  {
    "id": "hist-israel-map",
    "subject": "history",
    "title": "Israel Map Test",
    "added": "2026-10-03",
    "quiz": "2026-10-08",
    "pin": true,
    "note": "Test Thursday 10/8. Name it on the map uses the actual sheet — same blanks, same word bank. Do that one first.",
    "type": "bundle",
    "words": [
      {
        "word": "Mediterranean Sea",
        "meaning": "The large sea along the entire WEST coast. Everything on the map drains toward it."
      },
      {
        "word": "Jordan River",
        "meaning": "The river running north to south down the middle, from the Sea of Galilee down to the Dead Sea. It separates the two kingdoms from the land east of it."
      },
      {
        "word": "Israel",
        "meaning": "The NORTHERN kingdom after the split. The green area holding Megiddo, Dothan and Shiloh."
      },
      {
        "word": "Judah",
        "meaning": "The SOUTHERN kingdom after the split. The shaded area holding Bethlehem, Hebron and Beersheba."
      },
      {
        "word": "Samaria",
        "meaning": "Capital of the NORTHERN kingdom, Israel. Marked with the capital symbol, west of the Jordan and north of Bethel."
      },
      {
        "word": "Jerusalem",
        "meaning": "Capital of the SOUTHERN kingdom, Judah. Marked with the capital symbol, just north of Bethlehem and west of Jericho."
      },
      {
        "word": "Egypt — ORANGE",
        "meaning": "Modern map. The large country in the south-west, on the far side of the Red Sea and the Sinai."
      },
      {
        "word": "Israel — BLUE",
        "meaning": "Modern map. The small country on the eastern Mediterranean coast, between Lebanon and Egypt."
      },
      {
        "word": "Lebanon — YELLOW",
        "meaning": "Modern map. The small country directly NORTH of Israel, on the coast."
      },
      {
        "word": "Jordan — BROWN",
        "meaning": "Modern map. The country directly EAST of Israel, across the Jordan River."
      },
      {
        "word": "Syria — PURPLE",
        "meaning": "Modern map. North-east of Israel, above Jordan and west of Iraq."
      },
      {
        "word": "Iraq — GREEN",
        "meaning": "Modern map. East of Syria and Jordan, at the top of the Persian Gulf."
      },
      {
        "word": "Saudi Arabia — RED",
        "meaning": "Modern map. The biggest country on the map, filling the whole peninsula south of Jordan and Iraq."
      }
    ],
    "questions": [
      {
        "kind": "mc",
        "prompt": "ANCIENT MAP — which body of water forms the entire western border?",
        "options": [
          "The Dead Sea",
          "The Sea of Galilee",
          "The Mediterranean Sea",
          "The Red Sea"
        ],
        "answer": "The Mediterranean Sea",
        "why": "It runs the full length of the west coast, past Tyre, Joppa, Ashkelon and Gaza."
      },
      {
        "kind": "mc",
        "prompt": "ANCIENT MAP — which river runs from the Sea of Galilee down to the Dead Sea?",
        "options": [
          "The Nile",
          "The Jordan River",
          "The Euphrates",
          "The Tigris"
        ],
        "answer": "The Jordan River",
        "why": "North to south down the middle of the map. The Sea of Galilee feeds it and the Dead Sea is where it ends."
      },
      {
        "kind": "mc",
        "prompt": "ANCIENT MAP — which was the NORTHERN kingdom?",
        "options": [
          "Judah",
          "Israel",
          "Philistia",
          "Phoenicia"
        ],
        "answer": "Israel",
        "why": "Israel is north, Judah is south. Remember it by the capitals: Samaria up top, Jerusalem down below."
      },
      {
        "kind": "mc",
        "prompt": "ANCIENT MAP — which was the SOUTHERN kingdom?",
        "options": [
          "Israel",
          "Samaria",
          "Judah",
          "Moab"
        ],
        "answer": "Judah",
        "why": "Judah holds Bethlehem, Hebron, Beersheba and En-gedi."
      },
      {
        "kind": "mc",
        "prompt": "ANCIENT MAP — what was the capital of the northern kingdom?",
        "options": [
          "Jerusalem",
          "Samaria",
          "Shiloh",
          "Megiddo"
        ],
        "answer": "Samaria",
        "why": "Samaria is the capital of Israel in the north. Both capitals are marked with the same little capital symbol, so go by position."
      },
      {
        "kind": "mc",
        "prompt": "ANCIENT MAP — what was the capital of Judah?",
        "options": [
          "Samaria",
          "Hebron",
          "Bethlehem",
          "Jerusalem"
        ],
        "answer": "Jerusalem",
        "why": "Jerusalem sits just north of Bethlehem and west of Jericho."
      },
      {
        "kind": "mc",
        "prompt": "ANCIENT MAP — Bethlehem, Hebron and Beersheba are all in which kingdom?",
        "options": [
          "Israel",
          "Judah",
          "Philistia",
          "Edom"
        ],
        "answer": "Judah",
        "why": "All three sit in the southern shaded area."
      },
      {
        "kind": "mc",
        "prompt": "ANCIENT MAP — Megiddo, Dothan and Shiloh are all in which kingdom?",
        "options": [
          "Judah",
          "Israel",
          "Moab",
          "Phoenicia"
        ],
        "answer": "Israel",
        "why": "All three sit in the northern green area."
      },
      {
        "kind": "mc",
        "prompt": "ANCIENT MAP — which is further NORTH?",
        "options": [
          "Jerusalem",
          "Samaria",
          "Bethlehem",
          "Hebron"
        ],
        "answer": "Samaria",
        "why": "Samaria is in the northern kingdom. The other three are all in Judah, in the south."
      },
      {
        "kind": "mc",
        "prompt": "MODERN MAP — what colour is Egypt?",
        "options": [
          "Orange",
          "Red",
          "Yellow",
          "Green"
        ],
        "answer": "Orange",
        "why": "Egypt is ORANGE."
      },
      {
        "kind": "mc",
        "prompt": "MODERN MAP — what colour is Israel?",
        "options": [
          "Green",
          "Blue",
          "Purple",
          "Brown"
        ],
        "answer": "Blue",
        "why": "Israel is BLUE."
      },
      {
        "kind": "mc",
        "prompt": "MODERN MAP — what colour is Lebanon?",
        "options": [
          "Brown",
          "Purple",
          "Yellow",
          "Red"
        ],
        "answer": "Yellow",
        "why": "Lebanon is YELLOW. It is the small one directly north of Israel."
      },
      {
        "kind": "mc",
        "prompt": "MODERN MAP — what colour is Jordan?",
        "options": [
          "Brown",
          "Orange",
          "Green",
          "Blue"
        ],
        "answer": "Brown",
        "why": "Jordan is BROWN. Jordan and Egypt are the two easiest to mix up, so pair them in your head: Jordan BROWN, Egypt ORANGE."
      },
      {
        "kind": "mc",
        "prompt": "MODERN MAP — what colour is Syria?",
        "options": [
          "Red",
          "Yellow",
          "Purple",
          "Brown"
        ],
        "answer": "Purple",
        "why": "Syria is PURPLE."
      },
      {
        "kind": "mc",
        "prompt": "MODERN MAP — what colour is Iraq?",
        "options": [
          "Green",
          "Blue",
          "Red",
          "Orange"
        ],
        "answer": "Green",
        "why": "Iraq is GREEN."
      },
      {
        "kind": "mc",
        "prompt": "MODERN MAP — what colour is Saudi Arabia?",
        "options": [
          "Purple",
          "Brown",
          "Yellow",
          "Red"
        ],
        "answer": "Red",
        "why": "Saudi Arabia is RED. It is the biggest country on the map, so the red block is hard to miss."
      },
      {
        "kind": "mc",
        "prompt": "MODERN MAP — which country is directly NORTH of Israel?",
        "options": [
          "Jordan",
          "Lebanon",
          "Syria",
          "Egypt"
        ],
        "answer": "Lebanon",
        "why": "Lebanon sits on the coast right above Israel. Syria is north-east, further inland."
      },
      {
        "kind": "mc",
        "prompt": "MODERN MAP — which country is directly EAST of Israel?",
        "options": [
          "Iraq",
          "Saudi Arabia",
          "Jordan",
          "Syria"
        ],
        "answer": "Jordan",
        "why": "Straight across the Jordan River."
      },
      {
        "kind": "mc",
        "prompt": "MODERN MAP — which is the LARGEST country shown?",
        "options": [
          "Egypt",
          "Iraq",
          "Saudi Arabia",
          "Syria"
        ],
        "answer": "Saudi Arabia",
        "why": "It fills the whole peninsula south of Jordan and Iraq."
      },
      {
        "kind": "mc",
        "prompt": "MODERN MAP — which country is west of Israel, across the Sinai Peninsula?",
        "options": [
          "Libya",
          "Egypt",
          "Jordan",
          "Lebanon"
        ],
        "answer": "Egypt",
        "why": "Egypt is across the Sinai to the south-west."
      },
      {
        "kind": "multi",
        "prompt": "ANCIENT MAP — which of these belong to the NORTHERN kingdom of Israel? Check ALL that apply.",
        "options": [
          "Samaria",
          "Megiddo",
          "Hebron",
          "Shiloh",
          "Beersheba"
        ],
        "answers": [
          "Samaria",
          "Megiddo",
          "Shiloh"
        ],
        "why": "THREE of them. Hebron and Beersheba are both down in Judah."
      },
      {
        "kind": "multi",
        "prompt": "MODERN MAP — which countries BORDER Israel on this map? Check ALL that apply.",
        "options": [
          "Lebanon",
          "Syria",
          "Jordan",
          "Egypt",
          "Iraq"
        ],
        "answers": [
          "Lebanon",
          "Syria",
          "Jordan",
          "Egypt"
        ],
        "why": "FOUR. Iraq does not touch Israel — Jordan and Syria are in between."
      },
      {
        "kind": "multi",
        "prompt": "Which six things do you have to label on the ANCIENT map? Check ALL that apply.",
        "options": [
          "Mediterranean Sea",
          "Jordan River",
          "Jerusalem",
          "Samaria",
          "Judah",
          "Israel",
          "Egypt",
          "Dead Sea"
        ],
        "answers": [
          "Mediterranean Sea",
          "Jordan River",
          "Jerusalem",
          "Samaria",
          "Judah",
          "Israel"
        ],
        "why": "SIX. Egypt belongs to the other map, and the Dead Sea is already printed on the sheet."
      },
      {
        "kind": "tf",
        "prompt": "On the ancient map, Israel is the northern kingdom and Judah is the southern kingdom.",
        "answer": true,
        "why": "North is Israel, south is Judah."
      },
      {
        "kind": "tf",
        "prompt": "Jerusalem was the capital of the northern kingdom.",
        "answer": false,
        "why": "Jerusalem was the capital of JUDAH in the south. Samaria was the northern capital."
      },
      {
        "kind": "tf",
        "prompt": "The Jordan River flows into the Dead Sea.",
        "answer": true,
        "why": "It runs from the Sea of Galilee in the north down into the Dead Sea."
      }
    ],
    "extras": [
      {
        "prompt": "Name the six things you have to label on the ancient Israel map.",
        "answer": "Mediterranean Sea, Jordan River, Jerusalem, Samaria, Judah, Israel."
      },
      {
        "prompt": "Point to where each one goes on the ancient map, out loud.",
        "answer": "Mediterranean Sea along the whole west coast. Jordan River down the middle, from the Sea of Galilee to the Dead Sea. Israel the northern region. Judah the southern region. Samaria the capital up in Israel. Jerusalem the capital down in Judah, just above Bethlehem."
      },
      {
        "prompt": "How do you keep Samaria and Jerusalem straight?",
        "answer": "Samaria is the capital of the northern kingdom and Jerusalem is the capital of the southern kingdom. Both are marked with the same capital symbol on the map, so position is the only way to tell them apart. Samaria is up by Shiloh; Jerusalem is down by Bethlehem."
      },
      {
        "prompt": "Say all seven country colours for the modern map, from memory.",
        "answer": "Egypt orange, Israel blue, Lebanon yellow, Jordan brown, Syria purple, Iraq green, Saudi Arabia red."
      },
      {
        "prompt": "Which two colours are easiest to mix up, and how will you remember?",
        "answer": "Jordan brown and Egypt orange. Pair them deliberately: Jordan is BROWN and sits east of Israel; Egypt is ORANGE and sits south-west across the Sinai."
      },
      {
        "prompt": "Starting at Israel on the modern map, name the neighbours going clockwise.",
        "answer": "Lebanon to the north, Syria to the north-east, Jordan to the east, and Egypt to the south-west. Iraq and Saudi Arabia are further out and do not touch Israel."
      }
    ],
    "drills": [
      "maplabel",
      "meaning",
      "mconly",
      "extras"
    ],
    "rival": "Philistia FC",
    "matchLength": 8,
    "maps": [
      {
        "id": "ancient",
        "title": "Ancient Israel",
        "src": "data:image/jpeg;base64,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",
        "w": 429,
        "h": 689,
        "bank": [
          "Mediterranean Sea",
          "Jordan River",
          "Jerusalem",
          "Samaria",
          "Judah",
          "Israel"
        ],
        "blanks": [
          {
            "x": 29,
            "y": 59,
            "w": 131,
            "h": 33,
            "answer": "Mediterranean Sea",
            "why": "The big water on the WEST, past Tyre, Joppa, Ashkelon and Gaza."
          },
          {
            "x": 217,
            "y": 159,
            "w": 54,
            "h": 22,
            "answer": "Israel",
            "why": "The NORTHERN kingdom — the green area with Megiddo, Dothan and Shiloh."
          },
          {
            "x": 258,
            "y": 186,
            "w": 17,
            "h": 101,
            "answer": "Jordan River",
            "why": "The tall narrow blank follows the river down from the Sea of Galilee to the Dead Sea."
          },
          {
            "x": 151,
            "y": 255,
            "w": 67,
            "h": 21,
            "answer": "Samaria",
            "why": "Capital of the northern kingdom. It has the little capital symbol beside it, up near Shiloh."
          },
          {
            "x": 227,
            "y": 357,
            "w": 95,
            "h": 16,
            "answer": "Jerusalem",
            "why": "Capital of Judah. Also marked with the capital symbol, just above Bethlehem and west of Jericho."
          },
          {
            "x": 95,
            "y": 511,
            "w": 64,
            "h": 25,
            "answer": "Judah",
            "why": "The SOUTHERN kingdom — the shaded area with Hebron, Beersheba and En-gedi."
          }
        ]
      },
      {
        "id": "modern",
        "title": "The Middle East today",
        "src": "data:image/jpeg;base64,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",
        "w": 474,
        "h": 412,
        "bank": [
          "Egypt",
          "Israel",
          "Lebanon",
          "Jordan",
          "Syria",
          "Iraq",
          "Saudi Arabia"
        ],
        "blanks": [
          {
            "x": 85,
            "y": 158,
            "pin": true,
            "answer": "Egypt",
            "fill": "#F0932B",
            "labelW": 52,
            "prompt": "Which country is this pin on?",
            "why": "Colour it ORANGE.",
            "labelDx": 12
          },
          {
            "x": 173,
            "y": 106,
            "pin": true,
            "answer": "Israel",
            "fill": "#4A90D9",
            "labelW": 46,
            "prompt": "Which country is this pin on?",
            "why": "Colour it BLUE.",
            "labelDx": -57,
            "labelDy": 14
          },
          {
            "x": 180,
            "y": 70,
            "pin": true,
            "answer": "Lebanon",
            "fill": "#F2D230",
            "labelW": 62,
            "prompt": "Which country is this pin on?",
            "why": "Colour it YELLOW. The small one right above Israel on the coast.",
            "labelDx": -73,
            "labelDy": -10
          },
          {
            "x": 203,
            "y": 115,
            "pin": true,
            "answer": "Jordan",
            "fill": "#8A5A2B",
            "labelW": 54,
            "prompt": "Which country is this pin on?",
            "why": "Colour it BROWN. Straight east of Israel.",
            "labelDx": 12,
            "labelDy": 16
          },
          {
            "x": 219,
            "y": 56,
            "pin": true,
            "answer": "Syria",
            "fill": "#8E5BB5",
            "labelW": 46,
            "prompt": "Which country is this pin on?",
            "why": "Colour it PURPLE. North-east, above Jordan.",
            "labelDx": 12,
            "labelDy": -12
          },
          {
            "x": 285,
            "y": 90,
            "pin": true,
            "answer": "Iraq",
            "fill": "#3FA45B",
            "labelW": 38,
            "prompt": "Which country is this pin on?",
            "why": "Colour it GREEN. East of Syria, at the top of the Gulf.",
            "labelDx": 12
          },
          {
            "x": 285,
            "y": 232,
            "pin": true,
            "answer": "Saudi Arabia",
            "fill": "#D64033",
            "labelW": 92,
            "prompt": "Which country is this pin on?",
            "why": "Colour it RED. The biggest country on the map.",
            "labelDx": 12
          }
        ],
        "pinR": 8
      }
    ]
  },
  {
    "id": "hist-israel-vocab",
    "subject": "history",
    "title": "Ancient Israel Vocab Test",
    "added": "2026-10-03",
    "quiz": "2026-10-09",
    "note": "Test Friday 10/9. Thirty terms. Mrs. Martinez: matching from a word bank, true/false with the underlined word corrected, and short written answers.",
    "type": "bundle",
    "words": [
      {
        "word": "Abraham",
        "meaning": "Patriarch called by God; father of the Hebrew nation."
      },
      {
        "word": "Isaac",
        "meaning": "Son of Abraham and Sarah; father of Jacob."
      },
      {
        "word": "Jacob / Israel",
        "meaning": "Son of Isaac whose name was changed to Israel; father of the 12 tribes of Israel."
      },
      {
        "word": "Moses",
        "meaning": "Leader who delivered the Israelites from Egypt and received the law at Mt. Sinai."
      },
      {
        "word": "Joseph",
        "meaning": "Son of Jacob sold into slavery in Egypt, who later rose to power and saved his family during a famine."
      },
      {
        "word": "Joshua",
        "meaning": "Leader who succeeded Moses and led the Israelites into the Promised Land."
      },
      {
        "word": "Samuel",
        "meaning": "The last judge and a prophet of Israel who anointed the first two kings."
      },
      {
        "word": "David",
        "meaning": "Israel's second and greatest king, known for establishing Jerusalem as the capital."
      },
      {
        "word": "Solomon",
        "meaning": "King of Israel known for his wisdom and for building the first Temple."
      },
      {
        "word": "Jeroboam",
        "meaning": "First king of the northern kingdom of Israel after the kingdom split."
      },
      {
        "word": "Nebuchadnezzar",
        "meaning": "Babylonian king who conquered Judah and exiled the Jewish people."
      },
      {
        "word": "Esther",
        "meaning": "Jewish queen of Persia who saved her people from a plot to destroy them."
      },
      {
        "word": "Antiochus IV",
        "meaning": "Seleucid ruler who desecrated the Jewish Temple and sparked the Maccabean Revolt."
      },
      {
        "word": "Abrahamic Covenant",
        "meaning": "God's promise that Abraham's descendants would become a great nation and bless all families of the earth."
      },
      {
        "word": "Israel (term)",
        "meaning": "The nation God made from Jacob's descendants; also the name of the Northern Kingdom after the split."
      },
      {
        "word": "Mosaic Covenant",
        "meaning": "Conditional laws given at Mt. Sinai with blessings for obedience and curses for disobedience."
      },
      {
        "word": "Monotheism",
        "meaning": "The belief in one true God (Yahweh)."
      },
      {
        "word": "Passover",
        "meaning": "A celebration honoring the Lord's deliverance of the Israelites from slavery in Egypt."
      },
      {
        "word": "Exodus",
        "meaning": "The Israelites' departure from Egypt."
      },
      {
        "word": "Tabernacle",
        "meaning": "The portable place of worship used in the wilderness, symbolizing God's presence with the people."
      },
      {
        "word": "Yahweh",
        "meaning": "The Hebrew name for the one true God."
      },
      {
        "word": "Atonement",
        "meaning": "The restoration of the broken relationship between God and people."
      },
      {
        "word": "Judas Maccabeus",
        "meaning": "Leader of the Jewish revolt against the Seleucids in the 2nd century BC."
      },
      {
        "word": "Hanukkah",
        "meaning": "The 8-day celebration marking the Maccabean rededication of the Temple."
      },
      {
        "word": "Diaspora",
        "meaning": "The intentional scattering of the Israelites into foreign nations."
      },
      {
        "word": "New Covenant",
        "meaning": "Agreement in which God promised to give His Holy Spirit and transform the hearts of His people."
      },
      {
        "word": "Assimilate",
        "meaning": "To absorb into a culture."
      },
      {
        "word": "Samaritans",
        "meaning": "People in the northern kingdom of Israel; descendants of conquered peoples who intermarried with Israelites."
      },
      {
        "word": "Septuagint",
        "meaning": "The historical Greek translation of the Old Testament Scriptures."
      },
      {
        "word": "Synagogue / Rabbi",
        "meaning": "A local house of prayer and scripture reading, and the Jewish teacher leading it."
      }
    ],
    "questions": [
      {
        "kind": "correct",
        "prompt": "Abraham was the father of the Hebrew nation.",
        "underlined": "Abraham",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "The patriarch God called. The line runs Abraham, Isaac, Jacob."
      },
      {
        "kind": "correct",
        "prompt": "Isaac was the son of Jacob and Sarah.",
        "underlined": "Jacob",
        "answer": false,
        "correction": "Abraham",
        "options": [
          "Abraham",
          "Jacob",
          "Joseph",
          "Moses"
        ],
        "why": "Isaac is the son of ABRAHAM and Sarah, and the father of Jacob. Keep the order: Abraham, Isaac, Jacob."
      },
      {
        "kind": "correct",
        "prompt": "Jacob's name was changed to Israel.",
        "underlined": "Israel",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "And his descendants became the 12 tribes of Israel."
      },
      {
        "kind": "correct",
        "prompt": "Moses received the law at Mt. Ararat.",
        "underlined": "Ararat",
        "answer": false,
        "correction": "Sinai",
        "options": [
          "Sinai",
          "Ararat",
          "Carmel",
          "Nebo"
        ],
        "why": "Mt. SINAI. Ararat is where the ark came to rest, which is a different story entirely."
      },
      {
        "kind": "correct",
        "prompt": "Joseph was sold into slavery in Babylon.",
        "underlined": "Babylon",
        "answer": false,
        "correction": "Egypt",
        "options": [
          "Egypt",
          "Babylon",
          "Persia",
          "Assyria"
        ],
        "why": "EGYPT. He rose to power there and saved his family during the famine."
      },
      {
        "kind": "correct",
        "prompt": "Joshua succeeded Moses and led the Israelites into the Promised Land.",
        "underlined": "Joshua",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Moses led them OUT of Egypt; Joshua led them IN to the Promised Land."
      },
      {
        "kind": "correct",
        "prompt": "Samuel was the first judge of Israel.",
        "underlined": "first",
        "answer": false,
        "correction": "last",
        "options": [
          "last",
          "first",
          "greatest",
          "youngest"
        ],
        "why": "The LAST judge, and a prophet. He anointed the first two kings, Saul and David."
      },
      {
        "kind": "correct",
        "prompt": "David established Jerusalem as the capital.",
        "underlined": "Jerusalem",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Israel's second and greatest king."
      },
      {
        "kind": "correct",
        "prompt": "Solomon built the first Temple.",
        "underlined": "Solomon",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Known for his wisdom and for the Temple."
      },
      {
        "kind": "correct",
        "prompt": "Jeroboam was the first king of the southern kingdom.",
        "underlined": "southern",
        "answer": false,
        "correction": "northern",
        "options": [
          "northern",
          "southern",
          "eastern",
          "united"
        ],
        "why": "NORTHERN. Jeroboam took the north, which kept the name Israel."
      },
      {
        "kind": "correct",
        "prompt": "Nebuchadnezzar was the Assyrian king who conquered Judah.",
        "underlined": "Assyrian",
        "answer": false,
        "correction": "Babylonian",
        "options": [
          "Babylonian",
          "Assyrian",
          "Persian",
          "Seleucid"
        ],
        "why": "BABYLONIAN. He conquered Judah and carried the people into exile."
      },
      {
        "kind": "correct",
        "prompt": "Esther was the Jewish queen of Egypt.",
        "underlined": "Egypt",
        "answer": false,
        "correction": "Persia",
        "options": [
          "Persia",
          "Egypt",
          "Babylon",
          "Greece"
        ],
        "why": "PERSIA. She saved her people from a plot to destroy them."
      },
      {
        "kind": "correct",
        "prompt": "Antiochus IV desecrated the Temple and sparked the Maccabean Revolt.",
        "underlined": "Antiochus IV",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "The Seleucid ruler. Judas Maccabeus led the revolt that followed."
      },
      {
        "kind": "correct",
        "prompt": "Monotheism is the belief in many gods.",
        "underlined": "many",
        "answer": false,
        "correction": "one",
        "options": [
          "one",
          "many",
          "no",
          "three"
        ],
        "why": "ONE true God, Yahweh. Poly means many; mono means one."
      },
      {
        "kind": "correct",
        "prompt": "The Tabernacle was a permanent place of worship.",
        "underlined": "permanent",
        "answer": false,
        "correction": "portable",
        "options": [
          "portable",
          "permanent",
          "stone",
          "hidden"
        ],
        "why": "PORTABLE. They carried it through the wilderness. The permanent one was Solomon's Temple."
      },
      {
        "kind": "correct",
        "prompt": "The Mosaic Covenant was unconditional.",
        "underlined": "unconditional",
        "answer": false,
        "correction": "conditional",
        "options": [
          "conditional",
          "unconditional",
          "temporary",
          "secret"
        ],
        "why": "CONDITIONAL, with blessings for obedience and curses for disobedience. The Abrahamic Covenant is the promise one."
      },
      {
        "kind": "correct",
        "prompt": "The Diaspora was the accidental scattering of the Israelites.",
        "underlined": "accidental",
        "answer": false,
        "correction": "intentional",
        "options": [
          "intentional",
          "accidental",
          "peaceful",
          "brief"
        ],
        "why": "INTENTIONAL scattering into foreign nations. That word is the whole definition."
      },
      {
        "kind": "correct",
        "prompt": "Passover honors the deliverance of the Israelites from slavery in Egypt.",
        "underlined": "Passover",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Deliverance from slavery. The Exodus is the departure itself."
      },
      {
        "kind": "correct",
        "prompt": "Hanukkah is an 8-day celebration marking the rededication of the Temple.",
        "underlined": "8-day",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Eight days, after the Maccabean rededication."
      },
      {
        "kind": "correct",
        "prompt": "The Septuagint is the Greek translation of the Old Testament.",
        "underlined": "Greek",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Greek translation of the Old Testament Scriptures."
      },
      {
        "kind": "correct",
        "prompt": "To assimilate means to absorb into a culture.",
        "underlined": "absorb",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Which is exactly what the Diaspora made happen."
      },
      {
        "kind": "correct",
        "prompt": "Atonement is the restoration of the broken relationship between God and people.",
        "underlined": "restoration",
        "answer": true,
        "correction": null,
        "options": [],
        "why": "Restoring what was broken."
      },
      {
        "kind": "multi",
        "prompt": "Which of these are COVENANTS? Check ALL that apply.",
        "options": [
          "Abrahamic Covenant",
          "Mosaic Covenant",
          "New Covenant",
          "Exodus",
          "Diaspora"
        ],
        "answers": [
          "Abrahamic Covenant",
          "Mosaic Covenant",
          "New Covenant"
        ],
        "why": "THREE. Abrahamic is the promise, Mosaic is the conditional law, New is the one about the Holy Spirit and changed hearts."
      },
      {
        "kind": "multi",
        "prompt": "Which of these are KINGS? Check ALL that apply.",
        "options": [
          "David",
          "Solomon",
          "Jeroboam",
          "Nebuchadnezzar",
          "Samuel",
          "Joshua"
        ],
        "answers": [
          "David",
          "Solomon",
          "Jeroboam",
          "Nebuchadnezzar"
        ],
        "why": "FOUR. Samuel was a judge and prophet; Joshua was a leader, not a king."
      },
      {
        "kind": "multi",
        "prompt": "Which terms belong to the MACCABEAN story? Check ALL that apply.",
        "options": [
          "Antiochus IV",
          "Judas Maccabeus",
          "Hanukkah",
          "Passover",
          "Esther"
        ],
        "answers": [
          "Antiochus IV",
          "Judas Maccabeus",
          "Hanukkah"
        ],
        "why": "THREE. Antiochus desecrated the Temple, Judas led the revolt, Hanukkah marks the rededication."
      },
      {
        "kind": "mc",
        "prompt": "Which word means the Israelites' DEPARTURE from Egypt?",
        "options": [
          "Passover",
          "Exodus",
          "Diaspora",
          "Atonement"
        ],
        "answer": "Exodus",
        "why": "Exodus is the leaving. Passover is the celebration of the deliverance. Easy pair to swap."
      },
      {
        "kind": "mc",
        "prompt": "Who were the Samaritans?",
        "options": [
          "Priests of the Temple",
          "Conquered peoples who intermarried with Israelites in the north",
          "Greek translators of the Scriptures",
          "Babylonian officials"
        ],
        "answer": "Conquered peoples who intermarried with Israelites in the north",
        "why": "People of the northern kingdom, descended from conquered peoples who intermarried with Israelites."
      },
      {
        "kind": "mc",
        "prompt": "What is a synagogue?",
        "options": [
          "The portable place of worship in the wilderness",
          "The first Temple in Jerusalem",
          "A local house of prayer and scripture reading",
          "A Greek translation of Scripture"
        ],
        "answer": "A local house of prayer and scripture reading",
        "why": "And the rabbi is the Jewish teacher who leads it. The portable one is the Tabernacle."
      },
      {
        "kind": "mc",
        "prompt": "Which covenant promised the Holy Spirit and transformed hearts?",
        "options": [
          "Abrahamic Covenant",
          "Mosaic Covenant",
          "New Covenant",
          "Davidic Covenant"
        ],
        "answer": "New Covenant",
        "why": "The New Covenant. Abrahamic is descendants and blessing; Mosaic is the law at Sinai."
      }
    ],
    "extras": [
      {
        "prompt": "Trace the family line from Abraham to the 12 tribes.",
        "answer": "Abraham, then his son Isaac, then Isaac's son Jacob. Jacob's name was changed to Israel, and his descendants became the 12 tribes of Israel."
      },
      {
        "prompt": "Name the three covenants and say what each one promised.",
        "answer": "Abrahamic: Abraham's descendants would become a great nation and bless all families of the earth. Mosaic: conditional laws at Mt. Sinai, blessings for obedience and curses for disobedience. New: God would give His Holy Spirit and transform the hearts of His people."
      },
      {
        "prompt": "What is the difference between Israel the person and Israel the kingdom?",
        "answer": "Israel the person is Jacob, renamed by God. Israel the kingdom is the nation made from his descendants, and after the split it is the name of the NORTHERN kingdom."
      },
      {
        "prompt": "Who led the Israelites out of Egypt, and who led them into the Promised Land?",
        "answer": "Moses led them out of Egypt and received the law at Mt. Sinai. Joshua succeeded him and led them into the Promised Land."
      },
      {
        "prompt": "What happened when the kingdom split?",
        "answer": "It broke into two. The northern kingdom kept the name Israel, with Jeroboam as its first king and Samaria as its capital. The southern kingdom was Judah, with Jerusalem as its capital."
      },
      {
        "prompt": "Who were the Samaritans and where did they come from?",
        "answer": "People of the northern kingdom of Israel, descended from conquered peoples who intermarried with Israelites after the north fell."
      },
      {
        "prompt": "Tell the Hanukkah story using three of the vocabulary terms.",
        "answer": "Antiochus IV, the Seleucid ruler, desecrated the Jewish Temple. Judas Maccabeus led the revolt against the Seleucids. Hanukkah is the 8-day celebration marking the rededication of the Temple."
      },
      {
        "prompt": "What is the Diaspora, and which word in the definition matters most?",
        "answer": "The scattering of the Israelites into foreign nations. The word that matters is INTENTIONAL — it was done on purpose, not by accident."
      },
      {
        "prompt": "Put these in order: Moses, David, Abraham, Judas Maccabeus, Joshua, Solomon.",
        "answer": "Abraham, Moses, Joshua, David, Solomon, Judas Maccabeus. Patriarch, then the Exodus, then the Promised Land, then the two great kings, then the Maccabean revolt much later."
      },
      {
        "prompt": "Which two terms are about Scripture itself, and what does each mean?",
        "answer": "Septuagint, the historical Greek translation of the Old Testament Scriptures. And synagogue, the local house of prayer and scripture reading, led by a rabbi."
      }
    ],
    "drills": [
      "match",
      "meaning",
      "corronly",
      "extras"
    ],
    "rival": "Babylon United",
    "matchLength": 8
  },
  {
    "id": "bible-john-15-6",
    "subject": "bible",
    "title": "John 15:6",
    "added": "2026-10-03",
    "quiz": "2026-10-09",
    "note": "Quiz Friday 10/9. Word for word, ESV. Picks up straight after 15:5, which he already knows.",
    "type": "verse",
    "reference": "John 15:6",
    "version": "ESV",
    "text": "If anyone does not abide in me, he is thrown away like a branch and withers; and the branches are gathered, thrown into the fire, and burned.",
    "assess": "quiz"
  },
  {
    "id": "sci-plant-cell",
    "subject": "science",
    "title": "Plant Cell Labelling Quiz",
    "added": "2026-10-06",
    "quiz": "2026-10-07",
    "pin": true,
    "note": "Quiz Wednesday 10/7. Label names match the textbook diagram exactly. Name it on the map uses his own sheet.",
    "type": "bundle",
    "maps": [
      {
        "id": "plantcell",
        "title": "Plant Cell",
        "src": "data:image/jpeg;base64,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",
        "w": 620,
        "h": 694,
        "bank": [
          "cell membrane",
          "mitochondrion",
          "vacuole",
          "chloroplast",
          "cytoplasm",
          "ribosomes",
          "endoplasmic reticulum",
          "chromosomes",
          "nucleus",
          "cell wall"
        ],
        "blanks": [
          {
            "answer": "cell membrane",
            "x": 2,
            "y": 74,
            "w": 80,
            "h": 16,
            "why": "The thin pale layer just INSIDE the outer wall. It controls what gets in and out.",
            "prompt": "Which label goes on this line? It stops on the thin pale layer inside the outer wall."
          },
          {
            "answer": "mitochondrion",
            "x": 2,
            "y": 153,
            "w": 80,
            "h": 16,
            "why": "The red bean-shaped one. It breaks down the cell's food and releases energy."
          },
          {
            "answer": "vacuole",
            "x": 2,
            "y": 320,
            "w": 55,
            "h": 16,
            "why": "The huge pale blue space. Plant cells usually have one central vacuole, sometimes more than half the cell's volume. When the plant runs short of water it shrinks and the plant droops."
          },
          {
            "answer": "chloroplast",
            "x": 2,
            "y": 432,
            "w": 66,
            "h": 16,
            "why": "The striped green oval. It holds chlorophyll, which absorbs energy from sunlight for photosynthesis. Animal cells do not have these."
          },
          {
            "answer": "cytoplasm",
            "x": 128,
            "y": 44,
            "w": 58,
            "h": 16,
            "why": "The jelly filling the cell, where the organelles sit. This line ends in open green with no organelle there.",
            "prompt": "Which label goes on this line? It ends in open green with no organelle there."
          },
          {
            "answer": "ribosomes",
            "x": 239,
            "y": 25,
            "w": 58,
            "h": 16,
            "why": "The tiny scattered dots. They make the proteins the cell needs by reading the code in the DNA."
          },
          {
            "answer": "endoplasmic reticulum",
            "x": 282,
            "y": 46,
            "w": 118,
            "h": 16,
            "why": "The folded ribbon network beside the nucleus. The cell's transportation system, a set of passageways moving material around."
          },
          {
            "answer": "chromosomes",
            "x": 405,
            "y": 63,
            "w": 76,
            "h": 16,
            "why": "The dark material INSIDE the nucleus. They carry the DNA code.",
            "prompt": "Which label goes on this line? It points into the dark middle of the nucleus."
          },
          {
            "answer": "nucleus",
            "x": 534,
            "y": 110,
            "w": 58,
            "h": 16,
            "why": "The big pink sphere, the control centre. The line points into the pink part, not the dark middle.",
            "prompt": "Which label goes on this line? It points into the pink body, not the dark middle."
          },
          {
            "answer": "cell wall",
            "x": 316,
            "y": 669,
            "w": 60,
            "h": 16,
            "why": "The thick dark green outer layer. It provides support and, with the vacuoles, keeps the plant cell rigid and firm. Only plant cells have one.",
            "prompt": "Which label goes on this line? It comes in from outside and crosses the thick dark outer layer."
          }
        ]
      }
    ],
    "words": [
      {
        "word": "cell wall",
        "meaning": "The thick, rigid outer layer. It provides support for the plant cell and, along with the vacuoles, helps it stay rigid and firm. Only plant cells have one."
      },
      {
        "word": "cell membrane",
        "meaning": "The thin layer just inside the cell wall that controls what enters and leaves the cell."
      },
      {
        "word": "cytoplasm",
        "meaning": "The jelly-like filling of the cell, where the organelles sit."
      },
      {
        "word": "nucleus",
        "meaning": "The control centre of the cell. The large sphere that holds the chromosomes."
      },
      {
        "word": "chromosomes",
        "meaning": "The structures inside the nucleus that carry the DNA code."
      },
      {
        "word": "vacuole",
        "meaning": "Plant cells usually have one large central vacuole. It can hold more than half the cell’s volume. When a plant cell fails to get enough water the vacuole shrinks and the plant droops."
      },
      {
        "word": "chloroplast",
        "meaning": "A large structure holding chlorophyll, a green pigment that absorbs energy from sunlight. Chloroplasts store that energy for photosynthesis. Animal cells do not have them."
      },
      {
        "word": "mitochondrion",
        "meaning": "Responsible for breaking down the cell’s food and releasing energy."
      },
      {
        "word": "ribosomes",
        "meaning": "Small organelles found along the ER. They make the proteins the cell needs by reading the code found in the DNA."
      },
      {
        "word": "endoplasmic reticulum",
        "meaning": "The cell’s transportation system — a set of passageways that lets material move from one part of the cell to another. Say EN-duh-PLAZ-mik rih-TIK-yuh-lum."
      }
    ],
    "drills": [
      "maplabel",
      "meaning"
    ],
    "assess": "quiz"
  }
];

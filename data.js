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
const BUILD = "Oct 5 \u2014 build 35";


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
  "asOf": "2026-10-05",
  "label": "Week of Oct 5 – Oct 9",
  "tests": [
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
        }
      ]
    },
    {
      "date": "2026-10-07",
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
    "note": "Test Thursday 10/8. Two maps — the ancient one has six labels, the modern one has seven countries to colour. His filled-in copies are in the history binder.",
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
      "meaning",
      "mconly",
      "multionly",
      "extras"
    ],
    "rival": "Philistia FC",
    "matchLength": 8
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
  }
];

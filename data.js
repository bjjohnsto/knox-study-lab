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
const BUILD = "Sept 3 \u2014 build 11";


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
    "text": "Already you are clean because of the word that I have spoken to you."
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
    ]
  },
  {
    "id": "hist-ch2-test",
    "subject": "history",
    "title": "Chapter 2 History Test",
    "added": "2026-09-03",
    "quiz": "2026-09-04",
    "note": "Everything for Friday. Start with \"Her 25\" — that is her own Quizlet, card for card.",
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
    ]
  },
  {
    "id": "sci-ch2-test",
    "subject": "science",
    "title": "Science Chapter 2 Test",
    "added": "2026-09-01",
    "quiz": "2026-09-08",
    "note": "Weathering, soil, and erosion — pages 25–50.",
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
    ]
  }
];

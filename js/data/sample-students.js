// Kanniyath Usthad Islamic Academy Arts Fest 2026
// Official Registered Student Dataset (77 Students across 3 Sections: Sub Junior, Junior, Senior)
// Extracted from 'students details/Students ID and Name.docx' & 'students details/Photo'

const DEFAULT_STUDENTS = [
  // =========================================================================
  // SECTION 1: SUB JUNIOR (29 Students)
  // =========================================================================
  // Secondary First Year (13 Students)
  {
    id: "STU-390",
    rollNo: "390",
    name: "MUHAMMED BADARUDHEEN",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/badrudheen.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-392",
    rollNo: "392",
    name: "MUHAMMED SAHAL P",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/sahal.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-396",
    rollNo: "396",
    name: "ABDUL AMEEN",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/ameen.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-397",
    rollNo: "397",
    name: "ABDUL FAMSAD",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/famshad.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-398",
    rollNo: "398",
    name: "ABDUL BASITH",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/basith.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-399",
    rollNo: "399",
    name: "ASKAR ALI FARIS",
    section: "Sub Junior",
    photo: "",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-400",
    rollNo: "400",
    name: "MUHAMMED KHALANDAR SHAN",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/kalandar.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-401",
    rollNo: "401",
    name: "MUNAVVAR ALI K",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/munawar ali 1.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-402",
    rollNo: "402",
    name: "NIHAL ABDULLA",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/nihal.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-409",
    rollNo: "409",
    name: "AHAMMAD MISHAB K.M",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/mishad.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-411",
    rollNo: "411",
    name: "ISMAIL ASHFAR",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/ashfar.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-412",
    rollNo: "412",
    name: "ISMAIL SHAHIM",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/shahim.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-416",
    rollNo: "416",
    name: "MUHAMMED HAZIM",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 1/hazim.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // Secondary Second Year (6 Students)
  {
    id: "STU-388",
    rollNo: "388",
    name: "MUHAMMED ZAYYAN K",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 2/zayan.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-395",
    rollNo: "395",
    name: "MUHAMMED MUNAZIR C.M",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 2/munazir.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-393",
    rollNo: "393",
    name: "MUHAMMED RAFAN P.R",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 2/rafan.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-403",
    rollNo: "403",
    name: "MUHAMMED ASHIQUE A",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 2/ashik.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-405",
    rollNo: "405",
    name: "UNAIS K",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 2/unais.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-406",
    rollNo: "406",
    name: "ANEES K",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 2/anees.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // Secondary Third Year (10 Students)
  {
    id: "STU-374",
    rollNo: "374",
    name: "MUHAMMED ALI K.M",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 3/ali.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-371",
    rollNo: "371",
    name: "A.N AJMAL",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 3/ajmal.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-365",
    rollNo: "365",
    name: "MUHAMMED SAFWAN SIDIQ",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 3/safwan.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-394",
    rollNo: "394",
    name: "MUHAMMED RAZAN P.R",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 3/razan.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-378",
    rollNo: "378",
    name: "MOHAMMED MUNAWAR",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 3/munawar.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-380",
    rollNo: "380",
    name: "MOHAMMED NAJAD M.R",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 3/najad.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-375",
    rollNo: "375",
    name: "ABDULA IYAS",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 3/iyas.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-381",
    rollNo: "381",
    name: "MUHAMMED SHABEEB",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 3/shabeeb.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-366",
    rollNo: "366",
    name: "ABBAS ALI NAJAH K.J",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 3/abhas ali.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-384",
    rollNo: "384",
    name: "JAMSHEER",
    section: "Sub Junior",
    photo: "students details/Photo/secondary 3/jamsheer.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // =========================================================================
  // SECTION 2: JUNIOR (22 Students)
  // =========================================================================
  // Senior Secondary First Year (15 Students)
  {
    id: "STU-343",
    rollNo: "343",
    name: "WASEEM ABOOBACKER K.S",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/waseem.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-345",
    rollNo: "345",
    name: "ABDUL SAMAD B.H",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/samad.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-336",
    rollNo: "336",
    name: "SUHAIL K",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/suhail 4.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-361",
    rollNo: "361",
    name: "MUHAMMED MISAL M",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/MISAL.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-340",
    rollNo: "340",
    name: "ABDULLA SHAMMAS C.H",
    section: "Junior",
    photo: "",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-355",
    rollNo: "355",
    name: "MOHAMMED SAVAD M",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/savad.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-337",
    rollNo: "337",
    name: "MOHAMMED ARAFATH K",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/arafath.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-346",
    rollNo: "346",
    name: "MOHAMMED ABDUNNAFIH",
    section: "Junior",
    photo: "",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-357",
    rollNo: "357",
    name: "MOHAMMED ASHIQ",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/ashik 4.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-338",
    rollNo: "338",
    name: "IBRAHIM MUQTHAR",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/mukthar 4.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-363",
    rollNo: "363",
    name: "MUHAMMAD FAHIM K.S",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/fahim.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-352",
    rollNo: "352",
    name: "MUHAMMED RAMEES",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/rameez.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-362",
    rollNo: "362",
    name: "ABDUL KADAR ANSHATH",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/anshath.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-351",
    rollNo: "351",
    name: "ZAQIR MOHAMMED ASLAM",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/zakir.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-368",
    rollNo: "368",
    name: "MUHAMMED THANZEEH E",
    section: "Junior",
    photo: "students details/Photo/senior secondary 1/thanseeh 4.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // Senior Secondary Second Year (7 Students)
  {
    id: "STU-311",
    rollNo: "311",
    name: "MUHAMMED SINAN K.S",
    section: "Junior",
    photo: "students details/Photo/senior secondary 2/SINAN.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-328",
    rollNo: "328",
    name: "MUHAMMED NAFIH",
    section: "Junior",
    photo: "students details/Photo/senior secondary 2/nafih 5.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-317",
    rollNo: "317",
    name: "ABDULLA MIRAS",
    section: "Junior",
    photo: "students details/Photo/senior secondary 2/MIRAS.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-318",
    rollNo: "318",
    name: "MUHAMMED MUKTHAR",
    section: "Junior",
    photo: "students details/Photo/senior secondary 2/mukthar 5.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-314",
    rollNo: "314",
    name: "ADIL MUBARAK H",
    section: "Junior",
    photo: "students details/Photo/senior secondary 2/adil.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-319",
    rollNo: "319",
    name: "MUHAMMED AJMALUDDEEN",
    section: "Junior",
    photo: "",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-324",
    rollNo: "324",
    name: "IBRAHIM NOUFAL",
    section: "Junior",
    photo: "students details/Photo/senior secondary 2/noufal.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // =========================================================================
  // SECTION 3: SENIOR (26 Students)
  // =========================================================================
  // Degree Second Year (5 Students)
  {
    id: "STU-292",
    rollNo: "292",
    name: "MUHAMMAD SULAIM",
    section: "Senior",
    photo: "students details/Photo/degree 2/SULAIM.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-290",
    rollNo: "290",
    name: "SHAHUL HAMEED",
    section: "Senior",
    photo: "students details/Photo/degree 2/SHAHUL.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-289",
    rollNo: "289",
    name: "ABDUL MUZAMMIL",
    section: "Senior",
    photo: "students details/Photo/degree 2/MUSSAMMIL.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-297",
    rollNo: "297",
    name: "MUHAMMAD MISWAR",
    section: "Senior",
    photo: "students details/Photo/degree 2/MISWAR.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-296",
    rollNo: "296",
    name: "MUHAMMED ANWAR M.A",
    section: "Senior",
    photo: "students details/Photo/degree 2/ANWAR.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // Degree Third Year (6 Students)
  {
    id: "STU-248",
    rollNo: "248",
    name: "BAVA MAHSHOOQE P",
    section: "Senior",
    photo: "students details/Photo/degree 3/MAHSHOQ.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-259",
    rollNo: "259",
    name: "THANSEEH C.M",
    section: "Senior",
    photo: "students details/Photo/degree 3/THANEEH.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-250",
    rollNo: "250",
    name: "SAMSUDEEN N.M",
    section: "Senior",
    photo: "students details/Photo/degree 3/shamsuddeen.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-252",
    rollNo: "252",
    name: "AHAMMED MASHOOD",
    section: "Senior",
    photo: "students details/Photo/degree 3/MASHOOD.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-255",
    rollNo: "255",
    name: "AHAMMED MUBASHIR",
    section: "Senior",
    photo: "students details/Photo/degree 3/MUBASHIR.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-253",
    rollNo: "253",
    name: "SUHAIL P.A",
    section: "Senior",
    photo: "students details/Photo/degree 3/suhail 8.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // PG First Year (8 Students)
  {
    id: "STU-213",
    rollNo: "213",
    name: "ABDUL ABID K",
    section: "Senior",
    photo: "students details/Photo/PG1/ABID.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-212",
    rollNo: "212",
    name: "AHAMAD MUZAMMIL",
    section: "Senior",
    photo: "students details/Photo/PG1/MUSSAMMIL.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-223",
    rollNo: "223",
    name: "N.A MUHAMMED SULTHAN NIZAMUDDEEN",
    section: "Senior",
    photo: "students details/Photo/PG1/NISAMUDDEEN.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-335",
    rollNo: "335",
    name: "A MAHAMMAD FARISH",
    section: "Senior",
    photo: "students details/Photo/PG1/FARIS.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-225",
    rollNo: "225",
    name: "IBRAHIM KHALEEL",
    section: "Senior",
    photo: "students details/Photo/PG1/KHALEEL.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-224",
    rollNo: "224",
    name: "MOHAMMED JAHFAR C",
    section: "Senior",
    photo: "students details/Photo/PG1/JAHFAR.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-214",
    rollNo: "214",
    name: "AHAMMED SINAN T.M",
    section: "Senior",
    photo: "students details/Photo/PG1/SINAN .JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-220",
    rollNo: "220",
    name: "UMMERUL FAROOK",
    section: "Senior",
    photo: "students details/Photo/PG1/IMG_9781.JPEG",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // PG Second Year (7 Students)
  {
    id: "STU-169",
    rollNo: "169",
    name: "AHAMMED SHAMEEM",
    section: "Senior",
    photo: "students details/Photo/PG2/shameem.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-135",
    rollNo: "135",
    name: "ABDUL SHUKOOR C.H",
    section: "Senior",
    photo: "students details/Photo/PG2/SHUKOOR.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-164",
    rollNo: "164",
    name: "AHAMMED SHIBIN MAHROOF",
    section: "Senior",
    photo: "students details/Photo/PG2/shibi.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-168",
    rollNo: "168",
    name: "MOHAMMED MIQDHADH",
    section: "Senior",
    photo: "students details/Photo/PG2/MIQDAD.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-171",
    rollNo: "171",
    name: "MAHAMMAD MUSTHAFA",
    section: "Senior",
    photo: "students details/Photo/PG2/MUSTHAFA.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-172",
    rollNo: "172",
    name: "MOOSA SHAHAD A",
    section: "Senior",
    photo: "students details/Photo/PG2/MOOSA SAHAD.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-170",
    rollNo: "170",
    name: "ABDULLA P",
    section: "Senior",
    photo: "students details/Photo/PG2/ABDULLA.jpg",
    status: "available",
    team: null,
    selectionOrder: null
  }
];

const DEFAULT_SETTINGS = {
  collegeName: "KANNIYATH USTHAD ISLAMIC ACADEMY",
  festSubtitle: "ARTS FEST 2026 — OFFICIAL TEAM SELECTION PORTAL",
  teamA: {
    name: "TEAM A",
    shortCode: "A",
    icon: "A",
    tagline: "Dark Green Squad"
  },
  teamB: {
    name: "TEAM B",
    shortCode: "B",
    icon: "B",
    tagline: "Gold Amber Squad"
  },
  currentTurn: "team-a",
  soundEnabled: true,
  confettiEnabled: true
};

// Sample Student Dataset for Kanniyath Usthad Islamic Academy Arts Fest
// 60 Students across 3 Sections: Secondary, Senior Secondary, Degree and PG

const DEFAULT_STUDENTS = [
  // =========================================================================
  // SECTION 1: SECONDARY (20 Students)
  // =========================================================================
  {
    id: "STU-SEC-001",
    rollNo: "SEC-101",
    name: "Muhammed Sinan",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-002",
    rollNo: "SEC-102",
    name: "Ahmed Bilal",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-003",
    rollNo: "SEC-103",
    name: "Muhammed Faiz",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-004",
    rollNo: "SEC-104",
    name: "Rashid Ali",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-005",
    rollNo: "SEC-105",
    name: "Zayan Mansoor",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-006",
    rollNo: "SEC-106",
    name: "Hamza Farooq",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-007",
    rollNo: "SEC-107",
    name: "Rayan Siddique",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-008",
    rollNo: "SEC-108",
    name: "Muhammed Anas",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-009",
    rollNo: "SEC-109",
    name: "Irfan Habeeb",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-010",
    rollNo: "SEC-110",
    name: "Nabeel Zubair",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-011",
    rollNo: "SEC-111",
    name: "Salmanul Faris",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-012",
    rollNo: "SEC-112",
    name: "Adil Shereef",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-013",
    rollNo: "SEC-113",
    name: "Shahid Afridi",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-014",
    rollNo: "SEC-114",
    name: "Amanullah Khan",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-015",
    rollNo: "SEC-115",
    name: "Daniyal Qasim",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-016",
    rollNo: "SEC-116",
    name: "Hafiz Noufal",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-017",
    rollNo: "SEC-117",
    name: "Afeef Rahman",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-018",
    rollNo: "SEC-118",
    name: "Sabith Umar",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-019",
    rollNo: "SEC-119",
    name: "Ashraf Musthafa",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SEC-020",
    rollNo: "SEC-120",
    name: "Tariq Jameel",
    section: "Secondary",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // =========================================================================
  // SECTION 2: SENIOR SECONDARY (20 Students)
  // =========================================================================
  {
    id: "STU-SS-001",
    rollNo: "SS-201",
    name: "Muhammed Dilshad",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-002",
    rollNo: "SS-202",
    name: "Shamil Roshan",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-003",
    rollNo: "SS-203",
    name: "Musthafa Kamal",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-004",
    rollNo: "SS-204",
    name: "Zuhair Niyas",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-005",
    rollNo: "SS-205",
    name: "Fawaz Kareem",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-006",
    rollNo: "SS-206",
    name: "Arshad Parambath",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-007",
    rollNo: "SS-207",
    name: "Shakir Hussain",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-008",
    rollNo: "SS-208",
    name: "Minhajul Abid",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-009",
    rollNo: "SS-209",
    name: "Ibrahim Razi",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-010",
    rollNo: "SS-210",
    name: "Safwan Basheer",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-011",
    rollNo: "SS-211",
    name: "Junaid Hassan",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-012",
    rollNo: "SS-212",
    name: "Hashim V.P",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-013",
    rollNo: "SS-213",
    name: "Nizamudheen K",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-014",
    rollNo: "SS-214",
    name: "Thoufeeq M",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-015",
    rollNo: "SS-215",
    name: "Waseem Akram",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-016",
    rollNo: "SS-216",
    name: "Mishabudheen",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-017",
    rollNo: "SS-217",
    name: "Ammar Yasir",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-018",
    rollNo: "SS-218",
    name: "Suhail Swabah",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-019",
    rollNo: "SS-219",
    name: "Jabir Ali",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-SS-020",
    rollNo: "SS-220",
    name: "Lukmanul Hakeem",
    section: "Senior Secondary",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // =========================================================================
  // SECTION 3: DEGREE AND PG (20 Students)
  // =========================================================================
  {
    id: "STU-DPG-001",
    rollNo: "DPG-301",
    name: "Sayed Abdul Rahman",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-002",
    rollNo: "DPG-302",
    name: "Muhammed Aslam",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-003",
    rollNo: "DPG-303",
    name: "Hafiz Mahroof",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-004",
    rollNo: "DPG-304",
    name: "Sharafudheen T",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-005",
    rollNo: "DPG-305",
    name: "Zubair Al-Qasimi",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-006",
    rollNo: "DPG-306",
    name: "Mansoor Al-Hadi",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-007",
    rollNo: "DPG-307",
    name: "Sayed Thwaha",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-008",
    rollNo: "DPG-308",
    name: "Abdul Basith",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-009",
    rollNo: "DPG-309",
    name: "Naushad Ali",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-010",
    rollNo: "DPG-310",
    name: "Rameez Roshan",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-011",
    rollNo: "DPG-311",
    name: "Farisudheen",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-012",
    rollNo: "DPG-312",
    name: "Muhammed Jaseem",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-013",
    rollNo: "DPG-313",
    name: "Shihabudheen",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-014",
    rollNo: "DPG-314",
    name: "Sayed Fazal",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-015",
    rollNo: "DPG-315",
    name: "Rashidul Haq",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-016",
    rollNo: "DPG-316",
    name: "Majid Ansar",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-017",
    rollNo: "DPG-317",
    name: "Zuhairul Islam",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-018",
    rollNo: "DPG-318",
    name: "Muhammed Rafeeq",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-019",
    rollNo: "DPG-319",
    name: "Ameen Ahsan",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-DPG-020",
    rollNo: "DPG-320",
    name: "Hafiz Bilal",
    section: "Degree and PG",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
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

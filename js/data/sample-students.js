// Sample Student Dataset for College Arts Fest (75 Students across 5 Sections)
const DEFAULT_STUDENTS = [
  // --- SECTION: DANCE & CULTURAL (15 Students) ---
  {
    id: "STU-001",
    rollNo: "ART-101",
    name: "Ananya Sharma",
    section: "Cultural & Stage",
    subCategory: "Classical Performance",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-002",
    rollNo: "ART-102",
    name: "Rohan Varma",
    section: "Cultural & Stage",
    subCategory: "Choreography",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-003",
    rollNo: "ART-103",
    name: "Pooja Hegde",
    section: "Cultural & Stage",
    subCategory: "Group Presentation",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-004",
    rollNo: "ART-104",
    name: "Aditya Nair",
    section: "Cultural & Stage",
    subCategory: "Folk Performance",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-005",
    rollNo: "ART-105",
    name: "Kavya Menon",
    section: "Cultural & Stage",
    subCategory: "Solo Classical",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-006",
    rollNo: "ART-106",
    name: "Varun Malhotra",
    section: "Cultural & Stage",
    subCategory: "Modern Arts",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-007",
    rollNo: "ART-107",
    name: "Sneha Reddy",
    section: "Cultural & Stage",
    subCategory: "Semi-Classical",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-008",
    rollNo: "ART-108",
    name: "Kiran Kumar",
    section: "Cultural & Stage",
    subCategory: "Stage Coordination",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-009",
    rollNo: "ART-109",
    name: "Divya Krishnan",
    section: "Cultural & Stage",
    subCategory: "Fusion Art",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-010",
    rollNo: "ART-110",
    name: "Manish Rao",
    section: "Cultural & Stage",
    subCategory: "Stage Duet",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-011",
    rollNo: "ART-111",
    name: "Meera Pillai",
    section: "Cultural & Stage",
    subCategory: "Traditional Arts",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-012",
    rollNo: "ART-112",
    name: "Gautam Sen",
    section: "Cultural & Stage",
    subCategory: "Creative Motion",
    photo: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-013",
    rollNo: "ART-113",
    name: "Harini Sundaram",
    section: "Cultural & Stage",
    subCategory: "Group Folk",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-014",
    rollNo: "ART-114",
    name: "Abhishek Joshi",
    section: "Cultural & Stage",
    subCategory: "Modern Solo",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-015",
    rollNo: "ART-115",
    name: "Ritika Das",
    section: "Cultural & Stage",
    subCategory: "Lyrical Art",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // --- SECTION: MUSIC & VOCALS (15 Students) ---
  {
    id: "STU-016",
    rollNo: "MUS-201",
    name: "Siddharth Roy",
    section: "Music & Vocals",
    subCategory: "Classical Vocals",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-017",
    rollNo: "MUS-202",
    name: "Shruti Iyer",
    section: "Music & Vocals",
    subCategory: "Semi-Classical",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-018",
    rollNo: "MUS-203",
    name: "Arjun Nambiar",
    section: "Music & Vocals",
    subCategory: "Acoustic & Strings",
    photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-019",
    rollNo: "MUS-204",
    name: "Aparna Nanda",
    section: "Music & Vocals",
    subCategory: "Light Music Solo",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-020",
    rollNo: "MUS-205",
    name: "Farhan Khan",
    section: "Music & Vocals",
    subCategory: "Rhythm & Percussion",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-021",
    rollNo: "MUS-206",
    name: "Pavithra Suresh",
    section: "Music & Vocals",
    subCategory: "Violin Solo",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-022",
    rollNo: "MUS-207",
    name: "Nikhil George",
    section: "Music & Vocals",
    subCategory: "Western Vocals",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-023",
    rollNo: "MUS-208",
    name: "Gayathri Devi",
    section: "Music & Vocals",
    subCategory: "Flute Solo",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-024",
    rollNo: "MUS-209",
    name: "Roshan Mathew",
    section: "Music & Vocals",
    subCategory: "Keyboard & Synth",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-025",
    rollNo: "MUS-210",
    name: "Shweta Tiwari",
    section: "Music & Vocals",
    subCategory: "Ghazal & Melodies",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-026",
    rollNo: "MUS-211",
    name: "Rahul Prajapati",
    section: "Music & Vocals",
    subCategory: "Percussion Lead",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-027",
    rollNo: "MUS-212",
    name: "Aishwarya Bhat",
    section: "Music & Vocals",
    subCategory: "Traditional Strings",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-028",
    rollNo: "MUS-213",
    name: "Daniel Thomas",
    section: "Music & Vocals",
    subCategory: "Bass Harmony",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-029",
    rollNo: "MUS-214",
    name: "Nandini Sen",
    section: "Music & Vocals",
    subCategory: "Group Song Lead",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-030",
    rollNo: "MUS-215",
    name: "Tarun Kapoor",
    section: "Music & Vocals",
    subCategory: "Vocal Rhythm",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // --- SECTION: THEATER & DRAMA (15 Students) ---
  {
    id: "STU-031",
    rollNo: "THR-301",
    name: "Vivek Oberoi",
    section: "Theater & Drama",
    subCategory: "Mono Act & Drama",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-032",
    rollNo: "THR-302",
    name: "Sanika Kulkarni",
    section: "Theater & Drama",
    subCategory: "Skit & Mimicry",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-033",
    rollNo: "THR-303",
    name: "Deepak Choudhury",
    section: "Theater & Drama",
    subCategory: "Mime & Physical Expression",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-034",
    rollNo: "THR-304",
    name: "Priyanka Roy",
    section: "Theater & Drama",
    subCategory: "Street Play Director",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-035",
    rollNo: "THR-305",
    name: "Ashwin Madhavan",
    section: "Theater & Drama",
    subCategory: "Script & Voice Acting",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-036",
    rollNo: "THR-306",
    name: "Bhavna Jain",
    section: "Theater & Drama",
    subCategory: "Comedy & Standup",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-037",
    rollNo: "THR-307",
    name: "Sameer Sheikh",
    section: "Theater & Drama",
    subCategory: "Stage Play Lead",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-038",
    rollNo: "THR-308",
    name: "Kareena Paul",
    section: "Theater & Drama",
    subCategory: "Expression Acting",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-039",
    rollNo: "THR-309",
    name: "Rishi Kashyap",
    section: "Theater & Drama",
    subCategory: "One Act Play",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-040",
    rollNo: "THR-310",
    name: "Tanvi Saxena",
    section: "Theater & Drama",
    subCategory: "Character Acting",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-041",
    rollNo: "THR-311",
    name: "Harish Murthy",
    section: "Theater & Drama",
    subCategory: "Mimicry & Satire",
    photo: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-042",
    rollNo: "THR-312",
    name: "Pallavi Ghosh",
    section: "Theater & Drama",
    subCategory: "Theatrical Narration",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-043",
    rollNo: "THR-313",
    name: "Yashwant Singhania",
    section: "Theater & Drama",
    subCategory: "Street Play Lead",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-044",
    rollNo: "THR-314",
    name: "Ishita Bakshi",
    section: "Theater & Drama",
    subCategory: "Improv Acting",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-045",
    rollNo: "THR-315",
    name: "Naveen Chettiar",
    section: "Theater & Drama",
    subCategory: "Stage Production",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // --- SECTION: FINE ARTS & DESIGN (15 Students) ---
  {
    id: "STU-046",
    rollNo: "ART-401",
    name: "Devika Somani",
    section: "Fine Arts & Design",
    subCategory: "Oil & Acrylic Painting",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-047",
    rollNo: "ART-402",
    name: "Kartik Swaminathan",
    section: "Fine Arts & Design",
    subCategory: "Pencil & Charcoal Sketch",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-048",
    rollNo: "ART-403",
    name: "Zara Qureshi",
    section: "Fine Arts & Design",
    subCategory: "Clay Modeling & Sculpture",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-049",
    rollNo: "ART-404",
    name: "Pranav Deshmukh",
    section: "Fine Arts & Design",
    subCategory: "Water Color & Landscape",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-050",
    rollNo: "ART-405",
    name: "Swati Agarwal",
    section: "Fine Arts & Design",
    subCategory: "Poster Design & Collage",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-051",
    rollNo: "ART-406",
    name: "Akash Pillai",
    section: "Fine Arts & Design",
    subCategory: "Caricature & Cartooning",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-052",
    rollNo: "ART-407",
    name: "Reshma Bano",
    section: "Fine Arts & Design",
    subCategory: "Rangoli & Floral Art",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-053",
    rollNo: "ART-408",
    name: "Manoj Chawla",
    section: "Fine Arts & Design",
    subCategory: "Photography",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-054",
    rollNo: "ART-409",
    name: "Lakshmi Nair",
    section: "Fine Arts & Design",
    subCategory: "Traditional Designing",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-055",
    rollNo: "ART-410",
    name: "Chetan Bhagat",
    section: "Fine Arts & Design",
    subCategory: "Digital Art & Graphics",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-056",
    rollNo: "ART-411",
    name: "Aadhya Varma",
    section: "Fine Arts & Design",
    subCategory: "Origami & Craft",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-057",
    rollNo: "ART-412",
    name: "Sanjay Dutta",
    section: "Fine Arts & Design",
    subCategory: "Calligraphy & Lettering",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-058",
    rollNo: "ART-413",
    name: "Simran Kaur",
    section: "Fine Arts & Design",
    subCategory: "Face Painting",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-059",
    rollNo: "ART-414",
    name: "Brijesh Patel",
    section: "Fine Arts & Design",
    subCategory: "Mixed Media Art",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-060",
    rollNo: "ART-415",
    name: "Geetika Chopra",
    section: "Fine Arts & Design",
    subCategory: "Fabric & Glass Art",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },

  // --- SECTION: LITERARY & ORATORY (15 Students) ---
  {
    id: "STU-061",
    rollNo: "LIT-501",
    name: "Dhruv Kapoor",
    section: "Literary & Oratory",
    subCategory: "English Debate",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-062",
    rollNo: "LIT-502",
    name: "Ananya Panday",
    section: "Literary & Oratory",
    subCategory: "Creative Writing",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-063",
    rollNo: "LIT-503",
    name: "Abhinav Bindra",
    section: "Literary & Oratory",
    subCategory: "Quiz Master",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-064",
    rollNo: "LIT-504",
    name: "Farheen Taj",
    section: "Literary & Oratory",
    subCategory: "Elocution (English)",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-065",
    rollNo: "LIT-505",
    name: "Raghav Menon",
    section: "Literary & Oratory",
    subCategory: "Extempore & JAM",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-066",
    rollNo: "LIT-506",
    name: "Shraddha Sen",
    section: "Literary & Oratory",
    subCategory: "Essay & Short Story",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-067",
    rollNo: "LIT-507",
    name: "Tejas Shinde",
    section: "Literary & Oratory",
    subCategory: "Language Debate",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-068",
    rollNo: "LIT-508",
    name: "Komal Rathore",
    section: "Literary & Oratory",
    subCategory: "Poem Recitation",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-069",
    rollNo: "LIT-509",
    name: "Prateek Yadav",
    section: "Literary & Oratory",
    subCategory: "News Reading & Anchoring",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-070",
    rollNo: "LIT-510",
    name: "Manjari Upadhyay",
    section: "Literary & Oratory",
    subCategory: "Spelling & Word Games",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-071",
    rollNo: "LIT-511",
    name: "Saurav Ganguly",
    section: "Literary & Oratory",
    subCategory: "Vernacular Elocution",
    photo: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-072",
    rollNo: "LIT-512",
    name: "Natasha Mehta",
    section: "Literary & Oratory",
    subCategory: "Dialogue & Script",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-073",
    rollNo: "LIT-513",
    name: "Harshavardhan R",
    section: "Literary & Oratory",
    subCategory: "General Knowledge Quiz",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-074",
    rollNo: "LIT-514",
    name: "Bhavya Nair",
    section: "Literary & Oratory",
    subCategory: "Literary Review",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  },
  {
    id: "STU-075",
    rollNo: "LIT-515",
    name: "Jayant Sinha",
    section: "Literary & Oratory",
    subCategory: "Turncoat & Mock Press",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    status: "available",
    team: null,
    selectionOrder: null
  }
];

const DEFAULT_SETTINGS = {
  collegeName: "KANNIYATH USTHAD ISLAMIC ACADEMY",
  festTitle: "ARTS FEST 2026",
  festSubtitle: "Official Live Team Selection Portal",
  logoUrl: "LOGO.jpg.jpeg",
  teamA: {
    id: "team-a",
    name: "TEAM A",
    shortCode: "A",
    color: "#0a5c36", // Official Dark Green
    accentColor: "#c59b27", // Gold Accent
    tagline: "Dark Green Identity",
    icon: "🏛️"
  },
  teamB: {
    id: "team-b",
    name: "TEAM B",
    shortCode: "B",
    color: "#b38820", // Official Gold / Amber
    accentColor: "#0a5c36", // Dark Green Accent
    tagline: "Gold Amber Identity",
    icon: "✨"
  },
  soundEnabled: true,
  confettiEnabled: true,
  revealDurationMs: 2400,
  currentTurn: "team-a",
  draftStatus: "in-progress"
};

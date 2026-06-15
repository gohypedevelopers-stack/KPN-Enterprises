import { FlooringProduct, IndustrySector, ClientProfile } from "./types";

export const ABOUT_TEXT = 
  "Delhi's KPN Enterprises has been offering premium industrial epoxy, ESD, PU, and waterproof floor-wall coatings. These long-lasting solutions are resistant to heat, chemicals, bacteria, and slips. We prioritise quality, cost, and timely delivery under the direction of skilled experts. Even the hardest floors in the country are completed flawlessly by our crew using the newest equipment. We collaborate with clients to fulfil particular requirements while guaranteeing quality in each and every project.";

export const DOMAIN_EXPERTISE = 
  "We offer faultless, prompt solutions because of our vast experience in industrial painting, logistics, and procurement. To ensure quality, our knowledgeable staff uses cutting-edge technology and excellent techniques. Our solid reputation in the Indian market has been established by a committed service culture that guarantees great pleasure through enduring relationships and expert care that satisfies all of our clients' needs.";

export const COMPOSITION_DATA = [
  "Civil Engineers",
  "Chemical Engineers",
  "Quality Checkers",
  "Precision Applicators",
  "Safety Supervisors"
];

export const WHY_PARTNER_KPN = [
  {
    title: "Quality Range of Industrial Flooring",
    description: "We deliver durable, high-performance coating solutions that meet rigorous industrial safety and hygiene standards."
  },
  {
    title: "Timely Project Execution",
    description: "Our team follows strict schedules to ensure your facility is ready for operation within the promised timeframe."
  },
  {
    title: "Professional & Skilled Team",
    description: "Our qualified engineers apply deep technical expertise to handle complex floor and wall coating challenges."
  },
  {
    title: "Transparent Business Dealings",
    description: "We maintain honest communication and clear contractual terms to build long-term trust with every client."
  },
  {
    title: "Effective and Efficient",
    description: "We provide premium industrial solutions at cost-effective rates to ensure maximum value for your investment."
  },
  {
    title: "Proper On-Site Support",
    description: "Our experts provide direct, hands-on supervision at your location to ensure flawless application and quality control."
  },
  {
    title: "Own Transport Facility",
    description: "Our in-house logistics team guarantees the safe and punctual delivery of all materials to your project site."
  }
];

export const INDUSTRIES_SERVED: IndustrySector[] = [
  {
    id: "ind-food",
    name: "Food & Beverage Processing",
    description: "Hygienic and chemical-resistant surfaces for food safety and anti-bacterial environments.",
    requirements: ["Antimicrobial surfaces", "Thermal washdown resistance", "FDA/GMP compliant coatings", "Seamless cleaning corners"],
    iconName: "Apple"
  },
  {
    id: "ind-auto",
    name: "Automotive & Heavy Engineering",
    description: "High-performance flooring for demanding environments exposed to heavy vehicles and oils.",
    requirements: ["Extreme impact resistance", "Chemical & oil splash durability", "Heavy wheel-load tolerance", "Anti-abrasion finish"],
    iconName: "Car"
  },
  {
    id: "ind-it",
    name: "IT Parks, R&D Labs, Data Centres",
    description: "ESD and durable conductive coatings for high-tech facilities and cleanrooms.",
    requirements: ["Static discharge management (ESD)", "Zero dust emission", "High-precision levelling", "Microchip-safe grounding"],
    iconName: "Cpu"
  },
  {
    id: "ind-retail",
    name: "Retail & Hospitality Spaces",
    description: "Aesthetically pleasing and durable floors for high public traffic areas.",
    requirements: ["Custom glossy colors", "Stain resistance", "Sleek and stylish appearance", "Easy maintenance"],
    iconName: "ShoppingBag"
  },
  {
    id: "ind-warehouse",
    name: "Warehouses & Logistic Hubs",
    description: "Heavy-duty, high-abrasion resistant floors for heavy automated forklifts and pallet jacks traffic.",
    requirements: ["Superb wear resistance", "Floor joint sealants", "Workflow path demarcation lines", "High load-bearing capacity"],
    iconName: "Warehouse"
  },
  {
    id: "ind-hospital",
    name: "Hospitals & Healthcare Institutions",
    description: "Sanitary, easy-to-clean floors for critical care units, operation theatres and sterile labs.",
    requirements: ["Zero-bacteria transition joints", "High sanitization chemical resistance", "Slip prevention", "Anti-fungal formulas"],
    iconName: "Hospital"
  }
];

export const EPOXY_ADVANTAGES = {
  durability: [
    "Impact-Resistant",
    "Heavy-Duty Build",
    "Long-Lasting Guard",
    "Abrasion-Proof",
    "Industrial-Grade",
    "Tough as Steel",
    "Hard-Wearing",
    "Crack-Resistant",
    "Non-Dusting Surface",
    "Structural Integrity"
  ],
  aesthetics: [
    "Mirror Gloss Finish",
    "Seamless Uniformity",
    "Stain & Acid Resistant",
    "Sleek & Professional",
    "Unlimited Custom Colors",
    "Premium Decorative Appeal",
    "Mirror-Smooth Look",
    "Super Simple to Maintain"
  ],
  hygiene: [
    "Antimicrobial Coating",
    "Food-Grade Certification",
    "Custom Slip-Resistance",
    "Hygienic & Seamless Layout",
    "FDA/GMP Compliant",
    "Zero Bacteria Gaps",
    "Safe for Hospitals & Labs",
    "Child-Safe Formulations",
    "Allergen-Free Workspace",
    "Non-Toxic Coating Layer"
  ],
  performance: [
    "Super Quick Installation",
    "High Point-Load Tolerance",
    "Highly Cost-Effective",
    "Eco-Friendly Low VOC Options",
    "Thermal & Energy Efficient",
    "Tested Under Extreme Stress",
    "Solid Warranty Backed",
    "Proven Globally",
    "Indian Industry-Standard Approved",
    "Smart Multi-Year Investment"
  ]
};

export const PRODUCT_CATALOG: FlooringProduct[] = [
  {
    id: "prod-antiskid",
    name: "Anti-Skid Coating Flooring",
    subtitle: "Built for Safety. Designed for Control.",
    description: "Slip-resistant flooring made to be safe in areas that are wet, steep, and have a lot of foot or equipment movement inside active factories, ramps, or washing spaces.",
    keyBenefits: [
      "Improves workplace safety",
      "Durable under heavy tire and foot use",
      "Custom textured aggregates (coarse, medium, fine)",
      "Highly suitable for wet, oily environments",
      "Significantly reduces risk of slip accidents"
    ],
    industries: ["Automotive Workshops", "Food Processing Wet Zones", "Loading Ramps", "Commercial Parking Bays"],
    visualTheme: {
      accentBg: "bg-blue-600",
      textAccent: "text-blue-600",
      borderAccent: "border-blue-600"
    }
  },
  {
    id: "prod-esd",
    name: "ESD Coating Flooring",
    subtitle: "Electro-Static Dissipative Protection",
    description: "Static discharge in delicate areas like electronic laboratories, cleanrooms, and testing facilities is managed beautifully via a path-to-ground conductive system.",
    keyBenefits: [
      "Prevents catastrophic electrostatic damage",
      "Strictly safe for highly sensitive electronic gear",
      "Seamless, jointless grounded floor surface",
      "Durable, long-term conductive property guarantees",
      "Perfect for hazardous chemical zones (ATEX)"
    ],
    industries: ["Semiconductor Assembly", "Mobile PCB Factories", "IT Parks & Server Rooms", "Research Laboratories"],
    visualTheme: {
      accentBg: "bg-cyan-600",
      textAccent: "text-cyan-600",
      borderAccent: "border-cyan-600"
    }
  },
  {
    id: "prod-coving",
    name: "Seamless Wall-to-Floor Coving",
    subtitle: "Sterile Cleanroom Standard Transitions",
    description: "In pharmaceutical fabrication, cosmetic laboratories, and food-grade cleanrooms, curved floor-wall coving guarantees complete dust and microbial elimination.",
    keyBenefits: [
      "Eliminates right-angle dirt traps",
      "Unbelievably simple to pressure-wash & sanitize",
      "Impact and moisture proof polymer mortars",
      "Flawlessly color-matches the primary flooring",
      "Key requirement for regulatory GMP compliance"
    ],
    industries: ["Pharmaceutical Facilities", "Hospitals & OTs", "Food & Dairy Processing", "Cosmetic Laboratories"],
    visualTheme: {
      accentBg: "bg-teal-600",
      textAccent: "text-teal-600",
      borderAccent: "border-teal-600"
    }
  },
  {
    id: "prod-marking",
    name: "Safety & Workflow Line Markings",
    subtitle: "Organised Spaces, Safe Employees",
    description: "Robust line marking system utilizing fast-cure high-visibility yellow/white paints for forklift paths, safety boundaries, and pedestrian aisles.",
    keyBenefits: [
      "High reflectivity, high visibility pathways",
      "Extremely fast drying - minimal plant downtime",
      "Resistant to high abrasion from forklift tires",
      "Greatly assists ISO and OSHA safety compliance",
      "Maximizes warehouse storage and aisle throughput"
    ],
    industries: ["Heavy Engineering Plants", "Loading Docks", "Bulk Logistics Hubs", "Assembly Lines"],
    visualTheme: {
      accentBg: "bg-yellow-600",
      textAccent: "text-yellow-600",
      borderAccent: "border-yellow-600"
    }
  },
  {
    id: "prod-anticorrosive",
    name: "Anti-Corrosive Protective Coatings",
    subtitle: "Guard Your Surfaces. Fortify Your Assets.",
    description: "Ultra-resilient lining coatings for concrete trenches and metal items exposed to aggressive acidic vapors, marine salinity, or corrosive industry waste.",
    keyBenefits: [
      "Stops rusting, metal pitting, and concrete spalling",
      "Significantly extends industrial tool & tank lifespans",
      "Exceptional resistance to concentrated acids/alkalis",
      "Interfacial cohesive bonding binds skin to metals",
      "Proven inside harsh chemical plant environments"
    ],
    industries: ["Refineries & Pipelines", "Chemical Storage Tanks", "Fertilizer Plants", "Acid Wash Trenches"],
    visualTheme: {
      accentBg: "bg-indigo-600",
      textAccent: "text-indigo-600",
      borderAccent: "border-indigo-600"
    }
  },
  {
    id: "prod-underlay",
    name: "Cementitious Self-Leveling Underlay",
    subtitle: "The Foundation of Perfect Flooring",
    description: "High-strength, fast-setting compound used to smooth and level rough, pitted, or cracked concrete subfloors before laying final epoxy/PU polymer finishes.",
    keyBenefits: [
      "Establishes a mirror flat, level subfloor skin",
      "Unmatched compressive strength structure",
      "Accelerated drying speed allows fast coating application",
      "Prevents pinholes and bubbles in top layers",
      "Works wonderfully for both old restorations and new builds"
    ],
    industries: ["Pitted Facility Renovation", "Uneven Concrete Subfloors", "Large Commercial Showrooms", "Airport Terminals"],
    visualTheme: {
      accentBg: "bg-slate-600",
      textAccent: "text-slate-600",
      borderAccent: "border-slate-600"
    }
  }
];

export const SOLUTIONS_MATRIX = [
  { product: "Epoxy Floor Coating", cases: "Warehouses, Manufacturing Plants, Logistics Hubs, Engineering Units, Garment Factories, Printing Units, Commercial Garages, Assembly Lines" },
  { product: "Epoxy Self-Leveling – Matt Finish", cases: "Pharma Plants, Cleanrooms, Hospitals, Diagnostic Labs, Electronics Assembly, Cosmetic Manufacturing, R&D Centers, Server Rooms" },
  { product: "Anti-Skid Coating Flooring", cases: "Ramps, Sloped Walkways, Parking Bays, Commercial Kitchens, Wet Processing Units, Swimming Pool Decks, Food Industry Foods, Loading Areas" },
  { product: "ESD Coating Flooring", cases: "Semiconductor Plants, PCB Units, Mobile Assembly, Data Centers, Research Labs, ATEX Zones, Robotics Assembly, High-Precision Manufacturing" },
  { product: "Epoxy Matt Finish Flooring", cases: "Showrooms, Retail Stores, Offices, Educational Institutes, Reception Areas, Museums, Cafeterias, Banks" },
  { product: "High-Build Epoxy Mortar", cases: "Heavy Engineering, Machine Foundations, Steel Fabrication, Automobile Workshops, Power Press Areas, Repair Bays, CNC Zones" },
  { product: "Epoxy Polyurethane (EPU) Coating", cases: "Chemical Warehouses, Pharma Production Areas, Food Units, Cold Storages, Auto Workshops, Textile Units, Repacking Zones, Beverage Lines" },
  { product: "Polyurethane Coating", cases: "Outdoor Yards, Fertilizer Plants, Mining Workshops, Cargo Zones, Equipment Maintenance Bays, Bulk Storage Warehouses" },
  { product: "Dielectric Insulation Flooring", cases: "Electrical Substations, Transformer Yards, Battery Charging Rooms, Switchgear Rooms, HV Testing Labs, Server Rooms, Emergency Power Backup Zones" },
  { product: "Polycrete Flooring", cases: "Breweries, Commercial Kitchens, Butchery Units, Meat & Poultry Plants, Dairies, Food Processing, Pharmaceutical Cold Rooms, Heavy Wash Areas" },
  { product: "Wall Coating", cases: "Hospitals, Pharma Cleanrooms, Cosmetic Labs, Food Processing Units, Operation Theatres, Kitchens, Sterile Zones, Beverage Bottling Areas" },
  { product: "Waterproofing", cases: "Rooftops, Basements, Lift Pits, Sunken Toilets, Underground Water Tanks, Terrace Gardens, Balconies, External Walls" },
  { product: "Anti-Corrosive Coating", cases: "Coastal Facilities, Refineries, Pipelines, Offshore Units, Chemical Storage Tanks, Marine Yards, Cooling Towers, Fertilizer Plants" },
  { product: "Cementitious Underlay", cases: "Uneven Subfloors, Renovation Projects, Large Retail Stores, Malls, Airports, Moisture-Prone Areas, Base for Epoxy/PVC/Vinyl Flooring, Precast Zones" },
  { product: "Coving", cases: "Food Plants, Pharma Units, Hospitals, Dairy Processing, Beverage Facilities, Meat Units, Cleanroom Corners, High Washdown Zones" },
  { product: "Marking (Yellow / White)", cases: "Warehouses, Assembly Lines, Safety Paths, Loading/Unloading Zones, Fire Exit Routes, Equipment Movement Zones, Hazard Indications, Forklift Lanes" }
];

export const DYNAMIC_GALLERY = [
  {
    title: "Heavy Assembly Bay",
    category: "Epoxy Flooring",
    desc: "A wide forklift hallway with yellow demarcations and super high-gloss reflection.",
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Pharma Cleanroom Corner",
    category: "Coving & Epoxy",
    desc: "Cleanroom corner showcasing self-leveling floors seamless transition to clean vertical walls.",
    url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Electronics IC Tester Lab",
    category: "Antistatic ESD",
    desc: "Electro-static dissipative blue floor with dynamic copper earthing mesh layout.",
    url: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Automotive Press Shop",
    category: "Heavy-Duty Mortar",
    desc: "3mm High-build mortar under giant robotic stamping machines protecting concrete.",
    url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Chemical Trench Lining",
    category: "Anti-Corrosive Coating",
    desc: "Bright yellow anti-corrosive chemical lining inside industrial acidic channels.",
    url: "https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Bottling Zone & Drainage",
    category: "PU Screed Flooring",
    desc: "Seamless waterproof red PU flooring resistant to continuous thermal water washdowns.",
    url: "https://images.unsplash.com/photo-1558443770-fd342377fa1a?auto=format&fit=crop&q=80&w=600"
  }
];

export const CLIENT_LOGOS: ClientProfile[] = [
  {
    category: "Automobiles",
    companies: ["Honda", "Toyota", "Tata Motors", "Mahindra", "Suzuki", "JCBL", "Hyundai", "Hero Honda", "Hero", "Eicher"]
  },
  {
    category: "Food, Pharma & Healthcare",
    companies: [
      "Piramal Healthcare",
      "Aarti Pharmalabs",
      "Hindustan Unilever Limited",
      "Maharishi Ayurveda",
      "Cipla",
      "Max Healthcare",
      "LT Foods",
      "Patanjali",
      "Legacy Foods",
      "Avery Dennison"
    ]
  },
  {
    category: "Chemical & Fertilizer",
    companies: ["Chambal Fertilisers", "Kariar Combines", "Aarti Drugs Ltd.", "Sakata Inx (India)"]
  },
  {
    category: "Auto Engine Parts & Engineering",
    companies: [
      "The Hi-Tech Gears Ltd.",
      "GNA",
      "Brakes India",
      "Bhushan Steel",
      "Anchor by Panasonic",
      "Mark Exhaust",
      "Lucas-TVS Ltd.",
      "Asahi India Glass",
      "Shivalik Bimetal"
    ]
  }
];

export const REPRESENTATIVE_CONTACT = {
  name: "Nitin Kumar Garg",
  title: "Professional Contractor & Owner",
  phones: ["+91 9318351774", "+91 9810349899"],
  email: "kpnenterprises31@gmail.com",
  address: "D-6/1, Pocket D, Okhla Phase II, Okhla Industrial Estate, New Delhi - 110020, India"
};

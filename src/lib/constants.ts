export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Quote", href: "/contact" },
] as const;

export const footerServiceLinks = [
  { label: "Residential", href: "/services#residential-relocation" },
  { label: "Commercial", href: "/services#commercial-relocation" },
  { label: "Corporate", href: "/services#corporate-relocation" },
  { label: "International", href: "/services#international-relocation" },
  { label: "Packing", href: "/services#packing-handling" },
  { label: "Furniture", href: "/services#furniture-installation" },
  { label: "Storage", href: "/services#storage-solutions" },
] as const;

export const images = {
  hero: {
    src: "/images/hero.png",
    alt: "Professional movers in Abu Dhabi carefully handling furniture in a modern home",
  },
  residential:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
  commercial:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  whyAureon:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
  aboutHero:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
  servicesHero:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80",
  contactHero:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80",
  services: {
    residential:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    commercial:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    corporate:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    international:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    packing:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&q=80",
    furniture:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    storage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
} as const;

export type ServiceFaq = {
  question: string;
  answer: string;
};

export const siteFaqs: ServiceFaq[] = [
  {
    question: "Is Aureon a licensed moving company in Abu Dhabi?",
    answer:
      "Yes, Aureon Relocations (Aureon Furniture Transportation – L.L.C) is a licensed moving company operating in Abu Dhabi, UAE. The company holds an official trade license, which means it is a regulated, accountable business rather than an informal mover.",
  },
  {
    question: "What services does Aureon Relocations offer?",
    answer:
      "Aureon Relocations offers residential relocation, commercial relocation, corporate relocation, international relocation, packing and handling, furniture installation, and storage solutions — all based in Abu Dhabi, UAE.",
  },
  {
    question:
      "What makes Aureon one of the best movers and packers in Abu Dhabi?",
    answer:
      "Aureon is considered among the best movers and packers in Abu Dhabi because it uses trained staff, professional packing materials, and transparent, itemized pricing with no hidden fees on every move.",
  },
  {
    question:
      "Does Aureon handle house shifting and apartment shifting in Abu Dhabi?",
    answer:
      "Yes, Aureon provides house shifting and apartment shifting services in Abu Dhabi, including packing, furniture protection, transportation, and delivery for homes of any size.",
  },
  {
    question: "Does Aureon provide villa moving services?",
    answer:
      "Yes, Aureon offers professional villa moving services in Abu Dhabi, handling large furniture, multi-room packing, and delicate items with protective wrapping and careful placement.",
  },
  {
    question: "Can Aureon relocate offices and businesses in Abu Dhabi?",
    answer:
      "Yes, Aureon provides office relocation services in Abu Dhabi designed to minimize business downtime, including equipment handling, furniture relocation, and scheduled transport.",
  },
  {
    question: "Is Aureon an affordable moving company in Abu Dhabi?",
    answer:
      "Yes, Aureon offers affordable moving services in Abu Dhabi with transparent, itemized quotes and no hidden costs.",
  },
  {
    question: "How can I contact Aureon Relocations for a quote?",
    answer:
      "You can contact Aureon Relocations by phone at +971 561338182 or +971 555509390, by email at info@aureonrelocations.ae, or through the online quote form at aureonrelocations.com/contact. Aureon typically responds the same day with a free, no-obligation estimate.",
  },
  {
    question: "Where is Aureon Relocations located?",
    answer:
      "Aureon Relocations is based in Abu Dhabi, United Arab Emirates, and serves residential, commercial, and corporate clients across the city.",
  },
];

export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  imageAlt: string;
  faqs?: ServiceFaq[];
};

export const services: Service[] = [
  {
    id: "residential-relocation",
    number: "01",
    title: "Residential Relocation",
    shortTitle: "Residential",
    description:
      "Moving home should feel exciting — not exhausting. We handle the details so you can focus on settling into your new space.",
    longDescription:
      "Moving home should feel like the start of something good — not a logistics headache. Aureon provides complete house shifting services in Abu Dhabi, covering everything from studio apartments to multi-bedroom villas, with a plan built around your timeline and belongings.\n\nOur apartment shifting services in Abu Dhabi are designed for tight schedules and building move-in/move-out rules, with careful coordination so nothing is left to chance. For larger homes, our professional villa movers in Abu Dhabi handle bulkier furniture, delicate décor, and multi-room packing with the same precision, whether you're moving across the city or into a new community.\n\nEvery residential move includes planning and coordination, protective packing, secure transportation, and delivery — with optional furniture assembly and placement so your new home is ready to live in from day one.",
    features: [
      "Planning & coordination",
      "Packing & handling",
      "Furniture protection",
      "Transportation",
      "Delivery",
      "Optional assembly / placement",
    ],
    image: images.services.residential,
    imageAlt:
      "House shifting service in Abu Dhabi — movers packing an apartment",
    faqs: siteFaqs,
  },
  {
    id: "commercial-relocation",
    number: "02",
    title: "Commercial Relocation",
    shortTitle: "Commercial",
    description:
      "Keep your business moving forward with organized, efficient relocation support designed to minimize disruption.",
    longDescription:
      "Office relocation in Abu Dhabi comes with a challenge most home moves don't: your business can't stop while you move. Aureon plans commercial relocations around your operating hours, minimizing downtime with structured scheduling and clear communication at every stage.\n\nAs specialist office furniture movers, we handle desks, workstations, IT equipment, and shared office assets with the same care we'd give a fragile antique — because a damaged monitor or broken cabinet is a delay you don't need. Our team manages business continuity planning, equipment handling, scheduled transportation, and setup coordination, so your team walks into a fully functioning workspace on day one.\n\nFrom small office moves to full-floor relocations, Aureon's commercial relocation service is built to keep Abu Dhabi businesses moving forward without disruption.",
    features: [
      "Business continuity planning",
      "Equipment handling",
      "Office furniture relocation",
      "Scheduled transportation",
      "Setup coordination",
      "After-move support",
    ],
    image: images.services.commercial,
    imageAlt:
      "Office relocation in Abu Dhabi — commercial movers handling equipment",
  },
  {
    id: "corporate-relocation",
    number: "03",
    title: "Corporate Relocation",
    shortTitle: "Corporate",
    description:
      "Professional relocation solutions for companies, teams, employees, and corporate transitions.",
    longDescription:
      "Corporate relocations involve more moving parts than a single move — multiple employees, timelines, and company policies to align. As a professional moving company in Abu Dhabi with experience across residential, commercial, and corporate relocation, Aureon assigns a dedicated project coordinator to manage employee relocation support, multi-location scheduling, and policy-aligned planning from start to finish.\n\nWe keep HR teams and employees informed at every stage, with clear timelines and proactive communication so nothing falls through the cracks during a company-wide move or individual employee relocation.",
    features: [
      "Employee relocation support",
      "Multi-location coordination",
      "Policy-aligned planning",
      "Dedicated project management",
      "Timeline management",
      "Communication support",
    ],
    image: images.services.corporate,
    imageAlt:
      "Corporate relocation in Abu Dhabi — professional movers coordinating employee moves",
  },
  {
    id: "international-relocation",
    number: "04",
    title: "International Relocation",
    shortTitle: "International",
    description:
      "Thoughtful relocation support for moves that cross borders, with careful coordination from origin to destination.",
    longDescription:
      "Relocating across borders adds layers most local moves don't have to think about — documentation, customs, and international transport logistics. Aureon supports international relocations from Abu Dhabi with careful origin-to-destination planning, professional crating for long-distance transport, and guidance through the documentation process, so you're not navigating it alone.\n\nOur team coordinates packing, international shipping, and destination delivery as one continuous process, with support through customs coordination and final setup — making a cross-border move feel manageable instead of overwhelming.",
    features: [
      "Origin & destination planning",
      "Documentation guidance",
      "Packing & crating",
      "International transportation",
      "Customs coordination support",
      "Delivery & setup",
    ],
    image: images.services.international,
    imageAlt:
      "International relocation from Abu Dhabi — cross-border moving and shipping",
  },
  {
    id: "packing-handling",
    number: "05",
    title: "Packing & Handling",
    shortTitle: "Packing",
    description:
      "Careful packing, protective handling, and thoughtful preparation for safer transportation.",
    longDescription:
      "Good packing is the difference between a move that goes smoothly and one that ends in cracked glassware. As one of the best movers and packers in Abu Dhabi, Aureon uses professional-grade packing materials, protective wrapping for fragile and specialty items, and a clear labeling and inventory system so nothing gets lost or mishandled along the way.\n\nClients choose us as reliable movers and packers in Abu Dhabi because we treat packing as a skill, not an afterthought — furniture is wrapped and cushioned, boxes are labeled by room, and fragile items get individual attention. On request, our team also provides unpacking support at your destination, so your new space comes together faster.",
    features: [
      "Professional packing materials",
      "Fragile item protection",
      "Labeling & inventory",
      "Furniture wrapping",
      "Specialty item handling",
      "Unpacking support",
    ],
    image: images.services.packing,
    imageAlt:
      "Professional movers and packers in Abu Dhabi carefully packing belongings",
  },
  {
    id: "furniture-installation",
    number: "06",
    title: "Furniture Installation",
    shortTitle: "Furniture",
    description:
      "From dismantling and assembly to final placement, every detail is handled with precision and care.",
    longDescription:
      "Furniture is usually the heaviest, most awkward, and most expensive part of any move — which is exactly where a specialist matters. As dedicated furniture movers in Abu Dhabi, Aureon handles dismantling, protective transport, reassembly, and room-by-room placement, so large or delicate pieces arrive undamaged and end up exactly where they belong.\n\nOur furniture relocation service in Abu Dhabi covers everything from wardrobes and bed frames to office furniture and fixtures, with a final walkthrough to confirm every piece is placed correctly. If you've been searching \"furniture movers near me,\" Aureon's Abu Dhabi–based team can typically schedule your move within days, not weeks.",
    features: [
      "Disassembly & reassembly",
      "Protective handling",
      "Room-by-room placement",
      "Fixture installation",
      "Layout coordination",
      "Final walkthrough",
    ],
    image: images.services.furniture,
    imageAlt:
      "Furniture movers in Abu Dhabi assembling and placing furniture",
  },
  {
    id: "storage-solutions",
    number: "07",
    title: "Storage Solutions",
    shortTitle: "Storage",
    description:
      "Flexible storage solutions when you need a secure place for your belongings between destinations.",
    longDescription:
      "Not every move happens in one clean step. When there's a gap between leaving one space and settling into the next, Aureon's storage solutions in Abu Dhabi give your belongings a secure place to wait — with short and long-term options, inventory management, and flexible access.\n\nWhether you need storage for a few weeks during a house shifting transition or several months during a corporate relocation, our team coordinates pickup, storage, and final delivery as part of one seamless move.",
    features: [
      "Short & long-term options",
      "Secure facilities",
      "Inventory management",
      "Climate considerations",
      "Flexible access",
      "Delivery coordination",
    ],
    image: images.services.storage,
    imageAlt:
      "Secure storage facility for movers and packers in Abu Dhabi",
  },
];

export const trustIndicators = [
  "Residential Relocation",
  "Commercial Relocation",
  "Corporate Relocation",
  "Professional Handling",
  "Secure Transportation",
] as const;

export const journeyStages = [
  {
    number: "01",
    title: "Plan",
    description:
      "We understand your requirements and create a clear relocation plan.",
  },
  {
    number: "02",
    title: "Pack",
    description:
      "Your belongings are carefully prepared and protected.",
  },
  {
    number: "03",
    title: "Move",
    description:
      "Professional handling and transportation keep your move on track.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Your belongings arrive safely at their destination.",
  },
  {
    number: "05",
    title: "Settle",
    description:
      "We help make the transition into your new space easier.",
  },
] as const;

export const principles = [
  {
    title: "Care",
    description: "Every item deserves attention.",
  },
  {
    title: "Precision",
    description: "Every move deserves a plan.",
  },
  {
    title: "Reliability",
    description: "Every promise matters.",
  },
  {
    title: "Transparency",
    description: "Clear communication from beginning to end.",
  },
] as const;

export const aboutSections = [
  {
    title: "People",
    description:
      "Experienced professionals who understand that every move involves more than belongings. It involves people's homes, businesses, routines, and important moments.",
  },
  {
    title: "Process",
    description:
      "A structured approach keeps every stage of your relocation organized, coordinated, and easy to understand.",
  },
  {
    title: "Precision",
    description:
      "Careful handling and attention to detail help ensure your belongings reach their destination safely.",
  },
] as const;

export const moveTypes = [
  "Residential",
  "Commercial",
  "Corporate",
] as const;

export const locationOptions = [
  "Select location",
  "Local",
  "Interstate",
  "International",
] as const;

export const gccLocationSuggestions = [
  "Dubai, UAE",
  "Abu Dhabi, UAE",
  "Sharjah, UAE",
  "Ajman, UAE",
  "Ras Al Khaimah, UAE",
  "Fujairah, UAE",
  "Umm Al Quwain, UAE",
  "Riyadh, Saudi Arabia",
  "Jeddah, Saudi Arabia",
  "Dammam, Saudi Arabia",
  "Khobar, Saudi Arabia",
  "Mecca, Saudi Arabia",
  "Medina, Saudi Arabia",
  "Doha, Qatar",
  "Al Wakrah, Qatar",
  "Al Khor, Qatar",
  "Kuwait City, Kuwait",
  "Hawalli, Kuwait",
  "Manama, Bahrain",
  "Muharraq, Bahrain",
  "Muscat, Oman",
  "Salalah, Oman",
  "Sohar, Oman",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
] as const;

export const whatsappQuote = {
  number: "919446791982",
  buildMessage: (moveType: string, from: string, to: string) =>
    `I am looking for a ${moveType} move from ${from} to ${to}.`,
};

/** Placeholder testimonials — replace with real client reviews when available */
export const testimonials = [
  {
    quote:
      "From the first conversation to the final delivery, the entire process felt organized, professional, and stress-free.",
    author: "Client Name",
    isPlaceholder: true,
  },
  {
    quote:
      "The team handled everything with care and kept us informed at every stage. Moving felt far less overwhelming than we expected.",
    author: "Client Name",
    isPlaceholder: true,
  },
  {
    quote:
      "Professional, punctual, and thoughtful. Aureon made our office relocation smooth and well-coordinated.",
    author: "Client Name",
    isPlaceholder: true,
  },
] as const;

export const contactInfo = {
  email: "info@aureonrelocations.ae",
  phones: ["+971 561338182", "+971 555509390"],
  location: "Abu Dhabi, UAE",
} as const;

export const companyLicense = {
  tradeName: "Aureon Furniture Transportation - L.L.C",
  licenceType: "Commercial — Abu Dhabi Trader",
  licenceNumber: "CN-6736478",
  unifiedLicenceNumber: "501-2026-200079818",
  unifiedRegistrationNumber: "101-2026-200123617",
  legalForm: "Limited Liability Company",
  establishmentDate: "01/09/2026",
  expiryDate: "31/08/2027",
  emirate: "Abu Dhabi, UAE",
  certificationLogos: [
    {
      src: "/images/adra.png",
      alt: "Abu Dhabi Registration Authority (ADRA)",
    },
    {
      src: "/images/deparmentofeconomicdevlopment.png",
      alt: "Department of Economic Development — Abu Dhabi",
    },
  ],
} as const;

const googleAppsScriptDeploymentId =
  "AKfycbyOrugqjZDDRYlZyAGuw0HLQz3ecg2owsWfwTqSEqk10J_Qs58QZx0spkEJNSWHFQ1u";

export const googleSheets = {
  deploymentId: googleAppsScriptDeploymentId,
  webAppUrl: `https://script.google.com/macros/s/${googleAppsScriptDeploymentId}/exec`,
};

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
] as const;

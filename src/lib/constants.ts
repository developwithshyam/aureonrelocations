export const callNowHref = "tel:+971561338182" as const;

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Call Now", href: callNowHref },
] as const;

export const footerServiceLinks = [
  { label: "Residential", href: "/home-relocation" },
  { label: "Commercial", href: "/services#commercial-relocation" },
  { label: "Corporate", href: "/corporate-relocation" },
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
    packing: "/images/services/packed.png",
    furniture: "/images/services/installation.png",
    storage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    furnitureTransport:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    handyman:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
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
  headline: string;
  description: string;
  body: string[];
  features: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "residential-relocation",
    number: "01",
    title: "Residential Relocation",
    shortTitle: "Residential",
    headline: "House Shifting & Apartment Shifting in Abu Dhabi",
    description:
      "House shifting and apartment shifting in Abu Dhabi — from studio to villa, with packing, protection, and placement when you arrive.",
    body: [
      "Moving home should feel exciting, not exhausting. Our residential relocation service covers house shifting and apartment shifting services in Abu Dhabi for homes of any size — from a single studio to a full villa. We handle packing, furniture protection, transport, and placement in your new space, so unpacking starts the day you arrive instead of a week later.",
    ],
    features: [
      "Packing materials & labor",
      "Furniture protection & wrapping",
      "Loading, transport & unloading",
      "Placement in new home",
      "Optional handyman assembly",
    ],
    image: images.services.residential,
    imageAlt:
      "House shifting service in Abu Dhabi — movers packing an apartment",
  },
  {
    id: "commercial-relocation",
    number: "02",
    title: "Commercial Relocation",
    shortTitle: "Commercial",
    headline: "Business Moves With Minimal Downtime",
    description:
      "Commercial relocation planned around your hours — equipment, stock, and furniture moved with minimal disruption.",
    body: [
      "Commercial relocation is about protecting revenue as much as protecting furniture. Our team plans around your operating hours, coordinates equipment and stock separately from general furniture, and schedules the move to minimize disruption to staff and customers.",
    ],
    features: [
      "After-hours & weekend scheduling",
      "Equipment & stock handling",
      "Furniture disassembly/reassembly",
      "Coordinated multi-day moves for larger spaces",
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
    headline: "Office Relocation & Employee Transitions in Abu Dhabi",
    description:
      "Corporate relocation in Abu Dhabi — employee transfers and full-floor office moves as separate, scheduled workstreams.",
    body: [
      "Corporate relocation in Abu Dhabi covers everything from a single employee transfer to a full-floor office move. Aureon coordinates workstations, shared equipment, and individual employee belongings as separate, clearly scheduled workstreams — so nothing gets lost between \"the office move\" and \"the people move.\"",
    ],
    features: [
      "Employee relocation coordination",
      "Office furniture movers for desks & workstations",
      "IT/equipment handling (client-managed disconnection)",
      "Scheduled floor-by-floor moves",
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
    headline: "Cross-Border Moves From Abu Dhabi",
    description:
      "International relocation from Abu Dhabi — documentation, export packing, and shipping coordinated door to door.",
    body: [
      "Moving across a border takes more than a bigger truck. Our international relocation service coordinates documentation, export-ready packing, and shipping logistics from Abu Dhabi to your destination — with the same care applied at origin as we'd want applied at arrival.",
    ],
    features: [
      "Export-ready packing",
      "Documentation coordination",
      "Shipping logistics (air/sea/land, via partners)",
      "Origin-to-destination tracking updates",
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
    headline: "Professional Packing Materials & Trained Handling",
    description:
      "Professional movers in Abu Dhabi trained in packing — fragile, oversized, and awkward items protected before the truck arrives.",
    body: [
      "The difference between a smooth move and a stressful one is usually decided before the truck ever arrives. Our packing and handling service uses professional-grade materials — not just boxes and tape — and trained staff who know how to protect fragile, oversized, and awkward items alike.",
    ],
    features: [
      "Fragile item wrapping (glass, art, electronics)",
      "Furniture blankets & corner protection",
      "Labeled, room-by-room box systems",
      "Full-pack or partial-pack options",
    ],
    image: images.services.packing,
    imageAlt:
      "Aureon packing and handling in Abu Dhabi — branded boxes and protected furniture",
  },
  {
    id: "furniture-installation",
    number: "06",
    title: "Furniture Installation",
    shortTitle: "Furniture",
    headline: "Furniture Movers in Abu Dhabi — Dismantle, Transport, Rebuild",
    description:
      "Furniture movers in Abu Dhabi — dismantling, transport, and complete reassembly at your new address.",
    body: [
      "Furniture movers in Abu Dhabi are only as good as the reassembly at the other end. Our furniture installation service covers dismantling before the move and precise, complete reassembly and placement after — beds, wardrobes, shelving, and modular furniture included.",
    ],
    features: [
      "Dismantling before transport",
      "Reassembly at destination",
      "Wall-mounting & fittings on request",
      "Final placement per your layout",
    ],
    image: images.services.furniture,
    imageAlt:
      "Aureon furniture installation service in Abu Dhabi — professional fitting and assembly",
  },
  {
    id: "storage-solutions",
    number: "07",
    title: "Storage Solutions",
    shortTitle: "Storage",
    headline: "Secure Short- and Long-Term Storage in Abu Dhabi",
    description:
      "Secure storage in Abu Dhabi between homes or offices — days, weeks, or months with inventory tracking.",
    body: [
      "Not every move happens in one clean step. Whether you're between homes, waiting on a new office fit-out, or downsizing temporarily, our storage solutions give you a secure place for your belongings for as long as you need it — days, weeks, or months.",
    ],
    features: [
      "Short-term & long-term options",
      "Secure, monitored facilities",
      "Inventory tracking",
      "Easy scheduling for retrieval or delivery",
    ],
    image: images.services.storage,
    imageAlt:
      "Secure storage facility for movers and packers in Abu Dhabi",
  },
  {
    id: "furniture-transportation",
    number: "08",
    title: "Furniture Transportation",
    shortTitle: "Transport",
    headline: "Furniture Relocation in Abu Dhabi — Any Size, Any Distance",
    description:
      "Furniture relocation in Abu Dhabi — single pieces or full loads, with protective wrapping and flexible scheduling.",
    body: [
      "Sometimes you don't need a full move — just one piece, or a few, moved safely. Our furniture transportation and furniture relocation service in Abu Dhabi covers everything from a single sofa to a full household's worth of furniture, delivered without damage.",
    ],
    features: [
      "Single-item pickup & delivery",
      "Multi-item furniture relocation",
      "Protective wrapping for transit",
      "Flexible scheduling, including short notice",
    ],
    image: images.services.furnitureTransport,
    imageAlt:
      "Furniture transportation in Abu Dhabi — movers relocating a sofa",
  },
  {
    id: "handyman-work",
    number: "09",
    title: "Handyman Work",
    shortTitle: "Handyman",
    headline: "Assembly, Mounting & Fittings — Scheduled Separately",
    description:
      "Handyman assembly and mounting scheduled on your timeline — not rushed into moving day.",
    body: [
      "Installation needs precision and your input, not a rushed 20 minutes at the end of moving day. Our handyman service covers furniture assembly, TV and shelf mounting, and general fittings, scheduled on a day that works for you rather than squeezed into the move itself.",
    ],
    features: [
      "Furniture assembly",
      "TV & wall-mounted fittings",
      "Shelving & general installation",
      "Scheduled independently of your moving date",
    ],
    image: images.services.handyman,
    imageAlt:
      "Handyman assembly and mounting service in Abu Dhabi",
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
      "We understand your requirements and create a clear plan, tailored to your move type, timeline, and budget.",
  },
  {
    number: "02",
    title: "Pack",
    description:
      "Your belongings are carefully prepared and protected using professional-grade packing materials.",
  },
  {
    number: "03",
    title: "Move",
    description:
      "Professional handling keeps your move on track, with trained crews and secure transportation across Abu Dhabi.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Your belongings arrive safely, on time, with nothing missing and nothing damaged.",
  },
  {
    number: "05",
    title: "Settle",
    description:
      "We help make the transition into your new space easier, so moving day ends with you settled, not still unpacking.",
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

export type WhatsAppQuoteDetails = {
  moveType: string;
  from: string;
  to: string;
  mobile?: string;
  floorNumber?: string;
  liftAvailable?: string;
  fragileItems?: string;
};

export const whatsappQuote = {
  number: "919446791982",
  buildMessage: ({
    moveType,
    from,
    to,
    mobile,
    floorNumber,
    liftAvailable,
    fragileItems,
  }: WhatsAppQuoteDetails) => {
    let message = `I am looking for a ${moveType} move from ${from} to ${to}.`;
    if (mobile?.trim()) {
      message += `\nMobile: ${mobile.trim()}`;
    }
    if (floorNumber?.trim()) {
      message += `\nFloor: ${floorNumber.trim()}`;
    }
    if (liftAvailable?.trim()) {
      message += `\nLift available: ${liftAvailable.trim()}`;
    }
    if (fragileItems?.trim()) {
      message += `\nFragile items: ${fragileItems.trim()}`;
    }
    return message;
  },
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
  {
    label: "Instagram",
    href: "https://www.instagram.com/aureonrelocations",
  },
  { label: "Facebook", href: "#" },
] as const;

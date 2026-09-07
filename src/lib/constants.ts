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
  hero: "/images/hero.png",
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
    "https://images.unsplash.com/photo-1600585154363-707a8879a005?w=1920&q=80",
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
      "https://images.unsplash.com/photo-1600585152915-d0bec7421392?w=800&q=80",
  },
} as const;

export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
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
      "Aureon provides carefully planned residential relocation support designed to make moving into your new home easier.",
    features: [
      "Planning & coordination",
      "Packing & handling",
      "Furniture protection",
      "Transportation",
      "Delivery",
      "Optional assembly / placement",
    ],
    image: images.services.residential,
  },
  {
    id: "commercial-relocation",
    number: "02",
    title: "Commercial Relocation",
    shortTitle: "Commercial",
    description:
      "Keep your business moving forward with organized, efficient relocation support designed to minimize disruption.",
    longDescription:
      "Aureon delivers structured commercial relocation services that help businesses transition smoothly with minimal downtime.",
    features: [
      "Business continuity planning",
      "Equipment handling",
      "Office furniture relocation",
      "Scheduled transportation",
      "Setup coordination",
      "After-move support",
    ],
    image: images.services.commercial,
  },
  {
    id: "corporate-relocation",
    number: "03",
    title: "Corporate Relocation",
    shortTitle: "Corporate",
    description:
      "Professional relocation solutions for companies, teams, employees, and corporate transitions.",
    longDescription:
      "Aureon supports corporate relocations with coordinated planning for teams, employees, and organizational transitions.",
    features: [
      "Employee relocation support",
      "Multi-location coordination",
      "Policy-aligned planning",
      "Dedicated project management",
      "Timeline management",
      "Communication support",
    ],
    image: images.services.corporate,
  },
  {
    id: "international-relocation",
    number: "04",
    title: "International Relocation",
    shortTitle: "International",
    description:
      "Thoughtful relocation support for moves that cross borders, with careful coordination from origin to destination.",
    longDescription:
      "Aureon provides international relocation support with careful coordination across every stage of a cross-border move.",
    features: [
      "Origin & destination planning",
      "Documentation guidance",
      "Packing & crating",
      "International transportation",
      "Customs coordination support",
      "Delivery & setup",
    ],
    image: images.services.international,
  },
  {
    id: "packing-handling",
    number: "05",
    title: "Packing & Handling",
    shortTitle: "Packing",
    description:
      "Careful packing, protective handling, and thoughtful preparation for safer transportation.",
    longDescription:
      "Aureon provides professional packing and handling services designed to protect your belongings throughout the move.",
    features: [
      "Professional packing materials",
      "Fragile item protection",
      "Labeling & inventory",
      "Furniture wrapping",
      "Specialty item handling",
      "Unpacking support",
    ],
    image: images.services.packing,
  },
  {
    id: "furniture-installation",
    number: "06",
    title: "Furniture Installation",
    shortTitle: "Furniture",
    description:
      "From dismantling and assembly to final placement, every detail is handled with precision and care.",
    longDescription:
      "Aureon handles furniture dismantling, assembly, and placement so your new space is ready when you arrive.",
    features: [
      "Disassembly & reassembly",
      "Protective handling",
      "Room-by-room placement",
      "Fixture installation",
      "Layout coordination",
      "Final walkthrough",
    ],
    image: images.services.furniture,
  },
  {
    id: "storage-solutions",
    number: "07",
    title: "Storage Solutions",
    shortTitle: "Storage",
    description:
      "Flexible storage solutions when you need a secure place for your belongings between destinations.",
    longDescription:
      "Aureon offers flexible storage options for belongings that need a secure place between moves or during transitions.",
    features: [
      "Short & long-term options",
      "Secure facilities",
      "Inventory management",
      "Climate considerations",
      "Flexible access",
      "Delivery coordination",
    ],
    image: images.services.storage,
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
  location: "[Company Location]",
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

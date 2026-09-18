import type { StaticImageData } from "next/image";
import { homeRelocationImageAsset } from "@/lib/landing-images";

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
  { label: "Home", href: "/services#home-relocation" },
  { label: "Office", href: "/services#office-commercial-relocation" },
  { label: "Furniture", href: "/services#furniture-moving-transportation" },
  { label: "Packing", href: "/services#packing-moving-support" },
  { label: "Assembly", href: "/services#furniture-dismantling-reassembly" },
  { label: "Storage", href: "/services#warehouse-storage" },
  { label: "Events", href: "/services#exhibition-event-logistics" },
] as const;

export const images = {
  residential: homeRelocationImageAsset,
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
    homeRelocation: "/images/services/packingandmoving.png",
    officeCommercial: "/images/corporate-relocation.png",
    furnitureMoving: "/images/services/furnituremoving.png",
    packingMoving: "/images/services/packi.png",
    dismantlingReassembly: "/images/services/furniture.png",
    warehouseStorage: "/images/services/storageandwarehouse.png",
    exhibitionEvents: "/images/services/event.png",
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
      "Aureon Relocations offers home relocation, office and commercial relocation, furniture moving and transportation, packing and moving support, furniture dismantling and reassembly, warehouse and storage, and exhibition and event logistics — all based in Abu Dhabi, UAE.",
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
  image: string | StaticImageData;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "home-relocation",
    number: "01",
    title: "Home Relocation",
    shortTitle: "Home",
    headline: "Household moves across Abu Dhabi and the UAE",
    description: "Household furniture moving, apartment and villa shifting, and local relocation.",
    body: [],
    features: [
      "Household furniture moving",
      "Home relocation",
      "Apartment and villa shifting",
      "Local moving within Abu Dhabi/UAE",
    ],
    image: images.services.homeRelocation,
    imageAlt: "Home relocation and household furniture moving in Abu Dhabi",
  },
  {
    id: "office-commercial-relocation",
    number: "02",
    title: "Office & Commercial Relocation",
    shortTitle: "Office",
    headline: "Office, commercial, and corporate business moves",
    description:
      "Office relocation, commercial furniture moving, and corporate business relocation.",
    body: [],
    features: [
      "Office relocation",
      "Commercial furniture moving",
      "Corporate relocation",
      "Business relocation",
    ],
    image: images.services.officeCommercial,
    imageAlt: "Office and commercial relocation in Abu Dhabi",
  },
  {
    id: "furniture-moving-transportation",
    number: "03",
    title: "Furniture Moving & Transportation",
    shortTitle: "Furniture",
    headline: "Furniture transportation by truck — any size load",
    description:
      "Delivery of furniture and household items, including heavy, bulky, and single pieces.",
    body: [],
    features: [
      "Furniture transportation by truck",
      "Delivery of furniture and household items",
      "Moving heavy/bulky furniture",
      "Single-item furniture transportation",
    ],
    image: images.services.furnitureMoving,
    imageAlt: "Furniture moving and transportation in Abu Dhabi",
  },
  {
    id: "packing-moving-support",
    number: "04",
    title: "Packing & Moving Support",
    shortTitle: "Packing",
    headline: "Packing, protection, loading, and unloading",
    description:
      "Packing and unpacking, furniture wrapping, and careful loading and unloading.",
    body: [],
    features: [
      "Packing and unpacking services",
      "Furniture wrapping and protection",
      "Loading and unloading",
    ],
    image: images.services.packingMoving,
    imageAlt: "Packing and moving support services in Abu Dhabi",
  },
  {
    id: "furniture-dismantling-reassembly",
    number: "05",
    title: "Furniture Dismantling & Reassembly",
    shortTitle: "Assembly",
    headline: "Dismantling and reassembly for large furniture",
    description:
      "Furniture dismantling, reassembly, and preparation for bulky items.",
    body: [],
    features: [
      "Furniture dismantling",
      "Furniture reassembly",
      "Large/bulky furniture preparation",
    ],
    image: images.services.dismantlingReassembly,
    imageAlt: "Furniture dismantling and reassembly in Abu Dhabi",
  },
  {
    id: "warehouse-storage",
    number: "06",
    title: "Warehouse & Storage",
    shortTitle: "Storage",
    headline: "Warehouse moves, storage, and move-store-deliver",
    description:
      "Warehouse relocation, temporary storage, and coordinated move-store-deliver services.",
    body: [],
    features: [
      "Warehouse moving",
      "Warehouse-to-warehouse transportation",
      "Temporary furniture storage",
      "Storage and moving services",
      "Move → store → deliver services",
    ],
    image: images.services.warehouseStorage,
    imageAlt: "Warehouse moving and furniture storage in Abu Dhabi",
  },
  {
    id: "exhibition-event-logistics",
    number: "07",
    title: "Exhibition & Event Logistics",
    shortTitle: "Events",
    headline: "Equipment and furniture delivery for exhibitions and events",
    description:
      "Transportation and delivery for exhibition and event equipment and furniture.",
    body: [],
    features: [
      "Exhibition equipment transportation",
      "Event equipment transportation",
      "Furniture and equipment delivery for events",
    ],
    image: images.services.exhibitionEvents,
    imageAlt: "Exhibition and event logistics in Abu Dhabi",
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

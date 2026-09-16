import type { ServiceFaq } from "@/lib/constants";

export const corporateRelocationMetrics = [
  {
    label: "Dedicated coordinator",
    detail: "One point of contact from discovery through handover.",
  },
  {
    label: "Policy-aligned planning",
    detail: "Moves structured around your HR guidelines and timelines.",
  },
  {
    label: "Multi-location scheduling",
    detail: "Employee and team relocations coordinated across sites.",
  },
] as const;

export const corporateHrChallenges = [
  "Multiple employees on different move dates",
  "HR policies that must be reflected in every relocation",
  "Pressure to minimize disruption to operations",
  "Employees needing clear communication and support",
  "Vendors who treat corporate moves like one-off house shifts",
] as const;

export const corporateAureonResponses = [
  "Dedicated project coordinator for your account",
  "Structured timelines with proactive status updates",
  "Employee relocation support aligned to your policies",
  "Consistent standards across every move in the program",
  "Licensed Abu Dhabi operator with accountable processes",
] as const;

export const corporateDeliveryPhases = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Scope, policies, locations, and employee cohorts mapped with HR and operations stakeholders.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Master schedule, communication plan, and resource allocation before any move begins.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Coordinated packing, transport, and delivery with single-point accountability.",
  },
  {
    number: "04",
    title: "Handover",
    description:
      "Confirmation, documentation, and after-move support so HR can close the loop confidently.",
  },
] as const;

export const corporateRelocationFaqs: ServiceFaq[] = [
  {
    question: "Does Aureon support employee relocations for companies in Abu Dhabi?",
    answer:
      "Yes. We provide corporate relocation support including employee moves, multi-location scheduling, and dedicated project coordination for companies operating in Abu Dhabi.",
  },
  {
    question: "Can you align with our internal relocation policies?",
    answer:
      "We plan around your HR guidelines, approved timelines, and communication preferences so each move stays consistent with your policy framework.",
  },
  {
    question: "Who is our main contact during a corporate relocation program?",
    answer:
      "Aureon assigns a dedicated project coordinator as your primary point of contact from planning through handover.",
  },
  {
    question: "Is Aureon a licensed moving company in Abu Dhabi?",
    answer:
      "Yes. Aureon Relocations (Aureon Furniture Transportation – L.L.C) is a licensed commercial operator in Abu Dhabi, UAE, with official trade registration.",
  },
];

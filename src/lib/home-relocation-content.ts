import type { ServiceFaq } from "@/lib/constants";
import { images } from "@/lib/constants";
import { homeRelocationImageAlt } from "@/lib/landing-images";

export const homeRelocationEmpathy = [
  "Moving home is rarely just about boxes and furniture. It's the place where mornings started, where photos hung on the wall, and where life quietly unfolded. When that chapter closes and a new one begins, the feelings can be mixed — excitement, nostalgia, and yes, sometimes stress.",
  "You shouldn't have to carry all of that alone. Aureon exists so families and individuals in Abu Dhabi can focus on what matters: imagining life in your new space, while we handle the careful, respectful work of getting you there.",
  "From studio apartments to full villas, every home move gets the same promise — patience, protection, and people who treat your belongings like they matter. Because to you, they do.",
] as const;

export const homeRelocationPriorities = [
  {
    title: "Memories & keepsakes",
    description:
      "Fragile pieces, heirlooms, and the items that can't be replaced — wrapped and handled with extra care.",
  },
  {
    title: "Family rhythm",
    description:
      "Move dates that respect school runs, work schedules, and building access windows.",
  },
  {
    title: "Peace of mind",
    description:
      "Clear updates so you're never wondering where things stand on moving day.",
  },
  {
    title: "A home that feels ready",
    description:
      "Optional assembly and placement so you can settle in, not unpack for weeks.",
  },
] as const;

export const homeRelocationStories = [
  {
    title: "Apartment living, thoughtfully moved",
    body: "Tight timelines, elevator bookings, and neighbour-friendly loading — we coordinate the details Abu Dhabi apartment moves demand, so your first night in the new place feels calm, not chaotic.",
    image: images.services.residential,
    alt: homeRelocationImageAlt,
  },
  {
    title: "Villa moves with room to breathe",
    body: "Larger furniture, outdoor pieces, and multi-room packing need a plan that scales. Our villa movers map each room, protect surfaces, and keep your household flowing toward one clear delivery day.",
    image: images.residential,
    alt: homeRelocationImageAlt,
  },
  {
    title: "Your next chapter, supported",
    body: "Whether you're upsizing, downsizing, or starting fresh in a new community, we listen first — then build a move around how you actually live, not a generic checklist.",
    image: images.whyAureon,
    alt: "Family settling into a new home with professional mover support",
  },
] as const;

export const homeRelocationCareSteps = [
  {
    step: "01",
    title: "Listen",
    description:
      "We learn what you're moving, what you're worried about, and when you need to be settled.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "A clear timeline, packing approach, and building access coordinated before anything is lifted.",
  },
  {
    step: "03",
    title: "Protect",
    description:
      "Professional packing, furniture protection, and careful transport — room by room.",
  },
  {
    step: "04",
    title: "Settle",
    description:
      "Delivery, placement, and optional assembly so your new home feels like yours sooner.",
  },
] as const;

export const homeRelocationFaqs: ServiceFaq[] = [
  {
    question: "Do you handle apartment and villa moves in Abu Dhabi?",
    answer:
      "Yes. Aureon provides house shifting and apartment shifting across Abu Dhabi, from studios to multi-bedroom villas, with planning tailored to your building and timeline.",
  },
  {
    question: "Can you pack fragile and sentimental items carefully?",
    answer:
      "Absolutely. We use professional packing materials and individual attention for fragile, valuable, and sentimental belongings so they arrive safely.",
  },
  {
    question: "How far in advance should I book a home move?",
    answer:
      "We recommend reaching out as early as you can, especially at month-end or peak seasons. We'll always do our best to accommodate tighter timelines when possible.",
  },
  {
    question: "Will I know what's happening on moving day?",
    answer:
      "Yes. You'll have clear communication throughout — from the plan we agree on beforehand to updates as your belongings are packed, transported, and delivered.",
  },
];

export const site = {
  name: "Mira Sen Interiors",
  city: "New Delhi · Greater Kailash",
  work: "homes, renovations & intimate commercial spaces",
  whatsapp: "919654801993",
  instagram: "@copywrk",
  instagramUrl: "https://instagram.com/copywrk",
  brand: "Copywrk"
};

export const hero = {
  before: "/images/hero-before.svg",
  after: "/images/hero-after.svg",
  title: "Rooms with a quieter point of view.",
  copy: "Mira Sen shapes warm, considered interiors around the way people actually live — from first sketch to final detail."
};

export type Project = {
  title: string;
  location: string;
  note: string;
  images: { src: string; alt: string; label: string }[];
};

export const projects: Project[] = [
  {
    title: "The Walnut Apartment",
    location: "Defence Colony · 2,100 sq ft",
    note: "Why walnut here? The darker grain anchors an otherwise pale palette and makes the long living room feel more intimate.",
    images: [
      { src: "/images/project-1-entrance.svg", alt: "Warm apartment entrance with timber details", label: "Entrance" },
      { src: "/images/project-1-living.svg", alt: "Warm living room with walnut joinery", label: "Living room" },
      { src: "/images/project-1-bedroom.svg", alt: "Calm bedroom with layered natural textures", label: "Bedroom" }
    ]
  },
  {
    title: "Clay House",
    location: "Gurugram · 3,400 sq ft",
    note: "The clay-toned walls soften the hard geometry of the architecture, letting daylight do most of the decorating.",
    images: [
      { src: "/images/project-2-entrance.svg", alt: "Clay-toned residential entrance", label: "Arrival" },
      { src: "/images/project-2-living.svg", alt: "Sunlit living room in warm neutral tones", label: "Living room" },
      { src: "/images/project-2-bedroom.svg", alt: "Bedroom with soft linen and warm plaster tones", label: "Bedroom" }
    ]
  },
  {
    title: "The Quiet Office",
    location: "South Delhi · 1,250 sq ft",
    note: "We kept the material language restrained: oak, linen and brushed brass, so the space feels residential without becoming precious.",
    images: [
      { src: "/images/project-3-entrance.svg", alt: "Minimal office reception with oak details", label: "Reception" },
      { src: "/images/project-3-work.svg", alt: "Quiet workspace with timber and soft light", label: "Workroom" },
      { src: "/images/project-3-meeting.svg", alt: "Meeting room with neutral materials", label: "Meeting room" }
    ]
  }
];

export const materials = [
  { id: "marble", name: "Veined marble", note: "Quiet luxury, with a little natural movement.", tone: "#d8d1c5", texture: "/images/material-marble.svg" },
  { id: "jute", name: "Jute", note: "Tactile, grounded and comfortably imperfect.", tone: "#b79e78", texture: "/images/material-jute.svg" },
  { id: "brass", name: "Brushed brass", note: "A warm glint that catches evening light.", tone: "#ad8e58", texture: "/images/material-brass.svg" },
  { id: "oak", name: "White oak", note: "Light, calm and easy to live around.", tone: "#c7a87a", texture: "/images/material-oak.svg" },
  { id: "linen", name: "Natural linen", note: "Softens the room without making it sleepy.", tone: "#d7d0c1", texture: "/images/material-linen.svg" },
  { id: "terrazzo", name: "Terrazzo", note: "A little graphic energy without shouting.", tone: "#aaa294", texture: "/images/material-terrazzo.svg" }
];

export const quizQuestions = [
  {
    id: "mood",
    title: "Which room feels like you?",
    options: [
      { value: "warm-minimal", label: "Warm minimal", image: "/images/quiz-warm-minimal.svg" },
      { value: "earthy", label: "Earthy & collected", image: "/images/quiz-earthy.svg" },
      { value: "quiet-luxe", label: "Quiet luxury", image: "/images/quiz-quiet-luxe.svg" }
    ]
  },
  {
    id: "warmth",
    title: "How warm should the palette feel?",
    options: [
      { value: "pale", label: "Pale & airy", image: "/images/quiz-pale.svg" },
      { value: "balanced", label: "Balanced", image: "/images/quiz-balanced.svg" },
      { value: "deep", label: "Deep & cocooning", image: "/images/quiz-deep.svg" }
    ]
  },
  {
    id: "materials",
    title: "Which material mix would you choose?",
    options: [
      { value: "wood-linen", label: "Oak + linen", image: "/images/quiz-oak-linen.svg" },
      { value: "stone-brass", label: "Stone + brass", image: "/images/quiz-stone-brass.svg" },
      { value: "clay-jute", label: "Clay + jute", image: "/images/quiz-clay-jute.svg" }
    ]
  },
  {
    id: "use",
    title: "How should home work for you?",
    options: [
      { value: "hosting", label: "Hosting often", image: "/images/quiz-hosting.svg" },
      { value: "slow", label: "Slow mornings", image: "/images/quiz-slow.svg" },
      { value: "family", label: "Family life", image: "/images/quiz-family.svg" }
    ]
  },
  {
    id: "budget",
    title: "What range are you planning around?",
    options: [
      { value: "under-10", label: "Under ₹10L", image: "/images/quiz-under-10.svg" },
      { value: "10-20", label: "₹10–20L", image: "/images/quiz-10-20.svg" },
      { value: "20-plus", label: "₹20L+", image: "/images/quiz-20-plus.svg" },
      { value: "unsure", label: "Not sure yet", image: "/images/quiz-unsure.svg" }
    ]
  }
] as const;

export function styleFromAnswers(answers: Record<string, string>) {
  const mood = answers.mood;
  if (mood === "quiet-luxe" || answers.materials === "stone-brass") return "Quiet luxury";
  if (mood === "earthy" || answers.materials === "clay-jute") return "Earthy modern";
  return "Warm minimal";
}

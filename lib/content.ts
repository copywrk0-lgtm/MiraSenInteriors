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
  before: "https://images.pexels.com/photos/39828938/pexels-photo-39828938.jpeg?auto=compress&cs=tinysrgb&w=1800",
  after: "https://images.pexels.com/photos/39828938/pexels-photo-39828938.jpeg?auto=compress&cs=tinysrgb&w=1800",
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
      { src: "https://images.pexels.com/photos/6580222/pexels-photo-6580222.jpeg?auto=compress&cs=tinysrgb&w=1800", alt: "Warm modern living room with timber details", label: "Entrance" },
      { src: "https://images.pexels.com/photos/15409513/pexels-photo-15409513.jpeg?auto=compress&cs=tinysrgb&w=1800", alt: "Warm modern kitchen with timber cabinetry", label: "Living room" },
      { src: "https://images.pexels.com/photos/8146214/pexels-photo-8146214.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Calm bedroom with natural wood furniture", label: "Bedroom" }
    ]
  },
  {
    title: "Clay House",
    location: "Gurugram · 3,400 sq ft",
    note: "The clay-toned walls soften the hard geometry of the architecture, letting daylight do most of the decorating.",
    images: [
      { src: "https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&w=1800", alt: "Minimal contemporary kitchen with warm cabinetry", label: "Arrival" },
      { src: "https://images.pexels.com/photos/8082557/pexels-photo-8082557.jpeg?auto=compress&cs=tinysrgb&w=1800", alt: "Contemporary open-plan living and kitchen interior", label: "Living room" },
      { src: "https://images.pexels.com/photos/8951843/pexels-photo-8951843.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Warm cabin-like bedroom interior with natural materials", label: "Bedroom" }
    ]
  },
  {
    title: "The Quiet Office",
    location: "South Delhi · 1,250 sq ft",
    note: "We kept the material language restrained: oak, linen and brushed brass, so the space feels residential without becoming precious.",
    images: [
      { src: "https://images.pexels.com/photos/15062127/pexels-photo-15062127.jpeg?auto=compress&cs=tinysrgb&w=1800", alt: "Minimal home office with natural light and timber", label: "Reception" },
      { src: "https://images.pexels.com/photos/28461033/pexels-photo-28461033.jpeg?auto=compress&cs=tinysrgb&w=1800", alt: "Modern workspace with green plant and warm details", label: "Workroom" },
      { src: "https://images.pexels.com/photos/4792501/pexels-photo-4792501.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Architectural work materials arranged on a desk", label: "Meeting room" }
    ]
  }
];

export const materials = [
  { id: "marble", name: "Veined marble", note: "Quiet luxury, with a little natural movement.", tone: "#d8d1c5" },
  { id: "jute", name: "Jute", note: "Tactile, grounded and comfortably imperfect.", tone: "#b79e78" },
  { id: "brass", name: "Brushed brass", note: "A warm glint that catches evening light.", tone: "#ad8e58" },
  { id: "oak", name: "White oak", note: "Light, calm and easy to live around.", tone: "#c7a87a" },
  { id: "linen", name: "Natural linen", note: "Softens the room without making it sleepy.", tone: "#d7d0c1" },
  { id: "terrazzo", name: "Terrazzo", note: "A little graphic energy without shouting.", tone: "#aaa294" }
];

export const quizQuestions = [
  {
    id: "mood",
    title: "Which room feels like you?",
    options: [
      { value: "warm-minimal", label: "Warm minimal", image: "https://images.pexels.com/photos/12285892/pexels-photo-12285892.jpeg?auto=compress&cs=tinysrgb&w=1800" },
      { value: "earthy", label: "Earthy & collected", image: "https://images.pexels.com/photos/8135497/pexels-photo-8135497.jpeg?auto=compress&cs=tinysrgb&w=1800" },
      { value: "quiet-luxe", label: "Quiet luxury", image: "https://images.pexels.com/photos/7534563/pexels-photo-7534563.jpeg?auto=compress&cs=tinysrgb&w=1800" }
    ]
  },
  {
    id: "warmth",
    title: "How warm should the palette feel?",
    options: [
      { value: "pale", label: "Pale & airy", image: "https://images.pexels.com/photos/12285892/pexels-photo-12285892.jpeg?auto=compress&cs=tinysrgb&w=1800" },
      { value: "balanced", label: "Balanced", image: "https://images.pexels.com/photos/8135497/pexels-photo-8135497.jpeg?auto=compress&cs=tinysrgb&w=1800" },
      { value: "deep", label: "Deep & cocooning", image: "https://images.pexels.com/photos/7534563/pexels-photo-7534563.jpeg?auto=compress&cs=tinysrgb&w=1800" }
    ]
  },
  {
    id: "materials",
    title: "Which material mix would you choose?",
    options: [
      { value: "wood-linen", label: "Oak + linen", image: "https://images.pexels.com/photos/12285892/pexels-photo-12285892.jpeg?auto=compress&cs=tinysrgb&w=1800" },
      { value: "stone-brass", label: "Stone + brass", image: "https://images.pexels.com/photos/7534563/pexels-photo-7534563.jpeg?auto=compress&cs=tinysrgb&w=1800" },
      { value: "clay-jute", label: "Clay + jute", image: "https://images.pexels.com/photos/8135497/pexels-photo-8135497.jpeg?auto=compress&cs=tinysrgb&w=1800" }
    ]
  },
  {
    id: "use",
    title: "How should home work for you?",
    options: [
      { value: "hosting", label: "Hosting often", image: "https://images.pexels.com/photos/7534563/pexels-photo-7534563.jpeg?auto=compress&cs=tinysrgb&w=1800" },
      { value: "slow", label: "Slow mornings", image: "https://images.pexels.com/photos/12285892/pexels-photo-12285892.jpeg?auto=compress&cs=tinysrgb&w=1800" },
      { value: "family", label: "Family life", image: "https://images.pexels.com/photos/8135497/pexels-photo-8135497.jpeg?auto=compress&cs=tinysrgb&w=1800" }
    ]
  },
  {
    id: "budget",
    title: "What range are you planning around?",
    options: [
      { value: "under-10", label: "Under ₹10L", image: "https://images.pexels.com/photos/12285892/pexels-photo-12285892.jpeg?auto=compress&cs=tinysrgb&w=1800" },
      { value: "10-20", label: "₹10–20L", image: "https://images.pexels.com/photos/8135497/pexels-photo-8135497.jpeg?auto=compress&cs=tinysrgb&w=1800" },
      { value: "20-plus", label: "₹20L+", image: "https://images.pexels.com/photos/7534563/pexels-photo-7534563.jpeg?auto=compress&cs=tinysrgb&w=1800" },
      { value: "unsure", label: "Not sure yet", image: "https://images.pexels.com/photos/12285892/pexels-photo-12285892.jpeg?auto=compress&cs=tinysrgb&w=1800" }
    ]
  }
] as const;

export function styleFromAnswers(answers: Record<string, string>) {
  const mood = answers.mood;
  if (mood === "quiet-luxe" || answers.materials === "stone-brass") return "Quiet luxury";
  if (mood === "earthy" || answers.materials === "clay-jute") return "Earthy modern";
  return "Warm minimal";
}

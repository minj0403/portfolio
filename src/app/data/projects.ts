export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  timeframe: string;
  tags: string[];
  image?: string;
  link?: string;
  featured?: boolean;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "carta-redesign",
    title: "Voice-Enabled Medication Tracker App",
    description:
      "Led end-to-end UX design from needfinding, usability testing, and iterative prototyping and implemented mobile and web front-end interfaces in React Native and Next.js",
    role: "UX/UI Designer",
    timeframe: "2025",
    tags: ["UI/UX", "Figma", "React"],
    featured: true,
    highlights: [
      "Reworked information architecture for the course view",
      "Designed new graphs + review flows",
    ],
    image: "/projects/147.png",
    link: "https://web.stanford.edu/class/cs147/projects/DesigningVoiceAIforEverydayValue/PillPal/", // ← add this
  },
  {
    slug: "xr-grid-authoring",
    title: "Multimodal iPadOS Development",
    description:
      "Built multi-sensory interaction flows using spatialized audio, haptic feedback, and tactile cues and led end-to-end HCI research",
    role: "Front-End / Prototyping",
    timeframe: "2025",
    tags: ["SwiftUI", "UI/UX"],
    featured: true,
    image: "/projects/ipad.jpg",
    link: "https://shape.stanford.edu/", // ← can be internal later
  },
];
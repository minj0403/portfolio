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
  tagColor?: "green" | "blue" | "purple" | "mint";
};

export const projects: Project[] = [
  {
    slug: "pillpal",
    title: "Voice-Enabled Medication Tracker App",
    description:
      "End-to-end product design from needfinding, usability testing, to iterative prototyping and mobile/web front-end implementation",
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
    tagColor: "mint", 
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
    tagColor: "blue", 
  },
  {
    slug: "SUPA-website",
    title: "Stanford Undergraduate Psychology Association Website",
    description:
      "Built end-to-end website from design to implementation to launch",
    role: "Front-End / Prototyping",
    timeframe: "2025",
    tags: ["UI/UX", "Front-end", "Accessibility"],
    featured: true,
    image: "",
    link: "",
    tagColor: "purple",
  },
];
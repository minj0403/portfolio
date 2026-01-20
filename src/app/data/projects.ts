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
    description: "End-to-end product design from needfinding, prototyping, testing, to front-end mobile/web development",
    role: "UX Designer & Mobile App Developer",
    timeframe: "2025",
    tags: ["UI/UX", "Figma", "React"],
    featured: true,
    image: "/projects/pillpalpolaroid.png",
    tagColor: "mint",
  },
  {
    slug: "xr-grid-authoring",
    title: "Multimodal iPadOS Development",
    description: "Led HCI research and built multi-sensory interaction flows using spatialized audio, haptic feedback, and tactile cues",
    role: "HCI Researcher & Mobile App Developer",
    timeframe: "2025",
    tags: ["SwiftUI", "Accessibility"],
    featured: true,
    image: "/projects/shapelabpolaroid.png",
    tagColor: "blue",
  },
  /*!
    {
    slug: "supa-website",
    title: "Stanford Undergraduate Psychology Association Website",
    description: "Designed a website from design to implementation to launch",
    role: "UI Designer & Web Developer",
    timeframe: "2025",
    tags: ["Web Design", "Web Dev", "Front-end"],
    featured: true,
    image: "/projects/supapolaroid.png",
    tagColor: "purple",
  },
  */
];

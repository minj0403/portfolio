export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  timeframe: string;
  tags: string[];
  link?: string;
  featured?: boolean;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "carta-redesign",
    title: "Carta — Course Planning Redesign",
    description:
      "Redesigned key tabs to improve information hierarchy and decision-making with clearer data visuals.",
    role: "UX/UI Designer",
    timeframe: "2025",
    tags: ["UX", "UI", "Figma", "Design Systems"],
    featured: true,
    highlights: [
      "Reworked information architecture for the course view",
      "Designed new graphs + review flows",
    ],
  },
  {
    slug: "xr-grid-authoring",
    title: "XR iPad Authoring Grid",
    description:
      "Rebuilt an authoring interface with a scalable 4×4 grid and sonified quadrants for memory support.",
    role: "Front-End / Prototyping",
    timeframe: "2025",
    tags: ["React", "UX", "Audio", "Prototype"],
    featured: true,
  },
];

export type Experience = {
  org: string;
  role: string;
  timeframe: string;
  location?: string;
  bullets: string[];
  image?: string;
  link?: string;
};

export const experience: Experience[] = [
  {
    org: "Product Designer",
    role: "VP of Events",
    timeframe: "2025-Present",
    location: "Stanford, CA", //tags: ["UX", "UI", "Figma", "Design Systems"]
    bullets: [
      "Designed and refined multi-lecture selection flows, improving clarity and decision-making",
      "Conducted usability analysis and iterative prototyping in Figma, translating user pain points into consistent interfaces.",
    ],
    link: "https://carta-beta.stanford.edu/",
    image: "/exp/carta.png",
  },
  {
    org: "Software Engineer (Data & ML Systems)",
    role: "Research Assistant",
    timeframe: "2025-Present",
    location: "Stanford, CA",
    bullets: [
      "Built JS and Python pipelines to parse and structure task logic from web-based experiments.",
      "Developed LLM-powered systems to infer task logic and generate structured behavioral data.",
    ],
    link: "https://www.poldracklab.org/",
  },
];
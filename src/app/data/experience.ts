export type Experience = {
  org: string;
  role: string;
  timeframe: string;
  location?: string;
  bullets: string[];
  link?: string;
};

export const experience: Experience[] = [
  {
    org: "Stanford XR",
    role: "VP of Events",
    timeframe: "2024–Present",
    location: "Stanford",
    bullets: [
      "Led event programming and partnerships; coordinated cross-team logistics.",
      "Produced hackathon operations and volunteer workflows.",
    ],
    link: "https://xr.stanford.edu/",
  },
  {
    org: "Poldrack Lab",
    role: "Research Assistant",
    timeframe: "2024–Present",
    location: "Stanford",
    bullets: [
      "Built tooling for extracting and structuring task logic from web-based experiments.",
      "Prototyped simulation-friendly representations for cognitive tasks.",
    ],
  },
];

export type DistrictStatus = "live" | "building" | "alpha";

export type District = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  badge: string;
  status: DistrictStatus;
  modules: {
    title: string;
    desc: string;
    bullets: string[];
  }[];
  kpis: {
    label: string;
    value: string;
  }[];
  ops: {
    label: string;
    value: string;
  }[];
};

export const DISTRICTS: District[] = [
  {
    slug: "voltaraoracle",
    name: "VoltaraOracle",
    tagline: "Signals, insights, and the temple of decision-making.",
    description:
      "The intelligence core of the city. Where signal beats noise and decisions are made with clarity instead of chaos.",
    href: "https://voltaraoracle.vercel.app",
    badge: "Core Intelligence",
    status: "live",
    modules: [
      {
        title: "Signal Board",
        desc: "High signal panels with minimal clutter.",
        bullets: [
          "Top opportunities",
          "Momentum alerts",
          "Risk flags",
        ],
      },
      {
        title: "Decision Flow",
        desc: "Observe → Filter → Execute.",
        bullets: [
          "Shortlists",
          "Thesis prompts",
          "Action routing",
        ],
      },
      {
        title: "Proof Layer",
        desc: "Receipts over rhetoric.",
        bullets: [
          "Logs",
          "Milestones",
          "Deployment history",
        ],
      },
    ],
    kpis: [
      { label: "Signal Quality", value: "High" },
      { label: "Clarity", value: "9/10" },
      { label: "Speed", value: "Fast" },
    ],
    ops: [
      { label: "Cadence", value: "Daily scans" },
      { label: "Output", value: "Actionable insights" },
      { label: "North Star", value: "Better decisions" },
    ],
  },

  {
    slug: "bullfinder",
    name: "Bullfinder",
    tagline: "Scan the market. Catch momentum. Strike clean.",
    description:
      "Your market radar district. Built for finding strength early and acting before the herd.",
    href: "https://bullfinder.vercel.app",
    badge: "Market Radar",
    status: "live",
    modules: [
      {
        title: "Momentum Scanner",
        desc: "Fast sweeps across market activity.",
        bullets: [
          "Volume spikes",
          "Trend strength",
          "Clean summaries",
        ],
      },
      {
        title: "Thesis Builder",
        desc: "Turn data into conviction.",
        bullets: [
          "Catalyst notes",
          "Entry logic",
          "Risk outline",
        ],
      },
      {
        title: "Pro Layer",
        desc: "Upgradeable monetization layer.",
        bullets: [
          "Saved alerts",
          "Premium filters",
          "Subscription ready",
        ],
      },
    ],
    kpis: [
      { label: "Coverage", value: "Wide" },
      { label: "Speed", value: "Rapid" },
      { label: "Focus", value: "Momentum" },
    ],
    ops: [
      { label: "Cadence", value: "Morning + Evening" },
      { label: "Output", value: "Trade candidates" },
      { label: "North Star", value: "Momentum capture" },
    ],
  },

  {
    slug: "gaiagauge",
    name: "GaiaGauge",
    tagline: "Stability, clarity, and grounding metrics.",
    description:
      "The calm engine of the city. A grounding district that keeps everything aligned.",
    href: "https://gaiagauge.vercel.app",
    badge: "Balance Layer",
    status: "live",
    modules: [
      {
        title: "Gauge Panels",
        desc: "Instant clarity readouts.",
        bullets: [
          "Stability index",
          "Focus check",
          "Clarity prompts",
        ],
      },
      {
        title: "Proof Room",
        desc: "Show the work. Track consistency.",
        bullets: [
          "Logs",
          "Wins",
          "Milestones",
        ],
      },
      {
        title: "Reset Ritual",
        desc: "Quick recovery loops.",
        bullets: [
          "Breathing prompts",
          "Micro resets",
          "Reflection cues",
        ],
      },
    ],
    kpis: [
      { label: "Calm Index", value: "High" },
      { label: "Consistency", value: "Strong" },
      { label: "Usefulness", value: "Daily" },
    ],
    ops: [
      { label: "Cadence", value: "Anytime access" },
      { label: "Output", value: "Stability boost" },
      { label: "North Star", value: "Sustained clarity" },
    ],
  },

  {
    slug: "voltarareflex",
    name: "VoltaraReflex",
    tagline: "Fast reflections. Sharp loops.",
    description:
      "The feedback district. Iterate clean. Learn fast. Adapt without drama.",
    href: "https://voltarareflex.vercel.app",
    badge: "Feedback Loop",
    status: "live",
    modules: [
      {
        title: "Reflection Cards",
        desc: "Short prompts. Clear insight.",
        bullets: [
          "What worked",
          "What failed",
          "Next move",
        ],
      },
      {
        title: "Loop Builder",
        desc: "Turn reflection into system.",
        bullets: [
          "Triggers",
          "Responses",
          "Rules",
        ],
      },
      {
        title: "Founder Mirror",
        desc: "Brutal honesty layer.",
        bullets: [
          "Bias checks",
          "Momentum checks",
          "Alignment check",
        ],
      },
    ],
    kpis: [
      { label: "Iteration Speed", value: "Fast" },
      { label: "Friction", value: "Low" },
      { label: "Adaptability", value: "High" },
    ],
    ops: [
      { label: "Cadence", value: "Weekly review" },
      { label: "Output", value: "Refined direction" },
      { label: "North Star", value: "Continuous improvement" },
    ],
  },

  {
    slug: "voltaramint",
    name: "VoltaraMint",
    tagline: "Forge artifacts. Mint proof.",
    description:
      "The forge district. From concept to minted artifact with clean execution.",
    href: "https://voltaramint.vercel.app",
    badge: "Forge District",
    status: "alpha",
    modules: [
      {
        title: "Mint Console",
        desc: "Create and deploy artifacts.",
        bullets: [
          "Metadata builder",
          "Supply logic",
          "Mint flow",
        ],
      },
      {
        title: "Asset Pipeline",
        desc: "From idea to IPFS.",
        bullets: [
          "Upload",
          "Preview",
          "CID storage",
        ],
      },
      {
        title: "Proof Ledger",
        desc: "On-chain traceability.",
        bullets: [
          "Tx logs",
          "Mint history",
          "Receipts",
        ],
      },
    ],
    kpis: [
      { label: "Pipeline", value: "Building" },
      { label: "UX", value: "Clean" },
      { label: "Reliability", value: "Improving" },
    ],
    ops: [
      { label: "Cadence", value: "Release cycles" },
      { label: "Output", value: "Minted artifacts" },
      { label: "North Star", value: "Provenance" },
    ],
  },

  {
    slug: "sanctuarysprintv3",
    name: "SanctuarySprintV3",
    tagline: "Structured focus for serious builders.",
    description:
      "The sanctuary district. Small sprints. Real progress. Momentum protected.",
    href: "https://sanctuary-sprint-v3.vercel.app",
    badge: "Sanctuary",
    status: "live",
    modules: [
      {
        title: "Sprint Board",
        desc: "Clear commitments.",
        bullets: [
          "Today",
          "This week",
          "Done list",
        ],
      },
      {
        title: "Energy Guardrails",
        desc: "Prevent burnout.",
        bullets: [
          "Break prompts",
          "Recovery cues",
          "Streak tracking",
        ],
      },
      {
        title: "Ship Ritual",
        desc: "Turn almost into done.",
        bullets: [
          "Deploy checklist",
          "Polish list",
          "Post-ready",
        ],
      },
    ],
    kpis: [
      { label: "Completion Rate", value: "High" },
      { label: "Focus", value: "Strong" },
      { label: "Momentum", value: "Sustained" },
    ],
    ops: [
      { label: "Cadence", value: "Daily" },
      { label: "Output", value: "Shipped blocks" },
      { label: "North Star", value: "Execution" },
    ],
  },

  {
    slug: "creatordrop",
    name: "CreatorDrop",
    tagline: "Drops that feel alive.",
    description:
      "The marketplace district. Discovery, releases, and creator proof-of-work.",
    href: "https://creatordrop.vercel.app",
    badge: "Marketplace",
    status: "building",
    modules: [
      {
        title: "Drop Pages",
        desc: "Launch stage for releases.",
        bullets: [
          "Hero",
          "Story",
          "CTA",
        ],
      },
      {
        title: "Discovery Layer",
        desc: "Browse without friction.",
        bullets: [
          "Tags",
          "Collections",
          "Sort tools",
        ],
      },
      {
        title: "Commerce Layer",
        desc: "Monetization engine.",
        bullets: [
          "Checkout",
          "Gated drops",
          "Subscriptions",
        ],
      },
    ],
    kpis: [
      { label: "MVP", value: "In Progress" },
      { label: "Vibe", value: "Strong" },
      { label: "Potential", value: "Massive" },
    ],
    ops: [
      { label: "Cadence", value: "Build next" },
      { label: "Output", value: "Launch-ready MVP" },
      { label: "North Star", value: "Creator economy" },
    ],
  },
];

export function getDistrict(slug: string) {
  return DISTRICTS.find(
    (d) => d.slug.toLowerCase() === slug.toLowerCase()
  );
}

export function allDistrictSlugs() {
  return DISTRICTS.map((d) => d.slug);
}
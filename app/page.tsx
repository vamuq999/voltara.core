// app/page.tsx
const DISTRICTS = [
  {
    href: "/oracle",
    title: "VoltaraOracle",
    desc: "Signals, insights, and the temple of decision-making.",
    pill: "Core Intelligence",
  },
  {
    href: "/bullfinder",
    title: "Bullfinder",
    desc: "Scan the market. Catch momentum. Strike clean.",
    pill: "Market Radar",
  },
  {
    href: "/gaiagauge",
    title: "GaiaGauge",
    desc: "Stability, clarity, and grounding metrics — the calm engine.",
    pill: "Balance Layer",
  },
  {
    href: "/reflex",
    title: "VoltaraReflex",
    desc: "Fast reflections, sharp loops, and adaptive thinking.",
    pill: "Feedback Loop",
  },
  {
    href: "/mint",
    title: "VoltaraMint",
    desc: "Forge artifacts. Mint proof. Ship visuals with purpose.",
    pill: "Forge District",
  },
  {
    href: "/sanctuary",
    title: "SanctuarySprintV3",
    desc: "Discipline + flow. Small steps, big outcomes.",
    pill: "Sanctuary",
  },
  {
    href: "/creatordrop",
    title: "CreatorDrop",
    desc: "Drop culture. Publish work. Build the creator economy lane.",
    pill: "Marketplace",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="cityHero">
        <div className="cityInner">
          <h1 className="h1">VoltaraCore</h1>
          <p className="sub">
            One city. Many districts. Built for shipping — not stumbling. Pick a portal below and
            move like a founder with a map.
          </p>

          <div className="kpiRow">
            <div className="kpi">
              <strong>7</strong> districts online
            </div>
            <div className="kpi">
              <strong>1</strong> design system
            </div>
            <div className="kpi">
              <strong>0</strong> dark-mode toggles
            </div>
            <div className="kpi">
              <strong>∞</strong> momentum
            </div>
          </div>
        </div>
      </section>

      <section className="cards" aria-label="District portals">
        {DISTRICTS.map((d) => (
          <div key={d.href} className="card">
            <div className="cardInner">
              <h2 className="cardTitle">{d.title}</h2>
              <p className="cardDesc">{d.desc}</p>

              <div className="cardMeta">
                <span className="pill">{d.pill}</span>
                <a className="go" href={d.href}>
                  Enter →
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
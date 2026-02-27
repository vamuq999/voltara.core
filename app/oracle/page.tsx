// app/oracle/page.tsx
export default function OraclePage() {
  return (
    <div>
      <section className="cityHero">
        <div className="cityInner">
          <h1 className="h1">VoltaraOracle</h1>
          <p className="sub">
            Signals, insights, and the temple of decision-making. This is where clarity becomes
            action.
          </p>

          <div className="kpiRow">
            <div className="kpi">
              <strong>Status:</strong> District scaffold online
            </div>
            <div className="kpi">
              <strong>Mode:</strong> Portal / Embed / Native
            </div>
            <div className="kpi">
              <strong>Next:</strong> Connect live Oracle app
            </div>
          </div>
        </div>
      </section>

      <section className="cards" style={{ marginTop: 18 }}>
        <div className="card" style={{ gridColumn: "span 12" }}>
          <div className="cardInner">
            <h2 className="cardTitle">Open the live Oracle (recommended for now)</h2>
            <p className="cardDesc">
              Keep VoltaraCore as the city hub. Each district can either:
              <br />• open the existing .vercel.app build
              <br />• embed it in an iframe (feels like one universe)
              <br />• or be rebuilt natively inside this repo
            </p>

            <div className="cardMeta">
              <span className="pill">Portal</span>
              <a
                className="go"
                href="https://voltaraoracle.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Launch Oracle →
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardInner">
            <h3 className="cardTitle">Embed Mode</h3>
            <p className="cardDesc">
              Want the Oracle to appear inside VoltaraCore? We’ll swap this page to an iframe embed
              next.
            </p>
            <div className="cardMeta">
              <span className="pill">Immersive</span>
              <a className="go" href="#" onClick={(e) => e.preventDefault()}>
                Coming soon →
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardInner">
            <h3 className="cardTitle">Native Mode</h3>
            <p className="cardDesc">
              Rebuild Oracle UI inside this repo later for maximum control and speed.
            </p>
            <div className="cardMeta">
              <span className="pill">Future</span>
              <a className="go" href="#" onClick={(e) => e.preventDefault()}>
                Roadmap →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export const dynamic = "force-static";

export default function OraclePage() {
  return (
    <main className="relative min-h-screen px-6 py-12">
      <div className="v-grid" />
      <div className="v-shimmer" />

      <div className="relative max-w-4xl mx-auto">
        <header className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <h1 className="text-3xl font-semibold tracking-tight">VoltaraOracle</h1>
            </div>
            <p className="mt-2 text-sm v-muted">
              Signals, insights, and the temple of decision-making.
            </p>
          </div>

          <a href="/" className="v-btn text-sm">
            ← Back to City
          </a>
        </header>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="v-card p-6">
            <div className="v-chip inline-block">Core Intelligence</div>
            <h2 className="mt-3 text-lg font-semibold">Signal Engine</h2>
            <p className="mt-2 text-sm v-muted">
              A clean place for market signal, pattern recognition, and next-step clarity.
            </p>
          </div>

          <div className="v-card p-6">
            <div className="v-chip inline-block">Ops</div>
            <h2 className="mt-3 text-lg font-semibold">Decision Console</h2>
            <p className="mt-2 text-sm v-muted">
              Keep the interface minimal. Build the depth behind it.
            </p>
          </div>
        </section>

        <section className="mt-6 v-card p-6">
          <h3 className="text-base font-semibold">Open the live Oracle</h3>
          <p className="mt-2 text-sm v-muted">
            If you want this district to route out to the external app, use the button below.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="v-btn text-sm"
              href="https://voltaraoracle.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Enter Oracle →
            </a>
            <a className="v-btn text-sm" href="mailto:voltaralabs@gmail.com">
              Contact
            </a>
          </div>
        </section>

        <footer className="mt-14 text-xs v-muted">
          Oracle District • v1.0 • static build safe
        </footer>
      </div>
    </main>
  );
}
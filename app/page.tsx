export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-12">
      <div className="v-grid" />
      <div className="v-shimmer" />

      <div className="relative max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              VoltaraCore
            </h1>
            <p className="text-sm v-muted">
              Ecosystem Hub • Build → Finish → Park → Clone
            </p>
          </div>

          <a
            href="mailto:voltaralabs@gmail.com"
            className="v-btn text-sm"
          >
            Contact
          </a>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          <a href="/oracle" className="v-card p-6 block">
            <h2 className="text-xl font-semibold mb-2">
              VoltaraOracle
            </h2>
            <p className="v-muted text-sm">
              Strategic intelligence. Signals. Clarity.
            </p>
          </a>

          <div className="v-card p-6 opacity-70">
            <h2 className="text-xl font-semibold mb-2">
              More Districts Loading
            </h2>
            <p className="v-muted text-sm">
              Bullfinder • GaiaGauge • Reflex • Mint • Sanctuary • CreatorDrop
            </p>
          </div>
        </section>

        <footer className="mt-16 text-xs v-muted">
          © 2026 VoltaraCore
        </footer>
      </div>
    </main>
  );
}
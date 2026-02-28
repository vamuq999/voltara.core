import Link from "next/link";
import type { District } from "@/lib/districts";

function StatusPill({ status }: { status: District["status"] }) {
  const label =
    status === "live" ? "LIVE" : status === "alpha" ? "ALPHA" : "BUILDING";

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider text-white/80">
      <span className="h-2 w-2 rounded-full bg-white/40" />
      {label}
    </span>
  );
}

export default function DistrictShell({
  district,
  backHref = "/",
}: {
  district: District;
  backHref?: string;
}) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-8 md:px-8">
      <div className="flex items-center justify-between gap-4">
        <Link
          href={backHref}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
        >
          ← Back to VoltaraCore
        </Link>
        <StatusPill status={district.status} />
      </div>

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-10">
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
            <span className="h-2 w-2 rounded-full bg-white/40" />
            {district.badge}
          </div>

          <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">
            {district.name}
          </h1>

          <p className="text-base text-white/70 md:text-lg">{district.tagline}</p>

          <p className="max-w-3xl text-sm leading-relaxed text-white/60 md:text-base">
            {district.description}
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href={district.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/15"
            >
              Enter district →
            </a>

            <a
              href={district.href.replace(/\/$/, "")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 hover:bg-white/10"
            >
              Open app in new tab
            </a>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-sm font-bold text-white/80">District KPIs</h2>
          <div className="mt-4 grid gap-3">
            {district.kpis.map((k) => (
              <div
                key={k.label}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="text-sm text-white/70">{k.label}</span>
                <span className="text-sm font-bold text-white">{k.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-sm font-bold text-white/80">Ops Rhythm</h2>
          <div className="mt-4 grid gap-3">
            {district.ops.map((k) => (
              <div
                key={k.label}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="text-sm text-white/70">{k.label}</span>
                <span className="text-sm font-bold text-white">{k.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <h2 className="text-lg font-black text-white">District Modules</h2>
        <p className="mt-1 text-sm text-white/60">
          Buildings you can upgrade without redesigning the whole city.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {district.modules.map((m) => (
            <div
              key={m.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-base font-extrabold text-white">{m.title}</h3>
              <p className="mt-1 text-sm text-white/60">{m.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {m.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 text-center text-xs text-white/45">
        <p>
          Add/modify districts in{" "}
          <span className="font-semibold text-white/60">lib/districts.ts</span>.
        </p>
      </section>
    </main>
  );
}
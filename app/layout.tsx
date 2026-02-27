// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoltaraCore",
  description: "The VoltaraLabs City — one hub, many districts.",
};

const NAV = [
  { href: "/oracle", label: "VoltaraOracle" },
  { href: "/bullfinder", label: "Bullfinder" },
  { href: "/gaiagauge", label: "GaiaGauge" },
  { href: "/reflex", label: "VoltaraReflex" },
  { href: "/mint", label: "VoltaraMint" },
  { href: "/sanctuary", label: "SanctuarySprintV3" },
  { href: "/creatordrop", label: "CreatorDrop" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Ambient layers */}
        <div className="bg-ambient" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />
        <div className="lightning-streaks" aria-hidden="true" />

        <header className="topbar">
          <a className="brand" href="/" aria-label="VoltaraCore Home">
            <span className="brandMark" aria-hidden="true" />
            <span className="brandText">VoltaraCore</span>
            <span className="brandTag">VoltaraLabs City</span>
          </a>

          <nav className="nav" aria-label="District navigation">
            {NAV.map((item) => (
              <a key={item.href} className="navLink" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="topbarRight">
            <a
              className="chromeBtn"
              href="https://voltaracore.vercel.app"
              target="_blank"
              rel="noreferrer"
              title="Production"
            >
              Live
            </a>
          </div>
        </header>

        <main className="main">
          <div className="shell">{children}</div>
        </main>

        <footer className="footer">
          <div className="footerLeft">
            <span className="footerTitle">VoltaraLabs</span>
            <span className="footerDot" aria-hidden="true" />
            <a className="footerLink" href="mailto:voltaralabs@gmail.com">
              voltaralabs@gmail.com
            </a>
          </div>

          <div className="footerRight">
            <span className="footerMini">© {new Date().getFullYear()} VoltaraCore</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
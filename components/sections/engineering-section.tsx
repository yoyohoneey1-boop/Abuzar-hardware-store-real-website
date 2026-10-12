import { Reveal } from "@/components/abuzar/reveal"
import { SectionLabel } from "@/components/abuzar/section-label"
import { engineeringPoints } from "@/lib/abuzar-content"

export function EngineeringSection() {
  return (
    <section
      className="tech-grid relative overflow-hidden border-y border-border bg-card px-5 py-28 md:px-10 md:py-40"
      aria-labelledby="engineering-heading"
    >
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <SectionLabel index="06">Engineering</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="engineering-heading"
              className="mt-8 text-5xl font-medium uppercase leading-[0.92] tracking-[-0.035em] md:text-7xl"
            >
              Precision
              <br />
              engineered.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <ProfileDiagram />
          </Reveal>
        </div>

        <ol className="md:col-span-6 md:col-start-7">
          {engineeringPoints.map((pt, i) => (
            <Reveal as="li" key={pt.number} delay={i * 100} className="group border-t border-border py-8 last:border-b">
              <div className="grid grid-cols-[3rem_1fr] gap-4 md:grid-cols-[5rem_1fr]">
                <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{pt.number}</span>
                <div>
                  <h3 className="text-xl font-medium uppercase tracking-[-0.01em] transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
                    {pt.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{pt.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function ProfileDiagram() {
  return (
    <svg
      viewBox="0 0 320 200"
      className="mt-16 w-full max-w-sm text-muted-foreground"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      role="img"
      aria-label="Schematic section of a frame profile"
    >
      <rect x="60" y="40" width="120" height="120" />
      <rect x="76" y="56" width="88" height="88" strokeDasharray="3 4" />
      <line x1="180" y1="70" x2="260" y2="70" />
      <line x1="180" y1="130" x2="260" y2="130" />
      <rect x="180" y="86" width="80" height="28" className="text-accent" stroke="currentColor" />
      <line x1="60" y1="180" x2="180" y2="180" />
      <line x1="60" y1="175" x2="60" y2="185" />
      <line x1="180" y1="175" x2="180" y2="185" />
      <line x1="40" y1="40" x2="40" y2="160" />
      <line x1="35" y1="40" x2="45" y2="40" />
      <line x1="35" y1="160" x2="45" y2="160" />
      <text x="112" y="196" fill="currentColor" stroke="none" fontSize="8" fontFamily="monospace" letterSpacing="2">
        A
      </text>
      <text x="22" y="104" fill="currentColor" stroke="none" fontSize="8" fontFamily="monospace" letterSpacing="2">
        B
      </text>
      <text x="268" y="103" fill="currentColor" stroke="none" fontSize="8" fontFamily="monospace" letterSpacing="2">
        GLASS
      </text>
    </svg>
  )
}

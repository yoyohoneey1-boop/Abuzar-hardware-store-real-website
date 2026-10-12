import { Reveal } from "@/components/abuzar/reveal"
import { SectionLabel } from "@/components/abuzar/section-label"
import { values } from "@/lib/abuzar-content"

const themes = ["Precision", "Craftsmanship", "Reliability", "Architectural Detail"]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border bg-card" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 py-28 md:grid-cols-12 md:gap-10 md:px-10 md:py-40">
        <div className="md:col-span-7">
          <Reveal>
            <SectionLabel index="09">About ABUZAR</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="about-heading"
              className="mt-8 text-balance text-5xl font-medium uppercase leading-[0.92] tracking-[-0.035em] md:text-7xl"
            >
              The quiet part
              <br />
              of great <span className="text-muted-foreground">architecture.</span>
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col justify-end gap-8 md:col-span-4 md:col-start-9">
          <Reveal delay={200}>
            <p className="text-pretty text-base leading-relaxed text-foreground/80">
              ABUZAR is an aluminium and glass hardware brand. We believe the best hardware is rarely noticed — it
              simply works, aligns and endures, letting materials, light and form take the lead.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="flex flex-wrap gap-2">
              {themes.map((t) => (
                <li
                  key={t}
                  className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 pb-28 md:px-10 md:pb-40">
        <Reveal>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="text-accent">10</span> — Why ABUZAR
          </h3>
        </Reveal>
        <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={(i % 3) * 100} className="group bg-card p-8 md:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{`0${i + 1}`}</span>
                <span
                  className="h-px w-6 bg-foreground/30 transition-all duration-700 group-hover:w-14 group-hover:bg-accent"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-14 text-2xl font-medium uppercase tracking-[-0.02em] md:text-3xl">{v.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

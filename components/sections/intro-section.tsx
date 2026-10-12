import { MediaFrame } from "@/components/abuzar/media-frame"
import { Reveal } from "@/components/abuzar/reveal"
import { SectionLabel } from "@/components/abuzar/section-label"
import { intro } from "@/lib/abuzar-content"

export function IntroSection() {
  return (
    <section className="relative px-5 py-28 md:px-10 md:py-40" aria-labelledby="intro-heading">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <Reveal>
            <SectionLabel index="01">Introduction</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="intro-heading"
              className="mt-10 text-balance text-5xl font-medium uppercase leading-[0.95] tracking-[-0.035em] md:text-7xl lg:text-8xl"
            >
              Precision in
              <br />
              every <span className="text-muted-foreground">detail.</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col justify-end gap-10 md:col-span-4 md:col-start-9">
          <Reveal delay={200}>
            <p className="text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
              ABUZAR supplies aluminium and glass hardware for contemporary architecture — components selected to work
              quietly within doors, windows, partitions and façades, so the architecture remains the focus.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <dl className="grid grid-cols-2 border-t border-border">
              {[
                ["Focus", "Aluminium & Glass"],
                ["Scope", "Doors · Windows · Fittings"],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-border py-4 pr-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{k}</dt>
                  <dd className="mt-2 text-sm">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="md:col-span-8 md:col-start-5" delay={150}>
          <figure>
            <MediaFrame
              media={intro}
              sizes="(min-width: 768px) 66vw, 100vw"
              className="mx-auto aspect-[16/9] w-full max-w-[50%]"
              imageClassName="transition-transform duration-[2s] ease-[var(--ease-architect)] hover:scale-[1.03]"
            />
            <figcaption className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>Detail / Profile & glass junction</span>
              <span>Fig. 01</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Reveal } from "@/components/abuzar/reveal"
import { SectionLabel } from "@/components/abuzar/section-label"
import { materials } from "@/lib/abuzar-content"
import { cn } from "@/lib/utils"

export function MaterialsSection() {
  const [lead, ...rest] = materials

  return (
    <section className="py-28 md:py-36" aria-labelledby="materials-heading">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <SectionLabel index="05">Materials</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2
            id="materials-heading"
            className="mt-8 max-w-4xl text-balance text-4xl font-medium uppercase leading-[0.95] tracking-[-0.03em] md:text-6xl"
          >
            Texture, tolerance <span className="text-muted-foreground">and touch.</span>
          </h2>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-16 w-full max-w-[50%]">
        <figure className="group relative h-[35svh] min-h-[260px] overflow-hidden">
          <Image
            src={lead.image.src}
            alt={lead.image.alt}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-[2.4s] ease-[var(--ease-architect)] group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" aria-hidden="true" />
          <figcaption className="absolute inset-0 mx-auto flex max-w-[1600px] flex-col justify-end px-5 pb-10 md:px-10 md:pb-16">
            <span className="font-mono text-[11px] tracking-[0.22em] text-accent">M—01</span>
            <span className="mt-3 text-5xl font-medium uppercase tracking-[-0.035em] md:text-8xl">{lead.name}</span>
            <span className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/75">{lead.note}</span>
          </figcaption>
        </figure>
      </Reveal>

      <div className="mx-auto mt-px grid max-w-[1200px] gap-6 px-5 pt-6 md:grid-cols-3 md:px-10">
        {rest.map((m, i) => (
          <Reveal key={m.id} delay={i * 120} className={cn(i === 1 && "md:translate-y-16")}>
            <figure className="group">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[70%] overflow-hidden">
                <Image
                  src={m.image.src}
                  alt={m.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1.8s] ease-[var(--ease-architect)] group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-medium uppercase tracking-[-0.01em]">{m.name}</span>
                  <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{`M—0${i + 2}`}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.note}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

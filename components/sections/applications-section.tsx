import Image from "next/image"
import { Reveal } from "@/components/abuzar/reveal"
import { SectionLabel } from "@/components/abuzar/section-label"
import { applications } from "@/lib/abuzar-content"
import { cn } from "@/lib/utils"

const layout = [
  "md:col-span-5 aspect-[4/3]",
  "md:col-span-4 aspect-[4/5] md:aspect-auto",
  "md:col-span-3 aspect-[4/5]",
  "md:col-span-3 aspect-[4/5]",
  "md:col-span-3 aspect-[4/5]",
  "md:col-span-8 aspect-[4/3] md:aspect-[21/9]",
]

export function ApplicationsSection() {
  return (
    <section id="applications" className="scroll-mt-20 px-5 py-28 md:px-10 md:py-36" aria-labelledby="applications-heading">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel index="07">Applications</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2
                id="applications-heading"
                className="mt-8 text-balance text-4xl font-medium uppercase leading-[0.95] tracking-[-0.03em] md:text-6xl"
              >
                Where the hardware belongs.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="flex items-end md:col-span-4 md:col-start-9">
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              From private residences to corporate interiors, ABUZAR hardware is intended for spaces where glass,
              aluminium and light define the architecture.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-4 md:grid-cols-12">
          {applications.map((app, i) => (
            <li key={app.id} className={cn("relative", layout[i])}>
              <Reveal className="group absolute inset-0 overflow-hidden" delay={(i % 3) * 80}>
                <Image
                  src={app.image.src}
                  alt={app.image.alt}
                  fill
                  sizes={i === 5 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                  className="object-cover transition-transform duration-[1.8s] ease-[var(--ease-architect)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
                  <h3 className="text-xl font-medium uppercase tracking-[-0.01em] md:text-2xl">{app.name}</h3>
                  <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{`A—0${i + 1}`}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

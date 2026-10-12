import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/abuzar/reveal"
import { SectionLabel } from "@/components/abuzar/section-label"
import { categories } from "@/lib/abuzar-content"

export function CategoriesSection() {
  return (
    <section id="products" className="scroll-mt-20 px-5 py-28 md:px-10 md:py-36" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="02">Product Ecosystem</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2
                id="categories-heading"
                className="mt-8 text-balance text-4xl font-medium uppercase leading-[0.95] tracking-[-0.03em] md:text-6xl"
              >
                Hardware for every
                <br />
                architectural element.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Six categories covering the components that connect, move and secure contemporary aluminium and glass
              architecture.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-3 bg-transparent sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {categories.map((cat, i) => (
            <li key={cat.id} className="bg-background">
              <Reveal delay={(i % 3) * 100}>
                <Link
                  href="#product-range"
                  className="group relative mx-auto block aspect-[4/5] w-full max-w-[85%] overflow-hidden outline-offset-[-2px]"
                >
                  <Image
                    src={cat.image.src}
                    alt={cat.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-architect)] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/10 transition-opacity duration-700 group-hover:opacity-80"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-3 border border-foreground/0 transition-colors duration-700 group-hover:border-foreground/30"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[11px] tracking-[0.22em] text-accent">{cat.number}</span>
                      <span className="flex size-10 items-center justify-center border border-foreground/30 transition-all duration-500 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                        <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                    <div className="transition-transform duration-700 ease-[var(--ease-architect)] group-hover:-translate-y-1">
                      <h3 className="text-2xl font-medium uppercase tracking-[-0.02em] md:text-3xl">{cat.name}</h3>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/70">{cat.descriptor}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

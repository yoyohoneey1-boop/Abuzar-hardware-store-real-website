import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { MediaFrame } from "@/components/abuzar/media-frame"
import { Reveal } from "@/components/abuzar/reveal"
import { SectionLabel } from "@/components/abuzar/section-label"
import { products } from "@/lib/abuzar-content"

export function ProductGridSection() {
  return (
    <section id="product-range" className="scroll-mt-20 px-5 py-28 md:px-10 md:py-36" aria-labelledby="range-heading">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-6 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="04">Product Range</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2
                id="range-heading"
                className="mt-8 text-4xl font-medium uppercase leading-[0.95] tracking-[-0.03em] md:text-6xl"
              >
                The range.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {`${products.length.toString().padStart(2, "0")} slots / awaiting product photography`}
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-14 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <li key={product.id}>
              <Reveal delay={(i % 3) * 100}>
                <Link href="#contact" className="group block">
                  <MediaFrame
                    media={product.image}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="mx-auto aspect-[4/5] w-full max-w-[50%] border border-border transition-colors duration-500 group-hover:border-foreground/30"
                    imageClassName="object-contain p-8 transition-transform duration-[1.4s] group-hover:scale-105"
                    placeholderLabel="Product image"
                  />
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">{product.category}</p>
                      <h3 className="mt-2 text-lg font-medium uppercase tracking-[-0.01em]">
                        {product.name ?? <span className="text-muted-foreground">Product name pending</span>}
                      </h3>
                      {product.descriptor && (
                        <p className="mt-1 text-sm text-muted-foreground">{product.descriptor}</p>
                      )}
                      {product.code && (
                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          {product.code}
                        </p>
                      )}
                    </div>
                    <ArrowUpRight
                      className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                      aria-hidden="true"
                    />
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

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { MediaFrame } from "@/components/abuzar/media-frame"
import { Reveal } from "@/components/abuzar/reveal"
import { SectionLabel } from "@/components/abuzar/section-label"
import { featuredProduct } from "@/lib/abuzar-content"

export function ProductShowcaseSection() {
  const product = featuredProduct

  return (
    <section className="border-y border-border bg-card px-5 py-28 md:px-10 md:py-36" aria-labelledby="featured-heading">
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7">
          <div className="relative">
            <MediaFrame
              media={product.image}
              sizes="(min-width: 768px) 58vw, 100vw"
              className="mx-auto aspect-square w-full max-w-[50%] bg-background shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] md:aspect-[5/4]"
              imageClassName="object-contain p-10"
              placeholderLabel="Featured product image"
            />
            <div
              className="pointer-events-none absolute inset-x-[15%] -bottom-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>

        <div className="md:col-span-4 md:col-start-9">
          <Reveal>
            <SectionLabel index="03">Featured Product</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{product.category}</p>
            <h2
              id="featured-heading"
              className="mt-4 text-balance text-4xl font-medium uppercase leading-[0.95] tracking-[-0.03em] md:text-5xl"
            >
              {product.name ?? "Product name pending"}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
              {product.descriptor ??
                "This space is reserved for an ABUZAR hero product. Supply the product photograph, name and description to present it here."}
            </p>
            {product.code && (
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/60">
                Code / {product.code}
              </p>
            )}
            <Link
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 border-b border-foreground/40 pb-2 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors hover:border-accent hover:text-accent"
            >
              Explore Product
              <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

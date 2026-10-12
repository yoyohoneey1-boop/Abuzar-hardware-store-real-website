"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { hero } from "@/lib/abuzar-content"

const headline = ["Engineered for", "modern architecture."]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollable = window.innerHeight * 1.6
      setProgress(Math.max(0, Math.min(1, -rect.top / scrollable)))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const textOpacity = Math.max(0, 1 - progress / 0.22)
  const p = Math.max(0, Math.min(1, (progress - 0.22) / 0.78))

  const centerWidth = 100 - p * 54
  const centerHeight = 100 - p * 26
  const sideWidth = p * 23
  const radius = p * 2
  const gap = p * 12

  const left = hero.side.slice(0, 2)
  const right = hero.side.slice(2)

  return (
    <section ref={sectionRef} id="top" className="relative bg-background" aria-label="Introduction">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{ gap, padding: p * 16, paddingTop: p * 80 }}
        >
          <SideColumn images={left} width={sideWidth} translate={-100 + p * 100} opacity={p} gap={gap} radius={radius} />

          <div
            className="relative shrink-0 overflow-hidden"
            style={{ width: `${centerWidth}%`, height: `${centerHeight}%`, borderRadius: radius }}
          >
            {hero.video ? (
              <video
                className="absolute inset-0 size-full object-cover"
                src={hero.video}
                poster={hero.main.src ?? undefined}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
            ) : (
              <Image
                src={hero.main.src ?? "/placeholder.svg"}
                alt={hero.main.alt}
                fill
                priority
                sizes="100vw"
                className="animate-fade-in object-cover"
                style={{ transform: `scale(${1.06 - p * 0.06})` }}
              />
            )}

            <div
              className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30"
              style={{ opacity: textOpacity }}
              aria-hidden="true"
            />
            <div
              className="tech-grid absolute inset-0 opacity-40"
              style={{ opacity: textOpacity * 0.4 }}
              aria-hidden="true"
            />

            <div
              className="absolute inset-0 flex flex-col justify-between px-5 pb-8 pt-24 md:px-10 md:pb-10 md:pt-32"
              style={{ opacity: textOpacity, pointerEvents: textOpacity < 0.1 ? "none" : "auto" }}
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70">
                <span className="animate-fade-in">
                  <span className="text-accent">Architectural Hardware</span> / 01
                </span>
                <span className="hidden animate-fade-in md:inline">Aluminium · Glass · Steel</span>
              </div>

              <div className="flex flex-col gap-8 md:gap-10">
                <h1 className="max-w-[16ch] text-[10.5vw] font-medium uppercase leading-[0.9] tracking-[-0.04em] text-foreground md:text-[7.2vw]">
                  {headline.map((line, i) => (
                    <span key={line} className="block overflow-hidden pb-[0.04em]">
                      <span className="animate-rise block" style={{ animationDelay: `${150 + i * 120}ms` }}>
                        {line}
                      </span>
                    </span>
                  ))}
                </h1>

                <div className="flex flex-col gap-8 border-t border-foreground/20 pt-6 md:flex-row md:items-end md:justify-between">
                  <p
                    className="max-w-md animate-fade-in text-pretty text-sm leading-relaxed text-foreground/80 md:text-base"
                    style={{ animationDelay: "500ms" }}
                  >
                    Premium aluminium and glass hardware solutions designed for modern architectural environments,
                    demanding installations and refined spaces.
                  </p>
                  <div className="flex animate-fade-in flex-wrap gap-3" style={{ animationDelay: "650ms" }}>
                    <Link
                      href="#products"
                      className="group inline-flex items-center gap-3 bg-foreground px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-accent"
                    >
                      Explore Products
                      <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="#projects"
                      className="inline-flex items-center border border-foreground/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-foreground"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>

                <ul className="hidden gap-10 font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/55 md:flex">
                  {["Precision", "Material", "Performance"].map((m, i) => (
                    <li key={m} className="flex items-center gap-2">
                      <span className="text-accent">{`0${i + 1}`}</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <SideColumn images={right} width={sideWidth} translate={100 - p * 100} opacity={p} gap={gap} radius={radius} />
        </div>
      </div>

      <div className="h-[160vh]" aria-hidden="true" />
    </section>
  )
}

function SideColumn({
  images,
  width,
  translate,
  opacity,
  gap,
  radius,
}: {
  images: typeof hero.side
  width: number
  translate: number
  opacity: number
  gap: number
  radius: number
}) {
  return (
    <div
      className="flex h-[74%] flex-col will-change-transform"
      style={{ width: `${width}%`, gap, opacity, transform: `translateX(${translate}%)` }}
      aria-hidden={opacity < 0.05}
    >
      {images.map((img) => (
        <div key={img.src} className="relative flex-1 overflow-hidden" style={{ borderRadius: radius }}>
          <Image src={img.src ?? "/placeholder.svg"} alt={img.alt} fill sizes="25vw" className="object-cover" />
        </div>
      ))}
    </div>
  )
}

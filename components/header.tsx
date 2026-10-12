"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { navigation } from "@/lib/abuzar-content"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10"
      >
        <Link href="#top" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="text-lg font-semibold tracking-[0.32em] text-foreground md:text-xl">ABUZAR</span>
          <span className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
            Aluminium & Glass Hardware
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/75 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-500 hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden border border-foreground/30 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background md:inline-flex"
        >
          Project Inquiry
        </Link>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {navigation.map((item, i) => (
              <li key={item.href} className="border-b border-border last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 text-2xl font-medium tracking-tight"
                >
                  <span className="font-mono text-[11px] text-accent">{`0${i + 1}`}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

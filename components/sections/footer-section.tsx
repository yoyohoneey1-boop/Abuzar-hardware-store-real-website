import Link from "next/link"
import { contact, navigation } from "@/lib/abuzar-content"

export function FooterSection() {
  const details = [
    contact.phone && { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    contact.email && { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    contact.address && { label: "Address", value: contact.address },
  ].filter(Boolean) as { label: string; value: string; href?: string }[]

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-5 pt-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-2xl font-semibold tracking-[0.32em]">ABUZAR</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Aluminium & Glass Hardware
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Navigate</p>
            <ul className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground/80 transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {(details.length > 0 || contact.socials.length > 0) && (
            <div className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Contact</p>
              <ul className="mt-5 flex flex-col gap-3 text-sm text-foreground/80">
                {details.map((d) => (
                  <li key={d.label}>
                    {d.href ? (
                      <a href={d.href} className="transition-colors hover:text-accent">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </li>
                ))}
                {contact.socials.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p
          className="mt-20 select-none text-center text-[22vw] font-semibold leading-[0.75] tracking-[-0.05em] text-foreground/[0.06]"
          aria-hidden="true"
        >
          ABUZAR
        </p>

        <div className="flex flex-col gap-2 border-t border-border py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:flex-row md:justify-between">
          <span>{`© ${new Date().getFullYear()} ABUZAR`}</span>
          <span>Precision · Material · Performance</span>
        </div>
      </div>
    </footer>
  )
}

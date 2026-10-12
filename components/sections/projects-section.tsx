import { MediaFrame } from "@/components/abuzar/media-frame"
import { Reveal } from "@/components/abuzar/reveal"
import { SectionLabel } from "@/components/abuzar/section-label"
import { projects } from "@/lib/abuzar-content"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border px-5 py-28 md:px-10 md:py-36"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionLabel index="08">Projects</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2
            id="projects-heading"
            className="mt-8 text-4xl font-medium uppercase leading-[0.95] tracking-[-0.03em] md:text-6xl"
          >
            Selected work.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-28 md:gap-40">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1
            return (
              <article key={project.id} className="grid items-end gap-8 md:grid-cols-12 md:gap-10">
                <Reveal className={cn("md:col-span-8", reversed && "md:order-2 md:col-start-5")}>
                  <MediaFrame
                    media={project.image}
                    sizes="(min-width: 768px) 66vw, 100vw"
                    className="mx-auto aspect-[4/3] w-full max-w-[50%] md:aspect-[16/10]"
                    placeholderLabel="Project image"
                  />
                </Reveal>
                <Reveal
                  delay={150}
                  className={cn("md:col-span-4", reversed && "md:order-1 md:col-start-1 md:row-start-1")}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{project.number}</p>
                  <h3 className="mt-4 text-3xl font-medium uppercase leading-none tracking-[-0.025em] md:text-4xl">
                    {project.name ?? <span className="text-muted-foreground">Project name pending</span>}
                  </h3>
                  <dl className="mt-8 border-t border-border">
                    {(
                      [
                        ["Type", project.type],
                        ["Location", project.location],
                      ] as const
                    )
                      .filter(([, v]) => v)
                      .map(([k, v]) => (
                        <div key={k} className="flex justify-between border-b border-border py-3 text-sm">
                          <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                  </dl>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    {project.description ??
                      "Placeholder — replace with a real ABUZAR project: image, name, type, location and a short description."}
                  </p>
                </Reveal>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

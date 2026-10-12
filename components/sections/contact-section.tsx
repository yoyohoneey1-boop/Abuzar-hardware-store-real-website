"use client"

import { useActionState } from "react"
import { ArrowRight } from "lucide-react"
import { submitInquiry, type InquiryState } from "@/app/actions"
import { Reveal } from "@/components/abuzar/reveal"
import { SectionLabel } from "@/components/abuzar/section-label"
import { projectTypes } from "@/lib/abuzar-content"
import { cn } from "@/lib/utils"

const initial: InquiryState = { status: "idle" }

const inputClass =
  "w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none focus:ring-0"

export function ContactSection() {
  const [state, action, pending] = useActionState(submitInquiry, initial)

  return (
    <section id="contact" className="scroll-mt-20 px-5 py-28 md:px-10 md:py-40" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <SectionLabel index="11">Project Inquiry</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="contact-heading"
              className="mt-8 text-balance text-5xl font-medium uppercase leading-[0.92] tracking-[-0.035em] md:text-7xl"
            >
              Let&apos;s build something precise.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Share a few details about your project and the hardware you&apos;re considering. We&apos;ll get back to
              you to discuss the right solution.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="md:col-span-6 md:col-start-7">
          {state.status === "success" ? (
            <div className="flex min-h-[420px] flex-col justify-center border-t border-border pt-10" role="status">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Inquiry sent</p>
              <p className="mt-4 text-3xl font-medium uppercase tracking-[-0.02em]">{state.message}</p>
            </div>
          ) : (
            <form action={action} noValidate className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              <Field label="Name" name="name" autoComplete="name" required error={state.errors?.name} />
              <Field label="Company" name="company" autoComplete="organization" />
              <Field label="Email" name="email" type="email" autoComplete="email" required error={state.errors?.email} />
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" />

              <div className="sm:col-span-2">
                <Label htmlFor="projectType" required>
                  Project Type
                </Label>
                <select
                  id="projectType"
                  name="projectType"
                  defaultValue=""
                  required
                  aria-invalid={!!state.errors?.projectType}
                  aria-describedby={state.errors?.projectType ? "projectType-error" : undefined}
                  className={cn(inputClass, "appearance-none")}
                >
                  <option value="" disabled className="bg-background">
                    Select a project type
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-background">
                      {t}
                    </option>
                  ))}
                </select>
                <FieldError id="projectType-error" message={state.errors?.projectType} />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="message" required>
                  Message
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Project scope, location, hardware of interest…"
                  aria-invalid={!!state.errors?.message}
                  aria-describedby={state.errors?.message ? "message-error" : undefined}
                  className={cn(inputClass, "resize-none")}
                />
                <FieldError id="message-error" message={state.errors?.message} />
              </div>

              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground" aria-live="polite">
                  {state.status === "error" ? state.message : "Fields marked * are required."}
                </p>
                <button
                  type="submit"
                  disabled={pending}
                  className="group inline-flex items-center justify-center gap-3 bg-foreground px-8 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-accent disabled:opacity-60"
                >
                  {pending ? "Sending…" : "Send Inquiry"}
                  <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Label({ htmlFor, required, children }: { htmlFor: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
      {children}
      {required && <span className="text-accent"> *</span>}
    </label>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-2 text-xs text-destructive">
      {message}
    </p>
  )
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
  error,
}: {
  label: string
  name: string
  type?: string
  autoComplete?: string
  required?: boolean
  error?: string
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputClass}
      />
      <FieldError id={`${name}-error`} message={error} />
    </div>
  )
}

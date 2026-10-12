"use server"

import { projectTypes } from "@/lib/abuzar-content"

export type InquiryState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Partial<Record<"name" | "email" | "projectType" | "message", string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  const field = (key: string, max: number) => String(formData.get(key) ?? "").trim().slice(0, max)

  const data = {
    name: field("name", 120),
    company: field("company", 160),
    email: field("email", 200),
    phone: field("phone", 40),
    projectType: field("projectType", 60),
    message: field("message", 4000),
  }

  const errors: InquiryState["errors"] = {}
  if (!data.name) errors.name = "Please enter your name."
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email."
  if (!(projectTypes as readonly string[]).includes(data.projectType)) errors.projectType = "Select a project type."
  if (data.message.length < 10) errors.message = "Tell us a little more about the project."

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, message: "Please review the highlighted fields." }
  }

  // TODO: connect delivery (e.g. Resend email or a database) — inquiries are only validated for now.
  return { status: "success", message: "Thank you. Your inquiry has been received." }
}

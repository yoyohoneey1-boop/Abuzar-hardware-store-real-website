import { NextResponse } from "next/server"

const siteKnowledge = `You are the ABUZAR website assistant for a Pakistan-based aluminium and glass hardware business. Be warm, professional, concise, and helpful. You may answer in English, Urdu, or Roman Urdu matching the customer's language. Pakistan context: prices may be in PKR; shipping, COD, warranty, stock, delivery times, and city coverage are not confirmed unless the business owner configures them. Never invent prices, stock, warranties, delivery dates, discounts, certifications, or technical specifications. Ask which city and which product they need. For a quote, ask for product type, quantity, dimensions/specifications if relevant, city, and a phone/email contact they choose to share. For current products, ask them to browse the Shopify catalogue if connected. If unsure, say the team needs to confirm and direct them to the Contact section. Do not ask for passwords, card details, or OTPs.`

const fallback = (message: string) => {
  const m = message.toLowerCase()
  if (/price|cost|rate|qeemat|قیمت|kitny|kitne|how much/.test(m)) return "Price product, size, finish aur quantity par depend kar sakti hai. Aap ko kis hardware ki zaroorat hai, kitni quantity aur Pakistan mein kis city mein delivery chahiye? Team exact quote confirm kar sakti hai."
  if (/deliver|shipping|courier|delivery|cod|cash on delivery|bhej|dispatch/.test(m)) return "Delivery aur payment options city aur product ke mutabiq confirm karne honge. Aap apni city aur required product bata dein; hum aap ko sahi details lene mein guide karte hain."
  if (/warranty|guarantee|return|exchange/.test(m)) return "Warranty, return aur exchange terms product ke hisaab se confirm karni hongi. Main unverified promise nahi karna chahta—please product ka naam share karein ya Contact section se team se confirmation lein."
  if (/hello|hi|salam|assalam|aoa|hey/.test(m)) return "Assalam-o-alaikum! Welcome to ABUZAR. Main aluminium aur glass hardware ke bare mein guide kar sakta hoon. Aap ko kis product ki zaroorat hai aur aap Pakistan ke kis city se hain?"
  if (/product|catalog|catalogue|handle|hinge|lock|glass|aluminium|window|door/.test(m)) return "Zaroor. Aap kis type ka hardware dhoond rahe hain—handles, hinges, locks, glass fittings ya aluminium/window hardware? Agar size, finish ya quantity pata hai to woh bhi share karein."
  return "Main aap ki madad kar sakta hoon. Apna required product, quantity aur city (Pakistan) bata dein. Prices, stock aur delivery details team se confirm karna zaroori hai, is liye main unhein guess nahi karunga."
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const messages = Array.isArray(body.messages) ? body.messages.slice(-8) : []
    const last = messages.filter((m: any) => m?.role === "user").at(-1)?.content
    if (typeof last !== "string" || !last.trim() || last.length > 1500) return NextResponse.json({ reply: "Please apna sawal short message mein bhejein." }, { status: 400 })
    const key = process.env.OPENAI_API_KEY
    if (!key) return NextResponse.json({ reply: fallback(last), mode: "faq" })
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-4o-mini", temperature: 0.3, max_tokens: 260, messages: [{ role: "system", content: siteKnowledge }, ...messages.map((m: any) => ({ role: m.role === "assistant" ? "assistant" : "user", content: String(m.content).slice(0, 1500) }))] }),
    })
    if (!response.ok) return NextResponse.json({ reply: fallback(last), mode: "faq" })
    const data = await response.json()
    return NextResponse.json({ reply: data.choices?.[0]?.message?.content || fallback(last), mode: "ai" })
  } catch {
    return NextResponse.json({ reply: "Maazrat, chat abhi connect nahi ho pa rahi. Please Contact section se team ko message karein." }, { status: 500 })
  }
}

"use client"
import { FormEvent, useEffect, useRef, useState } from "react"
import { MessageCircle, X, Send, Bot, Minimize2 } from "lucide-react"
type Message = { role: "user" | "assistant"; content: string }
const starters = ["Product prices?", "Delivery in Pakistan?", "I need a quote"]
export function AIChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [busy, setBusy] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: "Assalam-o-alaikum! Welcome to ABUZAR. I can help with aluminium and glass hardware. Aap ko kis product ki zaroorat hai, aur aap kis city se hain?" }])
  const bottom = useRef<HTMLDivElement>(null)
  useEffect(() => { bottom.current?.scrollIntoView({ behavior: "smooth" }) }, [messages, open])
  async function send(text = input) {
    const content = text.trim(); if (!content || busy) return
    const next = [...messages, { role: "user" as const, content }]; setMessages(next); setInput(""); setBusy(true)
    try { const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next }) }); const data = await res.json(); setMessages(prev => [...prev, { role: "assistant", content: data.reply || "Please contact our team for assistance." }]) }
    catch { setMessages(prev => [...prev, { role: "assistant", content: "Connection issue. Please try again or use the Contact section." }]) }
    finally { setBusy(false) }
  }
  function submit(e: FormEvent) { e.preventDefault(); void send() }
  return <div className="ai-chat-root">
    {open && <section className="ai-chat-panel" aria-label="ABUZAR customer support chat">
      <header className="ai-chat-header"><span className="ai-chat-avatar"><Bot size={20}/></span><div><strong>ABUZAR Assistant</strong><small><i/> Customer guidance · Pakistan</small></div><button aria-label="Minimize chat" onClick={() => setOpen(false)}><Minimize2 size={18}/></button><button aria-label="Close chat" onClick={() => setOpen(false)}><X size={19}/></button></header>
      <div className="ai-chat-messages">{messages.map((m, i) => <div key={i} className={`ai-chat-message ${m.role}`}>{m.content}</div>)}{busy && <div className="ai-chat-message assistant">Typing…</div>}<div ref={bottom}/></div>
      {messages.length === 1 && <div className="ai-chat-starters">{starters.map(s => <button key={s} onClick={() => void send(s)}>{s}</button>)}</div>}
      <form className="ai-chat-form" onSubmit={submit}><input value={input} onChange={e => setInput(e.target.value)} placeholder="Write your message…" maxLength={1500} aria-label="Message"/><button disabled={busy || !input.trim()} aria-label="Send message"><Send size={17}/></button></form><p className="ai-chat-disclaimer">Prices, stock and delivery are confirmed by our team.</p>
    </section>}
    <button className={`ai-chat-launcher ${open ? "is-open" : ""}`} aria-label={open ? "Close chat" : "Chat with ABUZAR"} onClick={() => setOpen(v => !v)}>{open ? <X size={23}/> : <><MessageCircle size={23}/><span>Chat with us</span></>}</button>
  </div>
}

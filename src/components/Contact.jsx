import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"
      const res = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (!res.ok) throw new Error("Failed to send")
      setStatus("Thanks — we’ll get back to you shortly.")
      e.target.reset()
    } catch (err) {
      setStatus("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="relative py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Start a project</h2>
          <p className="mt-3 text-slate-300">Tell us about your challenge. We’ll respond within 1 business day.</p>
        </div>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
          <input name="name" placeholder="Your name" required className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500" />
          <input name="email" type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500" />
          <textarea name="message" placeholder="What are you building?" rows="5" required className="md:col-span-2 w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="px-6 py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold shadow shadow-amber-500/30 transition-colors">Send</button>
            {status && <span className="text-slate-300 text-sm">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

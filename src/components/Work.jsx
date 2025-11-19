export default function Work() {
  const items = [
    {
      name: "Mjolnir API",
      desc: "Ultra-low latency trading engine scaling to millions of events per second.",
    },
    {
      name: "Bifrost Cloud",
      desc: "Multi-region edge deployment platform with zero-downtime rollouts.",
    },
    {
      name: "Gjallarhorn Analytics",
      desc: "Real-time telemetry and observability suite for mission-critical apps.",
    },
  ]

  return (
    <section id="work" className="relative py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Recent work</h2>
          <p className="mt-3 text-slate-300">A few artifacts from the forge.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.name} className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="p-6">
                <h3 className="text-white font-semibold">{it.name}</h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

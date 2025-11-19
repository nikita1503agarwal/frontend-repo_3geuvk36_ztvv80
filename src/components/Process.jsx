export default function Process() {
  const steps = [
    { n: 1, t: "Discovery", d: "We align on goals, constraints, and success metrics." },
    { n: 2, t: "Blueprint", d: "Architecture and delivery plan designed for longevity." },
    { n: 3, t: "Forge", d: "We build iteratively with tight feedback loops." },
    { n: 4, t: "Trial by Fire", d: "Performance, security, and resilience testing." },
    { n: 5, t: "Launch", d: "Stable rollout with observability and guardrails." },
  ]

  return (
    <section id="process" className="relative py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Our process</h2>
          <p className="mt-3 text-slate-300">A proven path from spark to steel.</p>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map(s => (
            <li key={s.n} className="rounded-xl p-6 bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-md bg-amber-500 text-slate-900 font-black flex items-center justify-center">{s.n}</div>
              <h3 className="mt-4 text-white font-semibold">{s.t}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

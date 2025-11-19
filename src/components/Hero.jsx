import { ArrowRight, Shield, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(245,158,11,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(245,158,11,0.1),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-amber-200 text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Forged with precision. Built to endure.
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Nidavellier — The Dwarven Forge of Software
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              We craft battle-tested applications worthy of legends — from lightning-fast APIs to resilient platforms. If it needs to scale, endure, and shine, we forge it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold shadow shadow-amber-500/30 transition-colors">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 text-slate-100 border border-white/10 transition-colors">
                See our work
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Feature icon={<Shield className="h-5 w-5" />} title="Security-first" />
              <Feature icon={<span className="font-black">∞</span>} title="Built to scale" />
              <Feature icon={<span className="font-black">⚡</span>} title="Performance tuned" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl shadow-amber-500/10 p-6">
              <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-slate-800/60 border border-white/10" />
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-amber-500/20 blur-2xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-3 text-slate-200">
      <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm">{title}</span>
    </div>
  )
}

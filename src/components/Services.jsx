import { Cpu, Boxes, Globe, ShieldCheck, Code2, Server } from "lucide-react"

const services = [
  {
    icon: Cpu,
    title: "Product Engineering",
    desc: "End-to-end product design and development from concept to launch.",
  },
  {
    icon: Server,
    title: "Cloud & APIs",
    desc: "High-availability APIs, microservices, and cloud-native infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "Security-first approach, audits, and regulatory compliance baked in.",
  },
  {
    icon: Boxes,
    title: "Data Platforms",
    desc: "Event-driven pipelines, analytics, and scalable data stores.",
  },
  {
    icon: Code2,
    title: "Team Augmentation",
    desc: "Senior engineers embedded with your team to accelerate delivery.",
  },
  {
    icon: Globe,
    title: "Web & Mobile",
    desc: "Fast, accessible experiences across web, iOS, and Android.",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white">What we forge</h2>
          <p className="mt-3 text-slate-300">Specialized capabilities for products that must endure.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl p-6 bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-amber-400 to-amber-600 text-slate-900 flex items-center justify-center shadow shadow-amber-500/20">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

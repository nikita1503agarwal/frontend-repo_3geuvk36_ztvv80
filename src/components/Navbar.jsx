import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-700 ring-1 ring-white/10 shadow-lg shadow-amber-500/20 flex items-center justify-center">
              <span className="text-slate-900 font-black">N</span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-wide">Nidavellier</div>
              <div className="text-xs text-amber-300/80 tracking-widest uppercase">Software Forge</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-slate-300 hover:text-white transition-colors">Work</a>
            <a href="#process" className="text-slate-300 hover:text-white transition-colors">Process</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-amber-500/90 hover:bg-amber-400 text-slate-900 font-semibold shadow shadow-amber-500/20 transition-colors">Start a Project</a>
          </nav>
          <button className="md:hidden text-slate-200" aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  )
}

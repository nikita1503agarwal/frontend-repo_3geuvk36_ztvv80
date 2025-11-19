export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Nidavellier. Crafted with care in the forge.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
          <a href="#work" className="text-slate-300 hover:text-white transition-colors">Work</a>
          <a href="#process" className="text-slate-300 hover:text-white transition-colors">Process</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

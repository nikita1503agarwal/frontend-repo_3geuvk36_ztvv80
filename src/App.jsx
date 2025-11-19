import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Work from "./components/Work"
import Process from "./components/Process"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

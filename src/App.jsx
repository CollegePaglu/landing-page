import Hero from './components/Hero'
import PhoneShowcase from './components/PhoneShowcase'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

import './index.css'

function App() {
  return (
    <>
      {/* Hero Section - Sticky base for overlay effect */}
      <section className="hero-sticky-base">
        <Hero />
      </section>

      {/* Phone Showcase - Overlays on top of Hero with rounded corners */}
      <section className="showcase-overlay">
        <PhoneShowcase />
      </section>

      {/* Rest of sections - Normal flow with solid backgrounds */}
      <div className="main-content">
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  )
}

export default App

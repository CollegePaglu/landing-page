import { useEffect } from 'react'
import Hero from './components/Hero'
import PhoneShowcase from './components/PhoneShowcase'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AdminDashboard from './components/AdminDashboard'
import LegalPage from './components/LegalPage'
import DeleteAccountPage from './components/DeleteAccountPage'

import './index.css'

function App() {
  // Track page visit (fire-and-forget)
  useEffect(() => {
    if (window.location.pathname !== '/response/form/analysis') {
      fetch('/api/track-visit', { method: 'POST' }).catch(() => { })
    }
  }, [])

  // Admin dashboard route
  if (window.location.pathname === '/response/form/analysis') {
    return <AdminDashboard />
  }

  // Legal page route (combined Terms & Privacy)
  if (window.location.pathname === '/legal' ||
    window.location.pathname === '/terms' ||
    window.location.pathname === '/privacy') {
    return <LegalPage />
  }

  // Delete Account Page route
  if (window.location.pathname === '/delete-account') {
    return <DeleteAccountPage />
  }

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


import Navbar from './components/Navbar'
import DashboardMockup from './components/DashboardMockup'
import TrustedBy from './components/TrustedBy'
import Benefits from './components/Benefits'
import Specifications from './components/Specifications'
import HowTo from './components/HowTo'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <main className="pt-16">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8">
          {/* Hero Headline */}
          <h1
            className="text-[clamp(2.5rem,9vw,7rem)] font-black leading-none tracking-tight text-stone-900 mb-8 sm:mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Browse everything.
          </h1>

          {/* Dashboard Mockup */}
          <div className="relative px-2 sm:px-8">
            <DashboardMockup />
          </div>
        </section>

        {/* Trusted By */}
        <div className="mt-6">
          <TrustedBy />
        </div>

        {/* Benefits */}
        <Benefits />

        {/* Specifications */}
        <Specifications />

        {/* How-to */}
        <HowTo />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

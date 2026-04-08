export default function Footer() {
  const currentYear = 2025

  return (
    <footer id="contact-us" className="bg-white">
      {/* Connect Header Section */}
      <div className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 font-serif" 
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Connect with us
        </h2>
        <p className="text-stone-500 max-w-md mx-auto leading-relaxed text-[1.05rem]">
          Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
        </p>
        <div className="pt-4 sm:pt-6">
          <a 
            href="https://chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-10 sm:px-12 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all inline-flex items-center gap-2 mx-auto shadow-xl"
            style={{ backgroundColor: '#4a5534' }}
          >
            Learn More <span className="opacity-70">↗</span>
          </a>
        </div>
      </div>

      {/* Footer Navigation & Legal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-stone-100">
        <div className="py-8 sm:py-12 flex flex-wrap items-center gap-6 sm:gap-12">
          {['Benefits', 'Specifications', 'How-to'].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-stone-900 font-bold uppercase tracking-tight text-[0.95rem] hover:opacity-70 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="py-8 sm:py-12 border-t border-stone-50 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
          <div className="flex items-center gap-6">
            {/* Custom Stick Figure Icon */}
            <svg 
              width="24" 
              height="36" 
              viewBox="0 0 24 36" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-stone-900"
            >
              {/* Head */}
              <rect x="10" y="2" width="4" height="4" fill="currentColor"/>
              {/* Torso */}
              <rect x="11" y="8" width="2" height="12" fill="currentColor"/>
              {/* Arms */}
              <path d="M6 10L11 14M18 10L13 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Legs */}
              <path d="M9 30L11 20M15 30L13 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>

            <span className="text-[0.75rem] font-medium text-stone-400 uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
              &copy; Area. {currentYear}
            </span>
          </div>

          <span className="text-[0.75rem] font-medium text-stone-400 uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
            All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  )
}

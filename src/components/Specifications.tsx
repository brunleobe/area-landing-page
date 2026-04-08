import { Check, X } from 'lucide-react'
import testimonialImg from '../assets/testimonial-stones.png'

export default function Specifications() {
  const specs = [
    { name: 'Ultra-fast browsing', area: true, websurge: true, hyperview: 'moderate' },
    { name: 'Advanced AI insights', area: true, websurge: 'basic', hyperview: false },
    { name: 'Seamless integration', area: true, websurge: 'restricted', hyperview: 'steep' },
    { name: 'Advanced AI insights', area: true, websurge: 'basic_insights', hyperview: false },
    { name: 'Ultra-fast browsing', area: true, websurge: true, hyperview: 'moderate' },
    { name: 'Full UTF-8 support', area: true, websurge: 'errors', hyperview: 'partial' },
  ]

  const websurgeLabels: Record<string, string> = {
    true: 'Fast browsing',
    basic: 'Basic AI recommendations',
    restricted: 'Restricts customization',
    basic_insights: 'Basic AI insights',
    errors: 'Potential display errors',
  }

  const hyperviewLabels: Record<string, string> = {
    moderate: 'Moderate speeds',
    false: 'No AI assistance',
    steep: 'Steep learning curve',
    partial: 'Partial UTF-8 support',
  }

  return (
    <section id="specifications" className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <span className="text-stone-400 text-sm tracking-widest uppercase font-medium">Specs</span>
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Area?
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            You need a solution that keeps up. That's why we developed Area. A developer-friendly approach to streamline your business.
          </p>
          <div className="pt-6">
            <a 
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E2F1D1] text-stone-800 px-8 py-3 rounded-full font-semibold hover:bg-[#d4e6c0] transition-colors shadow-sm"
            >
              Discover More
            </a>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto pb-12">
          <div className="min-w-[800px] grid grid-cols-3 gap-0 border-t border-stone-200">
            {/* Table Header */}
            <div className="relative pt-12 pb-8 flex flex-col items-center">
               {/* Area Highlight Column */}
               <div className="absolute inset-x-4 top-2 -bottom-4 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-stone-100 z-0"></div>
               <span className="relative z-10 text-2xl font-bold text-stone-900">Area</span>
            </div>
            <div className="pt-12 pb-8 flex items-center justify-center">
              <span className="text-2xl font-semibold text-stone-400 font-sans">WebSurge</span>
            </div>
            <div className="pt-12 pb-8 flex items-center justify-center">
              <span className="text-2xl font-semibold text-stone-400 font-sans">HyperView</span>
            </div>

            {/* Table Rows */}
            {specs.map((row, i) => (
              <>
                {/* Area Column */}
                <div className="relative px-8 py-6 border-b border-stone-100 flex items-center gap-3">
                   {/* Background highlight continues down the column */}
                   <div className="absolute inset-x-4 -top-px -bottom-px bg-white border-x border-stone-100 z-0"></div>
                   {i === specs.length - 1 && <div className="absolute left-4 right-4 bottom-0 h-4 bg-white rounded-b-3xl border-b border-x border-stone-100"></div>}
                   
                   <div className="relative z-10 flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#8f9e6e]" />
                    <span className="text-stone-800 text-sm font-medium">{row.name}</span>
                   </div>
                </div>

                {/* WebSurge Column */}
                <div className="px-8 py-6 border-b border-stone-100 flex items-center gap-3">
                  {typeof row.websurge === 'boolean' ? (
                     row.websurge ? <Check className="w-4 h-4 text-stone-400" /> : <X className="w-4 h-4 text-stone-400" />
                  ) : row.websurge.includes('errors') || row.websurge.includes('restricted') ? (
                    <X className="w-4 h-4 text-stone-400" />
                  ) : <Check className="w-4 h-4 text-stone-400" />}
                  <span className="text-stone-500 text-sm">{typeof row.websurge === 'string' ? websurgeLabels[row.websurge] : (row.websurge ? 'Fast browsing' : 'N/A')}</span>
                </div>

                {/* HyperView Column */}
                <div className="px-8 py-6 border-b border-stone-100 flex items-center gap-3">
                  {row.hyperview === false || row.hyperview === 'steep' ? (
                    <X className="w-4 h-4 text-stone-400" />
                  ) : <X className="w-4 h-4 text-stone-400" />}
                  <span className="text-stone-500 text-sm tracking-tight">{typeof row.hyperview === 'string' ? hyperviewLabels[row.hyperview] : (row.hyperview ? 'Moderate speeds' : 'No AI assistance')}</span>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="rounded-2xl sm:rounded-[40px] overflow-hidden shadow-2xl bg-stone-100 aspect-[4/5] relative">
            <img 
              src={testimonialImg} 
              alt="Artistic stone sculpture" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8 sm:space-y-10">
            <blockquote className="text-[1.35rem] sm:text-[1.85rem] leading-[1.3] text-stone-800 font-serif italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              “I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”
            </blockquote>
            <div className="space-y-1">
              <p className="font-bold text-stone-900">John Smith</p>
              <p className="text-stone-400 text-sm font-medium uppercase tracking-widest">Head of Data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

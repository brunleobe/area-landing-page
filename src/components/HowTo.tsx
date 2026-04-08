import howToImg from '../assets/how-to.jpeg'

export default function HowTo() {
  const steps = [
    {
      number: '01',
      title: 'Get Started',
      description: "With our intuitive setup, you're up and running in minutes.",
    },
    {
      number: '02',
      title: 'Customize and Configure',
      description: 'Adapt Area to your specific requirements and preferences.',
    },
    {
      number: '03',
      title: 'Grow Your Business',
      description: 'Make informed decisions to exceed your goals.',
    },
  ]

  return (
    <section id="how-to" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-20 gap-6">
          <div className="space-y-4">
            <span className="text-stone-400 text-sm tracking-widest uppercase font-medium">Steps</span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-900 font-serif leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Map Your Success
            </h2>
          </div>
          <a 
            href="https://chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E2F1D1] text-stone-800 px-8 py-3 rounded-full font-semibold hover:bg-[#d4e6c0] transition-colors shadow-sm self-start sm:self-auto text-center"
          >
            Discover More
          </a>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-20">
          {steps.map((step) => (
            <div key={step.number} className="space-y-8">
              <div className="border-t-2 border-stone-100 pt-12 relative">
                <span
                  className="text-[6.5rem] font-bold text-stone-300 absolute -top-12 left-0 select-none pointer-events-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {step.number}
                </span>
                <div className="relative z-10 pt-16">
                  <h3
                    className="text-xl font-bold text-stone-900 mb-3 font-serif"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed text-[0.95rem]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Large Cinematic Image */}
        <div className="rounded-2xl sm:rounded-[40px] overflow-hidden shadow-2xl relative aspect-[16/9] sm:aspect-[21/9]">
          <img
            src={howToImg}
            alt="Cinematic landscape visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

import benefitsImg from '../assets/benefits.jpeg'

const features = [
  {
    id: 'feat-amplify',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l18 18M10.5 10.5A3 3 0 1 0 13.5 13.5"/>
        <path d="M3 12a9 9 0 0 1 14.13-7.37M12 3a9 9 0 0 1 7.37 14.13"/>
      </svg>
    ),
    title: 'Amplify Insights',
    desc: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
  },
  {
    id: 'feat-global',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
      </svg>
    ),
    title: 'Control Your Global Presence',
    desc: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
  },
  {
    id: 'feat-language',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h8M8 14h5"/>
      </svg>
    ),
    title: 'Remove Language Barriers',
    desc: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
  },
  {
    id: 'feat-growth',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: 'Visualize Growth',
    desc: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
  },
]

const bigPictureItems = [
  { num: '01', title: 'Spot Trends in Seconds:', desc: 'No more digging through numbers.' },
  { num: '02', title: 'Get Everyone on the Same Page:', desc: 'Share easy-to-understand reports with your team.' },
  { num: '03', title: 'Make Presentations Pop:', desc: 'Interactive maps and dashboards keep your audience engaged.' },
  { num: '04', title: 'Your Global Snapshot:', desc: 'Get a quick, clear overview of your entire operation.' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white">

      {/* ─── Part 1: Feature Grid ─────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
        {/* Eyebrow */}
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: '#728050' }}
        >
          Benefits
        </p>

        {/* Headline + sub-headline */}
        <div className="mb-10">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We've cracked the code.
          </h2>
          <p className="text-stone-400 text-base max-w-md">
            Area provides real insights, without the data overload.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-200 mb-10" />

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.id} id={f.id} className="group flex flex-col gap-3">
              <div
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200"
                style={{ color: '#4a5534' }}
              >
                {f.icon}
              </div>
              <h3
                className="text-sm font-semibold text-stone-900 leading-snug group-hover:text-olive-700 transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {f.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Part 2: Landscape Banner ─────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="rounded-2xl sm:rounded-[40px] overflow-hidden shadow-2xl">
          <img src={benefitsImg} alt="Benefits" className="w-full h-auto" />
        </div>
      </div>

      {/* ─── Part 3: See the Big Picture ──────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">

          {/* Left: text + numbered list */}
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              See the Big Picture
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-sm">
              Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
            </p>

            {/* Numbered items */}
            <div className="flex flex-col divide-y divide-stone-200">
              {bigPictureItems.map((item) => (
                <div key={item.num} id={`big-picture-${item.num}`} className="flex items-start gap-5 py-4">
                  <span
                    className="text-xs font-semibold text-stone-400 mt-0.5 w-5 shrink-0"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.num}
                  </span>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    <span className="font-semibold text-stone-900">{item.title}</span>{' '}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              id="benefits-discover-more"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-sm font-semibold border border-stone-300 text-stone-700 hover:border-stone-500 hover:text-stone-900 transition-all duration-200 hover:shadow-sm"
              style={{ backgroundColor: '#eef0e4' }}
            >
              Discover More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: benefit image spotlight */}
          <div className="relative rounded-2xl sm:rounded-[40px] overflow-hidden shadow-2xl bg-stone-100 aspect-[4/5]">
             <img src={benefitsImg} alt="Benefit Detail" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </section>
  )
}

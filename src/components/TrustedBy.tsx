
const logos = [
  {
    id: 'logo-swoosh',
    label: 'Swoosh',
    svg: (
      <svg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 6C19 6 14 12 18 17C22 22 32 20 36 16C30 24 16 28 10 22C4 16 10 6 20 6H26Z" fill="#b0b0b0"/>
        <path d="M26 6L32 18L26 30" stroke="#b0b0b0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    id: 'logo-logoipsum-shield',
    label: 'Logoipsum',
    svg: (
      <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="20" rx="3" stroke="#b0b0b0" strokeWidth="2" fill="none"/>
        <path d="M2 14h20M12 4v20" stroke="#b0b0b0" strokeWidth="1.5"/>
        <text x="28" y="22" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="#b0b0b0">Logoipsum</text>
      </svg>
    ),
  },
  {
    id: 'logo-flower',
    label: 'Flowermark',
    svg: (
      <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={i}
            cx={20 + 7 * Math.cos((angle * Math.PI) / 180)}
            cy={18 + 7 * Math.sin((angle * Math.PI) / 180)}
            rx="5"
            ry="3"
            transform={`rotate(${angle} ${20 + 7 * Math.cos((angle * Math.PI) / 180)} ${18 + 7 * Math.sin((angle * Math.PI) / 180)})`}
            fill="#c0c0c0"
          />
        ))}
        <circle cx="20" cy="18" r="4" fill="#b0b0b0"/>
      </svg>
    ),
  },
  {
    id: 'logo-logoipsum-text',
    label: 'Logoipsum Text',
    svg: (
      <svg width="110" height="36" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fontFamily="Georgia, serif" fontSize="15" fontWeight="400" letterSpacing="1" fill="#b0b0b0">Logoipsum</text>
      </svg>
    ),
  },
  {
    id: 'logo-logoipsum-caps',
    label: 'LOGOIPSUM',
    svg: (
      <svg width="110" height="36" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" letterSpacing="3" fill="#b0b0b0">LOGOIPSUM</text>
      </svg>
    ),
  },
  {
    id: 'logo-logoipsum-pill',
    label: 'logoipsum pill',
    svg: (
      <svg width="100" height="36" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="8" width="98" height="20" rx="10" stroke="#b0b0b0" strokeWidth="1.5" fill="none"/>
        <text x="12" y="22" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#b0b0b0">logoipsum</text>
      </svg>
    ),
  },
]

export default function TrustedBy() {
  return (
    <section id="benefits" className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-stone-400 text-sm mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
          Trusted by:
        </p>
        <div className="flex flex-wrap items-center gap-10 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.id}
              id={logo.id}
              className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              title={logo.label}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

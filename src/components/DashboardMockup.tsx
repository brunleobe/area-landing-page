import overviewImg from '../assets/overview.jpeg'

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Olive decorative blocks – hidden on mobile to prevent overflow */}
      <div
        className="hidden sm:block absolute -left-8 top-12 bottom-0 w-24 rounded-2xl z-0"
        style={{ backgroundColor: '#8f9e6e', opacity: 0.7 }}
      />
      <div
        className="hidden sm:block absolute -right-8 top-12 bottom-0 w-24 rounded-2xl z-0"
        style={{ backgroundColor: '#8f9e6e', opacity: 0.7 }}
      />

      {/* Tablet frame */}
      <div
        className="relative z-10 rounded-[28px] overflow-hidden shadow-2xl bg-black"
        style={{ border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <img
          src={overviewImg}
          alt="Overview dashboard mockup"
          className="w-full h-auto object-cover block"
        />
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'

const navLinks = ['Benefits', 'Specifications', 'How-to', 'Contact Us']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="logo-link"
            onClick={closeMenu}
            className="text-xl font-semibold text-stone-900 tracking-tight hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Area
          </a>

          {/* Nav Links – desktop */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA – desktop */}
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-learn-more"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-100"
            style={{ backgroundColor: '#4a5534' }}
          >
            Learn More
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Hamburger / Close – mobile */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col px-6 pb-6 pt-2 gap-1 list-none m-0 p-0 border-t border-stone-100">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={closeMenu}
                  className="block py-3 text-base font-medium text-stone-700 hover:text-stone-900 transition-colors duration-200 border-b border-stone-50"
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-sm font-semibold text-white w-full justify-center"
                style={{ backgroundColor: '#4a5534' }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  )
}

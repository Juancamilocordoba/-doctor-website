import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Agendar' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/96 backdrop-blur-md border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-gold/70 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
              <span className="font-playfair text-gold text-xs font-medium">ZT</span>
            </div>
            <div className="hidden sm:block leading-none">
              <p className="font-playfair text-ivory text-[13px] font-normal tracking-wide">
                Dra. Zharick Tobar
              </p>
              <p className="font-inter text-gold/80 text-[9px] tracking-[0.28em] uppercase mt-0.5">
                Medicina Estética
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter text-ivory/60 text-[12px] tracking-[0.08em] hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/573174538636"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-gold/60 text-gold font-inter text-[10px] tracking-[0.22em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Agendar Cita
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 flex flex-col gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span
              className={`block w-5 h-[1px] bg-ivory/80 transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1px] bg-ivory/80 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1px] bg-ivory/80 transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-charcoal/98 backdrop-blur-xl border-t border-gold/10 overflow-hidden"
          >
            <nav className="px-6 py-7 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-inter text-ivory/70 text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/573174538636"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 px-5 py-3 border border-gold/60 text-gold font-inter text-[10px] tracking-[0.22em] uppercase text-center hover:bg-gold hover:text-charcoal transition-all duration-300"
              >
                Agendar por WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-accent/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-copper flex items-center justify-center">
              <span className="text-accent font-bold">Z</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif font-bold text-primary">Dra. Zharick Tobar</p>
              <p className="text-xs text-copper">Medicina Estética</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-primary hover:text-copper transition">Inicio</a>
            <a href="#servicios" className="text-primary hover:text-copper transition">Servicios</a>
            <a href="#citas" className="text-primary hover:text-copper transition">Citas</a>
            <a href="#contacto" className="text-primary hover:text-copper transition">Contacto</a>
          </nav>

          {/* CTA Button */}
          <button className="btn-primary hidden sm:block">
            Agendar Cita
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-primary transition transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-primary transition ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-primary transition transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-3"
          >
            <a href="#home" className="text-primary hover:text-copper">Inicio</a>
            <a href="#servicios" className="text-primary hover:text-copper">Servicios</a>
            <a href="#citas" className="text-primary hover:text-copper">Citas</a>
            <a href="#contacto" className="text-primary hover:text-copper">Contacto</a>
            <button className="btn-primary w-full">Agendar Cita</button>
          </motion.nav>
        )}
      </div>
    </header>
  )
}

export default Header

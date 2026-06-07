import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.2,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-charcoal"
    >
      {/* Ambient orbs */}
      <div className="absolute top-[18%] left-[8%] w-[520px] h-[520px] rounded-full opacity-[0.09] bg-gold blur-[130px] animate-orb-1 pointer-events-none" />
      <div className="absolute bottom-[12%] right-[6%] w-[420px] h-[420px] rounded-full opacity-[0.07] bg-gold blur-[110px] animate-orb-2 pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage: 'radial-gradient(circle, #B89060 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Thin horizontal gold line (decorative) */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/8 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[900px] mx-auto pt-20">

        {/* Label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-5 mb-10"
        >
          <span className="h-px w-10 bg-gold/50" />
          <span className="font-inter text-gold text-[10px] tracking-[0.38em] uppercase">
            Medicina Estética Avanzada
          </span>
          <span className="h-px w-10 bg-gold/50" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-playfair text-ivory font-normal leading-[1.04] mb-6"
          style={{ fontSize: 'clamp(50px, 8.5vw, 94px)' }}
        >
          Arte y Ciencia
          <br />
          <em className="italic text-gold font-normal">en Tu Piel</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-inter text-ivory/45 font-light leading-relaxed max-w-[460px] mx-auto mb-11"
          style={{ fontSize: 'clamp(14px, 1.8vw, 17px)' }}
        >
          Dra. Zharick Tobar — Procedimientos de precisión con resultados completamente naturales. Cali, Colombia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#servicios"
            className="px-8 py-[14px] border border-ivory/20 text-ivory/70 font-inter text-[10px] tracking-[0.22em] uppercase hover:border-gold hover:text-gold transition-all duration-400 min-w-[200px] text-center"
          >
            Ver Servicios
          </a>
          <a
            href="https://wa.me/573174538636"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-[14px] bg-gold text-charcoal font-inter text-[10px] tracking-[0.22em] uppercase hover:bg-gold-light transition-all duration-300 min-w-[200px] text-center font-medium"
          >
            Agendar Cita
          </a>
        </motion.div>

        {/* Service chips */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-2 mt-12"
        >
          {['Rellenos', 'Botox', 'Bioestimulación', 'Hidratación', 'Rinomodelación'].map((chip) => (
            <a
              key={chip}
              href="#servicios"
              className="px-4 py-[6px] border border-ivory/12 text-ivory/35 font-inter text-[9px] tracking-[0.18em] uppercase rounded-full hover:border-gold/40 hover:text-gold/70 transition-all duration-300"
            >
              {chip}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-ivory/20 text-[9px] tracking-[0.28em] uppercase">Scroll</span>
        <div className="w-px h-10 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/60 to-transparent animate-scroll-line" />
        </div>
      </motion.div>
    </section>
  )
}

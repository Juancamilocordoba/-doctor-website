import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.14 + 0.2,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen bg-charcoal overflow-hidden">

      {/* MOBILE BACKGROUND IMAGE — visible only on mobile/tablet */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/doctor.png"
          alt="Dra. Zharick Tobar"
          fill
          priority
          className="object-cover object-top"
          style={{ filter: 'sepia(12%) saturate(90%) brightness(0.45)' }}
        />
        <div className="absolute inset-0 bg-charcoal/65" />
      </div>

      {/* LEFT — Content */}
      <div className="relative z-10 w-full lg:w-[54%] flex flex-col justify-center items-center lg:items-start px-8 md:px-14 lg:px-20 pt-28 pb-20">

        {/* Ambient orb — desktop only */}
        <div className="hidden lg:block absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.08] bg-gold blur-[110px] animate-orb-1 pointer-events-none" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.03,
            backgroundImage: 'radial-gradient(circle, #B89060 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        {/* Label */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="flex items-center gap-4 mb-10"
        >
          <span className="h-px w-10 bg-gold/50" />
          <span className="font-inter text-gold text-[10px] tracking-[0.38em] uppercase">
            Medicina Estética & Antienvejecimiento
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-playfair text-ivory font-normal leading-[1.04] mb-6 text-center lg:text-left"
          style={{ fontSize: 'clamp(42px, 6vw, 82px)' }}
        >
          Arte y Ciencia<br />
          <em className="italic text-gold font-normal">en Tu Piel</em>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-cormorant italic text-ivory/60 leading-relaxed mb-10 text-center lg:text-left"
          style={{ fontSize: 'clamp(16px, 2vw, 22px)' }}
        >
          "Cada procedimiento, un ritual de precisión y belleza."
        </motion.p>

        <motion.p
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="font-inter text-ivory/55 text-sm font-light leading-relaxed max-w-md mb-10 text-center lg:text-left"
        >
          Dra. Zharick Tobar — Especialista en medicina estética avanzada.
          Resultados completamente naturales. Cali, Colombia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row gap-3 mb-14 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/573174538636"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gold text-charcoal font-inter text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-gold-light transition-all duration-300 text-center"
          >
            Agendar Cita
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 border border-ivory/30 text-ivory/70 font-inter text-[10px] tracking-[0.22em] uppercase hover:border-gold hover:text-gold transition-all duration-300 text-center"
          >
            Ver Servicios
          </a>
        </motion.div>

        {/* Service chips */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-wrap gap-2 justify-center lg:justify-start"
        >
          {['Rellenos', 'Botox', 'Bioestimulación', 'Hidratación', 'Rinomodelación'].map((chip) => (
            <a
              key={chip}
              href="#servicios"
              className="px-4 py-[5px] border border-ivory/20 text-ivory/55 font-inter text-[9px] tracking-[0.2em] uppercase rounded-full hover:border-gold/40 hover:text-gold/70 transition-all duration-300"
            >
              {chip}
            </a>
          ))}
        </motion.div>
      </div>

      {/* RIGHT — Doctor photo (desktop only) */}
      <motion.div
        className="hidden lg:block lg:w-[46%] relative"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/doctor.png"
            alt="Dra. Zharick Tobar — Medicina Estética Cali"
            fill
            priority
            className="object-cover object-top"
            style={{ filter: 'sepia(12%) saturate(90%) brightness(0.88)' }}
          />
        </div>
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-charcoal to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal to-transparent z-10" />
        <div className="absolute left-8 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent z-20" />
        <div className="absolute bottom-10 left-12 z-20">
          <p className="font-playfair text-ivory/90 text-xl mb-0.5">Dra. Zharick Tobar</p>
          <p className="font-inter text-gold text-[9px] tracking-[0.3em] uppercase">Medicina Estética · Cali</p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 md:left-14 lg:left-20 flex items-center gap-3 z-20"
      >
        <div className="w-8 h-px overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/60 to-transparent animate-scroll-line" />
        </div>
        <span className="font-inter text-ivory/40 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}

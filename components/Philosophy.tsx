import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  { value: '9', label: 'Procedimientos' },
  { value: '+500', label: 'Pacientes' },
  { value: '100%', label: 'Natural' },
]

export default function Philosophy() {
  return (
    <section className="bg-ivory py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — Doctor portrait */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/images/doctor-2.jpeg"
                alt="Dra. Zharick Tobar"
                fill
                className="object-cover object-top"
                style={{ filter: 'sepia(10%) saturate(92%) brightness(0.9)' }}
              />
              {/* Gold accent frame */}
              <div className="absolute inset-0 border border-gold/15 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <div className="absolute top-6 -right-4 bg-charcoal px-5 py-3 border-l-2 border-gold">
              <p className="font-inter text-gold text-[9px] tracking-[0.25em] uppercase">Medicina Estética</p>
              <p className="font-inter text-ivory/50 text-[9px] tracking-[0.15em] uppercase mt-0.5">& Antienvejecimiento</p>
            </div>
          </motion.div>

          {/* Right — Quote + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-gold" />
              <span className="font-inter text-gold text-[10px] tracking-[0.35em] uppercase">Nuestra Filosofía</span>
            </div>

            <blockquote
              className="font-cormorant italic text-ink leading-[1.35] mb-8"
              style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
            >
              "Cada procedimiento es un encuentro entre la ciencia médica y el arte de la belleza natural."
            </blockquote>

            <p className="font-inter text-ink-muted text-sm leading-relaxed mb-10 max-w-md">
              La Dra. Zharick Tobar combina técnica avanzada y sensibilidad artística para crear resultados que realzan tu belleza natural, respetando siempre la armonía y proporciones únicas de cada rostro.
            </p>

            {/* Separator */}
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-8 bg-gold/40" />
              <span className="font-inter text-gold/50 text-[9px] tracking-[0.3em] uppercase">Dra. Zharick Tobar</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                >
                  <p
                    className="font-playfair text-gold font-normal mb-1"
                    style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-inter text-ink-muted text-[10px] tracking-[0.18em] uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

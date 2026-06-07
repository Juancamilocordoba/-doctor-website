import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: '9', label: 'Procedimientos' },
  { value: '+500', label: 'Pacientes' },
  { value: '100%', label: 'Natural' },
]

export default function Philosophy() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">

        {/* Main quote */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="font-cormorant italic text-ink leading-[1.35] mb-7"
            style={{ fontSize: 'clamp(22px, 3.2vw, 38px)' }}
          >
            "Cada procedimiento es un encuentro entre
            <br className="hidden md:block" />
            {' '}la ciencia médica y el arte de la belleza natural."
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="font-inter text-gold text-[9px] tracking-[0.32em] uppercase">
              Dra. Zharick Tobar
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-stone">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center px-6 py-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="font-playfair text-gold font-normal mb-1"
                style={{ fontSize: 'clamp(30px, 4.5vw, 52px)' }}
              >
                {stat.value}
              </p>
              <p className="font-inter text-ink-muted text-[11px] tracking-[0.18em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

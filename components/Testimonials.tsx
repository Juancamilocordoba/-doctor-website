import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Laura M.',
    procedure: 'Aumento de Labios',
    text: 'El resultado fue completamente natural. La Dra. Zharick tiene una mano muy precisa y fue muy clara en todo el proceso. Quedé encantada con mi resultado.',
    stars: 5,
  },
  {
    name: 'Valentina R.',
    procedure: 'Toxina Botulínica',
    text: 'Me atendieron con mucha profesionalidad y calidez. El resultado se ve natural, nada exagerado. Mi cara luce descansada y fresca. Definitivamente vuelvo.',
    stars: 5,
  },
  {
    name: 'Camila T.',
    procedure: 'Hidratación NCTF',
    text: 'La diferencia en mi piel fue visible desde la primera sesión. Brillo, hidratación y firmeza como nunca. Fue mi mejor inversión en cuidado de piel.',
    stars: 5,
  },
]

function StarIcon() {
  return (
    <svg className="w-3 h-3 fill-gold text-gold" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="font-inter text-gold text-[10px] tracking-[0.35em] uppercase">
              Testimonios
            </span>
          </div>
          <h2
            className="font-playfair text-ink font-normal"
            style={{ fontSize: 'clamp(30px, 4.5vw, 48px)' }}
          >
            Experiencias Reales
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-cream border-l-[2px] border-gold p-8 flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <StarIcon key={idx} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-inter text-ink-muted text-[13.5px] leading-[1.75] italic flex-1 mb-7">
                "{t.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-playfair text-ink text-base">{t.name}</p>
                <p className="font-inter text-gold text-[9px] tracking-[0.22em] uppercase mt-0.5">
                  {t.procedure}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="font-cormorant italic text-ink-muted text-xl mb-6">
            "Tu experiencia también importa."
          </p>
          <a
            href="https://wa.me/573174538636"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.25em] uppercase text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors duration-300"
          >
            Agenda tu primera consulta →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

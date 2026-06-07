import React from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 'rellenos',
    tag: 'Rellenos & Perfilado',
    tagline: 'Harmonía y proporción en cada detalle',
    description: 'Ácido hialurónico de última generación para perfilar, definir y armonizar los rasgos del rostro con resultados absolutamente naturales.',
    services: [
      {
        name: 'Aumento de Labios',
        tech: 'Ácido Hialurónico',
        price: '$1.200.000',
        desc: 'Volumen y definición natural para tus labios. Resultados inmediatos y duraderos.',
      },
      {
        name: 'Proyección de Mentón',
        tech: 'Relleno con AH',
        price: '$1.200.000',
        desc: 'Perfilado de mentón sin cirugía para un rostro más armonioso y proporcionado.',
      },
      {
        name: 'Relleno de Ojeras',
        tech: 'Ácido Hialurónico',
        price: '$1.200.000',
        desc: 'Elimina el cansancio y revitaliza la mirada con un tratamiento profundo y preciso.',
      },
      {
        name: 'Rinomodelación',
        tech: 'Sin cirugía',
        price: '$1.200.000',
        desc: 'Corrección estética de la nariz con rellenos. Sin quirófano, sin recuperación.',
      },
    ],
  },
  {
    id: 'neuro',
    tag: 'Neuromoduladores',
    tagline: 'Movimiento natural, expresión auténtica',
    description: 'Toxina botulínica aplicada con precisión para suavizar líneas de expresión manteniendo la naturalidad y autenticidad de tu rostro.',
    services: [
      {
        name: 'Toxina Botulínica',
        tech: 'Tercio superior · Zona única',
        price: 'Desde $400.000',
        desc: 'Suaviza líneas de expresión preservando la naturalidad. Efecto preventivo y correctivo.',
      },
      {
        name: 'Toxina para Bruxismo',
        tech: 'Relajación mandibular',
        price: '$890.000',
        desc: 'Alivia el apretamiento involuntario de mandíbula y mejora el contorno facial inferior.',
      },
    ],
  },
  {
    id: 'bio',
    tag: 'Bioestimulación',
    tagline: 'Tu piel, renovada desde adentro',
    description: 'Estimulación de la producción natural de colágeno para resultados progresivos, duraderos y completamente naturales.',
    services: [
      {
        name: 'Bioestimulador de Colágeno',
        tech: 'Radiesse · Sculptra',
        price: 'Desde $2.600.000',
        desc: 'Estimula el colágeno propio de tu piel para restaurar firmeza, volumen y juventud de forma gradual y duradera.',
      },
    ],
  },
  {
    id: 'hidra',
    tag: 'Hidratación & Regeneración',
    tagline: 'Profundidad e intensidad para tu piel',
    description: 'Tratamientos de última generación que restauran la hidratación, luminosidad y vitalidad de la piel desde adentro.',
    services: [
      {
        name: 'Hidratación NCTF',
        tech: 'Cóctel vitamínico · AH',
        price: '$650.000',
        desc: 'Cóctel de vitaminas y ácido hialurónico que restaura luminosidad, textura e hidratación profunda.',
      },
      {
        name: 'Polinucleótidos',
        tech: 'PDRN · Regeneración celular',
        price: '$750.000',
        desc: 'Biomoléculas de alta pureza para regenerar y revitalizar la piel. Efectos anti-edad y reparadores.',
      },
    ],
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof categories)[0]['services'][0]
  index: number
}) {
  return (
    <motion.div
      className="group bg-ivory border border-stone hover:border-gold/50 transition-all duration-500 p-7 flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Tech label */}
      <span className="font-inter text-gold text-[9px] tracking-[0.3em] uppercase mb-5 block">
        {service.tech}
      </span>

      {/* Name */}
      <h3
        className="font-playfair text-ink font-normal mb-3 leading-snug group-hover:text-ink transition-colors duration-300"
        style={{ fontSize: 'clamp(17px, 2vw, 21px)' }}
      >
        {service.name}
      </h3>

      {/* Separator */}
      <div className="w-12 h-px bg-gold/40 mb-4" />

      {/* Description */}
      <p className="font-inter text-ink-muted text-[13px] leading-relaxed flex-1 mb-6">
        {service.desc}
      </p>

      {/* Footer */}
      <div className="flex items-end justify-between mt-auto pt-4 border-t border-stone">
        <p
          className="font-playfair text-gold italic"
          style={{ fontSize: 'clamp(18px, 2.2vw, 24px)' }}
        >
          {service.price}
        </p>
        <a
          href="https://wa.me/573174538636"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-[10px] tracking-[0.22em] uppercase text-ink-muted hover:text-gold transition-colors duration-300 border-b border-transparent hover:border-gold/50 pb-0.5"
        >
          Agendar →
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="font-inter text-gold text-[10px] tracking-[0.35em] uppercase">
              Procedimientos
            </span>
          </div>
          <h2
            className="font-playfair text-ink font-normal"
            style={{ fontSize: 'clamp(34px, 5vw, 54px)' }}
          >
            Tratamientos Especializados
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-20">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Category header */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end mb-8 pb-6 border-b border-stone">
                <div className="flex gap-5 items-start">
                  <div className="w-0.5 h-14 bg-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-inter text-gold text-[9px] tracking-[0.35em] uppercase mb-2">
                      {cat.tag}
                    </p>
                    <p
                      className="font-cormorant italic text-ink leading-tight mb-3"
                      style={{ fontSize: 'clamp(20px, 2.8vw, 30px)' }}
                    >
                      {cat.tagline}
                    </p>
                    <p className="font-inter text-ink-muted text-[12.5px] leading-relaxed max-w-xl">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Cards grid */}
              <div
                className={`grid gap-3 ${
                  cat.services.length === 1
                    ? 'grid-cols-1 md:grid-cols-2'
                    : cat.services.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                }`}
              >
                {cat.services.map((service, i) => (
                  <ServiceCard key={service.name} service={service} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

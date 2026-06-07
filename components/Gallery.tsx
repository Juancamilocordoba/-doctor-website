import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const results = [
  {
    id: 1,
    type: 'before-after',
    before: '/images/antes-despues-labios.jpeg',
    after: '/images/labios-resultado.jpeg',
    procedure: 'Aumento de Labios',
    description: 'Ácido Hialurónico — Volumen y definición natural',
  },
  {
    id: 2,
    type: 'result',
    src: '/images/resultado-labios.jpeg',
    procedure: 'Resultados Naturales',
    description: 'Perfilado de labios con técnica avanzada',
  },
  {
    id: 3,
    type: 'result',
    src: '/images/doctor-2.jpeg',
    procedure: 'Consulta Personalizada',
    description: 'Cada paciente recibe un plan a medida',
  },
]

function BeforeAfterCard({ item }: { item: typeof results[0] }) {
  const [showAfter, setShowAfter] = useState(true)

  if (item.type === 'before-after') {
    return (
      <div
        className="group relative overflow-hidden cursor-pointer"
        style={{ aspectRatio: '3/4' }}
        onMouseEnter={() => setShowAfter(false)}
        onMouseLeave={() => setShowAfter(true)}
        onClick={() => setShowAfter(!showAfter)}
      >
        {/* Before image */}
        <Image
          src={item.before!}
          alt={`Antes — ${item.procedure}`}
          fill
          className={`object-cover transition-opacity duration-700 ${showAfter ? 'opacity-0' : 'opacity-100'}`}
          style={{ filter: 'sepia(8%) saturate(88%) brightness(0.9)' }}
        />
        {/* After image */}
        <Image
          src={item.after!}
          alt={`Después — ${item.procedure}`}
          fill
          className={`object-cover transition-opacity duration-700 ${showAfter ? 'opacity-100' : 'opacity-0'}`}
          style={{ filter: 'sepia(8%) saturate(95%) brightness(0.92)' }}
        />

        {/* Hover label */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`font-inter text-[8px] tracking-[0.25em] uppercase px-2.5 py-1 backdrop-blur-sm ${
            showAfter ? 'bg-gold text-charcoal' : 'bg-charcoal/70 text-ivory'
          } transition-all duration-300`}>
            {showAfter ? 'Después' : 'Antes'}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className={`font-inter text-[8px] tracking-[0.25em] uppercase px-2.5 py-1 backdrop-blur-sm ${
            showAfter ? 'bg-charcoal/70 text-ivory' : 'bg-gold text-charcoal'
          } transition-all duration-300`}>
            {showAfter ? 'Antes ←' : '→ Después'}
          </span>
        </div>

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-5 z-10">
          <p className="font-playfair text-ivory text-base mb-0.5">{item.procedure}</p>
          <p className="font-inter text-ivory/50 text-[11px] tracking-wide">{item.description}</p>
        </div>

        {/* Touch hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          <div className="bg-charcoal/40 backdrop-blur-sm px-4 py-2">
            <span className="font-inter text-ivory text-[9px] tracking-[0.2em] uppercase">Hover para comparar</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
      <Image
        src={item.src!}
        alt={item.procedure}
        fill
        className="object-cover object-top transition-transform duration-700 hover:scale-105"
        style={{ filter: 'sepia(10%) saturate(90%) brightness(0.88)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-5">
        <p className="font-playfair text-ivory text-base mb-0.5">{item.procedure}</p>
        <p className="font-inter text-ivory/50 text-[11px] tracking-wide">{item.description}</p>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="resultados" className="bg-charcoal py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-gold/60" />
            <span className="font-inter text-gold text-[10px] tracking-[0.35em] uppercase">
              Resultados
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-playfair text-ivory font-normal"
              style={{ fontSize: 'clamp(30px, 4.5vw, 48px)' }}
            >
              Antes & Después
            </h2>
            <p className="font-cormorant italic text-ivory/40 text-lg max-w-xs text-right hidden md:block">
              "Resultados que hablan por sí mismos."
            </p>
          </div>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {results.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <BeforeAfterCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Brand watermark text */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="font-playfair text-ivory/12 text-[11px] tracking-[0.4em] uppercase">
            Zharick Tobar · Aesthetic Medicine & Antiage
          </p>
        </motion.div>
      </div>
    </section>
  )
}

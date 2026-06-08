import React, { useRef } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Dynamic import — Three.js must be client-side only (no SSR)
const HorizonServicesIntro = dynamic(
  () => import('./ui/horizon-services').then(m => ({ default: m.HorizonServicesIntro })),
  {
    ssr: false,
    loading: () => (
      // Placeholder while Three.js loads — matches charcoal palette
      <div
        style={{
          height: `${5 * 100}vh`,
          background: '#0a0906',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{
          width: 1, height: 60,
          background: 'rgba(184,144,96,0.4)',
          animation: 'hzFadeIn 1s ease infinite alternate',
        }} />
      </div>
    ),
  }
)

// ─── Category icons ────────────────────────────────────────────────────────
const CategoryIcons: Record<string, React.ReactElement> = {
  rellenos: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold/70">
      <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z"/>
    </svg>
  ),
  neuro: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold/70">
      <polygon points="13,2 4,13 12,13 11,22 20,11 12,11"/>
    </svg>
  ),
  bio: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/70">
      <path d="M12 2L20.5 7v10L12 22 3.5 17V7z"/>
    </svg>
  ),
  hidra: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/70">
      <path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/>
      <path d="M2 17c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/>
    </svg>
  ),
}

// ─── Service data ──────────────────────────────────────────────────────────
const categories = [
  {
    id: 'rellenos',
    tag: 'Rellenos & Perfilado',
    tagline: 'Harmonía y proporción en cada detalle',
    description: 'Ácido hialurónico de última generación para perfilar, definir y armonizar los rasgos del rostro con resultados absolutamente naturales.',
    services: [
      { name: 'Aumento de Labios',    tech: 'Ácido Hialurónico',     price: '$1.200.000',     desc: 'Volumen y definición natural para tus labios. Resultados inmediatos y duraderos.',                                              image: '/images/antes-despues-labios-1.jpg.jpeg' },
      { name: 'Proyección de Mentón', tech: 'Relleno con AH',        price: '$1.200.000',     desc: 'Perfilado de mentón sin cirugía para un rostro más armonioso y proporcionado.',                                               image: '/images/antes-despues-menton-1.jpg.png' },
      { name: 'Relleno de Ojeras',    tech: 'Ácido Hialurónico',     price: '$1.200.000',     desc: 'Revitaliza la mirada. Trata ojeras y surcos con ácido hialurónico de alta precisión.',                                        image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600&auto=format&fit=crop&q=80' },
      { name: 'Rinomodelación',       tech: 'Sin cirugía',           price: '$1.200.000',     desc: 'Corrección estética de la nariz con rellenos. Sin quirófano, sin recuperación.',                                             image: '/images/antes-despues-rinomodelacion-1.jpg.png' },
    ],
  },
  {
    id: 'neuro',
    tag: 'Neuromoduladores',
    tagline: 'Movimiento natural, expresión auténtica',
    description: 'Toxina botulínica aplicada con precisión para suavizar líneas de expresión manteniendo la naturalidad y autenticidad de tu rostro.',
    services: [
      { name: 'Toxina Botulínica',    tech: 'Tercio superior · Zona única', price: 'Desde $400.000', desc: 'Suaviza líneas de expresión preservando la naturalidad. Efecto preventivo y correctivo.',                                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80' },
      { name: 'Toxina para Bruxismo', tech: 'Relajación mandibular',        price: '$890.000',       desc: 'Relaja la mandíbula y define el óvalo facial. Sin dolor, efecto inmediato.',                                           image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&auto=format&fit=crop&q=80' },
    ],
  },
  {
    id: 'bio',
    tag: 'Bioestimulación',
    tagline: 'Tu piel, renovada desde adentro',
    description: 'Estimulación de la producción natural de colágeno para resultados progresivos, duraderos y completamente naturales.',
    services: [
      { name: 'Bioestimulador de Colágeno', tech: 'Radiesse · Sculptra', price: 'Desde $2.600.000', desc: 'Estimula tu propio colágeno. Firmeza, volumen y juventud de forma gradual.',                                        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80' },
    ],
  },
  {
    id: 'hidra',
    tag: 'Hidratación & Regeneración',
    tagline: 'Profundidad e intensidad para tu piel',
    description: 'Tratamientos de última generación que restauran la hidratación, luminosidad y vitalidad de la piel desde adentro.',
    services: [
      { name: 'Hidratación NCTF',  tech: 'Cóctel vitamínico · AH',    price: '$650.000', desc: 'Vitaminas + AH que restauran luminosidad, textura e hidratación desde adentro.',                        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&auto=format&fit=crop&q=80' },
      { name: 'Polinucleótidos',   tech: 'PDRN · Regeneración celular', price: '$750.000', desc: 'Biomoléculas que regeneran y reparan la piel. Efecto antienvejecimiento profundo.',                       image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80' },
    ],
  },
]

type Service = typeof categories[0]['services'][0]

// ─── 3-D tilt card ─────────────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xS = useSpring(x, { stiffness: 300, damping: 30 })
  const yS = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(yS, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(xS, [-0.5, 0.5], [-10, 10])
  const glareX  = useTransform(xS, [-0.5, 0.5], ['0%', '100%'])
  const glareY  = useTransform(yS, [-0.5, 0.5], ['0%', '100%'])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top)  / rect.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: '1000px' }}
      className="group"
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="bg-ivory border border-stone hover:border-gold/50 transition-colors duration-300 overflow-hidden flex flex-col h-full relative cursor-pointer"
      >
        {/* Glare */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(184,144,96,0.12) 0%, transparent 60%)` }}
        />

        {/* Image */}
        <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: '16/10', transform: 'translateZ(20px)' }}>
          <Image src={service.image} alt={service.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          <div className="absolute top-3 left-3 z-10">
            <span className="font-inter text-[8px] tracking-[0.25em] uppercase px-2.5 py-1 bg-gold/90 text-charcoal">
              {service.tech}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1" style={{ transform: 'translateZ(10px)' }}>
          <h3 className="font-playfair text-ink font-normal mb-3 leading-snug" style={{ fontSize: 'clamp(17px, 2vw, 21px)' }}>
            {service.name}
          </h3>
          <div className="w-10 h-px bg-gold/40 mb-4" />
          <p className="font-inter text-ink-muted text-[13px] leading-relaxed flex-1 mb-5">{service.desc}</p>
          <div className="flex items-end justify-between mt-auto pt-4 border-t border-stone">
            <p className="font-playfair text-gold italic" style={{ fontSize: 'clamp(18px, 2.2vw, 24px)' }}>
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
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────
export default function Services() {
  return (
    <div id="servicios">

      {/* ── 3D Horizon intro: scrolls through 4 categories ── */}
      <HorizonServicesIntro />

      {/* ── Service cards ── */}
      <div className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section title */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-gold" />
              <span className="font-inter text-gold text-[10px] tracking-[0.35em] uppercase">Tratamientos</span>
            </div>
            <h2 className="font-playfair text-ink font-normal" style={{ fontSize: 'clamp(34px, 5vw, 54px)' }}>
              Precios & Detalles
            </h2>
          </motion.div>

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
                      <div className="flex items-center gap-2 mb-2">
                        {CategoryIcons[cat.id]}
                        <p className="font-inter text-gold text-[9px] tracking-[0.35em] uppercase">{cat.tag}</p>
                      </div>
                      <p className="font-cormorant italic text-ink leading-tight mb-3" style={{ fontSize: 'clamp(20px, 2.8vw, 30px)' }}>
                        {cat.tagline}
                      </p>
                      <p className="font-inter text-ink-muted text-[12.5px] leading-relaxed max-w-xl">{cat.description}</p>
                    </div>
                  </div>
                </div>

                {/* Cards grid */}
                <div className={`grid gap-4 ${
                  cat.services.length === 1
                    ? 'grid-cols-1 md:grid-cols-2'
                    : cat.services.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                }`}>
                  {cat.services.map((service, i) => (
                    <ServiceCard key={service.name} service={service} index={i} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

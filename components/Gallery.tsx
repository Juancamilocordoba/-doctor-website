import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery'

const galleryItems: GalleryItem[] = [
  {
    common: 'Aumento de Labios',
    binomial: 'Rellenos & Perfilado',
    photo: { url: '/images/antes-despues-labios-1.jpg.jpeg', text: 'Resultado aumento de labios', pos: 'center top', by: 'Medicina Estética' },
  },
  {
    common: 'Toxina para Bruxismo',
    binomial: 'Neuromoduladores',
    photo: { url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&auto=format&fit=crop&q=80', text: 'Toxina para bruxismo', pos: 'center 25%', by: 'Medicina Estética' },
  },
  {
    common: 'Proyección de Mentón',
    binomial: 'Rellenos & Perfilado',
    photo: { url: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?w=600&auto=format&fit=crop&q=80', text: 'Proyección de mentón', pos: 'center 20%', by: 'Medicina Estética' },
  },
  {
    common: 'Relleno de Ojeras',
    binomial: 'Rellenos & Perfilado',
    photo: { url: 'https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?w=600&auto=format&fit=crop&q=80', text: 'Relleno de ojeras', pos: 'center 30%', by: 'Medicina Estética' },
  },
  {
    common: 'Rinomodelación',
    binomial: 'Sin cirugía',
    photo: { url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=80', text: 'Rinomodelación sin cirugía', pos: 'center 20%', by: 'Medicina Estética' },
  },
  {
    common: 'Toxina Botulínica',
    binomial: 'Neuromoduladores',
    photo: { url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80', text: 'Toxina botulínica', pos: 'center 15%', by: 'Medicina Estética' },
  },
  {
    common: 'Bioestimulador de Colágeno',
    binomial: 'Bioestimulación',
    photo: { url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80', text: 'Bioestimulador de colágeno', pos: 'center', by: 'Medicina Estética' },
  },
  {
    common: 'Hidratación NCTF',
    binomial: 'Hidratación & Regeneración',
    photo: { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=80', text: 'Hidratación NCTF', pos: 'center 20%', by: 'Medicina Estética' },
  },
  {
    common: 'Polinucleótidos',
    binomial: 'Hidratación & Regeneración',
    photo: { url: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=600&auto=format&fit=crop&q=80', text: 'Polinucleótidos PDRN', pos: 'center 25%', by: 'Medicina Estética' },
  },
]

const mobileItems = galleryItems.map((item, i) => ({
  id: i + 1,
  src: item.photo.url,
  label: item.common,
  tag: item.binomial,
  pos: item.photo.pos,
}))

export default function Gallery() {
  return (
    <section id="procedimientos" className="bg-charcoal py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-gold/60" />
            <span className="font-inter text-gold text-[10px] tracking-[0.35em] uppercase">Procedimientos</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-playfair text-ivory font-normal" style={{ fontSize: 'clamp(30px, 4.5vw, 48px)' }}>
              9 Tratamientos Disponibles
            </h2>
            <p className="font-cormorant italic text-ivory/55 text-lg max-w-sm text-right hidden md:block">
              "Explora cada procedimiento — los precios y detalles te esperan abajo."
            </p>
          </div>
        </motion.div>

        {/* DESKTOP: 3D Circular Gallery */}
        <motion.div
          className="hidden md:block w-full"
          style={{ height: '560px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <CircularGallery
            items={galleryItems}
            radius={480}
            autoRotateSpeed={0.025}
            className="w-full h-full"
          />
        </motion.div>

        {/* MOBILE: 2-col grid with all 9 procedures */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {mobileItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg"
              style={{ aspectRatio: '3/4' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.src.startsWith('/') ? (
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover"
                  style={{ objectPosition: item.pos || 'center', filter: 'sepia(8%) saturate(90%) brightness(0.82)' }}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: item.pos || 'center', filter: 'sepia(8%) saturate(90%) brightness(0.82)' }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-inter text-gold text-[8px] tracking-[0.22em] uppercase mb-0.5 leading-tight">{item.tag}</p>
                <p className="font-playfair text-ivory text-sm leading-tight">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom hint */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="h-px w-8 bg-gold/25" />
          <a href="#servicios" className="font-inter text-gold/60 text-[9px] tracking-[0.3em] uppercase hover:text-gold transition-colors duration-300">
            Ver precios y detalles ↓
          </a>
          <span className="h-px w-8 bg-gold/25" />
        </motion.div>
      </div>
    </section>
  )
}

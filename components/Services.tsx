import React, { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    name: 'Aumento de Labios',
    description: 'Ácido Hialurónico para realzar y perfilar tus labios',
    price: '$1.200.000',
    icon: '💋',
  },
  {
    id: 2,
    name: 'Bioestimulador de Colágeno',
    description: 'Radiesse o Sculptra para estimular colágeno natural',
    price: 'Desde $2.600.000',
    icon: '✨',
  },
  {
    id: 3,
    name: 'Toxina Botulínica',
    description: 'Tercer superior o zona única. Resultados naturales',
    price: 'Desde $400.000',
    icon: '🎯',
  },
  {
    id: 4,
    name: 'Proyección de Mentón',
    description: 'Relleno de mentón con ácido hialurónico',
    price: '$1.200.000',
    icon: '👤',
  },
  {
    id: 5,
    name: 'Relleno de Ojeras',
    description: 'Ácido hialurónico para ojeras y líneas finas',
    price: '$1.200.000',
    icon: '👁️',
  },
  {
    id: 6,
    name: 'Rinomodelación',
    description: 'Remodelación sin cirugía con ácido hialurónico',
    price: '$1.200.000',
    icon: '👃',
  },
  {
    id: 7,
    name: 'Toxina Botulínica Bruxismo',
    description: 'Tratamiento para apretar de mandíbula',
    price: '$890.000',
    icon: '😁',
  },
  {
    id: 8,
    name: 'Hidratación NCTF',
    description: 'Hidratación profunda de piel con NCTF',
    price: '$650.000',
    icon: '💧',
  },
  {
    id: 9,
    name: 'Polinucleótidos',
    description: 'Esperma de salmón para revitalización',
    price: '$750.000',
    icon: '🌊',
  },
]

const Services = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="servicios" className="relative w-full py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Nuestros Servicios</p>
          <h2 className="text-primary mb-4">Procedimientos Especializados</h2>
          <p className="text-lg text-deep-taupe max-w-2xl mx-auto">
            Tratamientos avanzados de medicina estética con productos de la más alta calidad
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className="relative h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onHoverStart={() => setHoveredId(service.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              {/* Card Container with 3D Flip Effect */}
              <motion.div
                className="w-full h-full relative transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: hoveredId === service.id ? 180 : 0,
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                {/* Front of Card */}
                <div
                  className="absolute w-full h-full bg-warm-sand border-2 border-taupe/30 rounded-xl p-8 flex flex-col justify-between"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div>
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-primary mb-2 font-serif text-xl">{service.name}</h3>
                    <p className="text-deep-taupe text-sm">{service.description}</p>
                  </div>
                  <p className="text-copper font-mono font-bold text-lg">{service.price}</p>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-primary to-copper rounded-xl p-8 flex flex-col justify-between text-accent"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div>
                    <h3 className="text-xl font-serif mb-4">{service.name}</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Procedimiento altamente especializado realizado con técnica profesional y productos certificados.
                    </p>
                    <div className="flex flex-col gap-2 text-xs">
                      <p>✓ Resultados naturales</p>
                      <p>✓ Totalmente seguro</p>
                      <p>✓ Recuperación rápida</p>
                    </div>
                  </div>
                  <button className="btn-primary bg-accent text-primary hover:bg-warm-sand w-full">
                    Agendar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

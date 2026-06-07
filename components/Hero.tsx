import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent via-warm-sand to-accent -z-10"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-copper rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-taupe rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="section-label">Bienvenida a la Belleza</p>

            <h1 className="text-primary leading-tight">
              Medicina Estética Avanzada
            </h1>

            <p className="text-lg text-deep-taupe max-w-xl">
              Procedimientos seguros y efectivos para realzar tu belleza natural.
              Con la más alta calidad en productos y experiencia comprobada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary">
                Agendar Consulta
              </button>
              <button className="btn-secondary">
                Ver Servicios
              </button>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="bg-warm-sand/50 p-4 rounded-lg border border-taupe/30">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-deep-taupe">Procedimientos</p>
              </div>
              <div className="bg-warm-sand/50 p-4 rounded-lg border border-taupe/30">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-deep-taupe">Satisfacción</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Animated Graphic */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-copper/20 to-taupe/20 rounded-2xl blur-2xl"></div>

            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-copper/30 flex items-center justify-center"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="relative w-48 h-48">
                {/* Animated circles */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-copper/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                ></motion.div>
                <motion.div
                  className="absolute inset-6 rounded-full border-2 border-taupe/40"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                ></motion.div>
                <motion.div
                  className="absolute inset-12 rounded-full bg-gradient-to-br from-copper to-taupe flex items-center justify-center"
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-3xl">✨</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-copper">↓</div>
      </motion.div>
    </section>
  )
}

export default Hero

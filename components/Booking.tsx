import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' })
    }, 3000)
  }

  return (
    <section id="citas" className="relative w-full py-20 bg-warm-sand">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-4">Agenda tu Cita</p>
          <h2 className="text-primary mb-4">Reserva tu Consulta</h2>
          <p className="text-lg text-deep-taupe max-w-2xl mx-auto">
            Completa el formulario y nos contactaremos contigo para confirmar tu cita
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-accent rounded-lg p-6 border-l-4 border-copper">
              <h3 className="text-primary font-serif text-lg mb-2">📍 Ubicación</h3>
              <p className="text-deep-taupe text-sm">
                Centro Comercial Babilla Plaza<br />
                Tercer Piso, Local 301<br />
                Cali, Colombia
              </p>
            </div>

            <div className="bg-accent rounded-lg p-6 border-l-4 border-copper">
              <h3 className="text-primary font-serif text-lg mb-2">📞 Teléfono</h3>
              <p className="text-deep-taupe text-sm">
                <a href="tel:+573174538636" className="hover:text-copper transition">
                  +57 317 453 8636
                </a>
              </p>
            </div>

            <div className="bg-accent rounded-lg p-6 border-l-4 border-copper">
              <h3 className="text-primary font-serif text-lg mb-2">💬 WhatsApp</h3>
              <p className="text-deep-taupe text-sm">
                <a href="https://wa.me/573174538636" target="_blank" rel="noopener noreferrer" className="hover:text-copper transition">
                  Envía tu mensaje directo
                </a>
              </p>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="md:col-span-2 bg-accent rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-warm-sand border-2 border-taupe/30 rounded-lg focus:outline-none focus:border-copper transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-warm-sand border-2 border-taupe/30 rounded-lg focus:outline-none focus:border-copper transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Tu Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-warm-sand border-2 border-taupe/30 rounded-lg focus:outline-none focus:border-copper transition"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-warm-sand border-2 border-taupe/30 rounded-lg focus:outline-none focus:border-copper transition"
              >
                <option value="">Selecciona un procedimiento</option>
                <option value="labios">Aumento de Labios</option>
                <option value="colageno">Bioestimulador de Colágeno</option>
                <option value="botox">Toxina Botulínica</option>
                <option value="menton">Proyección de Mentón</option>
                <option value="ojeras">Relleno de Ojeras</option>
                <option value="nariz">Rinomodelación</option>
                <option value="bruxismo">Toxina para Bruxismo</option>
                <option value="nctf">Hidratación NCTF</option>
                <option value="polinucleotidos">Polinucleótidos</option>
              </select>
            </div>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-warm-sand border-2 border-taupe/30 rounded-lg focus:outline-none focus:border-copper transition mb-4"
            />

            <textarea
              name="message"
              placeholder="Cuéntanos más sobre tu consulta (opcional)"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-warm-sand border-2 border-taupe/30 rounded-lg focus:outline-none focus:border-copper transition mb-4"
            ></textarea>

            <motion.button
              type="submit"
              className="btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitted ? '✓ Enviado!' : 'Agendar Cita'}
            </motion.button>

            {isSubmitted && (
              <motion.p
                className="text-center text-green-600 mt-4 font-mono text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ¡Gracias! Nos contactaremos pronto.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Booking

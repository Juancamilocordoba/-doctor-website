import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer id="contacto" className="w-full bg-primary text-accent py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif mb-2">Dra. Zharick Tobar</h3>
            <p className="text-accent/80 text-sm">Medicina Estética Avanzada</p>
            <p className="text-copper font-mono text-xs mt-2">Cali, Colombia</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-mono font-bold text-sm mb-4 text-copper">NAVEGACIÓN</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-copper transition">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-copper transition">Servicios</a></li>
              <li><a href="#citas" className="hover:text-copper transition">Citas</a></li>
              <li><a href="#contacto" className="hover:text-copper transition">Contacto</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-mono font-bold text-sm mb-4 text-copper">CONTACTO</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+573174538636" className="hover:text-copper transition">
                  +57 317 453 8636
                </a>
              </li>
              <li>
                <a href="https://wa.me/573174538636" target="_blank" rel="noopener noreferrer" className="hover:text-copper transition">
                  WhatsApp
                </a>
              </li>
              <li className="text-accent/80">
                Centro Comercial Babilla<br />
                Plaza, Local 301, Cali
              </li>
            </ul>
          </motion.div>

          {/* Social & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-mono font-bold text-sm mb-4 text-copper">HORARIO</h4>
            <ul className="space-y-2 text-sm">
              <li>Lunes - Viernes</li>
              <li>9:00 AM - 6:00 PM</li>
              <li className="text-accent/80 pt-2">Sábados previa cita</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-accent/80">
          <p>&copy; 2024 Dra. Zharick Tobar. Todos los derechos reservados.</p>
          <p>Diseñado con ✨ por Web Development</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const serviceOptions = ['Aumento de Labios','Proyección de Mentón','Relleno de Ojeras','Rinomodelación','Toxina Botulínica','Toxina para Bruxismo','Bioestimulador de Colágeno','Hidratación NCTF','Polinucleótidos']

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hola Dra. Zharick! Soy ${form.name}. Me gustaría agendar una cita para ${form.service || 'consultar sus servicios'}. Mi número es ${form.phone}.${form.message ? ' ' + form.message : ''}`
    window.open(`https://wa.me/573174538636?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contacto" className="bg-charcoal py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-gold/50" />
              <span className="font-inter text-gold text-[10px] tracking-[0.35em] uppercase">Contacto</span>
            </div>
            <h2 className="font-playfair text-ivory font-normal mb-4 leading-tight" style={{ fontSize: 'clamp(30px, 4.5vw, 48px)' }}>
              Reserva tu<br />Consulta
            </h2>
            <p className="font-cormorant italic text-ivory/55 text-xl mb-12 leading-relaxed">"El primer paso hacia tu mejor versión."</p>

            <div className="space-y-7 mb-12">
              {[
                { icon: '↗', label: 'Ubicación', content: (<>Centro Comercial Babilla Plaza<br />Piso 3, Local 301 · Cali, Colombia</>) },
                { icon: '☎', label: 'Teléfono', content: (<a href="tel:+573174538636" className="hover:text-gold transition-colors duration-300">+57 317 453 8636</a>) },
                { icon: '◷', label: 'Horario', content: (<>Lunes – Viernes: 9AM – 6PM<br />Sábados: Con previa cita</>) },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-8 h-8 border border-gold/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-xs">{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-inter text-ivory/70 text-[12px] font-medium tracking-wide mb-1">{item.label}</p>
                    <p className="font-inter text-ivory/55 text-[13px] leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/573174538636" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-7 py-4 bg-[#25D366] hover:bg-[#20bf5b] text-white font-inter text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-300">
              <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.374 0 0 5.373 0 12c0 2.917 1.04 5.591 2.757 7.676L.906 23.25l3.671-1.81A11.94 11.94 0 0012 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 21.818a9.818 9.818 0 01-5.012-1.375l-.358-.213-3.724 1.836 1.87-3.63-.233-.375A9.818 9.818 0 1112 21.818z" /></svg>
              Chatear por WhatsApp
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', label: 'Nombre', type: 'text', placeholder: 'Tu nombre completo' },
                { name: 'phone', label: 'Teléfono', type: 'tel', placeholder: '+57 000 000 0000' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block font-inter text-ivory/60 text-[9px] tracking-[0.28em] uppercase mb-2.5">{field.label}</label>
                  <input type={field.type} name={field.name} value={form[field.name as keyof typeof form]} onChange={handleChange} required placeholder={field.placeholder} className="w-full bg-transparent border-b border-ivory/20 focus:border-gold py-3 font-inter text-ivory/90 text-[14px] outline-none transition-colors duration-300 placeholder:text-ivory/40" />
                </div>
              ))}

              <div>
                <label className="block font-inter text-ivory/60 text-[9px] tracking-[0.28em] uppercase mb-2.5">Procedimiento</label>
                <div className="relative">
                  <select name="service" value={form.service} onChange={handleChange} className="w-full bg-transparent border-b border-ivory/20 focus:border-gold py-3 font-inter text-ivory/90 text-[14px] outline-none transition-colors duration-300 appearance-none cursor-pointer">
                    <option value="" className="bg-charcoal text-ivory/70">Seleccionar procedimiento</option>
                    {serviceOptions.map((s) => <option key={s} value={s} className="bg-charcoal text-ivory">{s}</option>)}
                  </select>
                  <span className="absolute right-0 top-3 text-gold/60 text-xs pointer-events-none">▾</span>
                </div>
              </div>

              <div>
                <label className="block font-inter text-ivory/60 text-[9px] tracking-[0.28em] uppercase mb-2.5">Mensaje (opcional)</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Cuéntanos sobre tu consulta..." className="w-full bg-transparent border-b border-ivory/20 focus:border-gold py-3 font-inter text-ivory/90 text-[14px] outline-none transition-colors duration-300 resize-none placeholder:text-ivory/40" />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-4 border border-gold/60 text-gold font-inter text-[10px] tracking-[0.28em] uppercase hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 cursor-pointer">
                  {sent ? '✓ Abriendo WhatsApp...' : 'Enviar Consulta'}
                </button>
                <p className="font-inter text-ivory/45 text-[10px] text-center mt-3 leading-relaxed">Al enviar, serás redirigido a WhatsApp para confirmar tu cita.</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

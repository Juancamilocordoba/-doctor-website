import React, { useState, useEffect } from 'react'

const navLinks = ['Inicio', 'Servicios', 'Testimonios', 'Contacto']

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: (<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>) },
  { label: 'TikTok', href: 'https://tiktok.com', icon: (<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.17a8.16 8.16 0 004.78 1.52V7.25a4.85 4.85 0 01-1.01-.56z" /></svg>) },
  { label: 'WhatsApp', href: 'https://wa.me/573174538636', icon: (<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.374 0 0 5.373 0 12c0 2.917 1.04 5.591 2.757 7.676L.906 23.25l3.671-1.81A11.94 11.94 0 0012 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 21.818a9.818 9.818 0 01-5.012-1.375l-.358-.213-3.724 1.836 1.87-3.63-.233-.375A9.818 9.818 0 1112 21.818z" /></svg>) },
]

export default function Footer() {
  const [year, setYear] = useState('2025')
  useEffect(() => { setYear(new Date().getFullYear().toString()) }, [])

  return (
    <footer className="bg-charcoal-deep border-t border-gold/8 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-gold/50 flex items-center justify-center">
                <span className="font-playfair text-gold text-xs">ZT</span>
              </div>
              <div>
                <p className="font-playfair text-ivory/90 text-sm">Dra. Zharick Tobar</p>
                <p className="font-inter text-gold/70 text-[9px] tracking-[0.22em] uppercase">Medicina Estética</p>
              </div>
            </div>
            <p className="font-inter text-ivory/50 text-[12px] leading-relaxed mb-5">Arte y ciencia al servicio<br />de tu belleza natural.</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-8 h-8 border border-ivory/20 flex items-center justify-center text-ivory/50 hover:border-gold/40 hover:text-gold transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-inter text-ivory/45 text-[9px] tracking-[0.28em] uppercase mb-5">Navegación</p>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="font-inter text-ivory/40 text-[13px] hover:text-gold transition-colors duration-300">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-inter text-ivory/45 text-[9px] tracking-[0.28em] uppercase mb-5">Contacto</p>
            <ul className="space-y-3">
              <li><a href="tel:+573174538636" className="font-inter text-ivory/40 text-[13px] hover:text-gold transition-colors duration-300">+57 317 453 8636</a></li>
              <li><a href="https://wa.me/573174538636" target="_blank" rel="noopener noreferrer" className="font-inter text-ivory/40 text-[13px] hover:text-gold transition-colors duration-300">WhatsApp</a></li>
              <li className="font-inter text-ivory/45 text-[12px] leading-relaxed pt-1">Babilla Plaza · Local 301<br />Cali, Colombia</li>
            </ul>
          </div>

          <div>
            <p className="font-inter text-ivory/45 text-[9px] tracking-[0.28em] uppercase mb-5">Horario</p>
            <ul className="space-y-2">
              <li className="font-inter text-ivory/40 text-[13px]">Lun – Vie: 9AM – 6PM</li>
              <li className="font-inter text-ivory/40 text-[13px]">Sábados: Previa cita</li>
              <li className="font-inter text-ivory/45 text-[11px] pt-2 tracking-wide">Cali, Colombia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-ivory/50 text-[11px]">© {year} Dra. Zharick Tobar · Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="h-px w-5 bg-gold/25" />
            <span className="font-inter text-gold/60 text-[9px] tracking-[0.25em] uppercase">Medicina Estética Avanzada · Cali</span>
            <span className="h-px w-5 bg-gold/25" />
          </div>
        </div>
      </div>
    </footer>
  )
}

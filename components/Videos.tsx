import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const videos = [
  { src: '/videos/menton.mp4', title: 'Proyección de Mentón', tag: 'Rellenos', duration: '1 min' },
  { src: '/videos/bioestimulador.mp4', title: 'Bioestimulador Radiesse', tag: 'Bioestimulación', duration: '2 min' },
  { src: '/videos/bruxismo.mp4', title: 'Toxina para Bruxismo', tag: 'Neuromoduladores', duration: '3 min' },
  { src: '/videos/procedimientos.mp4', title: 'Procedimientos Variados', tag: 'General', duration: '2 min' },
]

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handleEnter = () => { videoRef.current?.play(); setPlaying(true) }
  const handleLeave = () => {
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0 }
    setPlaying(false)
  }

  return (
    <motion.div
      className="group relative overflow-hidden cursor-pointer bg-charcoal-deep"
      style={{ aspectRatio: '9/16' }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <video ref={videoRef} src={video.src} muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'sepia(14%) saturate(88%) brightness(0.78)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent z-10" />
      <div className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 ${playing ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-12 h-12 border border-ivory/40 rounded-full flex items-center justify-center backdrop-blur-sm bg-charcoal/20 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
          <svg className="w-4 h-4 text-ivory fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>
      <div className="absolute top-4 left-4 z-20">
        <span className="font-inter text-[8px] tracking-[0.25em] uppercase px-2.5 py-1 bg-gold/90 text-charcoal">{video.tag}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
        <p className="font-playfair text-ivory font-normal mb-1" style={{ fontSize: 'clamp(15px, 1.8vw, 18px)' }}>{video.title}</p>
        <div className="flex items-center gap-3">
          <span className="font-inter text-ivory/35 text-[10px] tracking-wide">{video.duration}</span>
          <span className="h-px w-6 bg-gold/30" />
          <span className="font-inter text-gold/60 text-[9px] tracking-[0.2em] uppercase">Ver procedimiento</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Videos() {
  return (
    <section id="videos" className="bg-cream py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div className="mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85 }}>
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-gold" />
            <span className="font-inter text-gold text-[10px] tracking-[0.35em] uppercase">En Detalle</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-playfair text-ink font-normal" style={{ fontSize: 'clamp(30px, 4.5vw, 48px)' }}>Procedimientos Reales</h2>
            <p className="font-inter text-ink-muted text-sm max-w-xs text-right hidden md:block leading-relaxed">Pasa el cursor sobre cada video para ver el procedimiento en acción.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {videos.map((video, i) => <VideoCard key={video.src} video={video} index={i} />)}
        </div>

        <motion.div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stone" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
          <p className="font-cormorant italic text-ink-muted text-xl">"Cada detalle importa. Cada procedimiento, perfecto."</p>
          <a href="https://wa.me/573174538636" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 px-7 py-3.5 border border-gold/60 text-gold font-inter text-[10px] tracking-[0.25em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300">
            Agendar mi Consulta
          </a>
        </motion.div>
      </div>
    </section>
  )
}

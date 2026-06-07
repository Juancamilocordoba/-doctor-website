import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Videos from '../components/Videos'
import Testimonials from '../components/Testimonials'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dra. Zharick Tobar | Medicina Estética & Antiage · Cali</title>
        <meta
          name="description"
          content="Medicina estética de precisión con resultados naturales y duraderos. Rellenos, botox, bioestimulación, hidratación en Cali, Colombia. Dra. Zharick Tobar."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Dra. Zharick Tobar | Medicina Estética & Antiage" />
        <meta
          property="og:description"
          content="Arte y ciencia al servicio de tu belleza natural. Procedimientos avanzados en Cali."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Gallery />
        <Videos />
        <Testimonials />
        <Booking />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

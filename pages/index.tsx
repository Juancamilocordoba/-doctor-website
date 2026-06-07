import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dra. Zharick Tobar | Medicina Estética en Cali</title>
        <meta name="description" content="Medicina estética avanzada. Procedimientos de rellenos, botox, radiesse y más." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Services />
      <Booking />
      <Footer />
    </>
  )
}

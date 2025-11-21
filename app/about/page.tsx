'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutHero from './aboutHero'
import WhoWeAre from './whoWeAre'
import Features from './features'
import OurLawyer from './ourLawyer'
import StatisticsSection from './statisticsSection'
import Client from './client'
import Review from '@/components/Home/Review/Review'

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    })
  }, [])

  return (
     <div className=' overflow-hidden'>
      <AboutHero />
      <WhoWeAre />
      <Features />
      <OurLawyer />
      <StatisticsSection />
      <Review />
      <Client />
    </div>
  )
}

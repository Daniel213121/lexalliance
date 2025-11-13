'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Hero from './Hero'
import Welcome from './Welcome'
import Review from './Review/Review'
import Ourteam from './Ourteam'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    })
  }, [])

  return (
    <div className=' overflow-hidden'>
      <Hero />
      <Welcome />
      <Review />
      <Ourteam />
    </div>
  )
}

export default Home
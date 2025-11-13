"use client";
import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className='fixed bottom-8 right-8 z-40 p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95'
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  )
}

export default ScrollToTop

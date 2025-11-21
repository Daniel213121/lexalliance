"use client"
import React from 'react'
import ReviewSlider from './ReviewSlider'
import { useLocale } from '@/components/Locale/LocaleProvider'

const Review = () => {
  const { t } = useLocale()
  return (
    <div className='py-16 sm:py-20 lg:py-24 px-6 md:px-12 lg:px-24 bg-white' data-aos="fade-up">
        {/* Section Header */}
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-12 sm:mb-16' data-aos="zoom-in" data-aos-delay="100">
                <p className='text-amber-500 font-semibold text-sm sm:text-base tracking-widest uppercase mb-4'>
                  {t('review.label')}
                </p>
                <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4'>
                  {t('review.heading')}
                </h2>
                <p className='text-slate-400 text-base sm:text-lg max-w-2xl mx-auto'>
                  {t('review.description')}
                </p>
                <div className='w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full'></div>
            </div>

            {/* Carousel Container */}
            <div className='mt-12 sm:mt-16' data-aos="fade-up" data-aos-delay="150">
                <ReviewSlider />
            </div>
        </div>
    </div>
  )
}

export default Review

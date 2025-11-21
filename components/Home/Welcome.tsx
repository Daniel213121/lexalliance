'use client'
import React from 'react'
import Image from 'next/image'
import { Users2, Gavel, Heart } from 'lucide-react'
import { useLocale } from '@/components/Locale/LocaleProvider'

const Welcome = () => {
  const { t } = useLocale()
  const rawServices = (t('welcome.services') as any[]) || [
    { id: 1, title: 'Business Law', description: 'Expert guidance for corporate matters, contracts, and business transactions', icon: Users2, image: '/welcome/18.jpg' },
    { id: 2, title: 'Family Law', description: 'Compassionate legal support for family matters and personal disputes', icon: Heart, image: '/welcome/5.jpg' },
    { id: 3, title: 'Criminal Law', description: 'Dedicated defense and representation in criminal proceedings', icon: Gavel, image: '/welcome/19.jpg' },
  ]

  const services = rawServices.map((s) => ({
    id: s.id,
    title: s.title,
    description: s.description,
    // ensure an image path exists for Next/Image
    image: s.image ?? (s.id === 1 ? '/welcome/18.jpg' : s.id === 2 ? '/welcome/5.jpg' : '/welcome/19.jpg'),
    // ensure the icon is a component (fall back to our local icon components)
    icon: s.icon ?? (s.id === 1 ? Users2 : s.id === 2 ? Heart : Gavel),
  }))

  return (
    <div className='w-full bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-20 lg:py-24' data-aos="fade-up">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-start'>
          
          {/* Left - Heading and Description */}
          <div className='space-y-6' data-aos="fade-right" data-aos-delay="100">
            <div>
              <p className='text-amber-500 font-semibold text-sm sm:text-base tracking-widest uppercase mb-4'>{t('welcome.label')}</p>
              <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                {t('welcome.headingLine1')}<br />
                <span className='text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-300'>
                  {t('welcome.headingLine2')}
                </span>
              </h2>
              <div className='w-16 h-1 bg-amber-500 mt-6 rounded-full'></div>
            </div>
          </div>

          {/* Right - Description Text */}
          <div className='flex flex-col justify-start' data-aos="fade-left" data-aos-delay="150">
            <p className='text-slate-300 text-base sm:text-lg leading-relaxed'>
              {t('welcome.description')}
            </p>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className='group relative h-full min-h-80 sm:min-h-96 overflow-hidden rounded-2xl'
                data-aos="fade-up"
                data-aos-delay={service.id * 150}
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className='absolute inset-0 object-cover group-hover:scale-110 transition-transform duration-500'
                />

                {/* Dark Overlay - more visible by default, fades on hover */}
                <div className='absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-slate-900/20 group-hover:from-slate-900/80 group-hover:via-slate-900/40 group-hover:to-slate-900/10 transition-all duration-500'></div>

                {/* Content - positioned absolutely */}
                <div className='relative h-full flex flex-col justify-end p-6 sm:p-8'>
                  
                  {/* Icon and Title */}
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='p-3 bg-amber-500 rounded-lg group-hover:bg-amber-400 transition-colors duration-300'>
                      <IconComponent className='w-6 h-6 text-slate-900' />
                    </div>
                    <h3 className='text-2xl sm:text-3xl font-bold text-white'>{service.title}</h3>
                  </div>

                  {/* Description - hidden on mobile, shown on hover or larger screens */}
                  <p className='text-slate-200 text-sm sm:text-base leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 sm:opacity-100'>
                    {service.description}
                  </p>

                  {/* Read More Button */}
                  <button className='w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 uppercase text-sm sm:text-base tracking-wide opacity-0 group-hover:opacity-100 sm:opacity-100 transform group-hover:translate-y-0 translate-y-4 group-hover:duration-500'>
                    {t('welcome.readMore')}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10 opacity-50'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10 opacity-50'></div>
      </div>
    </div>
  )
}

export default Welcome

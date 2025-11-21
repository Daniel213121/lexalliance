'use client'

import Image from 'next/image'
import React from 'react'
import { useLocale } from '@/components/Locale/LocaleProvider'
import { aboutTranslations } from '@/constant/aboutTranslations'

const clients = [
  '/about/client/client-logo-light-grey-01.png',
  '/about/client/client-logo-light-grey-02.png',
  '/about/client/client-logo-light-grey-03.png',
  '/about/client/client-logo-light-grey-04.png',
  '/about/client/client-logo-light-grey-05.png',
  '/about/client/client-logo-light-grey-06.png',
  '/about/client/client-logo-light-grey-07.png',
  '/about/client/img5.png',
  '/about/client/img6.png',
  '/about/client/img7.png',
  '/about/client/img8.png',
]

const ClientSection = () => {
  const { lang } = useLocale()
  const t = aboutTranslations[lang].client

  return (
    <section className="relative isolate overflow-hidden bg-slate-50/60 py-16 sm:py-24">
      <div className="absolute inset-x-8 top-10 -z-10 h-72 rounded-3xl bg-linear-to-r from-amber-100 via-white to-amber-50 blur-3xl" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
        
        <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none group" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-slate-50 to-transparent" />
            <div className="flex w-max animate-[marqueeScroll_30s_linear_infinite] group-hover:[animation-play-state:paused] gap-16 items-center">
                {[...clients, ...clients].map((client, index) => (
                    <div 
                      key={index} 
                      className="relative w-32 h-20 sm:w-40 sm:h-24 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                    >
                      <Image
                        src={client}
                        alt={`Client logo ${index}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-l from-slate-50 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default ClientSection

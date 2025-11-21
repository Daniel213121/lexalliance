"use client"
import React from 'react'
import Image from 'next/image'
import { useLocale } from '@/components/Locale/LocaleProvider'
import { aboutTranslations } from '@/constant/aboutTranslations'

const aboutHero: React.FC = () => {
  const { lang } = useLocale()
  const t = aboutTranslations[lang].hero

  return (
    <section className="relative h-[60vh] sm:h-[72vh] lg:h-[56vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src={'/about/hero/sl-1.jpg'} alt="About hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/30 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl h-full flex items-center px-6 sm:px-8">
        <div className="w-full text-center sm:text-left" data-aos="fade-up" data-aos-delay="200">
          <span className="inline-flex items-center bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-widest">
            {t.label}
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t.heading}
          </h1>
          <div className="w-20 h-1 bg-amber-500 rounded-full mt-6 mx-auto sm:mx-0" />
          <p className="mt-4 text-slate-200 max-w-2xl mx-auto sm:mx-0">{t.subtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default aboutHero

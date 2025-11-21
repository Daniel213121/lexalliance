'use client'

import React, { useEffect, useState } from 'react'
import { useLocale } from '@/components/Locale/LocaleProvider'
import { aboutTranslations } from '@/constant/aboutTranslations'

interface CountUpProps {
  end: number
  duration: number
}

const CountUp: React.FC<CountUpProps> = ({ end, duration }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration
      if (progress < 1) {
        setCount(Math.floor(end * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [end, duration])

  return <span>{count}</span>
}

const StatisticsSection = () => {
  const { lang } = useLocale()
  const t = aboutTranslations[lang].statistics

  return (
    <section className="bg-slate-950 text-white py-12 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {t.items.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-4 text-center sm:p-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Hover background */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-amber-300 to-amber-600 mb-2">
                  <CountUp end={parseInt(stat.value)} duration={2000} />
                  <span>{stat.suffix}</span>
                </p>
                <div className="h-1 w-12 mx-auto bg-amber-500/30 rounded-full mb-4 group-hover:w-20 transition-all duration-300" />
                <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection

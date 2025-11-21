'use client'

import Image from 'next/image'
import React from 'react'
import { useLocale } from '@/components/Locale/LocaleProvider'
import { aboutTranslations } from '@/constant/aboutTranslations'

const OurLawyer = () => {
  const { lang } = useLocale()
  const t = aboutTranslations[lang].ourLawyer
  const lawyers = [
    {
      ...t.lawyers[0],
      image: '/about/ourLawyer/BarristerAntonyGolsan.jpg',
    },
    {
      ...t.lawyers[1],
      image: '/about/ourLawyer/21.jpg',
    },
    {
      ...t.lawyers[2],
      image: '/about/ourLawyer/Daniel Reed.jpg',
    },
    {
      ...t.lawyers[3],
      image: '/about/ourLawyer/Michael Carter.jpg',
    },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-slate-50/60 py-16 sm:py-24">
      <div className="absolute inset-x-8 top-10 -z-10 h-72 rounded-3xl bg-linear-to-r from-amber-100 via-white to-amber-50 blur-3xl" />

      <div className="mx-auto w-[90%] max-w-6xl space-y-4 text-center sm:text-left" data-aos="fade-up">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-600">{t.label}</p>
        <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">{t.heading}</h2>
        <p className="text-base text-slate-600 sm:text-lg">
          {t.description}
        </p>
      </div>

      <div className="mt-12 space-y-16">
        {lawyers.map((lawyer, index) => {
          const imageOrder = index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
          const contentOrder = index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'

          return (
            <div
              key={lawyer.name}
              className="mx-auto grid w-[90%] max-w-6xl gap-8 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl shadow-amber-500/10 backdrop-blur lg:grid-cols-2 lg:items-center lg:gap-14"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`order-1 ${imageOrder}`}>
                <div className="relative overflow-hidden rounded-32px border border-slate-200 bg-white shadow-xl shadow-slate-400/30">
                  <Image
                    src={lawyer.image}
                    alt={lawyer.name}
                    width={560}
                    height={640}
                    className="h-full w-full object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute bottom-6 left-6 rounded-2xl bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-900/40">
                    {lawyer.title}
                  </div>
                </div>
              </div>

              <div className={`order-2 space-y-6 ${contentOrder}`}>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">{t.profileLabel}</p>
                  <h3 className="mt-2 text-3xl font-bold text-slate-900">{lawyer.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{lawyer.bio}</p>
                </div>
                <ul className="space-y-3">
                  {lawyer.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 rounded-2xl border border-slate-200/60 bg-slate-50/60 p-4 text-sm leading-relaxed text-slate-600"
                    >
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/15 text-xs font-bold text-amber-600">
                        ✓
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-64 bg-linear-to-r from-amber-100 via-transparent to-amber-100 blur-3xl" />

    </section>
  )
}

export default OurLawyer

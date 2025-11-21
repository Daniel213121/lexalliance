"use client"
import Image from 'next/image'
import React from 'react'
import { useLocale } from '@/components/Locale/LocaleProvider'
import { aboutTranslations } from '@/constant/aboutTranslations'

const WhoWeAre = () => {
  const { lang } = useLocale()
  const t = aboutTranslations[lang].whoWeAre

  return (
    <section className="relative isolate overflow-hidden bg-slate-50/60 py-16 sm:py-24">
      <div className="absolute inset-x-8 top-10 -z-10 h-72 rounded-3xl bg-linear-to-r from-amber-100 via-white to-amber-50 blur-3xl" />
      <div className="mx-auto flex w-[90%] max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6" data-aos="fade-right">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            {t.label}
          </p>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            {t.heading}
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            {t.p1}
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            {t.p2}
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <article className="flex flex-1 min-w-[220px] gap-4 rounded-2xl bg-white/80 p-6 shadow-xl shadow-amber-500/10 backdrop-blur" data-aos="fade-up" data-aos-delay="100">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-2xl font-bold text-amber-600">
                01
              </div>
              <div>
                <p className="text-xl font-semibold text-slate-900">{t.stat1.label}</p>
                <p className="text-sm text-slate-500">
                  {t.stat1.desc}
                </p>
              </div>
            </article>
            <article className="flex flex-1 min-w-[220px] gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-sm backdrop-blur" data-aos="fade-up" data-aos-delay="200">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-500/10 text-2xl font-bold text-lime-600">
                02
              </div>
              <div>
                <p className="text-xl font-semibold text-slate-900">{t.stat2.label}</p>
                <p className="text-sm text-slate-500">
                  {t.stat2.desc}
                </p>
              </div>
            </article>
          </div>

        </div>

        <div className="relative flex flex-1 items-center justify-center" data-aos="fade-left">
          <div className="relative max-w-md">
            <div className="rounded-32px bg-white/90 p-3 shadow-2xl shadow-slate-300/60 backdrop-blur">
              <Image
                src="/about/WWA/Barrister.jpeg"
                alt="Founder Barrister Antony Golsan"
                width={640}
                height={480}
                className="h-auto w-full rounded-[28px] object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -right-12 hidden w-40 rounded-3xl bg-white p-2 shadow-xl shadow-slate-300/70 sm:block">
              <Image
                src="/about/WWA/B2.jpg"
                alt="Lex Alliance courtroom moments"
                width={320}
                height={240}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <div className="absolute -left-10 -bottom-8 hidden rounded-3xl border border-slate-100 bg-white/80 p-4 text-sm text-slate-600 shadow-lg shadow-slate-300/50 sm:flex sm:flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">{t.card.est}</p>
              <p className="text-lg font-bold text-slate-900">{t.card.name}</p>
              <p>{t.card.desc}</p>
            </div>
          </div>
          <div className="absolute left-0 top-10 -translate-x-8 rounded-full bg-lime-600 px-6 py-4 text-center text-white shadow-lg shadow-lime-500/40">
            <p className="text-3xl font-bold leading-none">25</p>
            <p className="text-xs font-semibold uppercase tracking-widest">{t.years}</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-64 bg-linear-to-r from-amber-100 via-transparent to-amber-100 blur-3xl" />
    </section>
  )
}

export default WhoWeAre

"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useLocale } from '@/components/Locale/LocaleProvider'
import { aboutTranslations } from '@/constant/aboutTranslations'

const Features = () => {
  const { lang } = useLocale()
  const t = aboutTranslations[lang].features
  const [activeTab, setActiveTab] = useState('attorneys')

  const activeContent = t.tabs.find((tab) => tab.id === activeTab)?.copy ?? t.tabs[0].copy

  return (
    <section className="bg-slate-950 text-white py-16 sm:py-24">
      <div className="mx-auto flex w-[90%] max-w-6xl flex-col gap-10 lg:flex-row lg:items-stretch">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-950 shadow-2xl shadow-black/40 lg:flex-1" data-aos="fade-right">
          <Image
            src="/about/features/sl-2.jpg"
            alt="Experienced attorney in the Lex Alliance library"
            width={900}
            height={700}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-900/20 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 grid gap-4 rounded-2xl bg-slate-950/70 p-5 shadow-2xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-400">
              {t.trackRecord}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {t.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 px-8 py-10 shadow-2xl shadow-black/30 backdrop-blur lg:flex-1" data-aos="fade-left">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-amber-400">
            <span className="h-px flex-1 bg-amber-400/40" />
            Features
            <span className="h-px flex-1 bg-amber-400/40" />
          </div>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white">{t.heading}</h2>
          <p className="mt-3 text-base text-white/70">
            {t.subheading}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            {t.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors text-center w-full sm:w-auto ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/40'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg leading-relaxed text-white">{activeContent}</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-amber-300/80">
              {t.tabs.find((tab) => tab.id === activeTab)?.detail}
            </p>
          </div>

          <ul className="mt-8 flex flex-col gap-4">
            {t.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 rounded-2xl border border-white/5 bg-slate-950/40 p-4 text-sm leading-relaxed text-white/80"
              >
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-300">
                  ✓
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features

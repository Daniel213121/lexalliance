"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
import translations, { LocaleKey } from '@/constant/translations'

type LocaleContextType = {
  lang: LocaleKey
  toggleLang: () => void
  t: (path: string) => any
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<LocaleKey>('en')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('site-lang') as LocaleKey | null
      if (stored && (stored === 'en' || stored === 'fr')) {
        setLang(stored)
        document.documentElement.lang = stored
      } else {
        const nav = (navigator.language || 'en').startsWith('fr') ? 'fr' : 'en'
        setLang(nav as LocaleKey)
        document.documentElement.lang = nav
      }
    } catch (e) {
      // ignore
    }
  }, [])

  const toggleLang = () => {
    const next: LocaleKey = lang === 'en' ? 'fr' : 'en'
    setLang(next)
    try {
      localStorage.setItem('site-lang', next)
    } catch (e) {}
    document.documentElement.lang = next
  }

  const t = (path: string) => {
    // simple path resolver like 'hero.title' or 'welcome.services.0.title'
    const parts = path.split('.')
    let cur: any = translations[lang]
    for (const p of parts) {
      if (cur == null) return undefined
      // if numeric index
      const idx = Number(p)
      cur = !Number.isNaN(idx) ? cur[idx] : cur[p]
    }
    return cur
  }

  return (
    <LocaleContext.Provider value={{ lang, toggleLang, t }}>{children}</LocaleContext.Provider>
  )
}

export const useLocale = () => {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

export default LocaleProvider

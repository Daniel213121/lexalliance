"use client"
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { useLocale } from '@/components/Locale/LocaleProvider'
import { CgClose } from 'react-icons/cg';
import { usePathname } from 'next/navigation';

type Props = {
    showNav?: boolean;
    CloseNav: () => void;
};

const MobileNav = ({CloseNav,showNav}:Props) => {

  const { lang, t } = useLocale()
  const pathname = usePathname()
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-full';

  const navKey = (id: number) => {
    switch (id) {
      case 1: return 'home'
      case 2: return 'about'
      case 3: return 'practice'
      case 4: return 'news'
      case 5: return 'contact'
      default: return ''
    }
  }

  const normalizePath = (path: string) => {
    if (path === '/Home') return '/home'
    if (path === '/') return '/'
    return path.toLowerCase().replace(/\/$/, '')
  }

  const isActive = (url: string) => {
    const current = normalizePath(pathname || '/')
    const target = normalizePath(url)
    if (target === '/home') {
      return current === '/home' || current === '/'
    }
    return current === target
  }

  if (!showNav) return null;

  return (
    <div className="lg:hidden">
      {/* overlay menu for mobile */}
  <div className="fixed inset-0 bg-black/60 z-50 transition-opacity" />

      {/* side panel on sm+; full-centred panel on mobile */}
  <aside className={`fixed inset-0 md:inset-auto md:right-0 md:top-0 md:h-full md:w-[60%] w-full bg-slate-900 text-white p-8 z-60 flex items-center justify-center md:items-start md:justify-start transition-transform duration-300 ${navOpen}`}>
        {/* close icon */}
        <button
          onClick={CloseNav}
          aria-label="Close menu"
          className="absolute top-4 right-4 text-amber-500 "
        >
          <CgClose className="w-8 h-8" />
        </button>
        <nav className="flex flex-col items-center space-y-6 md:items-start md:mt-12 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={CloseNav}
              className={`block text-2xl md:text-2xl font-medium w-fit md:w-full text-center md:text-left underline decoration-2 underline-offset-4 transition-colors duration-300 ${isActive(link.url) ? 'text-amber-400 decoration-amber-400' : 'text-slate-100 decoration-slate-600/40 hover:text-amber-400 hover:decoration-amber-400'}`}
            >
              {t ? (t(`nav.${navKey(link.id)}`) ?? link.label) : link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default MobileNav;
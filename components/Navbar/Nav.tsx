"use client";
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useLocale } from '@/components/Locale/LocaleProvider'
import { HiBars3BottomRight } from 'react-icons/hi2';
import { usePathname } from 'next/navigation';

type props = {
    openNav?: () => void;
};

const Nav = ({openNav}:props) => {

    const [navbg, setNavbg] = useState(false);
    const { lang, toggleLang, t } = useLocale()
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setNavbg(true);
            } else {
                setNavbg(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => 
            window.removeEventListener('scroll', handleScroll);
    }, []);

    const frenchLabels: Record<number, string> = {
        1: 'Accueil',
        2: 'À propos',
        3: 'Domaines de pratique',
        4: 'Actualités',
        5: 'Contact'
    }

    const normalizePath = (path: string) => {
        if (path === '/Home') {
            return '/home'
        }
        if (path === '/') {
            return '/'
        }
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
  return (
  <div className={`transition-all duration-200 h-[12vh] z-50 fixed w-full ${navbg ? 'bg-slate-900/95 shadow-xl border-b border-amber-500/30' : 'bg-linear-to-r from-slate-900        via-slate-800 to-slate-900'} backdrop-blur-md shadow-lg`}>
        <div className='flex items-center h-full justify-between sm:w-[90%] w-[95%] mx-auto'>
            {/* Logo Section */}
            <div className='flex items-center space-x-2'>
              <span className='text-amber-500 font-bold text-2xl sm:text-3xl tracking-wider'>Lex</span>
              <span className='text-slate-100 font-bold text-2xl sm:text-3xl tracking-wider'>Alliance</span>
            </div>
            {/* Navigation Links */}
            <div className='hidden lg:flex md:hidden items-center space-x-8'>
                                                                {navLinks.map((link) => (
                    <Link
                      href={link.url}
                      key={link.id}
                      className={`font-medium transition-colors duration-300 relative group underline decoration-2 underline-offset-4 ${isActive(link.url) ? 'text-amber-400 decoration-amber-400' : 'text-slate-200 decoration-slate-600/40 hover:text-amber-400 hover:decoration-amber-400'}`}
                    >
                                                                                                                        {t ? (t(`nav.${navKey(link.id)}`) ?? link.label) : link.label}
                    </Link>
                ))}
            </div>
            {/* Call to Action Button */}
            <div className='flex items-center space-x-4'>
                {/* Language toggle button replaces previous Call Now CTA */}
                <button
                    onClick={toggleLang}
                    aria-label={lang === 'en' ? 'Switch to French' : 'Passer en anglais'}
                    className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-semibold text-amber-500 transition duration-300 ease-out border-2 border-amber-500 rounded-lg shadow-md hover:shadow-lg group hover:bg-amber-50"
                >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-slate-900 duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                        {lang === 'en' ? 'FR' : 'EN'}
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
                        {lang === 'en' ? 'Français' : 'English'}
                    </span>
                    <span className="relative invisible">{lang === 'en' ? 'Français' : 'English'}</span>
                </button>
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default Nav

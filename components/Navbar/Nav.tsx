"use client";
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';

type props = {
    openNav?: () => void;
};

const Nav = ({openNav}:props) => {

    const [navbg, setNavbg] = useState(false);

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
                      className='text-slate-200 hover:text-amber-400 font-medium transition-colors duration-300 relative group underline decoration-slate-600/40 hover:decoration-amber-400 decoration-2 underline-offset-4'
                    >
                      {link.label}
                    </Link>
                ))}
            </div>
            {/* Call to Action Button */}
            <div className='flex items-center space-x-4'>
                <a href="tel:+1234567890" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-amber-500 transition duration-300 ease-out border-2 border-amber-500 rounded-lg shadow-md hover:shadow-lg group hover:bg-amber-50">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-slate-900 duration-300 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">Call Now</span>
                <span className="relative invisible">Call Now</span>
                </a>
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default Nav

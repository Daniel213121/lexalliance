"use client"
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
    showNav?: boolean;
    CloseNav: () => void;
};

const MobileNav = ({CloseNav,showNav}:Props) => {

    const navOpen = showNav ? 'translate-x-0' : 'translate-x-full';
  
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
              className="block text-slate-100 text-2xl md:text-2xl font-medium w-fit md:w-full text-center md:text-left underline decoration-slate-600/40 hover:decoration-amber-400 decoration-2 underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default MobileNav;
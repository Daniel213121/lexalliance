'use client'
import React from 'react'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='mx-6 pt-20' data-aos="fade-up" data-aos-duration="1000">
    <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
        {/* Main Hero Card */}
        <div className='relative flex-1 flex flex-col bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl xl:min-h-100 group border border-amber-500/20 overflow-hidden' data-aos="fade-right" data-aos-delay="100">
            {/* Decorative amber glow */}
            <div className='absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10'></div>
            
            <div className='p-5 sm:p-16 relative z-10'>
                <div className='inline-flex items-center gap-3 bg-amber-500/15 text-amber-400 pr-4 p-1 rounded-full text-xs sm:text-sm border border-amber-500/30'>
                    <span className='bg-amber-500 px-3 py-1 max-sm:ml-1 rounded-full text-slate-900 text-xs font-semibold'>LEGAL</span> Expert Legal Solutions for Your Business <ChevronRightIcon className='group-hover:ml-2 transition-all' size={16} />
                </div>
                <h2 className='text-3xl sm:text-5xl leading-[1.2] my-3 font-bold bg-linear-to-r from-slate-100 to-amber-400 bg-clip-text text-transparent max-w-xs sm:max-w-md'>
                    Justice You Can Trust
                </h2>
                <div className='text-slate-300 text-sm font-medium mt-4 sm:mt-8'>
                    <p>Professional Legal Services Starting at</p>
                    <p className='text-3xl text-amber-400 font-bold'>$199</p>
                </div>
                <button className='bg-amber-500 text-slate-900 text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-lg hover:bg-amber-400 hover:scale-105 active:scale-95 transition font-semibold shadow-lg hover:shadow-amber-500/50'>GET CONSULTATION</button>
            </div>
            <Image className='sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm object-cover' src='/hero/1.jpg' alt="Law firm consultation" width={400} height={400} />
        </div>

        {/* Side Cards */}
        <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm'>
            {/* Card 1: Services */}
            <div className='flex-1 flex items-center justify-between w-full bg-linear-to-br from-amber-500/20 to-amber-600/10 rounded-3xl p-6 px-8 group border border-amber-500/30 hover:border-amber-500/50 transition overflow-hidden' data-aos="fade-left" data-aos-delay="200">
                <div className='relative z-10'>
                    <p className='text-2xl sm:text-3xl font-bold bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent max-w-40'>Expert Services</p>
                    <p className='flex items-center gap-1 mt-4 text-amber-400 hover:text-amber-300 font-semibold transition cursor-pointer'>Explore <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                </div>
                <Image className='w-32 sm:w-40 object-cover opacity-90 group-hover:opacity-100 transition' src='/hero/2.png' alt="Legal services" width={200} height={200} />
            </div>

            {/* Card 2: Experience */}
            <div className='flex-1 flex items-center justify-between w-full bg-linear-to-br from-slate-700/40 to-slate-800/40 rounded-3xl p-6 px-8 group border border-slate-600/40 hover:border-amber-500/40 transition overflow-hidden' data-aos="fade-left" data-aos-delay="300">
                <div className='relative z-10'>
                    <p className='text-2xl sm:text-3xl font-bold bg-linear-to-r from-slate-200 to-amber-300 bg-clip-text text-transparent max-w-40'>25+ Years</p>
                    <p className='flex items-center gap-1 mt-4 text-slate-300 hover:text-amber-400 font-semibold transition cursor-pointer'>Learn More <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                </div>
                <Image className='w-32 sm:w-40 object-cover opacity-90 group-hover:opacity-100 transition' src='/hero/3.jpg' alt="Experience" width={200} height={200} />
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero
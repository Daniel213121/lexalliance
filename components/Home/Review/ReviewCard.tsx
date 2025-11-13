import React from 'react'
import { BsQuote } from 'react-icons/bs';

type Props = {
    name: string;
    review: string;
    caseType?: string;
}

const ReviewCard = ({name, review, caseType = "Legal Client"}:Props) => {
  return (
    <div className='h-full'>
        {/* Card Container */}
        <div className='bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-amber-500/20'>
            
            {/* Quote Icon */}
            <div className='mb-4'>
                <BsQuote className='w-10 h-10 text-amber-500' />
            </div>

            {/* Review Text */}
            <p className='text-slate-300 italic text-base sm:text-lg leading-relaxed mb-8 flex-1'>
                "{review}"
            </p>

            {/* Divider */}
            <div className='w-12 h-1 bg-linear-to-r from-amber-500 to-amber-400 rounded-full mb-6'></div>

            {/* Client Info */}
            <div className='space-y-3'>
                <div>
                    <h3 className='text-white font-bold text-sm sm:text-base'>{name}</h3>
                    <p className='text-amber-400 text-xs sm:text-sm font-semibold'>{caseType}</p>
                </div>
            </div>

            {/* Star Rating */}
            <div className='flex items-center gap-1 mt-4'>
                {[...Array(5)].map((_, i) => (
                    <span key={i} className='text-amber-400 text-lg'>★</span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ReviewCard

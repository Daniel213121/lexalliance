"use client"
import React from 'react'
import Image from 'next/image'
import { useLocale } from '@/components/Locale/LocaleProvider'
import type { IconType } from 'react-icons'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa'

type SocialLink = {
  id: string
  label: string
  href: string
  icon: IconType
}

type TeamMember = {
  id: number
  name: string
  role: string
  img: string
  bio: string
  socials?: SocialLink[]
}

const Ourteam: React.FC = () => {
  const { t } = useLocale()
  const members = (t('team.members') as TeamMember[]) || []
  return (
    <section className='relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-slate-950' data-aos="fade-up">
      <div className='pointer-events-none absolute inset-0 opacity-70'>
        <div className='absolute -left-32 top-10 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl' />
        <div className='absolute bottom-10 right-0 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl' />
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-3xl flex-col items-center gap-6 text-center' data-aos="zoom-in" data-aos-delay="100">
          <span className='inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200'>
            {t('team.label')}
          </span>
          <h2 className='text-3xl font-semibold text-white sm:text-4xl lg:text-5xl'>
            {t('team.heading')}
          </h2>
          <p className='text-sm text-slate-300 sm:text-base'>
            {t('team.description')}
          </p>
        </div>

        <div className='mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {members.map((member: any, idx: number) => (
            <article
              key={member.id || idx}
              className='group relative rounded-3xl border border-white/5 bg-white/5 p-1px shadow-[0_20px_60px_-30px_rgba(8,47,73,0.7)] transition-all duration-500 hover:-translate-y-2 hover:bg-amber-500/30'
              data-aos="fade-up"
              data-aos-delay={(idx) * 150}
            >
              <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-slate-900/70 backdrop-blur'>
                <div className='absolute inset-x-6 top-4 z-10 flex justify-between'>
                  <span className='inline-flex items-center rounded-full bg-slate-950/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-amber-200/90'>
                    {member.role}
                  </span>

                  <div className='flex items-center gap-2'>
                    {/* placeholder socials - keep empty or add default icons if needed */}
                    <a className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs text-slate-200 transition-colors duration-300 hover:border-amber-400 hover:bg-amber-500/30 hover:text-white'>
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                <div className='relative h-72 w-full overflow-hidden bg-slate-800'>
                  <Image
                    src={`/team/${member.id}.jpg`}
                    alt={member.name}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                    priority={member.id === 1}
                  />
                  <div className='pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60' />
                </div>

                <div className='flex flex-1 flex-col justify-between px-6 pb-8 pt-6 sm:px-7'>
                  <div className='space-y-3 text-center text-slate-200'>
                    <h3 className='text-xl font-semibold text-white'>{member.name}</h3>
                    <p className='text-sm leading-relaxed text-slate-300'>{member.bio}</p>
                  </div>

                  <div className='mt-6 flex items-center justify-center gap-6 text-xs font-medium uppercase tracking-[0.18em] text-amber-200/80'>
                    <span className='inline-flex items-center gap-2'>
                      <span className='h-1 w-6 rounded-full bg-amber-400/80 transition-all duration-300 group-hover:w-8' />
                      Trusted Counsel
                    </span>
                    <span className='inline-flex items-center gap-2 text-slate-400 group-hover:text-amber-200'>
                      <span className='h-1 w-6 rounded-full bg-slate-500/70 transition-all duration-300 group-hover:bg-amber-300' />
                      Global Insight
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ourteam

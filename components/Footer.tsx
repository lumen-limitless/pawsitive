'use client'

import { cn } from '@/lib/utils'
import PawsitiveSVG from 'public/pawsitive.svg'
import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="bg-[#131334]">
      <div
        className={cn(
          'relative flex w-full flex-col items-center justify-center px-5 py-5 lg:h-[120px] lg:flex-row',
        )}
      >
        <PawsitiveSVG className="relative left-5 h-12 lg:absolute" />

        <p className="text-center text-sm text-gray-50">
          Copyright &copy; {new Date().getFullYear()} Pawsitive Pet Care, LLC.
          All rights reserved.
        </p>

        <div className="relative right-5 flex items-center justify-center lg:absolute">
          <Socials />
        </div>
      </div>
      <div className="bg-black text-center">
        <p className="py-2 text-white">
          Website designed by{' '}
          <a
            href="https://toona.studio"
            className="font-bold"
            target="_blank"
            rel="noreferrer"
          >
            Toona ✦ Studio
          </a>
        </p>
      </div>
    </footer>
  )
}

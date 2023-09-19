'use client'

import PawsitiveSVG from 'public/pawsitive.svg'
import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="bg-[#131334]">
      <div className="flex w-full flex-col items-center justify-center gap-9 px-5 py-9 lg:flex-row">
        <PawsitiveSVG className="h-12" />

        <p className="text-center text-sm text-gray-50 lg:mr-auto">
          Copyright &copy; {new Date().getFullYear()} Pawsitive Pet Care, LLC.{' '}
          <br className="lg:hidden" />
          All rights reserved.
        </p>

        <div className="flex items-center justify-center">
          <Socials />
        </div>
      </div>

      <div className="bg-black text-center">
        <p className="py-5 text-white">
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

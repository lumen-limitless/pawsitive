'use client'

import Image from 'next/image'
import Link from 'next/link'
import HeroDogIMG from 'public/hero-dog.webp'
import HeroPawSVG from 'public/hero-paw.svg'
import { Button } from './ui/button'
import { Section } from './ui/section'

export default function Landing() {
  return (
    <Section id="home" className="flex-col overflow-x-clip pb-20 lg:pb-0">
      <div className="container flex flex-col-reverse lg:flex-row">
        <div className="flex max-w-3xl flex-grow flex-col items-center justify-center gap-6">
          <h1 className="mt-6 break-words text-[32px]/[44px] font-semibold lg:mt-0 lg:text-6xl">
            Caring for your pet like family
          </h1>
          <p className="text-lg">
            We treat your furry friend like one of our own, providing
            compassionate and attentive care. Enjoy hassle-free pet care with
            our convenient services and experienced professionals.
          </p>
          <div className="flex w-full flex-col items-center gap-3 lg:flex-row">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZjeY3eyTWUFIspFDHYJ-8zMeKA09ms8oJTrhtAPoiyf4kaQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="w-full lg:w-auto"
            >
              <Button className="w-full lg:w-auto">Book an appointment</Button>
            </a>

            <Link href="#contact" className="w-full lg:w-auto">
              <Button variant={'secondary'} className="w-full lg:w-auto">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <HeroPawSVG className="-rotate-30 absolute inset-0 -z-[1]" />
          <Image src={HeroDogIMG} alt="" priority quality={100} />
        </div>
      </div>
    </Section>
  )
}

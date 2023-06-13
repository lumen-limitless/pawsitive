'use client'

import Image from 'next/image'
import { Button } from './ui/button'
import { Section } from './ui/section'
import LandingDogIMG from 'public/landing-dog.png'
export default function Landing() {
  return (
    <Section id="home" className="px-5 py-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse lg:flex-row">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-6xl font-semibold">
            Caring for your pet like family
          </h1>
          <p className="text-lg">
            We treat your furry friend like one of our own, providing
            compassionate and attentive care. Enjoy hassle-free pet care with
            our convenient services and experienced professionals.
          </p>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <Button className="w-full lg:w-auto">Book an appointment</Button>
            <Button variant={'secondary'} className="w-full lg:w-auto">
              Contact us
            </Button>
          </div>
        </div>
        <div className="relative h-80 w-96">
          <Image src={LandingDogIMG} alt="" priority quality={100} fill />
        </div>
      </div>
    </Section>
  )
}

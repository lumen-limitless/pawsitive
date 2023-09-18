'use client'
import { BriefcaseIcon, DogIcon } from 'lucide-react'
import AboutDogSVG from 'public/about-dog.svg'
import { Badge } from './ui/badge'
import { Section } from './ui/section'

export default function About() {
  return (
    <Section id="about" col className="bg-[#CCBBF2]/10 px-5 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:flex-row lg:gap-[120px]">
        <div className="max-w-[631px] space-y-4">
          <h1 className="text-3xl font-semibold">About us</h1>

          <div className="flex gap-1">
            <p className="text-2xl text-primary">Amanda</p>
            <span className="text-2xl">CEO</span>
          </div>

          <div className="flex flex-col items-start justify-center gap-3">
            <Badge variant={'secondary'}>
              {' '}
              <BriefcaseIcon className="mr-1" /> Professional pet care provider
            </Badge>
            <Badge variant={'secondary'}>
              {' '}
              <DogIcon className="mr-1" />
              Dog trainer
            </Badge>
          </div>

          <div className="text-base/20 py-4 ">
            <p>
              Hi, my name is Amanda and I would love to be your pet care
              provider!
            </p>
            <br />
            <p>
              My professional experience in pet care started in 2019 as a Pack
              Leader at a local doggie daycare. In 2021, I resigned from my then
              position as an Assistant Manager
            </p>
            <br />
            <p>
              to pursue education in Positive Reinforcement Dog Training.
              Finally in early 2022, I was able to work full time as a
              Professional Pet Care Provider and Dog Trainer for my company
              Pawsitive Pet Care. I have been certified for Cat and Dog CPR and
              First Aid for over two years.
            </p>
          </div>
        </div>

        <AboutDogSVG className="relative mx-auto mt-12 w-[300px] lg:mx-0 lg:mt-0 lg:w-[700px]" />
      </div>
    </Section>
  )
}

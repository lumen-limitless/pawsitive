'use client'
import TrainingSVG from 'public/training.svg'
import { Section } from './ui/section'

export default function Training() {
  return (
    <>
      <Section col className=" bg-[#CCBBF2]/10 px-5 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 lg:flex-row">
          <TrainingSVG className="h-[208px] w-[303px]" />
          <div className="space-y-6">
            {' '}
            <h1 className="space-y-6 text-3xl font-semibold text-primary">
              Pawsitive Reinforcement dog training
            </h1>
            <p>
              Choose between 3 different high quality & affordable dog training
              options. Find the training package that best suits the needs of
              you and your furry companion.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

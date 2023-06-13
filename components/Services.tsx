'use client'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { Section } from './ui/section'
import PawCircleSVG from 'public/paw-circle.svg'
import PlusCircleSVG from 'public/plus-circle.svg'
import { Separator } from './ui/separator'
const services = [
  {
    title: 'Overnight pet sitting',
    description:
      'We treat your furry friend like one of our own, providing care.',
  },
  {
    title: 'Drop-in care',
    description:
      'We treat your furry friend like one of our own, providing care.',
  },
  {
    title: 'Dog walking',
    description:
      'We treat your furry friend like one of our own, providing care.',
  },
  {
    title: 'Adventure walk',
    description:
      'We treat your furry friend like one of our own, providing care.',
  },
]

export default function Services() {
  return (
    <Section id="services" className="px-5 py-12 md:py-[120px]">
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <h1 className="text-4xl font-semibold md:text-5xl">Services</h1>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title}>
              <PawCircleSVG className="h-20 w-20" />
              <h2 className="text-2xl">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 lg:flex-row">
          <Button className="w-full lg:w-auto">Schedule appointment</Button>
          <Button variant={'secondary'} className="w-full lg:w-auto">
            View prices <ArrowRight className="ml-2 inline-block" />
          </Button>
        </div>
        <Separator className="my-4" />
        <h2 className="text-2xl font-semibold">Add Ons</h2>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row">
          <div className="flex">
            <PlusCircleSVG className="h-10" />
            <p>Nail trim & file</p>
          </div>
          <div className="flex">
            <PlusCircleSVG className="h-10" />
            <p>Enrichment activity</p>
          </div>
          <div className="flex">
            <PlusCircleSVG className="h-10" />
            <p>Yarn clean-up</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

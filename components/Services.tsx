'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PawCircleSVG from 'public/paw-circle.svg';
import PlusCircleSVG from 'public/plus-circle.svg';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const services = [
  {
    title: 'Overnight pet sitting',
    description:
      'Price is per night, your pets will be cared for in your own home. $6 for additional dog, $2 for additional cat. ',
  },
  {
    title: 'Drop-in care',
    description:
      'One hour of care that can include feedings, playtime, administering medicine, cleaning accidents, and potty breaks.',
  },
  {
    title: 'Dog walking',
    description:
      'Each walk will start at 30 minutes, an additional 30 minutes will cost $10. Walks will be provided around your neighborhood.',
  },
  {
    title: 'Adventure walk',
    description:
      'This service includes your pet care provider picking up your dog(s) and taking them to a local hiking trail. One hour of walking and exploring.',
  },
];

export default function Services() {
  return (
    <section id="services" className="flex px-5 py-12 md:py-[120px] ">
      <div className="container flex w-full flex-col">
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
          <Button className="w-full lg:w-auto" asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZjeY3eyTWUFIspFDHYJ-8zMeKA09ms8oJTrhtAPoiyf4kaQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Schedule appointment
            </a>
          </Button>

          <Button variant={'secondary'} className="w-full lg:w-auto" asChild>
            <Link href="service-list.pdf" target="_blank">
              View prices <ArrowRight className="ml-2 inline-block" />
            </Link>
          </Button>
        </div>

        <Separator className="my-8" />

        <h2 className="text-2xl font-semibold">Add Ons</h2>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row">
          <div className="flex items-center">
            <PlusCircleSVG className="h-10" />
            <p>Nail trim & file</p>
          </div>
          <div className="flex items-center">
            <PlusCircleSVG className="h-10" />
            <p>Enrichment activity</p>
          </div>
          <div className="flex items-center">
            <PlusCircleSVG className="h-10" />
            <p>Teeth brushing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

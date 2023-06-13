'use client'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Section } from './ui/section'
import DoubleStarSVG from 'public/double-star.svg'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import LogoSVG from 'public/logo.svg'
import { Badge } from './ui/badge'
import { Tabs } from '@radix-ui/react-tabs'
import { TabsContent, TabsList, TabsTrigger } from './ui/tabs'

const PUPPY_PACKAGES = [
  {
    title: 'TRADITIONAL TRAINING PACKAGE',
    price: '$220',
    duration: '/6 weeks',
    includes: [
      'Skills: sit, lay down, come, place, touch',
      'Potty and crate training',
      'Enrichment activity',
    ],
    excludes: ['+5 drop-in visits', '+25% off overnight pet sitting'],
    cta: 'Schedule traditional training',
  },
  {
    title: 'PREMIUM TRAINING PACKAGE',
    price: '$335',
    duration: '/6 weeks',
    includes: [
      'Skills: sit, lay down, come, place, touch',
      'Potty and crate training',
      'Enrichment activity',
      '+5 drop-in visits',
    ],
    excludes: ['+25% off overnight pet sitting'],
    cta: 'Schedule premium training',
  },
  {
    title: 'ULTIMATE TRAINING PACKAGE',
    price: '$500',
    duration: '/8 weeks',
    includes: [
      'Skills: sit, lay down, come, place, touch',
      'Potty and crate training',
      'Enrichment activity',
      '+5 drop-in visits',
      '+25% off overnight pet sitting',
    ],
    excludes: [],
    cta: 'Schedule ultimate training',
  },
]

const puppyTrainingOptions = [
  {
    title: 'Training Evaluation',
    price: '$20',
    description:
      'Professional trainer Amanda will meet with you and your dog to discuss your goals and create a training plan.',
  },
  {
    title: 'Single Training Session',
    price: '$45',
    description: 'One hour personalized training session.',
  },
  {
    title: 'Training Package',
    price: '$150',
    description: 'Four one hour personalized training sessions.',
  },
  {
    title: 'Ultimate Puppy Package',
    price: '$500',
    description:
      'Eight sessions of training includes skills such as Sit, Stay, Down, Place, Touch, Heel, and Leave-it. Potty and crate training as well as enrichment activities are also included. 10 FREE Drop-in care sessions, plus 25% off overnight pet sitting for 8 weeks.',
  },
  {
    title: 'Premium Puppy Package',
    price: '$340',
    description:
      'Six sessions of training includes skills such as Sit, Stay, Down, Place, Touch, Heel, and Leave-it. Potty and crate training as well as enrichment activities are also included. 5 FREE Drop-in care sessions, plus 25% off overnight pet sitting for 6 weeks.',
  },
  {
    title: 'Traditional Puppy Package',
    price: '$235',
    description:
      'Six sessions of training includes skills such as Sit, Stay, Down, Place, Touch, Heel, and Leave-it.',
  },
]
const Breadcrumb = ({ selected }: { selected: boolean }) => {
  return (
    <svg
      className="h-6 w-6 text-primary"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_39_11773)">
        <path
          d="M7.58859 13.103C7.63312 10.9284 7.84828 9.27039 9.30316 7.50809C11.002 5.45027 12.8935 4.48313 15.5497 4.73846C18.6238 5.03395 20.963 5.39844 22.5971 9.32714C24.4354 13.7467 21.3124 19.1618 16.5819 19.8931C12.4441 20.5328 7.50286 17.2891 7.58859 13.103Z"
          fill="#F22078"
          fillOpacity={selected ? '0.5' : '0.1'}
        />
        <g opacity="0.5">
          <path
            d="M4.7087 13.103C4.75324 10.9284 4.96839 9.27039 6.42328 7.50809C8.12211 5.45027 10.0136 4.48313 12.6698 4.73846C15.7439 5.03395 18.0831 5.39844 19.7172 9.32714C21.5555 13.7467 18.4325 19.1618 13.7021 19.8931C9.56425 20.5328 4.62297 17.2891 4.7087 13.103Z"
            stroke="#F22078"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_39_11773">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5 0.199951)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default function Packages() {
  return (
    <>
      <Section id="packages" col className="bg-[#804DEC]/10 px-5 py-12">
        <div className="relative">
          <DoubleStarSVG className="absolute -right-20 -top-3 h-16 w-16 text-primary" />

          <h1 className="text-center text-3xl font-bold">
            Prices & <br className="lg:hidden" />
            packages
          </h1>
        </div>
        <Tabs defaultValue="puppy">
          <TabsList className="mt-3 lg:mt-0">
            <TabsTrigger value="puppy">Puppy</TabsTrigger>
            <TabsTrigger value="adult">Adult</TabsTrigger>
          </TabsList>
          <TabsContent
            value="puppy"
            className="hidden w-full max-w-7xl flex-row justify-center gap-6 lg:flex"
          >
            {PUPPY_PACKAGES.map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <h2 className="text-lg font-bold text-primary">
                    {item.title}
                  </h2>
                </CardHeader>

                <CardContent>
                  <div>
                    <strong className="text-2xl font-extrabold">
                      {item.price}
                    </strong>
                    <span className="text-opacity-80">{item.duration}</span>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <h3>6 weeks of training includes:</h3>
                    <ul className="list-inside">
                      {item.includes.map((include, i) => (
                        <li key={i}> {include}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="mt-4 justify-center">
                  <Button variant="secondary">{item.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          <TabsContent
            value="adult"
            className="mx-auto hidden w-full max-w-7xl flex-row justify-center gap-6 lg:flex"
          >
            {PUPPY_PACKAGES.map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <h2 className="text-lg font-bold text-primary">
                    {item.title}
                  </h2>
                </CardHeader>

                <CardContent>
                  <div>
                    <strong className="text-2xl font-extrabold">
                      {item.price}
                    </strong>
                    <span className="text-opacity-80">{item.duration}</span>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <h3>6 weeks of training includes:</h3>
                    <ul className="list-inside">
                      {item.includes.map((include, i) => (
                        <li key={i}> {include}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="mt-4 justify-center">
                  <Button variant="secondary">{item.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        <div className="mt-12 flex lg:hidden">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-bold text-primary"></h2>
            </CardHeader>

            <CardContent>
              <div>
                <strong className="text-2xl font-extrabold"></strong>
                <span className="text-opacity-80"></span>
              </div>

              <Separator className="my-4" />

              <div>
                <h3>6 weeks of training includes:</h3>
                <ul className="list-inside"></ul>
              </div>
            </CardContent>

            <CardFooter className="mt-4 justify-center">
              <Button variant="secondary"></Button>
            </CardFooter>
          </Card>
        </div>
        <div className="my-6 flex w-full items-center justify-center gap-6 lg:hidden">
          <button>
            <Breadcrumb selected />
          </button>
          <button>
            <Breadcrumb selected={false} />
          </button>
          <button>
            <Breadcrumb selected={false} />
          </button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="mt-12">
              Complete package list
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[80%]">
            <LogoSVG className="absolute left-3 top-3 h-12" />
            <div className="flex flex-col">
              <h1 className="mb-9 text-center text-2xl font-semibold">
                Dog Training
              </h1>

              <div className="flex flex-col gap-6 text-sm lg:text-base">
                {puppyTrainingOptions.map((option, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3">
                      <h2 className="text-base font-bold lg:text-lg">
                        {option.title}
                      </h2>{' '}
                      <Badge variant={'secondary'}>{option.price}</Badge>
                    </div>
                    <p>{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Section>
    </>
  )
}

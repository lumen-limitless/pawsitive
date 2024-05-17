'use client';
import { BriefcaseIcon, DogIcon } from 'lucide-react';
import { Badge } from './ui/badge';

export default function About() {
  return (
    <section
      id="about"
      className="xl:py-30 flex bg-[#CCBBF2]/10 py-12 md:py-20"
    >
      <div className="container flex flex-col lg:flex-row lg:gap-[120px]">
        <div className="max-w-[631px] space-y-4">
          <h1 className="text-3xl font-semibold">About us</h1>

          <div className="flex h-6 items-center gap-1 text-2xl font-semibold">
            <h2 className="text-grape">Amanda</h2>
            <span className="text-[#CCBBF2]">Founder</span>
          </div>

          <div className="flex items-center justify-start gap-3">
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
              position as an Assistant Manager to pursue education in Positive
              Reinforcement Dog Training.
            </p>
            <br />
            <p>
              Finally in early 2022, I was able to work full time as a
              Professional Pet Care Provider and Dog Trainer for my company
              Pawsitive Pet Care. I have been certified for Cat and Dog CPR and
              First Aid for over two years.
            </p>
          </div>
        </div>

        <svg
          viewBox="0 0 533 518"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M351.634 41.8977C444.691 83.7916 549.127 146.387 530.634 271.044C512.878 390.74 390.676 408.748 295 485.328C196.797 563.931 107.973 486.659 41.634 379.181C-6.09859 301.848 -10.9143 219.831 17.634 128.15C67.1328 -30.814 215.672 -19.3118 351.634 41.8977Z"
            fill="url(#pattern1)"
          />
          <path
            d="M351.634 41.8977C444.691 83.7916 549.127 146.387 530.634 271.044C512.878 390.74 390.676 408.748 295 485.328C196.797 563.931 107.973 486.659 41.634 379.181C-6.09859 301.848 -10.9143 219.831 17.634 128.15C67.1328 -30.814 215.672 -19.3118 351.634 41.8977Z"
            fill="url(#pattern1)"
          />
          <defs>
            <pattern id="pattern1" width="100%" height="100%">
              <image
                id="image1_18_6548"
                xlinkHref="about.webp"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
        </svg>
      </div>
    </section>
  );
}

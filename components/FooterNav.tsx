'use client'

import { cn } from '@/lib/utils'
import PawsitiveSVG from 'public/pawsitive.svg'
export function FooterNav() {
  return (
    <div
      className={cn(
        'flex h-[120px]  w-full items-center justify-center  px-5 lg:justify-start',
      )}
    >
      <PawsitiveSVG className="h-12" />
    </div>
  )
}

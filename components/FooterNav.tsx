'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import PawsitiveSVG from 'public/pawsitive.svg'
export function FooterNav() {
  return (
    <div
      className={cn(
        'flex h-[120px]  w-full items-center justify-center bg-[#131334] px-5 lg:justify-start'
      )}
    >
      <PawsitiveSVG className="h-12" />
    </div>
  )
}

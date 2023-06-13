'use client'
import { cn } from '@/lib/utils'
import React from 'react'

export default function Header({ children }: { children: React.ReactNode }) {
  const [prevScrollPos, setPrevScrollPos] = React.useState<number>(0)
  const [visible, setVisible] = React.useState<boolean>(true)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <header
      id="header"
      className={cn(
        'sticky z-20 bg-background transition-all duration-300 ease-in-out',
        visible ? 'top-0' : '-top-100'
      )}
    >
      {children}
    </header>
  )
}

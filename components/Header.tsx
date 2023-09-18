'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Nav } from './Nav'

export default function Header() {
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
        'fixed z-40 w-full bg-background transition-all duration-300 ease-in-out',
        visible ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <Nav />
    </header>
  )
}

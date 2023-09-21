'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import LogoSVG from 'public/logo.svg'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
const navigationMenuItems = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Packages',
    href: '#packages',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export function Nav() {
  return (
    <div className="flex h-[100px] items-center px-6 md:px-10">
      <Link href="/">
        <LogoSVG className="h-12" />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="ml-12 hidden lg:flex">
          {navigationMenuItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href={item.href}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfZjeY3eyTWUFIspFDHYJ-8zMeKA09ms8oJTrhtAPoiyf4kaQ/viewform"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="ml-auto hidden lg:block">Book an appointment</Button>
      </a>

      <Sheet>
        <SheetTrigger asChild className="ml-auto lg:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent
          className="flex h-screen w-screen items-center justify-center"
          side={'top'}
        >
          <div className="flex h-full flex-col justify-center gap-16 text-center text-2xl">
            {navigationMenuItems.map((item) => (
              <Link href={item.href} key={item.label}>
                <SheetTrigger>
                  <span>{item.label}</span>
                </SheetTrigger>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

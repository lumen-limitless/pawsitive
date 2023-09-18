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
    <div className="flex h-[100px] w-full items-center justify-start px-6 md:px-10">
      <Link href="/">
        <LogoSVG className="mr-12 h-12" />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="hidden lg:flex">
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

      <Button className="ml-auto hidden lg:block">Book an appointment</Button>

      <Sheet>
        <SheetTrigger asChild className="ml-auto lg:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent
          className="flex h-screen w-screen items-center"
          side={'top'}
        >
          <NavigationMenu className="flex-col" orientation="vertical">
            <NavigationMenuList className="flex-col">
              {navigationMenuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href={item.href}
                  >
                    <SheetTrigger>{item.label}</SheetTrigger>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  )
}

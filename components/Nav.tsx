'use client'

import LogoSVG from 'public/logo.svg'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { MenuIcon } from 'lucide-react'

export function Nav() {
  return (
    <div className="flex h-[100px] w-full items-center justify-start px-6 md:px-10">
      <LogoSVG className="mr-12 h-12" />

      <NavigationMenu>
        <NavigationMenuList className="hidden lg:flex">
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="#home"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="#services"
            >
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="#packages"
            >
              Packages
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="#about"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="#contact"
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="ml-auto hidden lg:block">Book an appointment</Button>

      <Sheet>
        <SheetTrigger asChild className="ml-auto lg:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent position="right" size="full">
          <LogoSVG className="absolute left-6 top-6 h-12" />
        </SheetContent>
      </Sheet>
    </div>
  )
}

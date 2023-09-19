import { Section } from '@/components/ui/section'
import Image from 'next/image'
import dogIMG from 'public/dog.webp'
export default function NotFound() {
  return (
    <Section className="flex-col items-center justify-center">
      <h1 className="text-xl">404 - Page Not Found</h1>

      <div className="h-72 w-72">
        <Image src={dogIMG} alt="" />
      </div>
    </Section>
  )
}

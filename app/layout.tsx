import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Analytics from './analytics'
import './globals.css'
import { defaultMetadata } from './metadata'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>

      <body
        style={{
          textRendering: 'optimizeLegibility',
        }}
        className={cn(
          poppins.className,
          'flex min-h-screen touch-manipulation flex-col antialiased',
        )}
      >
        <a href="#main" className="sr-only" aria-label="skip">
          skip to content
        </a>

        <Header />

        <main id="main" className="flex flex-grow flex-col">
          {children}
        </main>

        <Footer />

        <Analytics />
      </body>
    </html>
  )
}

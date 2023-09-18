import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import Analytics from './analytics'
import './globals.css'
import { defaultMetadata } from './metadata'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>

      <body className={`${poppins.className}`}>
        <a href="#main" className="sr-only" aria-label="skip">
          skip to content
        </a>

        <Header />

        <main id="main">{children}</main>

        <Footer />

        <Analytics />
      </body>
    </html>
  )
}

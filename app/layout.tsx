import './globals.css'
import { Poppins } from 'next/font/google'
import { defaultMetadata } from './metadata'
import { Nav } from '@/components/Nav'
import { FooterNav } from '@/components/FooterNav'
import Header from '@/components/Header'

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
        <Header>
          <Nav />
        </Header>

        <main id="main">{children}</main>

        <footer id="footer">
          <FooterNav />
        </footer>
      </body>
    </html>
  )
}

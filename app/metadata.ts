import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/lib/constants'
import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    absolute: APP_NAME,
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  themeColor: '#FFFFFF',
  metadataBase: new URL(APP_URL),
  generator: 'Next.js',
  keywords: [
    'dogs',
    'dog',
    'dog breeds',
    'dog breed',
    'dog breed information',
    'dog breed info',
    'dog breed facts',
    'dog training',
    'dog training tips',
    'dog training advice',
    'dog training information',
    'dog training info',
    'dog care',
    'dog care tips',
    'dog care advice',
    'dog care information',
    'dog care info',
    'dog walking',
    'dog walking tips',
    'pet',
    'pets',
    'pet care',
    'pet care tips',
    'pet care advice',
    'pet care information',
  ],
  manifest: null,

  openGraph: {
    type: 'website',
    url: APP_URL,
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    locale: 'en_US',
  },

  twitter: {
    title: APP_NAME,
    site: APP_URL,
    creator: '@LumenLimitless',
    description: APP_DESCRIPTION,
    card: 'summary_large_image',
  },

  appleWebApp: {
    statusBarStyle: 'black-translucent',
    title: APP_NAME,
    capable: false,
  },

  robots: {
    index: true,
    follow: true,
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

import { APP_DESCRIPTION } from '@/lib/constants';
import { type Metadata } from 'next';

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Pawsitive Pet Care';

const baseUrl = new URL(
  process.env.NEXT_PUBLIC_APP_URL
    ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000',
);

export const defaultMetadata: Metadata = {
  title: {
    absolute: APP_NAME,
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: baseUrl,
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
    'pet care Rochester NY',
    'Rochester NY pet',
    'doggy daycare',
    'doggy daycare Rochester NY',
    'Rochester',
    'New York',
    'NY',
    'positive reinforcement dog training techniques',
    'dog care services Rochester NY',
    'dog walking services in Rochester NY',
    'comprehensive pet care advice',
    'dog breed guides and facts',
    'how to care for a dog',
    'professional doggy daycare in Rochester NY',
    'Rochester NY pet care solutions',
    'best dog breeds for families',
    'effective dog training strategies',
    'local pet care resources in New York',
    'finding the right doggy daycare',
    'tips for first-time dog owners',
    'pet wellness and health Rochester NY',
  ],
  manifest: '/manifest.json',

  openGraph: {
    type: 'website',
    url: baseUrl,
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    locale: 'en_US',
  },

  twitter: {
    title: APP_NAME,
    site: baseUrl.toString(),
    creator: '@LumenLimitless',
    description: APP_DESCRIPTION,
    card: 'summary_large_image',
  },

  appleWebApp: {
    statusBarStyle: 'default',
    title: APP_NAME,
    capable: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

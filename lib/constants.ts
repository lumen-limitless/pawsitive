export const APP_URL = process.env.NEXT_PUBLIC_APP_URL
  ? `${process.env.NEXT_PUBLIC_APP_URL}`
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'

export const APP_NAME = 'Pawsitive Pet Care'

export const APP_DESCRIPTION =
  'Paws Down the Best for your Pet! Pawsitive Pet Care is a dog care service located in Rochester, NY. We offer dog walking, dog sitting, and dog training services.'

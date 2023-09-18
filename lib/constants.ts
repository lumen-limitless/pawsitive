export const APP_URL = process.env.NEXT_PUBLIC_APP_URL
  ? `${process.env.NEXT_PUBLIC_APP_URL}`
  : process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'

export const APP_NAME = 'Pawsitive Pet Care'

export const APP_DESCRIPTION = 'Pawsitive Pet Care is a dog care website.'

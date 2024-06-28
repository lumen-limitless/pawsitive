'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

export default function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <GoogleAnalytics gaId="G-XPTFJLC38S" />
    </>
  );
}

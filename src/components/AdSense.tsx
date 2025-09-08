'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  width?: number;
  height?: number;
  responsive?: boolean;
  className?: string;
}

export default function AdSense({ 
  adSlot, 
  adFormat = 'auto', 
  width = 728, 
  height = 90, 
  responsive = true,
  className = '' 
}: AdSenseProps) {
  // Use test AdSense client ID for development
  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-3940256099942544';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  // Always show ads now that we have test client ID
  // Remove the placeholder logic since we want to test real ad rendering

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className={`adsbygoogle ${className}`}
        style={{
          display: 'block',
          width: responsive ? '100%' : width,
          height: height,
        }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      ></ins>
    </>
  );
}
'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

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
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Add a small delay to ensure DOM is ready
        const timer = setTimeout(() => {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          setAdLoaded(true);
        }, 100);
        
        return () => clearTimeout(timer);
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  // Show a visual indicator if ads are blocked or not loading
  const showFallback = !adLoaded;

  return (
    <div className={`relative ${className}`} style={{ width: responsive ? '100%' : width, height: height }}>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          height: height,
        }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      ></ins>
      
      {/* Fallback indicator for debugging - shows initially then hides when ad loads */}
      <div 
        className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center text-blue-600 text-sm"
        style={{ width: '100%', height: height }}
      >
        <div className="text-center">
          <div className="text-lg mb-2">🧪 AdSense Test Zone</div>
          <div className="text-xs opacity-75">Client: {adClient}</div>
          <div className="text-xs opacity-75">Slot: {adSlot}</div>
          <div className="text-xs opacity-75">Size: {width}x{height}</div>
          <div className="text-xs mt-2 font-medium">Google Test Ads Loading...</div>
        </div>
      </div>
    </div>
  );
}
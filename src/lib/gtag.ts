export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Log the pageview with their URL
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Log specific events happening.
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// VAT Calculator specific events
export const trackVATCalculation = (data: {
  amount: number;
  rate: number;
  country: string;
  direction: string;
}) => {
  event({
    action: 'calc_submit',
    category: 'VAT Calculator',
    label: `${data.country}_${data.rate}%_${data.direction}`,
    value: Math.round(data.amount),
  });
};

export const trackCopyResults = (country: string, rate: number) => {
  event({
    action: 'copy_results',
    category: 'VAT Calculator',
    label: `${country}_${rate}%`,
  });
};

export const trackShareLink = (country: string, rate: number) => {
  event({
    action: 'share_link',
    category: 'VAT Calculator',
    label: `${country}_${rate}%`,
  });
};
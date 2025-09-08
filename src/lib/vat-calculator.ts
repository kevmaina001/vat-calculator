import { VATCalculation, CalculationDirection } from '@/types/vat';

export function calculateVAT(
  amount: number,
  rate: number,
  direction: CalculationDirection,
  country: string = ''
): VATCalculation {
  if (amount < 0) {
    throw new Error('Amount cannot be negative');
  }
  
  if (rate < 0 || rate > 100) {
    throw new Error('VAT rate must be between 0 and 100');
  }

  const rateDecimal = rate / 100;
  let net: number, vat: number, gross: number;

  if (direction === 'NET_TO_GROSS') {
    net = amount;
    vat = amount * rateDecimal;
    gross = amount + vat;
  } else {
    gross = amount;
    net = amount / (1 + rateDecimal);
    vat = amount - net;
  }

  // Round to 2 decimal places
  return {
    net: Math.round(net * 100) / 100,
    vat: Math.round(vat * 100) / 100,
    gross: Math.round(gross * 100) / 100,
    rate,
    direction,
    country
  };
}

export function formatCurrency(amount: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

export function roundToDecimals(value: number, decimals: number = 2): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
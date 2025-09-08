export interface VATCountry {
  country: string;
  code: string;
  currency: string;
  standard_rate: number;
  reduced_rates: number[];
  notes: string;
  last_updated: string;
}

export interface VATCalculation {
  net: number;
  vat: number;
  gross: number;
  rate: number;
  direction: 'NET_TO_GROSS' | 'GROSS_TO_NET';
  country: string;
}

export type CalculationDirection = 'NET_TO_GROSS' | 'GROSS_TO_NET';
export type RateType = 'standard' | 'reduced';
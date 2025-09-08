import { VATCountry } from '@/types/vat';
import vatRatesData from '@/data/vat-rates.json';

export const vatRates: VATCountry[] = vatRatesData as VATCountry[];

export function getCountryByCode(code: string): VATCountry | undefined {
  return vatRates.find(country => country.code.toLowerCase() === code.toLowerCase());
}

export function getAllCountries(): VATCountry[] {
  return vatRates.sort((a, b) => a.country.localeCompare(b.country));
}

export function getAvailableRates(countryCode: string): number[] {
  const country = getCountryByCode(countryCode);
  if (!country) return [];
  
  return [country.standard_rate, ...country.reduced_rates].sort((a, b) => b - a);
}

export function getStandardRate(countryCode: string): number {
  const country = getCountryByCode(countryCode);
  return country?.standard_rate || 0;
}

export function isValidCountryCode(code: string): boolean {
  return vatRates.some(country => country.code.toLowerCase() === code.toLowerCase());
}

// Popular countries for quick selection (EU + Global)
export const popularCountries = ['DE', 'FR', 'ES', 'IT', 'NL', 'BE', 'AT', 'PL', 'KE', 'ZA', 'NG', 'CA', 'US', 'MX', 'BR'];

export function getPopularCountries(): VATCountry[] {
  return popularCountries
    .map(code => getCountryByCode(code))
    .filter((country): country is VATCountry => country !== undefined);
}
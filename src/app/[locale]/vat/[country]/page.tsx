import CountryVATCalculator from '@/components/CountryVATCalculator';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getCountryByCode, isValidCountryCode } from '@/lib/vat-data';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    locale: string;
    country: string;
  }>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, country} = await params;
  const t = await getTranslations({locale});
  const countryData = getCountryByCode(country.toUpperCase());
  
  if (!countryData) {
    return {
      title: t('pageTitle'),
      description: t('pageDescription'),
    };
  }

  const countryName = countryData.country;
  const standardRate = countryData.standard_rate;

  return {
    title: `VAT Calculator ${countryName} (${standardRate}%) – Net ↔ Gross with VAT Amount`,
    description: `Fast ${countryName} VAT calculator: convert net to gross (and back), show VAT amount at ${standardRate}%. Free, accurate, mobile-friendly.`,
    keywords: `VAT calculator ${countryName}, ${countryName} VAT rates, ${standardRate}% VAT, net to gross ${countryName}`,
  };
}

export default async function CountryVATPage({params}: Props) {
  const {country} = await params;
  const countryCode = country.toUpperCase();
  
  if (!isValidCountryCode(countryCode)) {
    notFound();
  }

  const countryData = getCountryByCode(countryCode);
  
  if (!countryData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {countryData.country} VAT Calculator ({countryData.standard_rate}%)
          </h1>
          <p className="text-gray-600 text-lg">
            Calculate VAT for {countryData.country} with {countryData.standard_rate}% standard rate.
            {countryData.reduced_rates.length > 0 && 
              ` Reduced rates: ${countryData.reduced_rates.join('%, ')}%.`
            }
          </p>
        </div>
      </div>
      <CountryVATCalculator 
        preselectedCountry={countryCode}
        preselectedRate={countryData.standard_rate}
      />
      
      {/* SEO Content */}
      <div className="max-w-4xl mx-auto p-6 mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to calculate VAT in {countryData.country}
          </h2>
          <div className="prose max-w-none">
            <p>
              {countryData.country} applies a standard VAT rate of {countryData.standard_rate}% to most goods and services.
              {countryData.reduced_rates.length > 0 && (
                <>
                  {' '}Reduced rates of {countryData.reduced_rates.join('% and ')}% apply to specific items 
                  such as essential goods, books, and certain services.
                </>
              )}
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              {countryData.country} VAT rates ({new Date().getFullYear()})
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Standard rate:</strong> {countryData.standard_rate}%</li>
              {countryData.reduced_rates.map((rate, index) => (
                <li key={index}><strong>Reduced rate:</strong> {rate}%</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Examples
            </h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <p><strong>Net to Gross:</strong> €100 + {countryData.standard_rate}% VAT = €{(100 * (1 + countryData.standard_rate / 100)).toFixed(2)}</p>
              <p><strong>Gross to Net:</strong> €{(100 * (1 + countryData.standard_rate / 100)).toFixed(2)} - {countryData.standard_rate}% VAT = €100</p>
            </div>

            {countryData.notes && (
              <>
                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Additional Information</h3>
                <p>{countryData.notes}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
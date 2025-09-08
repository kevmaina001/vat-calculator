import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import CountryVATCalculator from '@/components/CountryVATCalculator';
import AdSense from '@/components/AdSense';

export const metadata: Metadata = {
  title: 'VAT Calculator Finland (24%) – Net ↔ Gross with VAT Amount',
  description: 'Finland VAT calculator (24% standard, 14% food, 10% books/medicines). Add or remove VAT instantly.',
  keywords: 'Finland VAT calculator, Finnish VAT rates, ALV calculator, 24% VAT, 14% VAT, 10% VAT',
  alternates: {
    canonical: 'https://vat-calculator-global.vercel.app/en/vat/finland',
    languages: {
      'en': 'https://vat-calculator-global.vercel.app/en/vat/finland',
      'de': 'https://vat-calculator-global.vercel.app/de/mehrwertsteuer-rechner',
      'fr': 'https://vat-calculator-global.vercel.app/fr/calculateur-tva',
      'x-default': 'https://vat-calculator-global.vercel.app/en'
    }
  }
};

export default async function FinlandVATPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Finland VAT Calculator (24%)
          </h1>
          <p className="text-xl text-gray-600">
            Calculate Finnish VAT with 24% standard rate, 14% reduced rate for food, and 10% for books and medicines.
          </p>
        </div>

        {/* Ad Space Above Calculator */}
        <div className="mb-6">
          <AdSense 
            adSlot="1234567891"
            width={728}
            height={90}
            className="mx-auto"
          />
        </div>

        {/* VAT Calculator */}
        <CountryVATCalculator 
          preselectedCountry="FI" 
          preselectedRate={24}
        />

        {/* How It Works Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How the Finland VAT Calculator Works</h2>
          <p className="text-gray-700 mb-4">
            Enter the amount, pick Finland and the VAT rate. For Net → Gross, VAT = Net × Rate; Gross = Net + VAT. 
            For Gross → Net, Net = Gross ÷ (1 + Rate); VAT = Gross − Net. Results round to 2 decimals for currency accuracy.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Finnish VAT Rates (ALV)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>24% Standard Rate:</strong> Most goods and services</li>
                <li><strong>14% Reduced Rate:</strong> Food, non-alcoholic beverages</li>
                <li><strong>10% Reduced Rate:</strong> Books, medicines, cultural services</li>
                <li><strong>0% Zero-Rated:</strong> Exports, intra-EU supplies</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Calculation Examples</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Net €100.00 at 24%:</strong></p>
                <p>VAT = €24.00, Gross = €124.00</p>
                <p><strong>Gross €124.00 remove VAT:</strong></p>
                <p>Net = €100.00, VAT = €24.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Space Below Results */}
        <div className="mt-6">
          <AdSense 
            adSlot="1234567892"
            width={728}
            height={250}
            className="mx-auto"
          />
        </div>

        {/* FAQ Schema */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I add VAT in Finland?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Multiply the net price by (1 + VAT rate). Example: 100 at 24% = 100 × (1+24/100) = €124.00."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How do I remove VAT from a gross price?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Divide the gross price by (1 + VAT rate). VAT equals gross minus net."
                  }
                }
              ]
            })
          }}
        />
      </div>

      {/* Sticky Footer Ad */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 z-50">
        <div className="max-w-4xl mx-auto text-center">
          <AdSense 
            adSlot="1234567893"
            width={320}
            height={50}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import CountryVATCalculator from '@/components/CountryVATCalculator';
import AdSense from '@/components/AdSense';

export const metadata: Metadata = {
  title: 'VAT Calculator France (20%) – Net ↔ Gross with VAT Amount',
  description: 'France VAT calculator with 20%, 10%, 5.5%, and 2.1% rates. Convert net to gross or remove VAT.',
  keywords: 'France VAT calculator, French VAT rates, TVA calculator, 20% VAT, 10% VAT, 5.5% VAT',
  alternates: {
    canonical: 'https://vat-calculator-global.vercel.app/en/vat/france',
    languages: {
      'en': 'https://vat-calculator-global.vercel.app/en/vat/france',
      'de': 'https://vat-calculator-global.vercel.app/de/mehrwertsteuer-rechner',
      'fr': 'https://vat-calculator-global.vercel.app/fr/calculateur-tva',
      'x-default': 'https://vat-calculator-global.vercel.app/en'
    }
  }
};

export default async function FranceVATPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            France VAT Calculator (20%)
          </h1>
          <p className="text-xl text-gray-600">
            Calculate French VAT with 20% standard, 10% intermediate, 5.5% reduced, and 2.1% super-reduced rates.
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
          preselectedCountry="FR" 
          preselectedRate={20}
        />

        {/* How It Works Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How the France VAT Calculator Works</h2>
          <p className="text-gray-700 mb-4">
            Enter the amount, pick France and the VAT rate. For Net → Gross, VAT = Net × Rate; Gross = Net + VAT. 
            For Gross → Net, Net = Gross ÷ (1 + Rate); VAT = Gross − Net. Results round to 2 decimals for currency accuracy.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">French VAT Rates (TVA)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>20% Standard Rate:</strong> Most goods and services</li>
                <li><strong>10% Intermediate Rate:</strong> Accommodation, restaurant services</li>
                <li><strong>5.5% Reduced Rate:</strong> Food, books, energy</li>
                <li><strong>2.1% Super-reduced Rate:</strong> Medicines, newspapers</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Calculation Examples</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Net €100.00 at 20%:</strong></p>
                <p>VAT = €20.00, Gross = €120.00</p>
                <p><strong>Gross €120.00 remove VAT:</strong></p>
                <p>Net = €100.00, VAT = €20.00</p>
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
                  "name": "How do I add VAT in France?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Multiply the net price by (1 + VAT rate). Example: 100 at 20% = 100 × (1+20/100) = €120.00."
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
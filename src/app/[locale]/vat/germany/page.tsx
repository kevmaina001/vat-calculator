import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import CountryVATCalculator from '@/components/CountryVATCalculator';
import AdSense from '@/components/AdSense';

export const metadata: Metadata = {
  title: 'VAT Calculator Germany (19%) – Net ↔ Gross with VAT Amount',
  description: 'Fast Germany VAT calculator. Convert net to gross (and back) at 19% or 7%, see VAT amount instantly. Free, accurate, mobile-friendly.',
  keywords: 'Germany VAT calculator, German VAT rates, Mehrwertsteuer calculator, 19% VAT, 7% VAT',
  alternates: {
    canonical: 'https://vat-calculator-global.vercel.app/en/vat/germany',
    languages: {
      'en': 'https://vat-calculator-global.vercel.app/en/vat/germany',
      'de': 'https://vat-calculator-global.vercel.app/de/mehrwertsteuer-rechner',
      'fr': 'https://vat-calculator-global.vercel.app/fr/calculateur-tva',
      'x-default': 'https://vat-calculator-global.vercel.app/en'
    }
  }
};

export default async function GermanyVATPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Germany VAT Calculator (19%)
          </h1>
          <p className="text-xl text-gray-600">
            Calculate German VAT at 19% standard rate or 7% reduced rate. Convert net to gross amounts instantly.
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
          preselectedCountry="DE" 
          preselectedRate={19}
        />

        {/* How It Works Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How the Germany VAT Calculator Works</h2>
          <p className="text-gray-700 mb-4">
            Enter the amount, pick Germany and the VAT rate. For Net → Gross, VAT = Net × Rate; Gross = Net + VAT. 
            For Gross → Net, Net = Gross ÷ (1 + Rate); VAT = Gross − Net. Results round to 2 decimals for currency accuracy.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">German VAT Rates</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>19% Standard Rate:</strong> Most goods and services</li>
                <li><strong>7% Reduced Rate:</strong> Books, food, newspapers, cultural events</li>
                <li><strong>0% Zero-Rated:</strong> Exports, intra-EU supplies</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Calculation Examples</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Net €100.00 at 19%:</strong></p>
                <p>VAT = €19.00, Gross = €119.00</p>
                <p><strong>Gross €119.00 remove VAT:</strong></p>
                <p>Net = €100.00, VAT = €19.00</p>
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
                  "name": "How do I add VAT in Germany?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Multiply the net price by (1 + VAT rate). Example: 100 at 19% = 100 × (1+19/100) = €119.00."
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
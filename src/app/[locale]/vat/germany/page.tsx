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

        {/* Comprehensive Germany VAT Guide */}
        <article className="bg-white rounded-lg shadow-lg p-8 mt-6">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Germany operates one of Europe's most straightforward VAT (Mehrwertsteuer) systems with a standard rate of 19% 
              and reduced rate of 7%. This comprehensive guide covers everything you need to calculate German VAT correctly.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">German VAT Rates 2025</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Current Rates (Mehrwertsteuersätze)</h3>
              <ul className="space-y-2">
                <li><strong>Standard Rate (Regelsteuersatz):</strong> 19% (most goods and services)</li>
                <li><strong>Reduced Rate (Ermäßigter Steuersatz):</strong> 7% (essential goods)</li>
                <li><strong>Zero-Rated:</strong> 0% (exports and intra-EU supplies)</li>
                <li><strong>Exempt:</strong> No VAT applicable (certain financial services)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">What Gets the 7% Rate?</h2>
            <p>The reduced 7% VAT rate (ermäßigter Steuersatz) applies to essential goods and services including:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Food products:</strong> Basic foodstuffs, non-alcoholic beverages</li>
              <li><strong>Books & media:</strong> Books, newspapers, magazines, e-books</li>
              <li><strong>Public transport:</strong> Local and long-distance passenger transport</li>
              <li><strong>Cultural events:</strong> Theater, concerts, museums, zoos</li>
              <li><strong>Hotel accommodation:</strong> Short-term lodging (not luxury hotels)</li>
              <li><strong>Medical services:</strong> Certain medical equipment and supplies</li>
              <li><strong>Agriculture:</strong> Plants, seeds, fertilizers for food production</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Zero-Rated & Exempt Items</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Zero-Rated (0%)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Exports to non-EU countries</li>
                  <li>Intra-EU supplies to VAT-registered businesses</li>
                  <li>International transport services</li>
                  <li>Ships and aircraft for commercial use</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">VAT-Exempt</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Banking and insurance services</li>
                  <li>Medical and dental care</li>
                  <li>Educational services</li>
                  <li>Postal services (basic)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Calculation Examples</h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Example 1: Standard Rate (19%)</h3>
              <p className="mb-2"><strong>Scenario:</strong> Selling electronics for €500.00 (net price)</p>
              <div className="space-y-2">
                <p>Net amount: €500.00</p>
                <p>VAT (19%): €500.00 × 0.19 = €95.00</p>
                <p className="font-semibold">Gross amount: €500.00 + €95.00 = €595.00</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Example 2: Reduced Rate (7%)</h3>
              <p className="mb-2"><strong>Scenario:</strong> Selling books for €50.00 (net price)</p>
              <div className="space-y-2">
                <p>Net amount: €50.00</p>
                <p>VAT (7%): €50.00 × 0.07 = €3.50</p>
                <p className="font-semibold">Gross amount: €50.00 + €3.50 = €53.50</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Converting Gross to Net</h2>
            <p>When you have a gross amount and need to extract the VAT:</p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Formula for 19% VAT</h3>
              <ul className="space-y-2">
                <li>Net = Gross ÷ 1.19</li>
                <li>VAT = Gross - Net</li>
              </ul>
              <p className="mt-4"><strong>Example:</strong> Gross price €119.00</p>
              <div className="space-y-2">
                <p>Net: €119.00 ÷ 1.19 = €100.00</p>
                <p>VAT: €119.00 - €100.00 = €19.00</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Formula for 7% VAT</h3>
              <ul className="space-y-2">
                <li>Net = Gross ÷ 1.07</li>
                <li>VAT = Gross - Net</li>
              </ul>
              <p className="mt-4"><strong>Example:</strong> Gross price €107.00</p>
              <div className="space-y-2">
                <p>Net: €107.00 ÷ 1.07 = €100.00</p>
                <p>VAT: €107.00 - €100.00 = €7.00</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">VAT Registration in Germany</h2>
            <p className="mb-4">
              Businesses must register for VAT (Umsatzsteuer-Identifikationsnummer) if their annual turnover exceeds €22,000. 
              Key points:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Mandatory registration above €22,000 annual turnover</li>
              <li>Small business exemption (Kleinunternehmerregelung) available under €22,000</li>
              <li>Monthly or quarterly VAT returns (Umsatzsteuervoranmeldung)</li>
              <li>Annual VAT declaration (Umsatzsteuererklärung) required</li>
              <li>Input VAT deduction available for business expenses</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">💡 Pro Tip</h3>
              <p>Use our Germany VAT Calculator above for instant, accurate calculations with 19% and 7% rates. Perfect for German businesses, freelancers, and international companies dealing with German customers.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Important Considerations</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <ul className="list-disc list-inside space-y-2">
                <li>VAT is charged on most supplies of goods and services in Germany</li>
                <li>Input VAT (Vorsteuer) can be deducted from output VAT</li>
                <li>Digital services to German consumers require German VAT registration</li>
                <li>Always verify current rates with German tax authorities (Bundesfinanzministerium)</li>
                <li>Brexit affects UK-Germany trade VAT treatment</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Germany uses 19% standard VAT and 7% reduced VAT rates</li>
              <li>Essential goods like food and books qualify for 7% rate</li>
              <li>Exports and intra-EU B2B supplies are zero-rated (0%)</li>
              <li>VAT registration is mandatory above €22,000 turnover</li>
              <li>Use proper formulas when converting between net and gross amounts</li>
            </ul>
          </div>
        </article>

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
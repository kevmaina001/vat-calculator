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

        {/* Comprehensive France VAT Guide */}
        <article className="bg-white rounded-lg shadow-lg p-8 mt-6">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              France operates one of Europe's most complex VAT (Taxe sur la Valeur Ajoutée - TVA) systems with four different rates: 
              20%, 10%, 5.5%, and 2.1%. This comprehensive guide covers everything you need to calculate French VAT correctly.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">French VAT Rates 2025</h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Current Rates (Taux de TVA)</h3>
              <ul className="space-y-2">
                <li><strong>Standard Rate (Taux normal):</strong> 20% (most goods and services)</li>
                <li><strong>Intermediate Rate (Taux intermédiaire):</strong> 10% (accommodation, transport)</li>
                <li><strong>Reduced Rate (Taux réduit):</strong> 5.5% (food, books, energy)</li>
                <li><strong>Super-reduced Rate (Taux super réduit):</strong> 2.1% (medicines, newspapers)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Detailed Rate Breakdown</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">20% Standard Rate (Taux normal)</h3>
                <p className="text-gray-700 mb-3">Applied to most goods and services including:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Electronics, clothing, furniture, luxury goods</li>
                  <li>Professional services, consulting, legal services</li>
                  <li>Entertainment, sports activities</li>
                  <li>Alcoholic beverages, tobacco products</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">10% Intermediate Rate (Taux intermédiaire)</h3>
                <p className="text-gray-700 mb-3">Applied to specific services and products:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Accommodation:</strong> Hotels, camping, bed & breakfast</li>
                  <li><strong>Restaurant services:</strong> Dining in restaurants (food and drinks)</li>
                  <li><strong>Transport:</strong> Passenger transport services</li>
                  <li><strong>Cultural activities:</strong> Zoos, theme parks, shows</li>
                  <li><strong>Social housing:</strong> Certain residential services</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">5.5% Reduced Rate (Taux réduit)</h3>
                <p className="text-gray-700 mb-3">Applied to essential goods and services:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Food products:</strong> Most food items (except candy and luxury foods)</li>
                  <li><strong>Books:</strong> Physical and digital books, audiobooks</li>
                  <li><strong>Energy:</strong> Electricity, gas, heating fuel</li>
                  <li><strong>Public transport:</strong> Tickets for trains, buses, metro</li>
                  <li><strong>Cultural goods:</strong> Movie tickets, concerts (some exceptions)</li>
                  <li><strong>Agricultural products:</strong> Seeds, plants, fertilizers</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">2.1% Super-reduced Rate (Taux super réduit)</h3>
                <p className="text-gray-700 mb-3">Applied to essential health and information:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Medicines:</strong> Prescription drugs reimbursed by Social Security</li>
                  <li><strong>Blood products:</strong> Medical blood derivatives</li>
                  <li><strong>Newspapers:</strong> Daily and weekly publications (with certain conditions)</li>
                  <li><strong>Legal publications:</strong> Official journals and legal texts</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Calculation Examples</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Standard Rate (20%)</h3>
                <p className="mb-2"><strong>Scenario:</strong> Selling electronics for €250.00</p>
                <div className="space-y-1 text-sm">
                  <p>Net: €250.00</p>
                  <p>TVA: €250.00 × 0.20 = €50.00</p>
                  <p className="font-semibold">Gross: €300.00</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Restaurant Rate (10%)</h3>
                <p className="mb-2"><strong>Scenario:</strong> Restaurant meal for €30.00</p>
                <div className="space-y-1 text-sm">
                  <p>Net: €30.00</p>
                  <p>TVA: €30.00 × 0.10 = €3.00</p>
                  <p className="font-semibold">Gross: €33.00</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Food Rate (5.5%)</h3>
                <p className="mb-2"><strong>Scenario:</strong> Groceries for €100.00</p>
                <div className="space-y-1 text-sm">
                  <p>Net: €100.00</p>
                  <p>TVA: €100.00 × 0.055 = €5.50</p>
                  <p className="font-semibold">Gross: €105.50</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Medicine Rate (2.1%)</h3>
                <p className="mb-2"><strong>Scenario:</strong> Prescription drugs for €50.00</p>
                <div className="space-y-1 text-sm">
                  <p>Net: €50.00</p>
                  <p>TVA: €50.00 × 0.021 = €1.05</p>
                  <p className="font-semibold">Gross: €51.05</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Converting Gross to Net</h2>
            <p className="mb-6">When you have a gross amount and need to extract the TVA, use these formulas:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">20% TVA</h3>
                <p className="text-sm mb-2">Net = Gross ÷ 1.20</p>
                <p className="text-xs text-gray-600">Example: €120.00 ÷ 1.20 = €100.00 net</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">10% TVA</h3>
                <p className="text-sm mb-2">Net = Gross ÷ 1.10</p>
                <p className="text-xs text-gray-600">Example: €110.00 ÷ 1.10 = €100.00 net</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">5.5% TVA</h3>
                <p className="text-sm mb-2">Net = Gross ÷ 1.055</p>
                <p className="text-xs text-gray-600">Example: €105.50 ÷ 1.055 = €100.00 net</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">2.1% TVA</h3>
                <p className="text-sm mb-2">Net = Gross ÷ 1.021</p>
                <p className="text-xs text-gray-600">Example: €102.10 ÷ 1.021 = €100.00 net</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">VAT Registration in France</h2>
            <p className="mb-4">
              French businesses must register for TVA based on their turnover thresholds. Key requirements:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Services:</strong> Registration required above €36,800 annual turnover</li>
              <li><strong>Goods:</strong> Registration required above €91,900 annual turnover</li>
              <li><strong>Micro-enterprise:</strong> Special simplified regime available (franchise en base)</li>
              <li><strong>Monthly/Quarterly returns:</strong> TVA declarations (CA3) required</li>
              <li><strong>Annual declaration:</strong> Summary return required</li>
              <li><strong>Input TVA recovery:</strong> Business expenses can offset output TVA</li>
            </ul>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">💡 Pro Tip</h3>
              <p>Use our France VAT Calculator above for instant, accurate calculations with all four TVA rates (20%, 10%, 5.5%, 2.1%). Perfect for French businesses and international companies dealing with French customers.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Important Considerations</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <ul className="list-disc list-inside space-y-2">
                <li>TVA rates can vary for the same product depending on context (e.g., takeaway vs. dining in)</li>
                <li>Digital services require French TVA registration for B2C sales to French customers</li>
                <li>Some products have specific rules (e.g., books vs. e-books may have different rates)</li>
                <li>Always verify current rates with French tax authorities (Direction générale des finances publiques)</li>
                <li>Brexit has changed UK-France trade VAT treatment significantly</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>France has four TVA rates: 20% (standard), 10% (intermediate), 5.5% (reduced), 2.1% (super-reduced)</li>
              <li>Rate selection depends on the specific product/service category</li>
              <li>Restaurant services generally use 10%, while takeaway food uses 5.5%</li>
              <li>Prescription medicines and newspapers qualify for the 2.1% rate</li>
              <li>TVA registration thresholds differ for goods (€91,900) vs services (€36,800)</li>
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
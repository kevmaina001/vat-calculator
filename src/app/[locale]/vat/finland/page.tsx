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
            adSlot="6300978111"
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

        {/* Comprehensive Finland VAT Guide */}
        <article className="bg-white rounded-lg shadow-lg p-8 mt-6">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Finland operates a comprehensive VAT (Arvonlisävero - ALV) system with the highest standard rate in the EU at 24%, 
              plus reduced rates of 14% and 10%. This guide covers everything about Finnish VAT calculations.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Finnish VAT Rates 2025</h2>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Current Rates (ALV-kannat)</h3>
              <ul className="space-y-2">
                <li><strong>Standard Rate (Yleinen kanta):</strong> 24% (highest in EU)</li>
                <li><strong>Food Rate (Elintarvikkeet):</strong> 14% (food and non-alcoholic beverages)</li>
                <li><strong>Cultural Rate (Kulttuuripalvelut):</strong> 10% (books, medicines, culture)</li>
                <li><strong>Zero-Rated:</strong> 0% (exports and intra-EU supplies)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Detailed Rate Breakdown</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">24% Standard Rate (Yleinen kanta)</h3>
                <p className="text-gray-700 mb-3">The highest standard VAT rate in the EU, applied to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>General goods:</strong> Electronics, clothing, furniture, appliances</li>
                  <li><strong>Services:</strong> Professional services, consulting, legal, financial</li>
                  <li><strong>Hospitality:</strong> Hotels, restaurants (food service), bars</li>
                  <li><strong>Entertainment:</strong> Sports events, nightclubs, gaming</li>
                  <li><strong>Telecommunications:</strong> Phone, internet, mobile services</li>
                  <li><strong>Vehicles:</strong> Cars, motorcycles, automotive services</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">14% Food Rate (Elintarvikkeet)</h3>
                <p className="text-gray-700 mb-3">Applied to essential food products:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Basic food:</strong> Meat, fish, dairy products, eggs</li>
                  <li><strong>Produce:</strong> Fruits, vegetables, grains, bread</li>
                  <li><strong>Beverages:</strong> Non-alcoholic drinks, juices, water</li>
                  <li><strong>Restaurant takeaway:</strong> Food for takeaway (not dining in)</li>
                  <li><strong>Food supplements:</strong> Basic nutritional supplements</li>
                  <li><strong>Animal feed:</strong> Pet food and livestock feed</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">10% Cultural Rate (Kulttuuripalvelut)</h3>
                <p className="text-gray-700 mb-3">Applied to cultural goods and essential services:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Books:</strong> Physical books, audiobooks, e-books</li>
                  <li><strong>Newspapers:</strong> Daily newspapers and magazines</li>
                  <li><strong>Medicines:</strong> Prescription and over-the-counter drugs</li>
                  <li><strong>Cultural events:</strong> Theater tickets, concerts, museums</li>
                  <li><strong>Sports events:</strong> Sporting events and facilities</li>
                  <li><strong>Passenger transport:</strong> Public transport, taxis, flights</li>
                  <li><strong>Accommodation:</strong> Hotels, camping, short-term rentals</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Zero-Rated & Exempt Items</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Zero-Rated (0%)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Exports to non-EU countries</li>
                  <li>Intra-EU supplies to VAT-registered businesses</li>
                  <li>International passenger transport</li>
                  <li>Ships and aircraft for commercial use</li>
                  <li>Gold supplied to central banks</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">VAT-Exempt</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Banking and insurance services</li>
                  <li>Medical and dental care</li>
                  <li>Educational services</li>
                  <li>Postal services</li>
                  <li>Real estate transactions (private)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Calculation Examples</h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Standard Rate (24%)</h3>
                <p className="mb-2"><strong>Electronics:</strong> €500.00</p>
                <div className="space-y-1 text-sm">
                  <p>Net: €500.00</p>
                  <p>ALV: €500.00 × 0.24 = €120.00</p>
                  <p className="font-semibold">Gross: €620.00</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Food Rate (14%)</h3>
                <p className="mb-2"><strong>Groceries:</strong> €50.00</p>
                <div className="space-y-1 text-sm">
                  <p>Net: €50.00</p>
                  <p>ALV: €50.00 × 0.14 = €7.00</p>
                  <p className="font-semibold">Gross: €57.00</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Cultural Rate (10%)</h3>
                <p className="mb-2"><strong>Books:</strong> €30.00</p>
                <div className="space-y-1 text-sm">
                  <p>Net: €30.00</p>
                  <p>ALV: €30.00 × 0.10 = €3.00</p>
                  <p className="font-semibold">Gross: €33.00</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Converting Gross to Net</h2>
            <p className="mb-6">Formulas for extracting ALV from gross amounts:</p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">24% ALV</h3>
                <p className="text-sm mb-2">Net = Gross ÷ 1.24</p>
                <p className="text-xs text-gray-600">€124.00 ÷ 1.24 = €100.00</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">14% ALV</h3>
                <p className="text-sm mb-2">Net = Gross ÷ 1.14</p>
                <p className="text-xs text-gray-600">€114.00 ÷ 1.14 = €100.00</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">10% ALV</h3>
                <p className="text-sm mb-2">Net = Gross ÷ 1.10</p>
                <p className="text-xs text-gray-600">€110.00 ÷ 1.10 = €100.00</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">VAT Registration in Finland</h2>
            <p className="mb-4">
              Finnish VAT registration requirements and key business information:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Registration threshold:</strong> €15,000 annual turnover (lowest in EU)</li>
              <li><strong>Voluntary registration:</strong> Allowed below threshold for input VAT recovery</li>
              <li><strong>Monthly returns:</strong> Required for large businesses (€50,000+ monthly)</li>
              <li><strong>Quarterly returns:</strong> Standard for most businesses</li>
              <li><strong>Annual returns:</strong> Available for small businesses</li>
              <li><strong>Y-tunnus:</strong> Business ID required for all VAT-registered entities</li>
              <li><strong>VIES registration:</strong> Mandatory for intra-EU trade</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">💡 Pro Tip</h3>
              <p>Finland has the EU's lowest VAT registration threshold (€15,000) and highest standard rate (24%). Use our calculator above for accurate ALV calculations across all Finnish rates.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Important Nordic Considerations</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <ul className="list-disc list-inside space-y-2">
                <li>Finland's 24% standard rate is the highest in the European Union</li>
                <li>Low registration threshold (€15,000) means most businesses must register</li>
                <li>Digital services to Finnish consumers require Finnish VAT registration</li>
                <li>Restaurant dining vs. takeaway have different rates (24% vs. 14%)</li>
                <li>Always verify rates with Finnish Tax Administration (Verohallinto)</li>
                <li>Nordic Council countries may have special agreements</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Finland uses three ALV rates: 24% (standard), 14% (food), 10% (cultural/medicines)</li>
              <li>24% is the highest standard VAT rate in the European Union</li>
              <li>Very low registration threshold at €15,000 annual turnover</li>
              <li>Food items qualify for 14%, while books and medicines get 10%</li>
              <li>Restaurant service (24%) vs. takeaway food (14%) distinction is important</li>
              <li>Strong digital infrastructure supports efficient VAT compliance</li>
            </ul>
          </div>
        </article>

        {/* Ad Space Below Results */}
        <div className="mt-6">
          <AdSense 
            adSlot="2014213617"
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
            adSlot="1033173712"
            width={320}
            height={50}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'VAT Calculator FAQ - Frequently Asked Questions | Global VAT Calculator',
  description: 'Get answers to common VAT calculation questions. Learn how to calculate VAT, convert net to gross, understand VAT rates for 27+ countries worldwide.',
  keywords: 'VAT calculator FAQ, how to calculate VAT, net to gross, gross to net, VAT rates, tax calculator help',
};

export default async function FAQPage() {
  const t = await getTranslations();

  const faqs = [
    {
      question: "How do I calculate VAT from a net price?",
      answer: "To add VAT to a net price: Net Price × (1 + VAT Rate ÷ 100) = Gross Price. For example, €100 net at 19% VAT = €100 × 1.19 = €119 gross."
    },
    {
      question: "How do I remove VAT from a gross price?",
      answer: "To extract VAT from a gross price: Net Price = Gross Price ÷ (1 + VAT Rate ÷ 100), then VAT Amount = Gross - Net. For example, €119 gross at 19% VAT = €119 ÷ 1.19 = €100 net."
    },
    {
      question: "Which countries are supported by the calculator?",
      answer: "We support 27+ countries including all EU members (Germany, France, Finland, Spain, Italy), African countries (Kenya, South Africa, Nigeria), and Americas (Canada, Mexico, Brazil, USA)."
    },
    {
      question: "What is the difference between net and gross prices?",
      answer: "Net price is the price before VAT is added. Gross price is the final price including VAT. Businesses often work with net prices, while consumers see gross prices."
    },
    {
      question: "Are VAT rates the same in all countries?",
      answer: "No, VAT rates vary significantly by country. For example: Germany (19%), France (20%), Finland (24%), Kenya (16%), Canada (5% GST). Many countries also have reduced rates for essential goods."
    },
    {
      question: "What are reduced VAT rates?",
      answer: "Reduced rates are lower VAT rates applied to essential goods and services like food, books, medicines, and cultural activities. For example, Germany has 7% for books and food, while France has 5.5% for food items."
    },
    {
      question: "How accurate are the VAT calculations?",
      answer: "Our calculator uses precise mathematical formulas and rounds results to 2 decimal places for currency accuracy. All VAT rates are regularly updated to reflect current government regulations."
    },
    {
      question: "Can I use this calculator for business accounting?",
      answer: "Yes, our calculator is designed for businesses, freelancers, and accountants. However, always verify VAT rates with official tax authorities for legal compliance and consult a tax professional for complex situations."
    },
    {
      question: "What does 'zero-rated' mean?",
      answer: "Zero-rated goods and services have a 0% VAT rate. This typically applies to exports, certain food items, books, and essential services. Unlike VAT-exempt items, businesses can still recover input VAT on zero-rated supplies."
    },
    {
      question: "How often do VAT rates change?",
      answer: "VAT rates can change when governments update tax policies, usually announced in annual budgets. We monitor official sources and update our calculator whenever rates change to ensure accuracy."
    },
    {
      question: "Can I calculate VAT for multiple countries?",
      answer: "Yes! Our global calculator supports VAT calculations for countries across Europe, Africa, and Americas. Simply select the country and the appropriate VAT rate will be applied automatically."
    },
    {
      question: "What is the highest VAT rate in the world?",
      answer: "Finland currently has the highest standard VAT rate in the EU at 24%. However, some countries outside the EU have even higher rates. Our calculator includes the current rates for all supported countries."
    },
    {
      question: "Do I need to register for VAT in every country?",
      answer: "VAT registration requirements vary by country and your business turnover. For example, Germany requires registration above €22,000, while Finland's threshold is €15,000. Consult local tax authorities for specific requirements."
    },
    {
      question: "What's the difference between VAT, GST, and sales tax?",
      answer: "VAT (Value Added Tax) is used in Europe and many other countries. GST (Goods and Services Tax) is used in countries like Canada and Australia. Sales tax is used in the US. All are consumption taxes but work differently."
    },
    {
      question: "Can I save or export my VAT calculations?",
      answer: "You can copy the results using the 'Copy Results' button on any calculator page. For bulk calculations or record-keeping, consider taking screenshots or manually recording the calculations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            VAT Calculator FAQ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to frequently asked questions about VAT calculations, rates, and using our global calculator for 27+ countries.
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQ questions..."
              className="w-full px-4 py-3 pl-12 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 rounded-lg transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Access to Popular Calculators</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/vat/germany" className="text-blue-600 hover:text-blue-800 text-sm font-medium">🇩🇪 Germany VAT (19%)</a>
            <a href="/vat/france" className="text-blue-600 hover:text-blue-800 text-sm font-medium">🇫🇷 France VAT (20%)</a>
            <a href="/vat/finland" className="text-blue-600 hover:text-blue-800 text-sm font-medium">🇫🇮 Finland VAT (24%)</a>
            <a href="/vat/ke" className="text-blue-600 hover:text-blue-800 text-sm font-medium">🇰🇪 Kenya VAT (16%)</a>
            <a href="/vat/za" className="text-blue-600 hover:text-blue-800 text-sm font-medium">🇿🇦 South Africa (15%)</a>
            <a href="/vat/ca" className="text-blue-600 hover:text-blue-800 text-sm font-medium">🇨🇦 Canada GST (5%)</a>
            <a href="/vat/mx" className="text-blue-600 hover:text-blue-800 text-sm font-medium">🇲🇽 Mexico IVA (16%)</a>
            <a href="/vat/br" className="text-blue-600 hover:text-blue-800 text-sm font-medium">🇧🇷 Brazil VAT</a>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our support team is here to help with VAT calculations and tax questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@vat-calculator-global.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
            <a
              href="/feedback"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Send Feedback
            </a>
          </div>
        </div>

        {/* FAQ Schema Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </div>
  );
}
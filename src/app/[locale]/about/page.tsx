import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'About Our Global VAT Calculator - Professional Tax Calculator Tool',
  description: 'Learn about our free VAT calculator tool covering 27+ countries worldwide. Professional-grade calculations for businesses, freelancers, and individuals across Europe, Africa, and Americas.',
  keywords: 'about VAT calculator, tax calculator tool, professional VAT calculation, global tax rates, VAT calculator features',
};

export default async function AboutPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Global VAT Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for accurate VAT calculations across 27+ countries worldwide. 
            Professional-grade tax calculations made simple, fast, and free.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            We believe that tax calculations should be simple, accurate, and accessible to everyone. 
            Our Global VAT Calculator was created to help businesses, freelancers, accountants, and 
            individuals navigate the complex world of Value Added Tax across different countries.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're dealing with German Mehrwertsteuer, French TVA, Finnish ALV, or Kenyan VAT, 
            our calculator provides instant, accurate results with the current official rates.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">🌍 Global Coverage</h3>
              <p className="text-gray-700">
                Support for 27+ countries across Europe, Africa, and Americas including all EU member states, 
                Kenya, South Africa, Nigeria, Canada, Mexico, and Brazil.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">💰 Multi-Currency</h3>
              <p className="text-gray-700">
                Calculations in multiple currencies including EUR, USD, GBP, KES, ZAR, NGN, CAD, MXN, and BRL 
                with proper formatting for each region.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">🔄 Bidirectional</h3>
              <p className="text-gray-700">
                Convert both ways: add VAT to net amounts or extract VAT from gross amounts. 
                Perfect for different business scenarios and accounting needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">📱 Mobile-Friendly</h3>
              <p className="text-gray-700">
                Responsive design that works perfectly on desktop, tablet, and mobile devices. 
                Calculate VAT on-the-go with an intuitive interface.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">🎯 Accurate Rates</h3>
              <p className="text-gray-700">
                Always up-to-date VAT rates including standard, reduced, and special rates for each country. 
                Rates are regularly updated to reflect government changes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">🔒 Privacy-First</h3>
              <p className="text-gray-700">
                No data collection, no registration required. All calculations happen in your browser. 
                GDPR compliant with optional analytics consent.
              </p>
            </div>
          </div>
        </div>

        {/* Countries Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Supported Countries</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">🇪🇺 Europe</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🇩🇪 Germany (19%, 7%)</li>
                <li>🇫🇷 France (20%, 10%, 5.5%, 2.1%)</li>
                <li>🇫🇮 Finland (24%, 14%, 10%)</li>
                <li>🇪🇸 Spain (21%, 10%, 4%)</li>
                <li>🇮🇹 Italy (22%, 10%, 4%)</li>
                <li>🇳🇱 Netherlands (21%, 9%)</li>
                <li>🇦🇹 Austria (20%, 10%)</li>
                <li>🇧🇪 Belgium (21%, 6%)</li>
                <li>And all other EU countries...</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-orange-900 mb-4">🌍 Africa</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🇰🇪 Kenya (16%, 8%)</li>
                <li>🇿🇦 South Africa (15%)</li>
                <li>🇳🇬 Nigeria (7.5%)</li>
                <li>🇪🇬 Egypt (14%)</li>
                <li>🇲🇦 Morocco (20%)</li>
                <li>🇹🇳 Tunisia (19%)</li>
                <li>And more African countries...</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">🌎 Americas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🇨🇦 Canada (5% GST + PST)</li>
                <li>🇲🇽 Mexico (16% IVA)</li>
                <li>🇧🇷 Brazil (18% ICMS)</li>
                <li>🇺🇸 USA (State sales tax)</li>
                <li>🇦🇷 Argentina (21% IVA)</li>
                <li>🇨🇱 Chile (19% IVA)</li>
                <li>And more American countries...</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Uses Our Calculator</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👔</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Owners</h3>
              <p className="text-sm text-gray-600">Calculate VAT for invoicing, pricing, and financial planning</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Freelancers</h3>
              <p className="text-sm text-gray-600">Quick VAT calculations for client invoices and expense tracking</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧮</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accountants</h3>
              <p className="text-sm text-gray-600">Professional tool for client tax calculations and compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consumers</h3>
              <p className="text-sm text-gray-600">Understand VAT on purchases and compare prices across countries</p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Built with Modern Technology</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our calculator is built using cutting-edge web technologies to ensure fast performance, 
            accuracy, and reliability across all devices and browsers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">⚡ Next.js 15</h3>
              <p className="text-sm text-gray-600">React-based framework for optimal performance and SEO</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🔧 TypeScript</h3>
              <p className="text-sm text-gray-600">Type-safe code ensuring calculation accuracy</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🎨 Tailwind CSS</h3>
              <p className="text-sm text-gray-600">Responsive design that works on all devices</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions or Feedback?</h2>
          <p className="text-lg text-gray-700 mb-6">
            We're constantly improving our calculator based on user feedback. 
            Have a suggestion or found an issue? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@vat-calculator-global.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
            <a
              href="/feedback"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Send Feedback
            </a>
          </div>
        </div>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "About Global VAT Calculator",
              "description": "Learn about our free VAT calculator tool covering 27+ countries worldwide. Professional-grade calculations for businesses, freelancers, and individuals.",
              "url": "https://vat-calculator-global.vercel.app/about",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "Global VAT Calculator",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Any",
                "description": "Free VAT calculator for 27+ countries worldwide including Europe, Africa, and Americas",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "featureList": [
                  "27+ country support",
                  "Multiple VAT rates per country",
                  "Bidirectional calculations",
                  "Mobile-friendly interface",
                  "Multi-currency support",
                  "Privacy-first design"
                ]
              }
            })
          }}
        />
      </div>
    </div>
  );
}
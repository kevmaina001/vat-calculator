import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya VAT Guide 2025 - 16% Standard Rate & 8% Reduced Rate Explained',
  description: 'Complete guide to Kenya VAT rates and calculations. Learn about 16% standard rate, 8% reduced rate, and zero-rated goods with practical examples.',
  keywords: 'Kenya VAT, Kenya tax, 16% VAT Kenya, VAT calculation Kenya, Kenyan tax rates',
};

export default function KenyaVATGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <nav className="mb-6">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </nav>

        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kenya VAT Guide 2025: Complete Tax Rate Calculator
            </h1>
            <div className="flex items-center text-gray-600 text-sm space-x-4 mb-6">
              <time dateTime="2025-01-01">January 1, 2025</time>
              <span>6 min read</span>
              <span>Kenya Tax Guide</span>
            </div>
          </header>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Kenya operates a Value Added Tax (VAT) system with a standard rate of 16%, reduced rate of 8%, 
              and zero-rated categories. This guide covers everything you need to calculate Kenyan VAT correctly.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Kenya VAT Rates 2025</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Current Rates</h3>
              <ul className="space-y-2">
                <li><strong>Standard Rate:</strong> 16% (most goods and services)</li>
                <li><strong>Reduced Rate:</strong> 8% (essential goods)</li>
                <li><strong>Zero-Rated:</strong> 0% (exports and specific items)</li>
                <li><strong>Exempt:</strong> No VAT applicable</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">What Gets the 8% Rate?</h2>
            <p>The reduced 8% VAT rate applies to essential goods including:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Basic food items (maize flour, wheat flour, rice, sugar)</li>
              <li>Agricultural inputs and equipment</li>
              <li>Medical supplies and pharmaceuticals</li>
              <li>Educational materials and textbooks</li>
              <li>Fertilizer and animal feeds</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Zero-Rated Items (0%)</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Exports of goods and services</li>
              <li>International transport services</li>
              <li>Some agricultural products</li>
              <li>Certain medical services</li>
              <li>Educational services by registered institutions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Calculation Examples</h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Example 1: Standard Rate (16%)</h3>
              <p className="mb-2"><strong>Scenario:</strong> Selling electronics for KES 50,000 (net price)</p>
              <div className="space-y-2">
                <p>Net amount: KES 50,000.00</p>
                <p>VAT (16%): KES 50,000.00 × 0.16 = KES 8,000.00</p>
                <p className="font-semibold">Gross amount: KES 50,000.00 + KES 8,000.00 = KES 58,000.00</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Example 2: Reduced Rate (8%)</h3>
              <p className="mb-2"><strong>Scenario:</strong> Selling maize flour for KES 2,000 (net price)</p>
              <div className="space-y-2">
                <p>Net amount: KES 2,000.00</p>
                <p>VAT (8%): KES 2,000.00 × 0.08 = KES 160.00</p>
                <p className="font-semibold">Gross amount: KES 2,000.00 + KES 160.00 = KES 2,160.00</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Converting Gross to Net</h2>
            <p>When you have a gross amount and need to extract the VAT:</p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Formula for 16% VAT</h3>
              <ul className="space-y-2">
                <li>Net = Gross ÷ 1.16</li>
                <li>VAT = Gross - Net</li>
              </ul>
              <p className="mt-4"><strong>Example:</strong> Gross price KES 11,600</p>
              <div className="space-y-2">
                <p>Net: KES 11,600 ÷ 1.16 = KES 10,000.00</p>
                <p>VAT: KES 11,600 - KES 10,000 = KES 1,600.00</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Formula for 8% VAT</h3>
              <ul className="space-y-2">
                <li>Net = Gross ÷ 1.08</li>
                <li>VAT = Gross - Net</li>
              </ul>
              <p className="mt-4"><strong>Example:</strong> Gross price KES 5,400</p>
              <div className="space-y-2">
                <p>Net: KES 5,400 ÷ 1.08 = KES 5,000.00</p>
                <p>VAT: KES 5,400 - KES 5,000 = KES 400.00</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">VAT Registration in Kenya</h2>
            <p className="mb-4">
              Businesses must register for VAT if their annual turnover exceeds KES 5 million. 
              Key points:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Mandatory registration above KES 5M annual turnover</li>
              <li>Voluntary registration allowed for smaller businesses</li>
              <li>Monthly VAT returns due by 20th of following month</li>
              <li>Electronic Tax Invoice Management System (eTIMS) required</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">💡 Pro Tip</h3>
              <p>Use our <Link href="/vat/ke" className="text-blue-600 hover:text-blue-800 underline">Kenya VAT Calculator</Link> for instant, accurate calculations with 16% and 8% rates. Perfect for Kenyan businesses and entrepreneurs.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Important Considerations</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <ul className="list-disc list-inside space-y-2">
                <li>VAT is charged on the supply of goods and services in Kenya</li>
                <li>Input VAT can be claimed against output VAT</li>
                <li>Digital Service Tax (DST) of 1.5% applies to digital services</li>
                <li>Always verify current rates with Kenya Revenue Authority (KRA)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Kenya uses 16% standard VAT and 8% reduced VAT rates</li>
              <li>Essential goods like food items qualify for 8% rate</li>
              <li>Exports and specific services are zero-rated (0%)</li>
              <li>VAT registration is mandatory above KES 5M turnover</li>
              <li>Use proper formulas when converting between net and gross amounts</li>
            </ul>

            <div className="border-t pt-6 mt-8">
              <h3 className="text-xl font-semibold mb-4">Related Tools & Guides</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/vat/ke" 
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h4 className="font-semibold text-blue-900">Kenya VAT Calculator</h4>
                  <p className="text-blue-700 text-sm">Calculate Kenyan VAT with 16% and 8% rates</p>
                </Link>
                <Link 
                  href="/vat/za" 
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h4 className="font-semibold text-blue-900">South Africa VAT</h4>
                  <p className="text-blue-700 text-sm">Calculate South African VAT at 15%</p>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
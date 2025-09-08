import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Calculate VAT in Germany (2025) - 19% & 7% Rates Explained',
  description: 'Complete guide to calculating German VAT (Mehrwertsteuer). Learn about 19% standard rate, 7% reduced rate, and see practical examples.',
  keywords: 'German VAT, Mehrwertsteuer, VAT calculation Germany, 19% VAT, 7% VAT Germany',
};

export default function GermanVATGuide() {
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
              How to Calculate VAT in Germany (2025 Guide)
            </h1>
            <div className="flex items-center text-gray-600 text-sm space-x-4 mb-6">
              <time dateTime="2025-01-01">January 1, 2025</time>
              <span>8 min read</span>
              <span>Tax Guide</span>
            </div>
          </header>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Germany applies two main VAT rates: 19% (standard) and 7% (reduced). This comprehensive guide 
              explains when to use each rate and provides practical calculation examples.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">German VAT Rates 2025</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Current Rates</h3>
              <ul className="space-y-2">
                <li><strong>Standard Rate:</strong> 19% (Regelsteuersatz)</li>
                <li><strong>Reduced Rate:</strong> 7% (ermäßigter Steuersatz)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">What Gets the 7% Rate?</h2>
            <p>The reduced 7% VAT rate applies to:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Most food items (bread, milk, vegetables, meat)</li>
              <li>Books, newspapers, and magazines</li>
              <li>Public transportation</li>
              <li>Hotel accommodations (but not restaurant meals)</li>
              <li>Cultural events (theater, museums)</li>
              <li>Medical products and services</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Calculation Examples</h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Example 1: Standard Rate (19%)</h3>
              <p className="mb-2"><strong>Scenario:</strong> Selling a laptop for €800 (net price)</p>
              <div className="space-y-2">
                <p>Net amount: €800.00</p>
                <p>VAT (19%): €800.00 × 0.19 = €152.00</p>
                <p className="font-semibold">Gross amount: €800.00 + €152.00 = €952.00</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Example 2: Reduced Rate (7%)</h3>
              <p className="mb-2"><strong>Scenario:</strong> Selling books for €50 (net price)</p>
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
              <p className="mt-4"><strong>Example:</strong> Gross price €119</p>
              <div className="space-y-2">
                <p>Net: €119 ÷ 1.19 = €100.00</p>
                <p>VAT: €119 - €100 = €19.00</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Formula for 7% VAT</h3>
              <ul className="space-y-2">
                <li>Net = Gross ÷ 1.07</li>
                <li>VAT = Gross - Net</li>
              </ul>
              <p className="mt-4"><strong>Example:</strong> Gross price €107</p>
              <div className="space-y-2">
                <p>Net: €107 ÷ 1.07 = €100.00</p>
                <p>VAT: €107 - €100 = €7.00</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Quick Reference Table</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Net Amount</th>
                    <th className="px-4 py-2 text-left">19% VAT</th>
                    <th className="px-4 py-2 text-left">7% VAT</th>
                    <th className="px-4 py-2 text-left">Gross (19%)</th>
                    <th className="px-4 py-2 text-left">Gross (7%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">€100</td>
                    <td className="px-4 py-2 border">€19.00</td>
                    <td className="px-4 py-2 border">€7.00</td>
                    <td className="px-4 py-2 border">€119.00</td>
                    <td className="px-4 py-2 border">€107.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 border">€500</td>
                    <td className="px-4 py-2 border">€95.00</td>
                    <td className="px-4 py-2 border">€35.00</td>
                    <td className="px-4 py-2 border">€595.00</td>
                    <td className="px-4 py-2 border">€535.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">€1,000</td>
                    <td className="px-4 py-2 border">€190.00</td>
                    <td className="px-4 py-2 border">€70.00</td>
                    <td className="px-4 py-2 border">€1,190.00</td>
                    <td className="px-4 py-2 border">€1,070.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">💡 Pro Tip</h3>
              <p>Use our <Link href="/vat/de" className="text-blue-600 hover:text-blue-800 underline">Germany VAT Calculator</Link> for instant, accurate calculations. Simply enter your amount and select the appropriate rate.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Germany uses 19% standard VAT and 7% reduced VAT</li>
              <li>Most goods and services use the 19% rate</li>
              <li>Essential items like food and books typically use 7%</li>
              <li>Always check current regulations for specific items</li>
              <li>Use proper formulas when converting between net and gross</li>
            </ul>

            <div className="border-t pt-6 mt-8">
              <h3 className="text-xl font-semibold mb-4">Related Tools & Guides</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/vat/de" 
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h4 className="font-semibold text-blue-900">Germany VAT Calculator</h4>
                  <p className="text-blue-700 text-sm">Calculate VAT instantly with 19% and 7% rates</p>
                </Link>
                <Link 
                  href="/blog/france-vat-rates-explained" 
                  className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <h4 className="font-semibold text-blue-900">France VAT Rates Guide</h4>
                  <p className="text-blue-700 text-sm">Learn about French VAT system</p>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
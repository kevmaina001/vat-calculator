'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">%</span>
              </div>
              <div>
                <span className="text-lg font-bold">Global VAT Calculator</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Free, accurate VAT calculator for 27+ countries worldwide. Convert net to gross and calculate VAT amounts instantly for businesses and freelancers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* VAT Calculators Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">VAT Calculators</h3>
            <ul className="space-y-2">
              <li><Link href="/vat/germany" className="text-gray-300 hover:text-white text-sm transition-colors">Germany VAT Calculator (19%)</Link></li>
              <li><Link href="/vat/france" className="text-gray-300 hover:text-white text-sm transition-colors">France VAT Calculator (20%)</Link></li>
              <li><Link href="/vat/finland" className="text-gray-300 hover:text-white text-sm transition-colors">Finland VAT Calculator (24%)</Link></li>
              <li><Link href="/vat/ke" className="text-gray-300 hover:text-white text-sm transition-colors">Kenya VAT Calculator (16%)</Link></li>
              <li><Link href="/vat/za" className="text-gray-300 hover:text-white text-sm transition-colors">South Africa VAT (15%)</Link></li>
              <li><Link href="/vat/ca" className="text-gray-300 hover:text-white text-sm transition-colors">Canada GST Calculator (5%)</Link></li>
              <li><Link href="/vat/mx" className="text-gray-300 hover:text-white text-sm transition-colors">Mexico IVA Calculator (16%)</Link></li>
              <li><Link href="/vat/br" className="text-gray-300 hover:text-white text-sm transition-colors">Brazil VAT Calculator</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-300 hover:text-white text-sm transition-colors">VAT Guides & Articles</Link></li>
              <li><Link href="/blog/kenya-vat-guide" className="text-gray-300 hover:text-white text-sm transition-colors">Kenya VAT Guide 2025</Link></li>
              <li><Link href="/blog/how-to-calculate-vat-germany" className="text-gray-300 hover:text-white text-sm transition-colors">How to Calculate German VAT</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white text-sm transition-colors">VAT Calculator FAQ</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">About Our Calculator</Link></li>
              <li><a href="/sitemap.xml" className="text-gray-300 hover:text-white text-sm transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Legal & Support Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
              <li><a href="mailto:support@vat-calculator-global.com" className="text-gray-300 hover:text-white text-sm transition-colors">Contact Support</a></li>
              <li><Link href="/feedback" className="text-gray-300 hover:text-white text-sm transition-colors">Send Feedback</Link></li>
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">VAT Updates</h4>
              <p className="text-xs text-gray-400 mb-3">Get notified of VAT rate changes</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              <p>&copy; {currentYear} Global VAT Calculator. All rights reserved.</p>
              <p className="mt-1">Professional VAT calculations for businesses worldwide.</p>
            </div>
            
            {/* SEO Keywords Section */}
            <div className="mt-4 md:mt-0 text-xs text-gray-500 text-center md:text-right">
              <p>VAT Calculator | Tax Calculator | Net to Gross | Gross to Net</p>
              <p>Mehrwertsteuer | TVA | ALV | IVA | GST Calculator</p>
              <p>Europe | Africa | Americas | 27+ Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Global VAT Calculator",
            "url": "https://vat-calculator-global.vercel.app",
            "logo": "https://vat-calculator-global.vercel.app/logo.png",
            "description": "Free, accurate VAT calculator for 27+ countries worldwide including EU, Africa, and Americas. Convert net to gross amounts instantly.",
            "sameAs": [
              "https://twitter.com/globalvatcalc",
              "https://linkedin.com/company/globalvatcalc"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "support@vat-calculator-global.com",
              "contactType": "Customer Support"
            }
          })
        }}
      />
    </footer>
  );
}
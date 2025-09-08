import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - VAT Calculator EU',
  description: 'Privacy policy for VAT Calculator EU. Learn how we handle your data and protect your privacy.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="mb-6">
              VAT Calculator EU ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and protect your information when you use our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Information You Provide</h3>
            <ul className="list-disc list-inside mb-4">
              <li>VAT calculation inputs (amounts, countries, rates)</li>
              <li>No personal information is required to use our calculator</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc list-inside mb-6">
              <li>IP address (anonymized)</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referral sources</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
            <ul className="list-disc list-inside mb-6">
              <li>To provide and improve our VAT calculation services</li>
              <li>To analyze site usage and optimize performance</li>
              <li>To understand user preferences and improve user experience</li>
              <li>To detect and prevent fraud or abuse</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="mb-4">We use the following types of cookies:</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function and cannot be disabled.
              They include cookies for language preferences and consent choices.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
            <p className="mb-4">
              We use Google Analytics to understand how visitors interact with our site.
              These cookies help us improve our services and user experience.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Advertising Cookies</h3>
            <p className="mb-6">
              We may use advertising cookies to show relevant ads and measure their effectiveness.
              You can control these cookies through our consent banner.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
            <p className="mb-4">We do not sell, trade, or rent your personal information. We may share data with:</p>
            <ul className="list-disc list-inside mb-6">
              <li><strong>Google Analytics:</strong> For website analytics (anonymized data)</li>
              <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
              <li><strong>Legal authorities:</strong> If required by law or to protect our rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="mb-6">
              We implement appropriate security measures to protect your information against unauthorized access,
              alteration, disclosure, or destruction. All data transmission is encrypted using SSL/TLS protocols.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights (GDPR)</h2>
            <p className="mb-4">If you're in the European Union, you have the right to:</p>
            <ul className="list-disc list-inside mb-6">
              <li>Access your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Erase your personal data</li>
              <li>Restrict processing of your personal data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Control</h2>
            <p className="mb-6">
              You can control cookies through your browser settings or our consent banner.
              Disabling certain cookies may limit website functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="mb-6">
              Our service is not directed to children under 13. We do not knowingly collect
              personal information from children under 13.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. We will notify users of
              significant changes by posting the new policy on this page with an updated date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Email:</strong> privacy@vatcalculator-eu.com</p>
              <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Legal Basis for Processing (GDPR)</h3>
              <p className="text-sm text-gray-600">
                We process your data based on legitimate interests (website functionality and improvement),
                your consent (for analytics and advertising cookies), and legal obligations (compliance with applicable laws).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
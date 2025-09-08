import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - VAT Calculator EU',
  description: 'Terms of Service for VAT Calculator EU. Important legal information about using our service.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="mb-6">
              By accessing and using VAT Calculator EU, you accept and agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
            <p className="mb-6">
              VAT Calculator EU provides free online tools for calculating Value Added Tax (VAT) across European Union countries.
              Our service includes calculators, reference materials, and educational content about EU VAT rates and regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
            <p className="mb-4">You agree to use our service only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
            <ul className="list-disc list-inside mb-6">
              <li>Use the service for any fraudulent or illegal activities</li>
              <li>Attempt to interfere with or disrupt the service</li>
              <li>Use automated systems to access or scrape the website</li>
              <li>Copy, reproduce, or distribute our content without permission</li>
              <li>Reverse engineer or attempt to extract source code</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accuracy Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Important Notice</h3>
              <p className="text-yellow-700">
                While we strive to provide accurate and up-to-date VAT information, our calculations and content are for informational purposes only.
                <strong> Always consult official tax authorities or qualified professionals for official tax advice.</strong>
                VAT rates and regulations can change without notice.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="mb-6">
              VAT Calculator EU and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
              arising from your use of our service. We do not guarantee the accuracy, completeness, or timeliness of the information provided.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Warranty</h2>
            <p className="mb-6">
              Our service is provided "as is" without any warranties of any kind, either express or implied.
              We do not warrant that the service will be uninterrupted, secure, or error-free.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="mb-6">
              The content, design, and functionality of VAT Calculator EU are protected by copyright and other intellectual property laws.
              You may not reproduce, distribute, or create derivative works without our explicit permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
            <p className="mb-6">
              Your privacy is important to us. Please review our <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link> to understand how we collect, use, and protect your information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="mb-4">Our website may contain links to third-party services or display third-party advertisements. We use:</p>
            <ul className="list-disc list-inside mb-6">
              <li><strong>Google Analytics:</strong> For website usage analytics</li>
              <li><strong>Google AdSense:</strong> For displaying advertisements</li>
            </ul>
            <p className="mb-6">
              These third-party services have their own terms and privacy policies. We are not responsible for their content or practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
            <p className="mb-4">Users are responsible for:</p>
            <ul className="list-disc list-inside mb-6">
              <li>Verifying the accuracy of calculations with official sources</li>
              <li>Complying with applicable tax laws and regulations</li>
              <li>Seeking professional advice for complex tax situations</li>
              <li>Using the service in accordance with these terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="mb-6">
              We reserve the right to terminate or suspend access to our service immediately,
              without prior notice or liability, for any reason, including breach of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective when posted on this page
              with an updated "Last updated" date. Your continued use of the service constitutes acceptance of any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the European Union and the country
              where our service is primarily operated, without regard to conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p><strong>Email:</strong> legal@vatcalculator-eu.com</p>
              <p><strong>Subject Line:</strong> Terms of Service Inquiry</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
            <p className="mb-6">
              If any provision of these Terms is found to be unenforceable or invalid,
              that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                By using VAT Calculator EU, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service
                and our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
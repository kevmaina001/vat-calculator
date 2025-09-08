import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global VAT Calculator Blog - International Tax Guides & Tips',
  description: 'Learn about VAT rates, calculations, and tax regulations worldwide including EU, Africa, and Americas. Expert guides and practical examples.',
};

const blogPosts = [
  {
    slug: 'kenya-vat-guide',
    title: 'Kenya VAT Guide 2025: 16% Standard & 8% Reduced Rates',
    excerpt: 'Complete guide to Kenya VAT system with 16% standard rate, 8% reduced rate, and zero-rated goods. Perfect for Kenyan businesses.',
    date: '2025-01-01',
    readTime: '6 min read'
  },
  {
    slug: 'how-to-calculate-vat-germany',
    title: 'How to Calculate VAT in Germany (2025 Guide)',
    excerpt: 'Complete guide to German VAT rates including 19% standard rate and 7% reduced rate. Examples and practical calculations.',
    date: '2025-01-01',
    readTime: '8 min read'
  },
  {
    slug: 'france-vat-rates-explained',
    title: 'France VAT Rates Explained: 20%, 10%, 5.5% & 2.1%',
    excerpt: 'Understanding the French VAT system with four different rates. When to apply each rate and practical examples.',
    date: '2025-01-02',
    readTime: '7 min read'
  },
  {
    slug: 'net-vs-gross-eu-invoices',
    title: 'Net vs Gross: Quick Guide for EU Invoices',
    excerpt: 'Master the difference between net and gross amounts across EU countries. Essential for freelancers and businesses.',
    date: '2025-01-03',
    readTime: '5 min read'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Global VAT Calculator Blog</h1>
          <p className="text-xl text-gray-600">
            Expert guides on worldwide VAT rates, calculations, and tax regulations
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more 
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Internal linking section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Country-Specific VAT Calculators</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Link href="/vat/ke" className="text-blue-600 hover:text-blue-800">Kenya VAT (16%)</Link>
            <Link href="/vat/za" className="text-blue-600 hover:text-blue-800">South Africa VAT (15%)</Link>
            <Link href="/vat/ng" className="text-blue-600 hover:text-blue-800">Nigeria VAT (7.5%)</Link>
            <Link href="/vat/de" className="text-blue-600 hover:text-blue-800">Germany VAT (19%)</Link>
            <Link href="/vat/fr" className="text-blue-600 hover:text-blue-800">France VAT (20%)</Link>
            <Link href="/vat/ca" className="text-blue-600 hover:text-blue-800">Canada GST (5%)</Link>
            <Link href="/vat/br" className="text-blue-600 hover:text-blue-800">Brazil VAT (18%)</Link>
            <Link href="/vat/mx" className="text-blue-600 hover:text-blue-800">Mexico IVA (16%)</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
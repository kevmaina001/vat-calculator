import { MetadataRoute } from 'next'
import { getPopularCountries } from '@/lib/vat-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vat-calculator-global.vercel.app';
  const languages = ['en', 'de', 'fr'];
  const countries = getPopularCountries(); // Focus on popular countries first

  const pages: MetadataRoute.Sitemap = [];

  // Main pages
  languages.forEach(lang => {
    pages.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          de: `${baseUrl}/de`,
          fr: `${baseUrl}/fr`,
        }
      }
    });
  });

  // Country-specific pages
  countries.forEach(country => {
    languages.forEach(lang => {
      pages.push({
        url: `${baseUrl}/${lang}/vat/${country.code.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en/vat/${country.code.toLowerCase()}`,
            de: `${baseUrl}/de/vat/${country.code.toLowerCase()}`,
            fr: `${baseUrl}/fr/vat/${country.code.toLowerCase()}`,
          }
        }
      });
    });
  });

  // High-priority country pages with specific routes
  const priorityCountries = ['germany', 'france', 'finland'];
  priorityCountries.forEach(country => {
    languages.forEach(lang => {
      pages.push({
        url: `${baseUrl}/${lang}/vat/${country}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
        alternates: {
          languages: {
            en: `${baseUrl}/en/vat/${country}`,
            de: `${baseUrl}/de/vat/${country}`,
            fr: `${baseUrl}/fr/vat/${country}`,
          }
        }
      });
    });
  });

  // Blog pages
  const blogPosts = ['kenya-vat-guide', 'how-to-calculate-vat-germany'];
  languages.forEach(lang => {
    // Blog index
    pages.push({
      url: `${baseUrl}/${lang}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });

    // Blog posts
    blogPosts.forEach(post => {
      pages.push({
        url: `${baseUrl}/${lang}/blog/${post}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return pages;
}
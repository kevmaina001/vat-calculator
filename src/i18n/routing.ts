import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'de', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'en',

  pathnames: {
    '/': '/',
    '/mehrwertsteuer-rechner': {
      en: '/vat-calculator',
      de: '/mehrwertsteuer-rechner'
    },
    '/calculateur-tva': {
      en: '/vat-calculator', 
      fr: '/calculateur-tva'
    }
  }
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
# 🌍 Global VAT Calculator

A comprehensive, multilingual VAT calculator supporting 27+ countries worldwide including EU, Africa, and Americas. Built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- **🌎 Global Coverage**: 27+ countries including Kenya, South Africa, Germany, France, Canada, Brazil, and more
- **💱 Multi-Currency**: Support for EUR, USD, KES, ZAR, NGN, CAD, BRL, and other local currencies
- **🔄 Bidirectional Calculations**: Net → Gross and Gross → Net conversions
- **🌐 Multilingual**: English, German, and French interfaces
- **📱 Mobile-Friendly**: Responsive design optimized for all devices
- **⚡ Real-time**: Instant calculations as you type
- **🔗 Shareable**: Copy results and generate shareable URLs
- **📊 Analytics**: Google Analytics 4 integration with GDPR compliance
- **🎯 SEO Optimized**: Country-specific pages and blog content

## 🏛️ Supported Countries

### 🇪🇺 Europe
- Germany (19%, 7%)
- France (20%, 10%, 5.5%, 2.1%)
- Spain (21%, 10%, 4%)
- Italy (22%, 10%, 5%, 4%)
- Netherlands (21%, 9%)
- And 10+ more EU countries

### 🌍 Africa
- **Kenya (16%, 8%)** - Featured with comprehensive guide
- South Africa (15%)
- Nigeria (7.5%)
- Ghana (15%, 3%)
- Morocco (20%, 14%, 10%, 7%)

### 🇺🇸 Americas
- Canada (5% GST)
- United States (No federal VAT)
- Mexico (16%, 8%)
- Brazil (18%, complex system)
- Argentina (21%, 10.5%, 2.5%)
- Chile (19%)
- Colombia (19%, 5%)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kevmaina001/vat-calculator.git
cd vat-calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the calculator in action.

### Environment Variables

Create a `.env.local` file:

```env
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google AdSense
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxxxx

# Production URL
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel-ready
- **Performance**: Turbopack for fast builds

## 📁 Project Structure

```
src/
├── app/[locale]/           # Internationalized routes
│   ├── blog/              # Blog system
│   ├── vat/[country]/     # Country-specific pages
│   ├── privacy/           # Privacy policy
│   └── terms/             # Terms of service
├── components/            # Reusable React components
├── data/                  # VAT rates data
├── lib/                   # Utility functions
├── types/                 # TypeScript definitions
└── i18n/                  # Internationalization config
```

## 🔧 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel --prod
```

## 🌐 Internationalization

The app supports multiple languages with localized routes:

- English: `/en/`
- German: `/de/mehrwertsteuer-rechner`
- French: `/fr/calculateur-tva`

## 📈 SEO Features

- **Sitemap**: Auto-generated for all countries and languages
- **Meta Tags**: Optimized for each country/language combination
- **Structured Data**: WebApplication schema
- **Blog System**: SEO-optimized content for each country
- **Country Pages**: Deep-linked pages like `/vat/ke` for Kenya

## 🎯 Kenya-Specific Features

- 16% standard rate and 8% reduced rate support
- KES currency formatting
- Local business context and examples
- KRA compliance notes
- eTIMS system references
- Comprehensive Kenya VAT guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Adding New Countries

To add a new country:

1. Update `src/data/vat-rates.json` with new country data
2. Add country code to `popularCountries` in `src/lib/vat-data.ts`
3. Create country-specific blog content if needed
4. Update sitemap and routing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- VAT rates sourced from official government websites
- Built with Next.js and Vercel
- Icons and design inspired by modern tax software
- Community feedback from developers worldwide

## 📞 Support

For support, email support@vat-calculator-global.com or create an issue on GitHub.

---

**Made with ❤️ for businesses worldwide** 🌍

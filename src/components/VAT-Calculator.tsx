'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { VATCalculation, CalculationDirection } from '@/types/vat';
import { calculateVAT, formatCurrency } from '@/lib/vat-calculator';
import { getAllCountries, getAvailableRates, getCountryByCode } from '@/lib/vat-data';
import { trackVATCalculation, trackCopyResults, trackShareLink } from '@/lib/gtag';
import { Link } from '@/i18n/routing';
import AdSense from './AdSense';

export default function VATCalculator() {
  const t = useTranslations();
  const [amount, setAmount] = useState<string>('100');
  const [country, setCountry] = useState<string>('DE');
  const [rate, setRate] = useState<number>(19);
  const [direction, setDirection] = useState<CalculationDirection>('NET_TO_GROSS');
  const [result, setResult] = useState<VATCalculation | null>(null);

  const countries = getAllCountries();
  const availableRates = getAvailableRates(country);
  const selectedCountry = getCountryByCode(country);

  useEffect(() => {
    if (availableRates.length > 0 && !availableRates.includes(rate)) {
      setRate(availableRates[0]);
    }
  }, [country, availableRates, rate]);

  useEffect(() => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount) && numAmount > 0 && rate > 0) {
      try {
        const calculation = calculateVAT(numAmount, rate, direction, selectedCountry?.country || '');
        setResult(calculation);
        
        // Track calculation event
        trackVATCalculation({
          amount: numAmount,
          rate: rate,
          country: country,
          direction: direction,
        });
      } catch (error) {
        setResult(null);
      }
    } else {
      setResult(null);
    }
  }, [amount, rate, direction, selectedCountry, country]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    trackCopyResults(country, rate);
  };

  const getShareableUrl = () => {
    const params = new URLSearchParams({
      amount,
      country,
      rate: rate.toString(),
      direction
    });
    return `${window.location.origin}?${params.toString()}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Global VAT Calculator
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="space-y-4">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                {t('amount')}
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 hover:shadow-md focus:scale-105 text-base sm:text-sm"
                placeholder="Enter amount"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                {t('country')}
              </label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-300 hover:shadow-md focus:scale-105 text-base sm:text-sm cursor-pointer"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.country} ({c.code})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="rate" className="block text-sm font-medium text-gray-700 mb-1">
                {t('vatRate')}
              </label>
              <select
                id="rate"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-300 hover:shadow-md focus:scale-105 text-base sm:text-sm cursor-pointer"
              >
                {availableRates.map((r) => (
                  <option key={r} value={r}>
                    {r}% {r === selectedCountry?.standard_rate ? t('standard') : t('reduced')}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('calculationDirection')}
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="direction"
                    value="NET_TO_GROSS"
                    checked={direction === 'NET_TO_GROSS'}
                    onChange={(e) => setDirection(e.target.value as CalculationDirection)}
                    className="mr-2"
                  />
                  {t('netToGross')}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="direction"
                    value="GROSS_TO_NET"
                    checked={direction === 'GROSS_TO_NET'}
                    onChange={(e) => setDirection(e.target.value as CalculationDirection)}
                    className="mr-2"
                  />
                  {t('grossToNet')}
                </label>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('results')}</h3>
            
            {result ? (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('netAmount')}</span>
                  <span className="font-semibold">{formatCurrency(result.net, selectedCountry?.currency)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('vatAmount', { rate })}</span>
                  <span className="font-semibold text-blue-600">{formatCurrency(result.vat, selectedCountry?.currency)}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-gray-600">{t('grossAmount')}</span>
                  <span className="font-bold text-lg">{formatCurrency(result.gross, selectedCountry?.currency)}</span>
                </div>

                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => copyToClipboard(`Net: ${formatCurrency(result.net, selectedCountry?.currency)}, VAT: ${formatCurrency(result.vat, selectedCountry?.currency)}, Gross: ${formatCurrency(result.gross, selectedCountry?.currency)}`)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 text-sm transform hover:scale-105 hover:shadow-lg active:scale-95 animate-pulse-glow"
                  >
                    <span className="flex items-center">
                      📋 {t('copyResults')}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      copyToClipboard(getShareableUrl());
                      trackShareLink(country, rate);
                    }}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all duration-300 text-sm transform hover:scale-105 hover:shadow-lg active:scale-95"
                  >
                    <span className="flex items-center">
                      🔗 {t('shareLink')}
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">{t('enterValidAmount')}</p>
            )}

            {selectedCountry?.notes && (
              <div className="mt-4 p-3 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-800">
                  <strong>{t('note')}</strong> {selectedCountry.notes}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popular Countries Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular VAT Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/vat/germany"
            className="block p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200 group transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-bounce-in"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-800">🇩🇪 Germany VAT</h3>
              <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-medium">Most Popular</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-blue-800"><strong>Standard:</strong> 19% (most goods & services)</p>
              <p className="text-sm text-blue-700"><strong>Reduced:</strong> 7% (books, food, newspapers)</p>
              <p className="text-xs text-blue-600 mt-3">Click to calculate German VAT with preselected rates →</p>
            </div>
          </Link>

          <Link 
            href="/vat/france"
            className="block p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all duration-300 border border-purple-200 group transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-bounce-in"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-purple-900 group-hover:text-purple-800">🇫🇷 France VAT (TVA)</h3>
              <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full font-medium">4 Rates</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-purple-800"><strong>Standard:</strong> 20% (most goods & services)</p>
              <p className="text-sm text-purple-700"><strong>Others:</strong> 10% hotels, 5.5% food, 2.1% medicines</p>
              <p className="text-xs text-purple-600 mt-3">Calculate French TVA with all rate options →</p>
            </div>
          </Link>

          <Link 
            href="/vat/finland"
            className="block p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:from-green-100 hover:to-green-200 transition-all duration-300 border border-green-200 group transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-bounce-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-green-900 group-hover:text-green-800">🇫🇮 Finland VAT (ALV)</h3>
              <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-medium">Highest EU</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-green-800"><strong>Standard:</strong> 24% (highest in EU)</p>
              <p className="text-sm text-green-700"><strong>Reduced:</strong> 14% food, 10% books & medicines</p>
              <p className="text-xs text-green-600 mt-3">Calculate Finnish ALV with Nordic rates →</p>
            </div>
          </Link>

          <Link 
            href="/vat/ke"
            className="block p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg hover:from-orange-100 hover:to-orange-200 transition-all duration-300 border border-orange-200 group transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 animate-bounce-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-orange-900 group-hover:text-orange-800">🇰🇪 Kenya VAT</h3>
              <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full font-medium">KES Currency</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-orange-800"><strong>Standard:</strong> 16% (most goods & services)</p>
              <p className="text-sm text-orange-700"><strong>Essential:</strong> 8% (food, agricultural inputs)</p>
              <p className="text-xs text-orange-600 mt-3">Calculate Kenyan VAT in KES currency →</p>
            </div>
          </Link>
        </div>
      </div>

      {/* AdSense Banner */}
      <div className="mb-6">
        <AdSense 
          adSlot="6300978111"
          width={728}
          height={90}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
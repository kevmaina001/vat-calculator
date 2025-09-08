'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { VATCalculation, CalculationDirection } from '@/types/vat';
import { calculateVAT, formatCurrency } from '@/lib/vat-calculator';
import { getAllCountries, getAvailableRates, getCountryByCode } from '@/lib/vat-data';
import { trackVATCalculation, trackCopyResults, trackShareLink } from '@/lib/gtag';
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
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
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    {t('copyResults')}
                  </button>
                  <button
                    onClick={() => {
                      copyToClipboard(getShareableUrl());
                      trackShareLink(country, rate);
                    }}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
                  >
                    {t('shareLink')}
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

      {/* AdSense Banner */}
      <div className="mb-6">
        <AdSense 
          adSlot="1234567890"
          width={728}
          height={90}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
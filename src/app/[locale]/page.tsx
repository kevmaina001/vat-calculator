import VATCalculator from '@/components/VAT-Calculator';
import { Metadata } from 'next';
import {getTranslations} from 'next-intl/server';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
    keywords: t('keywords'),
  };
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <VATCalculator />
    </div>
  );
}

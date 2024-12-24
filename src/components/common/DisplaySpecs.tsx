import { useTranslations } from '@i18n/utils';

interface DisplayProps {
  lang: 'en' | 'no';
  data: Record<string, string | boolean | number>;
}

const DisplaySpecs = ({ lang, data }: DisplayProps) => {
  const t = useTranslations(lang);

  if (!data) {
    return null;
  }
  return (
    <ul className='mb-10 flex w-full flex-col items-start justify-start gap-3 rounded-sm border border-primary p-2'>
      {Object.entries(data).map(([key, value]) => (
        <li key={key} className='flex w-full items-center justify-between gap-2'>
          <span className='text-sm'>{t(`products.${key}`)}</span>
          <span className='text-lg'>
            {typeof value === 'boolean' ? (value ? '+' : '-') : value}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default DisplaySpecs;

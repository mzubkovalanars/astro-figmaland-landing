import { useTranslations } from '@/i18n/utils';

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
    <ul className='flex flex-col gap-3 items-start justify-start w-full p-2 mb-10 border border-primary rounded-sm'>
      {Object.entries(data).map(([key, value]) => (
        <li key={key} className='flex gap-2 items-center justify-between w-full'>
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

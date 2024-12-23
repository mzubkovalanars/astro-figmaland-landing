import React, { useState } from 'react';
import { useTranslations } from '@i18n/utils';
import { partnersImages } from '@utils/constants';

interface PartnersLogoProps {
  lang: 'en' | 'no';
}

const PartnersLogo: React.FC<PartnersLogoProps> = ({ lang }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const t = useTranslations(lang);

  const displayedImages = showAll ? partnersImages : partnersImages.slice(0, 6);

  return (
    <div className='flex max-w-4xl flex-col items-center delay-1000 animate-in fade-in zoom-in'>
      <div className='my-[50px] flex max-w-[1097px] flex-wrap items-center justify-center gap-[74px] md:max-w-[386px] md:gap-[50px] sm:gap-5'>
        {displayedImages.map((image, i) => (
          <div key={image.src + i} className='flex transition duration-1000 ease-out'>
            <img
              src={image.src}
              alt=''
              width={image.width}
              height={image.height}
              loading='lazy'
              className='h-auto max-h-[60px] max-w-full rounded-[12px] sm:max-h-[50px]'
            />
          </div>
        ))}
      </div>
      {showAll ? null : (
        <button onClick={() => setShowAll(!showAll)} className='btn btn-secondary small px-4 py-2'>
          {t('main.partners.btn')}
        </button>
      )}
    </div>
  );
};

export default PartnersLogo;

import React, { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useTranslations } from '@i18n/utils';
import {
  DISPLAY_IMAGES,
  DISPLAY_IMAGES_MOB,
  galleryImages,
  galleryImagesMob,
} from '@utils/constants';

interface GalleryImagesProps {
  lang: 'en' | 'no';
}

const GalleryImages: React.FC<GalleryImagesProps> = ({ lang }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const t = useTranslations(lang);
  const isMobileDevice = useMediaQuery('only screen and (max-width: 560px)');

  const imagesToDisplay = isMobileDevice ? galleryImagesMob : galleryImages;

  const countDisplayImages = isMobileDevice ? DISPLAY_IMAGES_MOB : DISPLAY_IMAGES;

  const displayedImages = showAll ? imagesToDisplay : imagesToDisplay.slice(0, countDisplayImages);

  return (
    <>
      <div className='my-11 flex max-w-[1097px] flex-wrap items-center justify-center gap-[33px]'>
        {displayedImages.map((image, i) => (
          <img
            key={image.src + i}
            src={image.src}
            srcSet={`${image.src} 1x, ${image.src2x} 2x`}
            alt={image.alt || ''}
            loading='lazy'
            width={image.width}
            height={image.height}
            className='h-auto max-w-full rounded-[12px]'
          />
        ))}
      </div>
      {showAll ? null : (
        <button onClick={() => setShowAll(!showAll)} className='btn btn-secondary small px-4 py-2'>
          {t('btn-more')}
        </button>
      )}
    </>
  );
};

export default GalleryImages;

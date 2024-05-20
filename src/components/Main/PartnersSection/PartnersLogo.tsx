import React, { useState } from "react";
import { useTranslations } from "@/i18n/utils";
import { partnersImages } from "@/utils/constants";

interface PartnersLogoProps {
  lang: "en" | "no";
}

const PartnersLogo: React.FC<PartnersLogoProps> = ({ lang }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const t = useTranslations(lang);

  const displayedImages = showAll ? partnersImages : partnersImages.slice(0, 6);

  return (
    <div className='animate-in fade-in zoom-in delay-1000 flex flex-col items-center max-w-4xl'>
      <div className='flex flex-wrap items-center justify-center gap-[74px] sm:gap-5 md:gap-[50px] max-w-[1097px] md:max-w-[386px] my-[50px]'>
        {displayedImages.map((image, i) => (
          <div
            key={image.src + i}
            className='flex transition duration-1000 ease-out'
          >
            <img
              src={image.src}
              alt={image.alt}
              className='h-auto max-h-[60px] sm:max-h-[50px] max-w-full rounded-[12px]'
            />
          </div>
        ))}
      </div>
      {showAll ? null : (
        <button
          onClick={() => setShowAll(!showAll)}
          className='px-4 py-2 btn btn-secondary small'
        >
          {t("main.partners.btn")}
        </button>
      )}
    </div>
  );
};

export default PartnersLogo;

import * as React from 'react';
import { languages } from '@i18n/ui';
import { useTranslatedPath } from '@i18n/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@lib/components/ui/select';

interface SelectProps {
  lng: 'en' | 'no';
  route: string | undefined;
}

const LanguageSelect: React.FC<SelectProps> = ({ lng, route }) => {
  const translatePath = useTranslatedPath(lng);

  const handleChange = (value: 'en' | 'no') => {
    const newPath = translatePath(route ? route : '', value);
    location.replace(newPath);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className='w-16' aria-label={lng}>
        <SelectValue placeholder={lng} />
      </SelectTrigger>
      <SelectContent className='z-50 min-w-9 bg-background'>
        <SelectGroup>
          {Object.entries(languages).map(([lang, label]) => (
            <SelectItem
              value={lang}
              key={lang}
              className='cursor-pointer px-3 py-2 text-center hover:bg-primary-foreground'
            >
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;

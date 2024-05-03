import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/components/ui/select";
import { languages } from "@/i18n/ui";
import { useTranslatedPath } from "@/i18n/utils";

interface SelectProps {
  lng: "en" | "no";
  route: string | undefined;
}

const LangSelect: React.FC<SelectProps> = ({ lng, route }) => {
  const translatePath = useTranslatedPath(lng);

  const handleChange = (value: string) => {
    const newPath = translatePath(`/${route ? route : ""}`, value);
    location.replace(newPath);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className='w-[60px]'>
        <SelectValue placeholder={lng} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.entries(languages).map(([lang, label]) => (
            <SelectItem value={lang} key={lang}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LangSelect;

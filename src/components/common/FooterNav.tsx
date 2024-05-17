import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/lib/components/ui/accordion";
import { useTranslations } from "@/i18n/utils";
import { navLinksFooter } from "@/utils/constants";

interface FooterNavProps {
  lang: "en" | "no";
}

export default function FooterNav({ lang }: FooterNavProps) {
  const t = useTranslations(lang);
  return (
    <Accordion type='single' collapsible className='w-full sm:block hidden'>
      {navLinksFooter.map((item, i) => (
        <AccordionItem key={item.title + i} value={item.title}>
          <AccordionTrigger className='text-xl font-medium hover:no-underline'>
            {t(item.title)}
          </AccordionTrigger>
          <AccordionContent>
            <ul className='items-start gap-5 flex flex-col mt-6'>
              {item.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {t(link.title)}
                </a>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Button } from "@/lib/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/lib/components/ui/drawer";
import { navLinks } from "@/utils/constants";
import { useTranslations } from "@/i18n/utils";
import Logo from "@public/logo-dark.svg";

interface MenuDrawerProps {
  lang: "en" | "no";
}

export default function MenuDrawer({ lang }: MenuDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations(lang);

  const isDesktopDevice = useMediaQuery("only screen and (min-width: 960px)");

  if (isDesktopDevice) {
    return null;
  }

  return (
    <Drawer
      open={isOpen}
      modal={false}
      direction='right'
      onOpenChange={setIsOpen}
    >
      <DrawerTrigger asChild>
        <div className='menu-icon burger'></div>
      </DrawerTrigger>
      <DrawerContent className='h-lvh w-80 p-4 right-0 left-auto items-center border-primary rounded-none drawer-content'>
        <DrawerHeader className='place-items-center text-center p-0 w-full'>
          <DrawerClose asChild>
            <Button
              variant='outline'
              className='menu-icon close'
              onClick={() => setIsOpen(false)}
            ></Button>
          </DrawerClose>
          <a href='/'>
            <img src={Logo.src} alt='figma land' width='206' height='76' />
          </a>
        </DrawerHeader>
        <ul className='flex flex-col flex-1 items-center justify-center'>
          {navLinks.map((item) => (
            <li className='p-[10px]' key={item.href}>
              <a href={t(item.href)}>{t(item.title)}</a>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
}

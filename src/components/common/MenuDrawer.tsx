import { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import LogoIcon from '@assets/icons/logo.svg';
import LanguageSelect from '@components/common/LanguageSelect';
import { useTranslations } from '@i18n/utils';
import { Button } from '@lib/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@lib/components/ui/drawer';
import { navLinks } from '@utils/constants';

interface MenuDrawerProps {
  lang: 'en' | 'no';
  route: string | undefined;
}

export default function MenuDrawer({ lang, route }: MenuDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations(lang);

  const isDesktopDevice = useMediaQuery('only screen and (min-width: 1090px)');

  if (isDesktopDevice) {
    return null;
  }

  return (
    <Drawer open={isOpen} modal={false} direction='right' onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button className='menu-icon burger' aria-label='burger icon'></button>
      </DrawerTrigger>
      <DrawerContent className='drawer-content left-auto right-0 h-lvh w-80 items-center rounded-none border-primary p-4'>
        <DrawerHeader className='w-full place-items-center p-0 text-center'>
          <DrawerClose asChild>
            <Button
              variant='outline'
              className='menu-icon close'
              onClick={() => setIsOpen(false)}
            ></Button>
          </DrawerClose>
          <a href='/'>
            <img src={LogoIcon.src} alt='figma land' width='206' height='76' />
          </a>
        </DrawerHeader>
        <ul className='flex flex-1 flex-col items-center justify-center'>
          {navLinks.map((item) => (
            <li className='line-hover p-[10px]' key={item.href}>
              <a href={item.href}>{t(item.title)}</a>
            </li>
          ))}
          <a
            href='/login'
            className='blue-hover mt-4 hidden border border-white px-12 py-[13px] sm:flex'
          >
            {t('nav.login')}
          </a>
        </ul>
        {!isDesktopDevice && <LanguageSelect lng={lang} route={route} />}
      </DrawerContent>
    </Drawer>
  );
}

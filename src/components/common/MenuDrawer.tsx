import { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
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
            <img src='/icons/logo-dark.svg' alt='figma land' width='206' height='76' />
          </a>
        </DrawerHeader>
        <ul className='flex flex-col flex-1 items-center justify-center'>
          {navLinks.map((item) => (
            <li className='p-[10px] line-hover' key={item.href}>
              <a href={item.href}>{t(item.title)}</a>
            </li>
          ))}
          <a
            href='/login'
            className='py-[13px] px-12 mt-4 border border-white sm:flex hidden blue-hover'
          >
            {t('nav.login')}
          </a>
        </ul>
        {!isDesktopDevice && <LanguageSelect lng={lang} route={route} />}
      </DrawerContent>
    </Drawer>
  );
}

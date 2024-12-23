import { X } from 'lucide-react';
import React, { useState } from 'react';
import ArrowIcon from '@assets/icons/arrow-right.svg';
import { useTranslations } from '@i18n/utils';
import { Button } from '@lib/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@lib/components/ui/dialog';

interface LoginDialogProps {
  lang: 'en' | 'no';
}

const LoginDialog: React.FC<LoginDialogProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const t = useTranslations(lang);

  const handleClose = () => {
    location.replace(lang === 'en' ? '/' : '/no');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        hideCloseButton
        className='sm:max-w-auto max-w-[1440px] gap-0 border-none pt-10'
      >
        <DialogTrigger asChild className='ml-auto flex w-max'>
          <DialogClose onClick={handleClose} aria-label='close dialog'>
            <X className='h-6 w-6' />
          </DialogClose>
        </DialogTrigger>
        <DialogHeader className='gap-5 sm:pt-20'>
          <DialogTitle className='font-grotesk text-[54px] tracking-tightest sm:text-3xl'>
            {t('login.title')}
          </DialogTitle>
          <DialogDescription className='font-inter text-[22px] tracking-tightest text-gray-text sm:text-lg'>
            {t('login.desc')}
          </DialogDescription>
        </DialogHeader>
        <div className='mt-20 flex justify-center font-inter sm:mt-7'>
          <div className='flex min-w-[272px] max-w-[440px] flex-1 flex-col'>
            <form className='flex flex-col gap-4'>
              <input
                id='email'
                type='text'
                value={email}
                placeholder={t('login.input1')}
                onChange={(e) => setEmail(e.target.value)}
                className='login-input'
              />
              <input
                id='password'
                type='text'
                value={password}
                placeholder={t('login.input2')}
                onChange={(e) => setPassword(e.target.value)}
                className='login-input'
              />
              <Button
                type='submit'
                className='h-full justify-between bg-login-gradient px-8 py-5 text-lg leading-6 sm:px-5 sm:text-sm'
              >
                <p className='px-4 py-1'>{t('login.title')}</p>
                <img src={ArrowIcon.src} alt='arrow icon' width='28' height='22' />
              </Button>
            </form>
            <div className='mt-1 flex items-center gap-1 text-xs'>
              <p className='text-gray-text'>{t('login.register.text')}</p>
              <a href='/signup' className='cursor-pointer'>
                {t('login.register.btn')}
              </a>
            </div>
          </div>
        </div>
        <DialogFooter className='items-center justify-center pb-10 pt-[60px] sm:justify-center'>
          <a href='/forgot-password' className='cursor-pointer font-inter text-lg underline'>
            {t('login.register.forgot')}
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;

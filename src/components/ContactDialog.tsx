import { X } from 'lucide-react';
import React, { useState } from 'react';
import AstronautImgX2 from '@assets/images/astronaut-x2.webp';
import AstronautImg from '@assets/images/astronaut.webp';
import Spinner from '@components/common/Spinner';
import StatusInfo from '@components/common/StatusInfo';
import { useTranslations } from '@i18n/utils';
import { Button } from '@lib/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@lib/components/ui/dialog';

interface ContactDialogProps {
  lang: 'en' | 'no';
}

const initialState = {
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  message: '',
  isLoading: false,
  isOpenDialog: true,
  isFormDialog: true,
  isSuccessDialog: false,
  isErrorDialog: false,
};

const ContactDialog: React.FC<ContactDialogProps> = ({ lang }) => {
  const [state, setState] = useState<typeof initialState>(initialState);
  const {
    lastName,
    firstName,
    email,
    phone,
    message,
    isLoading,
    isOpenDialog,
    isFormDialog,
    isSuccessDialog,
    isErrorDialog,
  } = state;
  const t = useTranslations(lang);

  const handleClose = () => {
    location.replace(lang === 'en' ? '/' : '/no');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState({ ...state, isLoading: true });

    setTimeout(() => {
      setState({
        ...state,
        isLoading: false,
        isErrorDialog: true,
        isFormDialog: false,
      });
    }, 3000);
  };

  return (
    <Dialog open={isOpenDialog} onOpenChange={(open) => setState({ ...state, isOpenDialog: open })}>
      <DialogContent
        hideCloseButton
        className='sm:max-w-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-0 border-none bg-background p-10 sm:px-4 sm:py-5'
      >
        <DialogTrigger asChild className='ml-auto flex w-max'>
          <DialogClose onClick={handleClose} aria-label='close dialog'>
            <X className='h-6 w-6' />
          </DialogClose>
        </DialogTrigger>
        {isFormDialog && (
          <>
            <DialogHeader className='items-center gap-[6px] sm:pt-3'>
              <DialogTitle className='bg-gradient-to-r from-white to-gradient-violet bg-clip-text font-grotesk text-[54px] tracking-tightest text-transparent sm:text-3xl'>
                {t('contact.title')}
              </DialogTitle>
              <DialogDescription className='text-center font-inter text-[22px] tracking-tightest text-gray-text sm:text-lg'>
                {t('contact.desc')}
              </DialogDescription>
            </DialogHeader>
            <div className='mt-20 flex w-full max-w-[1092px] justify-center gap-[30px] rounded-[20px] bg-white/5 p-5 font-inter xl:mt-5 md:flex-wrap md:gap-5 sm:p-3'>
              <form
                onSubmit={handleSubmit}
                className='flex w-full min-w-[288px] max-w-[506px] flex-1 flex-col items-start p-10 md:p-6 sm:p-3'
              >
                <p className='mb-2 text-3xl font-medium sm:text-2xl'>{t('contact.form.title')}</p>
                <p className='text-[16px] sm:text-xs'>{t('contact.form.desc')}</p>
                <div className='flex flex-1 flex-col gap-[14px]'>
                  <div className='mt-10 flex gap-[14px] sm:mt-5'>
                    <input
                      id='lastName'
                      type='text'
                      value={lastName}
                      placeholder={t('contact.form.input1')}
                      onChange={(e) => setState({ ...state, lastName: e.target.value })}
                      className='contact-input'
                    />
                    <input
                      id='firstName'
                      type='text'
                      value={firstName}
                      placeholder={t('contact.form.input2')}
                      onChange={(e) => setState({ ...state, firstName: e.target.value })}
                      className='contact-input'
                    />
                  </div>
                  <input
                    id='email'
                    type='text'
                    value={email}
                    placeholder={t('contact.form.input3')}
                    onChange={(e) => setState({ ...state, email: e.target.value })}
                    className='contact-input'
                  />
                  <input
                    id='phone'
                    type='text'
                    value={phone}
                    placeholder={t('contact.form.input4')}
                    onChange={(e) => setState({ ...state, phone: e.target.value })}
                    className='contact-input'
                  />
                  <textarea
                    id='message'
                    value={message}
                    placeholder={t('contact.form.input5')}
                    onChange={(e) => setState({ ...state, message: e.target.value })}
                    className='contact-input h-20'
                    cols={4}
                  />
                  <Button
                    type='submit'
                    className='h-max w-full justify-center bg-contact-gradient px-8 py-3 leading-[18px] text-white hover:bg-gradient-violet hover:bg-none sm:px-5'
                  >
                    {isLoading ? (
                      <div className='h-[18px] w-[18px]'>
                        <Spinner />
                      </div>
                    ) : (
                      t('contact.form.send')
                    )}
                  </Button>
                </div>
              </form>
              <div className='flex w-full min-w-[288px] flex-1 flex-col justify-center md:hidden'>
                <div className='flex flex-col justify-end gap-2 px-5 pb-12 text-[16px]'>
                  <img
                    src={AstronautImg.src}
                    srcSet={`${AstronautImg.src} 1x, ${AstronautImgX2.src} 2x`}
                    alt='astronaut'
                    loading='lazy'
                    width={516}
                    height={536}
                    className='max-w-[416px]'
                  />
                  <blockquote className='mt-4'>"{t('contact.form.quote')}"</blockquote>
                  <p className='font-medium'>{t('contact.form.quote.author')}</p>
                </div>
              </div>
            </div>
          </>
        )}
        {isSuccessDialog && <StatusInfo status='success' text={t('contact.form.success')} />}
        {isErrorDialog && <StatusInfo status='error' text={t('contact.form.error')} />}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;

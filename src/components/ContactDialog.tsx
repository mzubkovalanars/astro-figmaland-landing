import React, { useState } from 'react';
import { Button } from '@/lib/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/lib/components/ui/dialog';
import { X } from 'lucide-react';
import Spinner from '@/components/common/Spinner';
import StatusInfo from '@/components/common/StatusInfo';
import { useTranslations } from '@/i18n/utils';

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
        isSuccessDialog: true,
        isFormDialog: false,
      });
    }, 3000);
  };

  return (
    <Dialog open={isOpenDialog} onOpenChange={(open) => setState({ ...state, isOpenDialog: open })}>
      <DialogContent
        hideCloseButton
        className='flex flex-col items-center justify-center gap-0 sm:max-w-auto max-w-[1440px] w-full p-10 sm:py-5 sm:px-4 border-none bg-background'
      >
        <DialogTrigger asChild className='flex ml-auto w-max'>
          <DialogClose onClick={handleClose} aria-label='close dialog'>
            <X className='h-6 w-6' />
          </DialogClose>
        </DialogTrigger>
        {isFormDialog && (
          <>
            <DialogHeader className='gap-[6px] sm:pt-3 items-center'>
              <DialogTitle className='font-grotesk text-[54px] sm:text-3xl bg-gradient-to-r from-white to-gradient-violet bg-clip-text text-transparent tracking-tightest'>
                {t('contact.title')}
              </DialogTitle>
              <DialogDescription className='font-inter text-[22px] sm:text-lg text-gray-text tracking-tightest text-center'>
                {t('contact.desc')}
              </DialogDescription>
            </DialogHeader>
            <div className='flex justify-center gap-[30px] md:gap-5 md:flex-wrap mt-20 xl:mt-5 p-5 sm:p-3 font-inter max-w-[1092px] w-full rounded-[20px] bg-white/5'>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col flex-1 items-start w-full max-w-[506px] min-w-[288px] p-10 md:p-6 sm:p-3'
              >
                <p className='text-3xl sm:text-2xl font-medium mb-2'>{t('contact.form.title')}</p>
                <p className='text-[16px] sm:text-xs'>{t('contact.form.desc')}</p>
                <div className='flex flex-col flex-1 gap-[14px]'>
                  <div className='flex gap-[14px] mt-10 sm:mt-5'>
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
                    className='leading-[18px] text-white justify-center h-max w-full py-3 px-8 sm:px-5 bg-contact-gradient hover:bg-none hover:bg-gradient-violet'
                  >
                    {isLoading ? (
                      <div className='w-[18px] h-[18px]'>
                        <Spinner />
                      </div>
                    ) : (
                      t('contact.form.send')
                    )}
                  </Button>
                </div>
              </form>
              <div className='flex md:hidden flex-col flex-1 justify-center w-full min-w-[288px]'>
                <div className="flex flex-col justify-end px-5 pb-12 text-[16px] bg-[url('/images/astronaut.webp')] bg-center bg-no-repeat max-w-[516px] h-[536px] w-full">
                  <blockquote>"{t('contact.form.quote')}"</blockquote>
                  <p className='font-medium'>{t('contact.form.quote.author')}</p>
                </div>
              </div>
            </div>
          </>
        )}
        {isSuccessDialog && <StatusInfo text={t('contact.form.success')} />}
        {isErrorDialog && <StatusInfo text={t('contact.form.error')} />}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;

import React, { useState } from "react";
import i18next from "i18next";
import { Button } from "@/lib/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/lib/components/ui/dialog";
import { X } from "lucide-react";
import { useTranslations } from "@/i18n/utils";

const LoginDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const t = useTranslations(i18next.language as "en" | "no");

  const handleClose = () => {
    location.replace("/");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        hideCloseButton
        className='gap-0 sm:max-w-auto max-w-[1440px] pt-10 border-none'
      >
        <DialogTrigger asChild className='flex ml-auto w-max'>
          <DialogClose onClick={handleClose}>
            <X className='h-6 w-6' />
          </DialogClose>
        </DialogTrigger>
        <DialogHeader className='gap-5 sm:pt-20'>
          <DialogTitle className='font-grotesk text-[54px] sm:text-3xl tracking-tightest'>
            {t("login.title")}
          </DialogTitle>
          <DialogDescription className='font-inter text-[22px] sm:text-lg text-gray-text tracking-tightest'>
            {t("login.desc")}
          </DialogDescription>
        </DialogHeader>
        <div className='flex justify-center mt-20 sm:mt-7 font-inter'>
          <div className='flex flex-col flex-1 max-w-[440px] min-w-[272px]'>
            <form className='flex flex-col gap-4'>
              <input
                id='email'
                type='text'
                value={email}
                placeholder={t("login.input1")}
                onChange={(e) => setEmail(e.target.value)}
                className='login-input'
              />
              <input
                id='password'
                type='text'
                value={password}
                placeholder={t("login.input2")}
                onChange={(e) => setPassword(e.target.value)}
                className='login-input'
              />
              <Button
                type='submit'
                className='text-lg sm:text-sm leading-6 justify-between h-full py-5 px-8 sm:px-5 bg-login-gradient'
              >
                <p className='py-1 px-4'>{t("login.title")}</p>
                <img src='/icons/arrow-right.svg' alt='icon' />
              </Button>
            </form>
            <div className='flex gap-1 items-center text-xs mt-1'>
              <p className='text-gray-text'>{t("login.register.text")}</p>
              <a href='/signup' className='cursor-pointer'>
                {t("login.register.btn")}
              </a>
            </div>
          </div>
        </div>
        <DialogFooter className='justify-center sm:justify-center items-center pt-[60px] pb-10'>
          <a
            href='/forgot-password'
            className='font-inter text-lg underline cursor-pointer'
          >
            {t("login.register.forgot")}
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;

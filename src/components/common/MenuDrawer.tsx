import { useState } from "react";
import { useMediaQuery, useClickAway } from "@uidotdev/usehooks";
import { Button } from "@/lib/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/lib/components/ui/drawer";

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const ref: React.MutableRefObject<HTMLDivElement> = useClickAway(() => {
    setIsOpen(false);
  });

  const handleToggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const isDesktopDevice = useMediaQuery("only screen and (min-width : 960px)");

  if (isDesktopDevice) {
    return null;
  }

  return (
    <Drawer
      open={isOpen}
      modal={false}
      direction='right'
      onOpenChange={() => setIsOpen(!isOpen)}
      onClose={() => setIsOpen(false)}
    >
      <DrawerTrigger asChild>
        <Button variant='outline' onClick={handleToggleDrawer}>
          Edit Profile
        </Button>
      </DrawerTrigger>
      {isOpen && (
        <DrawerContent
          ref={ref}
          className='h-lvh w-80 right-0 left-auto border-primary'
        >
          <DrawerHeader className='text-right'>
            <DrawerTitle>title</DrawerTitle>
            <DrawerDescription>Description</DrawerDescription>
          </DrawerHeader>
          nav links
          <DrawerFooter className='pt-2'>
            <DrawerClose asChild>
              <Button variant='outline' onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      )}
    </Drawer>
  );
}

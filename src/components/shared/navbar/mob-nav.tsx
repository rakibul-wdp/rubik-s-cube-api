"use client";

import { Logo } from "@/components/common";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FC, useState } from "react";
import { LoginButton } from "./login-btn";
import { NavItems } from "./nav-items";

export const MobNav: FC = () => {
  const [mobMenu, setMobMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setMobMenu(false);

  return (
    <Sheet onOpenChange={() => setMobMenu((prv) => !prv)} open={mobMenu}>
      <SheetTrigger>
        <figure className="rounded-md border p-2">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </figure>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="py-5">
            <NavItems open={open} setOpen={setOpen} mobMenu={handleClose} />
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="mt-5 w-fit">
          <LoginButton />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

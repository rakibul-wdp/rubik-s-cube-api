"use client";

import { Logo } from "@/components/common";
import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";
import { LoginButton } from "./login-btn";
import { MobNav } from "./mob-nav";
import { NavItems } from "./nav-items";

export const Navbar: FC = () => {
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined")
      setActive(window.scrollY > 85 ? true : false);
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () =>
      setActive(window.scrollY > 85 ? true : false),
    );
  }

  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex w-screen items-center justify-center bg-transparent px-10 transition-all duration-150",
        active && "bg-white shadow",
      )}
    >
      <nav
        className={cn(
          "1700px:max-w-screen-1700px mx-auto flex w-full items-center justify-between py-2.5 transition-all duration-150 md:py-5 lg:py-10",
          active && "py-2 md:py-3 lg:py-4",
        )}
      >
        <Logo className="h-auto w-7 sm:w-8 lg:w-8 xl:w-10" />

        <div className="hidden lg:block">
          <NavItems open={open} setOpen={setOpen} />
        </div>

        <div className="flex items-center justify-center gap-2.5">
          <div className="hidden lg:block">
            <LoginButton />
          </div>

          <div className="block lg:hidden">
            <MobNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

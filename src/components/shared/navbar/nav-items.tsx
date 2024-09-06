"use client";

import { P } from "@/components/typography";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useActivePath } from "@/hooks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { allPagesNavItems, homeNavItems } from "./db";

interface INav {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  mobMenu?: () => void;
}

export const NavItems: FC<INav> = ({ open, setOpen, mobMenu }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [clickedSection, setClickSection] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = useActivePath();

  const handleNavigate = () => {
    if (mobMenu) {
      mobMenu();
      setOpen((prv) => !prv);
    } else {
      setOpen((prv) => !prv);
    }
  };

  useEffect(() => {
    if (pathname.length > 1) setClickSection(null);
  }, [pathname.length]);

  return (
    <div className="flex flex-col gap-3.5 lg:flex-row lg:items-center lg:justify-center lg:gap-5 xl:gap-8 2xl:gap-11">
      {homeNavItems.map(({ href, name, id }, i) => (
        <Link
          href={href}
          key={i}
          className="relative w-fit"
          onClick={() => setClickSection(name)}
          onMouseEnter={() => setHoverIndex(id)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <P variant="P3" className="text-base text-black xl:text-xl">
            {name}
          </P>
          <hr
            className={cn(
              "absolute -bottom-1 mt-1 w-[70%] rounded-full bg-secondary-title p-[1px] hover:block",
              isActive(href) || hoverIndex === id || clickedSection === name
                ? "block"
                : "hidden",
            )}
          />
        </Link>
      ))}
      <DropdownMenu onOpenChange={() => setOpen((prv) => !prv)} open={open}>
        <DropdownMenuTrigger className="flex w-fit items-center gap-1 focus:outline-none lg:justify-center xl:gap-2.5">
          <P variant="P3" className="text-base text-black xl:text-xl">
            Pages
          </P>
          <Image
            alt=""
            width={24}
            height={24}
            src="/arrow-down.svg"
            className={cn(
              "h-auto w-4 transition-all duration-150 xl:w-6",
              open && "rotate-180",
            )}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-[77px] w-full max-w-[200px] px-0 py-8 lg:mt-5">
          {allPagesNavItems.map(({ href, name, id }, i) => (
            <DropdownMenuItem
              key={i}
              className={cn(
                "cursor-pointer rounded-none px-8 py-[13px] focus:bg-[#EEF1F4]",
                isActive(href) && "bg-[#EEF1F4]",
              )}
              onClick={handleNavigate}
              onMouseEnter={() => setHoverIndex(id)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <Link href={href} className="relative w-fit text-start">
                <P variant="P3" className="text-secondary-body">
                  {name}
                </P>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

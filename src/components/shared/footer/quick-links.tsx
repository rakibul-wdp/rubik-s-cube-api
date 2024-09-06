"use client";

import { P, SubTitle } from "@/components/typography";
import { useActivePath } from "@/hooks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { quickLink } from "./db";

export const QuickLinks: FC = () => {
  const isActive = useActivePath();

  return (
    <div className="min-w-fit">
      <SubTitle variant="H3" className="text-secondary-title">
        Quick Links
      </SubTitle>
      <div className="space-y-1.5 pt-3 md:space-y-2.5 lg:space-y-4 lg:pt-6">
        {quickLink.map(({ label, link }, i) => (
          <Link
            href={link}
            key={i}
            className="group flex items-center justify-start gap-2.5 transition-all delay-100 lg:gap-3.5"
          >
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={cn(
                  "group-hover:stroke-primary-brand-1",
                  isActive(link) && "stroke-primary-brand-1",
                )}
                d="M1.25 1.5L4.75 5L1.25 8.5"
                stroke="#424959"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <P
              variant="P3"
              className={cn(
                "text-base text-secondary-body transition-all delay-100 group-hover:text-primary-brand-1 sm:text-lg md:text-[20px] md:leading-[120%]",
                isActive(link) && "text-primary-brand-1",
              )}
            >
              {label}
            </P>
          </Link>
        ))}
      </div>
    </div>
  );
};

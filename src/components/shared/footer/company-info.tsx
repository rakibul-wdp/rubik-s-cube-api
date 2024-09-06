"use client";

import { Logo } from "@/components/common";
import { DownloadLink } from "@/components/common/download-link";
import { P, SubTitle } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, useState } from "react";
import { social } from "./db";

export const CompanyInfo: FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const handleMouseOver = (id: number) => setHoveredIcon(id);
  const handleMouseLeave = () => setHoveredIcon(null);

  return (
    <div className="col-span-2 flex min-w-fit flex-col items-start justify-start gap-5 sm:col-span-1 md:gap-8 lg:gap-10">
      <Logo />
      <div>
        <P variant="P2" className="1320px:min-w-[333px]">
          Typing just got so much faster and easier. We’re sure you will love
          it!
        </P>
        <div className="flex items-center justify-start gap-4 pt-4 lg:pt-8">
          {social.map(({ name, id, whiteUrl, url }) => (
            <Button
              key={name}
              size="icon"
              variant="icon"
              className={cn(
                "h-[40px] w-[40px]",
                "delay-75 hover:border-primary-brand-1 hover:bg-primary-brand-1",
              )}
              onMouseOver={() => handleMouseOver(id)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={hoveredIcon === id ? whiteUrl : url}
                alt={name}
                width={16}
                height={16}
                className=""
              />
            </Button>
          ))}
        </div>
      </div>
      <DownloadLink footer>
        <div className="flex items-center justify-center gap-2">
          <SubTitle
            variant="H5"
            className="text-lg leading-[120%] text-secondary-title md:text-[22px] md:leading-[130%] lg:text-[24px] lg:leading-[150%]"
          >
            Download Free Trial
          </SubTitle>
          <Image
            src="/icon/arrow-top-right.svg"
            width={14}
            height={14}
            alt=""
          />
        </div>
      </DownloadLink>
    </div>
  );
};

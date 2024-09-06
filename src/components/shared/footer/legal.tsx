import { P, SubTitle } from "@/components/typography";
import Link from "next/link";
import { FC } from "react";
import { legal } from "./db";

export const Legal: FC = () => {
  return (
    <div className="min-w-fit">
      <SubTitle variant="H3" className="text-secondary-title">
        Legal
      </SubTitle>
      <div className="space-y-1.5 pt-3 md:space-y-2.5 lg:space-y-4 lg:pt-6">
        {legal.map(({ label, link }) => (
          <Link
            href={link}
            key={label}
            className="group block transition-all delay-100"
          >
            <P
              variant="P3"
              className="text-base text-secondary-body transition-all delay-100 group-hover:text-primary-brand-1 sm:text-lg md:text-[20px] md:leading-[120%]"
            >
              {label}
            </P>
          </Link>
        ))}
      </div>
    </div>
  );
};

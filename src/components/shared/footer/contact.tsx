import { P, SubTitle } from "@/components/typography";
import Link from "next/link";
import { FC } from "react";
import { contact } from "./db";

export const Contact: FC = () => {
  return (
    <div className="col-span-2 min-w-fit sm:col-span-1">
      <SubTitle variant="H3" className="text-secondary-title">
        Contact
      </SubTitle>
      <div className="space-y-1.5 pt-3 md:space-y-2.5 lg:space-y-4 lg:pt-6">
        {contact.map(({ label, link }, i) => (
          <Link
            href={link}
            key={label}
            className="group block transition-all delay-100"
          >
            <P
              variant="P3"
              className="text-base text-secondary-body transition-all delay-100 group-hover:text-primary-brand-1 sm:text-lg md:text-[20px] md:leading-[120%]"
            >
              {i === 2 ? (
                <span className="font-outfit font-normal">{label}</span>
              ) : i === 0 ? (
                <>
                  {label} <span className="font-outfit font-normal">15025</span>
                </>
              ) : (
                label
              )}
            </P>
          </Link>
        ))}
      </div>
    </div>
  );
};

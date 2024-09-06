"use client";

import { DownloadLink } from "@/components/common/download-link";
import { P, SubTitle, Title } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { prices } from "@/lib/assets/db";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { CardOffers } from "./card-offers";
import { FreeTrailCard } from "./free-trail-card";

type CardTitle = { id: number; price: string; icon?: JSX.Element };
const MainContent: FC<CardTitle> = ({ id, price, icon }) => (
  <div
    className={cn(
      "mb-6 mt-8 flex justify-start",
      id !== 3
        ? "items-end"
        : "cursor-pointer items-center gap-1 hover:underline",
    )}
  >
    <Title variant="H7" className="font-outfit text-white">
      {price === "Contact Us" ? price : `$${price}/`}
    </Title>
    <P variant="P10" className="font-outfit">
      {id === 1 ? "month" : id === 2 ? "month (Billed Annually)" : icon}
    </P>
  </div>
);

const isDownloadableContent = (contact: CardTitle, isDownloadable: boolean) => {
  if (isDownloadable) {
    return (
      <Link href="/contact-us">
        <MainContent {...contact} />
      </Link>
    );
  } else {
    return <MainContent {...contact} />;
  }
};

export const PricingCards: FC = () => {
  return (
    <div className="text-white">
      <FreeTrailCard />

      <div className="mt-[30px] grid grid-cols-1 gap-[30px] text-start md:grid-cols-2 xl:grid-cols-3">
        {prices.map(
          ({ id, title, price, offer, description, icon, offerLevel }) => (
            <div
              key={id}
              className={cn(
                "basis-1/3 rounded-[20px] bg-[#016CE5] px-10 pb-5 pt-[50px] 2xl:min-w-[420px]",
                id === 1 && "bg-[#4DA1FE]",
                id === 2 && "bg-primary-brand-1",
              )}
            >
              <Image
                src="/pricing-card.svg"
                alt="pricing card"
                width={80}
                height={80}
              />
              <Title variant="H8" className="mb-[17px] mt-8 text-white">
                {title}
              </Title>
              <P
                variant="P4"
                className="text-[17px] 2xl:min-w-[346px] 2xl:text-[18px]"
              >
                {description}
              </P>
              {isDownloadableContent({ id, price, icon }, icon ? true : false)}

              {id === 3 ? (
                <DownloadLink
                  variant="default-secondary-lg"
                  className="mb-8 w-full"
                >
                  Download Free Trial
                </DownloadLink>
              ) : (
                <Link href={`/payment-method/${id}`}>
                  <Button
                    variant="default-secondary-lg"
                    className="mb-8 w-full"
                  >
                    Purchase Plan
                  </Button>
                </Link>
              )}

              <SubTitle variant="H11" className="mb-4">
                What’s Included:
              </SubTitle>
              {offerLevel && (
                <SubTitle variant="H11" className="mb-6">
                  {offerLevel}
                </SubTitle>
              )}

              <CardOffers card={offer} />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

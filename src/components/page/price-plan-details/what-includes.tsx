import { SubTitle } from "@/components/typography";
import Image from "next/image";

export const WhatIncludes = ({ card }: any) => {
  return (
    <>
      <SubTitle variant="H4" className="mb-4">
        What’s Included:
      </SubTitle>

      <div className="mb-20 flex flex-col items-start justify-start">
        {card.map((list: any) => (
          <div
            className="mb-4 flex items-center justify-center gap-3"
            key={list.id}
          >
            <Image
              src="/card-list-icon.svg"
              alt="card list icon"
              width={20}
              height={20}
            />
            <SubTitle variant="H4">{list.include}</SubTitle>
          </div>
        ))}
      </div>
    </>
  );
};

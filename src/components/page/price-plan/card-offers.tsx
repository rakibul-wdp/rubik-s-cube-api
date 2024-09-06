import { SubTitle } from "@/components/typography";
import Image from "next/image";

export const CardOffers = ({ card }: any) => {
  return (
    <div className="flex flex-col items-start justify-start">
      {card.map((list: any) => (
        <div
          className="mb-6 flex items-start justify-center gap-3 lg:items-center"
          key={list.id}
        >
          <Image
            src="/card-list-icon.svg"
            alt="card list icon"
            width={20}
            height={20}
            className="mt-1 sm:mt-0 md:mt-[5px] lg:mt-0"
          />
          <SubTitle variant="H10" className="xl:min-w-[306px]">
            {list.include}
          </SubTitle>
        </div>
      ))}
    </div>
  );
};

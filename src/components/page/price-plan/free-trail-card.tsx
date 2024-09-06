import { DownloadLink } from "@/components/common/download-link";
import { P, SubTitle, Title } from "@/components/typography";
import Image from "next/image";

const freeTrialLists = [
  {
    id: 1,
    offer: "Auto Space Making",
  },
  {
    id: 2,
    offer: "Full Set Shorthand",
  },
  {
    id: 3,
    offer: "Auto capitalization of proper nouns",
  },
  {
    id: 4,
    offer: "Updates and Support",
  },
];

export const FreeTrailCard = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-10 rounded-[20px] bg-primary-brand-1 px-10 py-7 md:flex-row md:items-center md:px-8 md:py-5 lg:gap-0 lg:px-14 lg:py-11 xl:px-[84px] xl:py-[66px] 2xl:min-w-[1320px]">
      <div className="flex flex-col items-start justify-center text-start md:w-[50%] lg:w-[45%]">
        <Image
          src="/pricing-card.svg"
          alt="pricing card"
          width={80}
          height={80}
        />
        <Title variant="H3" className="mt-8 text-white">
          Get Started with 30-Day Free Trial!
        </Title>
        <P variant="P2" className="mb-8 mt-6">
          Ready to explore all the features? Get started with our free trial
          today and experience the full power of TypeShort with no obligations!
        </P>
        <DownloadLink
          variant="default-secondary-lg"
          className="mb-4 mt-2 w-full md:w-fit"
        >
          Download Free Trial
        </DownloadLink>
      </div>

      <div className="hidden w-[15%] lg:block">
        <Image
          src="/pricing-card-arrow.svg"
          alt="pricing card arrow icon"
          width={108}
          height={174}
        />
      </div>

      <div className="lg:w-[35%]">
        <SubTitle variant="H3" className="my-8 text-start">
          What’s Included:
        </SubTitle>

        <div className="flex flex-col items-start justify-start">
          {freeTrialLists.map((list) => (
            <div
              className="mb-5 flex items-center justify-center gap-3 md:items-start"
              key={list.id}
            >
              <Image
                src="/card-list-icon.svg"
                alt="card list icon"
                width={20}
                height={20}
                className="md:mt-1.5"
              />
              <SubTitle variant="H8" className="text-start">
                {list.offer}
              </SubTitle>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

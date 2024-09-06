import { Container } from "@/components/common";
import { DownloadLink } from "@/components/common/download-link";
import { P, Title } from "@/components/typography";
import { FC } from "react";

export const FreeTrail: FC = () => {
  return (
    <Container>
      <div className="flex w-full flex-col items-center justify-center rounded-[30px] bg-free-trail-image bg-center bg-no-repeat bg-origin-content px-2.5 py-[50px] text-center md:px-10 md:py-[72px]">
        <div className="mx-auto max-w-[740px]">
          <Title variant="H3" className="text-white">
            Try It Free For 30 Days!
          </Title>
          <P
            variant="P2"
            className="mb-5 mt-4 text-sm text-white md:mb-8 md:mt-6 lg:mb-12 lg:mt-7 xl:mb-14 xl:mt-8"
          >
            Experiment, try, be the fastest typist you can be. TypeShort is free
            to try for 30 days, and we do not require a credit card to download
            and install the software. Download now and start changing how fast
            you type right away.
          </P>
          <DownloadLink variant="default-secondary">
            Download Free Trial
          </DownloadLink>
        </div>
      </div>
    </Container>
  );
};

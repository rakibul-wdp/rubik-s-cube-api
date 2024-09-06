import { DownloadLink } from "@/components/common/download-link";
import { P, Title } from "@/components/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

const AvatarGroup: FC = () => {
  const Avatar: FC<{ url: string }> = ({ url }) => (
    <Image
      width={70}
      height={70}
      src={url}
      className="inline-block h-auto w-[50px] rounded-full ring-[3px] ring-white 2xl:h-[70px] 2xl:w-[70px]"
      alt=""
    />
  );
  return (
    <figure className="inline -space-x-2 overflow-hidden">
      <Avatar url="/avatar-1.png" />
      <Avatar url="/avatar-2.png" />
      <Avatar url="/avatar-3.png" />
      <Avatar url="/avatar-4.png" />
    </figure>
  );
};

export const Hero: FC = () => {
  return (
    <section className="background px-5 sm:px-10 lg:px-20 lg:pt-[80px] 2xl:pt-[136px]">
      <div
        className={cn(
          "mx-auto xl:max-w-screen-xl 1320px:max-w-screen-1320px 1440px:max-w-screen-1440px 2xl:max-w-screen-2xl 1600px:max-w-screen-1440px 1700px:max-w-screen-1600px",
          "pb-[80px] pt-[100px] lg:pb-[100px] xl:pb-[140px]",
          "flex w-full flex-col-reverse items-center justify-between gap-10 md:flex-row md:items-start 2xl:gap-20",
        )}
      >
        <div className="md:w-1/2">
          <Title
            variant="H1"
            className={cn(
              "min-w-full md:min-w-[450px] lg:min-w-[550px] xl:min-w-[785px]",
              "text-[25px] md:text-[30px] md:leading-[120%] lg:text-[36px] lg:leading-[130%] xl:text-[52px]",
              "mx-auto flex flex-col flex-wrap",
            )}
          >
            Start Typing Everything <br /> Faster And Easier With{" "}
            <span className="inline-flex flex-wrap gap-4">
              <span className="relative w-fit border-[1.5px] border-secondary-title bg-primary-brand-3 px-2.5 pb-1 text-white">
                TypeShort!
                <span className="absolute -left-[3px] -top-[3px] block h-[6px] w-[6px] bg-secondary-title" />
                <span className="absolute -bottom-[3px] -left-[3px] block h-[6px] w-[6px] bg-secondary-title" />
                <span className="absolute -right-[3px] -top-[3px] block h-[6px] w-[6px] bg-secondary-title" />
                <span className="absolute -bottom-[3px] -right-[3px] block h-[6px] w-[6px] bg-secondary-title" />
              </span>
              <AvatarGroup />
            </span>
          </Title>
          <P
            className={cn(
              "w-full pt-8 text-sm sm:text-base md:text-sm lg:text-[15px] lg:leading-[150%] xl:w-[90%] xl:text-lg 2xl:text-xl 1600px:text-[22px]",
            )}
          >
            It’s great for students, lawyers, bloggers, and all content
            creators. TypeShort saves time with notetaking, writing reports and
            contracts, and with email & texting on your computer.
          </P>
          <DownloadLink
            variant="default-reverse"
            className="hero-button-shadow mt-10 md:mt-14"
          >
            Download Free Trial
          </DownloadLink>
        </div>
        <div className="w-[75%] md:w-1/2">
          <Image src="/home-right-side.png" width={722} height={557} alt="" />
        </div>
      </div>
    </section>
  );
};

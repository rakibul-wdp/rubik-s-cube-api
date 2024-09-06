import { Container } from "@/components/common";
import { P, SubTitle, Title } from "@/components/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

const roadmap = [
  {
    id: 1,
    heading: "Download 30-Day Free Trial",
    listIcon: "/list-icon.svg",
    lists: [
      {
        id: 99,
        title: "No Credit Card Required",
        details: "We don’t need this until we know you love TypeShort.",
      },
      {
        id: 98,
        title: "Share Only Your Email Address",
        details:
          "We will not inundate your inbox, nor sell your information. We will just send a one-time password to confirm it’s you.",
      },
    ],
    imgUrl: "/getting-started-1.png",
    imgWidth: 728,
    imgHeight: 468,
  },
  {
    id: 2,
    heading: "Gain Immediate Speed By Not Hitting The Spacebar",
    listIcon: "/list-icon.svg",
    lists: [
      {
        id: 99,
        title: "Immediate Speed",
        details:
          "Instantly become 20% more productive by letting us insert the spaces for you. Don’t hit the spacebar and save your thumbs.",
      },
      {
        id: 98,
        title: "Natural Typing",
        details:
          "You won’t believe how natural it feels when you start typing this way. You don’t need to learn anything new.",
      },
    ],
    imgUrl: "/getting-started-2.png",
    imgWidth: 706,
    imgHeight: 475,
  },
  {
    id: 3,
    heading: "Enjoy Automatic Capitalization",
    listIcon: "/list-icon.svg",
    lists: [
      {
        id: 99,
        title: "Easy Caps",
        details:
          "We believe in doing things the easy way. Why waste time with the shift-key?",
      },
      {
        id: 98,
        title: "Save More Time",
        details:
          "As you type the proper nouns will automatically capitalize when completed.",
      },
    ],
    imgUrl: "/getting-started-3.png",
    imgWidth: 728,
    imgHeight: 468,
  },
];

export const GettingStarted: FC = () => {
  return (
    <Container className="flex flex-col items-center justify-center">
      <Title variant="H3" className="text-secondary-title">
        Getting Started
      </Title>

      <div className="px-5 pt-[35px] sm:px-10 md:pt-[50px] lg:pt-[70px]">
        {roadmap.map(
          (
            { heading, id, imgHeight, imgUrl, imgWidth, listIcon, lists },
            i,
          ) => (
            <div
              key={id}
              className={cn(
                "flex flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-10 lg:gap-[59px]",
                id === 2 && "my-[100px] md:flex-row-reverse",
              )}
            >
              <div
                className={cn(
                  "md:min-w-3/5 flex w-full flex-col items-center justify-center md:max-w-[350px] md:items-start md:justify-start lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[533px]",
                  i % 2 !== 0 && "xl:min-w-[544px]",
                )}
              >
                <Title
                  variant="H4"
                  className="mb-4 text-center text-xl text-secondary-title sm:text-start md:mb-6 md:text-[28px] lg:mb-8 lg:text-[35px] lg:leading-[140%]"
                >
                  {heading}
                </Title>

                <div
                  className={cn(
                    "w-full space-y-3 md:space-y-4 lg:space-y-6",
                    i === 0 && "max-w-[450px]",
                    i === 1 && "max-w-[460px]",
                    i === 2 && "max-w-[483px]",
                  )}
                >
                  {lists.map((list) => (
                    <div
                      className="flex items-start gap-2.5 lg:gap-3"
                      key={list.id}
                    >
                      <Image
                        src={listIcon}
                        alt="list icon"
                        width={24}
                        height={24}
                        className="h-auto w-4 pt-1.5 md:w-5 lg:w-[24px]"
                      />
                      <div>
                        <SubTitle
                          variant="H4"
                          className="mb-1.5 text-secondary-title lg:mb-3"
                        >
                          {list.title}
                        </SubTitle>
                        <P variant="P2" className="text-secondary-body">
                          {list.details}
                        </P>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="background relative flex w-[75%] items-center justify-center rounded-2xl md:w-fit">
                <Image
                  src={imgUrl}
                  alt="sign up"
                  width={imgWidth}
                  height={imgHeight}
                  className="rounded-[10px]"
                />

                <Image
                  src="/otp-popup.png"
                  alt="OTP Popup"
                  width={255}
                  height={181}
                  className={cn(
                    "absolute -right-[8%] top-[20%] hidden w-[30%] xl:-right-[10%] xl:w-[40%] 2xl:-right-[70px]",
                    i === 0 && "block",
                  )}
                />
              </div>
            </div>
          ),
        )}
      </div>
    </Container>
  );
};

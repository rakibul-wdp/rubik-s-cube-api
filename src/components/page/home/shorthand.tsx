import { Container } from "@/components/common";
import { P, SubTitle, Title } from "@/components/typography";
import Image from "next/image";
import { FC } from "react";

const lists = [
  {
    id: 1,
    title: "Don’t Type It All",
    details:
      "You can type words with far fewer letters. Type “bc” and get “because”. Type “tmr” and get “tomorrow”.",
  },
  {
    id: 2,
    title: "At Your Fingertips",
    details:
      "TypeShort comes loaded with 1,000’s of shorthand codes that will accelerate your typing.",
  },
  {
    id: 3,
    title: "Create Your Own",
    details: "For your own unique typing words and phrases.",
  },
];

export const Shorthand: FC = () => {
  return (
    <section className="background w-full pt-10 lg:pt-20">
      <Container className="flex flex-col-reverse items-center justify-center gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="relative mx-auto flex w-[75%] items-center justify-center md:w-[50%] lg:w-fit">
          <Image
            src="/shorthand-left.png"
            width={612}
            height={647}
            alt=""
            className="h-auto xl:w-[580px] 2xl:w-[612px]"
          />
          <Image
            src="/shorthand-popup-2.png"
            className="absolute -bottom-10 -left-[5%] w-[60%] md:w-[55%] lg:w-[40%] xl:-bottom-12 xl:-left-[10%] xl:w-[60%] 2xl:-left-44 2xl:w-[70%]"
            width={480}
            height={300}
            alt=""
          />
          <Image
            src="/shorthand-popup-arrow.png"
            className="absolute -right-7 top-[38%] hidden w-[10%] lg:block xl:-right-9 xl:top-[36%] xl:w-[12%]"
            width={120}
            height={80}
            alt=""
          />
        </div>
        <div className="w-full max-w-[500px] md:w-4/6 xl:max-w-[608px]">
          <Title variant="H3" className="mb-8 text-secondary-title">
            Experience Lightning Speed With Shorthand
          </Title>

          <div className="space-y-3 pb-6 md:space-y-6 lg:space-y-8 lg:pb-[66px]">
            {lists.map((list) => (
              <div className="flex items-start gap-2.5 lg:gap-3" key={list.id}>
                <Image
                  src="/list-icon.svg"
                  alt="list icon"
                  width={24}
                  height={24}
                  className="pt-1.5"
                />
                <div>
                  <SubTitle
                    variant="H4"
                    className="mb-0.5 text-secondary-title lg:mb-3"
                  >
                    {list.title}
                  </SubTitle>
                  <P
                    variant="P2"
                    className="w-full max-w-[490px] text-secondary-body md:text-lg xl:text-xl"
                  >
                    {list.details}
                  </P>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

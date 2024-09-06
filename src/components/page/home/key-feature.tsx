import { Container } from "@/components/common";
import { P, SubTitle, Title } from "@/components/typography";
import Image from "next/image";
import { FC } from "react";

const keyFeatures = [
  {
    id: 1,
    icon: "/key-feature-1.svg",
    title: "No Spacebar Here!",
    details:
      "You can type without the spacebar! That’s right, you will eliminate 18% of your keystrokes with this one simple trick.",
  },
  {
    id: 2,
    icon: "/key-feature-2.svg",
    title: "Easy Shorthand!",
    details:
      "Save tons of keystrokes by using computer shorthand. Downloadable Cheat Sheet, other easy learning tactics.",
  },
  {
    id: 3,
    icon: "/key-feature-3.svg",
    title: "We Capitalize For You!",
    details:
      "No more reaching for the shift-key. Typing is so much smoother and accurate when TypeShort handles your capitalizing.",
  },
];

export const KeyFeature: FC = () => {
  return (
    <Container className="flex flex-col items-center justify-center">
      <Title
        variant="H3"
        className="text-secondary-title xl:text-[56px] xl:leading-[130%] 2xl:text-[56px] 2xl:leading-[130%]"
      >
        Key Features Of TypeShort
      </Title>

      <div className="grid grid-cols-1 gap-[30px] pt-[35px] md:grid-cols-2 md:pt-[50px] lg:pt-[70px] xl:grid-cols-3">
        {keyFeatures.map((keFeature) => (
          <div
            className="max-w-[420px] rounded-[20px] bg-feature-card bg-cover bg-no-repeat px-[34px] py-11"
            key={keFeature.id}
          >
            <Image
              src={keFeature.icon}
              alt="key feature icon"
              width={60}
              height={60}
            />
            <SubTitle variant="H3" className="py-8 text-secondary-title">
              {keFeature.title}
            </SubTitle>
            <P
              variant="P2"
              className="text-secondary-body md:text-lg lg:text-[20px]"
            >
              {keFeature.details}
            </P>
          </div>
        ))}
      </div>
    </Container>
  );
};

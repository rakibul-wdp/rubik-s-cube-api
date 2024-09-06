import { Breadcrumbs, Container } from "@/components/common";
import { SubTitle, Title } from "@/components/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

const statistics = [
  {
    id: 1,
    icon: "/happy-users.svg",
    title: "120K+",
    name: "Happy Users",
  },
  {
    id: 2,
    icon: "/Arrow_01.svg",
  },
  {
    id: 3,
    icon: "/award-winning.svg",
    title: "6+",
    name: "Award Winning",
  },
  {
    id: 4,
    icon: "/Arrow_01.svg",
  },
  {
    id: 5,
    icon: "/our-experts.svg",
    title: "230+",
    name: "Our Experts",
  },
  {
    id: 6,
    icon: "/Arrow_01.svg",
  },
  {
    id: 7,
    icon: "/rating.svg",
    title: "5.0",
    name: "Average Rating",
  },
];

export const AboutHero: FC = () => {
  return (
    <section className="background-portion relative pt-[100px] before:h-[20%] md:pt-[120px] md:before:h-[32%] lg:pt-[136px] lg:before:h-[58%] xl:before:h-[59%]">
      <Container className="mb-10 mt-5 flex flex-col items-center justify-center px-10 text-center md:mb-16 md:mt-10 lg:mb-28 lg:mt-20 xl:mb-[140px] xl:mt-[100px]">
        <Breadcrumbs previous="Home" previousLocation="/" current="About" />

        <Title
          variant="H1"
          className="mb-7 mt-2 max-w-[938px] text-center text-secondary-title md:mb-12 lg:mb-16 xl:mb-[70px]"
        >
          Story Behind Our Sentence <br /> Correction Software
        </Title>
        <Image
          src="/about-hero.svg"
          alt="about hero img"
          className="mb-7 md:mb-12 lg:mb-16 xl:mb-[70px]"
          width={1152}
          height={600}
        />

        <SubTitle
          variant="H1"
          className="mx-auto mb-14 max-w-[1152px] text-justify text-secondary-title sm:text-center"
        >
          Dive into the narrative of our sentence correction software, tracing
          its evolution from inception to innovation. Explore the journey that
          led to its creation and discover the passion behind its development.
          Join us as we unveil the story behind the tool shaping clearer
          communication.
        </SubTitle>

        <div className="mx-auto grid max-w-[1141px] grid-cols-3 justify-items-center gap-8 md:grid-cols-7 xl:gap-[60px]">
          {statistics.map((statistic) => (
            <div
              className={cn(
                "flex items-center justify-center",
                statistic.id === 4 && "hidden md:flex",
              )}
              key={statistic.id}
            >
              <div className="flex flex-col items-center justify-center">
                {statistic.id % 2 === 0 ? (
                  <Image
                    src="/Arrow_01.svg"
                    alt="arrow icon"
                    width={62}
                    height={62}
                  />
                ) : (
                  <Image
                    src={statistic.icon}
                    alt="icon"
                    width={100}
                    height={100}
                  />
                )}
                {statistic.id % 2 != 0 && (
                  <>
                    <SubTitle
                      variant="H1"
                      className="mb-3 mt-6 font-outfit text-secondary-title"
                    >
                      {statistic.title}
                    </SubTitle>
                    <SubTitle
                      variant="H8"
                      className="min-w-[145px] text-[#424959]"
                    >
                      {statistic.name}
                    </SubTitle>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

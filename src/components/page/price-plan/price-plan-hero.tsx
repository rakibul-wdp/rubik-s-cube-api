import { Breadcrumbs, Container } from "@/components/common";
import { P, Title } from "@/components/typography";
import { PricingCards } from "./pricing-cards";

export const PricePlanHero = () => {
  return (
    <section className="background-portion relative pt-[136px] before:h-[30%] md:before:h-[51%]">
      <Container className="mb-10 flex flex-col items-center justify-center text-center md:mb-16 lg:mb-28 lg:mt-20 xl:mb-[140px] xl:mt-[100px]">
        <Breadcrumbs previous="Home" previousLocation="/" current="Pricing" />

        <Title
          variant="H1"
          className="mb-5 mt-2 text-secondary-title lg:w-[50%]"
        >
          Choose The Plan That Fits Your Needs
        </Title>

        <P
          variant="P2"
          className="mb-5 text-secondary-title md:mb-8 lg:mb-14 lg:w-[45%] xl:mb-[70px]"
        >
          We offer a range of price plans designed to meet the diverse needs of
          our customers. we have a plan that&apos;s right for you.
        </P>

        <PricingCards />
      </Container>
    </section>
  );
};

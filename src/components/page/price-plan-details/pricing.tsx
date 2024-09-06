import { Container } from "@/components/common";
import { SubTitle, Title } from "@/components/typography";
import { PricingCards } from "../price-plan/pricing-cards";

export const Pricing = () => {
  return (
    <Container className="mb-[140px] flex flex-col items-center justify-center text-center">
      <Title
        variant="H3"
        className="mb-5 text-secondary-title md:mb-8 lg:mb-14 xl:mb-[70px]"
      >
        More Plans
      </Title>

      <PricingCards />
    </Container>
  );
};

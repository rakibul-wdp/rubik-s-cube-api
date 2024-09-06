import { Container } from "@/components/common";
import { BasicPlanCard } from "./basic-plan-card";
import { DetailsOfCard } from "./details-of-card";

export const PricingDetailsMain = () => {
  return (
    <Container className="mb-10 mt-5 flex flex-col items-start justify-center gap-10 md:mb-16 md:mt-8 md:flex-row md:gap-8 lg:mb-28 lg:mt-14 lg:gap-12 xl:mb-[140px] xl:mt-[70px] xl:gap-[60px]">
      <BasicPlanCard />
      <DetailsOfCard />
    </Container>
  );
};

import {
  PricePlanDetailsHero,
  Pricing,
  PricingDetailsMain,
} from "@/components/page/price-plan-details";

const PricePlanDetails = () => {
  return (
    <main>
      <PricePlanDetailsHero />
      <PricingDetailsMain />
      <Pricing />
    </main>
  );
};

export default PricePlanDetails;

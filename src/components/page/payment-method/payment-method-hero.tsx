import { Breadcrumbs, Container } from "@/components/common";
import { P, Title } from "@/components/typography";

export const PaymentMethodHero = () => {
  return (
    <section className="background pt-[136px]">
      <Container className="mt-5 flex flex-col items-center justify-center pb-10 text-center md:mt-10 md:pb-16 lg:mt-20 lg:pb-28 xl:mt-[100px] xl:pb-[140px]">
        <Breadcrumbs
          previous="Pricing Details"
          previousLocation="/price-plan-details"
          current="Payment Method"
        />

        <Title variant="H3" className="mb-5 mt-2 w-[50%] text-secondary-title">
          What is Your Preferred Payment Option?
        </Title>
        <P variant="P2" className="w-[45%] text-secondary-body">
          Choose the payment method that fits your needs. We are working with
          trusted partners to fulfill your order securely.
        </P>
      </Container>
    </section>
  );
};

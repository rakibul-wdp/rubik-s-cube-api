import { Breadcrumbs, Container } from "@/components/common";
import { Title } from "@/components/typography";

export const FAQHero = () => {
  return (
    <section className="background pt-[136px]">
      <Container className="flex flex-col items-center justify-center pb-10 text-center md:pb-16 lg:mt-20 lg:pb-28 xl:mt-[100px] xl:pb-[140px]">
        <Breadcrumbs previous="Home" previousLocation="/" current="FAQ" />

        <Title variant="H1" className="mt-2 text-secondary-title">
          Frequently Asked Questions
        </Title>
      </Container>
    </section>
  );
};

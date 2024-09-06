import { Breadcrumbs, Container } from "@/components/common";
import { Title } from "@/components/typography";
import { ContactUsForm } from "./contact-us-form";

export const ContactUsHero = () => {
  return (
    <section className="background-portion relative pt-[136px] before:h-[82.5%]">
      <Container className="mb-10 flex flex-col items-center justify-center px-10 text-center md:mb-16 lg:mb-28 lg:mt-20 xl:mb-[140px] xl:mt-[100px]">
        <Breadcrumbs
          previous="Home"
          previousLocation="/"
          current="Contact Us"
        />

        <Title
          variant="H1"
          className="mb-5 mt-2 w-full text-center text-secondary-title md:mb-8 lg:mb-14 lg:w-[70%] xl:mb-[70px]"
        >
          Your Feedback Matters – <br /> Reach Out Today!
        </Title>

        <ContactUsForm />
      </Container>
    </section>
  );
};

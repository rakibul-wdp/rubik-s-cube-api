import { Container, FaqBox } from "@/components/common";
import { Title } from "@/components/typography";
import { FC } from "react";

export const FAQ: FC = () => {
  return (
    <Container className="flex flex-col items-center justify-center px-5">
      <Title
        variant="H3"
        className="mb-[35px] text-center text-secondary-title md:mb-[50px] lg:mb-[70px]"
      >
        Frequently Asked Questions (FAQs)
      </Title>

      <FaqBox limit={5} />
    </Container>
  );
};

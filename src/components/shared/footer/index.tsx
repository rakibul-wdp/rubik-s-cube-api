import { Container } from "@/components/common";
import { SubTitle } from "@/components/typography";
import { CompanyInfo } from "./company-info";
import { Contact } from "./contact";
import { Legal } from "./legal";
import { QuickLinks } from "./quick-links";

export const Footer = () => {
  return (
    <footer className="background w-full bg-backgroundImage-linear pt-[140px]">
      <Container>
        <div className="grid grid-cols-2 justify-items-center gap-y-10 px-5 pb-10 md:grid-cols-3 md:justify-items-end lg:grid-cols-4">
          <CompanyInfo />
          <QuickLinks />
          <Legal />
          <Contact />
        </div>
        <div>
          <SubTitle
            variant="H9"
            className="border-t border-secondary-title/20 py-5 text-center text-base text-secondary-title sm:text-lg md:py-8 md:text-[20px] md:leading-[120%]"
          >
            Copyright ©2024 By TypeShort. All Rights Reserved.
          </SubTitle>
        </div>
      </Container>
    </footer>
  );
};

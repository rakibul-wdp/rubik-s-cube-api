import {
  FAQ,
  FreeTrail,
  GettingStarted,
  Hero,
  KeyFeature,
  Shorthand,
  Testimonials,
} from "@/components/page/home";
import { cn } from "@/lib/utils";
import { NextPage } from "next";
import { FC } from "react";

type IHomeSection = { id: string; Compo: FC } & IClassName;
const HomeSection: FC<IHomeSection> = ({ id, Compo, className }) => (
  <section
    id={id}
    className={cn("pt-14 md:pt-16 lg:pt-28 xl:pt-[140px]", className)}
  >
    <Compo />
  </section>
);

const Home: NextPage = () => {
  return (
    <main className="pb-10 md:pb-16 lg:pb-28 xl:pb-[140px]">
      <Hero />
      <HomeSection id="key-features" Compo={KeyFeature} />
      <HomeSection id="getting-started" Compo={GettingStarted} />
      <HomeSection id="shorthand" Compo={Shorthand} className="mt-[5px]" />
      <HomeSection id="testimonial" Compo={Testimonials} />
      <HomeSection id="faq" Compo={FAQ} />
      <HomeSection id="downloads" Compo={FreeTrail} />
    </main>
  );
};

export default Home;

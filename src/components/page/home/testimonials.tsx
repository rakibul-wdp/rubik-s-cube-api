import { Container } from "@/components/common";
import { P, SubTitle, Title } from "@/components/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FC } from "react";

const testimonials = [
  {
    id: 1,
    avatar: "/erin.png",
    feedback:
      "“I am glad to have TypeShort available. I only wish I would have had it 10 years ago when I wrote my books. It's like having a personal assistant by my side!”",
    name: "Emily",
    address: "New York City, New York",
  },
  {
    id: 2,
    avatar: "/james-avatar.png",
    feedback:
      "“I thought it might be difficult to get used to the no-spacebar thing, but I got used to it in about 5 minutes, and am glad I tried it.”",
    name: "James",
    address: "Los Angeles, California",
  },
  {
    id: 3,
    avatar: "/jennifer-avatar.png",
    feedback:
      "“I’m glad to have TypeShort now, but you know who is even more happy? My thumbs and fingers, because I don’t have to use them as much!”",
    name: "Jennifer",
    address: "Miami, Florida",
  },
  {
    id: 4,
    avatar: "/william.png",
    feedback:
      "“Now I don’t have to worry as much about completing my assignments on time due to TypeShort. It's helped me a lot in my studies.”",
    name: "William",
    address: "Phoenix, Arizona",
  },
  {
    id: 5,
    avatar: "/alena.png",
    feedback:
      "“TypeShort has truly revolutionized my writing experience! Initially, I was skeptical about not using the spacebar, but I adapted within minutes.”",
    name: "Alena",
    address: "New Jersey",
  },
];

export const Testimonials: FC = () => {
  return (
    <Container className="flex flex-col items-center justify-center">
      <Title
        variant="H3"
        className="mb-[35px] text-secondary-title md:mb-[50px] lg:mb-[70px]"
      >
        What Our Users Say
      </Title>
      <div className="relative h-[355px] w-full md:h-[492px]">
        <Carousel className="absolute left-0 top-0 w-screen">
          <CarouselContent className="gap-10">
            {testimonials.map((testimonial) => (
              <CarouselItem
                className="basis-1/1 max-w-fit md:basis-1/2 lg:basis-2/3"
                key={testimonial.id}
              >
                <div
                  className="background h-auto min-h-[280px] min-w-[310px] max-w-min rounded-[20px] p-7 px-6 sm:min-w-[380px] lg:min-h-[355px]"
                  key={testimonial.id}
                >
                  <Image
                    src={testimonial.avatar}
                    alt=""
                    width={80}
                    height={80}
                    className="h-auto w-14 lg:w-20"
                  />
                  <P
                    variant="P5"
                    className="py-4 text-[14px] text-secondary-title lg:py-8 lg:text-[18px]"
                  >
                    {testimonial.feedback}
                  </P>
                  <div>
                    <SubTitle
                      variant="H9"
                      className="text-base text-secondary-title lg:mb-[6px] lg:text-[20px]"
                    >
                      {testimonial.name}
                    </SubTitle>
                    <P variant="P5" className="text-sm text-secondary-body">
                      {testimonial.address}
                    </P>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute ml-11 mt-10 w-full lg:mt-20">
            {/* TODO: button shulde be center only mobile device */}
            <div className="flex w-full items-center justify-center">
              <CarouselPrevious className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-secondary-title bg-transparent text-secondary-title hover:border-none hover:bg-primary-brand-1 hover:text-white lg:h-[60px] lg:w-[60px]" />
              <CarouselNext className="left-0 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-secondary-title bg-transparent text-secondary-title hover:border-none hover:bg-primary-brand-1 hover:text-white lg:left-7 lg:h-[60px] lg:w-[60px]" />
            </div>
          </div>
        </Carousel>
      </div>
    </Container>
  );
};

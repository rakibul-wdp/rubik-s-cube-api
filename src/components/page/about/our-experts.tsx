import { Container } from "@/components/common";
import { SubTitle, Title } from "@/components/typography";
import Image from "next/image";

const experts = [
  {
    id: 1,
    name: "John Smith",
    title: "Founder & CEO",
    photo: "/john-smith.png",
  },
  {
    id: 2,
    name: "Emily Johnson",
    title: "Chief Technology Officer (CTO)",
    photo: "/emily-johnson.png",
  },
  {
    id: 3,
    name: "David Brown",
    title: "Head of Product Development",
    photo: "/david-brown.png",
  },
  {
    id: 4,
    name: "Michael Garcia",
    title: "Marketing Manager",
    photo: "/micle-garcia.png",
  },
  {
    id: 5,
    name: "Amanda Martinez",
    title: "Customer Support Specialist",
    photo: "/amanda-martinez.png",
  },
  {
    id: 6,
    name: "Daniel Clark",
    title: "Lead UI/UX Designer",
    photo: "/daniel-clark.png",
  },
];

export const OurExperts = () => {
  return (
    <Container className="mb-10 flex flex-col items-center justify-center md:mb-16 lg:mb-28 xl:mb-[140px]">
      <Title
        variant="H3"
        className="mb-5 w-[70%] text-center text-secondary-title md:mb-10 lg:mb-14 xl:mb-[70px]"
      >
        Meet the Team Behind Your Perfect Sentences
      </Title>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-[30px]">
        {experts.map((expert) => (
          <div
            className="background flex flex-col items-center justify-center rounded-[20px] px-[58px] pt-7"
            key={expert.id}
          >
            <Title variant="H9" className="text-secondary-title">
              {expert.name}
            </Title>
            <SubTitle
              variant="H8"
              className="mb-7 mt-[6px] text-secondary-body"
            >
              {expert.title}
            </SubTitle>
            <Image
              src={expert.photo}
              alt="experts photo"
              width={304}
              height={362}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

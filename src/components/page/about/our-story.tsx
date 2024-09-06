import { Container } from "@/components/common";
import { P, SubTitle, Title } from "@/components/typography";
import { FC } from "react";

const stories = [
  {
    id: 1,
    year: "2021",
    title: "Year of Founding",
    description:
      "Welcome to the Year of Founding, where we celebrate the inception of our journey, marked by passion, perseverance, and purpose. Reflecting on our beginnings ignites our drive to innovate, create, and inspire, as we continue to evolve and shape the future with every step forward.",
  },
  {
    id: 2,
    year: "2022",
    title: "Early Milestones",
    description:
      "Explore the pivotal moments that shaped our journey in the Early Milestones of our endeavor. From humble beginnings to significant achievements, each milestone represents a testament to our dedication, resilience, and vision.",
  },
  {
    id: 3,
    year: "2023",
    title: "Expanding Our Services",
    description:
      "Embark on a journey of growth and innovation as we take strides in Expanding Our Services. With a commitment to meeting evolving needs and exceeding expectations, we're thrilled to introduce new offerings that enhance your experience.",
  },
  {
    id: 4,
    year: "2024",
    title: "Present Day",
    description:
      "Step into the dynamic realm of the Present Day, where innovation meets opportunity. Here, we navigate the currents of progress, leveraging cutting-edge technologies and forward-thinking strategies to shape tomorrow's landscape.",
  },
];

export const OurStory: FC = () => {
  return (
    <Container className="mb-10 flex flex-col items-start justify-between gap-10 md:mb-16 md:gap-14 lg:mb-28 lg:flex-row lg:gap-20 xl:mb-[140px] xl:gap-[102px]">
      <div>
        <Title
          variant="H3"
          className="mb-3 text-secondary-title md:mb-5 lg:mb-7 xl:mb-8"
        >
          Revealing Our Path: From Vision to Mission
        </Title>
        <P variant="P2" className="text-secondary-body">
          Step into our narrative as we unveil the transformative journey from
          conceptualization to realization, where our vision evolved into a
          purpose-driven mission, shaping the essence of our commitment and
          aspirations.
        </P>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 lg:gap-12 xl:gap-14">
        {stories.map((story) => (
          <div
            className="relative z-0 rounded-lg border-[1px] border-secondary-stroke-line p-6 md:p-8 lg:p-[42px]"
            key={story.id}
          >
            <SubTitle
              variant="H8"
              className="absolute -top-4 z-10 bg-white px-1 font-outfit text-secondary-title"
            >
              {story.year}
            </SubTitle>

            <Title variant="H7" className="mb-4 text-secondary-title md:mb-6">
              {story.title}
            </Title>
            <P variant="P2" className="text-secondary-body">
              {story.description}
            </P>
          </div>
        ))}
      </div>
    </Container>
  );
};

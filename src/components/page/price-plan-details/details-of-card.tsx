import { P, SubTitle, Title } from "@/components/typography";
import Image from "next/image";

const roadmap = [
  {
    id: 1,
    heading: "Enhance Your Writing with Typeshort.",
    description:
      "Whether you're a student, professional, or just someone who loves to write, Typeshort has a plan that's perfect for you. Choose the one that fits your needs and start writing with confidence today.",
    listTitle: "Ideal For",
    listIcon: "/list-icon.svg",
    lists: [
      {
        id: 10,
        title: "Large Organizations",
      },
      {
        id: 11,
        title: "Educational Institutions",
      },
      {
        id: 12,
        title: "Publishing Companies",
      },
    ],
    imgUrl: "/keyboard.png",
    secondListTitle: "Why Choose Typeshort?",
    secondLists: [
      {
        id: 20,
        title: "Accurate and Reliable",
        details:
          "Our advanced algorithms ensure your writing is error-free and polished.",
      },
      {
        id: 21,
        title: "User-Friendly Interface",
        details:
          "Easily navigate and use our tools with a clean, intuitive interface.",
      },
      {
        id: 22,
        title: "Cross-Platform",
        details: "Access Typeshort from any device, anytime, anywhere.",
      },
      {
        id: 23,
        title: "Secure",
        details:
          "Your data is safe with us, thanks to our robust security measures.",
      },
    ],
  },
];

export const DetailsOfCard = () => {
  return (
    <div className="md:w-[55%]">
      {roadmap.map(
        (
          {
            heading,
            id,
            description,
            listTitle,
            imgUrl,
            listIcon,
            lists,
            secondListTitle,
            secondLists,
          },
          i,
        ) => (
          <div key={id}>
            <div>
              <Title variant="H5" className="mb-8 text-secondary-title">
                {heading}
              </Title>
              <P variant="P2" className="mb-8 text-secondary-body">
                {description}
              </P>
              <Title variant="H7" className="mb-6 text-secondary-title">
                {listTitle}
              </Title>

              {lists.map((list) => (
                <div className="flex items-start gap-3" key={list.id}>
                  <Image
                    src={listIcon}
                    alt="list icon"
                    width={24}
                    height={24}
                    className="pt-1.5"
                  />
                  <SubTitle variant="H4" className="mb-6 text-secondary-title">
                    {list.title}
                  </SubTitle>
                </div>
              ))}

              <Image
                src={imgUrl}
                alt="keyboard image"
                className="my-14"
                width={697}
                height={400}
              />

              <Title variant="H5" className="mb-8 text-secondary-title">
                {secondListTitle}
              </Title>

              {secondLists.map((list) => (
                <div
                  className={`${list.id != 23 && "mb-6"} flex items-start gap-3`}
                  key={list.id}
                >
                  <Image
                    src={listIcon}
                    alt="list icon"
                    width={24}
                    height={24}
                    className="pt-1.5"
                  />
                  <div>
                    <SubTitle
                      variant="H4"
                      className="mb-3 text-secondary-title"
                    >
                      {list.title}
                    </SubTitle>
                    <P variant="P2" className="text-secondary-body">
                      {list.details}
                    </P>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

"use client";

import { Container } from "@/components/common";
import { P, Title } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface IAddress {
  id: number;
  icon: string;
  title: string;
  details?: string;
  detailsIcon?: {
    id: number;
    name: string;
    url: string;
    whiteUrl: string;
  }[];
}

const addresses: IAddress[] = [
  {
    id: 1,
    icon: "/office-address.svg",
    title: "Office Address",
    details: "Clairton, PA 15025, Pennsylvania, USA.",
  },
  {
    id: 2,
    icon: "/phone-number.svg",
    title: "Phone Number",
    details: "+1 (412) 974-1502",
  },
  {
    id: 3,
    icon: "/email-address.svg",
    title: "Email Address",
    details: "info@typeshort.com",
  },
  {
    id: 4,
    icon: "/social-media.svg",
    title: "Social Media",
    detailsIcon: [
      {
        id: 10,
        name: "facebook",
        url: "/icon/facebook.svg",
        whiteUrl: "/icon/facebook-white.svg",
      },
      // {
      //   id: 11,
      //   name: "twitter",
      //   url: "/icon/twitter.svg",
      //   whiteUrl: "/icon/twitter-white.svg",
      //   width: 18,
      //   height: 18,
      // },
      // {
      //   id: 12,
      //   name: "Google",
      //   url: "/icon/google-plus.svg",
      //   whiteUrl: "/icon/google-plus-white.svg",
      //   width: 18,
      //   height: 18,
      // },
      {
        id: 13,
        name: "LinkedIn",
        url: "/icon/linkedin.svg",
        whiteUrl: "/icon/linkedin-white.svg",
      },
      {
        id: 14,
        name: "Instagram",
        url: "/icon/instagram.svg",
        whiteUrl: "/icon/instagram-white.svg",
      },
    ],
  },
];

export const Address = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const pathname = usePathname();

  const handleMouseOver = (id: any) => {
    setHoveredIcon(id);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <Container className="mb-10 grid grid-cols-1 gap-5 text-center sm:grid-cols-2 md:mb-16 lg:mb-28 lg:grid-cols-3 lg:gap-6 xl:mb-[140px] xl:grid-cols-4 xl:gap-[30px]">
      {addresses.map(({ id, icon, title, details, detailsIcon }) => (
        <div
          key={id}
          className={cn(
            "address-bg flex flex-col items-center justify-start rounded-[20px] py-8",
          )}
        >
          <Image src={icon} alt="contact icon" width={60} height={60} />
          <Title
            variant="H9"
            className={cn("min-w-[173px] pt-8", id != 4 ? "pb-4" : "pb-6")}
          >
            {title}
          </Title>
          <P
            variant="P2"
            className={cn(
              "text-secondary-body",
              id === 1 && "w-[40%] sm:w-[50%] md:w-[60%] xl:w-[70%]",
            )}
          >
            {details}

            {id === 4 && (
              <span className="inline-flex items-center justify-center gap-[14px]">
                {detailsIcon?.map((icon) => (
                  <span
                    className="flex items-center justify-center gap-4"
                    key={icon.id}
                    onMouseOver={() => handleMouseOver(icon.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Button
                      key={icon.id}
                      size="icon"
                      variant="icon"
                      className={cn(
                        "h-[40px] w-[40px]",
                        "hover:border-primary-brand-1 hover:bg-primary-brand-1",
                      )}
                    >
                      <Image
                        src={hoveredIcon === icon.id ? icon.whiteUrl : icon.url}
                        alt={icon.name}
                        width={16}
                        height={16}
                      />
                    </Button>
                  </span>
                ))}
              </span>
            )}
          </P>
        </div>
      ))}
    </Container>
  );
};

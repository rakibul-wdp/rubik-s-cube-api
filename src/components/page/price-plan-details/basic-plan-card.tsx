import { P, SubTitle, Title } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WhatIncludes } from "./what-includes";
import { ChevronDown } from "lucide-react";

const card = [
  {
    id: 10,
    include: "Auto Space Making",
  },
  {
    id: 11,
    include: "Auto Capitalization",
  },
  {
    id: 12,
    include: "Basic Shorthand",
  },
  {
    id: 13,
    include: "Email Support",
  },
];

export const BasicPlanCard = () => {
  return (
    <div
      className={`rounded-[20px] bg-primary-brand-1 py-10 pl-10 pr-10 text-start text-white md:w-[45%] md:py-8 md:pl-8 md:pr-8 xl:py-[60px] xl:pl-[60px] xl:pr-[58px]`}
    >
      <Title variant="H5" className="mb-4 text-white">
        Basic Plan
      </Title>
      <P variant="P5">
        Ideal for individuals and startups looking to establish their online
        presence.
      </P>
      <Title variant="H3" className="my-8 font-outfit text-white">
        $2.50
      </Title>

      <WhatIncludes card={card} />

      <div className="mb-6 flex w-full items-center justify-between rounded-full bg-white px-10 py-5 text-black">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <SubTitle variant="H8">Monthly</SubTitle>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ChevronDown />
      </div>

      <Button variant="default-secondary" className="w-full">
        Get Started
      </Button>
    </div>
  );
};

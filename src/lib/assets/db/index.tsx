import { ArrowUpRight } from "lucide-react";

export const defaultPrice: IPrice = {
  id: 0,
  title: "",
  description: "",
  price: "0",
  duration: "custom",
  offer: [
    {
      id: 0,
      include: "",
    },
  ],
};

export const prices: IPrice[] = [
  {
    id: 1,
    title: "Monthly Plan",
    description:
      "Pay as you go, your credit card will be billed monthly. Cancel anytime.",
    price: "4.50",
    duration: "monthly",
    offer: [
      {
        id: 10,
        include: "Auto Space Making",
      },
      {
        id: 11,
        include: "Full Set Of Shorthand",
      },
      {
        id: 12,
        include: "Auto Capitalization of Proper Nouns",
      },
      {
        id: 13,
        include: "Support and Updates",
      },
    ],
  },
  {
    id: 2,
    title: "Yearly Plan",
    description: "Enjoy huge savings when you sign up for yearly subscription.",
    price: "3.50",
    duration: "yearly",
    offer: [
      {
        id: 10,
        include: "Auto Space Making",
      },
      {
        id: 11,
        include: "Full Set Of Shorthand",
      },
      {
        id: 12,
        include: "Auto Capitalization of Proper Nouns",
      },
      {
        id: 13,
        include: "Support and Updates",
      },
    ],
  },
  {
    id: 3,
    title: "Enterprise Plan",
    description:
      "Designed for large enterprises and corporations with complex requirements.",
    price: "Contact Us",
    duration: "custom",
    icon: <ArrowUpRight />,
    offerLevel: "All that TypeShort offers plus:",
    offer: [
      {
        id: 10,
        include: "Custom Shorthand",
      },
      {
        id: 11,
        include: "Bulk Pricing",
      },
      {
        id: 12,
        include: "Training",
      },
    ],
  },
];

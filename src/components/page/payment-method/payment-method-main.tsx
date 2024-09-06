"use client";

import { Container } from "@/components/common";
import { defaultPrice, prices } from "@/lib/assets/db";
import { FC } from "react";
import ElementsForm from "../checkout/elements-form";
import { OrderSummary } from "./order-summary";

interface IPaymentMethodMain {
  id: string;
}

export const PaymentMethodMain: FC<IPaymentMethodMain> = ({ id }) => {
  const data = prices.find((item) => String(item.id) === id) || defaultPrice;

  return (
    <Container className="mb-10 mt-5 grid grid-cols-1 justify-center gap-14 px-16 md:mb-16 md:mt-8 md:px-24 lg:mb-28 lg:mt-14 lg:grid-cols-2 lg:px-5 xl:mb-[140px] xl:mt-[70px]">
      <ElementsForm data={data} />
      <OrderSummary data={data} />
    </Container>
  );
};

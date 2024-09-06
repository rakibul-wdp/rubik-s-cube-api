import { P, SubTitle, Title } from "@/components/typography";
import { FC } from "react";

export const OrderSummary: FC<{ data: IPrice }> = ({ data }) => {
  const { price, duration } = data;
  return (
    <div className="flex flex-col items-center justify-between rounded-[20px] border border-secondary-stroke-line-2 px-[46px] py-10">
      <div>
        <Title variant="H7" className="mb-14 text-secondary-title">
          Order Summary
        </Title>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            <SubTitle variant="H7" className="text-secondary-title">
              Term Duration
            </SubTitle>
            <P variant="P12" className="text-secondary-body">
              {duration === "yearly" ? "12 Months" : "1 Month"}
            </P>
          </div>
          <P variant="P4" className="mt-[6px] text-start text-secondary-body">
            Auto-renewing subscription. You can cancel anytime, the contract
            will be active until end of the term.
          </P>
        </div>

        <div className="-mx-[46px] border border-tertiary-disable" />

        <div className="my-8 flex items-center justify-between">
          <SubTitle variant="H7" className="text-secondary-title">
            Subtotal
          </SubTitle>
          <P variant="P10" className="text-secondary-title">
            ${duration === "yearly" ? Number(price) * 12 : price}
          </P>
        </div>

        <div className="-mx-[46px] border border-tertiary-disable"></div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex flex-col items-start justify-center gap-[18px]">
            <SubTitle variant="H2" className="text-secondary-title">
              Total
            </SubTitle>
            <P variant="P12" className="text-secondary-body">
              Included VAT 0 % ($0.00)
            </P>
          </div>
          <div className="flex flex-col items-end justify-center gap-[18px]">
            <SubTitle variant="H2" className="font-outfit text-secondary-title">
              ${duration === "yearly" ? Number(price) * 12 : price}
            </SubTitle>
            <P variant="P12" className="text-secondary-body">
              = ${price} x {duration === "yearly" ? "12 Months" : "1 Month"}
            </P>
          </div>
        </div>
      </div>

      <div className="w-full">
        <button className="mt-[125px] w-full rounded-xl bg-primary-brand-2 py-5">
          <SubTitle variant="H8" className="text-secondary-title">
            Download Invoice
          </SubTitle>
        </button>
        <button className="mt-6 w-full rounded-xl bg-primary-brand-1 py-5">
          <SubTitle variant="H8" className="text-white">
            Print Invoice
          </SubTitle>
        </button>
      </div>
    </div>
  );
};

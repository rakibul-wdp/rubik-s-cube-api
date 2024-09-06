"use client";

import type { StripeError } from "@stripe/stripe-js";

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { createPaymentIntent } from "@/actions/stripe";
import { PopupDialog } from "@/components/common/popup-dialog";
import { Title } from "@/components/typography";
import * as config from "@/config";
import getStripe from "@/utils/get-stripejs";
import Image from "next/image";
import { FC, FormEventHandler, useState } from "react";
import { LabelInput } from "../payment-method";

type IStatus = {
  status:
    | "initial"
    | "processing"
    | "error"
    | "requires_confirmation"
    | "requires_payment_method";
};

const CheckoutForm: FC<IPrice> = ({ price, duration }) => {
  const [payment, setPayment] = useState<IStatus>({ status: "initial" });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [paymentType, setPaymentType] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const amount = duration === "yearly" ? Number(price) * 12 : Number(price);

  const stripe = useStripe();
  const elements = useElements();

  const handleFistName = (value: string) => setFirstName(value);
  const handleLastName = (value: string) => setLastName(value);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      // Abort if form isn't valid
      if (!e.currentTarget.reportValidity()) return;
      if (!elements || !stripe) return;

      setPayment({ status: "processing" });

      const { error: submitError } = await elements.submit();

      if (submitError) {
        setPayment({ status: "error" });
        setErrorMessage(submitError.message ?? "An unknown error occurred");

        return;
      }

      // Create a PaymentIntent with the specified amount.
      const { client_secret: clientSecret } = await createPaymentIntent(
        new FormData(e.target as HTMLFormElement),
        amount,
      );

      // Use your card Element with other Stripe.js APIs
      const { error: confirmError } = await stripe!.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location}`,
          payment_method_data: {
            billing_details: {
              name: firstName + " " + lastName,
            },
          },
        },
      });

      setFirstName("");
      setLastName("");

      if (confirmError) {
        setPayment({ status: "error" });
        setErrorMessage(confirmError.message ?? "An unknown error occurred");
      }
    } catch (err) {
      const { message } = err as StripeError;

      setPayment({ status: "error" });
      setErrorMessage(message ?? "An unknown error occurred");
    }
  };

  return (
    <div className="rounded-[20px] border border-secondary-stroke-line-2 px-[46px] py-10">
      <div className="mb-10 flex items-center justify-start gap-5 rounded-xl py-[18px]">
        <Image
          src="/stripe-logo.png"
          alt=""
          width={40}
          height={40}
          className="rounded-md"
        />

        <Title variant="H7" className="text-secondary-title">
          Stripe
        </Title>
      </div>

      <div className="-mx-[46px] border border-tertiary-disable" />

      <form className="mt-10" onSubmit={handleSubmit}>
        <fieldset className="elements-style pb-2.5">
          <div className="mb-6 flex flex-col items-center justify-center gap-6">
            <LabelInput
              type="text"
              label="First Name"
              id="first-name"
              placeholder="First Name"
              handleChange={handleFistName}
            />
            <LabelInput
              type="text"
              label="Last Name"
              id="last-name"
              placeholder="Last Name"
              handleChange={handleLastName}
            />
          </div>
          <PaymentElement
            onChange={(e) => {
              setPaymentType(e.value.type);
            }}
          />
        </fieldset>
        <button
          className="mt-16 w-full rounded-xl bg-primary-brand-1 py-5 text-[20px] font-semibold text-white"
          type="submit"
          disabled={
            !["initial", "succeeded", "error"].includes(payment.status) ||
            !stripe
          }
        >
          {payment.status === "processing" ||
          payment.status === "requires_confirmation" ||
          payment.status === "requires_payment_method"
            ? "Processing..."
            : "Complete Purchase"}
        </button>
      </form>

      {payment.status === "error" && (
        <PopupDialog
          open={payment.status === "error" ? true : false}
          message="Oops! Something went wrong with your payment. Please try again or contact support."
        />
      )}
    </div>
  );
};

const ElementsForm: FC<{ data: IPrice }> = ({ data }) => {
  return (
    <Elements
      stripe={getStripe()}
      options={{
        appearance: {
          variables: {
            colorIcon: "#6772e5",
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          },
        },
        currency: config.CURRENCY,
        mode: "payment",
        amount: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
      }}
    >
      <CheckoutForm {...data} />
    </Elements>
  );
};

export default ElementsForm;

"use client";

import { Container } from "@/components/common";
import { SubTitle, Title } from "@/components/typography";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Image from "next/image";
import { useState } from "react";
import { OTPSuccessPopUp } from "./otp-success-pop-up";

export const AuthOTP = () => {
  const [value, setValue] = useState("");

  return (
    <Container className="mt-5 flex items-center justify-center pb-10 md:mt-10 md:pb-16 lg:mt-20 lg:gap-5 lg:pb-28 xl:mt-[100px] xl:gap-20 xl:pb-[140px]">
      <Image
        src="/login.svg"
        alt="404 image"
        width={877}
        height={700}
        className="hidden w-[50%] lg:block"
      />

      <div className="flex flex-col items-center justify-center">
        <Title variant="H5" className="mb-4 text-secondary-title">
          OTP Verification
        </Title>
        <SubTitle
          variant="H8"
          className="mb-8 w-[80%] text-center text-secondary-body"
        >
          We have just sent a 6 digit code to your email. Enter the code below.
        </SubTitle>

        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <OTPSuccessPopUp value={value} />

        <SubTitle variant="H12" className="text-secondary-title">
          Didn&apos;t receive any code?{" "}
          <button className="text-primary-brand-1">Resend</button>
        </SubTitle>
      </div>
    </Container>
  );
};

"use client";

import { Container } from "@/components/common";
import { P, SubTitle, Title } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AuthInput } from "./auth-input";
import { SocialLogin } from "./social-login";

export const AuthLogin = ({ getClickSubmit }: any) => {
  const [emailValue, setEmailValue] = useState("");
  const [showExistMailError, setShowExistMailError] = useState(false);
  const [showCheckMail, setCheckMail] = useState(false);

  const getEmailValue = (email: string) => {
    setEmailValue(email);
  };

  useEffect(() => {
    if (emailValue === "abul@gmail.com") setShowExistMailError(true);
    else setShowExistMailError(false);
  }, [emailValue]);

  useEffect(() => {
    if (emailValue === "babul@gmail.com") setCheckMail(true);
    else setCheckMail(false);
  }, [emailValue]);

  return (
    <Container className="mt-5 flex items-center justify-center pb-10 md:mt-10 md:pb-16 lg:mt-20 lg:gap-5 lg:pb-28 xl:mt-[100px] xl:gap-20 xl:pb-[140px]">
      <Image
        src="/login.svg"
        alt="404 image"
        width={877}
        height={888}
        className="hidden w-[50%] lg:block"
      />

      <div>
        <div className="mb-2 flex items-center justify-start gap-0.5">
          <SubTitle variant="H8" className="text-primary-brand-1">
            Welcome back!
          </SubTitle>
          <P variant="P4" className="text-primary-brand-1">
            👋
          </P>
        </div>
        <Title
          variant="H5"
          className="mb-5 text-secondary-title md:mb-8 lg:mb-14"
        >
          Log in to your account
        </Title>

        <AuthInput
          type="email"
          label="Email"
          id="email"
          placeholder="Enter Your Email Address"
          emailValue={emailValue}
          getEmailValue={getEmailValue}
          showCheckMail={showCheckMail}
        />

        {showExistMailError && (
          <div className="mt-2 flex items-center justify-start gap-[6px]">
            <Image
              src="info-circle.svg"
              alt="info icon"
              width={24}
              height={24}
            />
            <P variant="P4" className="text-tertiary-error">
              This email is not registered with us.
            </P>
          </div>
        )}

        <Button
          variant="default-reverse"
          className="mt-8 w-full"
          onClick={(e) => getClickSubmit(true)}
        >
          Continue
        </Button>

        <SocialLogin />
      </div>
    </Container>
  );
};

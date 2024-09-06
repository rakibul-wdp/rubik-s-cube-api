"use client";

import { useState } from "react";
import { AuthLogin } from "./auth-login";
import { AuthOTP } from "./auth-otp";

export const AuthMain = () => {
  const [clickSubmit, setClickSubmit] = useState(false);

  const getClickSubmit = (getSubmit: boolean) => {
    setClickSubmit(getSubmit);
  };

  return (
    <section className="background pt-[136px]">
      {clickSubmit ? (
        <AuthOTP />
      ) : (
        <AuthLogin getClickSubmit={getClickSubmit} />
      )}
    </section>
  );
};

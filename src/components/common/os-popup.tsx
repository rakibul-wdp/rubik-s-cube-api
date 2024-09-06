"use client";

import { P } from "@/components/typography";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getOSVersion } from "@/utils/helper";
import Image from "next/image";
import { FC, useState } from "react";

export const OSPopup: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [emailValue, setEmailValue] = useState("");
  const [open, setOpen] = useState(isOpen);

  const handleSubscribe = async () => {
    try {
      const email = emailValue;
      const os_version_name = getOSVersion();
      const formData = new FormData();
      formData.append("email", email);
      formData.append("os_version_name", os_version_name);

      const response = await fetch(
        "https://typeshort.com:9111/apis/user/subscribe.js",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.respond === "success") {
        setOpen(false);
      } else {
        setOpen(false);
        throw new Error("something wind wrong! Please Try Again later.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="background w-11/12 max-w-[645px] rounded-[40px] px-6 sm:w-full">
        <AlertDialogHeader>
          <AlertDialogCancel
            onClick={() => setOpen(false)}
            className="mx-auto -mr-3 flex w-fit items-end justify-start border-none"
          >
            <Image src="/Close.svg" alt="close" width={40} height={40} />
          </AlertDialogCancel>
        </AlertDialogHeader>

        <div className="flex flex-col items-center justify-center">
          <Image
            src="/exclamation.svg"
            alt="success icon"
            width={120}
            height={120}
          />
          <div className="text-center">
            <P variant="P2" className="mb-8 mt-6 text-secondary-body">
              The TypeShort app currently only works in Windows. Please share
              your email and we will let you know when your{" "}
              <br className="hidden sm:block" /> system’s version is available.
              Thank you!
            </P>

            <div className="mx-auto flex w-full max-w-[430px] items-center justify-between rounded-full border border-secondary-stroke-line bg-white pl-5">
              <div className="flex w-full items-center justify-start">
                <Image src="/sms.svg" alt="email logo" width={24} height={24} />
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full border-none bg-white text-secondary-stroke-line-2 placeholder:text-secondary-stroke-line-2 focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
              </div>
              <Button
                variant="default-reverse"
                onClick={handleSubscribe}
                className="px-5 py-[18px] lg:!py-[18px] lg:px-5"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

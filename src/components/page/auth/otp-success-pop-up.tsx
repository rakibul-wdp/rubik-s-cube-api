"use client";

import { P, Title } from "@/components/typography";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export const OTPSuccessPopUp = ({ value }: any) => {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSubmit = () => {
    if (value === "123456") setShowSuccessDialog(true);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="mb-6 mt-8 w-full">
        <Button
          variant="default-reverse"
          className="w-[416px]"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="background rounded-[40px]">
        <AlertDialogHeader>
          <AlertDialogCancel className="mx-auto -mr-24 flex w-fit items-end justify-start border-none">
            <Image src="/Close.svg" alt="close" width={40} height={40} />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={`${showSuccessDialog ? "/success.svg" : "error.svg"}`}
            alt="success icon"
            width={120}
            height={120}
          />
          <AlertDialogTitle>
            <Title variant="H3" className="mb-2 mt-12 text-secondary-title">
              {showSuccessDialog ? "Success!" : "Error!"}
            </Title>
          </AlertDialogTitle>
          <AlertDialogDescription className="">
            <P variant="P2" className="text-center text-secondary-body">
              {showSuccessDialog
                ? "Your One-Time Password has been successfully verified. You’re all set to proceed."
                : "Oops! The  One-Time Password you entered is incorrect. Please double-check and try again."}
            </P>
          </AlertDialogDescription>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

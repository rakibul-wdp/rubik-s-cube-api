"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { P, Title } from "../typography";

export interface IPopupDialog {
  open: boolean;
  message: string;
  isSuccess?: boolean;
}
export const PopupDialog: FC<IPopupDialog> = ({ open, isSuccess, message }) => {
  const [openPopup, setOpenPopup] = useState(open);

  const { back } = useRouter();

  const handleClose = () => {
    setOpenPopup((prev) => !prev);
    isSuccess && back();
  };

  return (
    <AlertDialog open={openPopup}>
      <AlertDialogContent className="background rounded-[40px]">
        <AlertDialogHeader>
          <AlertDialogCancel
            onClick={handleClose}
            className="mx-auto -mr-24 flex w-fit items-end justify-start border-none"
          >
            <Image src="/Close.svg" alt="close" width={40} height={40} />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <div className="flex flex-col items-center justify-center">
          <Image
            src={`${isSuccess ? "/success.svg" : "/error.svg"}`}
            alt="success icon"
            width={120}
            height={120}
          />
          <AlertDialogTitle>
            <Title variant="H3" className="mb-2 mt-12 text-secondary-title">
              {isSuccess ? "Success!" : "Error!"}
            </Title>
          </AlertDialogTitle>
          <AlertDialogDescription className="">
            <P variant="P2" className="text-center text-secondary-body">
              {message}
            </P>
          </AlertDialogDescription>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

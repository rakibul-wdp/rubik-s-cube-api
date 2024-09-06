"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useDownloadFreeTrial } from "@/hooks";
import { detectOS } from "@/utils/helper";
import { FC, useEffect, useState } from "react";
import { OSPopup } from "./os-popup";

interface IDownloadLink extends IChildren {
  footer?: boolean;
}

export const DownloadLink: FC<IDownloadLink & ButtonProps> = ({
  children,
  footer = false,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const { getDLink } = useDownloadFreeTrial();
  const [os, setOS] = useState("Unknown");

  useEffect(() => {
    const detectedOS = detectOS();
    setOS(detectedOS);
  }, []);

  const handleDownload = async () => {
    const dLink = await getDLink();
    if (dLink) window.location.href = dLink;
  };

  return (
    <>
      {os !== "Windows" ? (
        footer ? (
          <button onClick={() => setOpen((prv) => !prv)}>{children}</button>
        ) : (
          <Button onClick={() => setOpen((prv) => !prv)} {...props}>
            {children}
          </Button>
        )
      ) : footer ? (
        <button onClick={() => handleDownload()}>{children}</button>
      ) : (
        <Button onClick={() => handleDownload()} {...props}>
          {children}
        </Button>
      )}

      {open && <OSPopup isOpen={open} />}
    </>
  );
};

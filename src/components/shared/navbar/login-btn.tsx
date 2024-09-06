import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";

export const LoginButton: FC = () => (
  <Button
    variant="default-reverse"
    size="xs"
    className="flex min-w-fit items-center justify-center gap-2 px-5 py-2.5 text-base leading-3 md:text-lg lg:py-3 lg:text-xl xl:px-6 xl:py-4"
  >
    Login
    <Image
      src="/icon/arrow-right.svg"
      width={24}
      height={24}
      alt=""
      className="h-auto w-5 lg:w-6"
    />
  </Button>
);

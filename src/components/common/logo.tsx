import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Title } from "../typography";

export const Logo: FC<IClassName> = ({ className }) => (
  <Link href="/" className="flex items-center justify-center gap-1 md:gap-2.5">
    <Image
      src="/logo.svg"
      width={40}
      height={40}
      className={className}
      alt="TypeShort Logo"
    />
    <Title variant="H7" className="text-xl lg:text-2xl xl:text-3xl">
      TypeShort
    </Title>
  </Link>
);

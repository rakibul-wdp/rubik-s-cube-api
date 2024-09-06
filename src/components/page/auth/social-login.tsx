import { P } from "@/components/typography";
import Image from "next/image";

export const SocialLogin = () => {
  return (
    <>
      <div className="relative mt-8 flex items-center gap-3">
        <div className="flex-grow border-t border-secondary-stroke-line-2"></div>
        <P variant="P4" className="flex-shrink text-secondary-title">
          Or log in with
        </P>
        <div className="flex-grow border-t border-secondary-stroke-line-2"></div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-2 rounded-full border border-secondary-stroke-line-2 bg-white px-8 py-[18px]">
          <Image src="/login-google.svg" alt="google" width={24} height={24} />
          <P variant="P4" className="text-secondary-body">
            Log in with Google
          </P>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-full border border-secondary-stroke-line-2 bg-white px-8 py-[18px]">
          <Image src="/login-apple.svg" alt="apple" width={24} height={24} />
          <P variant="P4" className="text-secondary-body">
            Log in with Apple
          </P>
        </div>
      </div>
    </>
  );
};

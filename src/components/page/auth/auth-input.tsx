import { SubTitle } from "@/components/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export const AuthInput = ({
  type,
  label,
  id,
  placeholder,
  getEmailValue,
  emailValue,
  showCheckMail,
}: any) => {
  return (
    <div className="flex w-full flex-col items-start gap-3">
      <Label htmlFor={type}>
        <SubTitle variant="H8" className="text-secondary-title">
          {label}
        </SubTitle>
      </Label>
      <div className="flex w-full items-center justify-between rounded-full border border-tertiary-disable bg-white px-6 py-2">
        <div className="flex items-center justify-start">
          <Image src="/sms.svg" alt="email logo" width={24} height={24} />
          <Input
            type={type}
            id={id}
            placeholder={placeholder}
            className="w-[80%] border-none bg-white focus-visible:ring-0 focus-visible:ring-offset-0"
            value={emailValue}
            onChange={(e) => getEmailValue(e.target.value)}
          />
        </div>
        {showCheckMail && (
          <Image src="/Huge-icon.svg" alt="check icon" width={24} height={24} />
        )}
      </div>
    </div>
  );
};

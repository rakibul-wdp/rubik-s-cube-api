import { SubTitle } from "@/components/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ContactInput = ({ label, type, id, placeholder }: any) => {
  return (
    <div className="flex w-full flex-col items-start gap-3">
      <Label htmlFor={type}>
        <SubTitle variant="H8" className="text-secondary-title">
          {label}
        </SubTitle>
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border-none py-3.5 pl-5 text-base font-medium leading-[19.2px] text-secondary-body placeholder:font-raleway focus:outline-none md:py-4"
      />
    </div>
  );
};

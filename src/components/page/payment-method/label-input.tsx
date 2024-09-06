import { SubTitle } from "@/components/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const LabelInput = ({
  label,
  type,
  id,
  placeholder,
  handleChange,
}: {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  handleChange: (e: string) => void;
}) => {
  return (
    <div className="flex w-full flex-col items-start gap-3">
      <Label
        htmlFor={type}
        className="text-[15px] font-normal text-secondary-title"
      >
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className="rounded-md p-3 py-2.5"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

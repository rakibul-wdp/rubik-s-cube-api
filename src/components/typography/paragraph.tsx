import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const className = {
  P1: "text-[22px] leading-[150%]",
  P2: "text-base md:text-[20px] md:leading-[150%]",
  P3: "text-[20px] leading-[120%]",
  P4: "text-[18px] leading-[150%]",
  P5: "text-[18px] leading-[140%]",
  P6: "text-[18px] leading-[120%]",
  P7: "text-[16px] leading-[120%]",
  P8: "text-[14px] leading-[120%]",
  P9: "text-[14px] leading-[120%]",
  P10: "text-base md:text-lg lg:text-xl xl:text-[22px] xl:leading-[150%] font-outfit",
  P11: "text-[20px] leading-[150%] font-outfit",
  P12: "text-[18px] leading-[150%] font-outfit",
  P13: "text-[20px] leading-[150%] font-outfit",
  P14: "text-[20px] leading-[120%] font-outfit",
  P15: "text-[18px] leading-[150%] font-outfit",
};

const variantsFn = cva("font-raleway font-medium", {
  variants: {
    variant: className,
  },
  defaultVariants: {
    variant: "P1",
  },
});

interface PProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof variantsFn> {}

export const P = forwardRef<HTMLParagraphElement, PProps>(
  ({ className, variant, ...props }, ref) => (
    <p
      ref={ref}
      {...props}
      className={cn(variantsFn({ variant, className }))}
    />
  ),
);

P.displayName = "P";

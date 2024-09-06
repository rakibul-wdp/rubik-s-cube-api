import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const className = {
  H1: "text-lg md:text-2xl lg:text-3xl xl:text-[40px] xl:leading-[140%]",
  H2: "text-xl md:text-2xl lg:text-3xl xl:text-[32px] xl:leading-[120%]",
  H3: "text-lg md:text-xl lg:text-2xl xl:text-[28px] xl:leading-[120%]",
  H4: "text-lg md:text-xl xl:text-[24px] xl:leading-[150%]",
  H5: "text-lg md:text-xl xl:text-[24px] xl:leading-[150%] hover:underline hover:underline-offset-2",
  H6: "text-[24px] leading-[120%]",
  H7: "text-[22px] leading-[150%]",
  H8: "text-base md:text-[20px] md:leading-[150%]",
  H9: "text-[20px] leading-[120%]",
  H10: "text-[18px] leading-[120%]",
  H11: "text-[18px] leading-[140%]",
  H12: "text-[18px] leading-[150%]",
  H13: "text-[16px] leading-[120%]",
};

const variantsFn = cva("font-raleway font-semibold transition-all delay-150", {
  variants: {
    variant: className,
  },
  defaultVariants: {
    variant: "H1",
  },
});

interface SubTitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof variantsFn> {}

export const SubTitle = forwardRef<HTMLHeadingElement, SubTitleProps>(
  ({ className, variant = "H1", ...props }, ref) => {
    const allProps = {
      ref: ref,
      ...props,
      className: cn(variantsFn({ variant, className })),
    };
    switch (variant) {
      case "H1":
        return <h3 {...allProps} />;
      case "H2":
        return <h3 {...allProps} />;
      case "H3":
        return <h3 {...allProps} />;
      case "H4":
        return <h4 {...allProps} />;
      case "H5":
        return <h4 {...allProps} />;
      case "H6":
        return <h4 {...allProps} />;
      case "H7":
        return <h5 {...allProps} />;
      case "H8":
        return <h5 {...allProps} />;
      case "H9":
        return <h5 {...allProps} />;
      case "H10":
        return <h6 {...allProps} />;
      case "H11":
        return <h6 {...allProps} />;
      case "H12":
        return <h6 {...allProps} />;
      case "H13":
        return <h6 {...allProps} />;

      default:
        return <h3 {...allProps} />;
    }
  },
);

SubTitle.displayName = "SubTitle";

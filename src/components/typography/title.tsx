import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const className = {
  H1: "text-2xl md:text-[40px] md:leading-[120%] lg:text-[48px] lg:leading-[130%] xl:text-[52px] xl:leading-[150%] 2xl:text-[64px] 2xl:leading-[150%]",
  H2: "text-[64px] leading-[130%]",
  H3: "text-2xl md:text-3xl lg:text-[40px] lg:leading-[120%] xl:text-[56px] xl:leading-[130%]",
  H4: "text-[30px] md:text-[35px] lg:text-[40px] leading-[140%] xl:text-[44px]",
  H5: "text-2xl md:text-3xl lg:text-4xl xl:text-[42px] xl:leading-[120%]",
  H6: "text-[40px] leading-[120%]",
  H7: "text-base md:text-xl lg:text-3xl xl:text-[32px] xl:leading-[120%]",
  H8: "text-[28px] leading-[120%]",
  H9: "text-base md:text-xl lg:text-[24px] lg:leading-[120%]",
  outfit: "text-[32px] leading-[120%]",
};

const variantsFn = cva("font-raleway font-bold text-secondary-title", {
  variants: {
    variant: className,
  },
  defaultVariants: {
    variant: "H1",
  },
});

interface TitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof variantsFn> {}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, variant = "H1", ...props }, ref) => {
    const allProps = {
      ref: ref,
      ...props,
      className: cn(variantsFn({ variant, className })),
    };

    switch (variant) {
      case "H1":
        return <h1 {...allProps} />;
      case "H2":
        return <h1 {...allProps} />;
      case "H3":
        return <h1 {...allProps} />;
      case "H4":
        return <h1 {...allProps} />;
      case "H5":
        return <h1 {...allProps} />;
      case "H6":
        return <h2 {...allProps} />;
      case "H7":
        return <h2 {...allProps} />;
      case "H8":
        return <h2 {...allProps} />;
      case "H9":
        return <h2 {...allProps} />;
      case "outfit":
        return <h2 {...allProps} />;

      default:
        return <h1 {...allProps} />;
    }
  },
);

Title.displayName = "Title";

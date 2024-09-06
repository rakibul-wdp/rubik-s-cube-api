import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

const customClass = {
  default:
    "rounded-full font-raleway text-base md:text-xl font-semibold leading-[120%]",
};

const cnObj = {
  variant: {
    default: cn(
      customClass.default,
      "bg-secondary-title hover:bg-primary-brand-1 text-white",
    ),
    "default-reverse": cn(
      customClass.default,
      "bg-primary-brand-1 hover:bg-secondary-title text-white",
    ),
    "default-secondary": cn(
      customClass.default,
      "bg-primary-brand-2 hover:bg-white text-secondary-title hover:text-primary-brand-1",
    ),
    "default-secondary-sm": cn(
      customClass.default,
      "bg-primary-brand-1 text-white",
    ),
    "default-secondary-lg": cn(
      customClass.default,
      "bg-white hover:bg-primary-brand-2 text-black",
    ),
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    icon: "bg-transparent text-secondary-title rounded-full flex justify-center items-center border border-secondary-title",
    "icon-2":
      "bg-primary-brand-1 text-white rounded-full flex justify-center items-center",
  },
  size: {
    default: "px-5 lg:px-7 py-2.5 lg:!py-5",
    xs: "py-3 px-8",
    sm: "py-[23px] px-0 w-[149px] h-[70px]",
    lg: "py-5 px-0 w-[339px] h-16",
    icon: "h-[60px] w-[60px]",
  },
};
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all delay-100 focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: cnObj.variant,
      size: cnObj.size,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };

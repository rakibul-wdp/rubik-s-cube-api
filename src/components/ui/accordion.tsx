"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", "border-none", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=closed]>svg.lucide-minus]:hidden [&[data-state=open]>svg.lucide-plus]:hidden",
        "items-center bg-transparent text-start [&[data-state=closed]]:rounded-2xl [&[data-state=closed]]:pb-10 [&[data-state=open]]:rounded-2xl [&[data-state=open]]:rounded-b-none",
        "items-start",
        className,
      )}
      {...props}
    >
      {children}
      <Plus className="h-[30px] w-[30px] shrink-0 rounded-lg bg-[#F7F7F7] p-1 transition-transform duration-200 md:h-[42px] md:w-[42px] md:p-2.5" />
      <Minus className="h-[30px] w-[30px] shrink-0 rounded-lg bg-primary-brand-1 p-1 text-white transition-transform duration-200 md:h-[42px] md:w-[42px] md:p-2.5" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      "bg-transparent data-[state=open]:rounded-2xl data-[state=open]:rounded-t-none",
    )}
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };

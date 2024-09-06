import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ContactInput } from "./contact-input";

export const ContactUsForm = () => {
  return (
    <div className="w-full rounded-[20px] bg-[#EBF5FF] px-5 py-5 md:px-10 md:py-12 lg:px-16 lg:py-14 xl:px-20 xl:py-16">
      <form>
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <ContactInput
            type="text"
            label="Name"
            id="name"
            placeholder="Enter Your Name"
          />
          <ContactInput
            type="text"
            label="Phone Number"
            id="phone"
            placeholder="Enter Your Phone Number"
          />
          <ContactInput
            type="email"
            label="Email Address"
            id="email"
            placeholder="Enter Your Email Address"
          />
          <ContactInput
            type="text"
            label="Business Name (Optional)"
            id="business-name"
            placeholder="Enter Your Business Name"
          />
        </div>

        <Textarea
          placeholder="Write Message"
          className="rounded-xl pl-5 pt-5 text-base font-medium leading-[19.2px] text-secondary-body placeholder:font-raleway"
        />

        <Button
          variant="default-reverse"
          className="mt-5 px-5 py-2.5 md:mt-8 md:px-8 md:py-3 lg:mt-10 lg:px-10 lg:py-4 xl:mt-12"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

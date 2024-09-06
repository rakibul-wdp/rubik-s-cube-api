import {
  Address,
  ContactAddressMap,
  ContactUsHero,
} from "@/components/page/contact-us";

const ContactUs = () => {
  return (
    <main>
      <ContactUsHero />
      <Address />
      <ContactAddressMap />
    </main>
  );
};

export default ContactUs;

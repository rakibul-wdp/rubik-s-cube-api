import { Container } from "@/components/common";

export const ContactAddressMap = () => {
  return (
    <Container className="mb-10 md:mb-16 lg:mb-28 xl:mb-[140px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24342.941259510404!2d-79.90467105380493!3d40.3008973533524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834e4f04c57f0a9%3A0x4ed533b444033cea!2sClairton%2C%20PA%2C%20USA!5e0!3m2!1sen!2sbd!4v1718418672992!5m2!1sen!2sbd"
        width="100%"
        height="600"
        style={{ border: 0, borderRadius: "20px" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Container>
  );
};

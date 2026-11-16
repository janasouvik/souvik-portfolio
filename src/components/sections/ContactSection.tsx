import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 w-full py-20 md:py-28">
      <div className="flex flex-col xl:flex-row gap-10">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}

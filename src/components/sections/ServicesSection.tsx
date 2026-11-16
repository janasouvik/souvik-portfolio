import { services } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 w-full py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

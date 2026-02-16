import { Car, Bus, Truck, Tractor, Wrench, Factory } from "lucide-react";

const services = [
  { icon: Car, title: "Osobné automobily" },
  { icon: Bus, title: "Mikrobus" },
  { icon: Truck, title: "Dodávky" },
  { icon: Bus, title: "Autobus" },
  { icon: Tractor, title: "Traktory a poľnohospodárska technika" },
  /*{ icon: Wrench, title: "Būvtehniku" },
  { icon: Factory, title: "Industriālās iekārtas" },*/,
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold mb-4 block">
            Služby
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Profesionálne čistenie DPF a katalyzátorov
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ponúkame profesionálne služby čistenia DPF a katalyzátorov pre rôzne typy vozidiel a strojov. 
            Naša moderná technológia zabezpečuje efektívne odstránenie usadenín a zlepšenie výkonu vášho motora.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/5 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

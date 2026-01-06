import { Cpu, Zap, Gauge, Leaf } from "lucide-react";
import cleaningMachine from "@/assets/cleaning-machine.jpg";

const features = [
  {
    icon: Gauge,
    title: "Atjauno līdz 100% veiktspēju",
    description: "Pilnīga filtra funkcionalitātes atjaunošana",
  },
  {
    icon: Zap,
    title: "Samazina degvielas patēriņu",
    description: "Efektīvāka dzinēja darbība",
  },
  {
    icon: Leaf,
    title: "Videi draudzīgs",
    description: "Bez filtru izgriešanas vai viltošanas",
  },
  {
    icon: Cpu,
    title: "AI diagnostika",
    description: "Precīza filtra stāvokļa analīze",
  },
];

const Technology = () => {
  return (
    <section id="services" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={cleaningMachine}
                alt="DPF tīrīšanas iekārta"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-2xl border border-border animate-pulse-glow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground">OTOMATIC AI</p>
                  <p className="text-sm text-muted-foreground">DPF PLATINUM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-semibold mb-4 block">
              Mūsu tehnoloģija
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              DPF Filtru Mazgāšana ar{" "}
              <span className="text-accent">Mākslīgā Intelekta</span> Tehnoloģiju
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Mēs esam vienīgie Latvijā, kas strādā ar OTOMATIC DPF PLATINUM AI iekārtu — augstākā līmeņa, patentētu tehnoloģiju DPF filtru atjaunošanai.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;

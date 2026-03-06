import { Phone, Cpu, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Kontaktujte nás",
    description: "Zavolajte a dohodnite si termín prípadne konzultáciu.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Skontrolujeme a otestujeme stav vášho DPF filtra",
    description: "Presná analýza stavu filtra a optimálne plánovanie procesu čistenia pomocou AI technológie.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Hĺbkové čistenie",
    description: "Filter je vyčistený so 98% účinnosťou, ku vyčistenému filtru získate protokol o vyčistení.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Výsledný efekt",
    description: "Kvalitu vyčisteného DPF filtra pocítite okamžite na výkone vášho vozidla, v prípade potreby vám poskytneme poradenstvo ohľadom správneho záchádzania s vozidlom s DPF filtrom.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-surface-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold mb-4 block">
            Ako sa to deje?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Náš pracovný postup
          </h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 h-full relative z-10">
                  {/* Number */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 mt-4 group-hover:bg-accent/20 transition-colors">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

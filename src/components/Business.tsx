import { Calendar, Rocket, Search, Handshake, FileText, Truck } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  {
    icon: Calendar,
    title: "Pravidelná údržba",
    description: "Čistenie DPF a katalyzátora pre vozové parky",
  },
  {
    icon: Rocket,
    title: "Rýchla obsluha",
    description: "Kvalitný a včasný servis podľa harmonogramu",
  },
  {
    icon: Search,
    title: "Individuálny prístup",
    description: "Flexibilné riešenia pre vaše potreby",
  },
  {
    icon: Handshake,
    title: "Dobré ceny",
    description: "Špeciálne podmienky pre partnerov",
  },
  {
    icon: FileText,
    title: "Dokumentácia",
    description: "Recenzie a záruky na prácu",
  },
  {
    icon: Truck,
    title: "Doručenie",
    description: "Príjem a dodanie filtrov",
  },
];

const advantages = [
  "Znížené nákladov na palivo a efektívnejšie stroje",
  "Dlhšia životnosť vozidiel a strojov",
  "Menej chýb systému motora",
  "Ekologické riešenie – bez rezania filtra",
];

const Business = () => {
  return (
    <section id="business" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold mb-4 block">
            Pre firmy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Čo ponúkame firmám?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">       
              Výhody pre vašu spoločnosť
              </h3>
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-foreground">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center lg:text-left">
              <p className="text-lg text-muted-foreground mb-6">
                Rýchly servis / Spoľahlivá technológia / Overené výsledky.
              </p>
              <Button asChild variant="hero" size="xl">
                <a href="tel:+421910908314">
                  Kontaktujte nás !
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
     {/*<div className="mt-24 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 text-2xl md:text-4xl font-bold text-muted-foreground/30">
              Rýchly servis / Spoľahlivá technológia / Overené výsledky /
            </span>
          ))}
        </div>
      </div>*/}
    </section>
  );
};

export default Business;

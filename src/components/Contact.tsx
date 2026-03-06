import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Map / Location */}
          <div>
            <span className="text-accent font-semibold mb-4 block">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Kde nás nájdete?
            </h2>
            <p className="text-muted-foreground mb-8">
              Naše služby sa nachádzajú v Trenčíne, kde sú ľahko dostupné pre jednotlivcov aj firmy.
            </p>

            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20982.819325962522!2d18.003415667401793!3d48.89914974278463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714a163bedb61bb%3A0x395be666fb395b6b!2sR%26B%20DPF%20s.r.o.!5e0!3m2!1ssk!2ssk!4v1771253670313!5m2!1ssk!2ssk"
                className="absolute inset-0 w-full h-full grayscale opacity-70"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">

                <a
                href="https://www.google.com/maps/dir/?api=1&destination=48.898311251816246,18.01835411054102"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                >
                Získajte trasu
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Adresa</h3>
                  <p className="text-muted-foreground">
                    Bratislavská 1011<br />
                    911 05 Trenčín - Zlatovce<br/ >
                    Slovensko
                  </p>
                  
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefón</h3>
                  <a href="tel:+421910908314" className="text-accent hover:underline">
                    +421 910 908 314
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                  <a href="mailto:info@igor.sk" className="text-accent hover:underline">
                    info@igor.sk
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Pracovná doba</h3>
                  <p className="text-muted-foreground">
                    Pondelok - Štvrtok : 9:00 - 18:00<br />
                    Piatok : 8:00 -17:00<br />
                    Sobota: Na objednávku
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

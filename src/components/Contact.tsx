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
              Kontakti
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Kur mūs atrast?
            </h2>
            <p className="text-muted-foreground mb-8">
              Mūsu serviss atrodas Rīgā, ērti pieejamā vietā gan privātpersonām, gan uzņēmumiem.
            </p>

            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.8!2d24.0!3d56.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDU0JzAwLjAiTiAyNMKwMDAnMDAuMCJF!5e0!3m2!1sen!2slv!4v1600000000000!5m2!1sen!2slv"
                className="absolute inset-0 w-full h-full grayscale opacity-70"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <ExternalLink className="w-4 h-4" />
                  Saņemt ceļa norādes
                </Button>
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
                  <h3 className="font-semibold text-foreground mb-1">Adrese</h3>
                  <p className="text-muted-foreground">
                    Jūrkalnes iela 62, A7 bokss<br />
                    Rīga, LV-1046
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Tālrunis</h3>
                  <a href="tel:+37120000000" className="text-accent hover:underline">
                    +371 2000 0000
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-pasts</h3>
                  <a href="mailto:info@dpfservis.lv" className="text-accent hover:underline">
                    info@dpfservis.lv
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Darba laiks</h3>
                  <p className="text-muted-foreground">
                    Pirmdien - Piektdien: 9:00 - 18:00<br />
                    Sestdien: pēc vienošanās
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

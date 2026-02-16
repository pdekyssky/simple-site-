import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                DPF<span className="text-accent">Servis</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Profesionálne čistenie DPF a katalyzátora s najnovšími technológiami umelej inteligencie. Vaše vozidlo bude opäť dýchať!
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+421910908314"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +421 910 908 314
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Služby</h4>
            <ul className="space-y-2">
              <li>
                <button
  onClick={() =>
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="text-muted-foreground hover:text-accent transition-colors text-left"
>
  DPF čistenie
</button>
              </li>
              <li>
                <button
  onClick={() =>
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="text-muted-foreground hover:text-accent transition-colors text-left"
>
  Čistenie katalyzátora
</button>
              </li>
              <li>
                <button
  onClick={() =>
    document.getElementById("business")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="text-muted-foreground hover:text-accent transition-colors text-left"
>
  Pre firmy
</button>
              </li>
              <li>
                <button
  onClick={() =>
    document.getElementById("process")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="text-muted-foreground hover:text-accent transition-colors text-left"
>
  Ako to funguje ?
</button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Trenčín</span>
              </li>
              <li>
                <a
                  href="tel:+421910908314"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +421 910 908 314
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@igor.sk"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@igor.sk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DPF Servis. Všetky práva vyhradené.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-accent transition-colors">
              Zásady ochrany osobných údajov
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-accent transition-colors">
              Podmienky používania
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Accent Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-medium">
              Profesionāla DPF tīrīšana ar AI tehnoloģiju
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Profesionāla DPF un katalizatoru{" "}
            <span className="text-accent">tīrīšana</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Jūsu transportlīdzekļa elpa no jauna! Mēs palīdzam novērst kvēpu filtru un katalizatoru nosprostojumus — ātri, precīzi un ar jaunākajām tehnoloģijām.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Pieteikt tīrīšanu
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Uzzināt vairāk
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">100%</p>
              <p className="text-muted-foreground text-sm">Veiktspējas atjaunošana</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">500+</p>
              <p className="text-muted-foreground text-sm">Apmierināti klienti</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">24h</p>
              <p className="text-muted-foreground text-sm">Ātra apkalpošana</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">5+</p>
              <p className="text-muted-foreground text-sm">Gadu pieredze</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

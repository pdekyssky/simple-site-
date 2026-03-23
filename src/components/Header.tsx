import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import {Link} from "react-router-dom"
import { Button } from "./ui/button";
import logo from "../assets/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Služby", id: "services" },
    { label: "Proces", id: "process" },
    {label: "Galéria", id: "gallery"},
    { label: "Pre firmy", id: "business" },
    { label: "Kontakt", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={()=> window.scrollTo({ top: 0, behavior:"smooth"})}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              {/*<img src={logo} alt="logo"  className="w-full h-full object-contain"/>*/}
            </div>
            <span className="font-bold text-xl text-foreground">
              R&B <span className="text-accent">DPF s.r.o.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
              key={link.id}
                onClick={ () => 
                  document.getElementById(link.id)?.scrollIntoView({behavior:"smooth"})
                }>
                {link.label}
                </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+421910908314" className="flex items-center gap-2 text-accent font-medium">
              <Phone className="w-4 h-4" />
              +421 910 908 314
            </a>
            <Button asChild variant="hero" size="lg">
              <a href="tel:+421910908314">
                Požiadajte o čistenie
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                key={link.id}
                onClick={ () => {
                  document.getElementById(link.id)?.scrollIntoView({behavior:"smooth"})
                  setIsOpen(false)
                }
                  
                }>
                {link.label}
                </button>
              ))}
              <Button asChild variant="hero" className="mt-2">
                <a href="tel:+421910908314">
                  Požiadajte o čistenie
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

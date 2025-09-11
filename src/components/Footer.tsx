import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Award } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Rooms & Rates", href: "#rooms" },
    { label: "Experiences", href: "#experiences" },
    { label: "Gallery", href: "#gallery" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const policies = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cancellation Policy", href: "#" },
    { label: "FAQs", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">H</span>
                </div>
                <span className="font-display text-xl font-semibold">
                  The Hornbill Lodge
                </span>
              </div>
              <p className="font-body text-background/80 max-w-md">
                Your gateway to authentic Botswana experiences. Premium comfort, warm hospitality, and unforgettable adventures in the heart of Africa's wilderness.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-body text-sm">+267 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-body text-sm">reservations@hornbilllodge.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-body text-sm">Nata Village, Botswana</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button variant="hero" size="default">
                Book Your Stay Today
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 mb-6">
              {policies.map((policy) => (
                <li key={policy.label}>
                  <a
                    href={policy.href}
                    className="font-body text-sm text-background/80 hover:text-primary transition-colors"
                  >
                    {policy.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Awards */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-primary" />
                <span className="font-body text-xs text-background/80">TripAdvisor Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-primary" />
                <span className="font-body text-xs text-background/80">Sustainable Tourism Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-background/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="font-body text-sm text-background/80">
            © {currentYear} The Hornbill Lodge. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          {/* Additional Info */}
          <div className="font-body text-xs text-background/60">
            Built with ❤️ for authentic African experiences
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
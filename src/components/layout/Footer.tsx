import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-solar">
                <Sun className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-foreground tracking-tight">
                  MAHALAKSHMI SOLAR
                </h3>
                <p className="text-xs font-medium text-primary tracking-wide">ENERGIES</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Powering your future with clean, sustainable solar energy solutions.
              Join our referral program and earn rewards.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/p/Mahalakshmi-Solar-Energies-61558430126387/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/maha.lakshmisolarenergies/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Gallery", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-heading font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Residential Solar</li>
              <li>Commercial Solar</li>
              <li>PM Surya Ghar Subsidy</li>
              <li>Solar Maintenance</li>
              <li>Referral Program</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <span>info@mahalaxmisolar.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Your City, State, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MAHALAKSHMI SOLAR ENERGIES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

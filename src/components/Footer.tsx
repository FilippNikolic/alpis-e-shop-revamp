import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Alpis doo" className="h-10 w-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-2">
              Proizvodnja etanola i povezanih proizvoda najvišeg kvaliteta.
            </p>
            <p className="text-xs font-semibold text-foreground">
              ALPIS d.o.o.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Proizvodi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/proizvodi/alkohol70"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Alkohol 70%
                </Link>
              </li>
              <li>
                <Link
                  to="/proizvodi/etanol96"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Etanol 96%
                </Link>
              </li>
              <li>
                <Link
                  to="/proizvodi/nival"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nival
                </Link>
              </li>
              <li>
                <Link
                  to="/proizvodi/nivalsept-pumpica"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nivalsept
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kompanija</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/kompanija"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  to="/o-alkoholu"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  O alkoholu
                </Link>
              </li>
              <li>
                <Link
                  to="/standardi"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Standardi i nagrade
                </Link>
              </li>
              <li>
                <Link
                  to="/karijera"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Karijera
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dunavska+77+Kovin+Srbija"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Dunavska 77, Kovin, Srbija
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+381137456600"
                  className="hover:text-primary transition-colors"
                >
                  +381 13 745 600
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:office@alpis.rs"
                  className="hover:text-primary transition-colors"
                >
                  office@alpis.rs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Alpis doo. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

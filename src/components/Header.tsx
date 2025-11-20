import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ALPIS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Početna
          </Link>
          <div className="group relative">
            <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Proizvodi
            </button>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-popover border border-border rounded-lg shadow-lg py-2">
              <Link to="/proizvodi/alkohol70" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                Alkohol 70%
              </Link>
              <Link to="/proizvodi/etanol96" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                Etanol 96%
              </Link>
              <Link to="/proizvodi/demivoda" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                Demineralizovana voda
              </Link>
              <Link to="/proizvodi/alksirce" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                Alkoholno sirće
              </Link>
            </div>
          </div>
          <Link to="/kompanija" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Kompanija
          </Link>
          <Link to="/karijera" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Karijera
          </Link>
          <Button asChild>
            <Link to="/kontakt">Kontakt</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link to="/" className="block text-sm font-medium py-2">
              Početna
            </Link>
            <div className="space-y-2">
              <div className="text-sm font-medium py-2 text-muted-foreground">Proizvodi</div>
              <Link to="/proizvodi/alkohol70" className="block text-sm py-2 pl-4">
                Alkohol 70%
              </Link>
              <Link to="/proizvodi/etanol96" className="block text-sm py-2 pl-4">
                Etanol 96%
              </Link>
              <Link to="/proizvodi/demivoda" className="block text-sm py-2 pl-4">
                Demineralizovana voda
              </Link>
              <Link to="/proizvodi/alksirce" className="block text-sm py-2 pl-4">
                Alkoholno sirće
              </Link>
            </div>
            <Link to="/kompanija" className="block text-sm font-medium py-2">
              Kompanija
            </Link>
            <Link to="/karijera" className="block text-sm font-medium py-2">
              Karijera
            </Link>
            <Button asChild className="w-full">
              <Link to="/kontakt">Kontakt</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

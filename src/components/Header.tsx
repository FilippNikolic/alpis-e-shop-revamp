import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.svg";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Alpis doo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Početna
          </Link>
          <div className="group relative">
            <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Proizvodi
            </button>
            <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-popover border border-border rounded-lg shadow-lg py-2 z-50">
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground">
                Alkohol i Etanol
              </div>
              <Link
                to="/proizvodi/alkohol70"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Alkohol 70%
              </Link>
              <Link
                to="/proizvodi/etanol96"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Etanol 96%
              </Link>
              <Link
                to="/proizvodi/tehnicki-alkohol"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Tehnički alkohol
              </Link>
              <div className="border-t border-border my-2"></div>
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground">
                Ostali proizvodi
              </div>
              <Link
                to="/proizvodi/demivoda"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Demineralizovana voda
              </Link>
              <Link
                to="/proizvodi/alksirce"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Alkoholno sirće
              </Link>
              <Link
                to="/proizvodi/nival"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Nival (tečnost za stakla)
              </Link>
              <div className="border-t border-border my-2"></div>
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground">
                Nivalsept serija
              </div>
              <Link
                to="/proizvodi/nivalsept-pumpica"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Nivalsept sa pumpicom
              </Link>
              <Link
                to="/proizvodi/nivalsept-dopuna"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Nivalsept dopuna
              </Link>
              <Link
                to="/proizvodi/nivalsept-gel"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Nivalsept gel
              </Link>
            </div>
          </div>
          <div className="group relative">
            <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              O nama
            </button>
            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-popover border border-border rounded-lg shadow-lg py-2 z-50">
              <Link
                to="/kompanija"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Kompanija
              </Link>
              <Link
                to="/o-alkoholu"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                O alkoholu
              </Link>
              <Link
                to="/standardi"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Standardi
              </Link>
              <Link
                to="/karijera"
                className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
              >
                Karijera
              </Link>
            </div>
          </div>
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
              <div className="text-sm font-medium py-2 text-muted-foreground">
                Proizvodi
              </div>
              <Link
                to="/proizvodi/alkohol70"
                className="block text-sm py-2 pl-4"
              >
                Alkohol 70%
              </Link>
              <Link
                to="/proizvodi/etanol96"
                className="block text-sm py-2 pl-4"
              >
                Etanol 96%
              </Link>
              <Link
                to="/proizvodi/demivoda"
                className="block text-sm py-2 pl-4"
              >
                Demineralizovana voda
              </Link>
              <Link
                to="/proizvodi/alksirce"
                className="block text-sm py-2 pl-4"
              >
                Alkoholno sirće
              </Link>
              <Link to="/proizvodi/nival" className="block text-sm py-2 pl-4">
                Nival
              </Link>
              <Link
                to="/proizvodi/nivalsept-pumpica"
                className="block text-sm py-2 pl-4"
              >
                Nivalsept sa pumpicom
              </Link>
              <Link
                to="/proizvodi/nivalsept-dopuna"
                className="block text-sm py-2 pl-4"
              >
                Nivalsept dopuna
              </Link>
              <Link
                to="/proizvodi/nivalsept-gel"
                className="block text-sm py-2 pl-4"
              >
                Nivalsept gel
              </Link>
            </div>
            <Link to="/o-alkoholu" className="block text-sm font-medium py-2">
              O alkoholu
            </Link>
            <Link to="/standardi" className="block text-sm font-medium py-2">
              Standardi
            </Link>
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

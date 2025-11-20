import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Etanol96 = () => {
  const specifications = [
    "Sadržaj etanola 96% v/v",
    "Visoka čistoća",
    "Zapremina: 1000 mL",
    "Rok trajanja: 2 godine",
    "Skladištiti na suvom i hladnom mestu",
  ];

  const uses = [
    "Farmaceutska industrija",
    "Hemijska industrija",
    "Proizvodnja kozmetike",
    "Laboratorijske analize",
    "Proizvodnja boja i lakova",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Etanol 96%
              </h1>
              <p className="text-xl text-white/90">
                Visokokvalitetni etanol za industrijsku upotrebu
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Opis proizvoda</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    Etanol 96% v/v je visokokvalitetni proizvod koji se koristi u različitim 
                    industrijama. Proizveden je u skladu sa najstrožijim međunarodnim 
                    standardima kvaliteta.
                  </p>
                  <p className="mb-4">
                    Ovaj etanol ima široku primenu u farmaceutskoj i hemijskoj industriji, 
                    kao i u proizvodnji kozmetičkih proizvoda. Njegova visoka čistoća 
                    garantuje odlične rezultate u svim oblastima primene.
                  </p>
                  <p>
                    Etanol 96% pakujemo u praktične boce od 1 litra koje omogućavaju 
                    jednostavnu manipulaciju i precizno doziranje.
                  </p>
                </div>

                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link to="/kontakt">Pošaljite upit</Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Specifikacije</h3>
                    <ul className="space-y-3">
                      {specifications.map((spec, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Primena</h3>
                    <ul className="space-y-3">
                      {uses.map((use, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-secondary/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Sertifikati</h3>
                    <p className="text-muted-foreground">
                      ISO 9001:2000, ISO 14001:2004, HACCP - Svi sertifikati 
                      garantuju vrhunski kvalitet i bezbednost proizvoda.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Etanol96;

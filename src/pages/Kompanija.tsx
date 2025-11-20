import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Award, Target } from "lucide-react";
import heroImg from "@/assets/hero/kompanija-hero.jpg";

const Kompanija = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative py-32 md:py-40 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                O kompaniji
              </h1>
              <p className="text-xl md:text-2xl text-white/95 animate-fade-in">
                Više od 20 godina iskustva u proizvodnji etanola
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-muted-foreground mb-6">
                  <strong className="text-foreground">Alpis doo</strong>, Dunavska 77, Kovin, Srbija
                </p>
                
                <p className="text-muted-foreground mb-6">
                  Alpis doo je moderna fabrika etanola čija je osnovna delatnost proizvodnja 
                  etanola i srodnih proizvoda. Kompanija je osnovana sa ciljem da postane 
                  vodeći proizvođač kvalitetnog etanola na domaćem i međunarodnom tržištu.
                </p>

                <p className="text-muted-foreground mb-6">
                  Naša proizvodnja je bazirana na najsavremenijoj tehnologiji i opremi koja 
                  garantuje proizvode najvišeg kvaliteta. Svi procesi su automatizovani i 
                  kontrolišu se putem kompjuterskog sistema, što omogućava preciznost i 
                  konzistentnost u proizvodnji.
                </p>

                <p className="text-muted-foreground">
                  Alpis doo poseduje sve potrebne sertifikate kvaliteta i radi u skladu sa 
                  međunarodnim standardima. Naši proizvodi su odobreni za upotrebu u različitim 
                  industrijama, od farmaceutske do prehrambene industrije.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <Building2 className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Moderna fabrika</h3>
                    <p className="text-muted-foreground">
                      Opremljena najsavremenijom tehnologijom za proizvodnju etanola 
                      i srodnih proizvoda.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <Users className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Stručan tim</h3>
                    <p className="text-muted-foreground">
                      Naš tim čine visokokvalifikovani stručnjaci sa dugogodišnjim 
                      iskustvom u industriji.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <Award className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Sertifikati</h3>
                    <p className="text-muted-foreground">
                      ISO 9001:2000, ISO 14001:2004, HACCP - garantija 
                      vrhunskog kvaliteta.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <Target className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Naša misija</h3>
                    <p className="text-muted-foreground">
                      Proizvodi najvišeg kvaliteta i zadovoljstvo naših kupaca 
                      su naš prioritet.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Kapaciteti proizvodnje</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    • Godišnja proizvodnja: više od 2 miliona litara etanola
                  </p>
                  <p>
                    • Automatizovani proizvodni proces
                  </p>
                  <p>
                    • Kontrola kvaliteta u svim fazama proizvodnje
                  </p>
                  <p>
                    • Skladišni kapaciteti za proizvodnju i distribuciju
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kompanija;

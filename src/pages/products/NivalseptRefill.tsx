import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Package, AlertCircle } from "lucide-react";

const NivalseptRefill = () => {
  const packaging = [
    "PET boca 200 ml",
    "PET boca 1 litar",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                NIVALSEPT 70% Dopuna
              </h1>
              <p className="text-xl text-white/90">
                Refil pakovanje za ekonomičnu upotrebu
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
                    <strong className="text-foreground">NIVALSEPT 70% DOPUNA</strong> je ekonomično 
                    refil pakovanje dezifinfekcijskog sredstva za ruke. Namenjena je za dopunu postojećih 
                    boca sa pumpicama ili za samostalnu upotrebu.
                  </p>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded my-6">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Uputstvo za upotrebu:
                    </h3>
                    <p className="text-sm">
                      Utrljajte jednu dozu (veličina čepa) na šake i obezbedite da su dovoljno vlažne. 
                      Ostavite da se prirodno osuši 1 min i nije potrebno ispirati NIVALSEPT 70%. 
                      Proizvod koristite po potrebi.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded my-6">
                    <h3 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Napomena:
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      NIVALSEPT 70% je namenjen samo za spoljnu upotrebu. Izbegavajte kontakt sa 
                      očima, ušima, sluzokožama (nos, usta...).
                    </p>
                  </div>
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
                    <h3 className="text-xl font-semibold mb-4">Pakovanja</h3>
                    <ul className="space-y-3">
                      {packaging.map((pack, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{pack}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-accent/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Prednosti dopune</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Ekonomično - niža cena od kompletnog pakovanja</li>
                      <li>• Ekološki prihvatljivo - smanjenje otpada</li>
                      <li>• Praktično za veće količine</li>
                      <li>• Isti kvalitet kao originalno pakovanje</li>
                      <li>• Mogućnost dopune postojećih boca</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-secondary/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Primena</h3>
                    <p className="text-muted-foreground mb-3">
                      Idealno za:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Zdravstvene ustanove</li>
                      <li>• Prehrambenu industriju</li>
                      <li>• Ugostiteljske objekte</li>
                      <li>• Predškolske ustanove</li>
                      <li>• Domaćinstva sa većom potrošnjom</li>
                    </ul>
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

export default NivalseptRefill;

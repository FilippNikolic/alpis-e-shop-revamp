import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Droplets, AlertCircle } from "lucide-react";

const NivalseptPump = () => {
  const uses = [
    "Zdravstvene ustanove",
    "Veterinarska medicina",
    "Prehrambena industrija",
    "Hotelijerstvo i ugostiteljstvo",
    "Predškolske i školske ustanove",
    "Javna higijena",
    "Kućna upotreba",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                NIVALSEPT 70% sa pumpicom
              </h1>
              <p className="text-xl text-white/90">
                Profesionalno sredstvo za dezinfekciju ruku
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
                    <strong className="text-foreground">NIVALSEPT 70%</strong> je gotov radni rastvor 
                    za dezinfekciju zdrave kože ruku u zdravstvu, veterinarskoj medicini, prehrambenoj 
                    industriji, hotelijerstvu i ugostiteljstvu, predškolskim i školskim ustanovama, 
                    javnoj higijeni, domaćinstvu, itd.
                  </p>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded my-6">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Droplets className="h-5 w-5" />
                      Uputstvo za upotrebu:
                    </h3>
                    <p className="text-sm">
                      NIVALSEPT 70% se ravnomerno prska iz boce sa mehaničkom pumpom na suve ruke, 
                      a zatim se utrljava u kožu. Potrebna doza su 2 pritiska. Ostavite proizvod 1 
                      minut da se prirodno osuši. Nije potrebno ispiranje ruku. Proizvod koristite 
                      po potrebi.
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
                    <h3 className="text-xl font-semibold mb-4">Područja primene</h3>
                    <ul className="space-y-3">
                      {uses.map((use, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-accent/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Karakteristike</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Sadržaj alkohola: 70%</li>
                      <li>• Praktična pumpica za doziranje</li>
                      <li>• Brzo se suši, bez ispiranja</li>
                      <li>• Ne oštećuje kožu ruku</li>
                      <li>• Efikasna zaštita od bakterija</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-secondary/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Sertifikovano</h3>
                    <p className="text-muted-foreground">
                      Proizvod je dermatološki testiran i odobren za redovnu upotrebu. 
                      Ispunjava sve standarde za profesionalnu upotrebu u medicini i 
                      prehrambenoj industriji.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Povezani proizvodi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-card hover:shadow-hover transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Nivalsept dopuna</h3>
                  <p className="text-muted-foreground mb-4">
                    Refil pakovanja za ekonomičnu upotrebu
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/proizvodi/nivalsept-dopuna">Saznajte više</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Nivalsept gel</h3>
                  <p className="text-muted-foreground mb-4">
                    Gel za dezinfekciju ruku, pogodno za česte primene
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/proizvodi/nivalsept-gel">Saznajte više</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Alkohol 70%</h3>
                  <p className="text-muted-foreground mb-4">
                    Dezinfekcija površina i medicinskih instrumenata
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/proizvodi/alkohol70">Saznajte više</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NivalseptPump;

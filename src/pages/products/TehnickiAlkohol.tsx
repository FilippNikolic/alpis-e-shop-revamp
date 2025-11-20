import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Factory, AlertTriangle } from "lucide-react";

const TehnickiAlkohol = () => {
  const specifications = [
    "Sadržaj etil-alkohola: prosečno 92% v/v",
    "Karakterističan miris",
    "Blago obojen",
    "Sadrži veći udeo aldehida, estara, viših alkohola i metanola",
    "Dnevna proizvodnja: oko 1800 litara",
  ];

  const uses = [
    "Mašinska industrija - odmašćivač",
    "Hemijska industrija - rastvarač",
    "Industrijska primena",
    "NIJE ZA UPOTREBU U PREHRAMBENOJ INDUSTRIJI",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Tehnički alkohol
              </h1>
              <p className="text-xl text-white/90">
                Industrijski proizvod za mašinsku i hemijsku industriju
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
                    <strong className="text-foreground">Tehnički alkohol</strong> se dobija kao 
                    nusproizvod u proizvodnom procesu etil-alkohola. Sadrži prosečno 92% v/v 
                    etil-alkohola. Ima karakterističan miris i blago je obojen.
                  </p>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded my-6">
                    <h3 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      VAŽNO UPOZORENJE:
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tehnički alkohol sadrži veći udeo aldehida, estara, viših alkohola i metanola. 
                      Upotreba u prehrambenoj industriji je <strong>ZABRANJENA</strong>.
                    </p>
                  </div>

                  <p className="mb-4">
                    Proizvod se koristi u mašinskoj i hemijskoj industriji kao odmašćivač, 
                    rastvarač i za druge industrijske potrebe. Dnevno se proizvodi oko 1800 litara.
                  </p>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded my-6">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Factory className="h-5 w-5 text-primary" />
                      Prodaja:
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tehnički alkohol se prodaje <strong>isključivo u rinfuzi (bulk)</strong>. 
                      Nije dostupan u maloprodajnim pakovanjima.
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
                    <h3 className="text-xl font-semibold mb-4">Područja primene</h3>
                    <ul className="space-y-3">
                      {uses.map((use, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className={use.includes("NIJE") ? "text-destructive font-semibold" : "text-muted-foreground"}>
                            {use}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-secondary/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Velika proizvodnja</h3>
                    <p className="text-muted-foreground">
                      Sa dnevnom proizvodnjom od oko 1800 litara, možemo da zadovoljimo 
                      potrebe velikih industrijskih potrošača. Garantujemo kontinuirano 
                      snabdevanje i stabilne količine.
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
            <h2 className="text-3xl font-bold mb-8 text-center">Slični proizvodi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-card hover:shadow-hover transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Etanol 96%</h3>
                  <p className="text-muted-foreground mb-4">
                    Visokokvalitetni etanol za farmaceutsku i hemijsku industriju
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/proizvodi/etanol96">Saznajte više</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Alkohol 70%</h3>
                  <p className="text-muted-foreground mb-4">
                    Za dezinfekciju i industrijsku primenu
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/proizvodi/alkohol70">Saznajte više</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Demineralizovana voda</h3>
                  <p className="text-muted-foreground mb-4">
                    Čista voda za industrijske procese
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/proizvodi/demivoda">Saznajte više</Link>
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

export default TehnickiAlkohol;

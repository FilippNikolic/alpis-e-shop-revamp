import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import sirceImg from "@/assets/products/sirce.png";

const Alksirce = () => {
  const specifications = [
    "Kiselost 9%",
    "Prirodan proizvod",
    "Zapremina: 1000 mL",
    "Rok trajanja: 2 godine",
    "Čuvati na sobnoj temperaturi",
  ];

  const uses = [
    "Kuvanje i priprema hrane",
    "Konzervisanje namirnica",
    "Čišćenje površina",
    "Uklanjanje kamenca",
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
                Alkoholno sirće 9%
              </h1>
              <p className="text-xl text-white/90">
                Prirodno sirće za kućnu i industrijsku upotrebu
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
                    Alkoholno sirće 9% je prirodan proizvod dobijen fermentacijom 
                    alkohola. Karakteriše ga prijatan miris i blag ukus koji ga čini 
                    idealnim za upotrebu u kuhinji.
                  </p>
                  <p className="mb-4">
                    Naše sirće se koristi za pripremu salata, konzervisanje povrća, 
                    mariniranje mesa i mnoge druge kulinarske primene. Takođe je 
                    odličan prirodan proizvod za čišćenje.
                  </p>
                  <p>
                    Proizvod je pakovan u staklene boce od 1 litra koje čuvaju 
                    kvalitet i svežinu sirćeta.
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
                    <div className="aspect-square w-full mb-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg overflow-hidden flex items-center justify-center p-6">
                      <img 
                        src={sirceImg}
                        alt="Alkoholno sirće" 
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>
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
                    <h3 className="text-xl font-semibold mb-2">Prirodan proizvod</h3>
                    <p className="text-muted-foreground">
                      Bez veštačkih dodataka i konzervansa. Prirodan proces 
                      fermentacije garantuje autentičan ukus i kvalitet.
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

export default Alksirce;

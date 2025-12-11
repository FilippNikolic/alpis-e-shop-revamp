import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Droplet, Shield } from "lucide-react";
import { RelatedProducts } from "@/components/RelatedProducts";
import nivalImg from "@/assets/products/nival-letnja-new.jpg";
import alkohol70Img from "@/assets/products/alkohol70.png";
import etanol96Img from "@/assets/products/etanol96.png";
import demivodaImg from "@/assets/products/demivoda-5l.jpg";
import nivalZimskaImg from "@/assets/products/nival-zimska-new.jpg";
import heroImg from "@/assets/hero/nival-hero.jpg";

const Nival = () => {
  const specifications = [
    "Izgled: Bistra, zelena tečnost",
    "Gustina (20°C): 0,98 g/cm³",
    "pH vrednost: 4-5",
    "Temperatura smrzavanja: -5°C",
    "Pakovanje: PET boca 2L, 5L",
  ];

  const uses = [
    "Pranje vetrobranskog stakla",
    "Čišćenje farova",
    "Pranje drugih staklenih površina vozila",
    "Efikasno uklanjanje insekata",
  ];

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
                NIVAL - Letnja tečnost
              </h1>
              <p className="text-xl md:text-2xl text-white/95 animate-fade-in">
                Tečnost za pranje stakala vozila - letnja varijanta
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Opis proizvoda</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="mb-4">
                      <strong className="text-foreground">NIVAL – Letnja tečnost za pranje stakala</strong> je 
                      tečnost prijatnog mirisa na bazi alkohola i odgovarajućih dodataka. Služi za 
                      punjenje sistema za pranje i čišćenje vetrobranskog stakla, farova i drugih 
                      staklenih površina motornih vozila u letnjoj sezoni.
                    </p>
                    <p className="mb-4">
                      Tečnost je namenjena pranju staklenih površina motornih vozila i ne oštećuje 
                      gumene i ofarbane površine vozila, a efikasno i brzo uklanja mrlje od insekata 
                      u letnjoj sezoni.
                    </p>
                    <p>
                      NIVAL tečnost obezbeđuje kristalno čisto staklo bez tragova i mrlija, 
                      čime se poboljšava vidljivost i bezbednost vožnje.
                    </p>
                  </div>
                </div>

                <Card className="shadow-card lg:block">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-semibold">Primena</h3>
                    </div>
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

                <div>
                  <Button asChild size="lg">
                    <Link to="/kontakt">Pošaljite upit</Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <div className="w-full mb-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg overflow-hidden flex items-center justify-center p-4" style={{ maxHeight: '280px' }}>
                      <img 
                        src={nivalImg}
                        alt="Nival letnja tečnost za pranje stakala" 
                        className="object-contain drop-shadow-lg"
                        style={{ maxWidth: '220px', maxHeight: '220px', width: 'auto', height: 'auto' }}
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <Droplet className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">Fizičko-hemijske osobine</h3>
                    </div>
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

                <Card className="shadow-card bg-secondary/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Prednosti</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Ne oštećuje gumu i ofarbane površine</li>
                      <li>• Prijatan miris</li>
                      <li>• Efikasno čišćenje</li>
                      <li>• Ekonomična upotreba</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <RelatedProducts products={[
          {
            name: "NIVAL Zimska",
            image: nivalZimskaImg,
            link: "/proizvodi/nival-zimska",
            description: "Zimska tečnost za vetrobranska stakla"
          },
          {
            name: "Alkohol 70%",
            image: alkohol70Img,
            link: "/proizvodi/alkohol70",
            description: "Alkohol za dezinfekciju"
          },
          {
            name: "Etanol 96%",
            image: etanol96Img,
            link: "/proizvodi/etanol96",
            description: "Visokokvalitetni etanol"
          },
          {
            name: "Demivoda",
            image: demivodaImg,
            link: "/proizvodi/demivoda",
            description: "Čista voda bez mineralnih primesa"
          }
        ]} />
      </main>

      <Footer />
    </div>
  );
};

export default Nival;

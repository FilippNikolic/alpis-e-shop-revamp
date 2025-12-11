import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Droplet, Shield } from "lucide-react";
import { RelatedProducts } from "@/components/RelatedProducts";
import odmrzivacImg from "@/assets/products/nival-odmrzivac.jpg";
import alkohol70Img from "@/assets/products/alkohol70.png";
import nivalLetnjaImg from "@/assets/products/nival-letnja.jpg";
import nivalZimskaImg from "@/assets/products/nival-zimska.jpg";
import demivodaImg from "@/assets/products/demivoda-5l.jpg";
import heroImg from "@/assets/hero/nival-hero.jpg";

const NivalOdmrzivac = () => {
  const specifications = [
    "Izgled: Bistra, plava tečnost",
    "Gustina (20°C): 0,81 g/cm³",
    "pH vrednost: 6-9",
    "Temperatura smrzavanja: -30°C",
    "Pakovanje: PET boca 0.75L",
    "Rok upotrebe: 24 meseca",
  ];

  const uses = [
    "Odmrzavanje vetrobranskog stakla",
    "Odmrzavanje bočnih stakala",
    "Odmrzavanje retrovizora",
    "Odmrzavanje brava",
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
                NIVAL Odmrzivač
              </h1>
              <p className="text-xl md:text-2xl text-white/95 animate-fade-in">
                Koncentrat za efikasno odmrzavanje stakala - 0.75L
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
                      <strong className="text-foreground">NIVAL Odmrzivač</strong> je koncentrat 
                      tečnosti za efikasno pranje vetrobrana i svih staklenih površina na vozilima.
                    </p>
                    <p className="mb-4">
                      <strong className="text-foreground">Uputstvo za upotrebu:</strong> Tečnost za odmrzavanje 
                      ravnomerno naprskati po zamrznutoj površini, ostaviti da deluje 2-3 minuta, 
                      a zatim obrisati. Po potrebi postupak ponoviti.
                    </p>
                    <p>
                      NIVAL Odmrzivač obezbeđuje brzo i efikasno uklanjanje leda i inja sa 
                      staklenih površina vozila, čime se poboljšava vidljivost i bezbednost vožnje 
                      u zimskim uslovima.
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
                        src={odmrzivacImg}
                        alt="Nival Odmrzivač" 
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
                      <li>• Brzo delovanje (2-3 minuta)</li>
                      <li>• Zaštita do -30°C</li>
                      <li>• Praktična prskalica</li>
                      <li>• Ne oštećuje staklo i gumu</li>
                      <li>• Kompaktno pakovanje</li>
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
            name: "NIVAL Letnja",
            image: nivalLetnjaImg,
            link: "/proizvodi/nival",
            description: "Letnja tečnost za vetrobranska stakla"
          },
          {
            name: "Alkohol 70%",
            image: alkohol70Img,
            link: "/proizvodi/alkohol70",
            description: "Alkohol za dezinfekciju"
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

export default NivalOdmrzivac;

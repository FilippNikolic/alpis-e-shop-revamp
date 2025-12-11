import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { RelatedProducts } from "@/components/RelatedProducts";
import demivodaImg from "@/assets/products/demivoda-5l.jpg";
import demivoda2lImg from "@/assets/products/demivoda-2l.jpg";
import alkohol70Img from "@/assets/products/alkohol70.png";
import etanol96Img from "@/assets/products/etanol96.png";
import alksirceImg from "@/assets/products/sirce.png";
import nivalImg from "@/assets/products/nival.png";
import heroImg from "@/assets/hero/demivoda-hero.jpg";

const Demivoda = () => {
  const specifications = [
    "Potpuno demineralizovana",
    "Bez mineralnih primesa",
    "pH vrednost: 6.5-7.5",
    "Pakovanje: PET boca 2L, 5L",
    "Rok trajanja: 2 godine",
  ];

  const uses = [
    "Punjenje akumulatora",
    "Pegle i parni aparati",
    "Rashladni sistemi vozila",
    "Laboratorijska upotreba",
    "Industrijski procesi",
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
                Demineralizovana voda
              </h1>
              <p className="text-xl md:text-2xl text-white/95 animate-fade-in">
                Čista voda bez mineralnih primesa
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
                      Demineralizovana voda je voda iz koje su uklonjeni svi minerali 
                      i soli. Ovaj proces se postiže specijalnim postupcima prečišćavanja 
                      koji garantuju najviši stepen čistoće.
                    </p>
                    <p className="mb-4">
                      Naša demineralizovana voda je idealna za upotrebu u akumulatorima, 
                      peglama, rashladnim sistemima i mnogim drugim primenama gde je 
                      potrebna visoka čistoća vode.
                    </p>
                    <p>
                      Proizvod dolazi u praktičnim bocama od 2 i 5 litara koje omogućavaju 
                      jednostavno rukovanje i skladištenje.
                    </p>
                  </div>
                </div>

                <Card className="shadow-card lg:block">
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

                <div>
                  <Button asChild size="lg">
                    <Link to="/kontakt">Pošaljite upit</Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <div className="w-full mb-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg overflow-hidden flex items-center justify-center p-4 gap-4" style={{ maxHeight: '280px' }}>
                      <img 
                        src={demivoda2lImg}
                        alt="Demineralizovana voda 2L" 
                        className="object-contain"
                        style={{ maxWidth: '110px', maxHeight: '220px', width: 'auto', height: 'auto' }}
                      />
                      <img 
                        src={demivodaImg}
                        alt="Demineralizovana voda 5L" 
                        className="object-contain"
                        style={{ maxWidth: '110px', maxHeight: '220px', width: 'auto', height: 'auto' }}
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

                <Card className="shadow-card bg-secondary/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Prednosti</h3>
                    <p className="text-muted-foreground">
                      Sprečava formiranje kamenca i korozije, produžava vek trajanja 
                      uređaja i sistema u kojima se koristi.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <RelatedProducts products={[
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
            name: "Alkoholno sirće",
            image: alksirceImg,
            link: "/proizvodi/alksirce",
            description: "Alkoholno sirće 9%"
          },
          {
            name: "NIVAL",
            image: nivalImg,
            link: "/proizvodi/nival",
            description: "Tekući alkohol sa glicerinom"
          }
        ]} />
      </main>

      <Footer />
    </div>
  );
};

export default Demivoda;

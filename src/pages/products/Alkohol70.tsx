import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Eye } from "lucide-react";
import { RelatedProducts } from "@/components/RelatedProducts";
import alkohol70Img from "@/assets/products/alkohol70.png";
import etanol96Img from "@/assets/products/etanol96.png";
import alksirceImg from "@/assets/products/sirce.png";
import demivodaImg from "@/assets/products/demivoda.png";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Alkohol70 = () => {
  const specifications = [
    "Sadržaj etanola 69,0-71,0 % v/v",
    "Nije za ljudsku upotrebu",
    "Zapremina: 1000 mL",
    "Rok trajanja: 2 godine",
    "Čuvati na temperaturi 15-25°C",
  ];

  const uses = [
    "Dezinfekcija površina",
    "Čišćenje medicinskih instrumenata",
    "Laboratorijska upotreba",
    "Industrijska primena",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Alkohol 70%
              </h1>
              <p className="text-xl text-white/90">
                Razblaženi alkohol za industrijsku i medicinsku upotrebu
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Opis proizvoda</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    Alkohol 70% je razblaženi etanol koji se koristi u različite svrhe. 
                    Ovaj proizvod predstavlja optimalnu koncentraciju za dezinfekciju, 
                    jer omogućava efikasno prodiranje kroz ćelijsku membranu mikroorganizama.
                  </p>
                  <p className="mb-4">
                    Proizvod je bezbedан za upotrebu na različitim površinama i materijama, 
                    čime je idealan za industrijsku primenu. Pakovan je u praktične boce 
                    od 1 litra koje omogućavaju jednostavnu upotrebu i skladištenje.
                  </p>
                  <p>
                    NAPOMENA: Proizvod nije namenjen za ljudsku upotrebu (piće).
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
                    <div className="w-full mb-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg overflow-hidden flex items-center justify-center p-4" style={{ maxHeight: '280px' }}>
                      <img 
                        src={alkohol70Img}
                        alt="Alkohol 70%" 
                        className="object-contain drop-shadow-lg"
                        style={{ maxWidth: '220px', maxHeight: '220px', width: 'auto', height: 'auto' }}
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
                    <h3 className="text-xl font-semibold mb-2">Kvalitet garantovan</h3>
                    <p className="text-muted-foreground">
                      Svi naši proizvodi su proizvedeni prema najvišim standardima 
                      kvaliteta i redovno se kontrolišu u akreditovanim laboratorijama.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <RelatedProducts products={[
          {
            name: "Etanol 96%",
            image: etanol96Img,
            link: "/proizvodi/etanol96",
            description: "Visokokvalitetni etanol za industrijsku upotrebu"
          },
          {
            name: "Demivoda",
            image: demivodaImg,
            link: "/proizvodi/demivoda",
            description: "Čista voda bez mineralnih primesa"
          },
          {
            name: "Alkoholno sirće",
            image: alksirceImg,
            link: "/proizvodi/alksirce",
            description: "Alkoholno sirće 9%"
          },
          {
            name: "NIVAL",
            image: alkohol70Img,
            link: "/proizvodi/nival",
            description: "Tečnost za pranje stakala"
          }
        ]} />
      </main>

      <Footer />
    </div>
  );
};

export default Alkohol70;

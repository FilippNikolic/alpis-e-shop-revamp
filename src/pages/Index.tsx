import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Beaker, Shield, Award, Users } from "lucide-react";
import alkohol70Img from "@/assets/products/alkohol70.png";
import etanol96Img from "@/assets/products/etanol96.png";
import demivodaImg from "@/assets/products/demivoda-2l.jpg";
import sirceImg from "@/assets/products/sirce.png";
import nivalLetnjaImg from "@/assets/products/nival-letnja-new.jpg";
import nivalZimskaImg from "@/assets/products/nival-zimska-new.jpg";
import nivalOdmrzivacImg from "@/assets/products/nival-odmrzivac-new.jpg";
import nivalseptPumpImg from "@/assets/products/nivalsept-pump.png";
import heroImg from "@/assets/hero/home-hero.jpg";

const Index = () => {
  const products = [
    {
      title: "Alkohol 70%",
      description: "Razblaženi alkohol, sadržaj etanola 69,0-71,0 % v/v",
      link: "/proizvodi/alkohol70",
      image: alkohol70Img,
    },
    {
      title: "Etanol 96%",
      description: "Visokokvalitetni etanol za industrijsku upotrebu",
      link: "/proizvodi/etanol96",
      image: etanol96Img,
    },
    {
      title: "Demineralizovana voda",
      description: "Čista voda bez mineralnih primesa",
      link: "/proizvodi/demivoda",
      image: demivodaImg,
    },
    {
      title: "Alkoholno sirće",
      description: "Alkoholno sirće 9% za kućnu upotrebu",
      link: "/proizvodi/alksirce",
      image: sirceImg,
    },
    {
      title: "NIVAL Letnja tečnost",
      description: "Tečnost za pranje stakala vozila - letnja varijanta",
      link: "/proizvodi/nival",
      image: nivalLetnjaImg,
    },
    {
      title: "NIVAL Zimska tečnost",
      description: "Tečnost za pranje stakala vozila - zimska varijanta",
      link: "/proizvodi/nival-zimska",
      image: nivalZimskaImg,
    },
    {
      title: "NIVAL Odmrzivač",
      description: "Koncentrat za odmrzavanje stakala 0.75L",
      link: "/proizvodi/nival-odmrzivac",
      image: nivalOdmrzivacImg,
    },
    {
      title: "Nivalsept sa pumpicom",
      description: "Dezinfekciono sredstvo za ruke 70%",
      link: "/proizvodi/nivalsept-pumpica",
      image: nivalseptPumpImg,
    },
  ];

  const features = [
    {
      icon: Beaker,
      title: "Visok kvalitet",
      description: "Proizvodimo proizvode najvišeg kvaliteta prema međunarodnim standardima",
    },
    {
      icon: Shield,
      title: "Sigurnost",
      description: "Svi proizvodi su testirani i odobreni za bezbednu upotrebu",
    },
    {
      icon: Award,
      title: "Sertifikati",
      description: "ISO 9001:2015, HACCP, IFS HPC, KOSHER i ISO 45001:2018",
    },
    {
      icon: Users,
      title: "Poverenje",
      description: "Više od 20 godina iskustva i pouzdanosti na tržištu",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Proizvodnja etanola i povezanih proizvoda
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/95 animate-fade-in">
                Visokokvalitetni industrijski proizvodi za različite namene
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-lg"
                  onClick={() => {
                    const element = document.getElementById('proizvodi');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Pogledajte proizvode
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/kontakt">Kontaktirajte nas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="proizvodi" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Naši proizvodi</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nudimo širok asortiman kvalitetnih proizvoda za različite industrije
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {products.map((product, index) => (
                <Card key={index} className="border-0 transition-all duration-300 group overflow-hidden">
                  <div className="aspect-square w-full bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center p-4">
                    <img 
                      src={product.image}
                      alt={product.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      style={{ maxWidth: '180px', maxHeight: '180px' }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full" size="sm">
                      <Link to={product.link}>Saznajte više</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Zainteresovani za saradnju?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Kontaktirajte nas za više informacija o našim proizvodima i uslugama
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/kontakt">Pošaljite upit</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

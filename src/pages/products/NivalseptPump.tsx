import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Droplets, AlertCircle } from "lucide-react";
import { RelatedProducts } from "@/components/RelatedProducts";
import nivalseptPumpImg from "@/assets/products/nivalsept-pump.png";
import nivalseptGelImg from "@/assets/products/nivalsept-gel.png";
import nivalseptRefillImg from "@/assets/products/nivalsept-refill.png";
import alkohol70Img from "@/assets/products/alkohol70.png";
import nivalImg from "@/assets/products/nival.png";
import heroImg from "@/assets/hero/nivalsept-hero.jpg";

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
                NIVALSEPT 70% sa pumpicom
              </h1>
              <p className="text-xl md:text-2xl text-white/95 animate-fade-in">
                Profesionalno sredstvo za dezinfekciju ruku
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
                </div>

                <Card className="shadow-card lg:block">
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
                        src={nivalseptPumpImg}
                        alt="Nivalsept sa pumpicom 1L" 
                        className="object-contain drop-shadow-lg"
                        style={{ maxWidth: '220px', maxHeight: '220px', width: 'auto', height: 'auto' }}
                      />
                    </div>
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

        <RelatedProducts products={[
          {
            name: "NIVALSEPT Gel",
            image: nivalseptGelImg,
            link: "/proizvodi/nivalsept-gel",
            description: "Gel za dezinfekciju ruku"
          },
          {
            name: "NIVALSEPT Refil",
            image: nivalseptRefillImg,
            link: "/proizvodi/nivalsept-dopuna",
            description: "Dopuna za pumpice"
          },
          {
            name: "Alkohol 70%",
            image: alkohol70Img,
            link: "/proizvodi/alkohol70",
            description: "Dezinfekcija površina"
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

export default NivalseptPump;

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Droplets, AlertCircle } from "lucide-react";
import nivalseptGelImg from "@/assets/products/nivalsept-gel.png";

const NivalseptGel = () => {
  const features = [
    "Efikasna kontrola bakterija i gljivica",
    "Gel tekstura za jednostavnu primenu",
    "Brzo se suši bez lepljenja",
    "Ne zahteva ispiranje",
    "Pogodan za česte primene",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                NIVALSEPT Gel
              </h1>
              <p className="text-xl text-white/90">
                Gel za dezinfekciju ruku
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
                    <strong className="text-foreground">Nivalsept gel za dezinfekciju</strong> zdrave 
                    kože ruku je formulisan tako da efikasno kontroliše bakterije i gljivice. Gel 
                    tekstura omogućava jednostavnu i preciznu primenu.
                  </p>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded my-6">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Droplets className="h-5 w-5" />
                      Uputstvo za upotrebu:
                    </h3>
                    <p className="text-sm">
                      Nanesete u tankom sloju na šake i ravnomerno utrljavajte 1 minut dok se čitava 
                      površina šaka ne zasiti. Za jednu upotrebu dovoljno je iscediti 1 do 2 ml gela. 
                      Ostavite proizvod da se prirodno osuši. Nije potrebno ispiranje ruku. Proizvod 
                      koristite po potrebi.
                    </p>
                  </div>

                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded my-6">
                    <h3 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Napomena:
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Samo za spoljnu upotrebu. Izbegavajte kontakt sa očima, ušima, sluzokožama 
                      (nos, usta).
                    </p>
                  </div>

                  <p className="text-muted-foreground">
                    Gel formula je posebno pogodna za osobe koje često peru i dezinfikuju ruke, 
                    jer ne isušuje kožu koliko alkoholni rastvori. Idealan je za upotrebu u 
                    zdravstvu, kozmetičkim salonima i svim oblastima gde je potrebna redovna 
                    higijena ruku.
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
                        src={nivalseptGelImg}
                        alt="Nivalsept gel" 
                        className="object-contain drop-shadow-lg"
                        style={{ maxWidth: '220px', maxHeight: '220px', width: 'auto', height: 'auto' }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Karakteristike</h3>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-accent/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Prednosti gel formule</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Blaža za kožu od alkoholnih rastvora</li>
                      <li>• Precizna primena bez prolivanja</li>
                      <li>• Dugotrajnija zaštita</li>
                      <li>• Prijatna tekstura i miris</li>
                      <li>• Ne ostavlja lepljiv osećaj</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card bg-secondary/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Područja primene</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Medicinske ustanove</li>
                      <li>• Stomatološke ordinacije</li>
                      <li>• Kozmetički saloni</li>
                      <li>• Frizerski saloni</li>
                      <li>• Prehrambena industrija</li>
                      <li>• Kućna upotreba</li>
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

export default NivalseptGel;

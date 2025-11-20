import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Beaker, GraduationCap, FlaskConical } from "lucide-react";

const OAlkoholu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                O alkoholu
              </h1>
              <p className="text-xl text-white/90">
                Obrazovna stranica o vrstama i osobinama alkohola
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-card">
                  <CardContent className="pt-6 text-center">
                    <Beaker className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Hemija</h3>
                    <p className="text-sm text-muted-foreground">
                      Organska jedinjenja sa OH grupom
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="pt-6 text-center">
                    <FlaskConical className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Vrste</h3>
                    <p className="text-sm text-muted-foreground">
                      Mono-hidroksilni i poli-hidroksilni
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="pt-6 text-center">
                    <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Klasifikacija</h3>
                    <p className="text-sm text-muted-foreground">
                      Primarni, sekundarni, tercijarni
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Šta su alkoholi?</h2>
                
                <p className="text-muted-foreground mb-6">
                  <strong className="text-foreground">Alkoholi</strong> su organska jedinjenja. Njihova 
                  molekula sadrži hidroksilnu grupu (O – kiseonik, H – vodonik) vezanu sa atomom ugljenika 
                  iz alkilne grupe.
                </p>

                <Card className="shadow-card mb-8">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Podela alkohola može se izvršiti:</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">1. Prema broju OH grupa:</h4>
                        <ul className="list-none space-y-2 ml-4">
                          <li className="text-muted-foreground">a) mono-hidroksilni (jedan OH)</li>
                          <li className="text-muted-foreground">b) poli-hidroksilni (više OH grupa)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">2. Prema položaju OH grupa:</h4>
                        <ul className="list-none space-y-2 ml-4">
                          <li className="text-muted-foreground">a) primarni (na primer, etanol)</li>
                          <li className="text-muted-foreground">b) sekundarni (na primer, 2-Propanol)</li>
                          <li className="text-muted-foreground">c) tercijarni (na primer, 2-metil-2-propanol)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-muted-foreground mb-6">
                  Prema tome, postoje mnoge vrste alkohola čije se osobine međusobno značajno razlikuju. 
                  Etanol je samo predstavnik jedne grupe alkohola. Međutim, termini alkohol i etil-alkohol 
                  se često poistovećuju i koriste kao sinonimi.
                </p>

                <h2 className="text-2xl font-bold mb-6 mt-12">Etanol - vrste i čistoća</h2>

                <Card className="shadow-card bg-muted/30">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Prema stepenu čistoće i koncentracije, etanol može biti:
                    </h3>
                    
                    <ol className="space-y-4 list-decimal ml-6">
                      <li className="text-muted-foreground">
                        <strong className="text-foreground">Sirovi etil-alkohol</strong> - sa stepenom 
                        alkohola do 88% v/v
                      </li>
                      <li className="text-muted-foreground">
                        <strong className="text-foreground">Tehnički etil-alkohol</strong> - sa stepenom 
                        od 88 do 96% v/v
                      </li>
                      <li className="text-muted-foreground">
                        <strong className="text-foreground">Rafinisani etil-alkohol</strong> - sa stepenom 
                        od 96 do 99% v/v
                      </li>
                      <li className="text-muted-foreground">
                        <strong className="text-foreground">Apsolutni etil-alkohol</strong> - sa stepenom 
                        od 99 do 99,99% v/v
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <div className="bg-secondary/30 p-8 rounded-lg mt-12">
                  <h3 className="text-xl font-semibold mb-4">Primena etanola</h3>
                  <p className="text-muted-foreground">
                    Etanol ima široku primenu u mnogim industrijama - od farmaceutske i medicinske, 
                    preko prehrambene, do hemijske industrije. Njegova univerzalnost čini ga jednim 
                    od najvažnijih industrijskih hemikalija. U Alpisu proizvodimo različite vrste i 
                    koncentracije etanola za sve industrijske potrebe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OAlkoholu;

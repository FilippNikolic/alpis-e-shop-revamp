import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Briefcase, GraduationCap, Heart, TrendingUp } from "lucide-react";

const Karijera = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Stabilnost",
      description: "Siguran posao u uspešnoj kompaniji sa dugom tradicijom",
    },
    {
      icon: GraduationCap,
      title: "Razvoj",
      description: "Mogućnost kontinuiranog učenja i profesionalnog napredovanja",
    },
    {
      icon: Heart,
      title: "Radna atmosfera",
      description: "Prijateljski tim i pozitivno radno okruženje",
    },
    {
      icon: TrendingUp,
      title: "Napredovanje",
      description: "Jasne mogućnosti za karijerni razvoj i unapređenje",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Karijera
              </h1>
              <p className="text-xl text-white/90">
                Pridružite se našem timu i gradite svoju karijeru sa nama
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Zašto raditi u Alpisu?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Alpis doo je kompanija koja ceni svoje zaposlene i pruža im prilike 
                  za profesionalni razvoj. Naš tim čine stručnjaci različitih profila 
                  koji zajedno grade uspešnu budućnost kompanije.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="shadow-card">
                      <CardContent className="pt-6">
                        <benefit.icon className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Šta tražimo?</h2>
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Stručnost:</strong> Tražimo kvalifikovane 
                        kandidate sa odgovarajućim obrazovanjem i iskustvom u industriji.
                      </p>
                      <p>
                        <strong className="text-foreground">Posvećenost:</strong> Očekujemo od zaposlenih 
                        da budu posvećeni svom poslu i da kontinuirano teže unapređenju.
                      </p>
                      <p>
                        <strong className="text-foreground">Timski rad:</strong> Sposobnost rada u timu 
                        je ključna za uspeh naše kompanije.
                      </p>
                      <p>
                        <strong className="text-foreground">Inovativnost:</strong> Cenimo kreativne ideje 
                        i inovativan pristup rešavanju problema.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Trenutne pozicije</h2>
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-6">
                      Trenutno nemamo otvorenih radnih pozicija, ali uvek tražimo talentovane 
                      ljude koji žele da se pridruže našem timu.
                    </p>
                    <p className="text-muted-foreground">
                      Možete nam poslati svoju radnu biografiju i motivaciono pismo na email 
                      adresu <strong className="text-foreground">office@alpis.rs</strong> i mi ćemo 
                      vas kontaktirati kada se ukaže odgovarajuća prilika.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-secondary/30 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Zainteresovani ste?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Kontaktirajte nas i saznajte više o mogućnostima za zapošljavanje u našoj kompaniji.
                </p>
                <Button asChild size="lg">
                  <Link to="/kontakt">Pošaljite upit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Karijera;

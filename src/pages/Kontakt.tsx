import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Kontakt = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Kontakt
              </h1>
              <p className="text-xl text-white/90">
                Slobodno nas kontaktirajte za sve informacije
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <MapPin className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Adresa</h3>
                    <p className="text-muted-foreground">
                      Dunavska 77<br />
                      26220 Kovin<br />
                      Srbija
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <Phone className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                    <p className="text-muted-foreground mb-2">
                      +381 13 745 600
                    </p>
                    <p className="text-muted-foreground">
                      +381 13 745 601
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <Mail className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">
                      office@alpis.rs
                    </p>
                    <p className="text-muted-foreground">
                      info@alpis.rs
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Radno vreme</h3>
                    <p className="text-muted-foreground mb-2">
                      Ponedeljak - Petak:<br />
                      08:00 - 16:00
                    </p>
                    <p className="text-muted-foreground">
                      Subota - Nedelja: Zatvoreno
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Pošaljite nam poruku</h2>
                  <p className="text-muted-foreground mb-6">
                    Za sva pitanja, upite o proizvodima ili poslovnu saradnju, 
                    slobodno nas kontaktirajte putem emaila ili telefona. 
                    Naš tim će vam rado odgovoriti u najkraćem mogućem roku.
                  </p>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Napomena:</strong> Za brže odgovore, 
                      molimo vas da u poruci navedete detalje o proizvodu koji vas interesuje, 
                      potrebnu količinu i vrstu pakovanja.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-12">
                <Card className="shadow-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.8!2d21.0!3d44.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ1JzAwLjAiTiAyMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2srs!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Alpis lokacija"
                      />
                    </div>
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

export default Kontakt;

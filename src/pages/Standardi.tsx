import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, CheckCircle2, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import ifsHpcImg from "@/assets/certificates/ifs-hpc.png";
import tqmImg from "@/assets/certificates/tqm.jpg";
import iso9001Img from "@/assets/certificates/iso-9001.png";
import haccpImg from "@/assets/certificates/haccp.png";
import nagrada2024Img from "@/assets/certificates/nagrada-2024.png";
import heroImg from "@/assets/hero/standardi-hero.jpg";

const Standardi = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const standards = [
    {
      icon: Shield,
      title: "IFS HPC Standard",
      description: "Međunarodni standard za proizvode za ličnu higijenu i kozmetiku",
    },
    {
      icon: Award,
      title: "HACCP Standard",
      description: "Sistem bezbednosti hrane baziran na analizi i kontroli potencijalnih opasnosti",
    },
    {
      icon: CheckCircle2,
      title: "ISO Sertifikati",
      description: "ISO 9001:2000 i ISO 14001:2004 standardi kvaliteta",
    },
  ];

  const awards = [
    {
      title: "Nagrada Privredne komore Srbije 2024",
      description: "Za poslovni uspeh u regionu u oblasti poljoprivrede i proizvodnje hrane",
      links: [
        { text: "013info.rs", url: "https://013info.rs/pancevo/drustvo/juzni-banat-privrednicima-dodeljene-godisnje-nagrade-ko-je-nagradjen-za-poslovni-uspeh/" },
        { text: "pancevac-online.rs", url: "https://pancevac-online.rs/378371/juzni-banat-urucene-godisnje-nagrade-privrednicima/" },
        { text: "rtvpancevo.rs", url: "https://rtvpancevo.rs/vest/3310/tradicionalno-urucene-godisnje-nagrade-privrednicima-juznog-banata-na-sednici-parlamenta-privrednika" },
      ]
    }
  ];

  const haccpPrinciples = [
    "Analiza potencijalnih opasnosti",
    "Identifikacija kritičnih kontrolnih tačaka (CCP)",
    "Uspostavljanje kritičnih granica za svaki CCP",
    "Uspostavljanje sistema praćenja za svaki CCP",
    "Određivanje korektivnih mera za uslove van kritičnih granica",
    "Uspostavljanje verifikacionih procedura",
    "Dokumentacija i vođenje evidencije",
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
                Standardi i nagrade
              </h1>
              <p className="text-xl md:text-2xl text-white/95 animate-fade-in">
                Sertifikati kvaliteta i priznanja za izuzetan poslovni uspeh
              </p>
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Naši standardi</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-card hover:shadow-hover transition-all">
                  <CardContent className="pt-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">IFS HPC Standard</h3>
                    <p className="text-muted-foreground">Međunarodni standard za proizvode za ličnu higijenu i kozmetiku</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-hover transition-all">
                  <CardContent className="pt-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">HACCP Standard</h3>
                    <p className="text-muted-foreground">Sistem bezbednosti hrane baziran na analizi i kontroli potencijalnih opasnosti</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-hover transition-all">
                  <CardContent className="pt-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">ISO Sertifikati</h3>
                    <p className="text-muted-foreground">ISO 9001:2015 i TQM standardi kvaliteta</p>
                  </CardContent>
                </Card>
              </div>

              {/* IFS HPC Certificate */}
              <Card className="shadow-card mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">IFS HPC Standard</h3>
                  <p className="text-muted-foreground mb-6">
                    IFS HPC (International Featured Standards Household and Personal Care) je 
                    međunarodni standard namenjen kompanijama koje proizvode proizvode za ličnu 
                    higijenu, kozmetiku i proizvode za domaćinstvo. Ovaj standard obezbeđuje 
                    usklađenost sa regulatornim zahtevima i garantuje bezbednost i kvalitet proizvoda.
                  </p>
                  
                  <h4 className="font-semibold mb-3">IFS HPC standard obuhvata:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">1. Upravljanje kvalitetom i bezbednosti proizvoda</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">2. Kontrola sirovina i ambalaže</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">3. Proizvodnja i pakovanje proizvoda</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">4. Usklađenost sa regulativom i zakonodavstvom</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">5. Higijena i mikrobiološka kontrola</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">6. Upravljanje reklamacijama i povlačenjem proizvoda</span>
                    </li>
                  </ul>

                  <Button 
                    onClick={() => setSelectedImage(ifsHpcImg)}
                    size="lg"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Pogledaj sertifikat
                  </Button>
                </CardContent>
              </Card>

              {/* ISO 9001:2015 Certificate */}
              <Card className="shadow-card mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">ISO 9001:2015 Standard</h3>
                  <p className="text-muted-foreground mb-6">
                    ISO 9001:2015 je međunarodni standard koji definiše zahteve za sistem upravljanja 
                    kvalitetom. Ovaj standard pomaže organizacijama da osiguraju da njihovi proizvodi 
                    i usluge dosljedno ispunjavaju zahteve kupaca i da se kontinuirano poboljšava 
                    kvalitet poslovanja.
                  </p>
                  
                  <h4 className="font-semibold mb-3">ISO 9001:2015 se zasniva na sledećim principima:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">1. Fokus na kupca i zadovoljenje njegovih potreba</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">2. Rukovođenje i strateško usmeravanje</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">3. Angažovanje zaposlenih na svim nivoima</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">4. Procesni pristup upravljanju</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">5. Kontinuirano poboljšanje</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">6. Donošenje odluka na osnovu podataka</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">7. Upravljanje odnosima sa dobavljačima</span>
                    </li>
                  </ul>

                  <Button 
                    onClick={() => setSelectedImage(iso9001Img)}
                    size="lg"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Pogledaj sertifikat
                  </Button>
                </CardContent>
              </Card>

              {/* HACCP Certificate */}
              <Card className="shadow-card mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">O HACCP standardu</h3>
                  <p className="text-muted-foreground mb-6">
                    HACCP je sistem bezbednosti hrane baziran na analizi i kontroli potencijalnih 
                    bioloških/mikrobioloških, hemijskih i fizičkih opasnosti kojima su izložene sirovine. 
                    Takođe se odnosi na moguće opasnosti tokom rukovanja, proizvodnje, distribucije i 
                    konzumiranja finalnih proizvoda.
                  </p>
                  
                  <h4 className="font-semibold mb-3">HACCP se zasniva na sledećim principima:</h4>
                  <ul className="space-y-2 mb-6">
                    {haccpPrinciples.map((principle, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{index + 1}. {principle}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => setSelectedImage(haccpImg)}
                    size="lg"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Pogledaj sertifikat
                  </Button>
                </CardContent>
              </Card>

              {/* TQM Certificate */}
              <Card className="shadow-card mb-12">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">TQM Sertifikat</h3>
                  <p className="text-muted-foreground mb-6">
                    TQM (Total Quality Management) je sveobuhvatni pristup upravljanju kvalitetom koji 
                    uključuje sve zaposlene u organizaciji. Ovaj pristup se fokusira na kontinuirano 
                    poboljšanje procesa, proizvoda i usluga kroz sistematski pristup koji obuhvata 
                    planiranje, kontrolu i unapređenje kvaliteta na svim nivoima organizacije.
                  </p>
                  
                  <h4 className="font-semibold mb-3">TQM pristup obuhvata:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">1. Fokus na kvalitet u svim poslovnim procesima</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">2. Uključenost svih zaposlenih u poboljšanje kvaliteta</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">3. Kontinuirano merenje i analiza performansi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">4. Sistematski pristup rešavanju problema</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">5. Izgradnja kulture kvaliteta u organizaciji</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">6. Dugoročna posvećenost upravljanju kvalitetom</span>
                    </li>
                  </ul>

                  <Button 
                    onClick={() => setSelectedImage(tqmImg)}
                    size="lg"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Pogledaj sertifikat
                  </Button>
                </CardContent>
              </Card>

              {/* Awards */}
              <h2 className="text-3xl font-bold mb-8 text-center">Nagrade i priznanja</h2>
              
              {awards.map((award, index) => (
                <Card key={index} className="shadow-card mb-8">
                  <CardContent className="pt-6">
                    <div className="flex gap-6 items-center">
                      <div className="bg-muted/30 rounded-lg overflow-hidden p-3 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={nagrada2024Img}
                          alt="Nagrada Privredne komore Srbije 2024" 
                          className="w-auto h-auto"
                          style={{ maxWidth: '120px', maxHeight: '120px' }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Award className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                            <p className="text-muted-foreground text-sm">{award.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-1 ml-13">
                          <p className="text-sm font-semibold">Više informacija:</p>
                          {award.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-primary hover:underline"
                            >
                              <ExternalLink className="h-3 w-3" />
                              {link.text}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="bg-secondary/30 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Garancija kvaliteta</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Svi naši sertifikati i standardi garantuju da naši proizvodi ispunjavaju 
                  najstrožije međunarodne standarde kvaliteta i bezbednosti. Kontinuirano 
                  radimo na poboljšanju naših procesa i održavanju visokih standarda.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Sertifikat</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Sertifikat" 
                className="max-w-full h-auto rounded-lg"
                style={{ maxHeight: '550px' }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Standardi;

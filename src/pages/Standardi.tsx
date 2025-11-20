import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, CheckCircle2, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import ifsHpcImg from "@/assets/certificates/ifs-hpc.png";
import tqmImg from "@/assets/certificates/tqm.jpg";
import iso9001Img from "@/assets/certificates/iso-9001.png";
import haccpImg from "@/assets/certificates/haccp.png";
import nagrada2024Img from "@/assets/certificates/nagrada-2024.png";

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
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Standardi i nagrade
              </h1>
              <p className="text-xl text-white/90">
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
                {standards.map((standard, index) => (
                  <Card key={index} className="shadow-card hover:shadow-hover transition-all">
                    <CardContent className="pt-6 text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <standard.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{standard.title}</h3>
                      <p className="text-muted-foreground">{standard.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Certificates Grid */}
              <h3 className="text-2xl font-bold mb-6">Naši sertifikati</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* IFS HPC Certificate */}
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-semibold mb-4">IFS HPC Sertifikat</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Međunarodni standard za proizvode za ličnu higijenu i kozmetiku
                    </p>
                    <Button 
                      onClick={() => setSelectedImage(ifsHpcImg)}
                      className="w-full"
                      variant="outline"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Pogledaj sertifikat
                    </Button>
                  </CardContent>
                </Card>

                {/* ISO 9001:2015 Certificate */}
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-semibold mb-4">ISO 9001:2015 Sertifikat</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Međunarodni standard za sisteme upravljanja kvalitetom
                    </p>
                    <Button 
                      onClick={() => setSelectedImage(iso9001Img)}
                      className="w-full"
                      variant="outline"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Pogledaj sertifikat
                    </Button>
                  </CardContent>
                </Card>

                {/* HACCP Certificate */}
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-semibold mb-4">HACCP Sertifikat</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Sistem bezbednosti hrane i analiza kritičnih kontrolnih tačaka
                    </p>
                    <Button 
                      onClick={() => setSelectedImage(haccpImg)}
                      className="w-full"
                      variant="outline"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Pogledaj sertifikat
                    </Button>
                  </CardContent>
                </Card>

                {/* TQM Certificate */}
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-semibold mb-4">TQM Sertifikat</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Total Quality Management - sveobuhvatno upravljanje kvalitetom
                    </p>
                    <Button 
                      onClick={() => setSelectedImage(tqmImg)}
                      className="w-full"
                      variant="outline"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Pogledaj sertifikat
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* HACCP Details */}
              <Card className="shadow-card mb-12">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">O HACCP standardu</h3>
                  <p className="text-muted-foreground mb-6">
                    HACCP je sistem bezbednosti hrane baziran na analizi i kontroli potencijalnih 
                    bioloških/mikrobioloških, hemijskih i fizičkih opasnosti kojima su izložene sirovine. 
                    Takođe se odnosi na moguće opasnosti tokom rukovanja, proizvodnje, distribucije i 
                    konzumiranja finalnih proizvoda.
                  </p>
                  
                  <h4 className="font-semibold mb-3">HACCP se zasniva na sledećim principima:</h4>
                  <ul className="space-y-2">
                    {haccpPrinciples.map((principle, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{index + 1}. {principle}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Awards */}
              <h2 className="text-3xl font-bold mb-8 text-center">Nagrade i priznanja</h2>
              
              {awards.map((award, index) => (
                <Card key={index} className="shadow-card mb-8">
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-[300px_1fr] gap-6 items-start">
                      <div className="bg-muted/30 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                        <img 
                          src={nagrada2024Img}
                          alt="Nagrada Privredne komore Srbije 2024" 
                          className="w-full h-auto"
                          style={{ maxWidth: '280px' }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Award className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                            <p className="text-muted-foreground">{award.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Više informacija:</p>
                          {award.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm text-primary hover:underline"
                            >
                              <ExternalLink className="h-4 w-4" />
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
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Sertifikat" 
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Standardi;

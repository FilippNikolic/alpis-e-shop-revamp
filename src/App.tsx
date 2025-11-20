import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Alkohol70 from "./pages/products/Alkohol70";
import Etanol96 from "./pages/products/Etanol96";
import Demivoda from "./pages/products/Demivoda";
import Alksirce from "./pages/products/Alksirce";
import Nival from "./pages/products/Nival";
import NivalseptPump from "./pages/products/NivalseptPump";
import NivalseptRefill from "./pages/products/NivalseptRefill";
import NivalseptGel from "./pages/products/NivalseptGel";
import TehnickiAlkohol from "./pages/products/TehnickiAlkohol";
import Kompanija from "./pages/Kompanija";
import Karijera from "./pages/Karijera";
import Kontakt from "./pages/Kontakt";
import OAlkoholu from "./pages/OAlkoholu";
import Standardi from "./pages/Standardi";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proizvodi/alkohol70" element={<Alkohol70 />} />
          <Route path="/proizvodi/etanol96" element={<Etanol96 />} />
          <Route path="/proizvodi/demivoda" element={<Demivoda />} />
          <Route path="/proizvodi/alksirce" element={<Alksirce />} />
          <Route path="/proizvodi/nival" element={<Nival />} />
          <Route path="/proizvodi/nivalsept-pumpica" element={<NivalseptPump />} />
          <Route path="/proizvodi/nivalsept-dopuna" element={<NivalseptRefill />} />
          <Route path="/proizvodi/nivalsept-gel" element={<NivalseptGel />} />
          <Route path="/proizvodi/tehnicki-alkohol" element={<TehnickiAlkohol />} />
          <Route path="/kompanija" element={<Kompanija />} />
          <Route path="/karijera" element={<Karijera />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/o-alkoholu" element={<OAlkoholu />} />
          <Route path="/standardi" element={<Standardi />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

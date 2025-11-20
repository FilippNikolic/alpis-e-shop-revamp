import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Alkohol70 from "./pages/products/Alkohol70";
import Etanol96 from "./pages/products/Etanol96";
import Demivoda from "./pages/products/Demivoda";
import Alksirce from "./pages/products/Alksirce";
import Kompanija from "./pages/Kompanija";
import Karijera from "./pages/Karijera";
import Kontakt from "./pages/Kontakt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proizvodi/alkohol70" element={<Alkohol70 />} />
          <Route path="/proizvodi/etanol96" element={<Etanol96 />} />
          <Route path="/proizvodi/demivoda" element={<Demivoda />} />
          <Route path="/proizvodi/alksirce" element={<Alksirce />} />
          <Route path="/kompanija" element={<Kompanija />} />
          <Route path="/karijera" element={<Karijera />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

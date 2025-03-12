import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import GalleryPage from "./components/GalleryPage";
import Contact from "./components/Contact";
import AboutWithConstitution from "./components/About";
import Footer from "./components/Footer";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallerypage" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/about" element={<AboutWithConstitution />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

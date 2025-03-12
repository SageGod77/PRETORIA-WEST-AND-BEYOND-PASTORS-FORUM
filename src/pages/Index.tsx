
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import GalleryComponent from "@/components/GalleryComponent";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <GalleryComponent />
      <Contact/>
    </div>
  );
};

export default Index;

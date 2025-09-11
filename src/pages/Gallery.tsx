import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lodge.jpg";
import roomImage from "@/assets/room-luxury.jpg";
import flamingosImage from "@/assets/flamingos-nata.jpg";
import pansImage from "@/assets/makgadikgadi-pans.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: heroImage, alt: "The Hornbill Lodge exterior view", category: "Lodge" },
    { src: roomImage, alt: "Luxury room interior", category: "Rooms" },
    { src: flamingosImage, alt: "Flamingos at Nata Bird Sanctuary", category: "Experiences" },
    { src: pansImage, alt: "Makgadikgadi Pans landscape", category: "Experiences" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-4 mb-8">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Photo Gallery
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Immerse yourself in the beauty of The Hornbill Lodge and the 
                spectacular landscapes that surround us.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div key={index} className="group overflow-hidden rounded-2xl bg-card shadow-premium">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      {image.category}
                    </span>
                    <p className="text-foreground/80">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Gallery;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import heroLodge from "@/assets/hero-lodge.jpg";
import roomImage from "@/assets/room-luxury.jpg";
import flamingosImage from "@/assets/flamingos-nata.jpg";
import pansImage from "@/assets/makgadikgadi-pans.jpg";
import staffImage from "@/assets/staff-welcome.jpg";
import lodgeInterior from "@/assets/lodge-interior.jpg";

const galleryImages = [
  {
    id: 1,
    src: heroLodge,
    alt: "The Hornbill Lodge exterior view",
    category: "Lodge"
  },
  {
    id: 2,
    src: roomImage,
    alt: "Luxury room interior",
    category: "Rooms"
  },
  {
    id: 3,
    src: flamingosImage,
    alt: "Flamingos at Nata Bird Sanctuary",
    category: "Wildlife"
  },
  {
    id: 4,
    src: pansImage,
    alt: "Makgadikgadi Pans landscape",
    category: "Experiences"
  },
  {
    id: 5,
    src: staffImage,
    alt: "Lodge staff welcome",
    category: "Lodge"
  },
  {
    id: 6,
    src: lodgeInterior,
    alt: "Lodge interior common area",
    category: "Lodge"
  }
];

const GalleryPreview = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Photo Gallery
            </h2>
            <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore the beauty of The Hornbill Lodge and the stunning landscapes of Botswana
            </p>
          </div>

          {/* Mosaic Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Large featured image */}
            <div className="col-span-2 row-span-2">
              <Card className="group overflow-hidden cursor-pointer h-full" onClick={() => openLightbox(0)}>
                <div className="aspect-square lg:aspect-[4/3] h-full relative overflow-hidden">
                  <img 
                    src={galleryImages[0].src} 
                    alt={galleryImages[0].alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Regular grid images */}
            {galleryImages.slice(1, 5).map((image, index) => (
              <Card key={image.id} className="group overflow-hidden cursor-pointer" onClick={() => openLightbox(index + 1)}>
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </Card>
            ))}

            {/* More photos overlay */}
            <Card className="group overflow-hidden cursor-pointer relative" onClick={() => openLightbox(5)}>
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={galleryImages[5].src} 
                  alt={galleryImages[5].alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <span className="font-display text-lg font-semibold">+20 More</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button variant="premium" size="lg">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image */}
          <div className="max-w-6xl max-h-full flex items-center justify-center">
            <img 
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Image info */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
            <p className="font-body text-sm opacity-80">
              {currentImage + 1} of {galleryImages.length}
            </p>
            <p className="font-body text-lg">
              {galleryImages[currentImage].alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPreview;
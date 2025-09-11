import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import heroLodge from "@/assets/hero-lodge.jpg";
import heroAerial from "@/assets/hero-aerial.jpg";
import heroBreakfast from "@/assets/hero-breakfast.jpg";
import lodgeInterior from "@/assets/lodge-interior.jpg";

const slides = [
  {
    image: heroLodge,
    title: "The Hornbill Lodge",
    subtitle: "Comfortable stays at the gateway to the Makgadikgadi",
    description: "Relax after a day at the Nata Bird Sanctuary — comfortable rooms, warm local hospitality, and easy booking."
  },
  {
    image: heroAerial,
    title: "African Safari Experience",
    subtitle: "Surrounded by nature's beauty in Botswana",
    description: "Experience the magic of the African wilderness from the comfort of our lodge."
  },
  {
    image: heroBreakfast,
    title: "Wake Up to Wildlife",
    subtitle: "Breakfast with a view of the savanna",
    description: "Start your day watching wildlife while enjoying our delicious breakfast spread."
  },
  {
    image: lodgeInterior,
    title: "Authentic Comfort",
    subtitle: "Traditional African charm meets modern comfort",
    description: "Unwind in our beautifully appointed spaces that reflect the spirit of Botswana."
  }
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4" />
            <span className="font-body text-sm font-medium">Nata, Botswana</span>
          </div>

          {/* Dynamic Content */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          
          <p className="font-body text-lg md:text-xl lg:text-2xl font-light mb-4 text-white/90 max-w-3xl mx-auto animate-fade-in">
            {slides[currentSlide].subtitle}
          </p>
          
          <p className="font-body text-base md:text-lg mb-8 text-white/80 max-w-2xl mx-auto animate-fade-in">
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="shadow-glow">
              Check Availability
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Explore Experiences
            </Button>
          </div>
        </div>

        {/* Quick Booking Card */}
        <Card className="max-w-4xl mx-auto bg-card/95 backdrop-blur-md shadow-premium border-border/50 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="block font-body text-sm font-medium text-foreground/80">
                Check-in
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="date"
                  className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block font-body text-sm font-medium text-foreground/80">
                Check-out
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="date"
                  className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block font-body text-sm font-medium text-foreground/80">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>
            </div>
            
            <Button variant="booking" size="lg" className="w-full">
              Search Rooms
            </Button>
          </div>
        </Card>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
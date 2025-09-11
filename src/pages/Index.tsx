import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Bed, MapPin, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import roomImage from "@/assets/room-luxury.jpg";
import flamingosImage from "@/assets/flamingos-nata.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        
        {/* Quick Overview Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/rooms">
                <Card className="group hover:shadow-premium transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                      <img 
                        src={roomImage} 
                        alt="Luxury Rooms" 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Bed className="w-5 h-5 text-primary" />
                      <h3 className="font-display text-xl font-semibold">Luxury Rooms</h3>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Comfortable accommodations with stunning views of the Makgadikgadi landscape.
                    </p>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      View Rooms
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/experiences">
                <Card className="group hover:shadow-premium transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                      <img 
                        src={flamingosImage} 
                        alt="Unique Experiences" 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="font-display text-xl font-semibold">Experiences</h3>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Discover flamingo viewing, desert adventures, and cultural encounters.
                    </p>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      Explore Activities
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/gallery">
                <Card className="group hover:shadow-premium transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-gradient-subtle flex items-center justify-center">
                      <Camera className="w-12 h-12 text-primary/60" />
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Camera className="w-5 h-5 text-primary" />
                      <h3 className="font-display text-xl font-semibold">Gallery</h3>
                    </div>
                    <p className="text-foreground/70 mb-4">
                      Browse our collection of stunning photography from the lodge and surroundings.
                    </p>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      View Gallery
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews Teaser */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                What Our Guests Say
              </h2>
              <Card className="bg-background/60 backdrop-blur-sm shadow-premium">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground/80 italic mb-6">
                    "An exceptional experience at The Hornbill Lodge. The rooms were immaculate, 
                    the staff incredibly welcoming, and the flamingo viewing was absolutely magical. 
                    We'll definitely be back!"
                  </blockquote>
                  <cite className="font-semibold text-primary">— Sarah & Michael, South Africa</cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";

const LocationMap = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative">
            <Card className="overflow-hidden shadow-premium">
              <div className="aspect-[4/3] relative overflow-hidden cursor-pointer group">
                <img 
                  src="/lovable-uploads/d5de4b96-5770-434e-8984-b76f2f9a4927.png" 
                  alt="The Hornbill Lodge location sign in Nata, Botswana"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-body text-sm">Click to view in Google Maps</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Perfect Location
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
            </div>

            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Perfectly located on the gateway to Makgadikgadi Pans, our lodge offers easy access 
              to Botswana's most spectacular natural attractions.
            </p>

            <p className="font-body text-base text-foreground/70 leading-relaxed">
              Just 20 minutes from the Nata Bird Sanctuary and 1 hour from the famous salt pans, 
              we're ideally positioned for your Botswana adventure.
            </p>

            {/* Location Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">Address</h4>
                  <p className="font-body text-sm text-foreground/70">
                    Nata-Maun Road<br />
                    Nata, Botswana
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Navigation className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">Distances</h4>
                  <p className="font-body text-sm text-foreground/70">
                    Bird Sanctuary: 20 min<br />
                    Makgadikgadi: 1 hour
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">Contact</h4>
                  <p className="font-body text-sm text-foreground/70">
                    +267 74992291<br />
                    +267 2471022
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-1">Check-in</h4>
                  <p className="font-body text-sm text-foreground/70">
                    From 2:00 PM<br />
                    Until 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="premium" size="lg">
                Get Directions
              </Button>
              <Button variant="outline" size="lg">
                View on Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, Wifi, Car, Coffee, Star } from "lucide-react";
import { Link } from "react-router-dom";
import roomImage from "@/assets/room-luxury.jpg";

const rooms = [
  {
    id: 1,
    name: "Standard Double Room",
    image: roomImage,
    price: "BWP 850",
    capacity: "2 guests",
    features: ["En-suite bathroom", "Air conditioning", "Free WiFi", "Tea/Coffee station"],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Family Suite",
    image: roomImage,
    price: "BWP 1,250",
    capacity: "4 guests",
    features: ["Two bedrooms", "Living area", "Kitchenette", "Private patio"],
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Deluxe Twin Room",
    image: roomImage,
    price: "BWP 950",
    capacity: "2 guests",
    features: ["Twin beds", "Garden view", "Mini-fridge", "Work desk"],
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: "Executive Suite",
    image: roomImage,
    price: "BWP 1,650",
    capacity: "2 guests",
    features: ["King bed", "Panoramic views", "Separate lounge", "Premium amenities"],
    rating: 5.0,
    reviews: 67
  }
];

const FeaturedRoomsCarousel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Rooms
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Comfortable accommodations designed for relaxation after your African adventures
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {rooms.map((room) => (
              <CarouselItem key={room.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="group hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Room Image */}
                    <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                      <img 
                        src={room.image} 
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Room Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {room.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-body text-sm text-foreground/70">
                            {room.rating} ({room.reviews})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-body text-sm text-foreground/70">
                          {room.capacity}
                        </span>
                      </div>

                      <ul className="space-y-1 mb-6">
                        {room.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="font-body text-sm text-foreground/70 flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-display text-2xl font-bold text-primary">
                            {room.price}
                          </span>
                          <span className="font-body text-sm text-foreground/70 ml-1">
                            / night
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          Details
                        </Button>
                        <Button variant="premium" size="sm" className="flex-1">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <Link to="/rooms">
            <Button variant="premium" size="lg">
              View All Rooms & Rates
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoomsCarousel;
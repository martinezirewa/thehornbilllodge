import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Coffee, Car, Users, BedDouble, Bath, Wind } from "lucide-react";
import roomImage from "@/assets/room-luxury.jpg";

const RoomsSection = () => {
  const rooms = [
    {
      id: 1,
      name: "Luxury Safari Suite",
      description: "Spacious suite with panoramic savanna views, king bed, and private deck overlooking the landscape.",
      image: roomImage,
      price: "P1,200",
      capacity: "2 Adults",
      amenities: ["King Bed", "Private Deck", "Ensuite Bathroom", "Air Conditioning", "WiFi", "Coffee Station"],
      features: ["Savanna Views", "Premium Linens", "Wildlife Viewing"]
    },
    {
      id: 2,
      name: "Premium Twin Room",
      description: "Comfortable twin beds perfect for friends or family, with garden views and modern amenities.",
      image: roomImage,
      price: "P950",
      capacity: "2 Adults",
      amenities: ["Twin Beds", "Garden Views", "Ensuite Bathroom", "Air Conditioning", "WiFi", "Mini Fridge"],
      features: ["Garden Views", "Twin Configuration", "Family Friendly"]
    },
    {
      id: 3,
      name: "Honeymoon Sanctuary",
      description: "Romantic retreat with four-poster bed, private outdoor shower, and exclusive sunset deck.",
      image: roomImage,
      price: "P1,600",
      capacity: "2 Adults",
      amenities: ["Four-Poster Bed", "Outdoor Shower", "Private Deck", "Romantic Décor", "WiFi", "Champagne Welcome"],
      features: ["Romantic Setting", "Private Outdoor Shower", "Sunset Deck"]
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      "King Bed": <BedDouble className="w-4 h-4" />,
      "Twin Beds": <BedDouble className="w-4 h-4" />,
      "Four-Poster Bed": <BedDouble className="w-4 h-4" />,
      "Ensuite Bathroom": <Bath className="w-4 h-4" />,
      "Outdoor Shower": <Bath className="w-4 h-4" />,
      "Air Conditioning": <Wind className="w-4 h-4" />,
      "WiFi": <Wifi className="w-4 h-4" />,
      "Coffee Station": <Coffee className="w-4 h-4" />,
      "Mini Fridge": <Coffee className="w-4 h-4" />,
      "Private Deck": <Car className="w-4 h-4" />,
    };
    return iconMap[amenity] || <Coffee className="w-4 h-4" />;
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Rooms & Accommodation
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Comfort in the Heart of Botswana
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Choose from our carefully designed rooms, each offering modern comfort with authentic African touches and stunning views of the surrounding landscape.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {rooms.map((room) => (
            <Card key={room.id} className="group overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 border-border/50">
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    From {room.price}/night
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {room.name}
                  </h3>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{room.capacity}</span>
                  </div>
                </div>
                
                <p className="font-body text-muted-foreground mb-4 text-sm">
                  {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Amenities */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-body text-sm font-semibold text-foreground">Amenities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.slice(0, 4).map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2 text-xs text-muted-foreground">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                  {room.amenities.length > 4 && (
                    <p className="text-xs text-muted-foreground">
                      +{room.amenities.length - 4} more amenities
                    </p>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button variant="booking" size="sm" className="flex-1">
                    Book Now
                  </Button>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Rooms CTA */}
        <div className="text-center">
          <Button variant="premium" size="lg">
            View All Rooms & Rates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
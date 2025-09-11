import { Card, CardContent } from "@/components/ui/card";
import { Bed, Binoculars, MapPin, Heart } from "lucide-react";

const features = [
  {
    icon: Bed,
    title: "Comfortable Rooms",
    description: "Modern amenities with authentic Botswana charm and stunning views of the surrounding landscape."
  },
  {
    icon: Binoculars,
    title: "Birdwatcher's Paradise", 
    description: "Steps away from the Nata Bird Sanctuary, perfect for spotting flamingos and other wildlife."
  },
  {
    icon: MapPin,
    title: "Tours & Experiences",
    description: "Guided trips to Makgadikgadi Pans, cultural village visits, and unforgettable safari adventures."
  },
  {
    icon: Heart,
    title: "Warm Local Hospitality",
    description: "A stay that feels like home with our friendly staff and genuine Botswana hospitality."
  }
];

const WhyStaySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Stay With Us
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the perfect blend of comfort, adventure, and authentic Botswana hospitality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-premium transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="font-body text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStaySection;
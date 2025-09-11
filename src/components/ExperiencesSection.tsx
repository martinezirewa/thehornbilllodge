import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Binoculars, Camera, Mountain } from "lucide-react";
import flamingosImage from "@/assets/flamingos-nata.jpg";
import pansImage from "@/assets/makgadikgadi-pans.jpg";

const ExperiencesSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Nata Bird Sanctuary Birding Tour",
      description: "Witness thousands of flamingos and over 165 bird species in one of Botswana's premier birding destinations.",
      image: flamingosImage,
      duration: "Half Day (4 hours)",
      groupSize: "2-8 people",
      price: "P450",
      highlights: ["Flamingo Viewing", "165+ Bird Species", "Professional Guide", "Photography Tips"],
      season: "Year-round",
      difficulty: "Easy",
      icon: <Binoculars className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Makgadikgadi Pans Expedition",
      description: "Explore the vast white salt pans, ancient baobab trees, and experience the incredible silence of this unique landscape.",
      image: pansImage,
      duration: "Full Day (8 hours)",
      groupSize: "2-6 people",
      price: "P850",
      highlights: ["Salt Pan Exploration", "Baobab Trees", "Sunset Views", "Cultural Stories"],
      season: "Dry season preferred",
      difficulty: "Moderate",
      icon: <Mountain className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Wildlife Photography Safari",
      description: "Capture stunning wildlife and landscape photography with expert guidance and insider knowledge of the best spots.",
      image: flamingosImage,
      duration: "Full Day (6-8 hours)",
      groupSize: "2-4 people",
      price: "P950",
      highlights: ["Expert Photography Guide", "Prime Locations", "Equipment Tips", "Image Review"],
      season: "Year-round",
      difficulty: "Easy to Moderate",
      icon: <Camera className="w-5 h-5" />
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Experiences & Adventures
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover the Magic of Botswana
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From world-class birding to exploring ancient salt pans, our curated experiences showcase the best of this remarkable region. Each tour is led by knowledgeable local guides.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {experiences.map((experience) => (
            <Card key={experience.id} className="group overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 border-border/50">
              <div className="relative overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground p-2 rounded-lg">
                    {experience.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">
                    From P{experience.price}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {experience.title}
                </h3>
                
                <p className="font-body text-muted-foreground mb-4 text-sm">
                  {experience.description}
                </p>

                {/* Quick Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{experience.groupSize}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-4 h-4 mr-2" />
                    <span>{experience.difficulty} • {experience.season}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-body text-sm font-semibold text-foreground mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {experience.highlights.slice(0, 3).map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {experience.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{experience.highlights.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="booking" size="sm" className="flex-1">
                    Book Experience
                  </Button>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Experiences CTA */}
        <div className="text-center">
          <Button variant="premium" size="lg">
            View All Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
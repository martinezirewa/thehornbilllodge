import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import flamingosImage from "@/assets/flamingos-nata.jpg";
import pansImage from "@/assets/makgadikgadi-pans.jpg";

const experiences = [
  {
    id: 1,
    title: "Nata Bird Sanctuary Tour",
    image: flamingosImage,
    duration: "4 hours",
    groupSize: "2-8 people",
    price: "BWP 450",
    highlights: ["Flamingo viewing", "Bird photography", "Guided walk"],
    season: "Best: Apr-Sep",
    rating: 4.9
  },
  {
    id: 2,
    title: "Makgadikgadi Pans Day Trip", 
    image: pansImage,
    duration: "8 hours",
    groupSize: "4-12 people", 
    price: "BWP 850",
    highlights: ["Salt pans exploration", "Ancient baobab trees", "Sunset views"],
    season: "Year-round",
    rating: 4.8
  },
  {
    id: 3,
    title: "Cultural Village Visit",
    image: flamingosImage,
    duration: "3 hours",
    groupSize: "2-10 people",
    price: "BWP 320",
    highlights: ["Traditional crafts", "Local cuisine", "Cultural exchange"],
    season: "Year-round", 
    rating: 4.7
  }
];

const ExperiencesGrid = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Experiences & Adventures
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover the wonders of Botswana with our carefully curated experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <Card key={experience.id} className="group hover:shadow-premium transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                {/* Experience Image */}
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg relative">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-white text-xs font-medium">{experience.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {experience.title}
                  </h3>

                  {/* Key Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm text-foreground/70">
                        {experience.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm text-foreground/70">
                        {experience.groupSize}
                      </span>
                    </div>
                  </div>

                  {/* Season Info */}
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-foreground/70">
                      {experience.season}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-body text-sm font-semibold text-foreground mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {experience.highlights.map((highlight, index) => (
                        <li key={index} className="font-body text-sm text-foreground/70 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="font-display text-xl font-bold text-primary">
                        {experience.price}
                      </span>
                      <span className="font-body text-sm text-foreground/70 ml-1">
                        / person
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Learn More
                    </Button>
                    <Button variant="premium" size="sm" className="flex-1">
                      Add to Booking
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/experiences">
            <Button variant="premium" size="lg">
              View All Experiences
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesGrid;
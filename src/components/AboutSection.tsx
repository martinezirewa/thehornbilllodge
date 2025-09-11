import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Leaf, Award, Star, MapPin } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Local Heritage",
      description: "Proudly rooted in Nata community with generations of local knowledge and warm Botswana hospitality."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Conservation Focus",
      description: "Supporting wildlife conservation and sustainable tourism practices that protect our precious ecosystems."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Guides",
      description: "Our experienced local guides share intimate knowledge of wildlife, birds, and cultural traditions."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Service",
      description: "Combining authentic African hospitality with modern comfort and attention to every detail."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "165+", label: "Bird Species Recorded" },
    { number: "98%", label: "Guest Satisfaction" },
    { number: "1000+", label: "Happy Travelers" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Story
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Where Tradition Meets Premium Hospitality
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            The Hornbill Lodge has been welcoming travelers to the heart of Botswana for over fifteen years, combining authentic local culture with world-class comfort and service.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-body text-sm font-medium text-primary">Located in Nata, Botswana</span>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              A Gateway to Africa's Natural Wonders
            </h3>
            
            <div className="space-y-4 font-body text-muted-foreground">
              <p>
                Nestled in the charming town of Nata, The Hornbill Lodge serves as your perfect base for exploring some of Botswana's most spectacular natural attractions. Just minutes from the renowned Nata Bird Sanctuary and within easy reach of the mystical Makgadikgadi Pans, our lodge offers unparalleled access to wildlife and birding experiences.
              </p>
              
              <p>
                Our family has called this region home for generations, and we're passionate about sharing its beauty with visitors from around the world. We believe in responsible tourism that benefits both our guests and the local community, ensuring that the magic of this place is preserved for future generations.
              </p>
              
              <p>
                Every room, every meal, and every experience is crafted with care, blending modern comfort with the warm spirit of Botswana hospitality. We're not just accommodation – we're your local connection to authentic African adventure.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button variant="premium" size="default">
                Learn Our Story
              </Button>
              <Button variant="outline" size="default">
                Community Projects
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card key={index} className="p-4 shadow-card hover:shadow-premium transition-all duration-300 border-border/50">
                <CardContent className="p-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {value.icon}
                    </div>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {value.title}
                    </h4>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="font-body text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Banner */}
        <Card className="bg-primary/5 border-primary/20 shadow-card">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-primary" />
              <Star className="w-6 h-6 text-primary" />
              <Star className="w-6 h-6 text-primary" />
              <Star className="w-6 h-6 text-primary" />
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              Award-Winning Hospitality
            </h3>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Recognized by TripAdvisor as a Certificate of Excellence winner and featured in leading travel guides for our exceptional service and authentic experiences in the heart of Botswana.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
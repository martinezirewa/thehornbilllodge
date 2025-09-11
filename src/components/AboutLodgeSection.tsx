import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import staffImage from "@/assets/staff-welcome.jpg";

const AboutLodgeSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-premium">
              <div className="aspect-[4/3]">
                <img 
                  src={staffImage} 
                  alt="The Hornbill Lodge staff welcoming guests"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About The Lodge
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-6"></div>
            </div>

            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Nestled at the gateway to the magnificent Makgadikgadi Pans, The Hornbill Lodge 
              has been welcoming travelers for over a decade with authentic Botswana hospitality.
            </p>

            <p className="font-body text-base text-foreground/70 leading-relaxed">
              Our story began with a simple vision: to create a comfortable haven where guests 
              can experience the raw beauty of Botswana while enjoying modern amenities and 
              warm, personalized service. From our strategic location near the Nata Bird 
              Sanctuary to our commitment to sustainable tourism, every aspect of our lodge 
              reflects our deep love for this incredible landscape.
            </p>

            <p className="font-body text-base text-foreground/70 leading-relaxed">
              We pride ourselves on supporting local communities and conservation efforts, 
              ensuring that your stay contributes to the preservation of this unique ecosystem 
              for future generations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/about">
                <Button variant="premium" size="lg">
                  Discover Our Story
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLodgeSection;
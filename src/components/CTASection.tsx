import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageCircle } from "lucide-react";
import heroAerial from "@/assets/hero-aerial.jpg";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroAerial})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Adventure in Botswana Starts Here
          </h2>
          
          <p className="font-body text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't just dream about the perfect African getaway. Experience the magic of 
            Makgadikgadi Pans and the wonder of flamingo migrations at The Hornbill Lodge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="shadow-glow group">
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Check Availability & Book Now
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20 group">
              <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Call Us: +267 621 1234
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="font-display text-2xl font-bold mb-2">Free Cancellation</div>
              <p className="font-body text-white/80 text-sm">Cancel up to 48 hours before check-in</p>
            </div>
            
            <div className="text-center">
              <div className="font-display text-2xl font-bold mb-2">Best Price Guarantee</div>
              <p className="font-body text-white/80 text-sm">We'll match any lower price you find</p>
            </div>
            
            <div className="text-center">
              <div className="font-display text-2xl font-bold mb-2">24/7 Support</div>
              <p className="font-body text-white/80 text-sm">Our team is here to help anytime</p>
            </div>
          </div>

          {/* WhatsApp Quick Contact */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="font-body text-white/90 mb-4">
              Need help planning your stay? Chat with us instantly!
            </p>
            <Button variant="outline" size="lg" className="bg-green-600/20 border-green-400/50 text-white hover:bg-green-600/30 group">
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
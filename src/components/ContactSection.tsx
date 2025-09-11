import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact & Location
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Plan Your Perfect Stay
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Ready to experience the magic of Botswana? Get in touch with our friendly team to book your stay or plan your perfect safari adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+267 123 456 789</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 for reservations</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">reservations@hornbilllodge.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 4 hours</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+267 123 456 789</p>
                    <p className="text-sm text-muted-foreground">Instant chat support</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">Nata Village, Botswana</p>
                    <p className="text-sm text-muted-foreground">5 minutes from Nata Bird Sanctuary</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground mb-1">Reception Hours</h4>
                    <p className="text-muted-foreground">6:00 AM - 10:00 PM daily</p>
                    <p className="text-sm text-muted-foreground">Emergency contact available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <h4 className="font-body font-semibold text-foreground">Quick Actions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button variant="booking" size="default" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="premium" size="default" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-premium border-border/50">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-body text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name"
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+267 xxx xxx xxx"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <select className="w-full h-11 px-4 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Room Reservation</option>
                    <option>Experience Booking</option>
                    <option>General Information</option>
                    <option>Group Booking</option>
                    <option>Special Requests</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-body text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your travel dates, preferences, or any questions you have..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button variant="booking" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-card">
            <div className="bg-muted/30 p-8 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                Find Us in Nata
              </h3>
              <p className="font-body text-muted-foreground mb-4 max-w-2xl mx-auto">
                The Hornbill Lodge is conveniently located in Nata village, just 5 minutes from the famous Nata Bird Sanctuary and 45 minutes from Makgadikgadi Pans National Park.
              </p>
              <Button variant="outline" size="default">
                Get Directions
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
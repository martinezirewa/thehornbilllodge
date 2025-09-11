import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Check, ArrowRight } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-background/90 backdrop-blur-sm shadow-premium">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Thank You for Subscribing!
              </h3>
              <p className="font-body text-foreground/70">
                You'll receive our latest travel tips, seasonal specials, and lodge updates. 
                We can't wait to share Botswana's wonders with you!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-background/90 backdrop-blur-sm shadow-premium">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Stay in Touch with The Hornbill Lodge
                </h2>
                
                <p className="font-body text-lg text-foreground/80 mb-6">
                  Receive travel tips, seasonal specials, and lodge updates. Be the first to know 
                  about new experiences and exclusive offers for your next Botswana adventure.
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-foreground/70">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    <span className="font-body">Exclusive booking discounts</span>
                  </li>
                  <li className="flex items-center text-foreground/70">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    <span className="font-body">Seasonal birding updates</span>
                  </li>
                  <li className="flex items-center text-foreground/70">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    <span className="font-body">Local travel tips & guides</span>
                  </li>
                  <li className="flex items-center text-foreground/70">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    <span className="font-body">New experience announcements</span>
                  </li>
                </ul>
              </div>

              {/* Newsletter Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full h-12 pl-12 pr-4 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="lg" 
                    className="w-full group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span>Subscribing...</span>
                    ) : (
                      <>
                        <span>Join the Journey</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="font-body text-xs text-foreground/60 mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time. 
                  <br />
                  By subscribing, you agree to our Privacy Policy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
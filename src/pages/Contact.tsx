import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-4 mb-8">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-foreground/60 hover:text-primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Ready to plan your stay? Contact our team for personalized assistance 
                with bookings, experiences, and any questions you may have.
              </p>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
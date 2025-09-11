import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
                Our Story
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Discover the heart of The Hornbill Lodge and our commitment to 
                exceptional hospitality in one of Botswana's most spectacular locations.
              </p>
            </div>
          </div>
        </section>
        <AboutSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
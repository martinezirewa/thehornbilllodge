import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import WhyStaySection from "@/components/WhyStaySection";
import AboutLodgeSection from "@/components/AboutLodgeSection";
import FeaturedRoomsCarousel from "@/components/FeaturedRoomsCarousel";
import ExperiencesGrid from "@/components/ExperiencesGrid";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import GalleryPreview from "@/components/GalleryPreview";
import LocationMap from "@/components/LocationMap";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* 1. Hero Section with Slideshow */}
        <HeroSlideshow />
        
        {/* 2. About the Lodge */}
        <AboutLodgeSection />

        {/* 3. Why Stay With Us */}
        <WhyStaySection />

        {/* 4. Featured Rooms Carousel */}
        <FeaturedRoomsCarousel />

        {/* 5. Experiences & Adventures */}
        <ExperiencesGrid />

        {/* 6. Guest Reviews & Testimonials */}
        <TestimonialsCarousel />

        {/* 7. Photo Gallery Preview */}
        <GalleryPreview />

        {/* 8. Interactive Map + Location */}
        <LocationMap />

        {/* 9. Blog / Travel Guide Preview */}
        <BlogPreview />

        {/* 10. Call-to-Action Section */}
        <CTASection />

        {/* 11. Newsletter Signup */}
        <NewsletterSection />
      </main>
      
      {/* 12. Premium Footer */}
      <Footer />
      
      {/* Premium Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
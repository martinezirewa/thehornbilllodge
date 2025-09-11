import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "An exceptional experience at The Hornbill Lodge. The rooms were immaculate, the staff incredibly welcoming, and the flamingo viewing was absolutely magical. We'll definitely be back!",
    author: "Sarah & Michael",
    location: "South Africa",
    rating: 5,
    experience: "Family vacation"
  },
  {
    id: 2,
    text: "Perfect location for birdwatching enthusiasts! The lodge arranged early morning trips to the sanctuary, and we saw thousands of flamingos. The breakfast with a view was unforgettable.",
    author: "Dr. James Wilson",
    location: "United Kingdom", 
    rating: 5,
    experience: "Birding tour"
  },
  {
    id: 3,
    text: "Outstanding hospitality and genuine warmth from the entire team. The Makgadikgadi trip exceeded our expectations, and the lodge felt like a home away from home. Highly recommend!",
    author: "Maria & Carlos",
    location: "Germany",
    rating: 5,
    experience: "Adventure safari"
  },
  {
    id: 4,
    text: "Clean, comfortable rooms with beautiful views. The staff went above and beyond to make our stay special. The cultural village visit was a highlight of our Botswana journey.",
    author: "Jennifer & Tom",
    location: "Australia",
    rating: 5,
    experience: "Cultural exploration"
  }
];

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="font-body text-lg text-foreground/80 ml-2">
              4.9 out of 5 (328 reviews)
            </span>
          </div>
          <p className="font-body text-lg text-foreground/70">
            Rated excellent on TripAdvisor and Google Reviews
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`transition-all duration-500 transform ${
                  index === currentTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute inset-0 translate-x-full'
                } bg-background/90 backdrop-blur-sm shadow-premium`}
              >
                <CardContent className="p-8 md:p-12 text-center">
                  <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                  
                  <blockquote className="font-body text-lg md:text-xl text-foreground/80 italic leading-relaxed mb-8">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <cite className="font-display text-xl font-semibold text-primary not-italic">
                    — {testimonial.author}
                  </cite>
                  <p className="font-body text-foreground/70 mt-1">
                    {testimonial.location} • {testimonial.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-border">
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-primary">TripAdvisor</div>
            <div className="font-body text-sm text-foreground/70">Certificate of Excellence</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-primary">Google</div>
            <div className="font-body text-sm text-foreground/70">4.9★ Rating</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-primary">Booking.com</div>
            <div className="font-body text-sm text-foreground/70">Guest Favorite</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
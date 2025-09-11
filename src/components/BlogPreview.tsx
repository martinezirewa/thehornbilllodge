import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import flamingosImage from "@/assets/flamingos-nata.jpg";
import pansImage from "@/assets/makgadikgadi-pans.jpg";
import lodgeInterior from "@/assets/lodge-interior.jpg";

const blogPosts = [
  {
    id: 1,
    title: "When to See Flamingos at Nata Bird Sanctuary",
    excerpt: "Discover the best times of year to witness thousands of flamingos in their natural habitat at the Nata Bird Sanctuary.",
    image: flamingosImage,
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Wildlife"
  },
  {
    id: 2,
    title: "Self-Drive Safari Routes Through Botswana",
    excerpt: "Complete guide to planning your own safari adventure, including route recommendations and essential tips for driving in Botswana.",
    image: pansImage,
    date: "March 10, 2024", 
    readTime: "8 min read",
    category: "Travel Guide"
  },
  {
    id: 3,
    title: "Packing List for Kalahari Road-Trippers",
    excerpt: "Essential items to pack for your Botswana adventure, from clothing to equipment, ensuring you're prepared for any situation.",
    image: lodgeInterior,
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Travel Tips"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Travel Guide & Tips
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Expert insights and practical advice for your Botswana adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-premium transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                {/* Featured Image */}
                <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-body text-foreground/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-foreground/60 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
                    <span className="font-body font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="premium" size="lg">
            Read More Travel Tips
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
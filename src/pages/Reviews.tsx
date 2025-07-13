import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { Button } from "@/components/ui/button";

const stats = [
  { number: "200+", label: "Happy Students" },
  { number: "4.8/5", label: "Average Rating" },
  { number: "95%", label: "Course Completion Rate" },
  { number: "2+", label: "Years of Excellence" },
];

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      const response = await fetch("https://thaibridge.app.n8n.cloud/webhook/get-reviews");
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
      setLoading(false);
    }
    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-thai-gold fill-current" : "text-gray-300"}`}
      />
    ));
  };



  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <SectionWrapper sectionIndex={1} variant="hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Student Reviews
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed mb-8 animate-slide-up">
              Hear from our students about their Thai learning journey with
              ThaiBridge Academy
            </p>

            {/* Overall Rating */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto animate-slide-up">
              <div className="flex items-center justify-center gap-2 mb-4">
                {renderStars(5)}
                <span className="text-2xl font-bold ml-2">4.8</span>
              </div>
              <p className="text-thai-text-secondary text-lg">
                Based on 200+ verified student reviews
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper sectionIndex={2}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary font-display mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Reviews Grid */}
      <SectionWrapper sectionIndex={3}>
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
            What Our Students Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {loading ? (
              <div>Loading reviews...</div>
            ) : (
              reviews.map((review: any) => (
                <Card key={review.id} className="shadow-thai-medium hover:shadow-thai-strong transition-thai">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-thai-text-dark">{review.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {format(new Date(review.created_at), 'dd MMM yyyy')}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      {/* Course Badge */}
                      <Badge variant="outline" className="text-xs">{review.course_taken}</Badge>
                      {/* Highlight */}
                      <div className="bg-thai-light-tint p-3 rounded-lg">
                        <p className="text-sm font-medium text-primary">
                          "{review.highlight}"
                        </p>
                      </div>
                      {/* Review Text */}
                      <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* Leave a Review Section */}
      <SectionWrapper sectionIndex={4} variant="gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-thai-text-dark mb-4">
                Share Your Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Help future students by sharing your ThaiBridge Academy journey. Your feedback helps us improve and guides others in their Thai learning adventure.
              </p>
              
              {/* Social Proof */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
                <div className="flex flex-col items-center text-center p-4 bg-thai-light-tint rounded-lg border border-thai-gold/20 hover:border-thai-gold/40 transition-thai group">
                  <div className="w-10 h-10 bg-thai-gold/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-thai-gold/30 transition-thai">
                    <Star className="w-5 h-5 text-thai-gold fill-current" />
                  </div>
                  <span className="font-semibold text-thai-text-dark">200+ Reviews</span>
                  <span className="text-sm text-muted-foreground">Verified experiences</span>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 bg-thai-light-tint rounded-lg border border-thai-gold/20 hover:border-thai-gold/40 transition-thai group">
                  <div className="w-10 h-10 bg-thai-gold/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-thai-gold/30 transition-thai">
                    <span className="text-lg">⚡</span>
                  </div>
                  <span className="font-semibold text-thai-text-dark">Under 3 Minutes</span>
                  <span className="text-sm text-muted-foreground">Quick & easy</span>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 bg-thai-light-tint rounded-lg border border-thai-gold/20 hover:border-thai-gold/40 transition-thai group">
                  <div className="w-10 h-10 bg-thai-gold/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-thai-gold/30 transition-thai">
                    <span className="text-lg">👥</span>
                  </div>
                  <span className="font-semibold text-thai-text-dark">Help Others</span>
                  <span className="text-sm text-muted-foreground">Support learners</span>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-thai-gold hover:bg-thai-gold/90 text-thai-forest-dark font-semibold shadow-thai-medium hover:shadow-thai-strong transition-all duration-200"
              onClick={() => window.open('https://thaibridge.app.n8n.cloud/form/145db122-0763-4660-9d68-11781099a011', '_blank')}
            >
              Leave a Review
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper sectionIndex={5} variant="cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-thai-text-secondary mb-8 max-w-2xl mx-auto">
            Experience the ThaiBridge difference for yourself. Start your Thai
            learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/courses")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-thai"
            >
              View Our Courses
            </button>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold transition-thai"
            >
              Book Trial Class
            </button>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}

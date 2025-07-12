import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { number: "200+", label: "Happy Students" },
  { number: "4.8/5", label: "Average Rating" },
  { number: "95%", label: "Course Completion Rate" },
  { number: "3+", label: "Years of Excellence" },
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

  // Animation state for Leave a Review button
  const [popIn, setPopIn] = useState(false);
  useEffect(() => {
    setPopIn(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-thai-forest-deep text-white py-24">
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
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-thai-light-tint">
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
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
            What Our Students Say
          </h2>

          <div className="flex flex-col items-center mb-10">
            <a
              href="https://thaibridge.app.n8n.cloud/form/145db122-0763-4660-9d68-11781099a011"
              target="_blank"
              rel="noopener noreferrer"
              className={`leave-review-btn bg-thai-gold hover:bg-thai-gold/90 text-thai-forest-dark font-semibold px-8 py-3 rounded-lg shadow-thai-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-thai-gold focus:ring-offset-2${popIn ? " pop-in" : ""}`}
              style={{ minWidth: 200, textAlign: "center" }}
            >
              Leave a Review
            </a>
            <span className="mt-3 text-thai-text-secondary text-sm text-center whitespace-nowrap">
              We value your feedback! ☺️ Kindly share your experience with us and help others on their Thai learning journey.
            </span>
          </div>

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
                            {new Date(review.created_at).toLocaleDateString()}
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
      </section>

      {/* CTA Section */}
      <section className="bg-thai-forest-deep text-white py-16">
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
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

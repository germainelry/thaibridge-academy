import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Chen",
    course: "1 to 1 Private Coaching",
    rating: 5,
    date: "2 months ago",
    review: "The personalized approach really made the difference for me. My instructor was patient and adapted the lessons to my learning style. After 3 months, I can confidently have basic conversations with Thai locals during my travels.",
    highlight: "Excellent personalized teaching"
  },
  {
    id: 2,
    name: "Marcus Lim",
    course: "Corporate Training",
    rating: 5,
    date: "1 month ago",
    review: "Our team completed the corporate training program before our Thailand business expansion. The cultural insights were just as valuable as the language skills. Highly recommend for any business dealing with Thai partners.",
    highlight: "Great for business applications"
  },
  {
    id: 3,
    name: "Jennifer Wong",
    course: "Immersion Program",
    rating: 5,
    date: "3 months ago",
    review: "The immersion program in Chiang Mai was life-changing! Living with a host family while taking daily lessons gave me real-world practice. I came back speaking Thai with much more confidence.",
    highlight: "Authentic cultural experience"
  },
  {
    id: 4,
    name: "David Tan",
    course: "1 to 1 Private Coaching",
    rating: 5,
    date: "2 weeks ago",
    review: "Started from zero Thai knowledge and now I can read basic Thai script and have simple conversations. The flexible scheduling worked perfectly with my busy work life. Worth every dollar!",
    highlight: "Flexible and effective"
  },
  {
    id: 5,
    name: "Rachel Lee",
    course: "Corporate Training",
    rating: 4,
    date: "1 month ago",
    review: "Great program for our hospitality team. The instructors understood our industry needs and tailored the vocabulary accordingly. Our Thai guests appreciate the effort we make to speak their language.",
    highlight: "Industry-specific training"
  },
  {
    id: 6,
    name: "Andrew Ng",
    course: "1 to 1 Private Coaching",
    rating: 5,
    date: "3 weeks ago",
    review: "I've tried other language schools before, but ThaiBridge's native instructors and structured approach made all the difference. The cultural context they provide helps me understand not just what to say, but when and how to say it.",
    highlight: "Cultural context is invaluable"
  },
  {
    id: 7,
    name: "Michelle Kumar",
    course: "Immersion Program",
    rating: 5,
    date: "4 months ago",
    review: "The 2-week immersion program exceeded my expectations. From temple visits to cooking classes - every activity was a learning opportunity. I felt supported throughout and came back with lifelong memories.",
    highlight: "Exceeded expectations"
  },
  {
    id: 8,
    name: "Kevin Phua",
    course: "1 to 1 Private Coaching",
    rating: 4,
    date: "1 week ago",
    review: "Solid teaching methodology and very patient instructors. The lesson recordings are helpful for review. My only suggestion would be more interactive group activities, but overall very satisfied.",
    highlight: "Solid methodology"
  }
];

const stats = [
  { number: "200+", label: "Happy Students" },
  { number: "4.8/5", label: "Average Rating" },
  { number: "95%", label: "Course Completion Rate" },
  { number: "3+", label: "Years of Excellence" }
];

export default function Reviews() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-thai-gold fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-thai-forest-deep text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Student Reviews
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed mb-8">
              Hear from our students about their Thai learning journey with ThaiBridge Academy
            </p>
            
            {/* Overall Rating */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="shadow-thai-medium hover:shadow-thai-strong transition-thai">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-thai-text-dark">{review.name}</h3>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    
                    {/* Course Badge */}
                    <Badge variant="outline" className="text-xs">
                      {review.course}
                    </Badge>
                    
                    {/* Highlight */}
                    <div className="bg-thai-light-tint p-3 rounded-lg">
                      <p className="text-sm font-medium text-primary">
                        "{review.highlight}"
                      </p>
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-muted-foreground leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            Experience the ThaiBridge difference for yourself. Start your Thai learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/courses'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-thai"
            >
              View Our Courses
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold transition-thai"
            >
              Book Free Trial
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

type ReviewFilter = "all" | "private" | "mastery" | "traveller";

interface Review {
  id: number;
  name: string;
  course: string;
  rating: number;
  review: string;
  date: string;
  avatar: string;
  category: ReviewFilter;
}

const sampleReviews: Review[] = [
  {
    id: 1,
    name: "Sarah Chen",
    course: "1-to-1 Private Coaching",
    rating: 5,
    review: "Amazing personalized experience! My instructor was so patient and tailored lessons to my travel goals. I can now confidently order food and ask for directions in Bangkok.",
    date: "November 2024",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    category: "private"
  },
  {
    id: 2,
    name: "Marcus Tan",
    course: "Thai Mastery Series",
    rating: 5,
    review: "The structured approach to learning Thai script was incredible. I never thought I'd be able to read Thai, but now I can navigate street signs and menus easily.",
    date: "October 2024",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    category: "mastery"
  },
  {
    id: 3,
    name: "Linda Wong",
    course: "Basic Traveller's Pack",
    rating: 5,
    review: "Perfect crash course before my Thailand trip! Learned essential phrases quickly and the cultural tips were invaluable. Locals appreciated my efforts to speak Thai.",
    date: "September 2024",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    category: "traveller"
  },
  {
    id: 4,
    name: "David Lim",
    course: "1-to-1 Private Coaching",
    rating: 5,
    review: "Flexible scheduling was perfect for my busy work life. My instructor understood my business needs and taught me professional Thai phrases for client meetings.",
    date: "October 2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    category: "private"
  },
  {
    id: 5,
    name: "Priya Sharma",
    course: "Thai Mastery Series",
    rating: 4,
    review: "Comprehensive program that builds strong foundations. The progression from speaking to reading was well-structured. Highly recommend for serious learners.",
    date: "August 2024",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    category: "mastery"
  },
  {
    id: 6,
    name: "James Ko",
    course: "Basic Traveller's Pack",
    rating: 5,
    review: "Exceeded expectations! Not just language but cultural insights that made my Bangkok experience so much richer. The community tips were spot-on.",
    date: "September 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    category: "traveller"
  },
  {
    id: 7,
    name: "Rachel Ng",
    course: "1-to-1 Private Coaching",
    rating: 5,
    review: "My instructor became like a cultural mentor. Beyond language, I learned about Thai customs and etiquette that helped me connect with locals authentically.",
    date: "November 2024",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    category: "private"
  },
  {
    id: 8,
    name: "Alex Chen",
    course: "Thai Mastery Series",
    rating: 4,
    review: "Great systematic approach to Thai language learning. The writing system seemed impossible at first, but their teaching method made it manageable and fun.",
    date: "July 2024",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    category: "mastery"
  },
  {
    id: 9,
    name: "Michelle Tan",
    course: "Basic Traveller's Pack",
    rating: 5,
    review: "Quick and effective! Learned enough Thai in just a few weeks to enhance my Phuket vacation. The pronunciation tips were especially helpful.",
    date: "August 2024",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    category: "traveller"
  },
  {
    id: 10,
    name: "Ryan Goh",
    course: "1-to-1 Private Coaching",
    rating: 5,
    review: "The flexibility and personal attention made all the difference. I could focus on areas I struggled with most, and the progress was remarkable.",
    date: "October 2024",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    category: "private"
  },
  {
    id: 11,
    name: "Sophie Liu",
    course: "Thai Mastery Series",
    rating: 5,
    review: "Comprehensive and well-structured course. The progression felt natural and the instructors were incredibly knowledgeable about Thai language nuances.",
    date: "September 2024",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    category: "mastery"
  },
  {
    id: 12,
    name: "Kevin Ong",
    course: "Basic Traveller's Pack",
    rating: 4,
    review: "Perfect introduction to Thai language and culture. The course prepared me well for my first trip to Thailand and made interactions so much more meaningful.",
    date: "July 2024",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    category: "traveller"
  }
];

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState<ReviewFilter>("all");

  const filteredReviews = activeFilter === "all" 
    ? sampleReviews 
    : sampleReviews.filter(review => review.category === activeFilter);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "text-thai-accent-gold fill-thai-accent-gold" : "text-thai-neutral-medium"
            }`}
          />
        ))}
      </div>
    );
  };

  const getCourseDisplayName = (course: string) => {
    switch (course) {
      case "1-to-1 Private Coaching":
        return "Private Coaching";
      case "Thai Mastery Series":
        return "Thai Mastery";
      case "Basic Traveller's Pack":
        return "Traveller's Pack";
      default:
        return course;
    }
  };

  return (
    <div className="min-h-screen bg-thai-card-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-thai-deep-forest">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-hero font-bold text-white mb-4 animate-fade-in">
            What Our Students Say
          </h1>
          <p className="font-primary text-lg font-normal text-thai-text-secondary max-w-3xl mx-auto animate-fade-in">
            Discover why over 200 students have chosen ThaiBridge Academy to begin their Thai language journey
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-thai-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className={`font-primary text-sm font-medium ${
                activeFilter === "all"
                  ? "bg-thai-button-fresh hover:bg-thai-button-sage text-white"
                  : "border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white"
              } rounded-full px-6 py-2`}
            >
              All Reviews
            </Button>
            <Button
              variant={activeFilter === "private" ? "default" : "outline"}
              onClick={() => setActiveFilter("private")}
              className={`font-primary text-sm font-medium ${
                activeFilter === "private"
                  ? "bg-thai-button-fresh hover:bg-thai-button-sage text-white"
                  : "border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white"
              } rounded-full px-6 py-2`}
            >
              Private Coaching
            </Button>
            <Button
              variant={activeFilter === "mastery" ? "default" : "outline"}
              onClick={() => setActiveFilter("mastery")}
              className={`font-primary text-sm font-medium ${
                activeFilter === "mastery"
                  ? "bg-thai-button-fresh hover:bg-thai-button-sage text-white"
                  : "border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white"
              } rounded-full px-6 py-2`}
            >
              Thai Mastery
            </Button>
            <Button
              variant={activeFilter === "traveller" ? "default" : "outline"}
              onClick={() => setActiveFilter("traveller")}
              className={`font-primary text-sm font-medium ${
                activeFilter === "traveller"
                  ? "bg-thai-button-fresh hover:bg-thai-button-sage text-white"
                  : "border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white"
              } rounded-full px-6 py-2`}
            >
              Traveller's Pack
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-thai-card-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="border-2 border-thai-button-sage/30 hover:border-thai-button-sage transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 bg-thai-card-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={`${review.name} - ${review.course} student`}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex-1">
                      <h3 className="font-primary text-base font-semibold text-thai-text-dark">{review.name}</h3>
                      <Badge className="bg-thai-accent-gold text-white text-xs mt-1">
                        {getCourseDisplayName(review.course)}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="font-primary text-lg font-normal text-thai-text-dark leading-relaxed mb-4 italic">
                    "{review.review}"
                  </p>
                  
                  <div className="font-primary text-sm font-normal text-thai-button-sage">
                    {review.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredReviews.length === 0 && (
            <div className="text-center py-12">
              <p className="font-primary text-lg font-normal text-thai-text-dark mb-4">No reviews found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-thai-light-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-h1 font-semibold text-thai-text-dark mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="font-primary text-lg font-normal text-thai-button-sage mb-8 max-w-2xl mx-auto">
            Start your Thai language journey today and become part of our growing community of successful learners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="font-primary text-base font-semibold bg-thai-button-fresh hover:bg-thai-button-sage text-white px-8 py-3 rounded-full text-lg">
                Start Learning Today
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" className="font-primary text-sm font-medium border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white px-8 py-3 rounded-full text-lg">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;

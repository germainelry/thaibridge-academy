
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
              star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-emerald-50 to-green-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            What Our Students Say
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Discover why over 200 students have chosen ThaiBridge Academy to begin their Thai language journey
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className={`rounded-full px-6 ${
                activeFilter === "all"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              }`}
            >
              All Reviews
            </Button>
            <Button
              variant={activeFilter === "private" ? "default" : "outline"}
              onClick={() => setActiveFilter("private")}
              className={`rounded-full px-6 ${
                activeFilter === "private"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              }`}
            >
              1-to-1 Coaching
            </Button>
            <Button
              variant={activeFilter === "mastery" ? "default" : "outline"}
              onClick={() => setActiveFilter("mastery")}
              className={`rounded-full px-6 ${
                activeFilter === "mastery"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              }`}
            >
              Thai Mastery
            </Button>
            <Button
              variant={activeFilter === "traveller" ? "default" : "outline"}
              onClick={() => setActiveFilter("traveller")}
              className={`rounded-full px-6 ${
                activeFilter === "traveller"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              }`}
            >
              Traveller's Pack
            </Button>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="h-full border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-green-800">{review.name}</h3>
                      <Badge variant="outline" className="text-xs border-green-300 text-green-600">
                        {getCourseDisplayName(review.course)}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    {renderStars(review.rating)}
                    <span className="text-sm text-green-600">{review.date}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{review.review}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;

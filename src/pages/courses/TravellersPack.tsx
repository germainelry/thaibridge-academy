import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, Trophy, Target, Star, CheckCircle, MapPin, Plane, Users, DollarSign } from "lucide-react";

export default function TravellersPack() {
  const features = [
    "Essential travel phrases and vocabulary",
    "Numbers, directions, and shopping basics",
    "Restaurant and accommodation language",
    "Emergency phrases and cultural tips",
    "Group learning environment",
    "Transportation and booking vocabulary",
    "Market bargaining techniques",
    "Basic conversation starters"
  ];

  const benefits = [
    {
      icon: Plane,
      title: "Travel Ready",
      description: "Essential Thai phrases for confident travel experiences"
    },
    {
      icon: Users,
      title: "Group Learning",
      description: "Learn alongside fellow travelers in a supportive environment"
    },
    {
      icon: DollarSign,
      title: "SkillsFuture Eligible",
      description: "Use your SkillsFuture credits to fund this course"
    },
    {
      icon: Heart,
      title: "Cultural Connection",
      description: "Connect with locals and enhance your travel experience"
    }
  ];

  const skillsFutureInfo = [
    "Government-approved course under SkillsFuture Singapore",
    "Use SkillsFuture credits to offset course fees",
    "Quality assured training with certified instructors",
    "Structured curriculum meeting national standards",
    "Certificate of completion for career portfolio",
    "Enhances employability in tourism and hospitality sectors"
  ];

  const travelScenarios = [
    {
      title: "Airport & Transportation",
      phrases: ["Asking for directions", "Booking taxis", "Flight information"]
    },
    {
      title: "Hotels & Accommodation",
      phrases: ["Check-in/out procedures", "Room requests", "Amenity inquiries"]
    },
    {
      title: "Restaurants & Food",
      phrases: ["Ordering meals", "Dietary restrictions", "Asking for recommendations"]
    },
    {
      title: "Shopping & Markets",
      phrases: ["Price negotiation", "Size and color", "Payment methods"]
    },
    {
      title: "Emergencies & Help",
      phrases: ["Medical assistance", "Police reports", "Lost items"]
    },
    {
      title: "Cultural Sites",
      phrases: ["Temple etiquette", "Tour information", "Photography permissions"]
    }
  ];

  const testimonials = [
    {
      name: "Lisa Tan",
      location: "Singapore",
      rating: 5,
      quote: "Perfect for my Thailand trip! I could navigate markets and order food confidently. The SkillsFuture funding made it even better."
    },
    {
      name: "James Lee",
      location: "Malaysia",
      rating: 5,
      quote: "Great foundation course. The group setting made learning fun and I made friends who are also planning trips to Thailand!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-thai-forest-deep text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4">
              <Badge className="bg-thai-gold text-thai-forest-dark">For Travelers</Badge>
              <Badge className="bg-primary text-white">SkillsFuture Claimable</Badge>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Basic Traveller's Pack
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed mb-8 animate-slide-up">
              Essential Thai phrases and cultural knowledge for travelers. Learn to make simple 
              conversations with locals and navigate Thailand with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Duration</span>
                </div>
                <p className="text-thai-text-secondary">4-week intensive course</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Level</span>
                </div>
                <p className="text-thai-text-secondary">Complete beginners</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Price</span>
                </div>
                <p className="text-thai-text-secondary">SGD 180 (full course)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SkillsFuture Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-thai-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-thai-text-dark mb-4">
                SkillsFuture Approved Course
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                This course is approved under SkillsFuture Singapore, allowing you to use your 
                SkillsFuture credits to fund your learning journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsFutureInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              Perfect for Travelers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="shadow-thai-medium hover:shadow-thai-strong transition-thai text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-thai-text-dark mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              Course Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section
      <section className="bg-thai-light-tint py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              Student Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-thai-medium">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star key={i} className="w-4 h-4 text-thai-gold fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-thai-text-dark">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Status */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4 bg-orange-500 text-white">Coming Soon</Badge>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-thai-text-dark mb-6">
              Be the First to Know
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Basic Traveller's Pack course is currently being finalized. Join our waitlist 
              to be notified when enrollment opens and secure your spot in the first batch.
            </p>
            <Button
              size="lg"
              className="bg-thai-gold hover:bg-thai-gold/90 text-thai-forest-dark font-semibold"
              onClick={() => window.location.href = "/contact"}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-thai-forest-deep text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Ready to Enhance Your Travel Experience?
          </h2>
          <p className="text-xl text-thai-text-secondary mb-8 max-w-2xl mx-auto">
            Use your SkillsFuture credits to learn essential Thai phrases that will transform 
            your travel experience in Thailand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-thai-gold hover:bg-thai-gold/90 text-thai-forest-dark font-semibold"
              onClick={() => window.location.href = "/contact"}
            >
              Register Interest
            </Button>
            {/* <Button
              variant="ghost"
              size="lg"
              className="border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              onClick={() => window.location.href = "/contact"}
            >
              Learn About SkillsFuture
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
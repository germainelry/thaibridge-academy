import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Trophy, Target, Star, CheckCircle } from "lucide-react";

export default function PrivateCoaching() {
  const features = [
    "Flexible scheduling to fit your lifestyle",
    "Personalized curriculum based on your goals",
    "Native Thai instructor with English/Chinese proficiency",
    "Progress tracking and regular assessments",
    "Cultural insights and practical conversation practice",
    "1-on-1 focused attention",
    "Custom learning materials",
    "Homework and practice assignments"
  ];

  const benefits = [
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Curriculum tailored specifically to your learning goals and pace"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Book sessions at times that work best for your busy lifestyle"
    },
    {
      icon: Trophy,
      title: "Rapid Progress",
      description: "1-on-1 attention accelerates your learning compared to group classes"
    },
    {
      icon: Star,
      title: "Expert Instructors",
      description: "Learn from native Thai speakers with proven teaching experience"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      rating: 5,
      quote: "The personalized approach really made the difference for me. After 3 months, I can confidently have basic conversations with Thai locals."
    },
    {
      name: "David Wong",
      rating: 5,
      quote: "My instructor was patient and adapted the lessons to my business needs. Highly recommend for professionals!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-thai-forest-deep text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-thai-gold text-thai-forest-dark">Most Popular</Badge>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              1-to-1 Private Coaching
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed mb-8 animate-slide-up">
              Personalized Thai language instruction with flexible scheduling and individualized attention. 
              Perfect for learners who want to progress at their own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Duration</span>
                </div>
                <p className="text-thai-text-secondary">Flexible - 1 hour sessions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Level</span>
                </div>
                <p className="text-thai-text-secondary">All levels welcome</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Price</span>
                </div>
                <p className="text-thai-text-secondary">From SGD 80/session</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              Why Choose Private Coaching?
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
      <section className="bg-thai-light-tint py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              What's Included
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

      {/* Testimonials Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              What Our Students Say
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
                    <p className="font-semibold text-thai-text-dark">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-thai-forest-deep text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Personalized Journey?
          </h2>
          <p className="text-xl text-thai-text-secondary mb-8 max-w-2xl mx-auto">
            Book your first private coaching session today and experience personalized Thai learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-thai-gold hover:bg-thai-gold/90 text-thai-forest-dark font-semibold"
              onClick={() => window.location.href = "/contact"}
            >
              Book Private Session
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => window.location.href = "/contact"}
            >
              Ask Questions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Clock, Trophy, Target, Star, CheckCircle, MapPin, Camera, Users, Heart } from "lucide-react";

export default function ImmersionProgram() {
  const features = [
    "Real-world practice in authentic settings",
    "Cultural activities and local experiences",
    "Small group sizes for personalized attention",
    "Accommodation and meal arrangements",
    "Certificate of completion",
    "Daily conversation practice with locals",
    "Cultural excursions and temple visits",
    "Traditional cooking classes and markets"
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Total Immersion",
      description: "Live and breathe Thai language in its natural environment"
    },
    {
      icon: Users,
      title: "Cultural Connection",
      description: "Build genuine relationships with Thai locals and fellow learners"
    },
    {
      icon: Heart,
      title: "Authentic Experience",
      description: "Experience Thailand beyond tourist destinations"
    },
    {
      icon: Camera,
      title: "Memorable Journey",
      description: "Create lasting memories while learning effectively"
    }
  ];

  const programHighlights = [
    "Stay in traditional Thai accommodation",
    "Daily Thai lessons with native speakers",
    "Local market visits and shopping practice",
    "Traditional temple ceremonies participation",
    "Thai cooking classes with local families",
    "City tours with historical and cultural context",
    "Weekend trips to nearby provinces",
    "Community service opportunities",
    "Thai massage and wellness experiences",
    "Festival participation (seasonal)"
  ];

  const testimonials = [
    {
      name: "Jennifer Wong",
      location: "Singapore",
      rating: 5,
      quote: "The immersion program in Chiang Mai was life-changing! I came back speaking Thai with much more confidence."
    },
    {
      name: "Alex Chen",
      location: "Malaysia",
      rating: 5,
      quote: "Beyond language learning, I gained deep cultural insights and made friendships that will last a lifetime."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <SectionWrapper sectionIndex={1} variant="hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-thai-gold text-thai-forest-dark">Cultural Adventure</Badge>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Immersion Program
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed mb-8 animate-slide-up">
              Intensive cultural immersion experiences in Thailand. Learn Thai while experiencing 
              authentic local culture, traditions, and daily life with native speakers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Duration</span>
                </div>
                <p className="text-thai-text-secondary">1-4 weeks programs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Target className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Level</span>
                </div>
                <p className="text-thai-text-secondary">Intermediate and above</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Price</span>
                </div>
                <p className="text-thai-text-secondary">From SGD 1,200/week</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper sectionIndex={2}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              Why Choose Immersion?
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
      </SectionWrapper>

      {/* Program Highlights Section */}
      <SectionWrapper sectionIndex={3}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-thai-text-dark mb-6">
                  Program Highlights
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our immersion programs combine structured learning with authentic cultural experiences, 
                  giving you the confidence to communicate naturally in Thai.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {programHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="shadow-thai-strong">
                  <CardHeader>
                    <CardTitle className="text-center flex items-center justify-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Locations Available
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-thai-light-tint rounded-lg">
                        <h4 className="font-semibold text-thai-text-dark mb-1">Chiang Mai</h4>
                        <p className="text-sm text-muted-foreground">Cultural capital of Northern Thailand</p>
                      </div>
                      <div className="text-center p-4 bg-thai-light-tint rounded-lg">
                        <h4 className="font-semibold text-thai-text-dark mb-1">Bangkok</h4>
                        <p className="text-sm text-muted-foreground">Modern metropolis with traditional charm</p>
                      </div>
                      <div className="text-center p-4 bg-thai-light-tint rounded-lg">
                        <h4 className="font-semibold text-thai-text-dark mb-1">Hua Hin</h4>
                        <p className="text-sm text-muted-foreground">Royal beach town with relaxed atmosphere</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Features Section */}
      <SectionWrapper sectionIndex={4}>
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
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper sectionIndex={5}>
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
                    <div>
                      <p className="font-semibold text-thai-text-dark">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper sectionIndex={6} variant="cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Ready for Your Thai Adventure?
          </h2>
          <p className="text-xl text-thai-text-secondary mb-8 max-w-2xl mx-auto">
            Join our next immersion program and transform your Thai language skills while experiencing 
            the beauty of Thai culture firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-thai-gold hover:bg-thai-gold/90 text-thai-forest-dark font-semibold"
              onClick={() => window.location.href = "/contact"}
            >
              Book Immersion Program
            </Button>
            {/* <Button
              variant="ghost"
              size="lg"
              className="border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              onClick={() => window.location.href = "/contact"}
            >
              Get Program Details
            </Button> */}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
} 
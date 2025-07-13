import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Clock, Trophy, Target, Star, CheckCircle, Briefcase, Globe } from "lucide-react";

export default function CorporateTraining() {
  const features = [
    "Customized curriculum for business contexts",
    "Group training sessions for teams",
    "Industry-specific vocabulary and phrases",
    "Cultural etiquette and business practices",
    "Flexible scheduling for busy professionals",
    "On-site or virtual training options",
    "Business presentation skills in Thai",
    "Networking and relationship building"
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: "Business-Focused",
      description: "Curriculum specifically designed for professional and business contexts"
    },
    {
      icon: Users,
      title: "Team Learning",
      description: "Build language skills together as a team for better collaboration"
    },
    {
      icon: Globe,
      title: "Cultural Intelligence",
      description: "Learn Thai business etiquette and cultural norms for success"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Training sessions that work around your business schedule"
    }
  ];

  const businessBenefits = [
    "Enhance business relationships with Thai partners",
    "Improve communication in Southeast Asian markets",
    "Boost employee confidence in international assignments",
    "Demonstrate cultural respect and commitment",
    "Increase competitive advantage in Thai markets",
    "Facilitate smoother business negotiations"
  ];

  const testimonials = [
    {
      name: "Marcus Lim",
      company: "Tech Solutions Pte Ltd",
      rating: 5,
      quote: "The cultural insights were just as valuable as the language skills. Highly recommend for any business dealing with Thai partners."
    },
    {
      name: "Jennifer Tan",
      company: "Global Manufacturing Corp",
      rating: 5,
      quote: "Our team's confidence in Thai business meetings improved dramatically after the training program."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <SectionWrapper sectionIndex={1} variant="hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary text-white">For Businesses</Badge>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Corporate Training
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed mb-8 animate-slide-up">
              Tailored Thai language programs designed for businesses and organizations. 
              Enhance your team's cultural competency and communication skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Duration</span>
                </div>
                <p className="text-thai-text-secondary">Customizable programs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Level</span>
                </div>
                <p className="text-thai-text-secondary">Beginner to Intermediate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Price</span>
                </div>
                <p className="text-thai-text-secondary">Contact for group rates</p>
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
              Why Corporate Training?
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

      {/* Business Benefits Section */}
      <SectionWrapper sectionIndex={3}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-thai-text-dark mb-6">
                  Business Impact
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Investing in Thai language training for your team delivers tangible business results 
                  and demonstrates your commitment to Southeast Asian markets.
                </p>
                <div className="space-y-4">
                  {businessBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="shadow-thai-strong">
                  <CardHeader>
                    <CardTitle className="text-center">Program Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              What Companies Say
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
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <SectionWrapper sectionIndex={4} variant="cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Ready to Enhance Your Team's Capabilities?
          </h2>
          <p className="text-xl text-thai-text-secondary mb-8 max-w-2xl mx-auto">
            Contact us to discuss a customized corporate training program that fits your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-thai-gold hover:bg-thai-gold/90 text-thai-forest-dark font-semibold"
              onClick={() => window.location.href = "/contact"}
            >
              Request Corporate Quote
            </Button>
            {/* <Button
              variant="ghost"
              size="lg"
              className="border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              onClick={() => window.location.href = "/contact"}
            >
              Schedule Consultation
            </Button> */}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
} 
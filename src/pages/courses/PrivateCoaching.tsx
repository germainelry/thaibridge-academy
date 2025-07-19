import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Trophy, Target, Star, CheckCircle, BookOpen, DollarSign, Play, GraduationCap } from "lucide-react";

export default function PrivateCoaching() {
  const benefits = [
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Curriculum adapted to your specific learning goals, pace, and interests"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Flexible scheduling to accommodate your availability and preferences"
    },
    {
      icon: Trophy,
      title: "Accelerated Learning",
      description: "Individualized focus and attention for faster progress compared to group classes"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Book a Trial Class",
      description: "Get started with a 1.5-hour trial lesson. Experience our teaching style and get a preview of what you’ll learn through our structured syllabus."
    },
    {
      step: "2", 
      title: "Experience Our Method",
      description: "Discover how our personalized approach helps you learn more effectively. You'll also meet your assigned instructor during this session."
    },
    {
      step: "3",
      title: "Reserve Your Weekly Slot",
      description: "Secure your preferred weekly class time. If you ever need to reschedule, just let us know at least 2 days in advance."
    },
    {
      step: "4",
      title: "Begin Your Journey",
      description: "Start your Thai language learning journey with a structured plan, personalized lessons (topics on request), and ongoing support from your instructor."
    }
  ];

  const pricingOptions = [
    {
      title: "Trial Class",
      price: "$50",
      duration: "1.5 hours",
      description: "Perfect introduction to our teaching style",
      popular: false
    },
    {
      title: "Pay Per Lesson",
      price: "$60",
      duration: "per hour",
      description: "Flexible option for occasional learners",
      popular: false
    },
    {
      title: "9-Hour Package",
      price: "$486",
      duration: "10% off",
      description: "Best value for regular learners",
      popular: true
    },
    {
      title: "18-Hour Package", 
      price: "$864",
      duration: "20% off",
      description: "Maximum savings for committed students",
      popular: false
    }
  ];

  const syllabusInfo = [
    "Based on Chulalongkorn University's renowned curriculum",
    "30 hours per book (comprehensive foundation)",
    "Customizable based on your specific interests and goals",
    "All learning materials provided at no extra cost",
    "Progress tracking and regular assessments"
  ];

  const onlineBenefits = [
    "Convenient - learn from anywhere with internet access",
    "Flexible scheduling - no travel time required",
    "Recorded sessions for review and practice",
    "Interactive digital tools and materials",
    "Experienced teachers trained in online instruction"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      rating: 5,
      quote: "I started private lessons hoping to just learn basic phrases for travel, but ended up being able to hold short conversations at cafes and shops in Bangkok. What I appreciated most was how Kru Gai adapted the lessons for my pace. Super flexible and very encouraging."
    },
    {
      name: "Daniel Luah",
      course: "Private Coaching",
      rating: 5,
      quote: "I’ve taken language classes elsewhere before, but none were as structured as this. Teacher Nim explained things clearly and made sure I was following at every step. The syllabus is progressive, which helped me alot. Kru Ae speaks great English but intentionally keeps the lessons immersive in Thai, which was quite difficult for me to catch initially."
    },
    {
      name: "Desmond",
      course: "Private Coaching",
      rating: 5,
      quote:
        "I have a busy schedule, so I really appreciated how flexible the lessons were, even having night time options. Kru Ae even tailored the topics to my interests (Amulets and monks haha), making my learning feel personal and relevant. Which made it easy for me to stay consistent.",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <SectionWrapper sectionIndex={1} variant="hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-thai-gold text-thai-forest-dark">Most Popular</Badge>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              1-to-1 Private Coaching
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed mb-8 animate-slide-up">
              Personalized Thai lessons with flexible scheduling and dedicated support. Weekly sessions for optimal progress. Ideal for learners who want to advance at their own pace with expert guidance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center mb-8 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Duration</span>
                </div>
                <p className="text-thai-text-secondary">Flexible</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Target className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Level</span>
                </div>
                <p className="text-thai-text-secondary">All levels welcome</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-thai-gold" />
                  <span className="font-semibold">Price</span>
                </div>
                <p className="text-thai-text-secondary">From SGD 60/session</p>
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
              Why Choose Private Coaching?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Testimonials Section */}
      <SectionWrapper sectionIndex={3}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </SectionWrapper>

      {/* How It Works Section */}
      <SectionWrapper sectionIndex={4} variant="gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-16">
              How It Works
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-thai-gold/30 to-thai-gold/10 h-full"></div>
              
              <div className="space-y-12">
                {howItWorks.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-thai-gold rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    <div className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      {/* Step number and title for mobile */}
                      <div className="lg:hidden flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-thai-gold rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-white">{step.step}</span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-thai-text-dark">{step.title}</h3>
                      </div>
                      
                      {/* Content card */}
                      <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                        <Card className="shadow-thai-medium hover:shadow-thai-strong transition-thai">
                          <CardContent className="p-8">
                            {/* Step number and title for desktop */}
                            <div className="hidden lg:flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 bg-thai-gold rounded-full flex items-center justify-center">
                                <span className="text-xl font-bold text-white">{step.step}</span>
                              </div>
                              <h3 className="font-display text-xl font-semibold text-thai-text-dark">{step.title}</h3>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing & Packages Section */}
      <SectionWrapper sectionIndex={5}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              Pricing & Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingOptions.map((option, index) => (
                <Card key={index} className={`relative shadow-thai-medium hover:shadow-thai-strong transition-thai ${option.popular ? 'ring-2 ring-thai-gold' : ''}`}>
                  {option.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-thai-gold text-thai-forest-dark">
                      MOST POPULAR
                    </Badge>
                  )}
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-thai-text-dark mb-2">{option.title}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-primary">{option.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">{option.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                All packages can be paid in 2 installments at no extra charge. Payment via Paynow QR code for convenience. (Invoice available upon request)
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Syllabus & Curriculum Section */}
      <SectionWrapper sectionIndex={6} variant="gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              Syllabus & Curriculum
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-2xl font-bold text-thai-text-dark mb-6">
                  University-Quality Education
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Our curriculum is based on Chulalongkorn University's renowned Thai language program, ensuring you receive the highest quality education available.
                </p>
                <div className="space-y-4">
                  {syllabusInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{info}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="shadow-thai-strong">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h4 className="font-semibold text-thai-text-dark mb-2">Chulalongkorn University Syllabus</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Thailand's top university curriculum adapted for individual learners
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Book 1:</span>
                          <span className="font-semibold">30 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Book 2:</span>
                          <span className="font-semibold">30 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Custom topics:</span>
                          <span className="font-semibold">Flexible</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Online Learning Section */}
      <SectionWrapper sectionIndex={7}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              Online Learning Experience
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-2xl font-bold text-thai-text-dark mb-6">
                  Convenient & Effective
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Our online classes via Zoom provide the same quality instruction as in-person lessons, with added convenience and flexibility. Most students find online learning more efficient and easier to fit into their busy schedules.
                </p>
                <div className="space-y-4">
                  {onlineBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="shadow-thai-strong">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h4 className="font-semibold text-thai-text-dark mb-2">Zoom Platform</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Professional online learning environment
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Session recording:</span>
                          <span className="font-semibold">Available</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Screen sharing:</span>
                          <span className="font-semibold">Available</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Digital materials:</span>
                          <span className="font-semibold">Provided</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper sectionIndex={8} variant="cta">
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
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
} 
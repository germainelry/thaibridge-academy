import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EmailPopup } from "@/components/EmailPopup";
import { ScrollDown } from "@/components/ScrollDown";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Building,
  Globe,
  Heart,
  Star,
  CheckCircle,
  BookOpen,
  Clock,
} from "lucide-react";

const Index = () => {
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const lastClosed = localStorage.getItem("emailPopupClosed");
      if (
        !lastClosed ||
        new Date().getTime() - new Date(lastClosed).getTime() >
          30 * 24 * 60 * 60 * 1000
      ) {
        setShowEmailPopup(true);
      }
    }, 5000); // 5 second delay

    return () => clearTimeout(timer);
  }, []);

  const courses = [
    {
      title: "1 to 1 Private Coaching",
      description:
        "For those seeking a more flexible schedule and individualized attention in learning.",
      icon: Users,
      popular: true,
      available: true,
    },
    {
      title: "Corporate Training",
      description:
        "Tailored Thai language programs for businesses and organizations. Enhance your team's cultural competency and communication skills.",
      icon: Building,
      popular: false,
      available: true,
    },
    {
      title: "Immersion Program",
      description:
        "Intensive cultural immersion experiences in Thailand. Learn Thai while experiencing authentic local culture and traditions.",
      icon: Globe,
      popular: false,
      available: true,
    },
    {
      title: "Basic Traveller's Pack (Group)",
      description:
        "For those who want to be able to make simple conversations with the locals within a short period of time.",
      icon: Heart,
      popular: false,
      available: false,
    },
  ];

  const features = [
    {
      title: "Effective Learning Methodology",
      description:
        "We've meticulously designed our syllabus following the latest scientific research on language acquisition. We prioritize techniques proven to enhance retention, comprehension, and fluency.",
      icon: BookOpen,
    },
    {
      title: "Experienced and Qualified Instructors",
      description:
        "Our instructors aren't just native Thai speakers; every instructor has been handpicked based on their deep knowledge of the Thai language, proficiency in English/Chinese, and extensive teaching experience spanning decades.",
      icon: Users,
    },
    {
      title: "Flexible Schedule",
      description:
        "We offer flexible schedules to accommodate your busy lifestyle. If you miss a lesson, we provide recordings of all classes for playback, and allow you to join another class group (subject to availability).",
      icon: Clock,
    },
    {
      title: "Community",
      description:
        "Join our community at ThaiBridge, where Thai enthusiasts come together! Share travel tips, exchange Thai recipes, and uncover hidden gems in Thailand. Whether you're a seasoned traveler or new to Thai culture, there's a place for you.",
      icon: Heart,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      course: "Private Coaching",
      rating: 5,
      quote:
        "The personalized approach really made the difference for me. After 3 months, I can confidently have basic conversations with Thai locals.",
    },
    {
      name: "Marcus Lim",
      course: "Corporate Training",
      rating: 5,
      quote:
        "The cultural insights were just as valuable as the language skills. Highly recommend for any business dealing with Thai partners.",
    },
    {
      name: "Jennifer Wong",
      course: "Immersion Program",
      rating: 5,
      quote:
        "The immersion program in Chiang Mai was life-changing! I came back speaking Thai with much more confidence.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="min-h-screen w-full text-white flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Speak Thai. Connect Deeper.
          </h1>
          <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed mb-12 max-w-4xl mx-auto animate-slide-up">
            Learn from native Thai speakers—online or through our unique
            immersion experiences. Connect authentically, travel deeper, and
            discover the Thailand locals know.
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <ScrollDown />
        </div>
      </section>

      {/* Reviews Summary */}
      <section className="py-16 bg-thai-light-tint">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-thai-gold fill-current" />
            ))}
            <span className="text-2xl font-bold text-thai-text-dark ml-2">
              4.8/5 stars
            </span>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            From 200+ Happy Students
          </p>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/reviews")}
          >
            Read All Reviews
          </Button>
        </div>
      </section>

      {/* Popular Courses */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
            Course Offerings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <Card
                  key={index}
                  className={`relative card-interactive flex flex-col ${
                    !course.available ? "opacity-60" : ""
                  }`}
                >
                  {course.popular && (
                    <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground font-semibold">
                      MOST POPULAR
                    </Badge>
                  )}
                  {!course.available && (
                    <Badge className="absolute -top-3 right-6 bg-thai-disabled text-gray-600 font-semibold">
                      COMING SOON
                    </Badge>
                  )}

                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-display text-xl text-center text-thai-text-dark">
                      {course.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col">
                    <p className="text-muted-foreground text-center leading-relaxed mb-6">
                      {course.description}
                    </p>
                    <div className="mt-auto pt-4">
                      <Button
                        className="w-full"
                        disabled={!course.available}
                        onClick={() => (window.location.href = "/courses")}
                      >
                        {course.available ? "Learn More" : "Coming Soon"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-thai-light-tint">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-thai-text-dark mb-8">
              About Our Academy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We at ThaiBridge firmly believe that speaking the mother tongue
                of the locals is the only way for making meaningful interactions
                and truly immersing oneself in another country. Trust us, it
                will open the doors to richer travel experiences that you
                otherwise wouldn't know existed.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                <strong className="text-primary">
                  We only have a simple goal: To help you foster deeper
                  connections with the Thai culture.
                </strong>
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                But our goal extends beyond just language instruction. We aspire
                to cultivate a community where members exchange their Thailand
                adventures, travel recommendations, and cultural insights with
                one another.
              </p>
            </div>
            <Button size="lg" onClick={() => (window.location.href = "/about")}>
              Learn Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
            Why Join Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 flex flex-col items-center text-center transition-thai"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center transition-thai bg-thai-gold/10 group-hover:bg-thai-gold/30">
                      <IconComponent className="w-12 h-12 text-thai-forest-dark transition-thai group-hover:text-thai-gold" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-thai-text-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-thai-light-tint">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
            What Our Students Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="card-interactive flex flex-col h-full"
              >
                <CardContent className="p-6 flex flex-1 flex-col">
                  <div className="flex items-center gap-1 mb-4 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-thai-gold fill-current"
                      />
                    ))}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="text-thai-forest-dark italic text-lg text-center mb-4">
                      “{testimonial.quote}”
                    </p>
                  </div>
                  <div className="mt-auto pt-4 text-center">
                    <p className="font-semibold text-thai-text-dark">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-thai-gold font-semibold">
                      {testimonial.course}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-thai-forest-deep text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Start Your Thai Journey Today
          </h2>
          <p className="text-xl text-thai-text-secondary mb-8 max-w-2xl mx-auto">
            Discover the joy of learning a new language with us. Our
            comprehensive language programs and dedicated instructors will
            empower you to communicate confidently to make new connections and
            experiences.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => (window.location.href = "/contact")}
          >
            Book Free Trial
          </Button>
        </div>
      </section>

      <Footer />

      <EmailPopup
        isOpen={showEmailPopup}
        onClose={() => setShowEmailPopup(false)}
      />
    </div>
  );
};

export default Index;

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building, Globe, Heart } from "lucide-react";
import { useState } from "react";
import { EmailPopup } from "@/components/EmailPopup";

const courses = [
  {
    id: 1,
    title: "1 to 1 Private Coaching",
    description:
      "Personalized Thai language instruction with flexible scheduling and individualized attention. Perfect for learners who want to progress at their own pace with dedicated support.",
    icon: Users,
    features: [
      "Flexible scheduling to fit your lifestyle",
      "Personalized curriculum based on your goals",
      "Native Thai instructor with English/Chinese proficiency",
      "Progress tracking and regular assessments",
      "Cultural insights and practical conversation practice",
    ],
    duration: "Flexible - 1 hour sessions",
    level: "All levels welcome",
    price: "From SGD 80/session",
    popular: true,
    available: true,
  },
  {
    id: 2,
    title: "Corporate Training",
    description:
      "Tailored Thai language programs designed for businesses and organizations. Enhance your team's cultural competency and communication skills for better business relationships in Thailand.",
    icon: Building,
    features: [
      "Customized curriculum for business contexts",
      "Group training sessions for teams",
      "Industry-specific vocabulary and phrases",
      "Cultural etiquette and business practices",
      "Flexible scheduling for busy professionals",
    ],
    duration: "Customizable programs",
    level: "Beginner to Intermediate",
    price: "Contact for group rates",
    popular: false,
    available: true,
  },
  {
    id: 3,
    title: "Immersion Program",
    description:
      "Intensive cultural immersion experiences in Thailand. Learn Thai while experiencing authentic local culture, traditions, and daily life with native speakers.",
    icon: Globe,
    features: [
      "Real-world practice in authentic settings",
      "Cultural activities and local experiences",
      "Small group sizes for personalized attention",
      "Accommodation and meal arrangements",
      "Certificate of completion",
    ],
    duration: "1-4 weeks programs",
    level: "Intermediate and above",
    price: "Starting from SGD 1,200/week",
    popular: false,
    available: true,
  },
  {
    id: 4,
    title: "Basic Traveller's Pack (Group)",
    description:
      "Essential Thai phrases and cultural knowledge for travelers. Learn to make simple conversations with locals and navigate Thailand with confidence.",
    icon: Heart,
    features: [
      "Essential travel phrases and vocabulary",
      "Numbers, directions, and shopping basics",
      "Restaurant and accommodation language",
      "Emergency phrases and cultural tips",
      "Group learning environment",
    ],
    duration: "4-week intensive course",
    level: "Complete beginners",
    price: "SGD 180 for full course",
    popular: false,
    available: false,
  },
];

export default function Courses() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-thai-forest-deep text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Our Thai Language Courses
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed animate-slide-up">
              Choose from our comprehensive range of Thai language programs,
              designed to meet your unique learning goals and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {courses.map((course) => {
              const IconComponent = course.icon;
              return (
                <Card
                  key={course.id}
                  className={`relative shadow-thai-medium transition-thai hover:shadow-thai-strong ${
                    !course.available ? "opacity-60" : ""
                  }`}
                >
                  {course.popular && (
                    <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground font-semibold px-4 py-2">
                      MOST POPULAR
                    </Badge>
                  )}

                  {!course.available && (
                    <Badge className="absolute -top-3 right-6 bg-thai-disabled text-gray-600 font-semibold px-4 py-2">
                      COMING SOON
                    </Badge>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-display text-2xl text-thai-text-dark">
                          {course.title}
                        </CardTitle>
                        <p className="text-thai-gold font-semibold">
                          {course.price}
                        </p>
                      </div>
                    </div>

                    <CardDescription className="text-base leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-thai-text-dark">
                            Duration:
                          </p>
                          <p className="text-muted-foreground">
                            {course.duration}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-thai-text-dark">
                            Level:
                          </p>
                          <p className="text-muted-foreground">
                            {course.level}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-thai-text-dark mb-3">
                          What's Included:
                        </h4>
                        <ul className="space-y-2">
                          {course.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        {course.available ? (
                        <Button
                          className="w-full"
                          onClick={() => (window.location.href = "/contact")}
                        >
                            Enroll Now
                          </Button>
                        ) : (
                          <Button
                            className="w-full notify-btn"
                            onClick={() => setShowEmailPopup(true)}
                          >
                            Notify When Available
                        </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-thai-light-tint py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-thai-text-dark mb-6">
            Ready to Start Your Thai Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Not sure which course is right for you? Book a discounted trial class
            with our language experts to experience our teaching style and find the perfect
            program for your needs.
          </p>
          <Button size="lg" onClick={() => (window.location.href = "/contact")}>
            Book Trial Class
          </Button>
        </div>
      </section>

      <Footer />
      <EmailPopup isOpen={showEmailPopup} onClose={() => setShowEmailPopup(false)} />
    </div>
  );
}

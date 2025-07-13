import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const faqCategories = [
  {
    title: "Course Information",
    questions: [
      {
        question: "What courses do you offer?",
        answer:
          "We offer four main programs: 1-to-1 Private Coaching (most popular), Corporate Training for businesses, Immersion Programs in Thailand, and Basic Traveller's Pack group classes (coming soon). Each program is designed for different learning goals and schedules.",
      },
      {
        question: "How long does it take to learn Thai?",
        answer:
          "Learning time varies based on your goals, study frequency, and prior language experience. Most students can have basic conversations after 3-6 months of regular practice. Our 1-to-1 coaching typically shows faster progress due to personalized attention.",
      },
      {
        question: "Do you offer beginner-friendly courses?",
        answer:
          "Absolutely! All our courses welcome complete beginners. Our instructors are experienced in teaching students with no prior Thai knowledge, starting from basics like the Thai alphabet, tones, and essential phrases.",
      },
      {
        question: "What makes your teaching method different?",
        answer:
          "We combine scientifically-proven language acquisition techniques with authentic cultural immersion. Our native Thai instructors provide not just language skills but cultural context, helping you understand when and how to use what you learn.",
      },
    ],
  },
  {
    title: "Scheduling & Flexibility",
    questions: [
      {
        question: "How flexible are the class schedules?",
        answer:
          "Very flexible! Our 1-to-1 private coaching adapts to your schedule. We offer sessions from 9AM-9PM on weekdays and 9AM-6PM on Saturdays. If you miss a class, we provide recordings and allow you to join another group session (subject to availability).",
      },
      {
        question: "Can I reschedule or cancel classes?",
        answer:
          "Yes, we understand life happens. You can reschedule private sessions with 24-hour notice. For cancellations, our policy varies by course type - please contact us for specific details. We always try to accommodate our students' needs.",
      },
      {
        question: "What if I need to pause my course temporarily?",
        answer:
          "We offer course pause options for various circumstances (travel, work commitments, etc.). The pause duration and conditions depend on your course type. Contact us to discuss your specific situation.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    questions: [
      {
        question: "How much do your courses cost?",
        answer:
          "Private coaching starts from SGD 80/session. Corporate training has group rates (contact us for quotes). Immersion programs start from SGD 1,200/week. The Basic Traveller's Pack will be SGD 180 for the full 4-week course when available.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes! We offer flexible payment options including monthly plans for longer courses. Corporate clients can arrange invoice billing. Contact us to discuss payment arrangements that work for your budget.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "We offer discounted trial classes for first-time learners where you can meet your potential instructor, assess your current level, and experience our teaching style. This helps ensure our approach is right for you before committing to a full course.",
      },
      {
        question: "What's included in the course fees?",
        answer:
          "Course fees include instruction, learning materials, progress tracking, class recordings (for private sessions), and access to our student community. Immersion programs include accommodation and cultural activities as specified.",
      },
    ],
  },
  {
    title: "Technical & Learning Support",
    questions: [
      {
        question: "Do you provide learning materials?",
        answer:
          "Yes, all learning materials are included in your course fee. We provide digital textbooks, audio files, practice exercises, and cultural guides. Physical materials can be arranged for local students.",
      },
      {
        question: "How do online classes work?",
        answer:
          "Online classes use Zoom or similar platforms. You'll need a stable internet connection, computer/tablet with camera and microphone. We provide technical support to ensure smooth learning experience. All sessions are recorded for review.",
      },
      {
        question: "Can I switch between online and in-person classes?",
        answer:
          "Yes, our hybrid approach allows flexibility. You can attend some sessions online and others in-person based on your schedule and preference. This is particularly popular with our private coaching students.",
      },
      {
        question: "What if I'm struggling with certain aspects?",
        answer:
          "Our instructors provide personalized support and adjust teaching methods based on your learning style. We offer additional practice sessions, alternative explanations, and cultural context to help overcome specific challenges.",
      },
    ],
  },
  {
    title: "Immersion Programs",
    questions: [
      {
        question: "Where do immersion programs take place?",
        answer:
          "Our immersion programs are primarily based in Chiang Mai and Bangkok, with cultural excursions to various regions. We choose locations that offer authentic Thai experiences while maintaining safety and comfort for international students.",
      },
      {
        question: "What's included in immersion programs?",
        answer:
          "Programs include accommodation with host families or partner hotels, daily language classes, cultural activities, guided excursions, meals, and 24/7 support. Specific inclusions vary by program length and type.",
      },
      {
        question: "Is the immersion program safe for solo travelers?",
        answer:
          "Absolutely. We have partnerships with trusted local families and accommodations. Our staff in Thailand provides 24/7 support, and we maintain regular check-ins with all participants. Safety is our top priority.",
      },
      {
        question: "What level do I need for immersion programs?",
        answer:
          "We recommend intermediate level or above for full immersion programs. However, we can arrange beginner-friendly immersion experiences with more structured support. Contact us to discuss your current level and goals.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-thai-forest-deep text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed animate-slide-up">
              Everything you need to know about learning Thai with ThaiBridge
              Academy
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="mb-8 shadow-thai-medium">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold text-thai-text-dark mb-6">
                    {category.title}
                  </h2>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, questionIndex) => (
                      <AccordionItem
                        key={questionIndex}
                        value={`${categoryIndex}-${questionIndex}`}
                        className="border border-border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left font-semibold text-thai-text-dark hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-thai-light-tint py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-thai-text-dark mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our friendly team is
              here to help. Reach out to us and we'll get back to you within 24
              hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/6588994462?text=Hi%20ThaiBridge%20Academy,%20I%20have%20a%20question%20about%20your%20courses",
                    "_blank"
                  )
                }
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-center text-thai-text-dark mb-8">
              Quick Links
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                className="shadow-thai-soft hover:shadow-thai-medium transition-thai cursor-pointer"
                onClick={() => (window.location.href = "/courses")}
              >
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-thai-text-dark mb-2">
                    View Our Courses
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Explore all our Thai language programs and find the perfect
                    fit for your goals.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="shadow-thai-soft hover:shadow-thai-medium transition-thai cursor-pointer"
                onClick={() => (window.location.href = "/reviews")}
              >
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-thai-text-dark mb-2">
                    Student Reviews
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Read what our students say about their Thai learning
                    experience with us.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="shadow-thai-soft hover:shadow-thai-medium transition-thai cursor-pointer"
                onClick={() => (window.location.href = "/about")}
              >
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-thai-text-dark mb-2">
                    About Us
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Learn more about our mission, values, and expert Thai
                    instructors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

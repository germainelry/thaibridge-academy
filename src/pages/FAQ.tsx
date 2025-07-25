import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigation } from "@/hooks/use-navigation";

const faqCategories = [
  {
    title: "Course Information",
    questions: [
      {
        question: "What courses do you offer?",
        answer:
          "We offer four main programs: 1-to-1 Private Coaching (most popular), Corporate Training for businesses, Immersion Programs in Thailand, and Basic Traveller's Pack (SkillsFuture claimable, coming soon). Each program is designed for different learning goals and schedules.",
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
          "Our 1-to-1 private coaching is highly flexible and adapts to your schedule. We offer sessions from 7AM to 11PM, Monday through Sunday.",
      },
      {
        question: "Can I reschedule or cancel classes?",
        answer: (
          <>Yes, we understand that life happens. You can reschedule private sessions with 48 hours' notice; otherwise, you will be charged according to our policy. Please see our <a href='/policy' className='text-primary underline'>T&amp;C</a> for details.</>
        ),
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
          "Each of our courses has different rates. Private coaching is charged at an hourly rate, but we also offer package pricing for committed students. Corporate training and immersion programs depend on the duration and group size (contact us for a quote). The Basic Traveller's Pack is claimable with SkillsFuture credits on the SkillsFuture platform.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes! For package plans, we offer installment options with no additional interest (varies by package). Corporate clients can arrange invoice billing. Contact us to discuss payment arrangements that work for you.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes, for our private classes we offer a trial class to explain the syllabus and give you a chance to meet the teacher and experience our teaching style. For corporate and immersion programs, consultations are free to discuss your requirements.",
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
          "Yes, all learning materials are included in your course fee. We provide digital textbooks, audio files, practice exercises, and cultural guides. Physical materials can be arranged for local students. All classes are recorded and will be provided for you to review after class.",
      },
      {
        question: "How do online classes work?",
        answer:
          "Online classes use Zoom. You'll need a stable internet connection and a computer or tablet with a camera and microphone. We provide technical support to ensure a smooth learning experience. All sessions are recorded for review.",
      },
      {
        question: "What if I'm struggling with certain aspects?",
        answer:
          "Our instructors provide personalized support and adjust teaching methods based on your learning style. We offer additional practice sessions, alternative explanations, and cultural context to help you overcome specific challenges. The teacher will also adjust the pace accordingly, so you don't have to worry.",
      },
    ],
  },
  {
    title: "Immersion Programs",
    questions: [
      {
        question: "Where do immersion programs take place?",
        answer:
          "Our immersion programs are primarily based in Chiang Mai, with cultural excursions to various regions. We choose locations that offer authentic Thai experiences while maintaining safety and comfort for international students.",
      },
      {
        question: "What's included in immersion programs?",
        answer:
          "Programs include accommodation with host families or partner hotels, daily language classes, cultural activities, guided excursions, meals, and 24/7 support. Specific inclusions vary by program length and type.",
      },
      {
        question: "Is the immersion program safe for solo travelers?",
        answer:
          "Absolutely. We have partnerships with trusted local families and accommodations. Our staff in Thailand provides 24/7 support, and we maintain regular check-ins with all participants. Safety is our top priority. Every single place is individually trialed and vetted by us before being included in the itinerary.",
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
  const { navigate } = useNavigation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <SectionWrapper sectionIndex={1} variant="hero">
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
      </SectionWrapper>

      {/* FAQ Content */}
      <SectionWrapper sectionIndex={2}>
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
      </SectionWrapper>

      {/* Still Have Questions */}
      <SectionWrapper sectionIndex={3} variant="cta">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-thai-text-secondary mb-8">
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
                onClick={() => navigate('/policy')}
              >
                View T&Cs
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Quick Links */}
      <SectionWrapper sectionIndex={4}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-center text-thai-text-dark mb-8">
              Quick Links
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                className="shadow-thai-soft hover:shadow-thai-medium transition-thai cursor-pointer"
                onClick={() => navigate("/courses")}
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
                onClick={() => navigate("/reviews")}
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
                onClick={() => navigate("/about")}
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
      </SectionWrapper>

      <Footer />
    </div>
  );
}

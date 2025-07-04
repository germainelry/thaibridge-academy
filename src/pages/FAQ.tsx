import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "Do I need any prior knowledge of Thai to start?",
          answer: "Not at all! Our courses are designed for complete beginners. We start with the basics including pronunciation, tones, and essential phrases. Our instructors are experienced in teaching students with no prior Thai language experience."
        },
        {
          question: "How do I book a free trial lesson?",
          answer: "Simply fill out our contact form or email us directly. We'll schedule a 30-minute trial lesson at a time that works for you. During this session, we'll assess your current level and discuss your learning goals."
        },
        {
          question: "What equipment do I need for online lessons?",
          answer: "You'll need a computer, tablet, or smartphone with a stable internet connection, a microphone, and speakers or headphones. We use user-friendly video conferencing platforms that work on all devices."
        }
      ]
    },
    {
      category: "Courses & Pricing",
      questions: [
        {
          question: "What's the difference between your course options?",
          answer: "Our 1-to-1 Private Coaching offers personalized attention and flexible scheduling. The Thai Mastery Series is a comprehensive group program including script learning. The Basic Traveller's Pack focuses on essential phrases for tourists in an intensive 4-week format."
        },
        {
          question: "How much do the courses cost?",
          answer: "Pricing varies by course type and duration. Our Basic Traveller's Pack starts from $99, Thai Mastery Series from $299, and Private Coaching rates are customized based on your schedule and goals. Contact us for detailed pricing information."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment options including installment plans for longer courses. We believe cost shouldn't be a barrier to learning, so we work with students to find suitable payment arrangements."
        },
        {
          question: "Is there a money-back guarantee?",
          answer: "We offer a satisfaction guarantee. If you're not happy with your first paid lesson, we'll provide a full refund. We're confident in our teaching quality and want you to feel secure in your investment."
        }
      ]
    },
    {
      category: "Learning Process",
      questions: [
        {
          question: "How long does it take to learn conversational Thai?",
          answer: "This depends on your dedication and practice time. With regular lessons and practice, students typically achieve basic conversational skills in 3-6 months. Our Basic Traveller's Pack can get you ready for simple conversations in just 4 weeks."
        },
        {
          question: "Do you teach Thai script (reading and writing)?",
          answer: "Yes! Our Thai Mastery Series includes comprehensive instruction in reading and writing Thai script. For students focused on speaking, we can customize lessons to emphasize verbal communication while introducing script gradually."
        },
        {
          question: "What if I miss a lesson?",
          answer: "We understand life happens! For 1-to-1 sessions, we can reschedule with 24 hours notice. All lessons are recorded for review, and you can join another group class if available. We're flexible and want to support your learning journey."
        },
        {
          question: "How do you handle Thai tones? They seem difficult!",
          answer: "Thai tones are challenging but very learnable! We use proven techniques including visual aids, tone practice exercises, and lots of repetition. Our native instructors provide immediate feedback to help you master the tonal system step by step."
        }
      ]
    },
    {
      category: "Instructors & Teaching",
      questions: [
        {
          question: "Are all instructors native Thai speakers?",
          answer: "Yes, all our instructors are native Thai speakers with extensive teaching experience. They're also proficient in English (and some in Chinese) to ensure clear communication during your learning process."
        },
        {
          question: "How experienced are your instructors?",
          answer: "Our instructors have decades of combined teaching experience. They're selected not just for their language skills, but for their cultural knowledge, patience, and ability to make learning enjoyable and effective."
        },
        {
          question: "Can I choose my instructor?",
          answer: "For 1-to-1 coaching, we'll match you with an instructor based on your learning goals, schedule, and personality preferences. If you're not completely happy with your match, we can arrange for you to try lessons with different instructors."
        }
      ]
    },
    {
      category: "Technical & Logistics",
      questions: [
        {
          question: "What video platform do you use for online lessons?",
          answer: "We use reliable, easy-to-use platforms like Zoom or Google Meet. No special software installation is required - just click the link we send you. We'll provide technical support if needed."
        },
        {
          question: "Do you offer in-person lessons in Singapore?",
          answer: "Currently, we focus on online instruction to serve students across Singapore and internationally. This allows us to offer flexible scheduling and access to our best instructors regardless of location."
        },
        {
          question: "What time zones do you accommodate?",
          answer: "Our primary hours are Singapore time (SGT), but we have instructors available for early morning and late evening sessions to accommodate different schedules and time zones."
        }
      ]
    },
    {
      category: "Community & Culture",
      questions: [
        {
          question: "How can I join the ThaiBridge community?",
          answer: "All our students automatically become part of our community! We have online groups where members share travel experiences, cultural insights, Thai recipes, and practice together. It's a supportive environment for all learners."
        },
        {
          question: "Do you organize cultural events or trips?",
          answer: "We regularly host virtual cultural sessions covering Thai holidays, traditions, and customs. We're also exploring organized cultural immersion trips to Thailand for our advanced students."
        },
        {
          question: "Can I practice with other students?",
          answer: "Absolutely! We facilitate conversation practice groups and pair students for practice sessions. Learning with peers makes the journey more enjoyable and provides additional practice opportunities."
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-thai-card-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-thai-deep-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-hero font-bold text-white mb-6 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="font-primary text-lg font-normal text-thai-text-secondary mb-8 leading-relaxed animate-fade-in">
            Find answers to common questions about our Thai language courses and learning process.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-thai-button-sage w-5 h-5" />
            <Input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 border-2 border-thai-button-sage/40 focus:border-thai-button-sage rounded-full font-primary text-base font-normal"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-thai-light-bg">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-primary text-lg font-normal text-thai-button-sage mb-4">No FAQs found matching your search.</p>
              <Button 
                onClick={() => setSearchTerm("")}
                className="font-primary text-base font-semibold bg-thai-button-fresh hover:bg-thai-button-sage text-white rounded-full px-6"
              >
                Show All FAQs
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQs.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="border-2 border-thai-button-sage/40 shadow-lg bg-thai-card-white">
                  <CardHeader>
                    <CardTitle className="font-display text-h2 font-semibold text-thai-text-dark">{category.category}</CardTitle>
                    <CardDescription className="font-primary text-base font-normal text-thai-button-sage">
                      {category.questions.length} question{category.questions.length !== 1 ? 's' : ''}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, questionIndex) => (
                        <AccordionItem 
                          key={questionIndex} 
                          value={`${categoryIndex}-${questionIndex}`}
                          className="border-thai-button-sage/20"
                        >
                          <AccordionTrigger className="font-primary text-base font-semibold text-left text-thai-text-dark hover:text-thai-button-sage">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="font-primary text-base font-normal text-thai-button-sage leading-relaxed pt-2">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-thai-card-white">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-2 border-thai-button-sage/30 shadow-lg bg-thai-light-bg">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="w-12 h-12 text-thai-button-sage" />
              </div>
              <h2 className="font-display text-h1 font-semibold text-thai-text-dark mb-4">Still Have Questions?</h2>
              <p className="font-primary text-lg font-normal text-thai-button-sage mb-6">
                Can't find what you're looking for? Our team is here to help you get started on your Thai language journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact#contact-form">
                  <Button className="font-primary text-base font-semibold bg-thai-button-fresh hover:bg-thai-button-sage text-white px-8 py-3 rounded-full">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="outline" className="font-primary text-sm font-medium border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white px-8 py-3 rounded-full">
                    View Courses
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;

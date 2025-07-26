import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/use-navigation";

const policySections = [

  {
    title: "Terms of Service",
    lastUpdated: "December 2024",
    content: [
      {
        subtitle: "Course Enrollment",
        text: "By enrolling in our courses, you agree to attend classes regularly, complete assignments, and respect other students and instructors. Course materials are for personal use only."
      },
      {
        subtitle: "Payment Terms",
        text: "Course fees are due as specified in your enrollment agreement. We accept various payment methods and offer flexible payment plans for longer courses."
      },
      {
        subtitle: "Intellectual Property",
        text: "All course materials, including videos, documents, and teaching methods, are the intellectual property of ThaiBridge Academy and are protected by copyright law."
      },
      {
        subtitle: "Limitation of Liability",
        text: "ThaiBridge Academy's liability is limited to the amount paid for the specific course or service. We are not responsible for indirect, incidental, or consequential damages."
      }
    ]
  },
  {
    title: "Cancellation Policy",
    lastUpdated: "March 2025",
    content: [
      {
        subtitle: "Class Cancellation by Students",
        text: "For private classes, students may cancel individual sessions with at least 48 hours' notice. Cancellations made after that window will be counted as attended. We understand that unexpected situations can happen, and in genuine cases, we may offer exceptions at our discretion. For group classes, sessions will continue as scheduled. If a student misses a session, they may request a make-up, which will be charged at the private class rate. All group classes are recorded, so students can catch up on the lesson before the next session."
      },
      {
        subtitle: "Class Cancellation by Academy",
        text: "In the rare event that we need to cancel a private lesson (usually only in emergencies), we will notify students at least 48 hours in advance and offer a reschedule within the same week. For group classes, sessions will proceed as scheduled, and a qualified substitute teacher will be arranged if the original instructor is unavailable."
      },
      {
        subtitle: "Late Arrival Policy",
        text: "Lessons will begin and end according to the scheduled time. If you anticipate being late, please inform the teacher in advance—rescheduling may depend on availability. Otherwise, the teacher will wait up to 15 minutes in the Zoom call before ending the session."
      }
    ]
  },
  {
    title: "Refund Policy",
    lastUpdated: "March 2025",
    content: [
      {
        subtitle: "Private Classes",
        text: "Private classes are designed to be as flexible as possible to suit your schedule, which means refund requests for ongoing classes are extremely rare. For packages, once class credits has been purchased, it is non-refundable. These packages are offered at a discounted rate to support students who are committed to consistent learning over time."
      },
      {
        subtitle: "Group Classes",
        text: "For custom group classes, a deposit will be collected after initial discussions and planning. This deposit is non-refundable, as it covers preparation and coordination efforts. A refund window may be available before the course officially begins—after that point, all fees are non-refundable, as resources and schedules are confirmed. Refunds will not be issued for dropouts once the course has started."
      },
      {
        subtitle: "Immersion Programs",
        text: "Due to the nature of accommodation and activity bookings with external partners, immersion programs follow a separate refund policy outlined in your program agreement. A deposit is required to confirm your participation and allow us to secure the necessary arrangements—this deposit is non-refundable, as it is used to make time-sensitive reservations. If a cancellation occurs before the specified deadline prior to the program start date, only the deposit will be retained. No refunds will be issued after this deadline."
      }
    ]
  },  
  {
    title: "Privacy Policy",
    lastUpdated: "December 2024",
    content: [
      {
        subtitle: "Information We Collect",
        text: "We collect information you provide directly to us, such as when you create an account, enroll in courses, contact us, or participate in our programs. This may include your name, email address, phone number, payment information, and learning preferences."
      },
      {
        subtitle: "How We Use Your Information",
        text: "We use the information we collect to provide, maintain, and improve our services; process transactions; send communications; provide customer support; and comply with legal obligations."
      },
      {
        subtitle: "Information Sharing",
        text: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law."
      },
      {
        subtitle: "Data Security",
        text: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
      }
    ]
  }
];

export default function Policy() {
  const { navigate } = useNavigation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <SectionWrapper sectionIndex={1} variant="hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Policies & Terms
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed animate-slide-up">
              Our commitment to transparency and protecting your rights as our student
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Policy Sections */}
      <SectionWrapper sectionIndex={2}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {policySections.map((section, index) => {
              // Map section titles to IDs for navigation
              const getSectionId = (title: string) => {
                switch (title) {
                  case "Privacy Policy": return "privacy";
                  case "Terms of Service": return "terms";
                  case "Refund Policy": return "refund";
                  default: return title.toLowerCase().replace(/\s+/g, '-');
                }
              };
              
              return (
                <Card key={index} id={getSectionId(section.title)} className="shadow-thai-medium">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-display text-2xl text-thai-text-dark">
                      {section.title}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">
                      Last updated: {section.lastUpdated}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="font-semibold text-lg text-thai-text-dark mb-3">
                        {item.subtitle}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper sectionIndex={3} variant="cta">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Questions About Our Policies?
            </h2>
            <p className="text-lg text-thai-text-secondary mb-8">
              If you have any questions about these policies or need clarification on any terms, 
              please don't hesitate to contact us. We're here to help.
            </p>
            
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Quick Reference */}
      {/* <SectionWrapper sectionIndex={4}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-center text-thai-text-dark mb-8">
              Quick Reference
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-thai-soft">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-thai-text-dark mb-2">Refund Window</h4>
                  <p className="text-sm text-muted-foreground">
                    Full refund within 7 days of course start
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-thai-soft">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-thai-text-dark mb-2">Cancellation Notice</h4>
                  <p className="text-sm text-muted-foreground">
                    24-hour advance notice required
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-thai-soft">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-thai-text-dark mb-2">Data Rights</h4>
                  <p className="text-sm text-muted-foreground">
                    Access, update, or delete your information
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SectionWrapper> */}

      <Footer />
    </div>
  );
}
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigation } from "@/hooks/use-navigation";

const policySections = [
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
  },
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
    title: "Refund Policy",
    lastUpdated: "December 2024",
    content: [
      {
        subtitle: "Full Refund Period",
        text: "You may cancel your enrollment and receive a full refund within 7 days of course start date, provided you have attended no more than 2 sessions."
      },
      {
        subtitle: "Partial Refund",
        text: "After the full refund period, refunds are calculated based on unused sessions minus a 20% administrative fee. Refunds are not available after 50% of the course has been completed."
      },
      {
        subtitle: "Immersion Programs",
        text: "Immersion program refunds follow a different schedule due to accommodation and activity bookings. Full details are provided in your program agreement."
      },
      {
        subtitle: "Processing Time",
        text: "Approved refunds are processed within 10-14 business days to the original payment method."
      }
    ]
  },
  {
    title: "Cancellation Policy",
    lastUpdated: "December 2024",
    content: [
      {
        subtitle: "Class Cancellation by Students",
        text: "Students may cancel individual sessions with 24-hour advance notice. Late cancellations may result in session charges."
      },
      {
        subtitle: "Class Cancellation by Academy",
        text: "If we need to cancel a class, students will be notified as soon as possible and offered rescheduling options or credit for future sessions."
      },
      {
        subtitle: "Course Withdrawal",
        text: "Students may withdraw from courses at any time. Refunds are subject to our refund policy terms."
      },
      {
        subtitle: "Force Majeure",
        text: "Neither party is liable for delays or failures due to circumstances beyond reasonable control, including natural disasters, government actions, or health emergencies."
      }
    ]
  },
  {
    title: "Data Protection",
    lastUpdated: "December 2024",
    content: [
      {
        subtitle: "Your Rights",
        text: "You have the right to access, update, or delete your personal information. You may also request data portability or restrict processing of your data."
      },
      {
        subtitle: "Cookies and Tracking",
        text: "Our website uses cookies to improve user experience and analyze site usage. You can control cookie settings through your browser preferences."
      },
      {
        subtitle: "Third-Party Services",
        text: "We use trusted third-party services for payments, communications, and analytics. These services have their own privacy policies and security measures."
      },
      {
        subtitle: "International Transfers",
        text: "Your information may be transferred to and processed in countries other than your country of residence, including Singapore and Thailand."
      }
    ]
  },
  {
    title: "Cookie Policy",
    lastUpdated: "December 2024",
    content: [
      {
        subtitle: "What Are Cookies",
        text: "Cookies are small text files stored on your device that help us provide and improve our services, remember your preferences, and analyze site usage."
      },
      {
        subtitle: "Types of Cookies We Use",
        text: "We use essential cookies for site functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings."
      },
      {
        subtitle: "Managing Cookies",
        text: "You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect site functionality."
      },
      {
        subtitle: "Third-Party Cookies",
        text: "Some cookies are placed by third-party services we use, such as Google Analytics and payment processors, subject to their own policies."
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-thai"
              >
                Contact Us
              </button>
              
              <button 
                onClick={() => window.location.href = 'mailto:legal@thaibridgeacademy.sg'}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold transition-thai"
              >
                Email Legal Team
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Quick Reference */}
      <SectionWrapper sectionIndex={4}>
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
      </SectionWrapper>

      <Footer />
    </div>
  );
}
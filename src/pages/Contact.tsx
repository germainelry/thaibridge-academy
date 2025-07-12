import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    phone: "",
    course_taken: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.user_email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description:
          "Name, email, and message are required to send your inquiry.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://thaibridge.app.n8n.cloud/webhook/submit-faq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      toast({
        title: "Message sent successfully!",
        description:
          "We'll get back to you within 24 hours. Thank you for your interest in ThaiBridge Academy.",
      });
      setFormData({
        name: "",
        user_email: "",
        phone: "",
        course_taken: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was a problem submitting your message. Please try again later.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    
    // Once there is a physical address, add this back in
    // {
    //   icon: MapPin,
    //   title: "Visit Us",
    //   details: [
    //     "123 Orchard Road, #12-34",
    //     "Singapore 238858",
    //     "Near Somerset MRT Station",
    //   ],
    // },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+65 1234 5678", "WhatsApp: +65 1234 5678", "Mon-Sat: 9AM-7PM"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "hello@thaibridgeacademy.sg",
        "info@thaibridgeacademy.sg",
        "We reply within 24 hours",
      ],
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Monday - Friday: 9AM - 9PM",
        "Saturday: 9AM - 6PM",
        "Sunday: 10AM - 5PM",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-thai-forest-deep text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed animate-slide-up">
              Ready to start your Thai learning journey? We're here to help you
              choose the perfect course.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-thai-medium">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl text-thai-text-dark">
                      Send Us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="user_email">Email Address <span className="text-red-500">*</span></Label>
                          <Input
                            id="user_email"
                            name="user_email"
                            type="email"
                            value={formData.user_email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="course_taken">Interested Course</Label>
                          <select
                            id="course_taken"
                            name="course_taken"
                            value={formData.course_taken}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-base font-sans"
                          >
                            <option value="">Select a course</option>
                            <option value="1 to 1 Private Coaching">1 to 1 Private Coaching</option>
                            <option value="Corporate Training">Corporate Training</option>
                            <option value="Immersion Program">Immersion Program</option>
                            <option value="Basic Traveller's Pack">Basic Traveller's Pack</option>
                            <option value="Free Consultation">Free Consultation</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your Thai learning goals, preferred schedule, or any questions you have..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy
                        and terms of service.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* WhatsApp CTA */}
                <Card className="shadow-thai-medium bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-thai-text-dark mb-2">
                      Prefer to Chat?
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Get instant answers to your questions on WhatsApp
                    </p>
                    <Button
                      className="w-full"
                      onClick={() =>
                        window.open(
                          "https://wa.me/6512345678?text=Hi%20ThaiBridge%20Academy,%20I'm%20interested%20in%20learning%20Thai",
                          "_blank"
                        )
                      }
                    >
                      Chat on WhatsApp
                    </Button>
                  </CardContent>
                </Card>

                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="shadow-thai-medium">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-thai-text-dark mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p
                                  key={idx}
                                  className="text-muted-foreground text-sm"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-thai-light-tint py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-thai-text-dark mb-6">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our frequently asked questions for quick answers to common
            inquiries about our courses and programs.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = "/faq")}
          >
            View FAQ
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

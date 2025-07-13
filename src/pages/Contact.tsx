import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  ArrowRight
} from "lucide-react";
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
    {
      icon: Mail,
      title: "Email Us",
      details: [
        <a
          href="mailto:thaibridgecontact@gmail.com"
          className="text-thai-text-secondary text-sm hover:text-thai-gold transition-thai"
        >
          thaibridgecontact@gmail.com
        </a>,
        "We reply within 24 hours",
      ],
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Weekdays: 7AM - 11PM",
        "Weekends: 9AM - 6PM",
      ],
    },
  ];

  const socialMediaChannels = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/thaibridgeacademy",
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-blue-600",
      description: "Join our Thai learning community",
      cta: "Follow on Facebook"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/thaibridgeacademy",
      color: "bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600",
      textColor: "text-pink-600",
      description: "Daily Thai tips & cultural insights",
      cta: "Follow on Instagram"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/thaibridgeacademy",
      color: "bg-blue-700 hover:bg-blue-800",
      textColor: "text-blue-700",
      description: "Corporate training updates",
      cta: "Connect on LinkedIn"
    },
    {
      name: "TikTok",
      icon: Music2,
      href: "https://tiktok.com/@thaibridgeacademy",
      color: "bg-black hover:bg-gray-900",
      textColor: "text-black",
      description: "Fun Thai lessons & challenges",
      cta: "Follow on TikTok"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
              {/* Contact Form */}
              <div className="lg:col-span-2 flex flex-col h-full">
                <Card className="shadow-thai-medium flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl text-thai-text-dark">
                      Send Us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-1">
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
                            <option value="Basic Traveller's Pack (SkillsFuture claimable)">Basic Traveller's Pack (SkillsFuture Claimable)</option>
                            <option value="Trial Class">Trial Class</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2 flex-1 flex flex-col">
                        <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your Thai learning goals, preferred schedule, or any questions you have..."
                          rows={6}
                          required
                          className="flex-1"
                        />
                      </div>

                      <div>
                        <Button type="submit" size="lg" className="w-full">
                          Send Message
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground text-center mt-auto">
                        By submitting this form, you agree to our privacy policy
                        and terms of service.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col h-full">
                <Card className="shadow-thai-medium flex flex-col h-full">
                  <CardContent className="flex flex-col h-full p-0">
                    {/* WhatsApp CTA */}
                    <div className="pt-10 pb-10 px-6 text-center border-b border-border">
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
                            "https://wa.me/6588994462?text=Hi%20ThaiBridge%20Academy,%20I'm%20interested%20in%20learning%20Thai",
                            "_blank"
                          )
                        }
                      >
                        Chat on WhatsApp
                      </Button>
                    </div>
                    {/* Contact Info Cards */}
                    <div className="flex-1 flex flex-col justify-between">
                      {contactInfo.map((info, index) => {
                        const IconComponent = info.icon;
                        return (
                          <div
                            key={index}
                            className={
                              index === 0
                                ? "flex-1 flex flex-col justify-center p-6 border-b border-border"
                                : "flex-1 flex flex-col justify-center p-6"
                            }
                          >
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
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gradient-to-br from-thai-forest-deep/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-thai-text-dark mb-4">
                Connect With Us on Social Media
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our vibrant community of Thai language learners! Get daily tips, cultural insights, 
                and exclusive content across all our social platforms.
              </p>
            </div>

            {/* Social Media Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialMediaChannels.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Card 
                    key={social.name}
                    className="shadow-thai-medium hover:shadow-thai-strong transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                    onClick={() => window.open(social.href, "_blank")}
                  >
                    <CardContent className="p-6">
                      {/* Icon */}
                      <div className={`w-full h-24 ${social.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-thai`}>
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="font-semibold text-lg text-thai-text-dark mb-2 flex items-center justify-between">
                        {social.name}
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-thai" />
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {social.description}
                      </p>
                      
                      {/* CTA Button */}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:border-primary group-hover:text-primary transition-thai"
                      >
                        {social.cta}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional CTA */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Follow us for daily Thai language tips, cultural insights, and special promotions!
              </p>
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

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
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required to send your inquiry.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours. Thank you for your interest in ThaiBridge Academy.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "123 Orchard Road, #12-34",
        "Singapore 238858",
        "Near Somerset MRT Station"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+65 1234 5678",
        "WhatsApp: +65 1234 5678",
        "Mon-Sat: 9AM-7PM"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "hello@thaibridgeacademy.sg",
        "info@thaibridgeacademy.sg",
        "We reply within 24 hours"
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Monday - Friday: 9AM - 9PM",
        "Saturday: 9AM - 6PM",
        "Sunday: 10AM - 5PM"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-thai-forest-deep text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed">
              Ready to start your Thai learning journey? We're here to help you choose the perfect course.
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
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
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
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
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
                          <Label htmlFor="course">Interested Course</Label>
                          <select
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                          >
                            <option value="">Select a course</option>
                            <option value="private">1 to 1 Private Coaching</option>
                            <option value="corporate">Corporate Training</option>
                            <option value="immersion">Immersion Program</option>
                            <option value="traveller">Basic Traveller's Pack</option>
                            <option value="consultation">Free Consultation</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
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
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-6">
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
                                <p key={idx} className="text-muted-foreground text-sm">
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
                      onClick={() => window.open('https://wa.me/6512345678?text=Hi%20ThaiBridge%20Academy,%20I\'m%20interested%20in%20learning%20Thai', '_blank')}
                    >
                      Chat on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
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
            Check out our frequently asked questions for quick answers to common inquiries about our courses and programs.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/faq'}
          >
            View FAQ
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
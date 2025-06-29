import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageCircle, Calendar, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you within 24 hours to schedule your free trial lesson.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      experience: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-thai-card-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-thai-deep-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-thai-text-secondary mb-8 leading-relaxed animate-fade-in">
            Ready to start your Thai language journey? Book your free trial lesson today or get in touch with any questions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-thai-light-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-thai-button-sage/30 shadow-lg bg-thai-card-white">
              <CardHeader>
                <CardTitle className="text-2xl text-thai-text-dark flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Book Your Free Trial Lesson
                </CardTitle>
                <CardDescription className="text-lg text-thai-button-sage">
                  Fill out the form below and we'll contact you within 24 hours to schedule your personalized trial lesson.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+65 XXXX XXXX"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="course">Interested Course</Label>
                    <Select value={formData.course} onValueChange={(value) => handleChange("course", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private">1 to 1 Private Coaching</SelectItem>
                        <SelectItem value="mastery">Thai Mastery Series</SelectItem>
                        <SelectItem value="traveller">Basic Traveller's Pack</SelectItem>
                        <SelectItem value="undecided">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Thai Language Experience</Label>
                    <Select value={formData.experience} onValueChange={(value) => handleChange("experience", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                        <SelectItem value="some-basics">Know Some Basic Phrases</SelectItem>
                        <SelectItem value="elementary">Elementary Level</SelectItem>
                        <SelectItem value="intermediate">Intermediate Level</SelectItem>
                        <SelectItem value="advanced">Advanced Level</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your learning goals, preferred schedule, or any questions you have..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-thai-button-fresh hover:bg-thai-button-sage text-white py-3 rounded-full text-lg">
                    Book Free Trial Lesson
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-2 border-thai-button-sage/30 shadow-lg bg-thai-card-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-thai-text-dark flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    Get in Touch
                  </CardTitle>
                  <CardDescription className="text-lg text-thai-button-sage">
                    Have questions? We're here to help you start your Thai language journey.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-thai-button-sage mt-1" />
                    <div>
                      <h4 className="font-semibold text-thai-text-dark mb-1">Email Us</h4>
                      <p className="text-thai-button-sage">hello@thaibridgeacademy.com</p>
                      <p className="text-sm text-thai-text-secondary">We typically respond within 2-4 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-thai-button-sage mt-1" />
                    <div>
                      <h4 className="font-semibold text-thai-text-dark mb-1">Operating Hours</h4>
                      <div className="text-thai-button-sage space-y-1">
                        <p>Monday - Friday: 9:00 AM - 9:00 PM SGT</p>
                        <p>Saturday: 10:00 AM - 6:00 PM SGT</p>
                        <p>Sunday: 2:00 PM - 8:00 PM SGT</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-thai-button-sage/30 shadow-lg bg-thai-light-bg">
                <CardHeader>
                  <CardTitle className="text-2xl text-thai-text-dark">Why Choose ThaiBridge?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-thai-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-thai-button-sage">Native Thai instructors with extensive teaching experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-thai-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-thai-button-sage">Personalized learning plans tailored to your goals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-thai-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-thai-button-sage">Flexible scheduling to fit your busy lifestyle</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-thai-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-thai-button-sage">Cultural insights that go beyond language learning</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-thai-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-thai-button-sage">Supportive community of fellow learners</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-thai-card-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-thai-text-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-thai-button-sage">Get answers to common questions about our Thai language programs</p>
          </div>
          
          <div className="space-y-6">
            <Card className="border-2 border-thai-button-sage/30 bg-thai-card-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-thai-text-dark mb-3">How long does it take to see results?</h3>
                <p className="text-thai-button-sage">Most students begin to feel confident with basic conversations within 4-6 weeks of regular practice. Our structured approach ensures steady progress.</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-thai-button-sage/30 bg-thai-card-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-thai-text-dark mb-3">What if I'm a complete beginner?</h3>
                <p className="text-thai-button-sage">Perfect! Our courses are designed for all levels, including complete beginners. We'll start from the very basics and build your confidence step by step.</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-thai-button-sage/30 bg-thai-card-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-thai-text-dark mb-3">Can I reschedule lessons?</h3>
                <p className="text-thai-button-sage">Yes, we offer flexible scheduling. You can reschedule lessons with 24 hours notice, and we'll work with you to find a time that fits your schedule.</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-thai-button-sage/30 bg-thai-card-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-thai-text-dark mb-3">Do you offer group classes?</h3>
                <p className="text-thai-button-sage">Currently, we focus on personalized 1-to-1 coaching to ensure the best learning experience. This allows us to tailor lessons specifically to your needs and pace.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

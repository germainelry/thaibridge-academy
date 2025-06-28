
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-emerald-50 to-green-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-green-700 mb-8 leading-relaxed">
            Ready to start your Thai language journey? Book your free trial lesson today or get in touch with any questions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Book Your Free Trial Lesson
                </CardTitle>
                <CardDescription className="text-lg text-green-600">
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
                  
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg">
                    Book Free Trial Lesson
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-2 border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    Get in Touch
                  </CardTitle>
                  <CardDescription className="text-lg text-green-600">
                    Have questions? We're here to help you start your Thai language journey.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Email Us</h4>
                      <p className="text-green-600">hello@thaibridgeacademy.com</p>
                      <p className="text-sm text-green-500">We typically respond within 2-4 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Operating Hours</h4>
                      <div className="text-green-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 9:00 PM SGT</p>
                        <p>Saturday: 10:00 AM - 6:00 PM SGT</p>
                        <p>Sunday: 2:00 PM - 8:00 PM SGT</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">What to Expect</h3>
                  <div className="space-y-3 text-green-700">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Free 30-minute trial lesson tailored to your level</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Assessment of your current Thai language skills</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Personalized learning plan recommendation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>Meet your potential instructor</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p>No commitment required</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-green-600 mb-8">
            Check out our frequently asked questions or reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg rounded-full">
              <a href="/faq">View FAQ</a>
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full">
              <a href="mailto:hello@thaibridgeacademy.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

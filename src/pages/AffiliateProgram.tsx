import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollDown } from "@/components/ScrollDown";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Gift, 
  FileText, 
  BarChart3, 
  Globe, 
  Mail, 
  CheckCircle,
  ArrowRight,
  Star,
  Download,
  Target,
  Zap,
  Shield,
  Clock
} from "lucide-react";

export default function AffiliateProgram() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    socialMedia: "",
    audienceSize: "",
    audienceLocation: "",
    marketingExperience: "",
    motivation: "",
    promotionStrategy: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.motivation) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      // Here you would typically send to your affiliate tracking system
      console.log("Affiliate application submitted:", formData);
      
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you within 2-3 business days.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        website: "",
        socialMedia: "",
        audienceSize: "",
        audienceLocation: "",
        marketingExperience: "",
        motivation: "",
        promotionStrategy: ""
      });
    } catch (error) {
      toast({
        title: "Error submitting application",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <SectionWrapper sectionIndex={1} variant="hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-thai-gold/20 text-thai-gold border-thai-gold/30">
              Partnership Opportunity
            </Badge>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Partner with ThaiBridge Academy
            </h1>
            
            <p className="text-xl md:text-2xl text-thai-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto animate-slide-up">
              Earn up to <span className="text-thai-gold font-bold">40% commission</span> while helping others discover the beauty of Thai language and culture
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-thai-gold hover:bg-thai-gold/90 text-thai-forest-dark font-semibold"
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white hover:border-white font-semibold"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-thai-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-thai-gold" />
                </div>
                <h3 className="font-semibold text-white mb-2">High Commissions</h3>
                <p className="text-thai-text-secondary text-sm">Up to 40% on premium courses</p>
              </div>
              
              <div className="text-center">
                <div className="bg-thai-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-thai-gold" />
                </div>
                <h3 className="font-semibold text-white mb-2">Recurring Income</h3>
                <p className="text-thai-text-secondary text-sm">Monthly commissions on subscriptions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-thai-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-thai-gold" />
                </div>
                <h3 className="font-semibold text-white mb-2">Marketing Support</h3>
                <p className="text-thai-text-secondary text-sm">Resources & materials provided</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Program Benefits */}
      <SectionWrapper sectionIndex={2} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-thai-forest-dark mb-6">
              Why Partner with ThaiBridge Academy?
            </h2>
            <p className="text-xl text-thai-text-secondary max-w-3xl mx-auto">
              Join our growing network of partners and earn while promoting authentic Thai language education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-thai-sage/20 hover:border-thai-gold/30 transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">Proven Conversion Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-thai-text-secondary">
                  Our courses have a 15% conversion rate with high customer satisfaction and retention
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-thai-sage/20 hover:border-thai-gold/30 transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">Real-Time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-thai-text-secondary">
                  Advanced dashboard with real-time analytics, conversion tracking, and performance insights
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-thai-sage/20 hover:border-thai-gold/30 transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">Reliable Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-thai-text-secondary">
                  Monthly payouts with multiple payment options and transparent commission tracking
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-thai-sage/20 hover:border-thai-gold/30 transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">Marketing Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-thai-text-secondary">
                  Professional banners, social media content, email templates, and course descriptions
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-thai-sage/20 hover:border-thai-gold/30 transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-thai-text-secondary">
                  Personal affiliate manager and priority support to help maximize your success
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-thai-sage/20 hover:border-thai-gold/30 transition-all duration-300">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">120-Day Cookie Window</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-thai-text-secondary">
                  Extended tracking window ensures you get credited for conversions up to 4 months later
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Commission Structure */}
      <SectionWrapper sectionIndex={3} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-thai-forest-dark mb-6">
              Commission Structure
            </h2>
            <p className="text-xl text-thai-text-secondary max-w-3xl mx-auto">
              Transparent, competitive rates with performance-based bonuses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-thai-gold/30 bg-gradient-to-br from-thai-gold/5 to-thai-gold/10">
              <CardHeader className="text-center">
                <div className="bg-thai-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-thai-gold font-bold text-2xl">25%</span>
                </div>
                <CardTitle className="text-thai-forest-dark">Traveller's Pack</CardTitle>
                <CardDescription>Essential Thai for travelers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-thai-text-secondary">
                  <li>• One-time payment</li>
                  <li>• $50-100 average order</li>
                  <li>• Perfect for travel audiences</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-thai-gold/30 bg-gradient-to-br from-thai-gold/5 to-thai-gold/10">
              <CardHeader className="text-center">
                <div className="bg-thai-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-thai-gold font-bold text-2xl">30%</span>
                </div>
                <CardTitle className="text-thai-forest-dark">Private Coaching</CardTitle>
                <CardDescription>1-on-1 personalized lessons</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-thai-text-secondary">
                  <li>• Premium pricing</li>
                  <li>• $200-500 per package</li>
                  <li>• High conversion value</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-thai-gold/30 bg-gradient-to-br from-thai-gold/5 to-thai-gold/10">
              <CardHeader className="text-center">
                <div className="bg-thai-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-thai-gold font-bold text-2xl">35%</span>
                </div>
                <CardTitle className="text-thai-forest-dark">Immersion Program</CardTitle>
                <CardDescription>Complete cultural experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-thai-text-secondary">
                  <li>• Premium experience</li>
                  <li>• $800-1500 per program</li>
                  <li>• Highest commission rate</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-thai-gold/30 bg-gradient-to-br from-thai-gold/5 to-thai-gold/10">
              <CardHeader className="text-center">
                <div className="bg-thai-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-thai-gold font-bold text-2xl">20%</span>
                </div>
                <CardTitle className="text-thai-forest-dark">Corporate Training</CardTitle>
                <CardDescription>Business language solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-thai-text-secondary">
                  <li>• Recurring monthly</li>
                  <li>• $300-2000 per month</li>
                  <li>• Long-term partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Card className="max-w-3xl mx-auto border-thai-forest-dark/20 bg-thai-forest-dark/5">
              <CardHeader>
                <CardTitle className="text-thai-forest-dark flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-thai-gold" />
                  Performance Bonuses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-thai-gold font-bold text-lg">+5%</div>
                    <p className="text-thai-text-secondary">10+ referrals/month</p>
                  </div>
                  <div className="text-center">
                    <div className="text-thai-gold font-bold text-lg">+10%</div>
                    <p className="text-thai-text-secondary">25+ referrals/month</p>
                  </div>
                  <div className="text-center">
                    <div className="text-thai-gold font-bold text-lg">+15%</div>
                    <p className="text-thai-text-secondary">50+ referrals/month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <div id="how-it-works">
        <SectionWrapper sectionIndex={4} className="py-20">
          <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-thai-forest-dark mb-6">
              How It Works
            </h2>
            <p className="text-xl text-thai-text-secondary max-w-3xl mx-auto">
              Simple 4-step process to start earning with ThaiBridge Academy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-thai-gold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-thai-forest-dark font-bold text-2xl">1</span>
              </div>
              <h3 className="font-semibold text-thai-forest-dark mb-3">Apply & Get Approved</h3>
              <p className="text-thai-text-secondary">Submit your application and get approved within 2-3 business days</p>
            </div>
            
            <div className="text-center">
              <div className="bg-thai-gold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-thai-forest-dark font-bold text-2xl">2</span>
              </div>
              <h3 className="font-semibold text-thai-forest-dark mb-3">Get Your Links</h3>
              <p className="text-thai-text-secondary">Receive unique tracking links and marketing materials</p>
            </div>
            
            <div className="text-center">
              <div className="bg-thai-gold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-thai-forest-dark font-bold text-2xl">3</span>
              </div>
              <h3 className="font-semibold text-thai-forest-dark mb-3">Promote & Share</h3>
              <p className="text-thai-text-secondary">Share our courses with your audience using proven strategies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-thai-gold rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-thai-forest-dark font-bold text-2xl">4</span>
              </div>
              <h3 className="font-semibold text-thai-forest-dark mb-3">Earn Commissions</h3>
              <p className="text-thai-text-secondary">Get paid monthly for every successful referral</p>
            </div>
          </div>
        </div>
        </SectionWrapper>
      </div>

      {/* Marketing Resources */}
      <SectionWrapper sectionIndex={5} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-thai-forest-dark mb-6">
              Marketing Resources
            </h2>
            <p className="text-xl text-thai-text-secondary max-w-3xl mx-auto">
              Everything you need to successfully promote ThaiBridge Academy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-thai-sage/20">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">Visual Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-thai-text-secondary">
                  <li>• Professional banners (multiple sizes)</li>
                  <li>• Social media graphics</li>
                  <li>• Logo and brand assets</li>
                  <li>• Course thumbnails</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-thai-sage/20">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">Email Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-thai-text-secondary">
                  <li>• Welcome series</li>
                  <li>• Course announcements</li>
                  <li>• Promotional campaigns</li>
                  <li>• Newsletter content</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-thai-sage/20">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">Social Media Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-thai-text-secondary">
                  <li>• Pre-written posts</li>
                  <li>• Instagram story templates</li>
                  <li>• Video content ideas</li>
                  <li>• Hashtag recommendations</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-thai-sage/20">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">Content Library</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-thai-text-secondary">
                  <li>• Course descriptions</li>
                  <li>• Feature highlights</li>
                  <li>• Student testimonials</li>
                  <li>• Thai culture articles</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-thai-sage/20">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-thai-text-secondary">
                  <li>• Real-time click tracking</li>
                  <li>• Conversion reports</li>
                  <li>• Commission statements</li>
                  <li>• Performance insights</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-thai-sage/20">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-thai-forest-dark">Training & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-thai-text-secondary">
                  <li>• Marketing strategy guides</li>
                  <li>• Best practice tutorials</li>
                  <li>• Monthly webinars</li>
                  <li>• 1-on-1 coaching calls</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper sectionIndex={6} className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-thai-forest-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-thai-text-secondary">
              Everything you need to know about our affiliate program
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-thai-forest-dark font-semibold">
                How much can I earn as an affiliate?
              </AccordionTrigger>
              <AccordionContent className="text-thai-text-secondary">
                Your earnings depend on your audience size and engagement. Our top affiliates earn $2,000-$5,000 monthly. With commission rates up to 40% and performance bonuses, there's significant earning potential. For example, referring 20 students to our Private Coaching program (avg. $350) would earn you $2,100 at 30% commission.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-thai-forest-dark font-semibold">
                When and how do I get paid?
              </AccordionTrigger>
              <AccordionContent className="text-thai-text-secondary">
                Commissions are paid monthly, 30 days after the end of each month. We offer multiple payment methods including PayPal, bank transfer, and Wise. Minimum payout is $50. All payments are tracked transparently in your affiliate dashboard.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-thai-forest-dark font-semibold">
                What is the cookie duration?
              </AccordionTrigger>
              <AccordionContent className="text-thai-text-secondary">
                We offer a generous 120-day cookie window. This means if someone clicks your affiliate link and purchases within 120 days, you'll receive the commission. This extended window accounts for the typical decision-making process for educational purchases.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-thai-forest-dark font-semibold">
                Who is the ideal affiliate for ThaiBridge Academy?
              </AccordionTrigger>
              <AccordionContent className="text-thai-text-secondary">
                Perfect affiliates include: travel bloggers, Thailand expats, language learning enthusiasts, cultural exchange programs, educational content creators, and anyone with an audience interested in Thai culture, travel, or language learning. We welcome both experienced marketers and beginners.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-thai-forest-dark font-semibold">
                Are there any restrictions on promotion methods?
              </AccordionTrigger>
              <AccordionContent className="text-thai-text-secondary">
                We prohibit spam, paid search advertising on our brand terms, and misleading claims. However, we encourage creative promotion through blogs, social media, email marketing, YouTube videos, and authentic content creation. We provide guidelines and support for effective, compliant promotion strategies.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-thai-forest-dark font-semibold">
                Do I need a website to become an affiliate?
              </AccordionTrigger>
              <AccordionContent className="text-thai-text-secondary">
                While a website is helpful, it's not required. Many successful affiliates use social media platforms, YouTube channels, email lists, or offline networking. We're most interested in your ability to reach and engage with people interested in Thai language and culture.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-thai-forest-dark font-semibold">
                What support do you provide to affiliates?
              </AccordionTrigger>
              <AccordionContent className="text-thai-text-secondary">
                We provide comprehensive support including: dedicated affiliate manager, marketing materials, training resources, monthly strategy webinars, real-time analytics dashboard, and priority customer support. Our goal is your success, and we're committed to helping you maximize your earnings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionWrapper>

      {/* Application Form */}
      <div id="application">
        <SectionWrapper sectionIndex={7} className="py-20">
          <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-thai-forest-dark mb-6">
              Apply to Join Our Affiliate Program
            </h2>
            <p className="text-xl text-thai-text-secondary max-w-2xl mx-auto">
              Ready to start earning? Fill out the application below and we'll get back to you within 2-3 business days.
            </p>
          </div>
          
          <Card className="border-thai-sage/20 bg-white/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-thai-forest-dark font-semibold">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-thai-forest-dark font-semibold">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-thai-forest-dark font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-thai-forest-dark font-semibold">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="website" className="text-thai-forest-dark font-semibold">
                      Website URL
                    </Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      placeholder="https://your-website.com"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="socialMedia" className="text-thai-forest-dark font-semibold">
                      Main Social Media Profile
                    </Label>
                    <Input
                      id="socialMedia"
                      value={formData.socialMedia}
                      onChange={(e) => handleInputChange('socialMedia', e.target.value)}
                      placeholder="Instagram, YouTube, TikTok, etc."
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="audienceSize" className="text-thai-forest-dark font-semibold">
                      Audience Size
                    </Label>
                    <Select value={formData.audienceSize} onValueChange={(value) => handleInputChange('audienceSize', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select audience size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1k">Under 1,000</SelectItem>
                        <SelectItem value="1k-5k">1,000 - 5,000</SelectItem>
                        <SelectItem value="5k-10k">5,000 - 10,000</SelectItem>
                        <SelectItem value="10k-50k">10,000 - 50,000</SelectItem>
                        <SelectItem value="50k-100k">50,000 - 100,000</SelectItem>
                        <SelectItem value="100k-plus">100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="audienceLocation" className="text-thai-forest-dark font-semibold">
                      Audience Location
                    </Label>
                    <Select value={formData.audienceLocation} onValueChange={(value) => handleInputChange('audienceLocation', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Primary audience location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="global">Global</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="asia">Asia</SelectItem>
                        <SelectItem value="thailand">Thailand</SelectItem>
                        <SelectItem value="singapore">Singapore</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="marketingExperience" className="text-thai-forest-dark font-semibold">
                    Marketing Experience
                  </Label>
                  <Select value={formData.marketingExperience} onValueChange={(value) => handleInputChange('marketingExperience', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Your marketing experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (New to affiliate marketing)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (Some experience)</SelectItem>
                      <SelectItem value="advanced">Advanced (Experienced marketer)</SelectItem>
                      <SelectItem value="expert">Expert (Professional marketer)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="motivation" className="text-thai-forest-dark font-semibold">
                    Why do you want to promote ThaiBridge Academy? *
                  </Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    placeholder="Tell us about your connection to Thai culture, language learning, or why you're interested in our program..."
                    className="mt-2"
                    rows={4}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="promotionStrategy" className="text-thai-forest-dark font-semibold">
                    How do you plan to promote our courses?
                  </Label>
                  <Textarea
                    id="promotionStrategy"
                    value={formData.promotionStrategy}
                    onChange={(e) => handleInputChange('promotionStrategy', e.target.value)}
                    placeholder="Blog posts, social media, email marketing, YouTube videos, etc."
                    className="mt-2"
                    rows={3}
                  />
                </div>
                
                <div className="bg-thai-sage/10 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-thai-gold mt-0.5" />
                    <div className="text-sm text-thai-text-secondary">
                      <p className="mb-2">By submitting this application, you agree to:</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Follow our affiliate program terms and conditions</li>
                        <li>• Promote our courses authentically and ethically</li>
                        <li>• Comply with applicable laws and regulations</li>
                        <li>• Receive marketing communications from ThaiBridge Academy</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-thai-gold hover:bg-thai-gold/90 text-thai-forest-dark font-semibold px-8"
                  >
                    Submit Application
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        </SectionWrapper>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
} 
import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-thai-darker-forest text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column - Company Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-white">ThaiBridge Academy</h3>
              <p className="font-primary text-thai-text-secondary leading-relaxed mb-6">
                We pride ourselves on providing the best Thai language learning experience. 
                Everyone can learn Thai with our native speakers and immersive programs.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-thai-accent-gold mt-0.5 flex-shrink-0" />
                <span className="font-primary text-thai-text-secondary">
                  123 Thai Learning Street, Suite 100<br />
                  Singapore, SG 10001
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-thai-accent-gold flex-shrink-0" />
                <span className="font-primary text-thai-text-secondary">+65 1234 567-890</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-thai-accent-gold flex-shrink-0" />
                <span className="font-primary text-thai-text-secondary">hello@thaibridgeacademy.com</span>
              </div>
            </div>
          </div>
          
          {/* Middle Column - Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-primary text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="flex items-center gap-2 font-primary text-thai-text-secondary hover:text-thai-accent-gold transition-colors group">
                <ArrowRight className="w-4 h-4 text-thai-accent-gold group-hover:translate-x-1 transition-transform" />
                Home
              </Link>
              <Link to="/courses" className="flex items-center gap-2 font-primary text-thai-text-secondary hover:text-thai-accent-gold transition-colors group">
                <ArrowRight className="w-4 h-4 text-thai-accent-gold group-hover:translate-x-1 transition-transform" />
                Courses
              </Link>
              <Link to="/about" className="flex items-center gap-2 font-primary text-thai-text-secondary hover:text-thai-accent-gold transition-colors group">  
                <ArrowRight className="w-4 h-4 text-thai-accent-gold group-hover:translate-x-1 transition-transform" />
                About Us
              </Link>
              <Link to="/faq" className="flex items-center gap-2 font-primary text-thai-text-secondary hover:text-thai-accent-gold transition-colors group">
                <ArrowRight className="w-4 h-4 text-thai-accent-gold group-hover:translate-x-1 transition-transform" />
                FAQ
              </Link>
              <Link to="/reviews" className="flex items-center gap-2 font-primary text-thai-text-secondary hover:text-thai-accent-gold transition-colors group">
                <ArrowRight className="w-4 h-4 text-thai-accent-gold group-hover:translate-x-1 transition-transform" />
                Reviews
              </Link>
              <Link to="/contact" className="flex items-center gap-2 font-primary text-thai-text-secondary hover:text-thai-accent-gold transition-colors group">
                <ArrowRight className="w-4 h-4 text-thai-accent-gold group-hover:translate-x-1 transition-transform" />
                Contact
              </Link>
            </div>
          </div>
          
          {/* Right Column - Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-primary text-xl font-semibold mb-6 text-white">Our Newsletter</h4>
            <p className="font-primary text-thai-text-secondary mb-6 leading-relaxed">
              Subscribe to our newsletter to stay updated with the latest Thai learning tips and special offers.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-thai-accent-gold"
                />
                <Button className="bg-thai-button-soft hover:bg-thai-button-sage text-white px-6 font-primary font-semibold">
                  Subscribe
                </Button>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-thai-accent-gold/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-thai-accent-gold/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-thai-accent-gold/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-thai-accent-gold/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="font-primary text-thai-text-secondary flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-thai-accent-gold" fill="currentColor" /> for Thai Language Learners
          </p>
          <p className="font-primary text-white/60 text-sm mt-2">
            © 2025 ThaiBridge Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

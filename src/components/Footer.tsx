
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-thai-darker-forest text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">ThaiBridge Academy</h3>
            <p className="text-thai-text-secondary mb-4 leading-relaxed">
              Sàwàtdii 🇹🇭 Speak Thai, Discover More. Everyone can learn Thai. Learn from real native speakers with us.
            </p>
            <p className="text-thai-button-sage text-sm">
              Foster deeper connections with Thai culture through meaningful interactions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/courses" className="block text-thai-text-secondary hover:text-thai-accent-gold transition-colors">
                Courses
              </Link>
              <Link to="/about" className="block text-thai-text-secondary hover:text-thai-accent-gold transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-thai-text-secondary hover:text-thai-accent-gold transition-colors">
                Contact
              </Link>
              <Link to="/faq" className="block text-thai-text-secondary hover:text-thai-accent-gold transition-colors">
                FAQ
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Courses</h4>
            <div className="space-y-2 text-thai-text-secondary">
              <p>1 to 1 Private Coaching</p>
              <p>Thai Mastery Series</p>
              <p>Basic Traveller's Pack</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-thai-button-sage/40 mt-8 pt-8 text-center">
          <p className="text-thai-text-secondary flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-thai-accent-gold" fill="currentColor" /> for Thai language learners
          </p>
          <p className="text-thai-button-sage text-sm mt-2">
            © 2024 ThaiBridge Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

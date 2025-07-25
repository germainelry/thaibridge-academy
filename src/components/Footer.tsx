import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Music2 } from "lucide-react"; // Using Music icon as TikTok placeholder
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigationLink } from "@/hooks/use-navigation";

// Navigation Link Component with smooth scrolling
const NavigationLink: React.FC<{ 
  href: string | { path: string; section: string }; 
  children: React.ReactNode; 
  className?: string;
}> = ({ href, children, className = "" }) => {
  const navigationProps = useNavigationLink(href);
  
  return (
    <a
      {...navigationProps}
      className={className}
    >
      {children}
    </a>
  );
};

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    try {
      const response = await fetch("https://thaibridge.app.n8n.cloud/webhook/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest Thai learning tips and course updates.",
      });
      setEmail("");
      setName("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const footerLinks = {
    courses: [
      { name: "All Courses", href: "/courses" },
      { name: "Private Coaching", href: "/courses/private-coaching" },
      { name: "Corporate Training", href: "/courses/corporate-training" },
      { name: "Immersion Programs", href: "/courses/immersion-program" },
      { name: "Traveller's Pack", href: "/courses/travellers-pack" },
    ],
    company: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Affiliate Program", href: "/affiliate" },
      { name: "Our Instructors", href: { path: "/about", section: "instructors" } },
      { name: "Student Reviews", href: "/reviews" },
      { name: "FAQ", href: "/faq" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Terms & Conditions", href: "/policy" },
      { name: "Social Media", href: { path: "/contact", section: "social-media" } },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/thaibridgeacademy",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/thaibridgeacademy",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/thaibridgeacademy",
      color: "hover:text-blue-600",
    },
    {
      name: "TikTok",
      icon: Music2,
      href: "https://tiktok.com/@thaibridgeacademy",
      color: "hover:text-black",
    },
  ];

  return (
    <footer className="bg-thai-forest-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Stay Connected with us!
            </h3>
            <p className="text-thai-text-secondary mb-8 max-w-2xl mx-auto">
              Get exclusive Thai language tips, cultural insights, and course
              updates delivered to your inbox.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="min-w-[150px] flex-initial bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-[2_2_0%] min-w-[265px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Button
                type="submit"
                className="bg-thai-gold hover:bg-thai-gold/90 text-thai-forest-dark font-semibold min-w-[120px] h-10 px-6 py-3 rounded-lg"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                ThaiBridge Academy
              </h2>
              <p className="text-thai-text-secondary leading-relaxed mb-6">
                Your bridge to authentic Thai culture and language. Learn from
                native speakers and connect deeper with Thailand's rich
                heritage.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-thai-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Based in Singapore</p>
                  <p className="text-thai-text-secondary text-sm">
                    We are open to students worldwide!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-thai-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">WhatsApp Us</p>
                  <div className="space-y-1">
                    <a
                      href="tel:+6588994462"
                      className="text-thai-text-secondary text-sm hover:text-white transition-thai block"
                    >
                      +65 8899 4462
                    </a>
                    <a
                      href="https://wa.me/6588994462?text=Hi%20ThaiBridge%20Academy,%20I'm%20interested%20in%20learning%20Thai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-thai-gold text-sm hover:text-thai-gold/80 transition-thai inline-flex items-center gap-1"
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-thai-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <a
                    href="mailto:thaibridgecontact@gmail.com"
                    className="text-thai-text-secondary text-sm hover:text-white transition-thai"
                  >
                    thaibridgecontact@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <NavigationLink
                    href={link.href}
                    className="text-thai-text-secondary text-sm hover:text-white transition-thai"
                  >
                    {link.name}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <NavigationLink
                    href={link.href}
                    className="text-thai-text-secondary text-sm hover:text-white transition-thai"
                  >
                    {link.name}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <NavigationLink
                    href={link.href}
                    className="text-thai-text-secondary text-sm hover:text-white transition-thai"
                  >
                    {link.name}
                  </NavigationLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-thai-text-secondary text-sm">
              © 2025 ThaiBridge Academy. All rights reserved.
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-thai-text-secondary text-sm">
                Follow us:
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-thai-text-secondary ${social.color} transition-thai`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

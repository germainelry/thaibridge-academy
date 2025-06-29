
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Reviews", href: "/reviews" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full bg-thai-darker-forest/95 backdrop-blur-sm z-50 border-b border-thai-button-sage/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-thai-accent-gold transition-colors">
              ThaiBridge Academy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-thai-button-sage text-white"
                      : "text-thai-text-secondary hover:text-white hover:bg-thai-button-sage/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-thai-accent-gold hover:bg-thai-button-fresh text-white rounded-full px-6">
                Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-thai-text-secondary hover:text-white hover:bg-thai-button-sage/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-thai-button-sage"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-thai-darker-forest border-t border-thai-button-sage/30">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-thai-button-sage text-white"
                    : "text-thai-text-secondary hover:text-white hover:bg-thai-button-sage/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-thai-accent-gold hover:bg-thai-button-fresh text-white rounded-full">
                  Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

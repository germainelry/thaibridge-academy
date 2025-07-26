import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [aboutCloseTimeout, setAboutCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const aboutLinks = [
    { name: "About Us", href: "/about" },
    { name: "Affiliate Program", href: "/affiliate" },
    { name: "Policies", href: "/policy" },
  ];

  const courseLinks = [
    { name: "All Courses", href: "/courses" },
    { name: "Private Coaching", href: "/courses/private-coaching" },
    { name: "Corporate Training", href: "/courses/corporate-training" },
    { name: "Immersion Program", href: "/courses/immersion-program" },
    { name: "Traveller's Pack", href: "/courses/travellers-pack" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsCoursesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsCoursesOpen(false);
    }, 150); // 150ms delay
    setCloseTimeout(timeout);
  };

  const handleAboutMouseEnter = () => {
    if (aboutCloseTimeout) {
      clearTimeout(aboutCloseTimeout);
      setAboutCloseTimeout(null);
    }
    setIsAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsAboutOpen(false);
    }, 150); // 150ms delay
    setAboutCloseTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
      if (aboutCloseTimeout) {
        clearTimeout(aboutCloseTimeout);
      }
    };
  }, [closeTimeout, aboutCloseTimeout]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-thai ${
      isScrolled 
        ? 'bg-thai-forest-dark/95 backdrop-blur-sm shadow-thai-medium' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="flex items-center space-x-3 font-display text-xl lg:text-2xl font-bold text-white hover:text-thai-gold transition-thai"
            >
              <img
                src="/thaibridge-icon.svg"
                alt="ThaiBridge Academy Logo"
                className="h-16 object-contain"
                style={{ display: 'block' }}
              />
              <span>ThaiBridge Academy</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center justify-evenly flex-1">
              {/* Home */}
              <a
                href="/"
                className={`px-4 py-2 text-base font-medium transition-thai ${
                  isActive('/')
                    ? 'text-thai-gold border-b-2 border-thai-gold'
                    : 'text-white hover:text-thai-gold'
                }`}
              >
                Home
              </a>

              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <a
                  href="/about"
                  className={`px-4 py-2 text-base font-medium transition-thai flex items-center gap-1 ${
                    location.pathname.startsWith('/about') || location.pathname.startsWith('/affiliate') || location.pathname.startsWith('/policy')
                      ? 'text-thai-gold border-b-2 border-thai-gold'
                      : 'text-white hover:text-thai-gold'
                  }`}
                >
                  About
                                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                </a>
                
                {/* Dropdown Menu */}
                {isAboutOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      {aboutLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className={`block px-4 py-3 text-sm transition-colors ${
                            isActive(link.href)
                              ? 'text-primary bg-thai-light-tint font-medium'
                              : 'text-gray-700 hover:text-primary hover:bg-thai-light-tint'
                          }`}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Courses Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="/courses"
                  className={`px-4 py-2 text-base font-medium transition-thai flex items-center gap-1 ${
                    location.pathname.startsWith('/courses')
                      ? 'text-thai-gold border-b-2 border-thai-gold'
                      : 'text-white hover:text-thai-gold'
                  }`}
                >
                  Courses
                                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </a>
                
                {/* Dropdown Menu */}
                {isCoursesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      {courseLinks.map((course) => (
                        <a
                          key={course.name}
                          href={course.href}
                          className={`block px-4 py-3 text-sm transition-colors ${
                            isActive(course.href)
                              ? 'text-primary bg-thai-light-tint font-medium'
                              : 'text-gray-700 hover:text-primary hover:bg-thai-light-tint'
                          }`}
                        >
                          {course.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Reviews, Contact, and FAQ */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-base font-medium transition-thai ${
                    isActive(link.href)
                      ? 'text-thai-gold border-b-2 border-thai-gold'
                      : 'text-white hover:text-thai-gold'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-thai-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-thai-forest-dark/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Home */}
              <a
                href="/"
                className={`block px-3 py-3 text-lg font-medium transition-thai ${
                  isActive('/')
                    ? 'text-thai-gold bg-white/10 rounded-lg'
                    : 'text-white hover:text-thai-gold hover:bg-white/5 rounded-lg'
                }`}
              >
                Home
              </a>

              {/* Mobile About Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-lg font-medium text-thai-gold">
                  About
                </div>
                {aboutLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block px-6 py-2 text-base font-medium transition-thai ${
                      isActive(link.href)
                        ? 'text-thai-gold bg-white/10 rounded-lg'
                        : 'text-white hover:text-thai-gold hover:bg-white/5 rounded-lg'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              {/* Mobile Courses Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-lg font-medium text-thai-gold">
                  Courses
                </div>
                {courseLinks.map((course) => (
                  <a
                    key={course.name}
                    href={course.href}
                    className={`block px-6 py-2 text-base font-medium transition-thai ${
                      isActive(course.href)
                        ? 'text-thai-gold bg-white/10 rounded-lg'
                        : 'text-white hover:text-thai-gold hover:bg-white/5 rounded-lg'
                    }`}
                  >
                    {course.name}
                  </a>
                ))}
              </div>

              {/* Reviews, Contact, and FAQ */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-3 text-lg font-medium transition-thai ${
                    isActive(link.href)
                      ? 'text-thai-gold bg-white/10 rounded-lg'
                      : 'text-white hover:text-thai-gold hover:bg-white/5 rounded-lg'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
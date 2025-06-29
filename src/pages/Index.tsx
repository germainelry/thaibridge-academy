import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, BookOpen, Heart, Award, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollDown from "@/components/ScrollDown";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-thai-card-white">
      <Navigation />
      
      {/* Full-Screen Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-thai-deep-forest/60"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <p className="text-thai-accent-gold uppercase tracking-wider text-sm font-primary font-semibold">
              THAI LANGUAGE LEARNING EXCELLENCE
            </p>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Speak Thai.<br />
              Connect Deeper.
            </h1>
            
            <p className="font-primary text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Learn from native Thai speakers—online or through our unique immersion experiences. 
              Connect authentically, travel deeper, and discover the Thailand locals know.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={() => scrollToSection('courses-section')}
                className="font-primary text-lg font-semibold bg-thai-accent-gold hover:bg-thai-button-sage text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Start Learning Thai
              </button>
              <button
                onClick={() => scrollToSection('courses-section')}
                className="font-primary text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-thai-deep-forest px-10 py-4 rounded-full transition-all duration-300 bg-transparent"
              >
                Explore Courses
              </button>
            </div>
          </div>
        </div>
        
        <ScrollDown />
      </section>

      {/* Reviews Summary Section */}
      <section id="reviews-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-thai-light-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Star Rating */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 ${
                      star <= 4 ? "text-thai-accent-gold fill-thai-accent-gold" : 
                      star === 5 ? "text-thai-accent-gold fill-thai-accent-gold" : "text-thai-neutral-medium"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-thai-text-dark">4.8/5</span>
              <span className="text-thai-button-sage">Average Rating</span>
            </div>

            {/* Happy Students Counter */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-8 h-8 text-thai-button-sage" />
                <span className="text-3xl font-bold text-thai-text-dark">200+</span>
              </div>
              <span className="text-thai-button-sage">Happy Students</span>
            </div>

            {/* Read Reviews Button */}
            <div>
              <Link to="/reviews">
                <Button variant="outline" className="border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white rounded-full px-6 py-3 text-lg">
                  Read All Reviews
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section id="courses-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-thai-card-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-thai-text-dark mb-4">Our Popular Courses</h2>
            <p className="text-lg text-thai-button-sage max-w-2xl mx-auto">Choose the perfect learning path for your Thai language journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 1 to 1 Private Coaching */}
            <Card className="relative border-2 border-thai-button-sage/30 hover:border-thai-button-sage transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 bg-thai-card-white">
              <Badge className="absolute -top-3 left-4 bg-thai-accent-gold text-white px-3 py-1">
                MOST POPULAR
              </Badge>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-thai-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-thai-button-sage" />
                </div>
                <CardTitle className="text-2xl text-thai-text-dark">1 to 1 Private Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-thai-button-sage leading-relaxed">
                  For those seeking a more flexible schedule and individualized attention in learning.
                </CardDescription>
                <div className="mt-6 text-center">
                  <Link to="/courses">
                    <Button className="bg-thai-button-fresh hover:bg-thai-button-sage text-white rounded-full px-6">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Thai Mastery Series */}
            <Card className="border-2 border-thai-button-sage/30 hover:border-thai-button-sage transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 bg-thai-card-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-thai-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-thai-button-sage" />
                </div>
                <CardTitle className="text-2xl text-thai-text-dark">Thai Mastery Series</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-thai-button-sage leading-relaxed">
                  For those who want to pick up another language or become a polyglot. This multi-course series includes reading and writing of the Thai script.
                </CardDescription>
                <div className="mt-6 text-center">
                  <Link to="/courses">
                    <Button variant="outline" className="border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white rounded-full px-6">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Basic Traveller's Pack */}
            <Card className="border-2 border-thai-button-sage/30 hover:border-thai-button-sage transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 bg-thai-card-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-thai-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-thai-button-sage" />
                </div>
                <CardTitle className="text-2xl text-thai-text-dark">Basic Traveller's Pack</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-thai-button-sage leading-relaxed">
                  For those who want to be able to make simple conversations with the locals within a short period of time.
                </CardDescription>
                <div className="mt-6 text-center">
                  <Link to="/courses">
                    <Button variant="outline" className="border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white rounded-full px-6">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Our Academy Section */}
      <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-thai-light-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-thai-text-dark mb-6">About Our Academy</h2>
              <div className="space-y-4 font-primary text-lg text-thai-button-sage leading-relaxed">
                <p>
                  We at ThaiBridge firmly believe that speaking the mother tongue of the locals is the only way for making meaningful interactions and truly immersing oneself in another country. Trust us, it will open the doors to richer travel experiences that you otherwise wouldn't know existed.
                </p>
                <p>
                  We only have a simple goal: To help you foster deeper connections with the Thai culture.
                </p>
                <p>
                  But our goal extends beyond just language instruction. We aspire to cultivate a community where members exchange their Thailand adventures, travel recommendations, and cultural insights with one another.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button className="font-primary bg-thai-button-fresh hover:bg-thai-button-sage text-white rounded-full px-8">
                    Learn Our Story
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Thai temple surrounded by lush greenery" 
                className="rounded-lg shadow-2xl w-full h-auto"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-thai-deep-forest/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section id="why-join-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-thai-card-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-thai-text-dark mb-4">Why Join ThaiBridge Academy?</h2>
            <p className="font-primary text-lg text-thai-button-sage max-w-2xl mx-auto">Discover what makes our approach to Thai language learning unique and effective</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-thai-light-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-thai-accent-gold/20 transition-colors duration-300">
                <Award className="w-10 h-10 text-thai-button-sage" />
              </div>
              <h3 className="font-primary text-xl font-semibold text-thai-text-dark mb-4">Effective Learning Methodology</h3>
              <p className="font-primary text-thai-button-sage leading-relaxed">
                We've meticulously designed our syllabus following the latest scientific research on language acquisition. We prioritize techniques proven to enhance retention, comprehension, and fluency.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-thai-light-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-thai-accent-gold/20 transition-colors duration-300">
                <Star className="w-10 h-10 text-thai-button-sage" />
              </div>
              <h3 className="font-primary text-xl font-semibold text-thai-text-dark mb-4">Experienced and Qualified Instructors</h3>
              <p className="font-primary text-thai-button-sage leading-relaxed">
                Our instructors aren't just native Thai speakers; every instructor has been handpicked based on their deep knowledge of the Thai language, proficiency in English/Chinese, and extensive teaching experience spanning decades.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-thai-light-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-thai-accent-gold/20 transition-colors duration-300">
                <Calendar className="w-10 h-10 text-thai-button-sage" />
              </div>
              <h3 className="font-primary text-xl font-semibold text-thai-text-dark mb-4">Flexible Schedule</h3>
              <p className="font-primary text-thai-button-sage leading-relaxed">
                We offer flexible schedules to accommodate your busy lifestyle. If you miss a lesson, we provide recordings of all classes for playback, and allow you to join another class group (subject to availability).
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-thai-light-bg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-thai-accent-gold/20 transition-colors duration-300">
                <MessageCircle className="w-10 h-10 text-thai-button-sage" />
              </div>
              <h3 className="font-primary text-xl font-semibold text-thai-text-dark mb-4">Community</h3>
              <p className="font-primary text-thai-button-sage leading-relaxed">
                Join our community at ThaiBridge, where Thai enthusiasts come together! Share travel tips, exchange Thai recipes, and uncover hidden gems in Thailand. Whether you're a seasoned traveler or new to Thai culture, there's a place for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-thai-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-thai-text-dark mb-4">What Our Students Say</h2>
            <p className="font-primary text-lg text-thai-button-sage max-w-2xl mx-auto">Hear from our happy students</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-thai-light-bg rounded-lg shadow-lg p-8 text-center">
              <p className="font-primary text-thai-button-sage mb-4 italic">
                "The private coaching helped me speak confidently with locals during my Bangkok trip. Amazing experience!"
              </p>
              <div className="flex flex-col items-center">
                <span className="font-primary text-base font-semibold text-thai-text-dark">Jane D.</span>
                <span className="font-primary text-sm text-thai-text-secondary">Traveller, Singapore</span>
              </div>
            </Card>

            <Card className="bg-thai-light-bg rounded-lg shadow-lg p-8 text-center">
              <p className="font-primary text-thai-button-sage mb-4 italic">
                "The Thai Mastery Series is comprehensive. I can now read Thai script fluently!"
              </p>
              <div className="flex flex-col items-center">
                <span className="font-primary text-base font-semibold text-thai-text-dark">Michael T.</span>
                <span className="font-primary text-sm text-thai-text-secondary">Thai Mastery Series</span>
              </div>
            </Card>

            <Card className="bg-thai-light-bg rounded-lg shadow-lg p-8 text-center">
              <p className="font-primary text-thai-button-sage mb-4 italic">
                "Perfect for travelers! I learned essential phrases quickly before my Phuket vacation."
              </p>
              <div className="flex flex-col items-center">
                <span className="font-primary text-base font-semibold text-thai-text-dark">Jennifer W.</span>
                <span className="font-primary text-sm text-thai-text-secondary">Basic Traveller's Pack</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-thai-deep-forest text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Start Your Thai Journey Today</h2>
          <p className="font-primary text-xl mb-8 leading-relaxed text-thai-text-secondary">
            Discover the joy of learning a new language with us. Our comprehensive language programs and dedicated instructors will empower you to communicate confidently to make new connections and experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="font-primary bg-thai-button-fresh hover:bg-thai-button-sage text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Book Free Trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="font-primary border-white bg-transparent !text-white hover:bg-white hover:!text-thai-deep-forest px-8 py-4 text-lg rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Users, BookOpen, Heart, Clock, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Courses = () => {
  const courses = [
    {
      title: "1 to 1 Private Coaching",
      popular: true,
      icon: Users,
      description: "For those seeking a more flexible schedule and individualized attention in learning.",
      price: "Contact for pricing",
      duration: "Flexible scheduling",
      level: "All levels",
      features: [
        "Personalized curriculum tailored to your goals",
        "Flexible scheduling to fit your busy lifestyle",
        "One-on-one attention from experienced instructors",
        "Progress tracking and regular assessments",
        "Cultural insights and practical conversation practice",
        "Recorded sessions for review and practice"
      ]
    },
    {
      title: "Thai Mastery Series",
      popular: false,
      icon: BookOpen,
      description: "For those who want to pick up another language or become a polyglot. This multi-course series includes reading and writing of the Thai script.",
      price: "From $299",
      duration: "12 weeks per level",
      level: "Beginner to Advanced",
      features: [
        "Comprehensive multi-level curriculum",
        "Thai script reading and writing instruction",
        "Small group classes (max 8 students)",
        "Interactive learning materials and resources",
        "Regular homework and practice exercises",
        "Certificate of completion for each level"
      ]
    },
    {
      title: "Basic Traveller's Pack",
      popular: false,
      icon: Heart,
      description: "For those who want to be able to make simple conversations with the locals within a short period of time.",
      price: "From $99",
      duration: "4 weeks intensive",
      level: "Absolute Beginner",
      features: [
        "Essential phrases for travel and daily life",
        "Pronunciation and tonal practice",
        "Cultural etiquette and customs",
        "Restaurant and shopping vocabulary",
        "Emergency and medical phrases",
        "Digital phrasebook and audio files"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-thai-card-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-thai-deep-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Thai Language Courses
          </h1>
          <p className="text-xl text-thai-text-secondary mb-8 leading-relaxed">
            Choose the perfect learning path for your Thai language journey. From intensive travel preparation to comprehensive mastery programs.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-thai-light-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className={`relative border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-thai-card-white ${
                course.popular ? 'border-thai-accent-gold/60 shadow-lg' : 'border-thai-button-sage/40 hover:border-thai-button-sage'
              }`}>
                {course.popular && (
                  <Badge className="absolute -top-3 left-4 bg-thai-accent-gold text-white px-3 py-1">
                    MOST POPULAR
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    course.popular ? 'bg-thai-accent-gold/20' : 'bg-thai-light-bg'
                  }`}>
                    <course.icon className={`w-8 h-8 ${
                      course.popular ? 'text-thai-accent-gold' : 'text-thai-button-sage'
                    }`} />
                  </div>
                  <CardTitle className="text-2xl text-thai-text-dark mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-lg text-thai-button-sage mb-4">
                    {course.description}
                  </CardDescription>
                  
                  <div className="space-y-2 text-sm text-thai-button-sage">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-thai-text-dark mt-4">
                    {course.price}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-thai-button-sage mt-0.5 flex-shrink-0" />
                        <span className="text-thai-button-sage text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <Link to="/contact">
                      <Button className={`w-full rounded-full py-3 ${
                        course.popular 
                          ? 'bg-thai-accent-gold hover:bg-thai-button-sage text-white' 
                          : 'bg-thai-button-fresh hover:bg-thai-button-sage text-white'
                      }`}>
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white rounded-full py-3">
                        Free Trial Lesson
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-thai-card-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-thai-text-dark mb-4">Why Choose Our Courses?</h2>
            <p className="text-lg text-thai-button-sage max-w-2xl mx-auto">Our courses are designed with your success in mind</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-thai-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-thai-button-sage" />
              </div>
              <h3 className="text-xl font-semibold text-thai-text-dark mb-3">Native Thai Instructors</h3>
              <p className="text-thai-button-sage">Learn from experienced native speakers with decades of teaching experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-thai-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-thai-button-sage" />
              </div>
              <h3 className="text-xl font-semibold text-thai-text-dark mb-3">Scientifically Designed</h3>
              <p className="text-thai-button-sage">Our curriculum follows the latest research on language acquisition and retention.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-thai-light-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-thai-button-sage" />
              </div>
              <h3 className="text-xl font-semibold text-thai-text-dark mb-3">Cultural Connection</h3>
              <p className="text-thai-button-sage">Learn not just the language, but also Thai culture and customs for meaningful interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-thai-light-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-thai-text-dark mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-thai-button-sage mb-8">
            Book a free trial lesson today and experience our teaching methodology firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-thai-button-fresh hover:bg-thai-button-sage text-white px-8 py-3 rounded-full text-lg">
                Book Free Trial
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-thai-button-sage text-thai-button-sage hover:bg-thai-button-sage hover:text-white px-8 py-3 rounded-full text-lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;

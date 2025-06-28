
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, BookOpen, Heart, Award, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-emerald-50 to-green-200">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6 animate-fade-in">
              Sàwàtdii 🇹🇭 Speak Thai, Discover More
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Everyone can learn Thai. Learn from real native speakers with us. Travel less like a tourist in Thailand through our online courses or immersion programmes.
            </p>
            <Link to="/courses">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                View Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Summary Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Star Rating */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 ${
                      star <= 4 ? "text-yellow-400 fill-yellow-400" : 
                      star === 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-green-800">4.8/5</span>
              <span className="text-green-600">Average Rating</span>
            </div>

            {/* Happy Students Counter */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-8 h-8 text-green-600" />
                <span className="text-3xl font-bold text-green-800">200+</span>
              </div>
              <span className="text-green-600">Happy Students</span>
            </div>

            {/* Read Reviews Button */}
            <div>
              <Link to="/reviews">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full px-6 py-3 text-lg">
                  Read All Reviews
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Popular Courses</h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">Choose the perfect learning path for your Thai language journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 1 to 1 Private Coaching */}
            <Card className="relative border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <Badge className="absolute -top-3 left-4 bg-orange-500 text-white px-3 py-1">
                MOST POPULAR
              </Badge>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">1 to 1 Private Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-green-600 leading-relaxed">
                  For those seeking a more flexible schedule and individualized attention in learning.
                </CardDescription>
                <div className="mt-6 text-center">
                  <Link to="/courses">
                    <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Thai Mastery Series */}
            <Card className="border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Thai Mastery Series</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-green-600 leading-relaxed">
                  For those who want to pick up another language or become a polyglot. This multi-course series includes reading and writing of the Thai script.
                </CardDescription>
                <div className="mt-6 text-center">
                  <Link to="/courses">
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full px-6">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Basic Traveller's Pack */}
            <Card className="border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Basic Traveller's Pack</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg text-green-600 leading-relaxed">
                  For those who want to be able to make simple conversations with the locals within a short period of time.
                </CardDescription>
                <div className="mt-6 text-center">
                  <Link to="/courses">
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full px-6">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">About ThaiBridge Academy</h2>
              <div className="space-y-4 text-lg text-green-700 leading-relaxed">
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
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8">
                    Learn Our Story
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Thai temple surrounded by lush greenery" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Why Join ThaiBridge Academy?</h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">Discover what makes our approach to Thai language learning unique and effective</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <Award className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Effective Learning Methodology</h3>
              <p className="text-green-600 leading-relaxed">
                We've meticulously designed our syllabus following the latest scientific research on language acquisition. We prioritize techniques proven to enhance retention, comprehension, and fluency.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <Star className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Experienced Instructors</h3>
              <p className="text-green-600 leading-relaxed">
                Our instructors aren't just native Thai speakers; every instructor has been handpicked based on their deep knowledge of the Thai language, proficiency in English/Chinese, and extensive teaching experience spanning decades.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <Calendar className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Flexible Schedule</h3>
              <p className="text-green-600 leading-relaxed">
                We offer flexible schedules to accommodate your busy lifestyle. If you miss a lesson, we provide recordings of all classes for playback, and allow you to join another class group (subject to availability).
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Community</h3>
              <p className="text-green-600 leading-relaxed">
                Join our community at ThaiBridge, where Thai enthusiasts come together! Share travel tips, exchange Thai recipes, and uncover hidden gems in Thailand. Whether you're a seasoned traveler or new to Thai culture, there's a place for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Thai Language Journey Today</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Discover the joy of learning a new language with us. Our comprehensive language programs and dedicated instructors will empower you to communicate confidently to make new connections and experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                View Courses
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg rounded-full">
                Book Free Trial
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

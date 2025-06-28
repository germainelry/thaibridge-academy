
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cultural Connection",
      description: "We believe language learning is about connecting hearts and minds across cultures."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building a supportive community of Thai language enthusiasts and cultural explorers."
    },
    {
      icon: Award,
      title: "Excellence in Teaching",
      description: "Committed to the highest standards in language education and student success."
    },
    {
      icon: Globe,
      title: "Global Understanding",
      description: "Fostering cross-cultural understanding through meaningful communication."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-emerald-50 to-green-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            About ThaiBridge Academy
          </h1>
          <p className="text-xl text-green-700 mb-8 leading-relaxed">
            Bridging cultures through the beautiful Thai language. Discover our story, mission, and the passionate team behind your learning journey.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-green-700 leading-relaxed">
                <p>
                  We at ThaiBridge firmly believe that speaking the mother tongue of the locals is the only way for making meaningful interactions and truly immersing oneself in another country. Trust us, it will open the doors to richer travel experiences that you otherwise wouldn't know existed.
                </p>
                <p>
                  We only have a simple goal: <strong>To help you foster deeper connections with the Thai culture.</strong>
                </p>
                <p>
                  But our goal extends beyond just language instruction. We aspire to cultivate a community where members exchange their Thailand adventures, travel recommendations, and cultural insights with one another.
                </p>
                <p>
                  Founded by a team of passionate educators and Thai culture enthusiasts, ThaiBridge Academy was born from the recognition that traditional language learning often falls short of preparing students for real-world cultural interactions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Thai landscape with traditional elements" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-green-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
                <p className="text-lg text-green-700 leading-relaxed">
                  To empower learners with authentic Thai language skills and cultural understanding, enabling meaningful connections and enriching travel experiences throughout Thailand.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-green-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
                <p className="text-lg text-green-700 leading-relaxed">
                  To be the leading bridge between Thai culture and international learners, creating a global community of cultural ambassadors who celebrate and share Thailand's rich heritage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">The principles that guide everything we do at ThaiBridge Academy</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <value.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">{value.title}</h3>
                <p className="text-green-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Meet Our Instructors</h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Our experienced team of native Thai speakers and cultural experts are here to guide your learning journey
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-lg text-green-700 leading-relaxed mb-6">
              Our instructors aren't just native Thai speakers; every instructor has been handpicked based on their deep knowledge of the Thai language, proficiency in English/Chinese, and extensive teaching experience spanning decades.
            </p>
            <p className="text-lg text-green-700 leading-relaxed mb-8">
              Each brings unique insights into Thai culture, regional dialects, and the subtle nuances that make authentic communication possible. They are not just teachers - they are cultural ambassadors passionate about sharing the beauty of Thailand with the world.
            </p>
            <Link to="/contact">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Thai cultural scene with community gathering" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Building Community</h2>
              <div className="space-y-4 text-lg text-green-700 leading-relaxed">
                <p>
                  At ThaiBridge Academy, we're more than just a language school - we're a thriving community of Thai culture enthusiasts, travelers, and lifelong learners.
                </p>
                <p>
                  Our students regularly share their Thailand adventures, exchange travel tips, discover hidden local gems, and even share authentic Thai recipes they've learned from their cultural immersion.
                </p>
                <p>
                  Whether you're planning your first trip to Thailand or you're a seasoned traveler looking to deepen your cultural connections, you'll find your place in our welcoming community.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8">
                    Join Our Community
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Join thousands of students who have discovered the joy of connecting with Thai culture through language learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
                Explore Courses
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg rounded-full">
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

export default About;

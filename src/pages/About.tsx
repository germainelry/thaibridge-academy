import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Globe, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Cultural Authenticity",
    description: "We believe in preserving and sharing the rich heritage of Thai culture through genuine interactions and traditional teaching methods passed down through generations."
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Learning a language is about connecting with people. We foster a supportive community where students share experiences, culture, and friendships that last beyond the classroom."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Our approach combines traditional Thai wisdom with modern international standards, creating a bridge between cultures that enriches both students and instructors."
  },
  {
    icon: Award,
    title: "Excellence in Education",
    description: "We maintain the highest standards in language instruction, using scientifically-proven methods combined with cultural immersion for effective and enjoyable learning."
  }
];

const team = [
  {
    name: "Ajarn Siriporn",
    title: "Founder & Head Instructor",
    description: "Native Thai speaker with 15 years of teaching experience. MA in Applied Linguistics from Chulalongkorn University.",
    specialties: ["Business Thai", "Cultural Immersion", "Advanced Grammar"]
  },
  {
    name: "Ajarn Wichai",
    title: "Senior Language Instructor",
    description: "Specialized in beginner-friendly teaching methods. Former diplomat with deep understanding of cross-cultural communication.",
    specialties: ["Beginner Thai", "Pronunciation", "Cultural Etiquette"]
  },
  {
    name: "Ajarn Napaporn",
    title: "Immersion Program Director",
    description: "Cultural anthropologist and language educator. Designs authentic cultural experiences for our immersion programs.",
    specialties: ["Cultural Studies", "Immersion Programs", "Travel Thai"]
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-thai-forest-deep text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              About ThaiBridge Academy
            </h1>
            <p className="text-xl lg:text-2xl text-thai-text-secondary leading-relaxed animate-slide-up">
              Building bridges between cultures through authentic Thai language education
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
              Our Story
            </h2>
            
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                ThaiBridge Academy was founded with a simple yet powerful belief: that speaking the mother tongue 
                of the locals is the only way to make meaningful interactions and truly immerse oneself in another 
                country. Trust us, it will open the doors to richer travel experiences that you otherwise wouldn't 
                know existed.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                We only have a simple goal: <strong className="text-primary">To help you foster deeper connections 
                with the Thai culture.</strong>
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                But our goal extends beyond just language instruction. We aspire to cultivate a community where 
                members exchange their Thailand adventures, travel recommendations, and cultural insights with one 
                another. Because learning Thai isn't just about words—it's about opening your heart to a beautiful 
                culture and connecting with its people in meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-thai-light-tint py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="shadow-thai-medium">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold text-thai-text-dark mb-6">Our Mission</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Learn from native Thai speakers—online or through our unique immersion experiences. 
                    Connect authentically, travel deeper, and discover the Thailand locals know.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-thai-medium">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold text-thai-text-dark mb-6">Our Vision</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    To be the leading bridge between Thai culture and international learners, creating a 
                    global community of cultural ambassadors who celebrate and share Thailand's rich heritage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="shadow-thai-medium hover:shadow-thai-strong transition-thai">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-thai-text-dark mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-thai-light-tint py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-thai-text-dark mb-12">
            Meet Our Expert Instructors
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="shadow-thai-medium hover:shadow-thai-strong transition-thai">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-thai-text-dark mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-primary font-semibold mb-4">
                    {member.title}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  <div>
                    <p className="font-semibold text-thai-text-dark mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-thai-forest-deep text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-thai-text-secondary mb-8 max-w-2xl mx-auto">
            Join our community of Thai language learners and cultural enthusiasts. 
            Let's build bridges together.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => window.location.href = '/courses'}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
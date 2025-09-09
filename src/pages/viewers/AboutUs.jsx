import React from "react";
import { 
  Users, 
  Calendar, 
  BookOpen, 
  Heart,
  Target,
  BarChart3
} from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 px-4 md:px-12 lg:px-20 py-12 md:py-16 min-h-screen" id="AboutUs">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
          About Forging Of Men
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Empowering mental wellness through accessible support, community, and education
        </p>
      </div>

      {/* Our Story */}
      <div className="mb-16 flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 md:p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-green-700 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Our Story
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-green-800 text-lg mb-2">Meet Dr. Amelia Hayes</h4>
                <p className="text-gray-700">
                  Dr. Hayes, a seasoned psychologist with over 15 years of experience, founded MindfulPath with a vision to make mental health support accessible to everyone. Her journey began with a deep-seated belief in the power of therapy to transform lives.
                </p>
              </div>
              <p className="text-gray-700">
                Today, MindfulPath connects thousands of individuals with qualified professionals and valuable resources, creating a supportive community for mental wellness.
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/images/img1.jpg"
              alt="Dr. Amelia Hayes"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg border-4 border-white"
            />
            <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md">
              <p className="font-semibold">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="mb-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-teal-50 to-green-50 p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4 flex items-center gap-2">
            <Target className="w-6 h-6" />
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At MindfulPath, our mission is to empower individuals on their journey to mental wellness by providing a comprehensive platform that connects them with experienced psychologists, engaging events, and educational resources. We strive to break down barriers to mental health support and foster a community of understanding and growth.
          </p>
        </div>
      </div>

      {/* Our Goals */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-green-700 mb-8 text-center flex items-center justify-center gap-2">
          <BarChart3 className="w-6 h-6" />
          Our Goals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Goal 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-green-700" />
            </div>
            <h4 className="font-semibold text-lg text-green-800 mb-2">Expand Access to Care</h4>
            <p className="text-gray-600">
              We aim to connect individuals with the right mental health professionals, ensuring personalized and effective support.
            </p>
          </div>

          {/* Goal 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-7 h-7 text-green-700" />
            </div>
            <h4 className="font-semibold text-lg text-green-800 mb-2">Promote Community Engagement</h4>
            <p className="text-gray-600">
              We offer a diverse range of events and workshops to promote mental wellness and community engagement.
            </p>
          </div>

          {/* Goal 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-7 h-7 text-green-700" />
            </div>
            <h4 className="font-semibold text-lg text-green-800 mb-2">Provide Educational Resources</h4>
            <p className="text-gray-600">
              We provide a rich library of resources, including articles, videos, and guides, to support continuous learning and self-care.
            </p>
          </div>
        </div>
      </div>

      {/* Our Impact */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-green-700 mb-8 text-center">Our Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-green-700 mb-2">5,000+</div>
            <div className="text-lg font-semibold text-green-800">Clients Served</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-green-700 mb-2">100+</div>
            <div className="text-lg font-semibold text-green-800">Events Hosted</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-green-700 mb-2">200+</div>
            <div className="text-lg font-semibold text-green-800">Resources Available</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-green-100">
          <p className="text-gray-700 text-center text-lg">
            Since our inception, MindfulPath has positively impacted thousands of lives, fostering a supportive environment for mental wellness. We are committed to continuous growth and innovation to better serve our community.
          </p>
        </div>
      </div>

      {/* Call to Action */}
     
    </section>
  );
};

export default AboutUs;
import { Users, Calendar, BookOpen, Target,BarChart3,Shield,Heart,Star,Anchor} from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-16 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
          Forging Of Men
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          A man can only be manly when guided by other men who have embraced conventional masculinity and thus approved by them. 
          Therefore as iron sharpens iron, man sharpens man.
        </p>
      </div>

      {/* Our Story */}
      <div className="mb-16 md:mb-20 flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
        <div className="lg:w-1/2 w-full order-2 lg:order-1">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 md:p-8 rounded-2xl shadow-lg border border-green-100">
            <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6" />
              About Forging of Men
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                <p className="text-gray-700 leading-relaxed">
                  Forging of Men (FoM) is an initiative dedicated to empowering men to grow into healthy, conventional masculine, purposeful, and connected individuals through mental health awareness, mentorship, and community engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full flex justify-center order-1 lg:order-2">
          <div className="relative max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl opacity-20 blur-lg"></div>
            <img
              src="/images/mrceo.jpg"
              alt="Mr. Evans Ambunya"
              className="w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 object-cover rounded-2xl shadow-xl border-4 border-white relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-600 to-teal-500 text-white px-4 py-3 rounded-xl shadow-lg z-20">
              <p className="font-bold text-sm">Founder & CEO</p>
              <p className="font-semibold text-sm">Mr. Evans Ambunya</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="mb-16 md:mb-20 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 md:p-8 rounded-2xl shadow-lg border border-green-100">
          <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-3">
            <Target className="w-6 h-6" />
            Our Mission
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Empower men to forge authentic, resilient, and purposeful lives by cultivating healthy relationships with themselves, other men, women, and God, while promoting mental health awareness and positive masculinity in Kenyan and global communities.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-3 flex items-center justify-center gap-3">
            <BarChart3 className="w-6 h-6 md:w-7 md:h-7" />
            Our Core Values
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The foundational principles that guide our mission and shape the men we help forge
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Value 1 */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-green-100 to-teal-100 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
            </div>
            <h4 className="font-bold text-lg text-green-800 mb-3">Authenticity</h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Encouraging men to live true to their values, conventional masculinity embracing self-awareness and emotional honesty.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-green-100 to-teal-100 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
            </div>
            <h4 className="font-bold text-lg text-green-800 mb-3">Brotherhood</h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Fostering supportive, collaborative relationships among men to combat isolation and build trust.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-green-100 to-teal-100 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4">
              <Anchor className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
            </div>
            <h4 className="font-bold text-lg text-green-800 mb-3">Resilience</h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Equipping men with tools to navigate mental health challenges and life's adversities.
            </p>
          </div>

          {/* Value 4 */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-green-100 to-teal-100 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4">
              <Star className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
            </div>
            <h4 className="font-bold text-lg text-green-800 mb-3">Respect</h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Promoting equality and dignity in relationships with women, authority, and diverse communities.
            </p>
          </div>

          {/* Value 5 */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-green-100 to-teal-100 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
            </div>
            <h4 className="font-bold text-lg text-green-800 mb-3">Purpose</h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Guiding men to align actions with spiritual and personal goals for meaningful impact.
            </p>
          </div>

          {/* Value 6 - Additional for better grid layout */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-green-100 to-teal-100 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
            </div>
            <h4 className="font-bold text-lg text-green-800 mb-3">Growth</h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Committed to continuous personal development and helping men evolve into their best versions.
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default AboutUs;
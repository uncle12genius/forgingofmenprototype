import { 
  Users, 
  Calendar, 
  BookOpen, 
  Target,
  BarChart3
} from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 px-4 md:px-12 lg:px-20 py-12 md:py-16 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semi-bold mb-4 bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
          Forging Of Men
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          A man can only be manly  when guided by other men who have embraced conventional masculinity and thus approved by them. 
          Therefore as iron sharpens  iron, man sharpens man . 
        </p>
      </div>

      {/* Our Story */}
      <div className="mb-16 flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 md:p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-green-700 mb-4 flex items-center gap-2">

              About Forging of men 
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                {/* <h4 className="font-bold text-green-800 text-lg mb-2">Meet Mr. Evans Ambunya </h4> */}
                <p className="text-gray-700">
                  Forging of Men (FoM) is an initiative dedicated to empowering men to grow into healthy, conventional masculine, purposeful, and connected individuals through mental health awareness, mentorship, and community engagement.
                      </p>
              </div>
              {/* <p className="text-gray-700">
                Today, MindfulPath connects thousands of individuals with qualified professionals and valuable resources, creating a supportive community for mental wellness.
              </p> */}
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/images/mrceo.jpg"
              alt="Dr. Amelia Hayes"
              className="w-65 h-64 md:w-80 md:h-90 object-cover rounded-2xl shadow-lg border-4 border-white"
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
              Empower men to forge authentic, resilient, and purposeful lives by cultivating healthy relationships with themselves, other men, women, and God, while promoting mental health awareness and positive masculinity in Kenyan and global communities.</p>
        </div>
      </div>

      {/* Our Goals */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-green-700 mb-8 text-center flex items-center justify-center gap-2">
          <BarChart3 className="w-6 h-6" />
          Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Goal 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-green-700" />
            </div>
            <h4 className="font-semibold text-lg text-green-800 mb-2">Authenticity</h4>
            <p className="text-gray-600">
              Encouraging men to live true to their values, conventional masculinity embracing self-awareness and emotional honesty.
            </p>
          </div>

          {/* Goal 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-green-700" />
            </div>
            <h4 className="font-semibold text-lg text-green-800 mb-2">Brotherhood </h4>
            <p className="text-gray-600">
            Fostering supportive, collaborative relationships among men to combat isolation and build trust.

            </p>
          </div>

          {/* Goal 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-7 h-7 text-green-700" />
            </div>
            <h4 className="font-semibold text-lg text-green-800 mb-2">Respect </h4>
            <p className="text-gray-600">
              Promoting equality and dignity in relationships with women, authority, and diverse communities.
            </p>
          </div>
        </div>
      </div>

      {/* Our Impact */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-green-700 mb-8 text-center">The Approach</h3>
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
        {/* <div className="bg-white p-6 rounded-2xl shadow-md border border-green-100">
          <p className="text-gray-700 text-center text-lg">
            Since our inception, MindfulPath has positively impacted thousands of lives, fostering a supportive environment for mental wellness. We are committed to continuous growth and innovation to better serve our community.
          </p>
        </div> */}
      </div>

      {/* Call to Action */}
     
    </section>
  );
};

export default AboutUs;
import { 
  User, 
  Users, 
  Heart, 
  Cross 
} from "lucide-react";

const Approach = () => {
  const pillars = [
    {
      id: 1,
      title: "A man's relationship with HIMSELF",
      icon: User,
      color: "blue"
    },
    {
      id: 2,
      title: "A man's relationship with other MEN",
      icon: Users,
      color: "emerald"
    },
    {
      id: 3,
      title: "A man's relationship with WOMEN",
      icon: Heart,
      color: "rose"
    },
    {
      id: 4,
      title: "A man's relationship with GOD",
      icon: Cross,
      color: "violet"
    }
  ];

  const colorClasses = {
    blue: "border-blue-200/80 text-blue-900 hover:bg-blue-500/5",
    emerald: "border-emerald-200/80 text-emerald-900 hover:bg-emerald-500/5",
    rose: "border-rose-200/80 text-rose-900 hover:bg-rose-500/5", 
    violet: "border-violet-200/80 text-violet-900 hover:bg-violet-500/5"
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 tracking-tight">
            THE FOUR PILLARS
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Foundational relationships that define a man's journey
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200/60 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-24">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={pillar.id} className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Desktop: Side alignment */}
                  <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'} hidden md:block`}>
                    <div className={`p-8 rounded-3xl bg-white/70 backdrop-blur-sm border ${colorClasses[pillar.color]} shadow-sm hover:shadow-md transition-all duration-500 group cursor-pointer`}>
                      <h3 className="text-2xl font-semibold mb-4 group-hover:translate-x-2 transition-transform duration-300">
                        {pillar.title}
                      </h3>
                      <div className="flex items-center gap-4 text-slate-600">
                        <div className={`w-10 h-10 rounded-xl bg-${pillar.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-5 h-5 text-${pillar.color}-600`} />
                        </div>
                        <span className="text-sm font-medium">Pillar {index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile: Stack layout */}
                  <div className="flex-1 md:hidden">
                    <div className={`p-6 rounded-2xl bg-white/80 backdrop-blur-sm border ${colorClasses[pillar.color]} shadow-sm hover:shadow-md transition-all duration-300 group`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-${pillar.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-6 h-6 text-${pillar.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold">{pillar.title}</h3>
                        </div>
                      </div>
                      <div className={`w-16 h-1 bg-${pillar.color}-200 rounded-full`}></div>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-12 h-12 rounded-full bg-${pillar.color}-500 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-125 transition-transform duration-300`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
import HeroSection from "@/components/hero";
import { featuresData, howItWorksData, statsData } from "@/data/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 mb-20">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Our Key Stats</h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 ease-in-out duration-300 border border-gray-100"
              >
                <div className="text-5xl font-extrabold text-blue-600">{stat.value}</div>
                <div className="text-lg text-gray-600 mt-4">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 mb-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Everything You Need To Manage Your Finances</h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuresData.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ease-in-out duration-300 border border-gray-100"
              >
                <div className="text-5xl text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 mb-20 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">How It Works</h2>

          {/* Horizontal Timeline */}
          <div className="flex justify-center items-center space-x-16 relative">
            {/* Timeline Connector Line */}
            <div className="absolute inset-y-1/2 left-1/2 transform -translate-x-1/2 w-full h-px bg-gray-300"></div>

            {/* Steps */}
            {howItWorksData.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Step Number */}
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full border-4 border-white shadow-xl absolute top-0 transition-all duration-300 transform hover:scale-110">
                  {index + 1}
                </div>

                {/* Step Content */}
                <div className="w-72 h-80 bg-white rounded-xl shadow-lg border border-gray-100 p-8 mt-16 flex flex-col justify-between transition-all transform hover:scale-105 ease-in-out duration-300">
                  {/* Step Icon */}
                  <div className="text-5xl text-blue-600 mb-6">
                    {step.icon}
                  </div>
                  {/* Step Title */}
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                  {/* Step Description */}
                  <p className="text-gray-600 flex-grow">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

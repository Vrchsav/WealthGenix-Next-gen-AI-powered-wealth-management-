import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 mb-20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-12">Our Key Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 ease-in-out duration-300 border border-gray-100"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-600">{stat.value}</div>
                <div className="text-lg text-gray-600 mt-4">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 mb-20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-12">Everything You Need To Manage Your Finances</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ease-in-out duration-300 border border-gray-100"
              >
                <div className="text-4xl sm:text-5xl text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 mb-20">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-12">How It Works</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-12 sm:space-y-0 sm:space-x-16 relative">
            <div className="absolute inset-y-1/2 left-1/2 transform -translate-x-1/2 w-full h-px bg-gray-300"></div>
            {howItWorksData.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full border-4 border-white shadow-xl absolute top-0 transition-all duration-300 transform hover:scale-110">
                  {index + 1}
                </div>
                <div className="w-72 sm:w-80 h-72 sm:h-80 bg-white rounded-xl shadow-lg border border-gray-100 p-8 mt-16 sm:mt-24 flex flex-col justify-between transition-all transform hover:scale-105 ease-in-out duration-300">
                  <div className="text-4xl sm:text-5xl text-blue-600 mb-6">{step.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 flex-grow">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 ">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="relative p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ease-in-out duration-300 border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 text-6xl text-gray-300">
                  “
                </div>

                <div className="flex justify-center mb-6">
                  <Image width={40} height={40} src={testimonial.image} alt={testimonial.name} className="rounded-full border-4 border-blue-600" />
                </div>
                <div className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">{testimonial.name}</div>
                <div className="text-gray-600 mb-4">{testimonial.role}</div>
                <p className="text-gray-600">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
  <div className="container mx-auto max-w-6xl text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 sm:mb-8 animate__animated animate__fadeIn">
      Ready to Take Control of Your Finances?
    </h2>
    <p className="text-lg sm:text-xl mb-8 sm:mb-12 animate__animated animate__fadeIn animate__delay-1s">
      Join thousands of users who are already managing their finances smarter with WealthgeniX. Start your journey to financial freedom today!
    </p>
    <Link href="/dashboard">
      <Button className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-700 rounded-full hover:from-indigo-700 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-xl">
        Start Your Free Trial
      </Button>
    </Link>
  </div>
</section>


    </div>
  );
}

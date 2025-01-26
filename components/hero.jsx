"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-40 w-full  text-center py-20 px-4 pb-20">
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        
        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Manage Your Finances<br /> with <span className="text-blue-600">Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            An AI-driven solution to optimize your wealth management strategy.
          </p>
        </motion.div>

        {/* CTA Buttons - Centered */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link href="/dashboard">
            <Button size="lg" className="px-8 shadow-lg hover:scale-105 transition-transform">
              Get Started
            </Button>
          </Link>
          <Link href="https://github.com/Vrchsav/WealthGenix-Next-gen-AI-powered-wealth-management-">
            <Button variant="outline" size="lg" className="px-8 border-gray-400 text-gray-700 hover:border-gray-700 hover:text-gray-900">
              Learn More
            </Button>
          </Link>
        </motion.div>

        {/* Hero Image - Hover Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }} // Hover effect
          className="mt-12 w-full max-w-5xl"
        >
          <Image 
            src="/bannerr.jpeg" 
            width={1400} 
            height={800} 
            alt="Finance Management Banner" 
            className="rounded-xl shadow-2xl object-cover mx-auto"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
};


export default HeroSection;

import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/about-background.jpeg";

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 text-white overflow-hidden">
      {/* Moving Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1, x: ["-2%", "2%", "-2%"] }} // Slight side-to-side movement
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <motion.div 
        className="relative max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl font-extrabold text-white drop-shadow-lg mb-6">
          Our Story
        </h2>

        <p className="text-lg text-white text-opacity-90 leading-relaxed">
          Welcome to India Bakery, where tradition meets innovation!  
          From the aroma of freshly baked bread to the artistry of handcrafted cakes, we bring you an experience filled with warmth and love.  
          <br /><br />
          What started as a small family-run bakery has now grown into a beloved name, known for its authentic recipes, premium ingredients, and heartfelt craftsmanship.  
          Whether it's a simple loaf of bread or a grand wedding cake, every bite is made with the same love and passion that started our journey.  
          <br /><br />
          We take pride in blending traditional Indian flavors with modern baking techniques, ensuring that every treat tells a story of heritage and joy.  
          Our dedication to excellence means that every cake, pastry, and bread is crafted to perfection—because every celebration deserves something truly special.
        </p>
      </motion.div>
    </div>
  );
};

export default About;

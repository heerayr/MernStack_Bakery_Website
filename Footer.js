import React, { useState } from "react";
import { FaInstagram, FaYelp, FaGoogle, FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope, FaRobot } from "react-icons/fa";
import Wrapper from "./Wrapper";

// Gemini API Configuration
const GEMINI_API_KEY = ""; // Replace with your actual API key

const Footer = () => {
  const [showRecommender, setShowRecommender] = useState(false);
  const [preference, setPreference] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to call Gemini API
  const getRecommendationFromGemini = async (userPreference) => {
    try {
      // API URL with your key included
      const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;      
      // Request body for Gemini API
      const requestBody = {
        contents: [{
          parts: [{
            text: `You are a dessert expert AI for Pastry Haven bakery.
            A customer has the following preference: "${userPreference}"
            Recommend a single specific pastry or dessert based on their preference.
            Keep your response short (1-2 sentences) and conversational.
            Include a specific pastry name that would be found in a high-end bakery.
            
            Only respond with the recommendation itself.`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 100,
        }
      };

      // Make fetch request
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Extract text from response
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text.trim();
      } else {
        throw new Error("Unexpected API response format");
      }
    } catch (error) {
      console.error("Error getting recommendation:", error);
      throw error;
    }
  };

  // Function to handle fallback recommendations if API fails
  const getFallbackRecommendation = (userPreference) => {
    const preferences = userPreference.toLowerCase();
    
    // Predefined recommendations based on common preferences
    if (preferences.includes("chocolate")) {
      return "I recommend our Triple Chocolate Entremet with layers of dark, milk, and white chocolate mousse.";
    } else if (preferences.includes("fruit") || preferences.includes("berry")) {
      return "I recommend our Fresh Berry Charlotte with seasonal berries and light vanilla cream.";
    } else if (preferences.includes("coffee") || preferences.includes("espresso")) {
      return "I recommend our Coffee Opera Cake with alternating layers of coffee buttercream and almond sponge.";
    } else if (preferences.includes("caramel") || preferences.includes("salt")) {
      return "I recommend our Salted Caramel Paris-Brest with praline cream and crunchy caramelized nuts.";
    } else if (preferences.includes("light") || preferences.includes("not too sweet")) {
      return "I recommend our Yuzu Chiffon Cake with its delicate citrus flavor and airy texture.";
    } else {
      return "I recommend our Signature Hazelnut Praline Tart, a perfect balance of nutty flavors and rich chocolate.";
    }
  };

  const handleGetRecommendation = async () => {
    if (!preference.trim()) return;
    
    setIsLoading(true);
    try {
      // Try using the Gemini API first
      let result = await getRecommendationFromGemini(preference);
      setRecommendation(result);
    } catch (error) {
      // If API fails, use the fallback system
      console.log("Using fallback recommendation system");
      const fallbackResult = getFallbackRecommendation(preference);
      setRecommendation(fallbackResult);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-3 relative">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          {/* MENU START */}
          <div className="flex flex-col gap-4 shrink-0">
            <div className="font-serif font-semibold text-2xl cursor-pointer text-teal-400 hover:text-teal-300 transition duration-300">
              Pastry Haven
            </div>
            <div className="font-light text-sm leading-relaxed max-w-xs">
              Whether you're enjoying a casual meal or a special occasion, we promise a memorable experience with every visit.
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-400 transition duration-300"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-400 transition duration-300"
              >
                <FaYelp size={16} />
              </a>
              <a
                href="https://www.zomato.com/coimbatore/best-dine-out-restaurants"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-400 transition duration-300"
              >
                <FaGoogle size={16} />
              </a>
            </div>
          </div>
          {/* MENU END */}

          {/* NORMAL MENU START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* MENU START */}
            <div className="flex flex-col gap-4">
              <div className="font-medium text-base text-teal-400">
                Working Hours
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FaClock size={14} className="text-teal-400" />
                <span>Sunday-Thursday: 5:00 pm - 11:00 pm</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FaClock size={14} className="text-teal-400" />
                <span>Friday-Saturday: 5:00 pm - 12:00 am</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FaClock size={14} className="text-teal-400" />
                <span>Monday: Closed</span>
              </div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-4">
              <div className="font-medium text-base text-teal-400">
                Our Address
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <FaMapMarkerAlt size={14} className="text-teal-400 mt-1" />
                <span>RS puram, Coimbatore, Tamilnadu, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FaPhone size={14} className="text-teal-400" />
                <span>12345 777821</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FaEnvelope size={14} className="text-teal-400" />
                <span>pastryhaven@gmail.com</span>
              </div>
            </div>
            {/* MENU END */}
          </div>
          {/* NORMAL MENU END */}
        </div>
        {/* LEFT END */}

        {/* SWEET TOOTH AI ICON - PROMINENT PLACEMENT */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => setShowRecommender(!showRecommender)}
            className="bg-teal-600 hover:bg-teal-500 text-white p-3 rounded-full transition duration-300 group flex flex-col items-center"
            title="Sweet Tooth AI - Get Dessert Recommendations"
          >
            <FaRobot size={28} className="mb-1" />
            <span className="text-xs font-medium">Sweet Tooth AI</span>
          </button>
        </div>
      </Wrapper>
      
      {/* AI RECOMMENDER POPUP */}
      {showRecommender && (
        <div className="fixed bottom-20 right-4 md:right-8 bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md z-50 border border-teal-400">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-teal-400 font-medium flex items-center gap-2">
              <FaRobot size={20} /> Sweet Tooth AI
            </h3>
            <button 
              onClick={() => setShowRecommender(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-gray-300 mb-3">
            Not sure what to order? Tell me what flavors or textures you're craving today, and I'll suggest the perfect treat!
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              placeholder="e.g., Something with chocolate, A light fruity dessert..."
              className="px-3 py-2 bg-gray-700 rounded-md text-white text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              onClick={handleGetRecommendation}
              disabled={isLoading}
              className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-4 rounded-md text-sm transition duration-300 disabled:opacity-50"
            >
              {isLoading ? "Thinking..." : "Get Recommendation"}
            </button>
          </div>
          {recommendation && (
            <div className="mt-3 p-3 bg-gray-700 rounded-md text-sm text-white">
              {recommendation}
            </div>
          )}
        </div>
      )}

      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0 border-t border-gray-700 pt-6">
        {/* LEFT START */}
        <div className="text-[12px] text-gray-500 text-center md:text-left">
          © 2025 Pastry Haven. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 md:gap-6 text-center md:text-left flex-wrap justify-center">
          <a href="#" className="text-[12px] text-gray-500 hover:text-teal-400 transition duration-300">
            Careers
          </a>
          <a href="#" className="text-[12px] text-gray-500 hover:text-teal-400 transition duration-300">
            Allergen Information
          </a>
          <a href="#" className="text-[12px] text-gray-500 hover:text-teal-400 transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-[12px] text-gray-500 hover:text-teal-400 transition duration-300">
            Terms of Service
          </a>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
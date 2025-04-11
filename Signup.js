import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi"; // More elegant icons
import { motion } from "framer-motion"; // For animations


const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setIsLoading(true);
        const apiUrl = `${process.env.REACT_APP_SERVER_DOMAIN}/api/auth/signup`; //error: used backtick instead of ', could not ectify for days
        console.log("API URL being called:", apiUrl);
        
        try {
          const fetchData = await fetch(apiUrl, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          });
  
          console.log("Response status:", fetchData.status);
          
          const dataRes = await fetchData.json();
          toast.success(dataRes.message, {
            icon: '🧁',
            style: {
              borderRadius: '10px',
              background: '#FFF8F0',
              color: '#7B3F00',
            },
          });
          if (dataRes.alert) navigate("/login");
        } catch (error) {
          console.error("Signup error details:", error);
          toast.error("Something went wrong. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      } else {
        toast.error("Passwords don't match", {
          icon: '⚠️',
        });
      }
    } else {
      toast.error("Please fill all required fields", {
        icon: '📝',
      });
    }
  };
  
  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-100 flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23815b3a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl font-bold text-rose-700 mb-2 font-serif">Sweet Beginnings</h1>
        <p className="text-lg text-amber-700 italic">Join our bakery family today!</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Left side - Image and promotional text */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col items-center justify-center"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-amber-200 rounded-full blur-md transform -rotate-6"></div>
            <img
              src="/bakery-illustration.jpg" // Replace with your actual image path
              alt="Bakery Delights"
              className="w-64 h-64 object-cover rounded-full relative z-10 shadow-lg border-4 border-white"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1715187985248-84b03aabe629?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Fallback image
              }}
            />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">Member Benefits</h3>
            <ul className="space-y-3">
              {["Early access to seasonal specials", "Birthday treats on us", "Exclusive recipes", "Member-only discounts"].map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-center text-amber-700"
                >
                  <span className="mr-2">🍰</span> {benefit}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1"
        >
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-800 to-amber-700 p-4 text-white">
              <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-amber-800 font-medium">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleOnChange}
                    className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    placeholder="John"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-amber-800 font-medium">Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleOnChange}
                    className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <label className="block text-amber-800 font-medium">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mt-6 space-y-2">
                <label className="block text-amber-800 font-medium">Password*</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={data.password}
                    onChange={handleOnChange}
                    className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition pr-10"
                    placeholder="••••••••"
                    required
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-amber-600 hover:text-amber-800 transition"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <label className="block text-amber-800 font-medium">Confirm Password*</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleOnChange}
                    className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition pr-10"
                    placeholder="••••••••"
                    required
                  />
                  <button 
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-amber-600 hover:text-amber-800 transition"
                    onClick={handleShowConfirmPassword}
                  >
                    {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-gradient-to-r from-amber-800 to-amber-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : "Join the Bakery Family"}
              </motion.button>
              
              <div className="mt-6 text-center">
                <p className="text-amber-700">
                  Already have an account?{" "}
                  <a href="/login" className="font-medium text-amber-600 hover:text-amber-800 underline transition">
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 text-center text-amber-700 text-sm"
      >
        <p>By signing up, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a></p>
      </motion.div>
    </div>
  );
};

export default Signup;
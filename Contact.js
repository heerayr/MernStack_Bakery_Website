import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      icon: "📩",
      style: {
        borderRadius: "10px",
        background: "#FFF8F0",
        color: "#7B3F00",
      },
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-100 flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23815b3a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl font-bold text-amber-900 font-serif mb-2">Get in Touch</h1>
        <p className="text-lg text-amber-800 italic">We'd love to hear from you!</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md mb-6"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-amber-900 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-amber-300 rounded-lg focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-amber-900 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-amber-300 rounded-lg focus:ring-amber-500"
              required
            />
          </div>
          <div>
            <label className="block text-amber-900 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-amber-300 rounded-lg focus:ring-amber-500"
              rows="4"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-amber-600 text-white p-3 rounded-lg hover:bg-amber-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md text-center"
      >
        <h3 className="text-2xl font-semibold text-amber-900 mb-4">Contact Details</h3>
        <p className="flex items-center justify-center gap-2 text-amber-800 mb-2">
          <FaMapMarkerAlt className="text-amber-600" /> Coimbatore, India
        </p>
        <p className="flex items-center justify-center gap-2 text-amber-800 mb-2">
          <FaPhone className="text-amber-600" /> +91 12345 77643
        </p>
        <p className="flex items-center justify-center gap-2 text-amber-800">
          <FaEnvelope className="text-amber-600" /> pastryhaven@gmail.com
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;

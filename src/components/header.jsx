import Navbar from "./navbar";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div
      id="Header"
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${assets.header_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

      {/* Navbar stays on top */}
      <Navbar />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-20 lg:px-32">
        <h1 className="text-5xl sm:text-6xl md:text-[82px] font-bold text-white mb-6">
          Explore Homes That Fit Your Dreams
        </h1>
        <div className="flex gap-4">
          <a
            href="#Projects"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

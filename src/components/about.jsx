import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mx-auto px-6 md:px-20 lg:px-32 py-16"
      id="About">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            className="w-full rounded-lg shadow-lg"
            src={assets.brand_img}
            alt="Brand"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            About <span className="text-green-600">Our Agency</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We are a team of dedicated professionals committed to helping you
            find the perfect property. With years of industry experience and a
            passion for excellence, we ensure every client finds a place they
            can truly call home.
          </p>

          <div className="grid grid-cols-2 gap-6 md:gap-8 mb-6">
            <div>
              <p className="text-4xl font-semibold text-green-600">10+</p>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-green-600">100+</p>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-green-600">100+</p>
              <p className="text-gray-700">Satisfied Clients</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-green-600">20+</p>
              <p className="text-gray-700">Awards Won</p>
            </div>
          </div>

          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

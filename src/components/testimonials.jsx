import { motion } from "framer-motion";
import { assets, testimonialsData } from "../assets/assets";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const testimonial = testimonialsData[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mx-auto px-6 md:px-20 lg:px-32 py-16 text-center"
      id="Testimonials">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
        Our <span className="text-green-600">Clients</span> Love Us
      </h2>
      <p className="text-center text-gray-500 mb-8 max-w-lg mx-auto">
        Real stories from those who found their perfect home with us.
      </p>

      <div className="relative max-w-xl mx-auto">
        {/* Single Testimonial */}
        <div className="bg-white border shadow-lg rounded px-8 py-12">
          <img
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            src={testimonial.image}
            alt={testimonial.alt}
          />
          <h3 className="text-xl text-gray-700 font-medium">
            {testimonial.name}
          </h3>
          <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>

          <div className="flex justify-center gap-1 text-red-500 mb-4">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <img key={i} src={assets.star_icon} alt="star" />
            ))}
          </div>

          <p className="text-gray-600">{testimonial.text}</p>
        </div>

        {/* Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
          <img src={assets.left_arrow} alt="Previous" className="w-4" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
          <img src={assets.right_arrow} alt="Next" className="w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default Testimonials;

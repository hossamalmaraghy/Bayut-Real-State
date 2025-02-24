import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "07f62751-5263-4dec-9843-1a0101d47a37");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full bg-[#F7F9FC] py-16"
      id="Contact">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Ready to make a move? Our team is here to help. Whether you have
            questions about listings, need guidance on mortgages, or just want
            to learn more, we’re always happy to chat.
          </p>
          <p className="text-gray-600 mb-8">
            Fill out the form, and we’ll get back to you as soon as possible.
            Let’s start your journey to the perfect home today!
          </p>
        </div>

        {/* Right Form */}
        <form
          onSubmit={onSubmit}
          className="bg-white rounded-lg shadow-lg p-8 text-gray-700">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3"
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block mb-1 font-medium">Your Email</label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3"
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded py-2 px-3 h-32 resize-none"
              name="Message"
              placeholder="Your Message"
              required
            />
          </div>

          <button
            className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors"
            type="submit">
            {result ? result : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;

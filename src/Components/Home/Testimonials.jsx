import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Dog Owner",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "PawMart made finding my perfect companion so easy! The adoption process was transparent, and the support team guided me every step of the way. Max has brought so much joy to our family.",
      petName: "Max",
      petType: "Golden Retriever",
    },
    {
      name: "Rafiqul Islam",
      role: "Cat Enthusiast",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The quality of products on PawMart is outstanding. From premium cat food to interactive toys, everything I've purchased has exceeded expectations. My cats Luna and Shadow are thriving!",
      petName: "Luna & Shadow",
      petType: "Persian Cats",
    },
    {
      name: "Fatima Rahman",
      role: "First-time Pet Owner",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a first-time pet owner in Dhaka, I was overwhelmed with questions. PawMart's comprehensive guides and 24/7 support made the transition smooth. Buddy is now the heart of our home!",
      petName: "Buddy",
      petType: "Labrador Mix",
    },
    {
      name: "Mohammad Hassan",
      role: "Pet Supplies Buyer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Fast delivery across Bangladesh, authentic products, and competitive prices. PawMart has become my trusted partner for all pet supplies. Bella's health and happiness are my priorities.",
      petName: "Bella",
      petType: "German Shepherd",
    },
    {
      name: "Nasreen Sultana",
      role: "Animal Rescue Volunteer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with PawMart as a rescue volunteer has been incredible. Their commitment to animal welfare and finding loving homes is genuine. They've helped us place over 50 rescued animals!",
      petName: "Multiple Rescues",
      petType: "Various Breeds",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.1 * i, duration: 0.3 }}
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        <FiStar
          className={`w-5 h-5 transition-colors duration-200 ${
            i < rating
              ? "text-yellow-400 fill-current drop-shadow-sm"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      </motion.div>
    ));
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real stories from real pet lovers who found their perfect companions
            through PawMart
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            className="relative bg-gradient-to-br from-white via-gray-50 to-indigo-50 dark:from-gray-800 dark:via-gray-800 dark:to-indigo-900 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden border border-gray-100 dark:border-gray-700"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200 to-indigo-200 dark:from-pink-800 dark:to-indigo-800 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>

            {/* Quote Icon */}
            <motion.div
              className="absolute top-6 left-6 text-indigo-300 dark:text-indigo-600"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <BiSolidQuoteAltLeft className="w-16 h-16" />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
                  {/* Profile Image */}
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="relative w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-3 border-white dark:border-gray-800 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    {/* Rating Stars */}
                    <motion.div
                      className="flex justify-center md:justify-start mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div className="flex space-x-1 bg-yellow-50 dark:bg-yellow-900/20 px-4 py-2 rounded-full">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.p
                      className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic font-medium"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.p>

                    {/* User Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                        {testimonials[currentIndex].role}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Pet Parent to{" "}
                          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                            {testimonials[currentIndex].petName}
                          </span>{" "}
                          ({testimonials[currentIndex].petType})
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            className="flex justify-center items-center mt-10 space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button
              onClick={prevTestimonial}
              className="group p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronLeft className="w-6 h-6 group-hover:animate-pulse" />
            </motion.button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 scale-125 shadow-lg"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: index === currentIndex ? 1.25 : 1,
                  }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="group p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronRight className="w-6 h-6 group-hover:animate-pulse" />
            </motion.button>
          </motion.div>
        </div>

        {/* Customer Avatars */}
        <motion.div
          className="flex justify-center items-center mt-16 space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex -space-x-3">
            {testimonials.slice(0, 5).map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
              </motion.div>
            ))}
          </div>
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              1000+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Happy Customers
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

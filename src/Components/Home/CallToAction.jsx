import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiHeart, FiShoppingBag } from "react-icons/fi";

const CallToAction = () => {
  return (
    <div className="py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Find Your Perfect Companion?
            </h2>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of happy pet owners who found their furry friends
              through PawMart. Start your journey today and discover the joy of
              pet ownership.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Link
              to="/pets-supplies"
              className="group flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FiHeart className="w-5 h-5 mr-3 group-hover:text-red-500 transition-colors" />
              Browse Pets
              <FiArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/pets-supplies"
              className="group flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              <FiShoppingBag className="w-5 h-5 mr-3" />
              Shop Supplies
              <FiArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
              <div className="text-indigo-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">5,000+</div>
              <div className="text-indigo-200">Successful Adoptions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-indigo-200">Customer Rating</div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-indigo-400 border-opacity-30"
          >
            <p className="text-indigo-200 mb-6">
              Trusted by pet lovers worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-sm font-medium">✓ Verified Sellers</div>
              <div className="text-sm font-medium">✓ Health Guaranteed</div>
              <div className="text-sm font-medium">✓ 24/7 Support</div>
              <div className="text-sm font-medium">✓ Safe Delivery</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

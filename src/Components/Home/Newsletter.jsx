import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiCheck } from "react-icons/fi";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubscribed(true);
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    "Weekly pet care tips from Bangladesh veterinarians",
    "Exclusive deals and discounts on premium products",
    "New pet arrival notifications in your city",
    "Community events and pet meetups across Bangladesh",
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden">
          <div className="px-8 py-16 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                    <FiMail className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Stay Connected
                  </h2>
                </div>

                <p className="text-xl mb-8 text-indigo-100">
                  Join our community of pet lovers and never miss out on the
                  latest updates, tips, and exclusive offers from PawMart.
                </p>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <FiCheck className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                      <span className="text-indigo-100">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl p-8 shadow-2xl"
              >
                {!isSubscribed ? (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Subscribe to Our Newsletter
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          />
                          <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-lg transition-colors"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        ) : (
                          <FiSend className="w-5 h-5 mr-2" />
                        )}
                        {loading ? "Subscribing..." : "Subscribe Now"}
                      </button>
                    </form>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      <FiCheck className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Welcome to PawMart!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for subscribing. You'll receive our first
                      newsletter soon!
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Join{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              5,000+
            </span>{" "}
            pet lovers who already receive our newsletter
          </p>

          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Trusted by pet owners worldwide
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;

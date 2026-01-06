import React from "react";
import { motion } from "framer-motion";
import {
  FiShield,
  FiHeart,
  FiTruck,
  FiHeadphones,
  FiAward,
  FiUsers,
} from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: FiShield,
      title: "Verified Sellers & Rescues",
      description:
        "All our sellers and rescue organizations are thoroughly verified to ensure the safety, authenticity, and quality of pets and products across Bangladesh.",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    },
    {
      icon: FiHeart,
      title: "Complete Health Records",
      description:
        "Every pet comes with comprehensive health certificates, vaccination records, and medical history for complete transparency and your peace of mind.",
      color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
    },
    {
      icon: FiTruck,
      title: "Safe Nationwide Delivery",
      description:
        "Professional pet transportation and product delivery services ensure your new companion or supplies arrive safely anywhere in Bangladesh.",
      color:
        "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    },
    {
      icon: FiHeadphones,
      title: "24/7 Expert Support",
      description:
        "Our dedicated team of pet care experts and customer support specialists are available round the clock to assist with any questions or concerns.",
      color:
        "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    },
    {
      icon: FiAward,
      title: "Premium Quality Products",
      description:
        "Carefully curated selection of premium pet supplies from trusted international and local brands to keep your pets healthy, happy, and thriving.",
      color:
        "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: FiUsers,
      title: "Thriving Pet Community",
      description:
        "Join Bangladesh's largest community of pet lovers, sharing experiences, advice, and building lasting friendships with fellow pet enthusiasts.",
      color:
        "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400",
    },
  ];

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
            Why Choose PawMart?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're committed to providing the best experience for pets and their
            loving families across Bangladesh
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color} mb-6`}
              >
                <feature.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

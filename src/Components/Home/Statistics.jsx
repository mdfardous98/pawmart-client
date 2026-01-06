import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiHeart, FiPackage, FiStar } from "react-icons/fi";

const Statistics = () => {
  const stats = [
    {
      icon: FiUsers,
      number: "10,000+",
      label: "Happy Customers",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: FiHeart,
      number: "5,000+",
      label: "Pets Adopted",
      color: "text-red-600 dark:text-red-400",
    },
    {
      icon: FiPackage,
      number: "15,000+",
      label: "Products Sold",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: FiStar,
      number: "4.9/5",
      label: "Average Rating",
      color: "text-yellow-600 dark:text-yellow-400",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join thousands of pet lovers who trust PawMart for their pet
            adoption and supply needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-600 mb-4`}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;

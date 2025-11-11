import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        
        <motion.div
          className="mb-8 cursor-pointer"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="text-9xl mb-4">🐾</div>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
        </motion.div>

        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for seems to have wandered off. Maybe it's
          playing hide and seek with our furry friends!
        </p>

        <div className="space-y-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Go Back Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/pets-supplies"
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
            >
              Browse Pets & Supplies →
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm">
            "Every pet deserves a home, and every home deserves a pet." 🐕🐱
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NotFound;

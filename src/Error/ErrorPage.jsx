import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4">
      <motion.h1
        className="text-8xl sm:text-9xl font-extrabold text-red-500 mb-4 drop-shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl max-w-md text-center mb-8 text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        The page you are looking for doesn’t exist or has been moved. Let’s get
        you back home.
      </motion.p>

      <motion.img
        src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=250&fit=crop"
        alt="Lost pet illustration"
        className="w-72 h-44 object-cover rounded-xl shadow-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      />

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/"
          className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition-all duration-300 cursor-pointer text-lg"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;

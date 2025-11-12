import React from "react";

/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { MoonLoader } from "react-spinners";

const LoadingSpinner = ({ message = "Fetching the Best Pet Friends..." }) => {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <MoonLoader color="#F472B6" size={80} />
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200 text-center cursor-default select-none"
      >
        {message}
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-2 text-gray-500 dark:text-gray-400 text-center text-sm sm:text-base max-w-md"
      >
        Sit tight while we prepare an amazing experience filled with pets, care
        products, and more.
      </motion.p>
    </motion.div>
  );
};

export default LoadingSpinner;

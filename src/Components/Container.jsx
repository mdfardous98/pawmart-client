import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Container = ({
  children,
  className,
  bg = "bg-white dark:bg-gray-900",
  padding = "py-12 px-4 sm:px-6 lg:px-8",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.01 }}
      className={`${bg} ${padding} rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-default ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Container;

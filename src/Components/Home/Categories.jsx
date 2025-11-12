import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaPaw, FaBone, FaTag, FaFirstAid } from "react-icons/fa";

const categories = [
  {
    name: "Adopt a Pet",
    description:
      "Give a loving home to adorable cats and dogs waiting for you.",
    icon: (
      <FaPaw className="text-5xl text-pink-500 group-hover:scale-110 transition-transform" />
    ),
    bg: "bg-gradient-to-tr from-pink-100 to-pink-200 dark:from-pink-900/40 dark:to-pink-800/30",
    path: "/category-filtered-product/Pets",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=600",
  },
  {
    name: "Pet Food",
    description:
      "Healthy meals crafted to keep tails wagging and hearts happy.",
    icon: (
      <FaBone className="text-5xl text-yellow-500 group-hover:scale-110 transition-transform" />
    ),
    bg: "bg-gradient-to-tr from-yellow-100 to-yellow-200 dark:from-yellow-900/40 dark:to-yellow-800/30",
    path: "/category-filtered-product/Pet Food",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=600",
  },
  {
    name: "Accessories",
    description:
      "Trendy toys, comfy beds, and stylish collars your pets will love.",
    icon: (
      <FaTag className="text-5xl text-indigo-500 group-hover:scale-110 transition-transform" />
    ),
    bg: "bg-gradient-to-tr from-indigo-100 to-indigo-200 dark:from-indigo-900/40 dark:to-indigo-800/30",
    path: "/category-filtered-product/Accessories",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600",
  },
  {
    name: "Pet Care",
    description: "Shampoos, brushes, and wellness essentials for happy pets.",
    icon: (
      <FaFirstAid className="text-5xl text-green-500 group-hover:scale-110 transition-transform" />
    ),
    bg: "bg-gradient-to-tr from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/30",
    path: "/category-filtered-product/Pet Care Products",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600",
  },
];

const Category = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="categories">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-3"
          >
            <Typewriter words={["Explore by Category 🐾"]} />
          </motion.h2>
          <p className="text-gray-500 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Find everything your pet needs — from nutritious food to cozy beds
            and playful toys.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Link
                to={cat.path}
                className={`group block rounded-3xl overflow-hidden shadow-lg ${cat.bg} hover:shadow-2xl transition-all duration-500 cursor-pointer`}
              >
                <div
                  className="relative h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${cat.image})` }}
                >
                  <div className="absolute inset-0 bg-black/10 dark:bg-black/30 group-hover:bg-black/20 dark:group-hover:bg-black/50 transition-all"></div>
                </div>

                <div className="p-6 text-center flex flex-col items-center justify-between space-y-3">
                  {cat.icon}
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {cat.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 px-5 py-2 bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-800 font-medium rounded-full shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                  >
                    Browse Now →
                  </motion.button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;

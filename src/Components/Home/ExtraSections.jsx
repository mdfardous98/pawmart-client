import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiHeart, FiUsers } from "react-icons/fi";

const petHeroes = [
  {
    name: "Rafiqul Hasan",
    title: "Rescued Two Street Dogs in Dhaka",
    story:
      "I found Roxy and Bruno injured on the streets of Old Dhaka. After nursing them back to health, they became my family. Now they're healthy, happy, and bring joy to everyone they meet.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Islam",
    title: "Volunteer at Dhaka Animal Rescue",
    story:
      "Working with abandoned animals in Bangladesh has taught me about resilience and love. Every rescue story reminds me why this work matters - giving voiceless animals a second chance at happiness.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Md. Fardous Rahman",
    title: "First-Time Cat Adopter in Chittagong",
    story:
      "I was hesitant about pet adoption, but PawMart made it simple and safe. My cat Luna has transformed my apartment into a home. She follows me everywhere and has become my best companion.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Sneha Das",
    title: "Veterinarian & Shelter Founder",
    story:
      "We started Paws & Hearts Shelter with just three rescued dogs in Sylhet. Today, we've successfully rehomed over 200 animals across Bangladesh. Every adoption creates a ripple of love.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  },
];

const ExtraSections = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Adopt */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-10 mb-20 transition-all duration-500"
        >
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              <Typewriter words={["Why Adopt from PawMart? ❤️"]} />
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Adoption gives a homeless pet a second chance at life. In
              Bangladesh, thousands of loving animals are waiting for their
              forever homes. Join our community of pet lovers and make a
              difference in an animal's life today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-pink-500 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-pink-300 transition-all duration-300 cursor-pointer"
            >
              Start Your Adoption Journey →
            </motion.button>
          </div>

          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          >
            <FiHeart className="text-pink-500 text-[120px] drop-shadow-xl" />
          </motion.div>
        </motion.div>

        {/* Pet Heroes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Typewriter words={["Meet Our Pet Heroes 🐾"]} />
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Inspiring stories from adopters across Bangladesh who changed lives
            and found lifelong companions through PawMart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {petHeroes.map((hero, index) => (
            <motion.div
              key={hero.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-pink-300 dark:hover:shadow-pink-400 p-6 text-center cursor-pointer transition-all duration-500"
            >
              <div className="relative w-28 h-28 mx-auto mb-5">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover rounded-full border-4 border-pink-200 dark:border-pink-500 shadow-lg"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {hero.name}
              </h3>
              <p className="text-sm text-pink-600 dark:text-pink-400 mb-3">
                {hero.title}
              </p>

              <div className="relative px-3">
                <FiUsers className="absolute -top-3 left-2 text-pink-300 dark:text-pink-500 text-sm" />
                <p className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed">
                  "{hero.story}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraSections;

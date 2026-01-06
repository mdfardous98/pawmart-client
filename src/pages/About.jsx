import React from "react";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiAward,
  FiGlobe,
  FiStar,
} from "react-icons/fi";

const About = () => {
  const stats = [
    { icon: FiUsers, label: "Happy Customers", value: "15,000+" },
    { icon: FiHeart, label: "Pets Adopted", value: "8,500+" },
    { icon: FiGlobe, label: "Cities in Bangladesh", value: "25+" },
    { icon: FiStar, label: "Average Rating", value: "4.9/5" },
  ];

  const values = [
    {
      icon: FiHeart,
      title: "Pet Welfare First",
      description:
        "We prioritize the health, safety, and happiness of all pets on our platform.",
    },
    {
      icon: FiShield,
      title: "Trust & Safety",
      description:
        "Verified sellers, secure transactions, and comprehensive support for peace of mind.",
    },
    {
      icon: FiUsers,
      title: "Community Driven",
      description:
        "Building a supportive community of pet lovers, owners, and enthusiasts.",
    },
    {
      icon: FiTrendingUp,
      title: "Innovation",
      description:
        "Continuously improving our platform with the latest technology and features.",
    },
  ];

  const team = [
    {
      name: "Md. Rashidul Islam",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate animal welfare advocate with 12+ years in e-commerce and pet care in Bangladesh.",
    },
    {
      name: "Fatima Khatun",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Operations expert ensuring smooth pet adoptions and supply delivery across Bangladesh.",
    },
    {
      name: "Dr. Aminul Haque",
      role: "Chief Veterinary Officer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Licensed veterinarian with 15+ years experience, ensuring health standards for all pets.",
    },
    {
      name: "Nasreen Ahmed",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      bio: "Building strong connections between pet lovers and rescue organizations across Bangladesh.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About PawMart
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Connecting pet lovers with their perfect companions and everything
            they need for a happy, healthy life together.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  PawMart was born from a simple belief: every pet deserves a
                  loving home, and every pet owner deserves access to quality
                  supplies and services. Founded in 2021 in Dhaka by a team of
                  passionate animal welfare advocates, we set out to create
                  Bangladesh's first comprehensive pet adoption and supply
                  platform.
                </p>
                <p>
                  What started as a small initiative to help street animals in
                  Dhaka has grown into a thriving community of over 15,000 pet
                  enthusiasts across 25+ cities in Bangladesh. We've facilitated
                  thousands of successful pet adoptions and helped countless pet
                  owners find everything they need to keep their furry friends
                  happy and healthy.
                </p>
                <p>
                  Today, PawMart continues to innovate and expand across
                  Bangladesh, always keeping our core mission at heart: making
                  pet ownership accessible, enjoyable, and rewarding while
                  promoting animal welfare throughout the country.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop"
                alt="Happy pets and owners"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These core principles guide everything we do at PawMart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The passionate people behind PawMart's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FiAward className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              To create a world where every pet finds a loving home and every
              pet owner has access to the resources they need to provide the
              best possible care for their beloved companions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Banner() {
  const banners = [
    {
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop",
      title: "Find Your Perfect Companion 🐾",
      description:
        "Discover loving pets waiting for their forever homes in Bangladesh. Start your adoption journey with PawMart today.",
      color: "from-pink-500/40 to-yellow-500/40",
    },
    {
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&h=600&fit=crop",
      title: "Premium Pet Care Products ❤️",
      description:
        "Shop authentic pet food, toys, and accessories from trusted brands. Quality products delivered across Bangladesh.",
      color: "from-orange-500/40 to-purple-500/40",
    },
    {
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=600&fit=crop",
      title: "Expert Pet Care Guidance 🐶",
      description:
        "Get professional advice from veterinarians and pet care experts. 24/7 support for all your pet care needs.",
      color: "from-blue-500/40 to-teal-500/40",
    },
    {
      image:
        "https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=1200&h=600&fit=crop",
      title: "Join Bangladesh's Pet Community 🐕",
      description:
        "Connect with fellow pet lovers, share experiences, and build lasting friendships in our growing community.",
      color: "from-green-500/40 to-indigo-500/40",
    },
  ];

  return (
    <div className="my-10">
      <Swiper
        spaceBetween={30}
        effect="fade"
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="rounded-3xl overflow-hidden shadow-xl cursor-grab"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex items-center justify-center h-[500px] sm:h-[600px] bg-cover bg-center transition-all duration-700"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${banner.color} backdrop-blur-sm dark:bg-gradient-to-tr dark:from-gray-800/60 dark:to-gray-900/60`}
              ></div>

              {/* Banner Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-6 sm:px-16"
              >
                <motion.h1
                  whileHover={{ scale: 1.05 }}
                  className="text-4xl sm:text-6xl font-extrabold drop-shadow-lg text-gray-900 dark:text-gray-100"
                >
                  {banner.title}
                </motion.h1>
                <p className="text-lg sm:text-xl mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-200 leading-relaxed">
                  {banner.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-3 bg-white/90 dark:bg-gray-800 dark:text-gray-100 text-gray-800 font-semibold rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Explore Now
                </motion.button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

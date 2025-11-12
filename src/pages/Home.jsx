import React from "react";
import Banner from "../Components/Home/Banner";
import Container from "../Components/Container";
import Category from "../Components/Home/Categories";
import RecentProducts from "../Components/Home/RecentProducts";
import ExtraSections from "../Components/Home/ExtraSections";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Home = () => {
  const motionProps = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <>
      <title>PawMart - Home</title>
      <Container className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {/* Banner */}
        <header className="py-6 md:py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Banner />
          </motion.div>
        </header>

        {/* Category */}
        <motion.section
          {...motionProps}
          className="py-12 bg-white dark:bg-gray-800 rounded-3xl shadow-lg my-10"
        >
          <Category />
        </motion.section>

        {/* Recent Products */}
        <motion.section
          {...motionProps}
          className="py-12 my-10 bg-gradient-to-tr from-pink-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl"
        >
          <RecentProducts />
        </motion.section>

        {/* Extra Sections */}
        <motion.section
          {...motionProps}
          className="py-12 my-10 bg-white dark:bg-gray-800 rounded-3xl shadow-lg"
        >
          <ExtraSections />
        </motion.section>
      </Container>
    </>
  );
};

export default Home;

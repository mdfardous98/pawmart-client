import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ListingCard from "../Components/Shared/LstingCard";
import Container from "../Components/Container";
/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://pawmart-server-olive.vercel.app/listings/category/${categoryName}`
      )
      .then((res) => {
        console.log("Category data:", res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <div className="min-h-[calc(100vh-300px)] bg-gray-50 dark:bg-gray-900 py-12">
      <title>Category - {categoryName}</title>
      <Container className="px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
            {categoryName} Products
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Browse our curated selection of {categoryName.toLowerCase()} items.
            Find the perfect product or pet that suits your needs.
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <motion.div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></motion.div>
          </div>
        )}

        {!loading && data.length === 0 && (
          <div className="flex justify-center items-center py-20">
            <motion.h2
              className="text-4xl font-bold text-pink-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              No items found in this category
            </motion.h2>
            <p className="mt-4 text-gray-500">
              Please check back later or add some listings.
            </p>
          </div>
        )}

        {!loading && data.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {data.map((listing) => (
              <motion.div
                key={listing._id}
                whileHover={{ scale: 1.03 }}
                className="transition-transform duration-300 cursor-pointer"
              >
                <ListingCard listing={listing} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </div>
  );
};

export default CategoryProducts;

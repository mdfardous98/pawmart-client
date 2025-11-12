import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Container from "../Components/Container";
import ListingCard from "../Components/Shared/LstingCard";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../Components/LoadingSpinner";
import { PulseLoader } from "react-spinners";

const PetsSupply = () => {
  const { data } = useLoaderData();
  const [searchData, setSearchData] = useState(data);
  const [loading, setLoading] = useState(false);

  const motionProps = {
    initial: { opacity: 0, y: 70 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const handleSearchField = async (e) => {
    e.preventDefault();
    setLoading(true);
    const searchText = e.target.search.value.trim();
    if (!searchText) return setLoading(false);

    try {
      const response = await axios.get();
      setSearchData(response.data);
    } catch (error) {
      toast.error("Failed to fetch search results");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <title>Pets & Supplies</title>
      <Container>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-fit mx-auto py-4 px-8 shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer">
            <Typewriter words={["Find Your Pets & Supplies"]} />
          </h2>
        </div>

        <form
          onSubmit={handleSearchField}
          className="pb-10 flex justify-center"
        >
          <div className="relative w-10/12 md:w-8/12">
            <input
              type="search"
              name="search"
              placeholder="Search for pets or products..."
              className="input input-xl w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full pl-12 pr-32 py-4 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-md focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <FaMagnifyingGlass className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 text-xl" />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 cursor-pointer"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Searching <PulseLoader size={6} color="#fff" />
                </span>
              ) : (
                <span>Search</span>
              )}
            </button>
          </div>
        </form>

        {loading ? (
          <LoadingSpinner />
        ) : searchData.length === 0 ? (
          <div className="my-40 text-center">
            <h1 className="text-4xl font-bold text-gray-400 dark:text-gray-600">
              No Items Found
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Please try a different search keyword.
            </p>
          </div>
        ) : (
          <motion.div
            {...motionProps}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
          >
            {searchData.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))}
          </motion.div>
        )}
      </Container>
    </div>
  );
};

export default PetsSupply;

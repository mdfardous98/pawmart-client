import React from "react";
import { Link } from "react-router-dom";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const ListingCard = ({ listing }) => {
  const { _id, name, category, Price, location, image } = listing;

  const displayPrice =
    category === "Pets" || Price === 0 ? "Free for Adoption" : `৳${Price}`;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-500"
    >
      <figure className="relative h-64 w-full overflow-hidden rounded-t-3xl">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200&h=600&fit=crop"
          }
          alt={name}
          className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </figure>

      <div className="p-6 flex flex-col justify-between h-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {name || "Adorable Pet"}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
          Discover this amazing {category || "pet"} from our community. Adopt or
          purchase high-quality products tailored for your beloved companion.
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <BiCategory className="text-primary-500 w-5 h-5" />
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              {category || "Category"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-primary-500 w-5 h-5" />
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              {location || "Unknown Location"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaTag className="text-primary-500 w-5 h-5" />
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
              {displayPrice}
            </span>
          </div>
        </div>

        <div className="mt-6 text-right">
          <Link
            to={`/product-details/${_id}`}
            className="inline-block px-6 py-2 bg-primary-500 dark:bg-primary-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-primary-600 dark:hover:bg-primary-700 transition-all duration-300 cursor-pointer"
          >
            View Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingCard;

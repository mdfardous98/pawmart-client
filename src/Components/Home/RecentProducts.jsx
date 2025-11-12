import React from "react";
import { useLoaderData } from "react-router-dom";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RecentProducts = () => {
  const { data } = useLoaderData();

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block px-6 py-3 rounded-full bg-primary text-white dark:bg-primary-600">
            Recent Listings
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the newest pets and products added to our community.
          </p>
        </div>

        {data.length === 0 ? (
          <div className="py-24 text-center">
            <h3 className="text-4xl font-bold text-gray-400 dark:text-gray-600">
              No Items Found
            </h3>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-500">
              Please check back later for new additions.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((listing, index) => (
              <motion.div
                key={listing._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg overflow-hidden cursor-pointer transition-all duration-500"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={listing.image}
                    alt={listing.name}
                    className="w-full h-48 object-cover"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/400x300?text=No+Image")
                    }
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {listing.name}
                    </h3>
                    <span className="text-sm bg-primary-100 text-primary-800 dark:bg-primary-700 dark:text-primary-200 px-2 py-1 rounded-full">
                      {listing.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {listing.location}
                  </p>
                  <p className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4">
                    {listing.price === 0
                      ? "Free for Adoption"
                      : `$${listing.price}`}
                  </p>

                  <Link
                    to={`/listing-details/${listing._id}`}
                    className="inline-block bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                  >
                    See Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {data.length > 0 && (
          <div className="text-center mt-12">
            <Link
              to="/pets-supplies"
              className="inline-block bg-secondary-500 dark:bg-secondary-600 hover:bg-secondary-600 dark:hover:bg-secondary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Listings
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentProducts;

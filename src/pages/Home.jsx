import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiHeart, FiShoppingBag, FiUsers, FiShield } from "react-icons/fi";

function Home() {
  const [recentListings, setRecentListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchRecentListings = async () => {
      try {
        const response = await fetch(
          `${
            process.env.REACT_APP_API_URL || "http://localhost:3000"
          }/api/listings?limit=6`
        );
        const data = await response.json();
        setRecentListings(data);
      } catch (error) {
        console.error("Error fetching recent listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentListings();
  }, []);

  const bannerImages = [
    {
      url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=600&fit=crop",
      title: "Find Your Furry Friend Today!",
      subtitle: "Discover loving pets waiting for their forever homes",
    },
    {
      url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1200&h=600&fit=crop",
      title: "Adopt, Don't Shop — Give a Pet a Home.",
      subtitle: "Make a difference by choosing adoption",
    },
    {
      url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1200&h=600&fit=crop",
      title: "Because Every Pet Deserves Love and Care.",
      subtitle: "Quality supplies for your beloved companions",
    },
  ];

  const categories = [
    {
      name: "Pets",
      icon: "🐶",
      description: "Find your perfect companion",
      path: "/category-filtered-product/Pets",
    },
    {
      name: "Pet Food",
      icon: "🍖",
      description: "Nutritious meals for pets",
      path: "/category-filtered-product/Food",
    },
    {
      name: "Accessories",
      icon: "🧸",
      description: "Toys, beds, and more",
      path: "/category-filtered-product/Accessories",
    },
    {
      name: "Pet Care",
      icon: "💊",
      description: "Health & wellness products",
      path: "/category-filtered-product/Care Products",
    },
  ];

  const petHeroes = [
    {
      name: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      story:
        "Adopted 3 rescue dogs and provides foster care for homeless pets.",
      pets: "Golden Retriever, Two Cats",
    },
    {
      name: "Mike Chen",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      story: "Volunteers at local shelters and helps with pet adoption events.",
      pets: "German Shepherd",
    },
    {
      name: "Emma Wilson",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      story:
        "Runs a pet grooming business and offers free services for shelter animals.",
      pets: "Poodle, Hamster",
    },
  ];

  return (
    <div className="min-h-screen">
    
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typewriter
                words={[
                  "Find Your Furry Friend Today!",
                  "Adopt, Don't Shop!",
                  "Every Pet Deserves Love!",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Discover loving pets waiting for their forever homes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                to="/pets-supplies"
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Browse Pets & Supplies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What are you looking for?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore our categories to find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center card-hover"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={category.path} className="block">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Listings Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Listings
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Check out the newest additions to our community
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading recent listings...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentListings.map((listing, index) => (
                <motion.div
                  key={listing._id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={listing.image}
                      alt={listing.name}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=No+Image";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {listing.name}
                      </h3>
                      <span className="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                        {listing.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {listing.location}
                    </p>
                    <p className="text-lg font-bold text-primary-600 mb-4">
                      {listing.price === 0
                        ? "Free for Adoption"
                        : `$${listing.price}`}
                    </p>
                    <Link
                      to={`/listing-details/${listing._id}`}
                      className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      See Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/pets-supplies"
              className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* Why Adopt Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Adopt from PawMart?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choosing adoption over shopping makes a world of difference for
              homeless pets and your family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Save a Life
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every adoption gives a homeless pet a second chance at happiness
                and love.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShoppingBag className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cost Effective
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Adoption fees are typically lower than buying from breeders or
                pet stores.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Support Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Join a community of pet lovers and support local animal welfare
                efforts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Health Checked
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All pets are health-checked and vaccinated before adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Heroes Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Pet Heroes
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Inspiring stories from our community of pet adopters and
              caregivers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {petHeroes.map((hero, index) => (
              <motion.div
                key={hero.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {hero.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {hero.story}
                </p>
                <div className="text-sm text-primary-600 font-medium">
                  Pet Parent: {hero.pets}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

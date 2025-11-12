import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Typewriter } from "react-simple-typewriter";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const UpdateListing = () => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const { state } = useLocation();

  const [selectedCategory, setSelectedCategory] = useState(
    state.category || ""
  );
  const [price, setPrice] = useState(state.Price || "");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category === "Pets") {
      setPrice("0");
    } else {
      setPrice("");
    }
  };

  const handleUpdateListing = (e) => {
    e.preventDefault();
    const form = e.target;
    const updateListingData = {
      Price: form.price.value,
      category: form.category.value,
      location: form.location.value,
      image: form.image.value,
      description: form.description.value,
      date: form.date.value,
      name: form.name.value,
      email: form.email.value,
    };

    axios
      .put(updateListingData)
      .then(() => toast.success("Listing updated successfully"))
      .catch(() => toast.error("Failed to update listing"));
  };

  const motionProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center py-10 px-4 md:px-12 transition-colors duration-500">
      <title>Update Your Listing</title>
      <motion.div
        {...motionProps}
        className="container max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-500 hover:scale-[1.02]"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
          <Typewriter
            words={["Update Your Listing"]}
            loop={1}
            cursor
            cursorStyle="_"
          />
        </h1>

        <form onSubmit={handleUpdateListing} className="space-y-6">
          {/*  Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">
                  Product / Pet Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={state.name}
                placeholder="e.g., Golden Retriever Puppy, Royal Canin Dog Food"
                className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">
                  Category
                </span>
              </label>
              <select
                name="category"
                className="select w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300 focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={handleCategoryChange}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Pets">Pets (Adoption)</option>
                <option value="Pet Food">Pet Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Pet Care Products">Pet Care Products</option>
              </select>
            </div>
          </div>

          {/* Price  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">
                  Price (BDT)
                </span>
              </label>
              <input
                type="number"
                name="price"
                placeholder={
                  selectedCategory === "Pets"
                    ? "Price is 0 for Pets"
                    : "Enter price"
                }
                className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300 focus:ring-2 focus:ring-blue-500"
                readOnly={selectedCategory === "Pets"}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min={0}
                step="0.01"
                required={selectedCategory !== "Pets"}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">
                  Location (City)
                </span>
              </label>
              <input
                type="text"
                name="location"
                defaultValue={state.location}
                placeholder="e.g., Dhaka, Chattogram"
                className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Image & Pickup Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">
                  Image URL
                </span>
              </label>
              <input
                type="url"
                name="image"
                defaultValue={state.image}
                placeholder="https://example.com/image.jpg"
                className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">
                  Available From / Pickup Date
                </span>
              </label>
              <input
                type="date"
                name="date"
                defaultValue={state.date}
                className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">
                  Owner's Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                value={currentUser?.email || ""}
                readOnly
                className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-gray-300">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                defaultValue={state.description}
                placeholder="Tell us about the pet or product..."
                className="textarea w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300 focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-control mt-8">
            <button
              type="submit"
              className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full w-full transition-all duration-300 cursor-pointer"
            >
              Update Listing
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateListing;

import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
import { Typewriter } from "react-simple-typewriter";

/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const AddListing = () => {
  const { currentUser } = useContext(AuthContext);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleAddListing = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newListing = {
      name: form.name.value,
      category: form.category.value,
      Price: form.category.value === "Pets" ? 0 : parseFloat(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: currentUser?.email,
      addedAt: new Date(),
    };

    axios
      .post("https://pawmart-server-olive.vercel.app/listings", newListing)
      .then((res) => {
        toast.success("Listing added successfully!");
        form.reset();
        setSelectedCategory("");
        setPrice("");
      })
      .catch((err) => toast.error(err.code));
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category === "Pets") setPrice("0");
    else setPrice("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 md:p-12">
      <div className="max-w-3xl w-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-3xl p-8 md:p-12">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-white text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typewriter words={["Add a New Listing 🐾"]} />
        </motion.h1>

        <form onSubmit={handleAddListing} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">
                Product / Pet Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g., Golden Retriever Puppy, Royal Can Dog Food"
                className="input bg-gray-700 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-500 rounded-xl transition-all duration-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Category</label>
              <select
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="select bg-gray-700 text-white focus:ring-2 focus:ring-pink-500 rounded-xl transition-all duration-300 cursor-pointer"
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
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Price (BDT)</label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder={
                  selectedCategory === "Pets"
                    ? "Price is 0 for Pets"
                    : "Enter price"
                }
                className="input bg-gray-700 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-500 rounded-xl transition-all duration-300"
                readOnly={selectedCategory === "Pets"}
                required={selectedCategory !== "Pets"}
                min={0}
                step="0.01"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">
                Location (City)
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g., Dhaka, Rajshahi, Khulna"
                className="input bg-gray-700 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-500 rounded-xl transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* Image & Date */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Image URL</label>
              <input
                type="url"
                name="image"
                placeholder="e.g., https://example.com/image.jpg"
                className="input bg-gray-700 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-500 rounded-xl transition-all duration-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">
                Available From / Pickup Date
              </label>
              <input
                type="date"
                name="date"
                className="input bg-gray-700 text-white focus:ring-2 focus:ring-pink-500 rounded-xl transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* Email & Description */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={currentUser?.email || ""}
                readOnly
                className="input bg-gray-700 text-white cursor-not-allowed rounded-xl transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Description</label>
              <textarea
                name="description"
                placeholder="Tell us about the pet or product..."
                className="textarea bg-gray-700 text-white placeholder-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                required
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg rounded-2xl py-3 shadow-lg transition-all duration-300 cursor-pointer"
          >
            Add Listing
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;

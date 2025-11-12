import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/LOGO.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="PawMart Logo"
                className="w-14 h-14 object-contain"
              />
              <span className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-300 to-white">
                PawMart
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4 max-w-md">
              PawMart connects local pet owners and buyers for adoption and pet
              care products.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pets-supplies"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                >
                  Pets & Supplies
                </Link>
              </li>

              <li>
                <Link
                  to="/add-listing"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                >
                  Add Listing
                </Link>
              </li>
              <li>
                <Link
                  to="/my-listings"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                >
                  My Listings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
            © {new Date().getFullYear()} PawMart. All rights reserved. Made with
            ❤️ for pet lovers-By ❤️ Md Fardous
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

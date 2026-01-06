import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/LOGO.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="PawMart Logo"
                className="w-14 h-14 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-300 to-indigo-500">
                PawMart
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Your trusted marketplace for pet adoption and supplies. Connecting
              loving families with their perfect companions since 2020.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <FaPhone className="w-4 h-4 mr-3 text-indigo-500" />
                <span>+88016886456882</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <FaEnvelope className="w-4 h-4 mr-3 text-indigo-500" />
                <span>support@pawmart.com</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="w-4 h-4 mr-3 text-indigo-500" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { Icon: FaFacebook, href: "#", color: "hover:text-blue-600" },
                { Icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
                { Icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
                { Icon: FaYoutube, href: "#", color: "hover:text-red-500" },
                { Icon: FaLinkedin, href: "#", color: "hover:text-blue-700" },
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`text-gray-500 dark:text-gray-400 ${color} transition-all duration-300 transform hover:scale-110`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/pets-supplies", label: "Browse Pets" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
                { to: "/add-listing", label: "Sell Pets" },
                { to: "/dashboard", label: "Dashboard" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Categories
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/category-filtered-product/Pets", label: "Pets" },
                {
                  to: "/category-filtered-product/Pet Food",
                  label: "Pet Food",
                },
                {
                  to: "/category-filtered-product/Accessories",
                  label: "Accessories",
                },
                {
                  to: "/category-filtered-product/Pet Care Products",
                  label: "Pet Care",
                },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Support & Legal
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/contact", label: "Help Center" },
                { href: "#", label: "FAQ" },
                { href: "#", label: "Terms of Service" },
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Cookie Policy" },
                { href: "#", label: "Refund Policy" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for pet care tips and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
              <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} PawMart. All rights reserved. Made
              with ❤️ for pet lovers.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <span>🐾 Trusted by 10,000+ pet owners</span>
              <span>⭐ 4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiLogOut, FiSun, FiMoon } from "react-icons/fi";
import { AuthContext } from "../../Context/AuthContext";
import logo from "../../assets/LOGO.png";

const Navbar = () => {
  const { currentUser, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme globally
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleLogout = async () => {
    try {
      await logOutUser();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const links = (
    <>
      <NavLink
        to="/"
        className="block md:inline-block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
      >
        Home
      </NavLink>
      <NavLink
        to="/pets-supplies"
        className="block md:inline-block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
      >
        Pets & Supplies
      </NavLink>
      {currentUser && (
        <>
          <NavLink
            to="/add-listing"
            className="block md:inline-block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            Add Listing
          </NavLink>
          <NavLink
            to="/my-listings"
            className="block md:inline-block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            My Listings
          </NavLink>
          <NavLink
            to="/my-orders"
            className="block md:inline-block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            My Orders List
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="PawMart"
              className="w-14 h-14 object-contain"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-300 to-white">
              PawMart
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">{links}</div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isDarkMode ? (
                <FiSun className="text-yellow-400 w-5 h-5" />
              ) : (
                <FiMoon className="text-blue-400 w-5 h-5" />
              )}
            </button>

            {currentUser ? (
              <div className="relative group">
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full ring-2 ring-primary-400 cursor-pointer transition-transform transform group-hover:scale-110"
                  />
                ) : (
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white cursor-pointer transition-transform transform group-hover:scale-110">
                    <FiUser className="w-5 h-5" />
                  </div>
                )}

                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                  <p className="text-center font-semibold py-2">
                    {currentUser.displayName || "User"}
                  </p>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-2">
                    {currentUser.email}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-lg bg-secondary-500 hover:bg-secondary-600 text-white transition-colors"
                >
                  Register
                </Link>
              </div>
            )}

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400"
              >
                {isMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors">
          <div className="px-4 pt-2 pb-4 space-y-2">{links}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

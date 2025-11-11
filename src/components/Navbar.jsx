
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FiMenu, FiX, FiUser, FiLogOut, FiSun, FiMoon } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const auth = useAuth();


  if (!auth) {
    return (
      <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50 p-4 text-center">
        Auth context missing!
      </nav>
    );
  }

  const { currentUser, logout, loading } = auth;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  
  if (loading) {
    return (
      <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50 p-4 text-center">
        Loading...
      </nav>
    );
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Paw</span>
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                PawMart
              </span>
            </Link>
          </div>

          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/pets-supplies"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
            >
              Pets & Supplies
            </Link>

            {currentUser && (
              <>
                <Link
                  to="/add-listing"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Add Listing
                </Link>
                <Link
                  to="/my-listings"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  My Listings
                </Link>
                <Link
                  to="/my-orders"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  My Orders
                </Link>
              </>
            )}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>

            {currentUser ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <FiUser className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <span className="text-gray-700 dark:text-gray-300">
                    {currentUser.displayName || currentUser.email}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
                >
                  <FiLogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500"
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

      
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/pets-supplies"
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Pets & Supplies
            </Link>

            {currentUser && (
              <>
                <Link
                  to="/add-listing"
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Add Listing
                </Link>
                <Link
                  to="/my-listings"
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Listings
                </Link>
                <Link
                  to="/my-orders"
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Orders
                </Link>
              </>
            )}

            {currentUser ? (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                <div className="px-3 py-2">
                  <div className="flex items-center space-x-2 mb-2">
                    {currentUser.photoURL ? (
                      <img
                        src={currentUser.photoURL}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <FiUser className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <span className="text-gray-700 dark:text-gray-300">
                      {currentUser.displayName || currentUser.email}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 text-red-500 hover:text-red-600 py-2"
                  >
                    <FiLogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-2 space-y-2">
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

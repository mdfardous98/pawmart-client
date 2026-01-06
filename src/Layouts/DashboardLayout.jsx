import React, { useContext, useState } from "react";
import { Outlet, Link, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import {
  FiHome,
  FiUsers,
  FiPackage,
  FiShoppingCart,
  FiBarChart,
  FiSettings,
  FiMenu,
  FiX,
  FiLogOut,
  FiUser,
  FiPlus,
  FiList,
  FiStar,
} from "react-icons/fi";
import toast from "react-hot-toast";

const DashboardLayout = () => {
  const { currentUser, logOutUser, userRole, isAdmin, isSeller } =
    useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Redirect if not authenticated
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const handleLogout = async () => {
    try {
      await logOutUser();
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  // Define menu items based on user role
  const getMenuItems = () => {
    const baseItems = [
      { path: "/dashboard", icon: FiHome, label: "Dashboard Home" },
      { path: "/dashboard/profile", icon: FiUser, label: "Profile" },
    ];

    if (isSeller()) {
      baseItems.push(
        { path: "/dashboard/add-listing", icon: FiPlus, label: "Add Listing" },
        { path: "/dashboard/my-listings", icon: FiList, label: "My Listings" },
        {
          path: "/dashboard/my-orders",
          icon: FiShoppingCart,
          label: "My Orders",
        }
      );
    } else {
      // Buyer menu items
      baseItems.push(
        {
          path: "/dashboard/my-orders",
          icon: FiShoppingCart,
          label: "My Orders",
        },
        { path: "/dashboard/favorites", icon: FiStar, label: "Favorites" }
      );
    }

    if (isAdmin()) {
      baseItems.push(
        {
          path: "/dashboard/admin/users",
          icon: FiUsers,
          label: "Manage Users",
        },
        {
          path: "/dashboard/admin/listings",
          icon: FiPackage,
          label: "Manage Listings",
        },
        {
          path: "/dashboard/admin/orders",
          icon: FiShoppingCart,
          label: "All Orders",
        },
        {
          path: "/dashboard/admin/analytics",
          icon: FiBarChart,
          label: "Analytics",
        },
        {
          path: "/dashboard/admin/settings",
          icon: FiSettings,
          label: "Settings",
        }
      );
    }

    return baseItems;
  };

  const menuItems = getMenuItems();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:inset-0
      `}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PM</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              PawMart
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* User info */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <img
              src={
                currentUser?.photoURL ||
                `https://ui-avatars.com/api/?name=${currentUser?.displayName}&background=4f46e5&color=fff`
              }
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {currentUser?.displayName || "User"}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                {userRole || "buyer"}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                    ${
                      isActiveRoute(item.path)
                        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                  `}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Logout button */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900 dark:hover:text-red-300 rounded-md transition-colors duration-200"
          >
            <FiLogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-30 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FiMenu className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Back to Store
              </Link>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

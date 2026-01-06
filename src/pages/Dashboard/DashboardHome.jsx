import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { api } from "../../api/axios";
import {
  FiUsers,
  FiPackage,
  FiShoppingCart,
  FiDollarSign,
  FiTrendingUp,
  FiEye,
} from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import LoadingSpinner from "../../Components/LoadingSpinner";

const DashboardHome = () => {
  const { currentUser, userRole, isAdmin } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const [userListings, setUserListings] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      if (isAdmin()) {
        // Fetch admin statistics
        const statsResponse = await api.get("/admin/stats");
        setStats(statsResponse.data);
      }

      // Fetch user's listings and orders
      const [listingsResponse, ordersResponse] = await Promise.all([
        api.get(`/listings/user/${currentUser.email}`),
        api.get(`/orders/${currentUser.email}`),
      ]);

      setUserListings(listingsResponse.data);
      setUserOrders(ordersResponse.data);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  // Sample data for charts (replace with real data)
  const monthlyData = [
    { month: "Jan", orders: 12, revenue: 2400 },
    { month: "Feb", orders: 19, revenue: 1398 },
    { month: "Mar", orders: 8, revenue: 9800 },
    { month: "Apr", orders: 27, revenue: 3908 },
    { month: "May", orders: 18, revenue: 4800 },
    { month: "Jun", orders: 23, revenue: 3800 },
  ];

  const categoryData = [
    { name: "Pets", value: 35, color: "#4f46e5" },
    { name: "Pet Food", value: 25, color: "#06b6d4" },
    { name: "Accessories", value: 25, color: "#10b981" },
    { name: "Pet Care", value: 15, color: "#f59e0b" },
  ];

  const StatCard = ({ title, value, icon: Icon, color, change }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
          {change && (
            <p
              className={`text-sm ${
                change > 0 ? "text-green-600" : "text-red-600"
              } flex items-center mt-1`}
            >
              <FiTrendingUp className="w-4 h-4 mr-1" />
              {change > 0 ? "+" : ""}
              {change}%
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome back, {currentUser?.displayName || "User"}!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here's what's happening with your {isAdmin() ? "platform" : "account"}{" "}
          today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isAdmin() && stats ? (
          <>
            <StatCard
              title="Total Users"
              value={stats.totalUsers}
              icon={FiUsers}
              color="bg-blue-500"
              change={12}
            />
            <StatCard
              title="Total Listings"
              value={stats.totalListings}
              icon={FiPackage}
              color="bg-green-500"
              change={8}
            />
            <StatCard
              title="Total Orders"
              value={stats.totalOrders}
              icon={FiShoppingCart}
              color="bg-purple-500"
              change={-2}
            />
            <StatCard
              title="Revenue"
              value="$12,345"
              icon={FiDollarSign}
              color="bg-yellow-500"
              change={15}
            />
          </>
        ) : (
          <>
            <StatCard
              title="My Listings"
              value={userListings.length}
              icon={FiPackage}
              color="bg-blue-500"
            />
            <StatCard
              title="My Orders"
              value={userOrders.length}
              icon={FiShoppingCart}
              color="bg-green-500"
            />
            <StatCard
              title="Total Views"
              value={userListings.reduce(
                (sum, listing) => sum + (listing.views || 0),
                0
              )}
              icon={FiEye}
              color="bg-purple-500"
            />
            <StatCard
              title="Active Listings"
              value={
                userListings.filter((listing) => listing.status === "active")
                  .length
              }
              icon={FiTrendingUp}
              color="bg-yellow-500"
            />
          </>
        )}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Orders Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Monthly Orders
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Category Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Listings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Listings
          </h3>
          <div className="space-y-3">
            {userListings.slice(0, 5).map((listing) => (
              <div
                key={listing._id}
                className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {listing.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ${listing.Price}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    listing.status === "active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                  }`}
                >
                  {listing.status || "active"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Orders
          </h3>
          <div className="space-y-3">
            {userOrders.slice(0, 5).map((order) => (
              <div
                key={order._id}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {order.productName}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Qty: {order.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    ${order.price * order.quantity}
                  </p>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      order.status === "delivered"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : order.status === "pending"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    }`}
                  >
                    {order.status || "pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

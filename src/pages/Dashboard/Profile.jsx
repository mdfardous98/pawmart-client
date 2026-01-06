import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useForm } from "react-hook-form";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCamera,
  FiSave,
} from "react-icons/fi";
import toast from "react-hot-toast";
import LoadingSpinner from "../../Components/LoadingSpinner";

const Profile = () => {
  const {
    currentUser,
    updateCurrentUser,
    getUserProfile,
    updateUserProfile,
    userRole,
  } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const profile = await getUserProfile();
      if (profile) {
        setProfileData(profile);
        setValue("name", profile.name);
        setValue("email", profile.email);
        setValue("phone", profile.phone || "");
        setValue("address", profile.address || "");
        setImagePreview(currentUser?.photoURL);
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Update Firebase profile if name or image changed
      if (
        data.name !== currentUser?.displayName ||
        imagePreview !== currentUser?.photoURL
      ) {
        await updateCurrentUser(data.name, imagePreview);
      }

      // Update backend profile
      await updateUserProfile({
        name: data.name,
        phone: data.phone,
        address: data.address,
      });

      // Refresh profile data
      await fetchProfile();

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you'd upload to a service like Cloudinary
      // For now, we'll use a placeholder URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading && !profileData) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Profile Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account information and preferences
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Profile Image */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src={
                  imagePreview ||
                  currentUser?.photoURL ||
                  `https://ui-avatars.com/api/?name=${currentUser?.displayName}&background=4f46e5&color=fff`
                }
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <label className="absolute bottom-0 right-0 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full cursor-pointer shadow-lg transition-colors">
                <FiCamera className="w-4 h-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {currentUser?.displayName || "User"}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                {userRole} Account
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Click the camera icon to update your profile picture
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <FiUser className="inline w-4 h-4 mr-2" />
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <FiMail className="inline w-4 h-4 mr-2" />
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                disabled
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                placeholder="Email address"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Email cannot be changed
              </p>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <FiPhone className="inline w-4 h-4 mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone", {
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Account Type
              </label>
              <input
                type="text"
                value={userRole || "buyer"}
                disabled
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed capitalize"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Contact admin to change account type
              </p>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <FiMapPin className="inline w-4 h-4 mr-2" />
              Address
            </label>
            <textarea
              {...register("address")}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="Enter your full address"
            />
          </div>

          {/* Account Statistics */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Account Statistics
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {profileData?.createdAt
                    ? new Date(profileData.createdAt).getFullYear()
                    : "2025"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Member Since
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {profileData?.isVerified ? "Yes" : "No"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Verified
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {profileData?.totalListings || 0}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Total Listings
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {profileData?.totalOrders || 0}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Total Orders
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center px-6 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-lg transition-colors"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              ) : (
                <FiSave className="w-4 h-4 mr-2" />
              )}
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

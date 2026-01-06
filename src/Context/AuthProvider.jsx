import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { api } from "../api/axios";
import toast from "react-hot-toast";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("pawmart_token"));

  // Enhanced registration with backend integration
  const registerWithEmail = async (email, password, userData) => {
    setLoading(true);
    try {
      // Create Firebase user
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update Firebase profile
      await updateProfile(result.user, {
        displayName: userData.name,
        photoURL: userData.photoURL || null,
      });

      // Register with backend
      const backendResponse = await api.post("/auth/register", {
        name: userData.name,
        email: email,
        password: password,
        role: userData.role || "buyer",
        phone: userData.phone,
        address: userData.address,
      });

      // Store JWT token
      const jwtToken = backendResponse.data.token;
      localStorage.setItem("pawmart_token", jwtToken);
      setToken(jwtToken);
      setUserRole(backendResponse.data.user.role);

      // Set axios default header
      api.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

      toast.success("Registration successful!");
      return result;
    } catch (error) {
      toast.error(error.response?.data?.error || "Registration failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Enhanced login with backend integration
  const loginWithEmail = async (email, password) => {
    setLoading(true);
    try {
      // Firebase login
      const result = await signInWithEmailAndPassword(auth, email, password);

      // Backend login to get JWT token
      const backendResponse = await api.post("/auth/login", {
        email: email,
        password: password,
      });

      // Store JWT token
      const jwtToken = backendResponse.data.token;
      localStorage.setItem("pawmart_token", jwtToken);
      setToken(jwtToken);
      setUserRole(backendResponse.data.user.role);

      // Set axios default header
      api.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

      toast.success("Login successful!");
      return result;
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateCurrentUser = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // Enhanced Google login with backend integration
  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Try to login with backend first
      try {
        const backendResponse = await api.post("/auth/login", {
          email: user.email,
          password: "google_oauth", // Special identifier for OAuth users
        });

        const jwtToken = backendResponse.data.token;
        localStorage.setItem("pawmart_token", jwtToken);
        setToken(jwtToken);
        setUserRole(backendResponse.data.user.role);
        api.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
      } catch (loginError) {
        // If login fails, register the user
        const registerResponse = await api.post("/auth/register", {
          name: user.displayName,
          email: user.email,
          password: "google_oauth",
          role: "buyer",
        });

        const jwtToken = registerResponse.data.token;
        localStorage.setItem("pawmart_token", jwtToken);
        setToken(jwtToken);
        setUserRole(registerResponse.data.user.role);
        api.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
      }

      toast.success("Google login successful!");
      return result;
    } catch (error) {
      toast.error("Google login failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logOutUser = () => {
    setLoading(true);
    // Clear JWT token
    localStorage.removeItem("pawmart_token");
    setToken(null);
    setUserRole(null);
    delete api.defaults.headers.common["Authorization"];

    toast.success("Logged out successfully");
    return signOut(auth);
  };

  // Check if user is admin
  const isAdmin = () => {
    return userRole === "admin";
  };

  // Check if user is seller or admin
  const isSeller = () => {
    return userRole === "seller" || userRole === "admin";
  };

  // Get user profile from backend
  const getUserProfile = async () => {
    try {
      if (token) {
        const response = await api.get("/auth/profile");
        return response.data;
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      // If token is invalid, clear it
      if (error.response?.status === 401) {
        logOutUser();
      }
    }
  };

  // Update user profile
  const updateUserProfile = async (profileData) => {
    try {
      const response = await api.put("/auth/profile", profileData);
      toast.success("Profile updated successfully");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.error || "Profile update failed");
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      // If we have a token but no Firebase user, clear the token
      if (!user && token) {
        localStorage.removeItem("pawmart_token");
        setToken(null);
        setUserRole(null);
        delete api.defaults.headers.common["Authorization"];
      }

      // If we have both Firebase user and token, set up axios header
      if (user && token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        // Fetch user profile to get role
        try {
          const profile = await getUserProfile();
          if (profile) {
            setUserRole(profile.role);
          }
        } catch (error) {
          console.error("Failed to fetch user profile on auth change:", error);
        }
      }

      setLoading(false);
    });
    return () => unsubscribe();
  }, [token]);

  // Set up axios interceptor for token refresh
  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 && token) {
          // Token expired or invalid
          logOutUser();
          toast.error("Session expired. Please login again.");
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, [token]);

  const authInfo = {
    registerWithEmail,
    loginWithEmail,
    loginWithGoogle,
    updateCurrentUser,
    updateUserProfile,
    getUserProfile,
    currentUser,
    logOutUser,
    loading,
    setLoading,
    userRole,
    token,
    isAdmin,
    isSeller,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

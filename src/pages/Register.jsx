import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const { register, loginWithGoogle, currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser, navigate]);

  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password))
      return "Password must contain at least one lowercase letter";
    if (password.length < 6)
      return "Password must be at least 6 characters long";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordError("");

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    const error = validatePassword(password);
    if (error) {
      setPasswordError(error);
      return;
    }

    setLoading(true);
    try {
      await register(email, password);
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.error("Google registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-md w-full space-y-8 transform transition-transform duration-200 hover:scale-105">
        <div>
          
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center transform transition-transform duration-200 hover:scale-110">
              <span className="text-white font-bold text-2xl">🐾</span>
            </div>
          </div>

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Join PawMart Community
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Create your account to start adopting or selling
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {[
              {
                id: "name",
                icon: FiUser,
                placeholder: "Full Name",
                type: "text",
                value: name,
                onChange: setName,
                autoComplete: "name",
              },
              {
                id: "email",
                icon: FiMail,
                placeholder: "Email address",
                type: "email",
                value: email,
                onChange: setEmail,
                autoComplete: "email",
              },
              {
                id: "password",
                icon: FiLock,
                placeholder: "Password",
                type: "password",
                value: password,
                onChange: setPassword,
                autoComplete: "new-password",
              },
              {
                id: "confirmPassword",
                icon: FiLock,
                placeholder: "Confirm Password",
                type: "password",
                value: confirmPassword,
                onChange: setConfirmPassword,
                autoComplete: "new-password",
              },
              {
                id: "photoURL",
                icon: FiCamera,
                placeholder: "Profile Photo URL (Optional)",
                type: "url",
                value: photoURL,
                onChange: setPhotoURL,
                autoComplete: "",
              },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="sr-only">
                  {field.placeholder}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <field.icon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required={field.id !== "photoURL"}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md 
                               focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm 
                               transition-shadow duration-200 hover:shadow-md"
                    placeholder={field.placeholder}
                  />
                </div>
              </div>
            ))}
          </div>

          {passwordError && (
            <div className="text-red-500 text-sm text-center">
              {passwordError}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 
                         hover:bg-primary-700 hover:scale-105 transition-transform duration-200 ease-in-out 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>

        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 
                       hover:bg-gray-50 hover:scale-105 transition-transform duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:text-primary-500 hover:underline transition-colors duration-200"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

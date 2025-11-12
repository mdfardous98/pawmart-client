import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { CgEye, CgImage, CgUser } from "react-icons/cg";
import { GoEyeClosed } from "react-icons/go";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { loginWithGoogle, registerWithEmail, setLoading, updateCurrentUser } =
    useContext(AuthContext);

  const [showPass, setShowPass] = useState(false);
  const [invalid, setInvalid] = useState("");

  const handleShowPass = () => setShowPass(!showPass);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.image.value;

    if (password.length < 6) {
      return setInvalid("Password must be at least 6 characters long.");
    } else if (!/[A-Z]/.test(password)) {
      return setInvalid("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      return setInvalid("Password must contain at least one lowercase letter.");
    }

    registerWithEmail(email, password)
      .then(() => {
        toast.success("🎉 Registration Successful!");
        updateCurrentUser(name, photoURL)
          .then(() => {
            toast.success("Profile updated successfully!");
            setLoading(false);
          })
          .catch((error) => {
            toast.error(error.code);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("✅ Logged in with Google!");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500">
      <title>Register | PawMart</title>
      <div className="w-full max-w-md p-8 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl text-white">
        <h2 className="text-4xl font-extrabold text-center mb-8 drop-shadow-md">
          Create Your Account 🐾
        </h2>

        <form onSubmit={handleRegisterForm} className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-white/80">
              Full Name
            </label>
            <div className="flex items-center bg-white/20 border border-white/30 rounded-full px-4 py-2 mt-1 focus-within:ring-2 focus-within:ring-pink-300 transition-all">
              <CgUser className="text-xl text-white/70" />
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="flex-1 bg-transparent outline-none px-3 text-white placeholder-white/50"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-white/80">Email</label>
            <div className="flex items-center bg-white/20 border border-white/30 rounded-full px-4 py-2 mt-1 focus-within:ring-2 focus-within:ring-pink-300 transition-all">
              <MdOutlineEmail className="text-xl text-white/70" />
              <input
                type="email"
                name="email"
                required
                placeholder="your-email@example.com"
                className="flex-1 bg-transparent outline-none px-3 text-white placeholder-white/50"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-white/80">
              Password
            </label>
            <div className="flex items-center bg-white/20 border border-white/30 rounded-full px-4 py-2 mt-1 focus-within:ring-2 focus-within:ring-pink-300 transition-all">
              <MdOutlineLock className="text-xl text-white/70" />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                required
                placeholder="••••••••"
                className="flex-1 bg-transparent outline-none px-3 text-white placeholder-white/50"
              />
              <div
                onClick={handleShowPass}
                className="cursor-pointer hover:scale-110 transition-transform"
              >
                {showPass ? <GoEyeClosed size={22} /> : <CgEye size={22} />}
              </div>
            </div>
            {invalid && (
              <p className="text-red-300 text-sm mt-1 text-center">{invalid}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-white/80">
              Profile Picture URL
            </label>
            <div className="flex items-center bg-white/20 border border-white/30 rounded-full px-4 py-2 mt-1 focus-within:ring-2 focus-within:ring-pink-300 transition-all">
              <CgImage className="text-xl text-white/70" />
              <input
                type="text"
                name="image"
                placeholder="https://example.com/photo.jpg"
                className="flex-1 bg-transparent outline-none px-3 text-white placeholder-white/50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-blue-500 to-pink-600 rounded-full font-bold text-white shadow-md hover:scale-105 hover:shadow-xl transition-all"
          >
            Register
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 my-6 text-white/70">
          <span className="w-16 h-px bg-white/40"></span>
          OR
          <span className="w-16 h-px bg-white/40"></span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-semibold py-3 rounded-full hover:bg-gray-100 hover:scale-105 transition-all"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        <p className="text-center mt-6 text-white/80">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-white hover:text-yellow-300 underline underline-offset-4"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-accent dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-500">
      <Navbar />
      <main className="transition-colors duration-500">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

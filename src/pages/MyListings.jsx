import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrash, FaBoxOpen } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import Container from "../Components/Container";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const MyListings = () => {
  const { currentUser } = useContext(AuthContext);
  const [listingsData, setListingsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser?.email) return;

    axios
      .get(
        `https://pawmart-server-olive.vercel.app/listings/user/${currentUser?.email}`
      )
      .then((res) => setListingsData(res.data))
      .catch(() => toast.error("Failed to fetch listings"))
      .finally(() => setLoading(false));
  }, [currentUser?.email]);

  if (loading) return <LoadingSpinner />;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Listing?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#374151",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
       axios
         .delete(`https://pawmart-server-olive.vercel.app/listings/${id}`)
         .then(() => {
           setListingsData(listingsData.filter((item) => item._id !== id));
           Swal.fire({
             title: "Deleted!",
             text: "Your listing has been deleted.",
             icon: "success",
             timer: 2000,
             showConfirmButton: false,
           });
         })
         .catch(() => toast.error("Failed to delete listing"));
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12">
      <title>My PawMart Listings</title>
      <Container className="sand">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full py-4 px-8 shadow-lg">
          <FaBoxOpen className="text-3xl" />
          <Typewriter words={["My Active Listings"]} />
        </h2>

        {listingsData.length === 0 ? (
          <div className="my-40 text-center">
            <h1 className="text-4xl font-bold text-gray-400 dark:text-gray-600">
              No Listings Found
            </h1>
            <p className="text-gray-500 mt-3">
              Start adding your pets or products to reach new homes!
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4">
            <table className="table-auto w-full text-gray-800 dark:text-gray-200">
              <thead className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-sm tracking-wide">
                <tr>
                  <th className="p-3">Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Email</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listingsData.map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <td className="p-2">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="font-medium">{item.name}</td>
                    <td>{item.category}</td>
                    <td>
                      {item.category === "Pets" || item.Price === 0
                        ? "Free for Adoption"
                        : `৳${item.Price}`}
                    </td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td className="whitespace-pre-wrap">{item.location}</td>
                    <td>{item.email}</td>
                    <td className="flex justify-center items-center gap-2 py-2">
                      <Link
                        to={`/update-listing/${item._id}`}
                        state={item}
                        className="btn btn-sm btn-circle bg-blue-500 hover:bg-blue-600 text-white transition-all shadow-md"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-sm btn-circle bg-red-500 hover:bg-red-600 text-white transition-all shadow-md"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </div>
  );
};

export default MyListings;

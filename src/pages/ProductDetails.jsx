import React, { useContext, useEffect, useRef, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaShoppingCart, FaPaw, FaTag } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../Components/LoadingSpinner";

const ProductDetails = () => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams();
  const modalRef = useRef(null);
  const [pageDetails, setPageDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios()
      .then((res) => setPageDetails(res.data))
      .catch(() => toast.error("Failed to fetch product details"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading || !pageDetails) return <LoadingSpinner />;

  const { _id, name, category, Price, location, description, image, email } =
    pageDetails;
  const isPet = category === "Pets";
  const ButtonIcon = isPet ? FaPaw : FaShoppingCart;
  const buttonText = isPet ? "Adopt Now" : "Order Now";

  const handleModal = () => modalRef.current.showModal();

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const orderData = {
      productId: _id,
      productName: name,
      buyerName: form.name.value,
      email: form.email.value,
      quantity: form.quantity.value,
      price: Price,
      address: form.address.value,
      phone: form.phone.value,
      date: form.date.value,
      additionalNotes: form.notes.value,
    };

    axios
      .post(orderData)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Order submitted successfully!");
          form.reset();
          modalRef.current.close();
        }
      })
      .catch(() => toast.error("Failed to submit order"));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 md:p-12 transition-colors duration-500">
      <div className="container max-w-7xl mx-auto">
        <div className="card rounded-3xl lg:card-side bg-white dark:bg-gray-800 shadow-2xl overflow-hidden transition-transform hover:scale-105 duration-500">
          <figure className="lg:w-1/2">
            <img
              src={image}
              alt={name}
              className="w-full h-96 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </figure>

          <div className="card-body lg:w-1/2 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-blue-500 font-semibold mb-2">
                <BiCategory /> {category}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{name}</h1>

              <div className="flex items-center gap-2 text-sm mb-4 text-gray-500 dark:text-gray-400">
                <MdOutlineEmail /> Listed by: {email}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {description}
              </p>

              <div className="divider border-gray-300 dark:border-gray-700"></div>

              <div className="flex flex-col sm:flex-row justify-between gap-4 my-6">
                <div className="flex items-center gap-2 text-lg">
                  <FaTag className="text-blue-500" />
                  <span className="font-bold text-xl">
                    {Price === 0 ? "Free for Adoption" : `৳${Price}`}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <IoLocationOutline className="text-blue-500" />
                  <span>{location}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleModal}
                className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 cursor-pointer"
              >
                <ButtonIcon />
                {buttonText}
              </button>
            </div>

            {/* Order Modal */}
            <dialog
              ref={modalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 max-w-3xl rounded-3xl p-8 shadow-2xl">
                <h3 className="text-3xl font-extrabold mb-6 text-center text-blue-600 dark:text-blue-400">
                  {isPet ? "Adopt Your Pet" : "Place Your Order"}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                  Fill in the details below to confirm your{" "}
                  {isPet ? "adoption" : "order"}.
                </p>

                <form onSubmit={handleOrderSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={currentUser.displayName || ""}
                      readOnly
                      className="input w-full border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 placeholder-gray-400 dark:placeholder-gray-300"
                      placeholder="Your Full Name"
                    />
                    <input
                      type="email"
                      name="email"
                      value={currentUser.email || ""}
                      readOnly
                      className="input w-full border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 placeholder-gray-400 dark:placeholder-gray-300"
                      placeholder="Email Address"
                    />
                    <input
                      type="text"
                      value={name}
                      readOnly
                      className="input w-full border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 placeholder-gray-400 dark:placeholder-gray-300"
                      placeholder="Product / Pet Name"
                    />
                    <input
                      type="text"
                      value={Price === 0 ? "Free for Adoption" : `৳${Price}`}
                      readOnly
                      className="input w-full border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 placeholder-gray-400 dark:placeholder-gray-300"
                      placeholder="Price"
                    />
                  </div>

                  {/* Order Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="quantity"
                      defaultValue={isPet ? 1 : ""}
                      readOnly={isPet}
                      min="1"
                      placeholder={isPet ? "Quantity: 1" : "Enter quantity"}
                      required
                      className="input w-full border-2 border-green-300 dark:border-green-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2"
                    />
                    <input
                      type="date"
                      name="date"
                      required
                      className="input w-full border-2 border-green-300 dark:border-green-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (e.g., +8801XXXXXXXXX)"
                      required
                      className="input w-full border-2 border-green-300 dark:border-green-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2"
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Full Address (Street, City, Postal)"
                      required
                      className="input w-full border-2 border-green-300 dark:border-green-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2"
                    />
                  </div>

                  {/* Additional Notes */}
                  <textarea
                    name="notes"
                    placeholder="Any special instructions or requests?"
                    className="textarea w-full border-2 border-purple-300 dark:border-purple-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 placeholder-gray-400 dark:placeholder-gray-300"
                  ></textarea>

                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      type="submit"
                      className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105"
                    >
                      Confirm {isPet ? "Adoption" : "Order"}
                    </button>
                    <button
                      type="button"
                      onClick={() => modalRef.current.close()}
                      className="btn btn-outline text-gray-700 dark:text-gray-200 border-gray-400 dark:border-gray-600 px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

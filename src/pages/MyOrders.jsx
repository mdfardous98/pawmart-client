import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import Container from "../Components/Container";
import { Typewriter } from "react-simple-typewriter";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import { FaFilePdf } from "react-icons/fa";
import toast from "react-hot-toast";

const MyOrders = () => {
  const { currentUser } = useContext(AuthContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser?.email) return;

    axios
      .get()
      .then((res) => setOrderData(res.data))
      .catch(() => toast.error("Failed to fetch orders"))
      .finally(() => setLoading(false));
  }, [currentUser?.email]);

  if (loading) return <LoadingSpinner />;

  const generatePdf = () => {
    if (!orderData.length) return toast.error("No orders to export");

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("My Orders", 14, 15);
    const head = [
      [
        "Product",
        "Buyer Name",
        "Price",
        "Quantity",
        "Pickup Date",
        "Address",
        "Phone",
      ],
    ];
    const body = orderData.map((o) => [
      o.productName,
      o.buyerName,
      `৳${o.price}`,
      o.quantity,
      new Date(o.date).toLocaleDateString(),
      o.address,
      o.phone,
    ]);

    autoTable(doc, {
      head,
      body,
      startY: 25,
      theme: "grid",
      headStyles: { fillColor: [59, 130, 246] },
    });
    doc.save("My-Orders.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12">
      <title>My Orders</title>
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full py-4 px-8 shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer">
          <FaFilePdf className="text-3xl animate-bounce" />
          <Typewriter words={["My Orders Dashboard"]} />
        </h2>

        {orderData.length === 0 ? (
          <div className="my-40 text-center">
            <h1 className="text-4xl font-bold text-gray-400 dark:text-gray-600">
              No Orders Found
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Once someone places an order, it will appear here.
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 mb-6">
              <table className="table-auto w-full text-gray-800 dark:text-gray-200">
                <thead className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-sm tracking-wide">
                  <tr>
                    <th className="p-3">Product</th>
                    <th>Buyer Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Pickup Date</th>
                    <th>Address</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.map((order) => (
                    <tr
                      key={order._id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                    >
                      <td className="font-medium">{order.productName}</td>
                      <td>{order.buyerName}</td>
                      <td>৳{order.price}</td>
                      <td>{order.quantity}</td>
                      <td>{new Date(order.date).toLocaleDateString()}</td>
                      <td className="whitespace-pre-wrap max-w-xs">
                        {order.address}
                      </td>
                      <td>{order.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <button
                onClick={generatePdf}
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
              >
                <FaFilePdf />
                Download PDF
              </button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default MyOrders;

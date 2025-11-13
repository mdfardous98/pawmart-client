import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import PetsSupply from "../Pages/PetsSupply";
import Login from "../Pages/Login";
import Register from "../pages/Register";
import AddListing from "../pages/AddListing";
import MyListings from "../pages/MyListings";
import ErrorPage from "../Error/ErrorPage";
import MyOrders from "../pages/MyOrders";
import GuestRouter from "./GuestRouter";
import PrivateRoute from "./PrivateRoute";
import CategoryProducts from "../pages/CategoryProducts";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import ProductDetails from "../pages/ProductDetails";
import UpdateListing from "../pages/UpdateListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () =>
          axios.get("https://pawmart-server-olive.vercel.app/recent-listings"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/pets-supplies",
        element: <PetsSupply></PetsSupply>,
        loader: () =>
          axios.get("https://pawmart-server-olive.vercel.app/listings"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/category-filtered-product/:categoryName",
        element: <CategoryProducts></CategoryProducts>,
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-listing",
        element: (
          <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-listing/:id",
        element: (
          <PrivateRoute>
            <UpdateListing></UpdateListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <GuestRouter>
        <Login></Login>
      </GuestRouter>
    ),
  },
  {
    path: "/register",
    element: (
      <GuestRouter>
        <Register></Register>
      </GuestRouter>
    ),
  },
]);

export default router;

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
import LoadingSpinner from "../Components/LoadingSpinner";
import ProductDetails from "../pages/ProductDetails";
import UpdateListing from "../pages/UpdateListing";
import { api } from "../api/axios"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => api.get("/recent-listings"),
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "/pets-supplies",
        element: <PetsSupply />,
        loader: () => api.get("/listings"),
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "/category-filtered-product/:categoryName",
        element: <CategoryProducts />,
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-listing",
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-listing/:id",
        element: (
          <PrivateRoute>
            <UpdateListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <GuestRouter>
        <Login />
      </GuestRouter>
    ),
  },
  {
    path: "/register",
    element: (
      <GuestRouter>
        <Register />
      </GuestRouter>
    ),
  },
]);

export default router;

import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
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
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Profile from "../pages/Dashboard/Profile";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
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
        loader: async () => {
          try {
            return await api.get("/recent-listings");
          } catch (error) {
            console.warn("Failed to load recent listings:", error);
            return { data: [] }; // Return empty data instead of failing
          }
        },
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pets-supplies",
        element: <PetsSupply />,
        loader: async () => {
          try {
            return await api.get("/listings");
          } catch (error) {
            console.warn("Failed to load listings:", error);
            return { data: [] }; // Return empty data instead of failing
          }
        },
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "add-listing",
        element: <AddListing />,
      },
      {
        path: "my-listings",
        element: <MyListings />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
      },
      {
        path: "admin/users",
        element: <ManageUsers />,
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

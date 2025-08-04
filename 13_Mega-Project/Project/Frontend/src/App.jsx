import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ShopContextProvider from "./context/ShopContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout";
import Loader from "./components/Loader";
import Login from "./Authetication/login";
import Signup from "./Authetication/signup";
import Checkout from "./pages/Checkout.jsx";
// Pages
const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
const Product = lazy(() => import("./pages/Product"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Orders = lazy(() => import("./pages/Orders"));
const Cart = lazy(() => import("./pages/Cart"));

const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "Collection",
        element: <Collection />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
      {
        path: "Orders",
        element: <Orders />,
      },
      {
        path: "place-order",
        element: <PlaceOrder />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const App = () => {
  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <ShopContextProvider>
          <RouterProvider router={routing} />
        </ShopContextProvider>
      </Suspense>
    </>
  );
};

export default App;

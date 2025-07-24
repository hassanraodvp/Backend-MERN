import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Loader from "./components/Loader";
import Login from "./Authetication/login";
import Signup from "./Authetication/signup";
// Pages
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

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
        path: "products",
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
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routing} />
    </Suspense>
  );
};

export default App;

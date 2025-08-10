import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

const SideBar = React.lazy(() => import("./components/SideBar.jsx"));
const Add = React.lazy(() => import("./pages/Add.jsx"));
const List = React.lazy(() => import("./pages/List.jsx"));
const Order = React.lazy(() => import("./pages/Order.jsx"));

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
  useEffect(()=> {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <div className="bg-gray-100 min-h-screen">
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        {token === "" ? (
          <Routes>
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/signup" element={<Signup setToken={setToken} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        ) : (
          <>
            <Header />
            <div className="flex md:flex-row flex-col w-full">
              <SideBar />
              <div className="w-full md:w-[70%] ml-[max(5vw, 25px)]">
                <Routes>
                  <Route path="/add" element={<Add token={token}/>} />
                  <Route path="/list" element={<List  token={token}/>} />
                  <Route path="/order" element={<Order  token={token}/>} />
                  <Route path="*" element={<Navigate to="/add" replace />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </>
        )}
      </Suspense>
    </div>
  );
};

export default App;

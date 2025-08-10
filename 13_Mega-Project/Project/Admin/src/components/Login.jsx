import React, { useState } from "react";
import { Link } from "react-router-dom";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message)
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message)
    }
  };

  return (
    <section className="bg-cover flex justify-center items-center min-h-screen">
      <div className="container">
        <div className="flex justify-center items-center bg-white rounded-lg p-8 md:w-[50%] xl:w-[40%] shadow-xl overflow-hidden mx-auto">
          <form className="w-full" onSubmit={onsubmitHandler}>
            <h2 className="text-4xl font-bold text-primary text-center">
              Login
            </h2>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <p className="text-xs text-center text-secondary uppercase">
                Welcome back!
              </p>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                placeholder="Enter E-mail"
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                placeholder="Enter Your Password"
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-8">
              <button className="bg-gray-700 cursor-pointer text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Login
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link to="/signup" className="text-xs text-gray-500 uppercase">
                or{" "}
                <span className="text-blue-500 underline underline-offset-4">
                  Sign Up
                </span>
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

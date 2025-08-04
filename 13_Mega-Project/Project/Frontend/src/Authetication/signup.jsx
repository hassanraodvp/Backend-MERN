import React from "react";
import { Link } from "react-router-dom";

const signup = () => {
  const onsubmitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <section className="bg-cover flex justify-center items-center min-h-screen">
      <div className="container">
        <div className="flex justify-center items-center bg-white rounded-lg shadow-xl overflow-hidden mx-auto max-w-sm lg:max-w-md">
          <form className="w-full p-8" onSubmit={onsubmitHandler}>
            <h2 className="text-4xl font-bold text-primary text-center">
              Signup
            </h2>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <p className="text-xs text-center text-secondary uppercase">
                Welcome!
              </p>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                placeholder="Enter Your Name"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                placeholder="Enter E-mail"
                type="email"
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
                placeholder="Choose Your Password"
                type="password"
              />
            </div>
            <div className="mt-8">
              <button className="bg-gray-700 text-white font-bold cursor-pointer py-2 px-4 w-full rounded hover:bg-gray-600">
                Signup
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link to="/login" className="text-xs text-gray-500 uppercase">
                OR{" "}
                <span className="text-blue-500 underline underline-offset-4">
                  Login
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

export default signup;

import React from "react";

const NewsLetter = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className="flex justify-center px-2 bg-gray-900">
      <div className="container">
        <div className="py-5 rounded-2xl md:py-7 lg:py-12 xl:py-16 2xl:py-20  text-center flex flex-col items-center space-y-4">
          <h4 className="text-2xl font-semibold tracking-wide text-white lg:text-3xl">
            Subscribe now & Get 20% OFF
          </h4>
          <p className="w-[90%] text-sm md:text-md md:w-[40%] lg:w-[30%] 2xl:w-[25%] text-white">
            Sign up and get notified whenever new products get added to the
            collection.
          </p>
          <div>
            <form
            onSubmit={onSubmitHandler}
              action="#"
              className="my-4 sm:flex sm:flex-row sm:justify-evenly"
            >
              <input
                className=" block w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-white border border-gray-300  rounded-tl-xl  rounded-bl-xl focus:outline-none"
                type="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="bg-blue-600 cursor-pointer hover:bg-blue-500 block w-full py-3 font-bold rounded-tr-xl rounded-br-xl shadow md:w-52 text-white">
                <span className="block ">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

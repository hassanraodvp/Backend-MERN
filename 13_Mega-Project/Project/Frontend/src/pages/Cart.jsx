import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import CartTotal from "../components/cartTotal";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Cart = () => {
  const { products, currency, cartItems, updateCart } = useContext(ShopContext);
  const [cartData, setCartData] = React.useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            price: products.find((product) => product._id === items).price,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  return cartData.length > 0 ? (
    <div className="py-26">
      <div className="container">
        <Title text1={"Your"} text2={"Cart Items"} />
        <div className="flex flex-col  bg-gray-200 py-5 md:px-5 px-2  my-[3%]">
          <div className="flex flex-col items-center gap-3  md:gap-5">
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              return (
                <div
                  key={index}
                  className="flex  mb-4 items-center justify-between w-full"
                >
                  <div className="flex  items-center gap-3 md:gap-5 2xl:gap-10">
                    <img
                      src={productData.image[0]}
                      className="w-[40%] md:w-[30%]  h-[30%] rounded-md"
                    />
                    <div className="flex flex-col space-y-2 md:space-y-5">
                      <p className="text-md md:text-xl 2xl:text-4xl font-bold w-[100%] md:w-[70%]">
                        {productData.name}
                      </p>
                      <p className="text-lg  md:text-xl 2xl:text-2xl text-gray-500">
                        Size:{" "}
                        <span className="font-bold  bg-gray-900 text-white px-5 py-1 rounded-md">
                          {item.size}
                        </span>
                      </p>
                      <p className="text-lg  md:text-xl 2xl:text-2xl text-gray-500">
                        Price:{" "}
                        <span className="font-bold text-secondary">
                          {currency}
                          {item.price}
                        </span>
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <input
                            onChange={(e) => {
                              const val = e.target.value;
                              if (val === "") return;
                              updateCart(item._id, item.size, Number(val));
                            }}
                            type="number"
                            className="border max-w-10 md:max-w-20 py-2 rounded-lg text-center"
                            value={item.quantity}
                          />
                        </div>
                        <div className="bg-red-500 hover:bg-transparent hover:border hover:border-red-500 hover:text-red-500 cursor-pointer text-white px-3 py-2 rounded-md">
                          <MdDelete
                            className="text-2xl  "
                            onClick={() => updateCart(item._id, item.size, 0)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end">
          <CartTotal />
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={() => navigate("/place-order")}
            className="px-5 md:px-10 py-3 flex items-center bg-primary rounded-md cursor-pointer hover:bg-transparent hover:border-black hover:border border border-primary hover:text-secondary font-bold tracking-wider text-white"
          >
            <span className="hidden lg:block pr-1">Proceed to</span>Checkout{" "}
            <FaArrowRight className="text-lg ml-2" />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className=" flex justify-center items-center text-center text-2xl font-semibold min-h-screen">
      <div className="flex flex-col gap-5">
        <h1> Your cart is empty.</h1>
        <Link to="/collection">
          <button className="bg-primary rounded-md text-white px-5 py-3 cursor-pointer hover:bg-secondary">
            ADD Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

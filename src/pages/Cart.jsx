import React, { useContext } from "react";
import { UserContext } from "../common/UserContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    cartItems,
    setCartItems,
    setBuyItem,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const removeItem = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  const buyNow = (item) => {
    setBuyItem(item);
    navigate("/bill");
  };

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * (item.qty || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg p-10 text-center shadow">
          <h2 className="text-2xl text-gray-500">
            Cart is Empty
          </h2>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between"
              >
                <div className="flex gap-5 items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-500">
                      ₹ {item.price}
                    </p>

                    <p className="text-gray-500">
                      Qty : {item.qty || 1}
                    </p>

                    <p className="font-bold text-green-600">
                      Total : ₹{" "}
                      {item.price * (item.qty || 1)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => buyNow(item)}
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

         <div className="bg-black text-white shadow-2xl rounded-xl mt-8 p-6 flex justify-between items-center border border-gray-700">
            <h2 className="text-3xl font-bold">
              Grand Total
            </h2>

            <h2 className="text-3xl font-bold text-emerald-400">
              ₹ {total}
            </h2>
          </div>
        </>
      )}
    </div>
  );
}
import React, { useState, useContext } from "react";
import { UserContext } from "../common/Context";

export default function Cart() {
  const { Item } = useContext(UserContext);
  const [qty, setQty] = useState(1);
  if (!Item) {
    return <h1 className="text-center mt-10">No Product Added</h1>;
  }
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-10 rounded-xl shadow-xl w-96">
          <img
            src={Item.thumbnail}
            alt={Item.title}
            className="w-full h-70 object-cover rounded"
          />

          <h5 className="text-2xl font-bold">
            {Item.title}
          </h5>

          <p className="text-gray-600 mt-2">
            ₹ {Item.price}
          </p>

          <label className="font-bold block">
            Quantity
          </label>

          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="w-full border p-3 rounded mt-2"
          />

          <h2 className="text-2xl te mt-6">
            Total: ₹ {qty * Item.price}
          </h2>

          <button className="w-full bg-blue-500 text-white p-3 rounded mt-6">
            Buy
          </button>
      </div>
    </div>
  );
}
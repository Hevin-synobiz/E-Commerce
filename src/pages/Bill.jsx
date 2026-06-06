import React, { useState, useContext } from "react";
import { UserContext } from "../common/Context";

export default function Bill() {
  const { Item } = useContext(UserContext);
  const [qty, setQty] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-xl shadow-xl w-[500px]">
        <h1 className="text-4xl font-bold text-center mb-8">
          Final Bill
        </h1>
        <img
            src={Item.thumbnail}
            alt={Item.title}
            className="w-full h-70 object-cover rounded"
        />

        <div className="border-b pb-4 mb-4">

          <div className="flex justify-between mb-2">
            <span>{Item.title}</span>
            <span>{Item.price}</span>
          </div>

        </div>

        <div className="flex justify-between text-2xl font-bold text-green-600">
          <span>Total</span>
          <span>{Item.price}</span>
        </div>

        <button className="w-full bg-green-500 text-white p-3 rounded mt-8">
          Print Bill
        </button>

      </div>

    </div>
  );
}
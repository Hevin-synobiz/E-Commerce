import React, { useState } from "react";

export default function Cart() {

  const [qty, setQty] = useState(1);

  const price = 500;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-xl shadow-xl w-96">

        <h1 className="text-3xl font-bold text-center mb-8">
          Cart Page
        </h1>

        <label className="font-bold">
          Product Quantity
        </label>

        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="w-full border p-3 rounded mt-2"
        />

        <h2 className="text-2xl font-bold text-green-600 mt-6">
          Total: ₹ {qty * price}
        </h2>

        <button className="w-full bg-blue-500 text-white p-3 rounded mt-6">
          Checkout
        </button>

      </div>

    </div>
  );
}
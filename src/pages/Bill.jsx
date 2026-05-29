import React from "react";

export default function Bill() {

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-xl shadow-xl w-[500px]">

        <h1 className="text-4xl font-bold text-center mb-8">
          Final Bill
        </h1>

        <div className="border-b pb-4 mb-4">

          <div className="flex justify-between mb-2">
            <span>Laptop</span>
            <span>₹ 50000</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Mouse</span>
            <span>₹ 500</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Keyboard</span>
            <span>₹ 1500</span>
          </div>

        </div>

        <div className="flex justify-between text-2xl font-bold text-green-600">
          <span>Total</span>
          <span>₹ 52000</span>
        </div>

        <button className="w-full bg-green-500 text-white p-3 rounded mt-8">
          Print Bill
        </button>

      </div>

    </div>
  );
}
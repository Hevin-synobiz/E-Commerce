import React, { useContext } from "react";
import { UserContext } from "../common/UserContext";

export default function Bill() {
  const { buyItem } = useContext(UserContext);

  if (!buyItem) {
    return (
      <h1 className="text-center mt-10">
        No Product Selected
      </h1>
    );
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white p-8 shadow rounded w-[500px]">
        <h1 className="text-3xl mb-5">
          Order Summary
        </h1>

        <img
          src={buyItem.thumbnail}
          alt={buyItem.title}
          className="w-full h-60 object-cover"
        />

        <h2 className="font-bold text-xl mt-4">
          {buyItem.title}
        </h2>

        <p className="text-green-600 text-2xl">
          ₹ {buyItem.price}
        </p>

        <button
          onClick={() => window.print()}
          className="w-full bg-green-500 text-white p-3 mt-5 rounded"
        >
          Print Bill
        </button>
      </div>
    </div>
  );
}
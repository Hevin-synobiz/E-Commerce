import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        POS Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <Link to="/products">
          <div className="bg-white p-10 rounded-xl shadow-lg hover:scale-105 duration-300 text-center">
            <h2 className="text-2xl font-bold text-blue-500">
              Products
            </h2>

            <p className="mt-3 text-gray-500">
              View all products
            </p>
          </div>
        </Link>

        <Link to="/cart">
          <div className="bg-white p-10 rounded-xl shadow-lg hover:scale-105 duration-300 text-center">
            <h2 className="text-2xl font-bold text-green-500">
              Cart
            </h2>

            <p className="mt-3 text-gray-500">
              Manage cart items
            </p>
          </div>
        </Link>

        <Link to="/bill">
          <div className="bg-white p-10 rounded-xl shadow-lg hover:scale-105 duration-300 text-center">
            <h2 className="text-2xl font-bold text-red-500">
              Bill
            </h2>

            <p className="mt-3 text-gray-500">
              Generate final bill
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}
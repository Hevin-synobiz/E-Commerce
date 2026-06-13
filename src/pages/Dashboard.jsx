import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../common/UserContext";

export default function Dashboard() {
  const { cartItems = [] } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 p-8">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-gray-900 text-5xl font-extrabold">
          🛒 MyShop Dashboard
        </h1>
        <p className="text-gray-800 font-medium mt-2">
          Manage your store easily
        </p>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-blue-600">
            📦 Products
          </h2>
          <p className="text-gray-900 font-semibold mt-2">
            View all available products
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-green-600">
            🛒 Cart
          </h2>
          <p className="text-gray-900 font-semibold mt-2">
            Items in cart: {cartItems.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-red-600">
            💳 Billing
          </h2>
          <p className="text-gray-900 font-semibold mt-2">
            Generate and manage invoices
          </p>
        </div>

      </div>

      {/* NAVIGATION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* PRODUCTS */}
        <Link to="/products">
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:scale-105 hover:bg-blue-50 transition text-center cursor-pointer">
            <div className="text-5xl mb-3">🛍️</div>
            <h2 className="text-2xl font-bold text-blue-700">
              Products
            </h2>
            <p className="text-gray-900 font-semibold mt-2">
              Browse and add items
            </p>
          </div>
        </Link>

        {/* CART */}
        <Link to="/cart">
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:scale-105 hover:bg-green-50 transition text-center cursor-pointer">
            <div className="text-5xl mb-3">🛒</div>
            <h2 className="text-2xl font-bold text-green-700">
              Cart
            </h2>
            <p className="text-gray-900 font-semibold mt-2">
              Manage selected items
            </p>
          </div>
        </Link>

        {/* BILLING */}
        <Link to="/bill">
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:scale-105 hover:bg-red-50 transition text-center cursor-pointer">
            <div className="text-5xl mb-3">💰</div>
            <h2 className="text-red-700 text-2xl font-bold">
              Billing
            </h2>
            <p className="text-gray-900 font-semibold mt-2">
              Generate final invoice
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}
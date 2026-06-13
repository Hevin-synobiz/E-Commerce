import React from "react";

export default function ProductCard({item, addToCart, buyNow,}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all p-4">
      <img src={item.thumbnail} alt={item.title} className=" w-full h-52 object-cover rounded-lg"/>

      <h3 className="font-bold mt-3">
        {item.title}
      </h3>

      <p className="text-gray-600">
        ₹ {item.price}
      </p>

      <div className="flex gap-2 mt-3">
        <button onClick={() => addToCart(item)} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
          Add Cart
        </button>

        <button onClick={() => buyNow(item)} className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded ">
          Buy Now
        </button>
      </div>
    </div>
  );
}
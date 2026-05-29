import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";

export default function Products() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
      const response = await fetch(
        "https://dummyjson.com/products"
      );
      const data = await response.json();
      setProducts(data.products);
  };
  
  const cart = async () => {
    navigate("/cart");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        POS Product Portal
      </h1>

      {/* FETCH API PRODUCTS */}

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-5 text-blue-600">
          Fetch API Products
        </h2>

        <div className="grid grid-cols-3 gap-5">

          {products.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-lg shadow-lg"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="text-xl font-bold mt-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                ₹ {item.price}
              </p>

              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-3" onClick={cart}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { useContext } from 'react' 
import { UserContext } from '../common/Context'
import axios from "axios";

export default function Products() {
  const { setItem } = useContext(UserContext)
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
      const response = await fetch(
        "https://dummyjson.com/products"
      );
      const data = await response.json();
      setProducts(data.products);
  };
  
  const cart = async (id) => {
    navigate("/cart" );
    setItem(
      id
    )
  };

  const buy = async (id) => {
    navigate("/bill" );
    setItem(
      id
    )
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
        <div className="grid grid-cols-3 gap-5">
          {products.map((item) => (
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
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-3" onClick={() => buy(item)}>
                Buy
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-3" onClick={() => cart(item)}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
  );
}
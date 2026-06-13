import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../common/UserContext";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  const {
    cartItems,
    setCartItems,
    setBuyItem,
  } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://dummyjson.com/products"
    );

    const data = await response.json();

    setProducts(data.products);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);

    alert("Added To Cart");
  };

  const buyNow = (product) => {
    setBuyItem(product);

    navigate("/bill");
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-lg shadow"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <h3 className="font-bold mt-2">
              {item.title}
            </h3>

            <p>₹ {item.price}</p>

            <div className="flex flex-col gap-2 mt-4">
              <button
                onClick={() => addToCart(item)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
              >
                Add To Cart
              </button>
              <button
                onClick={() => buyNow(item)}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
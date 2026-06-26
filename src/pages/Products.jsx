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

    setCartItems([
      ...cartItems,
      product
    ]);

    alert("Added To Cart");

  };





  const buyNow = (product) => {

    setBuyItem(product);

    navigate("/bill");

  };





  return (

    <>


    <style>

    {`

    .products-page {
      min-height:100vh;
      padding:40px;
      background:
      linear-gradient(
      135deg,
      #f8fafc,
      #eef2ff
      );

      font-family:Inter,sans-serif;

    }
    .page-title {

      text-align:center;
      margin-bottom:40px;

    }
    .page-title h1 {
      font-size:45px;
      font-weight:900;
      background:
      linear-gradient(
      90deg,
      #2563eb,
      #9333ea
      );
      -webkit-background-clip:text;
      color:transparent;

    }
    .page-title p {

      color:#64748b;
      margin-top:10px;

    }

    .product-grid {
      display:grid;
      grid-template-columns:
      repeat(4,1fr);
      gap:25px;
    }
    .product-card {
      background:white;
      border-radius:25px;
      padding:20px;
      box-shadow:
      0 15px 35px rgba(0,0,0,.08);
      transition:.35s;
    }
    .product-card:hover {
      transform:
      translateY(-10px);
      box-shadow:
      0 25px 50px rgba(0,0,0,.15);
    }
    .product-image {
      width:100%;
      height:220px;
      object-fit:cover;
      border-radius:18px;

    }
    .product-title {
      font-size:22px;
      font-weight:800;
      margin-top:15px;
      color:#1e293b;
    }

    .price {
      font-size:20px;
      font-weight:700;
      color:#16a34a;
      margin-top:8px;
    }
    .buttons {
      display:flex;
      flex-direction:column;
      gap:12px;
      margin-top:20px;
    }
    button {
      border:none;
      padding:12px;
      border-radius:12px;
      color:white;
      font-size:16px;
      font-weight:700;
      cursor:pointer;
      transition:.3s;
    }


    .cart-btn {
      background:
      linear-gradient(
      135deg,
      #2563eb,
      #1d4ed8
      );


    }

    .buy-btn {
      background:
      linear-gradient(
      135deg,
      #22c55e,
      #15803d
      );

    }
    button:hover {
      transform:scale(1.04);

    }
    @media(max-width:1100px){
      .product-grid {
        grid-template-columns:
        repeat(3,1fr);

      }

    }

    @media(max-width:800px){
      .product-grid {
        grid-template-columns:
        repeat(2,1fr);
      }

      .products-page {
        padding:25px;
      }

    }

    @media(max-width:500px){
      .product-grid {
        grid-template-columns:
        1fr;

      }

      .page-title h1 {
        font-size:32px;
      }
    }

    `}

    </style>



    <div className="products-page">
      <div className="page-title">
        <h1>
          🛍️ Products
        </h1>
        <p>
          Explore and purchase amazing products
        </p>
      </div>
      <div className="product-grid">
      {
        products.map((item)=>(
          <div
          key={item.id}
          className="product-card"
          >
            <img
            src={item.thumbnail}
            alt={item.title}
            className="product-image"
            />
            <h3 className="product-title">
              {item.title}
            </h3>
            <p className="price">
              ₹ {item.price}
            </p>
            <div className="buttons">
              <button
              className="cart-btn"
              onClick={()=>
              addToCart(item)}>
                Add To Cart
              </button>
              <button
              className="buy-btn"
              onClick={()=>
              buyNow(item)
              }>
                Buy Now
              </button>
            </div>
          </div>
        ))
      }
      </div>
    </div>
    </>

  );
}
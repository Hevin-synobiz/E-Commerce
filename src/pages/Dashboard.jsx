import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../common/UserContext";

export default function Dashboard() {

  const { cartItems = [] } = useContext(UserContext);

  return (
    <>

      <style>
        {`

        .dashboard {
          min-height:100vh;
          padding:40px;
          background:linear-gradient(135deg,#eef2ff,#f8fafc,#e2e8f0);
          font-family:Inter, sans-serif;
        }


        .header {
          text-align:center;
          margin-bottom:50px;
        }


        .header h1 {
          font-size:52px;
          font-weight:900;
          background:linear-gradient(90deg,#2563eb,#9333ea,#ec4899);
          -webkit-background-clip:text;
          color:transparent;
        }
        .header p {
          margin-top:10px;
          color:#475569;
          font-size:18px;
        }
        .stats {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:25px;
          margin-bottom:45px;
        }
        .stat-card {
          background:white;
          padding:30px;
          border-radius:25px;
          box-shadow:0 15px 40px rgba(0,0,0,.08);
          transition:.3s;
        }
        .stat-card:hover {
          transform:translateY(-10px);
        }
        .icon {
          font-size:45px;
        }
        .stat-card h2 {
          font-size:30px;
          font-weight:800;

        }
        .products-title {
          color:#2563eb;
        }
        .cart-title {
          color:#16a34a;
        }
        .billing-title {
          color:#dc2626;
        }
        .menus {
         display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:35px;

        }
        .menus a {
          text-decoration:none;

        }
        .menu-card {
          padding:19px;
          color:white;
          border-radius:30px;
          box-shadow:0 20px 45px rgba(0,0,0,.15);
          transition:.35s;
          cursor:pointer;

        }
        .menu-card:hover {
          transform:scale(1.05) translateY(-8px);

        }
        .menu-icon {
          font-size:65px;
          margin-bottom:20px;

        }
        .menu-card h2 {
          font-size:32px;
          font-weight:900;

        }
        .product-box {

          background:linear-gradient(135deg,#3b82f6,#1d4ed8);

        }
        .cart-box {

          background:linear-gradient(135deg,#22c55e,#047857);

        }



        .bill-box {

          background:linear-gradient(135deg,#ef4444,#ea580c);

        }




        @media(max-width:600px){

          .dashboard{
            padding:20px;
          }

          .header h1{
            font-size:36px;
          }

        }
        `}
      </style>
      <div className="dashboard">
        {/* HEADER */}
        <div className="header">
          <h1>
            🛒 MyShop Dashboard
          </h1>
          <p>
            Manage your store with simplicity and speed
          </p>
        </div>
        {/* STATS */}
        <div className="stats">
          <div className="stat-card">
            <div className="icon">
              📦
            </div>
            <h2 className="products-title">
              Products
            </h2>
            <p>
              View all available products
            </p>
          </div>
          <div className="stat-card">
            <div className="icon">
              🛒
            </div>
            <h2 className="cart-title">
              Cart
            </h2>
            <p>
              Items in cart: {cartItems.length}
            </p>
          </div>
          <div className="stat-card">
            <div className="icon">
              💳
            </div>
            <h2 className="billing-title">
              Billing
            </h2>
            <p>
              Generate invoices easily
            </p>
          </div>
        </div>
        {/* MENU */}
        <div className="menus">
          <Link to="/products">
            <div className="menu-card product-box">
              <div className="menu-icon">
                🛍️
              </div>
              <h2>
                Products
              </h2>
              <p>
                Browse and add items
              </p>
            </div>
          </Link>
          <Link to="/cart">
            <div className="menu-card cart-box">
              <div className="menu-icon">
                🛒
              </div>
              <h2>
                Cart
              </h2>
              <p>
                Manage selected items
              </p>
            </div>
          </Link>
          <Link to="/bill">
            <div className="menu-card bill-box">
              <div className="menu-icon">
                💰
              </div>
              <h2>
                Billing
              </h2>
              <p>
                Create final invoice
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
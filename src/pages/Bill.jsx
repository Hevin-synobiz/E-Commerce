import React, { useContext } from "react";
import { UserContext } from "../common/UserContext";

export default function Bill() {

  const { buyItem } = useContext(UserContext);


  if (!buyItem) {

    return (
      <>
        <style>
          {`

          .no-product {
            min-height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:#f8fafc;
            font-size:32px;
            font-weight:800;
            color:#64748b;
          }

          `}
        </style>


        <div className="no-product">
          No Product Selected 🛒
        </div>
      </>
    );

  }


  return (
    <>

      <style>
        {`
        .bill-page {
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:40px;
          background:linear-gradient(
            135deg,
            #eef2ff,
            #f8fafc);
          font-family:Inter,sans-serif;
        }

        .bill-card {
          width:500px;
          background:white;
          padding:35px;
          border-radius:30px;
          box-shadow:
          0 20px 50px rgba(0,0,0,.12);
          transition:.3s;
        }

        .bill-card:hover {
          transform:translateY(-8px);
        }

        .bill-title {
          text-align:center;
          font-size:38px;
          font-weight:900;
          margin-bottom:25px;
          background:linear-gradient(
            90deg,
            #2563eb,
            #9333ea);
          -webkit-background-clip:text;
          color:transparent;
        }

        .bill-image {
          width:100%;
          height:280px;
          object-fit:cover;
          border-radius:20px;
        }

        .product-name {
          font-size:26px;
          font-weight:900;
          margin-top:25px;
          color:#1e293b;
        }

        .price {
          margin-top:10px;
          font-size:32px;
          font-weight:900;
          color:#16a34a;
        }

        .details {
          margin-top:20px;
          padding:20px;
          border-radius:18px;
          background:#f8fafc;
          color:#475569;
        }

        .print-btn {
          width:100%;
          margin-top:25px;
          padding:15px;
          border:none;
          border-radius:15px;
          background:linear-gradient(
            135deg,
            #22c55e,
            #15803d);
          color:white;
          font-size:18px;
          font-weight:800;
          cursor:pointer;
          transition:.3s;
        }
        .print-btn:hover {
          transform:scale(1.05);
        }

        @media(max-width:600px){
          .bill-page {
            padding:20px;
          }

          .bill-card {
            width:100%;
          }
          .bill-title {
            font-size:30px;

          }

        }

        `}
      </style>


      <div className="bill-page">
        <div className="bill-card">
          <h1 className="bill-title">
            🧾 Order Summary
          </h1>

          <img
            src={buyItem.thumbnail}
            alt={buyItem.title}
            className="bill-image"/>

          <h2 className="product-name">
            {buyItem.title}
          </h2>
          <p className="price">
            ₹ {buyItem.price}
          </p>

          <div className="details">
            <p>
              Product ID : {buyItem.id}
            </p>

            <p>
              Category : {buyItem.category}
            </p>

            <p>
              Brand : {buyItem.brand}
            </p>
          </div>
          <button
            onClick={() => window.print()} className="print-btn">
            🖨 Print Bill
          </button>
        </div>
      </div>

    </>
  );
}
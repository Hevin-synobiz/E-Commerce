import React, { useContext } from "react";
import { UserContext } from "../common/UserContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {

  const {
    cartItems,
    setCartItems,
    setBuyItem,
  } = useContext(UserContext);


  const navigate = useNavigate();


  const removeItem = (id) => {

    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );

  };


  const buyNow = (item) => {

    setBuyItem(item);

    navigate("/bill");

  };


  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * (item.qty || 1),
    0
  );


  return (

    <>

      <style>

        {`

        .cart-page {

          min-height:100vh;

          padding:40px;

          background:linear-gradient(
            135deg,
            #f8fafc,
            #eef2ff
          );

          font-family:Inter,sans-serif;

        }


        .cart-title {

          text-align:center;

          margin-bottom:40px;

        }


        .cart-title h1 {

          font-size:45px;

          font-weight:900;

          background:linear-gradient(
            90deg,
            #2563eb,
            #9333ea
          );

          -webkit-background-clip:text;

          color:transparent;

        }


        .empty-cart {

          background:white;

          padding:50px;

          border-radius:25px;

          text-align:center;

          box-shadow:
          0 15px 35px rgba(0,0,0,.08);

        }


        .empty-cart h2 {

          color:#64748b;

          font-size:28px;

        }


        .cart-list {

          display:flex;

          flex-direction:column;

          gap:25px;

        }


        .cart-card {

          background:white;

          padding:25px;

          border-radius:25px;

          display:flex;

          justify-content:space-between;

          align-items:center;

          box-shadow:
          0 15px 35px rgba(0,0,0,.08);

          transition:.3s;

        }


        .cart-card:hover {

          transform:translateY(-5px);

          box-shadow:
          0 20px 45px rgba(0,0,0,.15);

        }


        .product-info {

          display:flex;

          gap:25px;

          align-items:center;

        }


        .product-info img {

          width:120px;

          height:120px;

          object-fit:cover;

          border-radius:18px;

        }


        .product-info h3 {

          font-size:22px;

          font-weight:800;

          color:#1e293b;

        }


        .price {

          color:#64748b;

          margin-top:5px;

        }


        .item-total {

          color:#16a34a;

          font-weight:800;

          margin-top:8px;

        }


        .actions {

          display:flex;

          gap:12px;

        }


        button {

          border:none;

          padding:12px 20px;

          border-radius:12px;

          color:white;

          font-weight:700;

          cursor:pointer;

          transition:.3s;

        }


        button:hover {

          transform:scale(1.05);

        }


        .buy {

          background:linear-gradient(
            135deg,
            #22c55e,
            #15803d
          );

        }


        .remove {

          background:linear-gradient(
            135deg,
            #ef4444,
            #b91c1c
          );

        }


        .total-box {

          margin-top:40px;

          padding:30px;

          border-radius:25px;

          background:linear-gradient(
            135deg,
            #020617,
            #111827
          );

          color:white;

          display:flex;

          justify-content:space-between;

          align-items:center;

          box-shadow:
          0 20px 50px rgba(0,0,0,.25);

        }


        .total-box h2 {

          font-size:32px;

          font-weight:900;

        }


        .grand-total {

          color:#34d399;

        }


        @media(max-width:800px){

          .cart-page {

            padding:20px;

          }


          .cart-card {

            flex-direction:column;

            align-items:flex-start;

            gap:20px;

          }


          .actions {

            width:100%;

          }


          button {

            width:100%;

          }


          .total-box {

            flex-direction:column;

            gap:15px;

            text-align:center;

          }

        }


        @media(max-width:500px){

          .product-info {

            flex-direction:column;

            align-items:flex-start;

          }


          .cart-title h1 {

            font-size:34px;

          }

        }

        `}

      </style>


      <div className="cart-page">


        <div className="cart-title">

          <h1>
            🛒 Shopping Cart
          </h1>

        </div>



        {
          cartItems.length === 0 ? (

            <div className="empty-cart">

              <h2>
                Cart is Empty 🛍️
              </h2>

            </div>

          )

          :

          (

            <>


              <div className="cart-list">


                {
                  cartItems.map((item)=>(

                    <div
                      key={item.id}
                      className="cart-card"
                    >


                      <div className="product-info">


                        <img
                          src={item.thumbnail}
                          alt={item.title}
                        />


                        <div>

                          <h3>
                            {item.title}
                          </h3>


                          <p className="price">
                            ₹ {item.price}
                          </p>


                          <p>
                            Qty : {item.qty || 1}
                          </p>


                          <p className="item-total">

                            Total :
                            ₹ {item.price * (item.qty || 1)}

                          </p>


                        </div>


                      </div>



                      <div className="actions">


                        <button
                          className="buy"
                          onClick={() => buyNow(item)}
                        >

                          Buy Now

                        </button>



                        <button
                          className="remove"
                          onClick={() => removeItem(item.id)}
                        >

                          Remove

                        </button>


                      </div>


                    </div>

                  ))

                }


              </div>




              <div className="total-box">


                <h2>
                  Grand Total
                </h2>


                <h2 className="grand-total">

                  ₹ {total}

                </h2>


              </div>


            </>

          )

        }


      </div>

    </>

  );

}
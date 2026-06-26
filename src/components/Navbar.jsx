import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../common/UserContext";

export default function Navbar() {

  const {
    cartItems = [],
    setIsLogin,
  } = useContext(UserContext);

  const navigate = useNavigate();


  const logout = () => {
    localStorage.setItem("isLogin", "false");
    setIsLogin(false);
    navigate("/");
  };


  return (
    <>

      <style>
        {`

        .navbar {
          width:100%;
          padding:18px 40px;
          display:flex;
          justify-content:space-between;
          align-items:center;

          background:rgba(255,255,255,.85);
          backdrop-filter:blur(15px);

          box-shadow:0 10px 30px rgba(0,0,0,.08);

          position:sticky;
          top:0;
          z-index:100;
        }


        .logo {
          font-size:30px;
          font-weight:900;

          background:linear-gradient(
            90deg,
            #2563eb,
            #9333ea
          );

          -webkit-background-clip:text;
          color:transparent;
        }


        .nav-links {
          display:flex;
          align-items:center;
          gap:30px;
        }


        .nav-link {
          text-decoration:none;
          color:#334155;
          font-size:17px;
          font-weight:700;
          transition:.3s;
        }


        .nav-link:hover {
          color:#2563eb;
          transform:translateY(-2px);
        }


        .cart {
          color:#16a34a;
        }


        .logout {
          border:none;
          padding:12px 22px;
          border-radius:12px;

          color:white;
          font-weight:800;
          cursor:pointer;

          background:linear-gradient(
            135deg,
            #ef4444,
            #b91c1c
          );

          transition:.3s;
        }


        .logout:hover {
          transform:scale(1.05);
        }


        @media(max-width:700px){

          .navbar {
            flex-direction:column;
            gap:20px;
            padding:20px;
          }

          .nav-links {
            flex-wrap:wrap;
            justify-content:center;
            gap:18px;
          }

        }

        `}
      </style>


      <header className="navbar">

        <h2 className="logo">
          MyShop
        </h2>


        <div className="nav-links">

          <Link
            to="/products"
            className="nav-link"
          >
            Products
          </Link>


          <Link
            to="/cart"
            className="nav-link cart"
          >
            🛒 Cart ({cartItems?.length || 0})
          </Link>


          <Link
            to="/profile"
            className="nav-link"
          >
            Profile
          </Link>


          <button
            onClick={logout}
            className="logout"
          >
            Logout
          </button>

        </div>

      </header>

    </>
  );
}
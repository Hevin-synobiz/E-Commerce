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
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h2 className="font-bold text-2xl text-blue-600">
        MyShop
      </h2>

      <div className="flex items-center gap-6">
        <Link
          to="/products"
          className="hover:text-blue-500 font-medium"
        >
          Products
        </Link>

        <Link
          to="/cart"
          className="hover:text-blue-500 font-medium"
        >
          🛒 Cart ({cartItems?.length || 0})
        </Link>

        <Link
          to="/profile"
          className="hover:text-blue-500 font-medium"
        >
          Profile
        </Link>

        <button onClick={logout} className=" bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
          Logout
        </button>
      </div>
    </header>
  );
}
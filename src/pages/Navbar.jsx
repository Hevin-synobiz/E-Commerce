import { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../common/Context";
import { useNavigate } from "react-router-dom";
import Login from "../auth/Login";
import MyProfile from "./Profile";


export default function Header() {
  const { islogin, setIsLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const containerRef = useRef<HTMLDivElement | null>(null);

  const store = localStorage.getItem('user');
  const userdata = JSON.parse(store)

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.setItem("isLogin", "false");
    setTimeout(() => {
    navigate("/");
    }, 1000);
  };

  const profile = () =>{
    navigate("/profile")
  }

  return (
    <header className="w-full h-[57px] bg-white border-b border-gray-200 flex items-center justify-between px-6">

      {/* Left — optional title / breadcrumb */}
      <div />

      {/* Right — Logout (ghost) and Profile dropdown */}
      <div className="flex items-center gap-4">

        {/* Ghost-style Logout button (no fill) - red text */}
        <button
          type="button"
          onClick={handleLogout}
          title="Logout"
          className="logoutButton flex items-center gap-1.5 focus:outline-none focus:ring-0 ring-0 p-1 rounded border-transparent"
        >
          {/* <LogOut className="h-5 w-5" /> */}
          <span className="text-sm font-medium hidden sm:block">Logout</span>
        </button>
      </div>
    </header>
  );
}
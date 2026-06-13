import React, { useState, useContext } from "react";
import { UserContext } from "../common/UserContext";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const { setUser } = useContext(UserContext);
  const { islogin, setIsLogin } = useContext(UserContext);
  

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const store = localStorage.getItem('user');
  const userdata = JSON.parse(store)

  const navigate = useNavigate();

  const login = () => {
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("Invalid Email Address");
      return;
    }

    if (pass.length < 4) {
      setMessage("Password must be 4 characters");
      return;
    }

    userdata.forEach(i => {
        if(i.Email == email && i.Pass == pass){
            setMessage("Login Successful");
            setIsLogin(true);
            localStorage.setItem("isLogin", "true");
            setTimeout(() => {
            navigate("/home");
            }, 1000);
        }
        else{
            setMessage("Email and Password is Wrong");
        }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>
          Login
        </h1>
        <input type="text" placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={login}
          className="w-full bg-blue-500 text-white p-3 rounded"
        >
          Login
        </button>

        <Link to="/registeruser">Register</Link>

        <p className="text-center mt-4 text-red-500">
          {message}
        </p>

      </div>

    </div>
  );
}
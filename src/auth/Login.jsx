import React, { useState, useContext } from "react";
import { UserContext } from "../common/UserContext";
import { useNavigate,Link } from "react-router-dom";


export default function Login() {
  const { setUser, setIsLogin } =
    useContext(UserContext);
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [message,setMessage] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const store = localStorage.getItem("user");

    const userdata = JSON.parse(store || "[]");
    if(!emailPattern.test(email)){
      setMessage("Invalid Email Address");
      return;
    }
    if(pass.length < 4){
      setMessage("Password must be 4 characters");
      return;
    }
    let success = false;
    userdata.forEach((i)=>{
      if(
        i.Email === email && i.Pass === pass)
        {
        success = true;
        setMessage("Login Successful");
        setUser(i);
        setIsLogin(true);
        localStorage.setItem("isLogin","true");
        setTimeout(()=>{ navigate("/home");

        },1000);
      }
    });
    if(!success){
      setMessage( "Email and Password is Wrong");
    }
  };

  return (
    <>
    <style>
    {`
    .login-page {
      min-height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      padding:30px;
      background:
      linear-gradient(
      135deg,
      #eef2ff,
      #f8fafc);
      font-family:Inter,sans-serif;
    }
    .login-card {
      width:420px;
      background:white;
      padding:35px;
      border-radius:30px;
      box-shadow:
      0 20px 50px rgba(0,0,0,.12);
      transition:.3s;
    }
    .login-card:hover {
      transform:
      translateY(-8px);
    }
    .login-title {
      text-align:center;
      font-size:42px;
      font-weight:900;
      margin-bottom:30px;
      background:
      linear-gradient(
      90deg,
      #2563eb,
      #9333ea
      );
      -webkit-background-clip:text;
      color:transparent;
    }

    .input-box {
      margin-bottom:20px;
    }

    label {
      display:block;
      margin-bottom:8px;
      font-weight:700;
      color:#334155;
    }
    input {
          width:100%;
      padding:14px;
      border-radius:15px;
      border:1px solid #cbd5e1;
      font-size:16px;
      outline:none;
      transition:.3s;
    }

    input:focus {
      border-color:#2563eb
      box-shadow: 0 0 0 3px rgba(37,99,235,.15);
    }

    .login-btn {
      width:100%;
      padding:15px;
      margin-top:10px;
      border:none;
      border-radius:15px;
      color:white;
      font-size:18px;
      font-weight:800;
      cursor:pointer;
      background:
      linear-gradient(
      135deg,
      #2563eb,
      #1d4ed8
      );
      transition:.3s;
    }
    .login-btn:hover {
      transform:
      scale(1.05);
    }

    .message {
      text-align:center;
      margin-top:18px;
      font-weight:700;
      color:#16a34a;
    }

    @media(max-width:600px){
      .login-card {
        width:100%;
        padding:25px;
      }
      .login-title {
        font-size:32px;
      }
    }
    `}

    </style>



    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">
          🔐 Login
        </h1>

        <div className="input-box">

          <label>
            Email
        </label>

          <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>
          setEmail(e.target.value)}
          />

        </div>

        <div className="input-box">
          <label>
            Password
          </label>

          <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e)=>
          setPass(e.target.value)}/>
        </div>
        <div className="link">
          <Link to='/registeruser'>
            Register
          </Link>
        </div>
        <button
        onClick={login}
        className="login-btn">
          Login
        </button>
        {
        message &&
        <p className="message">
          {message}
        </p>

        }

      </div>
    </div>
    </>

  );

}
import React, { useState, useContext } from "react";
import { UserContext } from "../common/UserContext";
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";
export default function RegisterUser() {

  const { setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dept, setDept] = useState("");
  const [pass, setPass] = useState("");

  const [message, setMessage] = useState("");

  const navigate = useNavigate();


  const register = () => {

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


    const userData = {
      Name: name,
      Email: email,
      Phone: phone,
      Dept: dept,
      Pass: pass
    };


    setUser(userData);


    localStorage.setItem(
      "user",
      JSON.stringify([userData])
    );


    setMessage("Registration Successful");


    setTimeout(() => {
      navigate("/home");
    }, 700);

  };


  return (
    <>
      <style>
        {`

        .register-page {
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:30px;
          background:linear-gradient(
            135deg,
            #eef2ff,
            #f8fafc
          );
          font-family:Inter,sans-serif;
        }


        .register-card {
          width:500px;
          background:white;
          padding:40px;
          border-radius:30px;
          box-shadow:0 20px 50px rgba(0,0,0,.12);
          transition:.3s;
        }


        .register-card:hover {
          transform:translateY(-8px);
        }


        .register-title {
          text-align:center;
          font-size:40px;
          font-weight:900;
          margin-bottom:30px;
          background:linear-gradient(
            90deg,
            #2563eb,
            #9333ea
          );
          -webkit-background-clip:text;
          color:transparent;
        }


        .input-box {
          margin-bottom:18px;
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
          outline:none;
          font-size:16px;
          transition:.3s;
        }


        input:focus {
          border-color:#2563eb;
          box-shadow:0 0 0 3px rgba(37,99,235,.15);
        }


        .submit-btn {
          width:100%;
          margin-top:10px;
          padding:15px;
          border:none;
          border-radius:15px;
          color:white;
          font-size:18px;
          font-weight:800;
          cursor:pointer;
          background:linear-gradient(
            135deg,
            #2563eb,
            #1d4ed8
          );
          transition:.3s;
        }


        .submit-btn:hover {
          transform:scale(1.05);
        }


        .message {
          text-align:center;
          margin-top:20px;
          color:#16a34a;
          font-weight:700;
        }


        @media(max-width:600px){

          .register-card {
            width:100%;
            padding:25px;
          }

          .register-title {
            font-size:32px;
          }

        }

        `}
      </style>


      <div className="register-page">

        <div className="register-card">

          <h1 className="register-title">
            📝 Registration
          </h1>


          <div className="input-box">
            <label>Name</label>

            <input
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>


          <div className="input-box">
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>


          <div className="input-box">
            <label>Password</label>

            <input
              type="password"
              value={pass}
              onChange={(e)=>setPass(e.target.value)}
              placeholder="Enter Password"
            />
          </div>


          <div className="input-box">
            <label>Phone Number</label>

            <input
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              placeholder="Enter Phone"
            />
          </div>


          <div className="input-box">
            <label>Department</label>

            <input
              value={dept}
              onChange={(e)=>setDept(e.target.value)}
              placeholder="Enter Department"
            />
          </div>

          <div className="loginlink">
            <Link to='/'>
            Login?
            </Link>
          </div>
          <button
            onClick={register}
            className="submit-btn"
          >
            Register
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
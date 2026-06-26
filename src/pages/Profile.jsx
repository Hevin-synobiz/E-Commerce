import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../common/UserContext";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [dept,setDept] = useState("");
  const [pass,setPass] = useState("");

  const [message,setMessage] = useState("");



  useEffect(() => {

    const storedUser = JSON.parse(
      localStorage.getItem("user") || "[]"
    );


    if(storedUser.length > 0){

      setName(storedUser[0].Name || "");
      setEmail(storedUser[0].Email || "");
      setPhone(storedUser[0].Phone || "");
      setDept(storedUser[0].Dept || "");
      setPass(storedUser[0].Pass || "");

    }

  },[]);





  const update = () => {

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(!emailPattern.test(email)){

      setMessage(
        "Invalid Email Address"
      );

      return;

    }


    if(pass.length < 4){

      setMessage(
        "Password must be at least 4 characters"
      );

      return;

    }



    const userData = {

      Name:name,
      Email:email,
      Phone:phone,
      Dept:dept,
      Pass:pass

    };



    setUser(userData);


    localStorage.setItem(
      "user",
      JSON.stringify([userData])
    );


    setMessage(
      "Profile Updated Successfully"
    );



    setTimeout(() => {

      navigate("/home");

    },1000);

  };




  return (

    <>

      <style>
        {`
        .profile-page {
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
        .profile-card {
          width:450px;
          background:white;
          padding:35px;
          border-radius:30px;
          box-shadow:
          0 20px 50px rgba(0,0,0,.12);
          transition:.3s;
        }

        .profile-card:hover {
          transform:translateY(-8px);
        }

        .profile-title {
          text-align:center;
          font-size:38px;
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

        .input-group {
          display:flex;
          flex-direction:column;
          gap:15px;
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
          box-shadow:
          0 0 0 3px rgba(37,99,235,.15);

        }

        .update-btn {
          width:100%;
          margin-top:20px;
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

        .update-btn:hover {
          transform:scale(1.05);
        }

        .message {
          text-align:center;
          margin-top:15px;
          color:#16a34a;
          font-weight:700;
        }

        @media(max-width:600px){

          .profile-card {
            width:100%;
            padding:25px;
          }
          .profile-title {
            font-size:30px;

          }

        }

        `}

      </style>

      <div className="profile-page">

        <div className="profile-card">
          <h2 className="profile-title">
            👤 My Profile
          </h2>
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e)=>
                setName(e.target.value)}

            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>
                setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e)=>
                setPass(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e)=>
                setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Department"
              value={dept}
              onChange={(e)=>
                setDept(e.target.value)}
            />

            <button
              onClick={update}
              className="update-btn"
            >
              Update Profile
            </button>
            {

              message &&
              <p className="message">
                {message}
              </p>
            }
          </div>
        </div>
      </div>

    </>

  );

}
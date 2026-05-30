import React, { useState } from "react";
import { useContext } from 'react' 
import { UserContext } from '../common/Context'
import { Link, useNavigate} from "react-router-dom";

export default function MyProfile() {
  const { setUser } = useContext(UserContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dept, setDept] = useState("");
  const [pass, setPass] = useState("");

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const update = () => {
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

    setUser({
      name,
      email,
      phone,
      dept,
      pass
    });

    const user = JSON.stringify([{
        "Name": name,
        "Email": email,
        "Phone": phone,
        "Dept": dept,
        "Pass": pass
    }])
    localStorage.setItem("user", user);


    setTimeout(() => {
      navigate("/home");
    }, 500);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <h2>Profile</h2>

          <div style={{ display: "flex", gap: "20px", flexDirection: "column",}}>
            <div style={{ display: "flex", gap: "40px", justifyContent: "center"}}>
              <label>Name: </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded"
              />
            </div>

            <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
              <label>Email :</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded"
              />
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <label>Password :</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="border rounded"
              />
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <label>Phone no.:</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded"
              />
            </div>

            <div style={{ display: "flex", gap: "45px", justifyContent: "center" }}>
              <label>Dept.:</label>
              <input
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="border rounded"
              />
            </div>
            <button onClick={update} className="w-full bg-blue-500 text-white rounded">update</button>
          </div>
           <p className="text-center mt-4 text-red-500">
            {message}
            </p>
        </div>
      </div>
    </>
  );
}
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../common/UserContext";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dept, setDept] = useState("");
  const [pass, setPass] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("user") || "[]"
    );

    if (storedUser.length > 0) {
      setName(storedUser[0].Name || "");
      setEmail(storedUser[0].Email || "");
      setPhone(storedUser[0].Phone || "");
      setDept(storedUser[0].Dept || "");
      setPass(storedUser[0].Pass || "");
    }
  }, []);

  const update = () => {
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("Invalid Email Address");
      return;
    }

    if (pass.length < 4) {
      setMessage("Password must be at least 4 characters");
      return;
    }

    const userData = {
      Name: name,
      Email: email,
      Phone: phone,
      Dept: dept,
      Pass: pass,
    };

    setUser(userData);

    localStorage.setItem(
      "user",
      JSON.stringify([userData])
    );

    setMessage("Profile Updated");

    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">
        <h2 className="text-3xl font-bold text-center mb-6">
          My Profile
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) =>
              setPass(e.target.value)
            }
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Department"
            value={dept}
            onChange={(e) =>
              setDept(e.target.value)
            }
            className="w-full border p-3 rounded"
          />

          <button
            onClick={update}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded"
          >
            Update Profile
          </button>

          {message && (
            <p className="text-center text-green-600">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
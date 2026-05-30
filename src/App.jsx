import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./common/Context";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Login from "./auth/Login";
import Home from "./pages/Home";
import RegisterUser from "./user/RegisterForm";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Bill from "./pages/Bill"
import MyProfile from "./pages/Profile";

function ProtectedRoute({ children, isLogin }) {
  return isLogin ? children : <Navigate to="/" replace />;
}

  
function App() {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  return (
    <UserContext.Provider value={{user, setUser, isLogin, setIsLogin}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" 
                 element={<ProtectedRoute isLogin={isLogin}>
                            <Home />
                          </ProtectedRoute>} 
          />
          <Route path="/registeruser" 
                 element={
                    <RegisterUser /> 
                 }
          />
          <Route path="/products" 
                 element={<ProtectedRoute isLogin={isLogin}>
                            <Products />
                          </ProtectedRoute>} 
          />
          <Route path="/cart" 
                 element={<ProtectedRoute isLogin={isLogin}>
                            <Cart />
                          </ProtectedRoute>} 
          />
          <Route path="/bill" 
                 element={<ProtectedRoute isLogin={isLogin}>
                            <Bill />
                          </ProtectedRoute>} 
          />
          <Route path="/profile" 
                 element={<ProtectedRoute isLogin={isLogin}>
                            <MyProfile />
                          </ProtectedRoute>} 
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App

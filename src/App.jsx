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
import Dashboard from "./pages/Dashboard";

function ProtectedRoute({ children, isLogin }) {
  return isLogin ? children : <Navigate to="/" replace />;
}

  
function App() {
  const [Item, setItem] = useState(null);
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  return (
    <UserContext.Provider value={{user, setUser, isLogin, setIsLogin, Item, setItem}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registeruser" 
                 element={
                    <RegisterUser /> 
                 }
          />
          <Route path="/home" 
                 element={<ProtectedRoute isLogin={isLogin}>
                            <Home >
                            <Dashboard />
                            </Home>
                          </ProtectedRoute>} 
          />
          <Route path="/products" 
                 element={<ProtectedRoute isLogin={isLogin}>
                            <Home>
                              <Products />
                            </Home>
                          </ProtectedRoute>} 
          />
          <Route path="/cart" 
                 element={<ProtectedRoute isLogin={isLogin}>
                          <Home>
                            <Cart />
                          </Home>
                          </ProtectedRoute>} 
          />
          <Route path="/bill" 
                 element={<ProtectedRoute isLogin={isLogin}>
                          <Home>
                            <Bill />
                          </Home>
                          </ProtectedRoute>} 
          />
          <Route path="/profile" 
                 element={<ProtectedRoute isLogin={isLogin}>
                          <Home>
                            <MyProfile />
                          </Home>
                          </ProtectedRoute>} 
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App

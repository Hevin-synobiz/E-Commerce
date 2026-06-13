import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./auth/Login";
import Home from "./pages/Home";
import RegisterUser from "./auth/RegisterForm";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Bill from "./pages/Bill";
import MyProfile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

import { UserProvider } from "./common/UserContext";

function ProtectedRoute({ children }) {
  const isLogin =
    localStorage.getItem("isLogin") === "true";

  return isLogin ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/registeruser"
            element={<RegisterUser />}
          />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home>
                  <Dashboard />
                </Home>
              </ProtectedRoute>
            }
          />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Home>
                  <Products />
                </Home>
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Home>
                  <Cart />
                </Home>
              </ProtectedRoute>
            }
          />

          <Route
            path="/bill"
            element={
              <ProtectedRoute>
                <Home>
                  <Bill />
                </Home>
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Home>
                  <MyProfile />
                </Home>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
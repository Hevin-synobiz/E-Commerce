import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  const [user, setUser] = useState({});

  const [cartItems, setCartItems] = useState([]);

  const [buyItem, setBuyItem] = useState(null);

  const addToCart = (product) => {
    const exists = cartItems.find(
      (item) => item.id === product.id
    );

    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          qty: 1,
        },
      ]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(
      cartItems.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <UserContext.Provider value={{user,setUser,isLogin,setIsLogin,cartItems,setCartItems,addToCart,removeFromCart,buyItem,setBuyItem,}}>
      {children}
    </UserContext.Provider>
  );
};
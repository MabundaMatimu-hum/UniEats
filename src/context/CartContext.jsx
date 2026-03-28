// Import React functions
import React, { createContext, useState } from "react";
// This allows any component in the application to access cart data
export const CartContext = createContext();



// This component wraps the entire application so that all pages
export const CartProvider = ({ children }) => {

  // cartItems state stores all products added to the cart
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {

    // Check if the product already exists in the cart
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {

      // If product exists, increase its quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {

      // If product does not exist, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);

    }
  };


  // Remove item completely from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };


  //  Increase item quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };


  // Decrease item quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )

        // Remove item if quantity becomes zero
        .filter((item) => item.quantity > 0)
    );
  };


  
  // Used after checkout
  const clearCart = () => {
    setCartItems([]);
  };


  // Provide cart data and functions to the entire application
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
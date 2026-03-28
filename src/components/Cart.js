// Import React and the useContext hook to access global state
import React, { useContext } from "react";
// Import CartContext which stores cart data and cart functions
import { CartContext } from "../context/CartContext";
// Import Link component to allow navigation between pages
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
// Import CSS file used to style the Cart page
import "../styles/Cart.css";



// This page displays all items the user has added to the shopping cart
function Cart() {

  // Access cart data and functions from CartContext
  const { cartItems, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (

    // Main container for the cart page
    <div className="cartPage">


      <Link to="/services" className="backButton">
        <FaArrowLeft />
      </Link>


      {/* Page title */}
      <h1>Your Cart</h1>

      {/* Conditional rendering
         If the cart is empty, show an empty cart message
      */}
      {cartItems.length === 0 ? (

        <div className="emptyCart">

          {/* Message displayed when no products exist in the cart */}
          <p>Your cart is empty!</p> <br />

          {/* Button allowing users to return to the services page and continue shopping */}
          <Link to="/services">
            <button className="shopBtn">Go Shopping</button>
          </Link>

        </div>

      ) : (

        // If items exist in the cart, display the cart content
        <>
          {cartItems.map((item) => (

            // Each cart item is displayed as a card
            <div key={item.id} className="cartItem">

              {/* PRODUCT IMAGE */}
              <img src={item.image} alt={item.name} />

              {/* PRODUCT DETAILS */}
              <div className="itemDetails">
                <h3>{item.name}</h3>
                <p className="price">R{item.price}</p>
              </div>

              {/* QUANTITY CONTROL SECTION */}
              <div className="qtyButtons">

                {/* Button to decrease product quantity */}
                <button onClick={() => decreaseQty(item.id)}>-</button>

                {/* Display current quantity */}
                <span>{item.quantity}</span>

                {/* Button to increase product quantity */}
                <button onClick={() => increaseQty(item.id)}>+</button>

              </div>

              <br />

              {/* REMOVE BUTTON
                 Allows the user to completely remove an item from the cart
              */}
              <button className="removeBtn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

              <br />

            </div>
          ))}

          <br />

          {/* CART SUMMARY SECTION */}
          <div className="cartSummary">

            {/* Display the calculated total price */}
            <h2>Total: R{totalPrice.toFixed(2)}</h2>

            <br />

            {/* Button to proceed to checkout */}
            <Link to="/checkout">
              <button className="checkoutBtn">Checkout</button><br /><br />
            </Link>

            {/* Button allowing the user to continue shopping */}
            <Link to="/services">
              <button className="shopBtn">Go Shopping</button>
            </Link>

          </div>
        </>
      )}

      <br />
    </div>
  );
}

// Export the component so it can be used in other parts of the application
export default Cart;
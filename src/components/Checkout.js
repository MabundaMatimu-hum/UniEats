// Import React and required hooks
import React, { useContext, useState } from "react";
// useNavigate is used to redirect users to another page after checkout
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
// Import CSS styling for the checkout page
import "../styles/Checkout.css";
// Import CartContext which stores cart data and functions
import { CartContext } from "../context/CartContext";


// Functional component representing the Checkout page
function Checkout() {

  // Access cart items and clearCart function from global context
  const { cartItems, clearCart } = useContext(CartContext);

  // success state is used to display confirmation message after order is placed
  const [success, setSuccess] = useState(false);

  // useNavigate hook allows programmatic navigation to another page
  const navigate = useNavigate();


  // Calculate total number of products in the cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  // Function executed when the checkout form is submitted
  const handleSubmit = (e) => {

    // Prevent default page refresh behaviour of forms
    e.preventDefault();

    // Display success message to confirm order placement
    setSuccess(true);


    // This resets the cart count back to 0
    clearCart();

    // Redirect the user to the home page after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };


  return (


    // Main checkout container
    <div className="checkout">

      <Link to="/cart" className="backButton">
        <FaArrowLeft />
      </Link>

      <h1>Checkout</h1>



      {/* Display total number of items the user is purchasing */}
      <p className="checkoutItems">
        You are checking out <strong>{totalItems}</strong> item(s)
      </p>

      {/* Conditional rendering of success message after order submission */}
      {success && (
        <div className="successMessage">
          Order placed successfully!
        </div>
      )}

      {/* Checkout form where the user enters delivery details */}
      <form className="checkoutForm" onSubmit={handleSubmit}>

        {/* Customer full name input */}
        <input type="text" placeholder="Full Name" required />

        {/* Email address input */}
        <input type="email" placeholder="Email Address" required />

        {/* Delivery address input */}
        <input type="text" placeholder="Delivery Address" required />

        {/* Payment method selection */}
        <select>
          <option>Cash on Delivery</option>
          <option>Card Payment</option>
        </select>

        {/* Button to submit the order */}
        <button type="submit" className="checkoutBtn">
          Place Order
        </button>

      </form>

    </div>
  );
}

// Export component so it can be used in routing (App.js)
export default Checkout;
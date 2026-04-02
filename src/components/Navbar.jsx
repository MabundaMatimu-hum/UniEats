
// useContext allows access to global cart data
import React, { useState, useContext } from 'react'
// Import Link for client-side navigation between pages
import { Link } from "react-router-dom";
// Import Material UI icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";
// Import CartContext to access cart items stored globally
import { CartContext } from "../context/CartContext";
// Import CSS styling for the navigation bar
import "../styles/Navbar.css";


// Functional component representing the website navigation bar
function Navbar() {

  // State variable used to open or close the mobile navigation menu
  const [openLinks, setOpenLinks] = useState(false);

  // Function that toggles the mobile navigation menu
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  // Access cart items from CartContext
  const { cartItems } = useContext(CartContext);


  // reduce() loops through each cart item and sums their quantities
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (

    // Main navigation container
    <div className="navbar">

      {/* LEFT SIDE OF NAVBAR (Logo + Mobile Links) */}
      <div className="leftSide" id={openLinks ? "open" : "closed"}>

        {/* Logo linking to homepage */}
        <Link to="/" className="logo">
          <span className="uni">Uni</span><span className="eats">Eats</span>
        </Link>

        {/* Hidden navigation links used in mobile view */}
        <div className="hiddenLinks">

          <Link to="/" onClick={() => setOpenLinks(false)}> Home</Link>
          <Link to="/about" onClick={() => setOpenLinks(false)}> About</Link>
          <Link to="/services" onClick={() => setOpenLinks(false)}> Services</Link>
          <Link to="/blog" onClick={() => setOpenLinks(false)}> Blog</Link>
          <Link to="/contact" onClick={() => setOpenLinks(false)}> Contact</Link>

          <Link to="/cart" className="cart" onClick={() => setOpenLinks(false)}>
            <ShoppingCartIcon />
            <span className="cart-count">{totalItems}</span>
          </Link>

        </div>
      </div>


      {/* RIGHT SIDE OF NAVBAR (Desktop Links + Cart + Menu Button) */}
      <div className="rightSide">

        {/* Main navigation links */}
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/services"> Services</Link>
        <Link to="/blog"> Blog</Link>
        <Link to="/contact"> Contact</Link>


        {/* CART ICON SECTION */}
        <Link to="/cart" className="cart">

          {/* Cart icon */}
          <ShoppingCartIcon />

          {/* Cart item count badge */}
          <span className="cart-count">{totalItems}</span>

        </Link>


        {/* Mobile hamburger menu button */}
        <button onClick={toggleNavbar}>
          {openLinks ? <CloseIcon /> : <ReorderIcon />}
        </button>
      </div>

    </div>
  )
}

// Export Navbar component so it can be used in App.js
export default Navbar
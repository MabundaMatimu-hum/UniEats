// Import React and useContext hook
import React, { useContext } from "react";

// Import Link for navigation to product details page
import { Link } from "react-router-dom";

// Import CartContext which contains cart logic such as addToCart
import { CartContext } from "../context/CartContext";


// This component receives props such as id, image, name, price and description
function MenuItem({ id, image, name, price, description }) {

  // Access addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  // Object sent to cart when user clicks Add to Cart
  const item = {
    id: id,
    name: name,
    price: price,
    image: image
  };

  return (

    // Card container for displaying a food item
    <div className="foodCard">

      {/* Food image */}
      <img src={image} alt={name} />

      {/* Food name */}
      <h3>{name}</h3>

      {/* Food price */}
      <p className="price">R{price}</p>

      {/* Short description */}
      <p className="description">{description}</p>

      {/* Add to Cart Button */}
      <div className="cardButtons">

        <button className="cartBtn" onClick={() => addToCart(item)}>
          Add to Cart
        </button>

        <Link to={`/product/${id}`}>
          <button className="detailsBtn">
            View Details
          </button>
        </Link>

      </div>
    </div>
  );
}

// Export component
export default MenuItem;
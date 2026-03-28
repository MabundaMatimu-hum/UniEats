import React from "react";
import { useParams, Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";
import { menuList } from "../components/menuList";
import "../styles/productDetails.css";

function ProductDetails() {

  const { id } = useParams();

  const product = menuList.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (

    <div className="product-details">

      {/* Header Section */}
      <div className="productHeader">

        <Link to="/services" className="backButton">
          <FaArrowLeft />
        </Link>

        <h1 className="productTitle">Product Details</h1>

      </div>


      <div className="product-container">

        <img src={product.image} alt={product.name} />

        <div className="product-info">

          <h1>{product.name}</h1>

          <p className="price">Price: R{product.price}</p>

          <p className="description">{product.description}</p>

          <br/>

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;
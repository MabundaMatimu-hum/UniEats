import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <CartProvider>
      <div className="App">

        <Router>

          <Navbar />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* Product Details Page */}
            <Route path="/product/:id" element={<ProductDetails />} />

          </Routes>

          <Footer />

        </Router>

      </div>
    </CartProvider>
  );
}

export default App;
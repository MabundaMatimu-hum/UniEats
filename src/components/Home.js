// Import React library to create the component
import React from 'react'
// This allows navigation to another page without refreshing the browser
import { Link } from "react-router-dom";
// Import CSS file used to style the Home page
import "../styles/Home.css";



// This page introduces the platform and encourages users to explore the menu
function Home() {
  return (

    // Main container for the homepage
    <div className="home">
    
      
      <div className="headerContainer">

      {/* Main title welcoming users to the platform */}
      <h1>Welcome to UniEats</h1>

      {/* Introductory description explaining the purpose of the service */}
      <p>
        UniEats is a 24/7 online food service designed for university students.<br/>
        Our goal is to help students stay focused on their studies while we provide<br/> 
        affordable and healthy meals anytime.
      </p>

      <br/>
      <br/>

      {/* Additional description encouraging users to explore the menu */}
      <p>
        Browse our menu and order delicious food quickly and easily.
      </p>
       
     
      <Link to="/services">

        {/* Call-to-action button encouraging users to place an order */}
        <button>ORDER NOW</button>

      </Link>

      </div>
    </div>
  )
}

// Export component so it can be used in the application's routing system
export default Home
// Import React library to create the component
import React from 'react'
// Import CSS file used to style the footer
import '../styles/Footer.css'

// Import social media icons from Material UI icon library
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'



// The footer contains social media links, navigation links, and copyright information
function Footer() {
  return (

    // Main footer container
    <div className="footer">


      <div className="footer-section">

        {/* Section heading */}
        <h4>Follow Us</h4>

        {/* Social media icons container */}
        <div className="social-links">

          {/* Instagram icon */}
          <InstagramIcon />

          {/* Facebook icon */}
          <FacebookIcon />

          {/* Twitter icon */}
          <TwitterIcon />

          {/* LinkedIn icon */}
          <LinkedInIcon />

        </div>

      </div>



      <div className="footer-sections">

        {/* Section heading */}
        <h4>Quick Links</h4>

        {/* Navigation list for important pages */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

      </div>


      {/* SECTION 3: COPYRIGHT INFORMATION */}
      <div className="footer-bottom">

        {/* Copyright text */}
        <p>&copy; 2026 UniEats.All Rights Reserved.</p>

        {/* Last updated date */}
        <p>Last Updated: March 2026</p>

      </div>

    </div>
  )
}

// Export component so it can be used in other parts of the application
export default Footer
// Import React library to create the component
import React from 'react'
// Import CSS file that styles the Contact page
import "../styles/Contact.css";



// This page allows users to send messages or inquiries to the UniEats platform
function Contact() {
    return (

        // Main container that centers the contact form on the page
        <div className="contact">

            {/* Card container that holds the form and title */}
            <div className="side">

                {/* Page heading */}
                <h1>Contact Us</h1>

                {/* Contact form
                method="POST" indicates that the form will send data to a server when it is submitted
            */}
                <form id="contact-form" method="POST">

                    {/* Full Name Input Field */}
                    <label htmlFor='name'>Full Name: </label>
                    <input name="name" placeholder="Enter full name..." type="text"
                    />

                    {/* Email Address Input Field */}
                    <label htmlFor='email'>Email: </label>
                    <input name="email" placeholder="Enter email..." type="email"
                    />

                    {/* Message Input Field
                    textarea allows the user to type a longer message
                */}
                    <label htmlFor='message'>Message: </label>
                    <textarea rows="7" placeholder="Enter message" name="message" required></textarea>

                    {/* Submit button used to send the message */}
                    <button type="submit">
                        Send Message
                    </button>

                </form>
            </div>

        </div>
    )
}

// Export the component so it can be used in routing (App.js)
export default Contact
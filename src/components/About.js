// Import React library which allows us to create components
import React from 'react'
// Import the CSS file used to style the About page
import "../styles/About.css";


// Functional component that represents the About page of the UniEats application
function About() {


    return (


        // This container holds all content related to the page
        <div className="about">

            {/* Container used to control the width and layout of the content */}
            <div className="container">

                {/* Main heading of the page */}
                <h1>About Us</h1>

                {/* Paragraphs explaining the purpose of UniEats */}
                <p>
                    UniEats is a student centric food delivery service that is aimed at offering fast, dependable,
                    and easy meal options to students at the university. We are familiar with the requirements of student.
                    business and strives to make life smoother by offering available food services.
                </p>


                <p>
                    Many students face challenges balancing academic responsibilities with daily tasks such
                    as cooking and meal preparation. UniEats meets this requirement by providing a broad assortment of.
                    convenient, healthy, and tasty to eat food, 24 hours a day, to fit every.
                </p>


                <p>
                    UniEats is a company that values convenience and receives quality and connects students to trusted food.
                    providers, and providing a smooth ordering process throughout. Our platform is
                    created to save time, decrease stress, and increase the total student lifestyle.
                </p>


                <p>
                    Our mission is to make food easily accessible to the students in order to enable them.
                    prioritize what is really important their academic achievements, personal development, and health.
                </p>

            </div>
        </div>
    )
}

// Export the component so it can be used in other parts of the application
export default About
// Import React library
import React from 'react'
// Import menu data array containing all food items
import { menuList } from '../components/menuList'
// Import MenuItem component used to display each food card
import MenuItem from '../components/MenuItem'
// Import CSS styling for this page
import "../styles/Services.css";



// This page displays all available food items from UniEats
function Services() {

  return (

    // Main container for the services page
    <div className="services">

      {/* Page title */}
      <h1 className="servicesTitle">Our Services</h1>

      {/* Container holding all food cards */}
      <div className="menuList">

        {/* map() loops through the menuList array. */}
        {menuList.map((menuItem) => {
          return (
            <MenuItem
              key={menuItem.id}
              id={menuItem.id}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              description={menuItem.description}
            />
          );
        })}

      </div>

    </div>
  )
}

// Export component so it can be used inside App.js routing
export default Services
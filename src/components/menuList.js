// Import images used for the food items displayed in the menu

import Kota from "../image/kota.jpg";
import HotDogs from "../image/Hot-Dogs.jpg";
import LoadedFries from "../image/Loaded-fries.jpg";
import Donuts from "../image/Donuts.jpg";
import Muffins from "../image/Muffins.jpg";
import Pancakes from "../image/Pancakes.jpg";
import Waffles from "../image/waffles.jpg";
import BaconEgg from "../image/bacon-Egg-rolls.jpg";
import Burger from "../image/Burgers.jpg";
import Chips from "../image/Chips-fries.jpg";
import FriedChicken from "../image/Fried-chicken.jpg";
import Salad from "../image/Salad.jpg";
import Sandwiches from "../image/Sandwiches.jpg";
import Pasta from "../image/Pasta.jpg";
import Phuthu from "../image/Phuthus.jpg";
import RiceChicken from "../image/Rice-chicken.jpg";
import Pap from "../image/Paps.jpg";
import PapSteak from "../image/Pap-Stakes.jpg";
import PapSausage from "../image/pap-sauseg.webp";
import PapChicken from "../image/Pap-Chicken.webp";
import PapChickenStomach from "../image/Pap-Chicken-Stomack.jpg";
import Smoothies from "../image/Smoothies.jpg";
import SoftDrinks from "../image/Soft-Drink.jpg";
import Tea from "../image/Tea.jpg";
import Water from "../image/Water.webp";
import Juice from "../image/Juice.webp";
import Coffee from "../image/Coffees.jpg";
import EnergyDrinks from "../image/Energy-Drink.png";
import Bioplus from "../image/Bioplus.webp";
import Banana from "../image/Bananas.jpg";
import Apple from "../image/Apple.jpg";
import Grapes from "../image/Grapes.jpg";
import Orange from "../image/Oranges.jpg";
import NikNaks from "../image/Nik-Nak.webp";
import Simba from "../image/Simbas.jpg";
import Doritos from "../image/Dorito.jpg";
import Popcorn from "../image/Popcorn.jpg";
import Chickenricejuice from "../image/Chicken-rice-juice.jpg";
import Burgerchipsdrink from "../image/Burger-chips-drink.jpg";
import Sweets from "../image/Sweets.jpg";


// menuList array stores all available food items for the UniEats platform

export const menuList = [

  // Fast Food
  {
    id: 1,
    name: "Kota",
    image: Kota,
    price: 30.90,
    category: "Fast Food",
    description: "Popular South African street food made with a quarter loaf filled with chips, sausage and sauces."
  },

  {
    id: 2,
    name: "Hot Dogs",
    image: HotDogs,
    price: 10.90,
    category: "Fast Food",
    description: "Grilled sausage served in a soft bun with tomato sauce and mustard."
  },

  {
    id: 3,
    name: "Loaded Fries",
    image: LoadedFries,
    price: 25.90,
    category: "Fast Food",
    description: "Crispy fries topped with melted cheese and delicious toppings."
  },

  // Bakery
  {
    id: 4,
    name: "Donuts",
    image: Donuts,
    price: 10.90,
    category: "Bakery",
    description: "Soft sweet donuts coated with sugar and delicious glaze."
  },

  {
    id: 5,
    name: "Muffins",
    image: Muffins,
    price: 5.90,
    category: "Bakery",
    description: "Freshly baked muffins perfect for breakfast or snacks."
  },

  {
    id: 6,
    name: "Pancakes",
    image: Pancakes,
    price: 7.90,
    category: "Bakery",
    description: "Fluffy pancakes served with syrup and toppings."
  },

  {
    id: 7,
    name: "Waffles",
    image: Waffles,
    price: 7.90,
    category: "Bakery",
    description: "Golden crispy waffles served with syrup or chocolate sauce."
  },

  // Breakfast
  {
    id: 8,
    name: "Bacon & Egg Rolls",
    image: BaconEgg,
    price: 25.90,
    category: "Breakfast",
    description: "Fresh roll filled with crispy bacon and fried egg."
  },

  // Burgers
  {
    id: 9,
    name: "Burger",
    image: Burger,
    price: 30.90,
    category: "Fast Food",
    description: "Juicy grilled burger with fresh lettuce, cheese and sauce."
  },

  {
    id: 10,
    name: "Chips",
    image: Chips,
    price: 30.90,
    category: "Fast Food",
    description: "Golden crispy potato chips served hot."
  },

  // Combo Meals
  {
    id: 11,
    name: "Burger & Chips & Drink",
    image: Burgerchipsdrink,
    price: 40.90,
    category: "Combo",
    description: "Complete meal with burger, chips and a refreshing drink."
  },

  {
    id: 12,
    name: "Chicken & Rice & Juice",
    image: Chickenricejuice,
    price: 30.90,
    category: "Combo",
    description: "Tasty chicken served with rice and fresh juice."
  },

  // Main Meals
  {
    id: 13,
    name: "Fried Chicken",
    image: FriedChicken,
    price: 10.90,
    category: "Main Meal",
    description: "Crispy fried chicken seasoned with delicious spices."
  },

  {
    id: 14,
    name: "Salad",
    image: Salad,
    price: 5.90,
    category: "Healthy",
    description: "Fresh vegetable salad with healthy ingredients."
  },

  {
    id: 15,
    name: "Sandwiches",
    image: Sandwiches,
    price: 15.90,
    category: "Snack",
    description: "Fresh sandwiches filled with tasty ingredients."
  },

  {
    id: 16,
    name: "Pasta",
    image: Pasta,
    price: 10.90,
    category: "Main Meal",
    description: "Delicious pasta served with rich sauce."
  },

  {
    id: 17,
    name: "Phuthu",
    image: Phuthu,
    price: 5.90,
    category: "Traditional",
    description: "Traditional South African crumbly maize meal."
  },

  {
    id: 18,
    name: "Rice & Chicken",
    image: RiceChicken,
    price: 25.90,
    category: "Main Meal",
    description: "Rice served with delicious chicken gravy."
  },

  // Traditional Meals
  {
    id: 19,
    name: "Pap",
    image: Pap,
    price: 5.90,
    category: "Traditional",
    description: "Classic South African pap made from maize meal."
  },

  {
    id: 20,
    name: "Pap & Steak",
    image: PapSteak,
    price: 30.90,
    category: "Traditional",
    description: "Pap served with grilled steak and sauce."
  },

  {
    id: 21,
    name: "Pap & Sausage",
    image: PapSausage,
    price: 25.90,
    category: "Traditional",
    description: "Pap served with grilled sausage."
  },

  {
    id: 22,
    name: "Pap & Chicken",
    image: PapChicken,
    price: 25.90,
    category: "Traditional",
    description: "Pap served with delicious chicken gravy."
  },

  {
    id: 23,
    name: "Pap & Chicken Gizzards",
    image: PapChickenStomach,
    price: 20.90,
    category: "Traditional",
    description: "Pap served with chicken gizzards."
  },

  // Drinks
  {
    id: 24,
    name: "Smoothies",
    image: Smoothies,
    price: 10.90,
    category: "Drinks",
    description: "Fresh fruit smoothies blended for a refreshing taste."
  },

  {
    id: 25,
    name: "Soft Drinks",
    image: SoftDrinks,
    price: 10.90,
    category: "Drinks",
    description: "Cold refreshing soft drinks."
  },

  {
    id: 26,
    name: "Coffee",
    image: Coffee,
    price: 12.90,
    category: "Drinks",
    description: "Hot brewed coffee perfect for mornings."
  },

  {
    id: 27,
    name: "Tea",
    image: Tea,
    price: 10.90,
    category: "Drinks",
    description: "Hot tea served fresh."
  },

  {
    id: 28,
    name: "Water",
    image: Water,
    price: 7.90,
    category: "Drinks",
    description: "Pure bottled drinking water."
  },

  {
    id: 29,
    name: "Juice",
    image: Juice,
    price: 10.90,
    category: "Drinks",
    description: "Fresh fruit juice full of vitamins."
  },

  {
    id: 30,
    name: "Energy Drinks",
    image: EnergyDrinks,
    price: 10.90,
    category: "Drinks",
    description: "Energy drink to boost energy levels."
  },

  {
    id: 31,
    name: "Bioplus",
    image: Bioplus,
    price: 10.90,
    category: "Drinks",
    description: "Popular South African energy drink."
  },

  // Fruits
  {
    id: 32,
    name: "Banana",
    image: Banana,
    price: 2.90,
    category: "Fruit",
    description: "Fresh banana rich in potassium."
  },

  {
    id: 33,
    name: "Apple",
    image: Apple,
    price: 2.90,
    category: "Fruit",
    description: "Crisp and juicy fresh apple."
  },

  {
    id: 34,
    name: "Grapes",
    image: Grapes,
    price: 6.90,
    category: "Fruit",
    description: "Sweet and fresh grapes."
  },

  {
    id: 35,
    name: "Orange",
    image: Orange,
    price: 2.90,
    category: "Fruit",
    description: "Fresh orange packed with vitamin C."
  },

  // Snacks
  {
    id: 36,
    name: "Nik Naks",
    image: NikNaks,
    price: 7.90,
    category: "Snack",
    description: "Crunchy maize snack loved by many."
  },

  {
    id: 37,
    name: "Simba",
    image: Simba,
    price: 15.90,
    category: "Snack",
    description: "Popular potato chips snack."
  },

  {
    id: 38,
    name: "Doritos",
    image: Doritos,
    price: 15.90,
    category: "Snack",
    description: "Crunchy tortilla chips with bold flavor."
  },

  {
    id: 39,
    name: "Popcorn",
    image: Popcorn,
    price: 8.90,
    category: "Snack",
    description: "Light and crunchy popcorn snack."
  },

  {
    id: 40,
    name: "Sweets",
    image: Sweets,
    price: 5.90,
    category: "Snack",
    description: "Assorted sweet candies."
  }

];
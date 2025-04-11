import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import product21 from "../assets/tiramisu.jpg";
import product22 from "../assets/Herbed-Garlic-Bread.jpg";
import product23 from "../assets/pavlova.jpg";
import product24 from "../assets/Apple-Strudel.jpeg";
const productData = [
    {
      _id: "1",
      name: "Pancakes with Honey",
      category: "bestseller",
      price: 399,
      image: product1,
      description: "Buttery, flaky croissant filled with rich chocolate",
      rating: 4.8
    },
    {
      _id: "2",
      name: "crème Caramel",
      category: "bread",
      price: 549,
      image: product2,
      description: "Traditional sourdough with a perfect crust",
      rating: 4.7
    },
    {
      _id: "3",
      name: "Strawberry Roulade",
      category: "bestseller",
      price: 299,
      image: product3,
      description: "Moist muffin packed with juicy blueberries",
      rating: 4.5
    },
    {
      _id: "4",
      name: "Chocolate croissants",
      category: "pastry",
      price: 349,
      image: product4,
      description: "Soft roll with cinnamon swirl and cream cheese frosting",
      rating: 4.9
    },
    {
      _id: "5",
      name: "Cherry topped cupcake",
      category: "bestseller",
      price: 499,
      image: product5,
      description: "Handcrafted Cherry topped cupcake with perfect crust",
      rating: 4.6
    },
    {
      _id: "6",
      name: "Apple Pie",
      category: "dessert",
      price: 699,
      image: product6,
      description: "Classic apple pie with flaky crust",
      rating: 4.7
    },
    {
      _id: "7",
      name: "Cheese Danish",
      category: "bestseller",
      price: 329,
      image: product7,
      description: "Flaky pastry with sweet cheese filling",
      rating: 4.4
    },
    {
      _id: "8",
      name: "French Macarons",
      category: "dessert",
      price: 199,
      image: product8,
      description: "Assorted flavors of delicate French macarons",
      rating: 4.8
    },
    
    {
      _id:"9",
      name:"Tiramisu",
      category:"pastry",
      price:
      350,
      image: product21,
      description:"Classic Italian dessert with layers of coffee and mascarpone",
      rating:4.9 },

      {
        _id: "10",
        name: "Herbed Garlic Bread",
        category: "bread",
        price: 299,
        image: product22,
        description: "Freshly baked bread topped with a blend of herbs and garlic, perfect for dipping.",
        rating: 4.6
      },
      {
        _id: "11",
        name: "Pavlova",
        category: "pastry",
        price: 399,
        image: product23,
        description: "A light meringue dessert topped with whipped cream and fresh seasonal fruits.",
        rating: 4.9
      },
      {
        _id: "12",
        name: "Apple Strudel",
        category: "bread",
        price: 349,
        image: product24,
        description: "A delightful pastry filled with spiced apples and raisins, wrapped in flaky dough.",
        rating: 4.7
      }
      
      
      
    ];

export default productData;



/*# Database connection MONGO_URI=mongodb://localhost:27017/MyBakeryDB   # Server port PORT=5000  # Authentication secret key (used for JWT tokens) JWT_SECRET=your_secret_key  # Stripe API Secret Key (Replace with your actual Stripe secret key) STRIPE_SECRET_KEY=your_stripe_secret_key  # Frontend URL (Update if deployed) FRONTEND_URL=http://localhost:3000  REACT_APP_SERVER_DOMAIN=http://localhost:5000, users and products are only showing in mongodb compass, What other endpoints do you need besides login/signup: there are features in my frontend like newsletter subscription and contact us page additionally.*/
const User = require("./observers/User");
const ProductFactory = require("./factories/ProductFactory");
const ShoppingCart = require("./modals/ShoppingCart");
const OrderController = require("./controllers/OrderController");

// Create products using the factory
const product1 = ProductFactory.createProduct("P1", "Laptop", 1000);
const product2 = ProductFactory.createProduct("P2", "Phone", 500);

// Create a shopping cart (Singleton)
const cart = new ShoppingCart();
cart.addItem(product1);
cart.addItem(product2);
console.log("Cart Total:", cart.getTotal());

// Create users (Observers)
const user1 = new User("Alice");
const user2 = new User("Bob");
OrderController.addUser(user1);
OrderController.addUser(user2);

// Create an order
const order = OrderController.createOrder(cart.items);

// Update order status
order.updateStatus("Shipped");
order.updateStatus("Delivered");
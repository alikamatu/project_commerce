const OrderController = require("../controllers/OrderController");

// Order Model
class Order {
    constructor(id, items) {
        this.id = id;
        this.items = items;
        this.status = "Pending";
    }

    placeOrder() {
        this.status = "Placed";
        // Notify observers (users) about the order status
        OrderController.notifyUsers(this);
    }

    updateStatus(status) {
        this.status = status;
        // Notify observers (users) about the order status
        OrderController.notifyUsers(this);
    }
}

module.exports = Order;
class OrderController {
    static users = [];

    static addUser(user) {
        this.users.push(user);
    }

    static notifyUsers(order) {
        this.users.forEach((user) => user.update(order));
    }

    static createOrder(items) {
        const Order = require("../modals/Order");
        const order = new Order(`ORD${Date.now()}`, items);
        order.placeOrder();
        return order;
    }
}

module.exports = OrderController;